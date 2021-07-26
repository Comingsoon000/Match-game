import { startBtn, stopBtn } from "../../header/header";
import { appendElements } from "../../shared/appendElements";
import { createElements } from "../../shared/createElements";
import { app } from "../app";
import { graz, grazRender } from "../graz/graz";

export const [timer, time] = createElements([
  ["div", "timer", ""],
  ["div", "timer__time", "00:00"],
]);

export const resultTimeArr: string[] = [];
export const resultSecsArr: number[] = [0];

export const timerRender = (): void => {
  appendElements(app, timer, time);
};

export const startTimer = (): void => {
  let seconds = 0;
  let minutes = -1;

  const timerId = setInterval(() => {
    startBtn.addEventListener("click", () => clearInterval(timerId));
    stopBtn.addEventListener("click", () => clearInterval(timerId));
    const currentSeconds = seconds % 60;
    if (currentSeconds === 0) {
      minutes += 1;
    }
    if (currentSeconds < 10) {
      time.textContent = `0${minutes}:0${currentSeconds}`;
    } else {
      time.textContent = `0${minutes}:${currentSeconds}`;
    }
    seconds += 1;
    if (timer.classList.contains("Victory")) {
      clearInterval(timerId);
      resultSecsArr.push(seconds);
      resultTimeArr.push(time.textContent);
      const resultTime = resultTimeArr[resultTimeArr.length - 1];
      grazRender();
      graz.textContent = `Congratulations! You successfully found all matches on ${resultTime} minutes.`;
    }
  }, 1000);
};
