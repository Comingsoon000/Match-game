export const addCheckedIfValid = (input: HTMLElement, wrapper: HTMLElement): void => {
  if ((<HTMLInputElement>input).validity.valid) {
    input.classList.add("checked");
    wrapper.classList.add("checked");
  } else {
    input.classList.remove("checked");
    wrapper.classList.remove("checked");
  }
};
