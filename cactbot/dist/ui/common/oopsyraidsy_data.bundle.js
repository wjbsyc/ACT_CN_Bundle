"use strict";
(self["webpackChunkcactbot"] = self["webpackChunkcactbot"] || []).push([[727],{

/***/ 449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ oopsy_manifest)
});

// EXTERNAL MODULE: ./resources/netregexes.ts
var netregexes = __webpack_require__(622);
// EXTERNAL MODULE: ./resources/zone_id.ts
var zone_id = __webpack_require__(588);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/00-misc/general.ts


const raiseAbilityIds = ['7D',
// raise
'AD',
// resurrection
'E13',
// ascend
'1D63',
// verraise
'5EDF',
// egeiro
'478D',
// angel whisper
'7423',
// variant raise
'7426' // variant raise II
];

const targetMitAbilityIdToDuration = {
  // There are L98 traits that increase Reprisal, Feint, and Addle from 10s to 15s
  // TODO: Add a level check to determine duration?
  '1D6F': 15,
  // reprisal
  '1D7D': 15,
  // feint
  'B47': 10,
  // dismantle
  '1D88': 15,
  // addle
  '2C7C': 15,
  // bad breath
  '4781': 10,
  // magic hammer
  '8712': 10 // candy cane
};

const targetMitAbilityIds = Object.keys(targetMitAbilityIdToDuration);
const partyMitAbilityIdToDuration = {
  // tanks
  '1CDC': 30,
  // shake it off
  'DD4': 30,
  // divine veil
  '4057': 15,
  // dark missionary
  '3F20': 15,
  // heart of light
  // healers
  '4098': 20,
  // temperance
  '9093': 10,
  // divine caress
  'BC': 15,
  // sacred soil
  '650C': 20,
  // expedient
  '409A': 20,
  // fey/seraphic illumination (order)
  'E1D': 5,
  // collective unconscious
  '9087': 15,
  // sun sign
  '5EEA': 15,
  // kerachole
  '5EF6': 20,
  // holos
  '5EF7': 15,
  // panhaima
  // melee
  '41': 15,
  // mantra
  // ranged
  // TODO: troubadour/tactician/shield samba should match for overwriting each other
  '1CED': 15,
  // troubadour
  '1CF0': 15,
  // nature's minne
  '3E8C': 15,
  // shield samba
  '41F9': 15,
  // tactician
  // casters
  '6501': 10 // magick barrier
};

const partyMitAbilityIds = Object.keys(partyMitAbilityIdToDuration);
const shieldEffectIdToAbilityId = {
  '5B1': '1CDC',
  // shake it off
  '552': 'DD4',
  // divine veil
  'F3F': '9093',
  // divine caress
  'D25': '5EF6',
  // holosakos -> holos
  'A53': '5EF7' // panhaimatinon -> panhaima
};

const targetDamageAbilityIdToDuration = {
  '1D0C': 20,
  // chain stratagem
  '905D': 20,
  // dokumori
  '2C93': 15,
  // off-guard
  '2C9D': 15,
  // peculiar light
  '8707': 60,
  // breath of magic
  '8713': Number.MAX_SAFE_INTEGER,
  // mortal flame (infinite duration)
  '5750': 60 // lost flare star
};

const targetDamageAbilityIds = Object.keys(targetDamageAbilityIdToDuration);
const partyDamageAbilityIdToDuration = {
  // healers
  '40A8': 20,
  // divination
  // melee
  '1CE4': 20,
  // brotherhood
  'DE5': 20,
  // battle litany
  '5F55': 20,
  // arcane circle
  // ranged
  '76': 20,
  // battle voice
  '64B9': 20,
  // radiant finale
  '81C2': 20,
  // quadruple technical finish (if you overwrite dinky technical finish, good for you)
  // casters
  '64C9': 20,
  // searing light
  '1D60': 20,
  // embolden
  '8773': 20 // starry muse
};

const partyDamageAbilityIds = Object.keys(partyDamageAbilityIdToDuration);

// General mistakes; these apply everywhere.
const triggerSet = {
  zoneId: zone_id/* default.MatchAll */.Z.MatchAll,
  initData: () => {
    return {
      lostFood: {},
      originalRaiser: {},
      lastRaisedLostTime: {},
      raiseTargetTracker: {},
      targetMitTracker: {},
      partyMitTracker: {},
      targetDamageTracker: {},
      partyDamageTracker: {}
    };
  },
  triggers: [{
    // Trigger id for internally generated early pull warning.
    id: 'General Early Pull',
    comment: {
      cn: '抢开'
    }
  }, {
    id: 'General Food Buff',
    comment: {
      cn: '食物消失'
    },
    type: 'LosesEffect',
    // Well Fed
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '30'
    }),
    condition: (_data, matches) => {
      // Prevent "Eos loses the effect of Well Fed from Critlo Mcgee"
      return matches.target === matches.source;
    },
    mistake: (data, matches) => {
      // Well Fed buff happens repeatedly when it falls off (WHY),
      // so suppress multiple occurrences.
      if (!data.inCombat || data.lostFood[matches.target]) return;
      data.lostFood[matches.target] = true;
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'lost food buff',
          de: 'Nahrungsbuff verloren',
          fr: 'Buff nourriture perdue',
          ja: '飯効果が失った',
          cn: '失去食物BUFF',
          ko: '음식 버프 해제',
          tc: '失去食物BUFF'
        }
      };
    }
  }, {
    id: 'General Well Fed',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '30'
    }),
    run: (data, matches) => {
      delete data.lostFood[matches.target];
    }
  }, {
    id: 'General Rabbit Medium',
    comment: {
      cn: '兔印'
    },
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '8E0'
    }),
    condition: (data, matches) => data.IsPlayerId(matches.sourceId),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.source,
        reportId: matches.sourceId,
        text: {
          en: 'bunny',
          de: 'Hase',
          fr: 'lapin',
          ja: 'うさぎ',
          cn: '兔子',
          ko: '토끼',
          tc: '兔子'
        }
      };
    }
  }, {
    id: 'General Raise Lost Effect Tracker',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '94'
    }),
    run: (data, matches) => {
      data.lastRaisedLostTime[matches.targetId] = matches.timestamp;
    }
  }, {
    id: 'General Double Raise',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '94'
    }),
    mistake: (data, matches) => {
      const originalRaiser = data.originalRaiser[matches.targetId];
      // 30 and 26 lines having the same timestamp means effect was overwritten and the target is still dead
      const overwrittenRaise = data.lastRaisedLostTime[matches.targetId] === matches.timestamp;
      // if that's not the case, target doesn't have a raise yet
      if (!overwrittenRaise) {
        data.originalRaiser[matches.targetId] = matches.source;
        return;
      }
      // otherwise, report overwritten raise
      if (originalRaiser !== undefined) {
        delete data.lastRaisedLostTime[matches.targetId];
        const originalRaiserShort = data.party.member(originalRaiser).toString();
        return {
          type: 'warn',
          blame: matches.source,
          reportId: matches.sourceId,
          text: {
            en: `overwrote ${originalRaiserShort}'s raise`,
            de: `überschrieb ${originalRaiserShort}'s Wiederbeleben`,
            fr: `a écrasé la résurrection de ${originalRaiserShort}`,
            ja: `${originalRaiserShort}と重複蘇生`,
            cn: `顶掉了${originalRaiserShort}的复活`,
            ko: `${originalRaiserShort}의 부활과 겹침`,
            tc: `頂掉了${originalRaiserShort}的復活`
          }
        };
      }
    }
  }, {
    id: 'General Raise Cast Tracker',
    type: 'StartsUsing',
    netRegex: netregexes/* default.startsUsing */.ZP.startsUsing({
      id: raiseAbilityIds
    }),
    run: (data, matches) => {
      data.raiseTargetTracker[matches.sourceId] = matches.targetId;
    }
  }, {
    id: 'General Targetless Raise',
    // target raised before cast finished
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: raiseAbilityIds,
      targetId: 'E0000000'
    }),
    mistake: (data, matches) => {
      const targetId = data.raiseTargetTracker[matches.sourceId];
      if (targetId !== undefined) {
        const originalRaiser = data.originalRaiser[targetId];
        if (originalRaiser !== undefined) {
          const originalRaiserShort = data.party.member(originalRaiser).toString();
          return {
            type: 'warn',
            blame: matches.source,
            reportId: matches.sourceId,
            text: {
              en: `overwrote ${originalRaiserShort}'s raise`,
              de: `überschrieb ${originalRaiserShort}'s Wiederbeleben`,
              fr: `a écrasé la résurrection de ${originalRaiserShort}`,
              ja: `${originalRaiserShort}と重複蘇生`,
              cn: `顶掉了${originalRaiserShort}的复活`,
              ko: `${originalRaiserShort}의 부활과 겹침`,
              tc: `頂掉了${originalRaiserShort}的復活`
            }
          };
        }
      }
    }
  }, {
    id: 'General Overwritten Mit',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: targetMitAbilityIds.concat(partyMitAbilityIds)
    }),
    mistake: (data, matches) => {
      const isTargetMit = targetMitAbilityIds.includes(matches.id);
      const isPartyMit = partyMitAbilityIds.includes(matches.id);
      if (isTargetMit && matches.targetId === 'E0000000')
        // missed
        return;
      if (isPartyMit && !data.party.partyIds_.includes(matches.sourceId)) return;
      if (isPartyMit && matches.targetId !== matches.sourceId) return;
      const mitTracker = isTargetMit ? data.targetMitTracker[matches.targetId] ??= {} : data.partyMitTracker;
      const newTime = new Date(matches.timestamp).getTime();
      const newSource = matches.source;
      const lastTime = mitTracker[matches.id]?.time;
      const lastSource = mitTracker[matches.id]?.source;
      mitTracker[matches.id] = {
        time: newTime,
        source: newSource
      };
      const duration = isTargetMit ? targetMitAbilityIdToDuration[matches.id] : partyMitAbilityIdToDuration[matches.id];
      if (lastTime !== undefined && lastSource !== undefined && duration !== undefined) {
        const diff = newTime - lastTime;
        const leeway = duration * 1000 - diff > data.options.MinimumTimeForOverwrittenMit * 1000;
        if (diff < duration * 1000 && leeway) {
          const lastSourceShort = data.party.member(lastSource).toString();
          return {
            type: 'heal',
            blame: matches.source,
            reportId: matches.sourceId,
            text: {
              en: `overwrote ${lastSourceShort}'s ${matches.ability}`,
              de: `überschrieb ${lastSourceShort}'s ${matches.ability}`,
              fr: `a écrasé ${matches.ability} de ${lastSourceShort}`,
              ja: `${lastSourceShort}の${matches.ability}を上書き`,
              cn: `顶掉了${lastSourceShort}的${matches.ability}`,
              ko: `${lastSourceShort}의 ${matches.ability} 덮어씀`,
              tc: `頂掉了${lastSourceShort}的${matches.ability}`
            }
          };
        }
      }
    }
  }, {
    id: 'General Shield Removal',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: Object.keys(shieldEffectIdToAbilityId)
    }),
    run: (data, matches) => {
      const abilityId = shieldEffectIdToAbilityId[matches.effectId];
      if (abilityId !== undefined) delete data.partyMitTracker[abilityId];
    }
  }, {
    id: 'General Overwritten Damage Effect',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: targetDamageAbilityIds.concat(partyDamageAbilityIds)
    }),
    mistake: (data, matches) => {
      const isTargetDamage = targetDamageAbilityIds.includes(matches.id);
      const isPartyDamage = partyDamageAbilityIds.includes(matches.id);
      if (isTargetDamage && matches.targetId === 'E0000000')
        // missed
        return;
      if (isPartyDamage && !data.party.partyIds_.includes(matches.sourceId)) return;
      if (isPartyDamage && matches.targetId !== matches.sourceId) return;
      const damageTracker = isTargetDamage ? data.targetDamageTracker[matches.targetId] ??= {} : data.partyDamageTracker;
      const newTime = new Date(matches.timestamp).getTime();
      const newSource = matches.source;
      const lastTime = damageTracker[matches.id]?.time;
      const lastSource = damageTracker[matches.id]?.source;
      damageTracker[matches.id] = {
        time: newTime,
        source: newSource
      };
      const duration = isTargetDamage ? targetDamageAbilityIdToDuration[matches.id] : partyDamageAbilityIdToDuration[matches.id];
      if (lastTime !== undefined && lastSource !== undefined && duration !== undefined) {
        const diff = newTime - lastTime;
        const leeway = duration * 1000 - diff > data.options.MinimumTimeForOverwrittenDamage * 1000;
        if (diff < duration * 1000 && leeway) {
          const lastSourceShort = data.party.member(lastSource).toString();
          return {
            type: 'warn',
            blame: matches.source,
            reportId: matches.sourceId,
            text: {
              en: `overwrote ${lastSourceShort}'s ${matches.ability}`,
              de: `überschrieb ${lastSourceShort}'s ${matches.ability}`,
              fr: `a écrasé ${matches.ability} de ${lastSourceShort}`,
              ja: `${lastSourceShort}の${matches.ability}を上書き`,
              cn: `顶掉了${lastSourceShort}的${matches.ability}`,
              ko: `${lastSourceShort}의 ${matches.ability} 덮어씀`,
              tc: `頂掉了${lastSourceShort}的${matches.ability}`
            }
          };
        }
      }
    }
  }]
};
/* harmony default export */ const general = (triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/00-misc/test.ts


// Test mistake triggers.
const test_triggerSet = {
  zoneId: zone_id/* default.MiddleLaNoscea */.Z.MiddleLaNoscea,
  triggers: [{
    id: 'Test Bow',
    type: 'GameLog',
    netRegex: netregexes/* default.gameNameLog */.ZP.gameNameLog({
      line: 'You bow courteously to the striking dummy.*?'
    }),
    mistake: data => {
      return {
        type: 'pull',
        blame: data.me,
        text: {
          en: 'Bow',
          de: 'Bogen',
          fr: 'Arc',
          ja: 'お辞儀',
          cn: '鞠躬',
          ko: '인사',
          tc: '鞠躬'
        }
      };
    }
  }, {
    id: 'Test Wipe',
    type: 'GameLog',
    netRegex: netregexes/* default.gameNameLog */.ZP.gameNameLog({
      line: 'You bid farewell to the striking dummy.*?'
    }),
    mistake: data => {
      return {
        type: 'wipe',
        blame: data.me,
        text: {
          en: 'Party Wipe',
          de: 'Gruppenwipe',
          fr: 'Party Wipe',
          ja: 'ワイプ',
          cn: '团灭',
          ko: '파티 전멸',
          tc: '團滅'
        }
      };
    }
  }, {
    id: 'Test Bootshine',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '35'
    }),
    condition: (data, matches) => {
      if (matches.source !== data.me) return false;
      const strikingDummyByLocale = {
        en: 'Striking Dummy',
        de: 'Trainingspuppe',
        fr: 'Mannequin d\'entraînement',
        ja: '木人',
        cn: '木人',
        ko: '나무인형',
        tc: '木人'
      };
      const strikingDummyNames = Object.values(strikingDummyByLocale);
      return strikingDummyNames.includes(matches.target);
    },
    mistake: (data, matches) => {
      data.bootCount ??= 0;
      data.bootCount++;
      const text = `${matches.ability} (${data.bootCount}): ${data.DamageFromMatches(matches)}`;
      return {
        type: 'warn',
        blame: data.me,
        reportId: matches.sourceId,
        text: text
      };
    }
  }, {
    id: 'Test Leaden Fist',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '745'
    }),
    condition: (data, matches) => matches.source === data.me,
    mistake: (data, matches) => {
      return {
        type: 'good',
        blame: data.me,
        reportId: matches.sourceId,
        text: matches.effect
      };
    }
  }, {
    id: 'Test Oops',
    type: 'GameLog',
    netRegex: netregexes/* default.echo */.ZP.echo({
      line: '.*oops.*'
    }),
    suppressSeconds: 10,
    mistake: (data, matches) => {
      return {
        type: 'fail',
        blame: data.me,
        text: matches.line
      };
    }
  }, {
    id: 'Test Poke Collect',
    type: 'GameLog',
    netRegex: netregexes/* default.gameNameLog */.ZP.gameNameLog({
      line: 'You poke the striking dummy.*?'
    }),
    run: data => {
      data.pokeCount = (data.pokeCount ?? 0) + 1;
    }
  }, {
    id: 'Test Poke',
    type: 'GameLog',
    netRegex: netregexes/* default.gameNameLog */.ZP.gameNameLog({
      line: 'You poke the striking dummy.*?'
    }),
    delaySeconds: 5,
    mistake: data => {
      // 1 poke at a time is fine, but more than one in 5 seconds is (OBVIOUSLY) a mistake.
      if (!data.pokeCount || data.pokeCount <= 1) return;
      return {
        type: 'fail',
        blame: data.me,
        text: {
          en: `Too many pokes (${data.pokeCount})`,
          de: `Zu viele Piekser (${data.pokeCount})`,
          fr: `Trop de touches (${data.pokeCount})`,
          ja: `いっぱいつついた (${data.pokeCount})`,
          cn: `戳太多下啦 (${data.pokeCount})`,
          ko: `너무 많이 찌름 (${data.pokeCount}번)`,
          tc: `戳太多下啦 (${data.pokeCount})`
        }
      };
    },
    run: data => delete data.pokeCount
  }],
  timelineReplace: [{
    locale: 'de',
    replaceSync: {
      'You bid farewell to the striking dummy': 'Du winkst der Trainingspuppe zum Abschied zu',
      'You bow courteously to the striking dummy': 'Du verbeugst dich hochachtungsvoll vor der Trainingspuppe',
      'You poke the striking dummy': 'Du stupst die Trainingspuppe an'
    }
  }, {
    locale: 'fr',
    replaceSync: {
      'You bid farewell to the striking dummy': 'Vous faites vos adieux au mannequin d\'entraînement',
      'You bow courteously to the striking dummy': 'Vous vous inclinez devant le mannequin d\'entraînement',
      'You poke the striking dummy': 'Vous touchez légèrement le mannequin d\'entraînement du doigt'
    }
  }, {
    locale: 'ja',
    replaceSync: {
      'You bid farewell to the striking dummy': '.*は木人に別れの挨拶をした',
      'You bow courteously to the striking dummy': '.*は木人にお辞儀した',
      'You poke the striking dummy': '.*は木人をつついた'
    }
  }, {
    locale: 'cn',
    replaceSync: {
      'You bid farewell to the striking dummy': '.*向木人告别',
      'You bow courteously to the striking dummy': '.*恭敬地对木人行礼',
      'You poke the striking dummy': '.*用手指戳向木人'
    }
  }, {
    locale: 'ko',
    replaceSync: {
      'You bid farewell to the striking dummy': '.*나무인형에게 작별 인사를 합니다',
      'You bow courteously to the striking dummy': '.*나무인형에게 공손하게 인사합니다',
      'You poke the striking dummy': '.*나무인형을 쿡쿡 찌릅니다'
    }
  }, {
    locale: 'tc',
    replaceSync: {
      'You bid farewell to the striking dummy': '.*向木人告别',
      'You bow courteously to the striking dummy': '.*恭敬地對木人行禮',
      'You poke the striking dummy': '.*用手指戳向木人'
    }
  }]
};
/* harmony default export */ const test = (test_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/02-arr/trial/ifrit-nm.ts

// Ifrit Story Mode
const ifrit_nm_triggerSet = {
  zoneId: zone_id/* default.TheBowlOfEmbers */.Z.TheBowlOfEmbers,
  damageWarn: {
    'IfritNm Radiant Plume': '2DE'
  },
  shareWarn: {
    'IfritNm Incinerate': '1C5',
    'IfritNm Eruption': '2DD'
  }
};
/* harmony default export */ const ifrit_nm = (ifrit_nm_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/02-arr/trial/levi-ex.ts


// It's hard to capture the reflection abilities from Leviathan's Head and Tail if you use
// ranged physical attacks / magic attacks respectively, as the ability names are the
// ability you used and don't appear to show up in the log as normal "ability" lines.
// That said, dots still tick independently on both so it's likely that people will atack
// them anyway.

// TODO: Figure out why Dread Tide / Waterspout appear like shares (i.e. 0x16 id).
// Dread Tide = 823/824/825, Waterspout = 829
// Leviathan Extreme
const levi_ex_triggerSet = {
  zoneId: zone_id/* default.TheWhorleaterExtreme */.Z.TheWhorleaterExtreme,
  damageWarn: {
    'LeviEx Grand Fall': '82F',
    // very large circular aoe before spinny dives, applies heavy
    'LeviEx Hydro Shot': '748',
    // Wavespine Sahagin aoe that gives Dropsy effect
    'LeviEx Dreadstorm': '749' // Wavetooth Sahagin aoe that gives Hysteria effect
  },

  damageFail: {
    'LeviEx Body Slam': '82A',
    // levi slam that tilts the boat
    'LeviEx Spinning Dive 1': '88A',
    // levi dash across the boat with knockback
    'LeviEx Spinning Dive 2': '88B',
    // levi dash across the boat with knockback
    'LeviEx Spinning Dive 3': '82C' // levi dash across the boat with knockback
  },

  gainsEffectWarn: {
    'LeviEx Dropsy': '110' // standing in the hydro shot from the Wavespine Sahagin
  },

  gainsEffectFail: {
    'LeviEx Hysteria': '128' // standing in the dreadstorm from the Wavetooth Sahagin
  },

  triggers: [{
    id: 'LeviEx Body Slam Knocked Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '82A'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const levi_ex = (levi_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/02-arr/trial/shiva-ex.ts


// Shiva Extreme
const shiva_ex_triggerSet = {
  zoneId: zone_id/* default.TheAkhAfahAmphitheatreExtreme */.Z.TheAkhAfahAmphitheatreExtreme,
  damageWarn: {
    // Large white circles.
    'ShivaEx Icicle Impact': 'BEB',
    // "get in" aoe
    'ShivaEx Whiteout': 'BEC',
    // Avoidable tank stun.
    'ShivaEx Glacier Bash': 'BE9'
  },
  damageFail: {
    // 270 degree attack.
    'ShivaEx Glass Dance': 'BDF'
  },
  shareWarn: {
    // Hailstorm spread marker.
    'ShivaEx Hailstorm': 'BE2'
  },
  shareFail: {
    // Laser.  TODO: maybe blame the person it's on??
    'ShivaEx Avalanche': 'BE0'
  },
  soloWarn: {
    // Party shared tankbuster
    'ShivaEx Icebrand': 'BE1'
  },
  triggers: [{
    id: 'ShivaEx Deep Freeze',
    type: 'GainsEffect',
    // Shiva also uses ability C8A on you, but it has the untranslated name
    // 透明：シヴァ：凍結レクト：ノックバック用/ヒロイック. So, use the effect instead for free translation.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '1E7'
    }),
    condition: (_data, matches) => {
      // The intermission also gets this effect, but for a shorter duration.
      return parseFloat(matches.duration) > 20;
    },
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const shiva_ex = (shiva_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/02-arr/trial/shiva-hm.ts


// Shiva Hard
const shiva_hm_triggerSet = {
  zoneId: zone_id/* default.TheAkhAfahAmphitheatreHard */.Z.TheAkhAfahAmphitheatreHard,
  damageWarn: {
    // Large white circles.
    'ShivaHm Icicle Impact': '993',
    // Avoidable tank stun.
    'ShivaHm Glacier Bash': '9A1'
  },
  shareWarn: {
    // Knockback tank cleave.
    'ShivaHm Heavenly Strike': '9A0',
    // Hailstorm spread marker.
    'ShivaHm Hailstorm': '998'
  },
  shareFail: {
    // Tankbuster.  This is Shiva Hard mode, not Shiva Extreme.  Please!
    'ShivaHm Icebrand': '996'
  },
  triggers: [{
    id: 'ShivaHm Diamond Dust',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '98A'
    }),
    run: data => {
      data.seenDiamondDust = true;
    }
  }, {
    id: 'ShivaHm Deep Freeze',
    type: 'GainsEffect',
    // Shiva also uses ability 9A3 on you, but it has the untranslated name
    // 透明：シヴァ：凍結レクト：ノックバック用. So, use the effect instead for free translation.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '1E7'
    }),
    condition: data => {
      // The intermission also gets this effect, so only a mistake after that.
      // Unlike extreme, this has the same 20 second duration as the intermission.
      return data.seenDiamondDust;
    },
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const shiva_hm = (shiva_hm_triggerSet);
// EXTERNAL MODULE: ./ui/oopsyraidsy/oopsy_common.ts
var oopsy_common = __webpack_require__(416);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/02-arr/trial/titan-ex.ts



// Titan Extreme
const titan_ex_triggerSet = {
  zoneId: zone_id/* default.TheNavelExtreme */.Z.TheNavelExtreme,
  damageWarn: {
    'TitanEx Weight Of The Land': '5BE',
    'TitanEx Burst': '5BF'
  },
  damageFail: {
    'TitanEx Landslide': '5BB',
    'TitanEx Gaoler Landslide': '5C3'
  },
  shareWarn: {
    'TitanEx Rock Buster': '5B7'
  },
  shareFail: {
    'TitanEx Mountain Buster': '5B8'
  },
  triggers: [{
    id: 'TitanEx Landslide Pushed Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '5BB',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '넉백됨',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const titan_ex = (titan_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/02-arr/trial/titan-hm.ts

// Titan Hard
const titan_hm_triggerSet = {
  zoneId: zone_id/* default.TheNavelHard */.Z.TheNavelHard,
  damageWarn: {
    'TitanHm Weight Of The Land': '553',
    'TitanHm Burst': '41C'
  },
  damageFail: {
    'TitanHm Landslide': '554'
  },
  shareWarn: {
    'TitanHm Rock Buster': '550'
  },
  shareFail: {
    'TitanHm Mountain Buster': '283'
  }
};
/* harmony default export */ const titan_hm = (titan_hm_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/02-arr/trial/titan-nm.ts

// Titan Story Mode
const titan_nm_triggerSet = {
  zoneId: zone_id/* default.TheNavel */.Z.TheNavel,
  damageWarn: {
    'TitanNm Weight Of The Land': '3CD'
  },
  damageFail: {
    'TitanNm Landslide': '28A'
  },
  shareWarn: {
    'TitanNm Rock Buster': '281'
  }
};
/* harmony default export */ const titan_nm = (titan_nm_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/02-arr/trial/ultima-ex.ts


const ultima_ex_triggerSet = {
  zoneId: zone_id/* default.TheMinstrelsBalladUltimasBane */.Z.TheMinstrelsBalladUltimasBane,
  damageWarn: {
    'UltimaEx Mistral Song': '5ED',
    // Garuda wide conal
    'UltimaEx Eye of the Storm': '5EF',
    // Garuda donut
    'UltimaEx Radiant Plume': '5F1',
    // Ifrit fire eruptions
    'UltimaEx Weight of the Land': '5F2',
    // Titan puddles
    'UltimaEx Eruption': '5F4',
    // chasing Ifrit explosions
    'UltimaEx Crimson Cyclone': '5F5',
    // Ifrit dash
    'UltimaEx Magitek Ray 1': '5E3',
    // trident laser
    'UltimaEx Magitek Ray 2': '5E4',
    // trident laser
    'UltimaEx Magitek Ray 3': '5E5',
    // trident laser
    'UltimaEx Homing Aetheroplasm': '5E6',
    // chasing Aetheroplasm explosion
    'UltimaEx Magitek Bit Assault Cannon': '5F6' // line aoe from bits
  },

  damageFail: {
    'UltimaEx Fusion Burst': '5E9' // failing to pop orbs
  },

  shareWarn: {
    'UltimaEx Homing Lasers': '5E1',
    // distance? aggro? targeted circular cleave
    'UltimaEx Diffractive Laser': '5E2' // frontal conal cleave
  },

  triggers: [{
    id: 'UltimaEx Viscous Aetheroplasm',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '171',
      count: '05'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const ultima_ex = (ultima_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/alliance/weeping_city.ts


const weeping_city_triggerSet = {
  zoneId: zone_id/* default.TheWeepingCityOfMhach */.Z.TheWeepingCityOfMhach,
  damageWarn: {
    'Weeping Critical Bite': '1848',
    // Sarsuchus cone aoe
    'Weeping Realm Shaker': '183E',
    // First Daughter circle aoe
    'Weeping Silkscreen': '183C',
    // First Daughter line aoe
    'Weeping Silken Spray': '1824',
    // Arachne Eve rear conal aoe
    'Weeping Tremblor 1': '1837',
    // Arachne Eve disappear circle aoe 1
    'Weeping Tremblor 2': '1836',
    // Arachne Eve disappear circle aoe 2
    'Weeping Tremblor 3': '1835',
    // Arachne Eve disappear circle aoe 3
    'Weeping Spider Thread': '1839',
    // Arachne Eve spider line aoe
    'Weeping Fire II': '184E',
    // Black Mage Corpse circle aoe
    'Weeping Necropurge': '17D7',
    // Forgall Shriveled Talon line aoe
    'Weeping Rotten Breath': '17D0',
    // Forgall Dahak cone aoe
    'Weeping Mow': '17D2',
    // Forgall Haagenti unmarked cleave
    'Weeping Dark Eruption': '17C3',
    // Forgall puddle marker
    // 1806 is also Flare Star, but if you get by 1805 you also get hit by 1806?
    'Weeping Flare Star': '1805',
    // Ozma cube phase donut
    'Weeping Execration': '1829',
    // Ozma triangle laser
    'Weeping Haircut 1': '180B',
    // Calofisteri 180 cleave 1
    'Weeping Haircut 2': '180F',
    // Calofisteri 180 cleave 2
    'Weeping Entanglement': '181D',
    // Calofisteri landmine puddle proc
    'Weeping Evil Curl': '1816',
    // Calofisteri axe
    'Weeping Evil Tress': '1817',
    // Calofisteri bulb
    'Weeping Depth Charge': '1820',
    // Calofisteri charge to edge
    'Weeping Feint Particle Beam': '1928',
    // Calofisteri sky laser
    'Weeping Evil Switch': '1815' // Calofisteri lasers
  },

  gainsEffectWarn: {
    'Weeping Hysteria': '128',
    // Arachne Eve Frond Affeard
    'Weeping Zombification': '173',
    // Forgall too many zombie puddles
    'Weeping Toad': '1B7',
    // Forgall Brand of the Fallen failure
    'Weeping Doom': '38E',
    // Forgall Haagenti Mortal Ray
    'Weeping Assimilation': '42C',
    // Ozmashade Assimilation look-away
    'Weeping Stun': '95' // Calofisteri Penetration look-away
  },

  shareWarn: {
    'Weeping Arachne Web': '185E',
    // Arachne Eve headmarker web aoe
    'Weeping Earth Aether': '1841',
    // Arachne Eve orbs
    'Weeping Epigraph': '1852',
    // Headstone untelegraphed laser line tank attack
    // This is too noisy.  Better to pop the balloons than worry about friends.
    // 'Weeping Explosion': '1807', // Ozmasphere Cube orb explosion
    'Weeping Split End 1': '180C',
    // Calofisteri tank cleave 1
    'Weeping Split End 2': '1810',
    // Calofisteri tank cleave 2
    'Weeping Bloodied Nail': '181F' // Calofisteri axe/bulb appearing
  },

  triggers: [{
    id: 'Weeping Forgall Gradual Zombification Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '415'
    }),
    run: (data, matches) => {
      data.zombie ??= {};
      data.zombie[matches.target] = true;
    }
  }, {
    id: 'Weeping Forgall Gradual Zombification Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '415'
    }),
    run: (data, matches) => {
      data.zombie = data.zombie || {};
      data.zombie[matches.target] = false;
    }
  }, {
    id: 'Weeping Forgall Mega Death',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '17CA'
    }),
    condition: (data, matches) => data.zombie && !data.zombie[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    id: 'Weeping Headstone Shield Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '15E'
    }),
    run: (data, matches) => {
      data.shield ??= {};
      data.shield[matches.target] = true;
    }
  }, {
    id: 'Weeping Headstone Shield Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '15E'
    }),
    run: (data, matches) => {
      data.shield = data.shield || {};
      data.shield[matches.target] = false;
    }
  }, {
    id: 'Weeping Flaring Epigraph',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '1856'
    }),
    condition: (data, matches) => data.shield && !data.shield[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    // This ability name is helpfully called "Attack" so name it something else.
    id: 'Weeping Ozma Tank Laser',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      type: '22',
      id: '1831'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        text: {
          en: 'Tank Laser',
          de: 'Tank Laser',
          fr: 'Tank Laser',
          ja: 'タンクレザー',
          cn: '坦克激光',
          ko: '탱커 레이저',
          tc: '坦克雷射'
        }
      };
    }
  }, {
    id: 'Weeping Ozma Holy',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '182E'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Slid off!',
          de: 'ist runtergerutscht!',
          fr: 'A glissé(e) !',
          ja: 'ノックバック',
          cn: '击退！',
          ko: '넉백됨!',
          tc: '擊退！'
        }
      };
    }
  }]
};
/* harmony default export */ const weeping_city = (weeping_city_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/dungeon/aetherochemical_research_facility.ts


// Aetherochemical Research Facility
const aetherochemical_research_facility_triggerSet = {
  zoneId: zone_id/* default.TheAetherochemicalResearchFacility */.Z.TheAetherochemicalResearchFacility,
  damageWarn: {
    'ARF Grand Sword': '216',
    // Conal AoE, Scrambled Iron Giant trash
    'ARF Cermet Drill': '20E',
    // Line AoE, 6th Legion Magitek Vanguard trash
    'ARF Magitek Slug': '10DB',
    // Line AoE, boss 1
    'ARF Aetherochemical Grenado': '10E2',
    // Large targeted circle AoE, Magitek Turret II, boss 1
    'ARF Magitek Spread': '10DC',
    // 270-degree roomwide AoE, boss 1
    'ARF Eerie Soundwave': '1170',
    // Targeted circle AoE, Cultured Empusa trash, before boss 2
    'ARF Tail Slap': '125F',
    // Conal AoE, Cultured Dancer trash, before boss 2
    'ARF Calcifying Mist': '123A',
    // Conal AoE, Cultured Naga trash, before boss 2
    'ARF Puncture': '1171',
    // Short line AoE, Cultured Empusa trash, before boss 2
    'ARF Sideswipe': '11A7',
    // Conal AoE, Cultured Reptoid trash, before boss 2
    'ARF Gust': '395',
    // Targeted small circle AoE, Cultured Mirrorknight trash, before boss 2
    'ARF Marrow Drain': 'D0E',
    // Conal AoE, Cultured Chimera trash, before boss 2
    'ARF Riddle Of The Sphinx': '10E4',
    // Targeted circle AoE, boss 2
    'ARF Ka': '106E',
    // Conal AoE, boss 2
    'ARF Rotoswipe': '11CC',
    // Conal AoE, Facility Dreadnought trash, before boss 3
    'ARF Auto-cannons': '12D9',
    // Line AoE, Monitoring Drone trash, before boss 3
    'ARF Death\'s Door': '4EC',
    // Line AoE, Cultured Shabti trash, before boss 3
    'ARF Spellsword': '4EB',
    // Conal AoE, Cultured Shabti trash, before boss 3
    'ARF End Of Days': '10FD',
    // Line AoE, boss 3
    'ARF Blizzard Burst': '10FE',
    // Fixed circle AoEs, Igeyorhm, boss 3
    'ARF Fire Burst': '10FF',
    // Fixed circle AoEs, Lahabrea, boss 3
    'ARF Sea Of Pitch': '12DE',
    // Targeted persistent circle AoEs, boss 3
    'ARF Dark Blizzard II': '10F3',
    // Random circle AoEs, Igeyorhm, boss 3
    'ARF Dark Fire II': '10F8',
    // Random circle AoEs, Lahabrea, boss 3
    'ARF Ancient Eruption': '1104',
    // Self-targeted circle AoE, boss 4
    'ARF Entropic Flame': '1108' // Line AoEs,  boss 4
  },

  shareWarn: {
    'ARF Chthonic Hush': '10E7',
    // Instant tank cleave, boss 2
    'ARF Height Of Chaos': '1101',
    // Tank cleave, boss 4
    'ARF Ancient Circle': '1102' // Targeted donut AoEs, boss 4
  },

  triggers: [{
    id: 'ARF Petrifaction',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '01'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const aetherochemical_research_facility = (aetherochemical_research_facility_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/dungeon/baelsars_wall.ts

// Baelsar's Wall
const baelsars_wall_triggerSet = {
  zoneId: zone_id/* default.BaelsarsWall */.Z.BaelsarsWall,
  damageWarn: {
    'Baelsar 3rd Cohort Laquerius Overpower': '2D0',
    // Conal AoE, before boss 1
    'Baelsar 3rd Cohort Canis Pugnax Bellowing Grunt': '150',
    // Targeted circle AoE, before boss 1
    'Baelsar 3rd Cohort Signifier Dark Fire III': '519',
    // Targeted circle AoE, before boss 1

    'Baelsar Magitek Predator Magitek Ray': '1CB3',
    // Line AoE, boss 1

    'Baelsar Adamantite Claw Shred': '1257',
    // Rectangle AoE, before boss 2
    'Baelsar Magitek Colossus Exhaust': '593',
    // Line AoE, before boss 2
    'Baelsar Magitek Colossus Grand Sword': '126A',
    // Conal AoE, before boss 2

    'Baelsar Armored Weapon Dynamic Sensory Jammer': '1CBA',
    // Extreme Caution failure, boss 2
    'Baelsar Armored Weapon Diffractive Laser': '1CBB',
    // Targeted circle AoE, boss 2
    'Baelsar Magitek Bit Assault Cannon': '1CC0',
    // Checkerboard line AoEs, boss 2

    'Baelsar Magitek Gunship Carpet Bomb': '1CCF',
    // Targeted circle AoE, after boss 2
    'Baelsar Lance-Wielding Loyalist Heartstopper': '362',
    // Rectangle AoE, after boss 2

    'Baelsar The Griffin Sanguine Blade': '1CC5',
    // Arena cleave, boss 3
    'Baelsar Blade Of The Griffin Corrosion': '1CCC' // Circle AoE, boss 3
  },

  gainsEffectWarn: {
    'Baelsar The Griffin Accuracy Down': '1C' // Flash Powder failure, boss 3
  }
};

/* harmony default export */ const baelsars_wall = (baelsars_wall_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/dungeon/fractal_continuum.ts

// Fractal Continuum
const fractal_continuum_triggerSet = {
  zoneId: zone_id/* default.TheFractalContinuum */.Z.TheFractalContinuum,
  damageWarn: {
    'Fractal Double Sever': 'F7D',
    // Conals, boss 1
    'Fractal Aetheric Compression': 'F80',
    // Ground AoE circles, boss 1
    'Fractal 11-Tonze Swipe': 'F81',
    // Frontal cone, boss 2
    'Fractal 10-Tonze Slash': 'F83',
    // Frontal line, boss 2
    'Fractal 111-Tonze Swing': 'F87',
    // Get-out AoE, boss 2
    'Fractal Broken Glass': 'F8E',
    // Glowing panels, boss 3
    'Fractal Mines': 'F90',
    'Fractal Seed of the Rivers': 'F91' // Ground AoE circles, boss 3
  },

  shareWarn: {
    'Fractal Sanctification': 'F89' // Instant conal buster, boss 3
  }
};

/* harmony default export */ const fractal_continuum = (fractal_continuum_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/dungeon/gubal_library_hard.ts



const gubal_library_hard_triggerSet = {
  zoneId: zone_id/* default.TheGreatGubalLibraryHard */.Z.TheGreatGubalLibraryHard,
  damageWarn: {
    'GubalHm Terror Eye': '930',
    // Circle AoE, Spine Breaker trash
    'GubalHm Batter': '198A',
    // Circle AoE, trash before boss 1
    'GubalHm Condemnation': '390',
    // Conal AoE, Bibliovore trash
    'GubalHm Discontinue 1': '1943',
    // Falling book shadow, boss 1
    'GubalHm Discontinue 2': '1940',
    // Rush AoE from ends, boss 1
    'GubalHm Discontinue 3': '1942',
    // Rush AoE across, boss 1
    'GubalHm Frightful Roar': '193B',
    // Get-Out AoE, boss 1
    'GubalHm Issue 1': '193D',
    // Initial end book warning AoE, boss 1
    'GubalHm Issue 2': '193F',
    // Initial end book warning AoE, boss 1
    'GubalHm Issue 3': '1941',
    // Initial side book warning AoE, boss 1
    'GubalHm Desolation': '198C',
    // Line AoE, Biblioclast trash
    'GubalHm Double Smash': '26A',
    // Conal AoE, Biblioclast trash
    'GubalHm Darkness': '3A0',
    // Conal AoE, Inkstain trash
    'GubalHm Firewater': '3BA',
    // Circle AoE, Biblioclast trash
    'GubalHm Elbow Drop': 'CBA',
    // Conal AoE, Biblioclast trash
    'GubalHm Dark': '19DF',
    // Large circle AoE, Inkstain trash
    'GubalHm Seals': '194A',
    // Sun/Moonseal failure, boss 2
    'GubalHm Water III': '1C67',
    // Large circle AoE, Porogo Pegist trash
    'GubalHm Raging Axe': '1703',
    // Small conal AoE, Mechanoservitor trash
    'GubalHm Magic Hammer': '1990',
    // Large circle AoE, Apanda mini-boss
    'GubalHm Properties Of Gravity': '1950',
    // Circle AoE from gravity puddles, boss 3
    'GubalHm Properties Of Levitation': '194F',
    // Circle AoE from levitation puddles, boss 3
    'GubalHm Comet': '1969' // Small circle AoE, intermission, boss 3
  },

  damageFail: {
    'GubalHm Ecliptic Meteor': '195C' // LoS mechanic, boss 3
  },

  shareWarn: {
    'GubalHm Searing Wind': '1944',
    // Tank cleave, boss 2
    'GubalHm Thunder': '19[AB]' // Spread marker, boss 3
  },

  triggers: [{
    // Fire gate in hallway to boss 2, magnet failure on boss 2
    id: 'GubalHm Burns',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '10B'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    // Helper for Thunder 3 failures
    id: 'GubalHm Imp Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '46E'
    }),
    run: (data, matches) => {
      data.hasImp ??= {};
      data.hasImp[matches.target] = true;
    }
  }, {
    id: 'GubalHm Imp Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '46E'
    }),
    run: (data, matches) => {
      data.hasImp = data.hasImp || {};
      data.hasImp[matches.target] = false;
    }
  }, {
    // Targets with Imp when Thunder III resolves receive a vulnerability stack and brief stun
    id: 'GubalHm Imp Thunder',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '195[AB]',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.hasImp?.[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Shocked Imp',
          de: 'Schockierter Imp',
          fr: 'Kappa choqué(e)',
          ja: 'カッパを解除しなかった',
          cn: '河童状态吃了暴雷',
          ko: '물요정 상태 해제하지 않음',
          tc: '河童狀態吃了暴雷'
        }
      };
    }
  }, {
    id: 'GubalHm Quake',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '1956',
      ...oopsy_common/* playerDamageFields */.np
    }),
    // Always hits target, but if correctly resolved will deal 0 damage
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'GubalHm Tornado',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '195[78]',
      ...oopsy_common/* playerDamageFields */.np
    }),
    // Always hits target, but if correctly resolved will deal 0 damage
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const gubal_library_hard = (gubal_library_hard_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/dungeon/sohm_al_hard.ts


const sohm_al_hard_triggerSet = {
  zoneId: zone_id/* default.SohmAlHard */.Z.SohmAlHard,
  damageWarn: {
    'SohmAlHm Deadly Vapor': '1DC9',
    // Environmental circle AoEs
    'SohmAlHm Deeproot': '1CDA',
    // Targeted circle AoE, Blooming Chichu trash
    'SohmAlHm Odious Air': '1CDB',
    // Conal AoE, Blooming Chichu trash
    'SohmAlHm Glorious Blaze': '1C33',
    // Circle AoE, Small Spore Sac, boss 1
    'SohmAlHm Foul Waters': '118A',
    // Conal AoE, Mountaintop Opken trash
    'SohmAlHm Plain Pound': '1187',
    // Targeted circle AoE, Mountaintop Hropken trash
    'SohmAlHm Palsynyxis': '1161',
    // Conal AoE, Overgrown Difflugia trash
    'SohmAlHm Surface Breach': '1E80',
    // Circle AoE, Giant Netherworm trash
    'SohmAlHm Freshwater Cannon': '119F',
    // Line AoE, Giant Netherworm trash
    'SohmAlHm Tail Smash': '1C35',
    // Untelegraphed rear conal AoE, Gowrow, boss 2
    'SohmAlHm Tail Swing': '1C36',
    // Untelegraphed circle AoE, Gowrow, boss 2
    'SohmAlHm Ripper Claw': '1C37',
    // Untelegraphed frontal AoE, Gowrow, boss 2
    'SohmAlHm Wind Slash': '1C38',
    // Circle AoE, Gowrow, boss 2
    'SohmAlHm Wild Charge': '1C39',
    // Dash attack, Gowrow, boss 2
    'SohmAlHm Hot Charge': '1C3A',
    // Dash attack, Gowrow, boss 2
    'SohmAlHm Fireball': '1C3B',
    // Untelegraphed targeted circle AoE, Gowrow, boss 2
    'SohmAlHm Lava Flow': '1C3C',
    // Untelegraphed conal AoE, Gowrow, boss 2
    'SohmAlHm Wild Horn': '1507',
    // Conal AoE, Abalathian Clay Golem trash
    'SohmAlHm Lava Breath': '1C4D',
    // Conal AoE, Lava Crab trash
    'SohmAlHm Ring of Fire': '1C4C',
    // Targeted circle AoE, Volcano Anala trash
    'SohmAlHm Molten Silk 1': '1C43',
    // 270-degree frontal AoE, Lava Scorpion, boss 3
    'SohmAlHm Molten Silk 2': '1C44',
    // 270-degree rear AoE, Lava Scorpion, boss 3
    'SohmAlHm Molten Silk 3': '1C42',
    // Ring AoE, Lava Scorpion, boss 3
    'SohmAlHm Realm Shaker': '1C41' // Circle AoE, Lava Scorpion, boss 3
  },

  triggers: [{
    // Warns if players step into the lava puddles. There is unfortunately no direct damage event.
    id: 'SohmAlHm Burns',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '11C'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const sohm_al_hard = (sohm_al_hard_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/dungeon/the_lost_city_of_amdapor_hard.ts

// TODO: taking wrong ancient libra with debuff
// TODO: does scratch cleave?
const the_lost_city_of_amdapor_hard_triggerSet = {
  zoneId: zone_id/* default.TheLostCityOfAmdaporHard */.Z.TheLostCityOfAmdaporHard,
  damageWarn: {
    'LostCityHard Magicked Crawler Sticky Thread': '1164',
    // frontal conal
    'LostCityHard Magicked Crawler Poison Breath': '1165',
    // frontal conal
    'LostCityHard Ranting Ranks Gremlin Fire II': '16C0',
    // targeted circle

    'LostCityHard Achamoth Psycho Squama': '15C6',
    // large frontal conal
    'LostCityHard Achamoth Dissipate': '15C8',
    // being hit by the chasing Toxic Squama orb
    'LostCityHard Achamoth Enthrallment': '15C3',
    // conal from Neuro Squama clones

    'LostCityHard Rift Dragon Miasma Breath': '1249',
    // frontal conal
    'LostCityHard Amdapori Corpse Holy': '1706',
    // targeted circle
    'LostCityHard Void Monk Water III': '16C7',
    // interruptible targeted circle
    'LostCityHard Void Monk Flood': '16C6',
    // untelegraphed circle? after Sucker draw-in

    'LostCityHard Winged Lion Ancient Aero': '15CF',
    // large targeted circle
    'LostCityHard Winged Lion Ancient Stone': '15D3',
    // targeted circle
    'LostCityHard Winged Lion Ancient Aero Grown': '1760',
    // raidwide if aero not popped
    'LostCityHard Winged Lion Ancient Stone Grown': '167B',
    // untelegraphed circle? if stone not popped
    'LostCityHard Winged Lion Ancient Holy Grown': '15CD',
    // raidwide if holy not popped
    // FIXME: this id is the same as the Holy above, is it correct or one of them incorrect?
    // 'LostCityHard Winged Lion Gargoyle Holy': '1706', // letting adds live too long

    'LostCityHard Clay Effigy Wild Horn': '1507',
    // frontal conal
    'LostCityHard Mana Idol Neck Splinter': '1169',
    // centered circle

    'LostCityHard Kuribu Glory': '15E4' // frontal conal
  },

  gainsEffectWarn: {
    'LostCityHard Achamoth Pollen': '13',
    // standing in the Toxic Squama puddle
    'LostCityHard Rift Dragon Terror': '42',
    // Evil Eye conal
    'LostCityHard Winged Lion Magic Defense Down': '26',
    // not finishing the holy orb in time
    'LostCityHard Mana Pot Mysterious Light Blind': '0F' // not looking away
  },

  shareWarn: {
    'LostCityHard Kuribu Reverse Cure III': '15DB' // spread
  }
};

/* harmony default export */ const the_lost_city_of_amdapor_hard = (the_lost_city_of_amdapor_hard_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/raid/a10n.ts

const a10n_triggerSet = {
  zoneId: zone_id/* default.AlexanderTheBreathOfTheCreator */.Z.AlexanderTheBreathOfTheCreator,
  damageWarn: {
    'A10N Lamebrix Illuminati Hand Cannon': '1AD2',
    // Rectangle AoE
    'A10N Blizzard Arrow Frostbite': '1AC7',
    // Ice trap AoE on edges
    'A10N Weight Of The World Impact': '1AC6',
    // Mace traps in the center
    'A10N Gobpress Steam Roller': '1AB4',
    // Intermission Demon Wall AoE
    'A10N Lamebrix Gobswipe Conklops': '1ACB',
    // Single Charge dynamo/green
    'A10N Lamebrix Gobspin Whooshdrop': '1ACC',
    // Single Charge chariot/red
    'A10N Buzzsaw Laceration': '1AC8'
  },
  damageFail: {
    'A10N Goblin Of Fortune Gobbieboom': '1AD3' // Add enrage
  },

  gainsEffectWarn: {
    'A10N Electrocution': '120',
    // Arena danger walls
    'A10N Stab Wound': '45D' // Activation of the spike trap. (No info on who did it.)
  },

  shareWarn: {
    'A10N Lamebrix Gobslash Slicetops': '1AD1',
    // Stretchy tether AoE
    'A10N Lamebrix Critical Wrath': '1ACD' // Fire spread circles
  },

  soloWarn: {
    'A10N Lamebrix Bomb Toss': '1ACE' // Standard stack marker
  }
};

/* harmony default export */ const a10n = (a10n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/raid/a12n.ts



const a12n_triggerSet = {
  zoneId: zone_id/* default.AlexanderTheSoulOfTheCreator */.Z.AlexanderTheSoulOfTheCreator,
  damageWarn: {
    'A12N Sacrament': '1AE6',
    // Cross Lasers
    'A12N Gravitational Anomaly': '1AEB' // Gravity Puddles
  },

  shareWarn: {
    'A12N Divine Spear': '1AE3',
    // Instant conal tank cleave
    'A12N Blazing Scourge': '1AE9',
    // Orange head marker splash damage
    'A12N Plaint Of Severity': '1AF1',
    // Aggravated Assault splash damage
    'A12N Communion': '1AFC' // Tether Puddles
  },

  triggers: [{
    id: 'A12N Assault Collect',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '461'
    }),
    run: (data, matches) => {
      data.assault ??= [];
      data.assault.push(matches.target);
    }
  }, {
    // It is a failure for a Severity marker to stack with the Solidarity group.
    id: 'A12N Assault Failure',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '1AF2',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.assault?.includes(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Didn\'t Spread!',
          de: 'Nicht verteilt!',
          fr: 'Ne s\'est pas dispersé(e) !',
          ja: '散開しなかった!',
          cn: '没有散开!',
          ko: '산개하지 않았음!',
          tc: '沒有散開!'
        }
      };
    }
  }, {
    id: 'A12N Assault Cleanup',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '461'
    }),
    delaySeconds: 20,
    suppressSeconds: 5,
    run: data => {
      delete data.assault;
    }
  }]
};
/* harmony default export */ const a12n = (a12n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/raid/a3n.ts

const a3n_triggerSet = {
  zoneId: zone_id/* default.AlexanderTheArmOfTheFather */.Z.AlexanderTheArmOfTheFather,
  damageWarn: {
    'A3N Protean Wave': '12F0',
    'A3N Sluice Puddles': '12F4',
    // Puddle AoEs
    'A3N Ultramagnetism': '1308',
    // Attracting magnets too close
    'A3N Current Leakeage 1': '130C',
    // Gear Lubricant escaping
    'A3N Current Leakeage 2': '130D' // Piston Lubricant escaping
  },

  gainsEffectWarn: {
    'A3N Electrocution': '120',
    // Arena edge debuff. (Also paralysis and stun.)
    'A3N Dropsy': '121' // Water puddle debuff. (Tornado and final phase.)
  },

  shareWarn: {
    'A3N Fluid Swing 1': '12EE',
    // Tank cleave, no debuff
    'A3N Fluid Swing 2': '12F5',
    // Tank cleave, blunt resistance down debuff
    'A3N Fluid Strike 1': '12FD',
    // Tank cleave, no debuff
    'A3N Fluid Strike 2': '12FE' // Tank cleave, blunt resistance down debuff
  }
};

/* harmony default export */ const a3n = (a3n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/raid/a6n.ts

const a6n_triggerSet = {
  zoneId: zone_id/* default.AlexanderTheCuffOfTheSon */.Z.AlexanderTheCuffOfTheSon,
  damageWarn: {
    'A6N Minefield': '170D',
    // Circle AoE, mines.
    'A6N Mine': '170E',
    // Mine explosion.
    'A6N Supercharge': '1713',
    // Mirage charge.
    'A6N Height Error': '171D',
    // Incorrect panel for Height.
    'A6N Earth Missile': '1726' // Circle AoE, fire puddles.
  },

  damageFail: {
    'A6N Ultra Flash': '1722' // Room-wide death AoE, if not LoS'd.
  },

  shareWarn: {
    'A6N Ice Missile': '1727' // Ice headmarker AoE circles.
  },

  shareFail: {
    'A6N Single Buster': '1717' // Single laser Attachment. Non-tanks are *probably* dead.
  },

  soloWarn: {
    'A6N Double Buster': '1718',
    // Twin laser Attachment.
    'A6N Enumeration': '171E' // Enumeration circle.
  }
};

/* harmony default export */ const a6n = (a6n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/trial/sephirot-ex.ts


const sephirot_ex_triggerSet = {
  zoneId: zone_id/* default.ContainmentBayS1T7Extreme */.Z.ContainmentBayS1T7Extreme,
  damageWarn: {
    'SephirotEX Yesod': '157E',
    // Snapshot floor spikes
    'SephirotEX Ain': '1569',
    // Half-arena baited frontal
    'SephirotEX Ein Sof': '156F',
    // Expanding green puddles
    'SephirotEX Fiendish Wail': '1577' // Raidwide if tower is missed
  },

  damageFail: {
    'SephirotEX Pillar Of Mercy': '1581',
    // Standing in the blue puddles
    'SephirotEX Storm Of Words Revelation': '1583' // Missing the enrage on Storm of Words
  },

  shareWarn: {
    'SephirotEX Triple Trial': '1566',
    // Instant tank cleave
    'SephirotEX Ratzon Green': '156B',
    // Small green spread circle
    'SephirotEX Ratzon Purple': '156C',
    // Large purple spread circle
    'SephirotEX Earth Shaker': '157D',
    'SephirotEX Spread Da\'at': '1573'
  },
  soloWarn: {
    'SephirotEX Fiendish Rage': '156D' // Stack markers, phase 1
  },

  triggers: [{
    // Pillar of Mercy,  Malkuth, and Pillar of Severity
    id: 'SephirotEX Knockbacks',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['1580', '1582', '1586'],
      source: 'Sephirot'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '넉백됨',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    // 3ED is Force Against Might orange, 3EE is Force Against Magic, green.
    id: 'SephirotEX Force Against Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: ['3ED', '3EE']
    }),
    run: (data, matches) => {
      data.force ??= {};
      data.force[matches.target] = matches.effectId;
    }
  }, {
    id: 'SephirotEX Force Against Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: ['3ED', '3EE']
    }),
    run: (data, matches) => {
      data.force ??= {};
      delete data.force[matches.target];
    }
  }, {
    id: 'SephirotEX Spirit',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '157B',
      source: 'Sephirot'
    }),
    condition: (data, matches) => data?.force?.[matches.target] === '3ED',
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    id: 'SephirotEX Life Force',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '157A',
      source: 'Sephirot'
    }),
    condition: (data, matches) => data?.force?.[matches.target] === '3EE',
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    id: 'SephirotEX Fiendish Wail Green',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '1576',
      source: 'Sephirot'
    }),
    condition: (data, matches) => data?.force?.[matches.target] === '3EE',
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    // Only tanks or Blue Mages should take towers without a Force debuff.
    id: 'SephirotEX Fiendish Wail Non-Tank',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '1576',
      source: 'Sephirot'
    }),
    condition: (data, matches) => {
      if (data.party.isTank(matches.target) || data.job === 'BLU') return false;
      return data?.force?.[matches.target] === undefined;
    },
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    // Taking a tether while under Force Against Might (orange) kills the target
    id: 'SephirotEX Tether Da\'at',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '1574',
      source: 'Sephirot'
    }),
    condition: (data, matches) => data?.force?.[matches.target] === '3ED',
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const sephirot_ex = (sephirot_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/trial/sophia-ex.ts




// TODO: failing Discordant Cleansing

const sophia_ex_triggerSet = {
  zoneId: zone_id/* default.ContainmentBayP1T6Extreme */.Z.ContainmentBayP1T6Extreme,
  damageWarn: {
    'SophiaEx Thunder II': '19B0',
    // untelegraphed front cleave
    'SophiaEx Aero III': '19AE',
    // "get out"
    'SophiaEx Thunder III': '19AC',
    // "get under"
    'SophiaEx Aion Teleos Execute 1': '19B1',
    // Thunder II duplication
    'SophiaEx Aion Teleos Execute 2': '19AF',
    // Aero III duplication
    'SophiaEx Aion Teleos Execute 3': '19AD',
    // Thunder III duplication
    'SophiaEx Gnosis': '19C2',
    // knockback
    'SophiaEx The Third Demiurge Ring of Pain': '19BA',
    // circle that leaves a frost puddle
    'SophiaEx The Third Demiurge Gnostic Spear': '19B9',
    // 270 degree untelegraphed cleave
    'SophiaEx Onrush': '19C1',
    // dash
    'SophiaEx Barbelo Light Dew Execute': '19BF',
    // line laser from Barbelo head during Execuute
    'SophiaEx Barbelo Light Dew Onrush': '19C0' // line laser from Barbelo head during Onrush
  },

  damageFail: {
    'SophiaEx The First Demiurge Revengeance': '19BD' // hitting Vertical/Horizontal Kenoma
  },

  gainsEffectWarn: {
    'SophiaEx Frostbite': '25D' // standing in the frost puddle from the Third Demiurge
  },

  triggers: [{
    // Look away; does damage if failed.
    id: 'SophiaEx The Second Demiurge Divine Spark',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '19B6',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'SophiaEx Knocked Off',
    type: 'Ability',
    // 1981 = The Scales of Wisdom
    // 1AE1 = The Scales of Wisdom
    // 19C2 = Gnosis (knockback from Barbelo add)
    // Technically, things like Aero III and keroma also knock people off but they also can kill people
    // if we ever get proper "you fell off" log lines, we can fix this up.
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['1981', '1AE1', '19C2']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const sophia_ex = (sophia_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/trial/thordan-ex.ts


const thordan_ex_triggerSet = {
  zoneId: zone_id/* default.TheMinstrelsBalladThordansReign */.Z.TheMinstrelsBalladThordansReign,
  damageWarn: {
    'ThordanEX Meteorain': '1484',
    // Targeted puddle AoEs, phase 1
    'ThordanEX Ascalons Mercy 1': '147F',
    // Fan-shaped conal AoEs
    'ThordanEX Ascalons Mercy 2': '1480',
    // Fan-shaped conal AoEs
    'ThordanEX Charibert Heavensflame': '14AC',
    // Targeted puddle AoEs, phases 2/6
    'ThordanEX Spiral Thrust': '14A6',
    // Cross-arena dashes, Ignasse/Paulecrain/Vellguine
    'ThordanEX Grinnaux Dimensional Collapse': '149A',
    // Gravity puddles
    'ThordanEX Guerrique Heavy Impact 1': '14A0',
    // Earth ring tiny
    'ThordanEX Guerrique Heavy Impact 2': '14A1',
    // Earth ring small
    'ThordanEX Guerrique Heavy Impact 3': '14A2',
    // Earth ring large
    'ThordanEX Guerrique Heavy Impact 4': '14A3',
    // Earth ring giant
    'ThordanEX Charibert Holy Chain': '14AD' // Failure to break chains on time
  },

  damageFail: {
    'ThordanEX Hermenost Eternal Conviction': '149E',
    // Missed towers
    'ThordanEX Comet Circle Comet Impact': '14B3' // Small meteor enrage, might not be survivable
  },

  gainsEffectWarn: {
    'ThordanEX Frostbite': '10C',
    // Standing in Hiemal Storm ice puddles
    'ThordanEX Hysteria': '128' // Gaze mechanic failure
  },

  shareWarn: {
    'ThordanEX Ascalons Might': '147E',
    // Instant tank cleave
    'ThordanEX Lightning Storm': '1482',
    // Lightning spread markers
    'ThordanEX Heavenly Slash': '1494',
    // Cleaving mini-buster, Adelphel/Janlenoux, phase 2
    'ThordanEX Haumeric Hiemal Storm': '14AF',
    // Ice spread circles, Haumeric, phase 2/6
    'ThordanEX Spiral Pierce': '14A7',
    // Tethered line AoEs, Ignasse/Paulecrain/Vellguine
    'ThordanEX Noudenet Comet': '14B5' // Targeted puddle AoEs, phases 2/6
  },

  soloWarn: {
    'ThordanEX Dragons Rage': '148B',
    // Standard stack marker
    'ThordanEX Zephirin Spear Of The Fury': '1492' // Wild Charge
  },

  triggers: [{
    id: 'ThordanEX Grinnaux Faith Unmoving',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '149B'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '벽으로 넉백',
          tc: '擊退至牆'
        }
      };
    }
  }]
};
/* harmony default export */ const thordan_ex = (thordan_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/03-hw/trial/zurvan-ex.ts

const zurvan_ex_triggerSet = {
  zoneId: zone_id/* default.ContainmentBayZ1T9Extreme */.Z.ContainmentBayZ1T9Extreme,
  damageWarn: {
    'ZurvanEX Flare Star': '1C4F',
    // Flame puddle AoEs, phase 1
    'ZurvanEX Twin Spirit 1': '1C52',
    // Zurvan half dives during Soar, phase 3 onward
    'ZurvanEX Twin Spirit 2': '1C53',
    // Zurvan full dives during Soar, phase 3 onward
    'ZurvanEX Biting Halberd': '1C59',
    // 270-degree cleave, phase 3 onward
    'ZurvanEX Tail End': '1C5A',
    // Chariot AoE, phase 3 onward
    'ZurvanEX Ciclicle': '1C5B',
    // Dynamo AoE, phase 3 onward
    'ZurvanEX Souther Cross': '1C5D',
    // Ice puddle explosion, phase 3 onward
    'ZurvanEX South Star 1': '1C6B',
    // Tower failure during Broken Seal, phase 5
    'ZurvanEX North Star 1': '1C6C',
    // Tower failure during Broken Seal, phase 5
    'ZurvanEX Comet': '1C64',
    // Flame puddle AoEs, add intermission
    'ZurvanEX South Star 2': '1E64',
    // Tower failure during Broken Seal, phase 5
    'ZurvanEX North Star 2': '1E65' // Tower failure during Broken Seal, phase 5
  },

  damageFail: {
    'ZurvanEX Meracydian Meteor': '1C63'
  },
  gainsEffectWarn: {
    'ZurvanEX Frostbite': '11D',
    // Southern Cross puddles, phase 3 onward
    'ZurvanEX Hysteria': '128',
    // Gaze attack, Meracydian Wile, intermission
    'ZurvanEX Infinite Anguish Tower': '487',
    // Outside of a tower during Broken Seal, phase 5
    'ZurvanEX Infinite Anguish Tether': '48A' // Hyperextended tether during Broken Seal, phase 5
  },

  shareWarn: {
    'ZurvanEX Metal Cutter 1': '1E3F',
    // Tank cleave, phase 1
    'ZurvanEX Metal Cutter 2': '1C70',
    // Tank cleave, phase 2 onward
    'ZurvanEX Wave Cannon Avoid': '1C73',
    // Bleed laser, phase 2 onward
    'ZurvanEX Flaming Halberd': '1C54',
    // Giant spread circles during Soar, phase 3 onward
    'ZurvanEX Cool Flame': '1C55',
    // Prey marker during Soar, phase 3 onward
    'ZurvanEX Fire III': '1C6F' // Tank Cleave
  },

  soloWarn: {
    'ZurvanEX Demonic Dive': '1C56',
    // Stack marker during Soar, phase 3 onward
    'ZurvanEX Wave Cannon Stack': '1C72' // Line stack after Demon's Claw, phase 2 onward
  }
};

/* harmony default export */ const zurvan_ex = (zurvan_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/alliance/orbonne_monastery.ts




// Note: Mustadio Last Testament (3737) does damage whether you succeed or fail,
// but is lethal if you fail, so it should be obvious when failed.
// Note: Similarly skipping Agrias Duskblade (3761), which also ~wipes when towers are missed.
// Note: skipping Agrias Frostbite (11D), which many people get a tick of when add is nearly dead.
// Note: Ultima's Aspersory Pervailing Current (38CC) hits a lot for low damage, so skipping.

// TODO: Dark Crusader Dark Rite (377F) going off if towers aren't stepped in.
// TODO: Bleeding from Agrias Shadowblade orbs merging and exploding?
// TODO: Ultima Dark Cannonade dorito stack does damage on success and failure.
const orbonne_monastery_triggerSet = {
  zoneId: zone_id/* default.TheOrbonneMonastery */.Z.TheOrbonneMonastery,
  damageWarn: {
    'Orbonne Harpy Blasphemous Howl': '3779',
    // large targeted circle
    'Orbonne Monastic Ghost Dark Eruption': '3A15',
    // targeted circle
    'Orbonne Monastic Ghost Lingering Resenentment': '377C',
    // large targeted circle
    'Orbonne Mustadio Right Handgonne': '373E',
    // left/right haircut
    'Orbonne Mustadio Left Handgonne': '373F',
    // left/right haircut
    'Orbonne Mustadio Iron Giant Compress': '3740',
    // line aoe from tethered Iron Giant on outside
    'Orbonne Mustadio Ballistic Impact': '3743',
    // spread marker
    'Orbonne Mustadio Searchlight': '3744',
    // chasing red circle that locks in
    'Orbonne Mustadio Leg Shot': '3742',
    // mines
    'Orbonne Mustadio Early Turret Satellite Beam': '3741',
    // quadrant explosion from tethered Early Turret
    'Orbonne Agrias Northswain\'s Strike': '3853',
    // line aoes from outside adds during sword+crystals phase
    'Orbonne Agrias Hallowed Bolt Circle': '385B',
    // very large circle
    'Orbonne Agrias Hallowed Bolt Donut': '385C',
    // very large donut
    'Orbonne Dark Crusader Infernal Wave': '3781',
    // line aoe
    'Orbonne Cid Hallowed Bolt': '374B',
    // lightning platform hit from sword after T.G. Holy Sword (3749)
    'Orbonne Cid Northswain\'s Strike': '3AD3',
    // "get out" after T.G. Holy Sword (374F)
    'Orbonne Cid Judgment Blade': '3AD4',
    // "get in" after T.G. Holy Sword (374A)
    'Orbonne Cid Agrias Shadowblade Orbs': '375F',
    // followup hits from growing red/black orbs
    'Orbonne Cid Crush Weapon 1': '4756',
    // chasing circle initial hit
    'Orbonne Cid Crush Weapon 2': '4757',
    // chasing circle
    'Orbonne Cid Ephemeral Knight Hallowed Bolt Donut': '3767',
    // initial donut from Ephemeral Knight headmarker
    'Orbonne Cid Ephemeral Knight Hallowed Bolt Circle': '3766',
    // followup circle from Ephemeral Knight
    'Orbonne Cid Crush Accessory': '375B',
    // platform aoe with safe spot on Icewolf add
    'Orbonne Ultima Holy IV': '389A',
    // targeted circle
    'Orbonne Ultima Auralight Line': '3897',
    // 3x lines during Auralight (38EA) cast that turn into ice
    'Orbonne Ultima Auralight Circle': '3898',
    // centered circle during Auralight (38EA) cast
    'Orbonne Ultima Auracite Shard Plummet': '38AD',
    // 3x shards falling before Grand Cross (38AC)
    'Orbonne Ultima Auracite Shard Grand Cross': '38AE',
    // cross explosion from Auracite Shards
    'Orbonne Ultima Demi-Belias Time Eruption 1': '38D0',
    // fast/slow clocks
    'Orbonne Ultima Demi-Belias Time Eruption 2': '38D1',
    // fast/slow clocks
    'Orbonne Ultima Demi-Hashmal Towerfall': '38D7',
    // control tower falling over
    'Orbonne Ultima Demi-Hashmal Extreme Edge 1': '38DA',
    // left/right cleave dash
    'Orbonne Ultima Demi-Hashmal Extreme Edge 2': '38DB',
    // left/right cleave dash
    'Orbonne Ultima Demi-Belias Eruption': '37C8',
    // headmarker with chasing telegraphed circle aoes
    'Orbonne Ultima Dominion Ray Of Light': '38B7',
    // lingering line aoe with Eastward/Westward March
    'Orbonne Ultima Embrace Initial': '38B9',
    // hidden blue traps being placed
    'Orbonne Ultima Embrace Triggered': '38BA',
    // hidden blue traps being triggered
    'Orbonne Ultima Explosion': '38E9',
    // failing to stop for Acceleration Bomb
    'Orbonne Ultima Dominion Bombardment': '38BE',
    // circle during midphase ice maze
    'Orbonne Ultima Holy': '38AB' // circle during midphase ice maze
  },

  damageFail: {
    'Orbonne Cid Icewolf Burst': '375C' // not killing Icewolf add in time
  },

  gainsEffectFail: {
    'Orbonne Harpy Devitalize Doom': '38E' // Harpy lookaway mechanic
  },

  shareWarn: {
    'Orbonne Agrias Cleansing Flame': '3865',
    // spread marker
    'Orbonne Agrias Shadowblade Initial': '375E' // initial hit from giant red/black circle headmarker
  },

  shareFail: {
    'Orbonne Agrias Thunder Slash': '3866' // conal tank cleave with marker
  },

  soloFail: {
    'Orbonne Cid Ephemeral Knight Hallowed Bolt Stack': '3768' // stack marker from Ephemeral Knight
  },

  triggers: [{
    // castbar that you need to have Heavenly Shield up for, or you get a vuln and knockback.
    id: 'Orbonne Agrias Judgment Blade',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '3857',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // same as Judgment Blade, but from Sword Knight
    id: 'Orbonne Agrias Mortal Blow',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '385E',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const orbonne_monastery = (orbonne_monastery_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/alliance/ridorana_lighthouse.ts



// Note: Ignoring Famfrit Jet (2C54) which is the water jug hit.  It's low damage and frequent.
// Note: Ignoring the Famfrit Dark Rain Explosion (2C55), since adds are often not killed.
// Note: Ignoring Famfrit Dropsy (121) as those puddles can appear on you, and it drops when out.
// Note: Ignoring Belias tethers, because not sure what should be considered an error there.
// Note: Ignoring Yiazmat Turbulence (2C30), which is like Jet and very noisy.
// TODO: Dark Cannonade (2C44) is a dorito stack, but you take damage on success and failure.
const ridorana_lighthouse_triggerSet = {
  zoneId: zone_id/* default.TheRidoranaLighthouse */.Z.TheRidoranaLighthouse,
  damageWarn: {
    'Ridorana Famfrit Tsunami 1': '2C51',
    // untelegraphed 90 degree conal from jug
    'Ridorana Famfrit Tsunami 2': '2C52',
    // untelegraphed 90 degree conal from jug
    'Ridorana Famfrit Dark Rain': '2C46',
    // targeted medium size circles
    'Ridorana Famfrit Darkening Deluge': '2C54',
    // rain puddles after Darkening Rainfull
    'Ridorana Bune Tri-Attack': '2CED',
    // conal
    'Ridorana Bune Pulsar Wave': '2CEE',
    // targeted circle
    'Ridorana Belias Time Eruption': '2CDF',
    // exploding clock
    'Ridorana Belias Crimson Cyclone 1': '2CE2',
    // clone dash
    'Ridorana Belias Crimson Cyclone 2': '2CE3',
    // clone dash
    'Ridorana Belias Crimson Cyclone 3': '2CE4',
    // clone dash
    'Ridorana Belias Crimson Cyclone 4': '2D5F',
    // clone dash
    'Ridorana Belias Eruption': '2CDD',
    // series of targeted circles
    'Ridorana Belias Time Bomb': '2CE7',
    // stoppable clock with time conal attack
    'Ridorana Construct Pulverize Close': '2C61',
    // untelegraphed centered circle close
    'Ridorana Construct Pulverize Far': '2C62',
    // targeted telegraphed circles far away
    'Ridorana Construct Compress': '2C5C',
    // long skinny line
    'Ridorana Construct Loose Cog Triboelectricity': '2C6D',
    // blue circle from cogs in air
    'Ridorana Construct Dispose': '2C60',
    // rotating fire conal
    'Ridorana Construct Dispose Annihilation': '2CEA',
    // rotating fire conal, Annihilation Mode
    'Ridorana Construct Acceleration Bomb': '2D27',
    // failing acceleration bomb in midphase
    'Ridorana Construct Ultramagnetism': '2CD6',
    // failing magnetic tethers in midphase
    'Ridorana Construct Missile Explosion': '2C6F',
    // running into a missile in midphase
    'Ridorana Yiazmat Gust Front': '2C24',
    // targeted black/yellow circles
    'Ridorana Yiazmat White Breath': '2C31',
    // get under donut
    'Ridorana Yiazmat Rake Charge 1': '2C3C',
    // like a knife through butter
    'Ridorana Yiazmat Rake Charge 2': '2E32',
    'Ridorana Yiazmat Rake Charge 3': '2C28',
    'Ridorana Yiazmat Rake Charge 4': '2D4F',
    'Ridorana Yiazmat Rake Charge 5': '2C27',
    'Ridorana Yiazmat Archaeodemon Unholy Darkness': '2673',
    // targeted circle
    'Ridorana Yiazmat Archaeodemon Karma': '2672' // conal
  },

  damageFail: {
    'Ridorana Yiazmat Stone Breath': '2C29' // petrifying conal breath
  },

  shareWarn: {
    'Ridorana Famfrit Briny Cannonade': '2C45',
    // spread marker
    'Ridorana Construct Ignite': '2C67',
    // spread marker
    'Ridorana Iron Golem Ovation': '2CF3',
    // untelegraphed instant line attack (for tank, ideally)
    'Ridorana Yiazmat Wind Azer Ancient Aero': '2C38' // targeted tether line aoe from Azer adds
  },

  shareFail: {
    'Ridorana Yiazmat Rake Buster 1': '2C26',
    // untelegraphed tankbuster cleave
    'Ridorana Yiazmat Rake Buster 2': '2DE4' // untelegraphed tankbuster cleave
  },

  soloFail: {
    'Ridorana Construct Accelerate': '2C65',
    // stack marker
    'Ridorana Yiazmat Death Strike': '2C33' // stack marker
  },

  triggers: [{
    // Computation Mode errors.
    id: 'Ridorana Construct Maths',
    type: 'HeadMarker',
    netRegex: netregexes/* default.headMarker */.ZP.headMarker({
      id: '0089'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: `Maths`,
          de: `Mathe`,
          fr: `Maths`,
          ja: `算術`,
          cn: `算数`,
          ko: '산수오답',
          tc: `算數`
        }
      };
    }
  }]
};
/* harmony default export */ const ridorana_lighthouse = (ridorana_lighthouse_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/alliance/royal_city_of_rabanastre.ts




// TODO: is Mateus's Azure Guard Fin Rays (2642) a tankbuster without a castbar? a cleave?

const royal_city_of_rabanastre_triggerSet = {
  zoneId: zone_id/* default.TheRoyalCityOfRabanastre */.Z.TheRoyalCityOfRabanastre,
  damageWarn: {
    'Rabanastre Mateus Ice Azer Hypothermal Combustion': '2639',
    // large centered circle when Ice Azer dies
    'Rabanastre Mateus Blizzard Sphere Chill': '2646',
    // baited long skinny conal from tethered Blizzard Spheres
    'Rabanastre Sniffing Seeq Bandit Lunge': '2670',
    // line aoe
    'Rabanastre Rabanastran Mimic Deathtrap': '75E',
    // centered circle
    'Rabanastre Hashmal Jagged Edge': '25CD',
    // red purple ground circles
    'Rabanastre Hashmal Towerfall': '25CA',
    // control towers falling over
    'Rabanastre Hashmal Extreme Edge 1': '25D0',
    // left/right cleave
    'Rabanastre Hashmal Extreme Edge 2': '25CE',
    // left/right cleave
    'Rabanastre Hashmal Earth Shaker': '25C8',
    // 3x 1/6 pie slices that usually happen twice in a row
    'Rabanastre Archaedemon Unholy Darkness': '2673',
    // very large conal (also during Rofocale)
    'Rabanastre Archaedemon Karma': '2672',
    // targeted circle (also during Rofocale)
    'Rabanastre Archaeolion The Dragon\'s Breath': '273C',
    // conal
    'Rabanastre Archaeolion The Ram\'s Breath': '273B',
    // conal
    'Rabanastre Archaeolion The Dragon\'s Voice': 'D10',
    // interruptable centered circle
    'Rabanastre Archaeolion The Ram\'s Voice': 'D0F',
    // interruptable centered circle
    'Rabanastre Rofocale Crush Weapon': '2684',
    // targeted circles
    'Rabanastre Rofocale Maverick': '2689',
    // multiple telegraphed line charges when untargetable, and later targetable
    'Rabanastre Rofocale Trample 1': '2677',
    'Rabanastre Rofocale Trample 2': '2678',
    'Rabanastre Rofocale Trample 3': '2679',
    'Rabanastre Rofocale Trample 4': '267A',
    'Rabanastre Rofocale Trample 5': '267B',
    'Rabanastre Rofocale Trample 6': '267C',
    'Rabanastre Rofocale Trample 7': '267D',
    'Rabanastre Rofocale Trample 8': '267E',
    'Rabanastre Rofocale Trample 9': '267F',
    'Rabanastre Rofocale Cry of Victory': '2675',
    // 180 cleave
    'Rabanastre Rofocale Embrace Initial': '2686',
    // Embrace initial circles
    'Rabanastre Rofocale Embrace Triggered': '2687',
    // running into Embrace hidden traps
    'Rabanastre Argath Crush Weapon': '2713',
    // same as Rofocale Crush Weapon
    'Rabanastre Argath Unrelenting': '262C',
    // five fan aoes in a cone
    'Rabanastre Argath Heartless Heartless': '2632',
    // cross aoe from judgment blade markers
    'Rabanastre Argath Soulfix': '262A',
    // centered circle, often paired with misdirect
    'Rabanastre Argath Coldblood Putt Putt': '2626',
    // hole in one misdirect donut
    'Rabanastre Argath Rail Of The Rooster': '2623',
    // unnerved stack from messing up Rail Of The Rat towers
    'Rabanastre Argath Self-Destruct': '262F',
    // explosion from somebody who has hit the wall and turned into a zombie
    'Rabanastre Argath The Word': '24A0' // Failing Mask Of Truth / Mask Of Lies
  },

  damageFail: {
    'Rabanastre Hashmal To Dust': '25C9' // Failing to kill Sand Sphere adds
  },

  gainsEffectWarn: {
    'Rabanastre Argath Bleeding': '282' // standing in Judgement Blade squares (140 is infinite effect when in, 282 when out)
  },

  gainsEffectFail: {
    'Rabanastre Mateus Deep Freeze': '4E6',
    // Frozen by ice skating adds
    'Rabanastre Transfiguration': '5B3',
    // Mateus Blizzard III The White Whisper (272E) / Argath running into the wall and turning into a zombie
    'Rabanastre Argath Craven': '58D' // turning into a chicken from 3 Unnerved stacks
  },

  shareWarn: {
    'Rabanastre Mateus Flash Freeze': '2647',
    // untelegraphed tank conal cleave
    'Rabanastre Mateus Icicle Snowpierce': '2640',
    // targeted telegraphed skinny line aoe
    'Rabanastre Hashmal Rock Cutter': '25D7',
    // untelegraphed tank cleave
    'Rabanastre Hashmal Falling Rock': '25D3',
    // Sand Sphere spread
    'Rabanastre Rofocale Chariot': '2674' // targeted line aoe with marker before Cry of Victory
  },

  soloFail: {
    'Rabanastre Hashmal Falling Boulder': '25D2' // Sand Sphere stack
  },

  triggers: [{
    id: 'Rabanastre Mateus Breathless',
    type: 'GainsEffect',
    // Ten stacks of Breathless is death.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '595',
      count: '10'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        name: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    // unnamed damage from being hit by Rofocale driving in circles during add phase
    id: 'Rabanastre Rofocale Chariot Ring',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '268C',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        name: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Chariot',
          de: 'Streitwagen',
          fr: 'Chariot',
          ja: '戦車',
          cn: `战车`,
          ko: '근접광역기',
          tc: '戰車'
        }
      };
    }
  }]
};
/* harmony default export */ const royal_city_of_rabanastre = (royal_city_of_rabanastre_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/ala_mhigo.ts


const ala_mhigo_triggerSet = {
  zoneId: zone_id/* default.AlaMhigo */.Z.AlaMhigo,
  damageWarn: {
    'Ala Mhigo Magitek Ray': '24CE',
    // Line AoE, Legion Predator trash, before boss 1
    'Ala Mhigo Lock On': '2047',
    // Homing circles, boss 1
    'Ala Mhigo Tail Laser 1': '2049',
    // Frontal line AoE, boss 1
    'Ala Mhigo Tail Laser 2': '204B',
    // Rear line AoE, boss 1
    'Ala Mhigo Tail Laser 3': '204C',
    // Rear line AoE, boss 1
    'Ala Mhigo Shoulder Cannon': '24D0',
    // Circle AoE, Legion Avenger trash, before boss 2
    'Ala Mhigo Cannonfire': '23ED',
    // Environmental circle AoE, path to boss 2
    'Ala Mhigo Aetherochemical Grenado': '205A',
    // Circle AoE, boss 2
    'Ala Mhigo Integrated Aetheromodulator': '205B',
    // Ring AoE, boss 2
    'Ala Mhigo Circle Of Death': '24D4',
    // Proximity circle AoE, Hexadrone trash, before boss 3
    'Ala Mhigo Exhaust': '24D3',
    // Line AoE, Legion Colossus trash, before boss 3
    'Ala Mhigo Grand Sword': '24D2',
    // Conal AoE, Legion Colossus trash, before boss 3
    'Ala Mhigo Art Of The Storm 1': '2066',
    // Proximity circle AoE, pre-intermission, boss 3
    'Ala Mhigo Art Of The Storm 2': '2587',
    // Proximity circle AoE, intermission, boss 3
    'Ala Mhigo Vein Splitter 1': '24B6',
    // Proximity circle AoE, primary entity, boss 3
    'Ala Mhigo Vein Splitter 2': '206C',
    // Proximity circle AoE, helper entity, boss 3
    'Ala Mhigo Lightless Spark': '206B' // Conal AoE, boss 3
  },

  shareWarn: {
    'Ala Mhigo Demimagicks': '205E',
    'Ala Mhigo Unmoving Troika': '2060',
    'Ala Mhigo Art Of The Sword 1': '2069',
    'Ala Mhigo Art Of The Sword 2': '2589'
  },
  triggers: [{
    // It's possible players might just wander into the bad on the outside,
    // but normally people get pushed into it.
    id: 'Ala Mhigo Art Of The Swell',
    type: 'GainsEffect',
    // Damage Down
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '2B8'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const ala_mhigo = (ala_mhigo_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/bardams_mettle.ts


// For reasons not completely understood at the time this was merged,
// but likely related to the fact that no nameplates are visible during the encounter,
// and that nothing in the encounter actually does damage,
// we can't use damageWarn or gainsEffect helpers on the Bardam fight.
// Instead, we use this helper function to look for failure flags.
// If the flag is present,a full trigger object is returned that drops in seamlessly.
const abilityWarn = args => {
  if (!args.abilityId) console.error(`Missing ability ${JSON.stringify(args)}`);
  const trigger = {
    id: args.id,
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: args.abilityId
    }),
    condition: (_data, matches) => matches.flags.endsWith('0E'),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  };
  return trigger;
};
const bardams_mettle_triggerSet = {
  zoneId: zone_id/* default.BardamsMettle */.Z.BardamsMettle,
  damageWarn: {
    'Bardam Dirty Claw': '21A8',
    // Frontal cleave, Gulo Gulo trash
    'Bardam Epigraph': '23AF',
    // Line AoE, Wall of Bardam trash
    'Bardam The Dusk Star': '2187',
    // Circle AoE, environment before first boss
    'Bardam The Dawn Star': '2186',
    // Circle AoE, environment before first boss
    'Bardam Crumbling Crust': '1F13',
    // Circle AoEs, Garula, first boss
    'Bardam Ram Rush': '1EFC',
    // Line AoEs, Steppe Yamaa, first boss.
    'Bardam Lullaby': '24B2',
    // Circle AoEs, Steppe Sheep, first boss.
    'Bardam Heave': '1EF7',
    // Frontal cleave, Garula, first boss
    'Bardam Wide Blaster': '24B3',
    // Enormous frontal cleave, Steppe Coeurl, first boss
    'Bardam Double Smash': '26A',
    // Circle AoE, Mettling Dhara trash
    'Bardam Transonic Blast': '1262',
    // Circle AoE, Steppe Eagle trash
    'Bardam Wild Horn': '2208',
    // Frontal cleave, Khun Gurvel trash
    'Bardam Iron Sphere Attack': '16B6',
    // Contact damage, Iron Sphere trash, before third boss
    'Bardam Tornado': '247E',
    // Circle AoE, Khun Shavara trash
    'Bardam Pinion': '1F11',
    // Line AoE, Yol Feather, third boss
    'Bardam Feather Squall': '1F0E',
    // Dash attack, Yol, third boss
    'Bardam Flutterfall Untargeted': '1F12' // Rotating circle AoEs, Yol, third boss
  },

  gainsEffectWarn: {
    'Bardam Confused': '0B' // Failed gaze attack, Yol, third boss
  },

  gainsEffectFail: {
    'Bardam Fetters': '56F' // Failing two mechanics in any one phase on Bardam, second boss.
  },

  shareWarn: {
    'Bardam Garula Rush': '1EF9',
    // Line AoE, Garula, first boss.
    'Bardam Flutterfall Targeted': '1F0C',
    // Circle AoE headmarker, Yol, third boss
    'Bardam Wingbeat': '1F0F' // Conal AoE headmarker, Yol, third boss
  },

  triggers: [
  // 1 of 3 270-degree ring AoEs, Bardam, second boss
  abilityWarn({
    id: 'Bardam Heavy Strike 1',
    abilityId: '2578'
  }),
  // 2 of 3 270-degree ring AoEs, Bardam, second boss
  abilityWarn({
    id: 'Bardam Heavy Strike 2',
    abilityId: '2579'
  }),
  // 3 of 3 270-degree ring AoEs, Bardam, second boss
  abilityWarn({
    id: 'Bardam Heavy Strike 3',
    abilityId: '257A'
  }),
  // 1 of 2 concentric ring AoEs, Bardam, second boss
  abilityWarn({
    id: 'Bardam Tremblor 1',
    abilityId: '257B'
  }),
  // 2 of 2 concentric ring AoEs, Bardam, second boss
  abilityWarn({
    id: 'Bardam Tremblor 2',
    abilityId: '257C'
  }),
  // Checkerboard AoE, Throwing Spear, second boss
  abilityWarn({
    id: 'Bardam Throwing Spear',
    abilityId: '257F'
  }),
  // Gaze attack, Warrior of Bardam, second boss
  abilityWarn({
    id: 'Bardam Empty Gaze',
    abilityId: '1F04'
  }),
  // Donut AoE headmarkers, Bardam, second boss
  abilityWarn({
    id: 'Bardam Bardam\'s Ring',
    abilityId: '2581'
  }),
  // Targeted circle AoEs, Bardam, second boss
  abilityWarn({
    id: 'Bardam Comet',
    abilityId: '257D'
  }),
  // Circle AoEs, Star Shard, second boss
  abilityWarn({
    id: 'Bardam Comet Impact',
    abilityId: '2580'
  })]
};
/* harmony default export */ const bardams_mettle = (bardams_mettle_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/castrum_abania.ts


// TODO: we could correctly blame missing Num24 towers from 1F1D/1F1E/1F1F when they are taken.
// TODO: 12th Legion Packer Quick Charge (2127) going off is a mistake (probably).
const castrum_abania_triggerSet = {
  zoneId: zone_id/* default.CastrumAbania */.Z.CastrumAbania,
  damageWarn: {
    'CastrumAbania 12th Legion Laquearius Overpower': '2D0',
    // conal
    'CastrumAbania 12th Legion Avenger Shoulder Cannon': '231C',
    // targeted circle
    'CastrumAbania 12th Legion Vanguard Cermet Drill': '20E',
    // line aoe
    'CastrumAbania 12th Legion Signifier Dark Fire III': '519',
    // targeted circle
    'CastrumAbania 12th Legion Canis Pugnax Recklass Charge': '14F',
    // line aoe
    'CastrumAbania Magna Roader Magitek Fire 2': '1F15',
    // targeted circle
    'CastrumAbania Magna Roader Wild Speed': '1FF8',
    // 4x line charges
    'CastrumAbania Magna Roader Magitek Pulse 1': '2090',
    // Mark XLIII Mini Cannon aoes
    'CastrumAbania Magna Roader Magitek Pulse 2': '1F19',
    // Mark XLIII Mini Cannon aoes
    'CastrumAbania Hypertuned Blast Wave': '42C',
    // line aoe
    'CastrumAbania 12th Legion Roader Rush': '208A',
    // long line aoe when Roaders enter
    'CastrumAbania Number XXIV Gale Cut': '2083',
    // targeted circle
    'CastrumAbania Number XXIV Overflow': '1F20',
    // failing to get a tower
    'CastrumAbania 12th Legion Rearguard Cermet Pile': '23AB',
    // line aoe
    'CastrumAbania 12th Legion Armored Weapon Diffractive Laser': '209C',
    // centered circle
    'CastrumAbania 12th Legion Colossus Grand Sword': '24A6',
    // large conal
    'CastrumAbania 12th Legion Colossus Exhaust': '24A8',
    // large line aoe
    'CastrumAbania Inferno Rahu Blaster 1': '1F29',
    // line aoe (at Rahu 0)
    'CastrumAbania Inferno Rahu Blaster 2': '208E',
    // line aoe (at Rahu 1)
    'CastrumAbania Inferno Rahu Blaster 3': '208F',
    // line aoe (at Rahu 2)
    'CastrumAbania Inferno Ketu Wave': '1F28',
    // large circle during Ketu & Rahu
    'CastrumAbania Inferno Ketu Cutter': '1F27' // 180/360 pinwheel during Ketu & Rahu
  },

  damageFail: {
    'CastrumAbania Number XXIV Counter': '1F24' // having the wrong element
  },

  gainsEffectWarn: {
    'CastrumAbania Inferno 12th Legion Death Claw Seized': '507' // getting grabbed by tethered Death Claw
  },

  shareWarn: {
    'CastrumAbania Inferno Rahu Ray': '1F2A' // red spread circle
  }
};

/* harmony default export */ const castrum_abania = (castrum_abania_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/doma_castle.ts

const doma_castle_triggerSet = {
  zoneId: zone_id/* default.DomaCastle */.Z.DomaCastle,
  damageWarn: {
    'Doma Castle Doman Colossus Grand Sword': '2179',
    // large wide conal
    'Doma Castle Doman Gunship Garlean Fire': '217C',
    // targeted circle (can happen out of combat)
    'Doma Castle Magitek Rearguard Garlean Fire': '209F',
    // line of targeted exaflare-y circles
    'Doma Castle Magitek Rearguard Magitek Ray': '20A1',
    // Rearguard Bit green line aoe
    'Doma Castle Magitek Rearguard Self-Detonate': '20A0',
    // running into a Rearguard Mine
    'Doma Castle Doman Vanguard Overcharge': '217E',
    // centered circle
    'Doma Castle Doman Vanguard Drill Cannons': '217D',
    // frontal line
    'Doma Castle Mark XLIII Field Cannon Magitek Cannon': '24E9',
    // line aoes from stationary cannons
    'Doma Castle Doman Reaper Magitek Cannon': '2181',
    // centered circle
    'Doma Castle Hexadrone Bit Chain Mine 1': '2447',
    // Destroyable laser that does knockback, both 2&3 boss
    'Doma Castle Hexadrone Bit Chain Mine 2': '20A7',
    // Destroyable laser that does knockback, both 2&3 boss
    'Doma Castle Magitek Hexadrone Circle Of Death': '20A2',
    // centered circle
    'Doma Castle Magitek Hexadrone Magitek Missiles': '20A6',
    // failing tower (20A5 is correct tower damage)
    'Doma Castle Doman Hastatus Tenka Goken': '2182',
    // wide conal
    'Doma Castle Doman Armored Weapon Diffractive Laser': '2184',
    // centered circle
    'Doma Castle Hypertuned Grynewaht Clean Cut': '20B1' // Magitek Chakram lines
  },

  shareWarn: {
    'Doma Castle Hypertuned Grynewaht Delay-Action Charge': '20AD' // spread marker
  },

  soloWarn: {
    'Doma Castle Magitek Hexadrone 2-Tonze Magitek Missile': '20A3' // stack marker
  }
};

/* harmony default export */ const doma_castle = (doma_castle_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/drowned_city_of_skalla.ts

const drowned_city_of_skalla_triggerSet = {
  zoneId: zone_id/* default.TheDrownedCityOfSkalla */.Z.TheDrownedCityOfSkalla,
  damageWarn: {
    'Skalla Hydrocannon': '2697',
    // Line AoE, Salt Swallow trash, before boss 1
    'Skalla Stagnant Spray': '2699',
    // Conal AoE, Skalla Nanka trash, before boss 1

    'Skalla Bubble Burst': '261B',
    // Bubble explosion, Hydrosphere, boss 1

    'Skalla Plain Pound': '269A',
    // Large circle AoE, Dhara Sentinel trash, before boss 2
    'Skalla Boulder Toss': '269B',
    // Small circle AoE, Stone Phoebad trash, before boss 2
    'Skalla Landslip': '269C',
    // Conal AoE, Stone Phoebad trash, before boss 2

    'Skalla Mystic Light': '2657',
    // Conal AoE, The Old One, boss 2
    'Skalla Mystic Flame': '2659',
    // Large circle AoE, The Old One, boss 2. 2658 is the cast-time ability.

    'Skalla Dark II': '110E',
    // Thin cone AoE, Lightless Homunculus trash, after boss 2
    'Skalla Implosive Curse': '269E',
    // Conal AoE, Zangbeto trash, after boss 2
    'Skalla Undying FIre': '269F',
    // Circle AoE, Zangbeto trash, after boss 2
    'Skalla Fire II': '26A0',
    // Circle AoE, Accursed Idol trash, after boss 2

    'Skalla Rusting Claw': '2661',
    // Frontal cleave, Hrodric Poisontongue, boss 3
    'Skalla Words Of Woe': '2662',
    // Eye lasers, Hrodric Poisontongue, boss 3
    'Skalla Tail Drive': '2663',
    // Rear cleave, Hrodric Poisontongue, boss 3
    'Skalla Ring Of Chaos': '2667' // Ring headmarker, Hrodric Poisontongue, boss 3
  },

  damageFail: {
    'Skalla Self-Detonate': '265C' // Roomwide explosion, Subservient, boss 2
  },

  gainsEffectWarn: {
    'Skalla Dropsy': '11B',
    // Standing in Bloody Puddles, or being knocked outside the arena, boss 1
    'Skalla Confused': '0B' // Failing the gaze attack, boss 3
  },

  shareWarn: {
    'Skalla Bloody Puddle': '2655',
    // Large watery spread circles, Kelpie, boss 1
    'Skalla Cross Of Chaos': '2668',
    // Cross headmarker, Hrodric Poisontongue, boss 3
    'Skalla Circle Of Chaos': '2669' // Spread circle headmarker, Hrodric Poisontongue, boss 3
  }
};

/* harmony default export */ const drowned_city_of_skalla = (drowned_city_of_skalla_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/fractal_continuum_hard.ts


// TODO: Dischordant Cleansing (279C) first, then 297A?

const fractal_continuum_hard_triggerSet = {
  zoneId: zone_id/* default.TheFractalContinuumHard */.Z.TheFractalContinuumHard,
  damageWarn: {
    'FractalHard Prototype Claw Shred': '1257',
    // line aoe
    'FractalHard Prototype Claw The Hand': '1258',
    // conal
    'FractalHard Servomechanical Minotaur 16-Tonze Swipe': '2AE5',
    // untelegraphed conal
    'FractalHard Servomechanical Minotaur 128-Tonze Swing': '2AE4',
    // telegraphed large circle
    // These apply to both Servomechanical Chimera and Proto-Chimera.
    'FractalHard Chimera The Ram\s Breath': '122A',
    // conal
    'FractalHard Chimera The Dragon\s Breath': '122B',
    // conal
    'FractalHard Chimera The Dragon\s Voice': '861',
    // untelegraphed donut
    'FractalHard Chimera The Ram\'s Voice': '860',
    // untelegraphed centered circle
    'FractalHard Chimera The Lion\'s Breath': '85F',
    // conal
    'FractalHard Motherbit Prototype Bit Diffractive Laser': '27A8',
    // line aoe
    'FractalHard Motherbit Prototype Bit Hypercurrent': '27AC',
    // hitting the bit line laser during Citadel Buster
    'FractalHard Motherbit Allagan Gravity': '27A6',
    // spread marker
    'FractalHard Motherbit Citadel Buster': '27A5',
    // front 180 laser
    'FractalHard Prototype Mirrorknight Gust': '865',
    // targeted circle
    'FractalHard Rinkhals Regorge': '25B8',
    // targeted circle
    'FractalHard Ultima Warrior Citadel Buster': '2792',
    // untelegraphed front line laser
    'FractalHard Ultima Warrior Ein Sof': '2798',
    // Sephirot phase being in the green growing bubble
    'FractalHard Biomanufactured Minotaur 11-Tonze Swipe': '29A2',
    // untelegraphed conal
    'FractalHard Biomanufactured Minotaur 111-Tonze Swing': '29A1',
    // telegraphed large circle
    'FractalHard Ultima Beast Death Spin': '27AD',
    // melee range untelegraphed circle
    'FractalHard Ultima Beast Aether Bend': '27AF',
    // get under donut
    'FractalHard Ultima Beast Light Pillar 1': '227BA',
    // initial point of light pillar circles
    'FractalHard Ultima Beast Light Pillar 2': '27BB' // follow up light pillar hits
  },

  damageFail: {
    'FractalHard Motherbit False Gravity': '27A7' // standing in Allagan Gravity puddle, gives Heavy
  },

  gainsEffectWarn: {
    'FractalHard Ultima Warrior Infinite Anguish': '487',
    // Personally failing Zurvan towers
    'FractalHard Ultima Warrior Reduced Immunity': '143',
    // Failing Sophia Dischordant Cleansing
    'FractalHard Ultima Beast Burns': '11C' // standing in fire from Flare Star
  },

  shareWarn: {
    'FractalHard Ultima Warrior Aetheroplasm': '2793',
    // tankbuster cleave
    'FractalHard Ultima Warrior Ratzon': '2797',
    // Sephirot phase bubble drop
    'FractalHard Ultima Beast Allagan Gravity': '27B9' // spread
  },

  soloWarn: {
    'FractalHard Ultima Warrior Mass Aetheroplasm': '2795' // tankbuster cleave
  }
};

/* harmony default export */ const fractal_continuum_hard = (fractal_continuum_hard_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/ghimlyt_dark.ts


// Schola Scorpion Homing Missile (3A65) is hard not to hit Pipin/Lyse so just ignore.

const ghimlyt_dark_triggerSet = {
  zoneId: zone_id/* default.TheGhimlytDark */.Z.TheGhimlytDark,
  damageWarn: {
    'Ghimlyt Airborne Explosion': '3881',
    // semi-targeted red circle
    'Ghimlyt Schola Gunship Garlean Fire': '3A6C',
    // targeted circle
    'Ghimlyt Mark III-B Magitek Colossus Magitek Slash 1': '3774',
    // spinning pie slices
    'Ghimlyt Mark III-B Magitek Colossus Magitek Slash 2': '3775',
    // spinning pie slices
    'Ghimlyt Mark III-B Magitek Colossus Magitek Slash 3': '394E',
    // spinning pie slices
    'Ghimlyt Mark III-B Magitek Colossus Magitek Slash 4': '394F',
    // spinning pie slices
    'Ghimlyt Mark III-B Magitek Colossus Exhaust': '3770',
    // line
    'Ghimlyt Schola Armored Weapon Diffractive Laser': '3A74',
    // targeted circle
    'Ghimlyt Prometheus Needle Gun': '345A',
    // front 90 degree conal
    'Ghimlyt Prometheus Oil Shower': '3456',
    // back 270 degree
    'Ghimlyt Prometheus Heat': '3458',
    // wall laser
    'Ghimlyt Schola Colossus Grand Strike': '3A75',
    // thin line
    'Ghimlyt Schola Hexadrone Swoop': '3882',
    // line aoe entering arena
    'Ghimlyt Schola Hexadrone 2-Tonze Magitek Missile': '3A71',
    // targeted circle
    'Ghimlyt Schola Hexadrone Circle of Death': '3A70',
    // centered circle
    'Ghimlyt Schola Mark II Colossus Exhaust': '3A76',
    // line
    'Ghimlyt Schola Mark II Colossus Grand Sword': '3A77',
    // wide conal
    'Ghimlyt Soranus Duo Angry Salamander': '372C',
    // targeted line
    'Ghimlyt Soranus Duo Crossbones': '3C80',
    // targeted line with knockback
    'Ghimlyt Soranus Duo Bombardment': '3C71',
    // large circles during Order to Bombard
    'Ghimlyt Soranus Duo Stunning Sweep': '3C72',
    // centered circle
    'Ghimlyt Soranus Duo Crosshatch': '3722',
    // repeated X charges during intermissions
    'Ghimlyt Soranus Duo Ceruleum Tank Burst': '371A',
    // ceruleum tank circle explosions
    'Ghimlyt Soranus Duo Quaternity': '3733' // series of X line charges
  },

  gainsEffectWarn: {
    'Ghimlyt Mark III-B Magitek Colossus Burns': '1F7',
    // standing in Magitek Slash fire pie slice
    'Ghimlyt Prometheus Burns': '11C' // standing in outside fire circle
  },

  shareWarn: {
    'Ghimlyt Mark III-B Magitek Colossus Jarring Blow': '376E',
    // tank buster conal cleave
    'Ghimlyt Mark III-B Magitek Colossus Wild Fire Beam': '3772',
    // spread marker
    'Ghimlyt Schola Colossus Homing Laser': '3884' // spread marker
  },

  soloWarn: {
    'Ghimlyt Mark III-B Magitek Colossus Magitek Ray': '376F' // stack marker
  }
};

/* harmony default export */ const ghimlyt_dark = (ghimlyt_dark_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/hells_lid.ts

const hells_lid_triggerSet = {
  zoneId: zone_id/* default.HellsLid */.Z.HellsLid,
  damageWarn: {
    'HellsLid Nurikabe Fire II': '299F',
    // targeted circle'
    'HellsLid Magma': '2882',
    // line attacks from wall
    'HellsLid Hellish Lion Howling Wail': '299D',
    // large centered circle
    'HellsLid Hellfire Shikigami Fluid Swing': '299E',
    // conal
    'HellsLid Otake-maru 100-tonze Swing': '27BE',
    // untelegraphed centered circle
    'HellsLid Otake-maru Volcanic Debris': '27C5',
    // ambient circles on floor
    'HellsLid Otake-maru 10-tonze Slash': '27BF',
    // telegraphed conal
    'HellsLid Otake-maru Disrobe': '27C2',
    // small circles appearing after prey marker
    'HellsLid Otake-maru Stone Cudgel': '27C3',
    // spin attack when touching sword/shield
    'HellsLid Otake-maru Liquid Carapace': '27C0',
    // being too close to boss during prey Disrobe phase
    'HellsLid Hellish Yumemi Blanket Thunder': '21B3',
    // centered circle
    'HellsLid Kaja Electrogenesis': '11C2',
    // targeted large circle, by both Kaja and Kaja of the Seven Flames
    'HellsLid Kamaitachi Circling Winds': '27C8',
    // wind donut
    'HellsLid Kamaitachi Rolling Winds': '27C9',
    // large back/front line
    'HellsLid Kamaitachi The Patient Blade': '27C7',
    // front 180 cleave
    'HellsLid Kamaitachi Northerly': '27CD',
    // untargetable triggered wind sprite knockback explosion
    'HellsLid Kamaitachi Tsumuji-Kaze Tornado': '247E',
    // large targeted circle
    'HellsLid Kamaitachi Late Harvest': '27CC',
    // dashes
    'HellsLid Kamaitachi Gale The Storm\'s Grip': '27CE',
    // standing in the tornado
    'HellsLid Shikigami of the Spring Brine Bomb': '29A0',
    // targeted circle
    'HellsLid Stillwind Nue Twister': '2965',
    // targeted circle
    'HellsLid Boltstorm Nue Scythe Tail': '2A08',
    // centered circle
    'HellsLid Boltstorm Nue Butcher': '2964',
    // large wide conal
    // FIXME: this id is the same as Butcher above, is it correct or one of them incorrect?
    // 'HellsLid Boltstorm Nue Spark': '2964', // donut with a very large hole
    'HellsLid Genbu Sinister Tide': '27D5',
    // light up arrow hexes
    'HellsLid Genbu Hell of Water': '27D0',
    // cross aoe
    'HellsLid Genbu Shell Shower': '2850' // light up hex squares during Chelonian Gate midphase
  },

  shareWarn: {
    'HellsLid Genbu Hell of Waste': '27D2',
    // very large spread marker
    'HellsLid Reisen Tatsunoko Hydrate': '2134' // untelegraphed cleave from snake mob
  }
};

/* harmony default export */ const hells_lid = (hells_lid_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/kugane_castle.ts

const kugane_castle_triggerSet = {
  zoneId: zone_id/* default.KuganeCastle */.Z.KuganeCastle,
  damageWarn: {
    'Kugane Castle Tenka Gokken': '2329',
    // Frontal cone AoE,  Joi Blade trash, before boss 1
    'Kugane Castle Kenki Release Trash': '2330',
    // Chariot AoE, Joi Kiyofusa trash, before boss 1

    'Kugane Castle Clearout': '1E92',
    // Frontal cone AoE, Zuiko-Maru, boss 1
    'Kugane Castle Hara-Kiri 1': '1E96',
    // Giant circle AoE, Harakiri Kosho, boss 1
    'Kugane Castle Hara-Kiri 2': '24F9',
    // Giant circle AoE, Harakiri Kosho, boss 1

    'Kugane Castle Juji Shuriken 1': '232D',
    // Line AoE, Karakuri Onmitsu trash, before boss 2
    'Kugane Castle 1000 Barbs': '2198',
    // Line AoE, Joi Koja trash, before boss 2

    'Kugane Castle Juji Shuriken 2': '1E98',
    // Line AoE, Dojun Maru, boss 2
    'Kugane Castle Tatami-Gaeshi': '1E9D',
    // Floor tile line attack, Elkite Onmitsu, boss 2
    'Kugane Castle Juji Shuriken 3': '1EA0',
    // Line AoE, Elite Onmitsu, boss 2

    'Kugane Castle Auto Crossbow': '2333',
    // Frontal cone AoE, Karakuri Hanya trash, after boss 2
    'Kugane Castle Harakiri 3': '23C9',
    // Giant Circle AoE, Harakiri  Hanya trash, after boss 2

    'Kugane Castle Iai-Giri': '1EA2',
    // Chariot AoE, Yojimbo, boss 3
    'Kugane Castle Fragility': '1EAA',
    // Chariot AoE, Inoshikacho, boss 3
    'Kugane Castle Dragonfire': '1EAB' // Line AoE, Dragon Head, boss 3
  },

  shareWarn: {
    'Kugane Castle Issen': '1E97',
    // Instant frontal cleave, Dojun Maru, boss 2
    'Kugane Castle Clockwork Raiton': '1E9B' // Large lightning spread circles, Dojun Maru, boss 2
  },

  soloFail: {
    'Kugane Castle Helm Crack': '1E94' // Stack marker, Zuiko Maru, boss 1
  }
};

/* harmony default export */ const kugane_castle = (kugane_castle_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/shisui_of_the_violet_tides.ts


// TODO: can Mucal Glob (1F73) hit multiple people?

const shisui_of_the_violet_tides_triggerSet = {
  zoneId: zone_id/* default.ShisuiOfTheVioletTides */.Z.ShisuiOfTheVioletTides,
  damageWarn: {
    'Shisui Violet Coralshell Bubble Shower': '236',
    // frontal conal
    'Shisui Hikagiri Defibrillate': '11C1',
    // centered circle
    'Shisui Buried Monkfish Fish Out Of Water': '1F88',
    // untelegraphed triggered monkfish mine
    'Shisui Ango Flounder': '91F',
    // line aoe
    'Shisui Hikagiri Electrogenesis': '11C2',
    // targeted circle
    'Shisui Amikiri Shuck': '1F75',
    // not killing Amikiri's leg
    'Shisui Palace Guard Heartstopper': '362',
    // dragoon guard line aoe
    'Shisui Palace Guard Fire Arrow': '1F89',
    // ambient untargeted circles
    'Shisui Captain Of The Guard Tenka Goken': '23B7',
    // wide conal
    'Shisui Ruby Princess Coriolis Kick': '1F7B',
    // large centered circle (seduce always paired with this)
    'Shisui Ruby Princess Abyssal Volcano': '1F7C',
    // centered circle paired with chase aoe
    'Shisui Ruby Princess Geothermal Flatulence 1': '24D7',
    // chase aoe initial
    'Shisui Ruby Princess Geothermal Flatulence 2': '1F7D',
    // chase aoe x10
    'Shisui Violet Bombfish 1000 Spines': '1FF7',
    // roaming bombfish triggered circle
    'Shisui Blue Unkiu Flush': '21A4',
    // interruptible centered circle
    'Shisui Shisui Yohi Black Tide': '1F81',
    // reappearance after thick fog
    'Shisui Shisui Yohi Churn Bubble Burst': '1F84',
    // not killing bubble during thick fog
    'Shisui Shisui Yohi Naishi-No-Kami Bite And Run': '1F85',
    // not killing shark add
    'Shisui Shisui Yohi Naishi-No-Jo Bite And Run': '1F86' // not killing small shark add
  },

  gainsEffectWarn: {
    // Note: Dropsy (213, with count field) is the effect during Shisui Yohi Thick Fog
    'Shisui Dropsy': '121',
    // standing in Kamikiri digestive fluid puddle
    'Shisui Hysteria': '128' // failing Shisui Yohi Mad Stare (1F82)
  },

  shareWarn: {
    'Shisui Amikiri Digest': '1F79' // Kamikiri digestive fluid puddle landing
  }
};

/* harmony default export */ const shisui_of_the_violet_tides = (shisui_of_the_violet_tides_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/sirensong_sea.ts

const sirensong_sea_triggerSet = {
  zoneId: zone_id/* default.TheSirensongSea */.Z.TheSirensongSea,
  damageWarn: {
    'Sirensong Ancient Ymir Head Snatch': '2353',
    // frontal conal
    'Sirensong Reflection of Karlabos Tail Screw': '12B7',
    // targeted circle
    'Sirensong Lugat Amorphous Applause': '1F56',
    // frontal 180 cleave
    'Sirensong Lugat Concussive Oscillation': '1F5B',
    // 5 or 7 circles
    'Sirensong The Jane Guy Ball of Malice': '1F6A',
    // ambient cannon circle
    'Sirensong Dark': '19DF',
    // Skinless Skipper / Fleshless Captive targeted circle
    'Sirensong The Governor Shadowstrike': '1F5D',
    // standing in shadows
    'Sirensong Undead Warden March of the Dead': '2351',
    // frontal conal
    'Sirensong Fleshless Captive Flood': '218B',
    // centered circle after seductive scream
    'Sirensong Lorelei Void Water III': '1F68' // large targeted circle
  }
};

/* harmony default export */ const sirensong_sea = (sirensong_sea_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/st_mocianne_hard.ts

const st_mocianne_hard_triggerSet = {
  zoneId: zone_id/* default.SaintMociannesArboretumHard */.Z.SaintMociannesArboretumHard,
  damageWarn: {
    'St Mocianne Hard Mudstream': '30D9',
    // Targeted circle AoE, Immaculate Apa trash, before boss 1
    'St Mocianne Hard Silken Spray': '3385',
    // Rear cone AoE, Withered Belladonna trash, before boss 1
    'St Mocianne Hard Muddy Puddles': '30DA',
    // Small targeted circle AoEs, Dorpokkur trash, before boss 1
    'St Mocianne Hard Odious Air': '2E49',
    // Frontal cone AoE, Nullchu, boss 1
    'St Mocianne Hard SLudge Bomb': '2E4E',
    // Targeted circle AoEs, Nullchu, boss 1
    'St Mocianne Hard Odious Atmosphere': '2E51',
    // Channeled 3/4 arena cleave, Nullchu, boss 1
    'St Mocianne Hard Creeping Ivy': '31A5',
    // Frontal cone AoE, Withered Kulak trash, before boss 2
    'St Mocianne Hard Rockslide': '3134',
    // Line AoE, Silt Golem, boss 2
    'St Mocianne Hard Earthquake Inner': '312E',
    // Chariot AoE, Lakhamu, boss 2
    'St Mocianne Hard Earthquake Outer': '312F',
    // Dynamo AoE, Lakhamu, boss 2
    'St Mocianne Hard Embalming Earth': '31A6',
    // Large Chariot AoE, Muddy Mata, after boss 2
    'St Mocianne Hard Quickmire': '3136',
    // Sewage surge avoided on platforms, Tokkapchi, boss 3
    'St Mocianne Hard Quagmire Platforms': '3139',
    // Quagmire explosion on platforms, Tokkapchi, boss 3
    'St Mocianne Hard Feculent Flood': '313C',
    // Targeted thin cone AoE, Tokkapchi, boss 3
    'St Mocianne Hard Corrupture': '33A0' // Mud Slime explosion, boss 3. (No explosion if done correctly.)
  },

  gainsEffectWarn: {
    'St Mocianne Hard Seduced': '3DF',
    // Gaze failure, Withered Belladonna trash, before boss 1
    'St Mocianne Hard Pollen': '13',
    // Sludge puddles, Nullchu, boss 1
    'St Mocianne Hard Transfiguration': '648',
    // Roly-Poly AoE circle failure, BLooming Biloko trash, before boss 2
    'St Mocianne Hard Hysteria': '128',
    // Gaze failure, Lakhamu, boss 2
    'St Mocianne Hard Stab Wound': '45D' // Arena outer wall effect, boss 2
  },

  shareWarn: {
    'St Mocianne Hard Taproot': '2E4C',
    // Large orange spread circles, Nullchu, boss 1
    'St Mocianne Hard Earth Shaker': '3131' // Earth Shaker, Lakhamu, boss 2
  },

  soloFail: {
    'St Mocianne Hard Fault Warren': '2E4A' // Stack marker, Nullchu, boss 1
  }
};

/* harmony default export */ const st_mocianne_hard = (st_mocianne_hard_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/swallows_compass.ts


const swallows_compass_triggerSet = {
  zoneId: zone_id/* default.TheSwallowsCompass */.Z.TheSwallowsCompass,
  damageWarn: {
    'Swallows Compass Ivy Fetters': '2C04',
    // Circle ground AoE, Sai Taisui trash, before boss 1
    'Swallows Compass Wildswind 1': '2C05',
    // Tornado ground AoE, placed by Sai Taisui trash, before boss 1

    'Swallows Compass Yama-Kagura': '2B96',
    // Frontal line AoE, Otengu, boss 1
    'Swallows Compass Flames Of Hate': '2B98',
    // Fire orb explosions, boss 1
    'Swallows Compass Conflagrate': '2B99',
    // Collision with fire orb, boss 1

    'Swallows Compass Upwell': '2C06',
    // Targeted circle ground AoE, Sai Taisui trash, before boss 2
    'Swallows Compass Bad Breath': '2C07',
    // Frontal cleave, Jinmenju trash, before boss 2

    'Swallows Compass Greater Palm 1': '2B9D',
    // Half arena right cleave, Daidarabotchi, boss 2
    'Swallows Compass Greater Palm 2': '2B9E',
    // Half arena left cleave, Daidarabotchi, boss 2
    'Swallows Compass Tributary': '2BA0',
    // Targeted thin conal ground AoEs, Daidarabotchi, boss 2

    // FIXME: this id is the same as Upwell above, is it correct or one of them incorrect?
    // 'Swallows Compass Wildswind 2': '2C06', // Circle ground AoE, environment, after boss 2
    // FIXME: this id is the same as Bad Breath above, is it correct or one of them incorrect?
    // 'Swallows Compass Wildswind 3': '2C07', // Circle ground AoE, placed by Sai Taisui trash, after boss 2
    'Swallows Compass Filoplumes': '2C76',
    // Frontal rectangle AoE, Dragon Bi Fang trash, after boss 2

    'Swallows Compass Both Ends 1': '2BA8',
    // Chariot AoE, Qitian Dasheng, boss 3
    'Swallows Compass Both Ends 2': '2BA9',
    // Dynamo AoE, Qitian Dasheng, boss 3
    'Swallows Compass Both Ends 3': '2BAE',
    // Chariot AoE, Shadow Of The Sage, boss 3
    'Swallows Compass Both Ends 4': '2BAF',
    // Dynamo AoE, Shadow Of The Sage, boss 3
    'Swallows Compass Equal Of Heaven': '2BB4' // Small circle ground AoEs, Qitian Dasheng, boss 3
  },

  gainsEffectWarn: {
    'Swallows Compass Hysteria': '128',
    // Gaze attack failure, Otengu, boss 1
    'Swallows Compass Bleeding': '112F' // Stepping outside the arena, boss 3
  },

  shareWarn: {
    'Swallows Compass Mirage': '2BA2',
    // Prey-chasing puddles, Daidarabotchi, boss 2
    'Swallows Compass Mountain Falls': '2BA5',
    // Circle spread markers, Daidarabotchi, boss 2
    'Swallows Compass The Long End': '2BA7',
    // Laser tether, Qitian Dasheng  boss 3
    'Swallows Compass The Long End 2': '2BAD' // Laser Tether, Shadows Of The Sage, boss 3
  },

  soloFail: {
    'Swallows Compass Five Fingered Punishment 1': '2BAB',
    // Stack marker, boss 3
    'Swallows Compass Five Fingered Punishment 2': '2BB0' // Stack marker, boss 3
  },

  triggers: [{
    // Standing in the lake, Diadarabotchi, boss 2
    id: 'Swallows Compass Six Fulms Under',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '237'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const swallows_compass = (swallows_compass_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/temple_of_the_fist.ts

const temple_of_the_fist_triggerSet = {
  zoneId: zone_id/* default.TheTempleOfTheFist */.Z.TheTempleOfTheFist,
  damageWarn: {
    'Temple Fire Break': '21ED',
    // Conal AoE, Bloodglider Monk trash
    'Temple Radial Blaster': '1FD3',
    // Circle AoE, boss 1
    'Temple Wide Blaster': '1FD4',
    // Conal AoE, boss 1
    'Temple Crippling Blow': '2016',
    // Line AoEs, environmental, before boss 2
    'Temple Broken Earth': '236E',
    // Circle AoE, Singha trash
    'Temple Shear': '1FDD',
    // Dual conal AoE, boss 2
    'Temple Counter Parry': '1FE0',
    // Retaliation for incorrect direction after Killer Instinct, boss 2
    'Temple Tapas': '',
    // Tracking circular ground AoEs, boss 2
    'Temple Hellseal': '200F',
    // Red/Blue symbol failure, boss 2
    'Temple Pure Will': '2017',
    // Circle AoE, Spirit Flame trash, before boss 3
    'Temple Megablaster': '163',
    // Conal AoE, Coeurl Prana trash, before boss 3
    'Temple Windburn': '1FE8',
    // Circle AoE, Twister wind, boss 3
    'Temple Hurricane Kick': '1FE5',
    // 270-degree frontal AoE, boss 3
    'Temple Silent Roar': '1FEB',
    // Frontal line AoE, boss 3
    'Temple Mighty Blow': '1FEA' // Contact with coeurl head, boss 3
  },

  shareWarn: {
    'Temple Heat Lightning': '1FD7' // Purple spread circles, boss 1
  }
};

/* harmony default export */ const temple_of_the_fist = (temple_of_the_fist_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/dungeon/the_burn.ts

const the_burn_triggerSet = {
  zoneId: zone_id/* default.TheBurn */.Z.TheBurn,
  damageWarn: {
    'The Burn Falling Rock': '31A3',
    // Environmental line AoE
    'The Burn Aetherial Blast': '328B',
    // Line AoE, Kukulkan trash
    'The Burn Mole-a-whack': '328D',
    // Circle AoE, Desert Desman trash
    'The Burn Head Butt': '328E',
    // Small conal AoE, Desert Desman trash
    'The Burn Shardfall': '3191',
    // Roomwide AoE, LoS for safety, Hedetet, boss 1
    'The Burn Dissonance': '3192',
    // Donut AoE, Hedetet, boss 1
    'The Burn Crystalline Fracture': '3197',
    // Circle AoE, Dim Crystal, boss 1
    'The Burn Resonant Frequency': '3198',
    // Circle AoE, Dim Crystal, boss 1
    'The Burn Rotoswipe': '3291',
    // Frontal cone AoE, Charred Dreadnaught trash
    'The Burn Wrecking Ball': '3292',
    // Circle AoE, Charred Dreadnaught trash
    'The Burn Shatter': '3294',
    // Large circle AoE, Charred Doblyn trash
    'The Burn Auto-Cannons': '3295',
    // Line AoE, Charred Drone trash
    'The Burn Self-Detonate': '3296',
    // Circle AoE, Charred Drone trash
    'The Burn Full Throttle': '2D75',
    // Line AoE, Defective Drone, boss 2
    'The Burn Throttle': '2D76',
    // Line AoE, Mining Drone adds, boss 2
    'The Burn Adit Driver': '2D78',
    // Line AoE, Rock Biter adds, boss 2
    'The Burn Tremblor': '3297',
    // Large circle AoE, Veiled Gigaworm trash
    'The Burn Desert Spice': '3298',
    // The frontal cleaves must flow
    'The Burn Toxic Spray': '329A',
    // Frontal cone AoE, Gigaworm Stalker trash
    'The Burn Venom Spray': '329B',
    // Targeted circle AoE, Gigaworm Stalker trash
    'The Burn White Death': '3143',
    // Reactive during invulnerability, Mist Dragon, boss 3
    'The Burn Fog Plume 1': '3145',
    // Star AoE, Mist Dragon, boss 3
    'The Burn Fog Plume 2': '3146',
    // Line AoEs after stars, Mist Dragon, boss 3
    'The Burn Cauterize': '3148' // Line/Swoop AoE, Mist Dragon, boss 3
  },

  damageFail: {
    'The Burn Cold Fog': '3142' // Growing circle AoE, Mist Dragon, boss 3
  },

  gainsEffectWarn: {
    'The Burn Leaden': '43',
    // Puddle effect, boss 2. (Also inflicts 11F, Sludge.)
    'The Burn Puddle Frostbite': '11D' // Ice puddle effect, boss 3. (NOT the conal-inflicted one, 10C.)
  },

  shareWarn: {
    'The Burn Hailfire': '3194',
    // Head marker line AoE, Hedetet, boss 1
    'The Burn Shardstrike': '3195',
    // Orange spread head markers, Hedetet, boss 1
    'The Burn Chilling Aspiration': '314D',
    // Head marker cleave, Mist Dragon, boss 3
    'The Burn Frost Breath': '314C' // Tank cleave, Mist Dragon, boss 3
  }
};

/* harmony default export */ const the_burn = (the_burn_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o10n.ts

// TODO: Akh Rhai (3624) is not unusual to take ~1 hit from, so don't list.
// O10N - Alphascape 2.0 Normal
const o10n_triggerSet = {
  zoneId: zone_id/* default.AlphascapeV20 */.Z.AlphascapeV20,
  damageWarn: {
    'O10N Azure Wings': '31CD',
    // Out
    'O10N Stygian Maw': '31CF',
    // In
    'O10N Horrid Roar': '31D3',
    // targeted circles
    'O10N Bloodied Maw': '31D0',
    // Corners
    'O10N Cauterize': '3241',
    // divebomb attack
    'O10N Scarlet Thread': '362B',
    // orb waffle lines
    'O10N Exaflare 1': '362D',
    'O10N Exaflare 2': '362F'
  },
  shareWarn: {
    'O10N Earth Shaker': '31D1',
    // as it says on the tin
    'O10N Frost Breath': '33EE',
    // Ancient Dragon frontal conal
    'O10N Thunderstorm': '31D2' // purple spread marker
  }
};

/* harmony default export */ const o10n = (o10n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o10s.ts


// TODO: Death From Above / Death From Below tank debuff problems
// TODO: Akh Rhai (3623) is not unusual to take ~1 hit from, so don't list.
const o10s_triggerSet = {
  zoneId: zone_id/* default.AlphascapeV20Savage */.Z.AlphascapeV20Savage,
  damageWarn: {
    'O10S Azure Wings': '31B2',
    // Out
    'O10S Stygian Maw': '31B0',
    // In
    'O10S Bloodied Maw': '31B5',
    // Corners
    'O10S Crimson Wings': '31B3',
    // Cardinals
    'O10S Horrid Roar': '31B9',
    // targeted circles
    'O10S Dark Wave': '341A',
    // Ancient Dragon circle upon death
    'O10S Cauterize': '3240',
    // divebomb attack
    'O10S Flame Blast': '31C1',
    // bombs
    'O10S Scarlet Thread': '362B',
    // orb waffle lines
    'O10S Exaflare 1': '362C',
    'O10S Exaflare 2': '362E'
  },
  shareWarn: {
    'O10S Earth Shaker': '31B6',
    // as it says on the tin
    'O10S Frost Breath': '33F1',
    // Ancient Dragon frontal conal
    'O10S Thunderstorm': '31B8' // purple spread marker
  },

  shareFail: {
    'O10S Crimson Breath': '31BC' // flame breath dodged with Ancient Bulwark
  }
};

/* harmony default export */ const o10s = (o10s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o11n.ts

// O11N - Alphascape 3.0 Normal
const o11n_triggerSet = {
  zoneId: zone_id/* default.AlphascapeV30 */.Z.AlphascapeV30,
  damageWarn: {
    'O11N Starboard Wave Cannon 1': '3281',
    // initial right cleave
    'O11N Starboard Wave Cannon 2': '3282',
    // follow-up right cleave
    'O11N Larboard Wave Cannon 1': '3283',
    // initial left cleave
    'O11N Larboard Wave Cannon 2': '3284',
    // follow-up left cleave
    'O11N Flame Thrower': '327D',
    // pinwheel conals
    'O11N Critical Storage Violation': '3279',
    // missing midphase towers
    'O11N Level Checker Reset': '35AA',
    // "get out" circle
    'O11N Level Checker Reformat': '35A9',
    // "get in" donut
    'O11N Rocket Punch Rush': '3606' // giant hand 1/3 arena line aoes
  },

  gainsEffectWarn: {
    'O11N Burns': 'FA' // standing in ballistic missile fire puddle
  },

  gainsEffectFail: {
    'O11N Memory Loss': '65A' // failing to cleanse Looper in a tower
  },

  shareWarn: {
    'O11N Ballistic Impact': '327F' // spread markers
  },

  shareFail: {
    'O11N Blaster': '3280' // tank tether
  },

  soloFail: {
    'O11N Electric Slide': '3285' // stack marker
  }
};

/* harmony default export */ const o11n = (o11n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o11s.ts


// TODO: Apocalyptic Explosion (279B) from not handling Rocket Punch adds, but
//       if doing this unsynced, you can just ignore them and that's spammy.
const o11s_triggerSet = {
  zoneId: zone_id/* default.AlphascapeV30Savage */.Z.AlphascapeV30Savage,
  damageWarn: {
    'O11S Afterburner': '325E',
    // followup to Flame Thrower
    'O11S Rocket Punch Iron Kiss 1': '3608',
    // Rocket Punch hand circle from Peripheral Synthesis #1
    'O11S Rocket Punch Iron Kiss 2': '36F4',
    // Rocket Punch hand circle from Peripheral Synthesis #3
    'O11S Starboard Wave Cannon 1': '3262',
    'O11S Starboard Wave Cannon 2': '3263',
    'O11S Larboard Wave Cannon 1': '3264',
    'O11S Larboard Wave Cannon 2': '3265',
    'O11S Starboard Wave Cannon Surge 1': '3266',
    'O11S Starboard Wave Cannon Surge 2': '3267',
    'O11S Larboard Wave Cannon Surge 1': '3268',
    'O11S Larboard Wave Cannon Surge 2': '3269',
    'O11S Critical Dual Storage Violation': '3258',
    // failing a tower
    // FIXME: this id is the same as Wave Cannon Surge 1 above, is it correct or one of them incorrect?
    // 'O11S Level Checker Reset': '3268', // "get out" circle
    // FIXME: this id is the same as Wave Cannon Surge 2 above, is it correct or one of them incorrect?
    // 'O11S Level Checker Reformat': '3267', // "get in" donut
    'O11S Ballistic Impact': '370B',
    // circles during Panto 1
    'O11S Flame Thrower Panto': '3707',
    // pinwheel during Panto 2
    'O11S Guided Missile Kyrios': '370A' // Panto 2 baited circle
  },

  gainsEffectWarn: {
    'O11S Burns': 'FA' // standing in ballistic missile fire puddle
  },

  gainsEffectFail: {
    'O11S Memory Loss': '65A' // failing to cleanse Looper in a tower
  },

  shareWarn: {
    'O11S Flame Thrower': '325D',
    // protean wave
    'O11S Rocket Punch Rush': '3250',
    // tethered Rocket Punch charge from Peripheral Synthesis #2
    'O11S Wave Cannon Kyrios': '3705' // Panto 2 distance baited lasers
  },

  shareFail: {
    'O11S Mustard Bomb': '326D',
    // tank buster
    'O11S Blaster': '3261' // tethered explosion
    // FIXME: this id is the same as Wave Cannon Kyrios above, is it correct or one of them incorrect?
    // 'O11S Diffuse Wave Cannon Kyrios': '3705', // Panto 2 tank lasers
  }
};

/* harmony default export */ const o11s = (o11s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o12n.ts


// O12N - Alphascape 4.0 Normal
const o12n_triggerSet = {
  zoneId: zone_id/* default.AlphascapeV40 */.Z.AlphascapeV40,
  damageWarn: {
    'O12N Floodlight': '3309',
    // targeted circular aoes after Program Alpha
    'O12N Efficient Bladework': '32FF',
    // telegraphed centered circle
    'O12N Efficient Bladework Untelegraphed': '32F3',
    // centered circle after transformation
    'O12N Optimized Blizzard III': '3303',
    // cross aoe
    'O12N Superliminal Steel 1': '3306',
    // sides of the room
    'O12N Superliminal Steel 2': '3307',
    // sides of the room
    'O12N Beyond Strength': '3300',
    // donut
    'O12N Optical Laser': '3320',
    // line aoe from eye
    'O12N Optimized Sagittarius Arrow': '3323' // line aoe from Omega-M
  },

  shareWarn: {
    'O12N Solar Ray': '330F' // circular tankbuster
  },

  soloWarn: {
    'O12N Spotlight': '330A' // stack marker
  },

  triggers: [{
    id: 'O12N Discharger Knocked Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '32F6'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const o12n = (o12n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o12s.ts



// TODO: could add Patch warnings for double/unbroken tethers
// TODO: Hello World could have any warnings (sorry)
const o12s_triggerSet = {
  zoneId: zone_id/* default.AlphascapeV40Savage */.Z.AlphascapeV40Savage,
  damageWarn: {
    'O12S Superliminal Motion 1': '3334',
    // 300+ degree cleave with back safe area
    'O12S Efficient Bladework 1': '3329',
    // Omega-M "get out" centered aoe after split
    'O12S Efficient Bladework 2': '332A',
    // Omega-M "get out" centered aoe during blades
    'O12S Beyond Strength': '3328',
    // Omega-M "get in" centered aoe during shield
    'O12S Superliminal Steel 1': '3330',
    // Omega-F "get front/back" blades phase
    'O12S Superliminal Steel 2': '3331',
    // Omega-F "get front/back" blades phase
    'O12S Optimized Blizzard III': '3332',
    // Omega-F giant cross

    'O12S Diffuse Wave Cannon': '3369',
    // back/sides lasers
    'O12S Right Arm Unit Hyper Pulse 1': '335A',
    // Rotating Archive Peripheral lasers
    'O12S Right Arm Unit Hyper Pulse 2': '335B',
    // Rotating Archive Peripheral lasers
    'O12S Right Arm Unit Colossal Blow': '335F',
    // Exploding Archive All hands
    'O12S Left Arm Unit Colossal Blow': '3360' // Exploding Archive All hands
  },

  damageFail: {
    'O12S Optical Laser': '3347',
    // middle laser from eye
    'O12S Advanced Optical Laser': '334A',
    // giant circle centered on eye

    'O12S Rear Power Unit Rear Lasers 1': '3361',
    // Archive All initial laser
    'O12S Rear Power Unit Rear Lasers 2': '3362' // Archive All rotating laser
  },

  shareWarn: {
    'O12S Optimized Fire III P1': '3337',
    // fire spread

    'O12S Hyper Pulse Tether': '335C',
    // Index And Archive Peripheral tethers
    'O12S Wave Cannon': '336B',
    // Index And Archive Peripheral baited lasers
    'O12S Optimized Fire III P2': '3379' // Archive All spread
  },

  shareFail: {
    'O12S Optimized Sagittarius Arrow': '334D',
    // Omega-M bard limit break

    'O12S Oversampled Wave Cannon': '3366',
    // Monitor tank busters
    'O12S Savage Wave Cannon': '336D' // Tank buster with the vuln first
  },

  triggers: [{
    id: 'O12S Discharger Knocked Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '3327'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    id: 'O12S Magic Vulnerability Up Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '472'
    }),
    run: (data, matches) => {
      data.vuln ??= {};
      data.vuln[matches.target] = true;
    }
  }, {
    id: 'O12S Magic Vulnerability Up Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '472'
    }),
    run: (data, matches) => {
      data.vuln = data.vuln || {};
      data.vuln[matches.target] = false;
    }
  }, {
    id: 'O12S Magic Vulnerability Damage',
    type: 'Ability',
    // 332E = Pile Pitch stack
    // 333E = Electric Slide (Omega-M square 1-4 dashes)
    // 333F = Electric Slide (Omega-F triangle 1-4 dashes)
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['332E', '333E', '333F'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.vuln && data.vuln[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: `${matches.ability} (with vuln)`,
          de: `${matches.ability} (mit Verwundbarkeit)`,
          fr: `${matches.ability} (avec Vulnérabilité)`,
          ja: `${matches.ability} (被ダメージ上昇)`,
          cn: `${matches.ability} (带易伤)`,
          ko: `${matches.ability} (받피증 상태에서 피격)`,
          tc: `${matches.ability} (帶易傷)`
        }
      };
    }
  }]
};
/* harmony default export */ const o12s = (o12s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o1n.ts

// O1N - Deltascape 1.0 Normal
const o1n_triggerSet = {
  zoneId: zone_id/* default.DeltascapeV10 */.Z.DeltascapeV10,
  damageWarn: {
    'O1N Burn': '23D5',
    // Fireball explosion circle AoEs
    'O1N Clamp': '23E2' // Frontal rectangle knockback AoE, Alte Roite
  },

  shareWarn: {
    'O1N Levinbolt': '23DA' // small spread circles
  }
};

/* harmony default export */ const o1n = (o1n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o1s.ts

// O1S - Deltascape 1.0 Savage
const o1s_triggerSet = {
  zoneId: zone_id/* default.DeltascapeV10Savage */.Z.DeltascapeV10Savage,
  damageWarn: {
    'O1S Turbulence': '2584',
    // standing under the boss before downburst
    'O1S Ball Of Fire Burn': '1ECB' // fireball explosion
  },

  damageFail: {
    'O1S Clamp': '1EDE' // large frontal line aoe
  },

  shareWarn: {
    'O1S Levinbolt': '1ED2' // lightning spread
  }
};

/* harmony default export */ const o1s = (o1s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o2n.ts



// O2N - Deltascape 2.0 Normal
const o2n_triggerSet = {
  zoneId: zone_id/* default.DeltascapeV20 */.Z.DeltascapeV20,
  damageWarn: {
    'O2N Main Quake': '24A5',
    // Non-telegraphed circle AoE, Fleshy Member
    'O2N Erosion': '2590' // Small circle AoEs, Fleshy Member
  },

  shareWarn: {
    'O2N Paranormal Wave': '250E' // Instant tank cleave
  },

  triggers: [{
    // We could try to separate out the mistake that led to the player being petrified.
    // However, it's Normal mode, why overthink it?
    id: 'O2N Petrification',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '262'
    }),
    // The user might get hit by another petrifying ability before the effect ends.
    // There's no point in notifying for that.
    suppressSeconds: 10,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'O2N Earthquake',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2515',
      ...oopsy_common/* playerDamageFields */.np
    }),
    // This deals damage only to non-floating targets.
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const o2n = (o2n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o2s.ts



// O2S - Deltascape 2.0 Savage
const o2s_triggerSet = {
  zoneId: zone_id/* default.DeltascapeV20Savage */.Z.DeltascapeV20Savage,
  damageWarn: {
    'O2S Weighted Wing': '23EF',
    // Unstable Gravity explosions on players (after Long Drop)
    'O2S Gravitational Explosion 1': '2367',
    // failing Four Fold Sacrifice 4 person stack
    'O2S Gravitational Explosion 2': '2368',
    // failing Four Fold Sacrifice 4 person stack
    'O2S Main Quake': '2359' // untelegraphed explosions from epicenter tentacles
  },

  gainsEffectFail: {
    'O2S Stone Curse': '589' // failing Death's Gaze or taking too many tankbuster stacks
  },

  triggers: [{
    // ground blue arena circles; (probably?) only do damage if not floating
    // TODO: usually this just doesn't hit anybody at all, due to patterns.
    // Floating over one is untested.
    id: 'O2S Petrosphere Explosion',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '245D',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // floating yellow arena circles; only do damage if floating
    id: 'O2S Potent Petrosphere Explosion',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2362',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // Must be floating to survive; hits everyone but only does damage if not floating.
    id: 'O2S Earthquake',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '247A',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const o2s = (o2s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o3n.ts


// O3N - Deltascape 3.0 Normal
const o3n_triggerSet = {
  zoneId: zone_id/* default.DeltascapeV30 */.Z.DeltascapeV30,
  damageWarn: {
    'O3N Spellblade Fire III': '2460',
    // Donut AoE, Halicarnassus
    'O3N Spellblade Blizzard III': '2461',
    // Circle AoE, Halicarnassus
    'O3N Spellblade Thunder III': '2462',
    // Line AoE, Halicarnassus
    'O3N Cross Reaper': '246B',
    // Circle AoE, Soul Reaper
    'O3N Gusting Gouge': '246C',
    // Green line AoE, Soul Reaper
    'O3N Sword Dance': '2470',
    // Targeted thin cone AoE, Halicarnassus
    'O3N Uplift': '2473' // Ground spears, Queen's Waltz effect, Halicarnassus
  },

  damageFail: {
    'O3N Ultimum': '2477' // Instant kill. Used if the player does not exit the sand maze fast enough.
  },

  shareWarn: {
    'O3N Holy Blur': '2463' // Spread circles.
  },

  triggers: [{
    id: 'O3N Phase Tracker',
    type: 'StartsUsing',
    netRegex: netregexes/* default.startsUsing */.ZP.startsUsing({
      id: '2304',
      source: 'Halicarnassus',
      capture: false
    }),
    run: data => data.phaseNumber = (data.phaseNumber ?? 0) + 1
  }, {
    // There's a lot to track, and in order to make it all clean, it's safest just to
    // initialize it all up front instead of trying to guard against undefined comparisons.
    id: 'O3N Initializing',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '367',
      source: 'Halicarnassus',
      capture: false
    }),
    condition: data => !data.initialized,
    run: data => {
      data.gameCount = 0;
      // Indexing phases at 1 so as to make phases match what humans expect.
      // 1: We start here.
      // 2: Cave phase with Uplifts.
      // 3: Post-intermission, with good and bad frogs.
      data.phaseNumber = 1;
      data.initialized = true;
    }
  }, {
    id: 'O3N Ribbit',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2466'
    }),
    condition: (data, matches) => {
      // We DO want to be hit by Toad/Ribbit if the next cast of The Game
      // is 4x toad panels.
      const gameCount = data.gameCount ?? 0;
      return !(data.phaseNumber === 3 && gameCount % 2 === 0) && matches.targetId !== 'E0000000';
    },
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // There's a lot we could do to track exactly how the player failed The Game.
    // Why overthink Normal mode, however?
    id: 'O3N The Game',
    type: 'Ability',
    // Guess what you just lost?
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '246D'
    }),
    // If the player takes no damage, they did the mechanic correctly.
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    },
    run: data => data.gameCount = (data.gameCount ?? 0) + 1
  }],
  timelineReplace: [{
    'locale': 'de',
    'replaceSync': {
      'Halicarnassus': 'Halikarnassos'
    }
  }, {
    'locale': 'fr',
    'replaceSync': {
      'Halicarnassus': 'Halicarnasse'
    }
  }, {
    'locale': 'ja',
    'replaceSync': {
      'Halicarnassus': 'ハリカルナッソス'
    }
  }, {
    'locale': 'cn',
    'replaceSync': {
      'Halicarnassus': '哈利卡纳苏斯'
    }
  }, {
    'locale': 'tc',
    'replaceSync': {
      'Halicarnassus': '哈利卡納蘇斯'
    }
  }, {
    'locale': 'ko',
    'replaceSync': {
      'Halicarnassus': '할리카르나소스'
    }
  }]
};
/* harmony default export */ const o3n = (o3n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o3s.ts



// TODO: handle Ribbit (22F7), Oink (22F9, if damage), Squelch (22F8, if damage)
//       which is an error except during the second game
// O3S - Deltascape 3.0 Savage
const o3s_triggerSet = {
  zoneId: zone_id/* default.DeltascapeV30Savage */.Z.DeltascapeV30Savage,
  damageWarn: {
    'O3S Spellblade Fire III': '22EC',
    // donut
    'O3S Spellblade Thunder III': '22EE',
    // line
    'O3S Spellblade Blizzard III': '22ED',
    // circle
    'O3S Uplift': '230D',
    // not standing on blue square
    'O3S Soul Reaper Gusting Gouge': '22FF',
    // reaper line aoe during cave phase
    'O3S Soul Reaper Cross Reaper': '22FD',
    // middle reaper circle
    'O3S Soul Reaper Stench of Death': '22FE',
    // outside reapers (during final phase)
    'O3S Apanda Magic Hammer': '2315',
    // books phase magic hammer circle
    'O3S Briar Thorn': '2309' // not breaking tethers fast enough
  },

  shareWarn: {
    'O3S Holy Edge': '22F0',
    // Spellblade Holy spread
    'O3S Sword Dance': '2307',
    // protean wave
    'O3S Great Dragon Frost Breath': '2312',
    // tank cleave from Great Dragon
    'O3S Iron Giant Grand Sword': '2316' // tank cleave from Iron Giant
  },

  shareFail: {
    'O3S Folio': '230F' // books books books
  },

  soloWarn: {
    'O3S Holy Blur': '22F1' // Spellblade Holy stack
  },

  triggers: [{
    // Everybody gets hits by this, but it's only a failure if it does damage.
    id: 'O3S The Game',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2301',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const o3s = (o3s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o4n.ts



// O4N - Deltascape 4.0 Normal
const o4n_triggerSet = {
  zoneId: zone_id/* default.DeltascapeV40 */.Z.DeltascapeV40,
  damageWarn: {
    'O4N Blizzard III': '24BC',
    // Targeted circle AoEs, Exdeath
    'O4N Empowered Thunder III': '24C1',
    // Untelegraphed large circle AoE, Exdeath
    'O4N Zombie Breath': '24CB',
    // Conal, tree head after Decisive Battle
    'O4N Clearout': '24CC',
    // Overlapping cone AoEs, Deathly Vine (tentacles alongside tree head)
    'O4N Black Spark': '24C9' // Exploding Black Hole
  },

  shareWarn: {
    // Empowered Fire III inflicts the Pyretic debuff, which deals damage if the player
    // moves or acts before the debuff falls. Unfortunately it doesn't look like there's
    // currently a log line for this, so the only way to check for this is to collect
    // the debuffs and then warn if a player takes an action during that time. Not worth it
    // for Normal.
    'O4N Standard Fire': '24BA',
    'O4N Buster Thunder': '24BE' // A cleaving tank buster
  },

  triggers: [{
    // Kills target if not cleansed
    id: 'O4N Doom',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '38E'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Cleansers missed Doom!',
          de: 'Doom-Reinigung vergessen!',
          fr: 'Dissipation du Glas manquée!',
          ja: '死の宣告',
          cn: '没解死宣',
          ko: '죽음의 선고',
          tc: '沒解死宣'
        }
      };
    }
  }, {
    // Short knockback from Exdeath
    id: 'O4N Vacuum Wave',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '24B8',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '넉백됨',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    // Room-wide AoE, freezes non-moving targets
    id: 'O4N Empowered Blizzard',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '4E6'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const o4n = (o4n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o4s.ts




// TODO: taking the wrong color white/black antilight

// O4S - Deltascape 4.0 Savage
const o4s_triggerSet = {
  zoneId: zone_id/* default.DeltascapeV40Savage */.Z.DeltascapeV40Savage,
  damageWarn: {
    'O4S Vine Clearout': '240C',
    // circle of vines
    'O4S Zombie Breath': '240B',
    // tree exdeath conal
    'O4S Vacuum Wave': '23FE',
    // circle centered on exdeath

    'O4S Neo Vacuum Wave': '241D',
    // "out of melee"
    'O4S Death Bomb': '2431',
    // failed acceleration bomb
    'O4S Emptiness 1': '2421',
    // exaflares initial
    'O4S Emptiness 2': '2422' // exaflares moving
  },

  damageFail: {
    'O4S Black Hole Black Spark': '2407',
    // black hole catching you

    'O4S Edge Of Death': '2415',
    // standing between the two color lasers
    'O4S Inner Antilight': '244C',
    // inner laser
    'O4S Outer Antilight': '2410' // outer laser
  },

  shareWarn: {
    'O4S Fire III': '23F6' // spread explosion
  },

  shareFail: {
    'O4S Thunder III Tankbuster': '23FA' // tankbuster
  },

  triggers: [{
    id: 'O4S Decisive Battle',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2408',
      capture: false
    }),
    run: data => {
      data.isDecisiveBattleElement = true;
    }
  }, {
    id: 'O4S Vacuum Wave Tracker',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '23FE',
      capture: false
    }),
    run: data => {
      data.isDecisiveBattleElement = false;
    }
  }, {
    id: 'O4S Almagest',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2417',
      capture: false
    }),
    run: data => {
      data.isNeoExdeath = true;
    }
  }, {
    id: 'O4S Blizzard III',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '23F8',
      ...oopsy_common/* playerDamageFields */.np
    }),
    // Ignore unavoidable raid aoe Blizzard III.
    condition: data => !data.isDecisiveBattleElement,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'O4S Thunder III',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '23FD',
      ...oopsy_common/* playerDamageFields */.np
    }),
    // Only consider this during random mechanic after decisive battle.
    condition: data => data.isDecisiveBattleElement,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'O4S Petrified',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '262'
    }),
    mistake: (data, matches) => {
      // On Neo, being petrified is because you looked at Shriek, so your fault.
      if (data.isNeoExdeath) return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
      // On normal ExDeath, this is due to White Hole.
      return {
        type: 'warn',
        name: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'O4S Forked Lightning',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '242E',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'O4S Beyond Death Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '566'
    }),
    run: (data, matches) => {
      data.hasBeyondDeath ??= {};
      data.hasBeyondDeath[matches.target] = true;
    }
  }, {
    id: 'O4S Beyond Death Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '566'
    }),
    run: (data, matches) => {
      data.hasBeyondDeath ??= {};
      data.hasBeyondDeath[matches.target] = false;
    }
  }, {
    id: 'O4S Beyond Death',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '566'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (data, matches) => {
      if (!data.hasBeyondDeath) return;
      if (!data.hasBeyondDeath[matches.target]) return;
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }, {
    id: 'O4S Double Attack Collect',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '241C',
      ...oopsy_common/* playerDamageFields */.np
    }),
    run: (data, matches) => {
      data.doubleAttackMatches = data.doubleAttackMatches || [];
      data.doubleAttackMatches.push(matches);
    }
  }, {
    id: 'O4S Double Attack',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '241C',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: data => {
      const arr = data.doubleAttackMatches;
      if (!arr) return;
      if (arr.length <= 2) return;
      // Hard to know who should be in this and who shouldn't, but
      // it should never hit 3 people.
      return {
        type: 'fail',
        text: `${arr[0]?.ability ?? ''} x ${arr.length}`
      };
    },
    run: data => delete data.doubleAttackMatches
  }]
};
/* harmony default export */ const o4s = (o4s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o5n.ts




// TODO: Diabolic Wind (28B9) always seems to be 0x16 not 0x15.

// O5N - Sigmascape 1.0 Normal
const o5n_triggerSet = {
  zoneId: zone_id/* default.SigmascapeV10 */.Z.SigmascapeV10,
  damageWarn: {
    'O5N Wroth Ghost Encumber': '28AE',
    // squares that ghosts appear in
    'O5N Saintly Beam': '28AA' // chasing circles that destroy ghosts
  },

  triggers: [{
    id: 'O5N Throttle Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '3AA'
    }),
    run: (data, matches) => {
      (data.hasThrottle ??= {})[matches.target] = true;
      console.log(JSON.stringify(data.hasThrottle));
    }
  }, {
    id: 'O5N Throttle Death',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '3AA'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 1,
    deathReason: (data, matches) => {
      if (!data.hasThrottle?.[matches.target]) return;
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }, {
    id: 'O5N Throttle Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '3AA'
    }),
    run: (data, matches) => {
      (data.hasThrottle ??= {})[matches.target] = false;
      console.log(JSON.stringify(data.hasThrottle));
    }
  }, {
    // Getting hit by a ghost without throttle (the mandatory post-chimney one).
    id: 'O5N Possess',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '28AC',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => !data.hasThrottle?.[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const o5n = (o5n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o5s.ts




// TODO: Diabolic Wind (28BD) always seems to be 0x16 not 0x15.

// O5S - Sigmascape 1.0 Savage
const o5s_triggerSet = {
  zoneId: zone_id/* default.SigmascapeV10Savage */.Z.SigmascapeV10Savage,
  damageWarn: {
    'O5S Wroth Ghost Encumber': '28B6',
    // squares appearing
    'O5S Saintly Bean': '28B4' // chasing lights
  },

  triggers: [{
    id: 'O5S Throttle Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '3AA'
    }),
    run: (data, matches) => (data.hasThrottle ??= {})[matches.target] = true
  }, {
    id: 'O5S Throttle Death',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '3AA'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 1,
    deathReason: (data, matches) => {
      if (!data.hasThrottle?.[matches.target]) return;
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }, {
    id: 'O5S Throttle Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '3AA'
    }),
    run: (data, matches) => (data.hasThrottle ??= {})[matches.target] = false
  }, {
    // Getting hit by a ghost without throttle (the mandatory post-chimney one).
    id: 'O5S Possess',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '28AC',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => !data.hasThrottle?.[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const o5s = (o5s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o6n.ts


// O6N - Sigmascape 2.0 Normal
const o6n_triggerSet = {
  zoneId: zone_id/* default.SigmascapeV20 */.Z.SigmascapeV20,
  damageWarn: {
    'O6N Earthquake': '2811',
    // failing to be in a plane
    'O6N Demonic Stone': '2847',
    // chasing circles
    'O6N Demonic Wave': '2831',
    // failing to be behind rock
    'O6N Demonic Spout 1': '2835',
    // pair of targeted circles (#1)
    'O6N Demonic Spout 2': '2837',
    // pair of targeted circles (#2)
    'O6N Featherlance': '2AE8',
    // blown away Easterly circles
    'O6N Intense Pain': '2AE7' // failing to spread for Demonic Pain tether
  },

  triggers: [{
    id: 'O6N Fire Resistance Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '5ED'
    }),
    run: (data, matches) => (data.hasFireResist ??= {})[matches.target] = true
  }, {
    id: 'O6N Fire Resistance Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '5ED'
    }),
    run: (data, matches) => (data.hasFireResist ??= {})[matches.target] = false
  }, {
    // Flash Fire without Fire Resistance.
    id: 'O6N Flash Fire',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '280B'
    }),
    condition: (data, matches) => !data.hasFireResist?.[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const o6n = (o6n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o6s.ts



// O6S - Sigmascape 2.0 Savage
const o6s_triggerSet = {
  zoneId: zone_id/* default.SigmascapeV20Savage */.Z.SigmascapeV20Savage,
  damageWarn: {
    'O6S Earthquake': '2810',
    // failing to be in a plane
    'O6S Rock Hard': '2812',
    // from portrayal of earth?
    'O6S Flash Torrent 1': '2AB9',
    // from portrayal of water??
    'O6S Flash Torrent 2': '280F',
    // from portrayal of water??
    'O6S Easterly Featherlance': '283E',
    // blown away Easterly circles
    'O6S Demonic Wave': '2830',
    // failing to be behind rock
    'O6S Demonic Spout': '2836',
    // pair of targeted circle'
    'O6S Demonic Stone 1': '2844',
    // chasing circle initial
    'O6S Demonic Stone 2': '2845',
    // chasing circle repeated
    'O6S Intense Pain': '283A' // failing to spread for Demonic Pain tether
  },

  shareWarn: {
    'O6S The Price': '2826' // exploding Last Kiss tankbuster debuff
  },

  triggers: [{
    id: 'O6S Fire Resistance Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '5ED'
    }),
    run: (data, matches) => (data.hasFireResist ??= {})[matches.target] = true
  }, {
    id: 'O6S Fire Resistance Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '5ED'
    }),
    run: (data, matches) => (data.hasFireResist ??= {})[matches.target] = false
  }, {
    // Flash Fire without Fire Resistance.
    id: 'O6S Flash Fire',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '280A'
    }),
    condition: (data, matches) => !data.hasFireResist?.[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // Look away; does damage if failed.
    id: 'O6S Divine Lure',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2822',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const o6s = (o6s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o7n.ts


// TODO: standing in the wrong side of Interdimensional Bomb causes
//       Interdimensional Explosion (2763) and also gives you a red
//       X headmarker like Bardam's Mettle boss 2.  However, this
//       isn't an actual headmarker line.  So, there is no way to
//       differentiate "somebody failed this" vs "nobody got it".
// O7N - Sigmascape 3.0 Normal
const o7n_triggerSet = {
  zoneId: zone_id/* default.SigmascapeV30 */.Z.SigmascapeV30,
  damageWarn: {
    'O7N Magitek Ray': '276B',
    // untelegraphed frontal line
    'O7N Ink': '275D',
    // Initial Ultros targeted circles
    'O7N Tentacle': '275F',
    // Tentacle simulation targeted circles
    'O7N Wallop': '2760',
    // Ultros tentacles attacking
    'O7N Chain Cannon': '2770',
    // baited airship add cannon
    'O7N Missile Explosion': '2765',
    // Hitting a missile
    'O7N Bibliotaph Deep Darkness': '29BF',
    // giant donut
    'O7N Dadaluma Aura Cannon': '2767',
    // large line aoe
    'O7N Guardian Diffractive Laser': '2761',
    // initial Air Force centered circle on Guardian
    'O7N Air Force Diffractive Laser': '273F',
    // Air Force add large conal
    'O7N Interdimensional Explosion': '2763' // Failed bomb (either wrong side or ignored)
  },

  damageFail: {
    'O7N Super Chakra Burst': '2769' // Missed Dadaluma tower (hits everybody)
  },

  gainsEffectFail: {
    'O7N Shocked': '5DA' // touching arena edge
  }
};

/* harmony default export */ const o7n = (o7n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o7s.ts


// TODO: Ink (277D) seems to always be 0x16
// TODO: Failing Virus?
// TODO: failing Interdimensional Bombs?
// O7S - Sigmascape 3.0 Savage
const o7s_triggerSet = {
  zoneId: zone_id/* default.SigmascapeV30Savage */.Z.SigmascapeV30Savage,
  damageWarn: {
    'O7S Magitek Ray': '2788',
    // front line laser
    'O7S Lightning Bomb Explosion': '278E',
    // baited orbs
    'O7S Chain Cannon': '278F',
    // damage from baited aerial attack
    'O7S Tentacle': '277E',
    // tentacles appearing
    'O7S Tentacle Wallop': '277F',
    // tentacles attacking
    'O7S Air Force Diffractive Laser': '2740',
    // Air Force adds conal
    'O7S Guardian Diffractive Laser': '2780',
    // initial Air Force centered circle on Guardian
    'O7S The Heat': '2777',
    // explosion from searing wind
    'O7S Super Chakra Burst': '2786' // failing Dadaluma towers
  },

  damageFail: {
    'O7S Missile': '2782'
  },
  gainsEffectFail: {
    'O7S Shocked': '5DA' // touching arena edge
  },

  shareWarn: {
    'O7S Aura Cannon': '2784' // Dadaluma line aoe
  },

  triggers: [{
    id: 'O7S Stoneskin',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2AB5'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.source,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const o7s = (o7s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o8n.ts



// O8N - Sigmascape 4.0 Normal
const o8n_triggerSet = {
  zoneId: zone_id/* default.SigmascapeV40 */.Z.SigmascapeV40,
  damageWarn: {
    'O8N Blizzard Blitz 1': '2918',
    'O8N Blizzard Blitz 2': '2914',
    'O8N Thrumming Thunder 1': '291D',
    'O8N Thrumming Thunder 2': '291C',
    'O8N Thrumming Thunder 3': '291B',
    'O8N Wave Cannon': '2928',
    // telegraphed line aoes
    'O8N Revolting Ruin': '2923',
    // large 180 cleave after Timely Teleport
    'O8N Intemperate Will': '292A',
    // east 180 cleave
    'O8N Gravitational Wave': '292B' // west 180 cleave
  },

  shareWarn: {
    'O8N Flagrant Fire Spread': '291F' // true spread markers
  },

  soloWarn: {
    'O8N Flagrant Fire Stack': '2920' // fake spread marker
  },

  triggers: [{
    // Look away; does damage if failed.
    id: 'O8N Indolent Will',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '292C',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // Look towards; does damage if failed.
    id: 'O8N Ave Maria',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '292B',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'O8N Shockwave',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2927'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    id: 'O8N Aero Assault',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2924'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const o8n = (o8n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o8s.ts



// TODO: failing meteor towers?
// O8S - Sigmascape 4.0 Savage
const o8s_triggerSet = {
  zoneId: zone_id/* default.SigmascapeV40Savage */.Z.SigmascapeV40Savage,
  damageWarn: {
    'O8S Thrumming Thunder 1': '28CB',
    'O8S Thrumming Thunder 2': '28CC',
    'O8S Thrumming Thunder 3': '28CD',
    'O8S Thrumming Thunder 4': '2B31',
    'O8S Thrumming Thunder 5': '2B2F',
    'O8S Thrumming Thunder 6': '2B30',
    'O8S Blizzard Blitz 1': '28C4',
    'O8S Blizzard Blitz 2': '2BCA',
    'O8S Inexorable Will': '28DA',
    // ground circles
    'O8S Revolting Ruin': '28D5',
    // large 180 cleave after Timely Teleport
    'O8S Intemperate Will': '28DF',
    // east 180 cleave
    'O8S Gravitational Wave': '28DE',
    // west 180 cleave

    'O8S Blizzard III 1': '2908',
    // celestriad center circle
    'O8S Blizzard III 2': '2909',
    // celestriad donut
    'O8S Thunder III': '290A',
    // celestriad cross lines
    'O8S Trine 1': '290E',
    // eating the golden dorito
    'O8S Trine 2': '290F',
    // eating the big golden dorito
    'O8S Meteor': '2903',
    // chasing puddles during 2nd forsaken (Meteor 2904 = tower)
    'O8S All Things Ending 1': '28F0',
    // Futures Numbered followup
    'O8S All Things Ending 2': '28F2',
    // Pasts Forgotten followup
    'O8S All Things Ending 3': '28F6',
    // Future's End followup
    'O8S All Things Ending 4': '28F9',
    // Past's End followup
    'O8S Wings Of Destruction 1': '28FF',
    // half cleave
    'O8S Wings Of Destruction 2': '28FE' // half cleave
  },

  damageFail: {
    'O8S The Mad Head Big Explosion': '28FD' // not touching skull
  },

  shareWarn: {
    'O8S Vitrophyre': '28E2',
    // yellow right tether that must be solo (or knockback)
    'O8S Flagrant Fire Spread': '28CF',
    'O8S Fire III Spread': '290B',
    // celestriad spread
    'O8S The Mad Head Explosion': '28FC' // skull tethers
  },

  shareFail: {
    'O8S Hyperdrive P1': '28E8',
    // phase 1 tankbuster

    'O8S Hyperdrive P2': '2291',
    // phase 2 tankbuster
    'O8S Wings Of Destruction': '2901' // close/far tank busters
  },

  soloWarn: {
    'O8S Flagrant Fire Stack': '28D0',
    'O8S Gravitas': '28E0',
    // purple left tether that must be shared, leaving a puddle
    'O8S Indomitable Will': '28D9',
    // 4x stack markers

    'O8S Fire III Stack': '290C' // celestriad stack
  },

  triggers: [{
    // Look away; does damage if failed.
    id: 'O8S Indolent Will',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '28E4',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // Look towards; does damage if failed.
    id: 'O8S Ave Maria',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '28E3',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'O8S Shockwave',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '28DB'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    id: 'O8S Aero Assault',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '28D6'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const o8s = (o8s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o9n.ts

// O9N - Alphascape 1.0 Normal
const o9n_triggerSet = {
  zoneId: zone_id/* default.AlphascapeV10 */.Z.AlphascapeV10,
  damageWarn: {
    'O9N Damning Edict': '3150',
    // huge 180 frontal cleave
    'O9N Stray Spray': '316C',
    // Dynamic Fluid debuff donut explosion
    'O9N Stray Flames': '316B',
    // Entropy debuff circle explosion
    'O9N Knockdown Big Bang': '3160',
    // big circle where Knockdown marker dropped
    'O9N Fire Big Bang': '315F',
    // ground circles during fire phase
    'O9N Shockwave': '3153',
    // Longitudinal/Latiudinal Implosion
    'O9N Chaosphere Fiendish Orbs Orbshadow 1': '3162',
    // line aoes from Earth phase orbs
    'O9N Chaosphere Fiendish Orbs Orbshadow 2': '3163' // line aoes from Earth phase orbs
  }
};

/* harmony default export */ const o9n = (o9n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/raid/o9s.ts


const o9s_triggerSet = {
  zoneId: zone_id/* default.AlphascapeV10Savage */.Z.AlphascapeV10Savage,
  damageWarn: {
    'O9S Shockwave': '3174',
    // Longitudinal/Latiudinal Implosion
    'O9S Damning Edict': '3171',
    // huge 180 frontal cleave
    'O9S Knockdown Big Bang': '3181',
    // big circle where Knockdown marker dropped
    'O9S Fire Big Bang': '3180',
    // ground circles during fire phase
    'O9S Chaosphere Fiendish Orbs Orbshadow 1': '3183',
    // line aoes from Earth phase orbs
    'O9S Chaosphere Fiendish Orbs Orbshadow 2': '3184' // line aoes from Earth phase orbs
  },

  triggers: [{
    // Facing the wrong way for Headwind/Tailwaind
    id: 'O9S Cyclone Knocked Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '318F'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    id: 'O9S Headwind Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '642'
    }),
    run: (data, matches) => (data.hasHeadwind ??= {})[matches.target] = true
  }, {
    id: 'O9S Headwind Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '642'
    }),
    run: (data, matches) => (data.hasHeadwind ??= {})[matches.target] = false
  }, {
    id: 'O9S Primordial Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '645'
    }),
    run: (data, matches) => (data.hasPrimordial ??= {})[matches.target] = true
  }, {
    id: 'O9S Primordial Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '645'
    }),
    run: (data, matches) => (data.hasPrimordial ??= {})[matches.target] = false
  }, {
    // Entropy debuff circle explosion.
    // During the midphase, tanks/healers need to clear headwind with Entropy circle and
    // dps need to clear Primordial Crust with Dynamic Fluid donut.  In case there's
    // some other strategy, just check both debuffs.
    id: 'O9S Stray Flames',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '318C'
    }),
    condition: (data, matches) => {
      return !data.hasHeadwind?.[matches.target] && !data.hasPrimordial?.[matches.target];
    },
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // Dynamic Fluid debuff donut explosion.
    // See Stray Flames note above.
    id: 'O9S Stray Spray',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '318D'
    }),
    condition: (data, matches) => {
      return !data.hasHeadwind?.[matches.target] && !data.hasPrimordial?.[matches.target];
    },
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const o9s = (o9s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/byakko-ex.ts



// Byakko Extreme
const byakko_ex_triggerSet = {
  zoneId: zone_id/* default.TheJadeStoaExtreme */.Z.TheJadeStoaExtreme,
  damageWarn: {
    // Popping Unrelenting Anguish bubbles
    'ByakkoEx Aratama': '27F6',
    // Stepping in growing orb
    'ByakkoEx Vacuum Claw': '27E9',
    // Lightning Puddles
    'ByakkoEx Hunderfold Havoc 1': '27E5',
    'ByakkoEx Hunderfold Havoc 2': '27E6'
  },
  damageFail: {
    'ByakkoEx Sweep The Leg': '27DB',
    'ByakkoEx Fire and Lightning': '27DE',
    'ByakkoEx Distant Clap': '27DD',
    // Midphase line attack
    'ByakkoEx Imperial Guard': '27F1'
  },
  triggers: [{
    // Pink bubble collision
    id: 'ByakkoEx Ominous Wind',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '27EC',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'bubble collision',
          de: 'Blasen sind zusammengestoßen',
          fr: 'Collision avec une bulle',
          ja: '衝突',
          cn: '相撞',
          ko: '장판 겹쳐서 터짐',
          tc: '相撞'
        }
      };
    }
  }]
};
/* harmony default export */ const byakko_ex = (byakko_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/byakko.ts


// TODO: what is the failure for State of Shock / Clutch / Highest Stakes?
// When solo, 27E2 hits player and 2A36 hits nobody.
// When in a party, 2A36 hits everybody stacking and 27E2 hits nobody.
// Is 27E2 the "kills you when no friends" damage? (It was like ~100k at level 80).
// Byakko Normal
const byakko_triggerSet = {
  zoneId: zone_id/* default.TheJadeStoa */.Z.TheJadeStoa,
  damageWarn: {
    'Byakko Sweep the Leg': '2A2E',
    // 270 degree get behind
    'Byakko Aratama Force Aratama': '2A48',
    // popping Unrelenting Anguish bubbles
    'Byakko Fire and Lightning': '2A2C',
    // large red/purple line aoe
    'Byakko Hakutei Aratama': '2A29',
    // targeted ground circle during tiger phase
    'Byakko Hundredfold Havoc 1': '2A38',
    // lightning puddles initial
    'Byakko Hundredfold Havoc 2': '2A39',
    // lightning puddles moving
    'Byakko Distant Clap': '2A30' // donut
  },

  damageFail: {
    'Byakko Aratama Midphase': '2A42',
    // popping a bubble during midphase
    'Byakko Sweep The Leg': '2A46',
    // donut during midphase
    'Byakko Imperial Guard': '2A43' // line aoe from tiger during midphase
  },

  gainsEffectWarn: {
    'Byakko Bleeding': '111' // standing in Hakutei's Aratama circle (2A29)
  },

  shareWarn: {
    'Byakko Bombogenesis': '2A3B' // red spread marker
  }
};

/* harmony default export */ const byakko = (byakko_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/lakshmi-ex.ts




// Note: flower circle in extreme is called Blissful Hammer, whereas in normal
// both the cross from the Blissful Arrow and the flower circle are both called
// Blissful Spear.
// Lakshmi Extreme
const lakshmi_ex_triggerSet = {
  zoneId: zone_id/* default.EmanationExtreme */.Z.EmanationExtreme,
  damageWarn: {
    'LakshmiEx Blissful Spear Cross': '2151',
    // blissful arrow's cross lines (called Blissful Spear)
    'LakshmiEx Blissful Spear Cross Chanchala': '2152' // blissful arrow's cross lines (called Blissful Spear)
  },

  gainsEffectWarn: {
    'LakshmiEx Bleeding': '140' // standing in expanding blue flower circle
  },

  gainsEffectFail: {
    'LakshmiEx Dreaming Kshatriya Terror': '42' // failing Inner Demons from initial add
  },

  shareWarn: {
    'LakshmiEx Dreaming Kshatriya Tail Slap': '258C',
    // untelegraphed no cast bar cleave
    'LakshmiEx Blissful Arrow': '214F',
    // cross marker dropping
    'LakshmiEx Blissful Arrow Chanchala': '2150',
    // cross marker dropping
    'LakshmiEx Blissful Hammer': '21DC',
    // flower circle dropping
    'LakshmiEx Blissful Hammer Chanchala': '21DD',
    // flower circle droping
    'LakshmiEx The Path of Light': '215A',
    // OT cleave
    'LakshmiEx The Path of Light Chanchala': '215B' // OT cleave
  },

  soloWarn: {
    'LakshmiEx The Pall of Light': '215C' // stack
  },

  triggers: [{
    id: 'LakshmiEx Divine Denial Knocked Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2149',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const lakshmi_ex = (lakshmi_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/lakshmi.ts



// Lakshmi Normal
const lakshmi_triggerSet = {
  zoneId: zone_id/* default.Emanation */.Z.Emanation,
  damageWarn: {
    'Lakshmi Blissful Spear Cross': '248B',
    // blissful arrow's cross lines (called Blissful Spear)
    'Lakshmi Blissful Spear Cross Chanchala': '248C' // blissful arrow's cross lines (called Blissful Spear)
  },

  gainsEffectWarn: {
    'Lakshmi Bleeding': '140' // standing in expanding blue flower circle
  },

  gainsEffectFail: {
    'Lakshmi Dreaming Kshatriya Terror': '42' // failing Inner Demons from initial add
  },

  shareWarn: {
    'Lakshmi Blissful Arrow': '2489',
    // cross marker dropping
    'Lakshmi Blissful Arrow Chanchala': '248A',
    // cross marker dropping
    'Lakshmi Blissful Spear': '2494',
    // flower circle dropping
    'Lakshmi Blissful Spear Chanchala': '2495',
    // flower circle dropping
    'Lakshmi The Path of Light': '24A1' // OT cleave
  },

  soloWarn: {
    'Lakshmi The Pall of Light': '2491' // stack
  },

  triggers: [{
    id: 'Lakshmi Divine Denial Knocked Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2485',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const lakshmi = (lakshmi_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/rathalos-ex.ts


// TODO: ignoring Fire Breath (2A3E) share warning because it also hits adds (which is fine).
// We could filter out hitting multiple players, but that's a lot of effort for low damage.

// Just for reference, this fight has "double" abilities, where the first hit
// does no damage.  Sometimes the set of people hit by the first and not by
// the second are not the same, but usually they are.  Some of these have
// starts using lines (but targeted on a player or unknown).
// * Mangle (2853), paired with (285C)
// * Mangle (2863), paired with (2CB7)
// * Flaming Recoil (2859), paired with (2CB3)
// * Flaming Recoil (285B), paired with (2CB4)
// * Tail Swing (2855), paired with (2A3C)
// * Fire Breath (2857), paired with (2A3E)
// * Rush (2856), paired with (2A3D)
// * Rush (2861), paired with (2CB5)
// * Sweeping Flames (2862), paired with (2CB6)
// * Fireball 1 (285F), paired with (2860)
// * Fireball 2/3 (2D0A), paired with (2D0B)
// Rathalos Extreme
const rathalos_ex_triggerSet = {
  zoneId: zone_id/* default.TheGreatHuntExtreme */.Z.TheGreatHuntExtreme,
  damageWarn: {
    'RathalosEx Mangle 1': '285C',
    // first phase frontal 90 degree conal
    'RathalosEx Mangle 2': '2CB7',
    // second phase conal swipe
    'RathalosEx Rush 1': '2A3D',
    // first phase charge attack
    'RathalosEx Rush 2': '2CB5',
    // second phase charge attack, gives poison
    'RathalosEx Tail Smash': '2854',
    // first phase left/rear conal, paired with Mangle (285C)
    'RathalosEx Tail Swing': '2A3C',
    // first phase right side attack
    'RathalosEx Flaming Recoil 1': '2CB3',
    // frontal conal + knockback
    'RathalosEx Flaming Recoil 2': '2CB4',
    // frontal conal + knockback
    'RathalosEx Steppe Sheep Lullaby': '2864',
    // centered circle
    'RathalosEx Steppe Yamaa Head Butt': '2865',
    // line aoe
    'RathalosEx Steppe Coeurl Wide Blaster': '2866',
    // very large conal
    'RathalosEx Garula Rush': '2868',
    // line charge into the arena
    'RathalosEx Sweeping Flames': '2CB6' // second phase frontal conal
  },

  shareFail: {
    'RathalosEx Garula Heave': '2867' // untelegraphed conal cleave
  },

  soloWarn: {
    'RathalosEx Fireball 1': '2860',
    // second phase stack triple fireball initial
    'RathalosEx Fireball 2': '2D0B' // second phase stack triple fireball second and third
  }
};

/* harmony default export */ const rathalos_ex = (rathalos_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/rathalos.ts


// TODO: ignoring Fire Breath (2CBD) share warning because it also hits adds (which is fine).
// We could filter out hitting multiple players, but that's a lot of effort for low damage.

// Just for reference, this fight has "double" abilities, where the first hit
// does no damage.  Sometimes the set of people hit by the first and not by
// the second are not the same, but usually they are.  Some of these have
// starts using lines (but targeted on a player or unknown).
// * Mangle (286A), paired with (2CB9)
// * Mangle (287A), paired with (2CC2)
// * Flaming Recoil (2870), paired with (2CBE)
// * Tail Swing (286C), paired with (2CBB)
// * Fire Breath (286E), paired with (2CBD)
// * Rush (286D), paired with (2CBC)
// * Rush (2878), paired with (2CC0)
// * Sweeping Flames (2879), paired with (2CC1)
// * Fireball (2876), paired with (2CBA)

// Note: Rathalos Extreme has two pairs of Flaming Recoil, but only one in normal has been seen.
// There are 4 pairs total: https://xivapi.com/search?indexes=action&string=flaming+recoil&columns=ID&pretty=true
// 2872 / 2CBF appears to be missing.  Assume that it exists, even if it hasn't been seen.
// Rathalos Normal
const rathalos_triggerSet = {
  zoneId: zone_id/* default.TheGreatHunt */.Z.TheGreatHunt,
  damageWarn: {
    'Rathalos Mangle 1': '2CB9',
    // first phase frontal conal
    'Rathalos Mangle 2': '2CC2',
    // second phase conal swipe
    'Rathalos Rush 1': '2CBC',
    // first phase charge attack
    'Rathalos Rush 2': '2CC0',
    // second phase charge attack, gives poison
    'Rathalos Tail Smash': '286B',
    // first phase left/rear conal, paired with Mangle (2CB9)
    'Rathalos Tail Swing': '2CBB',
    // first phase right side attack
    'Rathalos Flaming Recoil 1': '2CBE',
    // frontal conal + knockback
    'Rathalos Flaming Recoil 2': '2CBF',
    // frontal conal + knockback
    'Rathalos Steppe Sheep Lullaby': '287B',
    // centered circle
    'Rathalos Steppe Yamaa Head Butt': '287C',
    // line aoe
    'Rathalos Steppe Coeurl Wide Blaster': '287D',
    // very large conal
    'Rathalos Garula Rush': '287F',
    // line charge into the arena
    'Rathalos Sweeping Flames': '2CC1' // second phase frontal conal
  },

  shareFail: {
    'Rathalos Garula Heave': '287E' // untelegraphed conal cleave
  },

  soloWarn: {
    'Rathalos Fireball': '2CBA' // second phase stack that leaves a fire puddle
  }
};

/* harmony default export */ const rathalos = (rathalos_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/seiryu-ex.ts


// TODO: Infirm Soul (37D4) hitting Cursekeeper (37D2) target?
// TODO: taking Forbidden Arts #2 (37C8) with vuln stack from #1?
// Seiryu Extreme
const seiryu_ex_triggerSet = {
  zoneId: zone_id/* default.TheWreathOfSnakesExtreme */.Z.TheWreathOfSnakesExtreme,
  damageWarn: {
    'SeiryuEx Onmyo Sigil 1': '3A01',
    // centered "get out" circle (phase 1)
    'SeiryuEx Onmyo Sigil 2': '3A03',
    // centered "get out" circle (phase 2 first)
    'SeiryuEx Onmyo Sigil 3': '3A06',
    // centered "get out" circle (phase 2 second)
    'SeiryuEx Serpent-Eye Sigil 1': '3A05',
    // donut (phase 2 first)
    'SeiryuEx Serpent-Eye Sigil 2': '3A04',
    // donut (phase 2 second)
    'SeiryuEx Fortune-Blade Sigil': '37E2',
    // Kuji-Kiri (37E1) lines
    'SeiryuEx Calamity-Blade Sigil': '37E3',
    // Kuji-Kiri (37E1) follow-up lines
    'SeiryuEx Iwa-No-Shiki 100-Tonze Swing': '37ED',
    // centered circles
    'SeiryuEx Ten-No-Shiki Yama-Kagura': '3C21',
    // blue lines during midphase / final phase adds
    'SeiryuEx Numa-No-Shiki Stoneskin': '37F4',
    // failing to silence add
    'SeiryuEx Great Typhoon 1': '37F8',
    // outside ring of water during Coursing River
    'SeiryuEx Great Typhoon 2': '37F9',
    // outside ring of water during Coursing River
    'SeiryuEx Great Typhoon 3': '37FA',
    // outside ring of water during Coursing River
    'SeiryuEx Great Typhoon 4': '37FB',
    // outside ring of water during Coursing River
    'SeiryuEx Yama-No-Shiki Handprint 1': '37E7',
    // half arena cleave
    'SeiryuEx Yama-No-Shiki Handprint 2': '37E8',
    // half arena cleave
    'SeiryuEx Force Of Nature': '37EA',
    // standing in the middle circle during knockback (380A)
    'SeiryuEx Serpent Descending Circle': '37DE',
    // baited circles with towers
    'SeiryuEx Serpent\'s Jaws': '37E0' // failing towers
  },

  shareWarn: {
    'SeiryuEx Serpent Descending Spread': '37DD',
    // spread markers
    'SeiryuEx Aka-No-Shiki Red Rush': '37F1',
    // tether charge
    'SeiryuEx Iwa-No-Shiki Kanabo': '37EE' // tether which targets a large conal cleave
  },

  shareFail: {
    'SeiryuEx Infirm Soul': '37D4' // tank buster circular cleave
  },

  soloWarn: {
    'SeiryuEx Ao-No-Shiki Blue Bolt': '37F0',
    // tether share
    'SeiryuEx Forbidden Arts 1': '37C7',
    // line stack share hit 1
    'SeiryuEx Forbidden Arts 2': '37C8' // line stack share hit 2
  }
};

/* harmony default export */ const seiryu_ex = (seiryu_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/seiryu.ts

// Seiryu Normal
const seiryu_triggerSet = {
  zoneId: zone_id/* default.TheWreathOfSnakes */.Z.TheWreathOfSnakes,
  damageWarn: {
    'Seiryu Onmyo Sigil': '3A07',
    // centered "get out" circle
    'Seiryu Serpent-Eye Sigil': '3A08',
    // donut
    'Seiryu Fortune-Blade Sigil': '3806',
    // Kuji-Kiri (37E1) lines
    'Seiryu Iwa-No-Shiki 100-Tonze Swing': '3C1E',
    // centered circles (tank tethers in extreme)
    'Seiryu Ten-No-Shiki Yama-Kagura': '3813',
    // blue lines during midphase / final phase adds
    'Seiryu Iwa-No-Shiki Kanabo': '3C20',
    // unpassable tether which targets a large conal cleave
    'Seiryu Great Typhoon 1': '3810',
    // outside ring of water during Coursing River
    'Seiryu Great Typhoon 2': '3811',
    // outside ring of water during Coursing River
    'Seiryu Great Typhoon 3': '3812',
    // outside ring of water during Coursing River
    'Seiryu Yama-No-Shiki Handprint 1': '3707',
    // half arena cleave
    'Seiryu Yama-No-Shiki Handprint 2': '3708',
    // half arena cleave
    'Seiryu Force Of Nature': '3809',
    // standing in the middle circle during knockback (380A)
    'Seiryu Serpent\'s Jaws': '3A8D' // failing towers
  },

  shareWarn: {
    'Seiryu Serpent Descending': '3804',
    // spread markers
    'Seiryu Aka-No-Shiki Red Rush': '3C1D' // tether charge
  },

  shareFail: {
    'Seiryu Infirm Soul': '37FD' // tank buster circular cleave
  },

  soloWarn: {
    'Seiryu Ao-No-Shiki Blue Bolt': '3C1C',
    // tether share
    'Seiryu Forbidden Arts 1': '3C82',
    // line stack share hit 1
    'Seiryu Forbidden Arts 2': '3C72' // line stack share hit 2
  }
};

/* harmony default export */ const seiryu = (seiryu_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/shinryu-ex.ts




// TODO: Hellfire (25DB) without Fire Resistance Up (208).
// TODO: Levinbolt (25EB) while having Lightning Resistance Down II (4EC).
// TODO: Hypernova (25E9) while not having Deep Freeze (4E6) or Fire Resistance Up (208).
// TODO: Doom (D2) expiring.
// Shinryu Extreme
const shinryu_ex_triggerSet = {
  zoneId: zone_id/* default.TheMinstrelsBalladShinryusDomain */.Z.TheMinstrelsBalladShinryusDomain,
  damageWarn: {
    'ShinryuEx Burning Chains': '2602',
    // not breaking chains fast enough
    'ShinryuEx Icicle Icicle Impact': '25EF',
    // icicles landing
    'ShinryuEx Icicle Spikesicle': '25F0',
    // icicle dash
    'ShinryuEx Tail Slap': '25E2',
    // tail add appearing
    'ShinryuEx Dragonfist': '2611',
    // giant punchy circle in the center.
    'ShinryuEx Gyre Charge': '2603',
    // phase 1 large dive attack
    'ShinryuEx Ginryu Fireball': '260B',
    // targeted circle during add phase
    'ShinryuEx Hakkinryu Blazing Trail': '2609',
    // wide line during add phase
    'ShinryuEx Tail Spit': '1DD1',
    // blue puck during knockback
    'ShinryuEx Aetherial Ray': '2618',
    // lasers while running along the tail
    'ShinryuEx Levinbolt': '2725',
    // baited lightning during final phase
    'ShinryuEx Wormwail': '2648',
    // donut attack
    'ShinryuEx Benighting Breath': '264A' // 90 degree conal attack
  },

  shareWarn: {
    'ShinryuEx Levinbolt Spread': '25EA',
    // untelegraphed lightning spread
    'ShinryuEx Earth Breath': '25ED' // earthshaker-esque conal attacks
  },

  soloWarn: {
    'ShinryuEx Hypernova': '25E9',
    // stack in puddle damage
    'ShinryuEx Atomic Ray': '264D' // pair stack markers in final phase
  },

  triggers: [{
    // Icy floor attack.
    id: 'ShinryuEx Diamond Dust',
    type: 'GainsEffect',
    // Thin Ice
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '38F'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Slid off!',
          de: 'Runter gerutscht!',
          fr: 'A glissé(e) !',
          ja: '滑った',
          cn: '滑落',
          ko: '미끄러짐',
          tc: '滑落'
        }
      };
    }
  }, {
    id: 'ShinryuEx Tidal Wave',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '25DA',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '넉백됨',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    // Knockback from center.
    id: 'ShinryuEx Aerial Blast',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '25DF',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '넉백됨',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const shinryu_ex = (shinryu_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/shinryu.ts



// Shinryu Normal
const shinryu_triggerSet = {
  zoneId: zone_id/* default.TheRoyalMenagerie */.Z.TheRoyalMenagerie,
  damageWarn: {
    'Shinryu Akh Rhai': '1FA6',
    // Sky lasers alongside Akh Morn.
    'Shinryu Blazing Trail': '221A',
    // Rectangle AoEs, intermission adds.
    'Shinryu Collapse': '2218',
    // Circle AoEs, intermission adds
    'Shinryu Dragonfist': '24F0',
    // Giant punchy circle in the center.
    'Shinryu Earth Breath': '1F9D',
    // Conal attacks that aren't actually Earth Shakers.
    'Shinryu Gyre Charge': '1FA8',
    // Green dive bomb attack.
    'Shinryu Spikesicle': '1FA`',
    // Blue-green line attacks from behind.
    'Shinryu Tail Slap': '1F93' // Red squares indicating the tail's landing spots.
  },

  shareWarn: {
    'Shinryu Levinbolt': '1F9C'
  },
  triggers: [{
    // Icy floor attack.
    id: 'Shinryu Diamond Dust',
    type: 'GainsEffect',
    // Thin Ice
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '38F'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Slid off!',
          de: 'Runter gerutscht!',
          fr: 'A glissé(e) !',
          ja: '滑った',
          cn: '滑落',
          ko: '미끄러짐',
          tc: '滑落'
        }
      };
    }
  }, {
    id: 'Shinryu Tidal Wave',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '1F8B',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '넉백됨',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    // Knockback from center.
    id: 'Shinryu Aerial Blast',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '1F90',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '넉백됨',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const shinryu = (shinryu_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/susano-ex.ts


// TODO: Electrocution (203D) comes from the levinbolt not moving
// We could blame the person with 006E and blame the person hit with 006F (the stun)?
// TODO: add death reason for Sinking (4F9) effect?
// Susano Extreme
const susano_ex_triggerSet = {
  zoneId: zone_id/* default.ThePoolOfTributeExtreme */.Z.ThePoolOfTributeExtreme,
  damageWarn: {
    'SusanoEx Seasplitter 1': '2038',
    // knockback + skinny line safe zone
    'SusanoEx Seasplitter 2': '2039',
    // knockback + skinny line safe zone
    'SusanoEx Seasplitter 3': '203A',
    // knockback + skinny line safe zone
    'SusanoEx Seasplitter 4': '203B',
    // knockback + skinny line safe zone
    'SusanoEx Rasen Kaikyo': '202E',
    // circles
    'SusanoEx Churning': '203F',
    // not stopping
    'SusanoEx Thunderhead The Parting Clouds': '2041' // purple lightning line
  },

  damageFail: {
    'SusanoEx Ame-No-Murakumo': '218C',
    // standing in red line after midphase
    'SusanoEx Ama-No-Iwato The Sealed Gate': '2035' // not killing the rock jails in time
  },

  shareWarn: {
    'SusanoEx Dark Levin Shock': '2044',
    // midphase orb
    'SusanoEx Stormsplitter': '2033' // tank buster lceave
  },

  soloWarn: {
    'SusanoEx Brightstorm': '2030' // stack marker
  }
};

/* harmony default export */ const susano_ex = (susano_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/susano.ts

// Susano Normal
const susano_triggerSet = {
  zoneId: zone_id/* default.ThePoolOfTribute */.Z.ThePoolOfTribute,
  damageWarn: {
    'Susano Rasen Kaikyo': '201E',
    // circles
    'Susano Seasplitter 1': '2028',
    // knockback + skinny line safe zone
    'Susano Seasplitter 2': '2029',
    // knockback + skinny line safe zone
    'Susano Seasplitter 3': '202A',
    // knockback + skinny line safe zone
    'Susano Seasplitter 4': '202B',
    // knockback + skinny line safe zone
    'Susano Dark Cloud The Parting Clouds': '259F' // purple line aoes from clouds
  },

  damageFail: {
    'Susano Ame-No-Murakumo': '218C',
    // standing in the red line after midphase
    'Susano Ama-No-Iwato The Sealed Gate': '2025' // not killing the rock jails in time
  },

  shareWarn: {
    'Susano Dark Levin Shock': '2043',
    // orbs during midphase
    'Susano Stormsplitter': '2023' // tank buster cleave
  },

  soloWarn: {
    'Susano Brightstorm': '2020' // stack marker
  }
};

/* harmony default export */ const susano = (susano_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/suzaku-ex.ts




// TODO: Rekindle (32E0) hitting multiple adds, any other players,
// or hitting adds before they've been killed once is a mistake.
// However, there is a point where it should hit one add in the
// beginning. This also happens later in the fight too, where it
// should not hit anybody else, but unfortunately also counts as
// hitting multiple people when it hits Suzaku.  So, there's really
// not any good way to write a mistake trigger for this ability.

// TODO: what is getting hit by an orb during Close-Quarter Crescendo?
// Suzaku Extreme
const suzaku_ex_triggerSet = {
  zoneId: zone_id/* default.HellsKierExtreme */.Z.HellsKierExtreme,
  damageWarn: {
    'SuzakuEx Rout': '32F0',
    // untargetable phase 1 charge across the arena
    'SuzakuEx Fleeting Summer': '32D3',
    // targeted conal
    'SuzakuEx Scarlet Tail Feather Wing And A Prayer': '32D4',
    // circle aoe from unkilled plume
    'SuzakuEx Scarlet Plume Wing And A Prayer': '3244',
    // circle aoe from unkilled plume
    'SuzakuEx Ashes To Ashes': '32D0',
    // Scarlet Lady add, raidwide explosion if not killed in time
    'SuzakuEx Well Of Flame': '32E1',
    // targeted wide line aoe
    'SuzakuEx Hotspot': '32E2' // platform fire when the runes are activated
  },

  damageFail: {
    'SuzakuEx Immolate': '32E6',
    // Tower mechanic failure on Incadescent Interlude (party failure, not personal)
    'SuzakuEx Phantom Flurry': '32DE' // "phantom half" final hit of Phantom Flurry
  },

  soloWarn: {
    'SuzakuEx Scathing Net': '3243' // stack marker
  },

  triggers: [{
    id: 'SuzakuEx Ruthless Refrain',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '32DB',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    id: 'SuzakuEx Mesmerizing Melody',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '32DA',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const suzaku_ex = (suzaku_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/suzaku.ts



// Suzaku Normal
const suzaku_triggerSet = {
  zoneId: zone_id/* default.HellsKier */.Z.HellsKier,
  damageWarn: {
    'Suzaku Normal Ashes To Ashes': '321F',
    // Scarlet Lady add, raidwide explosion if not killed in time
    'Suzaku Normal Fleeting Summer': '3223',
    // Cone AoE (randomly targeted)
    'Suzaku Normal Wing And A Prayer': '3225',
    // Circle AoEs from unkilled plumes
    'Suzaku Normal Phantom Half': '3233',
    // Giant half-arena AoE follow-up after tank buster
    'Suzaku Normal Well Of Flame': '3236',
    // Large rectangle AoE (randomly targeted)
    'Suzaku Normal Hotspot': '3238',
    // Platform fire when the runes are activated
    'Suzaku Normal Swoop': '323B',
    // Star cross line AoEs
    'Suzaku Normal Burn': '323D' // Tower mechanic failure on Incandescent Interlude (party failure, not personal)
  },

  shareWarn: {
    'Suzaku Normal Rekindle': '3235' // Purple spread circles
  },

  triggers: [{
    id: 'Suzaku Normal Ruthless Refrain',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '3230',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '낙사',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const suzaku = (suzaku_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/tsukuyomi-ex.ts



// TODO: Taking multiple role-based Steel of the Underworld (2BBF) hits.

// Tsukuyomi Extreme
const tsukuyomi_ex_triggerSet = {
  zoneId: zone_id/* default.TheMinstrelsBalladTsukuyomisPain */.Z.TheMinstrelsBalladTsukuyomisPain,
  damageWarn: {
    'TsukuyomiEx Moonlight Lunar Halo': '2BD6',
    // donut from orbs in final phase
    'TsukuyomiEx Moonfall': '2BD1',
    // meteor drop big circles
    'TsukuyomiEx Moondust Crater': '2CD7',
    // meteor explosions later
    'TsukuyomiEx Dancing Fan Tsukui-No-Maiogi': '2BC6',
    // fan circle aoe
    'TsukuyomiEx Waxing Grudge': '2BDE',
    // melee range circle from Full Moon buff
    'TsukuyomiEx Waning Grudge': '2BDF',
    // donut from New Moon Buff
    'TsukuyomiEx Dark Blade': '2BDA',
    // right-side cleave
    'TsukuyomiEx Bright Blade': '2BDB' // left side cleave
  },

  shareFail: {
    'TsukuyomiEx Torment Unto Death': '2BBB' // tank buster conal cleave
  },

  soloWarn: {
    'TsukuyomiEx Lead Of The Underworld': '2BBE',
    // "Beg for Mercy!" stack
    'TsukuyomiEx Lunacy': '2BDD' // 4x stack marker
  },

  triggers: [{
    id: 'TsukuyomiEx Moonlit',
    type: 'GainsEffect',
    // Five stacks of Moonlit or Moonshadowed is instant death.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '602',
      count: '05'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        name: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'TsukuyomiEx Moonshadowed',
    type: 'GainsEffect',
    // Five stacks of Moonlit or Moonshadowed is instant death.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '603',
      count: '05'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        name: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const tsukuyomi_ex = (tsukuyomi_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/tsukuyomi.ts


// Tsukuyomi Normal
const tsukuyomi_triggerSet = {
  zoneId: zone_id/* default.CastrumFluminis */.Z.CastrumFluminis,
  damageWarn: {
    'Tsukuyomi Steel Of The Underworld': '2BE7',
    // large targeted telegraph cleave during fans
    'Tsukuyomi Midnight Haze To Ashes': '2BEA',
    // not killing clouds in time
    'Tsukuyomi Dancing Fan Tsuki-No-Maiogi': '2BED',
    // fan circle aoe
    'Tsukuyomi Moonlight Lunar Halo': '2BE4',
    // donut from orbs during selenomancy
    'Tsukuyomi Dark Blade': '2BF9',
    // right-side cleave
    'Tsukuyomi Bright Blade': '2BFA' // left side cleave
  },

  shareFail: {
    'Tsukuyomi Torment Unto Death': '2BE3' // tank buster conal cleave
  },

  soloWarn: {
    'Tsukuyomi Lead Of The Underworld': '2BE6',
    // line stack marker
    'Tsukuyomi Lunacy 1': '2BFB',
    // 3-4x stack marker
    'Tsukuyomi Lunacy 2': '2BFC' // 3-4x stack marker
  },

  triggers: [{
    id: 'Tsukuyomi Moonlit',
    type: 'GainsEffect',
    // Five stacks of Moonlit or Moonshadowed is instant death.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '602',
      count: '05'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        name: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'Tsukuyomi Moonshadowed',
    type: 'GainsEffect',
    // Five stacks of Moonlit or Moonshadowed is instant death.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '603',
      count: '05'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        name: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const tsukuyomi = (tsukuyomi_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/trial/yojimbo.ts


// TODO: Gekko (3883) is the orb "spread" marker that turns into donut Kasha (3834)
// however, it can make some sense to stack 2-3 up to create space.
const yojimbo_triggerSet = {
  zoneId: zone_id/* default.KuganeOhashi */.Z.KuganeOhashi,
  damageWarn: {
    'Yojimbo Fragility': '382A',
    // circle aoes from butterflies after Inoshikacho
    'Yojimbo Yukikaze': '3832',
    // icy-looking waffle lines
    'Yojimbo Kasha': '3834',
    // donut that follows Gekko orb markers
    'Yojimbo Tiny Song': '3835',
    // dorito stack
    'Yojimbo Electrogenetic Force': '3840',
    // purple orb explosions
    'Yojimbo Masamune': '3843',
    // very long targeted line
    'Yojimbo Epic Stormsplitter': '3845',
    // single line down the middle
    'Yojimbo Seasplitter 1': '3846',
    // follow-up "get middle" to Epic Stormsplitter
    'Yojimbo Seasplitter 2': '3847',
    // follow-up "get middle" to Epic Stormsplitter
    'Yojimbo Seasplitter 3': '3848',
    // follow-up "get middle" to Epic Stormsplitter
    'Yojimbo Seasplitter 4': '3849',
    // follow-up "get middle" to Epic Stormsplitter
    'Yojimbo Dragon\'s Head Mighty Blow': '3839' // running into Dragon's Head untargetable add
  },

  damageFail: {
    'Yojimbo Hell\'s Gate': '3842' // failing to break Iron Chains
  },

  shareWarn: {
    'Yojimbo The Bitter End': '31DE' // frontal tank cleave, no cast bar
  }
};

/* harmony default export */ const yojimbo = (yojimbo_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/ultimate/ultima_weapon_ultimate.ts



// Ultima Weapon Ultimate
const ultima_weapon_ultimate_triggerSet = {
  zoneId: zone_id/* default.TheWeaponsRefrainUltimate */.Z.TheWeaponsRefrainUltimate,
  damageWarn: {
    'UWU Eye of the Storm': '2B52',
    // donut on the final
    'UWU Searing Wind': '2B5C',
    // healer explosions
    'UWU Eruption': '2B5A',
    // red baited ifrit circles
    'UWU Crimson Cyclone 1': '2B5F',
    // ifrit charge
    'UWU Crimson Cyclone 2': '2B60',
    // ifrit charge
    'UWU Radiant Plume': '2B61',
    // ifrit plumes
    'UWU Weight of the Land': '2B65',
    // titan puddles
    'UWU Bomb Boulder Bury': '2B69',
    // titan bombs dropping
    'UWU Bomb Boulder Freefire': '2B6E',
    // titan bombs awakening
    'UWU Bomb Boulder Burst': '2B6A' // titan bombs exploding
  },

  damageFail: {
    'UWU Great Whirlwind': '2B41',
    // large circle from blocking mistral song
    'UWU Slipstream': '2B53',
    // untelegraphed dodgeable frontal conal
    'UWU Wicked Wheel': '2B4E',
    // wicked wheel centered circle
    'UWU Wicked Tornado': '2B4F',
    // awoken wicked wheel donut
    'UWU Landslide 1': '2B70',
    // landslide
    'UWU Landslide 2': '2B6F',
    // landslide
    'UWU Landslide 3': '2B71',
    // landslide
    'UWU Landslide 4': '2C22',
    // landslide
    'UWU Landslide 5': '2B7F',
    // landslide from ultima
    'UWU Aetherochemical Laser 1': '2B84',
    // suppression yellow line laser from ultima
    'UWU Aetherochemical Laser 2': '2B85',
    // suppression yellow line laser from ultima
    'UWU Aetherochemical Laser 3': '2B86' // suppression yellow line laser from ultima
  },

  shareWarn: {
    'UWU Mesohigh': '2B49' // tether to garuda sister
  },

  shareFail: {
    'UWU Downburst': '2B50',
    // unawoken garuda tankbuster
    'UWU Incinerate': '2B56',
    // ifrit tankbuster
    'UWU Rock Buster': '2B62',
    // titan tankbuster 1
    'UWU Mountain Buster': '2B63',
    // titan tankbuster 2
    'UWU Viscous Aetheroplasm': '2B76',
    // tank debuff tankbuster
    'UWU Homing Laser': '2B7B',
    // second hate tankbuster
    'UWU Diffractive Laser': '2B78' // tank cleave
  },

  soloWarn: {
    'UWU Flaming Crush': '25BD' // ifrit stack marker
  },

  triggers: [{
    id: 'UWU Windburn',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'EB'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    // Featherlance explosion.  It seems like the person who pops it is the
    // first person listed damage-wise, so they are likely the culprit.
    id: 'UWU Featherlance',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '2B43',
      ...oopsy_common/* playerDamageFields */.np
    }),
    suppressSeconds: 5,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.source
      };
    }
  }]
};
/* harmony default export */ const ultima_weapon_ultimate = (ultima_weapon_ultimate_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/04-sb/ultimate/unending_coil_ultimate.ts



// UCU - The Unending Coil Of Bahamut (Ultimate)
const unending_coil_ultimate_triggerSet = {
  zoneId: zone_id/* default.TheUnendingCoilOfBahamutUltimate */.Z.TheUnendingCoilOfBahamutUltimate,
  damageFail: {
    'UCU Lunar Dynamo': '26BC',
    'UCU Iron Chariot': '26BB',
    'UCU Exaflare': '26EF',
    'UCU Wings Of Salvation': '26CA'
  },
  triggers: [{
    id: 'UCU Twister Death',
    type: 'Ability',
    // Instant death has a special flag value, differentiating
    // from the explosion damage you take when somebody else
    // pops one.
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '26AB',
      ...oopsy_common/* playerDamageFields */.np,
      flags: oopsy_common/* kFlagInstantDeath */.hm
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Twister Pop',
          de: 'Wirbelsturm berührt',
          fr: 'Apparition des tornades',
          ja: 'ツイスター',
          cn: '旋风',
          ko: '회오리 밟음',
          tc: '旋風'
        }
      };
    }
  }, {
    id: 'UCU Thermionic Burst',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '26B9',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Pizza Slice',
          de: 'Pizzastück',
          fr: 'Part de pizza',
          ja: 'サーミオニックバースト',
          cn: '天崩地裂',
          ko: '장판에 맞음',
          tc: '天崩地裂'
        }
      };
    }
  }, {
    id: 'UCU Chain Lightning',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '26C8',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      // It's hard to assign blame for lightning.  The debuffs
      // go out and then explode in order, but the attacker is
      // the dragon and not the player.
      return {
        type: 'warn',
        name: matches.target,
        text: {
          en: 'hit by lightning',
          de: 'vom Blitz getroffen',
          fr: 'frappé(e) par la foudre',
          ja: 'チェインライトニング',
          cn: '雷光链',
          ko: '번개 맞음',
          tc: '雷光鏈'
        }
      };
    }
  }, {
    id: 'UCU Burns',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'FA'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        text: matches.effect
      };
    }
  }, {
    id: 'UCU Sludge',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '11F'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.effect
      };
    }
  }, {
    id: 'UCU Doom Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'D2'
    }),
    run: (data, matches) => {
      data.hasDoom ??= {};
      data.hasDoom[matches.target] = true;
    }
  }, {
    id: 'UCU Doom Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: 'D2'
    }),
    run: (data, matches) => {
      data.hasDoom ??= {};
      data.hasDoom[matches.target] = false;
    }
  }, {
    // There is no callout for "you forgot to clear doom".  The logs look
    // something like this:
    //   [20:02:30.564] 1A:Okonomi Yaki gains the effect of Doom from  for 6.00 Seconds.
    //   [20:02:36.443] 1E:Okonomi Yaki loses the effect of Protect from Tako Yaki.
    //   [20:02:36.443] 1E:Okonomi Yaki loses the effect of Doom from .
    //   [20:02:38.525] 19:Okonomi Yaki was defeated by Firehorn.
    // In other words, doom effect is removed +/- network latency, but can't
    // tell until later that it was a death.  Arguably, this could have been a
    // close-but-successful clearing of doom as well.  It looks the same.
    // Strategy: if you haven't cleared doom with 1 second to go then you probably
    // died to doom.  You can get non-fatally iceballed or auto'd in between,
    // but what can you do.
    id: 'UCU Doom Death',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'D2'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 1,
    deathReason: (data, matches) => {
      if (!data.hasDoom || !data.hasDoom[matches.target]) return;
      let text;
      const duration = parseFloat(matches.duration);
      if (duration < 9) text = `${matches.effect} #1`;else if (duration < 14) text = `${matches.effect} #2`;else text = `${matches.effect} #3`;
      return {
        id: matches.targetId,
        name: matches.target,
        text: text
      };
    }
  }]
};
/* harmony default export */ const unending_coil_ultimate = (unending_coil_ultimate_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/alliance/the_copied_factory.ts

// The Copied Factory
const the_copied_factory_triggerSet = {
  zoneId: zone_id/* default.TheCopiedFactory */.Z.TheCopiedFactory,
  damageWarn: {
    'Copied Serial Energy Bomb': '48B4',
    // Make sure enemies are ignored on these
    'Copied Serial Energy Bombardment': '48B8',
    'Copied Serial Energy Assault': '48B6',
    'Copied Serial High-Powered Laser': '48C5',
    'Copied Serial Sidestriking Spin Spin 1': '48CB',
    'Copied Serial Sidestriking Spin 2': '48CC',
    'Copied Serial Centrifugal Spin': '48C9',
    'Copied Serial Air-To-Surface Energy': '48BA',
    'Copied Serial High-Caliber Laser': '48FA',
    'Copied Serial Energy Ring 1': '48BC',
    'Copied Serial Energy Ring 2': '48BD',
    'Copied Serial Energy Ring 3': '48BE',
    'Copied Serial Energy Ring 4': '48C0',
    'Copied Serial Energy Ring 5': '48C1',
    'Copied Serial Energy Ring 6': '48C2',
    'Copied Trash Energy Bomb': '491D',
    'Copied Trash Frontal Somersault': '491B',
    'Copied Trash High-Frequency Laser': '491E',
    'Copied Hobbes Shocking Discharge': '480B',
    'Copied Hobbes Variable Combat Test 1': '49C5',
    'Copied Hobbes Variable Combat Test 2': '49C6',
    'Copied Hobbes Variable Combat Test 3': '49C7',
    'Copied Hobbes Variable Combat Test 4': '480F',
    'Copied Hobbes Variable Combat Test 5': '4810',
    'Copied Hobbes Variable Combat Test 6': '4811',
    'Copied Hobbes Ring Laser 1': '4802',
    'Copied Hobbes Ring Laser 2': '4803',
    'Copied Hobbes Ring Laser 3': '4804',
    'Copied Hobbes Towerfall': '4813',
    'Copied Hobbes Fire-Reistance Test 1': '4816',
    'Copied Hobbes Fire-Reistance Test 2': '4817',
    'Copied Hobbes Fire-Reistance Test 3': '4818',
    'Copied Hobbes Oil Well': '481B',
    'Copied Hobbes Electromagnetic Pulse': '4819',
    // TODO: what's the electrified floor with conveyor belts?

    'Copied Goliath Energy Ring 1': '4937',
    'Copied Goliath Energy Ring 2': '4938',
    'Copied Goliath Energy Ring 3': '4939',
    'Copied Goliath Energy Ring 4': '493A',
    // FIXME: this id is the same as Energy Ring 1 above, is it correct or one of them incorrect?
    // 'Copied Goliath Energy Ring 5': '4937',
    'Copied Goliath Laser Turret': '48E6',
    'Copied Flight Unit Area Bombing': '4943',
    'Copied Flight Unit Lightfast Blade': '4940',
    'Copied Engels Marx Smash 1': '4729',
    'Copied Engels Marx Smash 2': '4728',
    'Copied Engels Marx Smash 3': '472F',
    'Copied Engels Marx Smash 4': '4731',
    'Copied Engels Marx Smash 5': '472B',
    'Copied Engels Marx Smash 6': '472D',
    'Copied Engels Marx Smash 7': '4732',
    'Copied Engels Incendiary Bombing': '4739',
    'Copied Engels Guided Missile': '4736',
    'Copied Engels Surface Missile': '4734',
    'Copied Engels Laser Sight': '473B',
    'Copied Engels Frack': '474D',
    'Copied Engels Marx Crush': '48FC',
    'Copied Engels Crushing Wheel': '474B',
    // FIXME: this id is the same as Marx Crush above, is it correct or one of them incorrect?
    // 'Copied Engels Marx Thrust': '48FC',

    'Copied 9S Laser Suppression': '48E0',
    // Cannons
    'Copied 9S Ballistic Impact 1': '4974',
    'Copied 9S Ballistic Impact 2': '48DC',
    'Copied 9S Ballistic Impact 3': '48E4',
    // FIXME: this id is the same as Laser Suppression above, is it correct or one of them incorrect?
    // 'Copied 9S Ballistic Impact 4': '48E0',

    'Copied 9S Marx Impact': '48D4',
    'Copied 9S Tank Destruction 1': '48E8',
    'Copied 9S Tank Destruction 2': '48E9',
    'Copied 9S Serial Spin 1': '48A5',
    'Copied 9S Serial Spin 2': '48A7'
  },
  shareWarn: {
    'Copied Hobbes Short-Range Missile': '4815'
  }
};
/* harmony default export */ const the_copied_factory = (the_copied_factory_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/alliance/the_puppets_bunker.ts

// TODO: 5093 taking High-Powered Laser with a vuln (because of taking two)
// TODO: 4FB5 taking High-Powered Laser with a vuln (because of taking two)
// TODO: 50D3 Aerial Support: Bombardment going off from add
// TODO: 5211 Maneuver: Volt Array not getting interrupted
// TODO: 4FF4/4FF5 One of these is failing chemical conflagration
// TODO: standing in wrong teleporter?? maybe 5363?
const the_puppets_bunker_triggerSet = {
  zoneId: zone_id/* default.ThePuppetsBunker */.Z.ThePuppetsBunker,
  damageWarn: {
    'Puppet Aegis Beam Cannons 1': '5074',
    // rotating separating white ground aoe
    'Puppet Aegis Beam Cannons 2': '5075',
    // rotating separating white ground aoe
    'Puppet Aegis Beam Cannons 3': '5076',
    // rotating separating white ground aoe
    'Puppet Aegis Collider Cannons': '507E',
    // rotating red ground aoe pinwheel
    'Puppet Aegis Surface Laser 1': '5091',
    // chasing laser initial
    'Puppet Aegis Surface Laser 2': '5092',
    // chasing laser chasing
    'Puppet Aegis Flight Path': '508C',
    // blue line aoe from flying untargetable adds
    'Puppet Aegis Refraction Cannons 1': '5081',
    // refraction cannons between wings
    'Puppet Aegis Life\'s Last Song': '53B3',
    // ring aoe with gap
    'Puppet Light Long-Barreled Laser': '5212',
    // line aoe from add
    'Puppet Light Surface Missile Impact': '520F',
    // untargeted ground aoe from No Restrictions
    'Puppet Superior Incendiary Bombing': '4FB9',
    // fire puddle initial
    'Puppet Superior Sharp Turn': '506D',
    // sharp turn dash
    'Puppet Superior Standard Surface Missile 1': '4FB1',
    // Lethal Revolution circles
    'Puppet Superior Standard Surface Missile 2': '4FB2',
    // Lethal Revolution circles
    'Puppet Superior Standard Surface Missile 3': '4FB3',
    // Lethal Revolution circles
    'Puppet Superior Sliding Swipe 1': '506F',
    // right-handed sliding swipe
    'Puppet Superior Sliding Swipe 2': '5070',
    // left-handed sliding swipe
    'Puppet Superior Guided Missile': '4FB8',
    // ground aoe during Area Bombardment
    'Puppet Superior High-Order Explosive Blast 1': '4FC0',
    // star aoe
    'Puppet Superior High-Order Explosive Blast 2': '4FC1',
    // star aoe
    'Puppet Heavy Energy Bombardment': '4FFC',
    // colored magic hammer-y ground aoe
    'Puppet Heavy Revolving Laser': '5000',
    // get under laser
    'Puppet Heavy Energy Bomb': '4FFA',
    // getting hit by ball during Active Suppressive Unit
    'Puppet Heavy R010 Laser': '4FF0',
    // laser pod
    'Puppet Heavy R030 Hammer': '4FF1',
    // circle aoe pod
    'Puppet Hallway High-Powered Laser': '50B1',
    // long aoe in the hallway section
    'Puppet Hallway Energy Bomb': '50B2',
    // running into a floating orb
    'Puppet Compound Mechanical Dissection': '51B3',
    // spinning vertical laser
    'Puppet Compound Mechanical Decapitation': '51B4',
    // get under laser
    'Puppet Compound Mechnical Contusion Untargeted': '51B7',
    // untargeted ground aoe
    'Puppet Compound 2P Relentless Spiral 1': '51AA',
    // triple untargeted ground aoes
    'Puppet Compound 2P Relentless Spiral 2': '51CB',
    // triple untargeted ground aoes
    'Puppet Compound 2P Prime Blade Out 1': '541F',
    // 2P prime blade get out
    'Puppet Compound 2P Prime Blade Out 2': '5198',
    // 2P/puppet teleporting/reproduce prime blade get out
    'Puppet Compound 2P Prime Blade Behind 1': '5420',
    // 2P prime blade get behind
    'Puppet Compound 2P Prime Blade Behind 2': '5199',
    // 2P teleporting prime blade get behind
    'Puppet Compound 2P Prime Blade In 1': '5421',
    // 2P prime blade get in
    'Puppet Compound 2P Prime Blade In 2': '519A',
    // 2P/puppet teleporting/reproduce prime blade get in
    'Puppet Compound 2P R012 Laser Ground': '51AE' // untargeted ground circle
    // This is... too noisy.
    // 'Puppet Compound 2P Four Parts Resolve 1': '51A0', // four parts resolve jump
    // 'Puppet Compound 2P Four Parts Resolve 2': '519F', // four parts resolve cleave
  },

  damageFail: {
    'Puppet Heavy Upper Laser 1': '5087',
    // upper laser initial
    'Puppet Heavy Upper Laser 2': '4FF7',
    // upper laser continuous
    'Puppet Heavy Lower Laser 1': '5086',
    // lower laser first section initial
    'Puppet Heavy Lower Laser 2': '4FF6',
    // lower laser first section continuous
    'Puppet Heavy Lower Laser 3': '5088',
    // lower laser second section initial
    'Puppet Heavy Lower Laser 4': '4FF8',
    // lower laser second section continuous
    'Puppet Heavy Lower Laser 5': '5089',
    // lower laser third section initial
    'Puppet Heavy Lower Laser 6': '4FF9',
    // lower laser third section continuous
    'Puppet Compound Incongruous Spin': '51B2' // find the safe spot double dash
  },

  gainsEffectWarn: {
    'Puppet Burns': '10B' // standing in many various fire aoes
  },

  shareWarn: {
    // This is pretty large and getting hit by initial without burns seems fine.
    // 'Puppet Light Homing Missile Impact': '5210', // targeted fire aoe from No Restrictions
    'Puppet Heavy Unconventional Voltage': '5004',
    // Pretty noisy.
    'Puppet Maneuver High-Powered Laser': '5002',
    // tank laser
    'Puppet Compound Mechnical Contusion Targeted': '51B6' // targeted spread marker
    // FIXME: this id is the same as R012 Laser Ground above, is it correct or one of them incorrect?
    // 'Puppet Compound 2P R012 Laser Tank Spread': '51AE', // targeted spread pod laser on non-tank
  },

  shareFail: {
    'Puppet Aegis Anti-Personnel Laser': '5090',
    // tank buster marker
    'Puppet Superior Precision-Guided Missile': '4FC5',
    'Puppet Compound 2P R012 Laser Tank': '51AD' // targeted pod laser on tank
  }
};

/* harmony default export */ const the_puppets_bunker = (the_puppets_bunker_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/alliance/the_tower_at_paradigms_breach.ts


// TODO: missing Shock Black 2?
// TODO: White/Black Dissonance damage is maybe when flags end in 03?
const the_tower_at_paradigms_breach_triggerSet = {
  zoneId: zone_id/* default.TheTowerAtParadigmsBreach */.Z.TheTowerAtParadigmsBreach,
  damageWarn: {
    'Tower Knave Colossal Impact Center 1': '5EA7',
    // Center aoe from Knave and clones
    'Tower Knave Colossal Impact Center 2': '60C8',
    // Center aoe from Knave during lunge
    'Tower Knave Colossal Impact Side 1': '5EA5',
    // Side aoes from Knave and clones
    'Tower Knave Colossal Impact Side 2': '5EA6',
    // Side aoes from Knave and clones
    'Tower Knave Colossal Impact Side 3': '60C6',
    // Side aoes from Knave during lunge
    'Tower Knave Colossal Impact Side 4': '60C7',
    // Side aoes from Knave during lunge
    'Tower Knave Burst': '5ED4',
    // Spheroid Knavish Bullets collision
    'Tower Knave Magic Barrage': '5EAC',
    // Spheroid line aoes
    'Tower Hansel Repay': '5C70',
    // Shield damage
    'Tower Hansel Explosion': '5C67',
    // Being hit by Magic Bullet during Passing Lance
    'Tower Hansel Impact': '5C5C',
    // Being hit by Magical Confluence during Wandering Trail
    'Tower Hansel Bloody Sweep 1': '5C6C',
    // Dual cleaves without tether
    'Tower Hansel Bloody Sweep 2': '5C6D',
    // Dual cleaves without tether
    'Tower Hansel Bloody Sweep 3': '5C6E',
    // Dual cleaves with tether
    'Tower Hansel Bloody Sweep 4': '5C6F',
    // Dual cleaves with tether
    'Tower Hansel Passing Lance': '5C66',
    // The Passing Lance charge itself
    'Tower Hansel Breaththrough 1': '55B3',
    // half room cleave during Wandering Trail
    'Tower Hansel Breaththrough 2': '5C5D',
    // half room cleave during Wandering Trail
    'Tower Hansel Breaththrough 3': '5C5E',
    // half room cleave during Wandering Trail
    'Tower Hansel Hungry Lance 1': '5C71',
    // 2xlarge conal cleave during Wandering Trail
    'Tower Hansel Hungry Lance 2': '5C72',
    // 2xlarge conal cleave during Wandering Trail
    'Tower Flight Unit Lightfast Blade': '5BFE',
    // large room cleave
    'Tower Flight Unit Standard Laser': '5BFF',
    // tracking laser
    'Tower 2P Whirling Assault': '5BFB',
    // line aoe from 2P clones
    'Tower 2P Balanced Edge': '5BFA',
    // circular aoe on 2P clones
    'Tower Red Girl Generate Barrier 1': '6006',
    // being hit by barriers appearing
    'Tower Red Girl Generate Barrier 2': '6007',
    // being hit by barriers appearing
    'Tower Red Girl Generate Barrier 3': '6008',
    // being hit by barriers appearing
    'Tower Red Girl Generate Barrier 4': '6009',
    // being hit by barriers appearing
    'Tower Red Girl Generate Barrier 5': '6310',
    // being hit by barriers appearing
    'Tower Red Girl Generate Barrier 6': '6311',
    // being hit by barriers appearing
    'Tower Red Girl Generate Barrier 7': '6312',
    // being hit by barriers appearing
    'Tower Red Girl Generate Barrier 8': '6313',
    // being hit by barriers appearing
    'Tower Red Girl Shock White 1': '600F',
    // white shockwave circle not dropped on black
    'Tower Red Girl Shock White 2': '6010',
    // white shockwave circle not dropped on black
    'Tower Red Girl Shock Black 1': '6011',
    // black shockwave circle not dropped on white
    'Tower Red Girl Point White 1': '601F',
    // being hit by a white laser
    'Tower Red Girl Point White 2': '6021',
    // being hit by a white laser
    'Tower Red Girl Point Black 1': '6020',
    // being hit by a black laser
    'Tower Red Girl Point Black 2': '6022',
    // being hit by a black laser
    'Tower Red Girl Wipe White': '600C',
    // not line of sighting the white meteor
    'Tower Red Girl Wipe Black': '600D',
    // not line of sighting the black meteor
    'Tower Red Girl Diffuse Energy': '6056',
    // rotating clone bubble cleaves
    'Tower Red Girl Pylon Big Explosion': '6027',
    // not killing a pylon during hacking phase
    'Tower Red Girl Pylon Explosion': '6026',
    // pylon during Child's play
    'Tower Philosopher Deploy Armaments Middle': '5C02',
    // middle laser
    'Tower Philosopher Deploy Armaments Sides': '5C05',
    // sides laser
    'Tower Philosopher Deploy Armaments 3': '6078',
    // goes with 5C01
    'Tower Philosopher Deploy Armaments 4': '6079',
    // goes with 5C04
    // FIXME: this id is the same as Deploy Armaments Sides above, is it correct or one of them incorrect?
    // 'Tower Philosopher Energy Bomb': '5C05', // pink bubble
    'Tower False Idol Made Magic Right': '5BD7',
    // rotating wheel going right
    'Tower False Idol Made Magic Left': '5BD6',
    // rotating wheel going left
    'Tower False Idol Lighter Note': '5BDA',
    // lighter note moving aoes
    'Tower False Idol Magical Interference': '5BD5',
    // lasers during Rhythm Rings
    'Tower False Idol Scattered Magic': '5BDF',
    // circle aoes from Seed Of Magic
    'Tower Her Inflorescence Uneven Fotting': '5BE2',
    // building from Recreate Structure
    'Tower Her Inflorescence Crash': '5BE5',
    // trains from Mixed Signals
    'Tower Her Inflorescence Heavy Arms 1': '5BED',
    // heavy arms front/back attack
    'Tower Her Inflorescence Heavy Arms 2': '5BEF',
    // heavy arms sides attack
    'Tower Her Inflorescence Energy Scattered Magic': '5BE8' // orbs from Red Girl by train
  },

  damageFail: {
    'Tower Her Inflorescence Place Of Power': '5C0D' // instadeath middle circle before black/white rings
  },

  shareWarn: {
    'Tower Knave Magic Artillery Alpha': '5EAB',
    // Spread
    'Tower Hansel Seed Of Magic Alpha': '5C61' // Spread
  },

  shareFail: {
    'Tower Knave Magic Artillery Beta': '5EB3',
    // Tankbuster
    'Tower Red Girl Manipulate Energy': '601A',
    // Tankbuster
    'Tower False Idol Darker Note': '5BDC' // Tankbuster
  },

  triggers: [{
    id: 'Tower Knocked Off',
    type: 'Ability',
    // 5EB1 = Knave Lunge
    // 5BF2 = Her Infloresence Shockwave
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['5EB1', '5BF2']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const the_tower_at_paradigms_breach = (the_tower_at_paradigms_breach_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/akadaemia_anyder.ts

const akadaemia_anyder_triggerSet = {
  zoneId: zone_id/* default.AkadaemiaAnyder */.Z.AkadaemiaAnyder,
  damageWarn: {
    'Anyder Acrid Stream': '4304',
    'Anyder Waterspout': '4306',
    'Anyder Raging Waters': '4302',
    'Anyder Violent Breach': '4305',
    'Anyder Tidal Guillotine 1': '3E08',
    'Anyder Tidal Guillotine 2': '3E0A',
    'Anyder Pelagic Cleaver 1': '3E09',
    'Anyder Pelagic Cleaver 2': '3E0B',
    'Anyder Aquatic Lance': '3E05',
    'Anyder Syrup Spout': '4308',
    'Anyder Needle Storm': '4309',
    'Anyder Extensible Tendrils 1': '3E10',
    'Anyder Extensible Tendrils 2': '3E11',
    'Anyder Putrid Breath': '3E12',
    'Anyder Detonator': '430F',
    'Anyder Dominion Slash': '430D',
    'Anyder Quasar': '430B',
    'Anyder Dark Arrivisme': '430E',
    'Anyder Thunderstorm': '3E1C',
    'Anyder Winding Current': '3E1F'
    // 3E20 is being hit by the growing orbs, maybe?
  }
};

/* harmony default export */ const akadaemia_anyder = (akadaemia_anyder_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/amaurot.ts

const amaurot_triggerSet = {
  zoneId: zone_id/* default.Amaurot */.Z.Amaurot,
  damageWarn: {
    'Amaurot Burning Sky': '354A',
    'Amaurot Whack': '353C',
    'Amaurot Aetherspike': '353B',
    'Amaurot Venemous Breath': '3CCE',
    'Amaurot Cosmic Shrapnel': '4D26',
    'Amaurot Earthquake': '3CCD',
    'Amaurot Meteor Rain': '3CC6',
    'Amaurot Final Sky': '3CCB',
    'Amaurot Malevolence': '3541',
    'Amaurot Turnabout': '3542',
    'Amaurot Sickly Inferno': '3DE3',
    'Amaurot Disquieting Gleam': '3546',
    'Amaurot Black Death': '3543',
    'Amaurot Force of Loathing': '3544',
    'Amaurot Damning Ray 1': '3E00',
    'Amaurot Damning Ray 2': '3E01',
    'Amaurot Deadly Tentacles': '3547',
    'Amaurot Misfortune': '3CE2'
  },
  damageFail: {
    'Amaurot Apokalypsis': '3CD7'
  }
};
/* harmony default export */ const amaurot = (amaurot_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/anamnesis_anyder.ts

const anamnesis_anyder_triggerSet = {
  zoneId: zone_id/* default.AnamnesisAnyder */.Z.AnamnesisAnyder,
  damageWarn: {
    'Anamnesis Trench Phuabo Spine Lash': '4D1A',
    // frontal conal
    'Anamnesis Trench Anemone Falling Rock': '4E37',
    // ground circle aoe from Trench Anemone showing up
    'Anamnesis Trench Dagonite Sewer Water': '4D1C',
    // frontal conal from Trench Anemone (?!)
    'Anamnesis Trench Yovra Rock Hard': '4D21',
    // targeted circle aoe
    // FIXME: this id is the same as Rock Hard above, is it correct or one of them incorrect?
    // 'Anamnesis Trench Yovra Torrential Torment': '4D21', // frontal conal
    'Anamnesis Unknown Luminous Ray': '4E27',
    // Unknown line aoe
    'Anamnesis Unknown Sinster Bubble Explosion': '4B6E',
    // Unknown explosions during Scrutiny
    'Anamnesis Unknown Reflection': '4B6F',
    // Unknown conal attack during Scrutiny
    'Anamnesis Unknown Clearout 1': '4B74',
    // Unknown frontal cone
    'Anamnesis Unknown Clearout 2': '4B6B',
    // Unknown frontal cone
    'Anamnesis Unknown Setback 1': '4B75',
    // Unknown rear cone
    'Anamnesis Unknown Setback 2': '5B6C',
    // Unknown rear cone
    'Anamnesis Anyder Clionid Acrid Stream': '4D24',
    // targeted circle aoe
    'Anamnesis Anyder Diviner Dreadstorm': '4D28',
    // ground circle aoe
    'Anamnesis Kyklops 2000-Mina Swing': '4B55',
    // Kyklops get out mechanic
    'Anamnesis Kyklops Terrible Hammer': '4B5D',
    // Kyklops Hammer/Blade alternating squares
    'Anamnesis Kyklops Terrible Blade': '4B5E',
    // Kyklops Hammer/Blade alternating squares
    'Anamnesis Kyklops Raging Glower': '4B56',
    // Kyklops line aoe
    'Anamnesis Kyklops Eye Of The Cyclone': '4B57',
    // Kyklops donut
    'Anamnesis Anyder Harpooner Hydroball': '4D26',
    // frontal conal
    'Anamnesis Rukshs Swift Shift': '4B83',
    // Rukshs Deem teleport N/S
    'Anamnesis Rukshs Depth Grip Wavebreaker': '33D4',
    // Rukshs Deem hand attacks
    'Anamnesis Rukshs Rising Tide': '4B8B',
    // Rukshs Deem cross aoe
    'Anamnesis Rukshs Command Current': '4B82' // Rukshs Deem protean-ish ground aoes
  },

  shareWarn: {
    'Anamnesis Trench Xzomit Mantle Drill': '4D19',
    // charge attack
    'Anamnesis Io Ousia Barreling Smash': '4E24',
    // charge attack
    'Anamnesis Kyklops Wanderer\'s Pyre': '4B5F' // Kyklops spread attack
  }
};

/* harmony default export */ const anamnesis_anyder = (anamnesis_anyder_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/dohn_mheg.ts


// TODO: Missing Growing tethers on boss 2.
// (Maybe gather party member names on the previous TIIIIMBEEEEEER cast for comparison?)
// TODO: Failing to interrupt Dohnfaust Fuath on Watering Wheel casts?
// (15:........:Dohnfast Fuath:3DAA:Watering Wheel:........:(\y{Name}):)
const dohn_mheg_triggerSet = {
  zoneId: zone_id/* default.DohnMheg */.Z.DohnMheg,
  damageWarn: {
    'Dohn Mheg Geyser': '2260',
    // Water eruptions, boss 1
    'Dohn Mheg Hydrofall': '22BD',
    // Ground AoE marker, boss 1
    'Dohn Mheg Laughing Leap': '2294',
    // Ground AoE marker, boss 1
    'Dohn Mheg Swinge': '22CA',
    // Frontal cone, boss 2
    'Dohn Mheg Canopy': '3DB0',
    // Frontal cone, Dohnfaust Rowans throughout instance
    'Dohn Mheg Pinecone Bomb': '3DB1',
    // Circular ground AoE marker, Dohnfaust Rowans throughout instance
    'Dohn Mheg Bile Bombardment': '34EE',
    // Ground AoE marker, boss 3
    'Dohn Mheg Corrosive Bile': '34EC',
    // Frontal cone, boss 3
    'Dohn Mheg Flailing Tentacles': '3681'
  },
  triggers: [{
    id: 'Dohn Mheg Imp Choir',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '46E'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'Dohn Mheg Toad Choir',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '1B7'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'Dohn Mheg Fool\'s Tumble',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '183'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const dohn_mheg = (dohn_mheg_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/heroes_gauntlet.ts



// TODO: Berserker 2nd/3rd wild anguish should be shared with just a rock

const heroes_gauntlet_triggerSet = {
  zoneId: zone_id/* default.TheHeroesGauntlet */.Z.TheHeroesGauntlet,
  damageWarn: {
    'THG Blade\'s Benison': '5228',
    // pld conal
    'THG Absolute Holy': '524B',
    // whm very large aoe
    'THG Hissatsu: Goka': '523D',
    // sam line aoe
    'THG Whole Self': '522D',
    // mnk wide line aoe
    'THG Randgrith': '5232',
    // drg very big line aoe
    'THG Vacuum Blade 1': '5061',
    // Spectral Thief circular ground aoe from marker
    'THG Vacuum Blade 2': '5062',
    // Spectral Thief circular ground aoe from marker
    'THG Coward\'s Cunning': '4FD7',
    // Spectral Thief Chicken Knife laser
    'THG Papercutter 1': '4FD1',
    // Spectral Thief line aoe from marker
    'THG Papercutter 2': '4FD2',
    // Spectral Thief line aoe from marker
    'THG Ring of Death': '5236',
    // drg circular aoe
    'THG Lunar Eclipse': '5227',
    // pld circular aoe
    'THG Absolute Gravity': '5248',
    // ink mage circular
    'THG Rain of Light': '5242',
    // bard large circule aoe
    'THG Dooming Force': '5239',
    // drg line aoe
    'THG Absolute Dark II': '4F61',
    // Necromancer 120 degree conal
    'THG Burst': '53B7',
    // Necromancer necroburst small zombie explosion
    'THG Pain Mire': '4FA4',
    // Necromancer very large green bleed puddle
    'THG Dark Deluge': '4F5D',
    // Necromancer ground aoe
    'THG Tekka Gojin': '523E',
    // sam 90 degree conal
    'THG Raging Slice 1': '520A',
    // Berserker line cleave
    'THG Raging Slice 2': '520B',
    // Berserker line cleave
    'THG Wild Rage': '5203' // Berserker blue knockback puck
  },

  gainsEffectWarn: {
    'THG Bleeding': '828' // Standing in the Necromancer puddle or outside the Berserker arena
  },

  gainsEffectFail: {
    'THG Truly Berserk': '906' // Standing in the crater too long
  },

  shareWarn: {
    'THG Absolute Thunder IV': '5245',
    // headmarker aoe from blm
    'THG Moondiver': '5233',
    // headmarker aoe from drg
    'THG Spectral Gust': '53CF' // Spectral Thief headmarker aoe
  },

  shareFail: {
    'THG Falling Rock': '5205' // Berserker headmarker aoe that creates rubble
  },

  soloWarn: {
    // This should always be shared.  On all times but the 2nd and 3rd, it's a party share.
    // TODO: on the 2nd and 3rd time this should only be shared with a rock.
    // TODO: alternatively warn on taking one of these with a 472 Magic Vulnerability Up effect
    'THG Wild Anguish': '5209'
  },
  triggers: [{
    id: 'THG Wild Rampage',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '5207',
      ...oopsy_common/* playerDamageFields */.np
    }),
    // This is zero damage if you are in the crater.
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const heroes_gauntlet = (heroes_gauntlet_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/holminster_switch.ts

const holminster_switch_triggerSet = {
  zoneId: zone_id/* default.HolminsterSwitch */.Z.HolminsterSwitch,
  damageWarn: {
    'Holminster Thumbscrew': '3DC6',
    'Holminster Wooden horse': '3DC7',
    'Holminster Light Shot': '3DC8',
    'Holminster Heretic\'s Fork': '3DCE',
    'Holminster Holy Water': '3DD4',
    'Holminster Fierce Beating 1': '3DDD',
    'Holminster Fierce Beating 2': '3DDE',
    'Holminster Fierce Beating 3': '3DDF',
    'Holminster Cat O\' Nine Tails': '3DE1',
    'Holminster Right Knout': '3DE6',
    'Holminster Left Knout': '3DE7'
  },
  damageFail: {
    'Holminster Aethersup': '3DE9'
  },
  shareWarn: {
    'Holminster Flagellation': '3DD6'
  },
  shareFail: {
    'Holminster Taphephobia': '4181'
  }
};
/* harmony default export */ const holminster_switch = (holminster_switch_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/malikahs_well.ts

const malikahs_well_triggerSet = {
  zoneId: zone_id/* default.MalikahsWell */.Z.MalikahsWell,
  damageWarn: {
    'Malikah Falling Rock': '3CEA',
    'Malikah Wellbore': '3CED',
    'Malikah Geyser Eruption': '3CEE',
    'Malikah Swift Spill': '3CF0',
    'Malikah Breaking Wheel 1': '3CF5',
    'Malikah Crystal Nail': '3CF7',
    'Malikah Heretic\'s Fork 1': '3CF9',
    'Malikah Breaking Wheel 2': '3CFA',
    'Malikah Heretic\'s Fork 2': '3E0E',
    'Malikah Earthshake': '3E39'
  }
};
/* harmony default export */ const malikahs_well = (malikahs_well_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/matoyas_relict.ts

// TODO: could include 5484 Mudman Rocky Roll as a shareWarn, but it's low damage and common.

const matoyas_relict_triggerSet = {
  zoneId: zone_id/* default.MatoyasRelict */.Z.MatoyasRelict,
  damageWarn: {
    'Matoya Relict Werewood Ovation': '5518',
    // line aoe
    'Matoya Cave Tarantula Hawk Apitoxin': '5519',
    // big circle aoe
    'Matoya Spriggan Stonebearer Romp': '551A',
    // conal aoe
    'Matoya Sonny Of Ziggy Jittering Glare': '551C',
    // long narrow conal aoe
    'Matoya Mudman Quagmire': '5481',
    // Mudman aoe puddles
    'Matoya Mudman Brittle Breccia 1': '548E',
    // expanding circle aoe
    'Matoya Mudman Brittle Breccia 2': '548F',
    // expanding circle aoe
    'Matoya Mudman Brittle Breccia 3': '5490',
    // expanding circle aoe
    'Matoya Mudman Mud Bubble': '5487',
    // standing in mud puddle?
    'Matoya Cave Pugil Screwdriver': '551E',
    // conal aoe
    'Matoya Nixie Gurgle': '5992',
    // Nixie wall flush
    'Matoya Relict Molten Phoebad Pyroclastic Shot': '57EB',
    // the line aoes as you run to trash
    'Matoya Relict Flan Flood': '5523',
    // big circle aoe
    'Matoya Pyroduct Eldthurs Mash': '5527',
    // line aoe
    'Matoya Pyroduct Eldthurs Spin': '5528',
    // very large circle aoe
    'Matoya Relict Bavarois Thunder III': '5525',
    // circle aoe
    'Matoya Relict Marshmallow Ancient Aero': '5524',
    // very large line groaoe
    'Matoya Relict Pudding Fire II': '5522',
    // circle aoe
    'Matoya Relict Molten Phoebad Hot Lava': '57E9',
    // conal aoe
    'Matoya Relict Molten Phoebad Volcanic Drop': '57E8',
    // circle aoe
    'Matoya Mother Porxie Medium Rear': '591D',
    // knockback into safe circle aoe
    'Matoya Mother Porxie Barbeque Line': '5917',
    // line aoe during bbq
    'Matoya Mother Porxie Barbeque Circle': '5918',
    // circle aoe during bbq
    'Matoya Mother Porxie To A Crisp': '5925',
    // getting to close to boss during bbq
    'Matoya Mother Proxie Buffet': '5926' // Aeolian Cave Sprite line aoe (is this a pun?)
  },

  damageFail: {
    'Matoya Nixie Sea Shanty': '598C' // Not taking the puddle up to the top? Failing add enrage?
  },

  shareWarn: {
    'Matoya Nixie Crack': '5990',
    // Nixie Crash-Smash tank tethers
    'Matoya Nixie Sputter': '5993' // Nixie spread marker
  }
};

/* harmony default export */ const matoyas_relict = (matoyas_relict_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/mt_gulg.ts

const mt_gulg_triggerSet = {
  zoneId: zone_id/* default.MtGulg */.Z.MtGulg,
  damageWarn: {
    'Gulg Immolation': '41AA',
    'Gulg Tail Smash': '41AB',
    'Gulg Heavenslash': '41A9',
    'Gulg Typhoon Wing 1': '3D00',
    'Gulg Typhoon Wing 2': '3D01',
    'Gulg Hurricane Wing': '3D03',
    'Gulg Earth Shaker': '37F5',
    'Gulg Sanctification': '41AE',
    'Gulg Exegesis': '3D07',
    'Gulg Perfect Contrition': '3D0E',
    'Gulg Sanctified Aero': '41AD',
    'Gulg Divine Diminuendo 1': '3D16',
    'Gulg Divine Diminuendo 2': '3D18',
    'Gulg Divine Diminuendo 3': '4669',
    'Gulg Divine Diminuendo 4': '3D19',
    'Gulg Divine Diminuendo 5': '3D21',
    'Gulg Conviction Marcato 1': '3D1A',
    'Gulg Conviction Marcato 2': '3D1B',
    'Gulg Conviction Marcato 3': '3D20',
    'Gulg Vena Amoris': '3D27'
  },
  damageFail: {
    'Gulg Lumen Infinitum': '41B2',
    'Gulg Right Palm': '37F8',
    'Gulg Left Palm': '37FA'
  }
};
/* harmony default export */ const mt_gulg = (mt_gulg_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/paglthan.ts

// TODO: What to do about Kahn Rai 5B50?
// It seems impossible for the marked person to avoid entirely.
const paglthan_triggerSet = {
  zoneId: zone_id/* default.Paglthan */.Z.Paglthan,
  damageWarn: {
    'Paglthan Telovouivre Plague Swipe': '60FC',
    // frontal conal cleave
    'Paglthan Lesser Telodragon Engulfing Flames': '60F5',
    // frontal conal cleave
    'Paglthan Amhuluk Lightning Bolt': '5C4C',
    // circular lightning aoe (on self or post)
    'Paglthan Amhuluk Ball Of Levin Shock': '5C52',
    // pulsing small circular aoes
    'Paglthan Amhuluk Supercharged Ball Of Levin Shock': '5C53',
    // pulsing large circular aoe
    'Paglthan Amhuluk Wide Blaster': '60C5',
    // rear conal cleave
    'Paglthan Telobrobinyak Fall Of Man': '6148',
    // circular aoe
    'Paglthan Telotek Reaper Magitek Cannon': '6121',
    // circular aoe
    'Paglthan Telodragon Sheet of Ice': '60F8',
    // circular aoe
    'Paglthan Telodragon Frost Breath': '60F7',
    // very large conal cleave
    'Paglthan Magitek Core Stable Cannon': '5C94',
    // large line aoes
    'Paglthan Magitek Core 2-Tonze Magitek Missile': '5C95',
    // large circular aoe
    'Paglthan Telotek Sky Armor Aethershot': '5C9C',
    // circular aoe
    'Paglthan Mark II Telotek Colossus Exhaust': '5C99',
    // large line aoe
    'Paglthan Magitek Missile Explosive Force': '5C98',
    // slow moving horizontal missiles
    'Paglthan Tiamat Flamisphere': '610F',
    // very long line aoe
    'Paglthan Armored Telodragon Tortoise Stomp': '614B',
    // large circular aoe from turtle
    'Paglthan Telodragon Thunderous Breath': '6149',
    // large conal cleave
    'Paglthan Lunar Bahamut Lunar Nail Upburst': '605B',
    // small aoes before Big Burst
    'Paglthan Lunar Bahamut Lunar Nail Big Burst': '5B48',
    // large circular aoes from nails
    'Paglthan Lunar Bahamut Perigean Breath': '5B59',
    // large conal cleave
    'Paglthan Lunar Bahamut Megaflare Pepperoni': '5B4E',
    // megaflare pepperoni
    'Paglthan Lunar Bahamut Megaflare Dive': '5B52',
    // megaflare line aoe across the arena
    'Paglthan Lunar Bahamut Lunar Flare': '5B4A' // large purple shrinking circles
  },

  shareWarn: {
    'Paglthan Lunar Bahamut Megaflare Spread': '5B4D' // megaflare spread markers
  }
};

/* harmony default export */ const paglthan = (paglthan_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/qitana_ravel.ts

const qitana_ravel_triggerSet = {
  zoneId: zone_id/* default.TheQitanaRavel */.Z.TheQitanaRavel,
  damageWarn: {
    'Qitana Sun Toss': '3C8A',
    // Ground AoE, boss one
    'Qitana Ronkan Light 1': '3C8C',
    // Statue attack, boss one
    'Qitana Lozatl\'s Fury 1': '3C8F',
    // Semicircle cleave, boss one
    'Qitana Lozatl\'s Fury 2': '3C90',
    // Semicircle cleave, boss one
    'Qitana Falling Rock': '3C96',
    // Small ground AoE, boss two
    'Qitana Falling Boulder': '3C97',
    // Large ground AoE, boss two
    'Qitana Towerfall': '3C98',
    // Pillar collapse, boss two
    'Qitana Viper Poison 2': '3C9E',
    // Stationary poison puddles, boss three
    'Qitana Confession of Faith 1': '3CA2',
    // Dangerous middle during spread circles, boss three
    'Qitana Confession of Faith 3': '3CA6',
    // Dangerous sides during stack marker, boss three
    'Qitana Confession of Faith 4': '3CA7',
    // Dangerous sides during stack marker, boss three
    'Qitana Ronkan Light 2': '3D6D',
    // Statue attack, boss one
    'Qitana Wrath of the Ronka': '3E2C',
    // Statue line attack from mini-bosses before first boss
    'Qitana Sinspitter': '3E36',
    // Gorilla boulder toss AoE before third boss
    'Qitana Hound out of Heaven': '42B8',
    // Tether extension failure, boss three; 42B7 is correct execution
    'Qitana Ronkan Abyss': '43EB' // Ground AoE from mini-bosses before first boss
  },

  shareWarn: {
    'Qitana Viper Poison 1': '3C9D',
    // AoE from the 00AB poison head marker, boss three
    'Qitana Confession of Faith 2': '3CA3' // Overlapped circles failure on the spread circles version of the mechanic
  }
};

/* harmony default export */ const qitana_ravel = (qitana_ravel_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/the_grand_cosmos.ts

// The Grand Cosmos
const the_grand_cosmos_triggerSet = {
  zoneId: zone_id/* default.TheGrandCosmos */.Z.TheGrandCosmos,
  damageWarn: {
    'Cosmos Iron Justice': '491F',
    'Cosmos Smite Of Rage': '4921',
    'Cosmos Tribulation': '49A4',
    'Cosmos Dark Shock': '476F',
    'Cosmos Sweep': '4770',
    'Cosmos Deep Clean': '4771',
    'Cosmos Shadow Burst': '4924',
    'Cosmos Bloody Caress': '4927',
    'Cosmos Nepenthic Plunge': '4928',
    'Cosmos Brewing Storm': '4929',
    'Cosmos Ode To Fallen Petals': '4950',
    'Cosmos Far Wind Ground': '4273',
    'Cosmos Fire Breath': '492B',
    'Cosmos Ronkan Freeze': '492E',
    'Cosmos Overpower': '492D',
    'Cosmos Scorching Left': '4763',
    'Cosmos Scorching Right': '4762',
    'Cosmos Otherwordly Heat': '475C',
    'Cosmos Fire\'s Ire': '4761',
    'Cosmos Plummet': '4767',
    'Cosmos Fire\'s Domain Tether': '475F'
  },
  shareWarn: {
    'Cosmos Dark Well': '476D',
    'Cosmos Far Wind Spread': '4724',
    'Cosmos Black Flame': '475D',
    'Cosmos Fire\'s Domain': '4760'
  }
};
/* harmony default export */ const the_grand_cosmos = (the_grand_cosmos_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/dungeon/twinning.ts

const twinning_triggerSet = {
  zoneId: zone_id/* default.TheTwinning */.Z.TheTwinning,
  damageWarn: {
    'Twinning Auto Cannons': '43A9',
    'Twinning Heave': '3DB9',
    'Twinning 32 Tonze Swipe': '3DBB',
    'Twinning Sideswipe': '3DBF',
    'Twinning Wind Spout': '3DBE',
    'Twinning Shock': '3DF1',
    'Twinning Laserblade': '3DEC',
    'Twinning Vorpal Blade': '3DC2',
    'Twinning Thrown Flames': '3DC3',
    'Twinning Magitek Ray': '3DF3',
    'Twinning High Gravity': '3DFA'
  },
  damageFail: {
    'Twinning 128 Tonze Swipe': '3DBA'
  }
};
/* harmony default export */ const twinning = (twinning_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/eureka/delubrum_reginae.ts



// TODO: Dead Iron 5AB0 (earthshakers, but only if you take two?)

const delubrum_reginae_triggerSet = {
  zoneId: zone_id/* default.DelubrumReginae */.Z.DelubrumReginae,
  damageWarn: {
    'Delubrum Seeker Mercy Fourfold': '5B34',
    // Four glowing sword half room cleaves
    'Delubrum Seeker Baleful Swathe': '5AB4',
    // Ground aoe to either side of boss
    'Delubrum Seeker Baleful Blade': '5B28',
    // Hide behind pillars attack
    'Delubrum Seeker Iron Splitter Blue 1': '5AA4',
    // Blue ring explosion
    'Delubrum Seeker Iron Splitter Blue 2': '5AA5',
    // Blue ring explosion
    'Delubrum Seeker Iron Splitter Blue 3': '5AA6',
    // Blue ring explosion
    'Delubrum Seeker Iron Splitter White 1': '5AA7',
    // White ring explosion
    'Delubrum Seeker Iron Splitter White 2': '5AA8',
    // White ring explosion
    'Delubrum Seeker Iron Splitter White 3': '5AA9',
    // White ring explosion
    'Delubrum Seeker Scorching Shackle': '5AAE',
    // Chain damage
    'Delubrum Seeker Merciful Breeze': '5AAB',
    // Waffle criss-cross floor markers
    'Delubrum Seeker Merciful Blooms': '5AAD',
    // Purple growing circle
    'Delubrum Dahu Right-Sided Shockwave': '5761',
    // Right circular cleave
    'Delubrum Dahu Left-Sided Shockwave': '5762',
    // Left circular cleave
    'Delubrum Dahu Firebreathe': '5765',
    // Conal breath
    'Delubrum Dahu Firebreathe Rotating': '575A',
    // Conal breath, rotating
    'Delubrum Dahu Head Down': '5756',
    // line aoe charge from Marchosias add
    'Delubrum Dahu Hunter\'s Claw': '5757',
    // circular ground aoe centered on Marchosias add
    'Delubrum Dahu Falling Rock': '575C',
    // ground aoe from Reverberating Roar
    'Delubrum Dahu Hot Charge': '5764',
    // double charge
    'Delubrum Dahu Ripper Claw': '575D',
    // frontal cleave
    'Delubrum Dahu Tail Swing': '575F',
    // tail swing ;)
    'Delubrum Guard Pawn Off': '5806',
    // Queen's Soldier Secrets Revealed tethered clone aoe
    'Delubrum Guard Turret\'s Tour 1': '580D',
    // Queen's Gunner reflective turret shot
    'Delubrum Guard Turret\'s Tour 2': '580E',
    // Queen's Gunner reflective turret shot
    'Delubrum Guard Turret\'s Tour 3': '580F',
    // Queen's Gunner reflective turret shot
    'Delubrum Guard Optimal Play Shield': '57F3',
    // Queen's Knight shield get under
    'Delubrum Guard Optimal Play Sword': '57F2',
    // Queen's Knight sword get out
    'Delubrum Guard Counterplay': '57F6',
    // Hitting aetherial ward directional barrier
    'Delubrum Phantom Swirling Miasma 1': '57A9',
    // Initial phantom donut aoe from circle
    'Delubrum Phantom Swirling Miasma 2': '57AA',
    // Moving phantom donut aoes from circle
    'Delubrum Phantom Creeping Miasma': '57A5',
    // phantom line aoe from square
    'Delubrum Phantom Vile Wave': '57B1',
    // phantom conal aoe
    'Delubrum Avowed Fury Of Bozja': '5973',
    // Trinity Avowed Allegiant Arsenal "out"
    'Delubrum Avowed Flashvane': '5972',
    // Trinity Avowed Allegiant Arsenal "get behind"
    'Delubrum Avowed Infernal Slash': '5971',
    // Trinity Avowed Allegiant Arsenal "get front"
    'Delubrum Avowed Flames Of Bozja': '5968',
    // 80% floor aoe before shimmering shot swords
    'Delubrum Avowed Gleaming Arrow': '5974',
    // Trinity Avatar line aoes from outside
    'Delubrum Queen The Means 1': '59BB',
    // The Queen's Beck and Call cross aoe from adds
    'Delubrum Queen The Means 2': '59BD',
    // The Queen's Beck and Call cross aoe from adds
    'Delubrum Queen The End 1': '59BA',
    // Also The Queen's Beck and Call cross aoe from adds
    'Delubrum Queen The End 2': '59BC',
    // Also The Queen's Beck and Call cross aoe from adds
    'Delubrum Queen Northswain\'s Glow': '59C4',
    // expanding lines with explosion intersections
    'Delubrum Queen Judgment Blade Left': '5B83',
    // dash across room with left cleave
    // FIXME: this id is the same as  Blade Left above, is it correct or one of them incorrect?
    // In this case, it seems possible that there's two self-targeted casts but one damage id.
    // 'Delubrum Queen Judgment Blade Right': '5B83', // dash across room with right cleave
    'Delubrum Queen Queen\'s Justice': '59BF',
    // failing to walk the right number of squares
    'Delubrum Queen Turret\'s Tour 1': '59E0',
    // reflective turret shot during Queen
    'Delubrum Queen Turret\'s Tour 2': '59E1',
    // reflective turret shot during Queen
    'Delubrum Queen Turret\'s Tour 3': '59E2',
    // reflective turret shot during Queen
    'Delubrum Queen Pawn Off': '59DA',
    // Secrets Revealed tethered clone aoe during Queen
    'Delubrum Queen Optimal Play Shield': '59CE',
    // Queen's Knight shield get under during Queen
    'Delubrum Queen Optimal Play Sword': '59CC' // Queen's Knight sword get out during Queen
  },

  damageFail: {
    'Delubrum Hidden Trap Massive Explosion': '5A6E',
    // explosion trap
    'Delubrum Hidden Trap Poison Trap': '5A6F',
    // poison trap
    'Delubrum Avowed Heat Shock': '595E',
    // too much heat or failing to regulate temperature
    'Delubrum Avowed Cold Shock': '595F' // too much cold or failing to regulate temperature
  },

  gainsEffectWarn: {
    'Delubrum Seeker Merciful Moon': '262' // "Petrification" from Aetherial Orb lookaway
  },

  shareFail: {
    'Delubrum Dahu Heat Breath': '5766',
    // tank cleave
    'Delubrum Avowed Wrath Of Bozja': '5975' // tank cleave
  },

  triggers: [{
    // At least during The Queen, these ability ids can be ordered differently,
    // and the first explosion "hits" everyone, although with "1B" flags.
    id: 'Delubrum Lots Cast',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['565A', '565B', '57FD', '57FE', '5B86', '5B87', '59D2', '5D93'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (_data, matches) => matches.flags.endsWith('03'),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const delubrum_reginae = (delubrum_reginae_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/eureka/delubrum_reginae_savage.ts



// TODO: Dahu 5776 Spit Flame should always hit a Marchosias
// TODO: hitting phantom with ice spikes with anything but dispel?
// TODO: failing icy/fiery portent (guard and queen)
//       `18:Pyretic DoT Tick on ${name} for ${damage} damage.`
// TODO: Winds Of Fate / Weight Of Fortune?
// TODO: Turret's Tour?
// general traps: explosion: 5A71, poison trap: 5A72, mini: 5A73
// duel traps: mini: 57A1, ice: 579F, toad: 57A0
// TODO: taking mana flame without reflect
// TODO: taking Maelstrom's Bolt without lightning buff
const delubrum_reginae_savage_triggerSet = {
  zoneId: zone_id/* default.DelubrumReginaeSavage */.Z.DelubrumReginaeSavage,
  damageWarn: {
    'DelubrumSav Seeker Slimes Hellish Slash': '57EA',
    // Bozjan Soldier cleave
    'DelubrumSav Seeker Slimes Viscous Rupture': '5016',
    // Fully merged viscous slime aoe

    'DelubrumSav Seeker Golems Demolish': '5880',
    // interruptible Ruins Golem cast

    'DelubrumSav Seeker Baleful Swathe': '5AD1',
    // Ground aoe to either side of boss
    'DelubrumSav Seeker Baleful Blade': '5B2A',
    // Hide behind pillars attack
    'DelubrumSav Seeker Scorching Shackle': '5ACB',
    // Chains
    'DelubrumSav Seeker Mercy Fourfold 1': '5B94',
    // Four glowing sword half room cleaves
    'DelubrumSav Seeker Mercy Fourfold 2': '5AB9',
    // Four glowing sword half room cleaves
    'DelubrumSav Seeker Mercy Fourfold 3': '5ABA',
    // Four glowing sword half room cleaves
    'DelubrumSav Seeker Mercy Fourfold 4': '5ABB',
    // Four glowing sword half room cleaves
    'DelubrumSav Seeker Mercy Fourfold 5': '5ABC',
    // Four glowing sword half room cleaves
    'DelubrumSav Seeker Merciful Breeze': '5AC8',
    // Waffle criss-cross floor markers
    'DelubrumSav Seeker Baleful Comet': '5AD7',
    // Clone meteor dropping before charges
    'DelubrumSav Seeker Baleful Firestorm': '5AD8',
    // Clone charge after Baleful Comet
    'DelubrumSav Seeker Iron Rose': '5AD9',
    // Clone line aoes
    'DelubrumSav Seeker Iron Splitter Blue 1': '5AC1',
    // Blue rin g explosion
    'DelubrumSav Seeker Iron Splitter Blue 2': '5AC2',
    // Blue ring explosion
    'DelubrumSav Seeker Iron Splitter Blue 3': '5AC3',
    // Blue ring explosion
    'DelubrumSav Seeker Iron Splitter White 1': '5AC4',
    // White ring explosion
    'DelubrumSav Seeker Iron Splitter White 2': '5AC5',
    // White ring explosion
    'DelubrumSav Seeker Iron Splitter White 3': '5AC6',
    // White ring explosion
    'DelubrumSav Seeker Act Of Mercy': '5ACF',
    // cross-shaped line aoes

    'DelubrumSav Dahu Right-Sided Shockwave 1': '5770',
    // Right circular cleave
    'DelubrumSav Dahu Right-Sided Shockwave 2': '5772',
    // Right circular cleave
    'DelubrumSav Dahu Left-Sided Shockwave 1': '576F',
    // Left circular cleave
    'DelubrumSav Dahu Left-Sided Shockwave 2': '5771',
    // Left circular cleave
    'DelubrumSav Dahu Firebreathe': '5774',
    // Conal breath
    'DelubrumSav Dahu Firebreathe Rotating': '576C',
    // Conal breath, rotating
    'DelubrumSav Dahu Head Down': '5768',
    // line aoe charge from Marchosias add
    'DelubrumSav Dahu Hunter\'s Claw': '5769',
    // circular ground aoe centered on Marchosias add
    'DelubrumSav Dahu Falling Rock': '576E',
    // ground aoe from Reverberating Roar
    'DelubrumSav Dahu Hot Charge': '5773',
    // double charge

    'DelubrumSav Duel Massive Explosion': '579E',
    // bombs being cleared
    'DelubrumSav Duel Vicious Swipe': '5797',
    // circular aoe around boss
    'DelubrumSav Duel Focused Tremor 1': '578F',
    // square floor aoes
    'DelubrumSav Duel Focused Tremor 2': '5791',
    // square floor aoes
    'DelubrumSav Duel Devour': '5789',
    // conal aoe after withering curse
    'DelubrumSav Duel Flailing Strike 1': '578C',
    // initial rotating cleave
    'DelubrumSav Duel Flailing Strike 2': '578D',
    // rotating cleaves

    'DelubrumSav Guard Optimal Offensive Sword': '5819',
    // middle explosion
    'DelubrumSav Guard Optimal Offensive Shield': '581A',
    // middle explosion
    'DelubrumSav Guard Optimal Play Sword': '5816',
    // Optimal Play Sword "get out"
    'DelubrumSav Guard Optimal Play Shield': '5817',
    // Optimal play shield "get in"
    'DelubrumSav Guard Optimal Play Cleave': '5818',
    // Optimal Play cleaves for sword/shield
    'DelubrumSav Guard Unlucky Lot': '581D',
    // Queen's Knight orb explosion
    'DelubrumSav Guard Burn 1': '583D',
    // small fire adds
    'DelubrumSav Guard Burn 2': '583E',
    // large fire adds
    'DelubrumSav Guard Pawn Off': '583A',
    // Queen's Soldier Secrets Revealed tethered clone aoe
    'DelubrumSav Guard Turret\'s Tour Normal 1': '5847',
    // "normal mode" turrets, initial lines 1
    'DelubrumSav Guard Turret\'s Tour Normal 2': '5848',
    // "normal mode" turrets, initial lines 2
    'DelubrumSav Guard Turret\'s Tour Normal 3': '5849',
    // "normal mode" turrets, second lines
    'DelubrumSav Guard Counterplay': '58F5',
    // Hitting aetherial ward directional barrier

    'DelubrumSav Phantom Swirling Miasma 1': '57B8',
    // Initial phantom donut aoe
    'DelubrumSav Phantom Swirling Miasma 2': '57B9',
    // Moving phantom donut aoes
    'DelubrumSav Phantom Creeping Miasma 1': '57B4',
    // Initial phantom line aoe
    'DelubrumSav Phantom Creeping Miasma 2': '57B5',
    // Later phantom line aoe
    'DelubrumSav Phantom Lingering Miasma 1': '57B6',
    // Initial phantom circle aoe
    'DelubrumSav Phantom Lingering Miasma 2': '57B7',
    // Moving phantom circle aoe
    'DelubrumSav Phantom Vile Wave': '57BF',
    // phantom conal aoe

    'DelubrumSav Avowed Fury Of Bozja': '594C',
    // Trinity Avowed Allegiant Arsenal "out"
    'DelubrumSav Avowed Flashvane': '594B',
    // Trinity Avowed Allegiant Arsenal "get behind"
    'DelubrumSav Avowed Infernal Slash': '594A',
    // Trinity Avowed Allegiant Arsenal "get front"
    'DelubrumSav Avowed Flames Of Bozja': '5939',
    // 80% floor aoe before shimmering shot swords
    'DelubrumSav Avowed Gleaming Arrow': '594D',
    // Trinity Avatar line aoes from outside

    'DelubrumSav Lord Whack': '57D0',
    // cleave
    'DelubrumSav Lord Devastating Bolt 1': '57C5',
    // lightning rings
    'DelubrumSav Lord Devastating Bolt 2': '57C6',
    // lightning rings
    'DelubrumSav Lord Electrocution': '57CC',
    // random circle aoes
    'DelubrumSav Lord Rapid Bolts': '57C3',
    // dropped lightning aoes
    'DelubrumSav Lord 1111-Tonze Swing': '57D8',
    // very large "get out" swing
    'DelubrumSav Lord Monk Attack': '55A6',
    // Monk add auto-attack

    'DelubrumSav Queen Northswain\'s Glow': '59F4',
    // expanding lines with explosion intersections
    'DelubrumSav Queen The Means 1': '59E7',
    // The Queen's Beck and Call cross aoe from adds
    'DelubrumSav Queen The Means 2': '59EA',
    // The Queen's Beck and Call cross aoe from adds
    'DelubrumSav Queen The End 1': '59E8',
    // Also The Queen's Beck and Call cross aoe from adds
    'DelubrumSav Queen The End 2': '59E9',
    // Also The Queen's Beck and Call cross aoe from adds
    'DelubrumSav Queen Optimal Offensive Sword': '5A02',
    // middle explosion
    'DelubrumSav Queen Optimal Offensive Shield': '5A03',
    // middle explosion
    'DelubrumSav Queen Judgment Blade Left 1': '59F2',
    // dash across room with left cleave
    'DelubrumSav Queen Judgment Blade Left 2': '5B85',
    // dash across room with left cleave
    'DelubrumSav Queen Judgment Blade Right 1': '59F1',
    // dash across room with right cleave
    'DelubrumSav Queen Judgment Blade Right 2': '5B84',
    // dash across room with right cleave
    'DelubrumSav Queen Pawn Off': '5A1D',
    // Queen's Soldier Secrets Revealed tethered clone aoe
    'DelubrumSav Queen Optimal Play Sword': '59FF',
    // Optimal Play Sword "get out"
    'DelubrumSav Queen Optimal Play Shield': '5A00',
    // Optimal play shield "get in"
    'DelubrumSav Queen Optimal Play Cleave': '5A01',
    // Optimal Play cleaves for sword/shield
    'DelubrumSav Queen Turret\'s Tour Normal 1': '5A28',
    // "normal mode" turrets, initial lines 1
    'DelubrumSav Queen Turret\'s Tour Normal 2': '5A2A',
    // "normal mode" turrets, initial lines 2
    'DelubrumSav Queen Turret\'s Tour Normal 3': '5A29' // "normal mode" turrets, second lines
  },

  damageFail: {
    'DelubrumSav Avowed Heat Shock': '5927',
    // too much heat or failing to regulate temperature
    'DelubrumSav Avowed Cold Shock': '5928',
    // too much cold or failing to regulate temperature
    'DelubrumSav Queen Queen\'s Justice': '59EB',
    // failing to walk the right number of squares
    'DelubrumSav Queen Gunnhildr\'s Blades': '5B22',
    // not being in the chess blue safe square
    'DelubrumSav Queen Unlucky Lot': '55B6' // lightning orb attack
  },

  gainsEffectWarn: {
    'DelubrumSav Seeker Merciful Moon': '262' // "Petrification" from Aetherial Orb lookaway
  },

  shareWarn: {
    'DelubrumSav Seeker Phantom Baleful Onslaught': '5AD6',
    // solo tank cleave
    'DelubrumSav Lord Foe Splitter': '57D7' // tank cleave
  },

  triggers: [{
    // These ability ids can be ordered differently and "hit" people when levitating.
    id: 'DelubrumSav Guard Lots Cast',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['5827', '5828', '5B6C', '5B6D', '5BB6', '5BB7', '5B88', '5B89'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (_data, matches) => matches.flags.endsWith('03'),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    id: 'DelubrumSav Golem Compaction',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '5746'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        text: `${matches.source}: ${matches.ability}`
      };
    }
  }, {
    id: 'DelubrumSav Slime Sanguine Fusion',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '554D'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        text: `${matches.source}: ${matches.ability}`
      };
    }
  }]
};
/* harmony default export */ const delubrum_reginae_savage = (delubrum_reginae_savage_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e10n.ts

const e10n_triggerSet = {
  zoneId: zone_id/* default.EdensPromiseLitany */.Z.EdensPromiseLitany,
  damageWarn: {
    'E10N Forward Implosion': '56B4',
    // howl boss implosion
    'E10N Forward Shadow Implosion': '56B5',
    // howl shadow implosion
    'E10N Backward Implosion': '56B7',
    // tail boss implosion
    'E10N Backward Shadow Implosion': '56B8',
    // tail shadow implosion
    'E10N Barbs Of Agony 1': '56D9',
    // Shadow Warrior 3 dog room cleave
    'E10N Barbs Of Agony 2': '5B26',
    // Shadow Warrior 3 dog room cleave
    'E10N Cloak Of Shadows': '5B11',
    // non-squiggly line explosions
    'E10N Throne Of Shadow': '56C7',
    // standing up get out
    'E10N Right Giga Slash': '56AE',
    // boss right giga slash
    'E10N Right Shadow Slash': '56AF',
    // giga slash from shadow
    'E10N Left Giga Slash': '56B1',
    // boss left giga slash
    'E10N Left Shadow Slash': '56BD',
    // giga slash from shadow
    'E10N Shadowy Eruption': '56E1' // baited ground aoe markers paired with barbs
  },

  shareWarn: {
    'E10N Shadow\'s Edge': '56DB' // Tankbuster single target followup
  }
};

/* harmony default export */ const e10n = (e10n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e10s.ts



// TODO: hitting shadow of the hero with abilities can cause you to take damage, list those?
//       e.g. picking up your first pitch bog puddle will cause you to die to the damage
//       your shadow takes from Deepshadow Nova or Distant Scream.
// TODO: 573B Blighting Blitz issues during limit cut numbers
const e10s_triggerSet = {
  zoneId: zone_id/* default.EdensPromiseLitanySavage */.Z.EdensPromiseLitanySavage,
  damageWarn: {
    'E10S Implosion Single 1': '56F2',
    // single tail up shadow implosion
    'E10S Implosion Single 2': '56EF',
    // single howl shadow implosion
    // FIXME: this id is the same as Implosion Single 2 above, is it correct or one of them incorrect?
    // 'E10S Implosion Quadruple 1': '56EF', // quadruple set of shadow implosions
    // FIXME: this id is the same as Implosion Single 1 above, is it correct or one of them incorrect?
    // 'E10S Implosion Quadruple 2': '56F2', // quadruple set of shadow implosions
    'E10S Giga Slash Single 1': '56EC',
    // Giga slash single from shadow
    'E10S Giga Slash Single 2': '56ED',
    // Giga slash single from shadow
    'E10S Giga Slash Box 1': '5709',
    // Giga slash box from four ground shadows
    'E10S Giga Slash Box 2': '570D',
    // Giga slash box from four ground shadows
    // FIXME: this id is the same as Giga Slash Single 1 above, is it correct or one of them incorrect?
    // 'E10S Giga Slash Quadruple 1': '56EC', // quadruple set of giga slash cleaves
    'E10S Giga Slash Quadruple 2': '56E9',
    // quadruple set of giga slash cleaves
    'E10S Cloak Of Shadows 1': '5B13',
    // initial non-squiggly line explosions
    'E10S Cloak Of Shadows 2': '5B14',
    // second squiggly line explosions
    'E10S Throne Of Shadow': '5717',
    // standing up get out
    'E10S Shadowy Eruption': '5738' // baited ground aoe during amplifier
  },

  damageFail: {
    'E10S Swath Of Silence 1': '571A',
    // Shadow clone cleave (too close)
    'E10S Swath Of Silence 2': '5BBF' // Shadow clone cleave (timed)
  },

  shareWarn: {
    'E10S Shadefire': '5732',
    // purple tank umbral orbs
    'E10S Pitch Bog': '5722' // marker spread that drops a shadow puddle
  },

  shareFail: {
    'E10S Shadow\'s Edge': '5725' // Tankbuster single target followup
  },

  triggers: [{
    id: 'E10S Damage Down Orbs',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      source: 'Flameshadow',
      effectId: '82C'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'damage',
        blame: matches.target,
        reportId: matches.targetId,
        text: `${matches.effect} (partial stack)`
      };
    }
  }, {
    id: 'E10S Damage Down Boss',
    type: 'GainsEffect',
    // Shackles being messed up appear to just give the Damage Down, with nothing else.
    // Messing up towers is the Thrice-Come Ruin effect (9E2), but also Damage Down.
    // TODO: some of these will be duplicated with others, like `E10S Throne Of Shadow`.
    // Maybe it'd be nice to figure out how to put the damage marker on that?
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      source: 'Shadowkeeper',
      effectId: '82C'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'damage',
        blame: matches.target,
        reportId: matches.targetId,
        text: `${matches.effect}`
      };
    }
  }, {
    // Shadow Warrior 4 dog room cleave
    // This can be mitigated by the whole group, so add a damage condition.
    id: 'E10S Barbs Of Agony',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['572A', '5B27'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }],
  timelineReplace: [{
    'locale': 'de',
    'replaceSync': {
      'Flameshadow': 'Schattenflamme',
      'Shadowkeeper': 'Schattenkönig'
    }
  }, {
    'locale': 'fr',
    'replaceSync': {
      'Flameshadow': 'Flamme ombrale',
      'Shadowkeeper': 'Roi De L\'Ombre'
    }
  }, {
    'locale': 'ja',
    'replaceSync': {
      'Flameshadow': 'シャドウフレイム',
      'Shadowkeeper': '影の王'
    }
  }, {
    'locale': 'cn',
    'replaceSync': {
      'Flameshadow': '影烈火',
      'Shadowkeeper': '影之王'
    }
  }]
};
/* harmony default export */ const e10s = (e10s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e11n.ts


const e11n_triggerSet = {
  zoneId: zone_id/* default.EdensPromiseAnamorphosis */.Z.EdensPromiseAnamorphosis,
  damageWarn: {
    'E11N Burnt Strike Lightning': '562E',
    // Line cleave
    'E11N Burnt Strike Fire': '562C',
    // Line cleave
    'E11N Burnt Strike Holy': '5630',
    // Line cleave
    'E11N Burnout': '562F',
    // Burnt Strike lightning expansion
    'E11N Shining Blade': '5631',
    // Baited explosion
    'E11N Halo Of Flame Brightfire': '563B',
    // Red circle intermission explosion
    'E11N Halo Of Levin Brightfire': '563C',
    // Blue circle intermission explosion
    'E11N Resounding Crack': '564D',
    // Demi-Gukumatz 270 degree frontal cleave
    'E11N Image Burnt Strike Lightning': '5645',
    // Fate Breaker's Image line cleave
    'E11N Image Burnt Strike Fire': '5643',
    // Fate Breaker's Image line cleave
    'E11N Image Burnout': '5646' // Fate Breaker's Image lightning expansion
  },

  damageFail: {
    'E11N Blasting Zone': '563E' // Prismatic Deception charges
  },

  shareWarn: {
    'E11N Burn Mark': '564F' // Powder Mark debuff explosion
  },

  triggers: [{
    id: 'E11N Blastburn Knocked Off',
    type: 'Ability',
    // 562D = Burnt Strike fire followup during most of the fight
    // 5644 = same thing, but from Fatebreaker's Image
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['562D', '5644']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const e11n = (e11n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e11s.ts


// 565A/568D Sinsmoke Bound Of Faith share
// 565E/5699 Bowshock hits target of 565D (twice) and two others
const e11s_triggerSet = {
  zoneId: zone_id/* default.EdensPromiseAnamorphosisSavage */.Z.EdensPromiseAnamorphosisSavage,
  damageWarn: {
    'E11S Burnt Strike Fire': '5652',
    // Line cleave
    'E11S Burnt Strike Lightning': '5654',
    // Line cleave
    'E11S Burnt Strike Holy': '5656',
    // Line cleave
    'E11S Shining Blade': '5657',
    // Baited explosion
    'E11S Burnt Strike Cycle Fire': '568E',
    // Line cleave during Cycle
    'E11S Burnt Strike Cycle Lightning': '5695',
    // Line cleave during Cycle
    'E11S Burnt Strike Cycle Holy': '569D',
    // Line cleave during Cycle
    'E11S Shining Blade Cycle': '569E',
    // Baited explosion during Cycle
    'E11S Halo Of Flame Brightfire': '566D',
    // Red circle intermission explosion
    'E11S Halo Of Levin Brightfire': '566C',
    // Blue circle intermission explosion
    'E11S Portal Of Flame Bright Pulse': '5671',
    // Red card intermission explosion
    'E11S Portal Of Levin Bright Pulse': '5670',
    // Blue card intermission explosion
    'E11S Resonant Winds': '5689',
    // Demi-Gukumatz "get in"
    'E11S Resounding Crack': '5688',
    // Demi-Gukumatz 270 degree frontal cleave
    'E11S Image Burnt Strike Lightning': '567B',
    // Fate Breaker's Image line cleave
    'E11S Image Burnout': '567C',
    // Fate Breaker's Image lightning expansion
    'E11S Image Burnt Strike Fire': '5679',
    // Fate Breaker's Image line cleave
    // FIXME: this id is the same as Image Burnt Strike Lightning above, is it correct or one of them incorrect?
    // 'E11S Image Burnt Strike Holy': '567B', // Fate Breaker's Image line cleave
    'E11S Image Shining Blade': '567E' // Fate Breaker's Image baited explosion
  },

  damageFail: {
    'E11S Burnout': '5655',
    // Burnt Strike lightning expansion
    'E11S Burnout Cycle': '5696',
    // Burnt Strike lightning expansion
    'E11S Blasting Zone': '5674' // Prismatic Deception charges
  },

  shareWarn: {
    'E11S Elemental Break': '5664',
    // Elemental Break protean
    'E11S Elemental Break Cycle': '568C',
    // Elemental Break protean during Cycle
    'E11S Sinsmite': '5667',
    // Lightning Elemental Break spread
    'E11S Sinsmite Cycle': '5694' // Lightning Elemental Break spread during Cycle
  },

  shareFail: {
    'E11S Burn Mark': '56A3',
    // Powder Mark debuff explosion
    'E11S Sinsight 1': '5661',
    // Holy Bound Of Faith tether
    'E11S Sinsight 2': '5BC7',
    // Holy Bound Of Faith tether from Fatebreaker's Image
    'E11S Sinsight 3': '56A0' // Holy Bound Of Faith tether during Cycle
  },

  soloFail: {
    'E11S Holy Sinsight Group Share': '5669'
  },
  triggers: [{
    id: 'E11S Blastburn Knocked Off',
    type: 'Ability',
    // 5653 = Burnt Strike fire followup during most of the fight
    // 567A = same thing, but from Fatebreaker's Image
    // 568F = same thing, but during Cycle of Faith
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['5653', '567A', '568F']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const e11s = (e11s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e12n.ts

const e12n_triggerSet = {
  zoneId: zone_id/* default.EdensPromiseEternity */.Z.EdensPromiseEternity,
  damageWarn: {
    'E12N Judgment Jolt Single': '585F',
    // Ramuh get out cast
    'E12N Judgment Jolt': '4E30',
    // Ramuh get out cast
    'E12N Temporary Current Single': '585C',
    // Levi get under cast
    'E12N Temporary Current': '4E2D',
    // Levi get under cast
    'E12N Conflag Strike Single': '585D',
    // Ifrit get sides cast
    'E12N Conflag Strike': '4E2E',
    // Ifrit get sides cast
    'E12N Ferostorm Single': '585E',
    // Garuda get intercardinals cast
    'E12N Ferostorm': '4E2F',
    // Garuda get intercardinals cast
    'E12N Rapturous Reach 1': '5878',
    // Haircut
    'E12N Rapturous Reach 2': '5877',
    // Haircut
    'E12N Bomb Explosion': '586D',
    // Small bomb explosion
    'E12N Titanic Bomb Explosion': '586F' // Large bomb explosion
  },

  shareWarn: {
    'E12N Earthshaker': '5885',
    // Earthshaker on first platform
    'E12N Promise Frigid Stone 1': '5867',
    // Shiva spread with sliding
    'E12N Promise Frigid Stone 2': '5869' // Shiva spread with Rapturous Reach
  }
};

/* harmony default export */ const e12n = (e12n_triggerSet);
// EXTERNAL MODULE: ./resources/not_reached.ts
var not_reached = __webpack_require__(62);
// EXTERNAL MODULE: ./resources/outputs.ts
var outputs = __webpack_require__(81);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e12s.ts





// TODO: add separate damageWarn-esque icon for damage downs?
// TODO: 58A6 Under The Weight / 58B2 Classical Sculpture missing somebody in party warning?
// TODO: 58CA Dark Water III / 58C5 Shell Crusher should hit everyone in party
// TODO: Dark Aero III 58D4 should not be a share except on advanced relativity for double aero.
// (for gains effect, single aero = ~23 seconds, double aero = ~31 seconds duration)

// Due to changes introduced in patch 5.2, overhead markers now have a random offset
// added to their ID. This offset currently appears to be set per instance, so
// we can determine what it is from the first overhead marker we see.
// The first 1B marker in the encounter is the formless tankbuster, ID 004F.
const firstHeadmarker = parseInt('00DA', 16);
const getHeadmarkerId = (data, matches) => {
  // If we naively just check !data.decOffset and leave it, it breaks if the first marker is 00DA.
  // (This makes the offset 0, and !0 is true.)
  if (typeof data.decOffset === 'undefined') data.decOffset = parseInt(matches.id, 16) - firstHeadmarker;
  // The leading zeroes are stripped when converting back to string, so we re-add them here.
  // Fortunately, we don't have to worry about whether or not this is robust,
  // since we know all the IDs that will be present in the encounter.
  return (parseInt(matches.id, 16) - data.decOffset).toString(16).toUpperCase().padStart(4, '0');
};
const e12s_triggerSet = {
  zoneId: zone_id/* default.EdensPromiseEternitySavage */.Z.EdensPromiseEternitySavage,
  damageWarn: {
    'E12S Promise Rapturous Reach Left': '58AD',
    // Haircut with left safe side
    'E12S Promise Rapturous Reach Right': '58AE',
    // Haircut with right safe side
    'E12S Promise Temporary Current': '4E44',
    // Levi get under cast (damage down)
    'E12S Promise Conflag Strike': '4E45',
    // Ifrit get sides cast (damage down)
    'E12S Promise Ferostorm': '4E46',
    // Garuda get intercardinals cast (damage down)
    'E12S Promise Judgment Jolt': '4E47',
    // Ramuh get out cast (damage down)
    'E12S Promise Shatter': '589C',
    // Ice Pillar explosion if tether not gotten
    'E12S Promise Impact': '58A1',
    // Titan bomb drop
    'E12S Oracle Dark Blizzard III': '58D3',
    // Relativity donut mechanic
    'E12S Oracle Apocalypse': '58E6' // Light up circle explosions (damage down)
  },

  damageFail: {
    'E12S Oracle Maelstrom': '58DA' // Advanced Relativity traffic light aoe
  },

  gainsEffectFail: {
    'E12S Oracle Doom': '9D4' // Relativity punishment for multiple mistakes
  },

  shareWarn: {
    'E12S Promise Frigid Stone': '589E',
    // Shiva spread
    'E12S Oracle Darkest Dance': '4E33',
    // Farthest target bait + jump before knockback
    'E12S Oracle Dark Current': '58D8',
    // Baited traffic light lasers
    'E12S Oracle Spirit Taker': '58C6',
    // Random jump spread mechanic after Shell Crusher
    'E12S Oracle Somber Dance 1': '58BF',
    // Farthest target bait for Dual Apocalypse
    'E12S Oracle Somber Dance 2': '58C0' // Second somber dance jump
  },

  shareFail: {
    'E12S Promise Weight Of The World': '58A5',
    // Titan bomb blue marker
    'E12S Promise Pulse Of The Land': '58A3',
    // Titan bomb yellow marker
    'E12S Oracle Dark Eruption 1': '58CE',
    // Initial warmup spread mechanic
    'E12S Oracle Dark Eruption 2': '58CD',
    // Relativity spread mechanic
    'E12S Oracle Black Halo': '58C7' // Tankbuster cleave
  },

  soloWarn: {
    'E12S Promise Force Of The Land': '58A4'
  },
  triggers: [{
    // Big circle ground aoes during Shiva junction.
    // This can be shielded through as long as that person doesn't stack.
    id: 'E12S Icicle Impact',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4E5A',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'E12S Headmarker',
    type: 'HeadMarker',
    netRegex: netregexes/* default.headMarker */.ZP.headMarker({}),
    run: (data, matches) => {
      const id = getHeadmarkerId(data, matches);
      const firstLaserMarker = '0091';
      const lastLaserMarker = '0098';
      if (id >= firstLaserMarker && id <= lastLaserMarker) {
        // ids are sequential: #1 square, #2 square, #3 square, #4 square, #1 triangle etc
        const decOffset = parseInt(id, 16) - parseInt(firstLaserMarker, 16);

        // decOffset is 0-7, so map 0-3 to 1-4 and 4-7 to 1-4.
        data.laserNameToNum ??= {};
        data.laserNameToNum[matches.target] = decOffset % 4 + 1;
      }
    }
  }, {
    // These sculptures are added at the start of the fight, so we need to check where they
    // use the "Classical Sculpture" ability and end up on the arena for real.
    id: 'E12S Promise Chiseled Sculpture Classical Sculpture',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      source: 'Chiseled Sculpture',
      id: '58B2'
    }),
    run: (data, matches) => {
      // This will run per person that gets hit by the same sculpture, but that's fine.
      // Record the y position of each sculpture so we can use it for better text later.
      data.sculptureYPositions ??= {};
      data.sculptureYPositions[matches.sourceId.toUpperCase()] = parseFloat(matches.y);
    }
  }, {
    // The source of the tether is the player, the target is the sculpture.
    id: 'E12S Promise Chiseled Sculpture Tether',
    type: 'Tether',
    netRegex: netregexes/* default.tether */.ZP.tether({
      target: 'Chiseled Sculpture',
      id: '0011'
    }),
    run: (data, matches) => {
      data.sculptureTetherNameToId ??= {};
      data.sculptureTetherNameToId[matches.source] = matches.targetId.toUpperCase();
    }
  }, {
    id: 'E12S Promise Blade Of Flame Counter',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      source: 'Chiseled Sculpture',
      id: '58B3'
    }),
    delaySeconds: 1,
    suppressSeconds: 1,
    run: data => {
      data.bladeOfFlameCount = data.bladeOfFlameCount || 0;
      data.bladeOfFlameCount++;
    }
  }, {
    // This is the Chiseled Sculpture laser with the limit cut dots.
    id: 'E12S Promise Blade Of Flame',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      type: '22',
      source: 'Chiseled Sculpture',
      id: '58B3'
    }),
    mistake: (data, matches) => {
      if (!data.laserNameToNum || !data.sculptureTetherNameToId || !data.sculptureYPositions) return;

      // Find the person who has this laser number and is tethered to this statue.
      const number = (data.bladeOfFlameCount || 0) + 1;
      const sourceId = matches.sourceId.toUpperCase();
      const names = Object.keys(data.laserNameToNum);
      const withNum = names.filter(name => data.laserNameToNum?.[name] === number);
      const owners = withNum.filter(name => data.sculptureTetherNameToId?.[name] === sourceId);

      // if some logic error, just abort.
      if (owners.length !== 1) return;

      // The owner hitting themselves isn't a mistake...technically.
      if (owners[0] === matches.target) return;

      // Now try to figure out which statue is which.
      // People can put these wherever.  They could go sideways, or diagonal, or whatever.
      // It seems mooooost people put these north / south (on the south edge of the arena).
      // Let's say a minimum of 2 yalms apart in the y direction to consider them "north/south".
      const minimumYalmsForStatues = 2;
      let isStatuePositionKnown = false;
      let isStatueNorth = false;
      const sculptureIds = Object.keys(data.sculptureYPositions);
      if (sculptureIds.length === 2 && sculptureIds.includes(sourceId)) {
        const otherId = sculptureIds[0] === sourceId ? sculptureIds[1] : sculptureIds[0];
        const sourceY = data.sculptureYPositions[sourceId];
        const otherY = data.sculptureYPositions[otherId ?? ''];
        if (sourceY === undefined || otherY === undefined || otherId === undefined) throw new not_reached/* UnreachableCode */.$();
        const yDiff = Math.abs(sourceY - otherY);
        if (yDiff > minimumYalmsForStatues) {
          isStatuePositionKnown = true;
          isStatueNorth = sourceY < otherY;
        }
      }
      const owner = owners[0];
      const ownerNick = data.party.member(owner).toString();
      let text = {
        en: `${matches.ability} (from ${ownerNick}, #${number})`,
        de: `${matches.ability} (von ${ownerNick}, #${number})`,
        fr: `${matches.ability} (de ${ownerNick}, #${number})`,
        ja: `${matches.ability} (${ownerNick}から、#${number})`,
        cn: `${matches.ability} (来自${ownerNick}，#${number})`,
        ko: `${matches.ability} (대상자 "${ownerNick}", ${number}번)`,
        tc: `${matches.ability} (來自${ownerNick}，#${number})`
      };
      if (isStatuePositionKnown && isStatueNorth) {
        text = {
          en: `${matches.ability} (from ${ownerNick}, #${number} north)`,
          de: `${matches.ability} (von ${ownerNick}, #${number} norden)`,
          fr: `${matches.ability} (de ${ownerNick}, #${number} nord)`,
          ja: `${matches.ability} (北の${ownerNick}から、#${number})`,
          cn: `${matches.ability} (来自北方${ownerNick}，#${number})`,
          ko: `${matches.ability} (대상자 "${ownerNick}", ${number}번 북쪽)`,
          tc: `${matches.ability} (來自北方${ownerNick}，#${number})`
        };
      } else if (isStatuePositionKnown && !isStatueNorth) {
        text = {
          en: `${matches.ability} (from ${ownerNick}, #${number} south)`,
          de: `${matches.ability} (von ${ownerNick}, #${number} Süden)`,
          fr: `${matches.ability} (de ${ownerNick}, #${number} sud)`,
          ja: `${matches.ability} (南の${ownerNick}から、#${number})`,
          cn: `${matches.ability} (来自南方${ownerNick}，#${number})`,
          ko: `${matches.ability} (대상자 "${ownerNick}", ${number}번 남쪽)`,
          tc: `${matches.ability} (來自南方${ownerNick}，#${number})`
        };
      }
      return {
        type: 'fail',
        name: matches.target,
        blame: owner,
        reportId: matches.targetId,
        text: text
      };
    }
  }, {
    id: 'E12S Promise Ice Pillar Tracker',
    type: 'Tether',
    netRegex: netregexes/* default.tether */.ZP.tether({
      source: 'Ice Pillar',
      id: ['0001', '0039']
    }),
    run: (data, matches) => {
      data.pillarIdToOwner ??= {};
      data.pillarIdToOwner[matches.sourceId] = matches.target;
    }
  }, {
    id: 'E12S Promise Ice Pillar Mistake',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      source: 'Ice Pillar',
      id: '589B'
    }),
    condition: (data, matches) => {
      if (!data.pillarIdToOwner) return false;
      return matches.target !== data.pillarIdToOwner[matches.sourceId];
    },
    mistake: (data, matches) => {
      const pillarOwner = data.party.member(data.pillarIdToOwner?.[matches.sourceId]).toString();
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: `${matches.ability} (from ${pillarOwner})`,
          de: `${matches.ability} (von ${pillarOwner})`,
          fr: `${matches.ability} (de ${pillarOwner})`,
          ja: `${matches.ability} (${pillarOwner}から)`,
          cn: `${matches.ability} (来自${pillarOwner})`,
          ko: `${matches.ability} (대상자 "${pillarOwner}")`,
          tc: `${matches.ability} (來自${pillarOwner})`
        }
      };
    }
  }, {
    id: 'E12S Promise Gain Fire Resistance Down II',
    type: 'GainsEffect',
    // The Beastly Sculpture gives a 3 second debuff, the Regal Sculpture gives a 14s one.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '832'
    }),
    run: (data, matches) => {
      data.fire ??= {};
      data.fire[matches.target] = true;
    }
  }, {
    id: 'E12S Promise Lose Fire Resistance Down II',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '832'
    }),
    run: (data, matches) => {
      data.fire ??= {};
      data.fire[matches.target] = false;
    }
  }, {
    id: 'E12S Promise Small Lion Tether',
    type: 'Tether',
    netRegex: netregexes/* default.tether */.ZP.tether({
      source: 'Beastly Sculpture',
      id: '0011'
    }),
    run: (data, matches) => {
      data.smallLionIdToOwner ??= {};
      data.smallLionIdToOwner[matches.sourceId.toUpperCase()] = matches.target;
      data.smallLionOwners ??= [];
      data.smallLionOwners.push(matches.target);
    }
  }, {
    id: 'E12S Promise Small Lion Lionsblaze',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      source: 'Beastly Sculpture',
      id: '58B9'
    }),
    mistake: (data, matches) => {
      // Folks baiting the big lion second can take the first small lion hit,
      // so it's not sufficient to check only the owner.
      if (!data.smallLionOwners) return;
      const owner = data.smallLionIdToOwner?.[matches.sourceId.toUpperCase()];
      if (owner === undefined) return;
      if (matches.target === owner) return;

      // If the target also has a small lion tether, that is always a mistake.
      // Otherwise, it's only a mistake if the target has a fire debuff.
      const hasSmallLion = data.smallLionOwners.includes(matches.target);
      const hasFireDebuff = data.fire && data.fire[matches.target];
      if (hasSmallLion || hasFireDebuff) {
        const ownerNick = data.party.member(owner).toString();
        const centerY = -75;
        const x = parseFloat(matches.x);
        const y = parseFloat(matches.y);
        let dirObj = null;
        if (y < centerY) {
          if (x > 0) dirObj = outputs/* default.dirNE */.Z.dirNE;else dirObj = outputs/* default.dirNW */.Z.dirNW;
        } else {
          if (x > 0) dirObj = outputs/* default.dirSE */.Z.dirSE;else dirObj = outputs/* default.dirSW */.Z.dirSW;
        }
        return {
          type: 'fail',
          blame: owner,
          name: matches.target,
          reportId: matches.targetId,
          text: {
            en: `${matches.ability} (from ${ownerNick}, ${dirObj['en']})`,
            de: `${matches.ability} (von ${ownerNick}, ${dirObj['de']})`,
            fr: `${matches.ability} (de ${ownerNick}, ${dirObj['fr']})`,
            ja: `${matches.ability} (${ownerNick}から, ${dirObj['ja']})`,
            cn: `${matches.ability} (来自${ownerNick}, ${dirObj['cn']}`,
            ko: `${matches.ability} (대상자 "${ownerNick}", ${dirObj['ko']})`,
            tc: `${matches.ability} (來自${ownerNick}, ${dirObj['tc']})`
          }
        };
      }
    }
  }, {
    id: 'E12S Promise North Big Lion',
    type: 'AddedCombatant',
    netRegex: netregexes/* default.addedCombatant */.ZP.addedCombatant({
      name: 'Regal Sculpture'
    }),
    run: (data, matches) => {
      const y = parseFloat(matches.y);
      const centerY = -75;
      if (y < centerY) data.northBigLion = matches.id.toUpperCase();
    }
  }, {
    id: 'E12S Promise Big Lion Kingsblaze',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      source: 'Regal Sculpture',
      id: '4F9E'
    }),
    mistake: (data, matches) => {
      const singleTarget = matches.type === '21';
      const hasFireDebuff = data.fire && data.fire[matches.target];

      // Success if only one person takes it and they have no fire debuff.
      if (singleTarget && !hasFireDebuff) return;
      const northBigLion = {
        en: 'north big lion',
        de: 'Nordem, großer Löwe',
        fr: 'Grand lion du nord',
        ja: '大ライオン(北)',
        cn: '北方大狮子',
        ko: '북쪽 큰 사자',
        tc: '北方大獅子'
      };
      const southBigLion = {
        en: 'south big lion',
        de: 'Süden, großer Löwe',
        fr: 'Grand lion du sud',
        ja: '大ライオン(南)',
        cn: '南方大狮子',
        ko: '남쪽 큰 사자',
        tc: '南方大獅子'
      };
      const shared = {
        en: 'shared',
        de: 'geteilt',
        fr: 'Partagé(e)',
        ja: '重ねた',
        cn: '重叠',
        ko: '같이 맞음',
        tc: '重疊'
      };
      const fireDebuff = {
        en: 'had fire',
        de: 'hatte Feuer',
        fr: 'A eu(e) le feu',
        ja: '炎付き',
        cn: '火Debuff',
        ko: '화염 디버프 받음',
        tc: '火Debuff'
      };
      const labels = [];
      const lang = data.options.ParserLanguage;
      if (data.northBigLion !== undefined) {
        if (data.northBigLion === matches.sourceId) labels.push(northBigLion[lang] ?? northBigLion['en']);else labels.push(southBigLion[lang] ?? southBigLion['en']);
      }
      if (!singleTarget) labels.push(shared[lang] ?? shared['en']);
      if (hasFireDebuff) labels.push(fireDebuff[lang] ?? fireDebuff['en']);
      return {
        type: 'fail',
        name: matches.target,
        reportId: matches.targetId,
        text: `${matches.ability} (${labels.join(', ')})`
      };
    }
  }, {
    id: 'E12S Knocked Off',
    type: 'Ability',
    // 589A = Ice Pillar (promise shiva phase)
    // 58B6 = Palm Of Temperance (promise statue hand)
    // 58B7 = Laser Eye (promise lion phase)
    // 58C1 = Darkest Dance (oracle tank jump + knockback in beginning and triple apoc)
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['589A', '58B6', '58B7', '58C1']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    id: 'E12S Oracle Shadoweye',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '58D2',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }],
  timelineReplace: [{
    'locale': 'de',
    'replaceSync': {
      'Beastly Sculpture': 'Abbild Eines Löwen',
      'Regal Sculpture': 'Abbild eines großen Löwen'
    }
  }, {
    'locale': 'fr',
    'replaceSync': {
      'Beastly Sculpture': 'Création Léonine',
      'Regal Sculpture': 'création léonine royale'
    }
  }, {
    'locale': 'ja',
    'replaceSync': {
      'Beastly Sculpture': '創られた獅子',
      'Regal Sculpture': '創られた獅子王'
    }
  }, {
    'locale': 'cn',
    'replaceSync': {
      'Beastly Sculpture': '被创造的狮子',
      'Regal Sculpture': '被创造的狮子王'
    }
  }]
};
/* harmony default export */ const e12s = (e12s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e1n.ts

const e1n_triggerSet = {
  zoneId: zone_id/* default.EdensGateResurrection */.Z.EdensGateResurrection,
  damageWarn: {
    'E1N Eden\'s Thunder III': '44ED',
    'E1N Eden\'s Blizzard III': '44EC',
    'E1N Pure Beam': '3D9E',
    'E1N Paradise Lost': '3DA0'
  },
  damageFail: {
    'E1N Eden\'s Flare': '3D97',
    'E1N Pure Light': '3DA3'
  },
  shareFail: {
    'E1N Fire III': '44EB',
    'E1N Vice Of Vanity': '44E7',
    // tank lasers
    'E1N Vice Of Apathy': '44E8' // dps puddles
  }
};

/* harmony default export */ const e1n = (e1n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e1s.ts

// TODO: failing to interrupt Mana Boost (3D8D)
// TODO: failing to pass healer debuff?
// TODO: what happens if you don't kill a meteor during four orbs?
const e1s_triggerSet = {
  zoneId: zone_id/* default.EdensGateResurrectionSavage */.Z.EdensGateResurrectionSavage,
  damageWarn: {
    'E1S Eden\'s Thunder III': '44F7',
    'E1S Eden\'s Blizzard III': '44F6',
    'E1S Eden\'s Regained Blizzard III': '44FA',
    'E1S Pure Beam Trident 1': '3D83',
    'E1S Pure Beam Trident 2': '3D84',
    'E1S Paradise Lost': '3D87'
  },
  damageFail: {
    'E1S Eden\'s Flare': '3D73',
    'E1S Pure Light': '3D8A'
  },
  shareFail: {
    'E1S Fire/Thunder III': '44FB',
    'E1S Pure Beam Single': '3D81',
    'E1S Vice Of Vanity': '44F1',
    // tank lasers
    'E1S Vice of Apathy': '44F2' // dps puddles
  }
};

/* harmony default export */ const e1s = (e1s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e2n.ts



// TODO: shadoweye failure (top line fail, bottom line success, effect there too)
// [16:17:35.966] 16:400110FE:Voidwalker:40B7:Shadoweye:10612345:Tini Poutini:F:10000:100190F:
// [16:17:35.966] 16:400110FE:Voidwalker:40B7:Shadoweye:1067890A:Potato Chippy:1:0:1C:8000:
// gains the effect of Petrification from Voidwalker for 10.00 Seconds.
// TODO: puddle failure?
const e2n_triggerSet = {
  zoneId: zone_id/* default.EdensGateDescent */.Z.EdensGateDescent,
  damageWarn: {
    'E2N Doomvoid Slicer': '3E3C',
    'E2N Doomvoid Guillotine': '3E3B'
  },
  triggers: [{
    id: 'E2N Nyx',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '3E3D',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Booped',
          de: 'Nyx berührt',
          fr: 'Malus de dégâts',
          ja: '雑魚に当たる',
          cn: '吃头了',
          ko: '닉스',
          tc: '吃頭了'
        }
      };
    }
  }]
};
/* harmony default export */ const e2n = (e2n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e2s.ts



// TODO: shadoweye failure
// TODO: Empty Hate (3E59/3E5A) hits everybody, so hard to tell about knockback
// TODO: maybe mark hell wind people who got clipped by stack?
// TODO: missing puddles?
// TODO: missing light/dark circle stack
const e2s_triggerSet = {
  zoneId: zone_id/* default.EdensGateDescentSavage */.Z.EdensGateDescentSavage,
  damageWarn: {
    'E2S Doomvoid Slicer': '3E50',
    'E2S Empty Rage': '3E6C',
    'E2S Doomvoid Guillotine': '3E4F'
  },
  shareWarn: {
    'E2S Doomvoid Cleaver': '3E64'
  },
  triggers: [{
    id: 'E2S Shadoweye',
    type: 'GainsEffect',
    // Stone Curse
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '589'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'E2S Nyx',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '3E51',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Booped',
          de: 'Nyx berührt',
          fr: 'Malus de dégâts',
          ja: '雑魚に当たる',
          cn: '吃头了',
          ko: '닉스',
          tc: '吃頭了'
        }
      };
    }
  }]
};
/* harmony default export */ const e2s = (e2s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e3n.ts

const e3n_triggerSet = {
  zoneId: zone_id/* default.EdensGateInundation */.Z.EdensGateInundation,
  damageWarn: {
    'E3N Monster Wave 1': '3FCA',
    'E3N Monster Wave 2': '3FE9',
    'E3N Maelstrom': '3FD9',
    'E3N Swirling Tsunami': '3FD5'
  },
  damageFail: {
    'E3N Temporary Current 1': '3FCE',
    'E3N Temporary Current 2': '3FCD',
    'E3N Spinning Dive': '3FDB'
  },
  shareFail: {
    'E3N Rip Current': '3FC7'
  }
};
/* harmony default export */ const e3n = (e3n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e3s.ts

// TODO: Scouring Tsunami (3CE0) on somebody other than target
// TODO: Sweeping Tsunami (3FF5) on somebody other than tanks
// TODO: Rip Current (3FE0, 3FE1) on somebody other than target/tanks
// TODO: Boiled Alive (4006) is failing puddles???
// TODO: failing to cleanse Splashing Waters
// TODO: does getting hit by undersea quake cause an ability?
const e3s_triggerSet = {
  zoneId: zone_id/* default.EdensGateInundationSavage */.Z.EdensGateInundationSavage,
  damageWarn: {
    'E3S Monster Wave 1': '3FE5',
    'E3S Monster Wave 2': '3FE9',
    'E3S Maelstrom': '3FFB',
    'E3S Swirling Tsunami': '3FF4'
  },
  damageFail: {
    'E3S Temporary Current 1': '3FEA',
    'E3S Temporary Current 2': '3FEB',
    'E3S Temporary Current 3': '3FEC',
    'E3S Temporary Current 4': '3FED',
    'E3S Spinning Dive': '3FFD'
  }
};
/* harmony default export */ const e3s = (e3s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e4n.ts

const e4n_triggerSet = {
  zoneId: zone_id/* default.EdensGateSepulture */.Z.EdensGateSepulture,
  damageWarn: {
    'E4N Weight of the Land': '40EB',
    'E4N Evil Earth': '40EF',
    'E4N Aftershock 1': '41B4',
    'E4N Aftershock 2': '40F0',
    'E4N Explosion 1': '40ED',
    'E4N Explosion 2': '40F5',
    'E4N Landslide': '411B',
    'E4N Rightward Landslide': '4100',
    'E4N Leftward Landslide': '40FF',
    'E4N Massive Landslide': '40FC',
    'E4N Seismic Wave': '40F3',
    'E4N Fault Line': '4101'
  }
};
/* harmony default export */ const e4n = (e4n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e4s.ts



// TODO: could track people get hitting by markers they shouldn't
// TODO: could track non-tanks getting hit by tankbusters, megaliths
// TODO: could track non-target getting hit by tankbuster
const e4s_triggerSet = {
  zoneId: zone_id/* default.EdensGateSepultureSavage */.Z.EdensGateSepultureSavage,
  damageWarn: {
    'E4S Weight of the Land': '4108',
    'E4S Evil Earth': '410C',
    'E4S Aftershock 1': '41B5',
    'E4S Aftershock 2': '410D',
    'E4S Explosion': '410A',
    'E4S Landslide': '411B',
    'E4S Rightward Landslide': '411D',
    'E4S Leftward Landslide': '411C',
    'E4S Massive Landslide 1': '4118',
    'E4S Massive Landslide 2': '4119',
    'E4S Seismic Wave': '4110'
  },
  damageFail: {
    'E4S Dual Earthen Fists 1': '4135',
    'E4S Dual Earthen Fists 2': '4687',
    'E4S Plate Fracture': '43EA',
    'E4S Earthen Fist 1': '43CA',
    'E4S Earthen Fist 2': '43C9'
  },
  triggers: [{
    id: 'E4S Fault Line Collect',
    type: 'StartsUsing',
    netRegex: netregexes/* default.startsUsing */.ZP.startsUsing({
      id: '411E',
      source: 'Titan'
    }),
    run: (data, matches) => {
      data.faultLineTarget = matches.target;
    }
  }, {
    id: 'E4S Fault Line',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '411E',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.faultLineTarget !== matches.target,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Run Over',
          de: 'Wurde überfahren',
          fr: 'Écrasé(e)',
          ja: '突進に当たる',
          cn: '被碾了',
          ko: '돌진 맞음',
          tc: '被碾了'
        }
      };
    }
  }],
  timelineReplace: [{
    'locale': 'de',
    'replaceSync': {
      'Titan': 'Titan'
    }
  }, {
    'locale': 'fr',
    'replaceSync': {
      'Titan': 'Titan'
    }
  }, {
    'locale': 'ja',
    'replaceSync': {
      'Titan': 'タイタン'
    }
  }, {
    'locale': 'cn',
    'replaceSync': {
      'Titan': '泰坦'
    }
  }, {
    'locale': 'ko',
    'replaceSync': {
      'Titan': '타이탄'
    }
  }]
};
/* harmony default export */ const e4s = (e4s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e5n.ts



const e5n_triggerSet = {
  zoneId: zone_id/* default.EdensVerseFulmination */.Z.EdensVerseFulmination,
  damageWarn: {
    'E5N Impact': '4E3A',
    // Stratospear landing AoE
    'E5N Lightning Bolt': '4B9C',
    // Stormcloud standard attack
    'E5N Gallop': '4B97',
    // Sideways add charge
    'E5N Shock Strike': '4BA1',
    // Small AoE circles during Thunderstorm
    'E5N Volt Strike': '4CF2' // Large AoE circles during Thunderstorm
  },

  damageFail: {
    'E5N Judgment Jolt': '4B8F' // Stratospear explosions
  },

  triggers: [{
    // This happens when a player gets 4+ stacks of orbs. Don't be greedy!
    id: 'E5N Static Condensation',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '8B5'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    // Helper for orb pickup failures
    id: 'E5N Orb Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '8B4'
    }),
    run: (data, matches) => {
      data.hasOrb ??= {};
      data.hasOrb[matches.target] = true;
    }
  }, {
    id: 'E5N Orb Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '8B4'
    }),
    run: (data, matches) => {
      data.hasOrb ??= {};
      data.hasOrb[matches.target] = false;
    }
  }, {
    id: 'E5N Divine Judgement Volts',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4B9A',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => !data.hasOrb || !data.hasOrb[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: `${matches.ability} (no orb)`,
          de: `${matches.ability} (kein Orb)`,
          fr: `${matches.ability} (pas d'orbe)`,
          ja: `${matches.ability} (雷玉無し)`,
          cn: `${matches.ability} (没吃球)`,
          ko: `${matches.ability} (구슬 안먹음)`,
          tc: `${matches.ability} (沒吃球)`
        }
      };
    }
  }, {
    id: 'E5N Stormcloud Target Tracking',
    type: 'HeadMarker',
    netRegex: netregexes/* default.headMarker */.ZP.headMarker({
      id: '006E'
    }),
    run: (data, matches) => {
      data.cloudMarkers ??= [];
      data.cloudMarkers.push(matches.target);
    }
  }, {
    // This ability is seen only if players stacked the clouds instead of spreading them.
    id: 'E5N The Parting Clouds',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4B9D',
      ...oopsy_common/* playerDamageFields */.np
    }),
    suppressSeconds: 30,
    mistake: (data, matches) => {
      for (const name of data.cloudMarkers ?? []) {
        return {
          type: 'fail',
          blame: name,
          text: {
            en: `${matches.ability} (clouds too close)`,
            de: `${matches.ability} (Wolken zu nahe)`,
            fr: `${matches.ability} (nuages trop proches)`,
            ja: `${matches.ability} (雲近すぎ)`,
            cn: `${matches.ability} (雷云重叠)`,
            ko: `${matches.ability} (구름이 너무 가까움)`,
            tc: `${matches.ability} (雲太近)`
          }
        };
      }
    }
  }, {
    id: 'E5N Stormcloud cleanup',
    type: 'HeadMarker',
    netRegex: netregexes/* default.headMarker */.ZP.headMarker({
      id: '006E'
    }),
    delaySeconds: 30,
    // Stormclouds resolve well before this.
    run: data => {
      delete data.cloudMarkers;
    }
  }]
};
/* harmony default export */ const e5n = (e5n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e5s.ts



// TODO: is there a different ability if the shield duty action isn't used properly?
// TODO: is there an ability from Raiden (the bird) if you get eaten?
// TODO: maybe chain lightning warning if you get hit while you have system shock (8B8)
const noOrb = str => {
  return {
    en: `${str} (no orb)`,
    de: `${str} (kein Orb)`,
    fr: `${str} (pas d'orbe)`,
    ja: `${str} (雷玉無し)`,
    cn: `${str} (没吃球)`,
    ko: `${str} (구슬 없음)`,
    tc: `${str} (沒吃球)`
  };
};
const e5s_triggerSet = {
  zoneId: zone_id/* default.EdensVerseFulminationSavage */.Z.EdensVerseFulminationSavage,
  damageWarn: {
    'E5S Impact': '4E3B',
    // Stratospear landing AoE
    'E5S Gallop': '4BB4',
    // Sideways add charge
    'E5S Shock Strike': '4BC1',
    // Small AoE circles during Thunderstorm
    'E5S Stepped Leader Twister': '4BC7',
    // Twister stepped leader
    'E5S Stepped Leader Donut': '4BC8',
    // Donut stepped leader
    'E5S Shock': '4E3D' // Hated of Levin Stormcloud-cleansable exploding debuff
  },

  damageFail: {
    'E5S Judgment Jolt': '4BA7' // Stratospear explosions
  },

  shareWarn: {
    'E5S Volt Strike Double': '4BC3',
    // Large AoE circles during Thunderstorm
    'E5S Crippling Blow': '4BCA',
    'E5S Chain Lightning Double': '4BC5'
  },
  triggers: [{
    // Helper for orb pickup failures
    id: 'E5S Orb Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '8B4'
    }),
    run: (data, matches) => {
      data.hasOrb ??= {};
      data.hasOrb[matches.target] = true;
    }
  }, {
    id: 'E5S Orb Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '8B4'
    }),
    run: (data, matches) => {
      data.hasOrb ??= {};
      data.hasOrb[matches.target] = false;
    }
  }, {
    id: 'E5S Divine Judgement Volts',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4BB7',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => !data.hasOrb || !data.hasOrb[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: noOrb(matches.ability)
      };
    }
  }, {
    id: 'E5S Volt Strike Orb',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4BC3',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => !data.hasOrb || !data.hasOrb[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: noOrb(matches.ability)
      };
    }
  }, {
    id: 'E5S Deadly Discharge Big Knockback',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4BB2',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => !data.hasOrb || !data.hasOrb[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: noOrb(matches.ability)
      };
    }
  }, {
    id: 'E5S Lightning Bolt',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4BB9',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => {
      // Having a non-idempotent condition function is a bit <_<
      // Only consider lightning bolt damage if you have a debuff to clear.
      if (!data.hated || !data.hated[matches.target]) return true;
      delete data.hated[matches.target];
      return false;
    },
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'E5S Hated of Levin',
    type: 'HeadMarker',
    netRegex: netregexes/* default.headMarker */.ZP.headMarker({
      id: '00D2'
    }),
    run: (data, matches) => {
      data.hated ??= {};
      data.hated[matches.target] = true;
    }
  }, {
    id: 'E5S Stormcloud Target Tracking',
    type: 'HeadMarker',
    netRegex: netregexes/* default.headMarker */.ZP.headMarker({
      id: '006E'
    }),
    run: (data, matches) => {
      data.cloudMarkers ??= [];
      data.cloudMarkers.push(matches.target);
    }
  }, {
    // This ability is seen only if players stacked the clouds instead of spreading them.
    id: 'E5S The Parting Clouds',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4BBA',
      ...oopsy_common/* playerDamageFields */.np
    }),
    suppressSeconds: 30,
    mistake: (data, matches) => {
      for (const name of data.cloudMarkers ?? []) {
        return {
          type: 'fail',
          blame: name,
          text: {
            en: `${matches.ability} (clouds too close)`,
            de: `${matches.ability} (Wolken zu nahe)`,
            fr: `${matches.ability} (nuages trop proches)`,
            ja: `${matches.ability} (雲近すぎ)`,
            cn: `${matches.ability} (雷云重叠)`,
            ko: `${matches.ability} (구름이 너무 가까움)`,
            tc: `${matches.ability} (雲太近)`
          }
        };
      }
    }
  }, {
    id: 'E5S Stormcloud cleanup',
    type: 'HeadMarker',
    netRegex: netregexes/* default.headMarker */.ZP.headMarker({
      id: '006E'
    }),
    // Stormclouds resolve well before this.
    delaySeconds: 30,
    run: data => {
      delete data.cloudMarkers;
      delete data.hated;
    }
  }]
};
/* harmony default export */ const e5s = (e5s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e6n.ts

const e6n_triggerSet = {
  zoneId: zone_id/* default.EdensVerseFuror */.Z.EdensVerseFuror,
  damageWarn: {
    'E6N Thorns': '4BDA',
    // AoE markers after Enumeration
    'E6N Ferostorm 1': '4BDD',
    'E6N Ferostorm 2': '4BE5',
    'E6N Storm Of Fury 1': '4BE0',
    // Circle AoE during tethers--Garuda
    'E6N Storm Of Fury 2': '4BE6',
    // Circle AoE during tethers--Raktapaksa
    'E6N Explosion': '4BE2',
    // AoE circles, Garuda orbs
    'E6N Heat Burst': '4BEC',
    'E6N Conflag Strike': '4BEE',
    // 270-degree frontal AoE
    'E6N Spike Of Flame': '4BF0',
    // Orb explosions after Strike Spark
    'E6N Radiant Plume': '4BF2',
    'E6N Eruption': '4BF4'
  },
  damageFail: {
    'E6N Vacuum Slice': '4BD5',
    // Dark line AoE from Garuda
    'E6N Downburst': '4BDB' // Blue knockback circle. Actual knockback is unknown ability 4C20
  },

  shareFail: {
    // Kills non-tanks who get hit by it.
    'E6N Instant Incineration': '4BED'
  }
};
/* harmony default export */ const e6n = (e6n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e6s.ts

// TODO: check tethers being cut (when they shouldn't)
// TODO: check for concussed debuff
// TODO: check for taking tankbuster with lightheaded
// TODO: check for one person taking multiple Storm Of Fury Tethers (4C01/4C08)
const e6s_triggerSet = {
  zoneId: zone_id/* default.EdensVerseFurorSavage */.Z.EdensVerseFurorSavage,
  damageWarn: {
    // It's common to just ignore futbol mechanics, so don't warn on Strike Spark.
    // 'Spike Of Flame': '4C13', // Orb explosions after Strike Spark

    'E6S Thorns': '4BFA',
    // AoE markers after Enumeration
    'E6S Ferostorm 1': '4BFD',
    'E6S Ferostorm 2': '4C06',
    'E6S Storm Of Fury 1': '4C00',
    // Circle AoE during tethers--Garuda
    'E6S Storm Of Fury 2': '4C07',
    // Circle AoE during tethers--Raktapaksa
    'E6S Explosion': '4C03',
    // AoE circles, Garuda orbs
    'E6S Heat Burst': '4C1F',
    'E6S Conflag Strike': '4C10',
    // 270-degree frontal AoE
    'E6S Radiant Plume': '4C15',
    'E6S Eruption': '4C17',
    'E6S Wind Cutter': '4C02' // Tether-cutting line aoe
  },

  damageFail: {
    'E6S Vacuum Slice': '4BF5',
    // Dark line AoE from Garuda
    'E6S Downburst 1': '4BFB',
    // Blue knockback circle (Garuda).
    'E6S Downburst 2': '4BFC',
    // Blue knockback circle (Raktapaksa).
    'E6S Meteor Strike': '4C0F' // Frontal avoidable tank buster
  },

  shareWarn: {
    'E6S Hands of Hell': '4C0[BC]',
    // Tether charge
    'E6S Hands of Flame': '4C0A',
    // First Tankbuster
    'E6S Instant Incineration': '4C0E',
    // Second Tankbuster
    'E6S Blaze': '4C1B' // Flame Tornado Cleave
  },

  soloFail: {
    'E6S Air Bump': '4BF9'
  }
};
/* harmony default export */ const e6s = (e6s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e7n.ts



const wrongBuff = str => {
  return {
    en: `${str} (wrong buff)`,
    de: `${str} (falscher Buff)`,
    fr: `${str} (mauvais buff)`,
    ja: `${str} (不適切なバフ)`,
    cn: `${str} (Buff错了)`,
    ko: `${str} (버프 틀림)`,
    tc: `${str} (Buff錯了)`
  };
};
const noBuff = str => {
  return {
    en: `${str} (no buff)`,
    de: `${str} (kein Buff)`,
    fr: `${str} (pas de buff)`,
    ja: `${str} (バフ無し)`,
    cn: `${str} (没有Buff)`,
    ko: `${str}(버프 없음)`,
    tc: `${str} (沒有Buff)`
  };
};
const e7n_triggerSet = {
  zoneId: zone_id/* default.EdensVerseIconoclasm */.Z.EdensVerseIconoclasm,
  damageWarn: {
    'E7N Stygian Sword': '4C55',
    // Circle ground AoEs after False Twilight
    'E7N Strength In Numbers Donut': '4C4C',
    // Large donut ground AoEs, intermission
    'E7N Strength In Numbers 2': '4C4D' // Large circle ground AoEs, intermission
  },

  shareWarn: {
    'E7N Stygian Stake': '4C33',
    // Laser tank buster, outside intermission phase
    'E7N Silver Shot': '4E7D' // Spread markers, intermission
  },

  triggers: [{
    id: 'E7N Astral Effect Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '8BE'
    }),
    run: (data, matches) => {
      data.hasAstral ??= {};
      data.hasAstral[matches.target] = true;
    }
  }, {
    id: 'E7N Astral Effect Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '8BE'
    }),
    run: (data, matches) => {
      data.hasAstral ??= {};
      data.hasAstral[matches.target] = false;
    }
  }, {
    id: 'E7N Umbral Effect Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '8BF'
    }),
    run: (data, matches) => {
      data.hasUmbral ??= {};
      data.hasUmbral[matches.target] = true;
    }
  }, {
    id: 'E7N Umbral Effect Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '8BF'
    }),
    run: (data, matches) => {
      data.hasUmbral ??= {};
      data.hasUmbral[matches.target] = false;
    }
  }, {
    id: 'E7N Light\'s Course',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['4C3E', '4C40', '4C22', '4C3C', '4E63'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => {
      return !data.hasUmbral || !data.hasUmbral[matches.target];
    },
    mistake: (data, matches) => {
      if (data.hasAstral && data.hasAstral[matches.target]) return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: wrongBuff(matches.ability)
      };
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: noBuff(matches.ability)
      };
    }
  }, {
    id: 'E7N Darks\'s Course',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['4C3D', '4C23', '4C41', '4C43'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => {
      return !data.hasAstral || !data.hasAstral[matches.target];
    },
    mistake: (data, matches) => {
      if (data.hasUmbral && data.hasUmbral[matches.target]) return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: wrongBuff(matches.ability)
      };
      // This case is probably impossible, as the debuff ticks after death,
      // but leaving it here in case there's some rez or disconnect timing
      // that could lead to this.
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: noBuff(matches.ability)
      };
    }
  }]
};
/* harmony default export */ const e7n = (e7n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e7s.ts




// TODO: missing an orb during tornado phase
// TODO: jumping in the tornado damage??
// TODO: taking sungrace(4C80) or moongrace(4C82) with wrong debuff
// TODO: stygian spear/silver spear with the wrong debuff
// TODO: taking explosion from the wrong Chiaro/Scuro orb
// TODO: handle 4C89 Silver Stake tankbuster 2nd hit, as it's ok to have two in.

const e7s_wrongBuff = str => {
  return {
    en: `${str} (wrong buff)`,
    de: `${str} (falscher Buff)`,
    fr: `${str} (mauvais buff)`,
    ja: `${str} (不適切なバフ)`,
    cn: `${str} (Buff错了)`,
    ko: `${str} (버프 틀림)`,
    tc: `${str} (Buff錯了)`
  };
};
const e7s_noBuff = str => {
  return {
    en: `${str} (no buff)`,
    de: `${str} (kein Buff)`,
    fr: `${str} (pas de buff)`,
    ja: `${str} (バフ無し)`,
    cn: `${str} (没有Buff)`,
    ko: `${str} (버프 없음)`,
    tc: `${str} (沒有Buff)`
  };
};
const e7s_triggerSet = {
  zoneId: zone_id/* default.EdensVerseIconoclasmSavage */.Z.EdensVerseIconoclasmSavage,
  damageWarn: {
    'E7S Silver Sword': '4C8E',
    // ground aoe
    'E7S Overwhelming Force': '4C73',
    // add phase ground aoe
    'E7S Strength in Numbers 1': '4C70',
    // add get under
    'E7S Strength in Numbers 2': '4C71',
    // add get out
    'E7S Paper Cut': '4C7D',
    // tornado ground aoes
    'E7S Buffet': '4C77' // tornado ground aoes also??
  },

  damageFail: {
    'E7S Betwixt Worlds': '4C6B',
    // purple ground line aoes
    'E7S Crusade': '4C58',
    // blue knockback circle (standing in it)
    'E7S Explosion': '4C6F' // didn't kill an add
  },

  shareWarn: {
    'E7S Stygian Stake': '4C34',
    // Laser tank buster 1
    'E7S Silver Shot': '4C92',
    // Spread markers
    'E7S Silver Scourge': '4C93',
    // Ice markers
    'E7S Chiaro Scuro Explosion 1': '4D14',
    // orb explosion
    'E7S Chiaro Scuro Explosion 2': '4D15' // orb explosion
  },

  triggers: [{
    // Interrupt
    id: 'E7S Advent Of Light',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4C6E'
    }),
    mistake: (_data, matches) => {
      // TODO: is this blame correct? does this have a target?
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    id: 'E7S Astral Effect Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '8BE'
    }),
    run: (data, matches) => {
      data.hasAstral = data.hasAstral || {};
      data.hasAstral[matches.target] = true;
    }
  }, {
    id: 'E7S Astral Effect Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '8BE'
    }),
    run: (data, matches) => {
      data.hasAstral = data.hasAstral || {};
      data.hasAstral[matches.target] = false;
    }
  }, {
    id: 'E7S Umbral Effect Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '8BF'
    }),
    run: (data, matches) => {
      data.hasUmbral = data.hasUmbral || {};
      data.hasUmbral[matches.target] = true;
    }
  }, {
    id: 'E7S Umbral Effect Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '8BF'
    }),
    run: (data, matches) => {
      data.hasUmbral = data.hasUmbral || {};
      data.hasUmbral[matches.target] = false;
    }
  }, {
    id: 'E7S Light\'s Course',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['4C62', '4C63', '4C64', '4C5B', '4C5F'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => {
      return !data.hasUmbral || !data.hasUmbral[matches.target];
    },
    mistake: (data, matches) => {
      if (data.hasAstral && data.hasAstral[matches.target]) return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: e7s_wrongBuff(matches.ability)
      };
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: e7s_noBuff(matches.ability)
      };
    }
  }, {
    id: 'E7S Darks\'s Course',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['4C65', '4C66', '4C67', '4C5A', '4C60'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => {
      return !data.hasAstral || !data.hasAstral[matches.target];
    },
    mistake: (data, matches) => {
      if (data.hasUmbral && data.hasUmbral[matches.target]) return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: e7s_wrongBuff(matches.ability)
      };
      // This case is probably impossible, as the debuff ticks after death,
      // but leaving it here in case there's some rez or disconnect timing
      // that could lead to this.
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: e7s_noBuff(matches.ability)
      };
    }
  }, {
    id: 'E7S Crusade Knockback',
    type: 'Ability',
    // 4C76 is the knockback damage, 4C58 is the damage for standing on the puck.
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4C76',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const e7s = (e7s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e8n.ts



const e8n_triggerSet = {
  zoneId: zone_id/* default.EdensVerseRefulgence */.Z.EdensVerseRefulgence,
  damageWarn: {
    'E8N Biting Frost': '4DDB',
    // 270-degree frontal AoE, Shiva
    'E8N Driving Frost': '4DDC',
    // Rear cone AoE, Shiva
    'E8N Frigid Stone': '4E66',
    // Small spread circles, phase 1
    'E8N Reflected Axe Kick': '4E00',
    // Large circle AoE, Frozen Mirror
    'E8N Reflected Scythe Kick': '4E01',
    // Donut AoE, Frozen Mirror
    'E8N Frigid Eruption': '4E09',
    // Small circle AoE puddles, phase 1
    'E8N Icicle Impact': '4E0A',
    // Large circle AoE puddles, phase 1
    'E8N Axe Kick': '4DE2',
    // Large circle AoE, Shiva
    'E8N Scythe Kick': '4DE3',
    // Donut AoE, Shiva
    'E8N Reflected Biting Frost': '4DFE',
    // 270-degree frontal AoE, Frozen Mirror
    'E8N Reflected Driving Frost': '4DFF' // Cone AoE, Frozen Mirror
  },

  damageFail: {},
  triggers: [{
    id: 'E8N Shining Armor',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '95'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'E8N Heavenly Strike',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4DD8',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter gestoßen!',
          fr: 'Repoussé(e) !',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백됨!',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    id: 'E8N Frost Armor',
    type: 'GainsEffect',
    // Thin Ice
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '38F'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Slid off!',
          de: 'runtergerutscht!',
          fr: 'A glissé(e) !',
          ja: '滑った',
          cn: '滑落',
          ko: '미끄러짐!',
          tc: '滑落'
        }
      };
    }
  }]
};
/* harmony default export */ const e8n = (e8n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e8s.ts


// TODO: rush hitting the crystal
// TODO: adds not being killed
// TODO: taking the rush twice (when you have debuff)
// TODO: not hitting the dragon four times during wyrm's lament
// TODO: death reasons for not picking up puddle
// TODO: not being in the tower when you should
// TODO: picking up too many stacks
const e8s_triggerSet = {
  zoneId: zone_id/* default.EdensVerseRefulgenceSavage */.Z.EdensVerseRefulgenceSavage,
  damageWarn: {
    'E8S Biting Frost': '4D66',
    // 270-degree frontal AoE, Shiva
    'E8S Driving Frost': '4D67',
    // Rear cone AoE, Shiva
    'E8S Axe Kick': '4D6D',
    // Large circle AoE, Shiva
    'E8S Scythe Kick': '4D6E',
    // Donut AoE, Shiva
    'E8S Reflected Axe Kick': '4DB9',
    // Large circle AoE, Frozen Mirror
    'E8S Reflected Scythe Kick': '4DBA',
    // Donut AoE, Frozen Mirror
    'E8S Frigid Eruption': '4D9F',
    // Small circle AoE puddles, phase 1
    'E8S Frigid Needle': '4D9D',
    // 8-way "flower" explosion
    'E8S Icicle Impact': '4DA0',
    // Large circle AoE puddles, phase 1
    'E8S Reflected Biting Frost 1': '4DB7',
    // 270-degree frontal AoE, Frozen Mirror
    'E8S Reflected Biting Frost 2': '4DC3',
    // 270-degree frontal AoE, Frozen Mirror
    'E8S Reflected Driving Frost 1': '4DB8',
    // Cone AoE, Frozen Mirror
    'E8S Reflected Driving Frost 2': '4DC4',
    // Cone AoE, Frozen Mirror

    'E8S Hallowed Wings 1': '4D75',
    // Left cleave
    'E8S Hallowed Wings 2': '4D76',
    // Right cleave
    'E8S Hallowed Wings 3': '4D77',
    // Knockback frontal cleave
    'E8S Reflected Hallowed Wings 1': '4D90',
    // Reflected left 2
    'E8S Reflected Hallowed Wings 2': '4DBB',
    // Reflected left 1
    'E8S Reflected Hallowed Wings 3': '4DC7',
    // Reflected right 2
    'E8S Reflected Hallowed Wings 4': '4D91',
    // Reflected right 1
    'E8S Twin Stillness 1': '4D68',
    'E8S Twin Stillness 2': '4D6B',
    'E8S Twin Silence 1': '4D69',
    'E8S Twin Silence 2': '4D6A',
    'E8S Akh Rhai': '4D99',
    'E8S Embittered Dance 1': '4D70',
    'E8S Embittered Dance 2': '4D71',
    'E8S Spiteful Dance 1': '4D6F',
    'E8S Spiteful Dance 2': '4D72'
  },
  damageFail: {
    // Broken tether.
    'E8S Refulgent Fate': '4DA4',
    // Shared orb, correct is Bright Pulse (4D95)
    'E8S Blinding Pulse': '4D96'
  },
  shareWarn: {
    'E8S Banish III Divided': '4DA9',
    // spread
    'E8S Banish Divided': '4DA7' // tank spread
  },

  shareFail: {
    'E8S Path of Light': '4DA1' // Protean
  },

  soloWarn: {
    'E8S Banish III': '4DA8',
    // stack
    'E8S Banish': '4DA6' // tank stack
  },

  triggers: [{
    id: 'E8S Shining Armor',
    type: 'GainsEffect',
    // Stun
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '95'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    // Interrupt
    id: 'E8S Stoneskin',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4D85'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const e8s = (e8s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e9n.ts

const e9n_triggerSet = {
  zoneId: zone_id/* default.EdensPromiseUmbra */.Z.EdensPromiseUmbra,
  damageWarn: {
    'E9N The Art Of Darkness 1': '5223',
    // left-right cleave
    'E9N The Art Of Darkness 2': '5224',
    // left-right cleave
    'E9N Wide-Angle Particle Beam': '5AFF',
    // frontal cleave tutorial mechanic
    'E9N Wide-Angle Phaser': '55E1',
    // wide-angle "sides"
    'E9N Bad Vibrations': '55E6',
    // tethered outside giant tree ground aoes
    'E9N Earth-Shattering Particle Beam': '5225',
    // missing towers?
    'E9N Anti-Air Particle Beam': '55DC',
    // "get out" during panels
    'E9N Zero-Form Particle Beam 2': '55DB' // Clone line aoes w/ Anti-Air Particle Beam
  },

  damageFail: {
    'E9N Withdraw': '5534',
    // Slow to break seed chain, get sucked back in yikes
    'E9N Aetherosynthesis': '5535' // Standing on seeds during explosion (possibly via Withdraw)
  },

  shareWarn: {
    'E9N Zero-Form Particle Beam 1': '55EB' // tank laser with marker
  }
};

/* harmony default export */ const e9n = (e9n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/raid/e9s.ts



// TODO: 561D Evil Seed hits everyone, hard to know if there's a double tap
// TODO: falling through panel just does damage with no ability name, like a death wall
// TODO: what happens if you jump in seed thorns?
const e9s_triggerSet = {
  zoneId: zone_id/* default.EdensPromiseUmbraSavage */.Z.EdensPromiseUmbraSavage,
  damageWarn: {
    'E9S Bad Vibrations': '561C',
    // tethered outside giant tree ground aoes
    'E9S Wide-Angle Particle Beam': '5B00',
    // anti-air "sides"
    'E9S Wide-Angle Phaser Unlimited': '560E',
    // wide-angle "sides"
    'E9S Anti-Air Particle Beam': '5B01',
    // wide-angle "out"
    'E9S The Second Art Of Darkness 1': '5601',
    // left-right cleave
    'E9S The Second Art Of Darkness 2': '5602',
    // left-right cleave
    'E9S The Art Of Darkness 1': '5A95',
    // boss left-right summon/panel cleave
    'E9S The Art Of Darkness 2': '5A96',
    // boss left-right summon/panel cleave
    'E9S The Art Of Darkness Clone 1': '561E',
    // clone left-right summon cleave
    'E9S The Art Of Darkness Clone 2': '561F',
    // clone left-right summon cleave
    'E9S The Third Art Of Darkness 1': '5603',
    // third art left-right cleave initial
    'E9S The Third Art Of Darkness 2': '5604',
    // third art left-right cleave initial
    'E9S Art Of Darkness': '5606',
    // third art left-right cleave final
    'E9S Full-Perimiter Particle Beam': '5629',
    // panel "get in"
    'E9S Dark Chains': '5FAC' // Slow to break partner chains
  },

  damageFail: {
    'E9S Withdraw': '561A',
    // Slow to break seed chain, get sucked back in yikes
    'E9S Aetherosynthesis': '561B' // Standing on seeds during explosion (possibly via Withdraw)
  },

  gainsEffectWarn: {
    'E9S Stygian Tendrils': '952' // standing in the brambles
  },

  shareWarn: {
    'E9S Hyper-Focused Particle Beam': '55FD' // Art Of Darkness protean
  },

  shareFail: {
    'E9S Condensed Wide-Angle Particle Beam': '5610' // wide-angle "tank laser"
  },

  soloWarn: {
    'E9S Multi-Pronged Particle Beam': '5600' // Art Of Darkness Partner Stack
  },

  triggers: [{
    // Anti-air "tank spread".  This can be stacked by two tanks invulning.
    // Note: this will still show something for holmgang/living, but
    // arguably a healer might need to do something about that, so maybe
    // it's ok to still show as a warning??
    id: 'E9S Condensed Anti-Air Particle Beam',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      type: '22',
      id: '5615',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // Anti-air "out".  This can be invulned by a tank along with the spread above.
    id: 'E9S Anti-Air Phaser Unlimited',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '5612',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const e9s = (e9s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/diamond_weapon-ex.ts


// TODO: warning for taking Diamond Flash (5FA1) stack on your own?
// Diamond Weapon Extreme
const diamond_weapon_ex_triggerSet = {
  zoneId: zone_id/* default.TheCloudDeckExtreme */.Z.TheCloudDeckExtreme,
  damageWarn: {
    'DiamondEx Auri Arts 1': '5FAF',
    // Auri Arts dashes/explosions
    'DiamondEx Auri Arts 2': '5FB2',
    // Auri Arts dashes/explosions
    'DiamondEx Auri Arts 3': '5FCD',
    // Auri Arts dashes/explosions
    'DiamondEx Auri Arts 4': '5FCE',
    // Auri Arts dashes/explosions
    'DiamondEx Auri Arts 5': '5FCF',
    // Auri Arts dashes/explosions
    'DiamondEx Auri Arts 6': '5FF8',
    // Auri Arts dashes/explosions
    'DiamondEx Auri Arts 7': '6159',
    // Auri Arts dashes/explosions
    'DiamondEx Articulated Bit Aetherial Bullet': '5FAB',
    // bit lasers during all phases
    'DiamondEx Diamond Shrapnel 1': '5FCB',
    // chasing circles
    'DiamondEx Diamond Shrapnel 2': '5FCC' // chasing circles
  },

  damageFail: {
    'DiamondEx Claw Swipe Left': '5FC2',
    // Adamant Purge platform cleave
    'DiamondEx Claw Swipe Right': '5FC3',
    // Adamant Purge platform cleave
    'DiamondEx Auri Cyclone 1': '5FD1',
    // standing on the blue knockback puck
    'DiamondEx Auri Cyclone 2': '5FD2',
    // standing on the blue knockback puck
    'DiamondEx Airship\'s Bane 1': '5FFE',
    // destroying one of the platforms after Auri Cyclone
    'DiamondEx Airship\'s Bane 2': '5FD3' // destroying one of the platforms after Auri Cyclone
  },

  shareWarn: {
    'DiamondEx Tank Lasers': '5FC8',
    // cleaving yellow lasers on top two enmity
    'DiamondEx Homing Laser': '5FC4' // Adamante Purge spread
  },

  shareFail: {
    'DiamondEx Flood Ray': '5FC7' // "limit cut" cleaves
  },

  triggers: [{
    id: 'DiamondEx Vertical Cleave Knocked Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '5FD0'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const diamond_weapon_ex = (diamond_weapon_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/diamond_weapon.ts


// Diamond Weapon Normal
const diamond_weapon_triggerSet = {
  zoneId: zone_id/* default.TheCloudDeck */.Z.TheCloudDeck,
  damageWarn: {
    'Diamond Weapon Auri Arts': '5FE3',
    // Auri Arts dashes
    'Diamond Weapon Diamond Shrapnel Initial': '5FE1',
    // initial circle of Diamond Shrapnel
    'Diamond Weapon Diamond Shrapnel Chasing': '5FE2',
    // followup circles from Diamond Shrapnel
    'Diamond Weapon Aetherial Bullet': '5FD5' // bit lasers
  },

  damageFail: {
    'Diamond Weapon Claw Swipe Left': '5FD9',
    // Adamant Purge platform cleave
    'Diamond Weapon Claw Swipe Right': '5FDA',
    // Adamant Purge platform cleave
    'Diamond Weapon Auri Cyclone 1': '5FE6',
    // standing on the blue knockback puck
    'Diamond Weapon Auri Cyclone 2': '5FE7',
    // standing on the blue knockback puck
    'Diamond Weapon Airship\'s Bane 1': '5FE8',
    // destroying one of the platforms after Auri Cyclone
    'Diamond Weapon Airship\'s Bane 2': '5FFE' // destroying one of the platforms after Auri Cyclone
  },

  shareWarn: {
    'Diamond Weapon Homing Laser': '5FDB' // spread markers
  },

  triggers: [{
    id: 'Diamond Weapon Vertical Cleave Knocked Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '5FE5'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const diamond_weapon = (diamond_weapon_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/emerald_weapon-ex.ts


const emerald_weapon_ex_triggerSet = {
  zoneId: zone_id/* default.CastrumMarinumExtreme */.Z.CastrumMarinumExtreme,
  damageWarn: {
    'EmeraldEx Heat Ray': '5BD3',
    // Emerald Beam initial conal
    'EmeraldEx Photon Laser 1': '557B',
    // Emerald Beam inside circle
    'EmeraldEx Photon Laser 2': '557D',
    // Emerald Beam outside circle
    'EmeraldEx Heat Ray 1': '557A',
    // Emerald Beam rotating pulsing laser
    'EmeraldEx Heat Ray 2': '5579',
    // Emerald Beam rotating pulsing laser
    'EmeraldEx Explosion': '5596',
    // Magitek Mine explosion
    'EmeraldEx Tertius Terminus Est Initial': '55CD',
    // sword initial puddles
    'EmeraldEx Tertius Terminus Est Explosion': '55CE',
    // sword explosions
    'EmeraldEx Airborne Explosion': '55BD',
    // exaflare
    'EmeraldEx Sidescathe 1': '55D4',
    // left/right cleave
    'EmeraldEx Sidescathe 2': '55D5',
    // left/right cleave
    'EmeraldEx Shots Fired': '55B7',
    // rank and file soldiers
    'EmeraldEx Secundus Terminus Est': '55CB',
    // dropped + and x headmarkers
    'EmeraldEx Expire': '55D1',
    // ground aoe on boss "get out"
    'EmeraldEx Photon Ring': '55A9',
    // untelegraphed "get out"
    'EmeraldEx Aire Tam Storm': '55D0' // expanding red and black ground aoe
  },

  shareWarn: {
    'EmeraldEx Divide Et Impera': '55D9',
    // non-tank protean spread
    'EmeraldEx Primus Terminus Est 1': '55C4',
    // knockback arrow
    'EmeraldEx Primus Terminus Est 2': '55C5',
    // knockback arrow
    'EmeraldEx Primus Terminus Est 3': '55C6',
    // knockback arrow
    'EmeraldEx Primus Terminus Est 4': '55C7' // knockback arrow
  },

  soloWarn: {
    'EmeraldEx Nitrosphere Aetheroplasm': '55AE',
    'EmeraldEx Ceruleum Sphere Aetheroplasm': '55AF'
  },
  triggers: [{
    id: 'EmeraldEx Nitrosphere Physical Vulnerability Up Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '82A'
    }),
    run: (data, matches) => {
      data.sphereNitro = data.sphereNitro ?? {};
      data.sphereNitro[matches.target] = true;
    }
  }, {
    id: 'EmeraldEx Nitrosphere Physical Vulnerability Up Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '82A'
    }),
    run: (data, matches) => {
      // Need to track loss here for the 4/4 strategy.
      data.sphereNitro = data.sphereNitro ?? {};
      data.sphereNitro[matches.target] = false;
    }
  }, {
    id: 'EmeraldEx Ceruleum Sphere Magic Vulnerability Up Gain',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '82B'
    }),
    type: 'GainsEffect',
    run: (data, matches) => {
      data.sphereCeruleum = data.sphereCeruleum ?? {};
      data.sphereCeruleum[matches.target] = true;
    }
  }, {
    id: 'EmeraldEx Ceruleum Sphere Magic Vulnerability Up Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '82B'
    }),
    run: (data, matches) => {
      data.sphereCeruleum = data.sphereCeruleum ?? {};
      data.sphereCeruleum[matches.target] = false;
    }
  }, {
    id: 'EmeraldEx Nitrosphere Twice',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '55AE'
    }),
    condition: (data, matches) => data.sphereNitro?.[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: `${matches.ability} (wrong color)`,
          de: `${matches.ability} (falsche Farbe)`,
          fr: `${matches.ability} (mauvaise couleur)`,
          ja: `${matches.ability} (色違う)`,
          cn: `${matches.ability} (颜色错了)`,
          ko: `${matches.ability} (색 틀림)`,
          tc: `${matches.ability} (顏色錯了)`
        }
      };
    }
  }, {
    id: 'EmeraldEx Ceruleum Sphere Twice',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '55AF'
    }),
    condition: (data, matches) => data.sphereCeruleum?.[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: `${matches.ability} (wrong color)`,
          de: `${matches.ability} (falsche Farbe)`,
          fr: `${matches.ability} (mauvaise couleur)`,
          ja: `${matches.ability} (色違う)`,
          cn: `${matches.ability} (颜色错了)`,
          ko: `${matches.ability} (색 틀림)`,
          tc: `${matches.ability} (顏色錯了)`
        }
      };
    }
  }]
};
/* harmony default export */ const emerald_weapon_ex = (emerald_weapon_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/emerald_weapon.ts


const emerald_weapon_triggerSet = {
  zoneId: zone_id/* default.CastrumMarinum */.Z.CastrumMarinum,
  damageWarn: {
    'Emerald Weapon Heat Ray': '4F9D',
    // Emerald Beam initial conal
    'Emerald Weapon Photon Laser 1': '5534',
    // Emerald Beam inside circle
    'Emerald Weapon Photon Laser 2': '5536',
    // Emerald Beam middle circle
    'Emerald Weapon Photon Laser 3': '5538',
    // Emerald Beam outside circle
    'Emerald Weapon Heat Ray 1': '5532',
    // Emerald Beam rotating pulsing laser
    'Emerald Weapon Heat Ray 2': '5533',
    // Emerald Beam rotating pulsing laser
    'Emerald Weapon Magnetic Mine Explosion': '5B04',
    // repulsing mine explosions
    'Emerald Weapon Sidescathe 1': '553F',
    // left/right cleave
    'Emerald Weapon Sidescathe 2': '5540',
    // left/right cleave
    'Emerald Weapon Sidescathe 3': '5541',
    // left/right cleave
    'Emerald Weapon Sidescathe 4': '5542',
    // left/right cleave
    'Emerald Weapon Bit Storm': '554A',
    // "get in"
    'Emerald Weapon Emerald Crusher': '553C',
    // blue knockback puck
    'Emerald Weapon Pulse Laser': '5548',
    // line aoe
    'Emerald Weapon Energy Aetheroplasm': '5551',
    // hitting a glowy orb
    'Emerald Weapon Divide Et Impera Ground': '556F',
    // party targeted ground cones
    'Emerald Weapon Primus Terminus Est': '4B3E',
    // ground circle during arrow headmarkers
    'Emerald Weapon Secundus Terminus Est': '556A',
    // X / + headmarkers
    'Emerald Weapon Tertius Terminus Est': '556D',
    // triple swords
    'Emerald Weapon Shots Fired': '555F' // line aoes from soldiers
  },

  shareWarn: {
    'Emerald Weapon Divide Et Impera P1': '554E',
    // tankbuster, probably cleaves, phase 1
    'Emerald Weapon Divide Et Impera P2': '5570' // tankbuster, probably cleaves, phase 2
  },

  triggers: [{
    id: 'Emerald Weapon Emerald Crusher Knocked Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '553E'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    // Getting knocked into a wall from the arrow headmarker.
    id: 'Emerald Weapon Primus Terminus Est Wall',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['5563', '5564']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '넉백',
          tc: '擊退至牆'
        }
      };
    }
  }]
};
/* harmony default export */ const emerald_weapon = (emerald_weapon_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/hades-ex.ts



// Hades Ex
const hades_ex_triggerSet = {
  zoneId: zone_id/* default.TheMinstrelsBalladHadessElegy */.Z.TheMinstrelsBalladHadessElegy,
  damageWarn: {
    'HadesEx Shadow Spread 2': '47AA',
    'HadesEx Shadow Spread 3': '47E4',
    'HadesEx Shadow Spread 4': '47E5',
    // Everybody stacks in good faith for Bad Faith, so don't call it a mistake.
    // 'HadesEx Bad Faith 1': '47AD',
    // 'HadesEx Bad Faith 2': '47B0',
    // 'HadesEx Bad Faith 3': '47AE',
    // 'HadesEx Bad Faith 4': '47AF',
    'HadesEx Broken Faith': '47B2',
    'HadesEx Magic Spear': '47B6',
    'HadesEx Magic Chakram': '47B5',
    'HadesEx Forked Lightning': '47C9',
    'HadesEx Dark Current 1': '47F1',
    'HadesEx Dark Current 2': '47F2'
  },
  damageFail: {
    'HadesEx Comet': '47B9',
    // missed tower
    'HadesEx Ancient Eruption': '47D3',
    'HadesEx Purgation 1': '47EC',
    'HadesEx Purgation 2': '47ED',
    'HadesEx Shadow Stream': '47EA',
    'HadesEx Dead Space': '47EE'
  },
  shareWarn: {
    'HadesEx Shadow Spread Initial': '47A9',
    'HadesEx Ravenous Assault': '(?:47A6|47A7)',
    'HadesEx Dark Flame 1': '47C6',
    'HadesEx Dark Freeze 1': '47C4',
    'HadesEx Dark Freeze 2': '47DF'
  },
  triggers: [{
    id: 'HadesEx Dark II Tether',
    type: 'Tether',
    netRegex: netregexes/* default.tether */.ZP.tether({
      source: 'Shadow of the Ancients',
      id: '0011'
    }),
    run: (data, matches) => {
      data.hasDark ??= [];
      data.hasDark.push(matches.target);
    }
  }, {
    id: 'HadesEx Dark II',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      type: '22',
      id: '47BA',
      ...oopsy_common/* playerDamageFields */.np
    }),
    // Don't blame people who don't have tethers.
    condition: (data, matches) => data.hasDark && data.hasDark.includes(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'HadesEx Boss Tether',
    type: 'Tether',
    netRegex: netregexes/* default.tether */.ZP.tether({
      source: ['Igeyorhm\'s Shade', 'Lahabrea\'s Shade'],
      id: '000E',
      capture: false
    }),
    mistake: {
      type: 'warn',
      text: {
        en: 'Bosses Too Close',
        de: 'Bosses zu Nahe',
        fr: 'Boss trop proches',
        ja: 'ボス近すぎる',
        cn: 'BOSS靠太近了',
        ko: '쫄들이 너무 가까움',
        tc: 'BOSS靠太近了'
      }
    }
  }, {
    id: 'HadesEx Death Shriek',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '47CB',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'HadesEx Beyond Death Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '566'
    }),
    run: (data, matches) => {
      data.hasBeyondDeath ??= {};
      data.hasBeyondDeath[matches.target] = true;
    }
  }, {
    id: 'HadesEx Beyond Death Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '566'
    }),
    run: (data, matches) => {
      data.hasBeyondDeath ??= {};
      data.hasBeyondDeath[matches.target] = false;
    }
  }, {
    id: 'HadesEx Beyond Death',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '566'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (data, matches) => {
      if (!data.hasBeyondDeath) return;
      if (!data.hasBeyondDeath[matches.target]) return;
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }, {
    id: 'HadesEx Doom Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '6E9'
    }),
    run: (data, matches) => {
      data.hasDoom ??= {};
      data.hasDoom[matches.target] = true;
    }
  }, {
    id: 'HadesEx Doom Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '6E9'
    }),
    run: (data, matches) => {
      data.hasDoom ??= {};
      data.hasDoom[matches.target] = false;
    }
  }, {
    id: 'HadesEx Doom',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '6E9'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (data, matches) => {
      if (!data.hasDoom) return;
      if (!data.hasDoom[matches.target]) return;
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const hades_ex = (hades_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/hades.ts

// Hades Normal
const hades_triggerSet = {
  zoneId: zone_id/* default.TheDyingGasp */.Z.TheDyingGasp,
  damageWarn: {
    'Hades Bad Faith 1': '414B',
    'Hades Bad Faith 2': '414C',
    'Hades Dark Eruption': '4152',
    'Hades Shadow Spread 1': '4156',
    'Hades Shadow Spread 2': '4157',
    'Hades Broken Faith': '414E',
    'Hades Hellborn Yawp': '416F',
    'Hades Purgation': '4172',
    'Hades Shadow Stream': '415C',
    'Hades Aero': '4595',
    'Hades Echo 1': '4163',
    'Hades Echo 2': '4164'
  },
  shareFail: {
    // FIXME: this id is the same as Echo 1 above, is it correct or one of them incorrect?
    // 'Hades Nether Blast': '4163',
    'Hades Ravenous Assault': '4158',
    'Hades Ancient Darkness': '4593',
    'Hades Dual Strike': '4162'
  }
};
/* harmony default export */ const hades = (hades_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/innocence-ex.ts

// Innocence Extreme
const innocence_ex_triggerSet = {
  zoneId: zone_id/* default.TheCrownOfTheImmaculateExtreme */.Z.TheCrownOfTheImmaculateExtreme,
  damageWarn: {
    'InnoEx Duel Descent': '3ED2',
    'InnoEx Reprobation 1': '3EE0',
    'InnoEx Reprobation 2': '3ECC',
    'InnoEx Sword of Condemnation 1': '3EDE',
    'InnoEx Sword of Condemnation 2': '3EDF',
    'InnoEx Dream of the Rood 1': '3ED3',
    'InnoEx Dream of the Rood 2': '3ED4',
    'InnoEx Dream of the Rood 3': '3ED5',
    'InnoEx Dream of the Rood 4': '3ED6',
    'InnoEx Dream of the Rood 5': '3EFB',
    'InnoEx Dream of the Rood 6': '3EFC',
    'InnoEx Dream of the Rood 7': '3EFD',
    'InnoEx Dream of the Rood 8': '3EFE',
    'InnoEx Holy Trinity': '3EDB',
    'InnoEx Soul and Body 1': '3ED7',
    'InnoEx Soul and Body 2': '3ED8',
    'InnoEx Soul and Body 3': '3ED9',
    'InnoEx Soul and Body 4': '3EDA',
    'InnoEx Soul and Body 5': '3EFF',
    'InnoEx Soul and Body 6': '3F00',
    'InnoEx Soul and Body 7': '3F01',
    'InnoEx Soul and Body 8': '3F02',
    'InnoEx God Ray 1': '3EE6',
    'InnoEx God Ray 2': '3EE7',
    'InnoEx God Ray 3': '3EE8',
    'InnoEx Explosion': '3EF0'
  }
};
/* harmony default export */ const innocence_ex = (innocence_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/innocence.ts

// Innocence Normal
const innocence_triggerSet = {
  zoneId: zone_id/* default.TheCrownOfTheImmaculate */.Z.TheCrownOfTheImmaculate,
  damageWarn: {
    'Inno Daybreak': '3E9D',
    'Inno Holy Trinity': '3EB3',
    'Inno Reprobation 1': '3EB6',
    'Inno Reprobation 2': '3EB8',
    'Inno Reprobation 3': '3ECB',
    'Inno Reprobation 4': '3EB7',
    'Inno Soul and Body 1': '3EB1',
    'Inno Soul and Body 2': '3EB2',
    'Inno Soul and Body 3': '3EF9',
    'Inno Soul and Body 4': '3EFA',
    'Inno God Ray 1': '3EBD',
    'Inno God Ray 2': '3EBE',
    'Inno God Ray 3': '3EBF',
    'Inno God Ray 4': '3EC0'
  }
};
/* harmony default export */ const innocence = (innocence_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/levi-un.ts


// It's hard to capture the reflection abilities from Leviathan's Head and Tail if you use
// ranged physical attacks / magic attacks respectively, as the ability names are the
// ability you used and don't appear to show up in the log as normal "ability" lines.
// That said, dots still tick independently on both so it's likely that people will atack
// them anyway.

// TODO: Figure out why Dread Tide / Waterspout appear like shares (i.e. 0x16 id).
// Dread Tide = 5CCA/5CCB/5CCC, Waterspout = 5CD1
// Leviathan Unreal
const levi_un_triggerSet = {
  zoneId: zone_id/* default.TheWhorleaterUnreal */.Z.TheWhorleaterUnreal,
  damageWarn: {
    'LeviUn Grand Fall': '5CDF',
    // very large circular aoe before spinny dives, applies heavy
    'LeviUn Hydroshot': '5CD5',
    // Wavespine Sahagin aoe that gives Dropsy effect
    'LeviUn Dreadstorm': '5CD6' // Wavetooth Sahagin aoe that gives Hysteria effect
  },

  damageFail: {
    'LeviUn Body Slam': '5CD2',
    // levi slam that tilts the boat
    'LeviUn Spinning Dive 1': '5CDB',
    // levi dash across the boat with knockback
    'LeviUn Spinning Dive 2': '5CE3',
    // levi dash across the boat with knockback
    'LeviUn Spinning Dive 3': '5CE8',
    // levi dash across the boat with knockback
    'LeviUn Spinning Dive 4': '5CE9' // levi dash across the boat with knockback
  },

  gainsEffectWarn: {
    'LeviUn Dropsy': '110' // standing in the hydro shot from the Wavespine Sahagin
  },

  gainsEffectFail: {
    'LeviUn Hysteria': '128' // standing in the dreadstorm from the Wavetooth Sahagin
  },

  triggers: [{
    id: 'LeviUn Body Slam Knocked Off',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '5CD2'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const levi_un = (levi_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/ruby_weapon-ex.ts


// TODO: taking two different High-Powered Homing Lasers (4AD8)
// TODO: could blame the tethered player for White Agony / White Fury failures?
// Ruby Weapon Extreme
const ruby_weapon_ex_triggerSet = {
  zoneId: zone_id/* default.CinderDriftExtreme */.Z.CinderDriftExtreme,
  damageWarn: {
    'RubyEx Ruby Bit Magitek Ray': '4AD2',
    // line aoes during helicoclaw
    'RubyEx Spike Of Flame 1': '4AD3',
    // initial explosion during helicoclaw
    'RubyEx Spike Of Flame 2': '4B2F',
    // followup helicoclaw explosions
    'RubyEx Spike Of Flame 3': '4D04',
    // ravensclaw explosion at ends of lines
    'RubyEx Spike Of Flame 4': '4D05',
    // ravensclaw explosion at ends of lines
    'RubyEx Spike Of Flame 5': '4ACD',
    // ravensclaw explosion at ends of lines
    'RubyEx Spike Of Flame 6': '4ACE',
    // ravensclaw explosion at ends of lines
    'RubyEx Undermine': '4AD0',
    // ground aoes under the ravensclaw patches
    'RubyEx Ruby Ray': '4B02',
    // frontal laser
    'RubyEx Ravensflight 1': '4AD9',
    // dash around the arena
    'RubyEx Ravensflight 2': '4ADA',
    // dash around the arena
    'RubyEx Ravensflight 3': '4ADD',
    // dash around the arena
    'RubyEx Ravensflight 4': '4ADE',
    // dash around the arena
    'RubyEx Ravensflight 5': '4ADF',
    // dash around the arena
    'RubyEx Ravensflight 6': '4AE0',
    // dash around the arena
    'RubyEx Ravensflight 7': '4AE1',
    // dash around the arena
    'RubyEx Ravensflight 8': '4AE2',
    // dash around the arena
    'RubyEx Ravensflight 9': '4AE3',
    // dash around the arena
    'RubyEx Ravensflight 10': '4AE4',
    // dash around the arena
    'RubyEx Ravensflight 11': '4AE5',
    // dash around the arena
    'RubyEx Ravensflight 12': '4AE6',
    // dash around the arena
    'RubyEx Ravensflight 13': '4AE7',
    // dash around the arena
    'RubyEx Ravensflight 14': '4AE8',
    // dash around the arena
    'RubyEx Ravensflight 15': '4AE9',
    // dash around the arena
    'RubyEx Ravensflight 16': '4AEA',
    // dash around the arena
    'RubyEx Ravensflight 17': '4E6B',
    // dash around the arena
    'RubyEx Ravensflight 18': '4E6C',
    // dash around the arena
    'RubyEx Ravensflight 19': '4E6D',
    // dash around the arena
    'RubyEx Ravensflight 20': '4E6E',
    // dash around the arena
    'RubyEx Ravensflight 21': '4E6F',
    // dash around the arena
    'RubyEx Ravensflight 22': '4E70',
    // dash around the arena
    'RubyEx Cut And Run 1': '4B05',
    // slow charge across arena after stacks
    'RubyEx Cut And Run 2': '4B06',
    // slow charge across arena after stacks
    'RubyEx Cut And Run 3': '4B07',
    // slow charge across arena after stacks
    'RubyEx Cut And Run 4': '4B08',
    // slow charge across arena after stacks
    'RubyEx Cut And Run 5': '4DOD',
    // slow charge across arena after stacks
    'RubyEx Meteor Burst': '4AF2',
    // meteor exploding
    'RubyEx Bradamante': '4E38',
    // headmarkers with line aoes
    'RubyEx Comet Heavy Impact': '4AF6' // letting a tank comet land
  },

  damageFail: {
    'RubyEx Ruby Sphere Burst': '4ACB',
    // exploding the red mine
    'RubyEx Lunar Dynamo': '4EB0',
    // "get in" from Raven's Image
    'RubyEx Iron Chariot': '4EB1',
    // "get out" from Raven's Image
    'RubyEx Heart In The Machine': '4AFA' // White Agony/Fury skull hitting players
  },

  gainsEffectFail: {
    'RubyEx Hysteria': '128' // Negative Aura lookaway failure
  },

  shareWarn: {
    'RubyEx Homing Lasers': '4AD6',
    // spread markers during cut and run
    'RubyEx Meteor Stream': '4E68' // spread markers during P2
  },

  triggers: [{
    id: 'RubyEx Screech',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4AEE'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Frappé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '넉백',
          tc: '擊退至牆'
        }
      };
    }
  }]
};
/* harmony default export */ const ruby_weapon_ex = (ruby_weapon_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/ruby_weapon.ts

// Ruby Normal
const ruby_weapon_triggerSet = {
  zoneId: zone_id/* default.CinderDrift */.Z.CinderDrift,
  damageWarn: {
    'Ruby Ravensclaw': '4A93',
    // centered circle aoe for ravensclaw
    'Ruby Spike Of Flame 1': '4A9A',
    // initial explosion during helicoclaw
    'Ruby Spike Of Flame 2': '4B2E',
    // followup helicoclaw explosions
    'Ruby Spike Of Flame 3': '4A94',
    // ravensclaw explosion at ends of lines
    'Ruby Spike Of Flame 4': '4A95',
    // ravensclaw explosion at ends of lines
    'Ruby Spike Of Flame 5': '4D02',
    // ravensclaw explosion at ends of lines
    'Ruby Spike Of Flame 6': '4D03',
    // ravensclaw explosion at ends of lines
    'Ruby Ruby Ray': '4AC6',
    // frontal laser
    'Ruby Undermine': '4A97',
    // ground aoes under the ravensclaw patches
    'Ruby Ravensflight 1': '4E69',
    // dash around the arena
    'Ruby Ravensflight 2': '4E6A',
    // dash around the arena
    'Ruby Ravensflight 3': '4AA1',
    // dash around the arena
    'Ruby Ravensflight 4': '4AA2',
    // dash around the arena
    'Ruby Ravensflight 5': '4AA3',
    // dash around the arena
    'Ruby Ravensflight 6': '4AA4',
    // dash around the arena
    'Ruby Ravensflight 7': '4AA5',
    // dash around the arena
    'Ruby Ravensflight 8': '4AA6',
    // dash around the arena
    'Ruby Ravensflight 9': '4AA7',
    // dash around the arena
    'Ruby Ravensflight 10': '4C21',
    // dash around the arena
    'Ruby Ravensflight 11': '4C2A',
    // dash around the arena
    'Ruby Comet Burst': '4AB4',
    // meteor exploding
    'Ruby Bradamante': '4ABC' // headmarkers with line aoes
  },

  shareWarn: {
    'Ruby Homing Laser': '4AC5',
    // spread markers in P1
    'Ruby Meteor Stream': '4E67' // spread markers in P2
  }
};

/* harmony default export */ const ruby_weapon = (ruby_weapon_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/shiva-un.ts


// Shiva Unreal
const shiva_un_triggerSet = {
  zoneId: zone_id/* default.TheAkhAfahAmphitheatreUnreal */.Z.TheAkhAfahAmphitheatreUnreal,
  damageWarn: {
    // Large white circles.
    'ShivaUn Icicle Impact': '537B',
    // "get in" aoe
    'ShivaUn Whiteout': '5376',
    // Avoidable tank stun.
    'ShivaUn Glacier Bash': '5375'
  },
  damageFail: {
    // 270 degree attack.
    'ShivaUn Glass Dance': '5378'
  },
  shareWarn: {
    // Hailstorm spread marker.
    'ShivaUn Hailstorm': '536F'
  },
  shareFail: {
    // Laser.  TODO: maybe blame the person it's on??
    'ShivaUn Avalanche': '5379'
  },
  soloWarn: {
    // Party shared tank buster.
    'ShivaUn Icebrand': '5373'
  },
  triggers: [{
    id: 'ShivaUn Deep Freeze',
    type: 'GainsEffect',
    // Shiva also uses ability 537A on you, but it has an unknown name.
    // So, use the effect instead for free translation.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '1E7'
    }),
    condition: (_data, matches) => {
      // The intermission also gets this effect, but for a shorter duration.
      return parseFloat(matches.duration) > 20;
    },
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const shiva_un = (shiva_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/titan-un.ts

// Titan Unreal
const titan_un_triggerSet = {
  zoneId: zone_id/* default.TheNavelUnreal */.Z.TheNavelUnreal,
  damageWarn: {
    'TitanUn Weight Of The Land': '58FE',
    'TitanUn Burst': '5ADF'
  },
  damageFail: {
    'TitanUn Landslide': '5ADC',
    'TitanUn Gaoler Landslide': '5902'
  },
  shareWarn: {
    'TitanUn Rock Buster': '58F6'
  },
  shareFail: {
    'TitanUn Mountain Buster': '58F7'
  }
};
/* harmony default export */ const titan_un = (titan_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/titania-ex.ts

const titania_ex_triggerSet = {
  zoneId: zone_id/* default.TheDancingPlagueExtreme */.Z.TheDancingPlagueExtreme,
  damageWarn: {
    'TitaniaEx Wood\'s Embrace': '3D2F',
    // 'TitaniaEx Frost Rune': '3D2B',
    'TitaniaEx Gentle Breeze': '3F82',
    'TitaniaEx Leafstorm 1': '3D39',
    'TitaniaEx Puck\'s Rebuke': '3D43',
    'TitaniaEx Wallop': '3D3B',
    'TitaniaEx Leafstorm 2': '3D49'
  },
  damageFail: {
    'TitaniaEx Phantom Rune 1': '3D4C',
    'TitaniaEx Phantom Rune 2': '3D4D'
  },
  shareFail: {
    // TODO: This could maybe blame the person with the tether?
    'TitaniaEx Thunder Rune': '3D29',
    'TitaniaEx Divination Rune': '3D4A'
  }
};
/* harmony default export */ const titania_ex = (titania_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/titania.ts

const titania_triggerSet = {
  zoneId: zone_id/* default.TheDancingPlague */.Z.TheDancingPlague,
  damageWarn: {
    'Titania Wood\'s Embrace': '3D50',
    // 'Titania Frost Rune': '3D4E',
    'Titania Gentle Breeze': '3F83',
    'Titania Leafstorm 1': '3D55',
    'Titania Puck\'s Rebuke': '3D58',
    'Titania Leafstorm 2': '3E03'
  },
  damageFail: {
    'Titania Phantom Rune 1': '3D5D',
    'Titania Phantom Rune 2': '3D5E'
  },
  shareFail: {
    'Titania Divination Rune': '3D5B'
  }
};
/* harmony default export */ const titania = (titania_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/varis-ex.ts



const varis_ex_triggerSet = {
  zoneId: zone_id/* default.MemoriaMiseraExtreme */.Z.MemoriaMiseraExtreme,
  damageWarn: {
    'VarisEx Alea Iacta Est 1': '4CD2',
    'VarisEx Alea Iacta Est 2': '4CD3',
    'VarisEx Alea Iacta Est 3': '4CD4',
    'VarisEx Alea Iacta Est 4': '4CD5',
    'VarisEx Alea Iacta Est 5': '4CD6',
    'VarisEx Ignis Est 1': '4CB5',
    'VarisEx Ignis Est 2': '4CC5',
    'VarisEx Ventus Est 1': '4CC7',
    'VarisEx Ventus Est 2': '4CC8',
    'VarisEx Assault Cannon': '4CE5',
    'VarisEx Fortius Rotating': '4CE9'
  },
  damageFail: {
    // Don't hit the shields!
    'VarisEx Repay': '4CDD'
  },
  shareWarn: {
    // This is the "protean" fortius.
    'VarisEx Fortius Protean': '4CE7'
  },
  shareFail: {
    'VarisEx Magitek Burst': '4CDF',
    'VarisEx Aetherochemical Grenado': '4CED'
  },
  triggers: [{
    id: 'VarisEx Terminus Est',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4CB4',
      ...oopsy_common/* playerDamageFields */.np
    }),
    suppressSeconds: 1,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const varis_ex = (varis_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/wol-ex.ts


// TODO: Radiant Braver is 4EF7/4EF8(x2), shouldn't get hit by both?
// TODO: Radiant Desperado is 4EF9/4EFA, shouldn't get hit by both?
// TODO: Radiant Meteor is 4EFC, and shouldn't get hit by more than 1?
// TODO: Absolute Holy should be shared?
// TODO: intersecting brimstones?
const wol_ex_triggerSet = {
  zoneId: zone_id/* default.TheSeatOfSacrificeExtreme */.Z.TheSeatOfSacrificeExtreme,
  damageWarn: {
    'WOLEx Solemn Confiteor': '4F0C',
    // ground puddles
    'WOLEx Coruscant Saber In': '4EF2',
    // saber in
    'WOLEx Coruscant Saber Out': '4EF1',
    // saber out
    'WOLEx Imbued Corusance Out': '4F49',
    // saber out
    'WOLEx Imbued Corusance In': '4F4A',
    // saber in
    'WOLEx Shining Wave': '4F08',
    // sword triangle
    'WOLEx Cauterize': '4F07',
    'WOLEx Brimstone Earth': '4F00' // corner growing circles, growing
  },

  gainsEffectWarn: {
    'WOLEx Deep Freeze': '4E6',
    // failing Absolute Blizzard III
    'WOLEx Damage Down': '274' // failing Absolute Flash
  },

  shareWarn: {
    'WOLEx Absolute Stone III': '4EEB',
    // protean wave imbued magic
    'WOLEx Flare Breath': '4F06',
    // tether from summoned bahamuts
    'WOLEx Perfect Decimation': '4F05' // smn/war phase marker
  },

  soloWarn: {
    'WOLEx Katon San Share': '4EFE'
  },
  triggers: [{
    id: 'WOLEx True Walking Dead',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '8FF'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }, {
    id: 'WOLEx Tower',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4F04',
      capture: false
    }),
    mistake: {
      type: 'fail',
      text: {
        en: 'Missed Tower',
        de: 'Turm verpasst',
        fr: 'Tour manquée',
        ja: '塔を踏まなかった',
        cn: '没踩塔',
        ko: '장판 실수',
        tc: '沒踩塔'
      }
    }
  }, {
    id: 'WOLEx True Hallowed Ground',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4F44'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        text: matches.ability
      };
    }
  }, {
    // For Berserk and Deep Darkside
    id: 'WOLEx Missed Interrupt',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['5156', '5158']
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const wol_ex = (wol_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/trial/wol.ts


// TODO: Radiant Braver is 4F16/4F17(x2), shouldn't get hit by both?
// TODO: Radiant Desperado is 4F18/4F19, shouldn't get hit by both?
// TODO: Radiant Meteor is 4F1A, and shouldn't get hit by more than 1?
// TODO: missing a tower?

// Note: Deliberately not including pyretic damage as an error.
// Note: It doesn't appear that there's any way to tell who failed the cutscene.
const wol_triggerSet = {
  zoneId: zone_id/* default.TheSeatOfSacrifice */.Z.TheSeatOfSacrifice,
  damageWarn: {
    'WOL Solemn Confiteor': '4F2A',
    // ground puddles
    'WOL Coruscant Saber In': '4F10',
    // saber in
    'WOL Coruscant Saber Out': '4F11',
    // saber out
    'WOL Imbued Corusance Out': '4F4B',
    // saber out
    'WOL Imbued Corusance In': '4F4C',
    // saber in
    'WOL Shining Wave': '4F26',
    // sword triangle
    'WOL Cauterize': '4F25',
    'WOL Brimstone Earth 1': '4F1E',
    // corner growing circles, initial
    'WOL Brimstone Earth 2': '4F1F',
    // corner growing circles, growing
    'WOL Flare Breath': '4F24',
    'WOL Decimation': '4F23'
  },
  gainsEffectWarn: {
    'WOL Deep Freeze': '4E6'
  },
  triggers: [{
    id: 'WOL True Walking Dead',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '38E'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const wol = (wol_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/05-shb/ultimate/the_epic_of_alexander.ts



// TODO: FIX luminous aetheroplasm warning not working
// TODO: FIX doll death not working
// TODO: failing hand of pain/parting (check for high damage?)
// TODO: make sure everybody takes exactly one protean (rather than watching double hits)
// TODO: thunder not hitting exactly 2?
// TODO: person with water/thunder debuff dying
// TODO: bad nisi pass
// TODO: failed gavel mechanic
// TODO: double rocket punch not hitting exactly 2? (or tanks)
// TODO: standing in sludge puddles before hidden mine?
// TODO: hidden mine failure?
// TODO: failures of ordained motion / stillness
// TODO: failures of plaint of severity (tethers)
// TODO: failures of plaint of solidarity (shared sentence)
// TODO: ordained capital punishment hitting non-tanks
const the_epic_of_alexander_triggerSet = {
  zoneId: zone_id/* default.TheEpicOfAlexanderUltimate */.Z.TheEpicOfAlexanderUltimate,
  damageWarn: {
    'TEA Sluice': '49B1',
    'TEA Protean Wave 1': '4824',
    'TEA Protean Wave 2': '49B5',
    'TEA Spin Crusher': '4A72',
    'TEA Sacrament': '485F',
    'TEA Radiant Sacrament': '4886',
    'TEA Almighty Judgment': '4890'
  },
  damageFail: {
    'TEA Hawk Blaster': '4830',
    'TEA Chakram': '4855',
    'TEA Enumeration': '4850',
    'TEA Apocalyptic Ray': '484C',
    'TEA Propeller Wind': '4832'
  },
  shareWarn: {
    'TEA Protean Wave Double 1': '49B6',
    'TEA Protean Wave Double 2': '4825',
    'TEA Fluid Swing': '49B0',
    'TEA Fluid Strike': '49B7',
    'TEA Hidden Mine': '4852',
    'TEA Alpha Sword': '486B',
    // FIXME: this id is the same as Alpha Sword above, is it correct or one of them incorrect?
    // 'TEA Flarethrower': '486B',
    'TEA Chastening Heat': '4A80',
    'TEA Divine Spear': '4A82',
    'TEA Ordained Punishment': '4891',
    // Optical Spread
    'TEA Individual Reprobation': '488C'
  },
  soloFail: {
    // Optical Stack
    'TEA Collective Reprobation': '488D'
  },
  triggers: [{
    // "too much luminous aetheroplasm"
    // When this happens, the target explodes, hitting nearby people
    // but also themselves.
    id: 'TEA Exhaust',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '481F',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (_data, matches) => matches.target === matches.source,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'luminous aetheroplasm',
          de: 'Luminiszentes Ätheroplasma',
          fr: 'Éthéroplasma lumineux',
          ja: '光性爆雷',
          cn: '光性爆雷',
          ko: '빛의 폭뢰',
          tc: '光性爆雷'
        }
      };
    }
  }, {
    id: 'TEA Dropsy',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '121'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        text: matches.effect
      };
    }
  }, {
    id: 'TEA Tether Tracking',
    type: 'Tether',
    netRegex: netregexes/* default.tether */.ZP.tether({
      source: 'Jagd Doll',
      id: '0011'
    }),
    run: (data, matches) => {
      data.jagdTether ??= {};
      data.jagdTether[matches.sourceId] = matches.target;
    }
  }, {
    id: 'TEA Reducible Complexity',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4821',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (data, matches) => {
      return {
        type: 'fail',
        // This may be undefined, which is fine.
        name: data.jagdTether ? data.jagdTether[matches.sourceId] : undefined,
        text: {
          en: 'Doll Death',
          de: 'Puppe Tot',
          fr: 'Poupée morte',
          ja: 'ドールが死んだ',
          cn: '浮士德死亡',
          ko: '인형이 죽음',
          tc: '浮士德死亡'
        }
      };
    }
  }, {
    id: 'TEA Drainage',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '4827',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => !data.party.isTank(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        name: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'TEA Throttle Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '2BC'
    }),
    run: (data, matches) => {
      data.hasThrottle ??= {};
      data.hasThrottle[matches.target] = true;
    }
  }, {
    id: 'TEA Throttle Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '2BC'
    }),
    run: (data, matches) => {
      data.hasThrottle ??= {};
      data.hasThrottle[matches.target] = false;
    }
  }, {
    id: 'TEA Throttle',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '2BC'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (data, matches) => {
      if (!data.hasThrottle) return;
      if (!data.hasThrottle[matches.target]) return;
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }, {
    // Balloon Popping.  It seems like the person who pops it is the
    // first person listed damage-wise, so they are likely the culprit.
    id: 'TEA Outburst',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '482A',
      ...oopsy_common/* playerDamageFields */.np
    }),
    suppressSeconds: 5,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.source
      };
    }
  }]
};
/* harmony default export */ const the_epic_of_alexander = (the_epic_of_alexander_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/alliance/aglaia.ts



// TODO: Byregot's hammer causing people to fall to their death?
// TODO: Rhalgr's Broken World (fake) 71DD technically does no damage if far enough, but survivable halfway
const aglaia_triggerSet = {
  zoneId: zone_id/* default.Aglaia */.Z.Aglaia,
  damageWarn: {
    'Aglaia Byregot Byregot\'s Strike': '725A',
    // blue knockback puck
    'Aglaia Byregot Byregot\'s Strike Lightning': '7168',
    // cardinal lightning during strike #2
    'Aglaia Byregot Levinforge': '7172',
    // lightning hammer line
    'Aglaia Byregot Byregot\'s Spire': '7170',
    // wide line during hammer section
    'Aglaia Byregot Cloud to Ground 1': '704D',
    // moving purple/yellow bubbles
    'Aglaia Byregot Cloud to Ground 2': '704E',
    // moving purple/yellow bubbles
    'Aglaia Byregot Cloud to Ground 3': '716D',
    // moving purple/yellow bubbles
    'Aglaia Byregot Cloud to Ground 4': '716E',
    // moving purple/yellow bubbles
    'Aglaia Rhalgr\'s Emissary Destructive Static': '70E0',
    // front 180 cleave
    'Aglaia Rhalgr\'s Emissary Destructive Charge': '70DB',
    // lightning quadrants
    'Aglaia Rhalgr\'s Emissary Lightning Bolt': '70E2',
    // targeted circles
    'Aglaia Rhalgr\'s Emissary Boltloop 1': '70DD',
    // overlapping expanding lightning rings
    'Aglaia Rhalgr\'s Emissary Boltloop 2': '70DE',
    // overlapping expanding lightning rings
    'Aglaia Rhalgr\'s Emissary Boltloop 3': '70DF',
    // overlapping expanding lightning rings
    'Aglaia Rhalgr Fist of Judgment Hand of the Destroyer': '70B0',
    // 180 cleave punch through blue portal
    'Aglaia Rhalgr Fist of Wrath Hand of the Destroyer': '70AF',
    // 180 cleave punch through red portal
    'Aglaia Rhalgr Rhalgr\'s Beacon': '7314',
    // purple knockback puck
    'Aglaia Rhalgr Bronze Lightning': '70B9',
    // pinwheel ground lightning
    'Aglaia Rhalgr Striking Meteor': '70BB',
    // targeted circle during Bronze Lightning
    'Aglaia Rhalgr Lightning Orb Shock': '70B3',
    // orb explosion during Hell of Lightning + Beacon
    'Aglaia Lions Slash and Burn Donut 1': '71D2',
    // Lioness donut (1 dot)
    'Aglaia Lions Slash and Burn Donut 2': '71D6',
    // Lioness donut (2 dots)
    'Aglaia Lions Slash and Burn Circle 1': '71D0',
    // Lion circle (1 dot)
    'Aglaia Lions Slash and Burn Circle 2': '71D5',
    // Lion circle (2 dots)
    'Aglaia Lions Roaring Blaze 1': '71CE',
    // Lion half cleave (1 dot)
    'Aglaia Lions Roaring Blaze 2': '71CF',
    // Lion half cleave (2 dots)
    'Aglaia Lions Roaring Blaze 3': '72BF',
    // Lion half cleave (when Lioness is dead)
    // FIXME: this id is the same as Roaring Blaze 1 above, is it correct or one of them incorrect?
    // 'Aglaia Lions Roaring Blaze 4': '71CE', // Lioness half cleave (when Lion is dead)
    'Aglaia Lions Trial by Fire': '72C0',
    // large centered circle when Lioness is dead
    'Aglaia Lions Spinning Slash': '72C1',
    // donut when Lion is dead
    'Aglaia Azeyma Solar Wings 1': '7082',
    // narrow front/back safe attack
    'Aglaia Azeyma Solar Wings 2': '7083',
    // narrow front/back safe attack
    'Aglaia Azeyma Solar Flair': '7084',
    // orb exploding after Solar Wings
    'Aglaia Azeyma Solar Fans 1': '708E',
    // horizontal line aoe
    'Aglaia Azeyma Solar Fans 2': '72BE',
    // horizontal line aoe
    'Aglaia Azeyma Warden\'s Flame Radiant Flourish': '7094',
    // Radiant Rhythm/Finish explosion
    'Aglaia Azeyma Solar Fold': '71EE',
    // cross line aoe that spawns fire lines
    'Aglaia Azeyma Folding Flare 1': '7089',
    // expanding fire lines
    'Aglaia Azeyma Folding Flare 2': '731C',
    // expanding fire lines
    'Aglaia Azeyma Dancing Flame 1': '708B',
    // Haute Air-blown fire quadrant
    'Aglaia Azeyma Dancing Flame 2': '708C',
    // Haute Air-blown fire quadrant
    'Aglaia Azeyma Sunbeam': '7097',
    // trine puddles
    'Aglaia Nald\'thal Flames of the Dead': '73A7',
    // on blue out incorrectly during Heat Above, Flames Below
    'Aglaia Nald\'thal Living Heat': '73A9',
    // on red in incorrectly during Heat Above, Flames Below
    'Aglaia Nald\'thal Everfire': '73C4',
    // Once Above, Ever Below moving puddles
    'Aglaia Nald\'thal Once Burned 1': '73C5',
    // Once Above, Ever Below moving red puddles
    'Aglaia Nald\'thal Once Burned 2': '73C6',
    // Once Above, Ever Below moving red puddles
    'Aglaia Nald\'thal Everfire 1': '73C2',
    // Once Above, Ever Below moving blue puddles
    'Aglaia Nald\'thal Everfire 2': '73C3',
    // Once Above, Ever Below moving blue puddles
    'Aglaia Nald\'thal Hell of Fire': '72B8',
    // 180 cleave
    'Aglaia Nald\'thal Wayward Soul': '7110',
    // millions of large circles from dropping orbs
    'Aglaia Nald\'thal Seventh Passage 1': '7118',
    // Fired Up "get out" circle
    'Aglaia Nald\'thal Seventh Passage 2': '7119',
    // Fired Up "get out" circle
    'Aglaia Nald\'thal Soul Vessel Twingaze': '712A',
    // add phase narrow conal
    'Aglaia Nald\'thal Deepest Pit 1': '73C7',
    // Far Above, Deep Below chasing arrows
    'Aglaia Nald\'thal Deepest Pit 2': '73C8' // Far Above, Deep Below chasing arrows
  },

  damageFail: {
    'Aglaia Nald\'thal Tipped Scales': '737A' // failing Balance mechanic (7379 is damage for doing it correctly)
  },

  gainsEffectWarn: {
    // BF9 is the "9999 duration" effect, and BFA is what you get after you step out of fire.
    'Aglaia Azeyma Burns': 'BFA' // Azeyma Wildfire Ward burns
  },

  shareWarn: {
    'Aglaia Byregot Byregot\'s Ward': '7175',
    // tankbuster cleave
    'Aglaia Rhalgr\'s Emissary Destructive Strike': '70D9',
    // tankbuster cleave
    'Aglaia Rhalgr Destructive Bolt': '70B4',
    // 3x tankbuster cleave
    'Aglaia Rhalgr Lightning Storm': '70BA',
    // spread markers
    'Aglaia Nald\'thal Smelting': '7120' // protean spread
  },

  soloFail: {
    'Aglaia Nald\'thal Heaven\'s Trial': '711F',
    // stack marker
    'Aglaia Nald\'thal Soul Vessel Magmatic Spell': '712D' // 3x stack markers
  },

  triggers: [{
    id: 'Aglaia Knocked Off',
    type: 'Ability',
    // 70B8 = Rhalgr's Beacon purple knockback
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['70B8']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const aglaia = (aglaia_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/alliance/euphrosyne.ts



const euphrosyne_triggerSet = {
  zoneId: zone_id/* default.Euphrosyne */.Z.Euphrosyne,
  damageWarn: {
    'Euphrosyne Nophica Spring Flowers': '7C10',
    // "out" from The Giving Land
    'Euphrosyne Nophica Summer Shade': '7C0F',
    // "in" from The Giving Land
    'Euphrosyne Nophica Reaper\'s Gale': '7C0E',
    // waffles
    'Euphrosyne Nophica Landwaker': '7C1C',
    // circles paired with waffles
    'Euphrosyne Nophica Sowing Circle 1': '7C14',
    // initial exaflares
    'Euphrosyne Nophica Sowing Circle 2': '7C15',
    // ongoing exaflares

    'Euphrosyne Gigantoad Labored Leap': '7D31',
    // centered circle
    'Euphrosyne Gigantoad Rush': '7D32',
    // targeted line
    'Euphrosyne Werewood Ovation': '7D33',
    // frontal narrow line

    'Euphrosyne Ktenos Rock Throw': '7D3A',
    // targeted circle
    'Euphrosyne Behemoth Touchdown': '7D34',
    // large circle
    'Euphrosyne Behemoth Trounce': '7D36',
    // frontal conal

    'Euphrosyne Althyk Mythril Greataxe': '7A46',
    // large conal
    'Euphrosyne Nymeia Hydrorythmos 1': '7A40',
    // initial water lines
    'Euphrosyne Nymeia Hydrorythmos 2': '7A41',
    // ongoing water lines

    'Euphrosyne Dhruva Aetherial Blizzard': '7D3F',
    // frontal line
    'Euphrosyne Colossus Frozen Perimeter': '7D3D',
    // centered donut
    'Euphrosyne Colossus Inner Bladestorm': '7D3E',
    // centered circle

    'Euphrosyne Halone Tetrapagos Hailstorm': '7D4E',
    // tetrapagos circle
    'Euphrosyne Halone Tetrapagos Swirl': '7D4F',
    // tetrapagos donut
    'Euphrosyne Halone Tetrapagos Rightrime': '7D50',
    // tetrapagos right cleave
    'Euphrosyne Halone Tetrapagos Leftrime': '7D51',
    // tetrapagos left cleave
    'Euphrosyne Halone Thousandfold Thrust 1': '7D57',
    // initial 180 cleave
    'Euphrosyne Halone Thousandfold Thrust 2': '7D58',
    // ongoing 180 cleave
    'Euphrosyne Halone Lochos 1': '7D5B',
    // initial lochos 180 cleave
    'Euphrosyne Halone Lochos 2': '7D5C',
    // initial lochos 180 cleave
    'Euphrosyne Halone Will of the Fury 1': '7D5E',
    // expanding ring
    'Euphrosyne Halone Will of the Fury 2': '7D5F',
    // expanding ring
    'Euphrosyne Halone Will of the Fury 3': '7D60',
    // expanding ring
    'Euphrosyne Halone Will of the Fury 4': '7D61',
    // expanding ring
    'Euphrosyne Halone Will of the Fury 5': '7D62',
    // expanding ring
    'Euphrosyne Halone Glacial Spear Niphas': '7D69',
    // centered circle on spears
    'Euphrosyne Halone Glacial Spear Cheimon 1': '7D6C',
    // initial rotating lines
    'Euphrosyne Halone Glacial Spear Cheimon 2': '7D6D',
    // ongoing rotating lines

    'Euphrosyne Menphina First Blush': '7BBC',
    // getting hit by the Full Bright moon
    'Euphrosyne Menphina Midnight Frost 1': '7BCD',
    // 180 cleave
    'Euphrosyne Menphina Midnight Frost 2': '7BDD',
    // 180 cleave
    'Euphrosyne Menphina Midnight Frost 3': '7BD1',
    // 180 cleave
    'Euphrosyne Menphina Midnight Frost 4': '7BD2',
    // 180 cleave
    // FIXME: this id is the same as Midnight Frost 2 above, is it correct or one of them incorrect?
    // 'Euphrosyne Menphina Midnight Frost 5': '7BDD', // 180 cleave
    'Euphrosyne Menphina Midnight Frost 6': '7BDE',
    // 180 cleave
    'Euphrosyne Menphina Midnight Frost 7': '7BEA',
    // 180 cleave
    'Euphrosyne Menphina Midnight Frost 8': '7BEB',
    // 180 cleave
    'Euphrosyne Menphina Lover\'s Bridge': '7BBD',
    // getting hit by Full Bright moon (4x)
    'Euphrosyne Menphina Silver Mirror': '7BF6',
    // 3x sets of ground aoes on everyone
    'Euphrosyne Menphina Moonset': '7BC9',
    // 3x large circle jumps
    'Euphrosyne Menphina Winter Halo 1': '7BC7',
    // donut
    'Euphrosyne Menphina Winter Halo 2': '7BEC',
    // donut during Playful Orbit
    'Euphrosyne Menphina Winter Halo 3': '7BDF',
    // donut in second phase, not in Playful Orbit?
    'Euphrosyne Menphina Ice Sprite Ancient Blizzard': '8066',
    // long conal during add phase
    'Euphrosyne Menphina Waxing Claw 1': '7BE0',
    // 180 cleave from dog
    'Euphrosyne Menphina Waxing Claw 2': '7BE1' // 180 cleave from dog
  },

  gainsEffectWarn: {
    'Euphrosyne Halone Deep Freeze': '4E6' // getting hit by Will of the Fury
  },

  shareWarn: {
    'Euphrosyne Nymeia Hydroptosis': '7A45',
    // spread
    'Euphrosyne Halone Ice Dart': '7D66',
    // spread during add phase
    'Euphrosyne Menphina Keen Boonbeam': '7BF4' // spread during add phase
  },

  shareFail: {
    'Euphrosyne Nophica Heavens\' Earth': '7C23',
    // tankbuster
    'Euphrosyne Ktenos Sweeping Gouge': '7D39',
    // tankbuster (does this cleave??)
    'Euphrosyne Colossuus Rapid Sever': '7D3C',
    // tankbuster (does this cleave??)
    'Euphrosyne Halone Spears Three': '7D78',
    // tankbuster
    'Euphrosyne Menphina Lunar Kiss': '7BF9' // laser tankbuster
  },

  triggers: [{
    // These do no damage if you are standing in the correct shield.
    id: 'Euphrosyne Nophica Blossoms',
    type: 'Ability',
    // 7C20 = Blueblossoms
    // 7C21 = Giltblossoms
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7C20', '7C21'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // No damage if on a purple fissure.
    id: 'Euphrosyne Althyk Inexorable Pull',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7A43',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // No damage if looking towards/away.
    id: 'Euphrosyne Althyk Spinner\'s Wheel Arcane Attraction',
    type: 'Ability',
    // 7A54 = Spinner's Wheel damage for Arcane Attraction
    // 7A55 = Spinner's Wheel damage for Attraction Reversed
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7A54', '7A55'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'Euphrosyne Nymeia Hydrostasis',
    type: 'Ability',
    // 7A3B = 1, 7A3C = 2, 7A3D = 3, 7A3E = 3 renumbered to 1
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7A3B', '7A3C', '7A3D', '7A3E']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const euphrosyne = (euphrosyne_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/alliance/thaleia.ts


// TODO: Thaliak: getting knocked off Thaliak's arena from pushback
// TODO: Thaliak: standing on bad triangle during initial Tetraktys cast
// TODO: Llymlaen: standing on red knockback line
// TODO: Llymlaen: 8812 vs 8813 go stand on purple knockback puck (also what happens if not knocked back to area)
// TODO: Eulogia can Hydrostasis 8A38/9/A knock you off?
const thaleia_triggerSet = {
  zoneId: zone_id/* default.Thaleia */.Z.Thaleia,
  damageWarn: {
    // Trash 1
    'Thaleia Serpent of Thaleia Water III': '8A6E',
    // large targeted circle
    'Thaleia Triton of Thaleia Pelagic Cleaver': '8A6F',
    // large front conal
    'Thaleia Divine Sprite Flood': '8A72',
    // centered? circle

    // Thaliak
    'Thaleia Thaliak Crash': '88C8',
    // rock damage from Rheognosis Petrine knockback
    'Thaleia Thaliak Tetraktys 1': '88CA',
    // small blue triangle
    'Thaleia Thaliak Tetraktys 2': '88CB',
    // large green triangle
    'Thaleia Thaliak Tetraktuos Kosmos 1': '88CD',
    // being hit by the falling walls
    'Thaleia Thaliak Tetraktuos Kosmos 2': '88CE',
    // standing in the initial triangle with falling walls
    'Thaleia Thaliak Hieroglyphika': '88D0',
    // rotated green squares
    'Thaleia Thaliak Left Bank 1': '88D2',
    // 180 left cleave
    'Thaleia Thaliak Left Bank 2': '8C2C',
    // 180 left cleave during Hieroglyphika
    'Thaleia Thaliak Right Bank 1': '88D3',
    // 180 right cleave
    'Thaleia Thaliak Right Bank 2': '8C2D',
    // 180 right cleave during Hieroglyphika

    // Llymlaen
    'Thaleia Llymlaen Wind Rose': '880C',
    // "get out"
    'Thaleia Llymlaen Seafoam Spiral': '880D',
    // "get under"
    'Thaleia Llymlaen Left Strait': '8851',
    // 180 left cleave
    'Thaleia Llymlaen Right Strait': '8852',
    // 180 right cleave
    'Thaleia Llymlaen Dire Straits 1': '880F',
    // Navigator's Trident left 180 cleave
    'Thaleia Llymlaen Dire Straits 2': '8810',
    // Navigator's Trident right 180 cleave
    'Thaleia Llymlaen Landing': '881C',
    // large trident circles
    'Thaleia Llymlaen Stormwhorl': '881E',
    // ground puddle during 881F Stormwinds spread
    'Thaleia Llymlaen Maelstrom': '882A',
    // three puddles on the ground after Serpents' Tide
    'Thaleia Llymlaen Surging Wave 1': '8812',
    // purple puck along with Shockwave knockback
    'Thaleia Llymlaen Surging Wave 2': '8813',
    // purple puck along with Shockwave knockback
    'Thaleia Llymlaen Frothing Sea': '880A',
    // damage from the water afer Shockwave knockback
    'Thaleia Llymlaen Sphere Shatter': '882D',
    // hitting one of the Sea-foam bubbles after Shockwave knockback
    'Thaleia Llymlaen To the Last': '8818',
    // left/right cleaves after Shockwave (both sides)
    'Thaleia Llymlaen Serpents\' Tide 1': '8826',
    // vertical Perykos serpent dash
    'Thaleia Llymlaen Serpents\' Tide 2': '8827',
    // horizontal Perykos serpent dash
    'Thaleia Llymlaen Serpents\' Tide 3': '8828',
    // vertical Thalaos serpent dash
    'Thaleia Llymlaen Serpents\' Tide 4': '8829',
    // horizontal Thalaos serpent dash

    // Oschon
    'Thaleia Oschon Trek Shot 1': '898F',
    // moving arrow conal
    'Thaleia Oschon Trek Shot 2': '8C44',
    // moving arrow conal
    'Thaleia Oschon Soaring Minuet 1': '8D0E',
    // back safe 270 cleave (1st one)
    'Thaleia Oschon Soaring Minuet 2': '8994',
    // back safe 270 cleave (2nd one)
    'Thaleia Oschon Swinging Draw': '898C',
    // clone moving arrow conal
    'Thaleia Oschon Downhill 1': '89A1',
    // orange puddles during Climbing Shot knockback (small version)
    'Thaleia Oschon Downhill 2': '89A2',
    // red puddles during Wandering Volley knockback (big version)
    'Thaleia Oschon Downhill 3': '8C45',
    // puddle damage during 89B2 Arrow Trail
    'Thaleia Oschon Piton Pull': '89AB',
    //  Piton Pull large circles
    'Thaleia Oschon Great Whirlwind': '89AE',
    // Wandering Shot/Volley orb explosion
    'Thaleia Oschon Altitude': '89B1',
    // previewed green circles
    'Thaleia Oschon Arrow Trail': '89B4',
    // line of arrows after 89B3 preview

    // Trash 2
    'Thaleia Angelos Ring of Skylight': '8A74',
    // large donut from big add
    'Thaleia Angelos Skylight Cross': '8A75',
    // large cross attack from big add
    'Thaleia Angelos Mikros Skylight': '8A76',
    // targeted circles from small adds

    // Eulogia
    'Thaleia Eulogia Quintessence 1': '8A1A',
    // First Form movement (right cleave)
    'Thaleia Eulogia Quintessence 2': '8A1B',
    // First Form movement (left cleave)
    'Thaleia Eulogia Quintessence 3': '8A1C',
    // First Form movement (under)
    'Thaleia Eulogia Quintessence 4': '8CE5',
    // Second Form movement (right cleave)
    'Thaleia Eulogia Quintessence 5': '8CE6',
    // Second Form movement (left cleave)
    'Thaleia Eulogia Quintessence 6': '8CE7',
    // Second Form movement (under)
    'Thaleia Eulogia Quintessence 7': '8CE8',
    // Third Form movement (right cleave)
    'Thaleia Eulogia Quintessence 8': '8CE9',
    // Third Form movement (left cleave)
    'Thaleia Eulogia Quintessence 9': '8CEA',
    // Third Form movement (under)
    'Thaleia Eulogia First Blush 1': '8A33',
    // Love's Light moon #1 line
    'Thaleia Eulogia First Blush 2': '8A34',
    // Love's Light moon #2 line
    'Thaleia Eulogia First Blush 3': '8A35',
    // Love's Light moon #3 line
    'Thaleia Eulogia First Blush 4': '8A36',
    // Love's Light moon #4 line
    'Thaleia Eulogia Solar Fans': '8A3C',
    // initial Warden's Flame fan lines
    'Thaleia Eulogia Radiant Flight ': '8A3F',
    // Warden's Flame fans when moving with Radiant Flight
    'Thaleia Eulogia Radiant Flourish': '8A41',
    // Warden's Flame fan large circles during Radiant Finish
    'Thaleia Eulogia Hieroglyphika': '8A44',
    // rotated green squares
    'Thaleia Eulogia Hand of the Destroyer 1': '8A49',
    // red half room cleave fist punch
    'Thaleia Eulogia Hand of the Destroyer 2': '8A4A',
    // blue half room cleave fist punch
    'Thaleia Eulogia Lightning Bolt': '8A50',
    // large trident circles
    'Thaleia Eulogia Byregot\'s Strike 1': '8A52',
    // blue puck that knocks back
    'Thaleia Eulogia Byregot\'s Strike 2': '8A54',
    // lightning bolts
    'Thaleia Eulogia Thousandfold Thrust 1': '8A59',
    // initial hit of 180 red shield cleave
    'Thaleia Eulogia Thousandfold Thrust 2': '8A5A',
    // ongoing hits of 180 red shield cleave
    'Thaleia Eulogia Soaring Minuet': '8A69',
    // back safe 270 cleave
    'Thaleia Eulogia Once Burned 1': '8D00',
    // initial orange puddles
    'Thaleia Eulogia Once Burned 2': '8D02',
    // moving orange puddles
    'Thaleia Eulogia Everfire 1': '8D01',
    // initial blue puddles
    'Thaleia Eulogia Everfire 2': '8D03' // moving blue puddles
  },

  shareWarn: {
    'Thaleia Thaliak Hydroptosis': '88D5',
    // spread
    'Thaleia Llymlaen Stormwinds': '881F' // spread
  },

  shareFail: {
    'Thaleia Thaliak Rhyton': '88D7',
    // triple tankbuster lasers
    'Thaleia Oschon The Arrow 1': '889D',
    // triple tankbusters (small version)
    'Thaleia Oschon The Arrow 2': '889E',
    // triple tankbusters (big version)
    'Thaleia Eulogia Sunbeam': '8A01' // triple tankbusters
  }
};

/* harmony default export */ const thaleia = (thaleia_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/aetherfont.ts

const aetherfont_triggerSet = {
  zoneId: zone_id/* default.TheAetherfont */.Z.TheAetherfont,
  damageWarn: {
    'Aetherfont Haam Frostbeast Icestorm': '84C7',
    // frontal cleave
    'Aetherfont Haam Otodus Aquatic Lance': '84C8',
    // targeted circle

    // Boss 1
    'Aetherfont Lyngbakr Tidal Breath': '8240',
    // 180 cleave
    'Aetherfont Lyngbakr Resonant Frequency': '823B',
    // small rock explosions
    'Aetherfont Lyngbakr Explosive Frequency': '823C',
    // large rock explosions

    'Aetherfont Haam Troll Uppercut': '84CA',
    // frontal conal
    'Aetherfont Haam Golem Earthen Heart': '84C9',
    // targeted circle
    'Aetherfont Haam Crystal Hard Head': '84CB',
    // frontal conal

    // Boss 2
    'Aetherfont Arkas Lightning Leap 1': '824E',
    // targeted circle jump 1
    'Aetherfont Arkas Lightning Leap 2': '8799',
    // targeted circle jump 1 electricity explosion
    'Aetherfont Arkas Lightning Leap 3': '824F',
    // targeted circle jump 2
    'Aetherfont Arkas Lightning Leap 4': '8250',
    // targeted circle jump 2 electricity explosion
    'Aetherfont Arkas Forked Fissures': '8251',
    // lines from Lightnign Leap
    'Aetherfont Arkas Spinning Claw': '8252',
    // centered circle
    'Aetherfont Arkas Spun Lightning': '8253',
    // centered circle electricity explosion
    'Aetherfont Arkas Lightning Rampage 1': '860E',
    // targeted circle jump 1
    'Aetherfont Arkas Lightning Rampage 2': '879A',
    // targeted circle jump 1 electricity explosion
    'Aetherfont Arkas Lightning Rampage 3': '860F',
    // targeted circle jump 2-4
    'Aetherfont Arkas Lightning Rampage 4': '8611',
    // targeted circle jump 2-4 electricity explosion
    'Aetherfont Arkas Shock': '8255',
    // electricity explosions from Electric Eruption

    'Aetherfont Haam Forlorn Aetherial Spark': '84CC',
    // line aoe

    // Boss 3
    'Aetherfont Octomammoth Clearout': '8244',
    // tentacle circle aoe
    'Aetherfont Octomammoth Wallop': '8242',
    // tentacle line aoe
    'Aetherfont Octomammoth Vivid Eyes': '824B',
    // donut ring
    'Aetherfont Octomammoth Saline Spit': '8249',
    // all platform circles
    'Aetherfont Octomammoth Telekinesis': '8427',
    // some platform laser circles
    'Aetherfont Octomammoth Breathstroke': '86F7' // some platform laser circles
  },

  gainsEffectWarn: {
    // C01 is the infinite effect, C02 is 15 seconds when you step out.
    'Aetherfont Arkas Electrocution': 'C01'
  },
  shareWarn: {
    'Aetherfont Lyngbakr Waterspout': '823E',
    // Floodstide spread markers
    'Aetherfont Octomammoth Water Drop': '8284' // spread markers
  },

  soloWarn: {
    'Aetherfont Lyngbakr Tidalspout': '823F',
    // stack marker
    'Aetherfont Arkas Lightning Claw': '8256' // stack marker
  }
};

/* harmony default export */ const aetherfont = (aetherfont_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/aloalo_island.ts



const nonzeroDamageMistake = (triggerId, abilityId, type) => {
  return {
    id: triggerId,
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: abilityId,
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: type,
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  };
};
const renameMistake = (triggerId, abilityId, type, text) => {
  return {
    id: triggerId,
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: abilityId,
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: type,
        blame: matches.target,
        reportId: matches.targetId,
        text: text
      };
    }
  };
};
const aloalo_island_triggerSet = {
  zoneId: zone_id/* default.AloaloIsland */.Z.AloaloIsland,
  damageWarn: {
    // Trash (left)
    'Aloalo Uragnite Palsynyxis': '8853',
    // small front conal
    'Aloalo Anala Flame Dance': '8CF1',
    // targeted circle
    'Aloalo Snipper Bubble Shower': '8856',
    // front conal
    'Aloalo Kiwakin Tail Screw': '8CF0',
    // targeted circle (not a 1 hp mechanic)
    'Aloalo Ray Hydrocannon': '885B',
    // line
    'Aloalo Biast Electrify': '8CF2',
    // targeted circle
    'Aloalo Ogrebon Flouder': '885A',
    // line
    'Aloalo Zaratan Sewer Water': '8859',
    // front 180 cleave

    // Trash (middle)
    'Aloalo Worm Poison Breath': '8864',
    // front conal
    'Aloalo Gigantoad Languid Lap': '8865',
    // large front conal
    'Aloalo Monstera Sweet Nectar 1': '8866',
    // front conal
    'Aloalo Monstera Sweet Nectar 2': '8867',
    // back left conal
    'Aloalo Monstera Sweet Nectar 3': '8868',
    // back right conal
    'Aloalo Islekeeper Isle Drop': '886D',
    // targeted circle
    'Aloalo Bird Feathercut': '886E',
    // line
    'Aloalo Susena Rock Throw': '8CEE',
    // targeted circle
    'Aloalo Wood Golem Ovation': '886A',
    // line

    // Trash (right)
    'Aloalo Deadly Coconut Nut Lob': '885C',
    // targeted circle
    'Aloalo Asvattha Bad Breath': '885D',
    // wide front conal
    'Aloalo Baritine Croc Flatten': '885E',
    // small front conal
    'Aloalo Gobbue Moldy Phlegm': '8860',
    // targeted circle
    'Aloalo Boar Infusion': '8861',
    // line aoe

    // Quaqua (common)
    'Aloalo Quaqua Ravaging Axe': '8B8A',
    // circle damage from Arcane Armaments axe
    'Aloalo Quaqua Ringing Quoits': '8B8B',
    // donut damage from Arcane Armaments ring
    'Aloalo Quaqua Violet Storm': '8B95',
    // large late telegraph front conal
    'Aloalo Quaqua Rout 1': '8B91',
    // initial charge
    'Aloalo Quaqua Rout 2': '8B92',
    // followup 3 charges

    // Quaqua (left)
    'Aloalo Quaqua Scalding Waves 1': '8B97',
    // initial fire lines
    'Aloalo Quaqua Scalding Waves 2': '8B98',
    // bouncing fire lines
    'Aloalo Quaqua Cloud to Ground 1': '8B9C',
    // initial hit of Drake exaflares
    'Aloalo Quaqua Cloud to Ground 2': '8B9D',
    // followup hits of Drake exaflares

    // Quaqua (middle)
    'Aloalo Quaqua Elemental Impact': '8BA0',
    // initial water spear circles
    'Aloalo Quaqua Flowing Lance 1': '8BA1',
    // initial water spear cross
    'Aloalo Quaqua Flowing Lance 2': '8BA2',
    // initial water spear cross
    'Aloalo Quaqua Flowing Lance 3': '8CD1',
    // followup rotating water spear crosses

    // Quaqua (right)
    'Aloalo Quaqua Fell Forces': '8BA5',
    // being too close to Aetheric Charge purple orb
    'Aloalo Quaqua Fell Confluence': '8D17',
    // purple orb enrage damage from not cleansing it

    // Ketuduke
    'Aloalo Ketuduke Saturate Orb 1': '8A7C',
    // Spring Crystal orb circle (no bubbles)
    'Aloalo Ketuduke Saturate Orb 2': '8A7D',
    // Spring Crystal orb circle (w/Bubble Net)
    'Aloalo Ketuduke Saturate Orb 3': '8A7E',
    // Spring Crystal rupee line laser (no bubbles)
    'Aloalo Ketuduke Saturate Orb 4': '8A7F',
    // Spring Crystal rupee line laser (w/Bubble Net)
    'Aloalo Ketuduke Sphere Shatter': '8A87',
    // damage from moving arches
    'Aloalo Ketuduke Riptide': '8A89',
    // stepping in Airy Bubble
    'Aloalo Ketuduke Receding Twintides': '8A9D',
    // initial out during out->in
    'Aloalo Ketuduke Near Tide': '8A9E',
    // second out during in->out
    'Aloalo Ketuduke Encroaching Twintides': '8A9F',
    // initial in during in->out
    'Aloalo Ketuduke Far Tide': '8AA0',
    // second in during out->in
    'Aloalo Ketuduke Hydrobomb': '8AA2',
    // 3x puddles
    'Aloalo Ketuduke Hundred Lashing': '8A97',
    // 180 cleave from Zaratan add

    // Lala
    'Aloalo Lala Arcane Blight': '8873',
    // 270 degree cleave
    'Aloalo Lala Bright Pulse 1': '8878',
    // initial blue square
    'Aloalo Lala Bright Pulse 2': '8879',
    // followup blue square
    'Aloalo Lala Rolling Spout 1': '8881',
    // initial Kapokapo donut
    'Aloalo Lala Rolling Spout 2': '8A6B',
    // Kapokapo donut during Arcane Plot
    'Aloalo Lala Aero II 1': '8885',
    // Golem line
    'Aloalo Lala Aero II 2': '8A6D',
    // Golem line during Arcane Plot
    'Aloalo Lala Volcanic Coordinates': '8D2D',
    // targeted circle puddle

    // Statice
    'Aloalo Statice Hidden Mine': '892D',
    // stepping on the hidden mine
    'Aloalo Statice 4-tonze Weight': '8932',
    // Heavy Weight circles during Balloon knockback
    'Aloalo Statice Trigger Happy': '892C',
    // limit cut dart board (filled pie slice)
    'Aloalo Statice Fire Spread 1': '8934',
    // initial fire bars
    'Aloalo Statice Fire Spread 2': '8935',
    // initial fire bars
    'Aloalo Statice Fire Spread 3': '89F6',
    // rotating fire bars
    'Aloalo Statice Fire Spread 4': '89F7',
    // rotating fire bars
    'Aloalo Statice Surprising Missile Burst': '8941',
    // hitting Present Box's Surprising Missile
    'Aloalo Statice Faerie Ring': '893F',
    // Surprising Staff donut attack
    'Aloalo Statice Faerie Road': '8940',
    // Surprising Staff line attack
    'Aloalo Statice Treasure Box Burst': '8937',
    // fake Treasure Box explosion
    'Aloalo Statice Meteor': '893A',
    // red Pinwheel slice
    'Aloalo Statice Sledgemagic': '893B',
    // yellow Pinwheel slice
    'Aloalo Statice Hunks of Junk': '893C',
    // blue Pinwheel slice

    // Loquloqui
    'Aloalo Loquloqui Land Wave': '87BD',
    // 180 cleave damage
    'Aloalo Loquloqui Rush 1': '87C0',
    // normal bird narrow line
    'Aloalo Loquloqui Rush 2': '87C1',
    // glowing bird wide line
    'Aloalo Loquloqui Turnabout 1': '87C2',
    // normal lizard small circle
    'Aloalo Loquloqui Turnabout 2': '87C3',
    // glowing lizard large circle
    'Aloalo Loquloqui Pliant Petals': '87C6',
    // plant tether circles
    'Aloalo Loquloqui Brilliant Blossoms': '87C8',
    // flower square exploding
    'Aloalo Loquloqui Islebloom Light': '87CD' // ground puddles during knockback
  },

  gainsEffectWarn: {
    // C05 = 9999 duration, C06 = 15s duration
    'Aloalo Bleed': 'C05',
    // standing outside Quaqua or in Lala blue squares or outside Loquloqui
    // C03 = 9999 duration, C04 = 15s duration
    'Aloalo Dropsy': 'C03',
    // standing outside Ketuduke
    // BF9 = 9999 duration, BFA = 15s duration
    'Aloalo Burns': 'BF9',
    // standing outside Lala
    // C09 = 9999 duration, C0A = 15s duration
    'Aloalo Toxicosis': 'C09' // standing in Quaqua middle poison circles
  },

  triggers: [
  // Path 04: not being in bubble for Ogrebon
  nonzeroDamageMistake('Aloalo Quaqua Shock', '8A9A', 'warn'),
  // Right path: look away from statues
  nonzeroDamageMistake('Aloalo Quaqua Arcane Intervention', '8BAE', 'warn'), {
    id: 'Aloalo Lala Targeted Light',
    type: 'HeadMarker',
    // 01F7 = green check
    // 01F8 = red X
    netRegex: netregexes/* default.headMarker */.ZP.headMarker({
      id: '01F8'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          // Corresponds to 0x8CDC ability
          en: 'Targeted Light',
          de: 'Gezieltes Licht',
          fr: 'Lumière ciblée',
          ja: '高精度光弾',
          cn: '高精度光弹',
          ko: '고정밀 광탄',
          tc: '高精度光彈'
        }
      };
    }
  }, renameMistake('Aloalo Statice Fair Flight', '89F5', 'warn', {
    // Corresponds to 0x8946 ability
    en: 'Fair Flight',
    de: 'Feenflug',
    fr: 'Vol équitable',
    ja: 'フェアリーノックアップ',
    cn: '仙女击飞',
    ko: '요정 비행',
    tc: '仙女擊飛'
  })]
};
/* harmony default export */ const aloalo_island = (aloalo_island_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/alzadaals_legacy.ts

const alzadaals_legacy_triggerSet = {
  zoneId: zone_id/* default.AlzadaalsLegacy */.Z.AlzadaalsLegacy,
  damageWarn: {
    'Alzadaal Alzadaal\'s Qutrub Whirling Slash': '703E',
    // Circle AoE, before boss 1
    'Alzadaal Alzadaal\'s Qutrub Leaping Cleave': '7040',
    // Circle AoE, before boss 1
    'Alzadaal Alzadaal\'s Asvattha Bad Breath': '7041',
    // Conal AoE, before boss 1

    'Alzadaal Ambujam Toxin Shower': '65FC',
    // Large AoE circles, boss 1
    'Alzadaal Abujam Corrosive Venom': '71E6',
    // Large AoE circles, boss 1
    'Alzadaal Ambujam Toxic Fountain': '731B',
    // Red AoE circles, boss 1
    'Alzadaal Ambujam Corrosive Fountain': '7374',
    // Blue AoE  circles, boss 1

    'Alzadaal Bounty Rockfin Aqua Spear': '704C',
    // Rectangle cleave AoE, before boss 2
    'Alzadaal Alzadaal\'s Rampart Pulse Laser': '7048',
    // Rectangle AoE, before boss 2, only if VERRRY slow
    'Alzadaal Bounty Uragnite Palsynixys': '7043',
    // Frontal cone AoE, before boss 2
    'Alzadaal Bounty Ruszor Aqua BLast': '7044',
    // Large frontal cone AoE, before boss 2
    'Alzadaal Shallows Ogrebon Flounder': '7046',
    // Rectangle AoE, before boss 2
    'Alzadaal Bounty Vepar Screwdriver': '7047',
    // Small frontal cone AoE, before boss 2
    'Alzadaal Bounty Clawtrap Alzadaal XIV Water III': '704F',
    // Frontal cone AoE, before boss 2

    'Alzadaal Armored Chariot Assault Cannon 1': '6F1C',
    // Primary cannon fire, boss 2
    'Alzadaal Armored Chariot Assault Cannon 2': '6F1D',
    // Primary cannon fire, boss 2
    'Alzadaal Armored Chariot Cannon Reflection': '6F27',
    // Secondary cannon fire, boss 2

    'Alzadaal Alzadaal\'s Acrolith Earthshatter': '7051',
    // Centered circle AoE, after boss 2
    'Alzadaal Alzadaal\'s Guardian Dominion Slash': '7052',
    // Large frontal cone AoE, after boss 2
    'Alzadaal Mystic Weapon Smite of Rage': '7053',
    // Line AoE, after boss 2
    'Alzadaal Mystic Weapon Whirl of Rage': '7054',
    // Centered circle AoE, after boss 2
    'Alzadaal Alzadaal\'s Mimic Deathtrap': '7055',
    // Centered circle AoE, after boss 2

    'Alzadaal Kapikulu Basting Blade': '6F68',
    // Large Rectangle AoE, boss 3
    'Alzadaal Kapikulu Mana Explosion': '6F6B' // Power Serge explosion circles, boss 3
  },

  gainsEffectWarn: {
    'Alzadaal Kapikulu Stab Wound': 'BF6' // Spike traps, boss 3
  },

  shareWarn: {
    'Alzadaal Armored Chariot Graviton Cannon': '7373',
    // Large spread circles, boss 2
    'Alzadaal Kapikulu Rotary Gale': '6F6D' // Spread circles, boss 3
  },

  soloWarn: {
    'Alzadaal Kapikulu Magnitude Opus': '6F6F' // Standard stack marker, boss 3
  }
};

/* harmony default export */ const alzadaals_legacy = (alzadaals_legacy_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/another_aloalo_island-savage.ts
// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/06-ew/dungeon/another_aloalo_island.ts





// TODO: people who missed their 8AE2 Burst tower
// TODO: failing 8BEB Radiance orb damage during Analysis
// TODO: failing 8CE1 Targeted Light during Analysis
// TODO: people who failed Subtractive Suppressor Alpha + Beta
// TODO: walking over 8BF2 Arcane Combustion when you don't have Suppressor
// TODO: taking extra 8BEA Inferno Divide squares during Spatial Tactics
// TODO: 01F7(success) and 01F8(fail) check and x markers?
// TODO: players not in Trapshooting stack 8977
// TODO: players not in Present Box / Pinwheeling Dartboard two person stack

const another_aloalo_island_savage_renameMistake = (triggerId, abilityId, type, text) => {
  return {
    id: triggerId,
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: abilityId,
      ...oopsy_common/* playerTargetFields */.Md
    }),
    mistake: (_data, matches) => {
      return {
        type: type,
        blame: matches.target,
        reportId: matches.targetId,
        text: text
      };
    }
  };
};
// TODO: we could probably move these helpers to some oopsy util.
const pushedIntoWall = (triggerId, abilityId) => {
  return {
    id: triggerId,
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: abilityId,
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '넉백',
          tc: '擊退至牆'
        }
      };
    }
  };
};
const another_aloalo_island_savage_nonzeroDamageMistake = (triggerId, abilityId, type) => {
  return {
    id: triggerId,
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: abilityId,
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: type,
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  };
};
const another_aloalo_island_savage_triggerSet = {
  zoneId: zone_id/* default.AnotherAloaloIslandSavage */.Z.AnotherAloaloIslandSavage,
  damageWarn: {
    // Trash 1
    'AAIS Twister': '8BCF',
    // Twister tornados
    'AAIS Kiwakin Tail Screw': '8BC9',
    // baited circle
    'AAIS Snipper Bubble Shower': '8BCA',
    // front conal
    'AAIS Snipper Crab Dribble': '8BCB',
    // fast back conal after Bubble Shower
    'AAIS Ray Hydrocannon': '8C4B',
    // line aoe
    'AAIS Ray Expulsion': '8BCE',
    // "get out"
    'AAIS Ray Electric Whorl': '8BCD',
    // "get in"

    // Ketuduke
    'AAIS Spring Crystal Saturate 1': '8ADB',
    // orb circle
    'AAIS Spring Crystal Saturate 2': '8ADC',
    // rupee line laser
    'AAIS Sphere Shatter': '8AE0',
    // moving arches
    'AAIS Receding Twintides': '8AE7',
    // initial out during out->in
    'AAIS Near Tide': '8AE8',
    // second out during in->out with 8AE9 Encroaching Twintides
    'AAIS Encroaching Twintides': '8AE9',
    // initial in during in->out
    'AAIS Far Tide': '8AEA',
    // second in during out->in with 8AE7 Receding Twintides
    'AAIS Hydrobomb': '8AEB',
    // 3x puddles duruing 8ABD Blowing Bubbles

    // Trash 2
    'AAIS Wood Golem Ovation': '8BD4',
    // front line aoe
    'AAIS Islekeeper Isle Drop': '8C3C',
    // front circle

    // Lala
    'AAIS Arcane Blight': '8BE6',
    // 270 degree rotating cleave
    'AAIS Bright Pulse 1': '8BE8',
    // initial blue square
    'AAIS Bright Pulse 2': '8BE9',
    // moving blue square
    'AAIS Arcane Mine': '8BF1',
    // initial Arcane Mine squares
    'AAIS Golem Aero II': '8BFB',
    // line damage from Aloalo Golem during Symmetric Surge
    'AAIS Telluric Theorem': '8C00',
    // puddles from Explosive Theorem spreads

    // Statice
    'AAIS Trigger Happy': '8969',
    // limit cut dart board
    'AAIS Bomb Burst': '897A',
    // bomb explosion
    'AAIS Uncommon Ground': '8CC3',
    // people who are on the same dartboard color with Bull's-eye
    'AAIS Faerie Ring': '8973',
    // donut rings during Present Box
    'AAIS Fire Spread 1': '896F',
    // initial rotating fire (from Ball of Fire)
    'AAIS Fire Spread 2': '89FB' // ongoing rotating fire damage (from Statice)
  },

  damageFail: {
    'AAIS Big Burst': '8AE3',
    // tower failure damage
    'AAIS Massive Explosion 1': '8BF3',
    // failing to resolve Subractive Suppressor Alpha
    'AAIS Massive Explosion 2': '8BF4',
    // failing to resolve Subractive Suppressor Beta
    'AAIS Burning Chains': '8CC1',
    // damage from not breaking chains
    'AAIS Surprising Missile Burst': '8974',
    // running into Surprising Missile tethered add
    'AAIS Surprising Claw Death by Claw': '8975' // running into Surprising Claw tethered add
  },

  gainsEffectFail: {
    // C03 = 9999 duration, ??? = 15s duration
    'AAIS Dropsy': 'C03',
    // standing outside Ketuduke
    // C05 = 9999 duration, C06 = 15s duration
    'AAIS Bleeding': 'C05',
    // standing in blue square during Lala
    // BF9 = 9999 duration, BFA??? = 15s duration
    'AAIS Burns': 'BF9' // standing outside Lala
  },

  shareWarn: {
    'AAIS Hydrobullet': '8ADF',
    // spread debuffs
    'AAIS Wood Golem Tornado': '8BD3',
    // headmarker -> bind and heavy aoe
    'AAIS Powerful Light': '8BFD',
    // spread marker during Symmetric Surge that turns squares blue
    'AAIS Explosive Theorem': '8BFF',
    // large spreads with Telluric Theorem puddles
    'AAIS Trapshooting Spread': '8978',
    // spread damage from Trick Reload
    'AAIS Firewords Spread': '897D' // spread damage during Present Box / Pinwheeling Dartboard
  },

  soloWarn: {
    'AAIS Snipper Water III': '8BCC',
    // Snipper stack marker
    'AAIS Islekeeper Gravity Force': '8C3A',
    // stack
    'AAIS Trapshooting Stack': '8977' // stack damage from Trick Reload
  },

  soloFail: {
    'AAIS Hydrofall': '8ADE',
    // partner stack debuffs
    'AAIS Symmetric Surge': '8BF5',
    // two person stack that gives magic vuln up
    'AAIS Fireworks Stack': '897C' // two person stack damage during Present Box / Pinwheeling Dartboard
  },

  triggers: [another_aloalo_island_savage_renameMistake('AAIS Tornado', '8BCF', 'fail', {
    // running into a tornado in the initial trash section
    en: 'Tornado',
    de: 'Tornado',
    fr: 'Tornade',
    ja: 'トルネド',
    cn: '龙卷风',
    ko: '토네이도',
    tc: '龍捲風'
  }), pushedIntoWall('AAIS Angry Seas', '8AE1'), pushedIntoWall('AAIS Pop', '896B'), another_aloalo_island_savage_nonzeroDamageMistake('AAIS Hundred Lashings', ['8AE5', '8AE6'], 'warn')]
};
/* harmony default export */ const another_aloalo_island_savage = (another_aloalo_island_savage_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/another_aloalo_island.ts




// TODO: people who missed their 8AC2 Burst tower
// TODO: failing 8894 Radiance orb damage during Analysis
// TODO: failing 8CDF Targeted Light during Analysis
// TODO: people who failed Subtractive Suppressor Alpha + Beta
// TODO: walking over 889B Arcane Combustion when you don't have Suppressor
// TODO: taking extra 8893 Inferno Divide squares during Spatial Tactics
// TODO: 01F7(success) and 01F8(fail) check and x markers?
// TODO: players not in Trapshooting stack 895A
// TODO: players not in Present Box / Pinwheeling Dartboard two person stack

const another_aloalo_island_renameMistake = (triggerId, abilityId, type, text) => {
  return {
    id: triggerId,
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: abilityId,
      ...oopsy_common/* playerTargetFields */.Md
    }),
    mistake: (_data, matches) => {
      return {
        type: type,
        blame: matches.target,
        reportId: matches.targetId,
        text: text
      };
    }
  };
};
// TODO: we could probably move these helpers to some oopsy util.
const another_aloalo_island_pushedIntoWall = (triggerId, abilityId) => {
  return {
    id: triggerId,
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: abilityId,
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '넉백',
          tc: '擊退至牆'
        }
      };
    }
  };
};
const another_aloalo_island_nonzeroDamageMistake = (triggerId, abilityId, type) => {
  return {
    id: triggerId,
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: abilityId,
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: type,
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  };
};
const another_aloalo_island_triggerSet = {
  zoneId: zone_id/* default.AnotherAloaloIsland */.Z.AnotherAloaloIsland,
  damageWarn: {
    // Trash 1
    'AAI Twister': '8BC0',
    // Twister tornados
    'AAI Kiwakin Tail Screw': '8BB8',
    // baited circle
    'AAI Snipper Bubble Shower': '8BB9',
    // front conal
    'AAI Snipper Crab Dribble': '8BBA',
    // fast back conal after Bubble Shower
    'AAI Ray Hydrocannon': '8BBD',
    // line aoe
    'AAI Ray Expulsion': '8BBF',
    // "get out"
    'AAI Ray Electric Whorl': '8BBE',
    // "get in"

    // Ketuduke
    'AAI Spring Crystal Saturate 1': '8AAB',
    // orb circle
    'AAI Spring Crystal Saturate 2': '8AAC',
    // rupee line laser
    'AAI Sphere Shatter': '8ABC',
    // moving arches
    'AAI Receding Twintides': '8ACC',
    // initial out during out->in
    'AAI Near Tide': '8ACD',
    // second out during in->out with 8ACE Encroaching Twintides
    'AAI Encroaching Twintides': '8ACE',
    // initial in during in->out
    'AAI Far Tide': '8ACF',
    // second in during out->in with 8ACC Receding Twintides
    'AAI Hydrobomb': '8AD1',
    // 3x puddles duruing 8ABD Blowing Bubbles

    // Trash 2
    'AAI Wood Golem Ovation': '8BC1',
    // front line aoe
    'AAI Islekeeper Isle Drop': '8C6F',
    // front circle

    // Lala
    'AAI Arcane Blight': '888F',
    // 270 degree rotating cleave
    'AAI Bright Pulse 1': '8891',
    // initial blue square
    'AAI Bright Pulse 2': '8892',
    // moving blue square
    'AAI Arcane Mine': '889A',
    // initial Arcane Mine squares
    'AAI Golem Aero II': '88A4',
    // line damage from Aloalo Golem during Symmetric Surge
    'AAI Telluric Theorem': '88A9',
    // puddles from Explosive Theorem spreads

    // Statice
    'AAI Trigger Happy': '894C',
    // limit cut dart board
    'AAI Bomb Burst': '895D',
    // bomb explosion
    'AAI Uncommon Ground': '8CC2',
    // people who are on the same dartboard color with Bull's-eye
    'AAI Faerie Ring': '8956',
    // donut rings during Present Box
    'AAI Fire Spread 1': '8982',
    // initial rotating fire (from Ball of Fire)
    'AAI Fire Spread 2': '89F9' // ongoing rotating fire damage (from Statice)
  },

  damageFail: {
    'AAI Big Burst': '8AC3',
    // tower failure damage
    'AAI Massive Explosion 1': '889C',
    // failing to resolve Subractive Suppressor Alpha
    'AAI Massive Explosion 2': '889D',
    // failing to resolve Subractive Suppressor Beta
    'AAI Burning Chains': '8CBE',
    // damage from not breaking chains
    'AAI Surprising Missile Burst': '8957',
    // running into Surprising Missile tethered add
    'AAI Surprising Claw Death by Claw': '8958' // running into Surprising Claw tethered add
  },

  gainsEffectFail: {
    // C03 = 9999 duration, ??? = 15s duration
    'AAI Dropsy': 'C03',
    // standing outside Ketuduke
    // C05 = 9999 duration, C06 = 15s duration
    'AAI Bleeding': 'C05',
    // standing in blue square during Lala
    // BF9 = 9999 duration, BFA??? = 15s duration
    'AAI Burns': 'BF9' // standing outside Lala
  },

  shareWarn: {
    'AAI Hydrobullet': '8ABA',
    // spread debuffs
    'AAI Wood Golem Tornado': '8C4D',
    // headmarker -> bind and heavy aoe
    'AAI Powerful Light': '88A6',
    // spread marker during Symmetric Surge that turns squares blue
    'AAI Explosive Theorem': '88A8',
    // large spreads with Telluric Theorem puddles
    'AAI Trapshooting Spread': '895B',
    // spread damage from Trick Reload
    'AAI Firewords Spread': '8960' // spread damage during Present Box / Pinwheeling Dartboard
  },

  soloWarn: {
    'AAI Snipper Water III': '8C64',
    // Snipper stack marker
    'AAI Islekeeper Gravity Force': '8BC5',
    // stack
    'AAI Trapshooting Stack': '895A' // stack damage from Trick Reload
  },

  soloFail: {
    'AAI Hydrofall': '8AB7',
    // partner stack debuffs
    'AAI Symmetric Surge': '889E',
    // two person stack that gives magic vuln up
    'AAI Fireworks Stack': '895F' // two person stack damage during Present Box / Pinwheeling Dartboard
  },

  triggers: [another_aloalo_island_renameMistake('AAI Tornado', '8BC0', 'fail', {
    // running into a tornado in the initial trash section
    en: 'Tornado',
    de: 'Tornado',
    fr: 'Tornade',
    ja: 'トルネド',
    cn: '龙卷风',
    ko: '토네이도',
    tc: '龍捲風'
  }), another_aloalo_island_pushedIntoWall('AAI Angry Seas', '8AC1'), another_aloalo_island_pushedIntoWall('AAI Pop', '894E'), another_aloalo_island_nonzeroDamageMistake('AAI Hundred Lashings', ['8AC9', '8ACB'], 'warn')]
};
/* harmony default export */ const another_aloalo_island = (another_aloalo_island_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/another_mount_rokkon-savage.ts
// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/06-ew/dungeon/another_mount_rokkon.ts





// TODO: does Shishu Onmitsugashira Issen 8674 cleave?
// TODO: does Splitting Cry 8442 cleave?
// TODO: taking both Vermilion Aura 8436 and Stygian Aura 8437
// TODO: taking two Unnatural Force 8440 stacks
// TODO: standing in outside of Shishio arena
// TODO: better track who didn't take Shishio towers
// TODO: does Gorai Torching Torment cleave?
// TODO: Humble Hammer share damage
// TODO: who missed Gorai towers or was not hit by protean
// TODO: does Lateral Slice cleave
// TODO: 85FD whose adds were too close
const another_mount_rokkon_savage_triggerSet = {
  zoneId: zone_id/* default.AnotherMountRokkonSavage */.Z.AnotherMountRokkonSavage,
  damageWarn: {
    // Trash 1
    'AMRS Shishu Raiko Disciples of Levin': '8668',
    // centered circle
    'AMRS Shishu Raiko Master of Levin': '8667',
    // very large donut
    'AMRS Shishu Furutsubaki Bloody Carress': '8669',
    // front conal
    'AMRS Shishu Fuko Scythe Tail': '866C',
    // centered circle
    'AMRS Red Shishu Penghou Tornado': '866D',
    // targeted circle
    'AMRS Shishu Yuki Right Swipe': '8688',
    // 180 right cleave
    'AMRS Shishu Yuki Left Swipe': '8689',
    // 180 left cleave

    // Shishio
    'AMRS Shishio Rokujo Revel': '8425',
    // Smokeater line
    'AMRS Shishio Raiun Leaping Levin 1': '8426',
    // Raiun 1x Smokeater small cloud circles
    'AMRS Shishio Raiun Leaping Levin 2': '8427',
    // Raiun 1x Smokeater medium cloud circles
    'AMRS Shishio Raiun Leaping Levin 3': '8428',
    // Raiun 1x Smokeater large cloud circles
    'AMRS Shishio Lightning Bolt': '842A',
    // initial Cloud to Cloud circles
    'AMRS Shishio Cloud to Cloud 1': '842B',
    // 1x Smokeater small lines
    'AMRS Shishio Cloud to Cloud 2': '824C',
    // 2x Smokeater medium lines
    'AMRS Shishio Cloud to Cloud 3': '824D',
    // 3x Smokeater large lines
    'AMRS Shishio Noble Pursuit 1': '842E',
    // initial charge line
    'AMRS Shishio Noble Pursuit 2': '842F',
    // followup charge line
    'AMRS Shishio Levinburst': '8430',
    // line damage during Noble Pursuit
    'AMRS Shishio Devilish Thrall Right Swipe': '8432',
    // 180 right cleave from adds
    'AMRS Shishio Devilish Thrall Left Swipe': '8433',
    // 180 left cleave from adds
    'AMRS Shishio Haunting Thrall Reisho': '8434',
    // untelegraphed white explosions from Thralls
    'AMRS Shishio Thunder Vortex': '8439',
    // donut
    'AMRS Shishio Eye of the Thunder Vortex 1': '843A',
    // first "out" circle
    'AMRS Shishio Eye of the Thunder Vortex 2': '843B',
    // second "in" donut
    'AMRS Shishio Vortex of the Thunder Eye 1': '843C',
    // first "in" donut
    'AMRS Shishio Vortex of the Thunder Eye 2': '843D',
    // second "out" circle
    'AMRS Shishio Slither': '8443',
    // back conal

    // Trash 2
    'AMRS Shishu Yamabiko': '868A',
    // sprite line aoe
    'AMRS Shishu Kotengu Blade of the Tengu': '8671',
    // Leftward/Rightward/Backward Blows
    'AMRS Shishu Onmitsugashira Juji Shuriken': '8676',
    // untelegraphed front line
    'AMRS Shishu Onmitsugashira Juji Shuriken Huton': '867E',
    // untelegraphed fast front line on all players

    // Gorai
    'AMRS Gorai Fire Spread Purple': '853C',
    // line damage after purple Brazen Ballad
    'AMRS Gorai Fire Spread Blue': '853D',
    // line damage after blue Brazen Ballad
    'AMRS Gorai Falling Rock Purple': '853F',
    // expanded rock damage after purple Brazen Ballad
    'AMRS Gorai Falling Rock Blue': '8540',
    // donutified rock damage after purple Brazen Ballad
    'AMRS Gorai Ball of Levin Shock Small': '8549',
    // small circle from Ball of Levin hit by Humble Hammer
    'AMRS Gorai Ball of Levin Shock Big': '854A',
    // large circle from Ball of Levin
    'AMRS Gorai Cloud to Ground 1': '854D',
    // initial cloud exaflare
    'AMRS Gorai Cloud to Ground 2': '854E',
    // ongoing cloud exaflare
    'AMRS Gorai Impure Purgation Second': '8553',
    // follow-up protean'

    // Moko
    'AMRS Moko Triple Kasumi-Giri 1': '85E4',
    // back red first
    'AMRS Moko Triple Kasumi-Giri 2': '85E5',
    // left red first
    'AMRS Moko Triple Kasumi-Giri 3': '85E6',
    // front red first
    'AMRS Moko Triple Kasumi-Giri 4': '85E7',
    // right red first
    'AMRS Moko Triple Kasumi-Giri 5': '85E8',
    // back red followup
    'AMRS Moko Triple Kasumi-Giri 6': '85E9',
    // left red followup
    'AMRS Moko Triple Kasumi-Giri 7': '85EA',
    // front red followup
    'AMRS Moko Triple Kasumi-Giri 8': '85EB',
    // right red followup
    'AMRS Moko Triple Kasumi-Giri 9': '85EE',
    // back blue first
    'AMRS Moko Triple Kasumi-Giri 10': '85EF',
    // left blue first
    'AMRS Moko Triple Kasumi-Giri 11': '85F0',
    // front blue first
    'AMRS Moko Triple Kasumi-Giri 12': '85F1',
    // right blue first
    'AMRS Moko Triple Kasumi-Giri 13': '85F2',
    // back blue followup
    'AMRS Moko Triple Kasumi-Giri 14': '85F3',
    // left blue followup
    'AMRS Moko Triple Kasumi-Giri 15': '85F4',
    // front blue followup
    'AMRS Moko Triple Kasumi-Giri 16': '85F5',
    // right blue followup
    'AMRS Moko Unbound Spirit': '85EC',
    // red "out" Triple Kasumi-Giri
    'AMRS Moko Azure Coil': '85ED',
    // blue "in" Triple Kasumi-Giri

    'AMRS Moko Scarlet Auspice': '8600',
    // "get out" before Boundless Scarlet
    'AMRS Moko Boundless Scarlet': '8601',
    // initial red lines before they grow
    'AMRS Moko Explosion': '8602',
    // growing red lines
    'AMRS Moko Azure Auspice': '8603',
    // "get under" donut before Boundless Azure
    'AMRS Moko Boundless Azure': '8604',
    // initial blue lines before they bounce
    'AMRS Moko Upwell 1': '8605',
    // blue line first bounce
    'AMRS Moko Upwell 2': '8606',
    // blue line ongoing bounces

    'AMRS Moko Fleeting Iai-Giri 1': '85F6',
    // back purple
    'AMRS Moko Fleeting Iai-Giri 2': '85F7',
    // left purple
    'AMRS Moko Fleeting Iai-Giri 3': '85F8',
    // right purple

    'AMRS Moko Shadow Kasumi-Giri 1': '85F9',
    // back purple first
    'AMRS Moko Shadow Kasumi-giri 2': '86CC',
    // left purple followup
    'AMRS Moko Shadow Kasumi-giri 3': '86CD',
    // front purple followup
    'AMRS Moko Shadow Kasumi-giri 4': '86CE',
    // right purple followup

    'AMRS Moko Oni\'s Claw Clearout 1': '8C22',
    // hit 1 of large circles
    'AMRS Moko Oni\'s Claw Clearout 2': '8C28',
    // hit 2 of large circles
    'AMRS Moko Oni\'s Claw Clearout 3': '860B',
    // hit 3 of large circles

    'AMRS Moko Ashigaru Kyuhei Iron Rain 1': '85FE',
    // initial medium circle damage from red Ashigaru Kyuheis
    'AMRS Moko Ashigaru Kyuhei Iron Rain 2': '87A9',
    // followup medium circle damage from red Ashigaru Kyuheis
    'AMRS Moko Ashigaru Kyuhei Iron Storm 1': '85FF',
    // initial big circle damage from blue Ashigaru Kyuhei
    'AMRS Moko Ashigaru Kyuhei Iron Storm 2': '87AA' // followup big circle damage from blue Ashigaru Kyuhei
  },

  damageFail: {
    'AMRS Shishio Unmitigated Explosion': '8438' // not taking towers
  },

  gainsEffectWarn: {
    // BF9 = 9999s duration, BFA = 15s duration
    'AMRS Gorai Burns': 'BF9' // standing in outside square of Gorai
  },

  shareWarn: {
    'AMRS Shishu Raiko Barreling Smash': '8665',
    // line charge
    'AMRS Gorai Pointed Purgation': '8548',
    // protean tether during towers
    'AMRS Gorai Impure Purgation': '8552' // initial protean for double hit protean
  },

  shareFail: {
    'AMRS Shishio Unnatural Ailment': '843F',
    // spread during Unnatural Wail
    'AMRS Gorai Great Ball of Fire': '853A',
    // spread damage from Live Candle debuff
    'AMRS Gorai Worldy Pursuit': '8550',
    // cross jumps
    'AMRS Moko Vengeful Flame': '8608',
    // spreads during Fleeting Iai-giri
    'AMRS Moko Accursed Edge': '8607' // bind on players from Far Edge / Near Edge
  },

  soloFail: {
    'AMRS Shishio Unnatural Force': '8440',
    // pair stack during Unnatural Wail
    'AMRS Gorai Greater Ball of Fire': '8539',
    // pair stack from Live Brazier debuff
    'AMRS Gorai Flintlock': '854C',
    // tank block line share
    'AMRS Moko Vengeful Pyre': '8609' // pair stack during Fleeting Iai-giri
  },

  triggers: [{
    id: 'AMRS Shishu Kotengu Gaze of the Tengu',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '8673',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const another_mount_rokkon_savage = (another_mount_rokkon_savage_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/another_mount_rokkon.ts




// TODO: does Shishu Onmitsugashira Issen 8662 cleave?
// TODO: does Splitting Cry 841B cleave?
// TODO: taking both Vermilion Aura 840F and Stygian Aura 8410
// TODO: taking two Unnatural Force 8419 stacks
// TODO: standing in outside of Shishio arena
// TODO: better track who didn't take Shishio towers
// TODO: does Gorai Torching Torment cleave?
// TODO: Humble Hammer share damage
// TODO: who missed Gorai towers or was not hit by protean
// TODO: does Lateral Slice cleave
// TODO: 85CE whose adds were too close
const another_mount_rokkon_triggerSet = {
  zoneId: zone_id/* default.AnotherMountRokkon */.Z.AnotherMountRokkon,
  damageWarn: {
    // Trash 1
    'AMR Shishu Raiko Disciples of Levin': '8656',
    // centered circle
    'AMR Shishu Raiko Master of Levin': '8655',
    // very large donut
    'AMR Shishu Furutsubaki Bloody Carress': '8657',
    // front conal
    'AMR Shishu Fuko Scythe Tail': '865A',
    // centered circle
    'AMR Red Shishu Penghou Tornado': '865B',
    // targeted circle
    'AMR Shishu Yuki Right Swipe': '8685',
    // 180 right cleave
    'AMR Shishu Yuki Left Swipe': '8686',
    // 180 left cleave

    // Shishio
    'AMR Shishio Rokujo Revel': '83FE',
    // Smokeater line
    'AMR Shishio Raiun Leaping Levin 1': '83FF',
    // Raiun 1x Smokeater small cloud circles
    'AMR Shishio Raiun Leaping Levin 2': '8400',
    // Raiun 1x Smokeater medium cloud circles
    'AMR Shishio Raiun Leaping Levin 3': '8401',
    // Raiun 1x Smokeater large cloud circles
    'AMR Shishio Lightning Bolt': '8403',
    // initial Cloud to Cloud circles
    'AMR Shishio Cloud to Cloud 1': '8404',
    // 1x Smokeater small lines
    'AMR Shishio Cloud to Cloud 2': '8405',
    // 2x Smokeater medium lines
    'AMR Shishio Cloud to Cloud 3': '8406',
    // 3x Smokeater large lines
    'AMR Shishio Noble Pursuit 1': '8407',
    // initial charge line
    'AMR Shishio Noble Pursuit 2': '8408',
    // followup charge line
    'AMR Shishio Levinburst': '8409',
    // line damage during Noble Pursuit
    'AMR Shishio Devilish Thrall Right Swipe': '840B',
    // 180 right cleave from adds
    'AMR Shishio Devilish Thrall Left Swipe': '840C',
    // 180 left cleave from adds
    'AMR Shishio Haunting Thrall Reisho': '840D',
    // untelegraphed white explosions from Thralls
    'AMR Shishio Thunder Vortex': '8412',
    // donut
    'AMR Shishio Eye of the Thunder Vortex 1': '8413',
    // first "out" circle
    'AMR Shishio Eye of the Thunder Vortex 2': '8414',
    // second "in" donut
    'AMR Shishio Vortex of the Thunder Eye 1': '8415',
    // first "in" donut
    'AMR Shishio Vortex of the Thunder Eye 2': '8416',
    // second "out" circle
    'AMR Shishio Slither': '841C',
    // back conal

    // Trash 2
    'AMR Shishu Yamabiko': '8687',
    // sprite line aoe
    'AMR Shishu Kotengu Blade of the Tengu': '865F',
    // Leftward/Rightward/Backward Blows
    'AMR Shishu Onmitsugashira Juji Shuriken': '8664',
    // untelegraphed front line
    'AMR Shishu Onmitsugashira Juji Shuriken Huton': '867D',
    // untelegraphed fast front line on all players

    // Gorai
    'AMR Gorai Fire Spread Purple': '850B',
    // line damage after purple Brazen Ballad
    'AMR Gorai Fire Spread Blue': '850C',
    // line damage after blue Brazen Ballad
    'AMR Gorai Falling Rock Purple': '850E',
    // expanded rock damage after purple Brazen Ballad
    'AMR Gorai Falling Rock Blue': '850F',
    // donutified rock damage after purple Brazen Ballad
    'AMR Gorai Ball of Levin Shock Small': '8522',
    // small circle from Ball of Levin hit by Humble Hammer
    'AMR Gorai Ball of Levin Shock Big': '8523',
    // large circle from Ball of Levin
    'AMR Gorai Cloud to Ground 1': '8529',
    // initial cloud exaflare
    'AMR Gorai Cloud to Ground 2': '852A',
    // ongoing cloud exaflare
    'AMR Gorai Impure Purgation Second': '8531',
    // follow-up protean'

    // Moko
    'AMR Moko Triple Kasumi-Giri 1': '85B0',
    // back red first
    'AMR Moko Triple Kasumi-Giri 2': '85B1',
    // left red first
    'AMR Moko Triple Kasumi-Giri 3': '85B2',
    // front red first
    'AMR Moko Triple Kasumi-Giri 4': '85B3',
    // right red first
    'AMR Moko Triple Kasumi-Giri 5': '85B4',
    // back red followup
    'AMR Moko Triple Kasumi-Giri 6': '85B5',
    // left red followup
    'AMR Moko Triple Kasumi-Giri 7': '85B6',
    // front red followup
    'AMR Moko Triple Kasumi-Giri 8': '85B7',
    // right red followup
    'AMR Moko Triple Kasumi-Giri 9': '85BA',
    // back blue first
    'AMR Moko Triple Kasumi-Giri 10': '85BB',
    // left blue first
    'AMR Moko Triple Kasumi-Giri 11': '85BC',
    // front blue first
    'AMR Moko Triple Kasumi-Giri 12': '85BD',
    // right blue first
    'AMR Moko Triple Kasumi-Giri 13': '85BE',
    // back blue followup
    'AMR Moko Triple Kasumi-Giri 14': '85BF',
    // left blue followup
    'AMR Moko Triple Kasumi-Giri 15': '85C0',
    // front blue followup
    'AMR Moko Triple Kasumi-Giri 16': '85C1',
    // right blue followup
    'AMR Moko Unbound Spirit': '85B8',
    // red "out" Triple Kasumi-Giri
    'AMR Moko Azure Coil': '85B9',
    // blue "in" Triple Kasumi-Giri

    'AMR Moko Scarlet Auspice': '85D1',
    // "get out" before Boundless Scarlet
    'AMR Moko Boundless Scarlet': '85D2',
    // initial red lines before they grow
    'AMR Moko Explosion': '85D3',
    // growing red lines
    'AMR Moko Azure Auspice': '85D4',
    // "get under" donut before Boundless Azure
    'AMR Moko Boundless Azure': '85D5',
    // initial blue lines before they bounce
    'AMR Moko Upwell 1': '85D6',
    // blue line first bounce
    'AMR Moko Upwell 2': '85D7',
    // blue line ongoing bounces

    'AMR Moko Fleeting Iai-Giri 1': '85C4',
    // back purple
    'AMR Moko Fleeting Iai-Giri 2': '85C5',
    // left purple
    'AMR Moko Fleeting Iai-Giri 3': '85C6',
    // right purple

    'AMR Moko Shadow Kasumi-Giri 1': '85CA',
    // back purple first
    'AMR Moko Shadow Kasumi-giri 2': '86C4',
    // left purple followup
    'AMR Moko Shadow Kasumi-giri 3': '86C5',
    // front purple followup
    'AMR Moko Shadow Kasumi-giri 4': '86C6',
    // right purple followup

    'AMR Moko Oni\'s Claw Clearout 1': '8C21',
    // hit 1 of large circles
    'AMR Moko Oni\'s Claw Clearout 2': '8C27',
    // hit 2 of large circles
    'AMR Moko Oni\'s Claw Clearout 3': '85DF',
    // hit 3 of large circles

    'AMR Moko Ashigaru Kyuhei Iron Rain 1': '85CF',
    // initial medium circle damage from red Ashigaru Kyuheis
    'AMR Moko Ashigaru Kyuhei Iron Rain 2': '87A7',
    // followup medium circle damage from red Ashigaru Kyuheis
    'AMR Moko Ashigaru Kyuhei Iron Storm 1': '85D0',
    // initial big circle damage from blue Ashigaru Kyuhei
    'AMR Moko Ashigaru Kyuhei Iron Storm 2': '87A8' // followup big circle damage from blue Ashigaru Kyuhei
  },

  damageFail: {
    'AMR Shishio Unmitigated Explosion': '8411' // not taking towers
  },

  gainsEffectWarn: {
    // BF9 = 9999s duration, BFA = 15s duration
    'AMR Gorai Burns': 'BF9' // standing in outside square of Gorai
  },

  shareWarn: {
    'AMR Shishu Raiko Barreling Smash': '8653',
    // line charge
    'AMR Gorai Pointed Purgation': '851F',
    // protean tether during towers
    'AMR Gorai Impure Purgation': '8530' // initial protean for double hit protean
  },

  shareFail: {
    'AMR Shishio Unnatural Ailment': '8418',
    // spread during Unnatural Wail
    'AMR Gorai Great Ball of Fire': '8506',
    // spread damage from Live Candle debuff
    'AMR Gorai Worldy Pursuit': '850D',
    // cross jumps
    'AMR Moko Vengeful Flame': '85DC',
    // spreads during Fleeting Iai-giri
    'AMR Moko Accursed Edge': '85DA' // bind on players from Far Edge / Near Edge
  },

  soloFail: {
    'AMR Shishio Unnatural Force': '8419',
    // pair stack during Unnatural Wail
    'AMR Gorai Greater Ball of Fire': '8505',
    // pair stack from Live Brazier debuff
    'AMR Gorai Flintlock': '8527',
    // tank block line share
    'AMR Moko Vengeful Pyre': '85DD' // pair stack during Fleeting Iai-giri
  },

  triggers: [{
    id: 'AMR Shishu Kotengu Gaze of the Tengu',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '8661',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const another_mount_rokkon = (another_mount_rokkon_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/another_sildihn_subterrane-savage.ts
// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/06-ew/dungeon/another_sildihn_subterrane.ts




// TODO: we probably could use an oopsy utility library (and Data should be `any` here).
const stackMistake = (type, expected, abilityText) => {
  return (_data, matches) => {
    const actual = parseFloat(matches.targetCount);
    if (actual === expected || actual === 0) return;
    const ability = abilityText ?? matches.ability;
    const text = actual === 1 ? (0,oopsy_common/* GetSoloMistakeText */.gc)(ability) : (0,oopsy_common/* GetShareMistakeText */.gG)(ability, actual);
    return {
      type: type,
      blame: matches.target,
      text: text
    };
  };
};
const another_sildihn_subterrane_savage_triggerSet = {
  zoneId: zone_id/* default.AnotherSildihnSubterraneSavage */.Z.AnotherSildihnSubterraneSavage,
  initData: () => {
    return {
      hasRiteOfPassage: {}
    };
  },
  damageWarn: {
    'ASSS Aqueduct Kaluk Right Sweep': '797B',
    // right 200 degree cleave
    'ASSS Aqueduct Kaluk Left Sweep': '797C',
    // left 200 degree cleave
    'ASSS Aqueduct Kaluk Creeping Ivy': '797D',
    // frontal conal
    'ASSS Aqueduct Belladonna Atropine Spore': '7978',
    // large donut
    'ASSS Aqueduct Sapria Bloody Caress': '7977',
    // wide frontal conal
    'ASSS Aqueduct Udumbara Honeyed Right': '7974',
    // right cleave
    'ASSS Aqueduct Udumbara Honeyed Left': '7973',
    // left cleave
    'ASSS Aqueduct Dryad Acorn Bomb': '7970',
    // targeted circle
    'ASSS Aqueduct Dryad Arboreal Storm': '796F',
    // centered circle
    'ASSS Aqueduct Oqdan Uproot': '7972',
    // targeted circle
    'ASSS Aqueduct Oqdan Gelid Gale': '7971',
    // targeted circle

    'ASSS Silkie Chilling Duster': '7786',
    // cardinal cross ice
    'ASSS Silkie Bracing Duster': '7787',
    // donut wind
    'ASSS Silkie Fizzling Duster 1': '7788',
    // intercardinal cross lightning
    'ASSS Silkie Fizzling Duster 2': '7780',
    // intercardinal cross lightning
    'ASSS Silkie Soapsud Static': '77ED',
    // Fizzling Duster forked lightning spread
    'ASSS Silkie Squeaky Clean 1': '7776',
    // 225 degree mouse swing, left or right
    'ASSS Silkie Squeaky Clean 2': '7777',
    // 225 degree mouse swing, left or right
    'ASSS Silkie Squeaky Clean 3': '7778',
    // 225 degree mouse swing, left or right
    'ASSS Silkie Squeaky Clean 4': '7779',
    // 225 degree mouse swing, left or right
    'ASSS Silkie Silken Puff Chilling Duster': '778B',
    // cardinal cross from puff
    'ASSS Silkie Silken Puff Bracing Duster': '778C',
    // donut from puff
    'ASSS Silkie Silken Puff Fizzling Duster': '778D',
    // intercardinal cross from puuff
    'ASSS Silkie Silken Puff Puff and Tumble 1': '7793',
    // initial puff
    'ASSS Silkie Silken Puff Puff and Tumble 2': '7794',
    // puff destination
    'ASSS Silkie Eastern Ewer Brim Over': '7791',
    // initial Ewer circle
    'ASSS Silkie Eastern Ewer Rinse': '7792',
    // moving Ewers

    'ASSS Sil\'dihn Dullahan Blighted Gloom': '797E',
    // very large centered circle
    'ASSS Aqueduct Armor Dominion Slash': '7982',
    // frontal conal on a random player

    'ASSS Gladiator Rush of Might Front': '779D',
    // initial 180 cleave in front
    'ASSS Gladiator Rush of Might Back': '779E',
    // followup 180 cleave behind
    'ASSS Gladiator Ring of Might Out 1': '779F',
    // ring 1 out
    'ASSS Gladiator Ring of Might Out 2': '77A0',
    // ring 2 out
    'ASSS Gladiator Ring of Might Out 3': '77A1',
    // ring 3 out
    'ASSS Gladiator Ring of Might In 1': '77A2',
    // ring 1 in
    'ASSS Gladiator Ring of Might In 2': '77A3',
    // ring 2 in
    'ASSS Gladiator Ring of Might In 3': '77A4',
    // ring 3 in
    'ASSS Gladiator Lingering Echo': '77B9',
    // Curse of the Fallen akh rhai
    'ASSS Gladiator Regret Rack and Ruin': '77A6',
    // checkerboard line aoes
    'ASSS Gladiator Sundered Remains': '77AA',
    // shiva circles

    'ASSS Shadowcaster Ball of Fire Burn': '76BB',
    // circular explosion from fireballs
    'ASSS Shadowcaster Arcane Font Blazing Benifice': '76C1',
    // line aoe from portal
    'ASSS Shadowcaster Cast Shadow 1': '76BD',
    // first hit of Cast Shadow
    'ASSS Shadowcaster Cast Shadow 2': '76BE',
    // second hit of Cast Shadow
    'ASSS Shadowcaster Pure Fire': '76BF' // baited puddles
  },

  damageFail: {
    'ASSS Silkie Silken Puff Buffeted Puffs': '77EC',
    // puffs too close together
    'ASSS Gladiator Massive Explosion': '77AD',
    // not taking a tower
    'ASSS Gladiator Chains of Resentment': '77A9',
    // not breaking chains fast enough
    'ASSS Shadowcaster Trespasser\'s Pyre': '76BC',
    // hitting Infirm Ward lasers
    'ASSS Shadowcaster Big Burst': '76CC' // failing Cryptic Flames
  },

  gainsEffectWarn: {
    'ASSS Silkie Deep Freeze': '4E6' // not moving after Soap's Up
  },

  gainsEffectFail: {
    'ASSS Silkie Bleeding': 'C05',
    // standing outside Silkie Arena
    'ASSS Shadowcaster Burns': 'BF9' // standing outside Shadowcaster arena
  },

  shareWarn: {
    'ASSS Gladiator Echo of the Fallen': '77B7',
    // Curse of the Fallen spread
    'ASSS Gladiator Nothing beside Remains': '77BC' // spread during Hateful Visage
  },

  shareFail: {
    'ASSS Aqueduct Belladonna Deracinator': '797A',
    // tank buster cleave(?)
    'ASSS Gladiator Mighty Smite': '77B4',
    // tank buster cleave(?)
    'ASSS Gladiator Scream of the Fallen': '77BA',
    // defamations during towers
    'ASSS Gladiator Explosion': '77AC',
    // towers
    'ASSS Shadowcaster Firesteel Strike': '76C6',
    // jumps before Blessed Beacon cleaves
    'ASSS Shadowcaster Firesteel Fracture': '76C4',
    // tank buster cleave
    'ASSS Shadowcaster Infirn Brand Infirm Wave': '76CD' // 90 degree large cleaves on closest people
  },

  soloFail: {
    'ASSS Silkie Slippery Soap': '7783',
    // line stack damage
    'ASSS Gladiator Scultor\'s Passion': '79F4',
    // line stack damage
    'ASSS Gladiator Thunderous Echo': '77B8' // Curse of the Fallen share
  },

  triggers: [{
    // Gaze attack
    id: 'ASSS Aqueduct Belladonna Frond Affront',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7979',
      ...oopsy_common/* playerDamageFields */.np
    }),
    // Always hits target, but if correctly resolved will deal 0 damage
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // Golden and Silver flames do damage if not cleansing a debuff
    // The same abilities are used for both versions.
    id: 'ASSS Gladiator Hateful Visage Flame',
    type: 'Ability',
    // 77B1 = Golden Flame
    // 77B2 = Silver Flame
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['77B1', '77B2'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'ASSS Shadowcaster Blessed Beacon',
    type: 'Ability',
    // TODO: this could be invuln'd
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['76C8', '76C9']
    }),
    mistake: stackMistake('fail', 2)
  }, {
    // This will kill the players if they don't take a portal.
    id: 'ASSS Shadowcaster Call of the Portal',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'CCC'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'ASSS Shadowcaster Rite of Passage Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'CCD'
    }),
    run: (data, matches) => data.hasRiteOfPassage[matches.target] = true
  }, {
    id: 'ASSS Shadowcaster Rite of Passage Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: 'CCD'
    }),
    run: (data, matches) => data.hasRiteOfPassage[matches.target] = false
  }, {
    id: 'ASSS Shadowcaster Stun',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'A60'
    }),
    // Stuns are a good way to indicate who broke a line incorrectly.
    // However, everybody gets a stun during the teleport section.
    condition: (data, matches) => !data.hasRiteOfPassage[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const another_sildihn_subterrane_savage = (another_sildihn_subterrane_savage_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/another_sildihn_subterrane.ts



// TODO: we probably could use an oopsy utility library (and Data should be `any` here).
const another_sildihn_subterrane_stackMistake = (type, expected, abilityText) => {
  return (_data, matches) => {
    const actual = parseFloat(matches.targetCount);
    if (actual === expected || actual === 0) return;
    const ability = abilityText ?? matches.ability;
    const text = actual === 1 ? (0,oopsy_common/* GetSoloMistakeText */.gc)(ability) : (0,oopsy_common/* GetShareMistakeText */.gG)(ability, actual);
    return {
      type: type,
      blame: matches.target,
      text: text
    };
  };
};
const another_sildihn_subterrane_triggerSet = {
  zoneId: zone_id/* default.AnotherSildihnSubterrane */.Z.AnotherSildihnSubterrane,
  initData: () => {
    return {
      hasRiteOfPassage: {}
    };
  },
  damageWarn: {
    'ASS Aqueduct Kaluk Right Sweep': '7963',
    // right 200 degree cleave
    'ASS Aqueduct Kaluk Left Sweep': '7964',
    // left 200 degree cleave
    'ASS Aqueduct Kaluk Creeping Ivy': '7965',
    // frontal conal
    'ASS Aqueduct Belladonna Atropine Spore': '7960',
    // large donut
    'ASS Aqueduct Sapria Bloody Caress': '795F',
    // wide frontal conal
    'ASS Aqueduct Udumbara Honeyed Right': '795C',
    // right cleave
    'ASS Aqueduct Udumbara Honeyed Left': '795B',
    // left cleave
    'ASS Aqueduct Dryad Acorn Bomb': '7958',
    // targeted circle
    'ASS Aqueduct Dryad Arboreal Storm': '7957',
    // centered circle
    'ASS Aqueduct Oqdan Uproot': '795A',
    // targeted circle
    'ASS Aqueduct Oqdan Gelid Gale': '7959',
    // targeted circle

    'ASS Silkie Chilling Duster': '7763',
    // cardinal cross ice
    'ASS Silkie Bracing Duster': '7764',
    // donut wind
    'ASS Silkie Fizzling Duster 1': '7765',
    // intercardinal cross lightning
    'ASS Silkie Fizzling Duster 2': '775D',
    // intercardinal cross lightning
    'ASS Silkie Soapsud Static': '77ED',
    // Fizzling Duster forked lightning spread
    'ASS Silkie Squeaky Clean 1': '7753',
    // 225 degree mouse swing, left or right
    'ASS Silkie Squeaky Clean 2': '7754',
    // 225 degree mouse swing, left or right
    'ASS Silkie Squeaky Clean 3': '7755',
    // 225 degree mouse swing, left or right
    'ASS Silkie Squeaky Clean 4': '7756',
    // 225 degree mouse swing, left or right
    'ASS Silkie Silken Puff Chilling Duster': '7768',
    // cardinal cross from puff
    'ASS Silkie Silken Puff Bracing Duster': '7769',
    // donut from puff
    'ASS Silkie Silken Puff Fizzling Duster': '776A',
    // intercardinal cross from puuff
    'ASS Silkie Silken Puff Puff and Tumble 1': '7770',
    // initial puff
    'ASS Silkie Silken Puff Puff and Tumble 2': '7771',
    // puff destination
    'ASS Silkie Eastern Ewer Brim Over': '776E',
    // initial Ewer circle
    'ASS Silkie Eastern Ewer Rinse': '776F',
    // moving Ewers

    'ASS Sil\'dihn Dullahan Blighted Gloom': '7966',
    // very large centered circle
    'ASS Aqueduct Armor Dominion Slash': '796A',
    // frontal conal on a random player

    'ASS Gladiator Rush of Might Front': '765B',
    // initial 180 cleave in front
    'ASS Gladiator Rush of Might Back': '765C',
    // followup 180 cleave behind
    'ASS Gladiator Ring of Might Out 1': '765D',
    // ring 1 out
    'ASS Gladiator Ring of Might Out 2': '765E',
    // ring 2 out
    'ASS Gladiator Ring of Might Out 3': '765F',
    // ring 3 out
    'ASS Gladiator Ring of Might In 1': '7660',
    // ring 1 in
    'ASS Gladiator Ring of Might In 2': '7661',
    // ring 2 in
    'ASS Gladiator Ring of Might In 3': '7662',
    // ring 3 in
    'ASS Gladiator Lingering Echo': '7677',
    // Curse of the Fallen akh rhai
    'ASS Gladiator Regret Rack and Ruin': '7664',
    // checkerboard line aoes
    'ASS Gladiator Sundered Remains': '7668',
    // shiva circles

    'ASS Shadowcaster Ball of Fire Burn': '7490',
    // circular explosion from fireballs
    'ASS Shadowcaster Arcane Font Blazing Benifice': '74A6',
    // line aoe from portal
    'ASS Shadowcaster Cast Shadow 1': '749C',
    // first hit of Cast Shadow
    'ASS Shadowcaster Cast Shadow 2': '749E',
    // second hit of Cast Shadow
    'ASS Shadowcaster Pure Fire': '74A1' // baited puddles
  },

  damageFail: {
    'ASS Silkie Silken Puff Buffeted Puffs': '77EA',
    // puffs too close together
    'ASS Gladiator Massive Explosion': '766B',
    // not taking a tower
    'ASS Gladiator Chains of Resentment': '7667',
    // not breaking chains fast enough
    'ASS Shadowcaster Trespasser\'s Pyre': '7499',
    // hitting Infirm Ward lasers
    'ASS Shadowcaster Big Burst': '74B9' // failing Cryptic Flames
  },

  gainsEffectWarn: {
    'ASS Silkie Deep Freeze': '4E6' // not moving after Soap's Up
  },

  gainsEffectFail: {
    'ASS Silkie Bleeding': 'C05',
    // standing outside Silkie Arena
    'ASS Shadowcaster Burns': 'BF9' // standing outside Shadowcaster arena
  },

  shareWarn: {
    'ASS Gladiator Echo of the Fallen': '7675',
    // Curse of the Fallen spread
    'ASS Gladiator Nothing beside Remains': '768C' // spread during Hateful Visage
  },

  shareFail: {
    'ASS Aqueduct Belladonna Deracinator': '7962',
    // tank buster cleave(?)
    'ASS Gladiator Mighty Smite': '7672',
    // tank buster cleave(?)
    'ASS Gladiator Scream of the Fallen': '7678',
    // defamations during towers
    'ASS Gladiator Explosion': '766A',
    // towers
    'ASS Shadowcaster Firesteel Strike': '74B1',
    // jumps before Blessed Beacon cleaves
    'ASS Shadowcaster Firesteel Fracture': '74AD',
    // tank buster cleave
    'ASS Shadowcaster Infirn Brand Infirm Wave': '74BB' // 90 degree large cleaves on closest people
  },

  soloFail: {
    'ASS Silkie Slippery Soap': '7760',
    // line stack damage
    'ASS Gladiator Scultor\'s Passion': '79F3',
    // line stack damage
    'ASS Gladiator Thunderous Echo': '7676' // Curse of the Fallen share
  },

  triggers: [{
    // Gaze attack
    id: 'ASS Aqueduct Belladonna Frond Affront',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7961',
      ...oopsy_common/* playerDamageFields */.np
    }),
    // Always hits target, but if correctly resolved will deal 0 damage
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    // Golden and Silver flames do damage if not cleansing a debuff
    // The same abilities are used for both versions.
    id: 'ASS Gladiator Hateful Visage Flame',
    type: 'Ability',
    // 766F = Golden Flame
    // 7670 = Silver Flame
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['766F', '7670'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'ASS Shadowcaster Blessed Beacon',
    type: 'Ability',
    // TODO: this could be invuln'd
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['74B4', '74B5']
    }),
    mistake: another_sildihn_subterrane_stackMistake('fail', 2)
  }, {
    // This will kill the players if they don't take a portal.
    id: 'ASS Shadowcaster Call of the Portal',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'CCC'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'ASS Shadowcaster Rite of Passage Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'CCD'
    }),
    run: (data, matches) => data.hasRiteOfPassage[matches.target] = true
  }, {
    id: 'ASS Shadowcaster Rite of Passage Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: 'CCD'
    }),
    run: (data, matches) => data.hasRiteOfPassage[matches.target] = false
  }, {
    id: 'ASS Shadowcaster Stun',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'A60'
    }),
    // Stuns are a good way to indicate who broke a line incorrectly.
    // However, everybody gets a stun during the teleport section.
    condition: (data, matches) => !data.hasRiteOfPassage[matches.target],
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const another_sildihn_subterrane = (another_sildihn_subterrane_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/ktisis_hyperboreia.ts

const ktisis_hyperboreia_triggerSet = {
  zoneId: zone_id/* default.KtisisHyperboreia */.Z.KtisisHyperboreia,
  damageWarn: {
    'Ktisis Ktiseos Leon Cry': '6857',
    // centered ricle
    'Ktisis Ktiseos Panther Charged Whisker': '6855',
    // centered circle
    'Ktisis Ktiseos Panther Megablaster': '6856',
    // conal
    'Ktisis Ktiseos Chione Snowcap': '6707',
    // circle when appearing
    'Ktisis Ktiseos Chione White Death': '685B',
    // targeted conal
    'Ktisis Lyssa Punishing Slice': '6259',
    // 180 cleave after Frostbite and Seek
    'Ktisis Lyssa Ice Pillar': '625B',
    // lines from ice pillar adds
    'Ktisis Ktiseos Daidalion Transonic Blast': '685D',
    // conal
    'Ktisis Ktiseos Hippogryph Shriek': '6862',
    // targeted circle
    'Ktisis Ktiseos Lailaps Fire II': '6867',
    // targeted circle
    'Ktisis Ktiseos Gryps Freefall': '685F',
    // targeted jump
    'Ktisis Ktiseos Gryps Alpine Draft': '689A',
    // line
    'Ktisis Ktiseos Ophiotauros Butcher': '6863',
    // conal
    'Ktisis Ktiseos Ophiotauros Scythe Tail': '6865',
    // centered circle
    'Ktisis Ladon Lord Pyric Breath 1': '6486',
    // 1/3 wide conal breath
    'Ktisis Ladon Lord Pyric Breath 2': '6487',
    // 1/3 wide conal breath
    'Ktisis Ladon Lord Pyric Breath 3': '6488',
    // 1/3 wide conal breath
    'Ktisis Ladon Lord Pyric Breath 4': '6489',
    // 1/3 wide conal breath
    'Ktisis Ladon Lord Pyric Breath 5': '648A',
    // 1/3 wide conal breath
    'Ktisis Ladon Lord Pyric Breath 6': '648B',
    // 1/3 wide conal breath
    'Ktisis Ladon Lord Pyric Sphere': '6491',
    // sphere bomberman lines
    'Ktisis Ktiseos Stymphalid Tickle': '686B',
    // wide line
    'Ktisis Ktiseos Stymphalid Gust': '686D',
    // targeted circle
    'Ktisis Ktiseos Alkyone Flamespitter': '696A',
    // targeted conal
    'Ktisis Ktiseos Aello Sideslip': '686E',
    // centered circle
    'Ktisis Ktiseos Aello Feathercut': '686F',
    // line
    'Ktisis Ktiseos Aello Wingbeat': '6870',
    // narrow conal
    'Ktisis Hermes True Aero IV 1': '6521',
    // mirrors
    'Ktisis Hermes True Aero IV 2': '6CBC',
    // mirrors
    'Ktisis Hermes True Aero Double': '652D',
    // Doubled line from True Aero lines
    'Ktisis Hermes True Aero II Double': '652A',
    // Doubled circle from True Aero II spread
    'Ktisis Hermes True Tornado Double': '6532' // Doubled circle after tankbuster
  },

  gainsEffectWarn: {
    'Ktisis Hermes Windburn': '824' // outside Hermes ring
  },

  shareWarn: {
    'Ktisis Hermes True Aero II': '6528' // spread
  },

  shareFail: {
    'Ktisis Hermes True Tornado': '6531' // tankbuster cleave
  }
};

/* harmony default export */ const ktisis_hyperboreia = (ktisis_hyperboreia_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/lapis_manalis.ts

const lapis_manalis_triggerSet = {
  zoneId: zone_id/* default.LapisManalis */.Z.LapisManalis,
  damageWarn: {
    'Lapis Caladrius Transonic Blast': '7F17',
    // // front cone AoE, before boss 1
    'Lapis Albus Griffin Freefall': '8012',
    // circle AoE, before boss 1
    'Lapis Albus Griffin Golden Talons': '8013',
    // front cone AoE, before boss 1
    'Lapis Visitant Bloodguard Void Slash': '7F19',
    // front cone AoE, before boss 1

    'Lapis Albion Wildlife Crossing': '7A7D',
    // damage from charging Wild Beasts, boss 1
    'Lapis Albion Right Slam': '802D',
    // right cleave, boss 1
    'Lapis Albion Left Slam': '802E',
    // left cleave, boss 1
    'Lapis Albion Knock on Ice': '7A7F',
    // circle AoE, boss 1
    'Lapis Albion Icebreaker': '7A81',
    // jumping circle AoE, boss 1
    'Lapis Albion Icy Throes Ground': '7FB9',
    // ground AOEs, boss 1
    'Lapis Albion Roar of Albion': '7A84',
    // line-of-sight damage if not hidden behind boulder, boss 1

    'Lapis Visitant Vodoriga Terror Eye': '7F1C',
    // front cone AoE, before boss 2
    'Lapis Galatea Parva Gravity Harp': '7F1A',
    // circle AoE, before boss 2
    'Lapis Visitant Taurus Uncanny Whisper': '7F18',
    // circle AoE, before boss 2

    'Lapis Galatea Magna Waxing Cycle Out': '7A91',
    // PBAoE, boss 2
    'Lapis Galatea Magna Waxing Cycle In': '7A93',
    // donut AoE, boss 2
    'Lapis Galatea Magna Waning Cycle In': '7F6E',
    // donut AoE, boss 2
    'Lapis Galatea Magna Waning Cycle Out': '7F70',
    // PBAoE, boss 2
    'Lapis Galatea Magna Soul Scythe': '7A9A',
    // jumping circle AoE, boss 2

    'Lapis Albus Serpent Regorge': '7F1B',
    // circle AoE before boss 3
    'Lapis Visitant Satana Dark': '7F1D',
    // circle AoE, before boss 3

    'Lapis Cagnazzo Antediluvian': '798F',
    // large circle AoE, boss 3
    'Lapis Cagnazzo Hydraulic Ram': '7FB6',
    // line charge, boss 3
    'Lapis Cagnazzo Hydrobomb': '7FB8',
    // circle AoE, boss 3
    'Lapis Cagnazzo Hydrovent': '79A0',
    // circle AoE, boss 3
    'Lapis Cagnazzo Void Miasma': '7FB3',
    // baited cone AoE, boss 3
    'Lapis Cagnazzo Lifescleaver': '7989' // 8x cone AoE, boss 3
  },

  damageFail: {
    'Lapis Galatea Magna Scarecrow Chase': '7FBF',
    // cross AoE, boss 2
    'Lapis Galatea Magna Big Burst': '7A98',
    // failed tower soak, boss 2

    'Lapis Cagnazzo Body Slam': '7993' // stood inside large knockback circle, boss 3
  },

  gainsEffectWarn: {
    'Lapis Albion Concussion': 'DC1',
    // stunned by charging Wild Beasts, boss 1
    'Lapis Cagnazzo Dropsy (wall)': 'C04' // touched arena wall, boss 3
  },

  gainsEffectFail: {
    'Lapis Galatea Magna Stony Gaze': 'BBF' // 4x gaze, boss 2
  },

  shareWarn: {
    'Lapis Albion Icy Throes Spread': '7A83',
    // spread circles, boss 1

    'Lapis Cagnazzo Neap Tide': '799E',
    // spread circles, boss 3
    'Lapis Cagnazzo Void Torrent': '798E' // tankbuster cleave, boss 3
  },

  soloWarn: {
    'Lapis Cagnazzo Hydrofall': '7A90',
    // standard stack marker, boss 3
    'Lapis Cagnazzo Spring Tide': '799F' // standard stack marker, boss 3
  }
};

/* harmony default export */ const lapis_manalis = (lapis_manalis_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/mount_rokkon.ts


// TODO: Moko outside ring wall
// TODO: path05 standing in baboon wall (also check if murdering baboon affects timeline)
// TODO: path09 six fulms under
const mount_rokkon_triggerSet = {
  zoneId: zone_id/* default.MountRokkon */.Z.MountRokkon,
  damageWarn: {
    // Trash
    'Rokkon Shishu Yamawaro Dark': '84CE',
    // targeted circle
    'Rokkon Shishu Sharin Crimson Mandate': '835B',
    // cross
    'Rokkon Shishu Dorotabo Water III': '8355',
    // large targeted circle
    'Rokkon Shishu Fuko Scythe Tail': '8353',
    // centered circle
    'Rokkon Shishu Kioyfusa Clearout': '8356',
    // front conal
    'Rokkon Shishu Kotengu Isso': '835C',
    // wide front conal
    'Rokkon Shishu Onmitsu Juji Shuriken': '8358',
    // long line
    'Rokkon Shishu Izumo': '8357',
    // large centered circle
    'Rokkon Shishu Mifune Burnished Joust': '8359',
    // line charge
    'Rokkon Shishu Yoko Spinning Slash': '835D',
    // donut
    'Rokkon Shishu Yoko Rotary Slash': '835E',
    // circle
    'Rokkon Shishu Chochin Illume': '8352',
    // front conal
    'Rokkon Shishu Hoko Tornado': '84CF',
    // targeted circle
    'Rokkon Shishu Wanyudo Midnight Mandate': '835F',
    // targeted circle
    'Rokkon Shishu Tenaga Ovation': '8360',
    // line aoe
    'Rokkon Shishu Jumokko Acorn Bomb': '8362',
    // targeted circle
    'Rokkon Shishu Jumokko Backhgand Blow': '8361',
    // back conal
    'Rokkon Shishu Kuzuri Savage Swipe': '8363',
    // front conal
    'Rokkon Shishu Sai Taisui Sweeping Invocation': '8364',
    // cross
    'Rokkon Shishu Raiko Master of Levin': '8365',
    // donut
    'Rokkon Shishu Raiko Disciples of Levin': '8366',
    // centered circle
    'Rokkon Shishu Daitengu Yama-Kagura': '8367',
    // line aoe

    // Yozakura the Fleeting (all paths)
    'Rokkon Yozakura Art of the Fireblossom': '8368',
    // circle
    'Rokkon Yozakura Art of the Windblossom': '8369',
    // donut
    'Rokkon Yozakura Seal of the Fireblossom': '8375',
    // circle during Oka Ranman
    'Rokkon Yozakura Seal of the Windblossom': '8376',
    // donut during Oka Ranman
    'Rokkon Yozakura Seal of the Rainblossom': '8377',
    // intercards during Oka Ranman
    'Rokkon Yozakura Seal of the Levinblossom': '8378',
    // cards during Oka Ranman

    // Yozakura the Fleeting (left and right paths)
    'Rokkon Yozakura Shadowflight': '8380',
    // backstab line from clone

    // Yozakura the Fleeting (left path)
    'Rokkon Yozakura Mudrain': '838A',
    // initial circles on water path
    'Rokkon Yozakura Mud Pie': '838E',
    // line aoes from mud circles
    'Rokkon Yozakura Icebloom': '838C',
    // chasing circles in route 1 during Mud Rain
    'Rokkon Yozakura Windblossom Whirl 1': '8390',
    // initial donut on wind path
    'Rokkon Yozakura Windblossom Whirl 2': '86F0',
    // ongoing donuts on wind path
    'Rokkon Yozakura Levinblossom Strike': '8392',
    // small circles in Windblossom Whirl donut
    'Rokkon Yozakura Season of Fire': '8385',
    // 4x lines (back safe)
    'Rokkon Yozakura Season of Water': '8386',
    // 4x lines (front safe)
    'Rokkon Yozakura Season of Earth': '8388',
    // 4x pinwheel on cardinals
    'Rokkon Yozakura Season of Lightning': '8387',
    // 4x pinwheel on intercards

    // Yozakura the Fleeting (middle path)
    'Rokkon Yozakura Tatami-gaeshi': '8396',
    // tatami mat flip
    'Rokkon Yozakura Levinblossom Lance': '839A',
    // rotating line aoes
    'Rokkon Yozakura Fireblossom Flare': '83A0',
    // ground circles during Art of the Fluff

    // Yozakura the Fleeting (right path)
    'Rokkon Yozakura Behind Barbs': '83A2',
    // standing in the Accursed Seedling root
    'Rokkon Yozakura Explosion': '83A3',
    // not killing the Living Gaol in time
    'Rokkon Yozakura Root Arrangement 1': '83A5',
    // 4x chasing aoe initial hit
    'Rokkon Yozakura Root Arrangement 2': '83A6',
    // 4x chasing aoe ongoing hits
    'Rokkon Yozakura Cutting Leaves': '83A8',
    // hitting tornados during Witherwind

    // Moko the Restless
    'Rokkon Moko Iai-kasumi-giri Back': '8587',
    // back-safe 270 cleave
    'Rokkon Moko Iai-kasumi-giri Front': '8588',
    // front-safe 270 cleave
    'Rokkon Moko Iai-kasumi-giri Left': '8589',
    // left-safe 270 cleave
    'Rokkon Moko Iai-kasumi-giri Right': '858A',
    // right-safe 270 cleave
    'Rokkon Moko Double Kasumi-giri Back 1': '858B',
    // back-safe 270 cleave first
    'Rokkon Moko Double Kasumi-giri Left 1': '858C',
    // left-safe 270 cleave first
    'Rokkon Moko Double Kasumi-giri Front 1': '858D',
    // front-safe 270 cleave first
    'Rokkon Moko Double Kasumi-giri Right 1': '858E',
    // right-safe 270 cleave first
    'Rokkon Moko Double Kasumi-giri Back 2': '858F',
    // back-safe 270 cleave second
    'Rokkon Moko Double Kasumi-giri Left 2': '8590',
    // left-safe 270 cleave second
    'Rokkon Moko Double Kasumi-giri Front 2': '8591',
    // front-safe 270 cleave second
    'Rokkon Moko Double Kasumi-giri Right 2': '8592',
    // right-safe 270 cleave second
    'Rokkon Moko Iron Rain': '8594',
    // bombardment after Soldiers of Death
    'Rokkon Moko Spearpoint Push 1': '8597',
    // initial damage during Spearman's Orders
    'Rokkon Moko Spearpoint Push 2': '86D2',
    // ongoing damage during Spearman's Orders
    'Rokkon Moko Scarlet Auspice': '8598',
    // centered circle
    'Rokkon Moko Boundless Scarlet': '859A',
    // Z lines from Scarlet Auspice
    'Rokkon Moko Explosion': '859B',
    // expanding lines from Boundless Scarlet
    'Rokkon Moko Clearout': '85AC',
    // large circles from Oni's Claw during Moonless Night
    'Rokkon Moko Azure Auspice': '859C',
    // donut
    'Rokkon Moko Boundless Azure': '859E',
    // Z lines from Azure Auspice
    'Rokkon Moko Upwell 1': '859F',
    // initial expanding water lines
    'Rokkon Moko Upwell 2': '85A0',
    // ongoing expanding water lines
    'Rokkon Moko Spiritflame': '85A6',
    // ground circles during Spiritspark,
    'Rokkon Moko Arm of Purgatory': '85A7',
    // running into heads during Spiritspark
    'Rokkon Moko Unsheathing': '85A9',
    // sword appearing circles during Untempered Sword
    'Rokkon Moko Veil Sever': '85AA',
    // sword lines during Untempered Sword

    // Gorai the Uncaged
    'Rokkon Gorai Fire Spread Purple': '84DA',
    // line damage after Plectrum of Power 84D8
    'Rokkon Gorai Fire Spread Blue': '84DB',
    // line damage after Morphic Melody 84D9
    'Rokkon Gorai Falling Rock Purple': '84DD',
    // expanded rock damage after Plectrum of Power 84D8
    'Rokkon Gorai Falling Rock Blue': '84DE',
    // donutified rock damage after Morphic Melody 84D9
    'Rokkon Gorai Dramatic Burst': '84E3',
    // missed tower damage
    'Rokkon Gorai Spike of Flame': '84E5',
    // targeted circle on player
    'Rokkon Gorai Impure Purgation 1': '84E7',
    // pinwheel 1
    'Rokkon Gorai Impure Purgation 2': '84E8',
    // pinwheel 2
    'Rokkon Gorai String Snap 1': '84EA',
    // expanding earth ring 1
    'Rokkon Gorai String Snap 2': '84EB',
    // expanding earth ring 2
    'Rokkon Gorai String Snap 3': '84EC',
    // expanding earth ring 3
    'Rokkon Gorai Shishu White Baboon Self-Destruct': '84F1',
    // failing to kill White Baboon in time
    'Rokkon Gorai Ball of Levin Shock Small': '84F4',
    // small circle from Ball of Levin hit by Humble Hammer
    'Rokkon Gorai Ball of Levin Shock Big': '84F5',
    // large circle from Ball of Levin
    'Rokkon Gorai Worldly Pursuit 1': '84FB',
    // initial rotating cross damage
    'Rokkon Gorai Worldly Pursuit 2': '84FC',
    // ongoing rotating cross damage

    // Shishio
    'Rokkon Shishio Once on Rokujo': '83DD',
    // 1x Smokeater line
    'Rokkon Shishio Twice on Rokujo': '87A5',
    // 2x Smokeater line
    'Rokkon Shishio Thrice on Rokujo': '87AC',
    // 3x Smokeater line
    'Rokkon Shishio Rain Leaping Levin 1': '83DE',
    // 1x Smokeater small cloud circles
    'Rokkon Shishio Rain Leaping Levin 2': '83DF',
    // 2x Smokeater medium cloud circles
    'Rokkon Shishio Rain Leaping Levin 3': '83E0',
    // 3x Smokeater large cloud circles
    'Rokkon Shishio Thunder Onefold': '83E2',
    // 1x Smokeater initial cloud circles
    'Rokkon Shishio Thunder Twofold': '87F9',
    // 2x Smokeater initial cloud circles
    'Rokkon Shishio Thunder Threefold': '87FB',
    // 3x Smokeater initial cloud circles
    'Rokkon Shishio Cloud to Cloud 1': '83E3',
    // 1x Smokeater small lines
    'Rokkon Shishio Cloud to Cloud 2': '83E4',
    // 2x Smokeater medium lines
    'Rokkon Shishio Cloud to Cloud 3': '83E5',
    // 3x Smokeater large lines
    'Rokkon Shishio Noble Pursuit': '83E6',
    // line aoe
    'Rokkon Shishio Levinburst': '83E7',
    // line damage for going through rings during Noble Pursuit
    'Rokkon Shishio Thunder Vortex': '83F4',
    // donut
    'Rokkon Shishio Yoki': '83EB',
    // ground circles
    'Rokkon Shishio Yoki-uzu': '83EC',
    // large circle forcing you into the quicksand
    'Rokkon Shishio Devilish Thrall Right Swipe': '83F0',
    // right 180 cleave
    'Rokkon Shishio Devilish Thrall Left Swipe': '83F1',
    // left 180 cleave
    'Rokkon Shishio Haunting Thrlall Reisho 1': '872B',
    // ghost centered circle
    'Rokkon Shishio Haunting Thrlall Reisho 2': '872C',
    // ghost centered circle
    'Rokkon Shishio Haunting Thrlall Reisho 3': '83F2',
    // ghost centered circle
    'Rokkon Shishio Clever Thrall Unsagely Spin': '83ED',
    // centered circle
    'Rokkon Shishio Feral Thrall Rush': '83EE',
    // line
    'Rokkon Shishio Venomous Thrall Vasoconstrictor': '83EF',
    // targeted circle

    // Enenra
    'Rokkon Enenra Kiseru Clamor 1': '8048',
    // initial jump that creates Bedrock Uplift earth rings
    'Rokkon Enenra Bedrock Uplift 2': '8049',
    // earth ring 2
    'Rokkon Enenra Bedrock Uplift 3': '804A',
    // earth ring 3
    'Rokkon Enenra Bedrock Uplift 4': '804B',
    // earth ring 4
    'Rokkon Enenra Into the Fire': '8058',
    // 180 cleave after Out of the Smoke
    'Rokkon Enenra Smoldering': '8050',
    // growing ground circle
    'Rokkon Enenra Smoke Rings': '8053',
    // "get out" circle collision
    'Rokkon Enenra Uplift': '8057' // followup ground circle to Snuff
  },

  gainsEffectWarn: {
    // BFF = 9999 duration, C00 = 15s duration
    'Rokkon Yozakura Sludge': 'BFF',
    // standing in Mudrain circles
    // C05 = 9999 duration, C06 = 15s duration
    'Rokkon Bleed': 'C05',
    // standing outside Yozakura, Enenra
    // BF9 = 9999 duration, BFA = 15s duration
    'Rokkon Burns': 'BF9',
    // standing outside Gorai
    // C01 = 9999 duration, C02 = 15s duration
    'Rokkon Electrocution': 'C01',
    // standing outside Shishio during lightning
    'Rokkon Yozakura Art of the Fluff Seduced': 'E28',
    // looking at the doggos
    'Rokkon Gorai Transfiguration': '648' // not standing in a tower
  },

  shareWarn: {
    'Rokkon Enenra Pipe Cleaner': '8055' // earth shaker line cleave
  },

  shareFail: {
    'Rokkon Enenra Snuff': '8056' // tank buster
  }
};

/* harmony default export */ const mount_rokkon = (mount_rokkon_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/smileton.ts


const smileton_triggerSet = {
  zoneId: zone_id/* default.Smileton */.Z.Smileton,
  damageWarn: {
    'Smileton Smiley Wanderer Empty Beleaguer': '6964',
    // targeted circle
    'Smileton Smiley Lunatender La Vie en Epines': '695E',
    // frontal line
    'Smileton Smiley Lunatender Anthine Needles': '695F',
    // ??
    'Smileton Smiley Panopt Retinal Glare': '696A',
    // frontal cone
    'Smileton Face Mixed Feelings': '6738',
    // lines between relatively small faces
    'Smileton Smiley Scraper Headspin': '695D',
    // centered circle
    'Smileton Smiley Daphnia Acrid Stream': '6960',
    // targeted circle
    'Smileton Smiley Metalloid Lattice': '6969',
    // long line aoe
    'Smileton Frameworker Leap Forward': '6746',
    // jump to large circle
    'Smileton Frameworker Printed Worker Leap Forward': '6747',
    // jump to large circle
    'Smileton Frameworker Omnidirectional Onslaught': '6749',
    // alternating pinwheel'
    'Smileton Smiley Dynamite Burst': '696B',
    // quick centered circle near death
    'Smileton Smiley Regolith Metamorphic Blast': '6967',
    // large conal
    'Smileton Smiley Regolith Orogenic Storm': '6968',
    // targeted circle
    'Smileton Smiley Supporter Fire Fighter': '695C',
    // donut aoe
    'Smileton Smiley Sweeper Sewer Water 1': '6962',
    // front/back cleave
    'Smileton Smiley Sweeper Sewer Water 2': '6963',
    // front/back cleave
    'Smileton The Big Cheese Bomb Iron Kiss': '674D',
    // moving bomb circular explosion
    'Smileton The Big Cheese Excavation Bomb Excavated': '6C32',
    // mine explosion after Explosive Power
    'Smileton The Big Cheese Right Disassembler': '674F',
    // right cleave
    'Smileton The Big Cheese Left Disassembler': '6750' // left cleave
  },

  shareWarn: {
    'Smileton Face Temper, Temper': '6740',
    // spread
    'Smileton The Big Cheese Leveling Missiles': '' // spread
  },

  soloWarn: {
    'Smileton The Big Cheese Electric Arc': '6753' // stack marker
  },

  triggers: [{
    id: 'Smileton Face Wrong Face',
    type: 'GainsEffect',
    // ACB = Smiley Face
    // ACC = Frowny Face
    // Taking this multiple times stacks the effect.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'AC[BC]',
      source: 'Face'
    }),
    condition: (_data, matches) => parseInt(matches.count) > 1,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: `${matches.effect} x${matches.count}`,
          de: `${matches.effect} x${matches.count}`,
          fr: `${matches.effect} x${matches.count}`,
          ja: `${matches.effect} x${matches.count}`,
          cn: `${matches.effect} x${matches.count}`,
          ko: `${matches.effect} x${matches.count}`,
          tc: `${matches.effect} x${matches.count}`
        }
      };
    }
  }]
};
/* harmony default export */ const smileton = (smileton_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/stigma_dreamscape.ts

// TODO: Do Mustard Bomb or Wheel splash?
// TODO: How to disambiguate the 828 Bleeding debuff? It's unavoidably inflicted by several things,
// including Mustard Bomb and Atomic Ray.
// However, it is also inflicted by arena walls on bosses 1/3.
const stigma_dreamscape_triggerSet = {
  zoneId: zone_id/* default.TheStigmaDreamscape */.Z.TheStigmaDreamscape,
  damageWarn: {
    'Dreamscape Omicron Invader Electric Stream': '6DB8',
    // Line AoE, before boss 1
    'Dreamscape Omicron Invader Shocking Discharge': '6B99',
    // Small Chariot AoE, before boss 1

    'Dreamscape Proto-Omega Starboard Side Cannons': '6320',
    // Half-arena cleave, boss 1
    'Dreamscape Proto-Omega Larboard Side Cannons': '6321',
    // Half-arena cleave, boss 1
    'Dreamscape Proto-Omega Forward Interceptors': '6323',
    // Forward half arena cleave, boss 1
    'Dreamscape Proto-Omega Rear Interceptors': '6325',
    // Rear half arena cleave, boss 1
    'Dreamscape Mark II Guided Missile Iron Kiss': '6327',
    // Missile explosion, boss 1

    'Dreamscape Delta Invader Rail Cannon': '6B9E',
    // Line AoE, before boss 2

    'Dreamscape Arch-Lambda Tread': '63AC',
    // Mobile Assault Cannon dashes, boss 2
    'Dreamscape Arch-Lambda Wave Cannon': '63AF',
    // Get-behind arena cleave after Tread, boss 2
    'Dreamscape Arch-Lambda Main Sniper Cannon': '63B0',
    // Charge during Auto-Mobile Sniper Cannon, boss 2

    'Dreamscape Hybrid Dragon Engulfing Flames': '6BA0',
    // Rectangle AoE, after boss 2
    'Dreamscape Omega Frame Thermite Bomb': '6BA1',
    // Small circle AoE, after boss 2

    'Dreamscape Omega Frame Starboard Proto-Wave Cannon': '642A',
    // Half-arena cleave, boss 3
    'Dreamscape Omega Frame Larboard Proto-Wave Cannon': '642B',
    // Half-arena cleave, boss 3
    'Dreamscape Hybrid Dragon Touchdown': '68F9',
    // Circle AoE, boss 3
    'Dreamscape Hybrid Dragon Fire Breath': '642E',
    // Giant cone AoE, boss 3
    'Dreamscape Proto-Rocket Punch Rush': '642D',
    // Line AoEs, boss 3
    'Dreamscape Stigma-4 Electromagnetic Release Dynamo': '6432',
    // Dynamo AoE, boss 3
    'Dreamscape Stigma-4 Electromagnetic Release Chariot': '6434' // Chariot AoE, boss 3
  },

  gainsEffectWarn: {
    'Dreamscape Proto-Omega Puddle Burns': '892' // Flame puddle effect, boss 1
  },

  shareWarn: {
    'Dreamscape Proto-Omega Spread Burn': '6329',
    // Spread circles, boss 1. (Cast name is Chemical Missile, 6328.)
    'Dreamscape Arch-Lambda Personal Sniper Cannon': '63B2' // Headmarker lasers, boss 2
  },

  soloWarn: {
    'Dreamscape Proto-Omega Electric Slide': '632A' // Stack marker, boss 1.
  }
};

/* harmony default export */ const stigma_dreamscape = (stigma_dreamscape_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/the_aitiascope.ts

const the_aitiascope_triggerSet = {
  zoneId: zone_id/* default.TheAitiascope */.Z.TheAitiascope,
  damageWarn: {
    'Aitiascope Sinking Rivalry Egotism': '6B1A',
    // very large circle
    'Aitiascope Livia Aglaea Climb': '6444',
    // diagonal quadrant cleave
    'Aitiascope Livia Aglaea Shot 1': '6446',
    // lines
    'Aitiascope Livia Aglaea Shot 2': '6447',
    // lines coming back
    'Aitiascope Livia Ignis Amoris': '644C',
    // Odi et Amo targeted circles
    'Aitiascope Livia Disparagement': '644A',
    // wide conal
    'Aitiascope Sinking Desire The Path of Avarice': '6B1B',
    // line aoe
    'Aitiascope Sinking Partiality Unrightful Claim': '6B1C',
    // centered circle, gives disease
    'Aitiascope Sinking Dissension Whisper of Our Discontent': '6B1D',
    // conal
    'Aitiascope Rhitahtyn Tartarean Spark': '6457',
    // laser line aoe
    'Aitiascope Rhitahtyn Shield Skewer': '6450',
    // charge
    'Aitiascope Rhitahtyn Shrapnel Shell': '6454',
    'Aitiascope Sinking Regret Lost Opportunity': '6B1F',
    // absolutely gigantic conal
    'Aitiascope Amon Thundaga Forte 1': '645B',
    // initial pinwheel
    'Aitiascope Amon Thundaga Forte 2': '645C',
    // second pinwheel
    'Aitiascope Amon Epode': '645F',
    // coin laser
    'Aitiascope Amon Right Firaga Forte': '6460',
    // right cleave
    'Aitiascope Amon Left Firaga Forte': '6461',
    // left cleave
    'Aitiascope Amon Eruption Forte': '6468',
    // targeted circles
    'Aitiascope Amon Dreams of Ice': '6C6C' // shiva icicle appearing
  },

  damageFail: {
    'Aitiascope Rhitahtyn Impact': '644F',
    // walls appearing during Vexillatio cast
    'Aitiascope Amon Curtain Call': '6466' // line of sight
  },

  shareFail: {
    'Aitiascope Livia Aglaea Bite': '6449'
  }
};
/* harmony default export */ const the_aitiascope = (the_aitiascope_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/the_dead_ends.ts



// Note: Ignoring Toxicosis (BB8) standing in oil puddles in section 1 as it is just flavor.
// Note: Ignoring Necrosis (B95) as it's covered by Wave of Nausea and Necrotic Fluid.
const the_dead_ends_triggerSet = {
  zoneId: zone_id/* default.TheDeadEnds */.Z.TheDeadEnds,
  damageWarn: {
    'DeadEnds Warped Flesh Amorphic Flail': '6E91',
    // centered circle (pudding)
    'DeadEnds Warped Flesh Terminal Bloom': '6FFF',
    // targeted circle (pudding)
    'DeadEnds Warped Flesh Plague Fang': '6E92',
    // targeted circle (tall
    'DeadEnds Grebuloff Cough Up': '653E',
    // 3x targeted circles
    'DeadEnds Ambient No Future': '6CC9',
    // ambient red reticule (before)
    'DeadEnds Airborne Freedom Fighter Air Blast': '6E72',
    // line aoe
    'DeadEnds Landed Freedom Fighter Photon Burst': '6E71',
    // targeted circle
    'DeadEnds Peacekeeper Electromagnetic Repellant': '6EC8',
    // red circle under boss prior to electric circle
    'DeadEnds Peacekeeper Perpetual War Machine Small-Bore Laser': '6EC0',
    // lasers from triangles, short telegraph
    'DeadEnds Peacekeeper Peacefire': '654E',
    // rotating large circles
    'DeadEnds Peacekeeper No Future': '6547',
    // red reticule (during boss)
    'DeadEnds Xenofauna Relevation': '6C47',
    // targeted black/yellow circle
    'DeadEnds Xenoflora Creeping Hush': '6C45',
    // frontal blue cleave
    'DeadEnds Ra-la Lamellar Light': '6553',
    // expanding circles from Prance
    'DeadEnds Ra-la Lifesbreath': '6554',
    // line aoe
    'DeadEnds Ra-la Loving Embrace 1': '6557',
    // left/right cleave
    'DeadEnds Ra-la Loving Embrace 2': '6558' // left/right cleave
  },

  damageFail: {
    // All give debuffs that require healer attention, so is a worse mistake.
    'DeadEnds Grebuloff Necrotic Fluid': '653F',
    // exaflare orbs
    'DeadEnds Grebuloff Wave of Nausea': '6EBB',
    // donut
    'DeadEnds Ra-la Golden Wings Lamellar Light 1': '6556',
    // Doom-giving Lifesbreath butterfly lines
    'DeadEnds Ra-la Golden Wings Lamellar Light 2': '655F' // Doom-giving Lifesbreath butterfly lines
  },

  gainsEffectWarn: {
    'DeadEnds Grebuloff Hysteria': '128',
    // failing dorito stack
    'DeadEnds Peacekeeper Burns': '892',
    // standing or getting knocked into outside edge
    'DeadEnds Peacekeeper Electrocution': '76B' // standing under Peacekeeper after Electromagnetic Repellant
  },

  shareWarn: {
    'DeadEnds Grebuloff Befoulment': '6544',
    // spread
    'DeadEnds Peacekeeper Infantry Deterrent': '6EC7',
    // spread
    'DeadEnds Peacekeeper No Future Spread': '6548',
    // spread at the end of No Future
    'DeadEnds Ra-la Still Embrace': '655C' // spread
  },

  shareFail: {
    'DeadEnds Peacekeeper Elimination': '654F' // tankbuster laser cleave
  },

  triggers: [{
    id: 'DeadEnds Ra-la Doom Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '6E9'
    }),
    run: (data, matches) => {
      data.hasDoom ??= {};
      data.hasDoom[matches.target] = true;
    }
  }, {
    id: 'DeadEnds Ra-la Doom Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '6E9'
    }),
    run: (data, matches) => {
      data.hasDoom ??= {};
      data.hasDoom[matches.target] = false;
    }
  }, {
    id: 'DeadEnds Ra-la Doom',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '6E9'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (data, matches) => {
      if (!data.hasDoom) return;
      if (!data.hasDoom[matches.target]) return;
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const the_dead_ends = (the_dead_ends_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/the_fell_court_of_troia.ts


// TODO: if Rotten Rampage spread is shared with a wall, it is shown as a mistake

const the_fell_court_of_troia_triggerSet = {
  zoneId: zone_id/* default.TheFellCourtOfTroia */.Z.TheFellCourtOfTroia,
  damageWarn: {
    'Troia Troian Sentry Evil Pleghm': '7606',
    // targeted circle
    'Troia Troian Scavenger Dark Arrivisme': '7605',
    // targeted circle
    'Troia Troian Pawn Condemnation': '7604',
    // frontal conal

    'Troia Evil Dreamer Dark Vision 1': '73B8',
    // untelegraphed line aoes
    'Troia Evil Dreamer Dark Vision 2': '73BB',
    // untelegraphed line aoes
    'Troia Evil Dreamer Unite Mare Adds': '73BC',
    // large circles where you need to kill one add
    'Troia Evil Dreamer Unite Mare Small': '73B5',
    // final phase enrage small circles
    'Troia Evil Dreamer Unite Mare Big': '73B6',
    // final phase enrage large circle

    'Troia Troian Guard Void Trap': '760A',
    // large targeted circle
    'Troia Troian Footman Grim Halo': '7410',
    // large centered circle
    'Troia Troian Rider Geirrothr': '7607',
    // random player targeted front conal
    'Troia Troian Bishop Jester\'s Reap': '7609',
    // frontal conal
    'Troia Troian Knight Hall of Sorrow': '7608',
    // targeted circle

    'Troia Beatrice Beatific Scorn': '7479',
    // explosions
    'Troia Beatrice Voidshaker': '747E',
    // front conal
    'Troia Beatrice Toric Void': '79E7',
    // outside ring donut

    'Troia Troian Trapper Arachne Web': '760F',
    // targeted circle
    'Troia Troian Equerry Swoop': '760D',
    // circular entrance aoe
    'Troia Troian Butler Dark': '760E',
    // frontal contal
    'Troia Troian Steward Unholy Darkness': '760C',
    // centered circle

    'Troia Scarmiglione Rotten Rampage Circle': '7618',
    // untargeted ground circles
    'Troia Scarmiglione Blighted Bedevilment': '761B',
    // purple knockback circle
    'Troia Scarmiglione Blighted Bladework': '7633',
    // giant circle (with a line to it)
    'Troia Scarmiglione Blighted Sweep': '7635',
    // 180 "get behind" attack
    'Troia Scarmiglione Nox': '7621' // untargeted ground circles during add phase
  },

  gainsEffectFail: {
    'Troia Beatrice Doom': 'D24',
    // failing Death Forseen 747D lookaway
    'Troia Scarmiglione Zombification': '901',
    // taking three stacks of Brain Rot during Rotten Rampage
    // C09 is the 9999 duration while you are standing in the wall, and C0A is the 15s lingering debuff
    'Troia Scarmiglione Toxicosis': 'C0A' // getting knocked by Vacuum Wave not into a wall
  },

  shareWarn: {
    'Troia Beatrice Void Nail': '747F',
    // spread
    'Troia Scarmligione Rotten Rampage Spread': '7619',
    // spread markers
    'Troia Scarmiglione Void Gravity': '7622' // spread during add phase
  },

  shareFail: {
    'Troia Scarmiglione Firedamp': '7637' // cleaving tankbuster
  },

  soloWarn: {
    'Troia Beatrice Antipressure': '79E8',
    // stack
    'Troia Scarmiglione Void Vortex': '7623' // stack during add phase
  }
};

/* harmony default export */ const the_fell_court_of_troia = (the_fell_court_of_troia_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/the_lunar_subteranne.ts


// TODO: Six Fulms Under (237) 10 second debuff death

const the_lunar_subteranne_triggerSet = {
  zoneId: zone_id/* default.TheLunarSubterrane */.Z.TheLunarSubterrane,
  damageWarn: {
    // Trash 1
    'Lunar Subterrane Voidmoon Plague Stare': '8C0F',
    // line aoe
    'Lunar Subterrane Voidmoon Dahak The Look': '8C73',
    // front conal
    'Lunar Subterrane Voidmoon Archaeodemon Unholy Darkness': '8C74',
    // targeted circle
    'Lunar Subterrane Voidmoon Humbaba Anoxic Breath': '8C75',
    // front knockback conal

    // Boss 1
    'Lunar Subterrane Dark Elf Explosion': '87E3',
    // sigil squares
    'Lunar Subterrane Dark Elf Ruinous Hex 1': '89B6',
    // first set of staves bomberman lines
    'Lunar Subterrane Dark Elf Ruinous Hex 2': '87E5',
    // hidden staves bomberman lines

    // Trash 2
    'Lunar Subterrane Frenzied Morbol Bad Breath': '8C11',
    // front conal
    'Lunar Subterrane Frenzied Behemoth Death Spin': '8C7C',
    // ?
    'Lunar Subterrane Frenzied Behemoth Charybdis': '8C77',
    // targeted circle

    // Boss 2
    'Lunar Subterrane Antlion Antlion March': '8801',
    // charges
    'Lunar Subterrane Antlion Towerfall': '8804',
    // falling towers during Landslip / Antlion March

    // Trash 3
    'Lunar Subterrane Baron Jester Black Wind': '8C7A',
    // targeted circle
    'Lunar Subterrane Original Progenitrix Scalding Scolding': '8C7B',
    // front conal
    'Lunar Subterrane Original Gargoyle Grim Halo': '7410',
    // large centered circle
    'Lunar Subterrane Original Gargoyle Grim Fate': '7411',
    // front conal
    'Lunar Subterrane Vampiress Void Fire IV': '8C14',
    // large targeted circle

    // Boss 3
    'Lunar Subterrane Durante Duplicitous Battery': '88B2',
    // spiral of circles
    'Lunar Subterrane Durante Exposion 1': '88BE',
    // unsplit Aetheric Orb circle
    'Lunar Subterrane Durante Exposion 2': '88BD',
    // split Aetheric Orb circle
    'Lunar Subterrane Durante Hard Slash': '88C1',
    // wide cleave from wall after Antipodal Assault
    'Lunar Subterrane Durante Twilight Phase': '8CD8',
    // big purple ribs
    'Lunar Subterrane Durante Dark Impact': '88BA',
    // large tether orb circle
    'Lunar Subterrane Durante Death\'s Journey 1': '88B3',
    // center circle during purple pinwheel
    'Lunar Subterrane Durante Death\'s Journey 2': '88B4' // lines during purple pinwheel
  },

  gainsEffectWarn: {
    'Lunar Subterrane Antlion Sludge': 'BFF' // landslip into the wall
  },

  shareWarn: {
    'Lunar Subterrane Dark Elf Void Dark II': '87E4',
    // spread circles
    'Lunar Subterrane Durante Fallen Grace': '8C2A' // spread circles
  }
};

/* harmony default export */ const the_lunar_subteranne = (the_lunar_subteranne_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/the_sildihn_subterrane.ts

const the_sildihn_subterrane_triggerSet = {
  zoneId: zone_id/* default.TheSildihnSubterrane */.Z.TheSildihnSubterrane,
  damageWarn: {
    // Trash
    'Sildihn Aqueduct Wamoura Poison Dust': '77CC',
    // frontal conal
    'Sildihn Aqueduct Gigantoad Labored Leap': '77CE',
    // centered circle after Sticky Tongue
    'Sildihn Aqueduct Ameretat Bad Breath': '77CF',
    // frontal conal
    'Sildihn Forgotten Head Butt': '77D0',
    // Forgotten Sabotender/Forgotten Cliffmole
    'Sildihn Forgotten Campeador Several Thousand Needles': '77D1',
    'Sildihn Forgotten Phoebad Boulder Toss': '77D4',
    // targeted circle
    'Sildihn Forgotten Phoebad Landslip': '77D3',
    // frontal 135 degree conal
    'Sildihn Aqueduct Uragnite Palsynyxis': '77C2',
    // frontal conal
    'Sildihn Aqueduct Eft Bog Bomb': '77C3',
    // targeted small circle
    'Sildihn Aqueduct Goobbue Heavy Toss': '77C6',
    // frontal 90 degree conal after Inhale
    'Sildihn Aqueduct Adamantoise Tortoise Stomp': '77C7',
    // large centered circle
    'Sildihn Aqueduct Golem Acclaim': '7A34',
    // frontal 90 degree conal
    'Sildihn Aqueduct Leshy Creeping Ivy': '77C8',
    // frontal 90 degree conal
    'Sildihn Aqueduct Odqan Gelid Gale': '77C9',
    // targeted circle
    'Sildihn Aqueduct Genomos Aquashatter': '77C4',
    // targeted circle
    'Sildihn Forgotten Drake Burning Cyclone': '77D6',
    // various Drakes frontal 90 degree conal
    'Sildihn Forgotten Wraith Dark': '77D7',
    //  targeted circle
    'Sildihn Forgotten Revenant Unending Woe': '77D8',
    // centered circle
    'Sildihn Water Sprite Aqua Globe': '77DA',
    // very large centered circle
    'Sildihn Aqueduct Sarcosuchus Critical Bite': '77DB',
    // frontal 135 degree conal
    'Sildihn Aqueduct Elbst Aqua Roar': '77DC',
    // large targeted circle
    'Sildihn Dhruva Water II': '77DE',
    // centered circle
    'Sildihn Dullahan Blighted Gloom': '77E0',
    // large centered circle
    'Sildihn Dullahan Cloudcover': '77DF',
    // targeted circle
    'Sildihn Hollow Dominion Slash': '77E2',
    // frontal conal
    'Sildihn Visage Dark Fire III': '77E3',
    // targeted circle
    'Sildihn Python Regorge': '77EF',
    // targeted circle
    'Sildihn Python Whip Back': '77E4',
    // backwards 90 degree conal

    // Various Geryon the Steer
    'Sildihn Geryon Powder Keg Explosion 1': '74D4',
    // blue/red barrel explosion
    'Sildihn Geryon Powder Keg Explosion 2': '74D5',
    // blue/red barrel explosion
    'Sildihn Geryon Colossal Slam': '74D0',
    // targeted conal
    'Sildihn Geryon Colossal Swing': '74D1',
    // 180 cleave
    'Sildihn Geryon Gigatomill': '74CB',
    // rotating cross attack
    'Sildihn Geryon Runaway Sludge': '74D6',
    // initial sludge circles (left)
    'Sildihn Geryon Rolling Boulder': '74DA',
    // boulders rolling (middle)
    'Sildihn Geryon Suddenly Sewage': '74D8',
    // water quadrant explosion (right)

    // Silkie
    'Sildihn Silkie Squeaky Right 1': '772F',
    // long 135 right cleave
    'Sildihn Silkie Squeaky Right 2': '7730',
    // long 135 right cleave
    'Sildihn Silkie Squeaky Right 3': '7731',
    // long 135 right cleave
    'Sildihn Silkie Squeaky Left 1': '7732',
    // long 135 left cleave
    'Sildihn Silkie Squeaky Left 2': '7733',
    // long 135 left cleave
    'Sildihn Silkie Squeaky Left 3': '7734',
    // long 135 left cleave
    'Sildihn Silkie Chilling Duster 1': '7738',
    // cross
    'Sildihn Silkie Chilling Duster 2': '773B',
    // cross after Slippery Soap
    'Sildihn Silkie Chilling Duster 3': '773F',
    // cross from Puff
    'Sildihn Silkie Bracing Duster 1': '7739',
    // donut
    'Sildihn Silkie Bracing Duster 2': '773C',
    // donut after Slippery Soap
    'Sildihn Silkie Slippery Soap': '773A',
    // charge
    'Sildihn Silkie Spot Remover': '7743',
    // puddles appearing
    'Sildihn Silkie Eastern Ewer Rinse': '7749',
    // ewers from 01 branch
    'Sildihn Silkie Puff and Tumble 1': '774A',
    // brooms from 04 branch
    'Sildihn Silkie Puff and Tumble 2': '774B',
    // brooms from 04 branch
    'Sildihn Silkie Puff and Tumble 3': '774C',
    // brooms from 04 branch
    'Sildihn Silkie Puff and Tumble 4': '77C0',
    // brooms from 04 branch

    // Gladiator of Sil'dih
    'Sildihn Gladiator Ring of Might Out 1': '763F',
    // ring 1 out
    'Sildihn Gladiator Ring of Might Out 2': '7640',
    // ring 2 out
    'Sildihn Gladiator Ring of Might Out 3': '7641',
    // ring 3 out
    'Sildihn Gladiator Ring of Might In 1': '7642',
    // ring 1 in
    'Sildihn Gladiator Ring of Might In 2': '7643',
    // ring 2 in
    'Sildihn Gladiator Ring of Might In 3': '7644',
    // ring 3 in
    'Sildihn Gladiator Rush of Might Front': '763D',
    // initial 180 cleave in front
    'Sildihn Gladiator Rush of Might Back': '763E',
    // followup 180 cleave behind
    'Sildihn Gladiator Sculptor\'s Passion': '764A',
    // front line
    'Sildihn Gladiator Regret Rack and Ruin': '7646',
    // checkerboard line aoes

    'Sildihn Gladiator Biting Wind Small Initial': '79F6',
    // initial wind circles
    'Sildihn Gladiator Biting Wind Small': '79F7',
    // small wind circles (that should be avoided)
    'Sildihn Gladiator Biting Wind Big Initial': '79FD',
    // initial wind circle with big updraft
    'Sildihn Gladiator Shattering Steel': '764B',
    // dodgeable roomwide aoe via wind/boulders
    'Sildihn Gladiator Hateful Visage Golden Flame': '7652',
    // statue line aoes
    'Sildihn Gladiator Hateful Visgae Silver Flame 1': '7653',
    // statue rotating line aoe
    'Sildihn Gladiator Hateful Visgae Silver Flame 2': '7654',
    // statue rotating line aoe
    'Sildihn Gladiator Hateful Visgae Silver Flame 3': '7655',
    // statue rotating line aoe

    // Shadowcaster Zeless Gah
    'Sildihn Shadowcaster Ball of Fire Burn': '748F',
    // circular explosion from fireballs
    'Sildihn Shadowcaster Arcane Font Blazing Benifice': '74A5',
    // line aoe from portal
    'Sildihn Shadowcaster Pure Fire': '74A0',
    // targeted ground circles
    'Sildihn Shadowcaster Cast Shadow 1': '749B',
    // first hit of Cast Shadow
    'Sildihn Shadowcaster Cast Shadow 2': '749D',
    // second hit of Cast Shadow
    'Sildihn Shadowcaster Trespasser\'s Pyre': '7498',
    // hitting Infirm Ward lasers

    // Thorne Knight
    'Sildihn Thorne Magicked Puppet Magic Cannon': '70F7',
    // blue line aoe
    'Sildihn Thorne Amalj\'aa Artillery Carriage Amalj\'aa Artillery': '70F8',
    // orange line aoe
    'Sildihn Thorne Fore Honor': '70EC',
    // forward 180 cleave
    'Sildihn Thorne Blazing Beacon 1': '70F9',
    // orange Slashburn cleave
    'Sildihn Thorne Blazing Beacon 2': '7100',
    // reversed orange Slashburn cleave
    'Sildihn Thorne Sacred Flay 1': '70FA',
    // split blue Slashburn cleaves
    'Sildihn Thorne Sacred Flay 2': '7101',
    // reversed split blue Slashburn cleaves
    'Sildihn Thorne Ball of Fire Explosion': '70FD' // Blaze of Glory orbs
  },

  gainsEffectWarn: {
    'Sildihn Sludge': 'B84',
    // puddles from not turning on the water pump
    'Sildihn Dropsy 1': '827',
    // puddles during Silkie Dust Bluster knockback
    'Sildihn Dropsy 2': 'B69',
    // ceruleum Geryon squares
    'Sildihn Toxicosis': 'C0A',
    // standing outside arena 1 (C09 is the infinite duration effect)
    'Sildihn Bleeding': 'C06',
    // standing outside arena 2 (C05 is the infinite duration effect)
    'Sildihn Burns': 'BFA' // standing outside Shadowcaster arena (BF9 is the infinite duration effect)
  },

  shareFail: {
    'Sildihn Geryon Colossal Strike': '74CF' // tankbuster (probably cleaves?)
  }
};

/* harmony default export */ const the_sildihn_subterrane = (the_sildihn_subterrane_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/the_tower_of_babil.ts


// TODO: Figure out how to determine whether someone actively stood in Boundless Pain
const the_tower_of_babil_triggerSet = {
  zoneId: zone_id/* default.TheTowerOfBabil */.Z.TheTowerOfBabil,
  damageWarn: {
    'Babil Nimrod Cannon Shot': '6DE1',
    // Large circle AoE, before first boss
    'Babil Tempered Imperial Spread Shot': '6DE2',
    // Conal AoE, before first boss
    'Babil Satellite Incendiary Circle': '6DE3',
    // Large donut AoE, before first boss
    'Babil Reaper Magitek Cannon': '6DE4',
    // AOE circle, before first boss

    'Babil Barnabas Ground and Pound': '62EA',
    // Telegraphed line knockback, boss 1
    'Babil Barnabas Dynamic Scrapline': '62F0',
    // Inner circle during Dynamic Scrapline, boss 1
    'Babil Barnabas Dynamic Pound': '62EE',
    // Line during Dynamic Pound, boss 1
    'Babil Barnabas Electromagnetic Release 1': '62F1',
    // Center AoE circle, boss 1
    'Babil Barnabas Electromagnetic Release 2': '62EF',
    // Center magnetic line, boss 1
    'Babil Barnabas Rolling Scrapline': '62EB',
    // Center AoE circle, no magnets, boss 1
    'Babil Thunderball Shock': '62F2',
    // Cardinal/intercardinal AoE circles, boss 1

    'Babil Sky Armor Aethershot': '6DE7',
    // Circle AoE, after boss 1
    'Babil Rearguard Cermet Pile': '6DE8',
    // Line AoE, before boss 2
    'Babil Colossus Grand Sword': '6DE9',
    // Frontal cone, before boss 2
    'Babil Avenger Shoulder Cannon': '6DEA',
    // Targeted AoE circle, before boss 2
    'Babil Death Machine Magitek Ray': '6DEB',
    // Long line AoE, before boss 2

    'Babil Magitek Chakram Mighty Blow': '62F4',
    // Arena AoE, if not mini, boss 2
    'Babil Lugae Surface Missile': '62F7',
    // Targeted AoE circles from Magitek Missile, boss 2
    'Babil Magitek Explosive Explosion': '62F9',
    // Bomberman line AoE, boss 2
    'Babil Lugae Magitek Ray': '62FC',
    // Frontal line AoE, boss 2

    'Babil Gunship Garlean Fire': '6DEE',
    // Circle AoE, after boss 2
    'Babil Armored Weapon Diffractive Laser': '5E53',
    // Circle AoE, after boss 2
    'Babil Magitek Crane Crane Game': '6C35',
    // Large environmental circle AoE, after boss 2
    'Babil Hexadrone 2-Tonze Magitek Missile': '6DEC',
    // Circle AoE, after boss 2
    'Babil Roader Rush': '6DED',
    // Rectangle AoE, after boss 2
    'Babil Hypertuned Specimen Right-arm Blaster': '6DF0',
    // Rectangle AoE, after boss 2

    'Babil Anima Phantom Pain': '62FF',
    // Lunar Nail squares, boss 3
    'Babil Mega-graviton Graviton Spark': '6302',
    // Tether failure, boss 3
    'Babil Anima Pater Patiae': '6306',
    // Line AoE, boss 3
    'Babil Anima Obliviating Claw': '630A',
    // Chase puddle initial circle, boss 3
    'Babil Iron Nail Obliviating Claw': '630C',
    // Iron Nail spawn circles, boss 3
    'Babil Iron Nail Charnel Claw': '630D',
    // Line dashes, boss 3
    'Babil Anima Coffin Scratch': '630E' // Chase puddles, boss 3
  },

  gainsEffectWarn: {
    'Babil Barnabas Electrocution': '826' // Arena edge effect, boss 1
  },

  shareWarn: {
    'Babil Anima Erupting Pain': '6308' // Purple spread circles, boss 3
  },

  soloWarn: {
    'Babil Barnabas Shocking Force': '62EC' // Stack marker, boss 1
  },

  triggers: [{
    // Reaching 8 stacks of Breathless is a death
    id: 'Babil Lugae Breathless',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: 'A70',
      count: '7'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Suffocated',
          de: 'Erstickt',
          fr: 'A suffoqué(e)',
          ja: '窒息',
          cn: '窒息',
          ko: '질식',
          tc: '窒息'
        }
      };
    }
  }]
};
/* harmony default export */ const the_tower_of_babil = (the_tower_of_babil_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/the_tower_of_zot.ts


// TODO: Prapti Siddhi is a mistake on its own before stop
// and after stop, only a mistake for the person without stop.
// TODO: does Minduruva do anything on final fight if left alive for long?
// TODO: Prakamya Siddhi is a raidwide earlier, but one log had it look like a ground aoe?
const the_tower_of_zot_triggerSet = {
  zoneId: zone_id/* default.TheTowerOfZot */.Z.TheTowerOfZot,
  damageWarn: {
    'Zot Armored Fiend Soporific Gas': '6CE2',
    // centered circle
    'Zot Sky Armor Garlean Fire': '54EA',
    // targeted circle
    'Zot Minduruva Manusya Blizzard III': '6296',
    // blizzard pinwheel
    'Zot Minduruva Manusya Fire III': '6295',
    // fire donut
    'Zot Minduruva Manusya Thunder III': '6297',
    // thunder "cross" circles
    'Zot Minduruva Manusya Bio III': '6298',
    // 180 degree frontal cleave
    'Zot Death Claw Shred': '54ED',
    // line aoe
    'Zot Hypertuned Left-Arm Slash': '54EC',
    // frontal conal
    'Zot Sanduruva Berserker Sphere Sphere Shatter': '62A4',
    // circles during Explosive Force
    'Zot Predator Magitek Ray': '5E4F',
    // long line aoe
    'Zot Roader Haywire': '5E51',
    // line aoe charge
    'Zot Mark II Zot Colossus Exhaust': '5E4B',
    // long line aoe
    'Zot Armored Weapon Diffractive Laser': '5E53',
    // targeted circle
    'Zot Cinduruva Delta Blizzard III 1': '62B2',
    // lines/pinwheels
    'Zot Cinduruva Delta Blizzard III 2': '62B3',
    // lines/pinwheels
    'Zot Cinduruva Delta Thunder III 1': '62B5',
    // lines/circles
    'Zot Cinduruva Delta Thunder III 2': '62B6',
    // lines/circles
    'Zot Cinduruva Delta Fire III 1': '62AF',
    // lines/donuts
    'Zot Cinduruva Delta Fire III 2': '62B0',
    // lines/donuts
    'Zot Cinduruva Prapti Siddhi': '62BB',
    // Minduruva line during final boss
    'Zot Cinduruva Berserker Sphere Sphere Shatter': '62BF',
    // Explosive Force during final boss
    'Zot Cinduruva Prakamya Siddhi': '62BE' // ?? casted by Sinduruva after Minduruva has died
  },

  shareWarn: {
    'Zot Sanduruva Prapti Siddhi': '62A8' // targeted line, sometimes with stop
  }
};

/* harmony default export */ const the_tower_of_zot = (the_tower_of_zot_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/dungeon/vanaspati.ts




// TODO: do tankbusters cleave?
// TODO: what's the effect for running into the outer edge on Terminus Wrecker?
// TODO: what's the effect for running into the outer ring on Svarbhanu?
const vanaspati_triggerSet = {
  zoneId: zone_id/* default.Vanaspati */.Z.Vanaspati,
  damageWarn: {
    'Vanaspati Terminus Trampler Tremblor': '6C22',
    // large centered circle
    'Vanaspati Terminus Idolizer Deadly Tentacles': '6CDD',
    // conal
    'Vanaspati Terminus Snatcher Vitriol': '6232',
    // Mouth Off mouth circles
    'Vanaspati Terminus Snatcher What Is Right': '6233',
    // right cleave
    'Vanaspati Terminus Snatcher What Is Left': '6234',
    // left cleave
    'Vanaspati Terminus Sprinter Hollow Spike': '6C1F',
    // long line aoe
    'Vanaspati Terminus Horror Bellows': '6C1E',
    // 90 degree conal
    'Vanaspati Terminus Bellwether Winds Of Despair': '6CDC',
    // line aoe
    'Vanaspati Svarbhanu Chaotic Undercurrent Purple': '624A',
    // purple square explosions
    'Vanaspati Svarbhanu Chaotic Undercurrent Blue': '624B',
    // blue square explosions
    'Vanaspati Svarbhanu Cosmic Kiss Circle': '624F',
    // midphase circles on ground
    'Vanaspati Svarbhanu Midphase Charge': '631E' // unnamed middphase line attacks
  },

  shareWarn: {
    'Vanaspati Terminus Snatcher Wallow': '6236',
    // spread marker
    'Vanaspati Svarbhanu Cosmic Kiss Spread': '6250' // spread marker
  },

  soloWarn: {
    'Vanaspati Terminus Wrecker Poison Heart': '6CCB' // stack marker
  },

  triggers: [{
    // Lookaway mechanic, does no damage on success.
    id: 'Vanaspati Terminus Twitcher Double Hex Eye',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6C21',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const vanaspati = (vanaspati_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p10n.ts



// TODO: Replace Unmitigated Explosion by detecting/blaming whomever did not soak a pillar.

const p10n_triggerSet = {
  zoneId: zone_id/* default.AnabaseiosTheTenthCircle */.Z.AnabaseiosTheTenthCircle,
  damageWarn: {
    'P10N Parted Plumes Blade': '8271',
    // rotating blade AoE
    'P10N Pandaemoniac Ray': '8266' // half-room AoE
  },

  damageFail: {
    'P10N Unmitigated Explosion': '8260',
    // unsoaked pillar
    'P10N Imprisonment': '8262',
    // circle AoE from jails
    'P10N Cannonspawn': '8264' // donut AoE from jails
  },

  gainsEffectWarn: {
    'P10N Parted Plumes Puddle': 'C05',
    // bleed from standing in center puddle
    'P10N Concentrated Poison': 'E6C' // stacking bleed from standing in poison pools
  },

  soloWarn: {
    'P10N Pandaemoniac Meltdown': '8277' // line stack
  },

  triggers: [{
    // Stacking debuff from being tethered when Silkspit resolves
    // Auto-increments, and is fatal upon reaching 5 stacks
    // But it appears under some circumstances, the debuff is removed/can be removed earlier
    id: 'P10N Binding Soul Share Initial',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'DDB',
      count: '01'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'P10N Binding Soul Share Fatal',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'DDB',
      count: '05'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'P10N Soul Grasp',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '8279'
    }),
    condition: (data, matches) => !data.party.isTank(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'P10N Wicked Step',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '827[34]'
    }),
    condition: (data, matches) => !data.party.isTank(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const p10n = (p10n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p10s.ts

// TODO: non-tanks in Soul Grasp 82A0
// TODO: take two TetraDaemoniac Bonds stacks 87AE
// TODO: not 4 people in TetraDaemoniac Bonds stacks 87AE
// TODO: not 2 people in Duodæmoniac Bonds 82A3
// TODO: not 3 people in Steel Web 827F
// TODO: towers exploding (person missing the tower 8288 damage from it)
// TODO: take two meltdown laser 87B1 (or laser + stack 829E)
// TODO: poison from stepping in green stuff
// TODO: too many stacks from webs
// TODO: webs too close and forming unbreakable bond
// TODO: are there abilities for the lasers in the back during cannonspawn/imprisonment??
// TODO: taking two turret lasers in front
// TODO: taking two turret lasers at the same time
const p10s_triggerSet = {
  zoneId: zone_id/* default.AnabaseiosTheTenthCircleSavage */.Z.AnabaseiosTheTenthCircleSavage,
  damageWarn: {
    'P10S Entangling Web': '827E',
    // puddle under entangling web
    'P10S Pandaemon\'s Holy': '82A6',
    // "get out"
    'P10S Circles of Pandaemonium': '82A7',
    // "get in"
    'P10S Cannonspawn': '8285',
    // tower circle/donut
    'P10S Imprisonment': '8287',
    // tower circle/donut
    'P10S Peal of Damnation': '87B0',
    // back line laser during Cannonspawn/Imprisonment
    'P10S Touchdown': '828E',
    // large expanding circle
    'P10S Pandaemoniac Ray': '828A',
    // side laser
    'P10S Arcane Sphere Jade Passage': '828C' // bit lasers
  },

  shareWarn: {
    'P10S Dividing Wings': '8298',
    // tether cleave from staffs
    'P10S Silkspit': '827D',
    // spread webs
    'P10S Pandaemonic Meltdown Laser': '87B1' // spread laser
  },

  shareFail: {
    'P10S Daemoniac Bonds': '82A2',
    // spread debuff
    'P10S Wicked Step 1': '829A',
    // first wicked step tower
    'P10S Wicked Step 2': '829B' // first wicked step tower
  },

  soloFail: {
    'P10S Duodæmoniac Bonds': '82A3' // partners
  }
};

/* harmony default export */ const p10s = (p10s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p11n.ts


// TODO: Determine deaths from being pushed into the wall.
// Unfortunately all the knockbacks deal damage
const p11n_triggerSet = {
  zoneId: zone_id/* default.AnabaseiosTheEleventhCircle */.Z.AnabaseiosTheEleventhCircle,
  damageWarn: {
    'P11N Divisive Ruling Main': '81B5',
    // Line cleave AoE initial hit
    'P11N Divine Ruination Main': '81B6',
    // Inner expanding cleave follow-up after Divisive Ruling
    'P11N Ripples Of Gloom Main 1': '81B7',
    // Outer cleave follow-up after Divisive Ruling
    'P11N Ripples Of Gloom Main 2': '81B8',
    // Outer cleave follow-up after Divisive Ruling
    'P11N Katakrisis Light': '81C5',
    // Being outside safety circle with light
    'P11N Katakrisis Dark': '81C6',
    // Being outside safety circle with dark
    'P11N Dineis': '8726',
    // Baited puddles
    'P11N Inner Light': '86F3',
    // Chariot after Dismissal Ruling
    'P11N Outer Dark': '86F4',
    // Dynamo after Dismissal Ruling
    'P11N Lightburst': '81BD',
    // Chariot after Upheld Ruling
    'P11N Dark Perimeter': '81BE',
    // Dynamo after Upheld Ruling
    'P11N Divisive Ruling Illusion': '81D7',
    // Line cleave AoE initial hit
    'P11N Divine Ruination Illusion': '81D8',
    // Inner expanding cleave follow-up after Divisive Ruling
    'P11N Ripples Of Gloom Illusion 1': '81D9',
    // Outer cleave follow-up after Divisive Ruling
    'P11N Ripples Of Gloom Illusion 2': '81DA' // Outer cleave follow-up after Divisive Ruling
  },

  shareWarn: {
    'P11N Upheld Ruling Cleave': '81BA',
    // Giant cleave marker
    'P11N Blinding Light': '81E1' // Standard spread circles
  },

  soloWarn: {
    'P11N Upheld Ruling Stack': '81B9',
    'P11N Styx': '81DC'
  },
  triggers: [{
    id: 'P11N Emissarys Will',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '81C7',
      source: 'Themis'
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const p11n = (p11n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p11s.ts




// TODO: doing Dike without a tank swap or invulns
// TODO: people missing from Styx 8218 share
// TODO: taking two Jury Overruling 81E8/81E9 proteans
// TODO: people missing from Inevitable Law 81FC healer stacks
// TODO: people taking two Inevitable Law 81FC healer stacks
// TODO: people missing Inevitable Sentence 81FD partner stacks
// TODO: people missing from Upheld Overruling 81F2/8220 party stack
// TODO: handle multiple people being hit by Upheld Overruling 81F3/8221 damage better (tank warn, other person fail)
const p11s_triggerSet = {
  zoneId: zone_id/* default.AnabaseiosTheEleventhCircleSavage */.Z.AnabaseiosTheEleventhCircleSavage,
  damageWarn: {
    'P11S Illusory Glare': '81EA',
    // small targeted circles during Jury Overruling light
    'P11S Illusory Gloom': '81EB',
    // small targeted donuts during Jury Overruling dark
    'P11S Lightburst 1': '81F6',
    // large centered circle during Upheld Overruling light
    'P11S Lightburst 2': '8224',
    // large centered circle during Upheld Overruling light from clone
    'P11S Dark Perimeter 1': '81F7',
    // large dark donut during Upheld Overruling dark
    'P11S Dark Perimeter 2': '8225',
    // large dark donut during Upheld Overruling dark from clone
    'P11S Divisive Overruling 1': '81EE',
    // line during dark/light Divisive Overruling
    'P11S Divisive Overruling 2': '87B5',
    // line during dark/light Divisive Overruling in Messengers
    'P11S Divisive Ruling': '821C',
    // line during dark/light clone Divisive Ruling in Messengers/Letter
    'P11S Divine Ruination 1': '81EF',
    // expanding light Divisive Overruling Line
    'P11S Divine Ruination 2': '87B6',
    // expanding light Divisive Overruling Line in Messengers
    'P11S Divine Ruination 3': '821D',
    // expanding light clone Divisive Ruling Line in Messengers/Letter
    'P11S Ripples of Gloom 1': '81F0',
    // rippling dark Divisive Overruling Line
    'P11S Ripples of Gloom 2': '81F1',
    // rippling dark Divisive Overruling Line
    'P11S Ripples of Gloom 3': '87B7',
    // rippling dark Divisive Overruling Line in Messengers
    'P11S Ripples of Gloom 4': '87B8',
    // rippling dark Divisive Overruling Line in Messengers
    'P11S Ripples of Gloom 5': '821E',
    // rippling dark clone Divisive Overruling Line in Messengers/Letter
    'P11S Ripples of Gloom 6': '821F',
    // rippling dark clone Divisive Overruling Line in Messengers/Letter
    'P11S Inner Light': '8788',
    // large circle during Dismissal Overruling light
    'P11S Outer Dark': '8789',
    // large donut during Dismissal Overruling dark
    'P11S Arcane Sphere Arche 1': '8213',
    // light portal lasers
    'P11S Arcane Sphere Arche 2': '8214',
    // dark portal lasers
    'P11S Arcane Sphere Unlucky Lot 1': '8215',
    // light sphere explosion
    'P11S Arcane Sphere Unlucky Lot 2': '8216',
    // dark sphere explosion
    'P11S Arcane Cylinder Lightstream 1': '8207',
    // initial laser line
    'P11S Arcane Cylinder Lightstream 2': '8208',
    // rotating laser line
    'P11S Dark Current 1': '8209',
    // initial circles
    'P11S Dark Current 2': '820A',
    // rotating circles
    'P11S Katakiris Light': '81FF',
    // light tether failure
    'P11S Katakiris Dark': '8200' // dark tether failure
  },

  shareWarn: {
    'P11S Jury Overruling Light': '81E8',
    // protean
    'P11S Jury Overruling Dark': '81E9',
    // protean
    'P11S Upheld Overruling Dark 1': '81F3',
    // tank knockback
    'P11S Upheld Overruling Dark 2': '8221',
    // tank knockback
    'P11S Blinding Light': '822A' // spreads during Dark Current
  },

  soloFail: {
    'P11S Inevitable Sentence': '81FD' // partner stacks
  },

  triggers: [{
    id: 'P11S Knockback',
    type: 'Ability',
    // 8786 Dismissal Overruling light
    // 8787 Dismissal Overruling dark
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['8786', '8787'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Frappé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '넉백',
          tc: '擊退至牆'
        }
      };
    }
  }]
};
/* harmony default export */ const p11s = (p11s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p12n.ts


// TODO: technically Shockwave (82CF) the dash before Palladion cleaves, but this seems tough to avoid

const p12n_triggerSet = {
  zoneId: zone_id/* default.AnabaseiosTheTwelfthCircle */.Z.AnabaseiosTheTwelfthCircle,
  damageWarn: {
    'P12N Trinity of Souls 1': '82C1',
    // top right wing cleave
    'P12N Trinity of Souls 2': '82C2',
    // top left wing cleave
    'P12N Trinity of Souls 3': '82C3',
    // middle right wing cleave
    'P12N Trinity of Souls 4': '82C4',
    // middle left wing cleave
    'P12N Trinity of Souls 5': '82C5',
    // bottom right wing cleave
    'P12N Trinity of Souls 6': '82C6',
    // bottom left wing cleave
    'P12N Ray of Light Paradeigma': '82C8',
    // line cleave from Paradeigma adds
    'P12N Superchain Burst': '82BD',
    // sphere explosion during Superchain Theory
    'P12N Superchain Coil': '82BE',
    // donut explosion during Superchain Theory
    'P12N Parthenos': '82D8',
    // late telegraph wide line knockback cleave
    'P12N Anthropos Ray of Light': '82D4',
    // line cleave from Anthropos adds during add phase
    'P12N Anthropos Clear Cut': '82D3',
    // 270 degree small "conal" cleave from Anthropos adds
    'P12N Palladion Ultima': '82D1' // large line taking out half the floor before Ultima
  },

  damageFail: {
    'P12N Sample': '82C0' // platform falling from Unnatural Enchainment
  },

  gainsEffectWarn: {
    // C05 is the infinite effect, C06 is the 15s effect
    'P12N Bleeding': 'C05' // standing in the bad hexagon during add phase
  },

  shareWarn: {
    'P12N Anthropos White Flame': '82CA',
    // tethered line cleave from Paradeigma adds
    'P12N Palladion Spread': '82CE',
    // spread markers during add phase
    'P12N Dialogos Spread': '82D7' // spread markers after Dialogos (stack)
  },

  shareFail: {
    'P12N Glaukopis': '82D5' // tank laser cleave
  },

  soloFail: {
    'P12N Dialogos Stack': '82D6' // stack marker from Dialogos cast bar
  }
};

/* harmony default export */ const p12n = (p12n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p12s.ts




// TODO: differentiate whose Searing Radiance 82F1 / Shadowsear 82F2 tether it was
// TODO: differentiate who had the Astral/Umbral glow tower debuff
// TODO: taking Umbral Advance 830E / Astral Advance 830F with wrong/no debuff
// TODO: not taking a tower when you should
// TODO: taking both Umbral Impact 8308 and Astral Impact 8309
// TODO: taking the wrong Umbral/Astral Impact with your debuff
// TODO: not being hit by Astral/Umbral Impact when you should
// TODO: taking two Superchain Radiation 82DF or two Superchain Emission 82DE
// TODO: non-tanks in Apodialogos 8300 / Peridialogos 8301
// TODO: missing Shock 8312 when you should be in that tower?
// TODO: something with Palladion 82F6 / Shockwave 82F7?
// TODO: standing in the hexagon during add phase?

// TODO: not breaking chains (before Missing Link??)
// TODO: >2 people in Pyre Pulse 833A or Superchain Emission 82DE
// TODO: taking wrong Pangenesis towers
// TODO: not merging with the right people in Pangenesis
// TODO: people still having unstable factor and causing Ex-Factor failure
// TODO: which people were missing from Pangenesis towers that should have been there?
// TODO: taking Factor In 8347 slime damage with the wrong debuff
// TODO: taking too many Factor In 8347 slime tethers
// TODO: not having a buddy block the Ultima Blow 8348 laser
// TODO: moving too far before final Caloric 1 stacks
// TODO: exploding due to too many Caloric stacks
const p12s_triggerSet = {
  zoneId: zone_id/* default.AnabaseiosTheTwelfthCircleSavage */.Z.AnabaseiosTheTwelfthCircleSavage,
  damageWarn: {
    'P12S Trinity of Souls 1': '82E1',
    // top right first wing
    'P12S Trinity of Souls 2': '82E2',
    // top left first wing
    'P12S Trinity of Souls 3': '82E3',
    // middle right second wing (top down)
    'P12S Trinity of Souls 4': '82E4',
    // middle left second wing (top down)
    'P12S Trinity of Souls 5': '82E5',
    // bottom right third wing
    'P12S Trinity of Souls 6': '82E6',
    // bottom right third wing
    'P12S Trinity of Souls 7': '82E7',
    // bottom right first wing
    'P12S Trinity of Souls 8': '82E8',
    // bottom left first wing
    'P12S Trinity of Souls 9': '82E9',
    // middle right second wing (bottom up)
    'P12S Trinity of Souls 10': '82EA',
    // middle left second wing (bottom up)
    'P12S Trinity of Souls 11': '82EB',
    // top right third wing
    'P12S Trinity of Souls 12': '82EC',
    // top left third wing
    'P12S Ray of Light': '82EE',
    // Antropos beam
    'P12S Superchain Burst': '82DB',
    // "get out" sphere
    'P12S Superchain Coil': '82DC',
    // "get in" donut
    'P12S Theos\'s Cross': '830A',
    // cross ground explosion
    'P12S Theos\'s Saltire': '830B',
    // rotated cross ground explosion
    'P12S Clear Cut': '82FB',
    // 3/4 pizza ground aoe instead of White Flame
    'P12S Palladion Floor Drop': '82F9',
    // floor drop after "add phase"
    'P12S Parthenos': '8303',
    // forward line aoe during Superchain Theory IIB

    'P12S Ultima Ray': '8330',
    // laser during Gaiaochos
    'P12S Demi Parhelion': '832C',
    // fire damage during Geocentrism
    'P12S Implode': '8333',
    // ground circles during Classical Concepts
    'P12S Palladian Ray Ongoing': '8325',
    // avoidable followup proteans
    'P12S Ekpyrosis Exaflare': '8320',
    // exaflares
    'P12S Entropic Excess': '833C' // ground circles during Caloric Theory 2
  },

  damageFail: {
    'P12S Sample': '82E0',
    // platform being eaten by Unnatural Enchainment

    'P12S Tilted Balance': '8335' // failing tether distance during Classical Concepts
  },

  gainsEffectWarn: {
    'P12S Bleeding': 'B87' // standing in a Palladion puddle
  },

  shareWarn: {
    'P12S Searing Radiance': '82F1',
    // light tether
    'P12S Shadowsear': '82F2',
    // dark tether
    'P12S Theos\'s Holy': '8306',
    // spread damage in Superchain I

    'P12S Divine Excoriation': '832E',
    // spread damage during Geocentrism
    'P12S Palladian Ray Initial': '8324',
    // initial protean
    'P12S Ekpyrosis Spread': '8322' // spread during exaflares
  },

  shareFail: {
    'P12S Superchain Radiation': '82DF',
    // protean spread
    'P12S Umbral Glow': '830C',
    // placing a light tower
    'P12S Astral Glow': '830D',
    // placing a dark tower
    'P12S Shock': '8312',
    // unaspected towers

    'P12S Palladian Grasp 1': '831C',
    // west half cleave
    'P12S Palladian Grasp 2': '831D',
    // east half cleave
    'P12S Dynamic Atmosphere': '833B',
    // wind explosion
    'P12S Caloric Theory 2': '8792' // initial Caloric Theory 2 wind spread
  },

  soloFail: {
    'P12S Superchain Emission': '82DE',
    // partner 2x stack
    'P12S Pyre Pulse': '833A' // partner 2x stack
  },

  triggers: [{
    id: 'P12S White Flame Share',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '82F0'
    }),
    condition: (data, matches) => !data.IsImmune(matches.targetId),
    mistake: (_data, matches) => {
      const numTargets = parseInt(matches.targetCount);
      if (numTargets === 1 || isNaN(numTargets)) return;
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: (0,oopsy_common/* GetShareMistakeText */.gG)(matches.ability, numTargets)
      };
    }
  }, {
    id: 'P12S Close Caloric Count',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'E05',
      count: '05'
    }),
    suppressSeconds: 10,
    mistake: (_data, matches) => {
      return {
        type: 'wipe',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const p12s = (p12s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p1n.ts


const p1n_triggerSet = {
  zoneId: zone_id/* default.AsphodelosTheFirstCircle */.Z.AsphodelosTheFirstCircle,
  damageWarn: {
    'P1N Gaoler\'s Flail 1': '6DA2',
    // left/right 180 cleave
    'P1N Gaoler\'s Flail 2': '6DA3',
    // left/right 180 cleave
    'P1N Powerful Light': '65ED',
    // light explosion during fire/light
    'P1N Powerful Fire': '65EC' // fire explosion during fire/light
  },

  damageFail: {
    'P1N Painful Flux': '65F2' // standing in cross between hot/cold sections
  },

  soloWarn: {
    'P1N True Holy': '65E7' // Pitiless Flail stack marker
  },

  triggers: [{
    id: 'P1N Hot Cold Spell Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'AB[34]'
    }),
    run: (data, matches) => {
      const temp = matches.effectId === 'AB3' ? 'cold' : 'hot';
      (data.spell ??= {})[matches.target] = temp;
    }
  }, {
    id: 'P1N Hot Cold Spell Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: 'AB[34]'
    }),
    run: (data, matches) => delete (data.spell ??= {})[matches.target]
  }, {
    id: 'P1N Cold Spell',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '65F1'
    }),
    condition: (data, matches) => data.spell?.[matches.target] === 'cold',
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'P1N Hot Spell',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '65F0'
    }),
    condition: (data, matches) => data.spell?.[matches.target] === 'hot',
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'P1N Pitiless Flail Knockback',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '65E5'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '벽으로 넉백',
          tc: '擊退至牆'
        }
      };
    }
  }]
};
/* harmony default export */ const p1n = (p1n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p1s.ts



// Note: Gaoler's Flail 6F56-6601 can hit people but doesn't do damage.
//       Presumably this is the animation/weapon dropping on the ground?

// TODO: shackles could probably be handled with more nuance than just "was it shared"
//       but this is the most common failure mode and is easy to write.
const p1s_triggerSet = {
  zoneId: zone_id/* default.AsphodelosTheFirstCircleSavage */.Z.AsphodelosTheFirstCircleSavage,
  damageWarn: {
    'P1S Gaoler\'s Flail 1': '6DA6',
    // go left first
    'P1S Gaoler\'s Flail 2': '6DA7',
    // go right first
    'P1S Gaoler\'s Flail 3': '6DA8',
    // go out first
    'P1S Gaoler\'s Flail 4': '6DA9',
    // go in first
    'P1S Gaoler\'s Flail 5': '6DAA',
    // go left second
    'P1S Gaoler\'s Flail 6': '6DAB',
    // go right second
    'P1S Gaoler\'s Flail 7': '6DAC',
    // go out second
    'P1S Gaoler\'s Flail 8': '6DAD',
    // go in second
    'P1S Powerful Fire': '661A',
    // fire explosion during fire/light
    'P1S Powerful Light': '661B',
    // light explosion during fire/light
    'P1S Intemperate Flames': '6C75',
    // missed fire temperature square
    'P1S Intemperate Ice': '6C76',
    // missed ice temperature square
    'P1S Inevitable Flame': '6EC1',
    // sharing the color with the shackles of time person
    'P1S Inevitable Light': '6EC2' // sharing the color with the shackles of time person
  },

  damageFail: {
    'P1S Disastrous Spell': '6623',
    // the purple middle blocks during Intemperate
    'P1S Painful Flux': '6624' // standing between temperature squares
  },

  shareFail: {
    'P1S Chain Pain 1': '6627',
    // close/far shackles
    'P1S Chain Pain 2': '6628' // close/far shackles
  },

  soloFail: {
    'P1S True Holy': '6612' // Pitiless Flail of Grace stack marker
  },

  triggers: [{
    id: 'P1S Hot Cold Spell Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'AB[34]'
    }),
    run: (data, matches) => {
      const temp = matches.effectId === 'AB3' ? 'cold' : 'hot';
      (data.spell ??= {})[matches.target] = temp;
    }
  }, {
    id: 'P1S Hot Cold Spell Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: 'AB[34]'
    }),
    run: (data, matches) => delete (data.spell ??= {})[matches.target]
  }, {
    id: 'P1S Cold Spell',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6622'
    }),
    condition: (data, matches) => data.spell?.[matches.target] === 'cold',
    mistake: (_data, matches) => {
      return {
        type: 'damage',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'P1S Hot Spell',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6621'
    }),
    condition: (data, matches) => data.spell?.[matches.target] === 'hot',
    mistake: (_data, matches) => {
      return {
        type: 'damage',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'P1S Pitiless Flail Knockback',
    type: 'Ability',
    // 660E = grace, 660F = purgation
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['660E', '660F']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '벽으로 넉백',
          tc: '擊退至牆'
        }
      };
    }
  }]
};
/* harmony default export */ const p1s = (p1s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p2n.ts


// TODO: Doubled Impact (680E) shared tankbuster hitting non-tanks?
// TODO: Predatory Sight (680B) dorito stack failure?
const p2n_triggerSet = {
  zoneId: zone_id/* default.AsphodelosTheSecondCircle */.Z.AsphodelosTheSecondCircle,
  damageWarn: {
    'P2N Spoken Cataract 1': '67F7',
    // head and body cleave
    'P2N Spoken Cataract 2': '67F8',
    // head and body cleave
    'P2N Spoken Cataract 3': '67F9',
    // head and body cleave
    'P2N Spoken Cataract 4': '67FD',
    // head and body cleave
    'P2N Dissociation': '6806',
    // head charge
    'P2N Sewage Eruption': '680D' // chasing targeted telegraphed circles
  },

  gainsEffectWarn: {
    'P2N Dropsy': 'B69' // standing in sludge
  },

  shareWarn: {
    'P2N Tainted Flood': '6809' // spread markers
  },

  soloWarn: {
    'P2N Coherence': '6802' // stack line
  }
};

/* harmony default export */ const p2n = (p2n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p2s.ts



// Note: some people do share the Kampeos Harma (limit cut) #1 and #4 triangle dots
//       for uptime but this is iffy to do timing-wise and seems unlikely to be
//       the sort of common strategy that "stack middle for p1 HadesEx circles" was.
//       They can turn this off in the cactbot config ui if needed.
const p2s_triggerSet = {
  zoneId: zone_id/* default.AsphodelosTheSecondCircleSavage */.Z.AsphodelosTheSecondCircleSavage,
  damageWarn: {
    'P2S Spoken Cataract 1': '6811',
    // forward head and body cleave
    'P2S Spoken Cataract 2': '6812',
    // forward head and body cleave
    'P2S Spoken Cataract 3': '6813',
    // forward head and body cleave
    'P2S Spoken Cataract 4': '6817',
    // forward head and body cleave
    'P2S Winged Cataract 1': '6814',
    // backwards head and body cleave
    'P2S Winged Cataract 2': '6815',
    // backwards head and body cleave
    'P2S Winged Cataract 3': '6816',
    // backwards head and body cleave
    'P2S Winged Cataract 4': '6818',
    // backwards head and body cleave
    'P2S Dissociation': '682E',
    // head charge
    'P2S Sewage Eruption': '6831' // chasing targeted telegraphed circles
  },

  damageFail: {
    'P2S Deadly Current': '6829',
    // predatory avarice knockback explosion
    'P2S Greater Typhoon': '681F' // being hit by an arrow, or not hitting a partner with your arrow
  },

  gainsEffectWarn: {
    // TODO: B86 is also dropsy, but maybe standing in dropsy for longer? or the edge?
    'P2S Dropsy': 'B69',
    // standing in sludge
    'P2S Sustained Damage': 'B77' // being hit by an arrow charge (not yours)
  },

  shareWarn: {
    'P2S Tainted Flood': '6838' // spread markers (both the 4 people at once and 8 people at once)
  },

  shareFail: {
    'P2S Kampeos Harma Square': '6824',
    // square dashes #1-4
    'P2S Kampeos Harma Triangle 1': '6825',
    // triangle circle aoes #1-3
    'P2S Kampeos Harma Triangle 2': '6826' // triangle circle aoes #4
  },

  soloWarn: {
    'P2S Ominous Bubbling': '682B',
    // healer stacks after shockwave
    'P2S Coherence Line': '681A' // stack line
  },

  triggers: [{
    id: 'P2S Shockwave',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '682F'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '벽으로 넉백',
          tc: '擊退至牆'
        }
      };
    }
  }]
};
/* harmony default export */ const p2s = (p2s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p3n.ts



// Note: ignoring Brightened Fire (6EDC) that hit the Darkened Fire,
// since often everybody gets hit by 0-1.
const p3n_triggerSet = {
  zoneId: zone_id/* default.AsphodelosTheThirdCircle */.Z.AsphodelosTheThirdCircle,
  damageWarn: {
    'P3N Fireplume Out': '6697',
    // get out Experimental Fireplume short telegraph
    'P3N Fireplume Circles': '6699',
    // optical sight Experimental Fireplume circles
    'P3N Left Cinderwing': '66B5',
    // left 180 cleave
    'P3N Right Cinderwing': '66B4',
    // right 180 cleave
    'P3N Trail of Condemnation': '66AF',
    // arena charge
    'P3N Sunbird Fore Carve': '66A7',
    // front 180 add cleave
    'P3N Sunbird Rear Carve': '66A*',
    // back 180 add cleave
    'P3N Sparkfledged Ashen Eye': '66AB',
    // 4x cardinal conal cleaves
    'P3N Sparkfledged Devouring Brand 1': '669F',
    // fire cross
    'P3N Sparkfledged Devouring Brand 2': '66A0',
    // fire cross
    'P3N Sparkfledged Devouring Brand 3': '66A1',
    // fire cross
    'P3N Sparkfledged Devouring Brand 4': '6D82',
    // fire cross
    'P3N Searing Breeze': '66B7' // circles during Devouring Brand fire cross
  },

  damageFail: {
    'P3N Darkened Blaze': '6EDB' // not killing Darkened Fire
  },

  shareWarn: {
    'P3N Charplume': '669D',
    // Experimental Fireplume spread markers
    'P3N Flare of Condemnation': '66B0' // spread markers after Ashen Eye
  },

  shareFail: {
    'P3N Heat of Condemnation': '66B3' // 2x tankbuster cleaves
  },

  triggers: [{
    id: 'P3N Bird Tether',
    type: 'Ability',
    // If the birds hit each other with Joint Pyre, it's a mistake.
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '66A5',
      source: 'Sparkfledged',
      target: 'Sparkfledged'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Sparkfledged tethered',
          de: 'Saat des Phoinix verbunden',
          fr: 'Oiselet de feu lié',
          ja: '鳥と線',
          cn: '火灵鸟连线',
          ko: '화령조 선 연결됨',
          tc: '火靈鳥連線'
        }
      };
    }
  }]
};
/* harmony default export */ const p3n = (p3n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p3s.ts


// TODO: failing life's agonies
// TODO: missing a tick of a fountain
// TODO: tracking whose bird hit you?
const p3s_triggerSet = {
  zoneId: zone_id/* default.AsphodelosTheThirdCircleSavage */.Z.AsphodelosTheThirdCircleSavage,
  damageWarn: {
    'P3S Fireplume Out': '66BF',
    // get out Experimental Fireplume short telegraph
    'P3S Fireplume Circles': '66C1',
    // optical sight Experimental Fireplume circles
    'P3S Left Cinderwing': '6703',
    // left 180 cleave
    'P3S Right Cinderwing': '6702',
    // right 180 cleave

    'P3S Devouring Brand 1': '66CE',
    // fire cross
    'P3S Devouring Brand 2': '66CF',
    // fire cross
    'P3S Devouring Brand 3': '66D0',
    // fire cross
    'P3S Devouring Brand 4': '66D1',
    // fire cross
    'P3S Devouring Brand 5': '6D83',
    // fire cross
    'P3S Searing Breeze 1': '66B7',
    // circles during Devouring Brand fire cross
    'P3S Searing Breeze 2': '6705',
    // circles during Firestorms

    'P3S Gloryplume Rotating': '66CB',
    // Experimental Glorypllume rotating circles
    'P3S Gloryplume Middle': '66C7',
    // Experimental Gloryplume middle

    'P3S Sparkfledged Ashen Eye': '66E6',
    // initial Fledgling Flight dodge
    'P3S Flames of Asphodelos 1': '66F2',
    // pizza slice 1
    'P3S Flames of Asphodelos 2': '66F3',
    // pizza slice 2
    'P3S Flames of Asphodelos 3': '66F4',
    // pizza slice 3
    'P3S Burning Twister': '66FA' // donut around tornado
  },

  damageFail: {
    'P3S Darkened Blaze': '66BA' // failing to kill the Darkened Fire in time
  },

  shareWarn: {
    'P3S Flare of Condemnation': '66FE',
    // sides spread during Trail of Condemnation
    'P3S Gloryplume Spread': '66C9',
    // spread during Experimental Gloryplume
    'P3S Ashplume Spread': '66C5',
    // spread during Experimental Ashplume
    'P3S Beacons of Asphodelos': '66F7',
    // tankbuster during Firestorms
    'P3S Sun\'s Pinion': '66EB' // spread marker during Fountain of Fire
  },

  shareFail: {
    'P3S Heat of Condemnation': '6701' // double tank buster
  },

  soloWarn: {
    'P3S Gloryplume Stack': '66CD',
    // stack during Experimental Gloryplume
    'P3S Ashplume Stack': '66C3' // stack during Experimental Ashplume
  }
};

/* harmony default export */ const p3s = (p3s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p4n.ts



// TODO: three stacks of Thrice-come Ruin (9E2) from orbs
//       should this give Doom? it appears maybe it's just instant death?
// TODO: not having your orb popped?
const p4n_triggerSet = {
  zoneId: zone_id/* default.AsphodelosTheFourthCircle */.Z.AsphodelosTheFourthCircle,
  damageWarn: {
    'P4N Hell Skewer': '6A4F',
    // targeted line aoe with short telegraph
    'P4N Shifting Strike': '6A4E' // dash to wall and ~170 cleave
  },

  shareWarn: {
    'P4N Acid Mekhane': '6A38' // green Acid Pinax spread
  },

  shareFail: {
    'P4N Elegant Evisceration': '6A50' // circular tankbuster cleave
  },

  soloFail: {
    'P4N Lava Mekhane': '6A39' // red Lava stack
  },

  triggers: [{
    id: 'P4N Tower Burst No Tank',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6A44'
    }),
    condition: (data, matches) => data.party.isTank(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Tank Tower',
          de: 'Tank-Turm',
          fr: 'Tour Tank',
          ja: 'タンク塔',
          cn: '坦克塔',
          ko: '탱커 장판',
          tc: '坦克塔'
        }
      };
    }
  }, {
    id: 'P4N Tower Burst No Healer',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6A45'
    }),
    condition: (data, matches) => data.party.isHealer(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Healer Tower',
          de: 'Heiler-Turm',
          fr: 'Tour Healer',
          ja: 'ヒーラ塔',
          cn: '治疗塔',
          ko: '힐러 장판',
          tc: '治療塔'
        }
      };
    }
  }, {
    id: 'P4N Tower Burst No DPS',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6A46'
    }),
    condition: (data, matches) => data.party.isDPS(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'DPS Tower',
          de: 'DD-Turm',
          fr: 'Tour DPS',
          ja: 'DPS塔',
          cn: 'DPS塔',
          ko: '딜러 장판',
          tc: 'DPS塔'
        }
      };
    }
  }, {
    id: 'P4N Explosive Aether Burst No Tank',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6A41'
    }),
    condition: (data, matches) => data.party.isTank(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Tank Orb',
          de: 'Tank-Orb',
          fr: 'Orbe Tank',
          ja: 'タンク玉',
          cn: '坦克球',
          ko: '탱커 구슬',
          tc: '坦克球'
        }
      };
    }
  }, {
    id: 'P4N Explosive Aether Burst No Healer',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6A42'
    }),
    condition: (data, matches) => data.party.isHealer(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'Healer Orb',
          de: 'Heiler-Orb',
          fr: 'Orbe Healer',
          ja: 'ヒーラ玉',
          cn: '治疗球',
          ko: '힐러 구슬',
          tc: '治療球'
        }
      };
    }
  }, {
    id: 'P4N Explosive Aether Burst No DPS',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6A43'
    }),
    condition: (data, matches) => data.party.isDPS(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'DPS Orb',
          de: 'DD-Orb',
          fr: 'Orbe DPS',
          ja: 'DPS玉',
          cn: 'DPS球',
          ko: '딜러 구슬',
          tc: 'DPS球'
        }
      };
    }
  }, {
    id: 'P4N Knockback',
    type: 'Ability',
    // 6A3A = Well Mekhane
    // 6DAE = Northerly Shift (knockback)
    // 6DAF = Southerly Shift (knockback)
    // 6DB0 = Easterly Shift (knockback)
    // 6DB1 = Westerly Shift (knockback)
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['6A3A', '6DAE', '6DAF', '6DB0', '6DB1']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '벽으로 넉백',
          tc: '擊退至牆'
        }
      };
    }
  }]
};
/* harmony default export */ const p4n = (p4n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p4s.ts



// TODO: Cursed Casting (pox) when you shouldn't (it hits but does no damage if correct)
// TODO: Vengeful Belone (orbs) incorrect debuff
// TODO: Director's Belone (towers) missed tower / incorrect tower?
// TODO: Hemitheos's Fire III (6A18) can be solo'd in some Act 2 uptime strats, not a mistake?
// TODO: Act 2 purple tether not breaking soon enough
// TODO: Act 2 aero tether breaking too soon
// TODO: track who took a 6A0E tower and add a mistake for others if 6A0F happens
const p4s_triggerSet = {
  zoneId: zone_id/* default.AsphodelosTheFourthCircleSavage */.Z.AsphodelosTheFourthCircleSavage,
  damageWarn: {
    'P4S Acid Pinax': '69D4',
    // standing on acid square
    'P4S Lava Pinax': '69D5',
    // standing on fire square
    'P4S Well Pinax': '69D6',
    // standing on water square
    'P4S Levinstrike Pinax': '69D7',
    // standing on lightning square
    // The safe squares during Elemental Belone are 69F5 through 69F8.
    'P4S Elemental Belone Acid Pinax': '69F9',
    // acid square during Elemental Belone
    'P4S Elemental Belone Lava Pinax': '69FA',
    // fire square during Elemental Belone
    'P4S Elemental Belone Well Pinax': '69FB',
    // water square during Elemental Belone
    'P4S Elemental Belone Levinstrike Pinax': '69FC',
    // lightning square during Elemental Belone
    'P4S Shifting Strike': '6A06',
    // jump to cardinal + cleave
    'P4S Dark Design': '6A2A',
    // Act 2 baited puddles
    'P4S Hemitheos\'s Fire IV': '6A0D',
    // Act 1, Act 2, Act 4 boss tether fire explosion
    'P4S Hell\'s Sting 1': '6A20',
    // curtain call protean
    'P4S Hell\'s Sting 2': '6A21' // curtain call protean
  },

  damageFail: {
    'P4S Hemitheos\'s Thunder III Missed Tower': '6A0F' // missing a 6A0E tower
  },

  shareWarn: {
    'P4S Inversive Chlamys': '69EE',
    // tethers
    'P4S Acid Mekhane': '69D0',
    // acid pinax spread
    'P4S Hemitheos\'s Thunder III Tower': '6A0E',
    // Act 1, Act 2, Act 3, Act 4, Finale towers
    'P4S Hemitheos\'s Water III': '6A14' // Act 4 water tether explosion
  },

  shareFail: {
    'P4S Elegant Evisceration': '6A08',
    // tank buster
    'P4S Farsight': '6A27',
    // tank buster
    'P4S Nearsight': '6A28',
    // tank buster
    // TODO: https://github.com/quisquous/cactbot/pull/4161
    // 'P4S Kothornos Kick': '6A23', // Act 3 jump
    'P4S Kothornos Quake': '6A24',
    // Act 3 earthshaker
    'P4S Fleeting Impulse': '6A1C' // Finale counted vulns
  },

  soloFail: {
    'P4S Lava Mekhane': '69D1' // lava pinax stack
  },

  triggers: [{
    id: 'P4S Knockback',
    type: 'Ability',
    // 69D2 = Well Mekhane
    // 6A01 = Shifting Strike (knockback)
    // 6A10 = Hemitheos's Water IV (Act 3 knockback)
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['69D2', '6A01', '6A10']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '벽으로 넉백',
          tc: '擊退至牆'
        }
      };
    }
  }]
};
/* harmony default export */ const p4s = (p4s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p5n.ts

// TODO: Touched poison wall
// TODO: Touched poison puddle
const p5n_triggerSet = {
  zoneId: zone_id/* default.AbyssosTheFifthCircle */.Z.AbyssosTheFifthCircle,
  damageWarn: {
    'P5N Searing Ray 1': '6697',
    // Normal
    'P5N Searing Ray 2': '6698',
    // With Reflection
    'P5N Topaz Stones': '76DE',
    // Topaz Stone AoE
    'P5N Topaz Ray': '79FC',
    // Topaz Stone Square Tile
    'P5N Venom Drops': '76EE',
    // Puddles
    'P5N Starving Stampede': '79E9',
    // Stomped
    'P5N Spit': '7727' // Spitting Devoured Player
  },

  damageFail: {
    'P5N Devour': '7728' // Nom
  },

  shareFail: {
    'P5N Venom Rain': '76ED' // Spread
  }
};

/* harmony default export */ const p5n = (p5n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p5s.ts


// TODO: 770C Venom if tower missed, but since this is done intentionally
// after Devour, harder to figure out when this is a mistake.
const p5s_triggerSet = {
  zoneId: zone_id/* default.AbyssosTheFifthCircleSavage */.Z.AbyssosTheFifthCircleSavage,
  damageWarn: {
    'P5S Topaz Ray 1': '79FE',
    // initial Topaz Stone explosion
    'P5S Topaz Ray 2': '79FF',
    // initial Topaz Stone explosion
    'P5S Ruby Reflection 1': '7701',
    // reflection of Topaz Ray (initial)
    'P5S Ruby Reflection 2': '76F9',
    // reflection of Topaz Ray (after Double Rush)
    'P5S Raging Claw 1': '770F',
    // initial front 180 cleave (part of Claw to Tail)
    'P5S Raging Claw 2': '7710',
    // front 180 cleave (part of Claw to Tail)
    'P5S Raging Claw 3': '76FB',
    // initial front 180 cleave (with Searing Ray)
    'P5S Raging Claw 4': '76FC',
    // front 180 cleave (with Searing Ray)
    'P5S Raging Claw 5': '7714',
    // initial front 180 cleave
    'P5S Raging Claw 6': '7715',
    // front 180 cleave
    'P5S Raging Tail 1': '7711',
    // rear 180 cleave
    'P5S Raging Tail 2': '7A0C',
    // rear 180 cleave
    'P5S Venom Drops': '7719',
    // baited puddles during Venom Squall/Surge
    'P5S Searing Ray': '76F7' // front laser
  },

  damageFail: {
    'P5S Starving Stampede': '7A03',
    // large circle during Starving Stampede jumps
    'P5S Lively Bait Scatterbait': '770D' // add created by missing a tower getting its cast off
  },

  gainsEffectFail: {
    'P5S Toxicosis 1': 'C0A',
    // 15s debuff (poison puddle)
    'P5S Toxicosis 2': 'C09' // 9999 effect (wall?)
  },

  shareFail: {
    'P5S Venomous Mass': '771E',
    // First tankbuster
    'P5S Toxic Crunch': '771F',
    // Second tankbuster
    'P5S Venom Rain': '7718' // spread during Venom Squall/Surge
  },

  soloFail: {
    'P5S Venom Pool 1': '79E3',
    // stack during Venom Squall/Surge
    'P5S Venom Pool 2': '771A' // stack during Venom Squall/Surge
  }
};

/* harmony default export */ const p5s = (p5s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p6n.ts

const p6n_triggerSet = {
  zoneId: zone_id/* default.AbyssosTheSixthCircle */.Z.AbyssosTheSixthCircle,
  damageWarn: {
    'P6N Polyominous Dark IV': '7855',
    // Radiating AoEs from totems
    'P6N Choros Ixou Front Back': '7859',
    'P6N Choros Ixou Sides': '785A',
    'P6N Reek Havoc': '79ED',
    // Parasite conal
    'P6N Pathogenic Cells': '7A14',
    // Front portion of Strophe Ixou spinny conal
    'P6N Chelic Vector': '7A15' // Rear portion of Strophe Ixou spinny conal
  },

  shareWarn: {
    'P6N Dark Ashes': '785F' // Orange spread circles
  },

  shareFail: {
    'P6N Synergy 1': '785C',
    // Off-tank buster
    'P6N Synergy 2': '785D' // Main tank buster (Square, why??)
  }
};

/* harmony default export */ const p6n = (p6n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p6s.ts


// TODO: is there a way to tie Chelomorph/Glossomorth cursed voice cleaves
// that come from a Parasitos combatant (that is previously unused) to players?

// TODO: being on wrong side for Ptera Ixou
// TODO: taking wrong predation damage
const p6s_triggerSet = {
  zoneId: zone_id/* default.AbyssosTheSixthCircleSavage */.Z.AbyssosTheSixthCircleSavage,
  damageWarn: {
    'P6S Polyominous Dark IV': '7867',
    // floor explosion
    'P6S Exocleaver 1': '786A',
    // pinwheel initial
    'P6S Exocleaver 2': '786B',
    // pinwheel second
    'P6S Choros Ixou 1': '7885',
    // 90 degree cleaves
    'P6S Choros Ixou 2': '7886',
    // 90 degree cleaves
    'P6S Choros Ixou 3': '79EB',
    // 90 degree cleaves
    'P6S Choros Ixou 4': '79EC',
    // 90 degree cleaves

    'P6S Dark Perimeter 1': '7873',
    // Aetherial Exchange donut
    'P6S Dark Perimeter 2': '7875',
    // Aetherial Exchange donut
    'P6S Dark Dome': '788C' // baited aoes
  },

  damageFail: {
    'P6S Reek Havoc': '79EE',
    // Transmission Glossomorph snake front attack
    'P6S Chelic Claw': '79EF' // Transmission Chelomorph wings back attack
  },

  shareWarn: {
    'P6S Darkburst': '7872',
    // Aetherial Exchange spread
    'P6S Dark Ashes': '788E',
    // spread paired with Choros Ixou'
    'P6S Dark Sphere 1': '7890',
    // large 8x spread during "checkerboard" pattern
    'P6S Dark Sphere 2': '7880' // large 2x spread during Cachexia 2
  },

  shareFail: {
    'P6S Pathogenic Cells': '7865',
    // limit cut cleaves
    'P6S Synergy 1': '7888',
    // split tankbuster
    'P6S Synergy 2': '7889',
    // split tankbuster
    'P6S Aetheronecrosis': '7877',
    // Cachexia 8, 12, 16, 20 timed explosions
    'P6S Glossal Predation': '787A',
    // Cachexia 1 snake side proximity attack
    'P6S Chelic Predation': '787B' // Cachexia 1 wing side proximity attack
  },

  soloFail: {
    'P6S Unholy Darkness 1': '7892',
    // initial healer group stacks
    'P6S Unholy Darkness 2': '786D',
    // Aetherial Exchange 1 stack
    'P6S Unholy Darkness 3': '786E',
    // Aetherial Exchange 1 stack
    'P6S Unholy Darkness 4': '7A0F',
    // Aetherial Exchange 2 stack
    'P6S Unholy Darkness 5': '787F' // Cachexia 2 stack
  }
};

/* harmony default export */ const p6s = (p6s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p7n.ts

const p7n_triggerSet = {
  zoneId: zone_id/* default.AbyssosTheSeventhCircle */.Z.AbyssosTheSeventhCircle,
  damageWarn: {
    'P7N Bough Of Attis Out': '77FA',
    'P7N Bough Of Attis In': '77FF',
    'P7N Bough Of Attis Sides': '77FD',
    'P7N Hemitheos Glare III 1': '77F8',
    // Donut attack alongside Hemitheos's Holy
    'P7N Hemitheos Glare III 2': '79FA',
    // Donut attack alongside platform regeneration
    'P7N Static Moon': '7802',
    // Behemoths' chariot attack
    'P7N Stymphalian Strike': '7803',
    // Birds' line attack
    'P7N Big Burst': '783E',
    // Missed tower
    'P7N Blades Of Attis Stationary': '7805',
    // Exaflare initial hit
    'P7N Blades Of Attis Exaflares': '7806'
  },
  shareWarn: {
    'P7N Hemitheos Holy': '7808' // Purple spread circles
  },

  shareFail: {
    'P7N Hemitheos Aero II': '780A' // Tank cleave
  }
};

/* harmony default export */ const p7n = (p7n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p7s.ts


// TODO: Condensed Aero II (7838) could be immuned and solo'd, so ignored
// TODO: tower failure?
const p7s_triggerSet = {
  zoneId: zone_id/* default.AbyssosTheSeventhCircleSavage */.Z.AbyssosTheSeventhCircleSavage,
  damageWarn: {
    'P7S Blades of Attis 1': '782F',
    // exaflares, initial
    'P7S Blades of Attis 2': '7830',
    // exaflares, ongoing
    'P7S Immature Io Static Moon': '7812',
    // behemoth on platform, circle aoe
    'P7S Immature Stymphalide Stymphalian Strike': '7815',
    // bird line aoe
    'P7S Bough of Attis Close': '7822',
    // bough hit north (from 7821 cast)
    'P7S Bough of Attis Arrow': '7825',
    // left/right arrow (from 7823 cast)
    'P7S Bough of Attis Far': '7827',
    // bough hit south (from 7826 cast)
    'P7S Roots of Attis': '780F',
    // platform destruction
    'P7S Immature Minotaur Bullish Swipe': '7819',
    // baited minotaur cleaves (from 7818 cast)
    'P7S Hemitheos\'s Glare': '782A' // chasing aoe
  },

  damageFail: {
    'P7S Hemitheos\'s Tornado': '781F',
    // Inviolate Purgation delayed spread
    'P7S Hemitheos\'s Glare III': '7820' // Inviolate Purgation delayed stack
  },

  shareWarn: {
    'P7S Hemitheos\'s Aero III': '781B',
    // role-based spread
    'P7S Immature Io Static Path': '7814',
    // tether line aoe
    'P7S Immature Minotaur Bullish Slash': '7817' // tether conal
  },

  shareFail: {
    'P7S Dispersed Aero II': '7837' // spread tankbuster
  },

  soloWarn: {
    'P7S Hemitheos\'s Holy III 1': '781C',
    // role-based stack
    'P7S Hemitheos\'s Holy III 2': '783B',
    // stack after knockback before towers
    'P7S Condensed Aero II': '7838' // shared tankbuster
  },

  triggers: [{
    id: 'P7S Knockback',
    type: 'Ability',
    // 7A0B Hemitheos's Aero IV
    // 7816 Immature Symphalide Bronze Bellows
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7816', '7A0B']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const p7s = (p7s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p8n.ts

const p8n_triggerSet = {
  zoneId: zone_id/* default.AbyssosTheEighthCircle */.Z.AbyssosTheEighthCircle,
  damageWarn: {
    'P8N Scorching Fang': '78EE',
    // line aoe down the middle
    'P8N Sun\'s Pinion': '78EF',
    // line aoes down the sides
    'P8N Gorgospit': '78FF',
    // large line aoe
    'P8N Suneater Cthonic Vent 1': '78F5',
    // circular explosion from intercard volcanos
    'P8N Suneater Cthonic Vent 2': '78F6',
    // circular explosion from intercard volcanos
    'P8N Suneater Cthonic Vent 3': '794D',
    // circular explosion from intercard volcanos
    'P8N Quadrupedal Crush': '7904',
    // jump to the wall before knockback (??)
    'P8N Torch Flame': '78F8',
    // being hit by blue outlined squares from Volcanic Torches
    'P8N Illusory Hephaistos Gorgospit': '6FD7' // square outline line aoes after Into the Shadows
  },

  damageFail: {
    'P8N Gorgon Gorgoneion': '78FD' // failing to kill Gorgon adds in time
  },

  gainsEffectWarn: {
    'P8N Petrification': 'BBF',
    // failing 6273 Petrifaction lookaway
    'P8N Burns': 'BFA' // being knocked back into the fire wall, BF9 = 9999 duration status
  },

  shareWarn: {
    'P8N Hemitheos\'s Flare': '7907' // spread markers
  }
};

/* harmony default export */ const p8n = (p8n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p8s.ts




// TODO: figure out player blame for "Eye of the Gorgon" cursed voice
// TODO: Blood of the Gorgon 792F should hit 2 things in snake1 and 1 thing in snake2
// TODO: Breath of the Gorgon 7930 party stack (also hits Gorgon) should we care about stack count?
// TODO: Blood/Breath of the Gorgon missing the Gorgon should be a mistake
// TODO: p8s2 autos 72C2 should consider hitting non-tanks or non-invulning tanks?
// TODO: running into towers and getting debuffs you shouldn't
// TODO: missing High Concept towers
// TODO: missing Limitless Desolation towers
// TODO: missing Dominion towers
// TODO: we probably could use an oopsy utility library (and Data should be `any` here).
const p8s_stackMistake = (type, expected, abilityText) => {
  return (_data, matches) => {
    const actual = parseFloat(matches.targetCount);
    if (actual === expected || actual === 0) return;
    const ability = abilityText ?? matches.ability;
    const text = actual === 1 ? (0,oopsy_common/* GetSoloMistakeText */.gc)(ability) : (0,oopsy_common/* GetShareMistakeText */.gG)(ability, actual);
    return {
      type: type,
      blame: matches.target,
      text: text
    };
  };
};
const purpleMistake = () => {
  return (_data, matches) => {
    return {
      type: 'fail',
      blame: matches.target,
      text: {
        en: `${matches.ability} (purple)`,
        de: `${matches.ability} (lila)`,
        fr: `${matches.ability} (violet)`,
        ja: `${matches.ability} (紫)`,
        cn: `${matches.ability} (紫色)`,
        ko: `${matches.ability} (보라)`,
        tc: `${matches.ability} (紫色)`
      }
    };
  };
};
const wallDeathReason = () => {
  return (_data, matches) => {
    return {
      id: matches.targetId,
      name: matches.target,
      text: {
        en: 'Pushed into wall',
        de: 'Rückstoß in die Wand',
        fr: 'Poussé(e) dans le mur',
        ja: '壁へノックバック',
        cn: '击退至墙',
        ko: '벽으로 넉백',
        tc: '擊退至牆'
      }
    };
  };
};
const p8s_triggerSet = {
  zoneId: zone_id/* default.AbyssosTheEighthCircleSavage */.Z.AbyssosTheEighthCircleSavage,
  damageWarn: {
    'P8S Torch Flame': '7927',
    // blue Volcanic Torch explosions
    'P8S Scorching Fang': '7912',
    // line aoe down the middle
    'P8S Sun\'s Pinion': '7913',
    // side aoes
    'P8S Snaking Kick': '7929',
    'P8S Eye of the Gorgon': '792D',
    // cursed voice petrification
    'P8S Illusory Hephaistos Scorched Pinion': '7953',
    // bird from clone
    'P8S Illusory Hephaistos Scorching Fang': '7952',
    // snake from clone
    'P8S Cthonic Vent 1': '7925',
    // Vent circle explosions
    'P8S Cthonic Vent 2': '7926',
    // Vent circle explosions
    'P8S Cthonic Vent 3': '794E',
    // Vent circle explosions
    'P8S Illusory Hephaistos Gorgospit': '7932',
    // line aoes from clones during snake2
    'P8S Quadrupedal Crush 1': '7105',
    // initial jump for beast2
    'P8S Quadrupedal Crush 2': '7107',
    // untargetable jump for beast2

    'P8S Tyrant\'s Flare': '7A8A',
    // baited puddles
    'P8S Ashing Blaze Left': '79D7',
    // left cleave
    'P8S Ashing Blaze Right': '79D8',
    // right cleave
    'P8S Illusory Hephaistoss End of Days': '7A8B',
    // line aoes
    'P8S Tyrant\'s Flare II': '7A88' // baited puddles during Limitless Desolation
  },

  damageFail: {
    'P8S Crown of the Gorgon': '792E',
    // snake2 cursed shriek
    'P8S Trailblaze': '793E' // line aoe down the middle during beast2 trailblaze knockback
  },

  gainsEffectFail: {
    // Needs to not happen for Gorgons
    'P8S Petrification': 'BBF'
  },
  shareWarn: {
    'P8S Nest of Flamevipers': '7920',
    // protean line aoes
    'P8S Emergent Octaflare': '7918' // stored spread
  },

  shareFail: {
    'P8S Flameviper 1': '7945',
    // first tankbuster line aoe
    'P8S Flameviper 2': '7946',
    // second tankbuster line aoe
    'P8S Uplift': '7935',
    // rock spread aoes during beast1
    'P8S Hemitheos\'s Flare': '72CE',
    // spread during clones
    'P8S Tyrant\'s Unholy Darkness': '79DE',
    // split tankbusters
    'P8S Tyrant\'s Fire III': '75F0',
    // Limitless Desolation spread
    'P8S Orogenic Deformation': '79DB' // Dominion spread
  },

  triggers: [{
    // Stored partner stacks.
    id: 'P8S Emergent Tetraflare',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7919'
    }),
    mistake: p8s_stackMistake('fail', 2)
  }, {
    // Stored beast2 light party stacks.
    id: 'P8S Emergent Diflare',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '791B'
    }),
    mistake: p8s_stackMistake('warn', 4)
  }, {
    // 4x beast1 jumps with partners
    id: 'P8S Stomp Dead',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7937'
    }),
    mistake: p8s_stackMistake('fail', 2)
  }, {
    // Initial knockback from beast transformation.
    id: 'P8S Footprint',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7109'
    }),
    deathReason: wallDeathReason()
  }, {
    // Black line knockback during beast2
    id: 'P8S Trailblaze Knockback',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '793E'
    }),
    deathReason: wallDeathReason()
  }, {
    // Radial knockback during beast2
    id: 'P8S Quadrupedal Impact',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7104', '7106']
    }),
    deathReason: wallDeathReason()
  }, {
    id: 'P8S Natural Alignment Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'D54'
    }),
    run: (data, matches) => (data.hasPurple ??= {})[matches.target] = true
  }, {
    id: 'P8S Natural Alignment Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: 'D54'
    }),
    run: (data, matches) => (data.hasPurple ??= {})[matches.target] = false
  }, {
    // Natural Alignment stack
    id: 'P8S Forcible Fire III',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '79BF'
    }),
    mistake: (data, matches) => {
      if (data.hasPurple?.[matches.target]) return purpleMistake()(data, matches);
      return p8s_stackMistake('warn', 6)(data, matches);
    }
  }, {
    // Natural Alignment spread
    id: 'P8S Forcible Fire II',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '79C0'
    }),
    mistake: (data, matches) => {
      if (data.hasPurple?.[matches.target]) return purpleMistake()(data, matches);
      return p8s_stackMistake('warn', 1)(data, matches);
    }
  }, {
    // Natural Alignment ice
    id: 'P8S Forcible Difreeze',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '79BE'
    }),
    mistake: (data, matches) => {
      if (data.hasPurple?.[matches.target]) return purpleMistake()(data, matches);
      return p8s_stackMistake('fail', 3)(data, matches);
    }
  }, {
    // Natural Alignment fire
    id: 'P8S Forcible Trifire',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '79BD'
    }),
    mistake: (data, matches) => {
      if (data.hasPurple?.[matches.target]) return purpleMistake()(data, matches);
      return p8s_stackMistake('fail', 2)(data, matches);
    }
  }, {
    id: 'P8S Solosplice',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '79B2'
    }),
    mistake: p8s_stackMistake('fail', 1, {
      // This is all just "Splicer", so rename it here.
      // Also sure this could just be in shareFail, but it fits with the other splicers.
      en: 'Single Splicer',
      de: 'Einzelne Konzeptreflektion',
      fr: 'Réaction conceptuelle simple',
      ja: '1人',
      cn: '1 重叠',
      ko: '1인징',
      tc: '1 重疊'
    })
  }, {
    id: 'P8S Multisplice',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '79B3'
    }),
    mistake: p8s_stackMistake('fail', 2, {
      en: 'Double Splicer',
      de: 'Doppelte Konzeptreflektion',
      fr: 'Réaction conceptuelle double',
      ja: '2人頭割り',
      cn: '2 重叠',
      ko: '2인징',
      tc: '2 重疊'
    })
  }, {
    id: 'P8S Supersplice',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '79B4'
    }),
    mistake: p8s_stackMistake('fail', 3, {
      en: 'Triple Splicer',
      de: 'Dreifache Konzeptreflektion',
      fr: 'Réaction conceptuelle triple',
      ja: '3人頭割り',
      cn: '3 重叠',
      ko: '3인징',
      tc: '3 重疊'
    })
  }]
};
/* harmony default export */ const p8s = (p8s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p9n.ts


// TODO: Standing in the puddles left from Charybdis

const p9n_triggerSet = {
  zoneId: zone_id/* default.AnabaseiosTheNinthCircle */.Z.AnabaseiosTheNinthCircle,
  damageWarn: {
    'P9N Blizzard III (Large)': '811F',
    'P9N Blizzard III (Small)': '8121',
    'P9N Swinging Kick (Front Combination) ': '812D',
    'P9N Swinging Kick (Rear Combination)': '812E',
    'P9N Archaic Rockbreaker': '812A',
    'P9N Ice Sphere Shatter (Large)': '86E5',
    'P9N Ice Sphere Shatter (Small)': '86E4',
    'P9N Fire Sphere Explosion (Large)': '86E3',
    'P9N Fire Sphere Explosion (Small)': '86E2'
  },
  shareWarn: {
    'P9N Fire III, large': '8120',
    'P9N Fire III, small': '811E'
  },
  soloWarn: {
    'P9N Pulverizing Pounce': '813F'
  }
};
/* harmony default export */ const p9n = (p9n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/raid/p9s.ts



// TODO: taking Aero IV 8153 and then Fire IV 8512 without invulns
// TODO: people missing in 816E demolish stacks
// TODO: standing in tornado circles
// TODO: Beastly Bile 8178 without a comet?
// TODO: hitting a comet/player w/ Thunderbolt 817A (always hits boss, so can't use shareWarn)
// TODO: missing a tower 8181 and causing 8182 damage (i.e. whose limit cut #)
// TODO: something about the Pyremeld 8793/8794 charge damage?
// TODO: better info about whose defamation hit other people (i.e. limit cut # if applicable)
// TODO: better info about whose Firemeld spread hit others (i.e. limit cut #)
// TODO: taking a tower with vuln
// TODO: taking two Pile Pyre / Thunder III (if people are dead)
const p9s_triggerSet = {
  zoneId: zone_id/* default.AnabaseiosTheNinthCircleSavage */.Z.AnabaseiosTheNinthCircleSavage,
  damageWarn: {
    'P9S Blizzard III 1': '8157',
    // ice donut
    'P9S Blizzard III 2': '8159',
    // empowered ice donut
    'P9S Uplift': '815E',
    // walls appearing
    'P9S Archaic Rockbreaker Knockback': '815F',
    // purple knockback circle
    'P9S Archaic Rockbreaker Fuse': '8161',
    // small fuse explosions
    'P9S Outside Roundhouse': '8239',
    // circle
    'P9S Inside Roundhouse': '8238',
    // donut
    'P9S Swinging Kick 1': '8222',
    // kick during Front Combination
    'P9S Swinging Kick 2': '8223',
    // kick during Rear Combination
    'P9S Swinging Kick 5': '8795',
    // kick during Front Firestrikes
    'P9S Swinging Kick 6': '8796',
    // kick during Rear Firestrikes
    'P9S Ball of Levin': '817F',
    // orb explosion creating a tower in Levinstrike
    'P9S Charybdis': '8171',
    // initial tornado circles
    'P9S Comet Burst': '8174' // circle from comet explosion
  },

  damageFail: {
    'P9S Ecliptic Meteor': '8188' // not LOS-ing meteor
  },

  shareWarn: {
    'P9S Thunder III 1': '815B',
    // thunder protean
    'P9S Thunder III 2': '815A',
    // empowered thunder protean
    'P9S Icemeld 1': '8183',
    // defamation 1
    'P9S Icemeld 2': '8190',
    // defamation 2
    'P9S Icemeld 3': '8191',
    // defamation 3
    'P9S Icemeld 4': '8192' // defamation 4
  },

  shareFail: {
    'P9S Firemeld': '8180' // Levinstrike spread damage
  },

  soloFail: {
    'P9S Pile Pyre 1': '8156',
    // partner stacks
    'P9S Pile Pyre 2': '8158',
    // empowered partner stacks
    'P9S Archaic Rockbreaker Partner': '8162' // partner stacks after Shockwave
  },

  triggers: [{
    id: 'P9S Fire IV / Aero IV Share',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['8152', '8153']
    }),
    condition: (data, matches) => !data.IsImmune(matches.targetId),
    mistake: (_data, matches) => {
      const numTargets = parseInt(matches.targetCount);
      if (numTargets === 1 || isNaN(numTargets)) return;
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: (0,oopsy_common/* GetShareMistakeText */.gG)(matches.ability, numTargets)
      };
    }
  }]
};
/* harmony default export */ const p9s = (p9s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/asura.ts

const asura_triggerSet = {
  zoneId: zone_id/* default.TheGildedAraya */.Z.TheGildedAraya,
  damageWarn: {
    'Asura Chakra Ring 1': '8C9B',
    // ring AOE
    'Asura Chakra Ring 2': '8C9C',
    // ring AOE
    'Asura Chakra Ring 3': '8C9D',
    // ring AOE
    'Asura Chakra Ring 4': '8C9E',
    // ring AOE
    'Asura Chakra Ring 5': '8C9F',
    // ring AOE
    'Asura Laceration': '8C97',
    // clone puddle AOEs
    'Asura Pedestal Purge': '8C81',
    // circle AOE under boss
    'Asura Wheel of Deincarnation': '8C83',
    // donut AOE under boss
    'Asura Bladewise': '8C85',
    // line cleave from boss
    'Asura Image - Pedestal Purge': '8C82',
    // big circle AOE under image
    'Asura Image - Wheel of Deincarnation': '8C84',
    // big donut AOE under image
    'Asura Image - Bladewise': '8C86',
    // big line cleave from image
    'Asura Khadga 1': '8C89',
    // half-room cleave
    'Asura Khadga 2': '8C8A',
    // half-room cleave
    'Asura Khadga 3': '8C8B',
    // half-room cleave
    'Asura Khadga 4': '8C8C',
    // half-room cleave
    'Asura Khadga 5': '8C8D',
    // half-room cleave
    'Asura Khadga 6': '8C8E',
    // half-room cleave
    'Asura Face of Wrath': '8CA6',
    // red/blue mechanic (red unsafe)
    'Asura Face of Delight': '8CA7',
    // red/blue mechanic (blue unsafe)
    'Asura Myriad Aspects 1': '8CB4',
    // fan dodge (first hit)
    'Asura Myriad Aspects 2': '8CB5',
    // fan dodge (second hit)
    'Asura Scattering': '8C99' // rotating line cleaves
  },

  shareWarn: {
    'Asura Ordered Chaos': '8CA3' // spread AOEs during Chakra
  },

  shareFail: {
    'Asura Cutting Jewel': '8CA0' // tankbuster
  }
};

/* harmony default export */ const asura = (asura_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/barbariccia-ex.ts

// Note: ignoring Voidstrom 7577, the 3k damage (but avoidable) damage from standing under boss.

const barbariccia_ex_triggerSet = {
  zoneId: zone_id/* default.StormsCrownExtreme */.Z.StormsCrownExtreme,
  damageWarn: {
    'BarbaricciaEx Savage Barbery Donut': '7574',
    // donut aoe
    'BarbaricciaEx Savage Barbery Line': '757A',
    // line aoe through hitbox
    'BarbaricciaEx Savage Barbery Out 1': '7575',
    // sword explosion (after donut)
    'BarbaricciaEx Savage Barbery Out 2': '757B',
    // sword explosion (after line)
    'BarbaricciaEx Hair Raid Wall': '757D',
    // ~160 degree cleave from wall at sword
    'BarbaricciaEx Hair Raid Donut': '757F',
    // donut aoe
    'BarbaricciaEx Tangle': '75AB',
    // ground circles before fetters
    'BarbaricciaEx Secret Breeze Pinwheel': '7415',
    // ground conals before protean
    'BarbaricciaEx Brutal Gust': '7585',
    // line aoe after Brutal Rush tether
    'BarbaricciaEx Warning Gale': '7587',
    // center red/black circle
    'BarbaricciaEx Winding Gale 1': '7588',
    // ground line aoes
    'BarbaricciaEx Winding Gale 2': '7486',
    // ground line aoes
    'BarbaricciaEx Winding Gale 3': '7589',
    // ground line aoes
    'BarbaricciaEx Winding Gale 4': '758A',
    // ground line aoes
    'BarbaricciaEx Boulder': '759D',
    // large baited aoes from headmarkers
    'BarbaricciaEx Blow Away': '7596',
    // baited ground circles
    'BarbaricciaEx Tornado Chain Out': '758C',
    // large inner circle
    'BarbaricciaEx Tornado Chain In': '758D',
    // outer donut
    'BarbaricciaEx Impact 1': '759F',
    // blue knockback circle
    'BarbaricciaEx Impact 2': '75A0',
    // blue knockback circle (??? maybe nothing)
    'BarbaricciaEx Dry Blows': '7594',
    // many small ground circles
    'BarbaricciaEx Stiff Breeze Tousle': '7592' // moving green circles
  },

  gainsEffectFail: {
    'BarbaricciaEx Windburn': '10D',
    // the 12s dot from death ring, `BFD` while standing in ring
    'BarbaricciaEx Sustained Damage': 'B77' // walking out of Tangled circle
  },

  shareFail: {
    'BarbaricciaEx Hair Spray': '75A6',
    // spread markers
    'BarbaricciaEx Hair Flay': '7413',
    // large circle during first fetters
    'BarbaricciaEx Secret Breeze Protean': '7580',
    // protean
    'BarbaricciaEx Brittle Boulder': '759E' // spread
  },

  soloFail: {
    'BarbaricciaEx Deadly Twist': '75A7',
    // stack markers
    'BarbaricciaEx Upbraid': '75A8',
    // partner stack circles
    'BarbaricciaEx Trample': '75A2' // stack marker with flares
  }
};

/* harmony default export */ const barbariccia_ex = (barbariccia_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/barbariccia.ts

// Note: ignoring Voidstrom 75BD, the 3k damage (but avoidable) damage from standing under boss.

const barbariccia_triggerSet = {
  zoneId: zone_id/* default.StormsCrown */.Z.StormsCrown,
  damageWarn: {
    'Barbariccia Savage Barbery Donut': '75BA',
    // donut aoe
    'Barbariccia Savage Barbery Line': '75C0',
    // line aoe through hitbox
    'Barbariccia Savage Barbery Out 1': '75BB',
    // sword explosion (after donut)
    'Barbariccia Savage Barbery Out 2': '75C1',
    // sword explosion (after line)
    'Barbariccia Hair Raid Wall': '75C2',
    // ~160 degree cleave from wall at sword
    'Barbariccia Tangle': '75E0',
    // ground circles before fetters
    'Barbariccia Secret Breeze 1': '75C4',
    // ground conal
    'Barbariccia Secret Breeze 2': '75C5',
    // ground conal
    'Barbariccia Brutal Gust': '75C8',
    // line aoe after Brutal Rush tether
    'Barbariccia Warning Gale 1': '7586',
    // center red/black circle
    'Barbariccia Warning Gale 2': '75C9',
    // center red/black circle
    'Barbariccia Winding Gale 1': '7487',
    // ground line aoes
    'Barbariccia Winding Gale 2': '75CA',
    // ground line aoes
    'Barbariccia Winding Gale 3': '75CB',
    // ground line aoes
    'Barbariccia Winding Gale 4': '75CC',
    // ground line aoes
    'Barbariccia Winding Gale 5': '75CD',
    // ground line aoes
    'Barbariccia Boulder 1': '759C',
    // large baited aoes from headmarkers
    'Barbariccia Boulder 2': '75D7',
    // large baited aoes from headmarkers
    'Barbariccia Blow Away 1': '7595',
    // baited ground circles
    'Barbariccia Blow Away 2': '75D3',
    // baited ground circles
    'Barbariccia Tornado Chain Out': '758E',
    // large inner circle
    'Barbariccia Tornado Chain In': '758F',
    // outer donut
    'Barbariccia Impact': '75D9',
    // blue knockback circle
    'Barbariccia Dry Blows': '7593',
    // many small ground circles
    'Barbariccia Stiff Breeze Tousle': '75D1' // moving green circles
  },

  gainsEffectFail: {
    'Barbariccia Windburn': 'BFD',
    // standing in outside ring
    'Barbariccia Sustained Damage': 'B77' // walking out of Tangled circle
  },

  shareFail: {
    'Barbariccia Hair Spray': '75DB' // spread markers
  },

  soloFail: {
    'Barbariccia Trample': '75DA' // stack marker with flares
  }
};

/* harmony default export */ const barbariccia = (barbariccia_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/endsinger-ex.ts



// TODO: failing to break Grips of Despair chains

const endsinger_ex_triggerSet = {
  zoneId: zone_id/* default.TheMinstrelsBalladEndsingersAria */.Z.TheMinstrelsBalladEndsingersAria,
  damageWarn: {
    'EndsingerEx Rubistellar Collision 1': '6FFA',
    // red planet collision
    'EndsingerEx Rubistellar Collision 2': '7003',
    // Fatalism red planet collision
    'EndsingerEx Elenchos Middle': '7022',
    // side lasers
    'EndsingerEx Elenchos Sides': '7021',
    // side lasers
    'EndsingerEx Diairesis 1': '6FFC',
    // middle head conal cleave during initial planets
    'EndsingerEx Diairesis 2': '7006',
    // middle head conal cleave during Twinsong's Aporrhoia
    'EndsingerEx Diairesis 3': '7011',
    // middle head conal cleave during Twinsong's Aporrhoia + Theological Fatalism
    'EndsingerEx Necrotic Fluid 1': '7009',
    // Twinsong's Aporrhoia circle
    'EndsingerEx Necrotic Fluid 2': '700F',
    // Twinsong's Aporrhoia + Theological Fatalism circle
    'EndsingerEx Wave of Nausea 1': '700A',
    // Twinsong's Aporrhoia head donut
    'EndsingerEx Wave of Nausea 2': '7010',
    // Twinsong's Aporrhoia + Theological Fatalism head donut
    'EndsingerEx Wave of Nausea 3': '7013',
    // Despair Unforgotten donut
    'EndsingerEx Wave of Nausea 4': '7017',
    // Despair Unforgotten + Theological Fatalism donut
    'EndsingerEx Endsong': '701C' // Endsong's Aporrhoia big head circles from rings
  },

  damageFail: {
    'EndsingerEx Massive Explosion': '702B' // missing a tower
  },

  shareWarn: {
    'EndsingerEx Befoulment 1': '7014',
    // Despair Unforgotten spread
    'EndsingerEx Befoulment 2': '7018' // Despair Unforgotten + Theological Fatalism spread
  },

  shareFail: {
    'EndsingerEx Hubris': '702D ' // tankbuster
  },

  soloFail: {
    'EndsingerEx Benevolence 1': '7016',
    // Despair Unforgotten stack
    'EndsingerEx Benevolence 2': '701A' // Despair Unforgotten + Theological Fatalism stack
  },

  triggers: [{
    id: 'EndsingerEx Galaxias',
    type: 'Ability',
    // 6FFB = Azure Star Caerustellar Collision knockback
    // 7005 = Fatalism Azure Star Caerustellar Collision knockback
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['6FFB', '7005']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const endsinger_ex = (endsinger_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/endsinger.ts


const endsinger_triggerSet = {
  zoneId: zone_id/* default.TheFinalDay */.Z.TheFinalDay,
  damageWarn: {
    'Endsinger Stellar Collision 1': '662E',
    // planet collision
    'Endsinger Stellar Collision 2': '663B',
    // planet collision
    'Endsinger Elenchos Middle': '6644',
    // middle laser
    'Endsinger Elenchos Sides': '6643',
    // side lasers
    'Endsinger Elenchos Heads': '663E',
    // head lasers
    'Endsinger Feather of Despair Pharmakon': '664C',
    // feather circles after Death's Embrace
    'Endsinger Epigonoi': '6646',
    // circles after Ekstasis that spawn heads with puddles
    'Endsinger Misery': '6648',
    // black puddles
    'Endsinger Interstellar': '67FB',
    // large line dive (with spread during)
    'Endsinger Kakodaimon Crash': '6657',
    // planets being tossed during midphase
    'Endsinger Dead Star': '5E4E' // targeted circles during final phase
  },

  shareWarn: {
    'Endsinger Death\'s Embrace': '6649',
    // purple protean triangles
    'Endsinger Nemesis': '664E' // spread during Interstellar
  },

  shareFail: {
    'Endsinger Hubris': '6653' // tankbuster
  },

  triggers: [{
    id: 'Endsinger Galaxias',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6C6A'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const endsinger = (endsinger_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/golbez-ex.ts



// TODO: 3+ people in Abyssal Quasar 84AB or Void Aero III 84BC
// TODO: somebody not taking Eventide Fall 86B4
// TODO: somebody taking two Eventide Fall 86B4 or Eventide Triad 86B2
// TODO: somebody taking two Immolating Shade 8496
// TODO: somebody taking two Void Tornado 845D
// TODO: figuring out who missed a tower
// TODO: being in a tower with a flare marker
const golbez_ex_triggerSet = {
  zoneId: zone_id/* default.TheVoidcastDaisExtreme */.Z.TheVoidcastDaisExtreme,
  damageWarn: {
    'GolbezEx Terrastorm': '8466',
    // pair of purple summoned meteors that leave big circles
    'GolbezEx Lingering Spark': '846A',
    // baited puddles
    'GolbezEx Phases of the Blade 1': '86DB',
    // forward 180 cleave
    'GolbezEx Phases of the Blade 2': '86F2',
    // backwards 180 cleave
    'GolbezEx Arctic Assault': '8461',
    // ice walls hitting quadrants
    'GolbezEx Gale Sphere 1': '8458',
    // wind orb line aoes
    'GolbezEx Gale Sphere 2': '8459',
    // wind orb line aoes
    'GolbezEx Gale Sphere 3': '845A',
    // wind orb line aoes
    'GolbezEx Gale Sphere 4': '845B',
    // wind orb line aoes
    'GolbezEx Phases of the Shadow 1': '86E7',
    // forward 180 cleave
    'GolbezEx Phases of the Shadow 2': '86EF',
    // backwards 180 cleave
    'GolbezEx Rising Beacon': '86EC',
    // "get out" during Phases of the Shadow
    'GolbezEx Rising Ring': '86ED' // "get in" during Phases of the Shadow
  },

  damageFail: {
    'GolbezEx Void Stardust': '84AA',
    // exaflares (will kill somebody during Abyssal Quasar after)
    'GolbezEx Massive Explosion': '84A0' // failing towers
  },

  shareWarn: {
    'GolbezEx Void Comet': '84B0',
    // mini tank busters
    'GolbezEx Cauterize': '84A2' // wide line aoe on healer with knockback during Double Meteor
  },

  shareFail: {
    'GolbezEx Void Meteor': '84B1',
    // large tank busters
    'GolbezEx Burning Shade': '8494' // spread during Phases of the Shadow
  },

  soloFail: {
    'GolbezEx Abyssal Quasar': '84AB',
    // partner circles
    'GolbezEx Void Aero III': '845C',
    // partner circles
    'GolbezEx Eventide Fall': '86B4',
    // healer line stacks
    'GolbezEx Void Tornado': '845D' // healer circle stacks
  },

  triggers: [{
    id: 'GolbezEx Flames of Eventide Fatal',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'DF5',
      count: '03'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'GolbezEx Dragon\'s Descent',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '8498'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const golbez_ex = (golbez_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/golbez.ts

const golbez_triggerSet = {
  zoneId: zone_id/* default.TheVoidcastDais */.Z.TheVoidcastDais,
  damageWarn: {
    'Golbez Terrastorm': '8465',
    // purple summoned meteors that leave big circles
    'Golbez Crescent Blade': '846B',
    // frontal 180 cleave
    'Golbez Arctic Assault': '8460',
    // ice-spike walls
    'Golbez Lingering Spark': '8469',
    // player-baited small AoE puddles
    'Golbez Shadow Crescent': '8487',
    // frontal 180 cleave (followed by Rising Beacon)
    'Golbez Rising Beacon': '848F',
    // large AOE centered on boss (immediately follows Shadow Crescent)
    'Golbez Cauterize': '84A1',
    // tether-baited line cleave from Shadow Dragon (following towers)
    'Golbez Gale Sphere': '845[4-7]',
    // line cleaves from Gale Sphere orbs
    'Golbez Void Stardust Initial': '84A5',
    // initial (corner) meteor drop
    'Golbez Void Stardust Continuing': '84A9' // subsequent meteor drops
  },

  damageFail: {
    'Golbez Massive Explosion': '849F' // tower exploding with too few (or no) players
  },

  shareWarn: {
    'Golbez Void Comet': '84AE',
    // smaller initial hits of multi-hit Void Meteor splash buster
    'Golbez Burning Shade': '8493' // player-targeted spread AoEs (immediately follows Shadow Crescent)
  },

  shareFail: {
    'Golbez Void Meteor': '84AF' // final (larger) hit of multi-hit Void Meteor splash buster
  },

  soloFail: {
    'Golbez Eventide Fall': '8482',
    // stack markers on healers
    'Golbez Immolating Shade': '8495' // stack maker on solo party member
  }
};

/* harmony default export */ const golbez = (golbez_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/hydaelyn-ex.ts


// TODO: taking two 65AA Infralateral Arc (party share)
// TODO: 65A7 Ray of Light (standing in the moving lightwave) is super noisy
const hydaelyn_ex_triggerSet = {
  zoneId: zone_id/* default.TheMinstrelsBalladHydaelynsCall */.Z.TheMinstrelsBalladHydaelynsCall,
  damageWarn: {
    'HydaelynEx Highest Holy': '6598',
    // out
    'HydaelynEx Equinox': '6EB2',
    // cross
    'HydaelynEx Anthelion': '6594',
    // in
    'HydaelynEx Aureole 1': '6F12',
    // go sides
    'HydaelynEx Aureole 2': '6C92',
    // go sides
    'HydaelynEx Lateral Aureole 1': '6690',
    // go front back
    'HydaelynEx Lateral Aureole 2': '6F14',
    // go front back
    'HydaelynEx Mystic Refulgence Incandescence': '65AF',
    // Parhelic Circle orbs
    'HydaelynEx Light of the Crystal': '65A6',
    // line of sight wave+crystal
    'HydaelynEx Heros\'s Glory': '65A8',
    // get behind
    'HydaelynEx Parhelion Beacon 1': '65B2',
    // initial chakrams
    'HydaelynEx Parhelion Beacon 2': '65B3' // second chakrams
  },

  shareWarn: {
    'HydaelynEx Crystalline Blizzard III': '65A4' // spread
  },

  shareFail: {
    'HydaelynEx Heros\'s Sundering': '65BF' // single tank cleave
  }
};

/* harmony default export */ const hydaelyn_ex = (hydaelyn_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/hydaelyn.ts


// TODO: 65CA Ray of Light (standing in the moving lightwave) is super noisy

const hydaelyn_triggerSet = {
  zoneId: zone_id/* default.TheMothercrystal */.Z.TheMothercrystal,
  damageWarn: {
    'Hydaelyn Highest Holy': '65C7',
    // out
    'Hydaelyn Equinox': '668F',
    // cross
    'Hydaelyn Anthelion': '65C8',
    // in
    'Hydaelyn Mystic Refulgence Incandescence': '65CD',
    // Parhelic Circle orbs
    'Hydaelyn Parhelion Beacon 1': '65CE',
    // initial chakrams
    'Hydaelyn Parhelion Beacon 2': '65CF' // second chakrams
  },

  shareWarn: {
    'Hydaelyn Crystalline Blizzard III': '6C5A' // spread
  },

  shareFail: {
    'Hydaelyn Heros\'s Sundering': '65D5' // single tank cleave
  }
};

/* harmony default export */ const hydaelyn = (hydaelyn_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/rubicante-ex.ts



// TODO: we probably could use an oopsy utility library (and Data should be `any` here).
const rubicante_ex_stackMistake = (type, expected, abilityText) => {
  return (_data, matches) => {
    const actual = parseFloat(matches.targetCount);
    if (actual === expected || actual === 0) return;
    const ability = abilityText ?? matches.ability;
    const text = actual === 1 ? (0,oopsy_common/* GetSoloMistakeText */.gc)(ability) : (0,oopsy_common/* GetShareMistakeText */.gG)(ability, actual);
    return {
      type: type,
      blame: matches.target,
      text: text
    };
  };
};
const rubicante_ex_triggerSet = {
  zoneId: zone_id/* default.MountOrdealsExtreme */.Z.MountOrdealsExtreme,
  damageWarn: {
    'RubicanteEx Fiery Expiation Cone': '7CEF',
    // Ordeal of Purgation cone
    'RubicanteEx Fiery Expiation Square': '7CF0',
    // Ordeal of Purgation 180 cleave
    'RubicanteEx Arch Inferno': '7CF9',
    // middle circle
    'RubicanteEx Inferno Devil': '7CFB',
    // 2x rotating circles
    'RubicanteEx Conflagration': '7CFD',
    // bacon line
    'RubicanteEx Ghastly Flame': '7D0D',
    // ground circles during add phase
    'RubicanteEx Flamerake 1': '7D19',
    // card/intercard spinner lines 1
    'RubicanteEx Flamerake 2': '7D1B',
    // card/intercard spinner lines 1
    'RubicanteEx Flamerake 3': '7D1C',
    // card/intercard spinner lines 2
    'RubicanteEx Flamerake 4': '7D1E',
    // card/intercard spinner lines 2
    'RubicanteEx Flamerake 5': '7D1D',
    // card/intercard spinner lines 3
    'RubicanteEx Flamerake 6': '7D1F',
    // card/intercard spinner lines 3
    'RubicanteEx Scalding Signal': '7D24',
    // out + protean
    'RubicanteEx Scalding Ring': '7D25',
    // in + protean
    'RubicanteEx Scalding Fleet': '7D27',
    // protean line aoes repeat
    'RubicanteEx Sweeping Immolation': '7D20' // 180 front cleave
  },

  shareWarn: {
    'RubicanteEx Spike of Flame': '7D02',
    // spread during Arch Inferno
    'RubicanteEx Ghastly Wind': '7D0B',
    // purple tether cone during add phase
    'RubicanteEx Inferno Spread': '7D10',
    // Inferno during cape phase
    'RubicanteEx Partial Immolation': '72DD' // spread during Sweeping Immolation
  },

  shareFail: {
    'RubicanteEx Shattering Heat': '7D2D',
    // first phase single tankbuster
    'RubicanteEx Flamesent Shattering Heat': '7D0A',
    // tankbusters during add phase
    'RubicanteEx Stinging Welt': '7D16',
    // spread during Flamespire Brand
    'RubicanteEx Flamespire Claw': '7E73' // limit cut cleaves
  },

  soloWarn: {
    'RubicanteEx Fourfold Flame': '7D03' // healer stacks during Arch Inferno
  },

  soloFail: {
    'RubicanteEx Furious Welt': '7D15',
    // stack during Flamespire Brand
    'RubicanteEx Total Immolation': '7D23' // stack during Sweeping Immolation
  },

  triggers: [{
    // partner stacks during Arch Inferno
    id: 'RubicanteEx Twinfold Flame',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7D04'
    }),
    mistake: rubicante_ex_stackMistake('fail', 2)
  }]
};
/* harmony default export */ const rubicante_ex = (rubicante_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/rubicante.ts

const rubicante_triggerSet = {
  zoneId: zone_id/* default.MountOrdeals */.Z.MountOrdeals,
  damageWarn: {
    'Rubicante Circle of Purgatory Fiery Expiation': '7CC5',
    // conal from outer ring
    'Rubicante Arch Inferno': '7CC8',
    // center puddle around boss
    'Rubicante Inferno Devil': '7CCA',
    // 2x large rotating circle AoEs during Arch Inferno
    'Rubicante Hellscathe': '7CCF',
    // small circle AoEs baited on players during Arch Inferno
    'Rubicante Conflagration': '7CCB',
    // middle danger bacon during Arch Inferno
    'Rubicante Radial Flagration': '7CCD',
    // large fan-style AoE during Arch Inferno
    'Rubicante Flamesent Ghastly Wind': '7CD6',
    // targeted conal (adds phase)
    'Rubicante Flamesent Ghastly Flame 1': '7CD7',
    // ground circle A0Es (adds phase)
    'Rubicante Flamesent Ghastly Flame 2': '7CD8',
    // ground circle A0Es (adds phase)
    'Rubicante Flamerake 1': '7CDF',
    // first of three line AoEs (center)
    'Rubicante Flamerake 2': '7CE0',
    // second (pair) of three line AoEs (sides of boss)
    'Rubicante Flamerake 3': '7CE1',
    // third (pair) of three line AoEs (edges)
    'Rubicante Scalding Fleet': '7CE9',
    // baited proteans
    'Rubicante Sweeping Immolation': '7CE3' // 180 front cleave
  },

  shareWarn: {
    'Rubicante Explosive Pyre': '7CDB' // tank autos w/puddle cleave
  },

  shareFail: {
    'Rubicante Shattering Heat': '7CEB',
    // solo tankbuster
    'Rubicante Flamesent Shattering Heat': '7CD5',
    // solo tankbuster (adds phase)
    'Rubicante Inferno (spread)': '7CDA',
    // spread AoE puddles (post-adds)
    'Rubicante Dualfire': '7D96' // 2x wide cleaving tankbusters
  },

  soloFail: {
    'Rubicante Total Immolation': '7CE5' // party stack during Sweeping Immolation
  }
};

/* harmony default export */ const rubicante = (rubicante_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/sephirot-un.ts


const sephirot_un_triggerSet = {
  zoneId: zone_id/* default.ContainmentBayS1T7Unreal */.Z.ContainmentBayS1T7Unreal,
  damageWarn: {
    'SephirotUn Yesod': '76AB',
    // Snapshot floor spikes
    'SephirotUn Ain': '7696',
    // Half-arena baited frontal
    'SephirotUn Ein Sof': '769C',
    // Expanding green puddles
    'SephirotUn Fiendish Wail': '76A4' // Raidwide if tower is missed
  },

  damageFail: {
    'SephirotUn Pillar Of Mercy': '76AE',
    // Standing in the blue puddles
    'SephirotUn Storm Of Words Revelation': '7680' // Missing the enrage on Storm of Words
  },

  shareWarn: {
    'SephirotUn Triple Trial': '7693',
    // Instant tank cleave
    'SephirotUn Ratzon Green': '7698',
    // Small green spread circle
    'SephirotUn Ratzon Purple': '7699',
    // Large purple spread circle
    'SephirotUn Earth Shaker': '7688',
    'SephirotUn Spread Da\'at': '76A0'
  },
  soloWarn: {
    'SephirotUn Fiendish Rage': '769A' // Stack markers, phase 1
  },

  triggers: [{
    // Pillar of Mercy,  Malkuth, and Pillar of Severity
    id: 'SephirotUn Knockbacks',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['76AD', '76AF', '76B2'],
      source: 'Sephirot'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '넉백됨',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    // 3ED is Force Against Might orange, 3EE is Force Against Magic, green.
    id: 'SephirotUn Force Against Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: ['3ED', '3EE']
    }),
    run: (data, matches) => {
      data.force ??= {};
      data.force[matches.target] = matches.effectId;
    }
  }, {
    id: 'SephirotUn Force Against Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: ['3ED', '3EE']
    }),
    run: (data, matches) => {
      data.force ??= {};
      delete data.force[matches.target];
    }
  }, {
    id: 'SephirotUn Spirit',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '76A8',
      source: 'Sephirot'
    }),
    condition: (data, matches) => data?.force?.[matches.target] === '3ED',
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    id: 'SephirotUn Life Force',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '76A7',
      source: 'Sephirot'
    }),
    condition: (data, matches) => data?.force?.[matches.target] === '3EE',
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    id: 'SephirotUn Fiendish Wail Green',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '76A3',
      source: 'Sephirot'
    }),
    condition: (data, matches) => data?.force?.[matches.target] === '3EE',
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    // Only tanks or Blue Mages should take towers without a Force debuff.
    id: 'SephirotUn Fiendish Wail Non-Tank',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '76A3',
      source: 'Sephirot'
    }),
    condition: (data, matches) => {
      if (data.party.isTank(matches.target) || data.job === 'BLU') return false;
      return data?.force?.[matches.target] === undefined;
    },
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    // Taking a tether while under Force Against Might (orange) kills the target
    id: 'SephirotUn Tether Da\'at',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '76A1',
      source: 'Sephirot'
    }),
    condition: (data, matches) => data?.force?.[matches.target] === '3ED',
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const sephirot_un = (sephirot_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/sophia-un.ts
// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/03-hw/trial/sophia-ex.ts





// TODO: failing Discordant Cleansing

const sophia_un_triggerSet = {
  zoneId: zone_id/* default.ContainmentBayP1T6Unreal */.Z.ContainmentBayP1T6Unreal,
  damageWarn: {
    'SophiaUn Thunder II': '7DAA',
    // untelegraphed front cleave
    'SophiaUn Aero III': '7DA8',
    // "get out"
    'SophiaUn Thunder III': '7DA6',
    // "get under"
    'SophiaUn Aion Teleos Execute 1': '7DAB',
    // Thunder II duplication
    'SophiaUn Aion Teleos Execute 2': '7DA9',
    // Aero III duplication
    'SophiaUn Aion Teleos Execute 3': '7DA7',
    // Thunder III duplication
    'SophiaUn Gnosis': '7DBC',
    // knockback
    'SophiaUn The Third Demiurge Ring of Pain': '7DB4',
    // circle that leaves a frost puddle
    'SophiaUn The Third Demiurge Gnostic Spear': '7DB3',
    // 270 degree untelegraphed cleave
    'SophiaUn Onrush': '7DBB',
    // dash
    'SophiaUn Barbelo Light Dew Execute': '7DB9',
    // line laser from Barbelo head during Execuute
    'SophiaUn Barbelo Light Dew Onrush': '7DBA' // line laser from Barbelo head during Onrush
  },

  damageFail: {
    'SophiaUn The First Demiurge Revengeance': '7DB7' // hitting Vertical/Horizontal Kenoma
  },

  gainsEffectWarn: {
    'SophiaUn Frostbite': '25D' // standing in the frost puddle from the Third Demiurge
  },

  triggers: [{
    // Look away; does damage if failed.
    id: 'SophiaUn The Second Demiurge Divine Spark',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7DB0',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'SophiaUn Knocked Off',
    type: 'Ability',
    // 7D9C = The Scales of Wisdom
    // 7DC6 = The Scales of Wisdom
    // 7DBC = Gnosis (knockback from Barbelo add)
    // Technically, things like Aero III and keroma also knock people off but they also can kill people
    // if we ever get proper "you fell off" log lines, we can fix this up.
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7D9C', '7DC6', '7DBC']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const sophia_un = (sophia_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/thordan-un.ts
// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/03-hw/trial/thordan-ex.ts



const thordan_un_triggerSet = {
  zoneId: zone_id/* default.TheSingularityReactorUnreal */.Z.TheSingularityReactorUnreal,
  damageWarn: {
    'ThordanUN Meteorain': '89C3',
    // Targeted puddle AoEs, phase 1
    'ThordanUN Ascalons Mercy 1': '89BE',
    // Fan-shaped conal AoEs
    'ThordanUN Ascalons Mercy 2': '89BF',
    // Fan-shaped conal AoEs
    'ThordanUN Charibert Heavensflame': '89EB',
    // Targeted puddle AoEs, phases 2/6
    'ThordanUN Spiral Thrust': '89E5',
    // Cross-arena dashes, Ignasse/Paulecrain/Vellguine
    'ThordanUN Grinnaux Dimensional Collapse': '89D9',
    // Gravity puddles
    'ThordanUN Guerrique Heavy Impact 1': '89DF',
    // Earth ring tiny
    'ThordanUN Guerrique Heavy Impact 2': '89E0',
    // Earth ring small
    'ThordanUN Guerrique Heavy Impact 3': '89E1',
    // Earth ring large
    'ThordanUN Guerrique Heavy Impact 4': '89E2',
    // Earth ring giant
    'ThordanUN Charibert Holy Chain': '89EC' // Failure to break chains on time
  },

  damageFail: {
    'ThordanUN Hermenost Eternal Conviction': '89DD',
    // Missed towers
    'ThordanUN Comet Circle Comet Impact': '89F2' // Small meteor enrage, might not be survivable
  },

  gainsEffectWarn: {
    'ThordanUN Frostbite': '10C',
    // Standing in Hiemal Storm ice puddles
    'ThordanUN Hysteria': '128' // Gaze mechanic failure
  },

  shareWarn: {
    'ThordanUN Ascalons Might': '89BD',
    // Instant tank cleave
    'ThordanUN Lightning Storm': '89C1',
    // Lightning spread markers
    'ThordanUN Heavenly Slash': '89D3',
    // Cleaving mini-buster, Adelphel/Janlenoux, phase 2
    'ThordanUN Haumeric Hiemal Storm': '89EE',
    // Ice spread circles, Haumeric, phase 2/6
    'ThordanUN Spiral Pierce': '89E6',
    // Tethered line AoEs, Ignasse/Paulecrain/Vellguine
    'ThordanUN Noudenet Comet': '89F4' // Targeted puddle AoEs, phases 2/6
  },

  soloWarn: {
    'ThordanUN Dragons Rage': '89CA',
    // Standard stack marker
    'ThordanUN Zephirin Spear Of The Fury': '89D1' // Wild Charge
  },

  triggers: [{
    id: 'ThordanUN Grinnaux Faith Unmoving',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '89DA'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '벽으로 넉백',
          tc: '擊退至牆'
        }
      };
    }
  }]
};
/* harmony default export */ const thordan_un = (thordan_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/ultima-un.ts


const ultima_un_triggerSet = {
  zoneId: zone_id/* default.UltimasBaneUnreal */.Z.UltimasBaneUnreal,
  damageWarn: {
    'UltimaUn Mistral Song': '6EFC',
    // Garuda wide conal
    'UltimaUn Eye of the Storm': '6EFE',
    // Garuda donut
    'UltimaUn Radiant Plume': '6F00',
    // Ifrit fire eruptions
    'UltimaUn Weight of the Land': '6F01',
    // Titan puddles
    'UltimaUn Eruption': '6F03',
    // chasing Ifrit explosions
    'UltimaUn Crimson Cyclone': '6F04',
    // Ifrit dash
    'UltimaUn Magitek Ray 1': '6EF2',
    // trident laser
    'UltimaUn Magitek Ray 2': '6EF3',
    // trident laser
    'UltimaUn Magitek Ray 3': '6EF4',
    // trident laser
    'UltimaUn Homing Aetheroplasm': '6EF5',
    // chasing Aetheroplasm explosion
    'UltimaUn Magitek Bit Assault Cannon': '6F05' // line aoe from bits
  },

  damageFail: {
    'UltimaUn Fusion Burst': '6EF8' // failing to pop orbs
  },

  shareWarn: {
    'UltimaUn Homing Lasers': '6EF0',
    // distance? aggro? targeted circular cleave
    'UltimaUn Diffractive Laser': '6EF1' // frontal conal cleave
  },

  triggers: [{
    id: 'UltimaUn Viscous Aetheroplasm',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '171',
      count: '05'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const ultima_un = (ultima_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/zeromus-ex.ts



// TODO: people not in 8B3B Sable Thread line stack
// TODO: people not in 8B60 Flare tower
// TODO: people not taking 8B58 and failing meteors(???)
// TODO: instant death on enumerations / meteor tethers not stretched
// TODO: try to assign blame for Forked Lightning
// TODO: having a Forked Lightning/tank debuff and being in The Dark Beckons stack
// TODO: not being in The Dark Beckons stack when you don't have a tank/lightning debuff
// TODO: black hole death
// TODO: people missing from Umbral Rays stack
// TODO: people missing / extra people in Umbral Prism enumerations
const zeromus_ex_triggerSet = {
  zoneId: zone_id/* default.TheAbyssalFractureExtreme */.Z.TheAbyssalFractureExtreme,
  damageWarn: {
    'ZeromusEx Abyssal Echoes': '8B42',
    // big lit up glowing circles from lines on floor
    'ZeromusEx Nox 1': '8D2A',
    // initial orb circle damage
    'ZeromusEx Nox 2': '8D24',
    // chasing orb damage
    'ZeromusEx Scald': '8BB6',
    // standing too long in flare tower before Flare/Prominence Spine
    'ZeromusEx Flare': '8B62',
    // standing in post-tower meteor circle
    'ZeromusEx Prominence Spine': '8B63',
    // line aoes from post-tower meteor circle
    'ZeromusEx Visceral Whirl 1': '8B44',
    // claw swipe damage from NE/SW safe
    'ZeromusEx Visceral Whirl 2': '8B45',
    // claw swipe damage from NE/SW safe
    'ZeromusEx Visceral Whirl 3': '8B47',
    // claw swipe damage from NW/SE safe
    'ZeromusEx Visceral Whirl 4': '8B48',
    // claw swipe damage from NW/SE safe
    'ZeromusEx Big Bang': '8B4E',
    // ground circles during Big Bang cast
    'ZeromusEx Fractured Eventide 1': '8B3E',
    // initial damage from Eventide line
    'ZeromusEx Fractured Eventide 2': '8BB2',
    // ongoing damage from Eventide line
    'ZeromusEx Big Crunch': '8D31',
    // ground circles during Big Crunch cast
    'ZeromusEx Dimension Surge': '8B7E',
    // ground circle damage after Rend the Rift
    'ZeromusEx Dimension Surge Line': '8B82',
    // large white line cleave from wall
    'ZeromusEx Akh Rhai': '8B75',
    // ongoing Akh Rhai damage
    'ZeromusEx Chasmic Nails 1': '8B79',
    // first damage
    'ZeromusEx Chasmic Nails 2': '8B7A',
    // second damage
    'ZeromusEx Chasmic Nails 3': '8B7B',
    // third damage
    'ZeromusEx Chasmic Nails 4': '8B7C',
    // fourth damage
    'ZeromusEx Chasmic Nails 5': '8B7D' // fifth damage
  },

  damageFail: {
    'ZeromusEx The Dark Binds': '8B55',
    // tether damage
    'ZeromusEx Toxic Bubble Burst': '8B67',
    // hitting a Void Bio bubble
    'ZeromusEx Forked Lightning': '8B54' // forked lightning debuff, TODO: try to determine source
  },

  shareWarn: {
    'ZeromusEx Big Bang Spread': '8BDE',
    // spread during Big Bang
    'ZeromusEx The Dark Divides': '8B52',
    // spread debuff after Big Bang
    'ZeromusEx Big Crunch Spread': '8D32' // spread during Big Crunch
  },

  shareFail: {
    'ZeromusEx Dark Matter': '8B84' // tankbuster
  },

  soloFail: {
    'ZeromusEx The Dark Beckons': '8D3A',
    // stack debuff after Big Bang
    'ZeromusEx Umbral Prism': '8B77' // enumerations
  },

  triggers: [{
    id: 'ZeromusEx Doom',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '6E9'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const zeromus_ex = (zeromus_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/zeromus.ts


// TODO: people not in 8AF2 Sable Thread line stack
// TODO: people not in 8B13 Flare tower
// TODO: people not taking 8B0D and failing meteors(???)
// Note: 8BB5 Scald is not mentioned as it's light damage and many hit by the first
const zeromus_triggerSet = {
  zoneId: zone_id/* default.TheAbyssalFracture */.Z.TheAbyssalFracture,
  damageWarn: {
    'Zeromus Abyssal Echoes': '8AFA',
    // big lit up glowing circles from lines on floor
    'Zeromus Nox 1': '8D29',
    // initial orb circle damage
    'Zeromus Nox 2': '8D23',
    // chasing orb damage
    'Zeromus Flare': '8B15',
    // standing in post-tower meteor circle
    'Zeromus Prominence Spine': '8B16',
    // line aoes from post-tower meteor circle
    'Zeromus Visceral Whirl 1': '8AFC',
    // claw swipe damage from NE/SW safe
    'Zeromus Visceral Whirl 2': '8AFD',
    // claw swipe damage from NE/SW safe
    'Zeromus Visceral Whirl 3': '8AFE',
    // claw swipe damage from NW/SE safe
    'Zeromus Visceral Whirl 4': '8AFF',
    // claw swipe damage from NW/SE safe
    'Zeromus Toxic Bubble Burst': '8B18',
    // hitting a Void Bio bubble
    'Zeromus Big Bang': '8B05',
    // ground circles during Big Bang cast
    'Zeromus Fractured Eventide 1': '8AF5',
    // initial damage from Eventide line (NE safe)
    'Zeromus Fractured Eventide 2': '8C46',
    // initial damage from Eventide line (NW safe)
    'Zeromus Fractured Eventide 3': '8AF6',
    // ongoing damage from Eventide line
    'Zeromus Big Crunch': '8D30',
    // ground circles during Big Crunch cast
    'Zeromus Dimension Surge 1': '8B31',
    // ground circle damage after Rend the Rift
    'Zeromus Dimension Surge 2': '8B32',
    // small ground circle damage attached to 8B33 lines after Rend the Rift
    'Zeromus Dimension Surge 3': '8B33',
    // ground line damage attached to 8B32 circles
    'Zeromus Dimension Surge Line': '8B35',
    // large white line cleave from wall
    'Zeromus Akh Rhai': '8B24',
    // ongoing Akh Rhai damage
    'Zeromus Chasmic Nails 1': '82BC',
    // first damage
    'Zeromus Chasmic Nails 2': '82BD',
    // second damage
    'Zeromus Chasmic Nails 3': '82BE',
    // third damage
    'Zeromus Chasmic Nails 4': '82BF',
    // fourth damage
    'Zeromus Chasmic Nails 5': '8230' // fifth damage
  },

  shareWarn: {
    'Zeromus The Dark Divides': '8B09' // Big Bang spread
  },

  shareFail: {
    'Zeromus Dark Matter': '8B37' // tankbuster
  },

  soloWarn: {
    'Zeromus The Dark Beckons': '8B0A' // Big Bang stack
  }
};

/* harmony default export */ const zeromus = (zeromus_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/zodiark-ex.ts



const zodiark_ex_triggerSet = {
  zoneId: zone_id/* default.TheMinstrelsBalladZodiarksFall */.Z.TheMinstrelsBalladZodiarksFall,
  damageWarn: {
    'ZodiarkEx Quetzalcoatl Keraunos Eidolon': '67E1',
    // bird donut
    'ZodiarkEx Behemoth Meteoros Eidolon': '67E2',
    // behemoth circle
    'ZodiarkEx Python Opheos Eidolon': '67E3',
    // python line
    'ZodiarkEx Infernal Stream 1': '52D1',
    // initial fire wall
    'ZodiarkEx Infernal Stream 2': '67E0',
    // rotating fire wall
    'ZodiarkEx Esoteric Ray': '67E4',
    // laser wall summon
    'ZodiarkEx Esoteric Dyad': '67E5',
    // half arena wall summon
    'ZodiarkEx Esoteric Sect': '67E6',
    // conal wall summon
    'ZodiarkEx Algedon': '67EE',
    // untelegraphed diagonal knockback
    'ZodiarkEx Adikia 1': '63A9',
    // two hit east west circles
    'ZodiarkEx Adikia 2': '67F2' // two hit east west circles
  },

  damageFail: {
    'ZodiarkEx Explosion': '67E7' // Astral Eclipse explosions
  },

  shareFail: {
    'ZodiarkEx Ania': '6B63' // tank buster splash with headmarker
  },

  triggers: [{
    id: 'ZodiarkEx Algedon Push',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '67EE',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '넉백됨',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const zodiark_ex = (zodiark_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/zodiark.ts



const zodiark_triggerSet = {
  zoneId: zone_id/* default.TheDarkInside */.Z.TheDarkInside,
  damageWarn: {
    'Zodiark Esoteric Sect': '67CC',
    // conal wall summon
    'Zodiark Esoteric Dyad': '67CB',
    // half arena wall summon
    'Zodiark Behemoth Meteoros Eidolon': '67C6',
    // large circles from Behemoth summons
    'Zodiark Python Opheos Eidolon': '67C7',
    // lines from Python summons
    'Zodiark Phlegothon': '67CE',
    // targeted circles
    'Zodiark Esoteric Ray': '67CA',
    // 1+2 lasers
    'Zodiark Adikia 1': '63A8',
    // very large circles that create N/S safe zones
    'Zodiark Adikia 2': '67D9',
    // very large circles that create N/S safe zones
    'Zodiark Algedon': '67D3',
    // move to corner large knockback attack
    'Zodiark Explosion': '67CD' // Astral Eclipse explosions
  },

  shareFail: {
    'Zodiark Ania': '6B62' // tank buster splash with headmarker
  },

  soloWarn: {
    'Zodiark Styx': '67DC' // multi-hit stack marker
  },

  triggers: [{
    id: 'Zodiark Algedon Push',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '67D3',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter geschubst!',
          fr: 'Repoussé(e) !',
          ja: '落ちた',
          cn: '击退坠落',
          ko: '넉백됨',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const zodiark = (zodiark_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/trial/zurvan-un.ts
// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/03-hw/trial/zurvan-ex.ts


const zurvan_un_triggerSet = {
  zoneId: zone_id/* default.ContainmentBayZ1T9Unreal */.Z.ContainmentBayZ1T9Unreal,
  damageWarn: {
    'ZurvanUN Flare Star': '8558',
    // Flame puddle AoEs, phase 1
    'ZurvanUN Twin Spirit 1': '855B',
    // Zurvan half dives during Soar, phase 3 onward
    'ZurvanUN Twin Spirit 2': '855C',
    // Zurvan full dives during Soar, phase 3 onward
    'ZurvanUN Biting Halberd': '8562',
    // 270-degree cleave, phase 3 onward
    'ZurvanUN Tail End': '8563',
    // Chariot AoE, phase 3 onward
    'ZurvanUN Ciclicle': '8564',
    // Dynamo AoE, phase 3 onward
    'ZurvanUN Souther Cross': '8566',
    // Ice puddle explosion, phase 3 onward
    'ZurvanUN South Star 1': '8572',
    // Tower failure during Broken Seal, phase 5
    'ZurvanUN North Star 1': '8573',
    // Tower failure during Broken Seal, phase 5
    'ZurvanUN Comet': '856D',
    // Flame puddle AoEs, add intermission
    'ZurvanUN South Star 2': '859D',
    // Tower failure during Broken Seal, phase 5
    'ZurvanUN North Star 2': '859E' // Tower failure during Broken Seal, phase 5
  },

  damageFail: {
    'ZurvanUN Meracydian Meteor': '856C'
  },
  gainsEffectWarn: {
    'ZurvanUN Frostbite': '11D',
    // Southern Cross puddles, phase 3 onward
    'ZurvanUN Hysteria': '128',
    // Gaze attack, Meracydian Wile, intermission
    'ZurvanUN Infinite Anguish Tower': '487',
    // Outside of a tower during Broken Seal, phase 5
    'ZurvanUN Infinite Anguish Tether': '48A' // Hyperextended tether during Broken Seal, phase 5
  },

  shareWarn: {
    'ZurvanUN Metal Cutter 1': '857F',
    // Tank cleave, phase 1
    'ZurvanUN Metal Cutter 2': '8579',
    // Tank cleave, phase 2 onward
    'ZurvanUN Wave Cannon Avoid': '857C',
    // Bleed laser, phase 2 onward
    'ZurvanUN Flaming Halberd': '855D',
    // Giant spread circles during Soar, phase 3 onward
    'ZurvanUN Cool Flame': '855E',
    // Prey marker during Soar, phase 3 onward
    'ZurvanUN Fire III': '8578' // Tank Cleave
  },

  soloWarn: {
    'ZurvanUN Demonic Dive': '855F',
    // Stack marker during Soar, phase 3 onward
    'ZurvanUN Wave Cannon Stack': '857B' // Line stack after Demon's Claw, phase 2 onward
  }
};

/* harmony default export */ const zurvan_un = (zurvan_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/ultimate/dragonsongs_reprise_ultimate.ts




// TODO: 63DD Skyward Leap during Strength of the Heavens should ignore invulning tanks
// TODO: track vulns from Wrath tethers/blue marker in case they take a (deadly) liquid fire tick
// TODO: Akh Morn puddle damage is effectId=0 0x18 lines from Bleeding B87, but everybody gets this effect temporarily?
//       it is the only non-zero player dot damage between wroth flames and hot wing and hot-tail, though?
// TODO: Getting hit by the wrong cauterize at the end of adds phase
// TODO: trinity autos on wrong people, based on debuffs
const dragonsongs_reprise_ultimate_triggerSet = {
  zoneId: zone_id/* default.DragonsongsRepriseUltimate */.Z.DragonsongsRepriseUltimate,
  damageWarn: {
    'DSR Ser Grinnaux Empty Dimension': '62DA',
    // donut (phase1 and Wrath)
    'DSR Ser Grinnaux Full Dimension': '62DB',
    // circle (phase 1)
    'DSR Ser Adelphel Holy Shield Bash': '63EB',
    // line charge at tethered player
    'DSR Ser Adelphel Shining Blade': '62CE',
    // dash attack
    'DSR Brightsphere Bright Flare': '62CF',
    // spheres generated by 62CE Shining Blade
    'DSR Ser Charibert Skyblind': '631A',
    // puddles after Brightwing cleaves
    'DSR Spiral Thrust': '63D4',
    // dashes from Ser Vellguine, Ser Ignasse, Ser Paulecrain
    'DSR Ser Gerrique Heavy Impact 1': '63D6',
    // expanding earth ring
    'DSR Ser Gerrique Heavy Impact 2': '63D7',
    // expanding earth ring
    'DSR Ser Gerrique Heavy Impact 3': '63D8',
    // expanding earth ring
    'DSR Ser Gerrique Heavy Impact 4': '63D9',
    // expanding earth ring
    'DSR Ser Gerrique Heavy Impact 5': '63DA',
    // expanding earth ring
    'DSR Ser Grinnaux Dimensional Collapse': '63DC',
    // red/black puddles
    'DSR Ser Charibert Heaven\'s Stake 1': '6FAF',
    // initial Sanctity of the Ward 4x fire puddles
    'DSR Ser Charibert Heaven\'s Stake 2': '6FB0',
    // Sanctity of the Ward donut ring before fire/ice
    'DSR King Thordan Broad Swing': '63C2',
    // 3x directional cleaves
    'DSR Nidhogg Gnashing Wheel': '6715',
    // "get out" part of Gnash and Lash
    'DSR Nidhogg Lashing Wheel': '6716',
    // "get in" part of Gnash and Lash
    'DSR Nidhogg Geirskogul': '670A',
    // baited line aoes from tower clones
    'DSR Nidhogg Drachenlance': '670C',
    // front conal
    'DSR Vedrfolnir Twisting Dive': '6B8B',
    // initial dragon dive + twister during Wrath/Death
    'DSR Ser Charibert Altar Flare': '63E4',
    // 4x big explosions during Wrath of the Heavens
    'DSR Vidofnir Cauterize': '6B8E',
    // dive during Wrath/Death
    'DSR Darkscale Cauterize': '6B8D',
    // dive during Wrath/Death
    'DSR Darkscale Chain Lightning': '6B90',
    // 2x lightning spread during Wrath (doesn't hit player it's on)
    'DSR Ser Zephirin Spear of the Fury': '6B93',
    // spear line aoe during Death of the Heavens
    'DSR Vidofnir Wings of Salvation': '6B96',
    // white puddle that creates doom cleanser in Death of the Heavens
    'DSR Hrasevelgr Swirling Blizzard': '6D38',
    // wind donut during adds phase first tethers
    'DSR Nidhogg Dark Breath': '6D3B',
    // conal attack during single tank buster during adds phase tethers
    'DSR Hraesvelgr Holy Breath': '6D3C',
    // conal attack during single tank buster during adds phase tethers
    'DSR Hraesvelgr Hallowed Wings Left Wing': '6D25',
    // left glowing wing
    'DSR Hraesvelgr Hallowed Wings Right Wing': '6D28',
    // right glowing wing
    'DSR The Scarlet Price Flame Blast': '6729',
    // bomberman orbs during Wroth Flames
    'DSR Nidhogg Hot Tail': '6D2E',
    // center line aoe
    'DSR Nidhogg Hot Wing': '6D2C' // sides line aoes
  },

  damageFail: {
    'DSR Dimensional Torsion': '62D8',
    // player tethering a cloud
    'DSR Dimensional Purgation': '62D9',
    // Ser Adelphel tethering a cloud during charges
    'DSR Ser Charibert Holy Chain': '62E0',
    // failing to break chains, often kills people
    'DSR Ser Grinnaux Planar Prison': '63EC',
    // leaving the purple circle
    'DSR Holy Comet Holy Impact': '63EA',
    // meteor explosion from being too close
    'DSR King Thordan Ascalon\'s Mercy Concealed': '63C9',
    // protean 2nd hit
    'DSR Nidhogg Darkdragon Dive Miss': '671B',
    // tower failure
    'DSR Dragon-King Thordan Flames of Ascalon': '6D91',
    // final phase "get out"
    'DSR Dragon-King Thordan Ice of Ascalon': '6D92',
    // final phase "get in"
    'DSR Dragon-King Thordan Exaflare\'s Edge 1': '6D9C',
    // final phase exaflares (initial)
    'DSR Dragon-King Thordan Exaflare\'s Edge 2': '6D9D' // final phase exaflares
  },

  gainsEffectFail: {
    'DSR Burns': 'B81',
    // fire puddles during Sanctity of the Ward
    'DSR Frostbite': 'B82',
    // ice puddles during Sanctity of the Ward
    'DSR Suppuration': 'C3D' // sharing a Mortal Vow pass (or initial application)
  },

  shareWarn: {
    'DSR Ser Adelphel Execution': '62D5',
    // dive on main tank after 62CE Shining Blade
    'DSR Ser Charibert Heavensflame': '62DF',
    // spread with 62E0 Holy Chain (also in Death)
    'DSR Ser Charibert Brightwing': '6319',
    // cleaves during Pure of Heart
    'DSR King Thordan Attack': '63BB',
    // King Thordan cleave autos
    'DSR King Thordan Lightning Storm': '63CD',
    // spread during Strength of the Ward
    'DSR Nidhogg Attack': '6730',
    // Nidhogg cleave autos
    'DSR Nidhogg Dark High Jump': '670E',
    // sharing a circle marker tower drop
    'DSR Nidhogg Dark Spineshatter Dive': '670F',
    // sharing an up/forwards arrow marker tower drop
    'DSR Nidhogg Dark Elusive Jump': '6710',
    // sharing a down/back arrow marker tower drop
    'DSR Nidhogg Darkdragon Dive Share': '6711',
    // sharing a single tower
    'DSR Spiral Pierce': '6B8A',
    // Ser Ignasse and Ser Vellguine tether charges during Wrath
    'DSR King Thordan Ascalon\'s Mercy Revealed': '63CB' // protean during Wrath
  },

  shareFail: {
    'DSR King Thordan Ascalon\'s Might': '63C5',
    // tank cleaves
    'DSR Holy Shield Bash': '62D1',
    // Ser Adelphel/Janlenoux tank tether stun charges
    'DSR Nidhogg Soul Tether': '671C',
    // tank tether cleaves
    'DSR Nidhogg Mirage Dive': '68C4',
    // dives during eye phase, probably a wipe if shared
    'DSR Skyward Leap 1x': '72A2',
    // Ser Paulecraine single blue marker during Wrath
    'DSR Staggering Breath': '6D3D',
    // solo tank buster from Nidhogg/Hrae during adds phase tethers
    'DSR Hallowed Plume': '6D29',
    // Hallowed Wings tankbusters
    'DSR Nidhogg Spreading Flames': '742B',
    // Wroth Flames spread
    'DSR King Thordan Trinity Highest Enmity': '6D9F',
    // Trinity auto
    'DSR King Thordan Trinity Second Enmity': '6DA0',
    // Trinity auto
    'DSR King Thordan Trinity Nearest': '6DA1' // Trinity auto
  },

  soloWarn: {
    'DSR Ser Haumeric Hiemal Storm': '63E7' // Sanctity of the Ward ice pair stacks
  },

  soloFail: {
    'DSR Nidhogg Dark Orb': '6D39',
    // shared tank buster during adds phase tethers
    'DSR Hraesvelgr Holy Orb': '6D3A',
    // shared tank buster during adds phase tethers
    'DSR Nidhogg Entangled Flames': '742C' // Wroth Flames stack
  },

  triggers: [{
    // Interrupt.
    id: 'DSR Ser Adelphel Holiest Hallowing',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '62D0'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        text: matches.ability
      };
    }
  }, {
    id: 'DSR Ser Hermenost Conviction Cast Cleanup',
    type: 'StartsUsing',
    // 63DE/63DF = Strength of the Ward towers
    // 737B/737C = Sanctity of the Ward first towers
    // 6FEA/6FEB = Sanctity of the Ward second towers
    netRegex: netregexes/* default.startsUsing */.ZP.startsUsing({
      id: ['63DE', '737B', '6FEA']
    }),
    run: (data, matches) => {
      data.towerAbility = matches.id;
      data.convictionTower = {};
    }
  }, {
    id: 'DSR Ser Hermenost Conviction Tower Collect',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['63DF', '737C', '6FEB'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    run: (data, matches) => (data.convictionTower ??= {})[matches.target] = true
  }, {
    id: 'DSR Ser Hermenost Eternal Conviction Failure',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '63E0'
    }),
    suppressSeconds: 1,
    mistake: data => {
      const missing = data.party.partyNames.filter(name => {
        if (data.convictionTower?.[name]) return false;
        // Skip tanks on Conviction during Strength of the Ward.
        if (data.towerAbility === '63DE' && data.party.isTank(name)) return false;
        return true;
      }).sort();
      return missing.map(name => {
        return {
          type: 'fail',
          blame: name,
          text: {
            en: 'Missed Tower',
            de: 'Tower verfehlt',
            fr: 'Tour manquée',
            ja: '塔踏み失敗',
            cn: '错过塔',
            ko: '기둥 놓침',
            tc: '錯過塔'
          }
        };
      });
    }
  }, {
    id: 'DSR King Thordan Gaze',
    // Same abilities during both Thordan1 and Thordan2
    // 63D1 = The Dragon's Gaze (Thordan lookaway)
    // 63D2 = The Dragon's Glory (eye lookaway)
    // Technically there is also a Hysteria status (127) but sometimes this doesn't apply (if somebody dies too soon??).
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['63D1', '63D2'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => data.DamageFromMatches(matches) > 0,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'DSR King Thordan Twister',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '6B8C',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      // Instant death has a special flag value, differentiating
      // from the explosion damage you take when somebody else
      // pops one.
      if (matches.flags === oopsy_common/* kFlagInstantDeath */.hm) {
        return {
          type: 'fail',
          blame: matches.target,
          reportId: matches.targetId,
          text: {
            en: 'Twister Pop',
            de: 'Wirbelsturm berührt',
            fr: 'Apparition des tornades',
            ja: 'ツイスター',
            cn: '旋风',
            ko: '회오리 밟음',
            tc: '旋風'
          }
        };
      }
      // If not the one popping, just print "Twister".
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'DSR Doom Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'BA0'
    }),
    run: (data, matches) => (data.hasDoom ??= {})[matches.target] = true
  }, {
    id: 'DSR Doom Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: 'BA0'
    }),
    run: (data, matches) => (data.hasDoom ??= {})[matches.target] = false
  }, {
    // There is no trigger line for when doom runs out, so check slightly
    // before to see if doom was cleared or if we should consider any
    // non-damage death after this a doom.
    id: 'DSR Doom Death',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: 'BA0'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (data, matches) => {
      if (!data.hasDoom || !data.hasDoom[matches.target]) return;
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }, {
    id: 'DSR Wroth Flames',
    // Wroth Flames cast happens, then cauterize that nobody should be hit by,
    // then at the end is the first Hot Wing / Hot Tail, marking the end of Wroth Flames.
    // Cauterize after this is intentionally hit.
    // 6D2B = Hot Wing (self-casted)
    // 6D2D = Hot Tail (self-casted)
    type: 'StartsUsing',
    netRegex: netregexes/* default.startsUsing */.ZP.startsUsing({
      id: ['6D2B', '6D2D'],
      capture: false
    }),
    run: data => data.seenWrothFlames = true
  }, {
    id: 'DSR Hraesvelgr Nidhogg Cauterize',
    // During the first hallowed and wroth flames, there are cauterize casts.
    // 6D3E = Nidhogg (during Wroth Flames and before Touchdown)
    // 6D3F = Hraesvelgr (during the first Hallowed Wings and before Touchdown)
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['6D3E', '6D3F'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: data => !data.seenWrothFlames,
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.ability
      };
    }
  }, {
    id: 'DSR Pyretic',
    type: 'NetworkDoT',
    // Amazingly, the dot/hot line has the effect id for pyretic here.  Most dots don't.
    netRegex: netregexes/* default.networkDoT */.ZP.networkDoT({
      effectId: '3C0'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.name,
        reportId: matches.id,
        text: {
          en: 'Pyretic',
          de: 'Pyretisch',
          fr: 'Pyretique',
          ja: '炸裂',
          cn: '热病',
          ko: '열병',
          tc: '熱病'
        }
      };
    }
  }]
};
/* harmony default export */ const dragonsongs_reprise_ultimate = (dragonsongs_reprise_ultimate_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/06-ew/ultimate/the_omega_protocol.ts




// TODO: 7B10 Diffuse Wave Cannon Kyrios being shared if not invulning?
// TODO: call out who was missing in the Condensed Wave Cannon stack
// TODO: taking a hello world tower too late (rot debuff timer > tower debuff timer)
// TODO: breaking patch too early in p3, but especially delta
// TODO: beyond defense person getting hit by monitor in delta
// TODO: red/green tether not getting hit by monitor in delta
// TODO: headmarker tracking so we can track sigma marked/unmarked being hit by 7B72 Hyper Pulse or 7B74 Wave Cannon
// TODO: sigma tower tracking
// TODO: sigma laser hitting somebody with zero stacks
// TODO: omega monitor not hitting a 2-dynamic 2nd in line person
// TODO: omega monitor hitting anybody also hit by near world/blaster
// TODO: 7BA7 / 7BA8 Cosmo Dive
// TODO: 7BAA Wave Cannon wild charge collect

// TODO: we probably could use an oopsy utility library (and Data should be `any` here).
const the_omega_protocol_stackMistake = (type, expected, abilityText) => {
  return (_data, matches) => {
    const actual = parseFloat(matches.targetCount);
    if (actual === expected || actual === 0) return;
    const ability = abilityText ?? matches.ability;
    const text = actual === 1 ? (0,oopsy_common/* GetSoloMistakeText */.gc)(ability) : (0,oopsy_common/* GetShareMistakeText */.gG)(ability, actual);
    return {
      type: type,
      blame: matches.target,
      text: text
    };
  };
};
const translate = (data, text) => {
  return text[data.options.DisplayLanguage] ?? text['en'];
};
const helloEffect = {
  // Local Regression / "Christmas" red/green tethers
  redTether: 'DC9',
  // Remote Regression / blue tethers
  blueTether: 'DCA',
  // Critical Synchronization Bug / stack
  stack: 'DC4',
  // Critical Overflow Bug / defamation
  defamation: 'DC5',
  // Critical Underflow Bug / red rot
  redRot: 'DC6',
  // Critical Performance Bug / blue rot
  blueRot: 'D65'
};
const helloAbility = {
  // Critical Synchronization Bug / stack
  stack: '7B56',
  // Critical Overflow Bug / defamation
  defamation: '7B57',
  // Cascading Latent Defect / red tower
  redTower: '7B5F',
  // Latent Performance Defect
  blueTower: '7B60'
};
// The extra/missing/tookTwo texts have playerDescription below appended to it,
// e.g. "Red Tower, no rot (as defamation)" or "Missed Stack (as far tether)".
// If this doesn't work for some language translation, please file an issue.
const defects = [{
  expected: ['redRot'],
  actual: 'redTower',
  extra: {
    en: 'Red Tower, no rot',
    de: 'Roter Turm, keine Fäulnis',
    fr: 'Tour rouge, pas de putréfaction',
    ja: '赤塔、デバフなし',
    cn: '红塔, 无毒',
    ko: '빨강 장판, 디버프 없음',
    tc: '紅塔, 無毒'
  },
  missing: {
    en: 'Missed Red Tower',
    de: 'Verfehlter roter Turm',
    fr: 'Tour rouge manquée',
    ja: '赤塔失敗',
    cn: '没踩到红塔',
    ko: '빨강 장판 놓침',
    tc: '沒踩到紅塔'
  },
  share: {
    en: 'Red Tower',
    de: 'Roter Turm',
    fr: 'Tour rouge',
    ja: '赤塔',
    cn: '红塔',
    ko: '빨강 장판',
    tc: '紅塔'
  }
}, {
  expected: ['blueRot'],
  actual: 'blueTower',
  extra: {
    en: 'Blue Tower, no rot',
    de: 'Blauer Turm, keine Fäulnis',
    fr: 'Tour bleue, pas de putréfaction',
    ja: '青塔、デバフなし',
    cn: '蓝塔, 无毒',
    ko: '파랑 장판, 디버프 없음',
    tc: '藍塔, 無毒'
  },
  missing: {
    en: 'Missed Blue Tower',
    de: 'Verfehlter blauer Turm',
    fr: 'Tour bleue manquée',
    ja: '青塔失敗',
    cn: '没踩到蓝塔',
    ko: '파랑 장판 놓침',
    tc: '沒踩到藍塔'
  },
  share: {
    en: 'Blue Tower',
    de: 'Blauer Turm',
    fr: 'Tour bleue',
    ja: '青塔',
    cn: '蓝塔',
    ko: '파랑 장판',
    tc: '藍塔'
  }
}, {
  expected: ['stack', 'blueTether'],
  actual: 'stack',
  extra: {
    en: 'Stack',
    de: 'Sammeln',
    fr: 'Package',
    ja: '頭割り',
    cn: '分摊',
    ko: '쉐어',
    tc: '分攤'
  },
  missing: {
    en: 'Missed stack',
    de: 'Verfehltes Sammeln',
    fr: 'Package manqué',
    ja: '頭割り失敗',
    cn: '错过分摊',
    ko: '쉐어 놓침',
    tc: '錯過分攤'
  },
  share: {
    en: 'Stack',
    de: 'Sammeln',
    fr: 'Package',
    ja: '頭割り',
    cn: '分摊',
    ko: '쉐어',
    tc: '分攤'
  },
  tookTwo: {
    en: 'Stack x2',
    de: 'Sammeln x2',
    fr: 'Package x2',
    ja: '頭割り x2',
    cn: '分摊 x2',
    ko: '쉐어 x2',
    tc: '分攤 x2'
  }
}, {
  expected: ['defamation', 'redTether'],
  actual: 'defamation',
  extra: {
    en: 'Defamation',
    de: 'Ehrenstrafe',
    fr: 'Diffamation',
    ja: 'サークル',
    cn: '大圈',
    ko: '광역',
    tc: '大圈'
  },
  missing: {
    en: 'Missed defamation',
    de: 'Verfehlte Ehrenstrafe',
    fr: 'Diffamation manquée',
    ja: 'サークル失敗',
    cn: '错过大圈',
    ko: '광역 놓침',
    tc: '錯過大圈'
  },
  share: {
    en: 'Defamation',
    de: 'Ehrenstrafe',
    fr: 'Diffamation',
    ja: 'サークル',
    cn: '大圈',
    ko: '광역',
    tc: '大圈'
  },
  tookTwo: {
    en: 'Defamation x2',
    de: 'Ehrenstrafe x2',
    fr: 'Diffamation x2',
    ja: 'サークル x2',
    cn: '大圈 x2',
    ko: '광역 x2',
    tc: '大圈 x2'
  }
}];

// These descriptions are appended directly after text from the defects structure above.

const playerDescription = {
  // Order is important here.
  defamation: {
    en: ' (as defamation)',
    de: ' (als Ehrenstrafe)',
    fr: ' (comme diffamation)',
    ja: ' (サークル)',
    cn: ' (大圈)',
    ko: ' (광역)',
    tc: '(大圈)'
  },
  stack: {
    en: ' (as stack)',
    de: ' (als Sammeln)',
    fr: ' (en tant que package)',
    ja: ' (頭割り)',
    cn: ' (分摊)',
    ko: ' (쉐어)',
    tc: '(分攤)'
  },
  redTether: {
    en: ' (as near tether)',
    de: ' (als Nah-Verbindung)',
    fr: ' (en tant que lien proche)',
    ja: ' (ニア)',
    cn: ' (近线)',
    ko: ' (가까이 선)',
    tc: '(近線)'
  },
  blueTether: {
    en: ' (as far tether)',
    de: ' (als Fern-Verbindung)',
    fr: ' (en tant que lien éloigné)',
    ja: ' (ファー)',
    cn: ' (远线)',
    ko: ' (멀리 선)',
    tc: '(遠線)'
  },
  // These shouldn't happen.
  redRot: {
    en: ' (as red rot)',
    de: ' (als rote Fäulnis)',
    fr: ' (en tant que rouge)',
    ja: ' (赤)',
    cn: ' (红毒)',
    ko: ' (빨강 디버프)',
    tc: '(紅毒)'
  },
  blueRot: {
    en: ' (as blue rot)',
    de: ' (als blaue Fäulnis)',
    fr: ' (en tant que bleu)',
    ja: ' (青)',
    cn: ' (蓝毒)',
    ko: ' (파랑 디버프)',
    tc: '(藍毒)'
  }
};

// Some special case combo descriptions.
const playerComboDesc = {
  redDefamation: {
    en: ' (as red defamation)',
    de: ' (als rote Ehrenstrafe)',
    fr: ' (en tant que diffamation rouge)',
    ja: ' (赤サークル)',
    cn: ' (红大圈)',
    ko: ' (빨강 광역)',
    tc: '(紅大圈)'
  },
  redStack: {
    en: ' (as red stack)',
    de: ' (als rotes Sammeln)',
    fr: ' (en tant que package rouge)',
    ja: ' (赤頭割り)',
    cn: ' (红分摊)',
    ko: ' (빨강 쉐어)',
    tc: '(紅分攤)'
  },
  blueDefamation: {
    en: ' (as blue defamation)',
    de: ' (als blaue Ehrenstrafe)',
    fr: ' (en tant que diffamation bleue)',
    ja: ' (青サークル)',
    cn: ' (蓝大圈)',
    ko: ' (파랑 광역)',
    tc: '(藍大圈)'
  },
  blueStack: {
    en: ' (as blue stack)',
    de: ' (als blaue Sammeln)',
    fr: ' (en tant que package bleu',
    ja: ' (青頭割り)',
    cn: ' (蓝分摊)',
    ko: ' (파랑 쉐어)',
    tc: '(藍分攤)'
  }
};
const unknownDescriptionLocale = {
  en: ' (as ???)',
  de: ' (als ???)',
  fr: ' (en tant que ???)',
  ja: ' (???)',
  cn: ' (???)',
  ko: ' (???)',
  tc: '(???)'
};
const firstMarker = parseInt('0017', 16);
const the_omega_protocol_getHeadmarkerId = (data, matches) => {
  if (data.decOffset === undefined) data.decOffset = parseInt(matches.id, 16) - firstMarker;
  // The leading zeroes are stripped when converting back to string, so we re-add them here.
  // Fortunately, we don't have to worry about whether or not this is robust,
  // since we know all the IDs that will be present in the encounter.
  return (parseInt(matches.id, 16) - data.decOffset).toString(16).toUpperCase().padStart(4, '0');
};
const the_omega_protocol_triggerSet = {
  zoneId: zone_id/* default.TheOmegaProtocolUltimate */.Z.TheOmegaProtocolUltimate,
  damageWarn: {
    'TOP Flame Thrower 1': '7B0D',
    // initial Flame Thrower during Pantokrator
    'TOP Flame Thrower 2': '7E70',
    // ongoing Flame Thrower during Pantokrator
    'TOP Ballistic Impact': '7B0C',
    // ground puddles during Pantokrator
    'TOP Beyond Strength': '7B25',
    // Omega-M donut during Party Synergy
    'TOP Efficient Bladework': '7B26',
    // Omega-M centered circle during Party Synergy
    'TOP Superliminal Steel 1': '7B3E',
    // Omega-F hot wing during Party Synergy
    'TOP Superliminal Steel 2': '7B3F',
    // Omega-F hot wing during Party Synergy
    'TOP Superliminal Steel 3': '7B2B',
    // Omega-F hot wing during Sigma
    'TOP Superliminal Steel 4': '7B2C',
    // Omega-F hot wing during Sigma
    'TOP Optimized Blizzard III': '7B2D',
    // Omega-F cross during Party Synergy / Sigma
    'TOP Optical Laser': '7B21',
    // Optical Unit eye laser during Party Synergy / Delta
    'TOP Optimized Sagittarius Arrow': '7B33',
    // line aoe during Limitless Synergy
    'TOP Optimized Bladedance 1': '7B36',
    // Omega-M tankbuster conal (not tether target 7F75) during Limitless Synergy
    'TOP Optimized Bladedance 2': '7B37',
    // Omega-F tankbuster conal (not tether target 7F75) during Limitless Synergy
    'TOP Wave Repeater 1': '7B4F',
    // inner ring during p3 transition / p4
    'TOP Wave Repeater 2': '7B50',
    // second ring during p3 transition / p4
    'TOP Wave Repeater 3': '7B51',
    // third ring during p3 transition / p4
    'TOP Wave Repeater 4': '7B52',
    // outer ring during p3 transition / p4
    'TOP Colossal Blow': '7B4E',
    // Right/Left Arm Unit big centered circle during p3 transition
    'TOP Rocket Punch Explosion': '7AFA',
    // small rocket arm circles when done correctly
    'TOP Hyper Pulse 1': '7B70',
    // initial spinny arm lasers during Delta
    'TOP Hyper Pulse 2': '7B71',
    // ongoing spinny arm lasers during Delta
    'TOP Swivel Cannon 1': '7B94',
    // left/right beetle haircut during Delta
    'TOP Swivel Cannon 2': '7B95',
    // left/right beetle haircut during Delta
    'TOP Rear Power Unit Rear Lasers 1': '7B8F',
    // initial Sigma rotating laser
    'TOP Rear Power Unit Rear Lasers 2': '7B90',
    // ongoing Sigma rotating laser
    'TOP Diffuse Wave Cannon': '7B79',
    // front/back or side cleaves during Omega dodges
    'TOP Cosmo Arrow 1': '7BA3',
    // initial exasquare
    'TOP Cosmo Arrow 2': '7BA4' // ongoing exasquare
  },

  damageFail: {
    'TOP Storage Violation Obliteration': '7B06' // failing towers
  },

  gainsEffectFail: {
    // C05 is the 9999 duration, and C06 is the 15s bleed tick (for 150k damage).
    'TOP Bleeding': 'C05' // standing in the middle during p3 intermission
  },

  shareWarn: {
    'TOP Wave Cannon Kyrios': '7B11',
    // headmarker line lasers after Pantokrator
    'TOP Optimized Fire III': '7B2F',
    // spread during Party Synergy
    'TOP Sniper Cannon': '7B53',
    // spread during p3 transition
    'TOP Wave Cannon Protean': '7B7E',
    // p4 initial protean laser
    'TOP Oversampled Wave Cannon': '7B6D',
    // p3/p5 monitors
    'TOP Sigma Wave Cannon': '7B74',
    // headmarker line protean at the start of Sigma
    'TOP Flash Gale': '7DDF' // p6 tank autos
  },

  shareFail: {
    'TOP Guided Missile Kyrios': '7B0E',
    // spread damage duruing Pantokrator
    'TOP Solar Ray 1': '7E6A',
    // tankbuster during M/F
    'TOP Solar Ray 2': '7E6B',
    // tankbuster during M/F
    'TOP Solar Ray 3': '81AC',
    // p5 initial tankbuster
    'TOP Solar Ray 4': '7B01',
    // p5 second tankbuster
    'TOP Beyond Defense': '7B28' // spread with knockback during Limitless Synergy
  },

  soloWarn: {
    'TOP Pile Pitch': '7B29' // stack after Beyond Defense during Limitless Synergy
  },

  triggers: [{
    id: 'TOP Phase Tracker',
    type: 'StartsUsing',
    // 7B40 = Firewall
    // 8014 = Run ****mi* (Sigma Version)
    // 8015 = Run ****mi* (Omega Version)
    netRegex: netregexes/* default.startsUsing */.ZP.startsUsing({
      id: ['7B40', '8014', '8015'],
      capture: true
    }),
    run: (data, matches) => {
      switch (matches.id) {
        case '7B40':
          data.phase = 'p2';
          break;
        case '8014':
          data.phase = 'sigma';
          break;
        case '8015':
          data.phase = 'omega';
          break;
      }
    }
  }, {
    id: 'TOP Phase Ability Tracker',
    type: 'Ability',
    // 7BFD = attack (Omega)
    // 7B13 = self-cast on omega
    // 7B47 = self-cast on omega
    // 7B7C = self-cast on omega
    // 7F72 = Blind Faith (non-enrage)
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7BFD', '7B13', '7B47', '7B7C', '7F72'],
      capture: true
    }),
    suppressSeconds: 20,
    // Ignore multiple delta/omega captures
    run: (data, matches) => {
      switch (matches.id) {
        case '7BFD':
          data.phase = 'p1';
          break;
        case '7B13':
          data.phase = 'p3';
          break;
        case '7B47':
          data.phase = 'p4';
          break;
        case '7B7C':
          data.phase = 'delta';
          break;
        case '7F72':
          data.phase = 'p6';
          break;
      }
    }
  }, {
    id: 'TOP Headmarker Tracker',
    type: 'HeadMarker',
    netRegex: netregexes/* default.headMarker */.ZP.headMarker(),
    condition: data => data.decOffset === undefined,
    // Unconditionally set the first headmarker here so that future triggers are conditional.
    run: (data, matches) => the_omega_protocol_getHeadmarkerId(data, matches)
  }, {
    id: 'TOP In Line Debuff Collector',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: ['BBC', 'BBD', 'BBE', 'D7B']
    }),
    run: (data, matches) => {
      const effectToNum = {
        BBC: 1,
        BBD: 2,
        BBE: 3,
        D7B: 4
      };
      const num = effectToNum[matches.effectId];
      if (num === undefined) return;
      (data.inLine ??= {})[matches.target] = num;
      (data.blameId ??= {})[matches.target] = matches.targetId;
    }
  }, {
    id: 'TOP In Line Debuff Cleanup',
    type: 'StartsUsing',
    // 7B03 = Program Loop
    // 7B0B = Pantokrator
    netRegex: netregexes/* default.startsUsing */.ZP.startsUsing({
      id: ['7B03', '7B0B'],
      source: 'Omega',
      capture: false
    }),
    // Don't clean up when the buff is lost, as that happens after taking a tower.
    run: data => data.inLine = {}
  }, {
    id: 'TOP Program Loop Counter',
    type: 'Ability',
    // 7B0A Blaster and 7B04 Storage Violation can be in either order.
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7B0A', '7B04'],
      source: 'Omega',
      capture: false
    }),
    suppressSeconds: 2,
    run: data => {
      data.towerCount = (data.towerCount ??= 0) + 1;
      data.blasterCollect = [];
      data.towerCollect = [];
    }
  }, {
    id: 'TOP Program Loop Damage Collector',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7B0A', '7B04'],
      source: 'Omega'
    }),
    run: (data, matches) => {
      if (matches.id === '7B0A') (data.blasterCollect ??= []).push(matches);else if (matches.id === '7B04') (data.towerCollect ??= []).push(matches);
    }
  }, {
    id: 'TOP Program Loop Mistake',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7B0A', '7B04'],
      source: 'Omega',
      capture: false
    }),
    delaySeconds: 0.5,
    suppressSeconds: 2,
    mistake: data => {
      const num = data.towerCount;
      if (num === undefined || num < 1 || num > 4) return;
      const inLine = data.inLine ?? {};
      const mistakes = [];
      const players = Object.keys(inLine);
      const towerPlayers = players.filter(p => inLine[p] === num);
      const blasterPlayers = players.filter(p => inLine[p] === num + 2 || inLine[p] === num - 2);

      // Missing towers
      const towersTaken = (data.towerCollect ??= []).map(m => m.target);
      for (const player of towerPlayers) {
        if (towersTaken.includes(player)) continue;
        mistakes.push({
          type: 'fail',
          blame: player,
          reportId: data.blameId?.[player],
          text: {
            en: `Missed Tower #${num}`,
            de: `Verfehlter Turm #${num}`,
            fr: `Tour #${num} manquée`,
            ja: '塔踏み #${num}失敗',
            cn: `错过 #${num} 塔`,
            ko: `기둥 #${num} 놓침`,
            tc: `錯過 #${num} 塔`
          }
        });
      }

      // Did both tower players take the same tower??
      // Do a reverse because we don't have `findLastIndex` here.
      const reverseTower = [...data.towerCollect].reverse();
      const towerSplitIdx = reverseTower.findIndex(x => x.targetIndex === '0') + 1;
      const tower1 = [...reverseTower].splice(0, towerSplitIdx);
      const tower2 = [...reverseTower].splice(towerSplitIdx);
      for (const tower of [tower1, tower2]) {
        let playerCount = 0;
        const taken = tower.map(m => m.target);
        for (const player of towerPlayers) {
          if (taken.includes(player)) playerCount++;
        }
        if (playerCount <= 1) continue;

        // There's only two tower players, so just blame them all.
        const towerText = {
          en: `Tower #${num}`,
          de: `Turm #${num}`,
          fr: `Tour #${num}`,
          ja: `塔#${num}`,
          cn: `塔 #${num}`,
          ko: `기둥 #${num}`,
          tc: `塔 #${num}`
        };
        const text = (0,oopsy_common/* GetShareMistakeText */.gG)(towerText, 2);
        for (const player of towerPlayers) {
          mistakes.push({
            type: 'fail',
            blame: player,
            reportId: data.blameId?.[player],
            text: text
          });
        }
      }
      for (const player of towersTaken) {
        if (towerPlayers.includes(player)) continue;
        // It's ok for a lower number to stand in a higher number tower, so ignore this.
        const playerNum = data.inLine?.[player];
        if (playerNum === undefined || playerNum < num) continue;
        mistakes.push({
          type: 'fail',
          blame: player,
          reportId: data.blameId?.[player],
          text: {
            en: `Tower #${num} as #${playerNum}`,
            de: `Turm #${num} als #${playerNum}`,
            fr: `Tour #${num} en tant que #${playerNum}`,
            ja: `塔#${num}踏む (#${playerNum})`,
            cn: `#${num} 塔 点名 #${playerNum}`,
            ko: `기둥 #${num} 들어감 (#${playerNum})`,
            tc: `#${num} 塔 點名 #${playerNum}`
          }
        });
      }
      const blastersTaken = (data.blasterCollect ??= []).map(m => m.target);
      for (const player of blasterPlayers) {
        if (blastersTaken.includes(player)) continue;
        mistakes.push({
          type: 'fail',
          blame: player,
          reportId: data.blameId?.[player],
          text: {
            en: `Missed Tether #${num}`,
            de: `Verfehlte Verbindung #${num}`,
            fr: `Lien #${num} manqué`,
            ja: `線#${num}取り失敗`,
            cn: `错过 #${num} 线`,
            ko: `선 #${num} 놓침`,
            tc: `錯過 #${num} 線`
          }
        });
      }
      for (const m of data.blasterCollect ?? []) {
        const player = m.target;
        const numTargets = parseInt(m.targetCount);
        const shouldTakeTether = blasterPlayers.includes(player);
        if (shouldTakeTether && numTargets === 1) continue;

        // "warn" for "I should be in this" and "fail" for "hit but shouldn't be".
        const type = shouldTakeTether ? 'warn' : 'fail';
        const tetherText = {
          en: `${m.ability} #${num}`,
          de: `${m.ability} #${num}`,
          fr: `${m.ability} #${num}`,
          ja: `${m.ability} #${num}`,
          cn: `${m.ability} #${num}`,
          ko: `${m.ability} #${num}`,
          tc: `${m.ability} #${num}`
        };
        const text = numTargets > 1 ? (0,oopsy_common/* GetShareMistakeText */.gG)(tetherText, numTargets) : tetherText;
        mistakes.push({
          type: type,
          blame: player,
          reportId: data.blameId?.[player],
          text: text
        });
      }
      return mistakes;
    }
  }, {
    id: 'TOP Beyond Defense Cleanup',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B27'
    }),
    run: data => data.beyondDefense = []
  }, {
    id: 'TOP Beyond Defense Collect',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B28'
    }),
    run: (data, matches) => (data.beyondDefense ??= []).push(matches.target)
  }, {
    id: 'TOP Pile Pitch Double Tap',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B29'
    }),
    condition: (data, matches) => data.beyondDefense?.includes(matches.target),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: `${matches.ability} (after Beyond Defense)`,
          de: `${matches.ability} (nach Schildkombo S)`,
          fr: `${matches.ability} (après Au-delà de la défense)`,
          ja: `${matches.ability} (シールドコンボS以後)`,
          cn: `${matches.ability} (盾连击S后)`,
          ko: `${matches.ability} (방패 연격 S 이후)`,
          tc: `${matches.ability} (盾連擊S後)`
        }
      };
    }
  }, {
    id: 'TOP Condensed Wave Cannon Kyrios',
    // Three people *should* be in this stack, so warn if somebody doesn't make it.
    // TODO: we could try to figure out who is not in this stack for stacks > 1
    // assuming that people don't switch sides.
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B0F'
    }),
    mistake: the_omega_protocol_stackMistake('warn', 3)
  }, {
    id: 'TOP High-powered Sniper Cannon',
    // Wroth Flames-esque two person stack during p3 transition
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B54'
    }),
    mistake: the_omega_protocol_stackMistake('warn', 2)
  }, {
    id: 'TOP Code Smell Collector',
    type: 'GainsEffect',
    // D6C Synchronization Code Smell (stack)
    // D6D Overflow Code Smell (defamation)
    // D6E Underflow Code Smell (red)
    // D6F Performance Code Smell (blue)
    // D71 Remote Code Smell (far tethers)
    // DAF Local Code Smell (near tethers)
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: ['D6C', 'D6D', 'D6E', 'D6F', 'D71', 'DAF']
    }),
    run: (data, matches) => {
      (data.helloSmell ??= []).push(matches);
      const emptyExpectedRot = {
        blue: [],
        red: []
      };
      if (matches.effectId === 'D6E') ((data.expectedRots ??= {})[0] ??= emptyExpectedRot).red.push(matches.target);else if (matches.effectId === 'D6F') ((data.expectedRots ??= {})[0] ??= emptyExpectedRot).blue.push(matches.target);
    }
  }, {
    id: 'TOP Hello World Collect Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: Object.values(helloEffect)
    }),
    mistake: (data, matches) => {
      const state = data.helloState ??= {};
      const set = state[matches.target] ??= new Set();
      set.add(matches.effectId);

      // Detect unexpected rot passes.
      const isRedRot = matches.effectId === helloEffect.redRot;
      const isBlueRot = matches.effectId === helloEffect.blueRot;
      if (!isRedRot && !isBlueRot) return;
      data.latentDefectCount ??= 0;
      const expected = data.expectedRots?.[data.latentDefectCount] ?? {
        blue: [],
        red: []
      };
      if (isRedRot && !expected.red.includes(matches.target)) {
        return {
          type: 'warn',
          blame: matches.target,
          reportId: matches.targetId,
          text: {
            en: 'Unexpected red rot',
            de: 'Unerwartete rote Fäulnis',
            fr: 'Putréfaction rouge inattendue',
            ja: '赤デバフもらう',
            cn: '非预期红毒',
            ko: '빨강 디버프 잘못 받음',
            tc: '非預期紅毒'
          }
        };
      }
      if (isBlueRot && !expected.blue.includes(matches.target)) {
        return {
          type: 'warn',
          blame: matches.target,
          reportId: matches.targetId,
          text: {
            en: 'Unexpected blue rot',
            de: 'Unerwartete blaue Fäulnis',
            fr: 'Putréfaction bleue inattendue',
            ja: '青デバフもらう',
            cn: '非预期蓝毒',
            ko: '파랑 디버프 잘못 받음',
            tc: '非預期藍毒'
          }
        };
      }
      // TODO: detect anything gained/active during critical error
    }
  }, {
    id: 'TOP Hello World Collect Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: Object.values(helloEffect)
    }),
    run: (data, matches) => {
      const state = data.helloState ??= {};
      const set = state[matches.target] ??= new Set();
      set.delete(matches.effectId);
    }
  }, {
    id: 'TOP Latent Defect Snapshot',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B6F',
      capture: false
    }),
    run: data => {
      data.latentDefectCount ??= 0;
      data.latentDefectCount++;

      // Take a snapshot of the debuff state when Latent Defect goes off before the abilities.
      data.helloStateSnapshot = {};
      for (const [name, set] of Object.entries(data.helloState ?? {})) data.helloStateSnapshot[name] = new Set(set);

      // Set up expected rot passes for future latent defects if needed.
      if (data.defamationColor !== undefined) return;
      data.expectedRots ??= {};
      data.helloSmell ??= [];
      const defamationSmellId = 'D6D';
      const redSmellId = 'D6E';
      const blueSmellId = 'D6F';
      const defamation = data.helloSmell.find(x => x.effectId === defamationSmellId);
      const redEffects = data.helloSmell.filter(x => x.effectId === redSmellId);
      const blueEffects = data.helloSmell.filter(x => x.effectId === blueSmellId);
      if (defamation === undefined) {
        console.error(`Hello World: no defamation: ${JSON.stringify(data.helloSmell)}`);
        return;
      }
      if (redEffects.map(x => x.target).includes(defamation.target)) data.defamationColor = 'red';else if (blueEffects.map(x => x.target).includes(defamation.target)) data.defamationColor = 'blue';
      if (data.defamationColor === undefined) {
        console.error(`Hello World: no defamation color: ${JSON.stringify(data.helloSmell)}`);
        return;
      }
      const nearTetherColor = data.defamationColor;
      const farTetherColor = data.defamationColor === 'red' ? 'blue' : 'red';
      const nearSmellId = 'DAF';
      const farSmellId = 'D71';

      // Walk through all smells and add expected rots based on tether timers.
      for (const smell of data.helloSmell) {
        // 3 = initial rot/stack/def for defect 1
        // 23 = tether for defect 1
        // 44 = tether for defect 2
        // 65 = tether for defect 3
        // 86 = tether for defect 4
        // map to 1 2 3 4
        const duration = parseInt(smell.duration);
        const count = 1 + Math.floor(Math.max(duration - 10, 0) / 20);
        // No rot passes should occur on the 4th latent defect.
        // In general this is impossible, but deaths can make things weird.
        if (count === 4) continue;
        const expectedForCount = data.expectedRots[count] ??= {
          blue: [],
          red: []
        };
        if (smell.effectId === nearSmellId) expectedForCount[nearTetherColor].push(smell.target);else if (smell.effectId === farSmellId) expectedForCount[farTetherColor].push(smell.target);
      }
    }
  }, {
    id: 'TOP Latent Defect Missed Rots',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B6F',
      capture: false
    }),
    mistake: data => {
      if (data.latentDefectCount === undefined) return;

      // Check if everybody got their expected rots.
      // This runs after the count has been incremented in the previous trigger.
      const prevCount = data.latentDefectCount - 1;
      const prevExpected = data.expectedRots?.[prevCount];
      // This should always be defined, but just in case (and for TypeScript)...
      if (prevExpected === undefined) {
        console.error(`Missing expected rot: ${prevCount}, ${JSON.stringify(data.expectedRots)}`);
        return;
      }
      const mistakes = [];
      const rotColors = ['red', 'blue'];
      for (const color of rotColors) {
        for (const player of prevExpected[color]) {
          const rotToEffect = {
            red: helloEffect.redRot,
            blue: helloEffect.blueRot
          }[color];
          if (data.helloStateSnapshot?.[player]?.has(rotToEffect)) continue;
          const text = {
            red: {
              en: 'Failed to get red rot',
              de: 'Rote Fäulnis nicht erhalten',
              fr: 'Obtention de putréfaction rouge échouée',
              ja: '赤デバフ失敗',
              cn: '没拿到红毒',
              ko: '빨강 디버프 못받음',
              tc: '沒拿到紅毒'
            },
            blue: {
              en: 'Failed to get blue rot',
              de: 'Blaue Fäulnis nicht erhalten',
              fr: 'Obtention de putréfaction bleue échouée',
              ja: '青デバフ失敗',
              cn: '没拿到蓝毒',
              ko: '파랑 디버프 못받음',
              tc: '沒拿到藍毒'
            }
          }[color];
          mistakes.push({
            type: 'warn',
            blame: player,
            reportId: data.blameId?.[player],
            text: text
          });
        }
      }
      return mistakes;
    }
  }, {
    id: 'TOP Hello World Latent Defect Ability Collect',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: Object.values(helloAbility)
    }),
    run: (data, matches) => (data.helloCollect ??= []).push(matches)
  }, {
    id: 'TOP Hello World Mistakes',
    type: 'Ability',
    // Check Hello World mistakes during patch explosions
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B63'
    }),
    mistake: data => {
      if (data.helloCollect === undefined || data.helloCollect.length === 0) return;
      const mistakes = [];
      const collect = [...data.helloCollect];
      data.helloCollect = [];
      const unknownDesc = translate(data, unknownDescriptionLocale);
      const players = Object.keys(data.blameId ?? {});

      // Generate a string description of each player, for mistakes.
      const playerToDescription = {};
      for (const player of players) {
        const helloEffectAnon = helloEffect;
        const state = data.helloStateSnapshot?.[player];
        if (state === undefined) continue;

        // Combo descriptions.
        if (state.has(helloEffect.redRot) && !state.has(helloEffect.blueRot)) {
          if (state.has(helloEffect.defamation)) playerToDescription[player] ??= translate(data, playerComboDesc.redDefamation);else if (state.has(helloEffect.stack)) playerToDescription[player] ??= translate(data, playerComboDesc.redStack);
        } else if (state.has(helloEffect.blueRot) && !state.has(helloEffect.redRot)) {
          if (state.has(helloEffect.defamation)) playerToDescription[player] ??= translate(data, playerComboDesc.blueDefamation);else if (state.has(helloEffect.stack)) playerToDescription[player] ??= translate(data, playerComboDesc.blueStack);
        }

        // Single effect descriptions.
        for (const [key, desc] of Object.entries(playerDescription)) {
          const effectId = helloEffectAnon[key];
          if (effectId !== undefined && state?.has(effectId)) {
            playerToDescription[player] ??= translate(data, desc);
            continue;
          }
        }
      }
      for (const defect of defects) {
        const buffStrs = defect.expected.map(x => helloEffect[x]);
        const [buff1, buff2] = buffStrs;
        const expectedPlayers = players.filter(x => {
          const state = data.helloStateSnapshot?.[x];
          if (state === undefined) return;
          return buff1 !== undefined && state.has(buff1) || buff2 !== undefined && state.has(buff2);
        });

        // Special-case "missed tower" to only include people who "should" have rot,
        // ignoring who "does" have rot.
        let missingExpectedPlayers = expectedPlayers;
        const expectedRot = data.expectedRots?.[(data.latentDefectCount ?? -1) - 1];
        if (defect.actual === 'redTower') missingExpectedPlayers = expectedRot?.red ?? missingExpectedPlayers;else if (defect.actual === 'blueTower') missingExpectedPlayers = expectedRot?.blue ?? missingExpectedPlayers;
        const actualAbilities = collect.filter(x => x.id === helloAbility[defect.actual]);
        const actualPlayers = actualAbilities.map(x => x.target);

        // Missing a person??
        for (const player of missingExpectedPlayers) {
          if (!actualPlayers.includes(player)) {
            // For towers, this will call missed if somebody should have rot and be in that
            // tower, even if they don't have rot.
            const text = translate(data, defect.missing);
            mistakes.push({
              type: 'warn',
              blame: player,
              reportId: data.blameId?.[player],
              text: `${text}${playerToDescription[player] ?? unknownDesc}`
            });
          }
        }

        // It's fine to have extra people in the final stack, so ignore this.
        if (data.latentDefectCount !== 4 || defect.actual !== 'stack') {
          // Extra person with the wrong debuff??
          for (const player of actualPlayers) {
            if (!expectedPlayers.includes(player)) {
              const text = translate(data, defect.extra);
              mistakes.push({
                type: 'warn',
                blame: player,
                reportId: data.blameId?.[player],
                text: `${text}${playerToDescription[player] ?? unknownDesc}`
              });
            }
          }
        }
        const isTower = defect.actual === 'redTower' || defect.actual === 'blueTower';

        // Walk through abilities and make sure everybody took defamation/stack at most once.
        // (Surely nobody will double tap with stacks, but might as well handle it too.)
        const abilityCount = {};
        for (const ability of actualAbilities) {
          const player = ability.target;
          abilityCount[player] ??= 0;
          abilityCount[player]++;

          // Check for solo defamation/stack while we're here.
          const isFinalDefamation = defect.actual === 'defamation' && data.latentDefectCount === 4;
          const targetCount = parseInt(ability.targetCount);
          // Defamation (1-3) and stack always need two people in them.
          if (targetCount === 1 && !isFinalDefamation && !isTower) {
            const text = translate(data, (0,oopsy_common/* GetSoloMistakeText */.gc)(defect.share));
            mistakes.push({
              type: 'warn',
              blame: player,
              reportId: data.blameId?.[player],
              text: `${text}${playerToDescription[player] ?? unknownDesc}`
            });
          } else if (targetCount > 1 && (isFinalDefamation || isTower)) {
            // Towers and Defamation 4 should always have only one person in them.
            const text = translate(data, (0,oopsy_common/* GetShareMistakeText */.gG)(defect.share, targetCount));
            const hasDefamation = data.helloStateSnapshot?.[ability.target]?.has(helloEffect.defamation);
            const type = hasDefamation ? 'warn' : 'fail';
            mistakes.push({
              type: type,
              blame: player,
              reportId: data.blameId?.[player],
              text: `${text}${playerToDescription[player] ?? unknownDesc}`
            });
          }
        }

        // Is this a stack or defamation?
        const idealNumberOfPlayers = buffStrs.length;
        const tookTwo = defect.tookTwo;
        if (idealNumberOfPlayers !== 2 || tookTwo === undefined) continue;

        // Check for double taps.
        for (const [player, count] of Object.entries(abilityCount)) {
          if (count !== 2) continue;
          const text = translate(data, tookTwo);
          mistakes.push({
            type: 'warn',
            blame: player,
            reportId: data.blameId?.[player],
            text: `${text}${playerToDescription[player] ?? unknownDesc}`
          });
        }
      }
      return mistakes;
    }
  }, {
    id: 'TOP Critical Underflow Bug',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B5A'
    }),
    mistake: (data, matches) => {
      const targets = parseInt(matches.targetCount);
      if (targets <= 1) return;
      const renamedText = {
        en: 'Red Rot Explosion',
        de: 'Rote Fäulnis Explosion',
        fr: 'Explosion de la putréfaction rouge',
        ja: '赤デバフ爆発',
        cn: '红毒爆炸',
        ko: '빨강 디버프 폭발',
        tc: '紅毒爆炸'
      };
      const text = (0,oopsy_common/* GetShareMistakeText */.gG)(renamedText, targets);
      const isRedRot = data.helloStateSnapshot?.[matches.target]?.has(helloEffect.redRot);
      const type = isRedRot ? 'warn' : 'fail';
      return {
        type: type,
        blame: matches.target,
        text: text
      };
    }
  }, {
    id: 'TOP Critical Performance Bug',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B5B'
    }),
    mistake: (data, matches) => {
      const targets = parseInt(matches.targetCount);
      if (targets <= 1) return;
      const renamedText = {
        en: 'Blue Rot Explosion',
        de: 'Blaue Fäulnis Explosion',
        fr: 'Explosion de la putréfaction bleue',
        ja: '青デバフ爆発',
        cn: '蓝毒爆炸',
        ko: '파랑 디버프 폭발',
        tc: '藍毒爆炸'
      };
      const text = (0,oopsy_common/* GetShareMistakeText */.gG)(renamedText, targets);
      const isBlueRot = data.helloStateSnapshot?.[matches.target]?.has(helloEffect.blueRot);
      const type = isBlueRot ? 'warn' : 'fail';
      return {
        type: type,
        blame: matches.target,
        text: text
      };
    }
  }, {
    id: 'TOP Oversampled Wave Cannon Collect',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B6D',
      ...oopsy_common/* playerDamageFields */.np
    }),
    run: (data, matches) => (data.monitorCollect ??= []).push(matches)
  }, {
    id: 'TOP P3 Oversampled Wave Cannon',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B6D',
      capture: false
    }),
    condition: data => data.phase === 'p3',
    delaySeconds: 0.3,
    suppressSeconds: 1,
    mistake: (data, _matches) => {
      // TODO: restrict this to p3
      const players = Object.keys(data.blameId ?? {});
      data.monitorCollect ??= [];
      const monitorPlayers = data.monitorCollect.map(x => x.target);
      const missing = players.filter(x => !monitorPlayers.includes(x));
      const mistakes = [];
      for (const player of missing) {
        mistakes.push({
          type: 'warn',
          name: player,
          // no reportId/blame here as this is usually somebody else's fault
          text: {
            en: 'Not hit by monitor',
            de: 'Nicht vom Monitor getroffen',
            fr: 'Non touché par le moniteur',
            ja: '検知失敗',
            cn: '未被小电视命中',
            ko: '모니터 안맞음',
            tc: '未被小電視命中'
          }
        });
      }
      const monitorCount = {};
      for (const player of monitorPlayers) {
        monitorCount[player] ??= 0;
        monitorCount[player]++;
      }
      for (const [player, count] of Object.entries(monitorCount)) {
        if (count <= 1) continue;
        mistakes.push({
          type: 'warn',
          name: player,
          // no reportId/blame here as this is usually somebody else's fault
          text: {
            en: `Took monitor x${count}`,
            de: `Monitor x${count} genommen`,
            fr: `Moniteur pris x${count} fois`,
            ja: `検知 x${count}`,
            cn: `吃小电视 x${count} 次`,
            ko: `모니터 ${count}개 맞음`,
            tc: `吃小電視 x${count} 次`
          }
        });
      }

      // It is possible in rare cases for there to be more than 8 hits.
      // Maybe the boss hits everybody on the monitor side and not just two?
      const numMonitors = data.monitorCollect.filter(x => x.targetIndex === '0').length;
      if (numMonitors !== 8) {
        mistakes.push({
          type: 'warn',
          text: {
            en: `Total monitors: x${numMonitors}`,
            de: `Monitore insgesamt: x${numMonitors}`,
            fr: `Moniteurs totaux: x${numMonitors}`,
            ja: `検知数: x${numMonitors}`,
            cn: `小电视总数: x${numMonitors}`,
            ko: `총 모니터 수: x${numMonitors}`,
            tc: `小電視總數: x${numMonitors}`
          }
        });
      }
      return mistakes;
    }
  }, {
    id: 'TOP P4 Wave Cannon Protean Rename',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B7E',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: the_omega_protocol_stackMistake('warn', 1, {
      // Rename this for clarity.
      en: 'Wave Cannon Protean',
      de: 'Wellenkanone Himmelsrichtung',
      fr: 'Position pour le canon',
      ja: '散会波動砲',
      cn: '分散波动炮',
      ko: '산개 파동포',
      tc: '分散波動炮'
    })
  }, {
    id: 'TOP P4 Wave Cannon Protean Two',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B80',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        triggerType: 'Damage',
        text: {
          en: 'Wave Cannon Repeat Protean',
          de: 'Wellenkanone wiederholte Himmelsrichtung',
          fr: 'Position pour le canon répétée',
          ja: '連続散会波動砲',
          cn: '复读分散波动炮',
          ko: '산개 파동포 장판',
          tc: '復讀分散波動炮'
        }
      };
    }
  }, {
    id: 'TOP P4 Wave Cannon Protean Collect',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B7E',
      ...oopsy_common/* playerDamageFields */.np
    }),
    run: (data, matches) => (data.waveCannonProteanCollect ??= []).push(matches)
  }, {
    id: 'TOP P4 Wave Cannon Protean Analyze',
    type: 'Ability',
    // If somebody is dead, people will take more single target proteans.
    // Just mention this so it's obvious why this person died.
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B7E',
      capture: false
    }),
    delaySeconds: 0.5,
    suppressSeconds: 3,
    // netRegex: NetRegexes.ability({ id: ['5779', '7B52'], capture: false }),
    mistake: data => {
      const mistakes = [];
      data.waveCannonProteanCollect ??= [];
      if (data.waveCannonProteanCollect.length === 0) return;

      // Report missing players: this is only possible when somebody is dead,
      // but report it anyway, so it's obvious that "X is dead, Y took two and died".
      const cannonPlayers = data.waveCannonProteanCollect.map(x => x.target);
      for (const player of Object.keys(data.blameId ?? [])) {
        if (cannonPlayers.includes(player)) continue;
        mistakes.push({
          type: 'warn',
          name: player,
          text: {
            en: `Missed Wave Cannon Protean`,
            de: `Verfehlte Wellenkanone Himmelsrichtung`,
            fr: `Canon manqué`,
            ja: '散会波動砲失敗',
            cn: `未被分散波动炮命中`,
            ko: `산개 파동포 놓침`,
            tc: `未被分散波動炮命中`
          }
        });
      }

      // Track anybody double tapped with two "single target" proteans.
      const cannonCount = {};
      const clippedAnotherPlayer = {};
      for (const line of data.waveCannonProteanCollect) {
        cannonCount[line.target] ??= 0;
        if (parseInt(line.targetCount) >= 2) clippedAnotherPlayer[line.target] ??= true;
        cannonCount[line.target]++;
      }
      for (const [player, count] of Object.entries(cannonCount)) {
        // If there's a clip, we'll mention it elsewhere,
        // no need to say "this person took x3 proteans because one person was dead
        // and two people clipped each other".
        if (count === 1 || clippedAnotherPlayer[player]) continue;
        mistakes.push({
          type: 'warn',
          name: player,
          text: {
            en: `Wave Cannon Protean x${count}`,
            de: `Wellenkanone Himmelsrichtung x${count}`,
            fr: `Position pour canon x${count}`,
            ja: `散会波動砲 x${count}`,
            cn: `分散波动炮 x${count}`,
            ko: `산개 파동포 x${count}`,
            tc: `分散波動炮 x${count}`
          }
        });
      }
      return mistakes;
    },
    run: data => data.waveCannonProteanCollect = []
  }, {
    id: 'TOP P4 Wave Cannon Stack Collect',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B7F',
      ...oopsy_common/* playerDamageFields */.np
    }),
    run: (data, matches) => (data.waveCannonStackCollect ??= []).push(matches)
  }, {
    id: 'TOP P4 Wave Cannon Stack Analyze',
    type: 'Ability',
    // Make sure people aren't in two stacks
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7B7F',
      capture: false
    }),
    delaySeconds: 0.5,
    suppressSeconds: 3,
    // netRegex: NetRegexes.ability({ id: ['5779', '7B52'], capture: false }),
    mistake: data => {
      const mistakes = [];
      data.waveCannonStackCollect ??= [];
      if (data.waveCannonStackCollect.length === 0) return;
      const cannonPlayers = data.waveCannonStackCollect.map(x => x.target);
      for (const player of Object.keys(data.blameId ?? [])) {
        if (cannonPlayers.includes(player)) continue;
        mistakes.push({
          type: 'warn',
          blame: player,
          reportId: data.blameId?.[player],
          text: {
            en: `Missed Wave Cannon Stack`,
            de: `Verfehltes Wellenkanone Sammeln`,
            fr: `Package pour le canon manqué`,
            ja: `頭割り波動砲失敗`,
            cn: `未被分摊波动炮命中`,
            ko: `쉐어 파동포 놓침`,
            tc: `未被分攤波動炮命中`
          }
        });
      }
      const cannonCount = {};
      for (const line of data.waveCannonStackCollect ?? []) {
        cannonCount[line.target] ??= 0;
        cannonCount[line.target]++;
      }
      for (const [player, count] of Object.entries(cannonCount)) {
        if (count <= 1) continue;
        mistakes.push({
          type: 'fail',
          blame: player,
          reportId: data.blameId?.[player],
          text: {
            en: `Wave Cannon Stack x${count}`,
            de: `Wellenkanone Sammeln x${count}`,
            fr: `Package canon x${count}`,
            ja: `頭割り波動砲失敗 x${count}`,
            cn: `分摊波动炮 x${count}`,
            ko: `쉐어 파동포 x${count}`,
            tc: `分攤波動炮 x${count}`
          }
        });
      }
      return mistakes;
    },
    run: data => data.waveCannonStackCollect = []
  }, {
    id: 'TOP P5 Hello World Stacks',
    type: 'Ability',
    // This needs to be its own trigger because these are flagged as "instant death" if stacked,
    // which is not included in "playerDamageFields",
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7B8A', '7B89', '8110', '8111']
    }),
    mistake: the_omega_protocol_stackMistake('fail', 1)
  }, {
    id: 'TOP P6 Wave Cannon Exaflare Rename',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['7BAD', '7BAE', '7BAF'],
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        triggerType: 'Damage',
        text: {
          en: 'Exaflare',
          de: 'Exaflare',
          fr: 'ExaBrasier',
          ja: 'エクサフレア',
          cn: '地火',
          ko: '엑사플레어',
          tc: '地火'
        }
      };
    }
  }, {
    id: 'TOP P6 Wave Cannon Protean Rename',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '7BAB',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: the_omega_protocol_stackMistake('fail', 1, {
      // Rename this for clarity.
      en: 'Wave Cannon Protean',
      de: 'Wellenkanone Himmelsrichtung',
      fr: 'Position pour le canon',
      ja: '散会波動砲',
      cn: '分散波动炮',
      ko: '산개 파동포',
      tc: '分散波動炮'
    })
  }]
};
/* harmony default export */ const the_omega_protocol = (the_omega_protocol_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/alliance/jeuno-first-walk.ts


// TODO: Add trash mistakes

const jeuno_first_walk_triggerSet = {
  zoneId: zone_id/* default.JeunoTheFirstWalk */.Z.JeunoTheFirstWalk,
  damageWarn: {
    // Initial trash
    'Jeuno First Walk Goblin Replica Seismostomp': 'A2B4',
    // Circle puddle AoE
    'Jeuno First Walk Vanguard Pathfinder Toss': 'A2B7',
    // Circle puddle AoE

    // Prishe
    'Jeuno First Walk Prishe Knuckle Sandwich Small': '9FEB',
    'Jeuno First Walk Prishe Knuckle Sandwich Mid': '9FEC',
    'Jeuno First Walk Prishe Knuckle Sandwich Big': '9FED',
    'Jeuno First Walk Prishe Brittle Impact Small': '9FEE',
    // Knuckle Sandwich follow-up
    'Jeuno First Walk Prishe Brittle Impact Mid': '9FEF',
    'Jeuno First Walk Prishe Brittle Impact Big': '9FF0',
    'Jeuno First Walk Prishe Banish': '9FF3',
    // Pathing circles
    'Jeuno First Walk Prishe Explosion': '9FFB',
    // Banishga IV orb explosions

    // Pre-Fafnir trash
    'Jeuno First Walk Skimmer Cursed Sphere': 'A2B8',
    // Small circle puddle AoE
    'Jeuno First Walk Bark Spider Spider Web': 'A2BB',
    // Circle puddle AoE
    'Jeuno First Walk Death Cap Agaricus': 'A2BD',
    // Circle puddle AoE
    'Jeuno First Walk Elder Goobhue Scoop': 'A2BF',
    // 90-degree conal AoE

    // Fafnir
    'Jeuno First Walk Ravaging Wind Great Whirlwind Initial': '9BC1',
    // Initial puddle, large roving AoE circles
    'Jeuno First Walk Biting Wind Great Whirlwind': '9BC2',
    // Initial puddle, small roving AoE circles
    'Jeuno First Walk Fafnir Dragon Breath': '9F6F',
    // Fire donut application
    'Jeuno First Walk Fafnir Hurricane Wing Outer Initial 1': '9F78',
    // Giant ring AoE, out to in
    'Jeuno First Walk Fafnir Hurricane Wing Outer Initial 2': '9F79',
    // Large ring AoE, out to in
    'Jeuno First Walk Fafnir Hurricane Wing Outer Initial 3': '9F7A',
    // Mid ring AoE, out to in
    'Jeuno First Walk Fafnir Hurricane Wing Outer Initial 4': '9F7B',
    // Small circle AoE, out to in
    'Jeuno First Walk Fafnir Hurricane Wing Outer Subsequent 1': '9F82',
    // Giant ring AoE, out to in
    'Jeuno First Walk Fafnir Hurricane Wing Outer Subsequent 2': '9F83',
    // Large ring AoE, out to in
    'Jeuno First Walk Fafnir Hurricane Wing Outer Subsequent 3': '9F84',
    // Mid ring AoE, out to in
    'Jeuno First Walk Fafnir Hurricane Wing Outer Subsequent 4': '9F85',
    // Small circle AoE, out to in
    'Jeuno First Walk Fafnir Hurricane Wing Inner Initial 1': '9F7D',
    // Small circle AoE, in to out
    'Jeuno First Walk Fafnir Hurricane Wing Inner Initial 2': '9F7E',
    // Mid ring AoE, in to out
    'Jeuno First Walk Fafnir Hurricane Wing Inner Initial 3': '9F7F',
    // Large ring AoE, in to out
    'Jeuno First Walk Fafnir Hurricane Wing Inner Initial 4': '9F80',
    // Giant ring AoE, in to out
    'Jeuno First Walk Fafnir Hurricane Wing Inner Subsequent 1': '9F87',
    // Small circle AoE, in to out
    'Jeuno First Walk Fafnir Hurricane Wing Inner Subsequent 2': '9F88',
    // Mid ring AoE, in to out
    'Jeuno First Walk Fafnir Hurricane Wing Inner Subsequent 3': '9F89',
    // Large ring AoE, in to out
    'Jeuno First Walk Fafnir Hurricane Wing Inner Subsequent 4': '9F8A',
    // Giant ring AoE, in to out
    'Jeuno First Walk Ravaging Wind Great Whirlwind Pathing': '9F8B',
    // Large roving AoE circles
    'Jeuno First Walk Biting Wind Great Whirlwind Pathing': '9F8C',
    // Small roving AoE circles
    'Jeuno First Walk Fafnir Absolute Terror': '9F8E',
    // Hot Tail
    'Jeuno First Walk Fafnir Winged Terror': '9F90',
    // Hot Wing
    'Jeuno First Walk Fafnir Spike Flail': 'A09A',
    // Tail cleave cone AoE
    'Jeuno First Walk Fafnir Touchdown': 'A09C',
    // Giant chariot AoE

    // Post-Fafnir trash
    'Jeuno First Walk Groundskeeper Isle Drop': 'A2C6',
    // Circle puddle AoE
    'Jeuno First Walk Flamingo Wing Cutter': 'A2C8',
    // 90-degree conal AoE, small

    'Jeuno First Walk Despot Scrapline': 'A1B1',
    // Chariot AoE
    'Jeuno First Walk Despot Isle Drop': 'A2E3',
    // Circle puddle AoE
    'Jeuno First Walk Despot Typhoon': 'A3AE',
    // Dynamo AoE

    // Ark Angels
    'Jeuno First Walk Angels TT Guillotine Initial': 'A068',
    // 270-degree frontal cleave, initial hits
    'Jeuno First Walk Angels TT Guillotine Final': 'A069',
    // 270-degree frontal cleave, final hit
    'Jeuno First Walk Angels MR Havoc Spiral': 'A06F',
    // Cone cyclone AoEs
    'Jeuno First Walk Angels MR Rampage Line': 'A073',
    // Line AoE
    'Jeuno First Walk Angels MR Rampage Circle': 'A075',
    // Giant circle AoE
    'Jeuno First Walk Ark Angels GK Yukikaze': 'A079',
    // Grid AoE
    'Jeuno First Walk Ark Angels GK Kasha': 'A07B',
    // Giant circle AoE
    'Jeuno First Walk Ark Angels GK Concerted Dissolution': 'A07C',
    // Pizza slice AoE
    'Jeuno First Walk Ark Angels GK Lights Chain': 'A07D',
    // Donut AoE
    'Jeuno First Walk Ark Angels HM Mighty Strikes': 'A081',
    // Repeated small circle AoEs
    'Jeuno First Walk Ark Angels HM Cross Reaver': 'A084',
    // Crossed line AoEs

    // Shadow Lord
    'Jeuno First Walk Shadow Lord Right Giga Slash Wide': '9F40',
    'Jeuno First Walk Shadow Lord Left Giga Slash Narrow': '9F41',
    'Jeuno First Walk Shadow Lord Implosion Left Chariot': '9F46',
    'Jeuno First Walk Shadow Lord Implosion Left Cleave': '9F47',
    // Half-room left cleave
    'Jeuno First Walk Shadow Lord Implosion Right Chariot': '9F48',
    'Jeuno First Walk Shadow Lord Implosion Right Cleave': '9F49',
    // Half-room right cleave
    'Jeuno First Walk Shadow Lord Burning Court': '9F4C',
    // Corner circle AoEs, intermission
    'Jeuno First Walk Shadow Lord Burning Moat': '9F4D',
    // Side rectangle AoEs, intermission
    'Jeuno First Walk Shadow Lord Burning Keep': '9F4E',
    // Outer square safe AoE, intermission
    'Jeuno First Walk Shadow Lord Burning Battlements': '9F4F',
    // Inner square safe AoE, intermission
    'Jeuno First Walk Shadow Lord Umbra Smash Exalines': '9F54',
    'Jeuno First Walk Shadow Lord Umbra Smash 1': '9F5D',
    // Initial line AoE 1
    'Jeuno First Walk Shadow Lord Umbra Smash 2': '9F5E',
    // Initial line AoE 2
    'Jeuno First Walk Shadow Lord Umbra Smash 3': '9F5F',
    // Initial line AoE 3
    'Jeuno First Walk Shadow Lord Umbra Smash 4': '9F60',
    // Initial line AoE 4
    'Jeuno First Walk Shadow Lord Umbra Wave': '9F61',
    // Repeated follow-up line AoEs
    'Jeuno First Walk Shadow Lord Soul Binding': 'A22A',
    // Exatrine circles
    'Jeuno First Walk Shadow Lord Front Giga Slash Nightfall': 'A428',
    'Jeuno First Walk Shadow Lord Rear Giga Slash Nightfall': 'A429',
    'Jeuno First Walk Shadow Lord Left Giga Slash Nightfall Wide': 'A42B',
    'Jeuno First Walk Shadow Lord Right Giga Slash Nightfall Narrow': 'A42C',
    'Jeuno First Walk Shadow Lord Right Giga Slash Nightfall Wide': 'A42D',
    'Jeuno First Walk Shadow Lord Left Giga Slash Nightfall Narrow': 'A42E'
  },
  damageFail: {
    // Fafnir
    'Jeuno First Walk Fafnir Horrid Roar Puddles': '9F92',
    // Black + red ground puddles, instant kill

    // Ark Angels
    'Jeuno First Walk TT Meteor': 'A08B',
    // Missed interrupt on TT
    'Jeuno First Walk HM Critical Reaver': 'A13B' // Missed interrupt on HM
  },

  gainsEffectWarn: {
    // Prishe
    'Jeuno First Walk Prishe Thornbite': 'DBD',
    // Touching thorns during Auroral Uppercut

    // Fafnir
    'Jeuno First Walk Fafnir Burns': 'BF9',
    // Standing in dragon breath

    // Post-Fafnir trash
    'Jeuno First Walk Sprinkler Blind': 'DA6',
    // Gaze attack, Mysterious Light

    // Ark Angels
    'Jeuno First Walk Ark Angels GK Petrification': '5E7' // Gaze attack, Gekko
  },

  shareWarn: {
    // Prishe
    'Jeuno First Walk Prishe Holy': 'A003',
    // Light spread circles

    // Fafnir
    'Jeuno First Walk Fafnir Horrid Roar Spread': '9F93',
    'Jeuno First Walk Fafnir Sharp Spike': '9F98',
    // Splashing tank busters

    // Ark Angels
    'Jeuno First Walk Angels MR Cloudsplitter': 'A077',
    // Splashing tank busters

    // Shadow Lord
    'Jeuno First Walk Shadow Lord Unbridled Rage': '9F68',
    // Tank lasers, non-shared
    'Jeuno First Walk Shadow Lord Dark Nova': 'A177' // Dark spread circles
  },

  soloWarn: {
    // Prishe
    'Jeuno First Walk Prishe Nullifying Dropkick': '9FFD',
    // Shared tank buster. Also 9FF1, but we need only one for the mistake.
    'Jeuno First Walk Asuran Fists 1': '9FFE',
    'Jeuno First Walk Asuran Fists 2': '9FFF',
    'Jeuno First Walk Asuran Fists Final': 'A000',
    // Fafnir
    'Jeuno First Walk Fafnir Baleful Breath Final': '9B76',
    // Stack laser, final hit
    'Jeuno First Walk Fafnir Baleful Breath Initial': '9F94',
    // Stack laser, first hit
    'Jeuno First Walk Fafnir Baleful Breath Interstitial': '9F95',
    // Stack laser, hits 2-4

    // Ark Angels
    'Jeuno First Walk Ark Angels GK Dragonfall': 'A07F',
    // Party stacks
    'Jeuno First Walk Ark Angels EV Arrogance Incarnate': 'A088',
    // Multi-hit stack marker

    // Shadow Lord
    'Jeuno First Walk Shadow Lord Impact 1': '9F58',
    // Damning Strikes tower 1
    'Jeuno First Walk Shadow Lord Impact 2': 'A096',
    // Damning Strikes tower 2
    'Jeuno First Walk Shadow Lord Impact 3': 'A097',
    // Damning Strikes tower 3
    'Jeuno First Walk Shadow Lord Echoes Of Agony': 'A3AC' // Multi-hit stack marker
  },

  triggers: [{
    id: 'Jeuno First Walk Prishe Auroral Uppercut Ring Out',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '9FF9',
      capture: true
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const jeuno_first_walk = (jeuno_first_walk_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/dungeon/alexandria.ts

const alexandria_triggerSet = {
  zoneId: zone_id/* default.Alexandria */.Z.Alexandria,
  damageWarn: {
    'Alexandria Protocol E1 Homing Shot': '979A',
    // Circle AoE
    'Alexandria Protocol B9 Siphon': '9AFB',
    // Conal AoE
    'Alexandria Protocol B9 Trunk Smash': '9AFC',
    // Conal AoE

    // Boss 1
    'Alexandria AntivirusX Immune Response Front': '8E1B',
    // Frontal cone
    'Alexandria AntivirusX Immune Response Sides': '8E1D',
    // 270 degree rear cleave
    'Alexandria InterferonR Pathocircuit Purge': '8E1E',
    // Donut AoE
    'Alexandria InterferonC Pathocross Purge': '8E1F',
    // Cross AoE

    'Alexandria Protocol B3 Water II': '9AFD',
    // Circle AoE
    'Alexandria Protocol B8 Laserblade': '9B53',
    // 270 degree giant frontal cleave
    'Alexandria Electric Charge Lightning Bolt': '8F6B',
    // Environmental circle AoE
    'Alexandria Protocol B3 Water III': '9AFE',
    // Large circle AoE
    'Alexandria Protocol F1 Spinning Attack': '979B',
    // Line AoE

    // Boss 2
    'Alexandria Amalgam Supercell Matrix Triangle': '98E0',
    // Triangular half-arena cleave
    'Alexandria Amalgam Centralized Current': '8DE7',
    // Line AoE through hitbox
    'Alexandria Amalgam Split Current 1': '8DEA',
    // Twin line AoE outside hitbox
    'Alexandria Amalgam Split Current 2': '8DEB',
    // Twin line AoE outside hitbox
    'Alexandria Amalgam Supercell Matrix Lasers': '98E2',
    // Multiple wall lasers
    'Alexandria Amalgam Voltburst': '8DF0',
    // Baited circle AoEs
    'Alexandria Ternary Charge Inner': '9956',
    // Inner radiating circle AoE
    'Alexandria Ternary Charge Outer': '9957',
    // Middle radiating circle AoE
    'Alexandria Ternary Charge Corners': '9958',
    // Corner radiating circle AoE

    'Alexandria Protocol B2 Bellowing Grunt': '9B54',
    // Circle AoE
    'Alexandria Protocol S3 Piercing Joust': '979C',
    // Circle AoE
    'Alexandria Protocol S5 Thunderlance': '979D',
    // Line AoE

    // Boss 3
    'Alexandria Eliminator Partition Right Initial': '985F',
    // Half-arena cleave, right side
    'Alexandria Eliminator Partition Right Final': '9946',
    // Half-arena cleave, right side
    'Alexandria Eliminator Partition Left': '9951',
    // Half-arena cleave, left side
    'Alexandria Eliminator Terminate': '9ABF',
    // Hand laser. (The hand's ability is visual only)
    'Alexandria Eliminator Halo Of Destruction': '9AC0',
    // Dynamo AoE. (The Elembit's ability alongside is visual only)
    'Alexandria Eliminator Elimination Explosion': '9947' // Exploding criscross lasers
  },

  damageFail: {
    'Alexandria Eliminator Compression': '8FB9' // Inside blue knockback AoE, boss 3
  },

  gainsEffectWarn: {
    'Alexandria Eliminator Electrocution': 'C01' // Wall touch, boss 3
  },

  shareWarn: {
    'Alexandria AntivirusX Disinfection': '8E21',
    // Tank cleave, boss 1
    'Alexandria Amalgam Static Spark': '8DEE',
    // Spread circles, boss 2
    'Alexandria Eliminator Electray': '994B',
    // Spread circles, boss 3
    'Alexandria Eliminator Light Of Salvation': '8FB0' // Spread lasers, boss 3
  },

  soloWarn: {
    'Alexandria AntivirusX Quarantine': '8E22',
    // Stack marker, boss 1
    'Alexandria Amalgam Superbolt': '8DED',
    // Stack marker, boss 2
    'Alexandria Eliminator Overexposure': '8FAC',
    // Stack laser, boss 3
    'Alexandria Eliminator Light Of Devotion': '8FB3' // Stack laser, boss 3 (intermission only)(???)
  }
};

/* harmony default export */ const alexandria = (alexandria_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/dungeon/ihuykatumu.ts

const ihuykatumu_triggerSet = {
  zoneId: zone_id/* default.Ihuykatumu */.Z.Ihuykatumu,
  damageWarn: {
    // ** Adds, pre-boss 1 ** //
    'Ihuykatumu Bird of Ihuykatumu Filoplumes': '9645',
    // line cleave AoE
    'Ihuykatumu Ihuykatumu Wivre Brow Horn': '9646',
    // line cleave AoE

    // ** Prime Punutiy ** //
    'Ihuykatumu Prime Punutiy Hydrowave': '8E8D',
    // conal AoE
    'Ihuykatumu Prime Punutiy Inhale': '8E90',
    // conal AoE
    'Ihuykatumu Prime Punutiy Bury 1': '8E91',
    // initial circle AoE
    // more AoEs of varying shapes (not individually mapped, sorry)
    'Ihuykatumu Prime Punutiy Bury 2': '8E92',
    'Ihuykatumu Prime Punutiy Bury 3': '8E93',
    'Ihuykatumu Prime Punutiy Bury 4': '8E94',
    'Ihuykatumu Prime Punutiy Bury 5': '8E95',
    'Ihuykatumu Prime Punutiy Bury 6': '8E96',
    'Ihuykatumu Prime Punutiy Bury 7': '8E97',
    'Ihuykatumu Prime Punutiy Bury 8': '8E98',
    'Ihuykatumu Ihuykatumu Flytrap Decay': '8E99',
    // get under
    'Ihuykatumu Prime Punutiy Shore Shaker 1': '8EA3',
    // inner puddle AoE
    'Ihuykatumu Prime Punutiy Shore Shaker 2': '8EA4',
    // inner ring AoE
    'Ihuykatumu Prime Punutiy Shore Shaker 3': '8EA5',
    // outer ring AoE

    // ** Adds, pre-boss 2 ** //
    'Ihuykatumu Ihuykatumu Treant Arboreal Storm': '9B52',
    // circle AoE
    'Ihuykatumu Mimiclot Flagrant Spread': '9702',
    // circle AoE

    // ** Drowsie ** //
    'Ihuykatumu Ihuykatumu Ivy Arise': '8E7E',
    // circle AoEs (ivy drops)
    'Ihuykatumu Ihuykatumu Ivy Wallop Small': '8E7F',
    // ivy line cleave AoE
    'Ihuykatumu Ihuykatumu Ivy Wallop Large': '8E82',
    // ivy line cleave AoE
    'Ihuykatumu Drowsie Sneeze': '8E7B',
    // big conal AoE

    // ** Adds, pre-boss 3 ** //
    'Ihuykatumu Ihuykatumu Puma Megablaster': '9649',
    // conal AoE
    'Ihuykatumu Ihuykatumu Maip Ripper Claw': '964A',
    // conal AoE

    // ** Apollyon ** //
    'Ihuykatumu Apollyon Razor Zephyr': '8DF4',
    // line cleave AoE
    'Ihuykatumu Apollyon Blades of Famine': '8DFA',
    // line cleave AoEs after jumps
    'Ihuykatumu Apollyon Levinsickle': '8DFE',
    // puddle AoEs that drop levin orbs
    'Ihuykatumu Apollyon Levinsickle Spark': '8DFD',
    // puddle AoEs that drop levin orbs
    'Ihuykatumu Apollyon Wing of Lightning': '8DFF',
    // conal AoEs from levin orbs
    'Ihuykatumu Apollyon Wind Sickle': '8E06',
    // get under
    'Ihuykatumu Apollyon Razor Storm': '8E03',
    // room-wide (behind jump is safe) AoE
    'Ihuykatumu Apollyon Biting Wind': '8F99' // line cleave AoE from Whirlwind
  },

  gainsEffectWarn: {
    // ** Prime Punutiy ** //
    'Ihuykatumu Prime Punutiy Resurface': '957' // Heavy - getting hit by initial conal AoE
  },

  shareWarn: {
    // ** Prime Punutiy ** //
    'Ihuykatumu Prodigious Punutiy Punutiy Flop': '8E9C',
    // tethered add - large circle AoE
    'Ihuykatumu Petit Punutiy Punutiy Flop': '8EA1',
    // tethered add - small circle AoE
    'Ihuykatumu Punutiy Hydrowave': '8E9D',
    // tethered add - conal AoE

    // ** Drowsie ** //
    'Ihuykatumu Drowsie Flagrant Spread': '8EAA',
    // spread markers

    // ** Apollyon ** //
    'Ihuykatumu Apollyon Thunnder III': '8E01' // levin spread puddle AoEs
  }
};

/* harmony default export */ const ihuykatumu = (ihuykatumu_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/dungeon/meso-terminal.ts



const meso_terminal_triggerSet = {
  zoneId: zone_id/* default.TheMesoTerminal */.Z.TheMesoTerminal,
  damageWarn: {
    // ** Adds Pre-Boss 1 ** //
    'Meso Terminal Terminal Watchman Electric Shock': 'AC08',
    // Targeted circle AoE
    'Meso Terminal Preserved Medic Alexandrian Gravity': 'AC09',
    // Targeted large circle AoE

    // ** Chirurgeon General ** //
    'Meso Terminal Chirurgeon General Biochemical Front': 'AB1A',
    // Frontal half-room cleave
    'Meso Terminal Chirurgeon General Sterile Sphere Large': 'AB1D',
    // Large circle AoEs with timer
    'Meso Terminal Chirurgeon General Sterile Sphere Small': 'AB1C',
    // Small circle AoEs with timer

    // ** Adds Pre-Boss 2 ** //
    'Meso Terminal Terminal Claw Pressure Wave': 'AC0C',
    // Frontal cone AoE
    'Meso Terminal Preserved Prisoner Rusted Knives': 'AC0D',
    // Chariot AoE
    'Meso Terminal Preserved Prisoner Overpower': 'AC0E',
    // Chariot AoE

    // ** Executioners ** //
    'Meso Terminal Headsman Shackles Of Fate Error': 'AA3F',
    // Leaving the chain circle
    'Meso Terminal Headsman Dismemberment': 'AA43',
    // Line AoE
    'Meso Terminal Headsman Flaying Flail': 'AA48',
    // Triple circle AoE
    'Meso Terminal Headsman Peal Of Judgment': 'AA4A',
    // Pathing lightning AoEs
    'Meso Terminal Headsman Chopping Block': 'AA4B',
    // Chariot AoE
    'Meso Terminal Headsman Execution Wheel': 'AA4C',
    // Dynamo AoE
    'Meso Terminal Pale Headsman Will Breaker': 'AF38',
    // Interruptible tank vuln

    // ** Adds Pre-Boss 3 ** //
    'Meso Terminal Terminal Dataguarder Electray': 'AC10',
    // Frontal line AoE
    'Meso Terminal Preserved Soldier Steelforged Belief': 'AFF2',
    // Chariot AoE

    // ** Immortal Remains ** //
    'Meso Terminal Bygone Aerostat Electray': 'AB22',
    // Crossing line AoEs
    'Meso Terminal Immortal Remains Bombardment Small': 'AB23',
    // Small red circle AoE
    'Meso Terminal Immortal Remains Bombardment Large': 'AB24',
    // Large red circle AoE
    'Meso Terminal Immortal Remains Turmoil': 'AB28',
    // Half-arena cleave (used for both sides)
    'Meso Terminal Immortal Remains Keraunography': 'B078' // Wide purple laser AoEs
  },

  damageFail: {
    'Meso Terminal Immortal Remains Impression Circle': 'AB2A' // Blue knockback circle inside
  },

  gainsEffectWarn: {
    'Meso Terminal Chirurgeon General Bleeding': 'C06' // Death wall contact
  },

  soloWarn: {
    'Meso Terminal Immortal Remains Memory Of The Storm': 'AB2E' // Stack laser
  },

  triggers: [{
    id: 'Meso Terminal Immortal Remains Impression Ring Out',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: 'AB2B',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    id: 'Meso Terminal Executioners Doom Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '11F2'
    }),
    run: (data, matches) => {
      data.hasDoom ??= {};
      data.hasDoom[matches.target] = true;
    }
  }, {
    id: 'Meso Terminal Executioners Doom Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '11F2'
    }),
    run: (data, matches) => {
      data.hasDoom ??= {};
      data.hasDoom[matches.target] = false;
    }
  }, {
    id: 'Meso Terminal Executioners Doom',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '11F2'
    }),
    delaySeconds: (_data, matches) => parseFloat(matches.duration) - 0.5,
    deathReason: (data, matches) => {
      if (!data.hasDoom) return;
      if (!data.hasDoom[matches.target]) return;
      return {
        id: matches.targetId,
        name: matches.target,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const meso_terminal = (meso_terminal_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/dungeon/origenics.ts


// TODO:
//   - Add trigger for missing Herpekaris's Collective Agony (stack)
const origenics_triggerSet = {
  zoneId: zone_id/* default.Origenics */.Z.Origenics,
  damageWarn: {
    // ** Adds, Pre-boss 1 ** //
    'Origenics Eyeclops Glower': '95B4',
    // line cleave

    // ** Herpekaris ** //
    'Origenics Herpekaris Poison Heart Drop': '8E6C',
    // two puddles drop
    'Origenics Herpekaris Pod Burst 1': '9676',
    // initial puddles
    'Origenics Herpekaris Pod Burst 2': '9677',
    // subsequent puddles
    'Origenics Herpekaris Right Sweep': '8E75',
    // right + front cleave
    'Origenics Herpekaris Left Sweep': '8E76',
    // left + front cleave
    'Origenics Herpekaris Rear Sweep': '8E77',
    // rear cleave

    // ** Adds, Pre-boss 2 ** //
    'Origenics Sentry S10 Warning Spike': '8A62',
    // circle
    'Origenics Turret Diffractive Laser': '95BA',
    // conal
    'Origenics Aerostat Incendiary Circle': '95B8',
    // donut
    'Origenics Sentry G10 Grenado Shot': '8A64',
    // circle

    // ** Deceiver ** //
    'Origenics Deceiver Bionic Thrash': '8E12',
    // intercard cleaves
    'Origenics Deceiver Synchroshot': '8E14',
    // android line cleave (8E15 is fake cleave = good)
    'Origenics Deceiver Laser Lash': '8E0E',
    // side turret cleave

    // ** Adds, Pre-boss 3 ** //
    'Origenics Eyeborg Hypercharged Glower': '95B6',
    // line cleave
    'Origenics Eyeborg 100-tonze Swing': '95B7',
    // circle
    'Origenics Automatoise Hard Stomp': '98ED',
    // MASSIVE circle

    // ** Ambrose the Undeparted ** //
    'Origenics Ambrose Overwhelming Charge 1': '9941',
    // frontal cleave
    'Origenics Ambrose Overwhelming Charge 2': '98A0',
    // frontal cleave
    'Origenics Ambrose Psychokinesis': '8E4C',
    // line cleave from cage
    'Origenics Ambrose Rush': '982A' // lance zig-zag
  },

  gainsEffectWarn: {
    'Origenics Electrocution': 'C01' // knocked into 'death' wall (Deceiver or Ambrose)
  },

  shareWarn: {
    'Origenics Herpekaris Poison Heart Spread': '9421',
    // spreads
    'Origenics Deceiver Electray': '95B0',
    // spreads
    'Origenics Ambrose Whorl of the Mind': '8E56' // spreads
  }
};

/* harmony default export */ const origenics = (origenics_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/dungeon/skydeep-cenote.ts


// TODO:
//   - Add trigger for missing Maulskull Deep Thunder stacks
const skydeep_cenote_triggerSet = {
  zoneId: zone_id/* default.TheSkydeepCenote */.Z.TheSkydeepCenote,
  damageWarn: {
    // ** Adds, Pre-boss 1 ** //
    'SkydeepCenote Horror Water III': '9700',
    // circle aoe
    'SkydeepCenote Arrowhead Critical Bite': '9695',
    // conal aoe
    'SkydeepCenote Specter Surrounding Burst': '9696',
    // circle aoe

    // ** Feather Ray ** //
    'SkydeepCenote Feather Ray Worrisome Wave Boss': '8F78',
    // conal from boss
    'SkydeepCenote Feather Ray Worrisome Wave Player': '8F79',
    // conal from player
    'SkydeepCenote Feather Ray Hydro Ring': '8F7D',
    // donut, arena walls
    'SkydeepCenote Feather Ray Burst': '8F82',
    // Rolling Current bubble
    'SkydeepCenote Feather Ray Pop': '8F7E',
    // floating bubble pop

    // ** Adds, Pre-boss 2 ** //
    'SkydeepCenote Living Rock Hard Head': '9698',
    // conal aoe
    'SkydeepCenote Quarrier Spellsword': '9694',
    // conal aoe
    'SkydeepCenote Vessel Turali Thunder II': '9942',
    // circle aoe

    // ** Firearms ** //
    'SkydeepCenote Firearms Thunderlight Burst 1': '96B5',
    // mirror/orb cleave
    'SkydeepCenote Firearms Thunderlight Burst 2': '96B6',
    // mirror/orb cleave
    'SkydeepCenote Firearms Thunderlight Burst 3': '96B7',
    // mirror/orb cleave
    'SkydeepCenote Firearms Thunderlight Burst 4': '96B8',
    // mirror/orb cleave
    'SkydeepCenote Firearms Thunderlight Burst Orb': '8E5D',
    // exploding orb
    'SkydeepCenote Firearms Artillery 1': '9704',
    // exploding tile
    'SkydeepCenote Firearms Artillery 2': '9705',
    // exploding tile
    'SkydeepCenote Firearms Artillery 3': '9706',
    // exploding tile
    'SkydeepCenote Firearms Artillery 4': '9707',
    // exploding tile

    // ** Adds, Pre-boss 3 ** //
    'SkydeepCenote Packer Thunderbreak': '9693',
    // circle aoe

    // ** Maulskull ** //
    'SkydeepCenote Maulskull Stonecarver Initial 1': '8F3E',
    // half-arena cleave
    'SkydeepCenote Maulskull Stonecarver Initial 2': '8F3F',
    // half-arena cleave
    'SkydeepCenote Maulskull Skullcrush': '8F44',
    // puddle AoE (source of knockback)
    'SkydeepCenote Maulskull Landing': '8F4B',
    // circle AoEs
    'SkydeepCenote Maulskull Shatter Middle': '8F4C',
    // middle cleave
    'SkydeepCenote Maulskull Shatter Sides 1': '8F4D',
    // side (angled) cleave
    'SkydeepCenote Maulskull Shatter Sides 2': '8F4E' // side (angled) cleave
  },

  shareWarn: {
    'SkydeepCenote Firearms Thunderlight Flurry': '8E62',
    // spread aoes
    'SkydeepCenote Maulskull Destructive Heat': '8F65',
    // spread aoes
    'SkydeepCenote Maulskull Wrought Fire': '98D2' // tankbuster aoe
  }
};

/* harmony default export */ const skydeep_cenote = (skydeep_cenote_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/dungeon/strayborough-deadwalk.ts


const strayborough_deadwalk_triggerSet = {
  zoneId: zone_id/* default.TheStrayboroughDeadwalk */.Z.TheStrayboroughDeadwalk,
  damageWarn: {
    'Strayborough Deadwalk Stray Memory Grievous Slash': '998A',
    // Conal AoE
    'Strayborough Deadwalk Stray Memory Grim Remembrance': '998C',
    // Giant Conal AoE

    // Boss 1
    'Strayborough Deadwalk Leonogg Falling Nightmare': '8EB4',
    // Falling head circles
    'Strayborough Deadwalk Little Noble Overattachment': '8EB7',
    // Collision with noble adds
    'Strayborough Deadwalk Little Noble Falling Nightmare': '8EB8',
    // Falling head circles
    'Strayborough Deadwalk Leonogg Evil Scheme 1': '9B03',
    // Exaflares initial
    'Strayborough Deadwalk Leonogg Evil Scheme 2': '9B04',
    // Exaflares follow-up
    'Strayborough Deadwalk Leonogg Looming Nightmare 1': '9B06',
    // Chasing puddles, initial
    'Strayborough Deadwalk Leonogg Looming Nightmare 2': '9B07',
    // Chasing puddles, follow-ups
    'Strayborough Deadwalk Leonogg Scream': '8EB3',
    // Pizza slice AoEs

    'Strayborough Deadwalk Stray Memory Trick And Treat': '9796',
    // Circle AoEs from offscreen enemies
    'Strayborough Deadwalk Stray Rascal Ancient Aero': '998E',
    // Line AoE
    'Strayborough Deadwalk Stray Tiger Rush': '9991',
    // Line AoE
    'Strayborough Deadwalk Stray Elephant Trunk Tawse': '998F',
    // Conal AoE
    'Strayborough Deadwalk Skywheel Tilt-a-wheel': '998B',
    // Giant circle AoE, Ferris wheel environmental.

    // Boss 2
    'Strayborough Deadwalk Stray Phantagenitrix Tricksome Treat': '8F70',
    // Genie teacup explosion
    'Strayborough Deadwalk Jack-in-the-pot Mad Tea Party': '8F74',
    // Expanding teacup poison

    'Strayborough Deadwalk Stray Doll Heat Gaze Cone': '9993',
    // Long conal AoE
    'Strayborough Deadwalk Stray Doll Heat Gaze Dynamo': '9994',
    // Dynamo AoE
    'Strayborough Deadwalk Stray Glutton Dark Vomit': '9997',
    // Circle AoE
    'Strayborough Deadwalk Stray Table Set Impact': '8A91',
    // Line AoE

    // Boss 3
    'Strayborough Deadwalk Träumerei Bitter Regret Middle': '9113',
    // Middle line AoE
    'Strayborough Deadwalk Träumerei Bitter Regret Sides': '9114',
    // Side line AoEs
    'Strayborough Deadwalk Träumerei Impact': '910D',
    // Falling wall line AoEs
    'Strayborough Deadwalk Stray Phantagenitrix Bitter Regret': '91DC' // Small ghost line AoEs
  },

  gainsEffectWarn: {
    'Strayborough Deadwalk Stray Doll Terrifying Glance': '417' // Confused. Looking at the doll from within the gaze cone.
  },

  soloFail: {
    'Strayborough Deadwalk Träumerei Ghostcrusher Alone': '9117' // Stack laser
  },

  triggers: [{
    id: 'Strayborough Deadwalk Ill Intent',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '6FD',
      source: 'Stray Geist'
    }),
    // Vulnerability Up
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        triggerType: 'GainsEffect',
        text: {
          en: 'Unstretched tether',
          de: 'Verbindung nicht langgezogen',
          fr: 'Lien non-étiré',
          cn: '连线未拉至变色',
          ko: '충분히 멀어지지 않음',
          tc: '連線未拉至變色'
        }
      };
    }
  }, {
    id: 'Strayborough Deadwalk Ghostduster',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '911C',
      source: 'Träumerei'
    }),
    deathReason: (_data, matches) => {
      return {
        type: 'fail',
        id: matches.targetId,
        name: matches.target,
        triggerType: 'Ability',
        text: matches.ability
      };
    }
  }, {
    id: 'Strayborough Deadwalk Fleshbuster',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '911D',
      source: 'Träumerei'
    }),
    deathReason: (_data, matches) => {
      return {
        type: 'fail',
        id: matches.targetId,
        name: matches.target,
        triggerType: 'Ability',
        text: matches.ability
      };
    }
  }]
};
/* harmony default export */ const strayborough_deadwalk = (strayborough_deadwalk_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/dungeon/the_underkeep.ts

const the_underkeep_triggerSet = {
  zoneId: zone_id/* default.TheUnderkeep */.Z.TheUnderkeep,
  damageWarn: {
    // ---- adds, before boss 1 ---- //
    'Underkeep Sandcake Sandstorm': 'A798',
    'Underkeep Underkeep Hornfly Ultravibration': 'A79B',
    'Underkeep Sandcake Sand Crusher': 'A799',
    'Underkeep Underkeep Sandworm Earthquake': 'A79F',
    // ---- Gargant ---- //
    'Underkeep Gargant Almighty Racket': 'A632',
    'Underkeep Gargant Aerial Ambush': 'A62F',
    // dash
    'Underkeep Gargant Foundational Debris': 'A899',
    'Underkeep Gargant Sphere Shatter 1': 'A631',
    'Underkeep Gargant Sphere Shatter 2': 'A87F',
    // ---- adds, before boss 2 ---- //
    'Underkeep Underkeep Cingulata Hammer Throw': 'A7A1',
    'Underkeep Underkeep Cingulata Flailing Tail': 'A7A0',
    'Underkeep Bygone Subrunner Stone-faced Slaughter': 'A7A4',
    // donut
    'Underkeep Bygone Alpha Sentry Thunderlance': 'A7A6',
    // line
    'Underkeep Bygone Subrunner Dead-eyed Glare': 'A7A3',
    // line
    'Underkeep Bygone Alpha Sentry Piercing Joust': 'A7A5',
    // ---- Soldier S0 ---- //
    'Underkeep Soldier S0 Sector Bisector 1': 'A646',
    'Underkeep Soldier S0 Sector Bisector 2': 'A647',
    'Underkeep Soldier S0 Ordered Fire': 'A64D',
    // ---- adds, before boss 3 ---- //
    'Underkeep Bygone Laser Cannon Electray': 'A7A8',
    'Underkeep Bygone Terror Knight Blazing Torch': 'A7A9',
    'Underkeep Bygone Roadripper Run Amok': 'A7AC',
    'Underkeep Bygone Roadripper Wheeling Shot': 'A79E',
    'Underkeep Bygone Roadripper Electrostrike': 'A7AE',
    // ---- Valia Pira ---- //
    'Underkeep Valia Pira Enforcement Ray': 'A6F1',
    'Underkeep Valia Pira Electray': 'A87A',
    'Underkeep Valia Pira Concurrent Field': 'A619',
    'Underkeep Valia Pira Neutralize Front Lines': 'A6F2'
  },
  shareWarn: {
    'Underkeep Gargant Sedimentary Debris': 'A898',
    'Underkeep Soldier S0 Static Force': 'A64F',
    'Underkeep Soldier S0 Electric Excess': 'A883',
    'Underkeep Valia Pira Electric Field': 'A8FD',
    'Underkeep Valia Pira Hypercharged Light': 'A61C'
  },
  soloWarn: {
    'Underkeep Valia Pira Deterrent Pulse': 'A62C'
  }
};
/* harmony default export */ const the_underkeep = (the_underkeep_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/dungeon/vanguard.ts


// TODO:
//   - Add trigger for missing Protector's Heavy Blast Cannon (stack)
const vanguard_triggerSet = {
  zoneId: zone_id/* default.Vanguard */.Z.Vanguard,
  damageWarn: {
    // ** Adds ** //
    'Vanguard Sentry G7 Spread Shot': '9869',
    // conal aoe
    'Vanguard Sentry R7 Swoop': '94A3',
    // static line cleaves
    'Vanguard Sentry R7 Floater Turn': '9633',
    // static donut aoe
    'Vanguard Sentry R7 Spinning Axle': '986A',
    // circle aoe
    'Vanguard Turret Electrobeam': '94AC',
    // static line cleaves
    'Vanguard Aerostat Incendiary Ring': '9634',
    // donut'

    // ** Vanguard Commander R8 ** //
    'Vanguard VC-R8 Enhanced Mobility Sword CW-R': '8ECF',
    // sword - clockwise, blade right
    'Vanguard VC-R8 Enhanced Mobility Sword CWW-R': '8ED0',
    // sword - counterclock, blade right
    'Vanguard VC-R8 Enhanced Mobility Sword CW-L': '98E4',
    // sword - clockwise, blade left
    'Vanguard VC-R8 Enhanced Mobility Sword CWW-L': '98E5',
    // sword - counterclock, blade left
    'Vanguard VC-R8 Enhanced Mobility Ground CW-R': '8ED3',
    // ground donut - clockwise, blade right
    'Vanguard VC-R8 Enhanced Mobility Ground CWW-L': '8ED4',
    // ground donut - counterclock, blade left
    'Vanguard VC-R8 Enhanced Mobility Ground CWW-R': '9140',
    // ground donut - counterclock, blade right
    'Vanguard VC-R8 Enhanced Mobility Ground CW-L': '9147',
    // ground donut - clockwise, blade left
    'Vanguard VC-R8 Rapid Rotary 1': '8ED5',
    // rotational cleave during Enhanced Mobility
    'Vanguard VC-R8 Rapid Rotary 2': '8ED6',
    // rotational cleave during Enhanced Mobility
    'Vanguard VC-R8 Rapid Rotary 3': '8ED7',
    // rotational cleave during Enhanced Mobility
    'Vanguard VC-R8 Rush': '8ED9',
    // line cleaves (N/S or grid)
    'Vanguard VC-R8 Aerial Offensive': '8EDA',
    // big expanding circle aoe

    // ** Protector ** //
    'Vanguard Protector Shock 1': '9124',
    // ground aoe spam (circles)
    'Vanguard Protector Homing Cannon 2': '9123',
    // ground aoe spam (lines)
    'Vanguard Protector Battery Circuit Initial': '91E7',
    // first conal
    'Vanguard Protector Battery Circuit Followup': '91E0',
    // rotating conal
    'Vanguard Protector Electrowhirl Initial': '91E6',
    // first puddle under boss
    'Vanguard Protector Electrowhirl Followup': '9128',
    // later puddles under boss
    'Vanguard Protector Bombardment': '9868',
    // circle aoes at wall during Battery Circuit
    'Vanguard Protector Blast Cannon': '911F',
    // line cleaves during Acceleration Bomb
    'Vanguard Protector Electrostatic Contact': '9126',
    // running thru fence
    'Vanguard Protector Motion Sensor': '9125',
    // detonating Acceleration Bomb

    // ** Zander the Snakeskinner ** //
    'Vanguard Zander Soulbane Saber': '8EDE',
    // line cleave
    'Vanguard Zander Burst P1': '8EDF',
    // expanding half-arena cleave
    'Vanguard Zander Syntheslean': '914E',
    // initial conal from boss
    'Vanguard Zander Syntheslither 1': '8EE3',
    // conal on slither track
    'Vanguard Zander Syntheslither 2': '8EE4',
    // conal on slither track
    'Vanguard Zander Syntheslither 3': '8EE5',
    // conal on slither track
    'Vanguard Zander Syntheslither 4': '8EE6',
    // conal on slither track
    'Vanguard Zander Syntheslither 5': '8EE7',
    // conal on slither track
    'Vanguard Zander Syntheslither 6': '8EE8',
    // conal on slither track
    'Vanguard Zander Syntheslither 7': '8EE9',
    // conal on slither track
    'Vanguard Zander Syntheslither 8': '8EEA',
    // conal on slither track
    'Vanguard Zander Syntheslither 9': '8EEB',
    // conal on slither track
    'Vanguard Zander Syntheslither 10': '8EEC',
    // conal on slither track
    'Vanguard Zander Slitherbane Foreguard Half': '8EED',
    // half-arena frontal cleave
    'Vanguard Zander Slitherbane Rearguard Half': '8EEE',
    // full-arena backward cleave
    'Vanguard Zander Slitherbane Foreguard Line': '8EF0',
    // line cleave
    'Vanguard Zander Slitherbane Rearguard Line': '8EF1',
    // line cleave
    'Vanguard Zander Burst P2': '8EEF' // expanding half-arena cleave
  },

  shareWarn: {
    'Vanguard VC-R8 Electrosurge': '8EDD',
    // spreads
    'Vanguard Protector Tracking Bolt': '91E5',
    // spreads
    'Vanguard Zander Soulbane Shock': '9422' // spreads
  }
};

/* harmony default export */ const vanguard = (vanguard_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/dungeon/worqor-zormor.ts

// TODO: Add trigger for missed Kahderyor Crystalline Crush (boss 2 stack tower)
// TODO: Add trigger to capture non-zero damage for Wind Shot (meaning hit by ground aoe)
// TODO: Add trigger for missed Sledgehammer (boss 3 stack)
const worqor_zormor_triggerSet = {
  zoneId: zone_id/* default.WorqorZormor */.Z.WorqorZormor,
  damageWarn: {
    // ** Adds Pre-Boss 1 ** //
    'WorqorZormor Snowarbler Clasp': '94A0',
    // conal aoe
    'WorqorZormor Biast Levinshower': '767B',
    // conal aoe
    'WorqorZormor Anala Ring of Fire': '8E34',
    // circle aoe
    'WorqorZormor Myrrlith Orogenic Storm': '94A9',
    // circle aoe

    // ** Ryoqor Terteh ** //
    'WorqorZormor Ryoqor Ice Scream': '8DAE',
    // quarter-arena cleaves
    'WorqorZormor Ryoqor Frozen Swirl': '8DB0',
    // circle aoe cleaves
    'WorqorZormor Ryoqor Snowball': '8DB6',
    // line cleave

    // ** Adds Pre-Boss 2 ** //
    'WorqorZormor Sloth Snowdust Sweep': '94AA',
    // conal aoe
    'WorqorZormor Sloth Sweeping Gouge': '94AB',
    // conal aoe

    // ** Kahderyor ** //
    'WorqorZormor Kahderyor Wind Shot': '8DC8',
    // player-targeted donut aoes
    'WorqorZormor Kahderyor Earthen Shot Ground': '8DCB',
    // ground aoes
    'WorqorZormor Kahderyor Crystalline Storm': '8DC2',
    // lines on ground
    'WorqorZormor Kahderyor Stalagmite Circle': '8DC5',
    // inner puddle aoe during gaze mech
    'WorqorZormor Kahderyor Cyclonic Ring': '8DC6',
    // outer donut aoe during gaze mech

    // ** Adds Pre-Boss 3 ** //
    'WorqorZormor Tulichu Deeproot': '95B1',
    // circle aoe
    'WorqorZormor Iguana Languid Lap': '996E',
    // conal aoe
    'WorqorZormor Pitcher Weed Nepenthic Plunge': '996F',
    // conal aoe
    'WorqorZormor Tulichu Odious Lunge': '95B2',
    // circle aoe

    // ** Gurfurlur ** //
    'WorqorZormor Gurfurlur Lithic Impact': '8DCE',
    // standing where a tile will drop
    'WorqorZormor Gurfurlur Allfire 1': '8DCF',
    // inner fire tiles
    'WorqorZormor Gurfurlur Allfire 2': '8DD0',
    // middle fire tiles
    'WorqorZormor Gurfurlur Allfire 3': '8DD1',
    // outer fire tiles
    'WorqorZormor Gurfurlur Whirlwind': '8DD7' // persistent wind aoes
  },

  gainsEffectWarn: {
    'WorqorZormor Kahderyor Confused': '0B' // getting hit by gaze mech
  },

  shareWarn: {
    'WorqorZormor Ryoqor Sparkling Sprinkling': '8DB9',
    // spreads
    'WorqorZormor Kahderyor Earthen Shot Player': '8DC7',
    // spreads
    'WorqorZormor Gurfurlur Volcanic Drop': '8DD2' // spreads
  }
};

/* harmony default export */ const worqor_zormor = (worqor_zormor_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/dungeon/yuweyawata.ts


// TODO: trash triggers

const yuweyawata_triggerSet = {
  zoneId: zone_id/* default.YuweyawataFieldStation */.Z.YuweyawataFieldStation,
  damageWarn: {
    // ---------------- Lindblum Zaghnal ---------------- //
    'Yuweyawata Lindblum Zaghnal Line Voltage 1': '9EB1',
    // line aoes from pillar
    'Yuweyawata Lindblum Zaghnal Cell Shock': '9EB2',
    // circular pillar falling aoe
    'Yuweyawata Lindblum Zaghnal Line Voltage 2': '9EB3',
    // fat line aoes from pillar
    'Yuweyawata Lindblum Zaghnal Lightning Bolt': '9EBE',
    // circular ground aoe
    'Yuweyawata Lindblum Zaghnal Line Voltage 3': 'A0A2',
    // line aoes from pillar

    // ---------------- Overseer Kanilokka ---------------- //
    'Yuweyawata Overseer Kanilokka Soulweave 1': '9EC1',
    // line aoe
    'Yuweyawata Overseer Kanilokka Soulweave 2': '9EC2',
    // line aoe
    'Yuweyawata Overseer Kanilokka Phantom Flood': '9EC4',
    // donut aoe
    'Yuweyawata Overseer Kanilokka Dark II 1': '9ED0',
    // cone aoe
    'Yuweyawata Overseer Kanilokka Dark II 2': '9ED1',
    // cone aoe

    // ---------------- Lunipyati ---------------- //
    'Yuweyawata Lunipyati Leaping Earth': '9E9E',
    // radiating spiral aoes
    'Yuweyawata Lunipyati Boulder Dance 1': '9E9F',
    // source aoe
    'Yuweyawata Lunipyati Boulder Dance 2': '9EA0',
    // target aoe
    'Yuweyawata Lunipyati Boulder Dance 3': '9EA1',
    // continuous damage from standing in aoe
    'Yuweyawata Lunipyati Rock Blast': '9EA3',
    // chasing aoe from boss around edge of arena
    'Yuweyawata Lunipyati Raging Claw 1': '9EA5',
    // first frontal cleave
    'Yuweyawata Lunipyati Raging Claw 2': '9EA6' // follow-up frontal cleaves
  },

  damageFail: {
    // ---------------- Lindblum Zaghnal ---------------- //
    'Yuweyawata Lindblum Zaghnal Electrify': '9EBA',
    // raidwide from adds (fail to kill in time)

    // ---------------- Lunipyati ---------------- //
    'Yuweyawata Lunipyati Crater Carve': '9E9D' // creates hole in center of arena
  },

  gainsEffectFail: {
    // ---------------- Overseer Kanilokka ---------------- //
    'Yuweyawata Overseer Kanilokka Bleeding 1': 'C05',
    // walked into bleed wall
    'Yuweyawata Overseer Kanilokka Bleeding 2': 'C06',
    // walked into bleed wall
    'Yuweyawata Overseer Kanilokka Damage Down 1': '1112',
    // walked into bleed wall
    'Yuweyawata Overseer Kanilokka Damage Down 2': '1113',
    // walked into bleed wall
    'Yuweyawata Overseer Kanilokka Heavy': '10F5',
    // walked into bleed wall

    // ---------------- Lunipyati ---------------- //
    'Yuweyawata Lunipyati Sludge 1': 'BFF',
    // walked into bleed wall
    'Yuweyawata Lunipyati Sludge 2': 'C00' // walked into bleed wall
  },

  shareWarn: {
    // ---------------- Lindblum Zaghnal ---------------- //
    'Yuweyawata Lindblum Zaghnal Lightning Storm': '9EBD',
    // spread

    // ---------------- Overseer Kanilokka ---------------- //
    'Yuweyawata Overseer Kanilokka Telltale Tears': '9EC9',
    // spread

    // ---------------- Lunipyati ---------------- //
    'Yuweyawata Lunipyati Jagged Edge': '9EA7' // spread
  },

  soloWarn: {
    // ---------------- Overseer Kanilokka ---------------- //
    'Yuweyawata Overseer Kanilokka Soul Douse': '9ECB',
    // stack

    // ---------------- Lunipyati ---------------- //
    'Yuweyawata Lunipyati Turali Stone IV': '9EA8' // stack
  }
};

/* harmony default export */ const yuweyawata = (yuweyawata_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r10s.ts



const r10s_triggerSet = {
  zoneId: zone_id/* default.AacHeavyweightM2Savage */.Z.AacHeavyweightM2Savage,
  damageWarn: {
    'R10S Alley-oop Double-dip Follow-up': 'B5DF',
    'R10S Reverse Alley-oop Follow-up': 'B5E2',
    'R10S Sickest Take-off': 'B5CE',
    'R10S Deep Varial': 'B5D3',
    'R10S Steam Burst': 'B5FB',
    // Orb explosion
    'R10S Flame Floater Split': 'B5BF'
  },
  gainsEffectWarn: {
    'R10S Burns': 'BFA' // standing in the fire, 15s
  },

  shareWarn: {
    'R10S Flame Floater 1': 'B5BB',
    'R10S Flame Floater 2': 'B5BC',
    'R10S Flame Floater 3': 'B5BD',
    'R10S Flame Floater 4': 'B5BE',
    'R10S Alley-oop Inferno': 'B5C1',
    // Red Hot spread
    'R10S Awesome Splash 1': 'B5CF',
    // Deep Blue spread
    'R10S Awesome Splash 2': 'B5D7',
    // Deep Blue spread after Fire/Watersnaking
    'R10S Alley-oop Double-dip First Hit': 'B5DE',
    'R10S Reverse Alley-oop First Hit': 'B5E1',
    'R10S Blasting Snap': 'B5F1',
    // Red Hot spread during Insane Air
    'R10S Plunging Snap': 'B5F2',
    // Deep Blue spread during Insane Air
    'R10S Hot Aerial 1': 'B91E',
    'R10S Hot Aerial 2': 'B91F',
    'R10S Hot Aerial 3': 'B920',
    'R10S Hot Aerial 4': 'B921',
    'R10S Xtreme Wave Deep Blue': 'B5D2' // Deep Blue's Xtreme Wave
  },

  shareFail: {
    'R10S Deep Impact': 'ADC6',
    // Deep Blue tankbuster
    'R10S Vertical Blast': 'B5F9',
    // Red Hot tankbuster during Insane Air
    'R10S Vertical Plunge': 'B5FA' // Deep Blue tankbuster during Insane Air
  },

  initData: () => {
    return {
      hasWateryGrave: {}
    };
  },
  triggers: [{
    id: 'R10S Watery Grave Gain',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '12DD'
    }),
    run: (data, matches) => {
      data.hasWateryGrave[matches.target] = true;
    }
  }, {
    id: 'R10S Watery Grave Lose',
    type: 'LosesEffect',
    netRegex: netregexes/* default.losesEffect */.ZP.losesEffect({
      effectId: '12DD'
    }),
    run: (data, matches) => {
      data.hasWateryGrave[matches.target] = false;
    }
  }, {
    // Share warn for Red Hot's Xtreme Wave, except players affected by Watery Grave.
    id: 'R10S Xtreme Wave Red Hot',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: 'B5D1',
      ...oopsy_common/* playerDamageFields */.np
    }),
    condition: (data, matches) => !data.hasWateryGrave[matches.target],
    mistake: (data, matches) => {
      const numTargets = parseInt(matches.targetCount);
      const numWateryGrave = Object.values(data.hasWateryGrave).filter(Boolean).length;
      if (isNaN(numTargets) || numTargets <= numWateryGrave + 1) return;
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: (0,oopsy_common/* GetShareMistakeText */.gG)(matches.ability, numTargets - numWateryGrave)
      };
    }
  }, {
    id: 'R10S Watery Grave Gains Vulnerability Down',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '3A1',
      target: 'Watery Grave'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }],
  timelineReplace: [{
    locale: 'de',
    replaceSync: {
      'Watery Grave': 'Wasserkerker'
    }
  }, {
    locale: 'fr',
    replaceSync: {
      'Watery Grave': 'prison aquatique'
    }
  }, {
    locale: 'ja',
    replaceSync: {
      'Watery Grave': '水牢'
    }
  }, {
    locale: 'cn',
    replaceSync: {
      'Watery Grave': '水牢'
    }
  }, {
    locale: 'ko',
    replaceSync: {
      'Watery Grave': '수중 감옥'
    }
  }]
};
/* harmony default export */ const r10s = (r10s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r11n.ts


// The central orange line during Flatliner
// and the outer orange lines during the Crown of Arcadia
// that closes the split platform phase do not deal any damage.
// They are purely visuals to indicate the platform is disappearing,
// similar to ARR Titan.
const r11n_triggerSet = {
  zoneId: zone_id/* default.AacHeavyweightM3 */.Z.AacHeavyweightM3,
  damageWarn: {
    'R11N Smashdown Axe': 'B3BB',
    // chariot AoE
    'R11N Smashdown Scythe': 'B3BD',
    // dynamo AoE
    'R11N Smashdown Sword': 'B3BF',
    // cross AoE
    'R11N Cometite': 'B3CA',
    // Void Stardust puddle
    'R11N Assault Evolved Axe': 'B3CE',
    // tether chariot AoE
    'R11N Assault Evolved Scythe': 'B3CF',
    // tether dynamo AoE
    'R11N Assault Evolved Sword': 'B3D0',
    // tether cross AoE
    'R11N Explosion Sword Quiver Diagonal': 'B3D3',
    // line AoEs after Dance of Domination
    'R11N Charybdis Knockback': 'B3D8',
    // tornado puddles, Assault Apex
    'R11N Powerful Gust': 'B3D9',
    // tornado cones, Assault Apex
    'R11N Unmitigated Explosion 1': 'B3DF',
    // meteor tower failure
    'R11N Unmitigated Explosion 2': 'B3E1',
    // meteor explosion (tank tether failure?)
    'R11N Shockwave': 'B3E6',
    // LoS failure on Double Tyrannhilation
    'R11N Majestic Meteor': 'B3EA',
    // meteor puddles
    'R11N Majestic Meteorain': 'B3EB',
    // portal meteor lasers
    'R11N Unmitigated Explosion Knockback Towers': 'B3EE',
    // knockback tower failure
    'R11N Arcadion Avalanche West Toss South': 'B3F0',
    // platform toss, east platform safe, north safe
    'R11N Arcadion Avalanche West Toss North': 'B3F2',
    // platform toss, east platform safe, south safe
    'R11N Arcadion Avalanche East Toss North': 'B3F4',
    // platform toss, west platform safe, south safe
    'R11N Arcadion Avalanche East Toss South': 'B3F6',
    // platform toss, west platform safe, north safe
    'R11N Fire And Fury Front': 'B3F8',
    // conal AoE, Majestic Meteor
    'R11N Fire And Fury Back': 'B3F9',
    // conal AoE, Majestic Meteor
    'R11N Explosion Great Wall Of Fire': 'B3FD',
    // tank laser follow-up
    'R11N Assault Apex Axe': 'B540',
    // 6x charge sequence chariot AoE
    'R11N Assault Apex Scythe': 'B541',
    // 6x charge sequence dynamo AoE
    'R11N Assault Apex Sword': 'B542',
    // 6x charge sequence cross AoE
    'R11N Explosion Sword Quiver Orthogonal': 'B7B9' // line AoEs after Dance of Domination
  },

  shareWarn: {
    'R11N Comet Initial': 'B3C9',
    // first Void Stardust spread
    'R11N Comet Subsequent': 'B3CB',
    // second/third Void Stardust spread
    'R11N Impact': 'B3C2' // purple spread circle
  },

  soloWarn: {
    'R11N Raw Steel': 'B3C1',
    // shared cleave
    'R11N Massive Meteor Stack': 'B3E3',
    // healer stack
    'R11N Massive Heartbreak Kick Initial': 'B3FF',
    // stack tower hit 1
    'R11N Massive Heartbreak Kick Subsequent': 'B400',
    // stack tower hits 2-6
    'R11N Great Wall Of Fire': 'B3FB' // laser buster
  },

  triggers: [{
    id: 'R11N Flatliner Ring Out',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['B3E8', 'BA8F']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter gestoßen!',
          fr: 'Repoussé(e) !',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백됨!',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    id: 'R11N Explosion Ring Out',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: 'B3ED'
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed off!',
          de: 'Runter gestoßen!',
          fr: 'Repoussé(e) !',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백됨!',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const r11n = (r11n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r11s.ts

const r11s_triggerSet = {
  zoneId: zone_id/* default.AacHeavyweightM3Savage */.Z.AacHeavyweightM3Savage,
  damageWarn: {
    'R11S Assault Evolved Axe Chariot': 'B418',
    'R11S Assault Evolved Scythe Donut': 'B419',
    'R11S Assault Evolved Sword Cross AoE': 'B41A',
    'R11S Cometite': 'B413',
    'R11S Dance of Domination Explosion': 'B420',
    // White line AoE
    'R11S Great Wall of Fire Explosion': 'B42E',
    // Great Wall of Fire follow-up
    'R11S Fire and Fury 1': 'B430',
    'R11S Fire and Fury 2': 'B431',
    'R11S Orbital Omen': 'B433',
    'R11S Comet Explosion': 'B438',
    'R11S Majestic Meteor 1': 'B441',
    'R11S Majestic Meteor 2': 'B455',
    // Majestic Meteor during Ecliptic Stampede
    'R11S Majestic Meteorain': 'B442'
  },
  damageFail: {
    'R11S Shockwave': 'B43D',
    // Triple Tyrannhilation damage
    'R11S Arcadion Avalanche 1': 'B44B',
    'R11S Arcadion Avalanche 2': 'B44D',
    'R11S Arcadion Avalanche 3': 'B44F',
    'R11S Arcadion Avalanche 4': 'B451'
  },
  shareWarn: {
    'R11S Impact': 'B40C',
    // Raw Steel Trophy axe spread
    'R11S Sweeping Victory': 'B41C',
    // Assault Evolved scythe protean
    'R11S Comet': 'B414',
    'R11S Powerful Gust': 'B427',
    'R11S Majestic Meteowrath 1': 'B443',
    'R11S Majestic Meteowrath 2': 'B459',
    // Majestic Meteowrath during Ecliptic Stampede
    'R11S Fire Breath': 'B447',
    'R11S Atomic Impact': 'B454',
    'R11S Cosmic Kiss': 'B456' // Solo tower during Ecliptic Stampede
  },

  shareFail: {
    'R11S Raw Steel Scythe': 'B40F' // Raw Steel scythe tankbuster
  },

  soloWarn: {
    'R11S Knockback Tower Explosion': 'B444',
    'R11S Weighty Impact': 'B457' // Duo tower during Ecliptic Stampede
  }
};

/* harmony default export */ const r11s = (r11s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r1n.ts


// TODO:
//   - Add trigger for missed Clawful (stack)
//   - Add trigger for missed Oveershadow (stack)
const r1n_triggerSet = {
  zoneId: zone_id/* default.AacLightHeavyweightM1 */.Z.AacLightHeavyweightM1,
  damageWarn: {
    'R1N One-two Paw Right First': '930A',
    // half-room cleaves (R->L)
    'R1N One-two Paw Left Second': '930B',
    // half-room cleaves (R->L)
    'R1N One-two Paw Left First': '930E',
    // half-room cleaves (L->R)
    'R1N One-two Paw Right Second': '930D',
    // half-room cleaves (L->R)
    'R1N Black Cat Crossing First': '9311',
    // first set of cone cleaves
    'R1N Black Cat Crossing Second': '9312',
    // second set of cone cleaves
    'R1N Mouser': '94A5',
    // Tile hit (but not yet broken)
    'R1N Predaceous Pounce Line': '9964',
    // line AoE telegraphing next jump
    'R1N Predaceous Pounce Jump': '9931',
    // circle AoE
    'R1N Leaping One-two Paw East Right': '9324',
    // jump + arena cleaves
    'R1N Leaping One-two Paw East Left': '9325',
    // jump + arena cleaves
    'R1N Leaping One-two Paw West Right': '9327',
    // jump + arena cleaves
    'R1N Leaping One-two Paw West Left': '9328',
    // jump + arena cleaves
    'R1N Leaping Black Cat Crossing First': '932C',
    // jump + first set of cone cleaves
    'R1N Leaping Black Cat Crossing Second': '932D' // jump + second set of cone cleaves
  },

  shareWarn: {
    'R1N Grimalkin Gale': '933F' // spread circle AoEs
  }
};

/* harmony default export */ const r1n = (r1n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r1s.ts

const r1s_triggerSet = {
  zoneId: zone_id/* default.AacLightHeavyweightM1Savage */.Z.AacLightHeavyweightM1Savage,
  damageWarn: {}
};
/* harmony default export */ const r1s = (r1s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r2n.ts

// TODO:
//  - Add trigger for missed Drop of Venom (stack)
//  - Add trigger for missed Heartsick (light-party stack)
const r2n_triggerSet = {
  zoneId: zone_id/* default.AacLightHeavyweightM2 */.Z.AacLightHeavyweightM2,
  damageWarn: {
    'R2N Honey Beeline Normal': '9B39',
    // line cleave
    'R2N Tempting Twist Normal': '9B3A',
    // donut
    'R2N Honey Beeline Poison': '9B3B',
    // line cleave => poison clouds
    'R2N Tempting Twist Poison': '9B3C',
    // donut => poison clouds
    'R2N Poison Cloud Splinter': '916E',
    // follow-up circle AoEs from poison clouds

    'R2N Blow Kiss': '9173',
    // frontal cleave
    'R2N Loveseeker': '9AC1',
    // large point-blank circle AoE
    'R2N Heartstruck Small': '9175',
    // small circle AoE
    'R2N Heartstruck Medium': '9176',
    // medium circle AoE
    'R2N Heartstruck Large': '9177',
    // large circle AoE
    'R2N Sweetheart Splinter': '917C',
    // hit by free-floating heart

    'R2N Blinding Love Rotating': '9A65',
    // rotating line cleaves
    'R2N Blinding Love Fixed': '9A66' // fixed (hour-glass) line cleaves
  },

  gainsEffectWarn: {
    'R2N Fatal Attraction': 'F50' // 3 hearts
  },

  shareWarn: {
    'R2N Heartsore': '917A',
    // spread AoEs
    'R2N Honeyed Breeze': '9168',
    // buster cleaves
    'R2N Splash of Venom': '916F' // spread AoEs during poison phase
  }
};

/* harmony default export */ const r2n = (r2n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r2s.ts

const r2s_triggerSet = {
  zoneId: zone_id/* default.AacLightHeavyweightM2Savage */.Z.AacLightHeavyweightM2Savage,
  damageWarn: {}
};
/* harmony default export */ const r2s = (r2s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r3n.ts

// TODO:
//   - Add trigger for missing Brutal Burn (stack)
//   - Add trigger for Knuckle Sandwich (shared buster)
const r3n_triggerSet = {
  zoneId: zone_id/* default.AacLightHeavyweightM3 */.Z.AacLightHeavyweightM3,
  damageWarn: {
    'R3N Brutal Lariat East': '9AD7',
    // half-room+ cleave
    'R3N Brutal Lariat West': '9AD6',
    // half-room+ cleave
    'R3N Murderous Mist': '93B5',
    // 270 frontal cleave
    'R3N Fire Spin Initial': '9B58',
    // rotating cleave
    'R3N Fire Spin Subsequent': '9B59',
    // rotating cleave
    'R3N Self-Destruct Short': '93B8',
    // bomb circle AoEs
    'R3N Self-Destruct Long': '93B9',
    // bomb circle AoEs

    'R3N Lariat Combo West First': '9AE4',
    // half-room+ cleave
    'R3N Lariat Combo East First': '9AE5',
    // half-room+ cleave
    'R3N Lariat Combo East Subsequent': '9AE6',
    // half-room+ cleave
    'R3N Lariat Combo West Subsequent': '9AE7',
    // half-room+ cleave

    'R3N Infernal Spin Initial': '9B5A',
    // rotating cleave
    'R3N Infernal Spin Subsequent': '9B5B',
    // rotating cleave
    'R3N Explosive Rain Inner': '93CD',
    // inner ring (circle AoE)
    'R3N Explosive Rain Middle': '93CE',
    // middle ring (donut AoE)
    'R3N Explosive Rain Outer': '93CF',
    // outer ring (donut AoE)
    'R3N Explosive Rain Baited': '968D' // baited circle AoEs
  },

  gainsEffectWarn: {
    'R3N Burns': 'BF9' // walking into wall
  }
};

/* harmony default export */ const r3n = (r3n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r3s.ts

const r3s_triggerSet = {
  zoneId: zone_id/* default.AacLightHeavyweightM3Savage */.Z.AacLightHeavyweightM3Savage,
  damageWarn: {}
};
/* harmony default export */ const r3s = (r3s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r4n.ts

// TODO:
//  - Add trigger for missing Wicked Bolt (stack)
//  - Add trigger for missing Soaring Soulpress (stack)
//  - Do something more with Stampeding Thunder? 3+ hits?
const r4n_triggerSet = {
  zoneId: zone_id/* default.AacLightHeavyweightM4 */.Z.AacLightHeavyweightM4,
  damageWarn: {
    'R4N Sidewise Spark Right 1': '92BC',
    // half-room cleave
    'R4N Sidewise Spark Left 1': '92BD',
    // half-room cleave
    'R4N Sidewise Spark East': '92BE',
    // half-room cleave
    'R4N Sidewise Spark West': '92BF',
    // half-room cleave
    'R4N Replica Sidewise Spark Left': '9A0F',
    // half-room cleave
    'R4N Replica Sidewise Spark Right': '9A05',
    // half-room cleave

    // The Wicked Cannon ids are all over the place... /shrug
    'R4N Wicked Cannon Initial': '4E40',
    // first cannon, can be N or S
    'R4N Wicked Cannon Subsequent North': '9BAC',
    // not the first or last cannon, hits N
    'R4N Wicked Cannon Subsequent South': '9BBE',
    // not the first or last cannon, hits S
    'R4N Wicked Cannon Final South': '92AE',
    // last cannon, hits S
    'R4N Wicked Cannon Final North': '92AF',
    // last cannon, hits N

    'R4N Thunderslam': '92C6',
    // baited circle AoEs
    'R4N Bewitching Flight': '92B8',
    // line cleaves from wings
    'R4N Burst': '92B9',
    // exploding lines left behind by wings
    'R4N Witch Hunt': '92B6' // chasing circle AoEs
  },

  damageFail: {
    'R4N Stampeding Thunder Final': '8D36' // final hit that destroys floor
  },

  shareWarn: {
    'R4N Wicked Jolt': '92C8',
    // buster line cleave
    'R4N Thunderstorm': '92C5' // spread circle AoEs
  }
};

/* harmony default export */ const r4n = (r4n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r4s.ts

const r4s_triggerSet = {
  zoneId: zone_id/* default.AacLightHeavyweightM4Savage */.Z.AacLightHeavyweightM4Savage,
  damageWarn: {}
};
/* harmony default export */ const r4s = (r4s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r5n.ts

const r5n_triggerSet = {
  zoneId: zone_id/* default.AacCruiserweightM1 */.Z.AacCruiserweightM1,
  damageWarn: {}
};
/* harmony default export */ const r5n = (r5n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r5s.ts

const r5s_triggerSet = {
  zoneId: zone_id/* default.AacCruiserweightM1Savage */.Z.AacCruiserweightM1Savage,
  damageWarn: {}
};
/* harmony default export */ const r5s = (r5s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r6n.ts

const r6n_triggerSet = {
  zoneId: zone_id/* default.AacCruiserweightM2 */.Z.AacCruiserweightM2,
  damageWarn: {}
};
/* harmony default export */ const r6n = (r6n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r6s.ts

const r6s_triggerSet = {
  zoneId: zone_id/* default.AacCruiserweightM2Savage */.Z.AacCruiserweightM2Savage,
  damageWarn: {}
};
/* harmony default export */ const r6s = (r6s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r7n.ts

const r7n_triggerSet = {
  zoneId: zone_id/* default.AacCruiserweightM3 */.Z.AacCruiserweightM3,
  damageWarn: {}
};
/* harmony default export */ const r7n = (r7n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r7s.ts

const r7s_triggerSet = {
  zoneId: zone_id/* default.AacCruiserweightM3Savage */.Z.AacCruiserweightM3Savage,
  damageWarn: {}
};
/* harmony default export */ const r7s = (r7s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r8n.ts

const r8n_triggerSet = {
  zoneId: zone_id/* default.AacCruiserweightM4 */.Z.AacCruiserweightM4,
  damageWarn: {}
};
/* harmony default export */ const r8n = (r8n_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r8s.ts

const r8s_triggerSet = {
  zoneId: zone_id/* default.AacCruiserweightM4Savage */.Z.AacCruiserweightM4Savage,
  damageWarn: {}
};
/* harmony default export */ const r8s = (r8s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/raid/r9s.ts

const r9s_triggerSet = {
  zoneId: zone_id/* default.AacHeavyweightM1Savage */.Z.AacHeavyweightM1Savage,
  damageWarn: {
    'R9S Half Moon 1': 'B377',
    'R9S Half Moon 2': 'B378',
    'R9S Half Moon 3': 'B379',
    'R9S Half Moon 4': 'B37A',
    'R9S Half Moon 5': 'B37B',
    'R9S Half Moon 6': 'B37C',
    'R9S Half Moon 7': 'B37D',
    'R9S Half Moon 8': 'B37E',
    'R9S Vamp Stomp': 'B374',
    'R9S Blast Beat AoE': 'B375',
    'R9S Coffinfiller 1': 'B368',
    'R9S Coffinfiller 2': 'B369',
    'R9S Coffinfiller 3': 'B36A',
    'R9S Aetherletting Cone 1': 'B38F',
    'R9S Aetherletting Cone 2': 'B390',
    'R9S Aetherletting Cone 3': 'B391',
    'R9S Aetherletting Cross AoE': 'B393',
    'R9S Pulping Pulse': 'B373',
    'R9S Sanguine Scratch 1': 'B3A4',
    'R9S Sanguine Scratch 2': 'B3A5',
    'R9S Sanguine Scratch 3': 'B3A6',
    'R9S Sanguine Scratch 4': 'B3A7',
    'R9S Breakdown Drop 1': 'B3A8',
    'R9S Breakdown Drop 2': 'B3AA',
    'R9S Breakwing Beat 1': 'B3A9',
    'R9S Breakwing Beat 2': 'B3AB'
  },
  damageFail: {
    'R9S Dead Wake': 'B367' // Coffinmaker advance
  },

  gainsEffectWarn: {
    'R9S Flesh Wound': 'B7E',
    // chakrams, saws
    'R9S Electrocution': 'C02' // Deadly Doornail
  },

  shareWarn: {
    'R9S Blast Beat Player': 'B376',
    'R9S Plummet': 'B38B' // Fatal Flail tower
  },

  shareFail: {
    'R9S Hardcore Small': 'B37F',
    // Tankbuster
    'R9S Hardcore Big': 'B380',
    // Tankbuster
    'R9S Aetherletting Marker': 'B392',
    'R9S Bloody Bondage': 'B396' // Hell in a Cell tower
  }
};

/* harmony default export */ const r9s = (r9s_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/trial/byakko-un.ts
// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/04-sb/trial/byakko-ex.ts




// Byakko Unreal
const byakko_un_triggerSet = {
  zoneId: zone_id/* default.TheJadeStoaUnreal */.Z.TheJadeStoaUnreal,
  damageWarn: {
    // Popping Unrelenting Anguish bubbles
    'ByakkoUn Aratama': '9C16',
    // Stepping in growing orb
    'ByakkoUn Vacuum Claw': '9C0A',
    // Lightning Puddles
    'ByakkoUn Hunderfold Havoc 1': '9C06',
    'ByakkoUn Hunderfold Havoc 2': '9C07'
  },
  damageFail: {
    'ByakkoUn Sweep The Leg': '9BFC',
    'ByakkoUn Fire and Lightning': '9BFF',
    'ByakkoUn Distant Clap': '9BFE',
    // Midphase line attack
    'ByakkoUn Imperial Guard': '9C12'
  },
  triggers: [{
    // Pink bubble collision
    id: 'ByakkoUn Ominous Wind',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: '9C0D',
      ...oopsy_common/* playerDamageFields */.np
    }),
    mistake: (_data, matches) => {
      return {
        type: 'warn',
        blame: matches.target,
        reportId: matches.targetId,
        text: {
          en: 'bubble collision',
          de: 'Blasen sind zusammengestoßen',
          fr: 'Collision avec une bulle',
          ja: '衝突',
          cn: '相撞',
          ko: '장판 겹쳐서 터짐',
          tc: '相撞'
        }
      };
    }
  }]
};
/* harmony default export */ const byakko_un = (byakko_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/trial/seiryu-un.ts
// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/04-sb/trial/seiryu-ex.ts



// TODO: Infirm Soul (ABCB) hitting Cursekeeper (ABC9) target?
// TODO: taking Forbidden Arts #2 (ABBF) with vuln stack from #1?
// Seiryu Unreal
const seiryu_un_triggerSet = {
  zoneId: zone_id/* default.TheWreathOfSnakesUnreal */.Z.TheWreathOfSnakesUnreal,
  damageWarn: {
    'SeiryuUn Onmyo Sigil 1': 'ABF8',
    // centered "get out" circle (phase 1)
    'SeiryuUn Onmyo Sigil 2': 'ABFA',
    // centered "get out" circle (phase 2 first)
    'SeiryuUn Onmyo Sigil 3': 'ABFD',
    // centered "get out" circle (phase 2 second)
    'SeiryuUn Serpent-Eye Sigil 1': 'ABFC',
    // donut (phase 2 first)
    'SeiryuUn Serpent-Eye Sigil 2': 'ABFB',
    // donut (phase 2 second)
    'SeiryuUn Fortune-Blade Sigil': 'ABD9',
    // Kuji-Kiri (ABD8) lines
    'SeiryuUn Calamity-Blade Sigil': 'ABDA',
    // Kuji-Kiri (ABD8) follow-up lines
    'SeiryuUn Iwa-No-Shiki 100-Tonze Swing': 'ABE4',
    // centered circles
    'SeiryuUn Ten-No-Shiki Yama-Kagura': 'ABFE',
    // blue lines during midphase / final phase adds
    'SeiryuUn Numa-No-Shiki Stoneskin': 'ABEB',
    // failing to silence add
    'SeiryuUn Great Typhoon 1': 'ABEF',
    // outside ring of water during Coursing River
    'SeiryuUn Great Typhoon 2': 'ABF0',
    // outside ring of water during Coursing River
    'SeiryuUn Great Typhoon 3': 'ABF1',
    // outside ring of water during Coursing River
    'SeiryuUn Great Typhoon 4': 'ABF2',
    // outside ring of water during Coursing River
    'SeiryuUn Yama-No-Shiki Handprint 1': 'ABDE',
    // half arena cleave
    'SeiryuUn Yama-No-Shiki Handprint 2': 'ABDF',
    // half arena cleave
    'SeiryuUn Force Of Nature': 'ABE1',
    // standing in the middle circle during knockback (380A)
    'SeiryuUn Serpent Descending Circle': 'ABD5',
    // baited circles with towers
    'SeiryuUn Serpent\'s Jaws': 'ABD7' // failing towers
  },

  shareWarn: {
    'SeiryuUn Serpent Descending Spread': 'ABD4',
    // spread markers
    'SeiryuUn Aka-No-Shiki Red Rush': 'ABE8',
    // tether charge
    'SeiryuUn Iwa-No-Shiki Kanabo': 'ABE5' // tether which targets a large conal cleave
  },

  shareFail: {
    'SeiryuUn Infirm Soul': 'ABCB' // tank buster circular cleave
  },

  soloWarn: {
    'SeiryuUn Ao-No-Shiki Blue Bolt': 'ABE7',
    // tether share
    'SeiryuUn Forbidden Arts 1': 'ABBE',
    // line stack share hit 1
    'SeiryuUn Forbidden Arts 2': 'ABBF' // line stack share hit 2
  }
};

/* harmony default export */ const seiryu_un = (seiryu_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/trial/suzaku-un.ts
// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/04-sb/trial/suzaku-ex.ts





// TODO: Rekindle (A808) hitting multiple adds, any other players,
// or hitting adds before they've been killed once is a mistake.
// However, there is a point where it should hit one add in the
// beginning. This also happens later in the fight too, where it
// should not hit anybody else, but unfortunately also counts as
// hitting multiple people when it hits Suzaku.  So, there's really
// not any good way to write a mistake trigger for this ability.

// TODO: what is getting hit by an orb during Close-Quarter Crescendo?
// Suzaku Unreal
const suzaku_un_triggerSet = {
  zoneId: zone_id/* default.HellsKierUnreal */.Z.HellsKierUnreal,
  damageWarn: {
    'SuzakuUn Rout': 'A813',
    // untargetable phase 1 charge across the arena
    'SuzakuUn Fleeting Summer': 'A7FD',
    // targeted conal
    'SuzakuUn Scarlet Tail Feather Wing And A Prayer': 'A7FE',
    // circle aoe from unkilled plume
    'SuzakuUn Scarlet Plume Wing And A Prayer': 'A76E',
    // circle aoe from unkilled plume
    'SuzakuUn Ashes To Ashes': 'A7FA',
    // Scarlet Lady add, raidwide explosion if not killed in time
    'SuzakuUn Well Of Flame': 'A809',
    // targeted wide line aoe
    'SuzakuUn Hotspot': 'A80A' // platform fire when the runes are activated
  },

  damageFail: {
    'SuzakuUn Immolate': 'A80D',
    // Tower mechanic failure on Incadescent Interlude (party failure, not personal)
    'SuzakuUn Phantom Flurry': 'A806' // "phantom half" final hit of Phantom Flurry
  },

  soloWarn: {
    'SuzakuUn Scathing Net': 'A7F8' // stack marker
  },

  triggers: [{
    id: 'SuzakuUn Ruthless Refrain',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: 'A803',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }, {
    id: 'SuzakuUn Mesmerizing Melody',
    type: 'Ability',
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: 'A802',
      ...oopsy_common/* playerDamageFields */.np
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Knocked off',
          de: 'Runtergefallen',
          fr: 'Renversé(e)',
          ja: 'ノックバック',
          cn: '击退坠落',
          ko: '넉백',
          tc: '擊退墜落'
        }
      };
    }
  }]
};
/* harmony default export */ const suzaku_un = (suzaku_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/trial/tsukuyomi-un.ts
// This file was autogenerated from running npm run sync-files.
// DO NOT EDIT THIS FILE DIRECTLY.
// Edit the source file below and then run `npm run sync-files`
// Source: ui/oopsyraidsy/data/04-sb/trial/tsukuyomi-ex.ts




// TODO: Taking multiple role-based Steel of the Underworld (B133) hits.

// Tsukuyomi Unreal
const tsukuyomi_un_triggerSet = {
  zoneId: zone_id/* default.TsukuyomisPainUnreal */.Z.TsukuyomisPainUnreal,
  damageWarn: {
    'TsukuyomiUn Moonlight Lunar Halo': 'B14A',
    // donut from orbs in final phase
    'TsukuyomiUn Moonfall': 'B145',
    // meteor drop big circles
    'TsukuyomiUn Moondust Crater': 'B160',
    // meteor explosions later
    'TsukuyomiUn Dancing Fan Tsukui-No-Maiogi': 'B13A',
    // fan circle aoe
    'TsukuyomiUn Waxing Grudge': 'B152',
    // melee range circle from Full Moon buff
    'TsukuyomiUn Waning Grudge': 'B153',
    // donut from New Moon Buff
    'TsukuyomiUn Dark Blade': 'B14E',
    // right-side cleave
    'TsukuyomiUn Bright Blade': 'B14F' // left side cleave
  },

  shareFail: {
    'TsukuyomiUn Torment Unto Death': 'B12F' // tank buster conal cleave
  },

  soloWarn: {
    'TsukuyomiUn Lead Of The Underworld': 'B132',
    // "Beg for Mercy!" stack
    'TsukuyomiUn Lunacy': 'B151' // 4x stack marker
  },

  triggers: [{
    id: 'TsukuyomiUn Moonlit',
    type: 'GainsEffect',
    // Five stacks of Moonlit or Moonshadowed is instant death.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '602',
      count: '05'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        name: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }, {
    id: 'TsukuyomiUn Moonshadowed',
    type: 'GainsEffect',
    // Five stacks of Moonlit or Moonshadowed is instant death.
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '603',
      count: '05'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        name: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const tsukuyomi_un = (tsukuyomi_un_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/trial/valigarmanda-ex.ts

const valigarmanda_ex_triggerSet = {
  zoneId: zone_id/* default.WorqorLarDorExtreme */.Z.WorqorLarDorExtreme,
  damageWarn: {
    // initial phase & ubiquitouos
    'ValigarmandaEx Spikecicle 1': '8FF5',
    // curved cleave
    'ValigarmandaEx Spikecicle 2': '8FF6',
    // curved cleave
    'ValigarmandaEx Spikecicle 3': '8FF7',
    // curved cleave
    'ValigarmandaEx Spikecicle 4': '8FF8',
    // curved cleave
    'ValigarmandaEx Spikecicle 5': '8FF9',
    // curved cleave
    'ValigarmandaEx Ice Boulder Sphere Shatter': '995D',
    // ice boulder aoe
    'ValigarmandaEx Susurrant Breath': '8FC8',
    // conal
    'ValigarmandaEx Slithering Strike': '8FCC',
    // point-blank AOE
    'ValigarmandaEx Strangling Coil': '8FD0',
    // donut
    'ValigarmandaEx Scourge of Thunder': '8FEA',
    // lightning spreads
    // fire + adds mini-phase
    'ValigarmandaEx Volcanic Drop Big': '8FE6',
    // half-room lava puddle
    'ValigarmandaEx Volcanic Drop Puddle': '8FE4',
    // small lava puddle
    'ValigarmandaEx Mountain Fire Cleave': '901A',
    // all but a small safe wedge
    // storm phase
    'ValigarmandaEx Blighted Bolt': '8FE1',
    // exploding feather
    'ValigarmandaEx Crackling Cataclysm': '8FC1',
    // baited AOE puddles
    'ValigarmandaEx Arcane Sphere Arcane Lightning': '985A',
    // line cleaves from spheres
    // ice phase
    'ValigarmandaEx Northern Cross 1': '8FDB',
    // avalanche, cleaves NE half
    'ValigarmandaEx Northern Cross 2': '8FDC',
    // avalanche, cleaves SW half
    'ValigarmandaEx Chilling Caataclysm': '8FC3' // line cleaves from spheres
  },

  gainsEffectWarn: {
    // storm phase
    // 8FE3 hits everyone, but if you're on a bad tile, you gain D87
    'ValigarmandaEx Thunderous Breath': 'D87',
    // Paralysis
    // ice phase
    'ValigarmandaEx Deep Freeze': '1036' // Not moving during Freezing Dust
  },

  shareWarn: {
    // fire + adds mini-phase
    'ValigarmandaEx Mountain Fire Tower': '9019',
    // solo tank tower
    // storm phase
    'ValigarmandaEx Scourge of Thunder (Storm)': '8FE9',
    // lightning spreads
    // ice phase
    'ValigarmandaEx Scourge of Ice': '8FEC',
    // tank spreads
    'ValigarmandaEx Ice Talon': '8FFB' // tank buster spreads
  },

  soloWarn: {
    // fire + adds mini-phase
    'ValigarmandaEx Charring Cataclysm': '8FC4',
    // partner stacks
    'ValigarmandaEx Scourge of Fire': '8FEF',
    // healer stacks
    'ValigarmandaEx Calamitous Cry': '9005',
    // healer stacks
    // storm phase
    'ValigarmandaEx Scourge of Fire (Storm)': '8FED',
    // healer stacks
    // ice phase
    'ValigarmandaEx Scourge of Fire (Ice)': '8FEE' // healer stacks
  }
};

/* harmony default export */ const valigarmanda_ex = (valigarmanda_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/trial/valigarmanda.ts

const valigarmanda_triggerSet = {
  zoneId: zone_id/* default.WorqorLarDor */.Z.WorqorLarDor,
  damageWarn: {
    // initial phase & ubiquitouos
    'Valigarmanda Susurrant Breath': '8D3C',
    // large conal
    'Valigarmanda Slithering Strike': '8D3E',
    // large point-blank circle
    'Valigarmanda Strangling Coil': '8D40',
    // large donut AoE
    'Valigarmanda Eruption': '8D5F',
    // baited AoE puddles
    // storm phase
    'Valigarmanda Thunderous Breath': '8D50',
    // conal; not on elevated tile
    'Valigarmanda Blighted Bolt (personal)': '8D4D',
    // puddle on you; not on ground tile
    'Valigarmanda Blighted Bolt (feather)': '8D4E',
    // hit by feather circle AoE
    'Valigarmanda Arcane Lightning': '9859',
    // line cleaves from spheres
    'Valigarmanda Ruinfall (puddle)': '98D9',
    // circle AoEs at back of arena
    // ice phase
    'Valigarmanda Northern Cross (NE)': '8D48',
    // avalanche, cleaves NE half
    'Valigarmanda Northern Cross (SW)': '8D49',
    // avalanche, cleaves SW half
    'Valigarmanda Chilling Cataclysm': '9961',
    // line cleaves from spheres
    // adds phase
    'Valigarmanda Calamitous Echo': '8D63' // telegraphed conal AoEs from boss
  },

  gainsEffectWarn: {
    // ice phase
    'Valigarmanda Deep Freeze': '1036' // Not moving during Freezing Dust
  },

  shareWarn: {
    // initial phase & ubiquitouos
    'Valigarmanda Ice Talon': '8D59' // tank buster AoEs
  },

  soloWarn: {
    // adds phase
    'Valigarmanda Calamitous Cry': '8D62' // shared line cleave
  }
};

/* harmony default export */ const valigarmanda = (valigarmanda_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/trial/zelenia-ex.ts

const zelenia_ex_triggerSet = {
  zoneId: zone_id/* default.RecollectionExtreme */.Z.RecollectionExtreme,
  damageWarn: {}
};
/* harmony default export */ const zelenia_ex = (zelenia_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/trial/zelenia.ts

const zelenia_triggerSet = {
  zoneId: zone_id/* default.Recollection */.Z.Recollection,
  damageWarn: {}
};
/* harmony default export */ const zelenia = (zelenia_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/trial/zoraal-ja-ex.ts

const zoraal_ja_ex_triggerSet = {
  zoneId: zone_id/* default.EverkeepExtreme */.Z.EverkeepExtreme,
  damageWarn: {
    'ZoraalJaEx Multidirectional Divide Initial Lines': '93A2',
    // initial cross (+) AoE
    'ZoraalJaEx Multidirectional Divide Safe Squares 1': '93A4',
    // room-wide AoE with tiny safe squares
    'ZoraalJaEx MultiDirectional Divide Safe Squares 2': '93A3',
    // ^ same - possibly the original lines?
    'ZoraalJaEx Backward Edge': '9972',
    // forward-facing room cleave
    'ZoraalJaEx Forward Edge': '937F',
    // backward-facing room cleave
    'ZoraalJaEx Half Full Right': '9380',
    // half-room cleave (left safe)
    'ZoraalJaEx Half Full Left': '939E',
    // half-room cleave (right safe)
    'ZoraalJaEx Chasm of Vollok (Swords)': '939A',
    // teleporting sword tile
    'ZoraalJaEx Forged Track': '939D',
    // teleporting sword line cleave
    'ZoraalJaEx Stormy Edge': '9386',
    // wind/knockback cleave
    // TODO: Figure out if the difference between 9383 vs. 9384 is
    // standing in the telegraphed line vs. one of the splashed lines?
    'ZoraalJaEx Fiery Edge 1': '9383',
    // fire cleave
    'ZoraalJaEx Fiery Edge 2': '9384',
    // fire cleave
    'ZoraalJaEx Siege of Vollok': '938B',
    // moving line with donut AoEs
    'ZoraalJaEx Walls of Vollok': '938C',
    // moving line with puddle AoEs
    'ZoraalJaEx Half Circuit Side': '939F',
    // left/right cleave
    'ZoraalJaEx Half Circuit Donut': '93A0',
    // swords out - inside safe
    'ZoraalJaEx Half Circuit Point-blank': '93A1',
    // swords in - outside safe
    'ZoraalJaEx Chasm of Vollok (Knockaround)': '9394',
    // big quadrant swords
    'ZoraalJaEx Aero III': '9391' // standing in/near tornado with wind debuff
  },

  shareWarn: {
    'ZoraalJaEx Regicidal Rage': '993C',
    // tank tether busters (2x, solo)
    'ZoraalJaEx Chasm of Vollok (Spread)': '9389',
    // yellow Titan spreads
    'ZoraalJaEx Bitter Whirlwind': '993E',
    // telegraphed solo tankbuster
    'ZoraalJaEx Bitter Whirlwind Followup': '9940' // untelegraphed follow-up hits
  },

  soloWarn: {
    'ZoraalJaEx Drum of Vollok': '938F' // enumerations
  }
};

/* harmony default export */ const zoraal_ja_ex = (zoraal_ja_ex_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/trial/zoraal-ja.ts

// TODO: Add trigger for missing Duty's Edge (party stack)

const zoraal_ja_triggerSet = {
  zoneId: zone_id/* default.Everkeep */.Z.Everkeep,
  damageWarn: {
    'ZoraalJa Double-Edged Swords': '9352',
    // half-room cleave
    'ZoraalJa Shadow Burst': '934D',
    // exploding adds - circle AoEs
    'ZoraalJa Vorpal Trail 1': '9528',
    // collapsing swords - first set
    'ZoraalJa Vorpal Trail 2': '9350',
    // collapsing swords - subsequent cleaves

    'ZoraalJa Smiting Circuit Outside': '9366',
    // conut AoE
    'ZoraalJa Smiting Circuit Inside': '9367',
    // point-blank circle AoE
    'ZoraalJa Chasm of Vollok': '9358',
    // sword on main platform
    'ZoraalJa Chasm of Vollok Mirror': '935A',
    // sword from mirror platform
    'ZoraalJa Forged Track': '9361',
    // sword line cleave from mirror platform

    'ZoraalJa Half Full': '936A',
    // half-room cleave
    'ZoraalJa Half Circuit Left/Right': '936D',
    // half-room cleave
    'ZoraalJa Half Circuit Dynamo': '936E',
    // donut AoE
    'ZoraalJa Half Circuit Chariot': '936F' // point-blank circle AoE
  },

  shareWarn: {
    'ZoraalJa Fire III': '9378' // spread AoEs
  },

  soloWarn: {}
};
/* harmony default export */ const zoraal_ja = (zoraal_ja_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/07-dt/ultimate/futures_rewritten.ts



const futures_rewritten_triggerSet = {
  zoneId: zone_id/* default.FuturesRewrittenUltimate */.Z.FuturesRewrittenUltimate,
  damageWarn: {
    'FRU P1 Cyclonic Break': '9CD2',
    // P1 Cyclonic Break follow-up
    'FRU P1 Burnt Strike Boss 1': '9CC1',
    // P1 Burnt Strike (fire, by Fatebreaker)
    'FRU P1 Burnt Strike Boss 2': '9CC5',
    // P1 Burnt Strike (thunder, by Fatebreaker)
    'FRU P1 Burnt Strike Clone 1': '9CE1',
    // P1 Burnt Strike (fire, by Fatebreaker's Image)
    'FRU P1 Burnt Strike Clone 2': '9CE3',
    // P1 Burnt Strike (thunder, by Fatebreaker's Image)
    'FRU P1 Burnout Thunder Boss': '9CC6',
    // P1 Burnt Strike thunder follow-up (by Fatebreaker)
    'FRU P1 Burnout Thunder Clone': '9CE4',
    // P1 Burnt Strike thunder follow-up (by Fatebreaker's Image)
    'FRU P1 Blasting Zone': '9CDD',
    // P1 Blasting Zone (Utopian Sky line AOE)
    'FRU P1 Brightfire Puddle 1': '9CD8',
    // P1 Brightfire (fire, thunder puddle)
    'FRU P1 Brightfire Puddle 2': '9CD9',
    // P1 Brightfire (fire, thunder puddle)
    'FRU P2 Icicle Impact': '9D06',
    // P2 Icicle Impact
    'FRU P2 Axe Kick': '9D0A',
    // P2 Axe Kick
    'FRU P2 Scythe Kick': '9D0B',
    // P2 Scythe Kick
    'FRU P2 Frigid Needle': '9D09',
    // P2 Frigid Needle (star-shaped AOE)
    'FRU P2 Twin Stillness 1': '9D01',
    // P2 Twin Stillness 1st
    'FRU P2 Twin Stillness 2': '9D04',
    // P2 Twin Stillness 2nd
    'FRU P2 Twin Silence 1': '9D02',
    // P2 Twin Silence 1st
    'FRU P2 Twin Silence 2': '9D03',
    // P2 Twin Silence 2nd
    'FRU P2 Reflected Scythe Kick 1': '9D0C',
    // P2 Reflected Scythe Kick
    'FRU P2 Reflected Scythe Kick 2': '9D0D',
    // P2 Reflected Scythe Kick
    'FRU P2 Holy Light Explosion': '9D1B',
    // P2 Explosion from Holy Light
    'FRU P2.5 Crystal of Light Hiemal Storm': '9D40',
    // P2.5 Crystal of Light puddle
    'FRU P2.5 Crystal of Darkness Sinbound Blizzard III': '9D46',
    // P2.5 Crystal of Darkness cone
    'FRU Dark Blizzard III': '9D57',
    // P3, P4 Dark Blizzard III
    'FRU P3 Hourglass Sinbound Meltdown After 1st Hit': '9D64',
    // P3 Hourglass beam (after 1st hit)
    'FRU P3 Apocalypse': '9D69',
    // P3 Apocalypse
    'FRU P4 Akh Rhai': '9D2E',
    // P4 Akh Rhai
    'FRU P4 Hallowed Wings 1': '9D23',
    // P4 Dragonsong Hallowed Wings
    'FRU P4 Hallowed Wings 2': '9D24',
    // P4 Dragonsong Hallowed Wings
    'FRU P4 Hourglass Maelstrom': '9D6B',
    // P4 Crystallize Time hourglass
    'FRU P4 Tidal Light Exaflare 1': '9D3C',
    // P4 Crystallize Time exaflare
    'FRU P4 Tidal Light Exaflare 2': '9D3D',
    // P4 Crystallize Time exaflare
    'FRU P5 Path of Light Exaflare': '9D74',
    // P5 Fulgent Blade exaflare
    'FRU P5 Path of Darkness Exaflare': '9D75',
    // P5 Fulgent Blade exaflare
    'FRU P5 Cruel Path of Light Polarizing Paths Follow-up': '9CB7',
    // P5 Polarizing Paths follow-up
    'FRU P5 Cruel Path of Darkness Polarizing Paths Follow-up': '9CB8' // P5 Polarizing Paths follow-up
  },

  damageFail: {
    'FRU P1 Unmitigated Explosion': '9CC4',
    // P1 tower fail
    'FRU P5 Unmitigated Explosion': '9D81',
    // P5 tower fail
    'FRU Refulgent Fate Tether Break': '9D17' // P2, P4 tether break
  },

  gainsEffectWarn: {
    'FRU Damage Down': 'B5F',
    'FRU Bleeding': 'C05',
    // standing in the puddle.
    'FRU Doom': '9D4'
  },
  gainsEffectFail: {
    'FRU Mark of Mortality': '1114' // stack fail debuff
  },

  shareWarn: {
    'FRU P1 Sinsmite Spread': '9CD5',
    // P1 spread during Cyclonic Break
    'FRU P1 Sinbound Thunder III Spread': '9CE0',
    // P1 spread during Utopian Sky
    'FRU P1 Bow Shock': '9CCF',
    // P1 Bow Shock (tethered thunder)
    'FRU P2 House of Light': '9D0E',
    // P2 House of Light during Diamond Dust, Mirror Mirror
    'FRU P2 Banish III Divided Spread': '9D1F',
    // P2 Banish III Divided (spread)
    'FRU P3 Sinbound Meltdown 1st Hit': '9D2B',
    // P3 Hourglass beam 1st hit
    'FRU P3 Dark Fire III Marker': '9D54',
    // P3 Dark Fire III
    'FRU Dark Eruption': '9D52',
    // P3, P4 Dark Eruption
    'FRU Spirit Taker': '9D61',
    // P3, P4 Spirit Taker
    'FRU P4 Drachen Wanderer Longing of the Lost': '9D31' // P4 Crystallize Time dragon explosion
  },

  shareFail: {
    'FRU Lightsteeped House of Light': '9CFC',
    // P2 House of Light after Light Rampant, P4 House of Light
    'FRU P3 Darkest Dance Tank Cleave': '9CF6',
    // P3 Darkest Dance tank buster
    'FRU P4 Somber Dance 1st Farthest': '9D5C',
    // P4 Somber Dance 1st
    'FRU P4 Somber Dance 2nd Nearest': '9D5D',
    // P4 Somber Dance 2nd
    'FRU P5 Wings Dark and Light Cleave 1': '9D7A',
    // P5 Wings Dark and Light cleave
    'FRU P5 Wings Dark and Light Cleave 2': '9D7B',
    // P5 Wings Dark and Light cleave
    'FRU P5 Wings Dark and Light Tether 1': '9BC7',
    // P5 Wings Dark and Light tether
    'FRU P5 Wings Dark and Light Tether 2': '9BC8' // P5 Wings Dark and Light tether
  },

  soloWarn: {
    'FRU P1 Sinsmoke Stack': '9CD3',
    // P1 stack during Cyclonic Break
    'FRU P2 Banish III Stack': '9D1E' // P2 Banish III (stack)
  },

  triggers: [{
    id: 'FRU Knockback',
    type: 'Ability',
    // 9CC2 = P1 Blastburn (by Fatebreaker)
    // 9CE2 = P1 Blastburn (by Fatebreaker's Image)
    // 9D0F = P2 Heavenly Strike
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['9CC2', '9CE2', '9D0F']
    }),
    deathReason: (_data, matches) => {
      return {
        id: matches.targetId,
        name: matches.target,
        text: {
          en: 'Pushed into wall',
          de: 'Rückstoß in die Wand',
          fr: 'Poussé(e) dans le mur',
          ja: '壁へノックバック',
          cn: '击退至墙',
          ko: '벽으로 넉백',
          tc: '擊退至牆'
        }
      };
    }
  }, {
    id: 'FRU Stack Mistakes',
    type: 'Ability',
    // 9CDF = P1 Sinbound Fire III (stack during Utopian Sky)
    // 9CE7 = P1 Sinsmoke (stack with Floating Fetters after Utopian Sky)
    // 9CDC = P1 Sinblaze (tethered fire)
    // 9D19 = P2 Powerful Light (stack during Light Rampant)
    // 9D55 = P3, P4 Unholy Darkness
    // 9D4F = P3, P4 Dark Water III
    netRegex: netregexes/* default.ability */.ZP.ability({
      id: ['9CDF', '9CE7', '9CDC', '9D19', '9D55', '9D4F']
    }),
    mistake: (_data, matches) => {
      const expected = matches.id === '9D55' ? 5 : 4; // Unholy Darkness = 5, others = 4
      const actual = parseFloat(matches.targetCount);
      if (actual >= expected || actual === 0) {
        return;
      }
      const ability = matches.ability;
      const text = actual === 1 ? (0,oopsy_common/* GetSoloMistakeText */.gc)(ability) : (0,oopsy_common/* GetShareMistakeText */.gG)(ability, actual);
      return {
        type: 'fail',
        blame: matches.target,
        text: text
      };
    }
  }, {
    id: 'FRU Lightsteeped Count',
    type: 'GainsEffect',
    netRegex: netregexes/* default.gainsEffect */.ZP.gainsEffect({
      effectId: '8D1',
      count: '05'
    }),
    mistake: (_data, matches) => {
      return {
        type: 'fail',
        blame: matches.target,
        reportId: matches.targetId,
        text: matches.effect
      };
    }
  }]
};
/* harmony default export */ const futures_rewritten = (futures_rewritten_triggerSet);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/data/oopsy_manifest.txt





































































































































































































































































/* harmony default export */ const oopsy_manifest = ({'00-misc/general.ts': general,'00-misc/test.ts': test,'02-arr/trial/ifrit-nm.ts': ifrit_nm,'02-arr/trial/levi-ex.ts': levi_ex,'02-arr/trial/shiva-ex.ts': shiva_ex,'02-arr/trial/shiva-hm.ts': shiva_hm,'02-arr/trial/titan-ex.ts': titan_ex,'02-arr/trial/titan-hm.ts': titan_hm,'02-arr/trial/titan-nm.ts': titan_nm,'02-arr/trial/ultima-ex.ts': ultima_ex,'03-hw/alliance/weeping_city.ts': weeping_city,'03-hw/dungeon/aetherochemical_research_facility.ts': aetherochemical_research_facility,'03-hw/dungeon/baelsars_wall.ts': baelsars_wall,'03-hw/dungeon/fractal_continuum.ts': fractal_continuum,'03-hw/dungeon/gubal_library_hard.ts': gubal_library_hard,'03-hw/dungeon/sohm_al_hard.ts': sohm_al_hard,'03-hw/dungeon/the_lost_city_of_amdapor_hard.ts': the_lost_city_of_amdapor_hard,'03-hw/raid/a10n.ts': a10n,'03-hw/raid/a12n.ts': a12n,'03-hw/raid/a3n.ts': a3n,'03-hw/raid/a6n.ts': a6n,'03-hw/trial/sephirot-ex.ts': sephirot_ex,'03-hw/trial/sophia-ex.ts': sophia_ex,'03-hw/trial/thordan-ex.ts': thordan_ex,'03-hw/trial/zurvan-ex.ts': zurvan_ex,'04-sb/alliance/orbonne_monastery.ts': orbonne_monastery,'04-sb/alliance/ridorana_lighthouse.ts': ridorana_lighthouse,'04-sb/alliance/royal_city_of_rabanastre.ts': royal_city_of_rabanastre,'04-sb/dungeon/ala_mhigo.ts': ala_mhigo,'04-sb/dungeon/bardams_mettle.ts': bardams_mettle,'04-sb/dungeon/castrum_abania.ts': castrum_abania,'04-sb/dungeon/doma_castle.ts': doma_castle,'04-sb/dungeon/drowned_city_of_skalla.ts': drowned_city_of_skalla,'04-sb/dungeon/fractal_continuum_hard.ts': fractal_continuum_hard,'04-sb/dungeon/ghimlyt_dark.ts': ghimlyt_dark,'04-sb/dungeon/hells_lid.ts': hells_lid,'04-sb/dungeon/kugane_castle.ts': kugane_castle,'04-sb/dungeon/shisui_of_the_violet_tides.ts': shisui_of_the_violet_tides,'04-sb/dungeon/sirensong_sea.ts': sirensong_sea,'04-sb/dungeon/st_mocianne_hard.ts': st_mocianne_hard,'04-sb/dungeon/swallows_compass.ts': swallows_compass,'04-sb/dungeon/temple_of_the_fist.ts': temple_of_the_fist,'04-sb/dungeon/the_burn.ts': the_burn,'04-sb/raid/o10n.ts': o10n,'04-sb/raid/o10s.ts': o10s,'04-sb/raid/o11n.ts': o11n,'04-sb/raid/o11s.ts': o11s,'04-sb/raid/o12n.ts': o12n,'04-sb/raid/o12s.ts': o12s,'04-sb/raid/o1n.ts': o1n,'04-sb/raid/o1s.ts': o1s,'04-sb/raid/o2n.ts': o2n,'04-sb/raid/o2s.ts': o2s,'04-sb/raid/o3n.ts': o3n,'04-sb/raid/o3s.ts': o3s,'04-sb/raid/o4n.ts': o4n,'04-sb/raid/o4s.ts': o4s,'04-sb/raid/o5n.ts': o5n,'04-sb/raid/o5s.ts': o5s,'04-sb/raid/o6n.ts': o6n,'04-sb/raid/o6s.ts': o6s,'04-sb/raid/o7n.ts': o7n,'04-sb/raid/o7s.ts': o7s,'04-sb/raid/o8n.ts': o8n,'04-sb/raid/o8s.ts': o8s,'04-sb/raid/o9n.ts': o9n,'04-sb/raid/o9s.ts': o9s,'04-sb/trial/byakko-ex.ts': byakko_ex,'04-sb/trial/byakko.ts': byakko,'04-sb/trial/lakshmi-ex.ts': lakshmi_ex,'04-sb/trial/lakshmi.ts': lakshmi,'04-sb/trial/rathalos-ex.ts': rathalos_ex,'04-sb/trial/rathalos.ts': rathalos,'04-sb/trial/seiryu-ex.ts': seiryu_ex,'04-sb/trial/seiryu.ts': seiryu,'04-sb/trial/shinryu-ex.ts': shinryu_ex,'04-sb/trial/shinryu.ts': shinryu,'04-sb/trial/susano-ex.ts': susano_ex,'04-sb/trial/susano.ts': susano,'04-sb/trial/suzaku-ex.ts': suzaku_ex,'04-sb/trial/suzaku.ts': suzaku,'04-sb/trial/tsukuyomi-ex.ts': tsukuyomi_ex,'04-sb/trial/tsukuyomi.ts': tsukuyomi,'04-sb/trial/yojimbo.ts': yojimbo,'04-sb/ultimate/ultima_weapon_ultimate.ts': ultima_weapon_ultimate,'04-sb/ultimate/unending_coil_ultimate.ts': unending_coil_ultimate,'05-shb/alliance/the_copied_factory.ts': the_copied_factory,'05-shb/alliance/the_puppets_bunker.ts': the_puppets_bunker,'05-shb/alliance/the_tower_at_paradigms_breach.ts': the_tower_at_paradigms_breach,'05-shb/dungeon/akadaemia_anyder.ts': akadaemia_anyder,'05-shb/dungeon/amaurot.ts': amaurot,'05-shb/dungeon/anamnesis_anyder.ts': anamnesis_anyder,'05-shb/dungeon/dohn_mheg.ts': dohn_mheg,'05-shb/dungeon/heroes_gauntlet.ts': heroes_gauntlet,'05-shb/dungeon/holminster_switch.ts': holminster_switch,'05-shb/dungeon/malikahs_well.ts': malikahs_well,'05-shb/dungeon/matoyas_relict.ts': matoyas_relict,'05-shb/dungeon/mt_gulg.ts': mt_gulg,'05-shb/dungeon/paglthan.ts': paglthan,'05-shb/dungeon/qitana_ravel.ts': qitana_ravel,'05-shb/dungeon/the_grand_cosmos.ts': the_grand_cosmos,'05-shb/dungeon/twinning.ts': twinning,'05-shb/eureka/delubrum_reginae.ts': delubrum_reginae,'05-shb/eureka/delubrum_reginae_savage.ts': delubrum_reginae_savage,'05-shb/raid/e10n.ts': e10n,'05-shb/raid/e10s.ts': e10s,'05-shb/raid/e11n.ts': e11n,'05-shb/raid/e11s.ts': e11s,'05-shb/raid/e12n.ts': e12n,'05-shb/raid/e12s.ts': e12s,'05-shb/raid/e1n.ts': e1n,'05-shb/raid/e1s.ts': e1s,'05-shb/raid/e2n.ts': e2n,'05-shb/raid/e2s.ts': e2s,'05-shb/raid/e3n.ts': e3n,'05-shb/raid/e3s.ts': e3s,'05-shb/raid/e4n.ts': e4n,'05-shb/raid/e4s.ts': e4s,'05-shb/raid/e5n.ts': e5n,'05-shb/raid/e5s.ts': e5s,'05-shb/raid/e6n.ts': e6n,'05-shb/raid/e6s.ts': e6s,'05-shb/raid/e7n.ts': e7n,'05-shb/raid/e7s.ts': e7s,'05-shb/raid/e8n.ts': e8n,'05-shb/raid/e8s.ts': e8s,'05-shb/raid/e9n.ts': e9n,'05-shb/raid/e9s.ts': e9s,'05-shb/trial/diamond_weapon-ex.ts': diamond_weapon_ex,'05-shb/trial/diamond_weapon.ts': diamond_weapon,'05-shb/trial/emerald_weapon-ex.ts': emerald_weapon_ex,'05-shb/trial/emerald_weapon.ts': emerald_weapon,'05-shb/trial/hades-ex.ts': hades_ex,'05-shb/trial/hades.ts': hades,'05-shb/trial/innocence-ex.ts': innocence_ex,'05-shb/trial/innocence.ts': innocence,'05-shb/trial/levi-un.ts': levi_un,'05-shb/trial/ruby_weapon-ex.ts': ruby_weapon_ex,'05-shb/trial/ruby_weapon.ts': ruby_weapon,'05-shb/trial/shiva-un.ts': shiva_un,'05-shb/trial/titan-un.ts': titan_un,'05-shb/trial/titania-ex.ts': titania_ex,'05-shb/trial/titania.ts': titania,'05-shb/trial/varis-ex.ts': varis_ex,'05-shb/trial/wol-ex.ts': wol_ex,'05-shb/trial/wol.ts': wol,'05-shb/ultimate/the_epic_of_alexander.ts': the_epic_of_alexander,'06-ew/alliance/aglaia.ts': aglaia,'06-ew/alliance/euphrosyne.ts': euphrosyne,'06-ew/alliance/thaleia.ts': thaleia,'06-ew/dungeon/aetherfont.ts': aetherfont,'06-ew/dungeon/aloalo_island.ts': aloalo_island,'06-ew/dungeon/alzadaals_legacy.ts': alzadaals_legacy,'06-ew/dungeon/another_aloalo_island-savage.ts': another_aloalo_island_savage,'06-ew/dungeon/another_aloalo_island.ts': another_aloalo_island,'06-ew/dungeon/another_mount_rokkon-savage.ts': another_mount_rokkon_savage,'06-ew/dungeon/another_mount_rokkon.ts': another_mount_rokkon,'06-ew/dungeon/another_sildihn_subterrane-savage.ts': another_sildihn_subterrane_savage,'06-ew/dungeon/another_sildihn_subterrane.ts': another_sildihn_subterrane,'06-ew/dungeon/ktisis_hyperboreia.ts': ktisis_hyperboreia,'06-ew/dungeon/lapis_manalis.ts': lapis_manalis,'06-ew/dungeon/mount_rokkon.ts': mount_rokkon,'06-ew/dungeon/smileton.ts': smileton,'06-ew/dungeon/stigma_dreamscape.ts': stigma_dreamscape,'06-ew/dungeon/the_aitiascope.ts': the_aitiascope,'06-ew/dungeon/the_dead_ends.ts': the_dead_ends,'06-ew/dungeon/the_fell_court_of_troia.ts': the_fell_court_of_troia,'06-ew/dungeon/the_lunar_subteranne.ts': the_lunar_subteranne,'06-ew/dungeon/the_sildihn_subterrane.ts': the_sildihn_subterrane,'06-ew/dungeon/the_tower_of_babil.ts': the_tower_of_babil,'06-ew/dungeon/the_tower_of_zot.ts': the_tower_of_zot,'06-ew/dungeon/vanaspati.ts': vanaspati,'06-ew/raid/p10n.ts': p10n,'06-ew/raid/p10s.ts': p10s,'06-ew/raid/p11n.ts': p11n,'06-ew/raid/p11s.ts': p11s,'06-ew/raid/p12n.ts': p12n,'06-ew/raid/p12s.ts': p12s,'06-ew/raid/p1n.ts': p1n,'06-ew/raid/p1s.ts': p1s,'06-ew/raid/p2n.ts': p2n,'06-ew/raid/p2s.ts': p2s,'06-ew/raid/p3n.ts': p3n,'06-ew/raid/p3s.ts': p3s,'06-ew/raid/p4n.ts': p4n,'06-ew/raid/p4s.ts': p4s,'06-ew/raid/p5n.ts': p5n,'06-ew/raid/p5s.ts': p5s,'06-ew/raid/p6n.ts': p6n,'06-ew/raid/p6s.ts': p6s,'06-ew/raid/p7n.ts': p7n,'06-ew/raid/p7s.ts': p7s,'06-ew/raid/p8n.ts': p8n,'06-ew/raid/p8s.ts': p8s,'06-ew/raid/p9n.ts': p9n,'06-ew/raid/p9s.ts': p9s,'06-ew/trial/asura.ts': asura,'06-ew/trial/barbariccia-ex.ts': barbariccia_ex,'06-ew/trial/barbariccia.ts': barbariccia,'06-ew/trial/endsinger-ex.ts': endsinger_ex,'06-ew/trial/endsinger.ts': endsinger,'06-ew/trial/golbez-ex.ts': golbez_ex,'06-ew/trial/golbez.ts': golbez,'06-ew/trial/hydaelyn-ex.ts': hydaelyn_ex,'06-ew/trial/hydaelyn.ts': hydaelyn,'06-ew/trial/rubicante-ex.ts': rubicante_ex,'06-ew/trial/rubicante.ts': rubicante,'06-ew/trial/sephirot-un.ts': sephirot_un,'06-ew/trial/sophia-un.ts': sophia_un,'06-ew/trial/thordan-un.ts': thordan_un,'06-ew/trial/ultima-un.ts': ultima_un,'06-ew/trial/zeromus-ex.ts': zeromus_ex,'06-ew/trial/zeromus.ts': zeromus,'06-ew/trial/zodiark-ex.ts': zodiark_ex,'06-ew/trial/zodiark.ts': zodiark,'06-ew/trial/zurvan-un.ts': zurvan_un,'06-ew/ultimate/dragonsongs_reprise_ultimate.ts': dragonsongs_reprise_ultimate,'06-ew/ultimate/the_omega_protocol.ts': the_omega_protocol,'07-dt/alliance/jeuno-first-walk.ts': jeuno_first_walk,'07-dt/dungeon/alexandria.ts': alexandria,'07-dt/dungeon/ihuykatumu.ts': ihuykatumu,'07-dt/dungeon/meso-terminal.ts': meso_terminal,'07-dt/dungeon/origenics.ts': origenics,'07-dt/dungeon/skydeep-cenote.ts': skydeep_cenote,'07-dt/dungeon/strayborough-deadwalk.ts': strayborough_deadwalk,'07-dt/dungeon/the_underkeep.ts': the_underkeep,'07-dt/dungeon/vanguard.ts': vanguard,'07-dt/dungeon/worqor-zormor.ts': worqor_zormor,'07-dt/dungeon/yuweyawata.ts': yuweyawata,'07-dt/raid/r10s.ts': r10s,'07-dt/raid/r11n.ts': r11n,'07-dt/raid/r11s.ts': r11s,'07-dt/raid/r1n.ts': r1n,'07-dt/raid/r1s.ts': r1s,'07-dt/raid/r2n.ts': r2n,'07-dt/raid/r2s.ts': r2s,'07-dt/raid/r3n.ts': r3n,'07-dt/raid/r3s.ts': r3s,'07-dt/raid/r4n.ts': r4n,'07-dt/raid/r4s.ts': r4s,'07-dt/raid/r5n.ts': r5n,'07-dt/raid/r5s.ts': r5s,'07-dt/raid/r6n.ts': r6n,'07-dt/raid/r6s.ts': r6s,'07-dt/raid/r7n.ts': r7n,'07-dt/raid/r7s.ts': r7s,'07-dt/raid/r8n.ts': r8n,'07-dt/raid/r8s.ts': r8s,'07-dt/raid/r9s.ts': r9s,'07-dt/trial/byakko-un.ts': byakko_un,'07-dt/trial/seiryu-un.ts': seiryu_un,'07-dt/trial/suzaku-un.ts': suzaku_un,'07-dt/trial/tsukuyomi-un.ts': tsukuyomi_un,'07-dt/trial/valigarmanda-ex.ts': valigarmanda_ex,'07-dt/trial/valigarmanda.ts': valigarmanda,'07-dt/trial/zelenia-ex.ts': zelenia_ex,'07-dt/trial/zelenia.ts': zelenia,'07-dt/trial/zoraal-ja-ex.ts': zoraal_ja_ex,'07-dt/trial/zoraal-ja.ts': zoraal_ja,'07-dt/ultimate/futures_rewritten.ts': futures_rewritten,});

/***/ })

}]);