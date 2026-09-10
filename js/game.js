const PICKS = ["rock", "paper", "scissors", "lizard", "spock"];

/* How long the house "thinks" before showing its pick. */
const HOUSE_DELAY = 1400;

const matchport = document.getElementById("matchport");
const picks = document.getElementById("picks");
const match = document.getElementById("match");
const userSlot = document.getElementById("user-pick");
const houseSlot = document.getElementById("house-pick");

let houseTimer = null;

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

function play(name) {
  if (!PICKS.includes(name)) return;
  clearTimeout(houseTimer);

  userSlot.replaceChildren(badge(name));

  /* The house side stays empty on purpose: that is step 2. */
  houseSlot.replaceChildren();
  houseSlot.classList.add("match__slot--empty");

  picks.hidden = true;
  match.hidden = false;
  matchport.dataset.step = "2";

  houseTimer = setTimeout(() => {
    const house = PICKS[Math.floor(Math.random() * PICKS.length)];
    houseSlot.classList.remove("match__slot--empty");
    houseSlot.replaceChildren(badge(house));
    matchport.dataset.step = "3";
  }, HOUSE_DELAY);
}

picks.addEventListener("click", (event) => {
  const button = event.target.closest(".pick");
  if (button) play(button.dataset.pick);
});
