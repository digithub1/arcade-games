




class BirdSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.birds = [];
        this.lastSpawnTime = 0;
        this.spawnInterval = 25000; 
        this.nextSpawnInterval = this.getRandomSpawnInterval();
        
        
        this.birdTypes = [
            { color: '#5d4037', size: 24, wingSpeed: 100 }, 
            { color: '#1565c0', size: 28, wingSpeed: 120 }, 
            { color: '#c62828', size: 26, wingSpeed: 90 }  
        ];
    }
    
    getRandomSpawnInterval() {
        return 25000 + Math.random() * 20000; 
    }
    
    update(deltaTime) {
        const currentTime = Date.now();
        
        
        if (currentTime - this.lastSpawnTime > this.nextSpawnInterval) {
            this.spawnBird();
            this.lastSpawnTime = currentTime;
            this.nextSpawnInterval = this.getRandomSpawnInterval();
        }
        
        
        for (let i = this.birds.length - 1; i >= 0; i--) {
            const bird = this.birds[i];
            
            
            bird.x += bird.speedX * deltaTime / 1000;
            bird.y += bird.speedY * deltaTime / 1000;
            
            
            bird.wavePhase += bird.waveSpeed * deltaTime / 1000;
            bird.y += Math.sin(bird.wavePhase) * 0.5;
            
            
            bird.wingFrame += deltaTime;
            if (bird.wingFrame > bird.wingSpeed) {
                bird.wingFrame = 0;
                bird.wingState = (bird.wingState + 1) % 3; 
            }
            
            
            if (bird.x > this.canvas.width + 50 || bird.x < -50 ||
                bird.y > this.canvas.height + 50 || bird.y < -50) {
                this.birds.splice(i, 1);
            }
        }
    }
    
    spawnBird() {
        const type = this.birdTypes[Math.floor(Math.random() * this.birdTypes.length)];
        const fromLeft = Math.random() > 0.5;
        
        const bird = {
            x: fromLeft ? -50 : this.canvas.width + 50,
            y: 50 + Math.random() * (this.canvas.height - 200),
            speedX: fromLeft ? (80 + Math.random() * 40) : -(80 + Math.random() * 40),
            speedY: (Math.random() - 0.5) * 20,
            wavePhase: Math.random() * Math.PI * 2,
            waveSpeed: 2 + Math.random() * 2,
            wingFrame: 0,
            wingState: 0,
            wingSpeed: type.wingSpeed,
            size: type.size,
            color: type.color,
            type: type
        };
        
        this.birds.push(bird);
    }
    
    draw(ctx) {
        this.birds.forEach(bird => this.drawBird(ctx, bird));
    }
    
    drawBird(ctx, bird) {
        ctx.save();
        ctx.translate(bird.x, bird.y);
        
        
        if (bird.speedX < 0) {
            ctx.scale(-1, 1);
        }
        
        
        const wingScales = [0.6, 1, 0.6]; 
        const wingScale = wingScales[bird.wingState];
        
        
        ctx.fillStyle = bird.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, bird.size * 0.6, bird.size * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();
        
        
        ctx.beginPath();
        ctx.arc(bird.size * 0.4, -bird.size * 0.2, bird.size * 0.25, 0, Math.PI * 2);
        ctx.fill();
        
        
        ctx.fillStyle = '#ffa000';
        ctx.beginPath();
        ctx.moveTo(bird.size * 0.6, -bird.size * 0.2);
        ctx.lineTo(bird.size * 0.8, -bird.size * 0.1);
        ctx.lineTo(bird.size * 0.6, 0);
        ctx.fill();
        
        
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(bird.size * 0.45, -bird.size * 0.25, 2, 0, Math.PI * 2);
        ctx.fill();
        
        
        ctx.fillStyle = this.lightenColor(bird.color, 20);
        ctx.save();
        ctx.scale(1, wingScale);
        ctx.beginPath();
        ctx.ellipse(-bird.size * 0.1, -bird.size * 0.1, bird.size * 0.5, bird.size * 0.15, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        
        ctx.fillStyle = this.darkenColor(bird.color, 20);
        ctx.beginPath();
        ctx.moveTo(-bird.size * 0.5, 0);
        ctx.lineTo(-bird.size * 0.8, -bird.size * 0.2);
        ctx.lineTo(-bird.size * 0.8, bird.size * 0.2);
        ctx.fill();
        
        ctx.restore();
    }
    
    lightenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255))
            .toString(16).slice(1);
    }
    
    darkenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        return '#' + (0x1000000 + (R > 0 ? R : 0) * 0x10000 +
            (G > 0 ? G : 0) * 0x100 +
            (B > 0 ? B : 0))
            .toString(16).slice(1);
    }
    
    reset() {
        this.birds = [];
        this.lastSpawnTime = 0;
        this.nextSpawnInterval = this.getRandomSpawnInterval();
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = BirdSystem;
}
