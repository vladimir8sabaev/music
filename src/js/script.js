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
    "It's like listening to the 80s and the year 2200 at the same time...",
    "https://www.youtube.com/embed/D8gHFd1Slfo",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  new musicItem(
    "../img/cards/synthwave2.jpg",
    "Cybercity",
    "RIP to all the people who have not discovered synthwave yet",
    "https://www.youtube.com/embed/dgCnYsDTiXU",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  new musicItem(
    "../img/cards/synthwave3.jpg",
    "Nightlapse",
    "It’s like I have nostalgia... for something that never happened",
    "https://www.youtube.com/embed/6TEGPexTqr4",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  new musicItem(
    "../img/cards/synthwave4.jpg",
    "Glitch",
    "Listening to this while I program makes me feel like I am creating Tron.",
    "https://www.youtube.com/embed/isIj3tuQTDY",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  new musicItem(
    "../img/cards/synthwave5.jpg",
    "Gravity 2.0",
    "Damn, the cosmic vibe... Just fantastic 🔥😍",
    "https://www.youtube.com/embed/CQwDEznMRMk",
    ".music__tab-synthwave",
    "music__card-synthwave"
  ).render();
  new musicItem(
    "../img/cards/synthwave6.jpg",
    "Offworld",
    "Born too late to explore the New World. Born too early to explore the cosmos...",
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
  new musicItem(
    "../img/cards/filmost4.jpg",
    "The terminal",
    "Another great film about travelling ",
    "https://www.youtube.com/embed/n9D4z8VwB2A",
    ".music__tab-filmost",
    "music__card-filmost"
  ).render();
  new musicItem(
    "../img/cards/filmost5.jpg",
    "Interstellar",
    "Smooth QUALITY loop of the soundtrack",
    "https://www.youtube.com/embed/j23SO29LNWE",
    ".music__tab-filmost",
    "music__card-filmost"
  ).render();
  //! trap
  new musicItem(
    "../img/cards/trap1.jpg",
    "Arabic Trap Mix",
    "One of the best mixes of arabian trap",
    "https://www.youtube.com/embed/6hefR257KYU",
    ".music__tab-trap",
    "music__card-trap"
  ).render();
  new musicItem(
    "../img/cards/trap2.jpg",
    "Middle East Trap",
    "The mix between trap and traditional Arabic music",
    "https://www.youtube.com/embed/pCfqB2nKi7A",
    ".music__tab-trap",
    "music__card-trap"
  ).render();
  new musicItem(
    "../img/cards/trap3.jpg",
    "Mafia Zurna",
    "Single by Bay Trapist",
    "https://www.youtube.com/embed/7ggOheMoIdw",
    ".music__tab-trap",
    "music__card-trap"
  ).render();
  new musicItem(
    "../img/cards/trap4.jpg",
    "IZANAGI イザナギ",
    "Agressive japanese trap",
    "https://www.youtube.com/embed/eSZFIXbqmhs",
    ".music__tab-trap",
    "music__card-trap"
  ).render();
  new musicItem(
    "../img/cards/trap5.jpg",
    "KAGUTSUCHI",
    "Agressive japanese trap",
    "https://www.youtube.com/embed/x1R2yQtErPc",
    ".music__tab-trap",
    "music__card-trap"
  ).render();
  new musicItem(
    "../img/cards/trap6.jpg",
    "YAKSHA 夜叉",
    "Trapanese Instrumental Hip Hop Mix",
    "https://www.youtube.com/embed/A7WZhoGRjMI",
    ".music__tab-trap",
    "music__card-trap"
  ).render();
  //! classic
  new musicItem(
    "../img/cards/classic1.jpg",
    "Summer Presto",
    "God: How much talent do you want? <br> Vivaldi: yes",
    "https://www.youtube.com/embed/Nx5c_JZIM6M",
    ".music__tab-classic",
    "music__card-classic"
  ).render();
  new musicItem(
    "../img/cards/classic2.jpg",
    "Sugar Plum Fairy",
    "His child: dad, can you tell me a fairytale story? <br> Tchaikovsky: plays piano 🧚‍♂️",
    "https://www.youtube.com/embed/B9zRToy-mwk",
    ".music__tab-classic",
    "music__card-classic"
  ).render();
  new musicItem(
    "../img/cards/classic3.jpg",
    "Gymnopédie",
    "This is like the Mona Lisa of music. You can't tell what emotion its going for.",
    "https://www.youtube.com/embed/S-Xm7s9eGxU",
    ".music__tab-classic",
    "music__card-classic"
  ).render();
  new musicItem(
    "../img/cards/classic4.jpg",
    "Fly",
    "A french movie 'Intouchables' introduced me to Einaudi's pieces and, I'm so glad it did.",
    "https://www.youtube.com/embed/5LRwYKpV-6A",
    ".music__tab-classic",
    "music__card-classic"
  ).render();
  new musicItem(
    "../img/cards/classic5.jpg",
    "Nuvole Bianche",
    "I swear I get goosebumps every time this masterpiece play",
    "https://www.youtube.com/embed/sR2W2scFS4Y",
    ".music__tab-classic",
    "music__card-classic"
  ).render();
  new musicItem(
    "../img/cards/classic6.jpg",
    "Una Mattina",
    "The piano keys are black and white but they sound like a million colors in your mind 🎹",
    "https://www.youtube.com/embed/MPlkHxFA-Qg",
    ".music__tab-classic",
    "music__card-classic"
  ).render();
});
