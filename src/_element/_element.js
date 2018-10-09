import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class CtrlAltCanoeApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'ctrl-alt-canoe-app'
      }
    };
  }
}

window.customElements.define('ctrl-alt-canoe-app', CtrlAltCanoeApp);
