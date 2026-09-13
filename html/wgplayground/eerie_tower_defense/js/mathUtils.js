




const MathUtils = {
    










    distanceSquared(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return dx * dx + dy * dy;
    },

    









    distance(x1, y1, x2, y2) {
        return Math.sqrt(this.distanceSquared(x1, y1, x2, y2));
    },

    










    isInRadius(x, y, centerX, centerY, radius) {
        return this.distanceSquared(x, y, centerX, centerY) <= radius * radius;
    },

    







    normalize(x, y) {
        const length = Math.sqrt(x * x + y * y);
        if (length === 0) {
            return { x: 0, y: 0, length: 0 };
        }
        return {
            x: x / length,
            y: y / length,
            length: length
        };
    },

    







    lerp(a, b, t) {
        return a + (b - a) * t;
    },

    







    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    },

    






    random(min, max) {
        return min + Math.random() * (max - min);
    },

    






    randomInt(min, max) {
        return Math.floor(this.random(min, max + 1));
    },

    









    angleBetween(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    },

    



    _sinTable: null,
    _cosTable: null,
    _tableResolution: 360,

    


    initTrigTables() {
        if (this._sinTable) return; 

        this._sinTable = new Float32Array(this._tableResolution);
        this._cosTable = new Float32Array(this._tableResolution);

        for (let i = 0; i < this._tableResolution; i++) {
            const angle = (i / this._tableResolution) * Math.PI * 2;
            this._sinTable[i] = Math.sin(angle);
            this._cosTable[i] = Math.cos(angle);
        }
    },

    




    fastSin(angle) {
        if (!this._sinTable) this.initTrigTables();
        
        
        const normalized = angle % (Math.PI * 2);
        const index = Math.floor((normalized / (Math.PI * 2)) * this._tableResolution);
        return this._sinTable[index];
    },

    




    fastCos(angle) {
        if (!this._cosTable) this.initTrigTables();
        
        const normalized = angle % (Math.PI * 2);
        const index = Math.floor((normalized / (Math.PI * 2)) * this._tableResolution);
        return this._cosTable[index];
    }
};


MathUtils.initTrigTables();
