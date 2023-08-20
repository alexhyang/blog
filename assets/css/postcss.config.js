// themeDir two levels above dir of current module
const themeDir = __dirname + "/../../";

module.exports = {
  plugins: {
    // 'postcss-import': { path: [themeDir] },
    tailwindcss: { config: themeDir + "assets/css/tailwind.config.js" },
    autoprefixer: { path: [themeDir] },
  },
};
