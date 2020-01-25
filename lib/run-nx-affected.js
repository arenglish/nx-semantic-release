const child = require('child_process');
const getNxBaseHeadRefArgs = require('./get-nx-base-head-ref-args');

module.exports = function runNxAffected(options, context) {
    const { logger } = context;

    options.targets.forEach(target => {
      const command = `nx affected:${target} ${getNxBaseHeadRefArgs(options, context)} ${options.extraArgs.join(' ')}`;
      console.log(command);

      logger.log(`Running nx:affected on target ${target}`);

      child.execSync(command, {
        stdio: "inherit"
      });
    })
};
