import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import { IronSelectableBehavior } from '@polymer/iron-selector/iron-selectable.js';
import './ctrl-alt-canoe-tabs-overlay.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';

class CtrlAltCanoeTabs extends mixinBehaviors(
  [IronSelectableBehavior], PolymerElement) {

  static get template() {
    return html`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center-center;
      }

      #container {
        position: relative;
      }

      ctrl-alt-canoe-tabs-overlay {
        @apply --ctrl-alt-canoe-tab-overlay;
      }
    </style>
    <div id="container">
      <ctrl-alt-canoe-tabs-overlay id="overlay"></ctrl-alt-canoe-tabs-overlay>
      <slot></slot>
    </div>
    `;
  }

  static get is() { return 'ctrl-alt-canoe-tabs'; }

  static get observers() { return [
    '_onSelectedItemChanged(selectedItem)'
  ]}

  _onSelectedItemChanged(selectedItem) {
    if (selectedItem === undefined && this.selected) return;

    this.$.overlay.target = selectedItem;
  }
}

customElements.define(CtrlAltCanoeTabs.is, CtrlAltCanoeTabs);
