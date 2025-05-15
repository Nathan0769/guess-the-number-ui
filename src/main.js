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
}

class Game {
  constructor() {
    this.tentatives = 0;
    this.display = new Display();
    this.numberToFind = 0;
  }

  start() {
    this.init();
  }

  init() {
    this.numberToFind = this.randomNumber;
    console.log(this.numberToFind);

    this.display.hidden();

    this.guessNumber();
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
      this.win();
    }
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

  win() {
    location.reload();
  }
}

const game = new Game();
game.init();
