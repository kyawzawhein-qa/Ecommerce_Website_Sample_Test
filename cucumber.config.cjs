module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: ['cucumber/steps/**/*.ts', 'cucumber/support/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: ['progress'],
    publishQuiet: true,
  },
};