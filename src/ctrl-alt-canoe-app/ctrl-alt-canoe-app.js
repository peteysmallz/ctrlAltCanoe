import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';

import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

import './ctrl-alt-canoe-image.js';
import './ctrl-alt-canoe-category-data.js';
import './ctrl-alt-canoe-tab.js';
import './ctrl-alt-canoe-tabs.js';
import './ctrl-alt-canoe-icons.js';
import './ctrl-alt-canoe-home.js';

// TODO: Lazy load these files
import "@polymer/paper-icon-button/paper-icon-button.js";
import "@polymer/app-layout/app-drawer/app-drawer.js";

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
          padding-top: 210px;
          padding-bottom: 64px;
          min-height: 100vh;
          --app-primary-color: #424242;
          --app-secondary-color: #757575;
          --app-accent-color: #172C50;
          --app-primary-font: Google Sans;
          --app-secondary-font: Roboto;
          --app-highlight-font: Roboto Mono;
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

        app-drawer {
          z-index: 3;
        }

        paper-icon-button {
          color: var(--app-primary-color);
        }

        .back-btn {
          display: none; /* Look into fixing this - it's needed on some routes */
        }

        .menu-btn {
          display: none;
        }

        .logo-container img {
          display: block;
          margin: 0px auto;
          height: 100px;
        }

        ctrl-alt-canoe-tabs, ctrl-alt-canoe-tab {
          --ctrl-alt-canoe-tab-overlay: {
            border-bottom: 2px solid var(--app-accent-color);
          };
        }

        ctrl-alt-canoe-tabs {
          height: 100%;
          width: 100%;
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

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          line-height: 40px;
          text-decoration: none;
          color: var(--app-secondary-color);
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }

        /* small screen */
        @media (max-width: 767px) {
          :host {
            padding-top: 64px;
          }

          .menu-btn {
            display: block;
          }

          .logo-container {
            display: none;
          }

          ctrl-alt-canoe-tabs {
            display: none;
          }
        }

        .helper {
          display: inline-block;
          height: 100%;
          vertical-align: middle;
        }

      </style>

      <!--
        app-location and app-route elements provide the state of the URL for the app.
      -->
      <app-location route="{{route}}"></app-location>
      <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

      <iron-media-query query="max-width: 767px" query-matches="{{smallScreen}}"></iron-media-query>

      <app-header  role="navigation" id="header" effects="waterfall" condenses="" reveals="">
        
        <div class="logo-container">
          <span class="helper"></span>
          <img src="images/logo-simple.svg" class="logo">
        </div>

        <app-toolbar sticky class="toolbar">

          <div class="left-bar-item">
            <paper-icon-button class="menu-btn" icon="menu" on-click="_toggleDrawer" aria-label="Categories">
            </paper-icon-button>
            <a class="back-btn" href="/list/[[categoryName]]" tabindex="-1">
              <paper-icon-button icon="arrow-back" aria-label="Go back"></paper-icon-button>
            </a>
          </div>

          <ctrl-alt-canoe-category-data categories="{{categories}}"></ctrl-alt-canoe-category-data>
          <ctrl-alt-canoe-tabs selected="[[categoryName]]" attr-for-selected="name">
            <dom-repeat items="[[categories]]" as="category" initial-count="4">
              <template>
                <ctrl-alt-canoe-tab name="[[category.name]]">
                  <a>[[category.title]]</a>
                </ctrl-alt-canoe-tab>
              </template>
            </dom-repeat>
          </ctrl-alt-canoe-tabs>
        </app-toolbar>
      </app-header>

      <!-- Lazy-create the drawer for small screen sizes. -->
      <dom-if if="[[shouldRenderDrawer]]">
        <!-- Two-way bind \`drawerOpened\` since app-drawer can update \`opened\` itself. -->
        <template>
          <app-drawer opened="{{drawerOpened}}" swipe-open="" tabindex="0">
            <iron-selector role="navigation" class="drawer-list" selected="[[categoryName]]" attr-for-selected="name">
              <dom-repeat items="[[categories]]" as="category" initial-count="4">
                <template>
                  <a name="[[category.name]]" href="/list/[[category.name]]">[[category.title]]</a>
                </template>
              </dom-repeat>
            </iron-selector>
          </app-drawer>
        </template>
      </dom-if>

      <iron-pages role="main" selected="[[page]]" attr-for-selected="name" selected-attribute="visible" fallback-selection="404">
        <ctrl-alt-canoe-home name="home"></ctrl-alt-canoe-home>
      </iron-pages>

    `;
  }
  ready() {
    super.ready();
    this.drawerOpened = false;
    this.shouldRenderDrawer = true;
  }

  static get observers() { return [
    '_routePageChanged(routeData.page)'
  ]}

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      _shouldRenderDrawer: {
        computed: '_computeShouldRenderDrawer(smallScreen, loadComplete)'
      },
      _shouldShowTabs: {
        computed: '_computeShouldShowTabs(smallScreen)'
      }
    };
  }
  _routePageChanged(page) {
    if (this.page === 'list') {
      this._listScrollTop = window.pageYOffset;
    }

    this.page = page || 'home';

    // Close the drawer - in case the *route* change came from a link in the drawer.
    this.drawerOpened = false;
  }
  _pageChanged(page, oldPage) {
    if (page != null) {
      let cb = this._pageLoaded.bind(this, Boolean(oldPage));
      switch (page) {
        case 'list':
          import('./shop-list.js').then(cb);
          break;
        case 'detail':
          import('./shop-detail.js').then(cb);
          break;
        case 'cart':
          import('./shop-cart.js').then(cb);
          break;
        case 'checkout':
          import('./shop-checkout.js').then(cb);
          break;
        default:
          this._pageLoaded(Boolean(oldPage));
      }
    }
  }
  _pageLoaded(shouldResetLayout) {
    // this._ensureLazyLoaded();
    if (shouldResetLayout) {
      // The size of the header depends on the page (e.g. on some pages the tabs
      // do not appear), so reset the header's layout only when switching pages.
      timeOut.run(() => {
        this.$.header.resetLayout();
      }, 1);
    }
  }
  _toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
  }
  _computeShouldShowTabs(smallScreen) {
    return !smallScreen;
  }
  _computeShouldRenderDrawer(smallScreen, loadComplete) {
    return smallScreen && loadComplete;
  }
}

window.customElements.define('ctrl-alt-canoe-app', CtrlAltCanoeApp);
