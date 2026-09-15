export interface ScrapItem {
  id: string;
  name: string;
  category: 'Valuables' | 'Electronics' | 'Heavy Machinery' | 'Relics' | 'Artifacts';
  baseValue: number;
  weightKg: number;
  fragility: 'Low' | 'Medium' | 'High' | 'Extreme';
  soloCarryable: boolean;
  description: string;
}

export interface MonsterEntity {
  id: string;
  name: string;
  threatLevel: 'S' | 'A' | 'B' | 'C';
  noiseSensitivity: 'Very High' | 'High' | 'Medium' | 'Low';
  behavior: string;
  counterStrategy: string;
}

export interface GearItem {
  id: string;
  name: string;
  category: 'Transport' | 'Utility' | 'Player Upgrade' | 'Defense';
  cost: number;
  effect: string;
  roiPaybackRuns: number;
  recommendation: 'Must Buy' | 'Highly Recommended' | 'Situational' | 'Late Game';
}

export interface ConsoleCommand {
  command: string;
  category: 'Gameplay' | 'Graphics & FPS' | 'Server Host' | 'Debugging';
  effect: string;
  isCheat: boolean;
}

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
    { label: "Total Scrap Items", value: "65+ Valuables" },
    { label: "Extraction Quotas", value: "Infinite Scaling" }
  ]
};

