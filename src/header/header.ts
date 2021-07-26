import { register, registerCover } from "../app/register/register";
import { addAttributes } from "../shared/addAttributes";
import { addClasses } from "../shared/addClasses";
import { appendElements } from "../shared/appendElements";
import { createElements } from "../shared/createElements";
import { removeClasses } from "../shared/removeClasses";

export const [
  header,
  logo,
  logoTop,
  logoBot,
  linksWrapper,
  aboutGameBtn,
  bestScoreBtn,
  gameSettingsBtn,
  rightWrapper,
  regBtn,
  startBtn,
  stopBtn,
] = createElements([
  ["header", "header", ""],
  ["div", "header__logo", ""],
  ["div", "header__logo_top", "MATCH"],
  ["div", "header__logo_bot", "MATCH"],
  ["div", "header__links-wrapper", ""],
  ["a", "header__link", "About Game"],
  ["a", "header__link", "Best Score"],
  ["a", "header__link", "Game Settings"],
  ["div", "header__right-wrapper", ""],
  ["div", "header__register-button", "register new player"],
  ["a", "header__start-button", "start game"],
  ["a", "header__stop-button", "stop game"],
]);

addClasses([startBtn, "hidden"], [stopBtn, "hidden"]);

addAttributes(
  [aboutGameBtn, "href", "#/AboutGame"],
  [bestScoreBtn, "href", "#/BestScore"],
  [gameSettingsBtn, "href", "#/GameSettings"],
  [startBtn, "href", "#/Game"],
  [stopBtn, "href", "#/BestScore"]
);

export const headerRender = (): void => {
  appendElements(rightWrapper, [regBtn, startBtn, stopBtn]);
  appendElements(linksWrapper, [aboutGameBtn, bestScoreBtn, gameSettingsBtn]);
  appendElements(logo, [logoTop, logoBot]);
  appendElements(document.body, header, [logo, linksWrapper, rightWrapper]);
};

regBtn.addEventListener("click", () => {
  removeClasses([registerCover, "hidden"], [register, "hidden"]);
});

startBtn.addEventListener("click", () => {
  addClasses([startBtn, "hidden"]);
  removeClasses([stopBtn, "hidden"]);
});

stopBtn.addEventListener("click", () => {
  addClasses([stopBtn, "hidden"]);
  removeClasses([startBtn, "hidden"]);
});
