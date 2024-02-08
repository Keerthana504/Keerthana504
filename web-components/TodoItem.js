const template = document.createElement("template");
template.innerHTML = `<style> 
label {
    color:green;
    font-size:25px;
    display:block}
}
.description {
    font-size:15px !important; 
    color:red !important;
}
</style>

    <label>
        <input type="checkbox">
        <slot></slot>
        <span class="description">
            <slot name="description"></slot>
        </span>
    </label>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, oldVakue, newValue) {
    console.log(name, oldValue, newValue);
  }

  updateChecked(value) {
    this.checkbox.checked - value != null && value !== "false";
  }
}

customElements.define("todo-item", TodoItem);
