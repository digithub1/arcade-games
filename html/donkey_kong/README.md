# 🦍 Modern Neon Kong Remake

**A sleek, neon-inspired reimagining of the classic arcade platformer.**

Experience the nostalgia of Donkey Kong with a modern twist. This project transforms the 1981 classic into a vibrant, synth-filled arcade experience, built from the ground up with vanilla web technologies. Featuring responsive controls, glassmorphic UI, and real-time synthesized sound effects, "Neon Kong" brings the golden age of arcades into the modern web era.

## 🚀 Demo
Play the game live: **[https://alfredang.github.io/donkey-kong-game/](https://alfredang.github.io/donkey-kong-game/)**

## 🗂️ File Structure
```
/index.html         # Main entry point and game screens
/css/
  └── style.css      # Neon-arcade styles and animations
/javascript/
  └── game.js       # Core game engine and logic
/assets/
  └── images/       # Game sprites (Player, Kong, Barrels)
/assets/
  └── sounds/       # Sound assets (SFX)
```

## 🎮 Controls
- **WASD / Arrows**: Move and Climb
- **Space**: Jump
- **P**: Pause

## 🛠️ Tech Stack
- HTML5 Canvas
- Vanilla JavaScript
- CSS3 (Neon Effects)
- Web Audio API (Synth SFX)

## 🛠️ Getting Started

### 1. Clone and Run Locally
To run the game directly in your browser:
```bash
git clone https://github.com/alfredang/donkey-kong-game.git
cd donkey-kong-game
# Open index.html in your preferred browser
open index.html
```

### 2. Run with Docker (from Docker Hub)
Pull the pre-built image and run it:
```bash
docker pull tertiaryinfotech/dockey-kong-game:latest
docker run -d -p 8080:80 tertiaryinfotech/dockey-kong-game:latest
```
Access the game at `http://localhost:8080`.

### 3. Build and Run Local Docker Image
Build the image locally and start the container:
```bash
docker build -t neon-kong-local .
docker run -d -p 8080:80 neon-kong-local
```
Access the game at `http://localhost:8080`.

