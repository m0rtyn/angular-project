const ghPages = require('gh-pages');

ghPages.publish('dist', {
  branch: 'master',
}, err => console.log(err));
