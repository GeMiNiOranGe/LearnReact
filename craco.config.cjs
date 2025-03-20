const path = require('path');

/** @type {import('@craco/types').CracoConfig} */
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
