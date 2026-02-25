import kitCauseEffect from "@/assets/kit-cause-effect.jpg";
import kitCauseEffectKid from "@/assets/kit-cause-effect-kid.jpg";
import kitCauseEffectKid2 from "@/assets/kit-cause-effect-kid2.jpg";
import kitBalancePath from "@/assets/kit-balance-path.jpg";
import kitBalanceKid from "@/assets/kit-balance-kid.jpg";
import kitBalanceKid2 from "@/assets/kit-balance-kid2.jpg";
import kitElectricity from "@/assets/kit-electricity.jpg";
import kitElectricityKid from "@/assets/kit-electricity-kid.jpg";

export interface Kit {
  id: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  whatsInside: string[];
  skillsLearned: string[];
  skillTags: string[];
  ageRange: string;
  timePerActivity: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  safetyNotes: string;
  faqs: { question: string; answer: string }[];
  imagePlaceholder: string;
  image: string;
  galleryImages: string[];
  bullets: string[];
}

export const kits: Kit[] = [
  {
    id: "cause-effect-lab",
    name: "Cause & Effect Lab",
    tagline: "Build chain reactions and discover why things happen.",
    description: "Build chain reactions and discover why things happen.",
    overview: "The Cause & Effect Lab is all about understanding connections. Kids build chain reactions, test variables, and discover that every action has a consequence. It's engineering meets detective work, and it's incredibly fun.",
    whatsInside: [
      "10 challenge cards (progressive difficulty)",
      "Domino & ramp pieces",
      "Lever & pulley components",
      "Ball bearings & tubes",
      "Illustrated concept guide",
      "Achievement stickers"
    ],
    skillsLearned: ["Cause & effect reasoning", "Sequential thinking", "Engineering basics", "Variable testing"],
    skillTags: ["Cause & Effect", "Engineering", "Logic", "Experimentation"],
    ageRange: "6–8",
    timePerActivity: "15–30 min",
    difficulty: "Intermediate",
    safetyNotes: "All materials are non-toxic and meet ASTM F963 safety standards. Ball bearings are large-sized (no choking hazard). Adult supervision recommended for first use.",
    faqs: [
      { question: "Is this harder than the Balance kit?", answer: "Slightly! It's rated Intermediate, but the progressive cards ensure kids build confidence step by step." },
      { question: "Can kits be combined?", answer: "Absolutely! Combining kits unlocks bonus challenges (coming soon)." },
      { question: "What if a piece breaks?", answer: "Contact us and we'll send a replacement. Our materials are built to last." }
    ],
    imagePlaceholder: "Cause & Effect Lab",
    image: kitCauseEffect,
    galleryImages: [kitCauseEffect, kitCauseEffectKid, kitCauseEffectKid2],
    bullets: [
      "Chain reactions that build step by step",
      "Goal-driven challenges, no hand-holding",
      "Sequencing, timing, and causality through play"
    ]
  },
  {
    id: "balance-path-lab",
    name: "Balance & Path Lab",
    tagline: "Learn math through balance, weights, and pathways.",
    description: "Learn math through balance, weights, and pathways.",
    overview: "The Balance & Path Lab introduces kids to foundational math and physics concepts through progressive challenge cards. Each challenge builds on the last, guiding children from simple balance experiments to complex pathway interactions, all with real, tactile materials.",
    whatsInside: [
      "8 challenge cards (progressive difficulty)",
      "Wooden balance beam & fulcrum set",
      "Weight blocks (various sizes)",
      "Ramp & roller kit",
      "Illustrated concept guide",
      "Achievement stickers"
    ],
    skillsLearned: ["Balance & equilibrium", "Arithmetic & ratios", "Logical planning", "Measurement & comparison"],
    skillTags: ["Balance", "Math", "Physics", "Critical Thinking"],
    ageRange: "6–8",
    timePerActivity: "15–30 min",
    difficulty: "Beginner",
    safetyNotes: "All materials are non-toxic and meet ASTM F963 safety standards. No small parts that pose choking hazards. Adult supervision recommended for first use.",
    faqs: [
      { question: "Do I need any extra materials?", answer: "No! Everything you need is included in the kit. Just add a flat surface to work on." },
      { question: "Can my child do this independently?", answer: "Yes! The challenge cards are designed for independent play. The first card includes a guided walkthrough." },
      { question: "How long does the kit last?", answer: "Most families spend 2–3 weeks working through all 8 challenges, with plenty of replay value." }
    ],
    imagePlaceholder: "Balance & Path Lab",
    image: kitBalancePath,
    galleryImages: [kitBalancePath, kitBalanceKid, kitBalanceKid2],
    bullets: [
      "Balance weights to hit specific targets",
      "Arithmetic and ratios through physical play",
      "Logical planning with real constraints"
    ]
  },
  {
    id: "generating-electricity-lab",
    name: "Generating Electricity Lab",
    tagline: "Turn motion into power with real energy systems.",
    description: "Turn motion into power with real energy systems.",
    overview: "The Generating Electricity Lab develops real-world understanding of energy transformation. Through physical experiments, kids learn how wind, motion, water, and sunlight can generate electricity, the foundations of energy science and systems thinking.",
    whatsInside: [
      "12 challenge cards (progressive difficulty)",
      "Mini wind turbine components",
      "Solar panel kit",
      "Hand-crank generator",
      "Illustrated concept guide",
      "Achievement stickers"
    ],
    skillsLearned: ["Energy transformation", "Systems thinking", "Scientific observation", "Experimentation"],
    skillTags: ["Electricity", "Energy", "Science", "Systems Thinking"],
    ageRange: "6–8",
    timePerActivity: "15–30 min",
    difficulty: "Beginner",
    safetyNotes: "All materials are non-toxic and meet ASTM F963 safety standards. Pieces are sized appropriately for ages 6+. Adult supervision recommended for first use.",
    faqs: [
      { question: "Is this safe for kids?", answer: "Absolutely. All electrical components operate at very low voltages, completely safe for children." },
      { question: "My child is 5, can they use this?", answer: "We recommend 6+, but a motivated 5-year-old with some guidance could enjoy the early challenges." },
      { question: "Are there more challenges coming?", answer: "Yes! Expansion packs are planned for future release." }
    ],
    imagePlaceholder: "Generating Electricity Lab",
    image: kitElectricity,
    galleryImages: [kitElectricity, kitElectricityKid],
    bullets: [
      "Generate electricity from wind, water, and sunlight",
      "Observe energy transformation in action",
      "Safe, hands-on systems thinking"
    ]
  }
];
