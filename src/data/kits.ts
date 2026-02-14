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
  bullets: string[];
}

export const kits: Kit[] = [
  {
    id: "balance-forces-lab",
    name: "Balance & Forces Lab",
    tagline: "Discover the science of balance, weight, and motion",
    description: "Explore how forces shape our world through hands-on building challenges that make physics tangible for young minds.",
    overview: "The Balance & Forces Lab introduces kids to foundational physics concepts through 8 progressive challenge cards. Each challenge builds on the last, guiding children from simple balance experiments to complex force interactions, all with real, tactile materials.",
    whatsInside: [
      "8 challenge cards (progressive difficulty)",
      "Wooden balance beam & fulcrum set",
      "Weight blocks (various sizes)",
      "Ramp & roller kit",
      "Illustrated concept guide",
      "Achievement stickers"
    ],
    skillsLearned: ["Balance & equilibrium", "Force & motion basics", "Prediction & hypothesis testing", "Measurement & comparison"],
    skillTags: ["Forces", "Balance", "Physics", "Critical Thinking"],
    ageRange: "6–8",
    timePerActivity: "20–30 min",
    difficulty: "Beginner",
    safetyNotes: "All materials are non-toxic and meet ASTM F963 safety standards. No small parts that pose choking hazards. Adult supervision recommended for first use.",
    faqs: [
      { question: "Do I need any extra materials?", answer: "No! Everything you need is included in the kit. Just add a flat surface to work on." },
      { question: "Can my child do this independently?", answer: "Yes! The challenge cards are designed for independent play. The first card includes a guided walkthrough." },
      { question: "How long does the kit last?", answer: "Most families spend 2–3 weeks working through all 8 challenges, with plenty of replay value." }
    ],
    imagePlaceholder: "Balance & Forces Lab",
    bullets: ["8 progressive challenge cards", "Real physics concepts made tangible", "Independent play from age 6"]
  },
  {
    id: "cause-effect-lab",
    name: "Cause & Effect Lab",
    tagline: "Build chain reactions and discover why things happen",
    description: "Chain reactions, domino effects, and cause-and-effect thinking. Kids build, test, and learn through playful experimentation.",
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
    timePerActivity: "25–35 min",
    difficulty: "Intermediate",
    safetyNotes: "All materials are non-toxic and meet ASTM F963 safety standards. Ball bearings are large-sized (no choking hazard). Adult supervision recommended for first use.",
    faqs: [
      { question: "Is this harder than the Balance kit?", answer: "Slightly! It's rated Intermediate, but the progressive cards ensure kids build confidence step by step." },
      { question: "Can kits be combined?", answer: "Absolutely! Combining kits unlocks bonus challenges (coming soon)." },
      { question: "What if a piece breaks?", answer: "Contact us and we'll send a replacement. Our materials are built to last." }
    ],
    imagePlaceholder: "Cause & Effect Lab",
    bullets: ["10 chain-reaction challenges", "Engineering meets detective work", "Teaches sequential thinking"]
  },
  {
    id: "logic-builders-kit",
    name: "Logic Builders Kit",
    tagline: "Solve puzzles and build logical thinking skills",
    description: "Pattern recognition, spatial reasoning, and logical deduction: the skills that power everything from coding to critical thinking.",
    overview: "The Logic Builders Kit develops computational thinking without a screen. Through physical puzzle challenges, kids learn pattern recognition, spatial reasoning, and step-by-step problem solving: the foundations of coding and math.",
    whatsInside: [
      "12 challenge cards (progressive difficulty)",
      "Pattern blocks & tiles",
      "Logic grid board",
      "Spatial puzzle pieces",
      "Illustrated concept guide",
      "Achievement stickers"
    ],
    skillsLearned: ["Pattern recognition", "Spatial reasoning", "Logical deduction", "Computational thinking"],
    skillTags: ["Logic", "Patterns", "Spatial Reasoning", "Problem Solving"],
    ageRange: "6–8",
    timePerActivity: "15–25 min",
    difficulty: "Beginner",
    safetyNotes: "All materials are non-toxic and meet ASTM F963 safety standards. Pieces are sized appropriately for ages 6+. Adult supervision recommended for first use.",
    faqs: [
      { question: "Is this related to coding?", answer: "It builds the same thinking skills (pattern recognition, logical steps, debugging) without needing a screen." },
      { question: "My child is 5, can they use this?", answer: "We recommend 6+, but a motivated 5-year-old with some guidance could enjoy the early challenges." },
      { question: "Are there more challenges coming?", answer: "Yes! Expansion packs are planned for future release." }
    ],
    imagePlaceholder: "Logic Builders Kit",
    bullets: ["12 logic puzzle challenges", "Builds computational thinking", "No screen required"]
  }
];
