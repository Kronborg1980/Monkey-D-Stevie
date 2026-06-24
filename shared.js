// =============================================================
//  SHARED ENGINE — default content + storage + auth
//  Used by both index.html and admin.html so they never drift.
// =============================================================
import { firebaseConfig, LOCAL_PASSCODE } from "./config.js";

const STORE_KEY = "gamingish_site_v1";
const DOC_PATH = ["site", "content"]; // Firestore collection/doc

// ------------------------------------------------------------------
// DEFAULT CONTENT — everything the artist can later edit in /admin.
// The site renders beautifully from these even before anything is set.
// ------------------------------------------------------------------
export const DEFAULT_CONTENT = {
  brand: {
    name: "Strawhat Atelier",
    by: "by Gaming_ISH",
    logo: "./logo.jpg",
  },
  nav: {
    ctaText: "Commission a card",
    ctaLink: "#commission",
    links: [
      { label: "Art", href: "#art" },
      { label: "Custom cards", href: "#cards" },
      { label: "Crew", href: "#crew" },
      { label: "About", href: "#about" },
      { label: "Watch", href: "#watch" },
    ],
  },
  hero: {
    eyebrow: "Original anime art · Custom trading cards",
    titleLine1: "Set sail with",
    titleLine2: "one-of-a-kind art",
    subtitle:
      "I draw original characters and craft custom foil cards by hand. Pick up a piece, or commission a card built just for you — strawhat optional, adventure included.",
    primaryCtaText: "Commission a card",
    primaryCtaLink: "#commission",
    secondaryCtaText: "Browse the gallery",
    secondaryCtaLink: "#art",
  },
  marquee: [
    "Original art",
    "Custom foil cards",
    "Commissions open",
    "Anime style",
    "Made by hand",
    "One strawhat crew",
  ],
  art: {
    heading: "The Gallery",
    subheading:
      "Original pieces, ready to join your crew. Each one is drawn from scratch.",
    items: [
      {
        id: "a1",
        image: "",
        title: "Captain at Dawn",
        medium: "Digital · print available",
        price: "€45",
        status: "Available",
        link: "",
      },
      {
        id: "a2",
        image: "",
        title: "Tidecaller",
        medium: "Digital illustration",
        price: "€60",
        status: "Available",
        link: "",
      },
      {
        id: "a3",
        image: "",
        title: "Lanternlight",
        medium: "Watercolor + ink",
        price: "€80",
        status: "Sold",
        link: "",
      },
      {
        id: "a4",
        image: "",
        title: "First Mate",
        medium: "Digital · A4 print",
        price: "€45",
        status: "Available",
        link: "",
      },
      {
        id: "a5",
        image: "",
        title: "Grand Line Sunset",
        medium: "Digital illustration",
        price: "€55",
        status: "Available",
        link: "",
      },
      {
        id: "a6",
        image: "",
        title: "Devil Fruit Study",
        medium: "Ink + digital color",
        price: "€70",
        status: "Sold",
        link: "",
      },
    ],
  },
  cards: {
    heading: "Custom Cards",
    subheading:
      "Your character, hand-finished as a collectible foil card. Choose a finish and bring your idea — I'll draw the rest.",
    items: [
      {
        id: "c1",
        image: "",
        title: "Holo Hero",
        rarity: "Holographic",
        description:
          "Full-color character art with a rainbow holo finish. The classic.",
        price: "from €35",
        link: "",
      },
      {
        id: "c2",
        image: "",
        title: "Full-Art Legend",
        rarity: "Full Art",
        description:
          "Edge-to-edge illustration, no borders, maximum drama and detail.",
        price: "from €55",
        link: "",
      },
      {
        id: "c3",
        image: "",
        title: "Captain's Secret",
        rarity: "Secret Foil",
        description:
          "A textured, one-of-one foil card with hand-painted highlights.",
        price: "from €75",
        link: "",
      },
    ],
    process: {
      heading: "How a custom card is made",
      steps: [
        {
          title: "Tell me your character",
          text: "Send a description, references, and the vibe. Pokémon-style critter or One Piece-style hero — anything goes.",
        },
        {
          title: "I sketch, you approve",
          text: "You get a sketch to react to. We tweak the pose, colors, and details until it feels right.",
        },
        {
          title: "Hand-finished & shipped",
          text: "I finish the foil, seal it, and send your one-of-a-kind card sailing to your door.",
        },
      ],
    },
  },
  crew: {
    eyebrow: "the crew",
    heading: "Meet the Crew",
    subheading:
      "The characters that sail with the studio. Swap in your own art for each one from the admin panel \u2014 every card is a blank canvas.",
    ctaText: "Commission your own character",
    items: [
      {
        id: "c1",
        image: "",
        name: "Koibi",
        role: "Tide Sprite",
        type: "Water",
        hp: "60",
        blurb: "Rides the morning current and never met a wave it didn't like. Loyal to the last drop.",
        move1: "Bubble Beam",
        move2: "Splash",
      },
      {
        id: "c2",
        image: "",
        name: "Embo",
        role: "Spark Pup",
        type: "Fire",
        hp: "55",
        blurb: "Tiny, brave, and absolutely certain it can take on the whole sea. The heart of the crew.",
        move1: "Ember Dash",
        move2: "Howl",
      },
      {
        id: "c3",
        image: "",
        name: "Sprig",
        role: "Leaf Buddy",
        type: "Grass",
        hp: "58",
        blurb: "Calm, sunny, and always growing. Keeps the crew fed and the deck full of flowers.",
        move1: "Leaf Whirl",
        move2: "Sun Soak",
      },
    ],
  },
  about: {
    heading: "Hello, I'm the artist behind the strawhat",
    body: "I'm a self-taught illustrator who fell in love with anime art — the bold lines, the adventure, the little sparkle on every foil card. I draw original characters and turn people's favourite ideas into custom cards they can actually hold.\n\nThis little studio is my dream, built one drawing at a time. Thank you for being here.",
    image: "./logo.jpg",
    stats: [
      { value: "8+", label: "years drawing" },
      { value: "200+", label: "pieces created" },
      { value: "1", label: "trusty strawhat" },
    ],
  },
  watch: {
    heading: "Watch me draw",
    subheading: "New shorts every week over on YouTube.",
    channelUrl: "https://www.youtube.com/@Gaming_ISH/shorts",
    videos: [],
  },
  commission: {
    heading: "Bring your character to life",
    body: "Commissions are open. Tell me about your character and I'll send back a quote and a timeline. No idea is too wild for the crew.",
    ctaText: "Start a commission",
    ctaLink: "",
    email: "",
  },
  socials: [
    { label: "YouTube", url: "https://www.youtube.com/@Gaming_ISH/shorts" },
    { label: "Instagram", url: "" },
    { label: "TikTok", url: "" },
  ],
  theme: {
    // optional accent tweaks — leave as-is for the default look
    gold: "#FFC24B",
    teal: "#2BD4C9",
    coral: "#FF5A5F",
  },
  dedication: {
    show: true,
    text: "For everyone who ever told us to keep chasing the horizon. 🌊🍓",
  },
  footer: {
    text: "Made with love and a little salt water.",
  },
};

