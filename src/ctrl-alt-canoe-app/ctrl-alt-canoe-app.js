import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';

import './ctrl-alt-canoe-image.js';
import './ctrl-alt-canoe-category-data.js';
import './ctrl-alt-canoe-tab.js';
import './ctrl-alt-canoe-tabs.js';
import './ctrl-alt-canoe-card.js';

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
          position: relative;
          padding-top: 270px;
          padding-bottom: 64px;
          min-height: 100vh;
          --app-primary-color: #202020;
          --app-secondary-color: #757575;
          --app-accent-color: #172C50;
          --paper-button-ink-color: var(--app-accent-color);
          --paper-icon-button-ink-color: var(--app-accent-color);
          --paper-spinner-color: var(--app-accent-color);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          color: var(--app-primary-color);
        }

        app-header {
          @apply --layout-fixed-top;
          z-index: 1;
          background-color: rgba(255, 255, 255, 0.95);
          --app-header-shadow: {
            box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.2);
            height: 10px;
            bottom: -10px;
          };
        }

        .logo {
          text-align: center;
        }

        ctrl-alt-canoe-image {
          position: relative;
          height: 150px;
          overflow: hidden;
          margin: 20px 0;
          --ctrl-alt-canoe-image-img: {
            position: absolute;
            top: 0;
            bottom: 0;
            left: -9999px;
            right: -9999px;
            max-width: none;
          };
        }

        #tabContainer {
          position: relative;
          height: 66px;
        }

        ctrl-alt-canoe-tabs, ctrl-alt-canoe-tab {
          --ctrl-alt-canoe-tab-overlay: {
            border-bottom: 2px solid var(--app-accent-color);
          };
        }

        ctrl-alt-canoe-tabs {
          height: 100%;
        }

        ctrl-alt-canoe-tab {
          margin: 0 10px;
        }

        ctrl-alt-canoe-tab a {
          display: inline-block;
          outline: none;
          padding: 9px 5px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          color: var(--app-primary-color);
        }  


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
      <app-header role="navigation" id="header" effects="waterfall" condenses="" reveals="">
        <app-toolbar>
          <div class="logo" main-title="">
            <a href="/" aria-label="CTRL ALT CANOE Home">
              <ctrl-alt-canoe-image src="images/logo-simple.svg" alt="logo"></ctrl-alt-canoe-image>
            </a>
          </div>
        </app-toolbar>

        <ctrl-alt-canoe-category-data categories="{{categories}}"></ctrl-alt-canoe-category-data>

        <div id="tabContainer">

            <ctrl-alt-canoe-tabs selected="[[categoryName]]" attr-for-selected="name">
              <dom-repeat items="[[categories]]" as="category" initial-count="4">
                <template>
                <ctrl-alt-canoe-tab name="[[category.name]]">
                  <a>[[category.title]]</a>
                </ctrl-alt-canoe-tab>
                </template>
              </dom-repeat>
            </ctrl-alt-canoe-tabs>

        </div>
      </app-header>
      
      <!-- hidden$="[[failure]]" -->
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
      </ul>

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
