// themeDir two levels above dir of current module
module.exports = {
  plugins: {
    // 'postcss-import': { path: [themeDir] },
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
};
