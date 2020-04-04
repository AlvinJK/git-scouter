import { fetcher } from "../helpers";

const getUserRepositories = (username) => {
  return fetcher.get(`/users/${username}/repos`);
};

const getRepositoryReadme = (username, repo) => {
  return fetcher.get(`/repos/${username}/${repo}/readme`);
};

export { getUserRepositories, getRepositoryReadme };
