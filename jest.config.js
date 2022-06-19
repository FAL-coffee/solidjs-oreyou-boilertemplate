module.exports = {
  preset: 'solid-jest/preset/browser',
  // testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|svg)$': '<rootDir>/__mocks__/assetMock.ts',
  },
  testPathIgnorePatterns: ['/node_modules/'],
};
