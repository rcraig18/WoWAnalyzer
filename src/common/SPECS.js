import indexById from './indexById';

const SPECS = {
  ARCANE_MAGE: { id: 62, className: 'Mage', spec: 'Arcane', },
  FIRE_MAGE: { id: 63, className: 'Mage', spec: 'Fire', },
  FROST_MAGE: { id: 64, className: 'Mage', spec: 'Frost', },
  HOLY_PALADIN: { id: 65, className: 'Paladin', spec: 'Holy', },
  PROTECTION_PALADIN: { id: 66, className: 'Paladin', spec: 'Protection', },
  RETRIBUTION_PALADIN: { id: 70, className: 'Paladin', spec: 'Retribution', },
  ARMS_WARRIOR: { id: 71, className: 'Warrior', spec: 'Arms', },
  FURY_WARRIOR: { id: 72, className: 'Warrior', spec: 'Fury', },
  PROTECTION_WARRIOR: { id: 73, className: 'Warrior', spec: 'Protection', },
  BALANCE_DRUID: { id: 102, className: 'Druid', spec: 'Balance', },
  FERAL_DRUID: { id: 103, className: 'Druid', spec: 'Feral', },
  GUARDIAN_DRUID: { id: 104, className: 'Druid', spec: 'Guardian', },
  RESTORATION_DRUID: { id: 105, className: 'Druid', spec: 'Restoration', },
  BLOOD_DEATH_KNIGHT: { id: 250, className: 'Death Knight', spec: 'Blood', },
  FROST_DEATH_KNIGHT: { id: 251, className: 'Death Knight', spec: 'Frost', },
  UNHOLY_DEATH_KNIGHT: { id: 252, className: 'Death Knight', spec: 'Unholy', },
  BEAST_MASTERY_HUNTER: { id: 253, className: 'Hunter', spec: 'Beast Mastery', },
  MARKSMANSHIP_HUNTER: { id: 254, className: 'Hunter', spec: 'Marksmanship', },
  SURVIVAL_HUNTER: { id: 255, className: 'Hunter', spec: 'Survival', },
  DISCIPLINE_PRIEST: { id: 256, className: 'Priest', spec: 'Discipline', },
  HOLY_PRIEST: { id: 257, className: 'Priest', spec: 'Holy', },
  SHADOW_PRIEST: { id: 258, className: 'Priest', spec: 'Shadow', },
  ASSASSINATION_ROGUE: { id: 259, className: 'Rogue', spec: 'Assassination', },
  OUTLAW_ROGUE: { id: 260, className: 'Rogue', spec: 'Outlaw', },
  SUBTLETY_ROGUE: { id: 261, className: 'Rogue', spec: 'Subtlety', },
  ELEMENTAL_SHAMAN: { id: 262, className: 'Shaman', spec: 'Elemental', },
  ENHANCEMENT_SHAMAN: { id: 263, className: 'Shaman', spec: 'Enhancement', },
  RESTORATION_SHAMAN: { id: 264, className: 'Shaman', spec: 'Restoration', },
  AFFLICATION_WARLOCK: { id: 265, className: 'Warlock', spec: 'Affliction', },
  DEMONOLOGY_WARLOCK: { id: 266, className: 'Warlock', spec: 'Demonology', },
  DESTRUCTION_WARLOCK: { id: 267, className: 'Warlock', spec: 'Destruction', },
  BREWMASTER_MONK: { id: 268, className: 'Monk', spec: 'Brewmaster', },
  WINDWALKER_MONK: { id: 269, className: 'Monk', spec: 'Windwalker', },
  MISTWEAVER_MONK: { id: 270, className: 'Monk', spec: 'Mistweaver', },
  HAVOC_DEMON_HUNTER: { id: 577, className: 'Demon Hunter', spec: 'Havoc', },
  VENGEANCE_DEMON_HUNTER: { id: 581, className: 'Demon Hunter', spec: 'Vengeance', },
};

export default indexById(SPECS);
