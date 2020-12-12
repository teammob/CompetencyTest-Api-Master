module.exports = {
  roots: ['<rootDir>/src/'],
  testRegex: '\\.(test)\\.js$',
  moduleFileExtensions: ['js', 'json'],
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  testResultsProcessor: 'jest-sonar-reporter',
  testPathIgnorePatterns: ['node_modules', 'dist'],
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/data/**',
    '!**/dist/**'
  ]
};
