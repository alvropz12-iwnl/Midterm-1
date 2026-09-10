class RulesModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="rules-container" aria-label="Game rules">
        <button
          class="rules-button"
          type="button"
          aria-haspopup="dialog"
          aria-controls="rules-dialog"
          aria-expanded="false"
        >
          Rules
        </button>
      </section>

      <div class="modal-backdrop" hidden>
        <section
          class="rules-modal"
          id="rules-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="rules-title"
        >
          <header class="rules-modal__header">
            <h1 class="rules-modal__title" id="rules-title">Rules</h1>
            <button class="rules-modal__close" type="button" aria-label="Close rules">
              <img src="./images/icon-close.svg" alt="">
            </button>
          </header>

          <img
            class="rules-modal__diagram"
            src="./images/image-rules-bonus.svg"
            alt="Rock Paper Scissors Lizard Spock winning combinations"
          >
        </section>
      </div>
    `;

    this.openButton = this.querySelector(".rules-button");
    this.closeButton = this.querySelector(".rules-modal__close");
    this.backdrop = this.querySelector(".modal-backdrop");

    this.openButton.addEventListener("click", () => this.open());
    this.closeButton.addEventListener("click", () => this.close());
    this.backdrop.addEventListener("click", (event) => {
      if (event.target === this.backdrop) {
        this.close();
      }
    });

    document.addEventListener("keydown", this.handleKeydown);
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.key === "Escape" && !this.backdrop.hidden) {
      this.close();
    }
  };

  open() {
    this.backdrop.hidden = false;
    this.openButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("modal-open");
    this.closeButton.focus();
  }

  close() {
    this.backdrop.hidden = true;
    this.openButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("modal-open");
    this.openButton.focus();
  }
}

customElements.define("rules-modal", RulesModal);
