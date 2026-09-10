const PICKS = ["rock", "paper", "scissors", "lizard", "spock"];

/* Straight from the rules in Problem_Description.md. Each pick beats exactly
   two others, which is what makes the five-way version work. */
const BEATS = {
  rock: ["lizard", "scissors"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

/* How long the house "thinks", then how long both picks sit on screen before
   the result lands. */
const HOUSE_DELAY = 1400;
const RESULT_DELAY = 700;

/* Where the score survives a refresh. */
const STORE_KEY = "Rock Paper Scissors first midterm";

const matchport = document.getElementById("matchport");
const picks = document.getElementById("picks");
const match = document.getElementById("match");
const userSide = document.getElementById("user-side");
const houseSide = document.getElementById("house-side");
const userSlot = document.getElementById("user-pick");
const houseSlot = document.getElementById("house-pick");
const outcome = document.getElementById("outcome");
const result = document.getElementById("result");
const playAgain = document.getElementById("play-again");
const scoreEl = document.getElementById("score");

/* Reads the saved score. Wrapped in try/catch because storage throws outright
   when the browser blocks site data, and the stored text is checked because
   anything can end up under that key. */
function loadScore() {
  try {
    const saved = Number(localStorage.getItem(STORE_KEY));
    return Number.isInteger(saved) ? saved : 0;
  } catch {
    return 0;
  }
}

let score = loadScore();
let timers = [];

function later(fn, ms) {
  timers.push(setTimeout(fn, ms));
}

function clearTimers() {
  timers.forEach(clearTimeout);
  timers = [];
}

/* Builds the same badge component the pentagon uses. Markup is identical;
   only the modifier class changes, which is what carries the colour.
   Built node by node rather than with innerHTML, so the name can never be
   read as markup. */
function badge(name) {
  const el = document.createElement("div");
  el.className = `pick pick--${name}`;

  const disc = document.createElement("span");
  disc.className = "pick__disc";

  const icon = document.createElement("img");
  icon.className = "pick__icon";
  icon.src = `./images/icon-${name}.svg`;
  icon.alt = "";

  const label = document.createElement("span");
  label.className = "visually-hidden";
  label.textContent = name;

  disc.append(icon);
  el.append(disc, label);
  return el;
}

/* "win", "lose" or "draw", from the player's point of view. */
function judge(user, house) {
  if (user === house) return "draw";
  return BEATS[user].includes(house) ? "win" : "lose";
}

function setScore(next) {
  score = next;
  scoreEl.textContent = score;
  try {
    localStorage.setItem(STORE_KEY, score);
  } catch {
    /* Storage is full or blocked. The game still plays, the score just will
       not survive a refresh, so there is nothing useful to do here. */
  }
}

/* Paint whatever was saved before anything else happens. */
setScore(score);

function reset() {
  clearTimers();
  userSide.classList.remove("is-winner");
  houseSide.classList.remove("is-winner");
  outcome.hidden = true;
  match.hidden = true;
  picks.hidden = false;
  matchport.dataset.step = "1";
}

function play(name) {
  if (!PICKS.includes(name)) return;
  clearTimers();

  userSide.classList.remove("is-winner");
  houseSide.classList.remove("is-winner");
  outcome.hidden = true;

  userSlot.replaceChildren(badge(name));
  userSlot.classList.remove("match__badge--empty");

  /* The house side stays empty on purpose: that is step 2. */
  houseSlot.replaceChildren();
  houseSlot.classList.add("match__badge--empty");

  picks.hidden = true;
  match.hidden = false;
  matchport.dataset.step = "2";

  later(() => {
    const house = PICKS[Math.floor(Math.random() * PICKS.length)];
    houseSlot.classList.remove("match__badge--empty");
    houseSlot.replaceChildren(badge(house));
    matchport.dataset.step = "3";

    later(() => {
      const verdict = judge(name, house);

      if (verdict === "win") {
        setScore(score + 1);
        userSide.classList.add("is-winner");
        result.textContent = "You Win";
      } else if (verdict === "lose") {
        setScore(score - 1);
        houseSide.classList.add("is-winner");
        result.textContent = "You Lose";
      } else {
        /* The brief only scores a win and a loss, so a draw leaves the score
           alone and nobody gets the glow. */
        result.textContent = "Draw";
      }

      outcome.hidden = false;
      matchport.dataset.step = "4";
    }, RESULT_DELAY);
  }, HOUSE_DELAY);
}

picks.addEventListener("click", (event) => {
  const button = event.target.closest(".pick");
  if (button) play(button.dataset.pick);
});

playAgain.addEventListener("click", reset);
