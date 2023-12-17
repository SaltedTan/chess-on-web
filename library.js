const BOARD_SIZE = 8;

class GameState {
    constructor() {
        // board consists of key-value pairs to store each piece
        this.board = {};
        // isWhiteTurn keeps track of who should make the next move
        this.isWhiteTurn = true;
    }

    /**
     * Adds pieces to the board as an initial setup for the game.
     */
    populateBoard() {
        // Adds pawns for both sides
        for (let i = 0; i < BOARD_SIZE; i++) {
            this.board[`p0${i}`] = new Pawn(false, [1, i]);
            this.board[`p1${i}`] = new Pawn(true, [6, i]);
        }

        // Adds remaining black pieces
        this.board["r00"] = new Rook(false, [0, 0]);
        this.board["k00"] = new Knight(false, [0, 1]);
        this.board["b00"] = new Bishop(false, [0, 2]);
        this.board["q0"] = new Queen(false, [0, 3]);
        this.board["K0"] = new King(false, [0, 4]);
        this.board["b01"] = new Bishop(false, [0, 5]);
        this.board["k01"] = new Knight(false, [0, 6]);
        this.board["r01"] = new Rook(false, [0, 7]);

        // Adds remaining white pieces
        this.board["r10"] = new Rook(false, [7, 0]);
        this.board["k10"] = new Knight(false, [7, 1]);
        this.board["b10"] = new Bishop(false, [7, 2]);
        this.board["q1"] = new Queen(false, [7, 3]);
        this.board["K1"] = new King(false, [7, 4]);
        this.board["b11"] = new Bishop(false, [7, 5]);
        this.board["k11"] = new Knight(false, [7, 6]);
        this.board["r01"] = new Rook(false, [7, 7]);
    }
}

class Piece {
    // Enum to represent the piece types in chess
    static types = Object.freeze({
        king: 0,
        queen: 1,
        rook: 2,
        bishop: 3,
        knight: 4,
        pawn: 5
    });

    /**
     * Creates a Piece object with the specified colour, piece type, and location.
     * 
     * @param {boolean} isWhite - The colour of the piece, true if white, false if black.
     * @param {string} type - The type of the piece (e.g., 'king', 'queen', 'rook', etc.).
     * @param {number[]} location - The location of the piece on the board, represented as an array with exactly two numbers [x, y].
     */
    constructor(isWhite, type, location) {
        if (typeof isWhite !== "boolean") throw "isWhite must be a boolean";
        if (!Piece.isValidType(type)) throw "Invalid piece type";

        if (!Array.isArray(location)) throw "Location must be an array";
        if (location.length !== 2) throw "Location has an invalid length";
        if (typeof location[0] !== "number" || typeof location[1] !== "number") 
            throw "The elements in location must be numbers";
        
        this.isWhite = isWhite;
        this.type = type;
        this.location = location;
    }

    toString() {
        const colour = this.isWhite ? "White" : "Black";
        const locationString = `(${this.location[0]}, ${this.location[1]})`;
        return `${colour} ${this.type} at ${locationString}`;
    }

    /**
     * Validates the given type.
     * 
     * @param {string} type
     * @returns {boolean} True if the type exists, false otherwise.
     */
    static isValidType(type) {
        return type in Piece.types;
    }
}

class King extends Piece {
    /**
     * Creates a King object with the specified colour and location.
     * 
     * @param {boolean} isWhite - The colour of the piece.
     * @param {number[]} location - The location of the piece on the board, represented as an array with exactly two numbers [x, y].
     */
    constructor(isWhite, location) {
        super(isWhite, "king", location);
    }

    // Note: Check if toString method is inherited
}

class Queen extends Piece {
    /**
     * Creates a Queen object with the specified colour and location.
     * 
     * @param {boolean} isWhite - The colour of the piece.
     * @param {number[]} location - The location of the piece on the board, represented as an array with exactly two numbers [x, y].
     */
    constructor(isWhite, location) {
        super(isWhite, "queen", location);
    }
}

class Rook extends Piece {
    /**
     * Creates a Rook object with the specified colour and location.
     * 
     * @param {boolean} isWhite - The colour of the piece.
     * @param {number[]} location - The location of the piece on the board, represented as an array with exactly two numbers [x, y].
     */
    constructor(isWhite, location) {
        super(isWhite, "rook", location);
    }
}

class Bishop extends Piece {
    /**
     * Creates a Bishop object with the specified colour and location.
     * 
     * @param {boolean} isWhite - The colour of the piece.
     * @param {number[]} location - The location of the piece on the board, represented as an array with exactly two numbers [x, y].
     */
    constructor(isWhite, location) {
        super(isWhite, "bishop", location);
    }
}

class Knight extends Piece {
    /**
     * Creates a Knight object with the specified colour and location.
     * 
     * @param {boolean} isWhite - The colour of the piece.
     * @param {number[]} location - The location of the piece on the board, represented as an array with exactly two numbers [x, y].
     */
    constructor(isWhite, location) {
        super(isWhite, "knight", location);
    }
}

class Pawn extends Piece {
    /**
     * Creates a Pawn object with the specified colour and location.
     * 
     * @param {boolean} isWhite - The colour of the piece.
     * @param {number[]} location - The location of the piece on the board, represented as an array with exactly two numbers [x, y].
     */
    constructor(isWhite, location) {
        super(isWhite, "pawn", location);
    }
}
