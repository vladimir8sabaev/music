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
  const modalBtns = document.querySelectorAll(".music__card-button");
  const modal = document.querySelector(".music__modal-bg");
  const tabs = document.querySelectorAll(".music__tab");
  const wrapper = document.querySelector(".music__tabs");
  wrapper.addEventListener("click", (event) => {
    console.log(event.target.dataset.link);
    if (event.target.className == "music__card-button") {
      modal.style.display = "flex";
      modal.innerHTML = `
          <iframe src=${event.target.dataset.link} title="Illusions - A Chillwave Mix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
      `;
      setTimeout(() => {
        modal.style.opacity = "1";
      }, 50);
    }
  });
  modal.addEventListener("click", () => {
    modal.innerHTML = "";
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
    }, 450);
  });
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
  function hideTabs() {
    tabs.forEach((e) => {
      e.classList.remove("show");
      e.classList.add("hide");
    });
  }
  function showTab(className) {
    document.querySelectorAll(`.music__tab-${className}`).forEach((e) => {
      e.classList.remove("hide");
      e.classList.add("show");
    });
  }
  hideTabs();
  showTab("synthwave");
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
      hideTabs();
      showTab(genreName.toLowerCase());
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
  class musicItem {
    constructor(src, title, descr, link, parentSelector, className) {
      this.src = src;
      this.title = title;
      this.descr = descr;
      this.link = link;
      this.parent = document.querySelector(parentSelector);
      this.className = className;
    }
    render() {
      const element = document.createElement("div");
      element.innerHTML = `
      <div class="music__card ${this.className}">
        <div class="music__card-content">
          <h2 class="music__card-title">${this.title}</h2>
          <p class="music__card-body">
          ${this.descr}
          </p>
          <button data-link=${this.link}
            class="music__card-button">Youtube</button>
        </div>
      </div>
        `;
      element.style.backgroundImage = `linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url(${this.src})`;
      element.style.borderRadius = "10px";
      this.parent.append(element);
    }
  }
  //! synthwave
  new musicItem(
    "../img/cards/synthwave1.jpg",
    "Gravity",
    "Synthwave1",
    "https://www.youtube.com/embed/D8gHFd1Slfo",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  new musicItem(
    "../img/cards/synthwave2.jpg",
    "Cybercity",
    "Synthwave2",
    "https://www.youtube.com/embed/dgCnYsDTiXU",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  new musicItem(
    "../img/cards/synthwave3.jpg",
    "Nightlapse",
    "Synthwave3",
    "https://www.youtube.com/embed/6TEGPexTqr4",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  new musicItem(
    "../img/cards/synthwave4.jpg",
    "Glitch",
    "Synthwave4",
    "https://www.youtube.com/embed/isIj3tuQTDY",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  new musicItem(
    "../img/cards/synthwave5.jpg",
    "Gravity 2.0",
    "Synthwave5",
    "https://www.youtube.com/embed/CQwDEznMRMk",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  new musicItem(
    "../img/cards/synthwave6.jpg",
    "Offworld",
    "Synthwave6",
    "https://www.youtube.com/embed/7FG7nTUYowQ",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  //! Chillhop
  new musicItem(
    "../img/cards/chillhop1.jpg",
    "ChillHop Raccoon",
    "My favourite chillhop ever",
    "https://www.youtube.com/embed/7NOSDKb0HlU",
    ".music__tab-chillhop",
    "music__card-chillhop"
  ).render();
  new musicItem(
    "../img/cards/chillhop2.jpg",
    "LoFi Girl",
    "Iconic 24/7 stream with our favourite girl",
    "https://www.youtube.com/embed/jfKfPfyJRdk",
    ".music__tab-chillhop",
    "music__card-chillhop"
  ).render();
  new musicItem(
    "../img/cards/chillhop3.jpg",
    "Spring 2021",
    "Light chillhop mix for morning coffee",
    "https://www.youtube.com/embed/lve6KTZTKDw",
    ".music__tab-chillhop",
    "music__card-chillhop"
  ).render();
  new musicItem(
    "../img/cards/chillhop4.jpg",
    "Endless Sunday😌",
    "Beautiful chillhop mix for sundays",
    "https://www.youtube.com/embed/D_uLM5i0Z4c",
    ".music__tab-chillhop",
    "music__card-chillhop"
  ).render();
  new musicItem(
    "../img/cards/chillhop5.jpg",
    "Fades To Blue",
    "Ocean-themed chillhop mix",
    "https://www.youtube.com/embed/PfgS405CdXk",
    ".music__tab-chillhop",
    "music__card-chillhop"
  ).render();
  new musicItem(
    "../img/cards/chillhop6.jpg",
    "City Escape🌃",
    "Calm quiet mix for evenings",
    "https://www.youtube.com/embed/tAzN2FukjnY",
    ".music__tab-chillhop",
    "music__card-chillhop"
  ).render();
  //! game ost
  new musicItem(
    "../img/cards/gameOST1.jpg",
    "Machinarium",
    "My favourite game EVER",
    "https://www.youtube.com/embed/bQavuqgxOf4",
    ".music__tab-gameost",
    "music__card-gameost"
  ).render();
  new musicItem(
    "../img/cards/gameOST2.jpg",
    "Hotline Miami",
    "Brutal and bloody game",
    "https://www.youtube.com/embed/adDW9OKbKFs",
    ".music__tab-gameost",
    "music__card-gameost"
  ).render();
  new musicItem(
    "../img/cards/gameOST3.jpg",
    "The Witcher 3",
    "Atmospheric slavic RPG",
    "https://www.youtube.com/embed/Lj6oYNyvWuY",
    ".music__tab-gameost",
    "music__card-gameost"
  ).render();
  new musicItem(
    "../img/cards/gameOST4.jpg",
    "Hotline miami 2",
    "Second part of pixel adrenaline shooter",
    "https://www.youtube.com/embed/6_uAAzbv4IE",
    ".music__tab-gameost",
    "music__card-gameost"
  ).render();
  new musicItem(
    "../img/cards/gameOST5.jpg",
    "Guacamelee",
    "VERY mexican-style game",
    "https://www.youtube.com/embed/9PM_4YUfNcM",
    ".music__tab-gameost",
    "music__card-gameost"
  ).render();
  //! phonk
  new musicItem(
    "../img/cards/phonk1.jpg",
    "Relaxing mix",
    "The only mix on this tab, but it is really atmospheric and chill",
    "https://www.youtube.com/embed/dg8WOoAOpI8",
    ".music__tab-phonk",
    "music__card-phonk"
  ).render();
  new musicItem(
    "../img/cards/phonk2.jpg",
    "Maze - Phonk Wlkr",
    "Nice calm track",
    "https://www.youtube.com/embed/qP_eY0rA6r0",
    ".music__tab-phonk",
    "music__card-phonk"
  ).render();
  new musicItem(
    "../img/cards/phonk3.jpg",
    "WRNG - MC Orsen",
    "Cool rhyme track",
    "https://www.youtube.com/embed/yT5Nhm2MpZI",
    ".music__tab-phonk",
    "music__card-phonk"
  ).render();
  new musicItem(
    "../img/cards/phonk4.jpg",
    "Best of 2021",
    "Best phonk of 2021 in one mixtape",
    "https://www.youtube.com/embed/UVbSF2LTBnQ",
    ".music__tab-phonk",
    "music__card-phonk"
  ).render();
  new musicItem(
    "../img/cards/phonk5.jpg",
    "Venom - DXRTY",
    "Agressive track for workout",
    "https://www.youtube.com/embed/Yq0bB76wQUU",
    ".music__tab-phonk",
    "music__card-phonk"
  ).render();
  new musicItem(
    "../img/cards/phonk6.jpg",
    "Prince of darkness",
    "Agressive track for workout",
    "https://www.youtube.com/embed/59fzO8BIwDg",
    ".music__tab-phonk",
    "music__card-phonk"
  ).render();
  //! filmost
  new musicItem(
    "../img/cards/filmost1.jpg",
    "King Arthur",
    "Big playlist of Daniel Pemberton music",
    "https://www.youtube.com/embed/U5hE3GLSnTo?list=PLBKadB95sF46sIN2fmEWPPzlCeRXx-Lio",
    ".music__tab-filmost",
    "music__card-filmost"
  ).render();
  new musicItem(
    "../img/cards/filmost2.jpg",
    "The Gentlemen",
    "Have i explain anything?",
    "https://www.youtube.com/embed/Y9-SKDZ7ZJo?list=PLuF78wm0RiGa8_bNy9tXYG6jK7I6c2EUi",
    ".music__tab-filmost",
    "music__card-filmost"
  ).render();
  new musicItem(
    "../img/cards/filmost3.jpg",
    "Walter Mitty",
    "Great film about travelling ",
    "https://www.youtube.com/embed/gtWUpKxSlps?list=PLvty5Cpipf2IgL8W6FXT1D1C9piY_1Bi4",
    ".music__tab-filmost",
    "music__card-filmost"
  ).render();
});
