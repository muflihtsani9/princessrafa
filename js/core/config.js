/**
 * BUCIN — Cinematic Love Experience
 * Core Configuration System
 */

const CONFIG = {
  version: '2.0.0',
  debug: false,

  // ─── TIMING ───────────────────────────────────────────────────────
  timing: {
    preloaderMin: 2800,
    fadeIn: 1200,
    sectionTransition: 800,
    hoverDelay: 60,
    scrollThrottle: 16,
  },

  // ─── EASING ───────────────────────────────────────────────────────
  easing: {
    cinematic:   'power4.inOut',
    soft:        'power2.out',
    elastic:     'elastic.out(1, 0.4)',
    bounce:      'back.out(1.7)',
    silk:        'expo.out',
    brutal:      'power4.out',
    romantic:    'sine.inOut',
  },

  // ─── PARTICLES ────────────────────────────────────────────────────
  particles: {
    desktop: { count: 180, speed: 0.28, size: [0.8, 2.4] },
    tablet:  { count: 90,  speed: 0.22, size: [0.6, 1.8] },
    mobile:  { count: 45,  speed: 0.16, size: [0.5, 1.4] },
  },

  // ─── THREE.JS ─────────────────────────────────────────────────────
  three: {
    fov: 75,
    near: 0.1,
    far: 1000,
    cameraZ: 5,
    orbs: {
      desktop: 12,
      mobile: 6,
    },
    mouseInfluence: 0.035,
    scrollInfluence: 0.001,
  },

  // ─── BREAKPOINTS ──────────────────────────────────────────────────
  breakpoints: {
    mobile: 640,
    tablet: 1024,
    desktop: 1440,
  },

  // ─── PERFORMANCE ──────────────────────────────────────────────────
  performance: {
    fpsTarget: 60,
    fpsLow: 30,
    adaptiveQuality: true,
    maxDegradationLevel: 3,
  },

  // ─── QUOTES ───────────────────────────────────────────────────────
  loadingQuotes: [
    "Memuat kenangan manis...",
    "Setiap doa yang dipanjatkan akhirnya terjawab...",
    "Mimpi yang diperjuangkan dengan air mata...",
    "Semesta sedang memeluk perjuanganmu...",
    "Calon dokter gigi kebanggaanku...",
    "Menyiapkan hadiah kecil untukmu...",
  ],

  // ─── LOVE STORY DATA ──────────────────────────────────────────────
  timeline: [
    {
      date: "Perjuangan Kita",
      title: "Bangga Padamu",
      quote: "aku mau kamu selalu tau,aku gaakan pernah bosan mengenang perjuangan yang sudah kita lalui bersama,perempuan cantik manis nan kuat yang selalu menangis dan mengeluh padaku akhirnya dapat tersenyum dengan bangga diatas pencapaiannya sendiri...",
      icon: "✦",
    },
    {
      date: "Mimpi yang Tumbuh",
      title: "Dipeluk Semesta",
      quote: "aku turut menyaksikan gimana mimpi itu tumbuh di dalam diri kamu,aku menyaksikan malam malam ketika kamu lelah,hari hari ketika kamu ragu,dan saat saat ketika kamu tetap milih untuk enggak menyerah,karna itu,ketika kabar bahagia ini datang,rasanya bukan hanya melihat kamu mencapai tujuan,tapi juga melihat seluruh perjuangan kamu dipeluk oleh semesta",
      icon: "◈",
    },
    {
      date: "Harapan Jadi Nyata",
      title: "Berdiri Nyata",
      quote: "hari ini aku melihat senyum yang selama ini diperjuangkan dengan begitu banyak air mata yang gak selalu diceritakan,aku melihat sebuah mimpi yang sebelumnya hanya tinggal harapan,sekarang berdiri nyata di hadapan rafa",
      icon: "◉",
    },
    {
      date: "Saksi Perjuangan",
      title: "Bagian dari Kisahmu",
      quote: "mungkin banyak orang yang datang untuk mengucapkan selamat atas keberhasilan kamu hari ini,tapi hanya sedikit yang tau betapa kerasnya kamu memperjuangkan hari ini agar bisa datang,dan rayyan beruntung bisa jadi bagian dari perjuangan rafaa🤍",
      icon: "✧",
    },
    {
      date: "Doa Terjawab",
      title: "Semesta Menjawab",
      quote: "dan sekarang,semesta akhirnya menjawab semua doa doa yang selama ini kita hanturkan dengan penuh ketulusan",
      icon: "♡",
    },
  ],

  // ─── GALLERY CAPTIONS ─────────────────────────────────────────────
  //
  // CARA TAMBAH FOTO:
  //   1. Taruh file foto di folder:  assets/images/
  //   2. Isi field "img" dengan path-nya, contoh:
  //        img: 'assets/images/foto1.jpg'
  //   3. Kalau "img" dikosongkan (''), kartu tampil sebagai gradient placeholder
  //
  // Rasio foto ideal: 3:4 (portrait) — misal 600x800px atau 900x1200px
  //
  gallery: [
    { img: '', caption: "Melihatmu tersenyum lega adalah hal yang paling berharga bagiku.", tag: "proud" },
    { img: '', caption: "Kamu membuktikan bahwa kerja keras tak pernah mengkhianati hasil.", tag: "fighter" },
    { img: '', caption: "Tawamu hari ini menghapus semua lelah dan ragu kemarin.", tag: "happiness" },
    { img: '', caption: "Aku akan selalu ada, mendukung setiap langkah dan mimpimu.", tag: "always" },
    { img: '', caption: "Calon dokter gigi kebanggaanku, teruslah bersinar.", tag: "dentist" },
    { img: '', caption: "Ini baru awal dari perjalanan hebatmu, Rafa.", tag: "journey" },
  ],
};

// Freeze to prevent accidental mutations
Object.freeze(CONFIG);
Object.freeze(CONFIG.timing);
Object.freeze(CONFIG.easing);
Object.freeze(CONFIG.particles);
Object.freeze(CONFIG.three);
Object.freeze(CONFIG.breakpoints);
Object.freeze(CONFIG.performance);

window.CONFIG = CONFIG;
