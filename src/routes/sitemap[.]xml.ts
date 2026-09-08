import { createFileRoute } from "@tanstack/react-router";

const paths = ["/", "/projects", "/contact"];

export const Route = createFileRoute("/sitemap/xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const forwardedHost =
          url.hostname === "localhost" ? request.headers.get("x-forwarded-host") : null;
        const origin = forwardedHost ? `https://${forwardedHost}` : url.origin;

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((p) => `  <url>\n    <loc>${origin}${p}</loc>\n  </url>`)
  .join("\n")}
</urlset>
`;

        return new Response(xml, {
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
