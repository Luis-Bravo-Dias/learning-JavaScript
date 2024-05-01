import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Viewing Post");   
    }

    async getHtml() {
        console.log(this.params.id)
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