// ------------------------------------------------------------------
// Deep-merge stored content over defaults so older saved data still
// gets any new fields, and missing things never crash the page.
// ------------------------------------------------------------------
export function mergeDefaults(base, override) {
  if (Array.isArray(base)) {
    return Array.isArray(override) ? override : base;
  }
  if (base && typeof base === "object") {
    const out = { ...base };
    if (override && typeof override === "object") {
      for (const k of Object.keys(override)) {
        out[k] = mergeDefaults(base[k], override[k]);
      }
    }
    return out;
  }
  return override === undefined ? base : override;
}

export function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// ------------------------------------------------------------------
// YouTube helper — accepts watch, youtu.be, shorts, or raw id.
// ------------------------------------------------------------------
export function ytId(input) {
  if (!input) return "";
  const s = String(input).trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  const m =
    s.match(/(?:shorts\/|watch\?v=|youtu\.be\/|embed\/)([\w-]{11})/) ||
    s.match(/[?&]v=([\w-]{11})/);
  return m ? m[1] : "";
}

// ------------------------------------------------------------------
// Firebase — loaded lazily, only when a real config is present.
// ------------------------------------------------------------------
export function isFirebaseConfigured() {
  return (
    firebaseConfig &&
    firebaseConfig.apiKey &&
    !firebaseConfig.apiKey.startsWith("YOUR_") &&
    firebaseConfig.projectId &&
    !firebaseConfig.projectId.startsWith("YOUR_")
  );
}

let _fb = null;
async function fb() {
  if (_fb) return _fb;
  const V = "10.12.2";
  const [{ initializeApp }, fs, auth, storage] = await Promise.all([
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`),
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`),
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`),
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-storage.js`),
  ]);
  const app = initializeApp(firebaseConfig);
  _fb = {
    app,
    db: fs.getFirestore(app),
    auth: auth.getAuth(app),
    storage: storage.getStorage(app),
    fs,
    authMod: auth,
    storageMod: storage,
  };
  return _fb;
}

// ---- Content load / subscribe / save ----------------------------
function localLoad() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function localSave(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

export async function loadContent() {
  if (isFirebaseConfigured()) {
    try {
      const { db, fs } = await fb();
      const snap = await fs.getDoc(fs.doc(db, ...DOC_PATH));
      if (snap.exists())
        return mergeDefaults(clone(DEFAULT_CONTENT), snap.data());
    } catch (e) {
      console.warn("Firebase load failed, using local/defaults:", e);
    }
  }
  const local = localLoad();
  return mergeDefaults(clone(DEFAULT_CONTENT), local || {});
}

// Live updates for the public page (falls back to one-shot load).
export async function subscribeContent(cb) {
  if (isFirebaseConfigured()) {
    try {
      const { db, fs } = await fb();
      return fs.onSnapshot(fs.doc(db, ...DOC_PATH), (snap) => {
        cb(
          mergeDefaults(
            clone(DEFAULT_CONTENT),
            snap.exists() ? snap.data() : {}
          )
        );
      });
    } catch (e) {
      console.warn("Firebase subscribe failed:", e);
    }
  }
  cb(await loadContent());
  return () => {};
}

export async function saveContent(data) {
  if (isFirebaseConfigured()) {
    const { db, fs } = await fb();
    await fs.setDoc(fs.doc(db, ...DOC_PATH), clone(data));
    return { ok: true, where: "cloud" };
  }
  localSave(data);
  return { ok: true, where: "this browser" };
}

// ---- Image upload (Firebase Storage, or data-URL fallback) -------
export async function uploadImage(file) {
  if (isFirebaseConfigured()) {
    const { storage, storageMod } = await fb();
    const path = `art/${Date.now()}_${file.name.replace(/[^\w.\-]/g, "_")}`;
    const r = storageMod.ref(storage, path);
    await storageMod.uploadBytes(r, file);
    return await storageMod.getDownloadURL(r);
  }
  // Local mode: embed as data URL (fine for small images / testing).
  return await new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = rej;
    fr.readAsDataURL(file);
  });
}

