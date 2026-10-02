import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repoBasePath = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repoName = process.env.GITHUB_REPOSITORY.split("/")[1];
  repoBasePath = repoName && !repoName.endsWith(".github.io") ? `/${repoName}` : "";
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? repoBasePath ?? "",
};

export default nextConfig;