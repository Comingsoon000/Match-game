import "./styles.css";
import { headerRender } from "./header/header";
import { appRender } from "./app/app";
import { aboutGameRender } from "./app/aboutGame/aboutGame";
import { registerRender } from "./app/register/register";
import { RegisterAddAttributes } from "./app/register/registerAddAttributes";
import { router } from "./app/routing/router";

headerRender();
registerRender();
RegisterAddAttributes();
appRender();
aboutGameRender();

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
