const { publish } = require('gh-pages');
const path = require('path');
const pkg = require('../package.json');



publish(
  path.join(process.cwd(), program.dist),
  {
    repo: "git@github.com:anathik/anathik.github.io.git",
    silent: false,
    branch: "master",
    src: "**/*",
    dest: ".",
    message: `New deploy ${new Date().toLocaleDateString()}`,
    tag: new Date().toLocaleDateString(),
    dotfiles: false,
    add: false,
    only: undefined,
    remote: "origin",
    push: true
  },
  function(err) {
    if (err) {
      process.stderr.write(err.message + '\n');
      return process.exit(1);
    }
    process.stderr.write('Published\n');
  }
);