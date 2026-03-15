export type SessionUser = {
  id: number;
  email: string;
  firstName: string;
  country: string;
  interests: string | null;
  profileImage: string | null;
};

const STORAGE_KEY = "pulseasia_user";
const UPDATE_EVENT = "pulseasia:user-update";

function safeWindow(): Window | null {
  return typeof window === "undefined" ? null : window;
}

export function saveSession(user: SessionUser) {
  const win = safeWindow();
  if (!win) return;
  win.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  win.dispatchEvent(new CustomEvent(UPDATE_EVENT, { detail: user }));
}

export function clearSession() {
  const win = safeWindow();
  if (!win) return;
  win.localStorage.removeItem(STORAGE_KEY);
  win.dispatchEvent(new CustomEvent(UPDATE_EVENT, { detail: null }));
}

export function readSession(): SessionUser | null {
  const win = safeWindow();
  if (!win) return null;
  const value = win.localStorage.getItem(STORAGE_KEY);
  if (!value) return null;
  try {
    return JSON.parse(value) as SessionUser;
  } catch {
    return null;
  }
}

export function onSessionUpdate(handler: (user: SessionUser | null) => void) {
  const win = safeWindow();
  if (!win) return () => {};
  const listener = (event: Event) => {
    const detail = (event as CustomEvent).detail as SessionUser | null;
    handler(detail ?? null);
  };
  win.addEventListener(UPDATE_EVENT, listener as EventListener);
  return () => win.removeEventListener(UPDATE_EVENT, listener as EventListener);
}
