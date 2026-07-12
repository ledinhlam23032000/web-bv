const FALLBACK_SITE_URL = "http://localhost:9999";

function ensureProtocol(url: string) {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `https://${url}`;
}

export function getSiteUrl() {
  const rawValue = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawValue) {
    return FALLBACK_SITE_URL;
  }

  return ensureProtocol(rawValue).replace(/\/+$/, "");
}

export function resolveAbsoluteUrl(path = "/") {
  return new URL(path, `${getSiteUrl()}/`).toString();
}
