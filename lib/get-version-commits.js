const child = require('child_process');

function getCommitOfLastVersion(options, context) {
  const { lastRelease } = context;

  if (lastRelease && lastRelease.gitHead) {
    return lastRelease.gitHead;
  }

  const command = 'git rev-list --max-parents=0 HEAD';
  const lastCommit = child.execSync(command).toString();
  return lastCommit;
};

function getCommitOfNextVersion(options, context) {
  const { nextRelease } = context;

  return nextRelease.gitHead;
};

module.exports = function getVersionCommits(options, context) {
  return {
    lastVersionCommit: getCommitOfLastVersion(options, context),
    nextVersionCommit: getCommitOfNextVersion(options, context)
  }
}

