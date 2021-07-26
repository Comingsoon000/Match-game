import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";
import { removeClasses } from "../../shared/removeClasses";
import { app } from "../app";
import { resultSecsArr } from "../game/timer";
import { matchArr, missArr } from "../game/game";
import { dbAddScore } from "../indexedDB/dbAddScore";

import { addPlayer } from "./addPlayer";

export const [score, scoreTitle] = createElements([
  ["div", "score", ""],
  ["div", "score__title", "Best players"],
]);

const player1 = addPlayer("player__avatar1", "Nicci Troiani", "nicci@gmail.com", "5000");
const player2 = addPlayer("player__avatar2", "George Fields", "jack@gmail.com", "4502");
const player3 = addPlayer("player__avatar3", "Jones Dermot", "dermot@gamil.com", "4136");
const player4 = addPlayer("player__avatar4", "Jane Doe", "jane.doe@gmail.com", "3784");
const players: HTMLElement[] = [player1, player2, player3, player4];

const calculateResult = (): number => {
  const result = 100 * (matchArr.length - missArr.length) - 10 * (resultSecsArr[resultSecsArr.length - 1] - 1);
  return result < 0 ? 0 : result;
};

export const scoreRender = (): void => {
  if (app.classList.contains("Victory")) {
    dbAddScore(`${calculateResult()}`);
    const openRequest = indexedDB.open("comingsoon000", 1);
    openRequest.onsuccess = function bdOpen(e) {
      const openRequestResult = (<IDBOpenDBRequest>e.target).result;
      const newUserrequest = openRequestResult.transaction("users").objectStore("users").get("newUser");
      newUserrequest.onsuccess = function getResult() {
        const { firstName, lastName, email } = newUserrequest.result;
        const newFullName = `${firstName} ${lastName}`;
        const newEmail = email;
        const scoreRequest = openRequestResult.transaction("users").objectStore("users").get("score");
        scoreRequest.onsuccess = function getScore() {
          const { result } = scoreRequest.result;
          const newPlayer = addPlayer("player__avatar", newFullName, newEmail, result);
          players.push(newPlayer);
          appendElements(app, score, [scoreTitle, ...players]);
          removeClasses([app, "Victory"]);
        };
      };
    };
  } else {
    appendElements(app, score, [scoreTitle, ...players]);
  }
};
