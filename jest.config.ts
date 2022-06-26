// module.exports = {
//   preset: 'solid-jest/preset/browser',
//   // testEnvironment: 'jsdom',
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest',
//     '^.+\\.(j|t)sx?$': 'babel-jest',
//   },
//   moduleNameMapper: {
//     '^.+\\.(css|svg)$': '<rootDir>/__mocks__/assetMock.ts',
//   },
//   testPathIgnorePatterns: ['/node_modules/'],
// };

export default {
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],

  coverageProvider: "babel",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  moduleNameMapper: {
    "^solid-js$": "solid-js/dist/solid.cjs",
    "^solid-js/web$": "solid-js/web/dist/web.cjs",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  // setupFiles: ["<rootDir>/node_modules/jsdom.js"],

  testEnvironment: "jest-environment-jsdom",
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/jest/babelTransform.js",
    // "^.+\\.css$": "/jest/cssTransform.js",
    // "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/jest/fileTransform.js",
  },

  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(cjs|js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
