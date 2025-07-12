
export interface Framework {
  id: number;
  title: string;
  type: string;
  whenToUse: string;
  howItWorks: string;
  example: string;
  category: 'productivity' | 'decision' | 'strategic' | 'life' | 'mental';
  color: string;
}

export const frameworks: Framework[] = [
  {
    id: 1,
    title: "Eisenhower Matrix",
    type: "Framework",
    whenToUse: "When overwhelmed with too many tasks",
    howItWorks: "Plot tasks in a 2x2 grid: Urgent/Not Urgent × Important/Not Important.",
    example: "Do it, delegate it, schedule it, or delete it.",
    category: "productivity",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Regret Minimization (Bezos Framework)",
    type: "Mental Model",
    whenToUse: "When facing life-changing decisions",
    howItWorks: "Ask yourself: Will I regret not doing this at age 80?",
    example: "Moving to a new city, quitting a job, starting something new.",
    category: "decision",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "10/10/10 Rule",
    type: "Heuristic",
    whenToUse: "For emotionally intense decisions",
    howItWorks: "Ask: How will I feel about this in 10 minutes? 10 months? 10 years?",
    example: "Sending a tough message or quitting a relationship.",
    category: "decision",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "OODA Loop",
    type: "Framework",
    whenToUse: "When conditions are shifting or uncertain",
    howItWorks: "Observe → Orient → Decide → Act → (repeat)",
    example: "Making travel plans during changing rules.",
    category: "strategic",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Inversion Thinking",
    type: "Heuristic",
    whenToUse: "When avoiding major mistakes",
    howItWorks: "Ask: How could this fail? Then avoid those steps.",
    example: "If goal is better health, think: sleep badly, skip exercise, binge — then reverse that.",
    category: "mental",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "5 Whys",
    type: "Diagnostic Tool",
    whenToUse: "When unclear about internal conflict",
    howItWorks: "Ask \"Why?\" five times to reach the root cause.",
    example: "\"Why am I anxious today?\" → trace it to sleep, habits, unmet goals.",
    category: "mental",
    color: "from-teal-500 to-green-500"
  },
  {
    id: 7,
    title: "Weighted Scoring",
    type: "Framework",
    whenToUse: "Comparing multiple options",
    howItWorks: "Score each option across several categories (e.g., Joy, Time, Risk). Add them.",
    example: "Choosing between two travel plans.",
    category: "decision",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 8,
    title: "Cost of Inaction",
    type: "Mental Model",
    whenToUse: "When you're procrastinating or afraid",
    howItWorks: "Ask: What is the hidden cost of not acting?",
    example: "Not leaving a toxic job might cost you time, self-worth, health.",
    category: "mental",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 9,
    title: "80/20 Rule (Pareto Principle)",
    type: "Mental Model",
    whenToUse: "When time or energy is limited",
    howItWorks: "80% of results come from 20% of effort. Focus on what matters most.",
    example: "Focus on 2 courses out of 5 that will help you grow the most.",
    category: "productivity",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: 10,
    title: "Identity-Based Decision-Making",
    type: "Reflective Model",
    whenToUse: "When shaping your future self",
    howItWorks: "Ask: \"What would the person I want to become do?\" Choose identity over short-term mood.",
    example: "Want to be a disciplined person? Act like it today, even in small steps.",
    category: "life",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 11,
    title: "Barbell Strategy",
    type: "Risk Model",
    whenToUse: "When taking bets in life",
    howItWorks: "Be very safe in 80% of your life, take bold bets with 20%. Protect downside, expose upside.",
    example: "Safe part-time job + risky startup idea.",
    category: "strategic",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 12,
    title: "Ikigai",
    type: "Self-discovery Tool",
    whenToUse: "When unsure about life direction",
    howItWorks: "Explore 4 areas: What you love, what you're good at, what the world needs, and what pays.",
    example: "Career ideas or finding purpose.",
    category: "life",
    color: "from-red-500 to-pink-500"
  },
  {
    id: 13,
    title: "Fear-Setting (Tim Ferriss)",
    type: "Clarity Model",
    whenToUse: "When fear is blocking you",
    howItWorks: "Define your fears in detail, then write down: how to prevent them, how to recover if they happen.",
    example: "Before taking a solo trip or starting a YouTube channel.",
    category: "mental",
    color: "from-amber-500 to-yellow-500"
  },
  {
    id: 14,
    title: "4 Burners Theory",
    type: "Life Balance Framework",
    whenToUse: "When juggling too many priorities",
    howItWorks: "You have 4 burners: Family, Friends, Health, Work. You can't keep all at 100% — choose wisely.",
    example: "During exams, health and friends may take a hit.",
    category: "life",
    color: "from-lime-500 to-green-500"
  },
  {
    id: 15,
    title: "Reversible vs. Irreversible",
    type: "Decision Lens",
    whenToUse: "When afraid to make mistakes",
    howItWorks: "If reversible — just try it. If not, plan deeply.",
    example: "Trying a new hobby is reversible. Dropping out of college isn't.",
    category: "decision",
    color: "from-sky-500 to-blue-500"
  },
  {
    id: 16,
    title: "Opportunity Cost",
    type: "Economic Thinking",
    whenToUse: "Always",
    howItWorks: "Every yes is a no to something else. Be aware of hidden trade-offs.",
    example: "Spending 5 hours on Instagram = not learning, growing, socializing.",
    category: "strategic",
    color: "from-rose-500 to-pink-500"
  },
  {
    id: 17,
    title: "Second-Order Thinking",
    type: "Strategic Thinking",
    whenToUse: "When considering consequences",
    howItWorks: "Ask: Then what? What happens next? Avoid short-term wins that backfire.",
    example: "Party tonight → tired tomorrow → low energy → bad week.",
    category: "strategic",
    color: "from-fuchsia-500 to-purple-500"
  },
  {
    id: 18,
    title: "Time Blocking",
    type: "Productivity System",
    whenToUse: "To manage chaos",
    howItWorks: "Block time on your calendar for specific work or rest. Don't leave life to chance.",
    example: "2 hours for learning, 1 hour workout, 1 hour deep work.",
    category: "productivity",
    color: "from-cyan-500 to-teal-500"
  },
  {
    id: 19,
    title: "Values-Based Decision-Making",
    type: "Reflective Framework",
    whenToUse: "When conflicted or unclear",
    howItWorks: "Know your top 3 values (e.g., freedom, curiosity, family). Pick the option that aligns.",
    example: "Should I say yes to this trip? Does it match what I value most right now?",
    category: "life",
    color: "from-violet-500 to-indigo-500"
  },
  {
    id: 20,
    title: "Hell Yes or No",
    type: "Heuristic",
    whenToUse: "When uncertain or overwhelmed",
    howItWorks: "If it's not a \"HELL YES!\" then it's a no.",
    example: "Don't half-commit to events, teams, or jobs. Say yes only if you're excited.",
    category: "decision",
    color: "from-orange-500 to-amber-500"
  }
];
