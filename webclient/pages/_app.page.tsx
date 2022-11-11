import "@webclient/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { fetcher } from "@core/services/fetcher/index";
import { mockDashboardFetch } from "@core/hooks/data/use-dashboard-fetch";
import { mockMetricsAllFetch } from "@core/hooks/data/use-metrics-all-fetch";

// Initialize fetcher
fetcher.setBaseUrl(process.env.NEXT_PUBLIC_FRONTEND_BASE_URL);

// data mocks
mockDashboardFetch();
mockMetricsAllFetch();

if (!("fetcher" in globalThis)) {
  globalThis.fetcher = fetcher;
}

function DatapadApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default DatapadApp;
