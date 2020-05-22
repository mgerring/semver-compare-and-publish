const core = require('@actions/core');
const github = require('@actions/github');
const semver_compare = require('semver-compare');

try {
  const version_a = core.getInput('version_a');
  const version_b = core.getInput('version_b');

  const comparison = semver_compare(version_a, version_b);
  const higher_version = '';

  if (comparison > 0) {
    higher_version = 'version_a';
  } else {
    higher_version = 'version_b';
  }

  core.setOutput('higher_version', higher_version);
} catch (error) {
  core.setFailed(error.message);
}
