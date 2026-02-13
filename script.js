const images = {
  animals: "https://picsum.photos/300?animal",
  houses: "https://picsum.photos/300?house",
  places: "https://picsum.photos/300?nature",
  sweets: "https://picsum.photos/300?cake",
  dishes: "https://picsum.photos/300?food"
};

let firstPiece = null;

function startGame() {
  const category = document.getElementById("category").value;
  const puzzle = document.getElementById("puzzle");
  puzzle.innerHTML = "";

  let imageUrl = images[category];

  let positions = [];
  for (let i = 0; i < 9; i++) {
    positions.push(i);
  }

  positions.sort(() => Math.random() - 0.5);

  positions.forEach(pos => {
    const piece = document.createElement("div");
    piece.classList.add("piece");

    let x = (pos % 3) * -100;
    let y = Math.floor(pos / 3) * -100;

    piece.style.backgroundImage = `url(${imageUrl})`;
    piece.style.backgroundPosition = `${x}px ${y}px`;
    piece.dataset.position = pos;

    piece.addEventListener("click", () => swapPiece(piece));

    puzzle.appendChild(piece);
  });
}

function swapPiece(piece) {
  if (!firstPiece) {
    firstPiece = piece;
    piece.style.border = "2px solid yellow";
  } else {
    let tempBg = firstPiece.style.backgroundPosition;
    firstPiece.style.backgroundPosition = piece.style.backgroundPosition;
    piece.style.backgroundPosition = tempBg;

    firstPiece.style.border = "1px solid white";
    firstPiece = null;
  }
  }
