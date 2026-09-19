export interface FaqItem {
  question: string;
  answer: string;
}

export const GAME_INFO = {
  title: "R.E.P.O. (Retrieve, Extract & Profit Operation)",
  developer: "Semiwork Studios",
  version: "Update 2026.2 (Steam PC)",
  stats: [
    { label: "Active Players", value: "85,000+" },
    { label: "Steam Rating", value: "95% Overwhelmingly Positive" },
    { label: "Valuables", value: "~165 Items" },
    { label: "Extraction Quotas", value: "Infinite Scaling" }
  ]
};

export interface ValuableItem {
  id: string;
  name: string;
  tier: "S" | "A" | "B" | "C";
  valueNote: string;
  fragility: "Low" | "Medium" | "High";
  size: "Small" | "Medium" | "Large";
  soloCarryable: boolean;
  description: string;
}

// Real valuables verified against community wikis & trackers (Sept 2026, v0.4.x).
// The game ships ~165 valuables with location-locked spawns; these are the
// documented, price-confirmed examples. Collisions knock value off every item.
export const VALUABLE_ITEMS: ValuableItem[] = [
  { id: "harp", name: "Harp", tier: "S", valueNote: "$18,000-$25,000+", fragility: "High", size: "Large", soloCarryable: false, description: "Top-tier large valuable. Team carry or Strength upgrades strongly advised." },
  { id: "grandfather-clock", name: "Grandfather Clock", tier: "S", valueNote: "$18,000-$25,000+ range", fragility: "Medium", size: "Large", soloCarryable: false, description: "Huge, heavy and high value — the classic two-player haul." },
  { id: "golden-statue", name: "Golden Statue", tier: "S", valueNote: "$18,000-$25,000+ range", fragility: "Medium", size: "Large", soloCarryable: false, description: "Heavy top-tier loot found in later levels." },
  { id: "painting", name: "Painting", tier: "S", valueNote: "$18,000-$25,000+ range", fragility: "High", size: "Large", soloCarryable: false, description: "Large framed artwork; fragile facing." },
  { id: "animal-crate", name: "Animal Crate", tier: "S", valueNote: "$18,000-$25,000+ range", fragility: "Medium", size: "Large", soloCarryable: false, description: "Large shipping crate, one of the highest payouts per haul." },
  { id: "server-rack", name: "Server Rack", tier: "S", valueNote: "$18,000-$25,000+ range", fragility: "Medium", size: "Large", soloCarryable: false, description: "Tall heavy tech loot." },
  { id: "cube-of-knowledge", name: "Cube of Knowledge", tier: "A", valueNote: "$9,500-$12,000", fragility: "Medium", size: "Medium", soloCarryable: true, description: "Documented A-tier haul with a solid price tag." },
  { id: "glowing-hourglass", name: "Glowing Hourglass", tier: "A", valueNote: "~$7,100", fragility: "High", size: "Small", soloCarryable: true, description: "Glowing small valuable — strong price for its size." },
  { id: "scream-doll", name: "Scream Doll", tier: "A", valueNote: "$5,500-$7,500", fragility: "High", size: "Small", soloCarryable: true, description: "ACTIVE ITEM: screams when picked up and can attract monsters. Clear the room first." },
  { id: "music-box", name: "Music Box", tier: "A", valueNote: "$3,500-$4,500", fragility: "High", size: "Small", soloCarryable: true, description: "ACTIVE ITEM: turns your camera when carried. Fragile classic." },
  { id: "radio", name: "Radio", tier: "B", valueNote: "$1,000-$3,000 band", fragility: "Medium", size: "Small", soloCarryable: true, description: "Common mid-price loot." },
  { id: "trophy", name: "Trophy", tier: "B", valueNote: "$1,000-$3,000 band", fragility: "Low", size: "Small", soloCarryable: true, description: "Sturdy metal loot." },
  { id: "gramophone", name: "Gramophone", tier: "B", valueNote: "$1,000-$3,000 band", fragility: "High", size: "Medium", soloCarryable: true, description: "Fragile horn assembly." },
  { id: "computer", name: "Computer", tier: "B", valueNote: "$1,000-$3,000 band", fragility: "Medium", size: "Medium", soloCarryable: true, description: "Standard office haul." },
  { id: "diamond", name: "Diamond", tier: "B", valueNote: "$1,000-$3,000 band", fragility: "High", size: "Small", soloCarryable: true, description: "Tiny but fragile — drops can wreck it." },
  { id: "uranium-mug", name: "Uranium Mug", tier: "B", valueNote: "$1,000-$3,000 band", fragility: "Low", size: "Small", soloCarryable: true, description: "Glowing novelty mug." },
  { id: "crown", name: "Crown", tier: "C", valueNote: "$500-$1,100 band", fragility: "Medium", size: "Small", soloCarryable: true, description: "Entry-tier loot." },
  { id: "goblet", name: "Goblet", tier: "C", valueNote: "$500-$1,100 band", fragility: "High", size: "Small", soloCarryable: true, description: "Fragile drinking vessel." },
  { id: "ocarina", name: "Ocarina", tier: "C", valueNote: "$500-$1,100 band", fragility: "Medium", size: "Small", soloCarryable: true, description: "Small instrument loot." },
  { id: "pocket-watch", name: "Pocket Watch", tier: "C", valueNote: "$500-$1,100 band", fragility: "High", size: "Small", soloCarryable: true, description: "Delicate and small." },
  { id: "doll", name: "Doll", tier: "C", valueNote: "$500-$1,100 band", fragility: "Medium", size: "Small", soloCarryable: true, description: "Creepy but cheap." },
  { id: "wind-up-frog", name: "Wind-Up Frog", tier: "C", valueNote: "$500-$1,100 band", fragility: "Medium", size: "Small", soloCarryable: true, description: "Loses value with every hop." }
];

