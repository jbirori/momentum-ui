const generateTokenJSON = require("./generateTokens");

const border = require("../src/core/border");
const colors = require("../src/core/colors");
const font = require("../src/core/font");
const lineHeight = require("../src/core/lineHeight");
const opacity = require("../src/core/opacity");
const radius = require("../src/core/radius");
const semanticColor = require("../src/core/semanticColor");
const zIndex = require("../src/core/zIndex");

(async function() {
  try {
    await generateTokenJSON('border', border);
    await generateTokenJSON('colors', colors);
    await generateTokenJSON('font', font);
    await generateTokenJSON('lineHeight', lineHeight);
    await generateTokenJSON('opacity', opacity);
    await generateTokenJSON('radius', radius);
    await generateTokenJSON('semanticColor', semanticColor);
    await generateTokenJSON('zIndex', zIndex);
  } catch (e) {
    console.error("Failed to generate tokens\n", e);
  }
})();
