import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");   
    }

    async getHtml() {
        return `
        <h1>Sukuna's victims</h1>
        <p>
            Geto's daughters  </p>
            Jogo  </p>
            Mahoraga  </p>
            Yuji's mental health
        </p>
        <p>
            <a href="/settings" data-link>In the manga</a>.
        </p>
    `;
    }
}