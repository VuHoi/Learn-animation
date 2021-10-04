import { History } from 'history';

export interface RootProps {
  history: History;
}

export interface HeadProps {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
}

export interface GithubRepository {
  id: number;
  stargazers_count: number;
  full_name: string;
  description: string;
  html_url: string;
}

export interface GithubRepositories {
  total_count: number;
  items: GithubRepository[];
}
