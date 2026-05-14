# Taylor Aukward — Portfolio

## Spotify + local dev — quick checklist

To get **Spotify working locally**, you need all of the following.

### 1) Environment variables (`.env.local`)

| Variable | Required for Spotify | Notes |
| --- | --- | --- |
| `SPOTIFY_CLIENT_ID` | Yes | From [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) → your app |
| `SPOTIFY_CLIENT_SECRET` | Yes | Same app page — **server only**, never `NEXT_PUBLIC_*` |
| `SPOTIFY_REFRESH_TOKEN` | Yes | From one-time Authorization Code exchange (see [Spotify setup](#spotify-setup-production-safe)) |
| `NEXT_PUBLIC_SITE_URL` | Recommended | e.g. `http://localhost:3000` locally; your real domain in production |

```bash
cp .env.example .env.local
```

Restart `npm run dev` after changing env vars.

### 2) Spotify Developer app settings

1. **Create an app** in the dashboard.
2. **Redirect URI**: add the exact URI you use in the authorize URL (must match **character-for-character** in the dashboard and in the token `curl`).
3. **Scopes** (required): `user-read-currently-playing` · `user-read-recently-played` · `user-top-read`
4. Authorize with the **Spotify account** you want the site to represent.

### 3) One-time refresh token

Complete the **authorize URL → `code` → token exchange** flow in [Spotify setup](#spotify-setup-production-safe) below. Put the refresh token in `SPOTIFY_REFRESH_TOKEN`.

### 4) No extra app code

All Spotify traffic uses **`/api/spotify/*`**; the client secret never ships to the browser.

---

A **Next.js** portfolio with a **vinyl / hi-fi–inspired** visual language and **secure Spotify integration** via serverless API routes (no client secrets).

## Tech

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Vercel**-ready

## Local development

```bash
npm install
cp .env.example .env.local
# Add Spotify vars (see checklist at top) if you want live listening data
npm run dev
```

Open `http://localhost:3000`. Environment variables are summarized in **[Spotify + local dev — quick checklist](#spotify--local-dev--quick-checklist)** above; see `.env.example` for a template.
## Spotify setup (production-safe)

This site uses the **Authorization Code** flow once to mint a **refresh token**, then the server exchanges that refresh token for short-lived access tokens. **Never** put `SPOTIFY_CLIENT_SECRET` in client code or public env vars.

### 1) Create a Spotify Developer application

1. Log in at [Spotify for Developers](https://developer.spotify.com/dashboard).
2. **Create app** → pick a name/description.
3. **Redirect URI** (Development): `http://127.0.0.1:3000` is fine if you handle the code manually (see step 3). For a small helper page you can use `http://127.0.0.1:3000/api/auth/spotify/callback` if you add one later — the simplest path below uses copy/paste from any redirect you whitelist.
4. Note **Client ID** and **Client Secret**.

### 2) Choose OAuth scopes

Add at least:

- `user-read-currently-playing`
- `user-read-recently-played`
- `user-top-read`

Optional (nice-to-have):

- `user-read-playback-state` (more detailed player polling in advanced setups)

### 3) Get an authorization code (manual, reliable)

Build an authorize URL (replace `CLIENT_ID` and `REDIRECT_URI`):

```
https://accounts.spotify.com/authorize?response_type=code&client_id=CLIENT_ID&scope=user-read-currently-playing%20user-read-recently-played%20user-top-read&redirect_uri=REDIRECT_URI
```

1. Visit the URL in a browser while logged into the Spotify account you want to display.
2. After approving, Spotify redirects to your `redirect_uri` with `?code=...` in the query string.
3. Copy the `code` value.

### 4) Exchange the code for tokens (server-side)

Run this **on your machine** (not in client-side code), substituting values:

```bash
curl -X POST "https://accounts.spotify.com/api/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Authorization: Basic $(printf '%s' 'CLIENT_ID:CLIENT_SECRET' | base64)" \
  -d "grant_type=authorization_code" \
  -d "code=PASTE_CODE_HERE" \
  -d "redirect_uri=REDIRECT_URI"
```

The JSON response includes **`access_token`** (short-lived) and **`refresh_token`** (long-lived). **Save the refresh token** — that’s what the app stores as `SPOTIFY_REFRESH_TOKEN`.

> If Spotify returns a new refresh token later, update your deployment environment. Rotations are uncommon but possible.

### 5) Configure `.env.local` / Vercel

Set:

- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`
- `NEXT_PUBLIC_SITE_URL` (example: `https://your-domain.com`)

On Vercel: **Project → Settings → Environment Variables** → add the same keys for **Production** (and Preview if you want Spotify there).

### 6) Caching & quotas

API routes use short `s-maxage` cache headers plus `unstable_cache` in the Spotify layer to reduce duplicate token exchanges and API chatter. Tune `revalidate` values in `src/lib/spotify/cache.ts` if you need fresher charts vs. lower API usage.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. **Import** the repo in Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy.

`NEXT_PUBLIC_SITE_URL` should match your production domain so Open Graph URLs resolve correctly.

## Project structure (high level)

- `src/app` — routes, layout, metadata, OG image
- `src/app/api/spotify/*` — secure Spotify proxies
- `src/lib/spotify/*` — token + fetch + caching
- `src/components/*` — UI sections and Spotify widgets
- `src/lib/data/*` — static portfolio content

## Scripts

```bash
npm run dev      # Next dev (Turbopack)
npm run build    # Production build
npm run start    # Start production server locally
npm run lint     # ESLint
```

## License

Private / personal — adjust as you like.
