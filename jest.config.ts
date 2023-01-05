import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(ttf)$': '<rootDir>/jest/fileMocks.ts',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.ts', '!src/assets/*'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleDirectories: ['node_modules', 'jest'],
  modulePaths: ['<rootDir>', 'src/*'],
};

export default config;
