import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");   
    }

    async getHtml() {
        return `
        <h1>Sukuna's victims</h1>
        <p>
            Yaorozu </p>
            Megumi's sister </p>
            Megumi </p>
            Gojo  </p>
            Kashimo  </p>
            Higuruma  </p>
            Jujutsu Kaisen
        </p>
    `;
    }
}