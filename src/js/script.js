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
  let genres = [
    "Synthwave",
    "Classic",
    "Phonk",
    "Chillhop",
    "GameOST",
    "FilmOST",
    "Trap",
  ];
  const genreSpan = document.querySelector(".promo__header-genre");
  const btnSynthwave = document.querySelector(".promo__button-synthwave");
  const btnClassic = document.querySelector(".promo__button-classic");
  const btnPhonk = document.querySelector(".promo__button-phonk");
  const btnChillhop = document.querySelector(".promo__button-chillhop");
  const btnGameOST = document.querySelector(".promo__button-gameOST");
  const btnFilmOST = document.querySelector(".promo__button-filmOST");
  const btnTrap = document.querySelector(".promo__button-trap");
  const promo = document.querySelector(".promo");
  const btns = document.querySelectorAll(".promo__button");
  const btnsContainer = document.querySelector(".promo__buttons");
  const arrow = document.querySelector(".promo__arrow");
  const cardTitles = document.querySelectorAll(".music__card-title");
  //const cardTitleAfters = window.getComputedStyle(cardTitles, "::after");
  const cardBtns = document.querySelectorAll(".music__card-button");
  function changeCardColor(color) {
    const root = document.querySelector(":root");
    root.style.setProperty("--Color", color);
  }
  function allBtnTransparent() {
    btns.forEach(function (e) {
      e.style.backgroundColor = "transparent";
      e.style.color = "white";
    });
  }
  function changeGenre(btnName, genreName, color, textColor) {
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
      allBtnTransparent();
      btnName.style.backgroundColor = color;
      btnName.style.color = textColor;
      arrow.style.borderColor = color;
      changeCardColor(color);
    });
  }
  changeGenre(btnSynthwave, genres[0], "#cb0fff", "white");
  changeGenre(btnClassic, genres[1], "#e5ecbb", "black");
  changeGenre(btnPhonk, genres[2], "#15ff00", "black");
  changeGenre(btnChillhop, genres[3], "#0084ff", "white");
  changeGenre(btnGameOST, genres[4], "white", "black");
  changeGenre(btnFilmOST, genres[5], "yellow", "black");
  changeGenre(btnTrap, genres[6], "red", "white");
  arrow.addEventListener("click", () => {
    btnsContainer.scrollIntoView();
  });
});