export const SCRAP_ITEMS: ScrapItem[] = [
  { id: 'gold-bar-stack', name: 'Gold Bar Stack', category: 'Valuables', baseValue: 1200, weightKg: 15.0, fragility: 'Low', soloCarryable: true, description: 'Dense high-value bullion stack. Low damage vulnerability.' },
  { id: 'quantum-core', name: 'Quantum Core Unit', category: 'Artifacts', baseValue: 2500, weightKg: 35.0, fragility: 'Extreme', soloCarryable: false, description: 'Volatile high-value artifact. Drops cause total value decay.' },
  { id: 'vintage-arcade', name: 'Vintage Arcade Cabinet', category: 'Heavy Machinery', baseValue: 1800, weightKg: 50.0, fragility: 'Medium', soloCarryable: false, description: 'Heavy salvage unit. Requires C.A.R.T. or 2-player strength carry.' },
  { id: 'microchip-array', name: 'Encrypted Microchip Array', category: 'Electronics', baseValue: 850, weightKg: 2.5, fragility: 'Low', soloCarryable: true, description: 'Lightweight high-density electronics module. Easy solo extraction.' },
  { id: 'crystal-sculpture', name: 'Prismatic Crystal Sculpture', category: 'Relics', baseValue: 3200, weightKg: 18.0, fragility: 'Extreme', soloCarryable: true, description: 'Fragile art relic. Takes 50% damage penalty upon wall impact.' },
  { id: 'industrial-generator', name: 'Heavy Industrial Generator', category: 'Heavy Machinery', baseValue: 4000, weightKg: 85.0, fragility: 'Low', soloCarryable: false, description: 'Max value heavy item. Requires dual Strength Upgrades or C.A.R.T.' },
  { id: 'ancient-scroll-case', name: 'Gilded Artifact Scroll Case', category: 'Relics', baseValue: 950, weightKg: 4.0, fragility: 'Medium', soloCarryable: true, description: 'Compact relic found in security vaults.' },
  { id: 'fusion-cell', name: 'Charged Fusion Power Cell', category: 'Electronics', baseValue: 1500, weightKg: 12.0, fragility: 'High', soloCarryable: true, description: 'High-tier power core with mild explosion risk upon destruction.' },
  { id: 'plasma-torch', name: 'Industrial Plasma Torch', category: 'Heavy Machinery', baseValue: 1350, weightKg: 22.0, fragility: 'Low', soloCarryable: true, description: 'High-temperature tool used for dismantling blast doors.' },
  { id: 'diamond-drill-bit', name: 'Reinforced Diamond Drill Bit', category: 'Valuables', baseValue: 1100, weightKg: 8.5, fragility: 'Low', soloCarryable: true, description: 'Hardened mining hardware with high scrap value per kilogram.' },
  { id: 'neural-processor', name: 'Sentient Neural Processor', category: 'Electronics', baseValue: 2100, weightKg: 3.0, fragility: 'Extreme', soloCarryable: true, description: 'Fragile synthetic intelligence module from cryogenic labs.' },
  { id: 'titanium-beam', name: 'Structural Titanium Girder', category: 'Heavy Machinery', baseValue: 900, weightKg: 45.0, fragility: 'Low', soloCarryable: false, description: 'Heavy structural scrap found in collapsed facility corridors.' },
  { id: 'ancient-astrolabe', name: 'Brass Celestial Astrolabe', category: 'Relics', baseValue: 1750, weightKg: 6.0, fragility: 'Medium', soloCarryable: true, description: 'Intricate navigational relic discovered in planetary archives.' },
  { id: 'uranium-fuel-rod', name: 'Depleted Uranium Fuel Rod', category: 'Artifacts', baseValue: 3100, weightKg: 28.0, fragility: 'High', soloCarryable: false, description: 'Radiological containment canister with continuous alarm emission.' },
  { id: 'server-rack-blade', name: 'Modular Server Blade Array', category: 'Electronics', baseValue: 1400, weightKg: 14.0, fragility: 'Medium', soloCarryable: true, description: 'Encrypted corporate database slice with intact memory banks.' },
  { id: 'cryo-specimen-tube', name: 'Cryogenic Specimen Tube', category: 'Artifacts', baseValue: 2800, weightKg: 32.0, fragility: 'Extreme', soloCarryable: false, description: 'Biological preservation capsule with pressurized coolant.' },
  { id: 'ruby-scepter', name: 'Coronation Ruby Scepter', category: 'Relics', baseValue: 2600, weightKg: 5.5, fragility: 'High', soloCarryable: true, description: 'Ceremonial artifact encrusted with irradiated synthetic gems.' },
  { id: 'copper-coil-spool', name: 'Superconducting Copper Spool', category: 'Valuables', baseValue: 750, weightKg: 19.0, fragility: 'Low', soloCarryable: true, description: 'Heavy electrical wiring coil salvaged from generator bays.' },
  { id: 'hydraulic-piston', name: 'Heavy Hydraulic Actuator', category: 'Heavy Machinery', baseValue: 1250, weightKg: 38.0, fragility: 'Low', soloCarryable: false, description: 'High-torque machinery part requiring dual grip transport.' },
  { id: 'quantum-hard-drive', name: 'Crystalline Storage Drive', category: 'Electronics', baseValue: 1650, weightKg: 1.8, fragility: 'Medium', soloCarryable: true, description: 'Pocket-sized quantum memory cube with zero weight drag.' },
  { id: 'obsidian-monolith', name: 'Engraved Obsidian Shard', category: 'Relics', baseValue: 3400, weightKg: 42.0, fragility: 'Medium', soloCarryable: false, description: 'Mysterious alien monolith fragment resonating with psychic hums.' },
  { id: 'medical-scanner-rig', name: 'Portable Bio-Scanner Rig', category: 'Electronics', baseValue: 1900, weightKg: 16.0, fragility: 'High', soloCarryable: true, description: 'Advanced diagnostic scanner containing rare optical sensors.' },
  { id: 'platinum-catalyst', name: 'Refined Platinum Filter', category: 'Valuables', baseValue: 2250, weightKg: 7.0, fragility: 'Low', soloCarryable: true, description: 'Pure platinum mesh recovered from industrial filtration tubes.' },
  { id: 'gravity-nullifier', name: 'Faulty Anti-Gravity Emitter', category: 'Artifacts', baseValue: 3800, weightKg: 10.0, fragility: 'Extreme', soloCarryable: true, description: 'Experimental tech that periodically inverts carry physics.' }
];

export const MONSTER_ENTITIES: MonsterEntity[] = [
  { id: 'stalker-phantom', name: 'Sound-Stalker Phantom', threatLevel: 'S', noiseSensitivity: 'Very High', behavior: 'Hunts players based on footsteps & dropped scrap noise. Highly lethal in dark corridors.', counterStrategy: 'Crouch walk, use Rubber Boot Upgrade or throw distracting scrap soundbaits.' },
  { id: 'crawler-behemoth', name: 'Crawler Behemoth', threatLevel: 'A', noiseSensitivity: 'Medium', behavior: 'Patrols main hallways. Attacks players dragging heavy scrap.', counterStrategy: 'Lure away using flare distractor or transport scrap in C.A.R.T. to avoid noise drag.' },
  { id: 'screamer-sentry', name: 'Screamer Alarm Sentry', threatLevel: 'B', noiseSensitivity: 'High', behavior: 'Triggers global alarm upon detecting flashlight or loud impact sounds.', counterStrategy: 'Disable with EMP Gun before carrying fragile items nearby.' },
  { id: 'shadow-mimic', name: 'Scrap Mimic Entity', threatLevel: 'C', noiseSensitivity: 'Low', behavior: 'Disguises itself as high-value gold or core scrap inside vaults.', counterStrategy: 'Scan with Valuable Tracker before picking up unverified loot.' },
  { id: 'corridor-lurker', name: 'Ceiling Tendril Lurker', threatLevel: 'A', noiseSensitivity: 'High', behavior: 'Suspends itself over blind doorways, snaring players carrying overhead scrap.', counterStrategy: 'Point flashlight at ceiling or throw flare into doorway before entering.' },
  { id: 'radiation-aberration', name: 'Mutated Meltdown Reactor', threatLevel: 'S', noiseSensitivity: 'Low', behavior: 'Emits lethal radiation aura that damages players within 15 meters over time.', counterStrategy: 'Deploy Hazmat Shield Gear and extract high-value cores rapidly.' }
];

