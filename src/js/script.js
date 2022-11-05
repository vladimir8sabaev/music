"use strict";
document.addEventListener("DOMContentLoaded", () => {
  setInterval(showTime, 1000);
  function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec;
    document.querySelector(".promo__clock").textContent = currentTime;
  }
  showTime();
  const question = document.querySelector(".question");
  let clock = document.querySelector(".promo__clock");
  let genres = ["Synthwave", "Classic", "Phonk", "Chillhop", "GameOST"];
  const genreSpan = document.querySelector(".promo__header-genre");
  const btnSynthwave = document.querySelector(".music__button-synthwave");
  const btnClassic = document.querySelector(".music__button-classic");
  const btnPhonk = document.querySelector(".music__button-phonk");
  const btnChillhop = document.querySelector(".music__button-chillhop");
  const btnGameOST = document.querySelector(".music__button-gameOST");
  const promo = document.querySelector(".promo");
  function changeGenre(btnName, genreName, color) {
    btnName.addEventListener("click", () => {
      promo.style.backgroundImage = `linear-gradient(
        to top,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),url(img/bg/${genreName}-bg.jpg)`;
      genreSpan.textContent = genreName;
      genreSpan.style.color = color;
      question.style.color = color;
      clock.style.color = color;
    });
  }
  changeGenre(btnSynthwave, genres[0], "#9113e6");
  changeGenre(btnClassic, genres[1], "#e5ecbb");
  changeGenre(btnPhonk, genres[2], "#15ff00");
  changeGenre(btnChillhop, genres[3], "#0084ffc0");
  changeGenre(btnGameOST, genres[4], "white");
});
