# FanFixiv User Page

> 팬 픽시브 웹 페이지

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

## Run
```bash
pnpm start
```

## Build
```bash
pnpm build
```

## Lint
```json
# `settings.json`
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}
```

```bash
pnpm lint
pnpm lint:fix
```