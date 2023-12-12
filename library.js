class Piece { 
    static types = Object.freeze({
        king: 0,
        queen: 1,
        rook: 2,
        bishop: 3,
        knight: 4,
        pawn: 5
    });

    constructor(isWhite, type) {
        if (typeof isWhite !== "boolean") throw "isWhite must be a boolean";
        if (!isValidType(type)) throw "Invalid piece type";
        this.isWhite = isWhite;
        this.type = type;
    }

    toString() {
        return (this.isWhite ? "1" : "0") + types[this.type];
    }

    static isValidType(type) {
        return type in types;
    }
}
