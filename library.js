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
            this.board[1][i] = new Piece(false, "pawn");
            this.board[6][i] = new Piece(true, "pawn");
        }

        // Adds remaining black pieces
        this.board[0][0] = new Piece(false, "rook");
        this.board[0][1] = new Piece(false, "knight");
        this.board[0][2] = new Piece(false, "bishop");
        this.board[0][3] = new Piece(false, "queen");
        this.board[0][4] = new Piece(false, "king");
        this.board[0][5] = new Piece(false, "bishop");
        this.board[0][6] = new Piece(false, "knight");
        this.board[0][7] = new Piece(false, "rook");

        // Adds remaining white pieces
        this.board[7][0] = new Piece(true, "rook");
        this.board[7][1] = new Piece(true, "knight");
        this.board[7][2] = new Piece(true, "bishop");
        this.board[7][3] = new Piece(true, "queen");
        this.board[7][4] = new Piece(true, "king");
        this.board[7][5] = new Piece(true, "bishop");
        this.board[7][6] = new Piece(true, "knight");
        this.board[7][7] = new Piece(true, "rook");
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
        if (typeof location[0] !== "number" || typeof location[1] !== "number") throw "The elements in location must be numbers";
        this.isWhite = isWhite;
        this.type = type;
        this.location = location;
    }

    toString() {
        const colour = this.isWhite ? "White" : "Black";
        const typeName = Object.keys(Piece.types).find(key => Piece.types[key] === this.type);
        const locationString = `(${this.location[0]}, ${this.location[1]})`;
        return `${colour} ${typeName} at ${locationString}`;
    }

    /**
     * Validates the given type.
     * 
     * @param {String} type
     * @returns {Boolean} True if the type exists, false otherwise.
     */
    static isValidType(type) {
        return type in Piece.types;
    }
}

class King extends Piece {
    /**
     * Creates a King object with the specified colour.
     * 
     * @param {Boolean} isWhite - The colour of the piece.
     */
    constructor(isWhite) {
        super(isWhite, "king");
    }

    // Note: Check if toString method is inherited
}

class Queen extends Piece {
    /**
     * Creates a Queen object with the specified colour.
     * 
     * @param {Boolean} isWhite - The colour of the piece.
     */
    constructor(isWhite) {
        super(isWhite, "queen");
    }
}

class Rook extends Piece {
    /**
     * Creates a Rook object with the specified colour.
     * 
     * @param {Boolean} isWhite - The colour of the piece.
     */
    constructor(isWhite) {
        super(isWhite, "rook");
    }
}

class Bishop extends Piece {
    /**
     * Creates a Bishop object with the specified colour.
     * 
     * @param {Boolean} isWhite - The colour of the piece.
     */
    constructor(isWhite) {
        super(isWhite, "bishop");
    }
}

class Knight extends Piece {
    /**
     * Creates a Knight object with the specified colour.
     * 
     * @param {Boolean} isWhite - The colour of the piece.
     */
    constructor(isWhite) {
        super(isWhite, "knight");
    }
}

class Pawn extends Piece {
    /**
     * Creates a Pawn object with the specified colour.
     * 
     * @param {Boolean} isWhite - The colour of the piece.
     */
    constructor(isWhite) {
        super(isWhite, "pawn");
    }
}
