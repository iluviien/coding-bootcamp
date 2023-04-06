document.addEventListener("DOMContentLoaded", () => {
  //card options

  const cards = [
    {
      name: "froggy",
      img: "src/images/froggy.jpg"
    },
    {
      name: "pizza",
      img: "src/images/pizza.jpg"
    },
    {
      name: "lolli",
      img: "src/images/lolli.jpg"
    },
    {
      name: "happy",
      img: "src/images/happy.jpg"
    },
    {
      name: "angry",
      img: "src/images/angry.jpg"
    },

    {
      name: "cute",
      img: "src/images/cute.jpg"
    },
    {
      name: "froggy",
      img: "src/images/froggy.jpg"
    },
    {
      name: "pizza",
      img: "src/images/pizza.jpg"
    },
    {
      name: "lolli",
      img: "src/images/lolli.jpg"
    },
    {
      name: "happy",
      img: "src/images/happy.jpg"
    },
    {
      name: "angry",
      img: "src/images/angry.jpg"
    },

    {
      name: "cute",
      img: "src/images/cute.jpg"
    }
  ];

  cards.sort(() => 0.5 - Math.random());
  console.log(cards);

  const grid = document.querySelector(".grid");

  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/images/cardback.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  createBoard();

  function flipCard() {}
});
