import { addAttributes } from "../../shared/addAttributes";
import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";
import { app } from "../app";

export const [
  gameSettings,
  cardsTypeText,
  cardsTypeSelect,
  cardsTypeOptionName,
  cardsTypeOption1,
  cardsTypeOption2,
  cardsTypeDivider,
  difficultyText,
  difficultySelect,
  difficultyOptionName,
  difficultyOption1,
  difficultyOption2,
  difficultyOption3,
  difficultyDivider,
] = createElements([
  ["div", "game-settings", ""],
  ["div", "game-settings__cards-type-text", "Game cards"],
  ["select", "game-settings__cards-type-select", ""],
  ["option", "game-settings__cards-type-option", "select game cards type"],
  ["option", "game-settings__cards-type-option", "animals"],
  ["option", "game-settings__cards-type-option", "clothes"],
  ["div", "game-settings__cards-type-divider", ""],
  ["div", "game-settings__difficulty-text", "Difficulty"],
  ["select", "game-settings__difficulty-select", "select game type"],
  ["option", "game-settings__cards-type-option", "select game type"],
  ["option", "game-settings__cards-type-option", "4 x 4"],
  ["option", "game-settings__cards-type-option", "6 x 6"],
  ["option", "game-settings__cards-type-option", "8 x 8"],
  ["div", "game-settings__difficulty-divider", ""],
]);

export const gameSettingsRender = (): void => {
  appendElements(cardsTypeSelect, [cardsTypeOptionName, cardsTypeOption1, cardsTypeOption2]);
  appendElements(difficultySelect, [difficultyOptionName, difficultyOption1, difficultyOption2, difficultyOption3]);
  appendElements(gameSettings, [
    cardsTypeText,
    cardsTypeSelect,
    cardsTypeDivider,
    difficultyText,
    difficultySelect,
    difficultyDivider,
  ]);
  appendElements(app, gameSettings);
};

addAttributes(
  [cardsTypeOptionName, "hidden", "hidden"],
  [cardsTypeOptionName, "selected", "selected"],
  [difficultyOptionName, "hidden", "hidden"],
  [difficultyOptionName, "selected", "selected"],
  [cardsTypeOption1, "value", "animal"],
  [cardsTypeOption2, "value", "clothes"],
  [difficultyOption1, "value", "16"],
  [difficultyOption2, "value", "36"],
  [difficultyOption3, "value", "64"]
);

export const cardsQuantity: number[] = [16];
export const cardsType: string[] = ["animal"];

cardsTypeSelect.addEventListener("change", () => {
  cardsType.push((<HTMLSelectElement>cardsTypeSelect).value);
});

difficultySelect.addEventListener("change", () => {
  cardsQuantity.push(Number((<HTMLSelectElement>difficultySelect).value));
});
