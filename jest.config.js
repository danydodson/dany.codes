module.exports = {
  testRegex: '((\\.|/*.)(spec))\\.js?$',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],
  coverageReporters: ['text', 'html']
}
