/**
 * @file: 写一个简单的脚本，根据package.json version 自动打tag，推送npm
 * @author: silverbulletlee
 */

const { execSync } = require('child_process');

const version = require('../package').version;

const getTags = () => execSync('git tag').toString().split('\n');

!getTags().includes(version) && execSync(`git tag v${version} && git push origin master:master --tags`);