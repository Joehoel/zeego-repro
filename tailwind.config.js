const nativewind = require("nativewind/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**.tsx"],
  theme: {
    extend: {},
  },
  presets: [nativewind],
  plugins: [],
}

