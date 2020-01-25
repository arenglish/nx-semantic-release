const { prepareNx, verifyNx, resolveConfigNx } = require("./lib");

let verified;

async function verifyConditions(pluginConfig, context) {
  resolveConfigNx(pluginConfig, context);

  verifyNx(pluginConfig, context);
  verified = true;
}

async function prepare(pluginConfig, context) {
  resolveConfigNx(pluginConfig, context);

  if (!verified) {
    verifyNx(pluginConfig, context);
    verified = true;
  }

  return prepareNx(pluginConfig, context);
}

module.exports = { verifyConditions, prepare };
