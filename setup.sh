#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
pnpm install --frozen-lockfile
pnpm test:e2e:install
printf '%s\n' 'Setup complete. Run sh run.sh to start the local fixture.'
