const CracoLessPlugin = require("craco-less");
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@Components": path.join(path.resolve(__dirname, "./src/components")),
      "@Layout": path.join(path.resolve(__dirname, "./src/layout")),
    },
  },
  plugins: [],
};
