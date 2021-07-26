import { appendElements } from "../shared/appendElements";
import { createElements } from "../shared/createElements";

export const [app] = createElements([["main", "app", ""]]);

export const appRender = (): void => {
  appendElements(document.body, app);
};
