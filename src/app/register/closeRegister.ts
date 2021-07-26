import { addClasses } from "../../shared/addClasses";

const removeChecked = (arr: Array<Element>): void => {
  arr.forEach((el) => el.classList.remove("checked"));
};

const resetInputsValue = (arr: HTMLElement[]): void => {
  arr.forEach((el) => {
    (<HTMLInputElement>el).value = "";
  });
};

export const closeRegister = (
  resetedInputs: HTMLElement[],
  removedCheckedElems: HTMLElement[],
  hiddenedElems: HTMLElement[]
): void => {
  removeChecked(removedCheckedElems);
  resetInputsValue(resetedInputs);
  hiddenedElems.forEach((el) => addClasses([el, "hidden"]));
};
