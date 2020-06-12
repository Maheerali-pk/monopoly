const pieces = ["lion", "cart", "ship", "shoe", "sup", "car", "hat"];

export interface IPiece {
   name: string;
   id: number;
}

export const piecesData = pieces.map((name, id) => ({
   name,
   id,
}));
