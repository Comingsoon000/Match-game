import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";
import { addClasses } from "../../shared/addClasses";
import { removeClasses } from "../../shared/removeClasses";
import { app } from "../app";
import { generateCards } from "./generateCards";
import { cardsQuantity } from "../gameSettings/gameSettings";
import { startTimer, time, timer, timerRender } from "./timer";

type HTMLElementOrNull = HTMLElement | null;

export const matchArr: number[] = [];
export const missArr: number[] = [];
export const [game] = createElements([["div", "game", ""]]);
let hasFlippedCard = false;
let lockBoard = false;
let firstCard: HTMLElementOrNull;
let secondCard: HTMLElementOrNull;

const resetBoard = (): void => {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

export const gameStart = (): void => {
  const cardsNumber = cardsQuantity[cardsQuantity.length - 1];
  let cardsRemnant = cardsNumber;

  if (game.hasChildNodes()) {
    game.innerHTML = "";
    time.textContent = "00:00";
  }

  timerRender();
  appendElements(app, game);
  removeClasses([timer, "Victory"]);

  generateCards(game, cardsNumber / 2);
  generateCards(game, cardsNumber / 2);

  const flipCard = (card: HTMLElement): void => {
    if (card === firstCard) return;
    if (lockBoard) return;
    if (card.classList.contains("game__right-cards")) return;

    addClasses([card, "flip"]);

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = card;
      return;
    }

    secondCard = card;

    if ((<HTMLElement>firstCard).dataset.card === (<HTMLElement>secondCard).dataset.card) {
      cardsRemnant -= 2;
      if (cardsRemnant === 0) {
        addClasses([timer, "Victory"]);
      }
      matchArr.push(1);
      addClasses([firstCard, "game__right-cards"], [secondCard, "game__right-cards"]);
      firstCard.removeEventListener("click", () => flipCard(<HTMLElement>firstCard));
      secondCard.removeEventListener("click", () => flipCard(<HTMLElement>secondCard));
      resetBoard();
      return;
    }

    missArr.push(1);
    addClasses([firstCard, "game__wrong-cards"], [secondCard, "game__wrong-cards"]);
    lockBoard = true;

    setTimeout(() => {
      removeClasses(
        [firstCard, "flip"],
        [secondCard, "flip"],
        [firstCard, "game__wrong-cards"],
        [secondCard, "game__wrong-cards"]
      );
      resetBoard();
    }, 1000);
  };

  resetBoard();
  setTimeout(() => startTimer(), 10000);

  const cards = game.children;
  for (let i = 0; i < cards.length; i += 1) {
    const card = cards.item(i);
    const ramdomPos = Math.floor(Math.random() * cardsNumber);
    (<HTMLElement>card).style.order = `${ramdomPos}`;
    addClasses([<HTMLElement>card, "flip"]);
    setTimeout(() => {
      removeClasses([<HTMLElement>card, "flip"]);
      card.addEventListener("click", () => flipCard(<HTMLElement>card));
    }, 10000);
  }
};
