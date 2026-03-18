const FALLBACK_LOCAL_URL = "http://localhost:3000";

function normalizeBaseUrl(url: string): string {
  return url.trim().replace(/\/+$/, "");
}

export function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (configuredUrl && configuredUrl.trim().length > 0) {
    return normalizeBaseUrl(configuredUrl);
  }

  if (typeof window !== "undefined" && window.location?.origin) {
    return normalizeBaseUrl(window.location.origin);
  }

  return FALLBACK_LOCAL_URL;
}

export function buildSiteUrl(pathname: string): string {
  const base = getSiteUrl();
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${normalizedPath}`;
}
