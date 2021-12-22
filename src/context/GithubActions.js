import axios from 'axios';
import { GITHUB_TOKEN, GITHUB_URL } from '../../config';

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async text => {
  const response = await github.get(`/search/users?q=${text}`);
  return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async login => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
