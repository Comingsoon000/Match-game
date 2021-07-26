import { addAttributes } from "../../shared/addAttributes";
import { addClasses } from "../../shared/addClasses";
import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";
import { cardsType } from "../gameSettings/gameSettings";

export const generateCards = (parent: HTMLElement, quantity: number): void => {
  const lineQuantity = (quantity * 2) ** 0.5;
  const type = cardsType[cardsType.length - 1];

  for (let i = 1; i <= quantity; i += 1) {
    const [card, frontFace, backFace] = createElements([
      ["div", `game__card${lineQuantity}`],
      ["div", "game__card-front"],
      ["div", "game__card-back", ""],
    ]);

    appendElements(parent, card, [frontFace, backFace]);

    addClasses([card, "card"], [backFace, `game__${type}${i}`]);
    addAttributes([card, "data-card", `${i}`]);
  }
};
