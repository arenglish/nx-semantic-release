const runNxAffected = require('./run-nx-affected');
const runCustomCommandsForAffected = require('./run-custom-commands-for-affected');

module.exports = async function prepareNx(options, context) {
  const { logger } = context;

  runNxAffected(options, context);
  runCustomCommandsForAffected(options, context);

  return true;
};
