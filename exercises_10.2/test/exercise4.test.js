const { getRepos } = require('../exercise4');

describe('search for a repository in github', () => {
  const url = 'https://api.github.com/users/tryber/repos';

  it('search for specific repository', async () => {
    await expect(getRepos(url)).toContain('sd-01-week4-5-project-todo-list');
    await expect(getRepos(url)).toContain('sd-01-week4-5-project-meme-generator');
  });
});
