// Merapi Ridge Run — make.fun entry hand-in program (Node 22, stdlib only).
//
// The game lives in this repo's game/ folder: plain static files that a
// desktop browser opens and plays offline (one self-contained index.html,
// no libraries, no network requests). This program copies game/ and
// screenshots/ from beside itself into the output directory and writes
// /output/dossier.json, the summary the judge reads, using the vendored
// make.fun library. Paths resolve from this file's own location, and
// MAKEFUN_OUTPUT_DIR stands in for /output outside the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-game.ts";

const here = fileURLToPath(new URL(".", import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(out, { recursive: true });
cpSync(join(here, "game"), join(out, "game"), { recursive: true });
mkdirSync(join(out, "screenshots"), { recursive: true });
if (existsSync(join(here, "screenshots"))) {
  cpSync(join(here, "screenshots"), join(out, "screenshots"), { recursive: true });
}

// The scorer's own caps: text_max_bytes shapes the dossier text; the rest
// refuse an entry the scorer would refuse (over 4 screenshots, one over
// 256 KiB, over 993 files or 48 MiB in game/, or a game/ path over
// 1000 bytes).
writeFileSync(
  join(out, "dossier.json"),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);
