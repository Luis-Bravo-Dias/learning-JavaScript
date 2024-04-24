import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");   
    }

    async getHtml() {
        return `
        <h1>Malevolous Kitchen</h1>
        <p>
            Welcome, now let's cook.
        </p>
        <p>
            <a href="/posts" data-link>Domain Expansion</a>.
        </p>
    `;
    }
}