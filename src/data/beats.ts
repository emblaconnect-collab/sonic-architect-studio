export interface Beat {
  id: number;
  title: string;
  genre: string;
  bpm: number;
  key: string;
  price: string;
  img: string;
  audio?: string; // caminho mp3 em /public (ex: "/audios/beat.mp3")
  description?: string;
  featured?: boolean; // true = Beat do Mês
}

export const BEATS_CATALOG: Beat[] = [
  {
    id: 0,
    title: "CYBER PUNK DRILL",
    genre: "Drill",
    bpm: 140,
    key: "Ré# Menor",
    price: "R$ 179",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMQrGxL2hArKhSQ1y7X-0nhfHMWorzFYqmAz8zqWaAZstoI7fZ0Y6lDYQ4LUUszFbfD4QdOP3yTnow2ehVplLTUl5k1rh35OuDCFKH57odpX_u6cvntvp1fcI1Ge6kY6Tvxeax1uTNTt-5mvSATKCEPfB3ReNfucg7NjB0GdiYkNDRvEpGRgN7WhV1obl4uKf354lKPhnQty4ZIw5NaBUenXZTBMhUu2INv8SfoY7rNn6Xlc1dlsXms44vBrnkHmyG2zesNn4qTPg",
    audio: "",
    description: "Um instrumental pesado que combina synths futuristas com a percussão agressiva do UK Drill. Engenheirado para a elite.",
    featured: true,
  },
  {
    id: 1,
    title: "STREETS TALKING",
    genre: "Trap",
    bpm: 130,
    key: "Sol Maior",
    price: "R$ 149",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOV__v3hZsUudxlWf3w53VaXSBQu6Xs0vqjMZH4K2Qebcu9VBxfClpJtxQBt3QImNgQV9b6IQXAnHsE2942XrC0xF-pUkh8ZzmZ-o5tgbmCwLuMKfVsWMSURB3b4nYHzs8UFGK3EXX9gEMB-8s0eDW1f6K7FKJpqcu0TmhyIE4xdptqyf9XCWAiVY4aVUtbiW3MshDldrhqxu219BrnTfis_jiCVluDZ2VSs-Zz2BL3YbU-F8DMBYKISmbi0C56Veuvf64LXAXfbo",
    audio: "",
  },
  {
    id: 2,
    title: "COLD WORLD",
    genre: "Drill",
    bpm: 145,
    key: "Dó# Menor",
    price: "R$ 179",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8PFXIaM8vJLGyj6tzBiGzTZCsPEDQGOugPSGmCbYEvqTaFcqSAflvUdqY_eNJ0b-Q4dU8_ggK6CrWp_I8XihXHthxZ9CmTGhUXP20HTxV72GdFNlPNh_gwHM9E21rnwexoJHm5cXUItJ2MyuJ4-ymW5Hc8bay6ToojnQY86lXRQsUU4nSTKgRFLMVOFVIdfs9hSkU1hMsL3irrLhn0OWd1a_kPqyl0l_cCRpBM7KUzcjDgbxSUA7Oxnq3ccUepFwi1QD3Fj3LFnU",
    audio: "",
  },
  {
    id: 3,
    title: "BAILE NIGHTS",
    genre: "Funk",
    bpm: 130,
    key: "Fá Menor",
    price: "R$ 119",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHYY6MkNpna0xNeMmbsjJr9RuTc9suhT2gnBNPfagqkxpek8DHW67cCunwVE1r2TgKV4UNt2doPhzdeBiVWP5R3CEkb_4x5_5kGLqTPTeuKA2AXmUR7Vve7GCXXQCCVUU9dMf-0oL8laoIgv-d9Pd1ZBgM4-GB-hzwFY5BYpL-BO_PsU94YYCVxBFffk4SJVgl7HDpOHcwjAAleKz9xnLUdmnUUPwtmpc1-370cz0pA_VxnPA_o-4iUAbnEnI3pyRuDxqSJtFm-KU",
    audio: "",
  },
  {
    id: 4,
    title: "VELVET SOUL",
    genre: "R&B",
    bpm: 95,
    key: "Sib Maior",
    price: "R$ 209",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT5emSXzyG8oCfARnOEcwWwZZD7Ma0k-YmJ6jY-phyms8L43RGC06Ocq5Puw6vUwUmYw2H-CQ9sp5_z98Mdu4w988XXKLIwZMZ-QKwTMbANRjLe5CdN6XB6QNeek1APVSIsgShNoNJheEjbx6Z2GV88ZVvSBZY9QQJDMYuiwLxOb1Mbm37IiJpnlelHUAfIiDw5yZFdt3fU_Acq3tlLLnAedih_ppkUBxT3f9j9-24CmbCZTBf7gSsBhNFFOsPdj5hRKwLcUfUBL4",
    audio: "",
  },
];

export const GENRES = ["Todos", "Trap", "Drill", "Funk", "R&B"];

export const FEATURED_BEAT = BEATS_CATALOG.find((b) => b.featured)!;
