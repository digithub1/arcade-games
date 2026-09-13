




const CanvasCache = {
    
    caches: {},

    






    create(name, width, height, drawFn) {
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        
        if (drawFn) {
            drawFn(ctx, width, height);
        }

        
        this.caches[name] = {
            canvas: canvas,
            ctx: ctx,
            width: width,
            height: height,
            dirty: false
        };

        return this.caches[name];
    },

    




    has(name) {
        return !!this.caches[name];
    },

    




    get(name) {
        return this.caches[name] || null;
    },

    




    update(name, drawFn) {
        const cache = this.caches[name];
        if (!cache) {
            console.warn(`Cache ${name} not found`);
            return;
        }

        
        cache.ctx.clearRect(0, 0, cache.width, cache.height);

        
        if (drawFn) {
            drawFn(cache.ctx, cache.width, cache.height);
        }

        cache.dirty = false;
    },

    






    draw(targetCtx, name, x = 0, y = 0) {
        const cache = this.caches[name];
        if (!cache) {
            console.warn(`Cache ${name} not found`);
            return;
        }

        targetCtx.drawImage(cache.canvas, x, y);
    },

    



    markDirty(name) {
        const cache = this.caches[name];
        if (cache) {
            cache.dirty = true;
        }
    },

    




    isDirty(name) {
        const cache = this.caches[name];
        return cache ? cache.dirty : false;
    },

    



    remove(name) {
        if (this.caches[name]) {
            delete this.caches[name];
        }
    },

    


    clear() {
        this.caches = {};
    },

    


    getStats() {
        const stats = {
            count: Object.keys(this.caches).length,
            totalMemory: 0
        };

        Object.entries(this.caches).forEach(([name, cache]) => {
            
            const memory = cache.width * cache.height * 4;
            stats.totalMemory += memory;
            stats[name] = {
                width: cache.width,
                height: cache.height,
                memory: (memory / 1024).toFixed(2) + ' KB',
                dirty: cache.dirty
            };
        });

        stats.totalMemory = (stats.totalMemory / 1024).toFixed(2) + ' KB';
        return stats;
    }
};
