import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './ctrl-alt-canoe-ripple-container.js';

class CtrlAltCanoeTab extends PolymerElement {
  static get template() {
    return html`
    <style>
      [hidden] {
        display: none !important;
      }

      :host {
        display: inline-block;
        position: relative;
        font-family: var(--app-secondary-font);
      }

      #overlay {
        pointer-events: none;
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        @apply --ctrl-alt-canoe-tab-overlay;
      }

      :host(.ctrl-alt-canoe-tabs-overlay-static-above) #overlay {
        display: block;
      }
    </style>
    <div id="overlay"></div>
    <ctrl-alt-canoe-ripple-container>
      <slot></slot>
    </ctrl-alt-canoe-ripple-container>
    `;
  }
  static get is() { return 'ctrl-alt-canoe-tab'; }
}

customElements.define(CtrlAltCanoeTab.is, CtrlAltCanoeTab);
