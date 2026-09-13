


class Projectile {
    constructor(x, y, target, damage, speed = 8, isCrit = false) {
        this.x = x;
        this.y = y;
        this.target = target;
        this.damage = damage;
        this.speed = speed;
        this.isCrit = isCrit;
        this.radius = 4;
        this.markedForDeletion = false;
        this.trail = []; 
        this.maxTrailLength = 5;
        
        
        this.color = isCrit ? '#ff0000' : '#f1c40f';
        this.glowColor = isCrit ? '#ff5555' : '#f39c12';
    }

    update() {
        const gameSpeed = (typeof Game !== 'undefined' && Game.gameSpeed) ? Game.gameSpeed : 1;
        
        
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrailLength) {
            this.trail.shift();
        }

        if (!this.target || this.target.markedForDeletion) {
            this.markedForDeletion = true;
            return;
        }

        
        const dx = this.target.x - this.x;
        const dy = this.target.y - this.y;
        
        
        const distSq = dx * dx + dy * dy;
        const adjustedSpeed = this.speed * gameSpeed;
        const speedSq = adjustedSpeed * adjustedSpeed;

        if (distSq < speedSq) {
            
            const result = this.target.takeDamage(this.damage);
            this.markedForDeletion = true;
            
            
            Game.createHitEffect(this.x, this.y, this.isCrit);
            
            
            if (result && result.killed) {
                Game.onEnemyKilled(result.reward);
            }
        } else {
            
            const distance = Math.sqrt(distSq);
            this.x += (dx / distance) * adjustedSpeed;
            this.y += (dy / distance) * adjustedSpeed;
        }
    }

    draw(ctx) {
        
        ctx.save();
        for (let i = 0; i < this.trail.length; i++) {
            const alpha = (i / this.trail.length) * 0.5;
            const size = this.radius * (i / this.trail.length);
            
            ctx.beginPath();
            ctx.arc(this.trail[i].x, this.trail[i].y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(241, 196, 15, ${alpha})`;
            ctx.fill();
        }
        ctx.restore();

        
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.glowColor;
        ctx.fill();
        ctx.restore();
    }
}




class HitEffect {
    constructor(x, y, isCrit = false) {
        this.x = x;
        this.y = y;
        this.isCrit = isCrit;
        this.radius = 5;
        this.maxRadius = isCrit ? 30 : 15;
        this.alpha = 1;
        this.markedForDeletion = false;
        this.particles = [];
        
        
        const particleCount = isCrit ? 12 : 6;
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 / particleCount) * i;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * (Math.random() * 3 + 2),
                vy: Math.sin(angle) * (Math.random() * 3 + 2),
                life: 1
            });
        }
    }

    update() {
        
        this.radius += 1;
        this.alpha -= 0.05;
        
        if (this.alpha <= 0) {
            this.markedForDeletion = true;
        }

        
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.03;
        });
        this.particles = this.particles.filter(p => p.life > 0);
    }

    draw(ctx) {
        ctx.save();
        
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(231, 76, 60, ${this.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        
        this.particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(241, 196, 15, ${p.life})`;
            ctx.fill();
        });
        
        ctx.restore();
    }
}




class DamageText {
    constructor(x, y, damage, isCrit = false) {
        this.x = x;
        this.y = y;
        this.damage = damage;
        this.isCrit = isCrit;
        this.life = 1;
        this.vy = -2;
        this.markedForDeletion = false;
    }

    update() {
        this.y += this.vy;
        this.life -= 0.02;
        
        if (this.life <= 0) {
            this.markedForDeletion = true;
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.font = this.isCrit ? 'bold 24px Arial' : 'bold 16px Arial';
        ctx.fillStyle = this.isCrit ? '#e74c3c' : '#ffffff';
        ctx.globalAlpha = this.life;
        ctx.textAlign = 'center';
        ctx.fillText(Math.floor(this.damage), this.x, this.y);
        
        if (this.isCrit) {
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 1;
            ctx.strokeText(Math.floor(this.damage), this.x, this.y);
        }
        
        ctx.restore();
    }
}