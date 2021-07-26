import { addAttributes } from "../../shared/addAttributes";
import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";

export const addAvatar = (newSrc: string): void => {
  const header = document.querySelector(".header__right-wrapper");
  const loadedAvatar = document.querySelector(".register__avatar");
  if (loadedAvatar) {
    const [userAvatar] = createElements([["img", "header__avatar_loaded", ""]]);
    appendElements(<HTMLElement>header, userAvatar);
    addAttributes([userAvatar, "src", `${newSrc}`], [userAvatar, "alt", "avatar"]);
  } else {
    const [emptyAvatar] = createElements([["div", "header__avatar", ""]]);
    appendElements(<HTMLElement>header, emptyAvatar);
  }
};
