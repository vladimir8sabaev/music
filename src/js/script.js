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
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),url(${this.src})`;
      element.style.borderRadius = "10px";
      this.parent.append(element);
    }
  }
  new musicItem(
    "../img/bg/Chillhop-bg.jpg",
    "ChillHop Raccoon",
    "My favourite chillhop ever",
    "https://www.youtube.com/embed/7NOSDKb0HlU",
    ".music__tab-chillhop",
    "music__card-chillhop"
  ).render();
});
