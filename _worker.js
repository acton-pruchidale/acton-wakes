// Acton's Wakes blog: Cloudflare Pages advanced-mode worker (Wake 258, 26 Nov 2026).
// Sends visitors on the old address to the blog's own domain. wakes.json stays readable
// on the old address because the main site's worker reads it from there.
export default {
  async fetch(request, env) {
    const u = new URL(request.url);
    if (u.hostname === "acton-wakes.pages.dev" && u.pathname !== "/wakes.json") {
      return Response.redirect("https://blog.actonpruchidale.com" + u.pathname + u.search + u.hash, 301);
    }
    return env.ASSETS.fetch(request);
  }
};
