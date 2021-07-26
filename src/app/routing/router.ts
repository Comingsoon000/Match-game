import { aboutGameRender } from "../aboutGame/aboutGame";
import { app } from "../app";
import { gameStart } from "../game/game";
import { gameSettingsRender } from "../gameSettings/gameSettings";
import { scoreRender } from "../score/score";

const aboutGame = aboutGameRender;
const bestScore = scoreRender;
const gameSettings = gameSettingsRender;
const game = gameStart;

const routes = [
  { path: "/", pageRender: aboutGame },
  { path: "/AboutGame", pageRender: aboutGame },
  { path: "/BestScore", pageRender: bestScore },
  { path: "/GameSettings", pageRender: gameSettings },
  { path: "/Game", pageRender: game },
];

const parseLocation = () => window.location.hash.slice(1).toLowerCase() || "/";
const findPageByPath = (path: string, matchGameRoutes: { path: string; pageRender: () => void }[]) =>
  matchGameRoutes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gmi")));

export const router = (): void => {
  const path = parseLocation();
  app.innerHTML = "";
  if (findPageByPath(path, routes)) {
    findPageByPath(path, routes).pageRender();
  } else {
    aboutGame();
  }
};
