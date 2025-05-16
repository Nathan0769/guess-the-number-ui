class Display {
  constructor() {}

  hidden() {
    const div = document.querySelector("#landing-page");
    const button = div?.querySelector("#start");

    button?.addEventListener("click", () => {
      div?.classList.toggle("hidden");
      this.show();
    });
  }

  show() {
    const div = document.querySelector("#game-page");
    div?.classList.toggle("hidden");

    const smallBig = document.querySelector("#small-big");
    smallBig?.classList.toggle("hidden");
  }

  showAttemps(tentatives) {
    const countSpan = document.querySelector("#tentatives-count");
    if (countSpan) {
      countSpan.textContent = tentatives;
    }
  }

  checkResultDisplay(userDisplay) {
    const msg = document.querySelector("#msg");
    document.querySelector("#msg")?.classList.remove("hidden");

    if (userDisplay === "small") {
      if (msg) {
        msg.textContent = "Le nombre entré est trop petit 📉";
      }
    } else if (userDisplay === "big") {
      if (msg) {
        msg.textContent = "Le nombre entré est trop grand 📈";
      }
    } else if (userDisplay === "win") {
      if (msg) {
        msg.textContent = "Bravo vous avez trouvé 🎉";
      }
    } else {
      if (msg) {
        msg.textContent = "Entré un nombre entre 1 et 500 ⚠️";
      }
    }
  }

  restartDisplay(tentatives) {
    const div = document.querySelector("#win-screen");
    div?.classList.toggle("hidden");

    const countSpan = document.querySelector("#tentatives-count-win");
    if (countSpan) {
      countSpan.textContent = tentatives;
    }
  }

  resetScreens() {
    document.querySelector("#win-screen")?.classList.add("hidden");
    document.querySelector("#msg")?.classList.add("hidden");
  }
}

class Game {
  constructor() {
    this.tentatives = 0;
    this.display = new Display();
    this.numberToFind = 0;
    this.play = true;
  }

  start() {
    this.display.hidden();
    this.restart();
    this.guessNumber();
    this.init();
  }

  init() {
    this.numberToFind = this.randomNumber;

    this.tentatives = 0;
    this.display.showAttemps(this.tentatives);

    // @ts-ignore
    document.querySelector("#guess").value = "";
    // @ts-ignore
    document.querySelector("#ul-small").innerHTML = "";
    // @ts-ignore
    document.querySelector("#ul-big").innerHTML = "";

    this.display.resetScreens();
  }

  get randomNumber() {
    return Math.floor(Math.random() * 501);
  }

  guessNumber() {
    const button = document.querySelector("#submit");

    button?.addEventListener("click", (event) => {
      event.preventDefault();

      // @ts-ignore
      const input = document.querySelector("#guess")?.value;

      this.checkResult(input);
    });
  }

  checkResult(userInput) {
    const userNumber = Number(userInput);

    if (userNumber < 0 || userNumber > 500 || Number.isNaN(userNumber)) {
      this.display.checkResultDisplay("fail");
      return;
    }

    if (userNumber > this.numberToFind) {
      this.tooBig(userNumber);

      this.tentatives++;
      this.display.showAttemps(this.tentatives);
      this.display.checkResultDisplay("big");
    }

    if (userNumber < this.numberToFind) {
      this.tooSmall(userNumber);

      this.tentatives++;
      this.display.showAttemps(this.tentatives);
      this.display.checkResultDisplay("small");
    }

    if (userNumber === this.numberToFind) {
      this.display.showAttemps(this.tentatives);
      this.display.checkResultDisplay("win");

      this.win(this.tentatives);
    }
    // @ts-ignore
    document.querySelector("#guess").value = "";
  }

  tooSmall(userNumber) {
    const ul = document.querySelector("#ul-small");
    const li = document.createElement("li");
    li.innerHTML = userNumber;

    ul?.appendChild(li);
  }

  tooBig(userNumber) {
    const ul = document.querySelector("#ul-big");
    const li = document.createElement("li");
    li.innerHTML = userNumber;

    ul?.appendChild(li);
  }

  win(tentatives) {
    this.display.restartDisplay(tentatives);
    this.restart();
  }

  restart() {
    const button = document.querySelector("#restart");

    button?.addEventListener("click", () => {
      this.init();
    });
  }
}

const game = new Game();
game.start();
