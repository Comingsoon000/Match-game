import { addClasses } from "../../shared/addClasses";
import { removeClasses } from "../../shared/removeClasses";
import { getAvatarFromDb } from "../indexedDB/getAvatarFromDb";

export const registerConfirm = (): void => {
  getAvatarFromDb();
  const regBtn = document.body.querySelector(".header__register-button") as HTMLElement;
  const startBtn = document.body.querySelector(".header__start-button") as HTMLElement;

  addClasses([regBtn, "hidden"]);
  removeClasses([startBtn, "hidden"]);
};
