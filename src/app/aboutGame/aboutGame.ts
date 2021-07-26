import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";
import { app } from "../app";

export const [
  aboutGame,
  aboutGameLeft,
  aboutGameTitle,
  aboutGameRegister,
  aboutGameRegisterStep,
  aboutGameRegisterText,
  aboutGameSettings,
  aboutGameSettingsStep,
  aboutGameSettingsText,
  aboutGameRules,
  aboutGameRulesStep,
  aboutGameRulesText,
  aboutGameRight,
  aboutGameRegisterImg,
  aboutGameSettingsImg,
  aboutGameRulesImg,
] = createElements([
  ["div", "about-game", ""],
  ["div", "about-game__left-wrapper", ""],
  ["div", "about-game__title", "How to play?"],
  ["div", "about-game__register", ""],
  ["div", "about-game__register-step", "1"],
  ["div", "about-game__register-text", "Register new player in game"],
  ["div", "about-game__settings", ""],
  ["div", "about-game__settings-step", "2"],
  ["div", "about-game__settings-text", "Configure your game settings"],
  ["div", "about-game__rules", ""],
  ["div", "about-game__rules-step", "3"],
  ["div", "about-game__rules-text", "Start you new game! Remember card positions and match it before times up."],
  ["div", "about-game__right-wrapper", ""],
  ["div", "about-game__register-image", ""],
  ["div", "about-game__settings-image", "Game Settings"],
  ["div", "about-game__rules-image", ""],
]);

export const aboutGameRender = (): void => {
  appendElements(aboutGameRegister, [aboutGameRegisterStep, aboutGameRegisterText]);
  appendElements(aboutGameSettings, [aboutGameSettingsStep, aboutGameSettingsText]);
  appendElements(aboutGameRules, [aboutGameRulesStep, aboutGameRulesText]);
  appendElements(aboutGameLeft, [aboutGameTitle, aboutGameRegister, aboutGameSettings, aboutGameRules]);
  appendElements(aboutGameRight, [aboutGameRegisterImg, aboutGameSettingsImg, aboutGameRulesImg]);
  appendElements(app, aboutGame, [aboutGameLeft, aboutGameRight]);
};
