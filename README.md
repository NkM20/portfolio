# Next Portfolio (Next.js + TypeScript + Tailwind)

This folder contains the Next.js portfolio scaffold styled as a CLI/IDE dark theme. It is ready to be initialized in git and pushed to your GitHub account.

Quick status
- Files are created and a `.gitignore` exists in this folder.
- I attempted to run `git init` and commit but git is not available in the current environment (PowerShell reported `git : The term 'git' is not recognized`). You can perform the git steps locally using the commands below.

Recommended repo name: `portfolio` (you can choose another name).

1) Install Git (if not installed)

If you don't have Git on Windows, install it (one of these options):

PowerShell (winget):

```powershell
winget install --id Git.Git -e --source winget
```

Or download the installer from:

https://git-scm.com/download/win

2) Initialize local repo, commit and add remote (PowerShell)

Replace `yourusername` and `repo-name` below. If you prefer SSH, use the SSH remote URL instead of HTTPS.

```powershell
cd C:\Users\Nando\portfolio\next-portfolio
# initialize and commit
git init
git add .
git commit -m "chore: initial Next.js portfolio scaffold with CLI-style theme"

# create main branch (optional on older Git)
git branch -M main

# add remote (HTTPS example)
git remote add origin https://github.com/NkM20/portfolio.git

# push to GitHub
git push -u origin main
```

3) Create the remote repository on GitHub

Option A — create repo on the website
- Go to https://github.com/new and create a repository named `portfolio` (or whatever you choose). Do NOT select initialize with README (we already have files). Then run the `git remote add` + `git push` commands above.

Option B — use GitHub CLI (if installed)

```powershell
gh auth login
gh repo create NkM20/portfolio --public --source=. --remote=origin --push
```

4) Environment variables (optional)

To let the site use the GitHub API at build time without rate limits, set a `GITHUB_TOKEN` in your environment (create a personal access token on GitHub with `repo`/`public_repo` scope if needed):

PowerShell (temporary for current session):

```powershell
$env:GITHUB_TOKEN = 'ghp_xxx'
$env:GITHUB_USERNAME = 'NkM20'
npm run dev
```

5) After pushing
- Deploy to Vercel or GitHub Pages. Vercel is recommended for Next.js: connect your GitHub repo and set `GITHUB_TOKEN` as an environment variable if you want server-side GitHub requests.

If you'd like, after you push I can:
- Create a PR that changes repo metadata, or
- Add GitHub Actions for CI, or
- Help you configure Vercel deployment and environment variables.
