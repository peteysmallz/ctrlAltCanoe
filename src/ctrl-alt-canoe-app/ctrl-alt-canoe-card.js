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
        margin: 10px;
        border-radius: 0;
      }

      paper-card:hover {
        box-shadow: var(--paper-material-elevation-2_-_box-shadow);
        transition: box-shadow .15s cubic-bezier(.4,0,.2,1);
      }

      .card-headline {
        font-family: var(--app-primary-font);;
        font-size: 24px;
        line-height: 32px;
        color: #424242;
        margin-top: 9px;
        letter-spacing: .28px;
      }

      .card-content {
        padding: 0;
        margin-top: 25px;
        text-align: left;
      }

      .card-dek {
        font-family: var(--app-secondary-font);
        font-size: 14px;
        line-height: 20px;
        color: #424242;
        margin-top: 4px;
      }

      .card-actions {
        border: none;
        padding: 0;
        font-size: .875rem;
        font-weight: 400;
        font-style: normal;
        color: #5f6368;
        font-family: var(--app-highlight-font);;
        margin-top: 21px;
        text-transform: capitalize;
      }
    </style>
    <paper-card image="images/hero.jpg" alt="Emmental">
      <div class="card-content">
        <div class="card-headline">Design Notes</div>
        <div class="card-dek">Emmentaler or Emmental is a yellow, medium-hard cheese that originated in the area around Emmental, Switzerland. It is one of the cheeses of Switzerland, and is sometimes known as Swiss cheese.</div>
        <div class="card-actions">Profile</div>
      </div>
    </paper-card>
    `;
  }
  static get is() { return 'ctrl-alt-canoe-card'; }
}
customElements.define(CtrlAltCanoeCard.is, CtrlAltCanoeCard);