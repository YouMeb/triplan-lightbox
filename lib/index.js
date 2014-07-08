'use strict';

var LightBox = require('lightbox');

module.exports = TriplanLightBox;

TriplanLightBox.prototype = Object.create(LightBox.prototype);

function TriplanLightBox(el) {
  LightBox.call(this, el);
  this.el.classList.add('triplan');
}
