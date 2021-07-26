import { addAttributes } from "../../shared/addAttributes";
import { addClasses } from "../../shared/addClasses";
import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";
import { removeClasses } from "../../shared/removeClasses";

export const getFile = (): void => {
  const avatar = document.querySelector(".register__avatar");
  const avatarInput = document.querySelector(".register__avatar-input");
  const avatarPlaceImage = document.querySelector(".register__avatar-place-image");
  const reader = new FileReader();

  if (avatar) {
    avatar.remove();
  }

  reader.onload = () => {
    const [newImg] = createElements([["img", "register__avatar", ""]]);
    addAttributes([newImg, "src", `${reader.result}`], [newImg, "alt", "avatar"]);
    removeClasses([<HTMLElement>avatarPlaceImage, "register__avatar-place-image"]);
    addClasses([<HTMLElement>avatarPlaceImage, "register__avatar-place-image_loaded"]);
    appendElements(<HTMLElement>avatarPlaceImage, newImg);
  };

  reader.readAsDataURL((<HTMLInputElement>avatarInput).files[0]);
  (<HTMLInputElement>avatarInput).value = "";
};