export interface MonsterEntity {
  id: string;
  name: string;
  hp: string;
  damage: string;
  threat: "Extreme" | "High" | "Medium" | "Low";
  behavior: string;
  counter: string;
}

// All 29 entities verified against IGN wiki / community trackers (Sept 2026, v0.4.x).
export const MONSTER_ENTITIES: MonsterEntity[] = [
  { id: "headman", name: "Headman", hp: "250", damage: "50 + stun", threat: "Extreme", behavior: "Fast and stun-heavy, but poor eyesight.", counter: "Crouch and break line of sight." },
  { id: "huntsman", name: "Huntsman", hp: "250", damage: "100", threat: "Extreme", behavior: "Completely blind; hearing roughly 5x a normal entity.", counter: "Stay silent, crouch-walk, toss objects to redirect him." },
  { id: "clown", name: "Clown", hp: "250", damage: "100", threat: "Extreme", behavior: "Kill-beam swept in high and low arcs.", counter: "Jump the low beam, crouch under the high one." },
  { id: "robe", name: "Robe", hp: "250", damage: "100", threat: "Extreme", behavior: "Petrefies you if you face it directly.", counter: "Navigate by peripheral vision; never turn to look." },
  { id: "loom", name: "Loom", hp: "500", damage: "100 + 25", threat: "Extreme", behavior: "Marks one player and hunts them relentlessly.", counter: "Keep distance until it gives up." },
  { id: "trudge", name: "Trudge", hp: "500", damage: "100", threat: "Extreme", behavior: "Highest HP, one-swing decapitation, extremely slow.", counter: "Avoid its line of sight entirely." },
  { id: "cleanup-crew", name: "Cleanup Crew", hp: "350", damage: "10-75", threat: "High", behavior: "Throws radiation-bombing heads.", counter: "Focus the body down from range." },
  { id: "heart-hugger", name: "Heart Hugger", hp: "300", damage: "30", threat: "High", behavior: "Pink mist lures players in — the mist is the trap.", counter: "Avoid the mist cloud entirely." },
  { id: "hidden", name: "Hidden", hp: "100", damage: "0", threat: "High", behavior: "Invisible kidnapper.", counter: "Track breathing and footsteps." },
  { id: "mentalist", name: "Mentalist", hp: "150", damage: "50", threat: "High", behavior: "Telekinetic slaps plus teleportation.", counter: "Do not brawl it; keep moving." },
  { id: "chef", name: "Chef", hp: "150", damage: "10 per hit", threat: "Medium", behavior: "Leaping knife attacks.", counter: "Side-step the jump startup." },
  { id: "headgrab", name: "Headgrab", hp: "150", damage: "5-15", threat: "Medium", behavior: "Grabs and kicks; speeds up wearing a stolen player head.", counter: "Break the grab early." },
  { id: "oogly", name: "Oogly", hp: "200", damage: "4 per hit", threat: "Medium", behavior: "Flying searchlight entity.", counter: "Teammates can pull you free." },
  { id: "reaper", name: "Reaper", hp: "150", damage: "10 per hit", threat: "Medium", behavior: "Scarecrow with a scythe — its real threat is smashing your loot value.", counter: "Secure valuables before engaging." },
  { id: "rugrat", name: "Rugrat", hp: "150", damage: "varies", threat: "Medium", behavior: "Grabs your valuables and throws them — value damage.", counter: "Kill it before it reaches your haul." },
  { id: "banger", name: "Banger", hp: "50", damage: "30 + knockback", threat: "Medium", behavior: "Exploding skeletons in groups.", counter: "Keep range, pop them early." },
  { id: "gambit", name: "Gambit", hp: "150", damage: "varies", threat: "Medium", behavior: "Roulette: healing, $5k, or 1 HP left.", counter: "Pull the lever and pray." },
  { id: "birthday-boy", name: "Birthday Boy", hp: "150", damage: "10 per 0.25s", threat: "Medium", behavior: "Do not poke the balloon.", counter: "Simply leave the balloon alone." },
  { id: "bella", name: "Bella", hp: "200", damage: "5 per touch", threat: "Medium", behavior: "Contact-triggered, not sound-triggered.", counter: "Touch it once, never twice." },
  { id: "bowtie", name: "Bowtie", hp: "100", damage: "5 (pin)", threat: "Medium", behavior: "Wind pressure pins players to walls.", counter: "Keep distance from its windup." },
  { id: "tick", name: "Tick", hp: "10-100", damage: "10 per hit", threat: "Low", behavior: "Drains blood from Grabber users.", counter: "Killing it at full HP drops a healing orb." },
  { id: "apex-predator", name: "Apex Predator", hp: "150", damage: "10", threat: "Low", behavior: "A duck. Disguised as ordinary decor.", counter: "Do not click the duck." },
  { id: "elsa", name: "Elsa", hp: "600", damage: "5 + 20", threat: "Low", behavior: "Clingy dog entity.", counter: "Petting it actually calms it down." },
  { id: "peeper", name: "Peeper", hp: "50", damage: "2 per second", threat: "Low", behavior: "Ceiling eye that locks onto your gaze.", counter: "Break eye contact within ~3 seconds." },
  { id: "animal", name: "Animal", hp: "150", damage: "2", threat: "Low", behavior: "Burrows onto you, stuns and damages items.", counter: "Shake it off fast." },
  { id: "gnome", name: "Gnome", hp: "20", damage: "10", threat: "Low", behavior: "Swarm and attack your loot.", counter: "Pick them up and yeet them." },
  { id: "shadow-child", name: "Shadow Child", hp: "150", damage: "30", threat: "Low", behavior: "Fades if you look away.", counter: "Look away for 4 seconds." },
  { id: "upscream", name: "Upscream", hp: "50", damage: "10 + stun", threat: "Low", behavior: "Stun-lock screamer.", counter: "50 HP — it dies fast." },
  { id: "spewer", name: "Spewer", hp: "65", damage: "10", threat: "Low", behavior: "Face-pouncing parasite; its vomit also hurts other monsters.", counter: "Dodge the pounce, let it hit monsters." }
];

