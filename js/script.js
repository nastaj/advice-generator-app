"use strict";

// HTML Elements
const adviceIdEl = document.querySelector(".advice-id");
const adviceEl = document.querySelector(".advice");
const generateBtn = document.querySelector(".generate-btn");

// App
class App {
  constructor() {
    generateBtn.addEventListener("click", this._renderAdvice.bind(this));
  }

  // Fetch random advice from API
  async _getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data;
  }

  // Render received slip in DOM
  async _renderAdvice() {
    const { slip } = await this._getAdvice();

    adviceIdEl.textContent = slip.id;
    adviceEl.textContent = `"${slip.advice}"`;
  }
}

const app = new App();
