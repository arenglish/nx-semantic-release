const getVersionCommits = require('./get-version-commits');

module.exports = function getNxBaseHeadRefArgs(options, context) {
  const { lastVersionCommit, nextVersionCommit } = getVersionCommits(options, context);
  return `--base=${lastVersionCommit} --head=${nextVersionCommit}`;
}

