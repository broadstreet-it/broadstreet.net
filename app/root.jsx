import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse } from "react-router";
import Header from "./components/Header";
import Footer, { CallToAction } from "./components/Footer";
import "./site.css";

export const links = () => [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Figtree:wght@400;500;600;700;800&family=Poppins:wght@700&display=swap",
  },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06182E" />
        <Meta />
        <Links />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9T53SFHCXC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9T53SFHCXC');
`,
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function SiteShell({ children }) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <CallToAction />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <SiteShell>
      <Outlet />
    </SiteShell>
  );
}

export function ErrorBoundary({ error }) {
  const title = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : "Something went wrong";
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="wrap">
          <h1>{title}</h1>
          <p className="lead">
            Please try again, or <a href="/contact/">contact us</a> and we’ll help.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
