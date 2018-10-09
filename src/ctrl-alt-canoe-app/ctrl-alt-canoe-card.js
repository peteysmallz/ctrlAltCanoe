import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';

class CtrlAltCanoeCard extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        @apply --layout-vertical;
        @apply --layout-center-justified;
        text-align: left;
        margin: 0;
      }

      paper-card {
        box-shadow: none;
        padding: 20px;
      }

      paper-card:hover {
        box-shadow: var(--paper-material-elevation-2_-_box-shadow);
        transition: box-shadow .15s cubic-bezier(.4,0,.2,1);
      }

      .card-actions {
        border: none;
      }
    </style>
    <paper-card image="images/hero.jpg" alt="Emmental">
      <div class="card-content">
        Emmentaler or Emmental is a yellow, medium-hard cheese that originated in the area around Emmental, Switzerland. It is one of the cheeses of Switzerland, and is sometimes known as Swiss cheese.
      </div>
      <div class="card-actions">
        <paper-button>Share</paper-button>
        <paper-button>Explore!</paper-button>
      </div>
    </paper-card>
    `;
  }
  static get is() { return 'ctrl-alt-canoe-card'; }
}
customElements.define(CtrlAltCanoeCard.is, CtrlAltCanoeCard);