import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './ctrl-alt-canoe-card.js';

class CtrlAltCanoeHome extends PolymerElement {
  static get template() {
    return html`
    <style>

      .grid {
        @apply --layout-horizontal;
        @apply --layout-wrap;
        @apply --layout-justified;
        margin: 0 10px 32px 10px;
        padding: 0;
        list-style: none;
      }

      .grid li {
        -webkit-flex: 1 1;
        flex: 1 1;
        -webkit-flex-basis: 33%;
        flex-basis: 33%;
        max-width: 33%;
      }

      .grid a {
        display:block;
        text-decoration: none;
      }

      @media (max-width: 767px) {
        .hero-image {
          display: none;
        }

        .grid  li {
          -webkit-flex-basis: 100%;
          flex-basis: 100%;
          max-width: 100%;
        }
      } 
    </style>

    <ul class="grid">
      <li>
        <!-- <a href$="[[_getItemHref(item)]]"><shop-list-item item="[[item]]"></shop-list-item></a> -->
        <ctrl-alt-canoe-card></ctrl-alt-canoe-card>
      </li>
      <li>
        <ctrl-alt-canoe-card></ctrl-alt-canoe-card>
      </li>
      <li>
        <ctrl-alt-canoe-card></ctrl-alt-canoe-card>
      </li>
      <li>
        <ctrl-alt-canoe-card></ctrl-alt-canoe-card>
      </li>
      <li>
        <ctrl-alt-canoe-card></ctrl-alt-canoe-card>
      </li>
      <li>
        <ctrl-alt-canoe-card></ctrl-alt-canoe-card>
      </li>
    </ul>
`;
  }

  static get is() { return 'ctrl-alt-canoe-home'; }

  static get properties() { return {


  }}
}

customElements.define(CtrlAltCanoeHome.is, CtrlAltCanoeHome);
