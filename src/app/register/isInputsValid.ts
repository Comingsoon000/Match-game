export const isInputsValid = (input1: HTMLElement, input2: HTMLElement, input3: HTMLElement): boolean => {
  return (
    (<HTMLInputElement>input1).validity.valid &&
    (<HTMLInputElement>input2).validity.valid &&
    (<HTMLInputElement>input3).validity.valid
  );
};
