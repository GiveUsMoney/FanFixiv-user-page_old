# FanFixiv User Page

> 현재 더이상 개발이 진행되지 않습니다.

## Install

### Node 16v (using nvm)
https://github.com/nvm-sh/nvm
```bash
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# set environment
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# download and use node 16
nvm install 16
nvm use 16
```
<br />

### Pakage Manager (using npm)
https://pnpm.io/installation
```bash
npm install -g pnpm
pnpm install
```

## ENV
```env
REACT_APP_PUBLIC_URL=YOUR_GITHUB_PAGE_PUBLIC_URL
REACT_APP_API_BASE_URL=YOUR_API_BASE_URL
```

## Run
```bash
pnpm start
```

## Build
```bash
pnpm build
```

```bash
pnpm lint
pnpm lint:fix
```