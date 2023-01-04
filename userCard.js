class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `my name`;
  }
}

window.customElements.define("user-card", UserCard);
