module.exports = async function resolveConfigNgx(options, context) {
  options.targets = options.targets || [];
  options.projects = options.projects || [];
  options.customCommands = options.customCommands || [];
  options.extraArgs = options.extraArgs || [];
};
