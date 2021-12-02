console.log("Mon programmme de Morpion");

// SPECIFICATION
// Jouer au morpion

// O X O 
// X O O
// X O X

// Analyser => Questionner le client ou se questionner
// 1) Comment afficher le tableau rempli ?
// 2) Quel structure de donnée pour représenter un tableau = array
let ligneHaut = ["", "", ""];
let ligneMilieu = ["", "", ""];
let ligneBas = ["", "", ""];

console.log(ligneHaut);
console.log(ligneMilieu);
console.log(ligneBas);

console.log("... le tableau de tableau");
let MorpionBoard = [ligneHaut, ligneMilieu, ligneBas];



/******************mes fonctions***************/
//initialisation du MorpionBoard
function positionPiece(board, ligne, colone, piece) {
    console.log("positionPiece");
    board[ligne][colone] = piece;
}
function afficheMorpionBoard(board) {
    console.log("afficheMorpionBoard");
    let i = 0;
    for (index = 0; index <= 2; index++) {
        //deuxième for
        let ligneString = '';
        for (index_col = 0; index_col <= 2; index_col++) {
            //morpionBoard[index][index_col] = "x";
            //positionPiece(MorpionBoard, index, index_col, "-");
            ligneString = ligneString + ' | ' + board[index][index_col];

        }
        console.log(ligneString+ ' | ');
        console.log ("_______________");

    }
}
afficheMorpionBoard(MorpionBoard);

positionPiece(MorpionBoard, 0, 2, "X");
afficheMorpionBoard(MorpionBoard);

positionPiece(MorpionBoard, 1, 1, "O");
afficheMorpionBoard(MorpionBoard)

positionPiece(MorpionBoard, 1, 2, "X");
afficheMorpionBoard(MorpionBoard)


positionPiece(MorpionBoard, 2, 1, "O");
afficheMorpionBoard(MorpionBoard)

positionPiece(MorpionBoard, 0, 1, "X");
afficheMorpionBoard(MorpionBoard)

positionPiece(MorpionBoard, 0, 0, "O");
afficheMorpionBoard(MorpionBoard)

positionPiece(MorpionBoard, 1, 0, "X");
afficheMorpionBoard(MorpionBoard)

positionPiece(MorpionBoard, 2, 0, "O");
afficheMorpionBoard(MorpionBoard)

positionPiece(MorpionBoard, 2, 2, "X");
afficheMorpionBoard(MorpionBoard);

// console.log ("plateau de début de partie");

// console.log ("_|_|_");
// console.log ("_____");
// console.log ("_|_|_");
// console.log ("_____");
// console.log ("_|_|_");

// console.log ("plateau de fin de partie");
// console.log ("O|X|X");
// console.log ("-----");
// console.log ("X|O|X");
// console.log ("-----");
// console.log ("O|O|X");

