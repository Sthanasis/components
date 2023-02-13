import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(ttf)$': '<rootDir>/jest/fileMocks.ts',
    '.*getters': '<rootDir>/jest/sortWorker.mock.ts',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.ts',
    '!src/assets/*',
    '!src/utilities/workers/*',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleDirectories: ['node_modules', 'jest'],
  modulePaths: ['<rootDir>', 'src/*'],
};

export default config;
