# Merapi Ridge Run

An original chase-view flight game. Fly a small red prop plane down a river
valley in Java, Indonesia — between the smoking cone of Mount Merapi and
green rice-field terraces — thread 9 glowing rings, dodge the ridge towers,
and put it down on Runway 09 before the clock runs out.

## How to play

Open `game/index.html` in a desktop browser. No network, no build step,
no install — everything is drawn on canvas and every sound is synthesised.

- Press **Enter** or click to take off.
- Fly through the glowing rings: **+100 points and +6 seconds** each.
- Reach the runway at the end of the valley (12,000 m) low and slow to land
  and bank a **+500 landing bonus**.
- Hit a tower, the mountainside, or overshoot the runway and the flight ends.
- The clock starts at 95 seconds — rings are the only way to buy more time.

## Controls

| Key | Action |
| --- | --- |
| W / S | Throttle up / down |
| ↑ / ↓ | Climb / descend |
| A / D or ← / → | Steer (bank and turn) |
| Mouse | Steer by position |
| Enter / click | Start / fly again |
| R | Restart |
| P | Pause |
| M | Mute |

The HUD shows speed (kt), altitude (ft), heading, compass strip, score,
rings, timer, throttle gauge, altitude tape, and distance to the runway.

## Tech

Pure HTML5 canvas 2D + WebAudio (engine hum, ring chimes, crash noise).
Screenshots under `screenshots/` are real renders of this game's own code,
staged with `?shot=start|cover|play|end`.
