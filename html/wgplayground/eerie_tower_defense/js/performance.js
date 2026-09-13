




const PerformanceMonitor = {
    
    fps: 60,
    frameCount: 0,
    lastFpsUpdate: 0,
    fpsUpdateInterval: 1000, 

    
    frameTimes: [],
    maxFrameTimeSamples: 60,
    
    
    profiles: {},
    activeProfiles: new Map(),

    
    stats: {
        totalFrames: 0,
        avgFrameTime: 0,
        minFps: Infinity,
        maxFps: 0,
        gcCount: 0,
        memoryUsage: 0
    },

    
    enabled: true,
    showFpsCounter: true,

    


    init() {
        this.lastFpsUpdate = performance.now();
        
        
        if (performance.memory) {
            this.trackMemory();
        }
    },

    



    update(currentTime) {
        if (!this.enabled) return;

        this.frameCount++;
        this.stats.totalFrames++;

        
        if (currentTime - this.lastFpsUpdate >= this.fpsUpdateInterval) {
            this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastFpsUpdate));
            
            
            if (this.fps < this.stats.minFps) this.stats.minFps = this.fps;
            if (this.fps > this.stats.maxFps) this.stats.maxFps = this.fps;
            
            this.frameCount = 0;
            this.lastFpsUpdate = currentTime;
        }
    },

    


    recordFrameTime(frameTime) {
        if (!this.enabled) return;

        this.frameTimes.push(frameTime);
        
        
        if (this.frameTimes.length > this.maxFrameTimeSamples) {
            this.frameTimes.shift();
        }
        
        
        const sum = this.frameTimes.reduce((a, b) => a + b, 0);
        this.stats.avgFrameTime = sum / this.frameTimes.length;
    },

    



    startProfile(name) {
        if (!this.enabled) return;
        
        this.activeProfiles.set(name, performance.now());
    },

    



    endProfile(name) {
        if (!this.enabled) return;
        
        const startTime = this.activeProfiles.get(name);
        if (startTime === undefined) {
            console.warn(`Profile ${name} was not started`);
            return;
        }
        
        const duration = performance.now() - startTime;
        this.activeProfiles.delete(name);
        
        
        if (!this.profiles[name]) {
            this.profiles[name] = {
                count: 0,
                totalTime: 0,
                avgTime: 0,
                minTime: Infinity,
                maxTime: 0
            };
        }
        
        const profile = this.profiles[name];
        profile.count++;
        profile.totalTime += duration;
        profile.avgTime = profile.totalTime / profile.count;
        profile.minTime = Math.min(profile.minTime, duration);
        profile.maxTime = Math.max(profile.maxTime, duration);
    },

    


    trackMemory() {
        if (!performance.memory) return;
        
        setInterval(() => {
            if (!this.enabled) return;
            
            const memory = performance.memory;
            const usedMB = (memory.usedJSHeapSize / 1048576).toFixed(2);
            const totalMB = (memory.totalJSHeapSize / 1048576).toFixed(2);
            
            this.stats.memoryUsage = usedMB;
            
            
            
            if (this.lastMemoryUsage && this.lastMemoryUsage - usedMB > 5) {
                this.stats.gcCount++;
            }
            
            this.lastMemoryUsage = usedMB;
        }, 1000);
    },

    


    getFPS() {
        return this.fps;
    },

    


    getStats() {
        return {
            ...this.stats,
            fps: this.fps,
            avgFrameTime: this.stats.avgFrameTime.toFixed(2)
        };
    },

    


    getProfiles() {
        return this.profiles;
    },

    


    reset() {
        this.stats = {
            totalFrames: 0,
            avgFrameTime: 0,
            minFps: Infinity,
            maxFps: 0,
            gcCount: 0,
            memoryUsage: 0
        };
        this.profiles = {};
        this.frameTimes = [];
    },

    



    drawFPS(ctx) {
        if (!this.showFpsCounter || !this.enabled) return;

        ctx.save();
        
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(10, 10, 120, 80);
        
        
        ctx.strokeStyle = this.fps >= 55 ? '#2ecc71' : this.fps >= 30 ? '#f39c12' : '#e74c3c';
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, 120, 80);
        
        
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`FPS: ${this.fps}`, 20, 35);
        
        
        ctx.font = '12px Arial';
        ctx.fillStyle = '#aaa';
        ctx.fillText(`Avg: ${this.stats.avgFrameTime.toFixed(1)}ms`, 20, 55);
        
        if (this.stats.memoryUsage) {
            ctx.fillText(`Mem: ${this.stats.memoryUsage}MB`, 20, 72);
        }
        
        ctx.restore();
    },

    





    drawGraphs(ctx, x = 10, y = 100) {
        if (!this.enabled || this.frameTimes.length < 2) return;

        ctx.save();
        
        const width = 200;
        const height = 60;
        const padding = 5;
        
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(x, y, width, height);
        
        
        ctx.strokeStyle = '#3498db';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        const maxFrameTime = Math.max(...this.frameTimes, 16.67); 
        const step = (width - padding * 2) / (this.frameTimes.length - 1);
        
        this.frameTimes.forEach((time, i) => {
            const px = x + padding + i * step;
            const py = y + height - padding - (time / maxFrameTime) * (height - padding * 2);
            
            if (i === 0) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
        });
        
        ctx.stroke();
        
        
        ctx.strokeStyle = '#2ecc71';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        const targetY = y + height - padding - (16.67 / maxFrameTime) * (height - padding * 2);
        ctx.beginPath();
        ctx.moveTo(x + padding, targetY);
        ctx.lineTo(x + width - padding, targetY);
        ctx.stroke();
        ctx.setLineDash([]);
        
        
        ctx.fillStyle = '#fff';
        ctx.font = '10px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Frame Time (ms)', x + padding, y + 12);
        
        ctx.restore();
    },

    


    logStats() {
        console.group('🎮 Performance Stats');
        console.log('FPS:', this.fps);
        console.log('Avg Frame Time:', this.stats.avgFrameTime.toFixed(2), 'ms');
        console.log('Total Frames:', this.stats.totalFrames);
        console.log('Min/Max FPS:', this.stats.minFps, '/', this.stats.maxFps);
        
        if (this.stats.memoryUsage) {
            console.log('Memory Usage:', this.stats.memoryUsage, 'MB');
            console.log('GC Events:', this.stats.gcCount);
        }
        
        if (Object.keys(this.profiles).length > 0) {
            console.group('Profiles:');
            Object.entries(this.profiles).forEach(([name, profile]) => {
                console.log(
                    `${name}:`,
                    `avg=${profile.avgTime.toFixed(2)}ms`,
                    `min=${profile.minTime.toFixed(2)}ms`,
                    `max=${profile.maxTime.toFixed(2)}ms`,
                    `count=${profile.count}`
                );
            });
            console.groupEnd();
        }
        
        console.groupEnd();
    }
};
