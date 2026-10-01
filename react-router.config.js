/** @type {import("@react-router/dev/config").Config} */
export default {
  // Static site: no server rendering at request time. Every route is
  // prerendered to build/client/<path>/index.html and hydrates into React.
  ssr: false,
  future: {
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
  async prerender({ getStaticPaths }) {
    // "/404" matches the catch-all route; scripts/postbuild.mjs turns it into 404.html.
    return [...getStaticPaths(), "/404"];
  },
};
