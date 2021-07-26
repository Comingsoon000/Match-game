import { addAttributes } from "../../shared/addAttributes";
import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";

export const addPlayer = (
  avatarClass = "avatar",
  fullNameValue: string,
  emailValue: string,
  scoreValue: string
): HTMLElement => {
  const [player, userAvatar, emptyAvatar, data, fullName, email, result, resultText, resultValue] = createElements([
    ["div", "player", ""],
    ["img", "avatar", ""],
    ["div", avatarClass, ""],
    ["div", "player__data", ""],
    ["div", "player__full-name", fullNameValue],
    ["div", "player__email", emailValue],
    ["div", "player__result", ""],
    ["div", "player__result-text", `Score:  `],
    ["div", "player__result-value", scoreValue],
  ]);

  const loadedAvatar = document.querySelector(".register__avatar");
  let avatar: HTMLElement;

  if (loadedAvatar) {
    avatar = userAvatar;
    addAttributes([avatar, "src", `${loadedAvatar.getAttribute("src")}`]);
  } else {
    avatar = emptyAvatar;
  }

  const playerRender = (): void => {
    appendElements(result, [resultText, resultValue]);
    appendElements(data, [fullName, email]);
    appendElements(player, [avatar, data, result]);
  };

  playerRender();

  return player;
};
