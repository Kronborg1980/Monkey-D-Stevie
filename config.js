// =============================================================
//  CONFIG  —  the only file you normally need to touch
// =============================================================
//
//  The site works out of the box with no setup (it saves edits
//  to this browser only). To make the admin save for everyone
//  and sync across devices, paste your Firebase web config below.
//
//  A Firebase "web config" is NOT secret — it is meant to live in
//  the browser. Your real protection comes from the Firestore
//  security rules (see SETUP notes Lasse was given).
//
//  How to get it: console.firebase.google.com → your project →
//  Project settings (gear) → "Your apps" → Web app → Config.
// -------------------------------------------------------------

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// The email you create in Firebase Authentication for the artist.
// (Only used to pre-fill the admin login box — not required.)
export const ADMIN_EMAIL = "";

// Fallback passcode for "local mode" only (when Firebase isn't set
// up yet). This is NOT real security — anyone reading the page can
// see it. Once Firebase is configured, login uses real auth instead.
export const LOCAL_PASSCODE = "strawhat";
