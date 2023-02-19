import template from './template.mjs';

class TlHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector(`option[value="${document.location.pathname}"]`).selected = true;
    }

    page(select) {
        document.location = select.value;
    }
}

customElements.define("tl-header", TlHeader);