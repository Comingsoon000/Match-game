import { addClasses } from "../../shared/addClasses";
import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";
import { dbAddUser } from "../indexedDB/dbAddUser";
import { addCheckedIfValid } from "./addCheckedIfValid";
import { closeRegister } from "./closeRegister";
import { getFile } from "./getFile";
import { isInputsValid } from "./isInputsValid";
import { registerConfirm } from "./registerConfirm";

export const [
  registerCover,
  register,
  registerText,
  formWrapper,
  registerForm,
  firstNameWrapper,
  labelFirstName,
  inputFirstName,
  lastNameWrapper,
  labelLastName,
  inputLastName,
  emailWrapper,
  labelEmail,
  inputEmail,
  avatarPlaceImg,
  avatarInput,
  buttonWrapper,
  buttonAddUser,
  buttonCancel,
] = createElements([
  ["div", "register__cover", ""],
  ["div", "register", ""],
  ["div", "register__text", "Register new Player"],
  ["div", "register__form-wrapper", ""],
  ["form", "register__form", ""],
  ["div", "register__input-wrapper", ""],
  ["label", "register__label", "First Name"],
  ["input", "register__input-first-name", ""],
  ["div", "register__input-wrapper", ""],
  ["label", "register__label", "Last Name"],
  ["input", "register__input-last-name", ""],
  ["div", "register__input-wrapper", ""],
  ["label", "register__label", "E-mail"],
  ["input", "register__input-email", ""],
  ["div", "register__avatar-place-image", ""],
  ["input", "register__avatar-input", ""],
  ["div", "register__button-wrapper", ""],
  ["div", "register__button-add-user", "add user"],
  ["div", "register__button-cancel", "cancel"],
]);

addClasses([registerCover, "hidden"], [register, "hidden"]);

export const registerRender = (): void => {
  appendElements(firstNameWrapper, labelFirstName, inputFirstName);
  appendElements(lastNameWrapper, labelLastName, inputLastName);
  appendElements(emailWrapper, labelEmail, inputEmail);
  appendElements(registerForm, [firstNameWrapper, lastNameWrapper, emailWrapper]);
  appendElements(avatarPlaceImg, avatarInput);
  appendElements(formWrapper, [registerForm, avatarPlaceImg]);
  appendElements(buttonWrapper, [buttonAddUser, buttonCancel]);
  appendElements(document.body, register, [registerText, formWrapper, buttonWrapper]);
  appendElements(document.body, registerCover);
};

inputFirstName.addEventListener("input", () => addCheckedIfValid(inputFirstName, firstNameWrapper));
inputLastName.addEventListener("input", () => addCheckedIfValid(inputLastName, lastNameWrapper));
inputEmail.addEventListener("input", () => addCheckedIfValid(inputEmail, emailWrapper));
avatarInput.addEventListener("change", getFile);

registerCover.addEventListener("click", () =>
  closeRegister(
    [inputFirstName, inputLastName, inputEmail],
    [inputFirstName, inputLastName, inputEmail, firstNameWrapper, lastNameWrapper, emailWrapper],
    [registerCover, register]
  )
);

buttonCancel.addEventListener("click", () =>
  closeRegister(
    [inputFirstName, inputLastName, inputEmail],
    [inputFirstName, inputLastName, inputEmail, firstNameWrapper, lastNameWrapper, emailWrapper],
    [registerCover, register]
  )
);

buttonAddUser.addEventListener("click", () => {
  if (isInputsValid(inputFirstName, inputLastName, inputEmail)) {
    dbAddUser(
      (<HTMLInputElement>inputFirstName).value,
      (<HTMLInputElement>inputLastName).value,
      (<HTMLInputElement>inputEmail).value
    );
    buttonAddUser.removeAttribute("disabled");
    addClasses([registerCover, "hidden"], [register, "hidden"]);
    registerConfirm();
  }
});
