// =============================================================
//  CONFIG  —  the only file you normally need to touch
// =============================================================
//
//  Your Firebase web config is already filled in below. This is a
//  "web config" — it is meant to live in the browser and is safe to
//  commit publicly. Your real protection is the Firestore / Storage
//  security rules (read = public, write = only when logged in).
// -------------------------------------------------------------

export const firebaseConfig = {
  apiKey: "AIzaSyDqfi6f8TSOdaJkTU1xFw-CoESqwk_wiZg",
  authDomain: "monkeydstevie.firebaseapp.com",
  projectId: "monkeydstevie",
  storageBucket: "monkeydstevie.firebasestorage.app",
  messagingSenderId: "285595614682",
  appId: "1:285595614682:web:237a51be9a27439d1c14e3",
};

// The email you create in Firebase Authentication for the artist.
// (Only used to pre-fill the admin login box — not required.)
export const ADMIN_EMAIL = "";

// Fallback passcode for "local mode" only (when Firebase isn't reachable).
// Not used once the Firebase config above is valid — login uses real auth.
export const LOCAL_PASSCODE = "strawhat";

// Cloudflare Worker that relays the artist's YouTube feed (CORS-safe).
// Endpoint used: <this URL>/api/youtube
export const YT_WORKER = "https://gamingish-worker.kronborgnielsen.workers.dev";
