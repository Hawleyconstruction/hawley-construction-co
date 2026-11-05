// Build-time renderer: turns each route into real HTML so search engines see the full page text
// without running JavaScript. Used only by scripts/prerender.mjs after `vite build`.
import { prerenderToNodeStream } from "react-dom/static";
import { Router } from "wouter";
import App from "./App";

export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
  const chunks: Buffer[] = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString("utf-8");
}
