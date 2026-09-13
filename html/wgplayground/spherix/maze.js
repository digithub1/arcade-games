function generateSquareMaze(dimension) {
    // Initialize field - all walls
    var field = new Array(dimension);
    field.dimension = dimension;
    for (var i = 0; i < dimension; i++) {
        field[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++) {
            field[i][j] = true;
        }
    }

    // Recursive backtracking maze generation
    function carve(x, y) {
        field[x][y] = false;

        // Randomize directions
        var directions = [[0, -2], [0, 2], [-2, 0], [2, 0]];
        for (var i = directions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = directions[i];
            directions[i] = directions[j];
            directions[j] = temp;
        }

        for (var i = 0; i < directions.length; i++) {
            var dx = directions[i][0];
            var dy = directions[i][1];
            var nx = x + dx;
            var ny = y + dy;

            if (nx > 0 && nx < dimension - 1 && ny > 0 && ny < dimension - 1 && field[nx][ny]) {
                field[x + dx/2][y + dy/2] = false;
                carve(nx, ny);
            }
        }
    }

    // Start from (1,1)
    carve(1, 1);

    // Ensure exit path exists - clear path to exit
    var exitX = dimension - 2;
    var exitY = dimension - 2;

    // Make sure exit cell is open
    field[exitX][exitY] = false;

    // Clear the exit opening on the right edge
    field[dimension - 1][dimension - 2] = false;

    return field;
}
