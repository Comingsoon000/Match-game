import { addAttributes } from "../../shared/addAttributes";
import { registerForm, buttonAddUser, inputFirstName, inputLastName, inputEmail, avatarInput } from "./register";

export const RegisterAddAttributes = (): void => {
  addAttributes(
    [registerForm, "id", "registerForm"],
    [registerForm, "name", "registerForm"],
    [buttonAddUser, "form", "registerForm"],
    [buttonAddUser, "type", "button"],
    [buttonAddUser, "disabled", "true"],
    [inputFirstName, "placeholder", "Ivan"],
    [inputFirstName, "type", "text"],
    [inputFirstName, "required", "required"],
    [inputFirstName, "onkeypress", "if(this.value.length == 30) return false;"],
    [inputFirstName, "pattern", "[^-~!@#$%*()+=_:;|'\"`<>,.?/^\\s\\d]+$"],
    [inputLastName, "placeholder", "Ivanov"],
    [inputLastName, "type", "text"],
    [inputLastName, "required", "required"],
    [inputLastName, "onkeypress", "if(this.value.length == 30) return false;"],
    [inputLastName, "pattern", "[^-~!@#$%*()+=_:;|'\"`<>,.?/^\\s\\d]+$"],
    [inputEmail, "placeholder", "ivanov@ya.ru"],
    [inputEmail, "type", "email"],
    [inputEmail, "required", "required"],
    [inputEmail, "onkeypress", "if(this.value.length == 30) return false;"],
    [avatarInput, "type", "file"]
  );
};
