
# Rolling Clouds

Rickrolling using [Cloudflare Workers](https://workers.cloudflare.com) and [Cloudflare Pages Functions](https://pages.cloudflare.com).

## Features

- Randomly chosen rick roll from pool of urls
- Discord embeds are blocked by default
- Supports "never loading images" in Discord by slapping an image extension at the end
- Works on Workers and Pages

## Deploying to Workers

Just run `wrangler publish` ✨

## Deploying to Pages (Functions)

Create a new pages project with the following options:

- Build command: `mkdir dist`
- Build output directory: `/dist`

Also add the following environment variable:

- `NODE_VERSION`: `16`

Then click deploy ✨
