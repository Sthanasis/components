import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  moduleNameMapper: {
    '\\.(css|scss|less|sass)$': '<rootDir>/jest/__mocks__/styleMock.ts',
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
    '!src/assets/data/*',
    '!src/utilities/api/*',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleDirectories: ['node_modules', 'jest'],
  modulePaths: ['<rootDir>', 'src/*'],
};

export default config;