export const GEAR_MODULES: GearItem[] = [
  { id: 'cart-v2', name: 'C.A.R.T. Transport Vehicle (v2)', category: 'Transport', cost: 1500, effect: 'Transports up to 300kg of scrap without impact damage or dragging sound penalties.', roiPaybackRuns: 1, recommendation: 'Must Buy' },
  { id: 'valuable-tracker', name: 'Valuable Scanner Tracker', category: 'Utility', cost: 800, effect: 'Displays directional ping and distance to highest value items through walls.', roiPaybackRuns: 1, recommendation: 'Must Buy' },
  { id: 'strength-booster-1', name: 'Exo-Suit Strength Upgrade I', category: 'Player Upgrade', cost: 1200, effect: 'Increases solo carry limit by +40kg and prevents solo carrying speed penalties.', roiPaybackRuns: 2, recommendation: 'Highly Recommended' },
  { id: 'sound-dampener', name: 'Stealth Boots Sound Dampener', category: 'Player Upgrade', cost: 650, effect: 'Reduces footstep sound radius by 60%, preventing Sound-Stalker aggro.', roiPaybackRuns: 2, recommendation: 'Highly Recommended' },
  { id: 'emp-distractor', name: 'Disruption EMP Grenade', category: 'Defense', cost: 400, effect: 'Stuns all nearby monsters for 8 seconds and disables Screamer Sentries.', roiPaybackRuns: 1, recommendation: 'Situational' }
];

export const CONSOLE_COMMANDS: ConsoleCommand[] = [
  { command: "repo_show_fps 1", category: "Graphics & FPS", effect: "Displays real-time FPS, frame timing, and VRAM consumption in top right.", isCheat: false },
  { command: "repo_fov 95", category: "Graphics & FPS", effect: "Sets custom FOV field of view (60 - 110 range supported).", isCheat: false },
  { command: "repo_host_lobby_size 6", category: "Server Host", effect: "Expands private lobby size from default 4 players up to 6 players.", isCheat: false },
  { command: "repo_debug_hitboxes 1", category: "Debugging", effect: "Renders entity collision mesh & sound perception spheres in host mode.", isCheat: true },
  { command: "repo_audio_spatial_mode 2", category: "Gameplay", effect: "Enables binaural 3D HRTF sound spatialization for precise monster tracking.", isCheat: false }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How does durability impact loss work in R.E.P.O.?",
    answer: "Every item has a hidden durability rating. When items strike walls, floors, or are dragged across rough terrain without C.A.R.T., they lose 5% to 25% of their base value per impact. If durability reaches zero, the item shatters and loses 100% of its monetary value."
  },
  {
    question: "How is the level quota target calculated?",
    answer: "Level Quota = (Total Level Map Value) × 0.7 × Difficulty Curve Value. The Difficulty Curve starts at 0.4 for early levels and ramps up to 1.0 past level 20. Playing in bigger groups increases total loot spawn count proportionately."
  },
  {
    question: "Why should solo players prioritize the Exo-Suit Strength Upgrade?",
    answer: "Heavy items like Vintage Arcades (50kg) and Generators (85kg) normally require two players to carry without dragging. The Exo-Suit upgrade allows a solo player to carry them overhead smoothly, bypassing impact damage and noise penalties."
  },
  {
    question: "What is the best way to handle the Sound-Stalker Phantom?",
    answer: "The Sound-Stalker is attracted to noise above 40dB (running, dropping scrap, or screaming). Crouch-walk when carrying scrap, use C.A.R.T. for silent transport, or equip Stealth Boots Sound Dampener."
  }
];
