import {
    BaseView
} from "./base-view";
import {
    html
} from "lit-html";

class NotFoundView extends BaseView {
    render() {
        return html `
            <h1>Not Found!</h1>
        `;
    };
};

customElements.define("not-found-view", NotFoundView);