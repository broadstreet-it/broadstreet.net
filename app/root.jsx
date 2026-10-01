import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse } from "react-router";
import Header from "./components/Header";
import Footer, { CallToAction } from "./components/Footer";
import "./site.css";

export const links = () => [{ rel: "icon", href: "/favicon.ico" }];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
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
