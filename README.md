# no

A SvelteKit app that gives you a random, lovingly-crafted "no" reason, inspired by [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service).

## 🛠️ Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [localhost:5173](http://localhost:5173) to view the app.

## 🚀 Building

To create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## ☁️ Deploying to Cloudflare Pages

1. **Push your code to GitHub or GitLab.**
2. **Go to [Cloudflare Pages](https://pages.cloudflare.com/) and create a new project.**
3. **Set the following build settings:**
   - **Framework preset:** SvelteKit
   - **Build command:** `pnpm build`
   - **Build output directory:** `.svelte-kit/cloudflare`
   - **Install command:** `pnpm install`
4. **Deploy!**

> This project uses [`@sveltejs/adapter-cloudflare`](https://kit.svelte.dev/docs/adapter-cloudflare) for seamless Cloudflare deployment.

## 📝 Credits

Lovingly ripped off from [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service).
