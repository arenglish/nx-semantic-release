module.exports = function verifyNx(options, context) {
  if (typeof options.targets !== 'object' || options.targets.length === undefined) {
    throw new Error('targets option must be an array');
  }
  if (typeof options.customCommands !== 'object' || options.customCommands.length === undefined) {
    throw new Error('customCommands option must be an array');
  }
  return true;
};
