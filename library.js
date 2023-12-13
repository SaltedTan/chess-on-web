class GameState {
    constructor() {
        // board is an 8 * 8 array containing pieces
        this.board = Array(8).fill(null).map(() => Array(8).fill(null));
        // isWhiteTurn keeps track of who should make the next move
        this.isWhiteTurn = true;
    }
    
    /**
     * Adds pieces to the board as an initial setup for the game.
     */
    populateBoard() {
        // TODO: Implement the logic to add chess pieces to the board
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
     * Creates a Piece object with the specified colour and piece type.
     * 
     * @param {Boolean} isWhite - The colour of the piece.
     * @param {String} type - The type of the piece.
     */
    constructor(isWhite, type) {
        if (typeof isWhite !== "boolean") throw "isWhite must be a boolean";
        if (!Piece.isValidType(type)) throw "Invalid piece type";
        this.isWhite = isWhite;
        this.type = type;
    }

    toString() {
        return (this.isWhite ? "1" : "0") + Piece.types[this.type];
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