// ---- Auth -------------------------------------------------------
export async function signIn(email, password) {
  if (isFirebaseConfigured()) {
    const { auth, authMod } = await fb();
    await authMod.signInWithEmailAndPassword(auth, email, password);
    return { ok: true };
  }
  // Local mode: compare against the passcode in config.js
  if (password === LOCAL_PASSCODE) {
    sessionStorage.setItem("gamingish_local_auth", "1");
    return { ok: true };
  }
  return { ok: false, error: "Wrong passcode." };
}

export async function signOutUser() {
  if (isFirebaseConfigured()) {
    const { auth, authMod } = await fb();
    await authMod.signOut(auth);
  }
  sessionStorage.removeItem("gamingish_local_auth");
}

export async function onAuth(cb) {
  if (isFirebaseConfigured()) {
    const { auth, authMod } = await fb();
    return authMod.onAuthStateChanged(auth, (u) => cb(!!u));
  }
  cb(sessionStorage.getItem("gamingish_local_auth") === "1");
  return () => {};
}

// ---- Account management (cloud mode only) -----------------------

// The email of the currently signed-in user (for pre-filling the form).
export async function currentUserEmail() {
  if (!isFirebaseConfigured()) return "";
  const { auth } = await fb();
  return (auth.currentUser && auth.currentUser.email) || "";
}

// Re-authenticate with the current password. Sensitive changes (email /
// password) require this, and Firebase rejects them otherwise.
async function reauth(currentPassword) {
  const { auth, authMod } = await fb();
  const user = auth.currentUser;
  if (!user) throw new Error("not-signed-in");
  const cred = authMod.EmailAuthProvider.credential(user.email, currentPassword);
  await authMod.reauthenticateWithCredential(user, cred);
  return { auth, authMod, user };
}

function authMessage(e) {
  const code = (e && e.code) || "";
  if (code === "auth/wrong-password" || code === "auth/invalid-credential")
    return "Current password is incorrect.";
  if (code === "auth/invalid-email") return "That email address isn't valid.";
  if (code === "auth/email-already-in-use") return "That email is already in use.";
  if (code === "auth/weak-password") return "Password should be at least 6 characters.";
  if (code === "auth/too-many-requests") return "Too many attempts. Try again in a bit.";
  if (code === "auth/requires-recent-login") return "Please sign out and back in, then try again.";
  return (e && e.message) || "Something went wrong.";
}

// Change password: verify current password, then set the new one.
export async function changePassword(currentPassword, newPassword) {
  if (!isFirebaseConfigured())
    return { ok: false, error: "Connect Firebase first to manage the account." };
  try {
    const { authMod, user } = await reauth(currentPassword);
    await authMod.updatePassword(user, newPassword);
    return { ok: true, message: "Password updated." };
  } catch (e) {
    return { ok: false, error: authMessage(e) };
  }
}

// Change email: verify current password, then send a confirmation link to
// the NEW address. The email changes only after that link is clicked
// (this is the modern, secure Firebase flow).
export async function changeEmail(currentPassword, newEmail) {
  if (!isFirebaseConfigured())
    return { ok: false, error: "Connect Firebase first to manage the account." };
  try {
    const { authMod, user } = await reauth(currentPassword);
    if (authMod.verifyBeforeUpdateEmail) {
      await authMod.verifyBeforeUpdateEmail(user, newEmail);
      return {
        ok: true,
        message:
          "Confirmation link sent to " + newEmail + ". Open it from that inbox to finish the change, then log in with the new email.",
      };
    }
    await authMod.updateEmail(user, newEmail);
    return { ok: true, message: "Email updated to " + newEmail + "." };
  } catch (e) {
    return { ok: false, error: authMessage(e) };
  }
}

// Send a password-reset email (useful if the password is forgotten).
export async function sendReset(email) {
  if (!isFirebaseConfigured())
    return { ok: false, error: "Connect Firebase first to manage the account." };
  try {
    const { auth, authMod } = await fb();
    await authMod.sendPasswordResetEmail(auth, email);
    return { ok: true, message: "Reset link sent to " + email + "." };
  } catch (e) {
    return { ok: false, error: authMessage(e) };
  }
}
