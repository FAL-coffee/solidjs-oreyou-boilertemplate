module.exports = {
  // testEnvironment: "jsdom",
  // preset: ["@babel/preset-env", "@babel/preset-react"],
  roots: ['../'],
  // transformIgnorePatterns: [
  //   'node_modules/?!core-js',
  // ],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  preset: 'solid-jest/preset/node',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  // moduleDirectories: ["node_modules", "../"],
  testPathIgnorePatterns: ['/node_modules/'],
};
// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//     roots: ['<rootDir>/src'],
//     modulePaths: ['node_modules', '<rootDir>/src'],
//     moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
//     testRegex: '.test.tsx',
//   };
//   // preset: 'solid-jest/preset/node',
