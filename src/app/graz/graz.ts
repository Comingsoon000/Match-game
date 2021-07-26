import { startBtn, stopBtn } from "../../header/header";
import { addAttributes } from "../../shared/addAttributes";
import { addClasses } from "../../shared/addClasses";
import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";
import { removeClasses } from "../../shared/removeClasses";
import { app } from "../app";

export const [graz, grazBtn] = createElements([
  ["div", "graz", ""],
  ["a", "graz-btn", "OK"],
]);

addAttributes([grazBtn, "href", "#/BestScore"]);

export const grazRender = (): void => {
  appendElements(app, [graz, grazBtn]);

  grazBtn.addEventListener("click", () => {
    addClasses([app, "Victory"]);

    app.innerHTML = "";

    addClasses([stopBtn, "hidden"]);
    removeClasses([startBtn, "hidden"]);
  });
};
