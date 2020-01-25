const child = require('child_process');
const getNxBaseHeadRefArgs = require('./get-nx-base-head-ref-args');

module.exports = function runCustomCommandsForAffected(options, context) {
    const { logger } = context;

    if (options.customCommands.length === 0) {
        logger.log('No custom commands provided for nx affected projects.');
        return;
    }

    if (options.projects.length === 0) {
        logger.log('No projects specified... will run custom commands over all affected projects');
    }

    let affectedProjects = child.execSync(`nx affected:plain ${getNxBaseHeadRefArgs(options, context)}`).toString().split(' ');
    affectedProjects = options.projects.length === 0 ? affectedProjects : affectedProjects.filter(p => options.projects.includes(p));

    if (affectedApps.length === 0) {
        logger.log('No relevant projects were affected');
        return;
    }

    affectedProjects.forEach(project => {
        options.customCommands.forEach(command => {
            logger.log(`Running command "${command}" for affected project ${project}`)
            child.execSync(command.replace('$project'), {
                stdio: "inherit"
            });
        })
    })
};
