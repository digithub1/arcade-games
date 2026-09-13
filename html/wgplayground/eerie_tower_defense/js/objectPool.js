




class ObjectPool {
    




    constructor(createFn, resetFn, initialSize = 50) {
        this.createFn = createFn;
        this.resetFn = resetFn;
        this.pool = [];
        this.active = [];
        
        
        for (let i = 0; i < initialSize; i++) {
            this.pool.push(this.createFn());
        }
    }

    




    acquire(...args) {
        let obj;
        
        if (this.pool.length > 0) {
            
            obj = this.pool.pop();
        } else {
            
            obj = this.createFn();
        }
        
        
        this.resetFn(obj, ...args);
        this.active.push(obj);
        
        return obj;
    }

    



    release(obj) {
        const index = this.active.indexOf(obj);
        if (index !== -1) {
            this.active.splice(index, 1);
            this.pool.push(obj);
        }
    }

    


    releaseMarked() {
        for (let i = this.active.length - 1; i >= 0; i--) {
            const obj = this.active[i];
            if (obj.markedForDeletion) {
                this.active.splice(i, 1);
                this.pool.push(obj);
            }
        }
    }

    



    getActive() {
        return this.active;
    }

    


    clear() {
        
        this.pool.push(...this.active);
        this.active = [];
    }

    



    getStats() {
        return {
            pooled: this.pool.length,
            active: this.active.length,
            total: this.pool.length + this.active.length
        };
    }
}




const PoolManager = {
    pools: {},

    






    createPool(name, createFn, resetFn, initialSize = 50) {
        this.pools[name] = new ObjectPool(createFn, resetFn, initialSize);
    },

    


    acquire(poolName, ...args) {
        if (!this.pools[poolName]) {
            console.error(`Pool ${poolName} not found`);
            return null;
        }
        return this.pools[poolName].acquire(...args);
    },

    


    release(poolName, obj) {
        if (!this.pools[poolName]) {
            console.error(`Pool ${poolName} not found`);
            return;
        }
        this.pools[poolName].release(obj);
    },

    


    releaseAllMarked() {
        Object.values(this.pools).forEach(pool => pool.releaseMarked());
    },

    


    getActive(poolName) {
        if (!this.pools[poolName]) {
            return [];
        }
        return this.pools[poolName].getActive();
    },

    


    clearAll() {
        Object.values(this.pools).forEach(pool => pool.clear());
    },

    


    getAllStats() {
        const stats = {};
        Object.entries(this.pools).forEach(([name, pool]) => {
            stats[name] = pool.getStats();
        });
        return stats;
    }
};