export interface UpgradeItem {
  id: string;
  name: string;
  effect: string;
  priority: "Core" | "Strong" | "Situational";
}

// Real service-station upgrades. Costs escalate per purchase and are not
// published as fixed values, so this lists verified effects and community
// priority instead of invented prices.
export const UPGRADE_ITEMS: UpgradeItem[] = [
  { id: "stamina", name: "Stamina", effect: "More sprint/carry energy — the resource every run runs out of first. Community-agreed first purchase.", priority: "Core" },
  { id: "max-health", name: "Max Health", effect: "Survives more hits; the other community-agreed core buy.", priority: "Core" },
  { id: "strength", name: "Strength", effect: "Carry heavy S-tier items without a second player.", priority: "Strong" },
  { id: "sprint-speed", name: "Sprint Speed", effect: "Faster extraction loops and better escapes.", priority: "Strong" },
  { id: "extra-jump", name: "Extra Jump", effect: "Mobility for dodging beams and reaching loot.", priority: "Strong" },
  { id: "tumble-launch", name: "Tumble Launch", effect: "Launch loot (or yourself) across the map — advanced hauling tech.", priority: "Situational" },
  { id: "grab-range", name: "Grab Range", effect: "Pick items up from further away.", priority: "Situational" },
  { id: "grab-strength", name: "Grab Strength", effect: "Control heavy items with less fumbling.", priority: "Situational" },
  { id: "map-player-count", name: "Map Player Count", effect: "Adjusts lobby size for the run.", priority: "Situational" }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How does value damage work in R.E.P.O.?",
    answer: "Every valuable has a price cap, and every collision — walls, door frames, drops, monster hits — permanently knocks value off it. Fragile materials like glass and ceramic lose far more per impact than sturdy metal. The truck pays whatever value is left, so careful carrying is literally money."
  },
  {
    question: "How does the quota work?",
    answer: "Each level has a money quota split across extraction points (for example 0/2 from level two onward). Deposit loot into the extraction cart until the counter is full, then leave. Quota climbs steeply with your level — community data puts levels 9-10 around $17k across three extraction points. Failing the quota or wiping ends the whole run."
  },
  {
    question: "What upgrades should I buy first?",
    answer: "Stamina and Max Health are the community-agreed core purchases — energy is the resource every run runs out of first. Strength comes next if you want to haul S-tier items solo."
  },
  {
    question: "Does proximity voice attract monsters?",
    answer: "Yes. Your microphone is positional, and sound-hunting entities like the Huntsman can hear you talk. Mute or whisper near threats, and crouch to reduce noise."
  }
];
