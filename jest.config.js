module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '.+\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
      '@/(.)': '<rootDir>/src/$1',
      '@test/(.)': '<rootDir>/tests/$1',
    },
    restoreMocks: true,

  };