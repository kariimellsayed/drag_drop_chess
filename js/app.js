// Drag-Drop Chess
const king = document.querySelector(".chess-piese");
const squares = document.querySelectorAll(".square");
const infoDisplay = document.querySelector(".info");

king.addEventListener("dragstart", dragStart);
king.addEventListener("drag", dragging);

squares.forEach((square) => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("dragenter", dragEnter);
  square.addEventListener("dragleave", dragLeave);
  square.addEventListener("drop", dragDrop);
  square.addEventListener("dragend", dragEnd);
});

let beingDragged;

function dragStart(e) {
  beingDragged = e.target;
  console.log(`Dragging has started On a  ${beingDragged.id}`);
}

function dragging() {
  console.log(`You Are dragging a ${beingDragged.id}`);
  infoDisplay.textContent = `You Are dragging a ${beingDragged.id}`;
}

// Drag On Sqaures
function dragOver(e) {
  e.preventDefault();
  console.log(`You are dragging somthing over ${e.target.classList}`);
}

function dragEnter(e) {
  e.target.classList.add("highlight");
  console.log(`You are Entering space of ${e.target.classList}`);
}

function dragLeave(e) {
  console.log(`You are Leaving space of ${e.target.classList}`);
  e.target.classList.remove("highlight");
}

function dragDrop(e) {
  e.target.append(beingDragged);
  e.target.classList.remove("highlight");

  squares.forEach((square) => {
    const image = square.querySelector("img");
    if (image) {
      if (square.classList.contains("black")) {
        image.style.filter =
          "invert(100%) sepia(0%) saturate(0%) hue-rotate(222deg) brightness(109%) contrast(101%)";
      } else {
        image.style.filter = "none";
      }
    }
  });
}

function dragEnd(e) {
  const dropTarget = e.target.parentElement;
  dropTarget.classList.add("target");
  setTimeout(() => dropTarget.classList.remove("target"), 100);
  console.log(`You are Ended This Square ${dropTarget.classList}`);
  infoDisplay.textContent = "....";
}
