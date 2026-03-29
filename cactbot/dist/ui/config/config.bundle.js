/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// For consistency with Responses, Conditions
// are also functions.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  targetIsYou() {
    return (data, matches) => data.me === matches?.target;
  },
  targetIsNotYou() {
    return (data, matches) => data.me !== matches?.target;
  },
  caresAboutAOE() {
    return data => data.role === 'tank' || data.role === 'healer' || data.CanAddle() || data.CanFeint() || data.job === 'BLU';
  },
  caresAboutMagical() {
    return data => data.role === 'tank' || data.role === 'healer' || data.CanAddle() || data.job === 'BLU';
  },
  caresAboutPhysical() {
    return data => data.role === 'tank' || data.role === 'healer' || data.CanFeint() || data.job === 'BLU';
  }
});

/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _zone_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(588);


// Ordered as per duty finder.  This is intended to be used as ordering for
// any ui that is dealing with multiple zones / triggers.
//
// These are not things that cactbot necessarily supports, but things that it
// theoretically could be supporting in the future with raidboss and oopsy.
//
// Miscellaneous things like maps, hunts, carnivale, pvp, eureka
// should not be added here yet.
// See: https://github.com/quisquous/cactbot/issues/5069

const contentList = [
// General (cactbot custom zone id)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MatchAll */ .Z.MatchAll,
// Dungeons (A Realm Reborn)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Sastasha */ .Z.Sastasha, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheTamTaraDeepcroft */ .Z.TheTamTaraDeepcroft, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CopperbellMines */ .Z.CopperbellMines, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Halatali */ .Z.Halatali, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheThousandMawsOfTotoRak */ .Z.TheThousandMawsOfTotoRak, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HaukkeManor */ .Z.HaukkeManor, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].BrayfloxsLongstop */ .Z.BrayfloxsLongstop, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSunkenTempleOfQarn */ .Z.TheSunkenTempleOfQarn, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CuttersCry */ .Z.CuttersCry, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheStoneVigil */ .Z.TheStoneVigil, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DzemaelDarkhold */ .Z.DzemaelDarkhold, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAurumVale */ .Z.TheAurumVale, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWanderersPalace */ .Z.TheWanderersPalace, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CastrumMeridianum */ .Z.CastrumMeridianum, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ThePraetorium */ .Z.ThePraetorium, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AmdaporKeep */ .Z.AmdaporKeep, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].PharosSirius */ .Z.PharosSirius, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CopperbellMinesHard */ .Z.CopperbellMinesHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HaukkeManorHard */ .Z.HaukkeManorHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheLostCityOfAmdapor */ .Z.TheLostCityOfAmdapor, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HalataliHard */ .Z.HalataliHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].BrayfloxsLongstopHard */ .Z.BrayfloxsLongstopHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HullbreakerIsle */ .Z.HullbreakerIsle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheTamTaraDeepcroftHard */ .Z.TheTamTaraDeepcroftHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheStoneVigilHard */ .Z.TheStoneVigilHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Snowcloak */ .Z.Snowcloak, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SastashaHard */ .Z.SastashaHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSunkenTempleOfQarnHard */ .Z.TheSunkenTempleOfQarnHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheKeeperOfTheLake */ .Z.TheKeeperOfTheLake, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWanderersPalaceHard */ .Z.TheWanderersPalaceHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AmdaporKeepHard */ .Z.AmdaporKeepHard,
// Dungeons (Heavensward)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheDuskVigil */ .Z.TheDuskVigil, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SohmAl */ .Z.SohmAl, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAery */ .Z.TheAery, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheVault */ .Z.TheVault, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheGreatGubalLibrary */ .Z.TheGreatGubalLibrary, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAetherochemicalResearchFacility */ .Z.TheAetherochemicalResearchFacility, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Neverreap */ .Z.Neverreap, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheFractalContinuum */ .Z.TheFractalContinuum, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SaintMociannesArboretum */ .Z.SaintMociannesArboretum, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].PharosSiriusHard */ .Z.PharosSiriusHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAntitower */ .Z.TheAntitower, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheLostCityOfAmdaporHard */ .Z.TheLostCityOfAmdaporHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SohrKhai */ .Z.SohrKhai, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HullbreakerIsleHard */ .Z.HullbreakerIsleHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Xelphatol */ .Z.Xelphatol, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheGreatGubalLibraryHard */ .Z.TheGreatGubalLibraryHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].BaelsarsWall */ .Z.BaelsarsWall, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SohmAlHard */ .Z.SohmAlHard,
// Dungeons (Stormblood)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSirensongSea */ .Z.TheSirensongSea, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ShisuiOfTheVioletTides */ .Z.ShisuiOfTheVioletTides, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].BardamsMettle */ .Z.BardamsMettle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DomaCastle */ .Z.DomaCastle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CastrumAbania */ .Z.CastrumAbania, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlaMhigo */ .Z.AlaMhigo, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KuganeCastle */ .Z.KuganeCastle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheTempleOfTheFist */ .Z.TheTempleOfTheFist, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheDrownedCityOfSkalla */ .Z.TheDrownedCityOfSkalla, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HellsLid */ .Z.HellsLid, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheFractalContinuumHard */ .Z.TheFractalContinuumHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSwallowsCompass */ .Z.TheSwallowsCompass, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheBurn */ .Z.TheBurn, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SaintMociannesArboretumHard */ .Z.SaintMociannesArboretumHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheGhimlytDark */ .Z.TheGhimlytDark,
// Dungeons (Shadowbringers)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HolminsterSwitch */ .Z.HolminsterSwitch, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DohnMheg */ .Z.DohnMheg, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheQitanaRavel */ .Z.TheQitanaRavel, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MalikahsWell */ .Z.MalikahsWell, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MtGulg */ .Z.MtGulg, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Amaurot */ .Z.Amaurot, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheTwinning */ .Z.TheTwinning, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AkadaemiaAnyder */ .Z.AkadaemiaAnyder, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheGrandCosmos */ .Z.TheGrandCosmos, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnamnesisAnyder */ .Z.AnamnesisAnyder, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheHeroesGauntlet */ .Z.TheHeroesGauntlet, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MatoyasRelict */ .Z.MatoyasRelict, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Paglthan */ .Z.Paglthan,
// Dungeons (Endwalker)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheTowerOfZot */ .Z.TheTowerOfZot, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheTowerOfBabil */ .Z.TheTowerOfBabil, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Vanaspati */ .Z.Vanaspati, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KtisisHyperboreia */ .Z.KtisisHyperboreia, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAitiascope */ .Z.TheAitiascope, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheDeadEnds */ .Z.TheDeadEnds, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Smileton */ .Z.Smileton, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheStigmaDreamscape */ .Z.TheStigmaDreamscape, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlzadaalsLegacy */ .Z.AlzadaalsLegacy, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheFellCourtOfTroia */ .Z.TheFellCourtOfTroia, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].LapisManalis */ .Z.LapisManalis, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAetherfont */ .Z.TheAetherfont, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheLunarSubterrane */ .Z.TheLunarSubterrane,
// Dungeons (Dawntrail)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Ihuykatumu */ .Z.Ihuykatumu, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].WorqorZormor */ .Z.WorqorZormor, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSkydeepCenote */ .Z.TheSkydeepCenote, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Vanguard */ .Z.Vanguard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Origenics */ .Z.Origenics, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Alexandria */ .Z.Alexandria, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TenderValley */ .Z.TenderValley, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheStrayboroughDeadwalk */ .Z.TheStrayboroughDeadwalk, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].YuweyawataFieldStation */ .Z.YuweyawataFieldStation, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheUnderkeep */ .Z.TheUnderkeep, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMesoTerminal */ .Z.TheMesoTerminal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Mistwake */ .Z.Mistwake,
// Trials (A Realm Reborn)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheBowlOfEmbers */ .Z.TheBowlOfEmbers, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheNavel */ .Z.TheNavel, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheHowlingEye */ .Z.TheHowlingEye, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ThePortaDecumana */ .Z.ThePortaDecumana, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheChrysalis */ .Z.TheChrysalis, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ARelicRebornTheChimera */ .Z.ARelicRebornTheChimera, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ARelicRebornTheHydra */ .Z.ARelicRebornTheHydra, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].BattleOnTheBigBridge */ .Z.BattleOnTheBigBridge, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheDragonsNeck */ .Z.TheDragonsNeck, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].BattleInTheBigKeep */ .Z.BattleInTheBigKeep, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheBowlOfEmbersHard */ .Z.TheBowlOfEmbersHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheHowlingEyeHard */ .Z.TheHowlingEyeHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheNavelHard */ .Z.TheNavelHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ThornmarchHard */ .Z.ThornmarchHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWhorleaterHard */ .Z.TheWhorleaterHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheStrikingTreeHard */ .Z.TheStrikingTreeHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAkhAfahAmphitheatreHard */ .Z.TheAkhAfahAmphitheatreHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].UrthsFount */ .Z.UrthsFount,
// High-end Trials (A Realm Reborn)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladUltimasBane */ .Z.TheMinstrelsBalladUltimasBane, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheHowlingEyeExtreme */ .Z.TheHowlingEyeExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheNavelExtreme */ .Z.TheNavelExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheBowlOfEmbersExtreme */ .Z.TheBowlOfEmbersExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ThornmarchExtreme */ .Z.ThornmarchExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWhorleaterExtreme */ .Z.TheWhorleaterExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheStrikingTreeExtreme */ .Z.TheStrikingTreeExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAkhAfahAmphitheatreExtreme */ .Z.TheAkhAfahAmphitheatreExtreme,
// Trials (Heavensward)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ThokAstThokHard */ .Z.ThokAstThokHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheLimitlessBlueHard */ .Z.TheLimitlessBlueHard, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSingularityReactor */ .Z.TheSingularityReactor, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheFinalStepsOfFaith */ .Z.TheFinalStepsOfFaith, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ContainmentBayS1T7 */ .Z.ContainmentBayS1T7, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ContainmentBayP1T6 */ .Z.ContainmentBayP1T6, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ContainmentBayZ1T9 */ .Z.ContainmentBayZ1T9,
// High-end Trials (Heavensward)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheLimitlessBlueExtreme */ .Z.TheLimitlessBlueExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ThokAstThokExtreme */ .Z.ThokAstThokExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladThordansReign */ .Z.TheMinstrelsBalladThordansReign, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladNidhoggsRage */ .Z.TheMinstrelsBalladNidhoggsRage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ContainmentBayS1T7Extreme */ .Z.ContainmentBayS1T7Extreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ContainmentBayP1T6Extreme */ .Z.ContainmentBayP1T6Extreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ContainmentBayZ1T9Extreme */ .Z.ContainmentBayZ1T9Extreme,
// Trials (Stormblood)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ThePoolOfTribute */ .Z.ThePoolOfTribute, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Emanation */ .Z.Emanation, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheRoyalMenagerie */ .Z.TheRoyalMenagerie, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CastrumFluminis */ .Z.CastrumFluminis, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KuganeOhashi */ .Z.KuganeOhashi, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheGreatHunt */ .Z.TheGreatHunt, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheJadeStoa */ .Z.TheJadeStoa, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HellsKier */ .Z.HellsKier, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWreathOfSnakes */ .Z.TheWreathOfSnakes,
// High-end Trials (Stormblood)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ThePoolOfTributeExtreme */ .Z.ThePoolOfTributeExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EmanationExtreme */ .Z.EmanationExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladShinryusDomain */ .Z.TheMinstrelsBalladShinryusDomain, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladTsukuyomisPain */ .Z.TheMinstrelsBalladTsukuyomisPain, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheGreatHuntExtreme */ .Z.TheGreatHuntExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheJadeStoaExtreme */ .Z.TheJadeStoaExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HellsKierExtreme */ .Z.HellsKierExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWreathOfSnakesExtreme */ .Z.TheWreathOfSnakesExtreme,
// Trials (Shadowbringers)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheDancingPlague */ .Z.TheDancingPlague, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheCrownOfTheImmaculate */ .Z.TheCrownOfTheImmaculate, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheDyingGasp */ .Z.TheDyingGasp, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CinderDrift */ .Z.CinderDrift, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSeatOfSacrifice */ .Z.TheSeatOfSacrifice, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CastrumMarinum */ .Z.CastrumMarinum, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheCloudDeck */ .Z.TheCloudDeck,
// High-end Trials (Shadowbringers)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheDancingPlagueExtreme */ .Z.TheDancingPlagueExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheCrownOfTheImmaculateExtreme */ .Z.TheCrownOfTheImmaculateExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladHadessElegy */ .Z.TheMinstrelsBalladHadessElegy, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CinderDriftExtreme */ .Z.CinderDriftExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MemoriaMiseraExtreme */ .Z.MemoriaMiseraExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSeatOfSacrificeExtreme */ .Z.TheSeatOfSacrificeExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CastrumMarinumExtreme */ .Z.CastrumMarinumExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheCloudDeckExtreme */ .Z.TheCloudDeckExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAkhAfahAmphitheatreUnreal */ .Z.TheAkhAfahAmphitheatreUnreal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheNavelUnreal */ .Z.TheNavelUnreal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWhorleaterUnreal */ .Z.TheWhorleaterUnreal,
// Trials (Endwalker)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheDarkInside */ .Z.TheDarkInside, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMothercrystal */ .Z.TheMothercrystal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheFinalDay */ .Z.TheFinalDay, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].StormsCrown */ .Z.StormsCrown, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MountOrdeals */ .Z.MountOrdeals, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheVoidcastDais */ .Z.TheVoidcastDais, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAbyssalFracture */ .Z.TheAbyssalFracture, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheGildedAraya */ .Z.TheGildedAraya,
// High-end Trials (Endwalker)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladZodiarksFall */ .Z.TheMinstrelsBalladZodiarksFall, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladHydaelynsCall */ .Z.TheMinstrelsBalladHydaelynsCall, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladEndsingersAria */ .Z.TheMinstrelsBalladEndsingersAria, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].StormsCrownExtreme */ .Z.StormsCrownExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MountOrdealsExtreme */ .Z.MountOrdealsExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheVoidcastDaisExtreme */ .Z.TheVoidcastDaisExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAbyssalFractureExtreme */ .Z.TheAbyssalFractureExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].UltimasBaneUnreal */ .Z.UltimasBaneUnreal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ContainmentBayS1T7Unreal */ .Z.ContainmentBayS1T7Unreal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ContainmentBayP1T6Unreal */ .Z.ContainmentBayP1T6Unreal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ContainmentBayZ1T9Unreal */ .Z.ContainmentBayZ1T9Unreal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSingularityReactorUnreal */ .Z.TheSingularityReactorUnreal,
// Trials (Dawntrail)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].WorqorLarDor */ .Z.WorqorLarDor, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Everkeep */ .Z.Everkeep, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheInterphos */ .Z.TheInterphos, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Recollection */ .Z.Recollection, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheAgelessNecropolis */ .Z.TheAgelessNecropolis, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWindwardWilds */ .Z.TheWindwardWilds, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HellOnRails */ .Z.HellOnRails,
// High-end Trials (Dawntrail)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].WorqorLarDorExtreme */ .Z.WorqorLarDorExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EverkeepExtreme */ .Z.EverkeepExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladSphenesBurden */ .Z.TheMinstrelsBalladSphenesBurden, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].RecollectionExtreme */ .Z.RecollectionExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMinstrelsBalladNecronsEmbrace */ .Z.TheMinstrelsBalladNecronsEmbrace, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheJadeStoaUnreal */ .Z.TheJadeStoaUnreal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HellsKierUnreal */ .Z.HellsKierUnreal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWreathOfSnakesUnreal */ .Z.TheWreathOfSnakesUnreal, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWindwardWildsExtreme */ .Z.TheWindwardWildsExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].HellOnRailsExtreme */ .Z.HellOnRailsExtreme, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TsukuyomisPainUnreal */ .Z.TsukuyomisPainUnreal,
// Alliance Raids (A Realm Reborn)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheLabyrinthOfTheAncients */ .Z.TheLabyrinthOfTheAncients, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SyrcusTower */ .Z.SyrcusTower, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWorldOfDarkness */ .Z.TheWorldOfDarkness,
// Raids (A Realm Reborn)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheBindingCoilOfBahamutTurn1 */ .Z.TheBindingCoilOfBahamutTurn1, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheBindingCoilOfBahamutTurn2 */ .Z.TheBindingCoilOfBahamutTurn2, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheBindingCoilOfBahamutTurn3 */ .Z.TheBindingCoilOfBahamutTurn3, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheBindingCoilOfBahamutTurn4 */ .Z.TheBindingCoilOfBahamutTurn4, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheBindingCoilOfBahamutTurn5 */ .Z.TheBindingCoilOfBahamutTurn5, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSecondCoilOfBahamutTurn1 */ .Z.TheSecondCoilOfBahamutTurn1, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSecondCoilOfBahamutTurn2 */ .Z.TheSecondCoilOfBahamutTurn2, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSecondCoilOfBahamutTurn3 */ .Z.TheSecondCoilOfBahamutTurn3, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSecondCoilOfBahamutTurn4 */ .Z.TheSecondCoilOfBahamutTurn4, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheFinalCoilOfBahamutTurn1 */ .Z.TheFinalCoilOfBahamutTurn1, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheFinalCoilOfBahamutTurn2 */ .Z.TheFinalCoilOfBahamutTurn2, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheFinalCoilOfBahamutTurn3 */ .Z.TheFinalCoilOfBahamutTurn3, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheFinalCoilOfBahamutTurn4 */ .Z.TheFinalCoilOfBahamutTurn4,
// Savage Raids (A Realm Reborn)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSecondCoilOfBahamutSavageTurn1 */ .Z.TheSecondCoilOfBahamutSavageTurn1, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSecondCoilOfBahamutSavageTurn2 */ .Z.TheSecondCoilOfBahamutSavageTurn2, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSecondCoilOfBahamutSavageTurn3 */ .Z.TheSecondCoilOfBahamutSavageTurn3, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSecondCoilOfBahamutSavageTurn4 */ .Z.TheSecondCoilOfBahamutSavageTurn4,
// Alliance Raids (Heavensward)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheVoidArk */ .Z.TheVoidArk, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWeepingCityOfMhach */ .Z.TheWeepingCityOfMhach, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DunScaith */ .Z.DunScaith,
// Normal Raids (Heavensward)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheFistOfTheFather */ .Z.AlexanderTheFistOfTheFather, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheCuffOfTheFather */ .Z.AlexanderTheCuffOfTheFather, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheArmOfTheFather */ .Z.AlexanderTheArmOfTheFather, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheBurdenOfTheFather */ .Z.AlexanderTheBurdenOfTheFather, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheFistOfTheSon */ .Z.AlexanderTheFistOfTheSon, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheCuffOfTheSon */ .Z.AlexanderTheCuffOfTheSon, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheArmOfTheSon */ .Z.AlexanderTheArmOfTheSon, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheBurdenOfTheSon */ .Z.AlexanderTheBurdenOfTheSon, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheEyesOfTheCreator */ .Z.AlexanderTheEyesOfTheCreator, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheBreathOfTheCreator */ .Z.AlexanderTheBreathOfTheCreator, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheHeartOfTheCreator */ .Z.AlexanderTheHeartOfTheCreator, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheSoulOfTheCreator */ .Z.AlexanderTheSoulOfTheCreator,
// Savage Raids (Heavensward)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheFistOfTheFatherSavage */ .Z.AlexanderTheFistOfTheFatherSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheCuffOfTheFatherSavage */ .Z.AlexanderTheCuffOfTheFatherSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheArmOfTheFatherSavage */ .Z.AlexanderTheArmOfTheFatherSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheBurdenOfTheFatherSavage */ .Z.AlexanderTheBurdenOfTheFatherSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheFistOfTheSonSavage */ .Z.AlexanderTheFistOfTheSonSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheCuffOfTheSonSavage */ .Z.AlexanderTheCuffOfTheSonSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheArmOfTheSonSavage */ .Z.AlexanderTheArmOfTheSonSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheBurdenOfTheSonSavage */ .Z.AlexanderTheBurdenOfTheSonSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheEyesOfTheCreatorSavage */ .Z.AlexanderTheEyesOfTheCreatorSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheBreathOfTheCreatorSavage */ .Z.AlexanderTheBreathOfTheCreatorSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheHeartOfTheCreatorSavage */ .Z.AlexanderTheHeartOfTheCreatorSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlexanderTheSoulOfTheCreatorSavage */ .Z.AlexanderTheSoulOfTheCreatorSavage,
// Alliance Raids (Stormblood)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheRoyalCityOfRabanastre */ .Z.TheRoyalCityOfRabanastre, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheRidoranaLighthouse */ .Z.TheRidoranaLighthouse, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheOrbonneMonastery */ .Z.TheOrbonneMonastery,
// Normal Raids (Stormblood)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DeltascapeV10 */ .Z.DeltascapeV10, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DeltascapeV20 */ .Z.DeltascapeV20, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DeltascapeV30 */ .Z.DeltascapeV30, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DeltascapeV40 */ .Z.DeltascapeV40, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SigmascapeV10 */ .Z.SigmascapeV10, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SigmascapeV20 */ .Z.SigmascapeV20, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SigmascapeV30 */ .Z.SigmascapeV30, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SigmascapeV40 */ .Z.SigmascapeV40, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlphascapeV10 */ .Z.AlphascapeV10, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlphascapeV20 */ .Z.AlphascapeV20, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlphascapeV30 */ .Z.AlphascapeV30, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlphascapeV40 */ .Z.AlphascapeV40,
// Savage Raids (Stormblood)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DeltascapeV10Savage */ .Z.DeltascapeV10Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DeltascapeV20Savage */ .Z.DeltascapeV20Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DeltascapeV30Savage */ .Z.DeltascapeV30Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DeltascapeV40Savage */ .Z.DeltascapeV40Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SigmascapeV10Savage */ .Z.SigmascapeV10Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SigmascapeV20Savage */ .Z.SigmascapeV20Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SigmascapeV30Savage */ .Z.SigmascapeV30Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SigmascapeV40Savage */ .Z.SigmascapeV40Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlphascapeV10Savage */ .Z.AlphascapeV10Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlphascapeV20Savage */ .Z.AlphascapeV20Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlphascapeV30Savage */ .Z.AlphascapeV30Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AlphascapeV40Savage */ .Z.AlphascapeV40Savage,
// Alliance Raids (Shadowbringers)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheCopiedFactory */ .Z.TheCopiedFactory, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ThePuppetsBunker */ .Z.ThePuppetsBunker, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheTowerAtParadigmsBreach */ .Z.TheTowerAtParadigmsBreach,
// Normal Raids (Shadowbringers)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensGateResurrection */ .Z.EdensGateResurrection, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensGateDescent */ .Z.EdensGateDescent, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensGateInundation */ .Z.EdensGateInundation, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensGateSepulture */ .Z.EdensGateSepulture, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensVerseFulmination */ .Z.EdensVerseFulmination, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensVerseFuror */ .Z.EdensVerseFuror, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensVerseIconoclasm */ .Z.EdensVerseIconoclasm, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensVerseRefulgence */ .Z.EdensVerseRefulgence, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensPromiseUmbra */ .Z.EdensPromiseUmbra, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensPromiseLitany */ .Z.EdensPromiseLitany, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensPromiseAnamorphosis */ .Z.EdensPromiseAnamorphosis, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensPromiseEternity */ .Z.EdensPromiseEternity,
// Savage Raids (Shadowbringers)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensGateResurrectionSavage */ .Z.EdensGateResurrectionSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensGateDescentSavage */ .Z.EdensGateDescentSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensGateInundationSavage */ .Z.EdensGateInundationSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensGateSepultureSavage */ .Z.EdensGateSepultureSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensVerseFulminationSavage */ .Z.EdensVerseFulminationSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensVerseFurorSavage */ .Z.EdensVerseFurorSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensVerseIconoclasmSavage */ .Z.EdensVerseIconoclasmSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensVerseRefulgenceSavage */ .Z.EdensVerseRefulgenceSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensPromiseUmbraSavage */ .Z.EdensPromiseUmbraSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensPromiseLitanySavage */ .Z.EdensPromiseLitanySavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensPromiseAnamorphosisSavage */ .Z.EdensPromiseAnamorphosisSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].EdensPromiseEternitySavage */ .Z.EdensPromiseEternitySavage,
// Alliance Raids (Endwalker)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Aglaia */ .Z.Aglaia, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Euphrosyne */ .Z.Euphrosyne, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Thaleia */ .Z.Thaleia,
// Normal Raids (Endwalker)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AsphodelosTheFirstCircle */ .Z.AsphodelosTheFirstCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AsphodelosTheSecondCircle */ .Z.AsphodelosTheSecondCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AsphodelosTheThirdCircle */ .Z.AsphodelosTheThirdCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AsphodelosTheFourthCircle */ .Z.AsphodelosTheFourthCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AbyssosTheFifthCircle */ .Z.AbyssosTheFifthCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AbyssosTheSixthCircle */ .Z.AbyssosTheSixthCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AbyssosTheSeventhCircle */ .Z.AbyssosTheSeventhCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AbyssosTheEighthCircle */ .Z.AbyssosTheEighthCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnabaseiosTheNinthCircle */ .Z.AnabaseiosTheNinthCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnabaseiosTheTenthCircle */ .Z.AnabaseiosTheTenthCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnabaseiosTheEleventhCircle */ .Z.AnabaseiosTheEleventhCircle, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnabaseiosTheTwelfthCircle */ .Z.AnabaseiosTheTwelfthCircle,
// Savage Raids (Endwalker)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AsphodelosTheFirstCircleSavage */ .Z.AsphodelosTheFirstCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AsphodelosTheSecondCircleSavage */ .Z.AsphodelosTheSecondCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AsphodelosTheThirdCircleSavage */ .Z.AsphodelosTheThirdCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AsphodelosTheFourthCircleSavage */ .Z.AsphodelosTheFourthCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AbyssosTheFifthCircleSavage */ .Z.AbyssosTheFifthCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AbyssosTheSixthCircleSavage */ .Z.AbyssosTheSixthCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AbyssosTheSeventhCircleSavage */ .Z.AbyssosTheSeventhCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AbyssosTheEighthCircleSavage */ .Z.AbyssosTheEighthCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnabaseiosTheNinthCircleSavage */ .Z.AnabaseiosTheNinthCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnabaseiosTheTenthCircleSavage */ .Z.AnabaseiosTheTenthCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnabaseiosTheEleventhCircleSavage */ .Z.AnabaseiosTheEleventhCircleSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnabaseiosTheTwelfthCircleSavage */ .Z.AnabaseiosTheTwelfthCircleSavage,
// Alliance Raids (Dawntrail)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].JeunoTheFirstWalk */ .Z.JeunoTheFirstWalk, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SanDoriaTheSecondWalk */ .Z.SanDoriaTheSecondWalk,
// Normal Raids (Dawntrail)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacLightHeavyweightM1 */ .Z.AacLightHeavyweightM1, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacLightHeavyweightM2 */ .Z.AacLightHeavyweightM2, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacLightHeavyweightM3 */ .Z.AacLightHeavyweightM3, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacLightHeavyweightM4 */ .Z.AacLightHeavyweightM4, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacCruiserweightM1 */ .Z.AacCruiserweightM1, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacCruiserweightM2 */ .Z.AacCruiserweightM2, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacCruiserweightM3 */ .Z.AacCruiserweightM3, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacCruiserweightM4 */ .Z.AacCruiserweightM4, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacHeavyweightM1 */ .Z.AacHeavyweightM1, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacHeavyweightM2 */ .Z.AacHeavyweightM2, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacHeavyweightM3 */ .Z.AacHeavyweightM3, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacHeavyweightM4 */ .Z.AacHeavyweightM4,
// Savage Raids (Dawntrail)
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacLightHeavyweightM1Savage */ .Z.AacLightHeavyweightM1Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacLightHeavyweightM2Savage */ .Z.AacLightHeavyweightM2Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacLightHeavyweightM3Savage */ .Z.AacLightHeavyweightM3Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacLightHeavyweightM4Savage */ .Z.AacLightHeavyweightM4Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacCruiserweightM1Savage */ .Z.AacCruiserweightM1Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacCruiserweightM2Savage */ .Z.AacCruiserweightM2Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacCruiserweightM3Savage */ .Z.AacCruiserweightM3Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacCruiserweightM4Savage */ .Z.AacCruiserweightM4Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacHeavyweightM1Savage */ .Z.AacHeavyweightM1Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacHeavyweightM2Savage */ .Z.AacHeavyweightM2Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacHeavyweightM3Savage */ .Z.AacHeavyweightM3Savage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AacHeavyweightM4Savage */ .Z.AacHeavyweightM4Savage,
// Variant & Criterion Dungeons
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheSildihnSubterrane */ .Z.TheSildihnSubterrane, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnotherSildihnSubterrane */ .Z.AnotherSildihnSubterrane, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnotherSildihnSubterraneSavage */ .Z.AnotherSildihnSubterraneSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MountRokkon */ .Z.MountRokkon, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnotherMountRokkon */ .Z.AnotherMountRokkon, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnotherMountRokkonSavage */ .Z.AnotherMountRokkonSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AloaloIsland */ .Z.AloaloIsland, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnotherAloaloIsland */ .Z.AnotherAloaloIsland, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnotherAloaloIslandSavage */ .Z.AnotherAloaloIslandSavage, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMerchantsTale */ .Z.TheMerchantsTale, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheMerchantsTaleAdvanced */ .Z.TheMerchantsTaleAdvanced, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].AnotherMerchantsTale */ .Z.AnotherMerchantsTale,
// Chaotic Alliance Raids
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheCloudOfDarknessChaotic */ .Z.TheCloudOfDarknessChaotic,
// Ultimate Raids
_zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheUnendingCoilOfBahamutUltimate */ .Z.TheUnendingCoilOfBahamutUltimate, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheWeaponsRefrainUltimate */ .Z.TheWeaponsRefrainUltimate, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheEpicOfAlexanderUltimate */ .Z.TheEpicOfAlexanderUltimate, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DragonsongsRepriseUltimate */ .Z.DragonsongsRepriseUltimate, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TheOmegaProtocolUltimate */ .Z.TheOmegaProtocolUltimate, _zone_id__WEBPACK_IMPORTED_MODULE_0__/* ["default"].FuturesRewrittenUltimate */ .Z.FuturesRewrittenUltimate];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentList);

/***/ }),

/***/ 873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Auto-generated from gen_zone_id_and_info.ts
// DO NOT EDIT THIS FILE DIRECTLY

const data = {
  'ChaoticAllianceRaid': 37,
  'Companions': 12,
  'CustomDeliveries': 25,
  'DeepDungeonExtras': 39,
  'DeepDungeons': 21,
  'DisciplesOfTheHand': 17,
  'DisciplesOfTheLand': 16,
  'Dungeons': 2,
  'DutyRoulette': 1,
  'Eureka': 26,
  'Fates': 8,
  'Fishing': 34,
  'Gate': 35,
  'GoldSaucer': 19,
  'GrandCompany': 11,
  'Guildhests': 3,
  'HallOfTheNovice': 20,
  'IslandSanctuary': 36,
  'Levequests': 10,
  'OccultCrescent': 38,
  'OceanFishing': 31,
  'OverallCompletion': 14,
  'PlayerCommendation': 15,
  'Pvp': 6,
  'QuestBattles': 7,
  'Raids': 5,
  'RetainerVentures': 18,
  'SaveTheQueen': 29,
  'SeasonalEvents': 22,
  'SocietyQuests': 13,
  'TheDiadem': 23,
  'TheHunt': 33,
  'TheMaskedCarnivale': 27,
  'TreasureHunt': 9,
  'Trials': 4,
  'TripleTriad': 32,
  'UltimateRaids': 28,
  'VCDungeonFinder': 30,
  'WondrousTails': 24
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Go": () => (/* binding */ langToLocale),
/* harmony export */   "jd": () => (/* binding */ isLang)
/* harmony export */ });
/* unused harmony exports languages, langMap, localesToLang, browserLanguagesToLang */
const languages = ['en', 'de', 'fr', 'ja', 'cn', 'tc', 'ko'];
const langMap = {
  en: {
    en: 'English',
    de: 'German',
    fr: 'French',
    ja: 'Japanese',
    cn: 'Chinese',
    ko: 'Korean',
    tc: 'Traditional Chinese'
  },
  de: {
    en: 'Englisch',
    de: 'Deutsch',
    fr: 'Französisch',
    ja: 'Japanisch',
    cn: 'Chinesisch',
    ko: 'Koreanisch',
    tc: 'Traditionelles Chinesisch'
  },
  fr: {
    en: 'Anglais',
    de: 'Allemand',
    fr: 'Français',
    ja: 'Japonais',
    cn: 'Chinois',
    ko: 'Coréen',
    tc: 'Chinois traditionnel'
  },
  ja: {
    en: '英語',
    de: 'ドイツ語',
    fr: 'フランス語',
    ja: '日本語',
    cn: '中国語',
    ko: '韓国語',
    tc: '中国語(繁体字)'
  },
  cn: {
    en: '英文',
    de: '德文',
    fr: '法文',
    ja: '日文',
    cn: '中文',
    ko: '韩文',
    tc: '繁体中文'
  },
  ko: {
    en: '영어',
    de: '독일어',
    fr: '프랑스어',
    ja: '일본어',
    cn: '중국어',
    ko: '한국어',
    tc: '중국어(번체)'
  },
  tc: {
    en: '英文',
    de: '德文',
    fr: '法文',
    ja: '日文',
    cn: '中文',
    ko: '韓文',
    tc: '繁體中文'
  }
};
const isLang = lang => {
  const langStrs = languages;
  if (lang === undefined) return false;
  return langStrs.includes(lang);
};
const langToLocale = lang => {
  return {
    en: 'en',
    de: 'de',
    fr: 'fr',
    ja: 'ja',
    cn: 'zh-CN',
    ko: 'ko',
    tc: 'zh-TW'
  }[lang];
};
const localesToLang = locales => {
  const mapLanguage = lang => {
    // Handle Chinese variants
    if (lang.startsWith('zh-')) {
      const region = lang.slice(3).toUpperCase();
      switch (region) {
        case 'HK':
        case 'MO':
        case 'TW':
        case 'HANT':
          return 'tc';
        default:
          return 'cn';
      }
    }
    return lang.slice(0, 2);
  };
  const lang = [...locales, 'en'].map(mapLanguage).filter(l => languages.includes(l))[0];
  return isLang(lang) ? lang : 'en';
};
const browserLanguagesToLang = () => localesToLang(navigator.languages);

/***/ }),

/***/ 21:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ logDefinitionsVersions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Specifies a fieldName key with one or more possible values and a `canAnonyize` override
// if that field and value are present on the log line. See 'GameLog' for an example.
// Options for including these lines in a filtered log via the log splitter's analysis option.
// `include:` specifies the level of inclusion:
//   - 'all' will include all lines with no filtering.
//   - 'filter' will include only those lines that match at least one of the specified `filters`.
//   - 'never' is an override; just like if the property were omitted, no log lines will be included
//      in the filter; however, if 'never' is used, the automated workflow will not attempt to
//      change it to 'all' upon finding active triggers using this line type.
// `filters:` contains Netregex-style filter criteria. Lines satisfying at least one filter will be
//   included. If `include:` = 'filter', `filters` must be present; otherwise, it must be omitted.
// `combatantIdFields:` are field indices containing combatantIds. If specified, these fields
//   will be checked for ignored combatants (e.g. pets) during log filtering.
// TODO: Maybe bring in a helper library that can compile-time extract these keys instead?
const combatantMemoryKeys = ['CurrentWorldID', 'WorldID', 'WorldName', 'BNpcID', 'BNpcNameID', 'PartyType', 'ID', 'OwnerID', 'WeaponId', 'Type', 'Job', 'Level', 'Name', 'CurrentHP', 'MaxHP', 'CurrentMP', 'MaxMP', 'PosX', 'PosY', 'PosZ', 'Heading', 'MonsterType', 'Status', 'ModelStatus', 'AggressionStatus', 'TargetID', 'IsTargetable', 'Radius', 'Distance', 'EffectiveDistance', 'NPCTargetID', 'CurrentGP', 'MaxGP', 'CurrentCP', 'MaxCP', 'PCTargetID', 'IsCasting1', 'IsCasting2', 'CastBuffID', 'CastTargetID', 'CastGroundTargetX', 'CastGroundTargetY', 'CastGroundTargetZ', 'CastDurationCurrent', 'CastDurationMax', 'TransformationId'];
const latestLogDefinitions = {
  GameLog: {
    type: '00',
    name: 'GameLog',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChatLog',
    fields: {
      type: 0,
      timestamp: 1,
      code: 2,
      name: 3,
      line: 4
    },
    subFields: {
      code: {
        '0039': {
          name: 'message',
          canAnonymize: true
        },
        '0038': {
          name: 'echo',
          canAnonymize: true
        },
        '0044': {
          name: 'dialog',
          canAnonymize: true
        },
        '0839': {
          name: 'message',
          canAnonymize: true
        }
      }
    },
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        code: ['0044', '0839']
      }
    }
  },
  ChangeZone: {
    type: '01',
    name: 'ChangeZone',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Territory',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
    },
    lastInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  ChangedPlayer: {
    type: '02',
    name: 'ChangedPlayer',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChangePrimaryPlayer',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
    },
    playerIds: {
      2: 3
    },
    lastInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  AddedCombatant: {
    type: '03',
    name: 'AddedCombatant',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'AddCombatant',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      job: 4,
      level: 5,
      ownerId: 6,
      worldId: 7,
      world: 8,
      npcNameId: 9,
      npcBaseId: 10,
      currentHp: 11,
      hp: 12,
      currentMp: 13,
      mp: 14,
      // maxTp: 15,
      // tp: 16,
      x: 17,
      y: 18,
      z: 19,
      heading: 20
    },
    playerIds: {
      2: 3,
      6: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        id: '4.{7}'
      },
      // NPC combatants only
      combatantIdFields: 2
    }
  },
  RemovedCombatant: {
    type: '04',
    name: 'RemovedCombatant',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'RemoveCombatant',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      job: 4,
      level: 5,
      owner: 6,
      world: 8,
      npcNameId: 9,
      npcBaseId: 10,
      currentHp: 11,
      hp: 12,
      currentMp: 13,
      mp: 14,
      // currentTp: 15,
      // maxTp: 16,
      x: 17,
      y: 18,
      z: 19,
      heading: 20
    },
    playerIds: {
      2: 3,
      6: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        id: '4.{7}'
      },
      // NPC combatants only
      combatantIdFields: 2
    }
  },
  PartyList: {
    type: '11',
    name: 'PartyList',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PartyList',
    fields: {
      type: 0,
      timestamp: 1,
      partyCount: 2,
      id0: 3,
      id1: 4,
      id2: 5,
      id3: 6,
      id4: 7,
      id5: 8,
      id6: 9,
      id7: 10,
      id8: 11,
      id9: 12,
      id10: 13,
      id11: 14,
      id12: 15,
      id13: 16,
      id14: 17,
      id15: 18,
      id16: 19,
      id17: 20,
      id18: 21,
      id19: 22,
      id20: 23,
      id21: 24,
      id22: 25,
      id23: 26
    },
    playerIds: {
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
      21: null,
      22: null,
      23: null,
      24: null,
      25: null,
      26: null
    },
    firstOptionalField: 3,
    canAnonymize: true,
    lastInclude: true
  },
  PlayerStats: {
    type: '12',
    name: 'PlayerStats',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PlayerStats',
    fields: {
      type: 0,
      timestamp: 1,
      job: 2,
      strength: 3,
      dexterity: 4,
      vitality: 5,
      intelligence: 6,
      mind: 7,
      piety: 8,
      attackPower: 9,
      directHit: 10,
      criticalHit: 11,
      attackMagicPotency: 12,
      healMagicPotency: 13,
      determination: 14,
      skillSpeed: 15,
      spellSpeed: 16,
      tenacity: 18,
      localContentId: 19
    },
    canAnonymize: true,
    lastInclude: true,
    firstOptionalField: undefined
  },
  StartsUsing: {
    type: '20',
    name: 'StartsUsing',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StartsCasting',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      castTime: 8,
      x: 9,
      y: 10,
      z: 11,
      heading: 12
    },
    possibleRsvFields: 5,
    blankFields: [6],
    playerIds: {
      2: 3,
      6: 7
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC casts only
      combatantIdFields: [2, 6]
    }
  },
  Ability: {
    type: '21',
    name: 'Ability',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ActionEffect',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      flags: 8,
      damage: 9,
      targetCurrentHp: 24,
      targetMaxHp: 25,
      targetCurrentMp: 26,
      targetMaxMp: 27,
      // targetCurrentTp: 28,
      // targetMaxTp: 29,
      targetX: 30,
      targetY: 31,
      targetZ: 32,
      targetHeading: 33,
      currentHp: 34,
      maxHp: 35,
      currentMp: 36,
      maxMp: 37,
      // currentTp: 38;
      // maxTp: 39;
      x: 40,
      y: 41,
      z: 42,
      heading: 43,
      sequence: 44,
      targetIndex: 45,
      targetCount: 46,
      ownerId: 47,
      ownerName: 48,
      effectDisplayType: 49,
      actionId: 50,
      actionAnimationId: 51,
      animationLockTime: 52,
      rotationHex: 53
    },
    possibleRsvFields: 5,
    playerIds: {
      2: 3,
      6: 7,
      47: 48
    },
    blankFields: [6, 47, 48],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC abilities only
      combatantIdFields: [2, 6]
    }
  },
  NetworkAOEAbility: {
    type: '22',
    name: 'NetworkAOEAbility',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'AOEActionEffect',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      flags: 8,
      damage: 9,
      targetCurrentHp: 24,
      targetMaxHp: 25,
      targetCurrentMp: 26,
      targetMaxMp: 27,
      // targetCurrentTp: 28,
      // targetMaxTp: 29,
      targetX: 30,
      targetY: 31,
      targetZ: 32,
      targetHeading: 33,
      currentHp: 34,
      maxHp: 35,
      currentMp: 36,
      maxMp: 37,
      // currentTp: 38;
      // maxTp: 39;
      x: 40,
      y: 41,
      z: 42,
      heading: 43,
      sequence: 44,
      targetIndex: 45,
      targetCount: 46,
      ownerId: 47,
      ownerName: 48,
      effectDisplayType: 49,
      actionId: 50,
      actionAnimationId: 51,
      animationLockTime: 52,
      rotationHex: 53
    },
    possibleRsvFields: 5,
    playerIds: {
      2: 3,
      6: 7,
      47: 48
    },
    blankFields: [6, 47, 48],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC abilities only
      combatantIdFields: [2, 6]
    }
  },
  NetworkCancelAbility: {
    type: '23',
    name: 'NetworkCancelAbility',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'CancelAction',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      name: 5,
      reason: 6
    },
    possibleRsvFields: 5,
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC combatants only
      combatantIdFields: 2
    }
  },
  NetworkDoT: {
    type: '24',
    name: 'NetworkDoT',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'DoTHoT',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      which: 4,
      effectId: 5,
      damage: 6,
      currentHp: 7,
      maxHp: 8,
      currentMp: 9,
      maxMp: 10,
      // currentTp: 11,
      // maxTp: 12,
      x: 13,
      y: 14,
      z: 15,
      heading: 16,
      sourceId: 17,
      source: 18,
      // An id number lookup into the AttackType table
      damageType: 19,
      sourceCurrentHp: 20,
      sourceMaxHp: 21,
      sourceCurrentMp: 22,
      sourceMaxMp: 23,
      // sourceCurrentTp: 24,
      // sourceMaxTp: 25,
      sourceX: 26,
      sourceY: 27,
      sourceZ: 28,
      sourceHeading: 29
    },
    playerIds: {
      2: 3,
      17: 18
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        // DoT on player with valid effectId
        id: '1.{7}',
        which: 'DoT',
        effectId: '0*?[1-9A-F][0-9A-F]*' // non-zero, non-empty, possibly-padded value
      },

      combatantIdFields: [2, 17]
    }
  },
  WasDefeated: {
    type: '25',
    name: 'WasDefeated',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Death',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      sourceId: 4,
      source: 5
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        targetId: '4.{7}'
      },
      // NPC combatants only
      combatantIdFields: 2 // don't apply to sourceId; an ignored combatant is a valid source
    }
  },

  GainsEffect: {
    type: '26',
    name: 'GainsEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusAdd',
    fields: {
      type: 0,
      timestamp: 1,
      effectId: 2,
      effect: 3,
      duration: 4,
      sourceId: 5,
      source: 6,
      targetId: 7,
      target: 8,
      count: 9,
      targetMaxHp: 10,
      sourceMaxHp: 11
    },
    possibleRsvFields: 3,
    playerIds: {
      5: 6,
      7: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: [{
        // effect from environment/NPC applied to player
        sourceId: '[E4].{7}',
        targetId: '1.{7}'
      }, {
        // effect from environment/NPC applied to NPC (including itself)
        sourceId: '[E4].{7}',
        targetId: '4.{7}'
      }, {
        // known effectIds of interest
        effectId: ['B9A', '808']
      }],
      combatantIdFields: [5, 7]
    }
  },
  HeadMarker: {
    type: '27',
    name: 'HeadMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'TargetIcon',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      id: 6,
      data0: 7
    },
    playerIds: {
      2: 3
    },
    possiblePlayerIds: [7],
    canAnonymize: true,
    firstOptionalField: 7,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  NetworkRaidMarker: {
    type: '28',
    name: 'NetworkRaidMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'WaymarkMarker',
    fields: {
      type: 0,
      timestamp: 1,
      operation: 2,
      waymark: 3,
      id: 4,
      name: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkTargetMarker: {
    type: '29',
    name: 'NetworkTargetMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'SignMarker',
    fields: {
      type: 0,
      timestamp: 1,
      operation: 2,
      // Add, Update, Delete
      waymark: 3,
      id: 4,
      name: 5,
      targetId: 6,
      targetName: 7
    },
    playerIds: {
      4: 5,
      6: 7
    },
    firstOptionalField: undefined
  },
  LosesEffect: {
    type: '30',
    name: 'LosesEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusRemove',
    fields: {
      type: 0,
      timestamp: 1,
      effectId: 2,
      effect: 3,
      sourceId: 5,
      source: 6,
      targetId: 7,
      target: 8,
      count: 9
    },
    possibleRsvFields: 3,
    playerIds: {
      5: 6,
      7: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: [{
        // effect from environment/NPC applied to player
        sourceId: '[E4].{7}',
        targetId: '1.{7}'
      }, {
        // effect from environment/NPC applied to NPC (including itself)
        sourceId: '[E4].{7}',
        targetId: '4.{7}'
      }, {
        // known effectIds of interest
        effectId: ['B9A', '808']
      }],
      combatantIdFields: [5, 7]
    }
  },
  NetworkGauge: {
    type: '31',
    name: 'NetworkGauge',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Gauge',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      data0: 3,
      data1: 4,
      data2: 5,
      data3: 6
    },
    playerIds: {
      2: null
    },
    // Sometimes this last field looks like a player id.
    // For safety, anonymize all of the gauge data.
    firstUnknownField: 3,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkWorld: {
    type: '32',
    name: 'NetworkWorld',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'World',
    fields: {
      type: 0,
      timestamp: 1
    },
    isUnknown: true,
    firstOptionalField: undefined
  },
  ActorControl: {
    type: '33',
    name: 'ActorControl',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Director',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      command: 3,
      data0: 4,
      data1: 5,
      data2: 6,
      data3: 7
    },
    possiblePlayerIds: [4, 5, 6, 7],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  NameToggle: {
    type: '34',
    name: 'NameToggle',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'NameToggle',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      targetId: 4,
      targetName: 5,
      toggle: 6
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  Tether: {
    type: '35',
    name: 'Tether',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Tether',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      targetId: 4,
      target: 5,
      id: 8
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstUnknownField: 9,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: [2, 4]
    }
  },
  LimitBreak: {
    type: '36',
    name: 'LimitBreak',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'LimitBreak',
    fields: {
      type: 0,
      timestamp: 1,
      valueHex: 2,
      bars: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkEffectResult: {
    type: '37',
    name: 'NetworkEffectResult',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'EffectResult',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      sequenceId: 4,
      currentHp: 5,
      maxHp: 6,
      currentMp: 7,
      maxMp: 8,
      currentShield: 9,
      // Field index 10 is always `0`
      x: 11,
      y: 12,
      z: 13,
      heading: 14
    },
    playerIds: {
      2: 3
    },
    firstUnknownField: 22,
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  StatusEffect: {
    type: '38',
    name: 'StatusEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusList',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      jobLevelData: 4,
      hp: 5,
      maxHp: 6,
      mp: 7,
      maxMp: 8,
      currentShield: 9,
      // Field index 10 is always `0`
      x: 11,
      y: 12,
      z: 13,
      heading: 14,
      data0: 15,
      data1: 16,
      data2: 17,
      data3: 18,
      data4: 19,
      data5: 20
      // Variable number of triplets here, but at least one.
    },

    playerIds: {
      2: 3
    },
    firstUnknownField: 18,
    canAnonymize: true,
    firstOptionalField: 18
  },
  NetworkUpdateHP: {
    type: '39',
    name: 'NetworkUpdateHP',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'UpdateHp',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      currentHp: 4,
      maxHp: 5,
      currentMp: 6,
      maxMp: 7,
      // currentTp: 8,
      // maxTp: 9,
      x: 10,
      y: 11,
      z: 12,
      heading: 13
    },
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Map: {
    type: '40',
    name: 'Map',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChangeMap',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      regionName: 3,
      placeName: 4,
      placeNameSub: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    lastInclude: true,
    analysisOptions: {
      include: 'all'
    }
  },
  SystemLogMessage: {
    type: '41',
    name: 'SystemLogMessage',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'SystemLogMessage',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      id: 3,
      param0: 4,
      param1: 5,
      param2: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  StatusList3: {
    type: '42',
    name: 'StatusList3',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusList3',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
      // triplets of fields from here (effectId, data, playerId)?
    },

    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: 4,
    firstUnknownField: 4
  },
  ParserInfo: {
    type: '249',
    name: 'ParserInfo',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Settings',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ProcessInfo: {
    type: '250',
    name: 'ProcessInfo',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Process',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Debug: {
    type: '251',
    name: 'Debug',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Debug',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: false,
    firstOptionalField: undefined
  },
  PacketDump: {
    type: '252',
    name: 'PacketDump',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PacketDump',
    fields: {
      type: 0,
      timestamp: 1
    },
    canAnonymize: false,
    firstOptionalField: undefined
  },
  Version: {
    type: '253',
    name: 'Version',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Version',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Error: {
    type: '254',
    name: 'Error',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Error',
    fields: {
      type: 0,
      timestamp: 1
    },
    canAnonymize: false,
    firstOptionalField: undefined
  },
  None: {
    type: '[0-9]+',
    name: 'None',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'None',
    fields: {
      type: 0,
      timestamp: 1
    },
    isUnknown: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  // OverlayPlugin log lines
  LineRegistration: {
    type: '256',
    name: 'LineRegistration',
    source: 'OverlayPlugin',
    messageType: '256',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      source: 3,
      name: 4,
      version: 5
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  MapEffect: {
    type: '257',
    name: 'MapEffect',
    source: 'OverlayPlugin',
    messageType: '257',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      flags: 3,
      // values for the location field seem to vary between instances
      // (e.g. a location of '08' in P5S does not appear to be the same location in P5S as in P6S)
      // but this field does appear to consistently contain position info for the effect rendering
      location: 4,
      data0: 5,
      data1: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  FateDirector: {
    type: '258',
    name: 'FateDirector',
    source: 'OverlayPlugin',
    messageType: '258',
    // fateId and progress are in hex.
    fields: {
      type: 0,
      timestamp: 1,
      category: 2,
      // padding0: 3,
      fateId: 4,
      progress: 5
      // param3: 6,
      // param4: 7,
      // param5: 8,
      // param6: 9,
      // padding1: 10,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  CEDirector: {
    type: '259',
    name: 'CEDirector',
    source: 'OverlayPlugin',
    messageType: '259',
    // all fields are in hex
    fields: {
      type: 0,
      timestamp: 1,
      popTime: 2,
      timeRemaining: 3,
      // unknown0: 4,
      ceKey: 5,
      numPlayers: 6,
      status: 7,
      // unknown1: 8,
      progress: 9
      // unknown2: 10,
      // unknown3: 11,
      // unknown4: 12,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  InCombat: {
    type: '260',
    name: 'InCombat',
    source: 'OverlayPlugin',
    messageType: '260',
    fields: {
      type: 0,
      timestamp: 1,
      inACTCombat: 2,
      inGameCombat: 3,
      isACTChanged: 4,
      isGameChanged: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  CombatantMemory: {
    type: '261',
    name: 'CombatantMemory',
    source: 'OverlayPlugin',
    messageType: '261',
    fields: {
      type: 0,
      timestamp: 1,
      change: 2,
      id: 3
      // from here, pairs of field name/values
    },

    canAnonymize: true,
    firstOptionalField: 5,
    // doesn't use `playerIds`, as the `id` field must be handled with the 'Name' repeating field
    repeatingFields: {
      startingIndex: 4,
      label: 'pair',
      names: ['key', 'value'],
      sortKeys: true,
      primaryKey: 'key',
      possibleKeys: combatantMemoryKeys,
      keysToAnonymize: {
        // eslint-disable-next-line quote-props
        3: 'Name',
        // 'ID' repeating field not used? need to use non-repeating `id` (3) field
        'OwnerID': null,
        'TargetID': null,
        'PCTargetID': null,
        'NPCTargetID': null,
        'CastTargetID': null
      }
    },
    analysisOptions: {
      include: 'filter',
      // TODO: This is an initial attempt to capture field changes that are relevant to analysis,
      // but this will likely need to be refined over time
      filters: [{
        // TODO: ModelStatus can be a little spammy. Should try to refine this further.
        id: '4.{7}',
        change: 'Change',
        pair: [{
          key: 'ModelStatus',
          value: '.*'
        }]
      }, {
        id: '4.{7}',
        change: 'Change',
        pair: [{
          key: 'WeaponId',
          value: '.*'
        }]
      }, {
        id: '4.{7}',
        change: 'Change',
        pair: [{
          key: 'TransformationId',
          value: '.*'
        }]
      }],
      combatantIdFields: 3
    }
  },
  RSVData: {
    type: '262',
    name: 'RSVData',
    source: 'OverlayPlugin',
    messageType: '262',
    fields: {
      type: 0,
      timestamp: 1,
      locale: 2,
      // unknown0: 3,
      key: 4,
      value: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      // RSV substitutions are performed automatically by the filter
      include: 'never'
    }
  },
  StartsUsingExtra: {
    type: '263',
    name: 'StartsUsingExtra',
    source: 'OverlayPlugin',
    messageType: '263',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      id: 3,
      x: 4,
      y: 5,
      z: 6,
      heading: 7
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC casts only
      combatantIdFields: 2
    }
  },
  AbilityExtra: {
    type: '264',
    name: 'AbilityExtra',
    source: 'OverlayPlugin',
    messageType: '264',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      id: 3,
      globalEffectCounter: 4,
      dataFlag: 5,
      x: 6,
      y: 7,
      z: 8,
      heading: 9,
      animationTargetId: 10
    },
    blankFields: [6, 7, 8],
    playerIds: {
      2: null,
      10: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC casts only
      combatantIdFields: [2, 10]
    }
  },
  ContentFinderSettings: {
    type: '265',
    name: 'ContentFinderSettings',
    source: 'OverlayPlugin',
    messageType: '265',
    fields: {
      type: 0,
      timestamp: 1,
      zoneId: 2,
      zoneName: 3,
      inContentFinderContent: 4,
      unrestrictedParty: 5,
      minimalItemLevel: 6,
      silenceEcho: 7,
      explorerMode: 8,
      levelSync: 9
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NpcYell: {
    type: '266',
    name: 'NpcYell',
    source: 'OverlayPlugin',
    messageType: '266',
    fields: {
      type: 0,
      timestamp: 1,
      npcId: 2,
      npcNameId: 3,
      npcYellId: 4
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  BattleTalk2: {
    type: '267',
    name: 'BattleTalk2',
    source: 'OverlayPlugin',
    messageType: '267',
    fields: {
      type: 0,
      timestamp: 1,
      npcId: 2,
      instance: 3,
      npcNameId: 4,
      instanceContentTextId: 5,
      displayMs: 6
      // unknown1: 7,
      // unknown2: 8,
      // unknown3: 9,
      // unknown4: 10,
    },

    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  Countdown: {
    type: '268',
    name: 'Countdown',
    source: 'OverlayPlugin',
    messageType: '268',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      worldId: 3,
      countdownTime: 4,
      result: 5,
      name: 6
    },
    playerIds: {
      2: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  CountdownCancel: {
    type: '269',
    name: 'CountdownCancel',
    source: 'OverlayPlugin',
    messageType: '269',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      worldId: 3,
      name: 4
    },
    playerIds: {
      2: 4
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  ActorMove: {
    type: '270',
    name: 'ActorMove',
    source: 'OverlayPlugin',
    messageType: '270',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      heading: 3,
      // OP calls this 'rotation', but cactbot consistently uses 'heading'
      // unknown1: 4,
      moveType: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      // no real way to filter noise, even if (infrequently) used for triggers
      include: 'never'
    }
  },
  ActorSetPos: {
    type: '271',
    name: 'ActorSetPos',
    source: 'OverlayPlugin',
    messageType: '271',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      heading: 3,
      // OP calls this 'rotation', but cactbot consistently uses 'heading'
      // unknown1: 4,
      // unknown2: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        id: '4.{7}'
      },
      // NPCs only
      combatantIdFields: 2
    }
  },
  SpawnNpcExtra: {
    type: '272',
    name: 'SpawnNpcExtra',
    source: 'OverlayPlugin',
    messageType: '272',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      parentId: 3,
      tetherId: 4,
      animationState: 5
    },
    playerIds: {
      3: null // `id` is an npc, but parentId could be a tethered player?
    },

    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: [2, 3]
    }
  },
  ActorControlExtra: {
    type: '273',
    name: 'ActorControlExtra',
    source: 'OverlayPlugin',
    messageType: '273',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      category: 3,
      param1: 4,
      param2: 5,
      param3: 6,
      param4: 7
    },
    playerIds: {
      2: null
    },
    possiblePlayerIds: [4, 5, 6, 7],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  ActorControlSelfExtra: {
    type: '274',
    name: 'ActorControlSelfExtra',
    source: 'OverlayPlugin',
    messageType: '274',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      category: 3,
      param1: 4,
      param2: 5,
      param3: 6,
      param4: 7,
      param5: 8,
      param6: 9
    },
    playerIds: {
      2: null
    },
    possiblePlayerIds: [4, 5, 6, 7, 8, 9],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  }
};
const logDefinitionsVersions = {
  'latest': latestLogDefinitions
};

// Verify that this has the right type, but export `as const`.
const assertLogDefinitions = latestLogDefinitions;
console.assert(assertLogDefinitions);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logDefinitionsVersions['latest']);

/***/ }),

/***/ 622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BW": () => (/* binding */ buildNetRegexForTrigger),
/* harmony export */   "Bx": () => (/* binding */ actorControlType),
/* harmony export */   "ZP": () => (/* binding */ NetRegexes),
/* harmony export */   "_1": () => (/* binding */ keysThatRequireTranslation),
/* harmony export */   "k3": () => (/* binding */ gameLogCodes)
/* harmony export */ });
/* unused harmony exports buildRegex, commonNetRegex */
/* harmony import */ var _netlog_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _not_reached__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var _regexes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(402);



const separator = '\\|';
const matchDefault = '[^|]*';

// If NetRegexes.setFlagTranslationsNeeded is set to true, then any
// regex created that requires a translation will begin with this string
// and match the magicStringRegex.  This is maybe a bit goofy, but is
// a pretty straightforward way to mark regexes for translations.
// If issue #1306 is ever resolved, we can remove this.
const magicTranslationString = `^^`;
const magicStringRegex = /^\^\^/;

// can't simply export this, see https://github.com/OverlayPlugin/cactbot/pull/4957#discussion_r1002590589
const keysThatRequireTranslationAsConst = ['ability', 'name', 'source', 'target', 'line'];
const keysThatRequireTranslation = keysThatRequireTranslationAsConst;
const gameLogCodes = {
  echo: '0038',
  dialog: '0044',
  message: '0839'
};

// See docs/LogGuide.md for more info about these categories
const actorControlType = {
  setAnimState: '003E',
  publicContentText: '0834',
  logMsg: '020F',
  logMsgParams: '0210'
};
const defaultParams = (type, version, include) => {
  const logType = _netlog_defs__WEBPACK_IMPORTED_MODULE_0__/* .logDefinitionsVersions */ .W[version][type];
  if (include === undefined) {
    include = Object.keys(logType.fields);
    if ('repeatingFields' in logType) {
      include.push(logType.repeatingFields.label);
    }
  }
  const params = {};
  const firstOptionalField = logType.firstOptionalField;
  for (const [prop, index] of Object.entries(logType.fields)) {
    if (!include.includes(prop)) continue;
    const param = {
      field: prop,
      optional: firstOptionalField !== undefined && index >= firstOptionalField
    };
    if (prop === 'type') param.value = logType.type;
    params[index] = param;
  }
  if ('repeatingFields' in logType && include.includes(logType.repeatingFields.label)) {
    params[logType.repeatingFields.startingIndex] = {
      field: logType.repeatingFields.label,
      optional: firstOptionalField !== undefined && logType.repeatingFields.startingIndex >= firstOptionalField,
      repeating: true,
      repeatingKeys: [...logType.repeatingFields.names],
      sortKeys: logType.repeatingFields.sortKeys,
      primaryKey: logType.repeatingFields.primaryKey,
      possibleKeys: [...logType.repeatingFields.possibleKeys]
    };
  }
  return params;
};
const isRepeatingField = (repeating, value) => {
  if (repeating !== true) return false;
  // Allow excluding the field to match for extraction
  if (value === undefined) return true;
  if (!Array.isArray(value)) return false;
  for (const e of value) {
    if (typeof e !== 'object') return false;
  }
  return true;
};
const parseHelper = (params, funcName, fields) => {
  params = params ?? {};
  const validFields = [];
  for (const index in fields) {
    const field = fields[index];
    if (field) validFields.push(field.field);
  }
  _regexes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].validateParams */ .Z.validateParams(params, funcName, ['capture', ...validFields]);

  // Find the last key we care about, so we can shorten the regex if needed.
  const capture = _regexes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].trueIfUndefined */ .Z.trueIfUndefined(params.capture);
  const fieldKeys = Object.keys(fields).sort((a, b) => parseInt(a) - parseInt(b));
  let maxKeyStr;
  if (capture) {
    const keys = [];
    for (const key in fields) keys.push(key);
    let tmpKey = keys.pop();
    if (tmpKey === undefined) {
      maxKeyStr = fieldKeys[fieldKeys.length - 1] ?? '0';
    } else {
      while (fields[tmpKey]?.optional && !((fields[tmpKey]?.field ?? '') in params)) tmpKey = keys.pop();
      maxKeyStr = tmpKey ?? '0';
    }
  } else {
    maxKeyStr = '0';
    for (const key in fields) {
      const value = fields[key] ?? {};
      if (typeof value !== 'object') continue;
      const fieldName = fields[key]?.field;
      if (fieldName !== undefined && fieldName in params) maxKeyStr = key;
    }
  }
  const maxKey = parseInt(maxKeyStr);

  // For testing, it's useful to know if this is a regex that requires
  // translation.  We test this by seeing if there are any specified
  // fields, and if so, inserting a magic string that we can detect.
  // This lets us differentiate between "regex that should be translated"
  // e.g. a regex with `target` specified, and "regex that shouldn't"
  // e.g. a gains effect with just effectId specified.
  const transParams = Object.keys(params).filter(k => keysThatRequireTranslation.includes(k));
  const needsTranslations = NetRegexes.flagTranslationsNeeded && transParams.length > 0;

  // Build the regex from the fields.
  let str = needsTranslations ? magicTranslationString : '^';
  let lastKey = -1;
  for (const keyStr in fields) {
    const key = parseInt(keyStr);
    // Fill in blanks.
    const missingFields = key - lastKey - 1;
    if (missingFields === 1) str += '\\y{NetField}';else if (missingFields > 1) str += `\\y{NetField}{${missingFields}}`;
    lastKey = key;
    const value = fields[keyStr];
    if (typeof value !== 'object') throw new Error(`${funcName}: invalid value: ${JSON.stringify(value)}`);
    const fieldName = value.field;
    const defaultFieldValue = value.value?.toString() ?? matchDefault;
    const fieldValue = params[fieldName];
    if (isRepeatingField(fields[keyStr]?.repeating, fieldValue)) {
      let repeatingArray = fieldValue;
      const sortKeys = fields[keyStr]?.sortKeys;
      const primaryKey = fields[keyStr]?.primaryKey;
      const possibleKeys = fields[keyStr]?.possibleKeys;

      // primaryKey is required if this is a repeating field per typedef in netlog_defs.ts
      // Same with possibleKeys
      if (primaryKey === undefined || possibleKeys === undefined) throw new _not_reached__WEBPACK_IMPORTED_MODULE_1__/* .UnreachableCode */ .$();

      // Allow sorting if needed
      if (sortKeys) {
        // Also sort our valid keys list
        possibleKeys.sort((left, right) => left.toLowerCase().localeCompare(right.toLowerCase()));
        if (repeatingArray !== undefined) {
          repeatingArray = [...repeatingArray].sort((left, right) => {
            // We check the validity of left/right because they're user-supplied
            if (typeof left !== 'object' || left[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            const leftValue = left[primaryKey];
            if (typeof leftValue !== 'string' || !possibleKeys?.includes(leftValue)) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            if (typeof right !== 'object' || right[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            const rightValue = right[primaryKey];
            if (typeof rightValue !== 'string' || !possibleKeys?.includes(rightValue)) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            return leftValue.toLowerCase().localeCompare(rightValue.toLowerCase());
          });
        }
      }
      const anonReps = repeatingArray;
      // Loop over our possible keys
      // Build a regex that can match any possible key with required values substituted in
      possibleKeys.forEach(possibleKey => {
        const rep = anonReps?.find(rep => primaryKey in rep && rep[primaryKey] === possibleKey);
        let fieldRegex = '';
        // Rather than looping over the keys defined on the object,
        // loop over the base type def's keys. This enforces the correct order.
        fields[keyStr]?.repeatingKeys?.forEach(key => {
          let val = rep?.[key];
          if (rep === undefined || !(key in rep)) {
            // If we don't have a value for this key
            // insert a placeholder, unless it's the primary key
            if (key === primaryKey) val = possibleKey;else val = matchDefault;
          }
          if (typeof val !== 'string') {
            if (!Array.isArray(val)) val = matchDefault;else if (val.length < 1) val = matchDefault;else if (val.some(v => typeof v !== 'string')) val = matchDefault;
          }
          fieldRegex += _regexes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].maybeCapture */ .Z.maybeCapture(key === primaryKey ? false : capture,
          // All capturing groups are `fieldName` + `possibleKey`, e.g. `pairIsCasting1`
          fieldName + possibleKey, val, defaultFieldValue) + separator;
        });
        if (fieldRegex.length > 0) {
          str += `(?:${fieldRegex})${rep !== undefined ? '' : '?'}`;
        }
      });
    } else if (fields[keyStr]?.repeating) {
      // If this is a repeating field but the actual value is empty or otherwise invalid,
      // don't process further. We can't use `continue` in the above block because that
      // would skip the early-out break at the end of the loop.
    } else {
      if (fieldName !== undefined) {
        str += _regexes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].maybeCapture */ .Z.maybeCapture(
        // more accurate type instead of `as` cast
        // maybe this function needs a refactoring
        capture, fieldName, fieldValue, defaultFieldValue) + separator;
      } else {
        str += defaultFieldValue + separator;
      }
    }

    // Stop if we're not capturing and don't care about future fields.
    if (key >= maxKey) break;
  }
  return _regexes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].parse */ .Z.parse(str);
};
const buildRegex = (type, params) => {
  return parseHelper(params, type, defaultParams(type, NetRegexes.logVersion));
};
class NetRegexes {
  static logVersion = 'latest';
  static flagTranslationsNeeded = false;
  static setFlagTranslationsNeeded(value) {
    NetRegexes.flagTranslationsNeeded = value;
  }
  static doesNetRegexNeedTranslation(regex) {
    // Need to `setFlagTranslationsNeeded` before calling this function.
    console.assert(NetRegexes.flagTranslationsNeeded);
    const str = typeof regex === 'string' ? regex : regex.source;
    return !!magicStringRegex.exec(str);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-20-0x14-networkstartscasting
   */
  static startsUsing(params) {
    return buildRegex('StartsUsing', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   */
  static ability(params) {
    return parseHelper(params, 'Ability', {
      ...defaultParams('Ability', NetRegexes.logVersion),
      // Override type
      0: {
        field: 'type',
        value: '2[12]',
        optional: false
      }
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   *
   * @deprecated Use `ability` instead
   */
  static abilityFull(params) {
    return this.ability(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-27-0x1b-networktargeticon-head-marker
   */
  static headMarker(params) {
    return buildRegex('HeadMarker', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatant(params) {
    return parseHelper(params, 'AddedCombatant', defaultParams('AddedCombatant', NetRegexes.logVersion));
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   * @deprecated Use `addedCombatant` instead
   */
  static addedCombatantFull(params) {
    return NetRegexes.addedCombatant(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-04-0x04-removecombatant
   */
  static removingCombatant(params) {
    return buildRegex('RemovedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-26-0x1a-networkbuff
   */
  static gainsEffect(params) {
    return buildRegex('GainsEffect', params);
  }

  /**
   * Prefer gainsEffect over this function unless you really need extra data.
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-38-0x26-networkstatuseffects
   */
  static statusEffectExplicit(params) {
    return buildRegex('StatusEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-30-0x1e-networkbuffremove
   */
  static losesEffect(params) {
    return buildRegex('LosesEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-35-0x23-networktether
   */
  static tether(params) {
    return buildRegex('Tether', params);
  }

  /**
   * 'target' was defeated by 'source'
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-25-0x19-networkdeath
   */
  static wasDefeated(params) {
    return buildRegex('WasDefeated', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-24-0x18-networkdot
   */
  static networkDoT(params) {
    return buildRegex('NetworkDoT', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static echo(params) {
    if (typeof params === 'undefined') params = {};
    _regexes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].validateParams */ .Z.validateParams(params, 'Echo', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.echo
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static dialog(params) {
    if (typeof params === 'undefined') params = {};
    _regexes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].validateParams */ .Z.validateParams(params, 'Dialog', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.dialog
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static message(params) {
    if (typeof params === 'undefined') params = {};
    _regexes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].validateParams */ .Z.validateParams(params, 'Message', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.message
    });
  }

  /**
   * fields: code, name, line, capture
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameLog(params) {
    return buildRegex('GameLog', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameNameLog(params) {
    // Backwards compatability.
    return NetRegexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-12-0x0c-playerstats
   */
  static statChange(params) {
    return buildRegex('PlayerStats', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-01-0x01-changezone
   */
  static changeZone(params) {
    return buildRegex('ChangeZone', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-33-0x21-network6d-actor-control
   */
  static network6d(params) {
    return buildRegex('ActorControl', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-34-0x22-networknametoggle
   */
  static nameToggle(params) {
    return buildRegex('NameToggle', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-40-0x28-map
   */
  static map(params) {
    return buildRegex('Map', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-41-0x29-systemlogmessage
   */
  static systemLogMessage(params) {
    return buildRegex('SystemLogMessage', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-257-0x101-mapeffect
   */
  static mapEffect(params) {
    return buildRegex('MapEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-258-0x102-fatedirector
   */
  static fateDirector(params) {
    return buildRegex('FateDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-259-0x103-cedirector
   */
  static ceDirector(params) {
    return buildRegex('CEDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-260-0x104-incombat
   */
  static inCombat(params) {
    return buildRegex('InCombat', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-261-0x105-combatantmemory
   */
  static combatantMemory(params) {
    return buildRegex('CombatantMemory', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-262-0x106-rsvdata
   */
  static rsvData(params) {
    return buildRegex('RSVData', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-263-0x107-startsusingextra
   */
  static startsUsingExtra(params) {
    return buildRegex('StartsUsingExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-264-0x108-abilityextra
   */
  static abilityExtra(params) {
    return buildRegex('AbilityExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-265-0x109-contentfindersettings
   */
  static contentFinderSettings(params) {
    return buildRegex('ContentFinderSettings', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-266-0x10a-npcyell
   */
  static npcYell(params) {
    return buildRegex('NpcYell', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-267-0x10b-battletalk2
   */
  static battleTalk2(params) {
    return buildRegex('BattleTalk2', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-268-0x10c-countdown
   */
  static countdown(params) {
    return buildRegex('Countdown', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-269-0x10d-countdowncancel
   */
  static countdownCancel(params) {
    return buildRegex('CountdownCancel', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-270-0x10e-actormove
   */
  static actorMove(params) {
    return buildRegex('ActorMove', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-271-0x10f-actorsetpos
   */
  static actorSetPos(params) {
    return buildRegex('ActorSetPos', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-272-0x110-spawnnpcextra
   */
  static spawnNpcExtra(params) {
    return buildRegex('SpawnNpcExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-273-0x111-actorcontrolextra
   */
  static actorControlExtra(params) {
    return buildRegex('ActorControlExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-274-0x112-actorcontrolselfextra
   */
  static actorControlSelfExtra(params) {
    return buildRegex('ActorControlSelfExtra', params);
  }
}
const commonNetRegex = {
  // TODO(6.2): remove 40000010 after everybody is on 6.2.
  // TODO: or maybe keep around for playing old log files??
  wipe: NetRegexes.network6d({
    command: ['40000010', '4000000F']
  }),
  cactbotWipeEcho: NetRegexes.echo({
    line: 'cactbot wipe.*?'
  }),
  userWipeEcho: NetRegexes.echo({
    line: 'end'
  })
};
const buildNetRegexForTrigger = (type, params) => {
  if (type === 'Ability')
    // ts can't narrow T to `Ability` here, need casting.
    return NetRegexes.ability(params);
  return buildRegex(type, params);
};

/***/ }),

/***/ 62:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ UnreachableCode)
/* harmony export */ });
// Helper Error for TypeScript situations where the programmer thinks they
// know better than TypeScript that some situation will never occur.

// The intention here is that the programmer does not expect a particular
// bit of code to happen, and so has not written careful error handling.
// If it does occur, at least there will be an error and we can figure out why.
// This is preferable to casting or disabling TypeScript altogether in order to
// avoid syntax errors.

// One common example is a regex, where if the regex matches then all of the
// (non-optional) regex groups will also be valid, but TypeScript doesn't know.
class UnreachableCode extends Error {
  constructor() {
    super('This code shouldn\'t be reached');
  }
}

/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Output strings for now require a field for every language, so this is a
// helper function to generate one for literal numbers.
const numberToOutputString = function (n) {
  const str = n.toString();
  return {
    en: str,
    de: str,
    fr: str,
    ja: str,
    cn: str,
    ko: str,
    tc: str
  };
};

// General guidelines:
// * property names should closely match English text
// * use OnPlayer suffix for things with `${player}`
// * use OnTarget suffix for things with `${name}`
// * any other parameters (of which there are none, currently) should use consistent suffixes.
// * the value of each property should be a single object with localized keys
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  aoe: {
    en: 'AoE',
    de: 'AoE',
    fr: 'AoE',
    ja: '全体攻撃',
    cn: 'AoE',
    ko: '전체 공격',
    tc: 'AoE'
  },
  bigAoe: {
    en: 'big AoE!',
    de: 'Große AoE!',
    fr: 'Grosse AoE !',
    ja: '強力な全体攻撃',
    cn: '大AoE伤害！',
    ko: '강한 전체 공격!',
    tc: '大AoE傷害！'
  },
  bleedAoe: {
    en: 'AoE + Bleed',
    de: 'AoE + Blutung',
    fr: 'AoE + Saignement',
    ja: '全体攻撃 + DoT',
    cn: 'AOE + 流血',
    ko: '전체 공격 + 도트',
    tc: 'AOE + 流血'
  },
  hpTo1Aoe: {
    en: 'HP to 1',
    de: 'HP auf 1',
    fr: 'HP à 1',
    ja: '体力１!',
    cn: 'HP 归 1',
    ko: 'HP 1',
    tc: 'HP 歸 1'
  },
  tankBuster: {
    en: 'Tank Buster',
    de: 'Tank buster',
    fr: 'Tank buster',
    ja: 'タンク強攻撃',
    cn: '坦克死刑',
    ko: '탱버',
    tc: '坦克死刑'
  },
  miniBuster: {
    en: 'Mini Buster',
    de: 'Kleiner Tankbuster',
    fr: 'Mini Buster',
    ja: 'タンク攻撃',
    cn: '小死刑',
    ko: '약한 탱버',
    tc: '小死刑'
  },
  tankBusterOnPlayer: {
    en: 'Tank Buster on ${player}',
    de: 'Tank buster auf ${player}',
    fr: 'Tank buster sur ${player}',
    ja: '${player}に強攻撃',
    cn: '死刑 点 ${player}',
    ko: '"${player}" 탱버',
    tc: '死刑 點 ${player}'
  },
  tankBusterOnYou: {
    en: 'Tank Buster on YOU',
    de: 'Tank buster auf DIR',
    fr: 'Tank buster sur VOUS',
    ja: '自分に強攻撃',
    cn: '死刑点名',
    ko: '탱버 대상자',
    tc: '死刑點名'
  },
  // when there are multiple tankbusters going out
  tankBusters: {
    en: 'Tank Busters',
    de: 'Tank busters',
    fr: 'Tank busters',
    ja: 'タンク強攻撃',
    cn: '坦克死刑',
    ko: '탱버',
    tc: '坦克死刑'
  },
  tetherBusters: {
    en: 'Tank Tethers',
    de: 'Tank-Verbindungen',
    fr: 'Liens Tank',
    ja: 'タンク線取り',
    cn: '坦克截线',
    ko: '탱커가 선 가로채기',
    tc: '坦克截線'
  },
  avoidTetherBusters: {
    en: 'Avoid Tank Tethers',
    de: 'Vermeide Tank Verbindungen',
    fr: 'Évitez les liens des Tanks',
    ja: 'タンクの線を避けて',
    cn: '远离坦克连线',
    ko: '탱커 선 피하기',
    tc: '遠離坦克連線'
  },
  tankCleave: {
    en: 'Tank Cleave',
    de: 'Tank Cleave',
    fr: 'Tank cleave',
    ja: 'タンク範囲攻撃',
    cn: '范围死刑',
    ko: '광역 탱버',
    tc: '範圍死刑'
  },
  tankBusterCleaves: {
    en: 'Tank Buster Cleaves',
    de: 'Tankbuster Cleaves',
    fr: 'Tankbuster cleaves',
    ja: 'MT・ST同時範囲攻撃',
    cn: '坦克范围死刑',
    ko: '동시 광역 탱버',
    tc: '坦克範圍死刑'
  },
  tankBusterCleavesOnYou: {
    en: 'Tank Cleaves on YOU',
    de: 'Tank Cleaves auf DIR',
    fr: 'Tank cleaves sur VOUS',
    ja: 'MT・ST同時範囲攻撃(自分対象)',
    cn: '坦克范围死刑点名',
    ko: '광역 탱버 대상자',
    tc: '坦克範圍死刑點名'
  },
  avoidTankCleave: {
    en: 'Avoid Tank Cleave',
    de: 'Tank Cleave ausweichen',
    fr: 'Évitez le tank cleave',
    ja: 'タンク範囲攻撃を避ける',
    cn: '远离范围死刑',
    ko: '광역 탱버 피하기',
    tc: '遠離範圍死刑'
  },
  avoidTankCleaves: {
    en: 'Avoid Tank Cleaves',
    de: 'Tankbuster Cleaves ausweichen',
    fr: 'Évitez les cleaves (tankbusters)',
    ja: '範囲攻撃を避けて',
    cn: '远离坦克范围死刑',
    ko: '광역 탱버 피하기',
    tc: '遠離坦克範圍死刑'
  },
  tankCleaveOnYou: {
    en: 'Tank Cleave on YOU',
    de: 'Tank Cleave aud DIR',
    fr: 'Tank cleave sur VOUS',
    ja: '自分に範囲攻撃',
    cn: '范围死刑点名',
    ko: '나에게 광역 탱버',
    tc: '範圍死刑點名'
  },
  sharedTankbuster: {
    en: 'Shared Tank Buster',
    de: 'Geteilter Tankbuster',
    fr: 'Partagez le Tank buster',
    ja: 'タンク頭割り',
    cn: '分摊死刑',
    ko: '쉐어 탱버',
    tc: '分攤死刑'
  },
  sharedTankbusterOnYou: {
    en: 'Shared Tank Buster on YOU',
    de: 'geteilter Tankbuster auf DIR',
    fr: 'Tank buster à partager sur VOUS',
    ja: '自分にタンク頭割り',
    cn: '分摊死刑点名',
    ko: '쉐어 탱버 대상자',
    tc: '分攤死刑點名'
  },
  sharedTankbusterOnPlayer: {
    en: 'Shared Tank Buster on ${player}',
    de: 'geteilter Tankbuster on ${player}',
    fr: 'Tank buster à partager sur ${player}',
    ja: '${player} にタンク頭割り',
    cn: '分摊死刑点 ${player}',
    ko: '"${player}" 쉐어 탱버',
    tc: '分攤死刑點 ${player}'
  },
  tankSwap: {
    en: 'Tank Swap!',
    de: 'Tankwechsel!',
    fr: 'Tank swap !',
    ja: 'タンクスイッチ!',
    cn: '换T！',
    ko: '탱 교대',
    tc: '換坦！'
  },
  spread: {
    en: 'Spread',
    de: 'Verteilen',
    fr: 'Dispersez-vous',
    ja: 'さんかい',
    cn: '分散',
    ko: '산개',
    tc: '分散'
  },
  defamationOnYou: {
    en: 'Defamation on YOU',
    de: 'Ehrenstrafe aud DIR',
    fr: 'Diffamation sur VOUS',
    ja: '自分に巨大な爆発',
    cn: '大圈点名',
    ko: '광역징 대상자',
    tc: '大圈點名'
  },
  protean: {
    en: 'Protean',
    de: 'Himmelsrichtungen',
    fr: 'Positions',
    ja: '基本さんかい',
    cn: '八方分散',
    ko: '8방향 산개',
    tc: '八方分散'
  },
  stackMarker: {
    // for stack marker situations
    en: 'Stack',
    de: 'Sammeln',
    fr: 'Packez-vous',
    ja: '頭割り',
    cn: '分摊',
    ko: '쉐어뎀',
    tc: '分攤'
  },
  getTogether: {
    // for getting together without stack marker
    en: 'Stack',
    de: 'Sammeln',
    fr: 'Packez-vous',
    ja: '集合',
    cn: '集合',
    ko: '모이기',
    tc: '集合'
  },
  healerGroups: {
    en: 'Healer Groups',
    de: 'Heiler-Gruppen',
    fr: 'Groupes sur les heals',
    ja: 'ヒラに頭割り',
    cn: '双奶分组分摊',
    ko: '힐러 그룹 쉐어',
    tc: '雙補分組分攤'
  },
  rolePositions: {
    en: 'Role Positions',
    de: 'Rollenposition',
    fr: 'Positions par rôle',
    ja: 'ロールさんかい',
    cn: '职能分散站位',
    ko: '직업군별 위치로',
    tc: '職能分散站位'
  },
  stackOnYou: {
    en: 'Stack on YOU',
    de: 'Auf DIR sammeln',
    fr: 'Package sur VOUS',
    ja: '自分に頭割り',
    cn: '分摊点名',
    ko: '쉐어징 대상자',
    tc: '分攤點名'
  },
  stackOnPlayer: {
    en: 'Stack on ${player}',
    de: 'Auf ${player} sammeln',
    fr: 'Packez-vous sur ${player}',
    ja: '${player}に頭割り',
    cn: '靠近 ${player}分摊',
    ko: '"${player}" 쉐어징',
    tc: '靠近 ${player}分攤'
  },
  stackPartner: {
    en: 'Stack With Partner',
    de: 'Mit Partner stacken',
    fr: 'Packez-vous avec votre partenaire',
    ja: 'ペア',
    cn: '与搭档分摊',
    ko: '파트너와 쉐어',
    tc: '與搭檔分攤'
  },
  stackMiddle: {
    en: 'Stack in Middle',
    de: 'In der Mitte sammeln',
    fr: 'Packez-vous au milieu',
    ja: '中央で頭割り',
    cn: '中间集合',
    ko: '중앙에서 쉐어',
    tc: '中間集合'
  },
  stackInTower: {
    en: 'Stack in Tower',
    fr: 'Package dans la tour',
    cn: '塔内集合',
    ko: '탑에서 쉐어',
    tc: '塔內集合'
  },
  baitPuddles: {
    en: 'Bait Puddles',
    de: 'Flächen Ködern',
    fr: 'Attirez les flaques',
    ja: 'AOE誘導',
    cn: '诱导放圈',
    ko: '장판 유도',
    tc: '誘導放圈'
  },
  // For general more-than-one-stack-at-a-time situations
  stacks: {
    en: 'Stacks',
    de: 'Sammeln',
    fr: 'Package',
    ja: '頭割り',
    cn: '分摊',
    ko: '쉐어',
    tc: '分攤'
  },
  doritoStack: {
    en: 'Dorito Stack',
    de: 'Mit Marker sammeln',
    fr: 'Packez les marques',
    ja: 'マーカー同士で頭割り',
    cn: '点名集合',
    ko: '징끼리 모이기',
    tc: '點名集合'
  },
  spreadThenStack: {
    en: 'Spread => Stack',
    de: 'Verteilen => Sammeln',
    fr: 'Dispersion => Package',
    ja: 'さんかい => 頭割り',
    cn: '分散 => 集合',
    ko: '산개 => 집합',
    tc: '分散 => 集合'
  },
  stackThenSpread: {
    en: 'Stack => Spread',
    de: 'Sammeln => Verteilen',
    fr: 'Package => Dispersion',
    ja: '頭割り => さんかい',
    cn: '集合 => 分散',
    ko: '집합 => 산개',
    tc: '集合 => 分散'
  },
  drawIn: {
    // Opposite of a knockback.
    en: 'Draw In',
    de: 'Einzug',
    fr: 'Attraction',
    ja: '吸込み',
    cn: '吸引',
    ko: '끌어당김',
    tc: '吸引'
  },
  knockback: {
    en: 'Knockback',
    de: 'Rückstoß',
    fr: 'Poussée',
    ja: 'ノックバック',
    cn: '击退',
    ko: '넉백',
    tc: '擊退'
  },
  knockbackOnYou: {
    en: 'Knockback on YOU',
    de: 'Rückstoß auf DIR',
    fr: 'Poussée sur VOUS',
    ja: '自分にノックバック',
    cn: '击退点名',
    ko: '넉백징 대상자',
    tc: '擊退點名'
  },
  knockbackOnPlayer: {
    en: 'Knockback on ${player}',
    de: 'Rückstoß auf ${player}',
    fr: 'Poussée sur ${player}',
    ja: '${player}にノックバック',
    cn: '击退点名${player}',
    ko: '"${player}" 넉백징',
    tc: '擊退點名${player}'
  },
  lookTowardsBoss: {
    en: 'Look Towards Boss',
    de: 'Anschauen Boss',
    fr: 'Regardez le boss',
    ja: 'ボスを見る',
    cn: '面向Boss',
    ko: '쳐다보기',
    tc: '面向Boss'
  },
  lookAway: {
    en: 'Look Away',
    de: 'Wegschauen',
    fr: 'Regardez ailleurs',
    ja: 'ボスを見ない',
    cn: '背对Boss',
    ko: '뒤돌기',
    tc: '背對Boss'
  },
  lookAwayFromPlayer: {
    en: 'Look Away from ${player}',
    de: 'Schau weg von ${player}',
    fr: 'Ne regardez pas ${player}',
    ja: '${player}を見ない',
    cn: '背对${player}',
    ko: '${player}에게서 뒤돌기',
    tc: '背對${player}'
  },
  lookAwayFromTarget: {
    en: 'Look Away from ${name}',
    de: 'Schau weg von ${name}',
    fr: 'Ne regardez pas ${name}',
    ja: '${name}を見ない',
    cn: '背对${name}',
    ko: '${name}에게서 뒤돌기',
    tc: '背對${name}'
  },
  getBehind: {
    en: 'Get Behind',
    de: 'Hinter ihn',
    fr: 'Passez derrière',
    ja: '背面へ',
    cn: '去背后',
    ko: '보스 뒤로',
    tc: '去背後'
  },
  goFrontOrSides: {
    en: 'Go Front / Sides',
    de: 'Gehe nach Vorne/ zu den Seiten',
    fr: 'Allez Devant / Côtés',
    ja: '前／横へ',
    cn: '去前侧方',
    ko: '보스 후방 피하기',
    tc: '去前側方'
  },
  goFront: {
    en: 'Go Front',
    de: 'Geh nach vorn',
    fr: 'Allez Devant',
    ja: '前へ',
    cn: '去前面',
    ko: '앞으로',
    tc: '去前面'
  },
  // getUnder is used when you have to get into the bosses hitbox
  getUnder: {
    en: 'Get Under',
    de: 'Unter ihn',
    fr: 'En dessous',
    ja: 'ボスに貼り付く',
    cn: '去脚下',
    ko: '보스 아래로',
    tc: '去腳下'
  },
  // in is more like "get close but maybe even melee range is fine"
  in: {
    en: 'In',
    de: 'Rein',
    fr: 'Intérieur',
    ja: '中へ',
    cn: '靠近',
    ko: '안으로',
    tc: '靠近'
  },
  // out means get far away
  out: {
    en: 'Out',
    de: 'Raus',
    fr: 'Extérieur',
    ja: '外へ',
    cn: '远离',
    ko: '밖으로',
    tc: '遠離'
  },
  outOfMelee: {
    en: 'Out of Melee',
    de: 'Raus aus Nahkampf',
    fr: 'Sortez de la mêlée',
    ja: '近接の範囲から離れる',
    cn: '离开近战距离',
    ko: '근접범위 밖으로',
    tc: '離開近戰距離'
  },
  // be just outside the boss's target circle
  outOfHitbox: {
    en: 'Out of Hitbox',
    de: 'Raus aus der Hitbox',
    fr: 'Extérieur de la hitbox',
    ja: 'ボスから少し離れる',
    cn: '离开目标圈',
    ko: '히트박스 밖으로',
    tc: '離開目標圈'
  },
  inThenOut: {
    en: 'In => Out',
    de: 'Rein, dann raus',
    fr: 'Intérieur, puis extérieur',
    ja: '中 => 外',
    cn: '先靠近，再远离',
    ko: '안으로 => 밖으로',
    tc: '先靠近，再遠離'
  },
  outThenIn: {
    en: 'Out => In',
    de: 'Raus, dann rein',
    fr: 'Extérieur, puis intérieur',
    ja: '外 => 中',
    cn: '先远离，再靠近',
    ko: '밖으로 => 안으로',
    tc: '先遠離，再靠近'
  },
  backThenFront: {
    en: 'Back => Front',
    de: 'Nach Hinten, danach nach Vorne',
    fr: 'Derrière puis devant',
    ja: '後ろ => 前',
    cn: '后 => 前',
    ko: '뒤로 => 앞으로',
    tc: '後 => 前'
  },
  frontThenBack: {
    en: 'Front => Back',
    de: 'Nach Vorne, danach nach Hinten',
    fr: 'Devant puis derrière',
    ja: '前 => 後ろ',
    cn: '前 => 后',
    ko: '앞으로 => 뒤로',
    tc: '前 => 後'
  },
  sidesThenFrontBack: {
    en: 'Sides => Front/Back',
    fr: 'Côtés => Devant/Derrière',
    cn: '两侧 => 前/后',
    ko: '양옆 => 앞/뒤',
    tc: '兩側 => 前/後'
  },
  frontBackThenSides: {
    en: 'Front/Back => Sides',
    fr: 'Devant/Derrière => Côtés',
    cn: '前/后 => 两侧',
    ko: '앞/뒤 => 양옆',
    tc: '前/後 => 兩側'
  },
  goIntoMiddle: {
    en: 'Get Middle',
    de: 'in die Mitte gehen',
    fr: 'Allez au milieu',
    ja: '中へ',
    cn: '去中间',
    ko: '중앙으로',
    tc: '去中間'
  },
  front: {
    en: 'Front',
    de: 'Vorne',
    fr: 'Devant',
    ja: '前',
    cn: '前',
    ko: '앞',
    tc: '前'
  },
  back: {
    en: 'Back',
    de: 'Hinten',
    fr: 'Derrière',
    ja: '後ろ',
    cn: '后',
    ko: '뒤',
    tc: '後'
  },
  right: {
    en: 'Right',
    de: 'Rechts',
    fr: 'À droite',
    ja: '右へ',
    cn: '右',
    ko: '오른쪽',
    tc: '右'
  },
  rightEast: {
    en: 'Right/East',
    fr: 'Droite/Est',
    ja: '右/東へ',
    cn: '右侧',
    ko: '오른쪽/동쪽',
    tc: '東側'
  },
  left: {
    en: 'Left',
    de: 'Links',
    fr: 'À gauche',
    ja: '左へ',
    cn: '左',
    ko: '왼쪽',
    tc: '左'
  },
  leftWest: {
    en: 'Left/West',
    fr: 'Gauche/Ouest',
    ja: '左/西へ',
    cn: '左侧',
    ko: '왼쪽/서쪽',
    tc: '西側'
  },
  getLeftAndWest: {
    en: '<= Get Left/West',
    de: '<= Nach Links/Westen',
    fr: '<= Allez à Gauche/Ouest',
    ja: '<= 左/西へ',
    cn: '<= 去左半场',
    ko: '<= 왼쪽/서쪽',
    tc: '<= 去左半場'
  },
  getRightAndEast: {
    en: 'Get Right/East =>',
    de: 'Nach Rechts/Osten =>',
    fr: 'Allez à Droite/Est =>',
    ja: '右/東へ =>',
    cn: '去右半场 =>',
    ko: '오른쪽/동쪽 =>',
    tc: '去右半場 =>'
  },
  leftThenRight: {
    en: 'Left => Right',
    de: 'Links => Rechts',
    fr: 'À gauche => À droite',
    ja: '左 => 右',
    cn: '左 => 右',
    ko: '왼쪽 => 오른쪽',
    tc: '左 => 右'
  },
  rightThenLeft: {
    en: 'Right => Left',
    de: 'Rechts => Links',
    fr: 'À droite => À gauche',
    ja: '右 => 左',
    cn: '右 => 左',
    ko: '오른쪽 => 왼쪽',
    tc: '右 => 左'
  },
  goFrontBack: {
    en: 'Go Front/Back',
    de: 'Geh nach Vorne/Hinten',
    fr: 'Allez Devant/Derrière',
    ja: '縦へ',
    cn: '去前后',
    ko: '앞/뒤로',
    tc: '去前後'
  },
  sides: {
    en: 'Sides',
    de: 'Seiten',
    fr: 'Côtés',
    ja: '横へ',
    cn: '去两侧',
    ko: '양옆으로',
    tc: '去兩側'
  },
  middle: {
    en: 'Middle',
    de: 'Mitte',
    fr: 'Milieu',
    ja: '中へ',
    cn: '中间',
    ko: '중앙',
    tc: '中間'
  },
  clockwise: {
    en: 'Clockwise',
    de: 'Im Uhrzeigersinn',
    fr: 'Sens horaire',
    ja: '時計回り',
    cn: '顺时针',
    ko: '시계방향',
    tc: '順時針'
  },
  counterclockwise: {
    en: 'Counter-Clockwise',
    de: 'Gegen den Uhrzeigersinn',
    fr: 'Anti-horaire',
    ja: '反時計回り',
    cn: '逆时针',
    ko: '반시계방향',
    tc: '逆時針'
  },
  // killAdds is used for adds that will always be available
  killAdds: {
    en: 'Kill Adds',
    de: 'Adds besiegen',
    fr: 'Tuez les adds',
    ja: '雑魚から倒して',
    cn: '击杀小怪',
    ko: '쫄 잡기',
    tc: '擊殺小怪'
  },
  // killExtraAdd is used for adds that appear if a mechanic was not played correctly
  killExtraAdd: {
    en: 'Kill Extra Add',
    de: 'Add besiegen',
    fr: 'Tuez l\'add',
    ja: '雑魚から倒して',
    cn: '击杀小怪',
    ko: '쫄 잡기',
    tc: '擊殺小怪'
  },
  awayFromFront: {
    en: 'Away From Front',
    de: 'Weg von Vorne',
    fr: 'Éloignez-vous du devant',
    ja: '前方から離れる',
    cn: '远离正面',
    ko: '보스 전방 피하기',
    tc: '遠離正面'
  },
  sleepTarget: {
    en: 'Sleep ${name}',
    de: 'Schlaf auf ${name}',
    fr: 'Sommeil sur ${name}',
    ja: '${name} にスリプル',
    cn: '催眠 ${name}',
    ko: '${name} 슬리플',
    tc: '催眠 ${name}'
  },
  stunTarget: {
    en: 'Stun ${name}',
    de: 'Betäubung auf ${name}',
    fr: 'Étourdissez ${name}',
    ja: '${name} にスタン',
    cn: '眩晕 ${name}',
    ko: '${name} 기절',
    tc: '眩暈 ${name}'
  },
  interruptTarget: {
    en: 'Interrupt ${name}',
    de: 'unterbreche ${name}',
    fr: 'Interrompez ${name}',
    ja: '${name} に沈黙',
    cn: '打断${name}',
    ko: '${name} 시전 끊기',
    tc: '打斷${name}'
  },
  preyOnYou: {
    en: 'Prey on YOU',
    de: 'Marker auf DIR',
    fr: 'Marquage sur VOUS',
    ja: '自分にマーキング',
    cn: '猎物点名',
    ko: '홍옥징 대상자',
    tc: '獵物點名'
  },
  preyOnPlayer: {
    en: 'Prey on ${player}',
    de: 'Marker auf ${player}',
    fr: 'Marquage sur ${player}',
    ja: '${player}にマーキング',
    cn: '${player} 的猎物点名',
    ko: '"${player}" 홍옥징',
    tc: '${player} 的獵物點名'
  },
  awayFromGroup: {
    en: 'Away from Group',
    de: 'Weg von der Gruppe',
    fr: 'Éloignez-vous du groupe',
    ja: '外へ',
    cn: '远离人群',
    ko: '다른 사람들과 떨어지기',
    tc: '遠離人群'
  },
  awayFromPlayer: {
    en: 'Away from ${player}',
    de: 'Weg von ${player}',
    fr: 'Éloignez-vous de ${player}',
    ja: '${player}から離れる',
    cn: '远离${player}',
    ko: '"${player}"에게서 멀어지기',
    tc: '遠離${player}'
  },
  meteorOnYou: {
    en: 'Meteor on YOU',
    de: 'Meteor auf DIR',
    fr: 'Météore sur VOUS',
    ja: '自分にメテオ',
    cn: '陨石点名',
    ko: '나에게 메테오징',
    tc: '隕石點名'
  },
  stopMoving: {
    en: 'Stop Moving!',
    de: 'Bewegung stoppen!',
    fr: 'Ne bougez pas !',
    ja: '移動禁止！',
    cn: '停止移动！',
    ko: '이동 멈추기!',
    tc: '停止移動！'
  },
  stopEverything: {
    en: 'Stop Everything!',
    de: 'Stoppe Alles!',
    fr: 'Arrêtez tout !',
    ja: '行動禁止！',
    cn: '停止行动！',
    ko: '행동 멈추기!',
    tc: '停止行動！'
  },
  moveAway: {
    // move away to dodge aoes
    en: 'Move!',
    de: 'Bewegen!',
    fr: 'Bougez !',
    ja: '避けて！',
    cn: '离开原地！',
    ko: '이동하기!',
    tc: '離開原地！'
  },
  moveAround: {
    // move around (e.g. jumping) to avoid being frozen
    en: 'Move!',
    de: 'Bewegen!',
    fr: 'Bougez !',
    ja: '動く！',
    cn: '保持运动！',
    ko: '움직이기!',
    tc: '保持運動！'
  },
  breakChains: {
    en: 'Break Chains',
    de: 'Kette zerbrechen',
    fr: 'Brisez les chaines',
    ja: '線を切る',
    cn: '拉断连线',
    ko: '선 끊기',
    tc: '拉斷連線'
  },
  moveChainsTogether: {
    en: 'Move Chains Together',
    de: 'Ketten zusammen bewegen',
    fr: 'Bougez les chaines ensemble',
    ja: '線同士で一緒に移動',
    cn: '连线一起移动',
    ko: '선 붙어서 같이 움직이기',
    tc: '連線一起移動'
  },
  earthshakerOnYou: {
    en: 'Earth Shaker on YOU',
    de: 'Erdstoß auf DIR',
    fr: 'Marque de terre sur VOUS',
    ja: '自分にアースシェイカー',
    cn: '大地摇动点名',
    ko: '어스징 대상자',
    tc: '大地搖動點名'
  },
  wakeUp: {
    en: 'WAKE UP',
    de: 'AUFWACHEN',
    fr: 'RÉVEILLE-TOI',
    ja: '目を覚まして！',
    cn: '醒醒！动一动！！',
    ko: '일어나세요!',
    tc: '醒醒！動一動！！'
  },
  closeTethersWithPlayer: {
    en: 'Close Tethers (${player})',
    de: 'Nahe Verbindungen (${player})',
    fr: 'Liens proches avec (${player})',
    ja: '${player}に近づく',
    cn: '近线 (${player})',
    ko: '상대와 가까이 붙기 (${player})',
    tc: '近線 (${player})'
  },
  farTethersWithPlayer: {
    en: 'Far Tethers (${player})',
    de: 'Entfernte Verbindungen (${player})',
    fr: 'Liens éloignés avec (${player})',
    ja: ' (${player})から離れる',
    cn: '远线 (${player})',
    ko: '상대와 떨어지기 (${player})',
    tc: '遠線 (${player})'
  },
  getTowers: {
    en: 'Get Towers',
    de: 'Türme nehmen',
    fr: 'Allez dans les tours',
    ja: '塔を踏む',
    cn: '踩塔',
    ko: '기둥 들어가기',
    tc: '踩塔'
  },
  unknown: {
    en: '???',
    de: '???',
    fr: '???',
    ja: '???',
    cn: '???',
    ko: '???',
    tc: '???'
  },
  cardinals: {
    en: 'Cardinals',
    de: 'Kardinal',
    fr: 'Cardinaux',
    ja: '十字回避',
    cn: '去正点',
    ko: '십자방향',
    tc: '去正點'
  },
  intercards: {
    en: 'Intercards',
    de: 'Interkardinal',
    fr: 'Intercardinal',
    ja: '斜めへ',
    cn: '去斜角',
    ko: '대각선 쪽',
    tc: '去斜角'
  },
  north: {
    en: 'North',
    de: 'Norden',
    fr: 'Nord',
    ja: '北',
    cn: '上',
    ko: '북쪽',
    tc: '北'
  },
  south: {
    en: 'South',
    de: 'Süden',
    fr: 'Sud',
    ja: '南',
    cn: '下',
    ko: '남쪽',
    tc: '南'
  },
  east: {
    en: 'East',
    de: 'Osten',
    fr: 'Est',
    ja: '東',
    cn: '右',
    ko: '동쪽',
    tc: '東'
  },
  west: {
    en: 'West',
    de: 'Westen',
    fr: 'Ouest',
    ja: '西',
    cn: '左',
    ko: '서쪽',
    tc: '西'
  },
  northwest: {
    en: 'Northwest',
    de: 'Nordwesten',
    fr: 'Nord-Ouest',
    ja: '北西',
    cn: '左上',
    ko: '북서쪽',
    tc: '西北'
  },
  northeast: {
    en: 'Northeast',
    de: 'Nordosten',
    fr: 'Nord-Est',
    ja: '北東',
    cn: '右上',
    ko: '북동쪽',
    tc: '東北'
  },
  southwest: {
    en: 'Southwest',
    de: 'Südwesten',
    fr: 'Sud-Ouest',
    ja: '南西',
    cn: '左下',
    ko: '남서쪽',
    tc: '西南'
  },
  southeast: {
    en: 'Southeast',
    de: 'Südosten',
    fr: 'Sud-Est',
    ja: '南東',
    cn: '右下',
    ko: '남동쪽',
    tc: '東南'
  },
  dirN: {
    en: 'N',
    de: 'N',
    fr: 'N',
    ja: '北',
    cn: '上',
    ko: '북',
    tc: '北'
  },
  dirS: {
    en: 'S',
    de: 'S',
    fr: 'S',
    ja: '南',
    cn: '下',
    ko: '남',
    tc: '南'
  },
  dirE: {
    en: 'E',
    de: 'O',
    fr: 'E',
    ja: '東',
    cn: '右',
    ko: '동',
    tc: '東'
  },
  dirW: {
    en: 'W',
    de: 'W',
    fr: 'O',
    ja: '西',
    cn: '左',
    ko: '서',
    tc: '西'
  },
  dirNW: {
    en: 'NW',
    de: 'NW',
    fr: 'NO',
    ja: '北西',
    cn: '左上',
    ko: '북서',
    tc: '西北'
  },
  dirNE: {
    en: 'NE',
    de: 'NO',
    fr: 'NE',
    ja: '北東',
    cn: '右上',
    ko: '북동',
    tc: '東北'
  },
  dirSW: {
    en: 'SW',
    de: 'SW',
    fr: 'SO',
    ja: '南西',
    cn: '左下',
    ko: '남서',
    tc: '西南'
  },
  dirSE: {
    en: 'SE',
    de: 'SO',
    fr: 'SE',
    ja: '南東',
    cn: '右下',
    ko: '남동',
    tc: '東南'
  },
  dirNNE: {
    en: 'NNE',
    de: 'NNO',
    fr: 'NNE',
    ja: '北北東(1時)',
    cn: '上偏右',
    ko: '1시',
    tc: '北偏東'
  },
  dirENE: {
    en: 'ENE',
    de: 'ONO',
    fr: 'ENE',
    ja: '東北東(2時)',
    cn: '右偏上',
    ko: '2시',
    tc: '東偏北'
  },
  dirESE: {
    en: 'ESE',
    de: 'OSO',
    fr: 'ESE',
    ja: '東南東(4時)',
    cn: '右偏下',
    ko: '4시',
    tc: '東偏南'
  },
  dirSSE: {
    en: 'SSE',
    de: 'SSO',
    fr: 'SSE',
    ja: '南南東(5時)',
    cn: '下偏右',
    ko: '5시',
    tc: '南偏東'
  },
  dirSSW: {
    en: 'SSW',
    de: 'SSW',
    fr: 'SSO',
    ja: '南南西(7時)',
    cn: '下偏左',
    ko: '7시',
    tc: '南偏西'
  },
  dirWSW: {
    en: 'WSW',
    de: 'WSW',
    fr: 'OSO',
    ja: '西南西(8時)',
    cn: '左偏下',
    ko: '8시',
    tc: '西偏南'
  },
  dirWNW: {
    en: 'WNW',
    de: 'WNW',
    fr: 'ONO',
    ja: '西北西(10時)',
    cn: '左偏上',
    ko: '10시',
    tc: '西偏北'
  },
  dirNNW: {
    en: 'NNW',
    de: 'NNW',
    fr: 'NNO',
    ja: '北北西(11時)',
    cn: '上偏左',
    ko: '11시',
    tc: '北偏西'
  },
  tank: {
    en: 'Tank',
    de: 'Tank',
    fr: 'Tank',
    ja: 'タンク',
    cn: '坦克',
    ko: '탱',
    tc: '坦克'
  },
  healer: {
    en: 'Healer',
    de: 'Heiler',
    fr: 'Healer',
    ja: 'ヒーラー',
    cn: '治疗',
    ko: '힐',
    tc: '治療'
  },
  dps: {
    en: 'DPS',
    de: 'DPS',
    fr: 'DPS',
    ja: 'DPS',
    cn: 'DPS',
    ko: '딜러',
    tc: 'DPS'
  },
  // for sequenced mechanics
  next: {
    en: ' => ',
    de: ' => ',
    fr: ' => ',
    ja: ' => ',
    cn: ' => ',
    ko: ' => ',
    tc: ' => '
  },
  // for combo mechanics/names
  and: {
    en: ' + ',
    de: ' + ',
    fr: ' + ',
    ja: ' + ',
    cn: ' + ',
    ko: ' + ',
    tc: ' + '
  },
  // for either/or directions or mechanics
  or: {
    en: ' / ',
    de: ' / ',
    fr: ' / ',
    ja: ' / ',
    cn: ' / ',
    ko: ' / ',
    tc: ' / '
  },
  // Literal numbers.
  num0: numberToOutputString(0),
  num1: numberToOutputString(1),
  num2: numberToOutputString(2),
  num3: numberToOutputString(3),
  num4: numberToOutputString(4),
  num5: numberToOutputString(5),
  num6: numberToOutputString(6),
  num7: numberToOutputString(7),
  num8: numberToOutputString(8),
  num9: numberToOutputString(9)
});

/***/ }),

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PS": () => (/* binding */ addOverlayListener),
/* harmony export */   "ae": () => (/* binding */ callOverlayHandler)
/* harmony export */ });
/* unused harmony exports dispatchOverlayEvent, removeOverlayListener, setOverlayHandlerOverride, init */
// OverlayPlugin API setup

let inited = false;
let wsUrl = null;
let ws = null;
let queue = [];
let rseqCounter = 0;
const responsePromises = {};
const subscribers = {};
const sendMessage = (msg, cb) => {
  if (ws) {
    if (queue) queue.push(msg);else ws.send(JSON.stringify(msg));
  } else {
    if (queue) queue.push([msg, cb]);else window.OverlayPluginApi.callHandler(JSON.stringify(msg), cb);
  }
};
const processEvent = msg => {
  init();
  const subs = subscribers[msg.type];
  subs?.forEach(sub => {
    try {
      sub(msg);
    } catch (e) {
      console.error(e);
    }
  });
};
const dispatchOverlayEvent = processEvent;
const addOverlayListener = (event, cb) => {
  init();
  if (!subscribers[event]) {
    subscribers[event] = [];
    if (!queue) {
      sendMessage({
        call: 'subscribe',
        events: [event]
      });
    }
  }
  subscribers[event]?.push(cb);
};
const removeOverlayListener = (event, cb) => {
  init();
  if (subscribers[event]) {
    const list = subscribers[event];
    const pos = list?.indexOf(cb);
    if (pos !== undefined && pos > -1) list?.splice(pos, 1);
  }
};
const callOverlayHandlerInternal = (_msg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  init();
  const msg = {
    ..._msg,
    rseq: 0
  };
  let p;
  if (ws) {
    msg.rseq = rseqCounter++;
    p = new Promise((resolve, reject) => {
      responsePromises[msg.rseq] = {
        resolve: resolve,
        reject: reject
      };
    });
    sendMessage(msg);
  } else {
    p = new Promise((resolve, reject) => {
      sendMessage(msg, data => {
        if (data === null) {
          resolve(data);
          return;
        }
        const parsed = JSON.parse(data);
        if (parsed['$error']) reject(parsed);else resolve(parsed);
      });
    });
  }
  return p;
};
const callOverlayHandlerOverrideMap = {};
const callOverlayHandler = (_msg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  init();

  // If this `as` is incorrect, then it will not find an override.
  // TODO: we could also replace this with a type guard.
  const type = _msg.call;
  const callFunc = callOverlayHandlerOverrideMap[type] ?? callOverlayHandlerInternal;

  // The `IOverlayHandler` type guarantees that parameters/return type match
  // one of the overlay handlers.  The OverrideMap also only stores functions
  // that match by the discriminating `call` field, and so any overrides
  // should be correct here.
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument
  return callFunc(_msg);
};
const setOverlayHandlerOverride = (type, override) => {
  if (!override) {
    delete callOverlayHandlerOverrideMap[type];
    return;
  }
  callOverlayHandlerOverrideMap[type] = override;
};
const init = () => {
  if (inited) return;
  if (typeof window !== 'undefined') {
    wsUrl = new URLSearchParams(window.location.search).get('OVERLAY_WS');
    if (wsUrl !== null) {
      const connectWs = function (wsUrl) {
        ws = new WebSocket(wsUrl);
        ws.addEventListener('error', e => {
          console.error(e);
        });
        ws.addEventListener('open', () => {
          console.log('Connected!');
          const q = queue ?? [];
          queue = null;
          sendMessage({
            call: 'subscribe',
            events: Object.keys(subscribers)
          });
          for (const msg of q) {
            if (!Array.isArray(msg)) sendMessage(msg);
          }
        });
        ws.addEventListener('message', _msg => {
          try {
            if (typeof _msg.data !== 'string') {
              console.error('Invalid message data received: ', _msg);
              return;
            }
            const msg = JSON.parse(_msg.data);
            const promiseFuncs = msg?.rseq !== undefined ? responsePromises[msg.rseq] : undefined;
            if (msg.rseq !== undefined && promiseFuncs) {
              if (msg['$error']) promiseFuncs.reject(msg);else promiseFuncs.resolve(msg);
              delete responsePromises[msg.rseq];
            } else {
              processEvent(msg);
            }
          } catch (e) {
            console.error('Invalid message received: ', _msg);
            return;
          }
        });
        ws.addEventListener('close', () => {
          queue = null;
          console.log('Trying to reconnect...');
          // Don't spam the server with retries.
          window.setTimeout(() => {
            connectWs(wsUrl);
          }, 300);
        });
      };
      connectWs(wsUrl);
    } else {
      const waitForApi = function () {
        if (!window.OverlayPluginApi?.ready) {
          window.setTimeout(waitForApi, 300);
          return;
        }
        const q = queue ?? [];
        queue = null;
        window.__OverlayCallback = processEvent;
        sendMessage({
          call: 'subscribe',
          events: Object.keys(subscribers)
        });
        for (const item of q) {
          if (Array.isArray(item)) sendMessage(item[0], item[1]);
        }
      };
      waitForApi();
    }

    // Here the OverlayPlugin API is registered to the window object,
    // but this is mainly for backwards compatibility. For cactbot's built-in files,
    // it is recommended to use the various functions exported in resources/overlay_plugin_api.ts.

    /* eslint-disable deprecation/deprecation */
    window.addOverlayListener = addOverlayListener;
    window.removeOverlayListener = removeOverlayListener;
    window.callOverlayHandler = callOverlayHandler;
    window.dispatchOverlayEvent = dispatchOverlayEvent;
    /* eslint-enable deprecation/deprecation */
  }

  inited = true;
};

/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Regexes)
/* harmony export */ });
/* unused harmony export buildRegex */
/* harmony import */ var _netlog_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _not_reached__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);


const separator = ':';
const matchDefault = '[^:]*';
const matchWithColonsDefault = '(?:[^:]|: )*?';
const fieldsWithPotentialColons = ['effect', 'ability'];
const defaultParams = (type, version, include) => {
  const logType = _netlog_defs__WEBPACK_IMPORTED_MODULE_0__/* .logDefinitionsVersions */ .W[version][type];
  if (include === undefined) {
    include = Object.keys(logType.fields);
    if ('repeatingFields' in logType) {
      include.push(logType.repeatingFields.label);
    }
  }
  const params = {};
  const firstOptionalField = logType.firstOptionalField;
  for (const [prop, index] of Object.entries(logType.fields)) {
    if (!include.includes(prop)) continue;
    const param = {
      field: prop,
      optional: firstOptionalField !== undefined && index >= firstOptionalField
    };
    if (prop === 'type') param.value = logType.type;
    params[index] = param;
  }
  if ('repeatingFields' in logType && include.includes(logType.repeatingFields.label)) {
    params[logType.repeatingFields.startingIndex] = {
      field: logType.repeatingFields.label,
      optional: firstOptionalField !== undefined && logType.repeatingFields.startingIndex >= firstOptionalField,
      repeating: true,
      repeatingKeys: [...logType.repeatingFields.names],
      sortKeys: logType.repeatingFields.sortKeys,
      primaryKey: logType.repeatingFields.primaryKey,
      possibleKeys: [...logType.repeatingFields.possibleKeys]
    };
  }
  return params;
};
const isRepeatingField = (repeating, value) => {
  if (repeating !== true) return false;
  // Allow excluding the field to match for extraction
  if (value === undefined) return true;
  if (!Array.isArray(value)) return false;
  for (const e of value) {
    if (typeof e !== 'object') return false;
  }
  return true;
};
const parseHelper = (params, defKey, fields) => {
  params = params ?? {};
  const validFields = [];
  for (const index in fields) {
    const field = fields[index];
    if (field) validFields.push(field.field);
  }
  Regexes.validateParams(params, defKey, ['capture', ...validFields]);

  // Find the last key we care about, so we can shorten the regex if needed.
  const capture = Regexes.trueIfUndefined(params.capture);
  const fieldKeys = Object.keys(fields).sort((a, b) => parseInt(a) - parseInt(b));
  let maxKeyStr;
  if (capture) {
    const keys = [];
    for (const key in fields) keys.push(key);
    let tmpKey = keys.pop();
    if (tmpKey === undefined) {
      maxKeyStr = fieldKeys[fieldKeys.length - 1] ?? '0';
    } else {
      while (fields[tmpKey]?.optional && !((fields[tmpKey]?.field ?? '') in params)) tmpKey = keys.pop();
      maxKeyStr = tmpKey ?? '0';
    }
  } else {
    maxKeyStr = '0';
    for (const key in fields) {
      const value = fields[key] ?? {};
      if (typeof value !== 'object') continue;
      const fieldName = fields[key]?.field;
      if (fieldName !== undefined && fieldName in params) maxKeyStr = key;
    }
  }
  const maxKey = parseInt(maxKeyStr);

  // Special case for Ability to handle aoe and non-aoe.
  const abilityMessageType = `(?:${_netlog_defs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Ability.messageType */ .Z.Ability.messageType}|${_netlog_defs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].NetworkAOEAbility.messageType */ .Z.NetworkAOEAbility.messageType})`;
  const abilityHexCode = '(?:15|16)';

  // Build the regex from the fields.
  const prefix = defKey !== 'Ability' ? _netlog_defs__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[defKey].messageType : abilityMessageType;

  // Hex codes are a minimum of two characters.  Abilities are special because
  // they need to support both 0x15 and 0x16.
  const typeAsHex = parseInt(_netlog_defs__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[defKey].type).toString(16).toUpperCase();
  const defaultHexCode = typeAsHex.length < 2 ? `00${typeAsHex}`.slice(-2) : typeAsHex;
  const hexCode = defKey !== 'Ability' ? defaultHexCode : abilityHexCode;
  let str = '';
  if (capture) str += `(?<timestamp>\\y{Timestamp}) ${prefix} (?<type>${hexCode})`;else str += `\\y{Timestamp} ${prefix} ${hexCode}`;
  let lastKey = 1;
  for (const keyStr in fields) {
    const parseField = fields[keyStr];
    if (parseField === undefined) continue;
    const fieldName = parseField.field;

    // Regex handles these manually above in the `str` initialization.
    if (fieldName === 'timestamp' || fieldName === 'type') continue;
    const key = parseInt(keyStr);
    // Fill in blanks.
    const missingFields = key - lastKey - 1;
    if (missingFields === 1) str += `${separator}${matchDefault}`;else if (missingFields > 1) str += `(?:${separator}${matchDefault}){${missingFields}}`;
    lastKey = key;
    str += separator;
    if (typeof parseField !== 'object') throw new Error(`${defKey}: invalid value: ${JSON.stringify(parseField)}`);
    const fieldDefault = fieldName !== undefined && fieldsWithPotentialColons.includes(fieldName) ? matchWithColonsDefault : matchDefault;
    const defaultFieldValue = parseField.value?.toString() ?? fieldDefault;
    const fieldValue = params[fieldName];
    if (isRepeatingField(fields[keyStr]?.repeating, fieldValue)) {
      const repeatingFieldsSeparator = '(?:$|:)';
      let repeatingArray = fieldValue;
      const sortKeys = fields[keyStr]?.sortKeys;
      const primaryKey = fields[keyStr]?.primaryKey;
      const possibleKeys = fields[keyStr]?.possibleKeys;

      // primaryKey is required if this is a repeating field per typedef in netlog_defs.ts
      // Same with possibleKeys
      if (primaryKey === undefined || possibleKeys === undefined) throw new _not_reached__WEBPACK_IMPORTED_MODULE_1__/* .UnreachableCode */ .$();

      // Allow sorting if needed
      if (sortKeys) {
        // Also sort our valid keys list
        possibleKeys.sort((left, right) => left.toLowerCase().localeCompare(right.toLowerCase()));
        if (repeatingArray !== undefined) {
          repeatingArray = [...repeatingArray].sort((left, right) => {
            // We check the validity of left/right because they're user-supplied
            if (typeof left !== 'object' || left[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            const leftValue = left[primaryKey];
            if (typeof leftValue !== 'string' || !possibleKeys?.includes(leftValue)) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            if (typeof right !== 'object' || right[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            const rightValue = right[primaryKey];
            if (typeof rightValue !== 'string' || !possibleKeys?.includes(rightValue)) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            return leftValue.toLowerCase().localeCompare(rightValue.toLowerCase());
          });
        }
      }
      const anonReps = repeatingArray;
      // Loop over our possible keys
      // Build a regex that can match any possible key with required values substituted in
      possibleKeys.forEach(possibleKey => {
        const rep = anonReps?.find(rep => primaryKey in rep && rep[primaryKey] === possibleKey);
        let fieldRegex = '';
        // Rather than looping over the keys defined on the object,
        // loop over the base type def's keys. This enforces the correct order.
        fields[keyStr]?.repeatingKeys?.forEach(key => {
          let val = rep?.[key];
          if (rep === undefined || !(key in rep)) {
            // If we don't have a value for this key
            // insert a placeholder, unless it's the primary key
            if (key === primaryKey) val = possibleKey;else val = matchDefault;
          }
          if (typeof val !== 'string') {
            if (!Array.isArray(val)) val = matchDefault;else if (val.length < 1) val = matchDefault;else if (val.some(v => typeof v !== 'string')) val = matchDefault;
          }
          fieldRegex += Regexes.maybeCapture(key === primaryKey ? false : capture,
          // All capturing groups are `fieldName` + `possibleKey`, e.g. `pairIsCasting1`
          fieldName + possibleKey, val, defaultFieldValue) + repeatingFieldsSeparator;
        });
        if (fieldRegex.length > 0) {
          str += `(?:${fieldRegex})${rep !== undefined ? '' : '?'}`;
        }
      });
    } else if (fields[keyStr]?.repeating) {
      // If this is a repeating field but the actual value is empty or otherwise invalid,
      // don't process further. We can't use `continue` in the above block because that
      // would skip the early-out break at the end of the loop.
    } else {
      if (fieldName !== undefined) {
        str += Regexes.maybeCapture(
        // more accurate type instead of `as` cast
        // maybe this function needs a refactoring
        capture, fieldName, fieldValue, defaultFieldValue);
      } else {
        // FIXME: handle lint error here
        // ref: https://github.com/OverlayPlugin/cactbot/pull/274#discussion_r1692439720
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        str += fieldValue;
      }
    }

    // Stop if we're not capturing and don't care about future fields.
    if (key >= maxKey) break;
  }
  str += '(?:$|:)';
  return Regexes.parse(str);
};
const buildRegex = (type, params) => {
  return parseHelper(params, type, defaultParams(type, Regexes.logVersion));
};
class Regexes {
  static logVersion = 'latest';

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-20-0x14-networkstartscasting
   */
  static startsUsing(params) {
    return buildRegex('StartsUsing', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   */
  static ability(params) {
    return buildRegex('Ability', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   *
   * @deprecated Use `ability` instead
   */
  static abilityFull(params) {
    return this.ability(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-27-0x1b-networktargeticon-head-marker
   */
  static headMarker(params) {
    return buildRegex('HeadMarker', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatant(params) {
    return buildRegex('AddedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatantFull(params) {
    return this.addedCombatant(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-04-0x04-removecombatant
   */
  static removingCombatant(params) {
    return buildRegex('RemovedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-26-0x1a-networkbuff
   */
  static gainsEffect(params) {
    return buildRegex('GainsEffect', params);
  }

  /**
   * Prefer gainsEffect over this function unless you really need extra data.
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-38-0x26-networkstatuseffects
   */
  static statusEffectExplicit(params) {
    return buildRegex('StatusEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-30-0x1e-networkbuffremove
   */
  static losesEffect(params) {
    return buildRegex('LosesEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-35-0x23-networktether
   */
  static tether(params) {
    return buildRegex('Tether', params);
  }

  /**
   * 'target' was defeated by 'source'
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-25-0x19-networkdeath
   */
  static wasDefeated(params) {
    return buildRegex('WasDefeated', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-24-0x18-networkdot
   */
  static networkDoT(params) {
    return buildRegex('NetworkDoT', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static echo(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'echo', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0038';
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static dialog(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'dialog', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0044';
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static message(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'message', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0839';
    return Regexes.gameLog(params);
  }

  /**
   * fields: code, name, line, capture
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameLog(params) {
    return buildRegex('GameLog', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameNameLog(params) {
    // Backwards compatability.
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-12-0x0c-playerstats
   */
  static statChange(params) {
    return buildRegex('PlayerStats', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-01-0x01-changezone
   */
  static changeZone(params) {
    return buildRegex('ChangeZone', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-33-0x21-network6d-actor-control
   */
  static network6d(params) {
    return buildRegex('ActorControl', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-34-0x22-networknametoggle
   */
  static nameToggle(params) {
    return buildRegex('NameToggle', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-40-0x28-map
   */
  static map(params) {
    return buildRegex('Map', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-41-0x29-systemlogmessage
   */
  static systemLogMessage(params) {
    return buildRegex('SystemLogMessage', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-257-0x101-mapeffect
   */
  static mapEffect(params) {
    return buildRegex('MapEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-258-0x102-fatedirector
   */
  static fateDirector(params) {
    return buildRegex('FateDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-259-0x103-cedirector
   */
  static ceDirector(params) {
    return buildRegex('CEDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-260-0x104-incombat
   */
  static inCombat(params) {
    return buildRegex('InCombat', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-261-0x105-combatantmemory
   */
  static combatantMemory(params) {
    return buildRegex('CombatantMemory', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-263-0x107-startsusingextra
   */
  static startsUsingExtra(params) {
    return buildRegex('StartsUsingExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-264-0x108-abilityextra
   */
  static abilityExtra(params) {
    return buildRegex('AbilityExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-265-0x109-contentfindersettings
   */
  static contentFinderSettings(params) {
    return buildRegex('ContentFinderSettings', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-266-0x10a-npcyell
   */
  static npcYell(params) {
    return buildRegex('NpcYell', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-267-0x10b-battletalk2
   */
  static battleTalk2(params) {
    return buildRegex('BattleTalk2', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-268-0x10c-countdown
   */
  static countdown(params) {
    return buildRegex('Countdown', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-269-0x10d-countdowncancel
   */
  static countdownCancel(params) {
    return buildRegex('CountdownCancel', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-270-0x10e-actormove
   */
  static actorMove(params) {
    return buildRegex('ActorMove', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-271-0x10f-actorsetpos
   */
  static actorSetPos(params) {
    return buildRegex('ActorSetPos', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-272-0x110-spawnnpcextra
   */
  static spawnNpcExtra(params) {
    return buildRegex('SpawnNpcExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-273-0x111-actorcontrolextra
   */
  static actorControlExtra(params) {
    return buildRegex('ActorControlExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-274-0x112-actorcontrolselfextra
   */
  static actorControlSelfExtra(params) {
    return buildRegex('ActorControlSelfExtra', params);
  }

  /**
   * Helper function for building named capture group
   */
  static maybeCapture(capture, name, value, defaultValue) {
    if (value === undefined) value = defaultValue ?? matchDefault;
    value = Regexes.anyOf(value);
    return capture ? Regexes.namedCapture(name, value) : value;
  }
  static optional(str) {
    return `(?:${str})?`;
  }

  // Creates a named regex capture group named |name| for the match |value|.
  static namedCapture(name, value) {
    if (name.includes('>')) console.error(`"${name}" contains ">".`);
    if (name.includes('<')) console.error(`"${name}" contains ">".`);
    return `(?<${name}>${value})`;
  }

  /**
   * Convenience for turning multiple args into a unioned regular expression.
   * anyOf(x, y, z) or anyOf([x, y, z]) do the same thing, and return (?:x|y|z).
   * anyOf(x) or anyOf(x) on its own simplifies to just x.
   * args may be strings or RegExp, although any additional markers to RegExp
   * like /insensitive/i are dropped.
   */
  static anyOf(...args) {
    const anyOfArray = array => {
      const [elem] = array;
      if (elem !== undefined && array.length === 1) return `${elem instanceof RegExp ? elem.source : elem}`;
      return `(?:${array.map(elem => elem instanceof RegExp ? elem.source : elem).join('|')})`;
    };
    let array = [];
    const [firstArg] = args;
    if (args.length === 1) {
      if (typeof firstArg === 'string' || firstArg instanceof RegExp) array = [firstArg];else if (Array.isArray(firstArg)) array = firstArg;else array = [];
    } else {
      // TODO: more accurate type instead of `as` cast
      array = args;
    }
    return anyOfArray(array);
  }
  static parse(regexpString) {
    const kCactbotCategories = {
      Timestamp: '^.{14}',
      NetTimestamp: '.{33}',
      NetField: '(?:[^|]*\\|)',
      LogType: '[0-9A-Fa-f]{2}',
      AbilityCode: '[0-9A-Fa-f]{1,8}',
      ObjectId: '[0-9A-F]{8}',
      // Matches any character name (including empty strings which the FFXIV
      // ACT plugin can generate when unknown).
      Name: '(?:[^\\s:|]+(?: [^\\s:|]+)?|)',
      // Floats can have comma as separator in FFXIV plugin output: https://github.com/ravahn/FFXIV_ACT_Plugin/issues/137
      Float: '-?[0-9]+(?:[.,][0-9]+)?(?:E-?[0-9]+)?'
    };

    // All regexes in cactbot are case insensitive.
    // This avoids headaches as things like `Vice and Vanity` turns into
    // `Vice And Vanity`, especially for French and German.  It appears to
    // have a ~20% regex parsing overhead, but at least they work.
    let modifiers = 'i';
    if (regexpString instanceof RegExp) {
      modifiers += (regexpString.global ? 'g' : '') + (regexpString.multiline ? 'm' : '');
      regexpString = regexpString.source;
    }
    regexpString = regexpString.replace(/\\y\{(.*?)\}/g, (match, group) => {
      return kCactbotCategories[group] || match;
    });
    return new RegExp(regexpString, modifiers);
  }

  // Like Regex.Regexes.parse, but force global flag.
  static parseGlobal(regexpString) {
    const regex = Regexes.parse(regexpString);
    let modifiers = 'gi';
    if (regexpString instanceof RegExp) modifiers += regexpString.multiline ? 'm' : '';
    return new RegExp(regex.source, modifiers);
  }
  static trueIfUndefined(value) {
    if (typeof value === 'undefined') return true;
    return !!value;
  }
  static validateParams(f, funcName, params) {
    if (f === null) return;
    if (typeof f !== 'object') return;
    const keys = Object.keys(f);
    for (const key of keys) {
      if (!params.includes(key)) {
        throw new Error(`${funcName}: invalid parameter '${key}'.  ` + `Valid params: ${JSON.stringify(params)}`);
      }
    }
  }
}

/***/ }),

/***/ 469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n3": () => (/* binding */ Responses),
/* harmony export */   "ug": () => (/* binding */ triggerOutputFunctions)
/* harmony export */ });
/* unused harmony exports severityList, builtInResponseStr, triggerFunctions, triggerTextOutputFunctions, severityMap */
/* harmony import */ var _outputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
// This is meant to be used in a trigger as such:
// {
//   id: 'Some tankbuster',
//   regex: Regexes.startsUsing({source: 'Ye Olde Bosse', id: '666'}),
//   condition: Conditions.caresAboutMagical(data),
//   response: Responses.tankBuster(),
// },
//
// Note: Breaking out the condition like this lets people override it if they
// always (or never) want to know about it, rather than hiding the logic inside
// the tankbuster callback with a "is healer" check.
//
// If data.role is used, it should be only to differentiate between alert levels,
// and not whether a message is sent at all.
//
// Although this is not true of `response: ` fields on triggers in general,
// all responses in this file should either return an object or a single
// function that sets outputStrings and returns an object without doing
// anything with data or matches.  See `responses_test.js`.


const severityList = (/* unused pure expression or super */ null && (['info', 'alert', 'alarm']));
const builtInResponseStr = 'cactbot-builtin-response';

// All valid trigger fields.
const triggerFunctions = (/* unused pure expression or super */ null && (['alarmText', 'alertText', 'condition', 'delaySeconds', 'disabled', 'durationSeconds', 'id', 'type', 'infoText', 'preRun', 'promise', 'response', 'run', 'sound', 'soundVolume', 'suppressSeconds', 'tts', 'outputStrings']));

// Trigger fields that can produce text output.
const triggerTextOutputFunctions = ['alarmText', 'alertText', 'infoText', 'response', 'tts'];

// If a trigger has any of these, then it has a visible/audio effect.
const triggerOutputFunctions = [...triggerTextOutputFunctions, 'sound'];
const severityMap = {
  'info': 'infoText',
  'alert': 'alertText',
  'alarm': 'alarmText'
};
const getText = sev => {
  if (!(sev in severityMap)) throw new Error(`Invalid severity: ${sev}.`);
  return severityMap[sev];
};
const defaultInfoText = sev => {
  if (!sev) return 'infoText';
  return getText(sev);
};
const defaultAlertText = sev => {
  if (!sev) return 'alertText';
  return getText(sev);
};
const defaultAlarmText = sev => {
  if (!sev) return 'alarmText';
  return getText(sev);
};
const getTarget = matches => {
  // Often tankbusters can be casted by the boss on the boss.
  // Consider this as "not having a target".
  if (matches.target === matches.source) return;
  // In hunts, sometimes there are too many people for the target
  // to have a name.  Treat this as "no target".
  if (matches.target === '') return;
  return matches.target;
};
const getSource = matches => {
  return matches?.source;
};

// FIXME: make this work for any number of pairs of params
const combineFuncs = function (text1, func1, text2, func2) {
  const obj = {};
  if (text1 !== text2) {
    obj[text1] = func1;
    obj[text2] = func2;
  } else {
    obj[text1] = (data, matches, output) => {
      return func1(data, matches, output) ?? func2(data, matches, output);
    };
  }
  return obj;
};
const isPlayerId = id => {
  return id !== undefined && !id.startsWith('4');
};

// For responses that unconditionally return static text.
const staticResponse = (field, text) => {
  return (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      text: text
    };
    return {
      [field]: (_data, _matches, output) => output.text?.()
    };
  };
};
const Responses = {
  tankBuster: (targetSev, otherSev) => {
    const outputStrings = {
      noTarget: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tankBuster */ .Z.tankBuster,
      busterOnYou: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tankBusterOnYou */ .Z.tankBusterOnYou,
      busterOnTarget: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tankBusterOnPlayer */ .Z.tankBusterOnPlayer
    };
    const targetFunc = (data, matches, output) => {
      const target = getTarget(matches);
      if (target === undefined) {
        if (data.role !== 'tank' && data.role !== 'healer') return;
        return output.noTarget?.();
      }
      if (target === data.me) return output.busterOnYou?.();
    };
    const otherFunc = (data, matches, output) => {
      const target = getTarget(matches);
      if (target === undefined) {
        if (data.role === 'tank' || data.role === 'healer') return;
        return output.noTarget?.();
      }
      if (target === data.me) return;
      return output.busterOnTarget?.({
        player: data.party.member(target)
      });
    };
    const combined = combineFuncs(defaultAlertText(targetSev), targetFunc, defaultInfoText(otherSev), otherFunc);
    return (_data, _matches, output) => {
      // cactbot-builtin-response
      output.responseOutputStrings = outputStrings;
      return combined;
    };
  },
  tankBusterSwap: (busterSev, swapSev) => {
    const outputStrings = {
      noTarget: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tankBuster */ .Z.tankBuster,
      tankSwap: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tankSwap */ .Z.tankSwap,
      busterOnYou: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tankBusterOnYou */ .Z.tankBusterOnYou,
      busterOnTarget: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tankBusterOnPlayer */ .Z.tankBusterOnPlayer
    };

    // Note: busterSev and swapSev can be the same priority.
    const tankSwapFunc = (data, matches, output) => {
      const target = getTarget(matches);
      if (data.role === 'tank' && target !== data.me) return output.tankSwap?.();
    };
    const busterFunc = (data, matches, output) => {
      const target = getTarget(matches);
      if (data.role === 'tank' && target !== data.me) return;
      if (target === data.me) return output.busterOnYou?.();
      if (target === undefined) return output.noTarget?.();
      return output.busterOnTarget?.({
        player: data.party.member(target)
      });
    };
    const combined = combineFuncs(defaultAlarmText(swapSev), tankSwapFunc, defaultAlertText(busterSev), busterFunc);
    return (_data, _matches, output) => {
      // cactbot-builtin-response
      output.responseOutputStrings = outputStrings;
      return combined;
    };
  },
  tankCleave: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      cleaveOnYou: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tankCleaveOnYou */ .Z.tankCleaveOnYou,
      cleaveNoTarget: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tankCleave */ .Z.tankCleave,
      avoidCleave: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].avoidTankCleave */ .Z.avoidTankCleave
    };
    return {
      [defaultInfoText(sev)]: (data, matches, output) => {
        const target = getTarget(matches);
        if (target === data.me) return output.cleaveOnYou?.();
        if (data.role === 'tank' || data.job === 'BLU') {
          // targetless tank cleave
          // BLU players should always get this generic cleave message.
          // We have no robust way to determine whether they have tank Mimicry on,
          // and it's really annoying for a BLU tank to be told to avoid cleaves when they can't.
          return output.cleaveNoTarget?.();
        }
        return output.avoidCleave?.();
      }
    };
  },
  sharedTankBuster: (targetSev, otherSev) => {
    const outputStrings = {
      sharedTankbusterOnYou: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sharedTankbusterOnYou */ .Z.sharedTankbusterOnYou,
      sharedTankbusterOnTarget: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sharedTankbusterOnPlayer */ .Z.sharedTankbusterOnPlayer,
      sharedTankbuster: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sharedTankbuster */ .Z.sharedTankbuster,
      avoidCleave: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].avoidTankCleave */ .Z.avoidTankCleave
    };
    const targetFunc = (data, matches, output) => {
      const target = getTarget(matches);
      if (target === undefined) {
        if (data.role !== 'tank' && data.role !== 'healer') return;
        return output.sharedTankbuster?.();
      }
      if (target === data.me) return output.sharedTankbusterOnYou?.();
      if (data.role === 'tank' || data.role === 'healer') return output.sharedTankbusterOnTarget?.({
        player: data.party.member(target)
      });
    };
    const otherFunc = (data, matches, output) => {
      const target = getTarget(matches);
      if (target === undefined) {
        if (data.role === 'tank' || data.role === 'healer') return;
        return output.avoidCleave?.();
      }
      if (target === data.me || data.role === 'tank' || data.role === 'healer') return;
      return output.avoidCleave?.();
    };
    const combined = combineFuncs(defaultAlertText(targetSev), targetFunc, defaultInfoText(otherSev), otherFunc);
    return (_data, _matches, output) => {
      // cactbot-builtin-response
      output.responseOutputStrings = outputStrings;
      return combined;
    };
  },
  miniBuster: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].miniBuster */ .Z.miniBuster),
  aoe: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].aoe */ .Z.aoe),
  bigAoe: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].bigAoe */ .Z.bigAoe),
  bleedAoe: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].bleedAoe */ .Z.bleedAoe),
  hpTo1Aoe: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].hpTo1Aoe */ .Z.hpTo1Aoe),
  spread: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].spread */ .Z.spread),
  rolePositions: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].rolePositions */ .Z.rolePositions),
  protean: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].protean */ .Z.protean),
  // for stack marker situations.
  stackMarker: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stackMarker */ .Z.stackMarker),
  // for getting together without stack marker
  getTogether: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getTogether */ .Z.getTogether),
  stackMarkerOn: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      stackOnYou: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stackOnYou */ .Z.stackOnYou,
      stackOnTarget: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stackOnPlayer */ .Z.stackOnPlayer,
      stackMarker: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stackMarker */ .Z.stackMarker
    };
    return {
      [defaultAlertText(sev)]: (data, matches, output) => {
        const target = getTarget(matches);
        if (target === data.me) return output.stackOnYou?.();
        if (target === undefined) return output.stackMarker?.();
        return output.stackOnTarget?.({
          player: data.party.member(target)
        });
      }
    };
  },
  stackInTower: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stackInTower */ .Z.stackInTower),
  stackMiddle: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stackMiddle */ .Z.stackMiddle),
  doritoStack: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].doritoStack */ .Z.doritoStack),
  // for mechanics where you stack with your partner
  stackPartner: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stackPartner */ .Z.stackPartner),
  // for light party stacks (usually targeting both healers)
  healerGroups: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].healerGroups */ .Z.healerGroups),
  spreadThenStack: sev => {
    return staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].spreadThenStack */ .Z.spreadThenStack);
  },
  stackThenSpread: sev => {
    return staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stackThenSpread */ .Z.stackThenSpread);
  },
  knockback: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].knockback */ .Z.knockback),
  knockbackOn: (targetSev, otherSev) => {
    const outputStrings = {
      knockback: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].knockback */ .Z.knockback,
      knockbackOnYou: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].knockbackOnYou */ .Z.knockbackOnYou,
      knockbackOnTarget: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].knockbackOnPlayer */ .Z.knockbackOnPlayer
    };
    const targetFunc = (data, matches, output) => {
      const target = getTarget(matches);
      if (target === data.me) return output.knockbackOnYou?.();
    };
    const otherFunc = (data, matches, output) => {
      const target = getTarget(matches);
      if (target === undefined) return output.knockback?.();
      if (target !== data.me) return output.knockbackOnTarget?.({
        player: data.party.member(target)
      });
    };
    const combined = combineFuncs(defaultInfoText(targetSev), targetFunc, defaultInfoText(otherSev), otherFunc);
    return (_data, _matches, output) => {
      // cactbot-builtin-response
      output.responseOutputStrings = outputStrings;
      return combined;
    };
  },
  drawIn: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].drawIn */ .Z.drawIn),
  lookTowards: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].lookTowardsBoss */ .Z.lookTowardsBoss),
  lookAway: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].lookAway */ .Z.lookAway),
  lookAwayFromTarget: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      lookAway: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].lookAway */ .Z.lookAway,
      lookAwayFrom: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].lookAwayFromTarget */ .Z.lookAwayFromTarget
    };
    return {
      [defaultAlertText(sev)]: (data, matches, output) => {
        const target = getTarget(matches);
        if (target === data.me) return;
        if (target === undefined) return output.lookAway?.();
        const name = isPlayerId(matches?.targetId) ? data.party.member(target) : target;
        return output.lookAwayFrom?.({
          name: name
        });
      }
    };
  },
  lookAwayFromSource: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      lookAwayFrom: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].lookAwayFromTarget */ .Z.lookAwayFromTarget
    };
    return {
      [defaultAlertText(sev)]: (data, matches, output) => {
        const source = getSource(matches);
        if (source === data.me) return;
        const name = isPlayerId(matches?.sourceId) ? data.party.member(source) : source;
        return output.lookAwayFrom?.({
          name: name
        });
      }
    };
  },
  getBehind: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getBehind */ .Z.getBehind),
  goFrontOrSides: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].goFrontOrSides */ .Z.goFrontOrSides),
  // .getUnder() is used when you have to get into the bosses hitbox
  getUnder: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getUnder */ .Z.getUnder),
  // .getIn() is more like "get close but maybe even melee range is fine"
  getIn: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["in"] */ .Z["in"]),
  // .getOut() means get far away
  getOut: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].out */ .Z.out),
  outOfMelee: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].outOfMelee */ .Z.outOfMelee),
  getInThenOut: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].inThenOut */ .Z.inThenOut),
  getIntercards: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].intercards */ .Z.intercards),
  getOutThenIn: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].outThenIn */ .Z.outThenIn),
  getBackThenFront: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].backThenFront */ .Z.backThenFront),
  getFrontThenBack: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].frontThenBack */ .Z.frontThenBack),
  getSidesThenFrontBack: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sidesThenFrontBack */ .Z.sidesThenFrontBack),
  getFrontBackThenSides: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].frontBackThenSides */ .Z.frontBackThenSides),
  goFront: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].goFront */ .Z.goFront),
  goMiddle: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].goIntoMiddle */ .Z.goIntoMiddle),
  goRight: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].right */ .Z.right),
  goLeft: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].left */ .Z.left),
  goWest: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLeftAndWest */ .Z.getLeftAndWest),
  goEast: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getRightAndEast */ .Z.getRightAndEast),
  goLeftThenRight: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].leftThenRight */ .Z.leftThenRight),
  goRightThenLeft: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].rightThenLeft */ .Z.rightThenLeft),
  goFrontBack: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].goFrontBack */ .Z.goFrontBack),
  goSides: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sides */ .Z.sides),
  // .killAdds() is used for adds that will always be available
  killAdds: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].killAdds */ .Z.killAdds),
  // .killExtraAdd() is used for adds that appear if a mechanic was not played correctly
  killExtraAdd: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].killExtraAdd */ .Z.killExtraAdd),
  awayFromFront: sev => staticResponse(defaultAlertText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].awayFromFront */ .Z.awayFromFront),
  sleep: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      sleep: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].sleepTarget */ .Z.sleepTarget
    };
    return {
      [defaultAlertText(sev)]: (_data, matches, output) => {
        const source = getSource(matches);
        return output.sleep?.({
          name: source
        });
      }
    };
  },
  stunOrInterruptIfPossible: sev => {
    return (_data, _matches, output) => {
      // cactbot-builtin-response
      output.responseOutputStrings = {
        stun: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stunTarget */ .Z.stunTarget,
        interrupt: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].interruptTarget */ .Z.interruptTarget
      };
      return {
        [defaultAlertText(sev)]: (data, matches, output) => {
          const source = getSource(matches);
          if (data.CanSilence()) return output.interrupt?.({
            name: source
          });else if (data.CanStun()) return output.stun?.({
            name: source
          });
        }
      };
    };
  },
  stun: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      stun: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stunTarget */ .Z.stunTarget
    };
    return {
      [defaultAlertText(sev)]: (_data, matches, output) => {
        const source = getSource(matches);
        return output.stun?.({
          name: source
        });
      }
    };
  },
  stunIfPossible: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      stun: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stunTarget */ .Z.stunTarget
    };
    return {
      [defaultAlertText(sev)]: (data, matches, output) => {
        const source = getSource(matches);
        if (data.CanStun()) return output.stun?.({
          name: source
        });
      }
    };
  },
  interrupt: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      interrupt: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].interruptTarget */ .Z.interruptTarget
    };
    return {
      [defaultAlertText(sev)]: (_data, matches, output) => {
        const source = getSource(matches);
        return output.interrupt?.({
          name: source
        });
      }
    };
  },
  interruptIfPossible: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      interrupt: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].interruptTarget */ .Z.interruptTarget
    };
    return {
      [defaultAlertText(sev)]: (data, matches, output) => {
        const source = getSource(matches);
        if (data.CanSilence()) return output.interrupt?.({
          name: source
        });
      }
    };
  },
  preyOn: (targetSev, otherSev) => {
    const outputStrings = {
      preyOnYou: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].preyOnYou */ .Z.preyOnYou,
      preyOnTarget: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].preyOnPlayer */ .Z.preyOnPlayer
    };
    const targetFunc = (data, matches, output) => {
      const target = getTarget(matches);
      if (data.me === target) return output.preyOnYou?.();
    };
    const otherFunc = (data, matches, output) => {
      const target = getTarget(matches);
      const player = target === undefined ? output.unknown?.() : data.party.member(target);
      if (target !== data.me) return output.preyOnTarget?.({
        player: player
      });
    };
    const combined = combineFuncs(defaultAlertText(targetSev), targetFunc, defaultInfoText(otherSev), otherFunc);
    return (_data, _matches, output) => {
      // cactbot-builtin-response
      output.responseOutputStrings = outputStrings;
      return combined;
    };
  },
  awayFrom: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      awayFromGroup: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].awayFromGroup */ .Z.awayFromGroup,
      awayFromTarget: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].awayFromPlayer */ .Z.awayFromPlayer,
      unknown: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].unknown */ .Z.unknown
    };
    return {
      [defaultAlertText(sev)]: (data, matches, output) => {
        const target = getTarget(matches);
        if (data.me === target) return output.awayFromGroup?.();
        const player = target === undefined ? output.unknown?.() : data.party.member(target);
        return output.awayFromTarget?.({
          player: player
        });
      }
    };
  },
  meteorOnYou: sev => staticResponse(defaultAlarmText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].meteorOnYou */ .Z.meteorOnYou),
  stopMoving: sev => staticResponse(defaultAlarmText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stopMoving */ .Z.stopMoving),
  stopEverything: sev => staticResponse(defaultAlarmText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].stopEverything */ .Z.stopEverything),
  // move away to dodge aoes
  moveAway: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].moveAway */ .Z.moveAway),
  // move around (e.g. jumping) to avoid being frozen
  moveAround: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].moveAround */ .Z.moveAround),
  breakChains: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].breakChains */ .Z.breakChains),
  moveChainsTogether: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].moveChainsTogether */ .Z.moveChainsTogether),
  earthshaker: sev => (_data, _matches, output) => {
    // cactbot-builtin-response
    output.responseOutputStrings = {
      earthshaker: _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].earthshakerOnYou */ .Z.earthshakerOnYou
    };
    return {
      [defaultAlertText(sev)]: (data, matches, output) => {
        const target = getTarget(matches);
        if (target !== data.me) return;
        return output.earthshaker?.();
      }
    };
  },
  wakeUp: sev => staticResponse(defaultAlarmText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].wakeUp */ .Z.wakeUp),
  getTowers: sev => staticResponse(defaultInfoText(sev), _outputs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getTowers */ .Z.getTowers)
};

// Don't give `Responses` a type in its declaration so that it can be treated as more strict
// than `ResponsesMap`, but do assert that its type is correct.  This allows callers to know
// which properties are defined in Responses without having to conditionally check for undefined.
const responseMapTypeAssertion = Responses;
// Suppress unused variable warning.
console.assert(responseMapTypeAssertion);

/***/ }),

/***/ 456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(619);
/* harmony import */ var _not_reached__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var _overlay_plugin_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(959);
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(446);
/* harmony import */ var _content_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(873);
/* harmony import */ var _netregexes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(622);
/* harmony import */ var _regexes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(402);
/* harmony import */ var _responses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(469);
/* harmony import */ var _outputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(509);
/* harmony import */ var _zone_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(588);
/* harmony import */ var _zone_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(902);
// TODO: Fix import/order
/* eslint-disable import/order */





// TODO:
// The convention of "import X as _X; const X = _X;" is currently
// being used as a method to workaround for downstream code
// that is running via eval(). Because importing statements do not
// create a variable of the same name, the eval()'d code does not know
// about the import, and thus throws ReferenceErrors.
// Used by downstream eval

const Conditions = _conditions__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;

const ContentType = _content_type__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;

const NetRegexes = _netregexes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP;

const Regexes = _regexes__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;

const Responses = _responses__WEBPACK_IMPORTED_MODULE_7__/* .Responses */ .n3;

const Outputs = _outputs__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z;

const Util = _util__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP;
const Directions = _util__WEBPACK_IMPORTED_MODULE_9__/* .Directions */ .Ns;

const ZoneId = _zone_id__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z;

const ZoneInfo = _zone_info__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z;

// Convince TypeScript and eslint that these are used.  TypeScript doesn't have a great way
// to disable individual rules, so this is safer than disabling all rules.
console.assert(Conditions);
console.assert(ContentType);
console.assert(NetRegexes);
console.assert(Regexes);
console.assert(Responses);
console.assert(Outputs);
console.assert(Util);
console.assert(Directions);
console.assert(ZoneId);
console.assert(ZoneInfo);

// TODO: move all of these to config.js?

// Map of config ids to current value

// Map of ConfigEntries to an array containing the leftDiv and inputDiv elements

class UserConfig {
  optionTemplates = {};
  userFileCallbacks = {};
  savedConfig = {};
  getDefaultBaseOptions() {
    return {
      ParserLanguage: 'en',
      ShortLocale: 'en',
      DisplayLanguage: 'en',
      TextAlertsEnabled: true,
      SoundAlertsEnabled: true,
      SpokenAlertsEnabled: false,
      GroupSpokenAlertsEnabled: false,
      SystemInfo: {
        cactbotVersion: '0.0.0.0',
        overlayPluginVersion: '0.0.0.0',
        ffxivPluginVersion: '0.0.0.0',
        actVersion: '0.0.0.0',
        gameRegion: 'International'
      },
      Debug: false
    };
  }
  evalUserFile(content, options) {
    const Options = options;
    console.assert(Options); // Used by eval.

    // This is the one eval cactbot should ever need, which is for handling user files.
    // Because user files can be located anywhere on disk and there's backwards compat
    // issues, it's unlikely that these will be able to be anything but eval forever.
    //
    /* eslint-disable no-eval */
    eval(content);
    /* eslint-enable no-eval */
  }

  registerOptions(overlayName, optionTemplate, userFileCallback) {
    this.optionTemplates[overlayName] = optionTemplate;
    if (userFileCallback) this.userFileCallbacks[overlayName] = userFileCallback;
  }
  sortUserFiles(keys) {
    // Helper data structure for subdirectories.
    const splitKeyMap = {};
    for (const key of keys) splitKeyMap[key] = key.toUpperCase().split(/[/\\]/);

    // Sort paths as a depth-first case-insensitive alphabetical subdirectory walk, followed by
    // all files sorted case-insensitive alphabetically once a subdir has been processed, e.g.
    //  * a/some.js
    //  * b/subdir1/z/z/z/nested_file.js
    //  * b/subdir1/file.js
    //  * b/subdir2/first.js
    //  * b/subdir2/second.js
    //  * b/some_file.js
    //  * root_file1.js
    //  * root_file2.js
    return keys.sort((keyA, keyB) => {
      const listA = splitKeyMap[keyA];
      const listB = splitKeyMap[keyB];
      if (listA === undefined || listB === undefined) throw new _not_reached__WEBPACK_IMPORTED_MODULE_1__/* .UnreachableCode */ .$();
      const maxLen = Math.max(listA.length, listB.length);
      for (let idx = 0; idx < maxLen; ++idx) {
        const entryA = listA[idx];
        const entryB = listB[idx];
        // In practice, there's always at least one entry.
        if (entryA === undefined || entryB === undefined) throw new _not_reached__WEBPACK_IMPORTED_MODULE_1__/* .UnreachableCode */ .$();

        // If both subdirectories or both files, then compare names.
        const isLastA = listA.length - 1 === idx;
        const isLastB = listB.length - 1 === idx;
        if (isLastA && isLastB) {
          // If both last, then this is a filename comparison.

          // First, compare filename without extension.
          const fileA = entryA.replace(/\.[^\.]*$/, '');
          const fileB = entryB.replace(/\.[^\.]*$/, '');
          const filenameOnlyDiff = fileA.localeCompare(fileB);
          if (filenameOnlyDiff) return filenameOnlyDiff;

          // Second, compare including the extension.
          // Always return something here, see note below.
          return entryA.localeCompare(entryB);
        } else if (!isLastA && !isLastB) {
          // If both not last, this is a subdirectory comparison.
          const diff = entryA.localeCompare(entryB);
          if (diff) return diff;
        }

        // At this point, if idx is the final for each, we would have returned above.
        // So, check if either a or b is at the final entry in splitKeyMap.
        // If so, then there's a mismatch in number of directories, and we know one
        // the one with a filename should be sorted last.

        if (listA.length - 1 <= idx) {
          // a has fewer subdirectories, so should be sorted last.
          return 1;
        }
        if (listB.length - 1 <= idx) {
          // a has more subdirectories, so should be sorted first.
          return -1;
        }
      }
      return 0;
    });
  }

  // Given a set of paths, an overlayName, and an extension, return all paths with
  // that extension that have `overlayName` either as their entire filename (no subdir)
  // or are inside a root-level subdirectory named `overlayName`/  The extension should
  // include the period separator, e.g. ".js".  All comparisons are case insensitive.
  filterUserFiles(paths, origOverlayName, origExtension) {
    const extension = origExtension.toLowerCase();
    const overlayName = origOverlayName.toLowerCase();
    return paths.filter(origPath => {
      const path = origPath.toLowerCase();
      if (!path.endsWith(extension)) return false;
      if (path === `${overlayName}${extension}`) return true;
      if (path.startsWith(`${overlayName}/`) || path.startsWith(`${overlayName}\\`)) return true;
      return false;
    });
  }
  getUserConfigLocation(overlayName, options, callback) {
    let currentlyReloading = false;
    const reloadOnce = () => {
      if (currentlyReloading) return;
      currentlyReloading = true;
      window.location.reload();
    };
    (0,_overlay_plugin_api__WEBPACK_IMPORTED_MODULE_2__/* .addOverlayListener */ .PS)('onUserFileChanged', () => {
      reloadOnce();
    });
    (0,_overlay_plugin_api__WEBPACK_IMPORTED_MODULE_2__/* .addOverlayListener */ .PS)('onForceReload', () => {
      reloadOnce();
    });
    this.loadUserFiles(overlayName, options, callback);
  }
  loadUserFiles(overlayName, options, callback, loadCss = true) {
    const readOptions = (0,_overlay_plugin_api__WEBPACK_IMPORTED_MODULE_2__/* .callOverlayHandler */ .ae)({
      call: 'cactbotLoadData',
      overlay: 'options'
    });
    const loadUser = async e => {
      // The basePath isn't using for anything other than cosmetic printing of full paths,
      // so replace any slashes here for uniformity.  In case anybody is using cactbot on
      // Linux (?!?), support any style of slashes elsewhere.
      const basePath = `${e.detail.userLocation.replace(/[/\\]*$/, '')}\\`;
      const localFiles = e.detail.localUserFiles;
      options.SystemInfo = {
        cactbotVersion: e.detail.cactbotVersion,
        overlayPluginVersion: e.detail.overlayPluginVersion,
        ffxivPluginVersion: e.detail.ffxivPluginVersion,
        actVersion: e.detail.actVersion,
        gameRegion: e.detail.gameRegion
      };

      // The plugin auto-detects the language, so set this first.
      // If options files want to override it, they can for testing.

      // Backward compatibility (language is now separated to three types.)
      /* eslint-disable deprecation/deprecation */
      if (e.detail.language) {
        options.ParserLanguage = e.detail.language;
        options.ShortLocale = e.detail.language;
        options.DisplayLanguage = e.detail.language;
      }
      /* eslint-enable deprecation/deprecation */

      // Parser Language
      if (e.detail.parserLanguage) {
        options.ParserLanguage = e.detail.parserLanguage;
        // Backward compatibility, everything "Language" should be changed to "ParserLanguage"
        options.Language = e.detail.parserLanguage;
      }
      // System Language
      if (e.detail.systemLocale) {
        options.SystemLocale = e.detail.systemLocale;
        let shortLocale = e.detail.systemLocale.slice(0, 2);
        if (shortLocale === 'zh') shortLocale = 'cn';
        if ((0,_languages__WEBPACK_IMPORTED_MODULE_0__/* .isLang */ .jd)(shortLocale)) options.ShortLocale = shortLocale;else options.ShortLocale = options.ParserLanguage;
      }
      // User's setting Language
      const displayLang = e.detail.displayLanguage;
      if ((0,_languages__WEBPACK_IMPORTED_MODULE_0__/* .isLang */ .jd)(displayLang)) options.DisplayLanguage = displayLang;else options.DisplayLanguage = options.ParserLanguage || 'en';

      // TODO: left for now as backwards compatibility with user css.  Remove this later??
      document.documentElement.classList.add(`lang-${options.DisplayLanguage}`);
      document.documentElement.lang = (0,_languages__WEBPACK_IMPORTED_MODULE_0__/* .langToLocale */ .Go)(options.DisplayLanguage);
      this.addUnlockText(options.DisplayLanguage);

      // Handle processOptions after default language selection above,
      // but before css below which may load skin files.
      // processOptions needs to be called whether or not there are
      // any userOptions saved, as it sets up the defaults.
      this.savedConfig = (await readOptions)?.data ?? {};
      const template = this.optionTemplates[overlayName];
      if (template !== undefined) {
        const savedConfig = this.savedConfig[overlayName] ?? {};
        this.processOptions(options, options, savedConfig, template.options);

        // For things like raidboss that build extra UI, also give them a chance
        // to handle anything that has been set on that UI.
        if (template.processExtraOptions) template.processExtraOptions(options, savedConfig);
      }

      // If the overlay has a "Debug" setting, set to true via the config tool,
      // then also print out user files that have been loaded.
      const debug = options.Debug !== undefined && options.Debug !== false;
      const printUserFile = debug ? x => console.log(x) : () => {/* noop */};

      // With user files being arbitrary javascript, and having multiple files
      // in user folders, it's possible for later files to accidentally remove
      // things that previous files have added.  Warn about this, since most
      // users are not programmers.
      const warnOnVariableResetMap = {
        raidboss: ['Triggers']
      };
      warnOnVariableResetMap[overlayName] = warnOnVariableResetMap[overlayName] || [];

      // The values of each `warnOnVariableResetMap` field are initially set
      // after the first file, so that if there is only one file, there are
      // not any warnings.

      // The fields that a user file sets in Options can be anything (pun not intended)
      // and so we use `any` here.  The only operation done on this field is a !==
      // for change detection to see if the the user file has modified it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const variableTracker = {};
      if (localFiles) {
        // localFiles may be null if there is no valid user directory.
        const sortedFiles = this.sortUserFiles(Object.keys(localFiles));
        const jsFiles = this.filterUserFiles(sortedFiles, overlayName, '.js');
        const cssFiles = loadCss ? this.filterUserFiles(sortedFiles, overlayName, '.css') : [];
        for (const jsFile of jsFiles) {
          try {
            printUserFile(`local user file: ${basePath}${jsFile}`);
            this.evalUserFile(localFiles[jsFile] ?? '', options);
            for (const field of warnOnVariableResetMap[overlayName] ?? []) {
              const value = variableTracker[field];
              if (value !== null && value !== undefined && value !== options[field]) {
                // Ideally users should do something like `Options.Triggers.push([etc]);`
                // instead of `Options.Triggers = [etc];`
                console.log(`*** WARNING: ${basePath}${jsFile} overwrites Options.${field} from previous files.`);
              }
              variableTracker[field] = options[field];
            }
            this.userFileCallbacks[overlayName]?.(jsFile, localFiles, options, basePath);
          } catch (e) {
            // Be very visible for users.
            console.log('*** ERROR IN USER FILE ***');
            console.log(e);
          }
        }

        // This is a bit awkward to handle skin settings here, but
        // doing it after user config files and before user css files
        // allows user css to override skin-specific css as well.
        if (options.Skin !== undefined) this.handleSkin(options.Skin);
        for (const cssFile of cssFiles) {
          printUserFile(`local user file: ${basePath}${cssFile}`);
          const userCssText = document.createElement('style');
          const contents = localFiles[cssFile];
          if (contents !== undefined) userCssText.innerText = contents;
          const head = document.getElementsByTagName('head')[0];
          if (head) head.appendChild(userCssText);
        }
      }

      // Post this callback so that the js and css can be executed first.
      callback();
      void (0,_overlay_plugin_api__WEBPACK_IMPORTED_MODULE_2__/* .callOverlayHandler */ .ae)({
        call: 'cactbotRequestState'
      });
    };
    void (0,_overlay_plugin_api__WEBPACK_IMPORTED_MODULE_2__/* .callOverlayHandler */ .ae)({
      call: 'cactbotLoadUser',
      source: location.href,
      overlayName: overlayName
    }).then(e => {
      // Wait for DOMContentLoaded if needed.
      if (document.readyState !== 'loading') {
        void loadUser(e);
        return;
      }
      document.addEventListener('DOMContentLoaded', () => {
        void loadUser(e);
      });
    });
  }
  handleSkin(skinName) {
    if (!skinName || skinName === 'default') return;
    const skinCSSRelativeHref = `../raidboss/skins/${skinName}/${skinName}.css`;
    this.appendCSSLink(skinCSSRelativeHref);
  }
  appendJSLink(src) {
    const userJS = document.createElement('script');
    userJS.setAttribute('type', 'text/javascript');
    userJS.setAttribute('src', src);
    userJS.setAttribute('async', 'false');
    const head = document.getElementsByTagName('head')[0];
    if (head) head.appendChild(userJS);
  }
  appendCSSLink(href) {
    const userCSS = document.createElement('link');
    userCSS.setAttribute('rel', 'stylesheet');
    userCSS.setAttribute('type', 'text/css');
    userCSS.setAttribute('href', href);
    const head = document.getElementsByTagName('head')[0];
    if (head) head.appendChild(userCSS);
  }
  processOptions(options, output, savedConfig, templateOptions) {
    // Take options from the template, find them in savedConfig,
    // and apply them to options. This also handles setting
    // defaults for anything in the template, even if it does not
    // exist in savedConfig.

    // Not all overlays have option templates.
    if (templateOptions === undefined) return;
    for (const opt of templateOptions) {
      // Grab the saved value or the default to set in options.

      let value;
      if (typeof opt.default === 'function') value = opt.default(options);else value = opt.default;
      let isDefault = true;
      if (typeof savedConfig === 'object' && !Array.isArray(savedConfig)) {
        if (opt.id in savedConfig) {
          const newValue = savedConfig[opt.id];
          // Empty strings are always treated as default values.
          // This means that the user has entered something and then cleared it.
          if (newValue !== undefined && newValue !== '') {
            value = newValue;
            isDefault = false;
          }
        }
      }

      // Options can provide custom logic to turn a value into options settings.
      // If this doesn't exist, just set the value directly.
      // Option template ids are identical to field names on Options.
      if (opt.setterFunc) {
        const setValue = opt.setterFunc(value, options, isDefault);
        if (setValue !== undefined) output[opt.id] = setValue;
      } else if (opt.type === 'integer') {
        if (typeof value === 'number') output[opt.id] = Math.floor(value);else if (typeof value === 'string') output[opt.id] = parseInt(value);
      } else if (opt.type === 'float') {
        if (typeof value === 'number') output[opt.id] = value;else if (typeof value === 'string') output[opt.id] = parseFloat(value);
      } else {
        output[opt.id] = value;
      }
    }
  }
  addUnlockText(lang) {
    const unlockText = {
      en: '🔓 Unlocked (lock overlay before using)',
      de: '🔓 Entsperrt (Sperre das Overlay vor der Nutzung)',
      fr: '🔓 Débloqué (Bloquez l\'overlay avant utilisation)',
      ja: '🔓 ロック解除 (オーバーレイを使用する前にロックしてください)',
      cn: '🔓 已解除锁定 (你需要将此悬浮窗锁定后方可使用)',
      ko: '🔓 위치 잠금 해제됨 (사용하기 전에 위치 잠금을 설정하세요)',
      tc: '🔓 已解除鎖定（使用前請先鎖定此浮動視窗）'
    };
    const id = 'cactbot-unlocked-text';
    let textElem = document.getElementById(id);
    if (!textElem) {
      textElem = document.createElement('div');
      textElem.id = id;
      textElem.classList.add('text');
      // Set element display to none in case the page has not included defaults.css.
      textElem.style.display = 'none';
      document.body.append(textElem);
    }
    textElem.innerHTML = unlockText[lang] || unlockText['en'];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserConfig());
if (typeof document !== 'undefined') {
  // This event comes early and is not cached, so set up event listener immediately.
  document.addEventListener('onOverlayStateUpdate', e => {
    const docClassList = document.documentElement.classList;
    if (e.detail.isLocked) docClassList.remove('resize-handle', 'unlocked');else docClassList.add('resize-handle', 'unlocked');
  });
}

/***/ }),

/***/ 509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ns": () => (/* binding */ Directions),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports allJobs, tankJobs, healerJobs, meleeDpsJobs, rangedDpsJobs, casterDpsJobs, dpsJobs, craftingJobs, gatheringJobs, limitedJobs */
/* harmony import */ var _netregexes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(622);
/* harmony import */ var _outputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var _overlay_plugin_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(959);




// TODO: it'd be nice to not repeat job names, but at least Record enforces that all are set.
const nameToJobEnum = {
  NONE: 0,
  GLA: 1,
  PGL: 2,
  MRD: 3,
  LNC: 4,
  ARC: 5,
  CNJ: 6,
  THM: 7,
  CRP: 8,
  BSM: 9,
  ARM: 10,
  GSM: 11,
  LTW: 12,
  WVR: 13,
  ALC: 14,
  CUL: 15,
  MIN: 16,
  BTN: 17,
  FSH: 18,
  PLD: 19,
  MNK: 20,
  WAR: 21,
  DRG: 22,
  BRD: 23,
  WHM: 24,
  BLM: 25,
  ACN: 26,
  SMN: 27,
  SCH: 28,
  ROG: 29,
  NIN: 30,
  MCH: 31,
  DRK: 32,
  AST: 33,
  SAM: 34,
  RDM: 35,
  BLU: 36,
  GNB: 37,
  DNC: 38,
  RPR: 39,
  SGE: 40,
  VPR: 41,
  PCT: 42
};
const allJobs = Object.keys(nameToJobEnum);
const allRoles = ['tank', 'healer', 'dps', 'crafter', 'gatherer', 'none'];
const tankJobs = ['GLA', 'PLD', 'MRD', 'WAR', 'DRK', 'GNB'];
const healerJobs = ['CNJ', 'WHM', 'SCH', 'AST', 'SGE'];
const meleeDpsJobs = ['PGL', 'MNK', 'LNC', 'DRG', 'ROG', 'NIN', 'SAM', 'RPR', 'VPR'];
const rangedDpsJobs = ['ARC', 'BRD', 'DNC', 'MCH'];
const casterDpsJobs = ['BLU', 'RDM', 'BLM', 'SMN', 'ACN', 'THM', 'PCT'];
const dpsJobs = [...meleeDpsJobs, ...rangedDpsJobs, ...casterDpsJobs];
const craftingJobs = ['CRP', 'BSM', 'ARM', 'GSM', 'LTW', 'WVR', 'ALC', 'CUL'];
const gatheringJobs = ['MIN', 'BTN', 'FSH'];
const limitedJobs = ['BLU'];
const stunJobs = ['BLU', ...tankJobs, ...meleeDpsJobs];
const silenceJobs = ['BLU', ...tankJobs, ...rangedDpsJobs];
const sleepJobs = [...casterDpsJobs, ...healerJobs];
const feintJobs = [...meleeDpsJobs];
const addleJobs = [...casterDpsJobs];
const cleanseJobs = ['BLU', 'BRD', ...healerJobs];
const jobToRoleMap = (() => {
  const addToMap = (map, jobs, role) => {
    jobs.forEach(job => map.set(job, role));
  };
  const map = new Map([['NONE', 'none']]);
  addToMap(map, tankJobs, 'tank');
  addToMap(map, healerJobs, 'healer');
  addToMap(map, dpsJobs, 'dps');
  addToMap(map, craftingJobs, 'crafter');
  addToMap(map, gatheringJobs, 'gatherer');
  return map;
})();
const watchCombatantMap = [];
const shouldCancelWatch = (params, entry) => {
  if (entry.cancel) return true;
  if (params.maxDuration !== undefined && Date.now() - entry.start > params.maxDuration) return true;
  return false;
};
const defaultWatchCombatant = (params, func) => {
  return new Promise((res, rej) => {
    const delay = params.delay ?? 1000;
    const call = {
      call: 'getCombatants'
    };
    if (params.ids) call.ids = params.ids;
    if (params.names) call.names = params.names;
    if (params.props) call.props = params.props;
    const entry = {
      cancel: false,
      start: Date.now()
    };
    watchCombatantMap.push(entry);
    const checkFunc = () => {
      if (shouldCancelWatch(params, entry)) {
        rej(new Error('cancelled'));
        return;
      }
      void (0,_overlay_plugin_api__WEBPACK_IMPORTED_MODULE_2__/* .callOverlayHandler */ .ae)(call).then(response => {
        if (entry.cancel) {
          rej(new Error('was cancelled'));
          return;
        }
        if (func(response)) res();else window.setTimeout(checkFunc, delay);
      });
    };
    window.setTimeout(checkFunc, delay);
  });
};
let watchCombatantOverride;
let clearCombatantsOverride;
const defaultClearCombatants = () => {
  while (watchCombatantMap.length > 0) {
    const watch = watchCombatantMap.pop();
    if (watch) watch.cancel = true;
  }
};
const watchCombatant = (params, func) => {
  if (watchCombatantOverride) return watchCombatantOverride(params, func);
  return defaultWatchCombatant(params, func);
};
const output8Dir = ['dirN', 'dirNE', 'dirE', 'dirSE', 'dirS', 'dirSW', 'dirW', 'dirNW'];
const output16Dir = ['dirN', 'dirNNE', 'dirNE', 'dirENE', 'dirE', 'dirESE', 'dirSE', 'dirSSE', 'dirS', 'dirSSW', 'dirSW', 'dirWSW', 'dirW', 'dirWNW', 'dirNW', 'dirNNW'];
const outputCardinalDir = ['dirN', 'dirE', 'dirS', 'dirW'];
const outputIntercardDir = ['dirNE', 'dirSE', 'dirSW', 'dirNW'];
const compareDirectionOutput = (a, b) => {
  const getIndex = n => {
    const index = output16Dir.indexOf(n);
    // Values outside of output16Dir (i.e. 'unknown') sort last
    if (index < 0) return output16Dir.length;
    return index;
  };
  return getIndex(a) - getIndex(b);
};
const outputStrings16Dir = {
  dirN: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirN */ .Z.dirN,
  dirNNE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirNNE */ .Z.dirNNE,
  dirNE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirNE */ .Z.dirNE,
  dirENE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirENE */ .Z.dirENE,
  dirE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirE */ .Z.dirE,
  dirESE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirESE */ .Z.dirESE,
  dirSE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirSE */ .Z.dirSE,
  dirSSE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirSSE */ .Z.dirSSE,
  dirS: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirS */ .Z.dirS,
  dirSSW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirSSW */ .Z.dirSSW,
  dirSW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirSW */ .Z.dirSW,
  dirWSW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirWSW */ .Z.dirWSW,
  dirW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirW */ .Z.dirW,
  dirWNW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirWNW */ .Z.dirWNW,
  dirNW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirNW */ .Z.dirNW,
  dirNNW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirNNW */ .Z.dirNNW,
  unknown: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].unknown */ .Z.unknown
};
const outputStrings8Dir = {
  dirN: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirN */ .Z.dirN,
  dirNE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirNE */ .Z.dirNE,
  dirE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirE */ .Z.dirE,
  dirSE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirSE */ .Z.dirSE,
  dirS: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirS */ .Z.dirS,
  dirSW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirSW */ .Z.dirSW,
  dirW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirW */ .Z.dirW,
  dirNW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirNW */ .Z.dirNW,
  unknown: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].unknown */ .Z.unknown
};
const outputStringsCardinalDir = {
  dirN: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirN */ .Z.dirN,
  dirE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirE */ .Z.dirE,
  dirS: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirS */ .Z.dirS,
  dirW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirW */ .Z.dirW,
  unknown: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].unknown */ .Z.unknown
};
const outputStringsIntercardDir = {
  dirNE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirNE */ .Z.dirNE,
  dirSE: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirSE */ .Z.dirSE,
  dirSW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirSW */ .Z.dirSW,
  dirNW: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dirNW */ .Z.dirNW,
  unknown: _outputs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].unknown */ .Z.unknown
};

// TODO: Accept 'north' as a function input and adjust output accordingly.
// E.g. Math.round((north + 4) - 4 * Math.atan2(x, y) / Math.PI) % 8;
// Will need to adjust the output arrays as well though.

const xyTo16DirNum = (x, y, centerX, centerY) => {
  // N = 0, NNE = 1, ..., NNW = 15
  x = x - centerX;
  y = y - centerY;
  return Math.round(8 - 8 * Math.atan2(x, y) / Math.PI) % 16;
};
const xyTo8DirNum = (x, y, centerX, centerY) => {
  // N = 0, NE = 1, ..., NW = 7
  x = x - centerX;
  y = y - centerY;
  return Math.round(4 - 4 * Math.atan2(x, y) / Math.PI) % 8;
};
const xyTo4DirNum = (x, y, centerX, centerY) => {
  // N = 0, E = 1, S = 2, W = 3
  x = x - centerX;
  y = y - centerY;
  return Math.round(2 - 2 * Math.atan2(x, y) / Math.PI) % 4;
};
const xyTo4DirIntercardNum = (x, y, centerX, centerY) => {
  // NE = 0, SE = 1, SW = 2, NW = 3
  x = x - centerX;
  y = y - centerY;
  return Math.round(2 - 2 * (Math.PI / 4 + Math.atan2(x, y)) / Math.PI) % 4;
};
const hdgTo16DirNum = heading => {
  // N = 0, NNE = 1, ..., NNW = 15
  return (Math.round(8 - 8 * heading / Math.PI) % 16 + 16) % 16;
};
const hdgTo8DirNum = heading => {
  // N = 0, NE = 1, ..., NW = 7
  return (Math.round(4 - 4 * heading / Math.PI) % 8 + 8) % 8;
};
const hdgTo4DirNum = heading => {
  // N = 0, E = 1, S = 2, W = 3
  return (Math.round(2 - heading * 2 / Math.PI) % 4 + 4) % 4;
};
const outputFrom8DirNum = dirNum => {
  return output8Dir[dirNum] ?? 'unknown';
};
const outputFromCardinalNum = dirNum => {
  return outputCardinalDir[dirNum] ?? 'unknown';
};
const outputFromIntercardNum = dirNum => {
  return outputIntercardDir[dirNum] ?? 'unknown';
};
const Directions = {
  output8Dir: output8Dir,
  output16Dir: output16Dir,
  outputCardinalDir: outputCardinalDir,
  outputIntercardDir: outputIntercardDir,
  compareDirectionOutput: compareDirectionOutput,
  outputStrings16Dir: outputStrings16Dir,
  outputStrings8Dir: outputStrings8Dir,
  outputStringsCardinalDir: outputStringsCardinalDir,
  outputStringsIntercardDir: outputStringsIntercardDir,
  xyTo4DirIntercardNum: xyTo4DirIntercardNum,
  xyTo16DirNum: xyTo16DirNum,
  xyTo8DirNum: xyTo8DirNum,
  xyTo4DirNum: xyTo4DirNum,
  hdgTo16DirNum: hdgTo16DirNum,
  hdgTo8DirNum: hdgTo8DirNum,
  hdgTo4DirNum: hdgTo4DirNum,
  outputFrom8DirNum: outputFrom8DirNum,
  outputFromCardinalNum: outputFromCardinalNum,
  combatantStatePosTo8Dir: (combatant, centerX, centerY) => {
    return xyTo8DirNum(combatant.PosX, combatant.PosY, centerX, centerY);
  },
  combatantStatePosTo8DirOutput: (combatant, centerX, centerY) => {
    const dirNum = xyTo8DirNum(combatant.PosX, combatant.PosY, centerX, centerY);
    return outputFrom8DirNum(dirNum);
  },
  combatantStateHdgTo8Dir: combatant => {
    return hdgTo8DirNum(combatant.Heading);
  },
  combatantStateHdgTo8DirOutput: combatant => {
    const dirNum = hdgTo8DirNum(combatant.Heading);
    return outputFrom8DirNum(dirNum);
  },
  addedCombatantPosTo8Dir: (combatant, centerX, centerY) => {
    const x = parseFloat(combatant.x);
    const y = parseFloat(combatant.y);
    return xyTo8DirNum(x, y, centerX, centerY);
  },
  addedCombatantPosTo8DirOutput: (combatant, centerX, centerY) => {
    const x = parseFloat(combatant.x);
    const y = parseFloat(combatant.y);
    const dirNum = xyTo8DirNum(x, y, centerX, centerY);
    return outputFrom8DirNum(dirNum);
  },
  addedCombatantHdgTo8Dir: combatant => {
    const heading = parseFloat(combatant.heading);
    return hdgTo8DirNum(heading);
  },
  addedCombatantHdgTo8DirOutput: combatant => {
    const heading = parseFloat(combatant.heading);
    const dirNum = hdgTo8DirNum(heading);
    return outputFrom8DirNum(dirNum);
  },
  xyTo8DirOutput: (x, y, centerX, centerY) => {
    const dirNum = xyTo8DirNum(x, y, centerX, centerY);
    return outputFrom8DirNum(dirNum);
  },
  xyToCardinalDirOutput: (x, y, centerX, centerY) => {
    const dirNum = xyTo4DirNum(x, y, centerX, centerY);
    return outputFromCardinalNum(dirNum);
  },
  xyToIntercardDirOutput: (x, y, centerX, centerY) => {
    const dirNum = xyTo4DirIntercardNum(x, y, centerX, centerY);
    return outputFromIntercardNum(dirNum);
  }
};
const Util = {
  jobEnumToJob: id => {
    const job = allJobs.find(job => nameToJobEnum[job] === id);
    return job ?? 'NONE';
  },
  jobToJobEnum: job => nameToJobEnum[job],
  jobToRole: job => {
    const role = jobToRoleMap.get(job);
    return role ?? 'none';
  },
  getAllRoles: () => allRoles,
  isTankJob: job => tankJobs.includes(job),
  isHealerJob: job => healerJobs.includes(job),
  isMeleeDpsJob: job => meleeDpsJobs.includes(job),
  isRangedDpsJob: job => rangedDpsJobs.includes(job),
  isCasterDpsJob: job => casterDpsJobs.includes(job),
  isDpsJob: job => dpsJobs.includes(job),
  isCraftingJob: job => craftingJobs.includes(job),
  isGatheringJob: job => gatheringJobs.includes(job),
  isCombatJob: job => {
    return !craftingJobs.includes(job) && !gatheringJobs.includes(job);
  },
  isLimitedJob: job => limitedJobs.includes(job),
  canStun: job => stunJobs.includes(job),
  canSilence: job => silenceJobs.includes(job),
  canSleep: job => sleepJobs.includes(job),
  canCleanse: job => cleanseJobs.includes(job),
  canFeint: job => feintJobs.includes(job),
  canAddle: job => addleJobs.includes(job),
  watchCombatant: watchCombatant,
  clearWatchCombatants: () => {
    if (clearCombatantsOverride !== undefined) clearCombatantsOverride();else defaultClearCombatants();
  },
  setWatchCombatantOverride: (watchFunc, clearFunc) => {
    watchCombatantOverride = watchFunc;
    clearCombatantsOverride = clearFunc;
  },
  gameLogCodes: _netregexes__WEBPACK_IMPORTED_MODULE_0__/* .gameLogCodes */ .k3,
  actorControlType: _netregexes__WEBPACK_IMPORTED_MODULE_0__/* .actorControlType */ .Bx,
  shortName: (name, playerNicks) => {
    // TODO: make this unique among the party in case of first name collisions.
    if (typeof name !== 'string') {
      if (typeof name !== 'undefined') console.error('called ShortNamify with non-string');
      return '???';
    }
    const nick = playerNicks[name];
    if (nick !== undefined) return nick;
    const idx = name.indexOf(' ');
    return idx < 0 ? name : name.slice(0, idx);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Util);

/***/ }),

/***/ 588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Auto-generated from gen_zone_id_and_info.ts
// DO NOT EDIT THIS FILE DIRECTLY

const data = {
  'ABloodyReunion': 560,
  'AFatherFirst': 1210,
  'AFrostyReception': 1010,
  'AHunterTrue': 1216,
  'APathUnveiled': 1015,
  'ARelicRebornTheChimera': 368,
  'ARelicRebornTheHydra': 369,
  'ARequiemForHeroes': 830,
  'ASleepDisturbed': 914,
  'ASpectacleForTheAges': 533,
  'AacCruiserweightM1': 1256,
  'AacCruiserweightM1Savage': 1257,
  'AacCruiserweightM2': 1258,
  'AacCruiserweightM2Savage': 1259,
  'AacCruiserweightM3': 1260,
  'AacCruiserweightM3Savage': 1261,
  'AacCruiserweightM4': 1262,
  'AacCruiserweightM4Savage': 1263,
  'AacHeavyweightM1': 1320,
  'AacHeavyweightM1Savage': 1321,
  'AacHeavyweightM2': 1322,
  'AacHeavyweightM2Savage': 1323,
  'AacHeavyweightM3': 1324,
  'AacHeavyweightM3Savage': 1325,
  'AacHeavyweightM4': 1326,
  'AacHeavyweightM4Savage': 1327,
  'AacLightHeavyweightM1': 1225,
  'AacLightHeavyweightM1Savage': 1226,
  'AacLightHeavyweightM2': 1227,
  'AacLightHeavyweightM2Savage': 1228,
  'AacLightHeavyweightM3': 1229,
  'AacLightHeavyweightM3Savage': 1230,
  'AacLightHeavyweightM4': 1231,
  'AacLightHeavyweightM4Savage': 1232,
  'AbyssosTheEighthCircle': 1087,
  'AbyssosTheEighthCircleSavage': 1088,
  'AbyssosTheFifthCircle': 1081,
  'AbyssosTheFifthCircleSavage': 1082,
  'AbyssosTheSeventhCircle': 1085,
  'AbyssosTheSeventhCircleSavage': 1086,
  'AbyssosTheSixthCircle': 1083,
  'AbyssosTheSixthCircleSavage': 1084,
  'AccrueEnmityFromMultipleTargets': 540,
  'Aglaia': 1054,
  'AkadaemiaAnyder': 841,
  'AlaMhigo': 1146,
  'AlaMhigo63': 689,
  'AlexanderTheArmOfTheFather': 444,
  'AlexanderTheArmOfTheFatherSavage': 451,
  'AlexanderTheArmOfTheSon': 522,
  'AlexanderTheArmOfTheSonSavage': 531,
  'AlexanderTheBreathOfTheCreator': 581,
  'AlexanderTheBreathOfTheCreatorSavage': 585,
  'AlexanderTheBurdenOfTheFather': 445,
  'AlexanderTheBurdenOfTheFatherSavage': 452,
  'AlexanderTheBurdenOfTheSon': 523,
  'AlexanderTheBurdenOfTheSonSavage': 532,
  'AlexanderTheCuffOfTheFather': 443,
  'AlexanderTheCuffOfTheFatherSavage': 450,
  'AlexanderTheCuffOfTheSon': 521,
  'AlexanderTheCuffOfTheSonSavage': 530,
  'AlexanderTheEyesOfTheCreator': 580,
  'AlexanderTheEyesOfTheCreatorSavage': 584,
  'AlexanderTheFistOfTheFather': 442,
  'AlexanderTheFistOfTheFatherSavage': 449,
  'AlexanderTheFistOfTheSon': 520,
  'AlexanderTheFistOfTheSonSavage': 529,
  'AlexanderTheHeartOfTheCreator': 582,
  'AlexanderTheHeartOfTheCreatorSavage': 586,
  'AlexanderTheSoulOfTheCreator': 583,
  'AlexanderTheSoulOfTheCreatorSavage': 587,
  'Alexandria': 1199,
  'AllsWellThatEndsInTheWell': 220,
  'AloaloIsland': 1176,
  'AlphascapeV10': 798,
  'AlphascapeV10Savage': 802,
  'AlphascapeV20': 799,
  'AlphascapeV20Savage': 803,
  'AlphascapeV30': 800,
  'AlphascapeV30Savage': 804,
  'AlphascapeV40': 801,
  'AlphascapeV40Savage': 805,
  'AlzadaalsLegacy': 1050,
  'Amaurot': 838,
  'AmdaporKeep': 167,
  'AmdaporKeepHard': 189,
  'AmhAraeng': 815,
  'AnAntidoteForAnarchy': 1215,
  'AnUnforeseenBargain': 1120,
  'AnabaseiosTheEleventhCircle': 1151,
  'AnabaseiosTheEleventhCircleSavage': 1152,
  'AnabaseiosTheNinthCircle': 1147,
  'AnabaseiosTheNinthCircleSavage': 1148,
  'AnabaseiosTheTenthCircle': 1149,
  'AnabaseiosTheTenthCircleSavage': 1150,
  'AnabaseiosTheTwelfthCircle': 1153,
  'AnabaseiosTheTwelfthCircleSavage': 1154,
  'AnamnesisAnyder': 898,
  'AnnoyTheVoid': 222,
  'AnotherAloaloIsland': 1179,
  'AnotherAloaloIslandSavage': 1180,
  'AnotherMerchantsTale': 1317,
  'AnotherMountRokkon': 1155,
  'AnotherMountRokkonSavage': 1156,
  'AnotherSildihnSubterrane': 1075,
  'AnotherSildihnSubterraneSavage': 1076,
  'AsTheHeartBids': 894,
  'AsTheHeavensBurn': 1012,
  'AsphodelosTheFirstCircle': 1002,
  'AsphodelosTheFirstCircleSavage': 1003,
  'AsphodelosTheFourthCircle': 1008,
  'AsphodelosTheFourthCircleSavage': 1009,
  'AsphodelosTheSecondCircle': 1004,
  'AsphodelosTheSecondCircleSavage': 1005,
  'AsphodelosTheThirdCircle': 1006,
  'AsphodelosTheThirdCircleSavage': 1007,
  'AssistAlliesInDefeatingATarget': 544,
  'Astragalos': 729,
  'AvoidAreaOfEffectAttacks': 537,
  'AzysLla': 402,
  'BaelsarsWall': 1114,
  'BaelsarsWall62': 615,
  'BarThePassage': 1246,
  'BardamsMettle': 1143,
  'BardamsMettle63': 623,
  'BasicTrainingEnemyParties': 214,
  'BasicTrainingEnemyStrongholds': 215,
  'BattleInTheBigKeep': 396,
  'BattleOnTheBigBridge': 366,
  'BloodOnTheDeck': 708,
  'Blunderville': 1165,
  'BrayfloxsLongstop': 1041,
  'BrayfloxsLongstopHard': 362,
  'CapeWestwind': 1049,
  'CastrumAbania': 1145,
  'CastrumAbania63': 661,
  'CastrumFluminis': 778,
  'CastrumMarinum': 934,
  'CastrumMarinumExtreme': 935,
  'CastrumMeridianum': 1043,
  'CenoteJaJaGural': 1209,
  'CentralShroud': 148,
  'CentralThanalan': 141,
  'ChocoboRaceCostaDelSol': 389,
  'ChocoboRaceSagoliiRoad': 390,
  'ChocoboRaceTranquilPaths': 391,
  'ChocoboRaceTutorial': 417,
  'CinderDrift': 897,
  'CinderDriftExtreme': 912,
  'CoerthasCentralHighlands': 155,
  'CoerthasWesternHighlands': 397,
  'ComingClean': 860,
  'ContainmentBayP1T6': 576,
  'ContainmentBayP1T6Extreme': 577,
  'ContainmentBayP1T6Unreal': 1121,
  'ContainmentBayS1T7': 517,
  'ContainmentBayS1T7Extreme': 524,
  'ContainmentBayS1T7Unreal': 1090,
  'ContainmentBayZ1T9': 637,
  'ContainmentBayZ1T9Extreme': 638,
  'ContainmentBayZ1T9Unreal': 1157,
  'CopperbellMines': 1038,
  'CopperbellMinesHard': 349,
  'CrystallineConflictCustomMatchCloudNine': 1060,
  'CrystallineConflictCustomMatchTheBaysideBattleground': 1294,
  'CrystallineConflictCustomMatchTheClockworkCastletown': 1117,
  'CrystallineConflictCustomMatchThePalaistra': 1058,
  'CrystallineConflictCustomMatchTheRedSands': 1139,
  'CrystallineConflictCustomMatchTheVolcanicHeart': 1059,
  'CuriousGorgeMeetsHisMatch': 717,
  'CuttersCry': 1303,
  'CuttersCry72': 170,
  'DarkAsTheNightSky': 713,
  'DeathUntoDawn': 977,
  'DefeatAnOccupiedTarget': 545,
  'DeltascapeV10': 691,
  'DeltascapeV10Savage': 695,
  'DeltascapeV20': 692,
  'DeltascapeV20Savage': 696,
  'DeltascapeV30': 693,
  'DeltascapeV30Savage': 697,
  'DeltascapeV40': 694,
  'DeltascapeV40Savage': 698,
  'DelubrumReginae': 936,
  'DelubrumReginaeSavage': 937,
  'Devastation': 1052,
  'DohnMheg': 821,
  'DomaCastle': 1144,
  'DomaCastle63': 660,
  'DragonSound': 714,
  'DragonsongsRepriseUltimate': 968,
  'DreamsOfANewDay': 1214,
  'DunScaith': 627,
  'DzemaelDarkhold': 1330,
  'DzemaelDarkhold73': 171,
  'EastShroud': 152,
  'EasternLaNoscea': 137,
  'EasternThanalan': 145,
  'EdensGateDescent': 850,
  'EdensGateDescentSavage': 854,
  'EdensGateInundation': 851,
  'EdensGateInundationSavage': 855,
  'EdensGateResurrection': 849,
  'EdensGateResurrectionSavage': 853,
  'EdensGateSepulture': 852,
  'EdensGateSepultureSavage': 856,
  'EdensPromiseAnamorphosis': 944,
  'EdensPromiseAnamorphosisSavage': 948,
  'EdensPromiseEternity': 945,
  'EdensPromiseEternitySavage': 949,
  'EdensPromiseLitany': 943,
  'EdensPromiseLitanySavage': 947,
  'EdensPromiseUmbra': 942,
  'EdensPromiseUmbraSavage': 946,
  'EdensVerseFulmination': 902,
  'EdensVerseFulminationSavage': 906,
  'EdensVerseFuror': 903,
  'EdensVerseFurorSavage': 907,
  'EdensVerseIconoclasm': 904,
  'EdensVerseIconoclasmSavage': 908,
  'EdensVerseRefulgence': 905,
  'EdensVerseRefulgenceSavage': 909,
  'Elpis': 961,
  'Emanation': 719,
  'EmanationExtreme': 720,
  'EmissaryOfTheDawn': 769,
  'Endwalker': 1013,
  'EngageMultipleTargets': 541,
  'Eulmore': 820,
  'Euphrosyne': 1118,
  'EurekaOrthosFloors11_20': 1100,
  'EurekaOrthosFloors1_10': 1099,
  'EurekaOrthosFloors21_30': 1101,
  'EurekaOrthosFloors31_40': 1102,
  'EurekaOrthosFloors41_50': 1103,
  'EurekaOrthosFloors51_60': 1104,
  'EurekaOrthosFloors61_70': 1105,
  'EurekaOrthosFloors71_80': 1106,
  'EurekaOrthosFloors81_90': 1107,
  'EurekaOrthosFloors91_100': 1108,
  'EverMarchHeavensward': 1018,
  'Everkeep': 1200,
  'EverkeepExtreme': 1201,
  'ExecuteAComboInBattle': 539,
  'ExecuteAComboToIncreaseEnmity': 538,
  'ExecuteARangedAttackToIncreaseEnmity': 542,
  'FadedMemories': 932,
  'FangsOfTheViper': 1235,
  'FinalExercise': 552,
  'FitForAQueen': 955,
  'FlickingSticksAndTakingNames': 219,
  'ForlornGlory': 1051,
  'Foundation': 418,
  'FourPlayerMahjongQuickMatchKuitanDisabled': 831,
  'FuturesRewrittenUltimate': 1238,
  'Garlemald': 958,
  'GenerationalBonding': 1115,
  'Halatali': 1245,
  'Halatali70': 162,
  'HalataliHard': 360,
  'HaukkeManor': 1040,
  'HaukkeManorHard': 350,
  'HealAnAlly': 549,
  'HealMultipleAllies': 550,
  'HeavenOnHighFloors11_20': 771,
  'HeavenOnHighFloors1_10': 770,
  'HeavenOnHighFloors21_30': 772,
  'HeavenOnHighFloors31_40': 782,
  'HeavenOnHighFloors41_50': 773,
  'HeavenOnHighFloors51_60': 783,
  'HeavenOnHighFloors61_70': 774,
  'HeavenOnHighFloors71_80': 784,
  'HeavenOnHighFloors81_90': 775,
  'HeavenOnHighFloors91_100': 785,
  'HellOnRails': 1307,
  'HellOnRailsExtreme': 1308,
  'HellsKier': 810,
  'HellsKierExtreme': 811,
  'HellsKierUnreal': 1272,
  'HellsLid': 742,
  'HeritageFound': 1191,
  'HeroOnTheHalfShell': 216,
  'HeroesAndPretenders': 1218,
  'HiddenGorge': 791,
  'HolminsterSwitch': 837,
  'HullbreakerIsle': 361,
  'HullbreakerIsleHard': 557,
  'Idyllshire': 478,
  'Ihuykatumu': 1167,
  'IlMheg': 816,
  'InFromTheCold': 1011,
  'InThalsName': 705,
  'InteractWithTheBattlefield': 548,
  'InterdimensionalRift': 690,
  'ItsProbablyATrap': 665,
  'JeunoTheFirstWalk': 1248,
  'Kholusia': 814,
  'Kozamauka': 1188,
  'KtisisHyperboreia': 974,
  'Kugane': 628,
  'KuganeCastle': 662,
  'KuganeOhashi': 806,
  'Labyrinthos': 956,
  'LaidToRest': 1017,
  'Lakeland': 813,
  'LapisManalis': 1097,
  'LegendOfTheNotSoHiddenTemple': 859,
  'LifeEphemeralPathEternal': 1023,
  'LimsaLominsaLowerDecks': 129,
  'LimsaLominsaUpperDecks': 128,
  'LivingMemory': 1192,
  'LongLiveTheQueen': 298,
  'LovmMasterTournament': 506,
  'LovmPlayerBattleNonRp': 591,
  'LovmPlayerBattleRp': 589,
  'LovmTournament': 590,
  'LowerLaNoscea': 135,
  'MalikahsWell': 836,
  'MareLamentorum': 959,
  'MatchAll': null,
  'MatoyasRelict': 933,
  'MatsubaMayhem': 710,
  'MemoriaMiseraExtreme': 913,
  'MemoryOfEmbers': 1166,
  'MessengerOfTheWinds': 834,
  'MiddleLaNoscea': 134,
  'MindOverManor': 1233,
  'Mist': 136,
  'Mistwake': 1314,
  'MorDhona': 156,
  'MoreThanAFeeler': 221,
  'MountOrdeals': 1095,
  'MountOrdealsExtreme': 1096,
  'MountRokkon': 1137,
  'MtGulg': 822,
  'Naadam': 688,
  'Neverreap': 420,
  'NewGridania': 132,
  'NorthShroud': 154,
  'NorthernThanalan': 147,
  'NyelbertsLament': 876,
  'OldGridania': 133,
  'OldSharlayan': 962,
  'OneLifeForOneWorld': 592,
  'OnsalHakairDanshigNaadam': 888,
  'Origenics': 1208,
  'OurCompromise': 716,
  'OurUnsungHeroes': 722,
  'OuterLaNoscea': 180,
  'Paglthan': 938,
  'PharosSirius': 160,
  'PharosSiriusHard': 510,
  'PilgrimsTraverseStones11_20': 1282,
  'PilgrimsTraverseStones1_10': 1281,
  'PilgrimsTraverseStones21_30': 1283,
  'PilgrimsTraverseStones31_40': 1284,
  'PilgrimsTraverseStones41_50': 1285,
  'PilgrimsTraverseStones51_60': 1286,
  'PilgrimsTraverseStones61_70': 1287,
  'PilgrimsTraverseStones71_80': 1288,
  'PilgrimsTraverseStones81_90': 1289,
  'PilgrimsTraverseStones91_100': 1290,
  'PullingPoisonPosies': 191,
  'RadzAtHan': 963,
  'RaisingTheSword': 706,
  'ReactToAdvancedVisualIndicators': 1129,
  'ReactToAttackMarkers': 1127,
  'ReactToFloorMarkers': 1128,
  'Recollection': 1270,
  'RecollectionExtreme': 1271,
  'ReturnOfTheBull': 403,
  'RhalgrsReach': 635,
  'SagesFocus': 1022,
  'SaintMociannesArboretum': 511,
  'SaintMociannesArboretumHard': 788,
  'SanDoriaTheSecondWalk': 1304,
  'Sastasha': 1036,
  'SastashaHard': 387,
  'SealRockSeize': 431,
  'Shaaloani': 1190,
  'ShadowAndClaw': 223,
  'ShisuiOfTheVioletTides': 616,
  'SigmascapeV10': 748,
  'SigmascapeV10Savage': 752,
  'SigmascapeV20': 749,
  'SigmascapeV20Savage': 753,
  'SigmascapeV30': 750,
  'SigmascapeV30Savage': 754,
  'SigmascapeV40': 751,
  'SigmascapeV40Savage': 755,
  'Smileton': 976,
  'Snowcloak': 1062,
  'Snowcloak61': 371,
  'SohmAl': 1064,
  'SohmAl61': 441,
  'SohmAlHard': 617,
  'SohrKhai': 1112,
  'SohrKhai62': 555,
  'SolemnTrinity': 300,
  'SolutionNine': 1186,
  'SomewhereOnlySheKnows': 1234,
  'SouthShroud': 153,
  'SouthernThanalan': 146,
  'SpecialEventI': 353,
  'SpecialEventIi': 354,
  'StingingBack': 192,
  'StormsCrown': 1071,
  'StormsCrownExtreme': 1072,
  'SyrcusTower': 372,
  'TakingAStand': 1211,
  'TenderValley': 1203,
  'Thaleia': 1178,
  'Thavnair': 957,
  'TheAbyssalFracture': 1168,
  'TheAbyssalFractureExtreme': 1169,
  'TheAery': 1065,
  'TheAery61': 435,
  'TheAetherfont': 1126,
  'TheAetherochemicalResearchFacility': 1110,
  'TheAetherochemicalResearchFacility62': 438,
  'TheAgelessNecropolis': 1295,
  'TheAitiascope': 978,
  'TheAkhAfahAmphitheatreExtreme': 378,
  'TheAkhAfahAmphitheatreHard': 377,
  'TheAkhAfahAmphitheatreUnreal': 930,
  'TheAntitower': 1111,
  'TheAntitower62': 516,
  'TheAquapolis': 558,
  'TheAurumVale': 1331,
  'TheAurumVale73': 172,
  'TheAzimSteppe': 622,
  'TheBattleOnBekko': 711,
  'TheBaysideBattleground': 1293,
  'TheBindingCoilOfBahamutTurn1': 241,
  'TheBindingCoilOfBahamutTurn2': 242,
  'TheBindingCoilOfBahamutTurn3': 243,
  'TheBindingCoilOfBahamutTurn4': 244,
  'TheBindingCoilOfBahamutTurn5': 245,
  'TheBorderlandRuinsSecure': 1273,
  'TheBorderlandRuinsSecure71': 376,
  'TheBowlOfEmbers': 1045,
  'TheBowlOfEmbersExtreme': 295,
  'TheBowlOfEmbersHard': 292,
  'TheBozjaIncident': 911,
  'TheBozjanSouthernFront': 920,
  'TheBurn': 1173,
  'TheBurn64': 789,
  'TheCalamityRetold': 790,
  'TheCarteneauFlatsHeliodrome': 633,
  'TheChrysalis': 426,
  'TheChurningMists': 400,
  'TheClockworkCastletown': 1116,
  'TheCloudDeck': 950,
  'TheCloudDeckExtreme': 951,
  'TheCloudOfDarknessChaotic': 1241,
  'TheCopiedFactory': 882,
  'TheCrownOfTheImmaculate': 846,
  'TheCrownOfTheImmaculateExtreme': 848,
  'TheCrystarium': 819,
  'TheDancingPlague': 845,
  'TheDancingPlagueExtreme': 858,
  'TheDarkInside': 992,
  'TheDeadEnds': 973,
  'TheDiadem': 929,
  'TheDiademEasy': 512,
  'TheDiademHard': 515,
  'TheDiademHuntingGrounds': 625,
  'TheDiademHuntingGroundsEasy': 624,
  'TheDiademTrialsOfTheFury': 630,
  'TheDiademTrialsOfTheMatron': 656,
  'TheDomanEnclave': 759,
  'TheDragonsNeck': 142,
  'TheDravanianForelands': 398,
  'TheDravanianHinterlands': 399,
  'TheDrownedCityOfSkalla': 1172,
  'TheDrownedCityOfSkalla64': 731,
  'TheDungeonsOfLyheGhiah': 879,
  'TheDuskVigil': 434,
  'TheDyingGasp': 847,
  'TheEpicOfAlexanderUltimate': 887,
  'TheExcitatron6000': 1000,
  'TheFaceOfTrueEvil': 709,
  'TheFeatOfTheBrotherhood': 1212,
  'TheFellCourtOfTroia': 1070,
  'TheFieldsOfGloryShatter': 554,
  'TheFinalCoilOfBahamutTurn1': 193,
  'TheFinalCoilOfBahamutTurn2': 194,
  'TheFinalCoilOfBahamutTurn3': 195,
  'TheFinalCoilOfBahamutTurn4': 196,
  'TheFinalDay': 997,
  'TheFinalStepsOfFaith': 559,
  'TheFinalVerse': 1333,
  'TheFinalVerseQuantum': 1311,
  'TheForbiddenLandEurekaAnemos': 732,
  'TheForbiddenLandEurekaHydatos': 827,
  'TheForbiddenLandEurekaPagos': 763,
  'TheForbiddenLandEurekaPyros': 795,
  'TheFractalContinuum': 430,
  'TheFractalContinuumHard': 743,
  'TheFringes': 612,
  'TheGameIsAfoot': 1177,
  'TheGhimlytDark': 1174,
  'TheGhimlytDark64': 793,
  'TheGiftOfMercy': 1019,
  'TheGildedAraya': 1136,
  'TheGrandCosmos': 884,
  'TheGreatGubalLibrary': 1109,
  'TheGreatGubalLibrary62': 416,
  'TheGreatGubalLibraryHard': 578,
  'TheGreatHunt': 761,
  'TheGreatHuntExtreme': 762,
  'TheGreatShipVylbrand': 954,
  'TheHardenedHeart': 873,
  'TheHarvestBegins': 1020,
  'TheHauntedManor': 571,
  'TheHeartOfTheProblem': 718,
  'TheHeroesGauntlet': 916,
  'TheHiddenCanalsOfUznair': 725,
  'TheHowlingEye': 1047,
  'TheHowlingEyeExtreme': 297,
  'TheHowlingEyeHard': 294,
  'TheHuntersLegacy': 875,
  'TheInterphos': 1202,
  'TheJadeStoa': 746,
  'TheJadeStoaExtreme': 758,
  'TheJadeStoaUnreal': 1239,
  'TheKeeperOfTheLake': 1063,
  'TheKeeperOfTheLake61': 150,
  'TheKillingArt': 1021,
  'TheLabyrinthOfTheAncients': 174,
  'TheLimitlessBlueExtreme': 447,
  'TheLimitlessBlueHard': 436,
  'TheLochs': 621,
  'TheLostAndTheFound': 874,
  'TheLostCanalsOfUznair': 712,
  'TheLostCityOfAmdapor': 363,
  'TheLostCityOfAmdaporHard': 519,
  'TheLunarSubterrane': 1164,
  'TheMaskedCarnivale': 796,
  'TheMerchantsTale': 1315,
  'TheMerchantsTaleAdvanced': 1316,
  'TheMesoTerminal': 1292,
  'TheMightiestShield': 1217,
  'TheMinstrelsBalladEndsingersAria': 998,
  'TheMinstrelsBalladHadessElegy': 885,
  'TheMinstrelsBalladHydaelynsCall': 996,
  'TheMinstrelsBalladNecronsEmbrace': 1296,
  'TheMinstrelsBalladNidhoggsRage': 566,
  'TheMinstrelsBalladShinryusDomain': 730,
  'TheMinstrelsBalladSphenesBurden': 1243,
  'TheMinstrelsBalladThordansReign': 448,
  'TheMinstrelsBalladTsukuyomisPain': 779,
  'TheMinstrelsBalladUltimasBane': 348,
  'TheMinstrelsBalladZodiarksFall': 993,
  'TheMothercrystal': 995,
  'TheNavel': 1046,
  'TheNavelExtreme': 296,
  'TheNavelHard': 293,
  'TheNavelUnreal': 953,
  'TheOccultCrescentSouthHorn': 1252,
  'TheOmegaProtocolUltimate': 1122,
  'TheOrbonneMonastery': 826,
  'TheOrphansAndTheBrokenBlade': 715,
  'ThePalaceOfTheDeadFloors101_110': 598,
  'ThePalaceOfTheDeadFloors111_120': 599,
  'ThePalaceOfTheDeadFloors11_20': 562,
  'ThePalaceOfTheDeadFloors121_130': 600,
  'ThePalaceOfTheDeadFloors131_140': 601,
  'ThePalaceOfTheDeadFloors141_150': 602,
  'ThePalaceOfTheDeadFloors151_160': 603,
  'ThePalaceOfTheDeadFloors161_170': 604,
  'ThePalaceOfTheDeadFloors171_180': 605,
  'ThePalaceOfTheDeadFloors181_190': 606,
  'ThePalaceOfTheDeadFloors191_200': 607,
  'ThePalaceOfTheDeadFloors1_10': 561,
  'ThePalaceOfTheDeadFloors21_30': 563,
  'ThePalaceOfTheDeadFloors31_40': 564,
  'ThePalaceOfTheDeadFloors41_50': 565,
  'ThePalaceOfTheDeadFloors51_60': 593,
  'ThePalaceOfTheDeadFloors61_70': 594,
  'ThePalaceOfTheDeadFloors71_80': 595,
  'ThePalaceOfTheDeadFloors81_90': 596,
  'ThePalaceOfTheDeadFloors91_100': 597,
  'ThePeaks': 620,
  'ThePhantomsFeast': 994,
  'ThePillars': 419,
  'ThePoolOfTribute': 674,
  'ThePoolOfTributeExtreme': 677,
  'ThePortaDecumana': 1048,
  'ThePraetorium': 1044,
  'TheProtectorAndTheDestroyer': 1213,
  'ThePtisserie': 1298,
  'ThePuppetsBunker': 917,
  'TheQitanaRavel': 823,
  'TheRaktikaGreatwood': 817,
  'TheRedSands': 1138,
  'TheResonant': 684,
  'TheRidoranaLighthouse': 776,
  'TheRoyalCityOfRabanastre': 734,
  'TheRoyalMenagerie': 679,
  'TheRubySea': 613,
  'TheSeaOfClouds': 401,
  'TheSeatOfSacrifice': 922,
  'TheSeatOfSacrificeExtreme': 923,
  'TheSecondCoilOfBahamutSavageTurn1': 380,
  'TheSecondCoilOfBahamutSavageTurn2': 381,
  'TheSecondCoilOfBahamutSavageTurn3': 382,
  'TheSecondCoilOfBahamutSavageTurn4': 383,
  'TheSecondCoilOfBahamutTurn1': 355,
  'TheSecondCoilOfBahamutTurn2': 356,
  'TheSecondCoilOfBahamutTurn3': 357,
  'TheSecondCoilOfBahamutTurn4': 358,
  'TheShiftingAltarsOfUznair': 794,
  'TheShiftingGymnasionAgonon': 1123,
  'TheShiftingOubliettesOfLyheGhiah': 924,
  'TheSildihnSubterrane': 1069,
  'TheSingularityReactor': 437,
  'TheSingularityReactorUnreal': 1175,
  'TheSirensongSea': 1142,
  'TheSirensongSea63': 626,
  'TheSkydeepCenote': 1194,
  'TheStepsOfFaith': 1068,
  'TheStepsOfFaith61': 143,
  'TheStigmaDreamscape': 986,
  'TheStoneVigil': 1042,
  'TheStoneVigilHard': 365,
  'TheStrayboroughDeadwalk': 1204,
  'TheStrikingTreeExtreme': 375,
  'TheStrikingTreeHard': 374,
  'TheSunkenTempleOfQarn': 1267,
  'TheSunkenTempleOfQarn71': 163,
  'TheSunkenTempleOfQarnHard': 367,
  'TheSwallowsCompass': 768,
  'TheTamTaraDeepcroft': 1037,
  'TheTamTaraDeepcroftHard': 373,
  'TheTempest': 818,
  'TheTempleOfTheFist': 663,
  'TheThousandMawsOfTotoRak': 1039,
  'TheTowerAtParadigmsBreach': 966,
  'TheTowerOfBabil': 969,
  'TheTowerOfZot': 952,
  'TheTripleTriadBattlehall': 579,
  'TheTwinning': 840,
  'TheUnderkeep': 1266,
  'TheUnendingCoilOfBahamutUltimate': 733,
  'TheValentionesCeremony': 741,
  'TheVault': 1066,
  'TheVault61': 421,
  'TheVoidArk': 508,
  'TheVoidcastDais': 1140,
  'TheVoidcastDaisExtreme': 1141,
  'TheWanderersPalace': 159,
  'TheWanderersPalaceHard': 188,
  'TheWarmthOfFamily': 1244,
  'TheWeaponsRefrainUltimate': 777,
  'TheWeepingCityOfMhach': 556,
  'TheWhorleaterExtreme': 359,
  'TheWhorleaterHard': 281,
  'TheWhorleaterUnreal': 972,
  'TheWillOfTheMoon': 797,
  'TheWindwardWilds': 1300,
  'TheWindwardWildsExtreme': 1306,
  'TheWorldOfDarkness': 151,
  'TheWreathOfSnakes': 824,
  'TheWreathOfSnakesExtreme': 825,
  'TheWreathOfSnakesUnreal': 1302,
  'ThokAstThokExtreme': 446,
  'ThokAstThokHard': 432,
  'ThornmarchExtreme': 364,
  'ThornmarchHard': 1067,
  'ThornmarchHard61': 207,
  'ToCalmerSeas': 1016,
  'TripleTriadInvitationalParlor': 941,
  'TripleTriadOpenTournament': 940,
  'TsukuyomisPainUnreal': 1318,
  'Tuliyollal': 1185,
  'UldahStepsOfNald': 130,
  'UldahStepsOfThal': 131,
  'UltimaThule': 960,
  'UltimasBaneUnreal': 1035,
  'UnderTheArmor': 190,
  'UpperLaNoscea': 139,
  'Urqopacha': 1187,
  'UrthsFount': 394,
  'Vanaspati': 970,
  'Vanguard': 1198,
  'VaultOneiron': 1279,
  'VengeanceOfTheViper': 1236,
  'VowsOfVirtueDeedsOfCruelty': 893,
  'WardUp': 299,
  'WesternLaNoscea': 138,
  'WesternThanalan': 140,
  'WhenClansCollide': 723,
  'WhereEverythingBegins': 1091,
  'WhereWeCallHome': 1328,
  'WithHeartAndSteel': 707,
  'WolvesDenPier': 250,
  'WorqorChirtehTriumph': 1313,
  'WorqorLarDor': 1195,
  'WorqorLarDorExtreme': 1196,
  'WorqorZormor': 1193,
  'WorthyOfHisBack': 1014,
  'Xelphatol': 1113,
  'Xelphatol62': 572,
  'YakTel': 1189,
  'Yanxia': 614,
  'YuweyawataFieldStation': 1242,
  'Zadnor': 975
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ 902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Auto-generated from gen_zone_id_and_info.ts
// DO NOT EDIT THIS FILE DIRECTLY

const data = {
  128: {
    'exVersion': 0,
    'name': {
      'cn': '利姆萨·罗敏萨上层甲板',
      'de': 'Obere Decks',
      'en': 'Limsa Lominsa Upper Decks',
      'fr': 'Limsa Lominsa - Le Tillac',
      'ja': 'リムサ・ロミンサ：上甲板層',
      'ko': '림사 로민사 상층 갑판',
      'tc': '利姆薩·羅敏薩上層甲板'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 14
  },
  129: {
    'exVersion': 0,
    'name': {
      'cn': '利姆萨·罗敏萨下层甲板',
      'de': 'Untere Decks',
      'en': 'Limsa Lominsa Lower Decks',
      'fr': 'Limsa Lominsa - L\'Entrepont',
      'ja': 'リムサ・ロミンサ：下甲板層',
      'ko': '림사 로민사 하층 갑판',
      'tc': '利姆薩·羅敏薩下層甲板'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 15
  },
  130: {
    'exVersion': 0,
    'name': {
      'cn': '乌尔达哈现世回廊',
      'de': 'Nald-Kreuzgang',
      'en': 'Ul\'dah - Steps of Nald',
      'fr': 'Ul\'dah - Faubourg de Nald',
      'ja': 'ウルダハ：ナル回廊',
      'ko': '울다하 날 회랑',
      'tc': '烏爾達哈現世回廊'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 7
  },
  131: {
    'exVersion': 0,
    'name': {
      'cn': '乌尔达哈来生回廊',
      'de': 'Thal-Kreuzgang',
      'en': 'Ul\'dah - Steps of Thal',
      'fr': 'Ul\'dah - Faubourg de Thal',
      'ja': 'ウルダハ：ザル回廊',
      'ko': '울다하 달 회랑',
      'tc': '烏爾達哈來生回廊'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 8
  },
  132: {
    'exVersion': 0,
    'name': {
      'cn': '格里达尼亚新街',
      'de': 'Neu-Gridania',
      'en': 'New Gridania',
      'fr': 'Nouvelle Gridania',
      'ja': 'グリダニア：新市街',
      'ko': '그리다니아 신시가지',
      'tc': '格里達尼亞新街'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 1
  },
  133: {
    'exVersion': 0,
    'name': {
      'cn': '格里达尼亚旧街',
      'de': 'Alt-Gridania',
      'en': 'Old Gridania',
      'fr': 'Vieille Gridania',
      'ja': 'グリダニア：旧市街',
      'ko': '그리다니아 구시가지',
      'tc': '格里達尼亞舊街'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 2
  },
  134: {
    'exVersion': 0,
    'name': {
      'cn': '中拉诺西亚',
      'de': 'Zentrales La Noscea',
      'en': 'Middle La Noscea',
      'fr': 'Noscea centrale',
      'ja': '中央ラノシア',
      'ko': '중부 라노시아',
      'tc': '中拉諾西亞'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 16
  },
  135: {
    'exVersion': 0,
    'name': {
      'cn': '拉诺西亚低地',
      'de': 'Unteres La Noscea',
      'en': 'Lower La Noscea',
      'fr': 'Basse-Noscea',
      'ja': '低地ラノシア',
      'ko': '저지 라노시아',
      'tc': '拉諾西亞低地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 17
  },
  136: {
    'exVersion': 0,
    'name': {
      'cn': '海雾村',
      'de': 'Dorf des Nebels',
      'en': 'Mist',
      'fr': 'Brumée',
      'ja': 'ミスト・ヴィレッジ',
      'ko': '안갯빛 마을',
      'tc': '海霧村'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 14
  },
  137: {
    'exVersion': 0,
    'name': {
      'cn': '东拉诺西亚',
      'de': 'Östliches La Noscea',
      'en': 'Eastern La Noscea',
      'fr': 'Noscea orientale',
      'ja': '東ラノシア',
      'ko': '동부 라노시아',
      'tc': '東拉諾西亞'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 18
  },
  138: {
    'exVersion': 0,
    'name': {
      'cn': '西拉诺西亚',
      'de': 'Westliches La Noscea',
      'en': 'Western La Noscea',
      'fr': 'Noscea occidentale',
      'ja': '西ラノシア',
      'ko': '서부 라노시아',
      'tc': '西拉諾西亞'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 19
  },
  139: {
    'exVersion': 0,
    'name': {
      'cn': '拉诺西亚高地',
      'de': 'Oberes La Noscea',
      'en': 'Upper La Noscea',
      'fr': 'Haute-Noscea',
      'ja': '高地ラノシア',
      'ko': '고지 라노시아',
      'tc': '拉諾西亞高地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 20
  },
  140: {
    'exVersion': 0,
    'name': {
      'cn': '西萨纳兰',
      'de': 'Westliches Thanalan',
      'en': 'Western Thanalan',
      'fr': 'Thanalan occidental',
      'ja': '西ザナラーン',
      'ko': '서부 다날란',
      'tc': '西薩納蘭'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 9
  },
  141: {
    'exVersion': 0,
    'name': {
      'cn': '中萨纳兰',
      'de': 'Zentrales Thanalan',
      'en': 'Central Thanalan',
      'fr': 'Thanalan central',
      'ja': '中央ザナラーン',
      'ko': '중부 다날란',
      'tc': '中薩納蘭'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 10
  },
  142: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '艾玛吉娜杯斗技大会决赛',
      'de': 'Das Drachenhals-Kolosseum',
      'en': 'The Dragon\'s Neck',
      'fr': 'Le Col du dragon',
      'ja': 'アマジナ杯闘技会決勝戦',
      'ko': '아마지나배 투기대회 결승전',
      'tc': '艾瑪姬娜杯鬥技大會決賽'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  143: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '(6.1)皇都伊修加德保卫战',
      'de': '(6.1)Der Schicksalsweg',
      'en': '(6.1)The Steps of Faith',
      'fr': '(6.1)Le Siège de la sainte Cité d\'Ishgard',
      'ja': '(6.1)皇都イシュガルド防衛戦',
      'ko': '(6.1)성도 이슈가르드 방어전'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  145: {
    'exVersion': 0,
    'name': {
      'cn': '东萨纳兰',
      'de': 'Östliches Thanalan',
      'en': 'Eastern Thanalan',
      'fr': 'Thanalan oriental',
      'ja': '東ザナラーン',
      'ko': '동부 다날란',
      'tc': '東薩納蘭'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 11
  },
  146: {
    'exVersion': 0,
    'name': {
      'cn': '南萨纳兰',
      'de': 'Südliches Thanalan',
      'en': 'Southern Thanalan',
      'fr': 'Thanalan méridional',
      'ja': '南ザナラーン',
      'ko': '남부 다날란',
      'tc': '南薩納蘭'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 12
  },
  147: {
    'exVersion': 0,
    'name': {
      'cn': '北萨纳兰',
      'de': 'Nördliches Thanalan',
      'en': 'Northern Thanalan',
      'fr': 'Thanalan septentrional',
      'ja': '北ザナラーン',
      'ko': '북부 다날란',
      'tc': '北薩納蘭'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 13
  },
  148: {
    'exVersion': 0,
    'name': {
      'cn': '黑衣森林中央林区',
      'de': 'Tiefer Wald',
      'en': 'Central Shroud',
      'fr': 'Forêt centrale',
      'ja': '黒衣森：中央森林',
      'ko': '검은장막 숲 중부삼림',
      'tc': '黑衣森林中央林區'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 3
  },
  150: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '(6.1)幻龙残骸密约之塔',
      'de': '(6.1)Hüter des Sees',
      'en': '(6.1)The Keeper of the Lake',
      'fr': '(6.1)Le Gardien du lac',
      'ja': '(6.1)幻龍残骸 黙約の塔',
      'ko': '(6.1)묵약의 탑'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 74
  },
  151: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '水晶塔 暗之世界',
      'de': 'Die Welt der Dunkelheit',
      'en': 'The World of Darkness',
      'fr': 'La Tour de Cristal - Monde des Ténèbres',
      'ja': 'クリスタルタワー：闇の世界',
      'ko': '크리스탈 타워: 어둠의 세계',
      'tc': '水晶塔 暗之世界'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  152: {
    'exVersion': 0,
    'name': {
      'cn': '黑衣森林东部林区',
      'de': 'Ostwald',
      'en': 'East Shroud',
      'fr': 'Forêt de l\'est',
      'ja': '黒衣森：東部森林',
      'ko': '검은장막 숲 동부삼림',
      'tc': '黑衣森林東部林區'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 4
  },
  153: {
    'exVersion': 0,
    'name': {
      'cn': '黑衣森林南部林区',
      'de': 'Südwald',
      'en': 'South Shroud',
      'fr': 'Forêt du sud',
      'ja': '黒衣森：南部森林',
      'ko': '검은장막 숲 남부삼림',
      'tc': '黑衣森林南部林區'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 5
  },
  154: {
    'exVersion': 0,
    'name': {
      'cn': '黑衣森林北部林区',
      'de': 'Nordwald',
      'en': 'North Shroud',
      'fr': 'Forêt du nord',
      'ja': '黒衣森：北部森林',
      'ko': '검은장막 숲 북부삼림',
      'tc': '黑衣森林北部林區'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 6
  },
  155: {
    'exVersion': 0,
    'name': {
      'cn': '库尔札斯中央高地',
      'de': 'Zentrales Hochland von Coerthas',
      'en': 'Coerthas Central Highlands',
      'fr': 'Hautes terres du Coerthas central',
      'ja': 'クルザス中央高地',
      'ko': '커르다스 중앙고지',
      'tc': '庫爾札斯中央高地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 21
  },
  156: {
    'exVersion': 0,
    'name': {
      'cn': '摩杜纳',
      'de': 'Mor Dhona',
      'en': 'Mor Dhona',
      'fr': 'Mor Dhona',
      'ja': 'モードゥナ',
      'ko': '모르도나',
      'tc': '摩杜納'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 22
  },
  159: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '神灵圣域放浪神古神殿',
      'de': 'Palast des Wanderers',
      'en': 'The Wanderer\'s Palace',
      'fr': 'Le Palais du Vagabond',
      'ja': '旅神聖域 ワンダラーパレス',
      'ko': '방랑자의 궁전',
      'tc': '神靈聖域放浪神古神殿'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  160: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '领航明灯天狼星灯塔',
      'de': 'Pharos Sirius',
      'en': 'Pharos Sirius',
      'fr': 'Le Phare de Sirius',
      'ja': '怪鳥巨塔 シリウス大灯台',
      'ko': '시리우스 대등대',
      'tc': '領航明燈天狼星燈塔'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  162: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '(7.0)魔兽领域日影地修炼所',
      'de': '(7.0)Halatali',
      'en': '(7.0)Halatali',
      'fr': '(7.0)Halatali',
      'ja': '(7.0)魔獣領域 ハラタリ修練所',
      'ko': '(7.0)할라탈리 수련장'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  163: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '(7.1)古代遗迹喀恩埋没圣堂',
      'de': '(7.1)Versunkener Tempel von Qarn',
      'en': '(7.1)The Sunken Temple of Qarn',
      'fr': '(7.1)Le Temple enseveli de Qarn',
      'ja': '(7.1)遺跡探索 カルン埋没寺院',
      'ko': '(7.1)카른의 무너진 사원'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  167: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '邪教驻地无限城古堡',
      'de': 'Die Ruinen von Amdapor',
      'en': 'Amdapor Keep',
      'fr': 'Le Château d\'Amdapor',
      'ja': '邪教排撃 古城アムダプール',
      'ko': '옛 암다포르 성',
      'tc': '邪教駐地無限城古堡'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  170: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '(7.2)流沙迷宫樵鸣洞',
      'de': '(7.2)Sägerschrei',
      'en': '(7.2)Cutter\'s Cry',
      'fr': '(7.2)Le Gouffre hurlant',
      'ja': '(7.2)流砂迷宮 カッターズクライ',
      'ko': '(7.2)나무꾼의 비명'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  171: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '(7.3)山中战线泽梅尔要塞',
      'de': '(7.3)Die Feste Dzemael',
      'en': '(7.3)Dzemael Darkhold',
      'fr': '(7.3)La Forteresse de Dzemael',
      'ja': '(7.3)掃討作戦 ゼーメル要塞',
      'ko': '(7.3)제멜 요새'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  172: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '(7.3)毒雾洞窟黄金谷',
      'de': '(7.3)Goldklamm',
      'en': '(7.3)The Aurum Vale',
      'fr': '(7.3)Le Val d\'Aurum',
      'ja': '(7.3)霧中行軍 オーラムヴェイル',
      'ko': '(7.3)금빛 골짜기'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  174: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '水晶塔 古代人迷宫',
      'de': 'Kristallturm - Das Labyrinth der Alten',
      'en': 'The Labyrinth of the Ancients',
      'fr': 'La Tour de Cristal - Dédale antique',
      'ja': 'クリスタルタワー：古代の民の迷宮',
      'ko': '크리스탈 타워: 고대인의 미궁',
      'tc': '水晶塔 古代人迷宮'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  180: {
    'exVersion': 0,
    'name': {
      'cn': '拉诺西亚外地',
      'de': 'Äußeres La Noscea',
      'en': 'Outer La Noscea',
      'fr': 'Noscea extérieure',
      'ja': '外地ラノシア',
      'ko': '외지 라노시아',
      'tc': '拉諾西亞外地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 24
  },
  188: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '武装圣域放浪神古神殿',
      'de': 'Palast des Wanderers (schwer)',
      'en': 'The Wanderer\'s Palace (Hard)',
      'fr': 'Le Palais du Vagabond (brutal)',
      'ja': '武装聖域 ワンダラーパレス (Hard)',
      'ko': '방랑자의 궁전(어려움)',
      'tc': '武裝聖域放浪神古神殿'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 40
  },
  189: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '邪念妖地无限城古堡',
      'de': 'Die Ruinen von Amdapor (schwer)',
      'en': 'Amdapor Keep (Hard)',
      'fr': 'Le Château d\'Amdapor (brutal)',
      'ja': '邪念排撃 古城アムダプール (Hard)',
      'ko': '옛 암다포르 성(어려움)',
      'tc': '邪念妖地無限城古堡'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 40
  },
  190: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '讨伐彷徨死灵！',
      'de': 'Bockmanns Gefolge',
      'en': 'Under the Armor',
      'fr': 'Chasse au fantôme fantoche',
      'ja': '彷徨う死霊を討て！',
      'ko': '방황하는 사령을 쓰러뜨려라!',
      'tc': '討伐彷徨死靈！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 3
  },
  191: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '驱除剧毒妖花！',
      'de': 'Unkraut jäten',
      'en': 'Pulling Poison Posies',
      'fr': 'Opération fleurs du mal',
      'ja': '有毒妖花を駆除せよ！',
      'ko': '독성 요괴꽃을 제거하라!',
      'tc': '驅除劇毒妖花！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 4
  },
  192: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '消灭恶徒团伙寄生蜂团！',
      'de': 'Ins Wespennest stechen',
      'en': 'Stinging Back',
      'fr': 'Expédition punitive contre les Ventrerouge',
      'ja': '無法者「似我蜂団」を撃滅せよ！',
      'ko': '무법자 집단 \'나나니단\'을 섬멸하라!',
      'tc': '消滅惡徒團夥寄生蜂團！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 5
  },
  193: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 真源之章1',
      'de': 'Verschlungene Schatten 3 - 1',
      'en': 'The Final Coil of Bahamut - Turn 1',
      'fr': 'L\'Abîme de Bahamut I',
      'ja': '大迷宮バハムート：真成編1',
      'ko': '대미궁 바하무트: 진성편 1',
      'tc': '巴哈姆特大迷宮 真源之章1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  194: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 真源之章2',
      'de': 'Verschlungene Schatten 3 - 2',
      'en': 'The Final Coil of Bahamut - Turn 2',
      'fr': 'L\'Abîme de Bahamut II',
      'ja': '大迷宮バハムート：真成編2',
      'ko': '대미궁 바하무트: 진성편 2',
      'tc': '巴哈姆特大迷宮 真源之章2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  195: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 真源之章3',
      'de': 'Verschlungene Schatten 3 - 3',
      'en': 'The Final Coil of Bahamut - Turn 3',
      'fr': 'L\'Abîme de Bahamut III',
      'ja': '大迷宮バハムート：真成編3',
      'ko': '대미궁 바하무트: 진성편 3',
      'tc': '巴哈姆特大迷宮 真源之章3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  196: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 真源之章4',
      'de': 'Verschlungene Schatten 3 - 4',
      'en': 'The Final Coil of Bahamut - Turn 4',
      'fr': 'L\'Abîme de Bahamut IV',
      'ja': '大迷宮バハムート：真成編4',
      'ko': '대미궁 바하무트: 진성편 4',
      'tc': '巴哈姆特大迷宮 真源之章4'
    },
    'offsetX': -448,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 44
  },
  207: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '(6.1)莫古力贤王歼灭战',
      'de': '(6.1)Königliche Konfrontation (schwer)',
      'en': '(6.1)Thornmarch (Hard)',
      'fr': '(6.1)La Lisière de ronces (brutal)',
      'ja': '(6.1)善王モグル・モグXII世討滅戦',
      'ko': '(6.1)선왕 모그루 모그 XII세 토벌전'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 30
  },
  214: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '完成集团战训练！',
      'de': 'Einer für alle, alle für einen',
      'en': 'Basic Training: Enemy Parties',
      'fr': 'Entraînement : groupes d\'ennemis',
      'ja': '集団戦訓練をくぐり抜けろ！',
      'ko': '집단전 훈련을 완수하라!',
      'tc': '完成集團戰訓練！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 16
  },
  215: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '突破所有关门，讨伐最深处的敌人！',
      'de': 'Sturmkommando',
      'en': 'Basic Training: Enemy Strongholds',
      'fr': 'Entraînement : in­fil­tra­tion en base ennemie',
      'ja': '全関門を突破し、最深部の敵を討て！',
      'ko': '관문을 돌파하고 최심부의 적을 쓰러뜨려라!',
      'tc': '突破所有關門，討伐最深處的敵人！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 9
  },
  216: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '捕获金币龟！',
      'de': 'Gil oder Leben',
      'en': 'Hero on the Half Shell',
      'fr': 'Reconquête d\'une carapace escamotée',
      'ja': 'ギルガメを捕獲せよ！',
      'ko': '길거북을 사로잡아라!',
      'tc': '捕獲金幣龜！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 10
  },
  219: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '击溃哥布林炸弹军团！',
      'de': 'Bombige Goblins',
      'en': 'Flicking Sticks and Taking Names',
      'fr': 'Les Gobelins bombardiers',
      'ja': '爆弾魔ゴブリン軍団を撃滅せよ！',
      'ko': '폭탄광 고블린 군단을 섬멸하라!',
      'tc': '擊潰哥布林炸彈軍團！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 3
  },
  220: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '讨伐梦幻之布拉奇希奥！',
      'de': 'Briaxio ausschalten',
      'en': 'All\'s Well that Ends in the Well',
      'fr': 'Briaxio à bras raccourcis',
      'ja': '夢幻のブラキシオを討て！',
      'ko': '몽환의 브라크시오를 쓰러뜨려라!',
      'tc': '討伐夢幻之布拉奇希奧！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 5
  },
  221: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '讨伐污染源头魔界花！',
      'de': 'Tödliches Rankenspiel',
      'en': 'More than a Feeler',
      'fr': 'Sus au morbol pollueur',
      'ja': '汚染源モルボルを討て！',
      'ko': '오염원 몰볼을 쓰러뜨려라!',
      'tc': '討伐污染源頭毛爾波爾！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 20
  },
  222: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '讨伐坑道中出现的妖异！',
      'de': 'Gefahr aus dem Nichts',
      'en': 'Annoy the Void',
      'fr': 'Buso l\'immolateur',
      'ja': '坑道に現れた妖異ブソを討て！',
      'ko': '갱도에 나타난 요마 부소를 쓰러뜨려라!',
      'tc': '討伐坑道中出現的妖異！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 17
  },
  223: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '注意无敌的眷属，讨伐大型妖异！',
      'de': 'Kampf gegen Schatten',
      'en': 'Shadow and Claw',
      'fr': 'Ombres et griffes',
      'ja': '無敵の眷属を従えし、大型妖異を討て！',
      'ko': '무적의 부하를 조종하는 요마를 쓰러뜨려라!',
      'tc': '注意無敵的眷屬，討伐大型妖異！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 21
  },
  241: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 邂逅之章1',
      'de': 'Verschlungene Schatten 1',
      'en': 'The Binding Coil of Bahamut - Turn 1',
      'fr': 'Le Labyrinthe de Bahamut I',
      'ja': '大迷宮バハムート：邂逅編1',
      'ko': '대미궁 바하무트: 해후편 1',
      'tc': '巴哈姆特大迷宮 邂逅之章1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  242: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 邂逅之章2',
      'de': 'Verschlungene Schatten 2',
      'en': 'The Binding Coil of Bahamut - Turn 2',
      'fr': 'Le Labyrinthe de Bahamut II',
      'ja': '大迷宮バハムート：邂逅編2',
      'ko': '대미궁 바하무트: 해후편 2',
      'tc': '巴哈姆特大迷宮 邂逅之章2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  243: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 邂逅之章3',
      'de': 'Verschlungene Schatten 3',
      'en': 'The Binding Coil of Bahamut - Turn 3',
      'fr': 'Le Labyrinthe de Bahamut III',
      'ja': '大迷宮バハムート：邂逅編3',
      'ko': '대미궁 바하무트: 해후편 3',
      'tc': '巴哈姆特大迷宮 邂逅之章3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  244: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 邂逅之章4',
      'de': 'Verschlungene Schatten 4',
      'en': 'The Binding Coil of Bahamut - Turn 4',
      'fr': 'Le Labyrinthe de Bahamut IV',
      'ja': '大迷宮バハムート：邂逅編4',
      'ko': '대미궁 바하무트: 해후편 4',
      'tc': '巴哈姆特大迷宮 邂逅之章4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  245: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 邂逅之章5',
      'de': 'Verschlungene Schatten 5',
      'en': 'The Binding Coil of Bahamut - Turn 5',
      'fr': 'Le Labyrinthe de Bahamut V',
      'ja': '大迷宮バハムート：邂逅編5',
      'ko': '대미궁 바하무트: 해후편 5',
      'tc': '巴哈姆特大迷宮 邂逅之章5'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  250: {
    'exVersion': 0,
    'name': {
      'cn': '狼狱停船场',
      'de': 'Wolfshöhlen-Pier',
      'en': 'Wolves\' Den Pier',
      'fr': 'Jetée de l\'Antre des loups',
      'ja': 'ウルヴズジェイル係船場',
      'ko': '늑대우리 부두',
      'tc': '狼獄停船場'
    },
    'offsetX': -77,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 29
  },
  281: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '利维亚桑歼灭战',
      'de': 'Götterdämmerung - Leviathan',
      'en': 'The Whorleater (Hard)',
      'fr': 'Le Briseur de marées (brutal)',
      'ja': '真リヴァイアサン討滅戦',
      'ko': '진 리바이어선 토벌전',
      'tc': '真 利維坦殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 38
  },
  292: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '伊弗利特歼灭战',
      'de': 'Götterdämmerung - Ifrit',
      'en': 'The Bowl of Embers (Hard)',
      'fr': 'Le Cratère des tisons (brutal)',
      'ja': '真イフリート討滅戦',
      'ko': '진 이프리트 토벌전',
      'tc': '真 伊弗利特殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 25
  },
  293: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '泰坦歼灭战',
      'de': 'Götterdämmerung - Titan',
      'en': 'The Navel (Hard)',
      'fr': 'Le Nombril (brutal)',
      'ja': '真タイタン討滅戦',
      'ko': '진 타이탄 토벌전',
      'tc': '真 泰坦殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 23
  },
  294: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '迦楼罗歼灭战',
      'de': 'Götterdämmerung - Garuda',
      'en': 'The Howling Eye (Hard)',
      'fr': 'Hurlœil (brutal)',
      'ja': '真ガルーダ討滅戦',
      'ko': '진 가루다 토벌전',
      'tc': '真 迦樓羅殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 26
  },
  295: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '伊弗利特歼殛战',
      'de': 'Zenit der Götter - Ifrit',
      'en': 'The Bowl of Embers (Extreme)',
      'fr': 'Le Cratère des tisons (extrême)',
      'ja': '極イフリート討滅戦',
      'ko': '극 이프리트 토벌전',
      'tc': '極 伊弗利特殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 25
  },
  296: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '泰坦歼殛战',
      'de': 'Zenit der Götter - Titan',
      'en': 'The Navel (Extreme)',
      'fr': 'Le Nombril (extrême)',
      'ja': '極タイタン討滅戦',
      'ko': '극 타이탄 토벌전',
      'tc': '極 泰坦殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 23
  },
  297: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '迦楼罗歼殛战',
      'de': 'Zenit der Götter - Garuda',
      'en': 'The Howling Eye (Extreme)',
      'fr': 'Hurlœil (extrême)',
      'ja': '極ガルーダ討滅戦',
      'ko': '극 가루다 토벌전',
      'tc': '極 迦樓羅殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 26
  },
  298: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '讨伐爆弹怪的女王！',
      'de': 'Miss Bombastic',
      'en': 'Long Live the Queen',
      'fr': 'Longue vie à la Reine',
      'ja': 'ボムを率いる「ボムクイーン」を討て！',
      'ko': '봄을 거느린 \'봄 여왕\'을 쓰러뜨려라!',
      'tc': '討伐炸彈的女王！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 21
  },
  299: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '歼灭特殊阵型的妖异！',
      'de': 'Unzertrennlich',
      'en': 'Ward Up',
      'fr': 'Quintettes infernaux',
      'ja': '不気味な陣形を組む妖異をせん滅せよ！',
      'ko': '불길한 진형을 짜는 요마를 섬멸하라!',
      'tc': '殲滅特殊陣型的妖異！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 22
  },
  300: {
    'contentType': 3,
    'exVersion': 0,
    'name': {
      'cn': '制止三方混战的巨人族，守住遗物！',
      'de': 'Wuchtige Dreifaltigkeit',
      'en': 'Solemn Trinity',
      'fr': 'Trinité sinistre',
      'ja': '三つ巴の巨人族を制し、遺物を守れ！',
      'ko': '세 거인족을 제압하여 유물을 지켜내라!',
      'tc': '制止三方混戰的巨人族，守住遺物！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 22
  },
  348: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '究极神兵假想作战',
      'de': 'Heldenlied von Ultima',
      'en': 'The Minstrel\'s Ballad: Ultima\'s Bane',
      'fr': 'Le fléau d\'Ultima',
      'ja': '究極幻想 アルテマウェポン破壊作戦',
      'ko': '궁극의 환상 알테마 웨폰 파괴작전',
      'tc': '究極幻想 究極武器破壞作戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 31
  },
  349: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '骚乱坑道铜铃铜山',
      'de': 'Kupferglocken-Mine (schwer)',
      'en': 'Copperbell Mines (Hard)',
      'fr': 'Les Mines de Clochecuivre (brutal)',
      'ja': '騒乱坑道 カッパーベル銅山 (Hard)',
      'ko': '구리종 광산(어려움)',
      'tc': '騷亂坑道銅鈴銅山'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  350: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '恶灵府邸静语庄园',
      'de': 'Haukke-Herrenhaus (schwer)',
      'en': 'Haukke Manor (Hard)',
      'fr': 'Le Manoir des Haukke (brutal)',
      'ja': '妖異屋敷 ハウケタ御用邸 (Hard)',
      'ko': '하우케타 별궁(어려움)',
      'tc': '惡靈府邸靜語莊園'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  353: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '活动挑战2',
      'de': 'Event-Inhalt 1',
      'en': 'Special Event I',
      'fr': 'Défi spécial I',
      'ja': 'イベント用コンテンツ：1',
      'ko': '이벤트용 임무: 1',
      'tc': '活動挑戰2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  354: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '活动挑战3',
      'de': 'Event-Inhalt 2',
      'en': 'Special Event II',
      'fr': 'Défi spécial II',
      'ja': 'イベント用コンテンツ：2',
      'ko': '이벤트용 임무: 2',
      'tc': '活動挑戰3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 103
  },
  355: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 入侵之章1',
      'de': 'Verschlungene Schatten 2 - 1',
      'en': 'The Second Coil of Bahamut - Turn 1',
      'fr': 'Les Méandres de Bahamut I',
      'ja': '大迷宮バハムート：侵攻編1',
      'ko': '대미궁 바하무트: 침공편 1',
      'tc': '巴哈姆特大迷宮 入侵之章1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  356: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 入侵之章2',
      'de': 'Verschlungene Schatten 2 - 2',
      'en': 'The Second Coil of Bahamut - Turn 2',
      'fr': 'Les Méandres de Bahamut II',
      'ja': '大迷宮バハムート：侵攻編2',
      'ko': '대미궁 바하무트: 침공편 2',
      'tc': '巴哈姆特大迷宮 入侵之章2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  357: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 入侵之章3',
      'de': 'Verschlungene Schatten 2 - 3',
      'en': 'The Second Coil of Bahamut - Turn 3',
      'fr': 'Les Méandres de Bahamut III',
      'ja': '大迷宮バハムート：侵攻編3',
      'ko': '대미궁 바하무트: 침공편 3',
      'tc': '巴哈姆特大迷宮 入侵之章3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  358: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特大迷宫 入侵之章4',
      'de': 'Verschlungene Schatten 2 - 4',
      'en': 'The Second Coil of Bahamut - Turn 4',
      'fr': 'Les Méandres de Bahamut IV',
      'ja': '大迷宮バハムート：侵攻編4',
      'ko': '대미궁 바하무트: 침공편 4',
      'tc': '巴哈姆特大迷宮 入侵之章4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  359: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '利维亚桑歼殛战',
      'de': 'Zenit der Götter - Leviathan',
      'en': 'The Whorleater (Extreme)',
      'fr': 'Le Briseur de marées (extrême)',
      'ja': '極リヴァイアサン討滅戦',
      'ko': '극 리바이어선 토벌전',
      'tc': '極 利維坦殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 38
  },
  360: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '剑斗领域日影地修炼所',
      'de': 'Halatali (schwer)',
      'en': 'Halatali (Hard)',
      'fr': 'Halatali (brutal)',
      'ja': '剣闘領域 ハラタリ修練所 (Hard)',
      'ko': '할라탈리 수련장(어려움)',
      'tc': '劍鬥領域日影地修練所'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  361: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '财宝传说破舰岛',
      'de': 'Schiffbrecher-Insel',
      'en': 'Hullbreaker Isle',
      'fr': 'L\'Île de Crèvecarène',
      'ja': '財宝伝説 ハルブレーカー・アイル',
      'ko': '난파선의 섬',
      'tc': '財寶傳說破艦島'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  362: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '纷争要地布雷福洛克斯野营地',
      'de': 'Brüllvolx\' Langrast (schwer)',
      'en': 'Brayflox\'s Longstop (Hard)',
      'fr': 'Le Bivouac de Brayflox (brutal)',
      'ja': '盟友支援 ブレイフロクスの野営地 (Hard)',
      'ko': '브레이플록스의 야영지(어려움)',
      'tc': '紛爭要地布雷福洛克斯野營地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 37
  },
  363: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '腐坏遗迹无限城市街古迹',
      'de': 'Historisches Amdapor',
      'en': 'The Lost City of Amdapor',
      'fr': 'Les Vestiges de la cité d\'Amdapor',
      'ja': '腐敗遺跡 古アムダプール市街',
      'ko': '옛 암다포르 시가지',
      'tc': '腐壞遺跡無限城市街古跡'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 40
  },
  364: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '莫古力贤王歼殛战',
      'de': 'Königliche Konfrontation (extrem)',
      'en': 'Thornmarch (Extreme)',
      'fr': 'La Lisière de ronces (extrême)',
      'ja': '極王モグル・モグXII世討滅戦',
      'ko': '극왕 모그루 모그 XII세 토벌전',
      'tc': '極王莫古爾·莫古XII世殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 30
  },
  365: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '激战城塞石卫塔',
      'de': 'Steinerne Wacht (schwer)',
      'en': 'The Stone Vigil (Hard)',
      'fr': 'Le Vigile de Pierre (brutal)',
      'ja': '城塞奪回 ストーンヴィジル (Hard)',
      'ko': '돌방패 경계초소(어려움)',
      'tc': '激戰城塞石衛塔'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 42
  },
  366: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '大桥上的决斗',
      'de': 'Duell auf der großen Brücke',
      'en': 'Battle on the Big Bridge',
      'fr': 'Affrontement sur le grand pont',
      'ja': 'ギルガメッシュ討伐戦',
      'ko': '길가메시 토벌전',
      'tc': '吉爾伽美什殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  367: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '苏醒遗迹喀恩埋没圣堂',
      'de': 'Versunkener Tempel von Qarn (schwer)',
      'en': 'The Sunken Temple of Qarn (Hard)',
      'fr': 'Le Temple enseveli de Qarn (brutal)',
      'ja': '遺跡救援 カルン埋没寺院 (Hard)',
      'ko': '카른의 무너진 사원(어려움)',
      'tc': '甦醒遺跡喀恩埋沒聖堂'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 41
  },
  368: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '死化奇美拉讨伐战',
      'de': 'Kampf gegen die Dhorme-Chimära',
      'en': 'A Relic Reborn: the Chimera',
      'fr': 'La chimère dhorme du Coerthas',
      'ja': 'ドルムキマイラ討伐戦',
      'ko': '도름 키마이라 토벌전',
      'tc': '死化奇美拉討伐戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 21
  },
  369: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '海德拉讨伐战',
      'de': 'Kampf gegen die Hydra',
      'en': 'A Relic Reborn: the Hydra',
      'fr': 'L\'hydre d\'Halatali',
      'ja': 'ハイドラ討伐戦',
      'ko': '하이드라 토벌전',
      'tc': '海德拉討伐戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  371: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '(6.1)凛冽洞天披雪大冰壁',
      'de': '(6.1)Das Schneekleid',
      'en': '(6.1)Snowcloak',
      'fr': '(6.1)Manteneige',
      'ja': '(6.1)氷結潜窟 スノークローク大氷壁',
      'ko': '(6.1)얼음외투 대빙벽'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 42
  },
  372: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '水晶塔 希尔科斯塔',
      'de': 'Kristallturm - Der Syrcus-Turm',
      'en': 'Syrcus Tower',
      'fr': 'La Tour de Cristal - Tour de Syrcus',
      'ja': 'クリスタルタワー：シルクスの塔',
      'ko': '크리스탈 타워: 시르쿠스 탑',
      'tc': '水晶塔 希爾科斯塔'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  373: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '惨剧灵殿塔姆·塔拉墓园',
      'de': 'Totenacker Tam-Tara (schwer)',
      'en': 'The Tam–Tara Deepcroft (Hard)',
      'fr': 'L\'Hypogée de Tam-Tara (brutal)',
      'ja': '惨劇霊殿 タムタラの墓所 (Hard)',
      'ko': '탐타라 묘소(어려움)',
      'tc': '慘劇靈殿塔姆·塔拉墓園'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 300,
    'weatherRate': 0
  },
  374: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '拉姆歼灭战',
      'de': 'Götterdämmerung - Ramuh',
      'en': 'The Striking Tree (Hard)',
      'fr': 'L\'Arbre du jugement (brutal)',
      'ja': '真ラムウ討滅戦',
      'ko': '진 라무 토벌전',
      'tc': '真 拉姆殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 43
  },
  375: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '拉姆歼殛战',
      'de': 'Zenit der Götter - Ramuh',
      'en': 'The Striking Tree (Extreme)',
      'fr': 'L\'Arbre du jugement (extrême)',
      'ja': '極ラムウ討滅戦',
      'ko': '극 라무 토벌전',
      'tc': '極 拉姆殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 43
  },
  376: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '(7.1)周边遗迹群（阵地战）',
      'de': '(7.1)Äußere Ruinen (Sicherung)',
      'en': '(7.1)The Borderland Ruins (Secure)',
      'fr': '(7.1)Les Ruines frontalières (annexion)',
      'ja': '(7.1)外縁遺跡群 (制圧戦)',
      'ko': '(7.1)외곽 유적지대(제압전)'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  377: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '希瓦歼灭战',
      'de': 'Götterdämmerung - Shiva',
      'en': 'The Akh Afah Amphitheatre (Hard)',
      'fr': 'L\'Amphithéâtre d\'Akh Afah (brutal)',
      'ja': '真シヴァ討滅戦',
      'ko': '진 시바 토벌전',
      'tc': '真 濕婆殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 46
  },
  378: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '希瓦歼殛战',
      'de': 'Zenit der Götter - Shiva',
      'en': 'The Akh Afah Amphitheatre (Extreme)',
      'fr': 'L\'Amphithéâtre d\'Akh Afah (extrême)',
      'ja': '極シヴァ討滅戦',
      'ko': '극 시바 토벌전',
      'tc': '極 濕婆殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 46
  },
  380: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特零式大迷宫 入侵之章1',
      'de': 'Verschlungene Schatten 2 - 1 (episch)',
      'en': 'The Second Coil of Bahamut (Savage) - Turn 1',
      'fr': 'Les Méandres de Bahamut I (sadique)',
      'ja': '大迷宮バハムート零式：侵攻編1',
      'ko': '대미궁 바하무트: 침공편(영웅) 1',
      'tc': '巴哈姆特零式大迷宮 入侵之章1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  381: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特零式大迷宫 入侵之章2',
      'de': 'Verschlungene Schatten 2 - 2 (episch)',
      'en': 'The Second Coil of Bahamut (Savage) - Turn 2',
      'fr': 'Les Méandres de Bahamut II (sadique)',
      'ja': '大迷宮バハムート零式：侵攻編2',
      'ko': '대미궁 바하무트: 침공편(영웅) 2',
      'tc': '巴哈姆特零式大迷宮 入侵之章2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  382: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特零式大迷宫 入侵之章3',
      'de': 'Verschlungene Schatten 2 - 3 (episch)',
      'en': 'The Second Coil of Bahamut (Savage) - Turn 3',
      'fr': 'Les Méandres de Bahamut III (sadique)',
      'ja': '大迷宮バハムート零式：侵攻編3',
      'ko': '대미궁 바하무트: 침공편(영웅) 3',
      'tc': '巴哈姆特零式大迷宮 入侵之章3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  383: {
    'contentType': 5,
    'exVersion': 0,
    'name': {
      'cn': '巴哈姆特零式大迷宫 入侵之章4',
      'de': 'Verschlungene Schatten 2 - 4 (episch)',
      'en': 'The Second Coil of Bahamut (Savage) - Turn 4',
      'fr': 'Les Méandres de Bahamut IV (sadique)',
      'ja': '大迷宮バハムート零式：侵攻編4',
      'ko': '대미궁 바하무트: 침공편(영웅) 4',
      'tc': '巴哈姆特零式大迷宮 入侵之章4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  387: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '逆转要害沙斯塔夏溶洞',
      'de': 'Sastasha (schwer)',
      'en': 'Sastasha (Hard)',
      'fr': 'Sastasha (brutal)',
      'ja': '逆襲要害 サスタシャ浸食洞 (Hard)',
      'ko': '사스타샤 침식 동굴(어려움)',
      'tc': '逆轉要害沙斯塔夏溶洞'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  389: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '陆行鸟竞赛：太阳海岸',
      'de': 'Chocobo-Rennen: Sonnenküste',
      'en': 'Chocobo Race: Costa del Sol',
      'fr': 'Course de chocobos : Costa del Sol',
      'ja': 'チョコボレース：コスタ・デル・ソル',
      'ko': '초코보 경주: 코스타 델 솔',
      'tc': '陸行鳥競賽：太陽海岸'
    },
    'offsetX': -472,
    'offsetY': -424,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  390: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '陆行鸟竞赛：荒野大道',
      'de': 'Chocobo-Rennen: Sagolii-Straße',
      'en': 'Chocobo Race: Sagolii Road',
      'fr': 'Course de chocobos : Route de Sagolii',
      'ja': 'チョコボレース：サゴリーロード',
      'ko': '초코보 경주: 사골리 사막',
      'tc': '陸行鳥競賽：荒野大道'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  391: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '陆行鸟竞赛：恬静小路',
      'de': 'Chocobo-Rennen: Pfad der Seelenruhe',
      'en': 'Chocobo Race: Tranquil Paths',
      'fr': 'Course de chocobos : Sentes tranquilles',
      'ja': 'チョコボレース：トランキルパス',
      'ko': '초코보 경주: 고요한 야영지',
      'tc': '陸行鳥競賽：恬靜小路'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  394: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '奥丁歼灭战',
      'de': 'Jenseits Urths Quelle',
      'en': 'Urth\'s Fount',
      'fr': 'La Fontaine d\'Urth',
      'ja': '闘神オーディン討滅戦',
      'ko': '투신 오딘 토벌전',
      'tc': '奧汀殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 45
  },
  396: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '无限城的死斗',
      'de': 'Revanche in den Ruinen',
      'en': 'Battle in the Big Keep',
      'fr': 'Revanche au vieux château',
      'ja': '真ギルガメッシュ討滅戦',
      'ko': '진 길가메시 토벌전',
      'tc': '真 吉爾伽美什殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  397: {
    'exVersion': 1,
    'name': {
      'cn': '库尔札斯西部高地',
      'de': 'Westliches Hochland von Coerthas',
      'en': 'Coerthas Western Highlands',
      'fr': 'Hautes terres du Coerthas occidental',
      'ja': 'クルザス西部高地',
      'ko': '커르다스 서부고지',
      'tc': '庫爾札斯西部高地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 95,
    'weatherRate': 49
  },
  398: {
    'exVersion': 1,
    'name': {
      'cn': '龙堡参天高地',
      'de': 'Dravanisches Vorland',
      'en': 'The Dravanian Forelands',
      'fr': 'Avant-pays dravanien',
      'ja': '高地ドラヴァニア',
      'ko': '고지 드라바니아',
      'tc': '德拉瓦尼亞山麓地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 95,
    'weatherRate': 50
  },
  399: {
    'exVersion': 1,
    'name': {
      'cn': '龙堡内陆低地',
      'de': 'Dravanisches Hinterland',
      'en': 'The Dravanian Hinterlands',
      'fr': 'Arrière-pays dravanien',
      'ja': '低地ドラヴァニア',
      'ko': '저지 드라바니아',
      'tc': '德拉瓦尼亞河谷地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 95,
    'weatherRate': 51
  },
  400: {
    'exVersion': 1,
    'name': {
      'cn': '翻云雾海',
      'de': 'Wallende Nebel',
      'en': 'The Churning Mists',
      'fr': 'L\'Écume des cieux de Dravania',
      'ja': 'ドラヴァニア雲海',
      'ko': '드라바니아 구름바다',
      'tc': '德拉瓦尼亞雲海'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 95,
    'weatherRate': 52
  },
  401: {
    'exVersion': 1,
    'name': {
      'cn': '阿巴拉提亚云海',
      'de': 'Abalathisches Wolkenmeer',
      'en': 'The Sea of Clouds',
      'fr': 'L\'Écume des cieux d\'Abalathia',
      'ja': 'アバラシア雲海',
      'ko': '아발라시아 구름바다',
      'tc': '阿巴拉提亞雲海'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 95,
    'weatherRate': 53
  },
  402: {
    'exVersion': 1,
    'name': {
      'cn': '魔大陆阿济兹拉',
      'de': 'Azys Lla',
      'en': 'Azys Lla',
      'fr': 'Azys Lla',
      'ja': 'アジス・ラー',
      'ko': '아지스 라',
      'tc': '魔大陸阿濟茲拉'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 95,
    'weatherRate': 54
  },
  403: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '英雄归来',
      'de': 'Verrat der Qalyana',
      'en': 'Return of the Bull',
      'fr': 'Retour au bercail',
      'ja': '英雄の帰還',
      'ko': '영웅의 귀환',
      'tc': '英雄歸來'
    },
    'offsetX': -250,
    'offsetY': 128,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  416: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '(6.2)学识宝库迦巴勒幻想图书馆',
      'de': '(6.2)Große Gubal-Bibliothek',
      'en': '(6.2)The Great Gubal Library',
      'fr': '(6.2)La Grande bibliothèque de Gubal',
      'ja': '(6.2)禁書回収 グブラ幻想図書館',
      'ko': '(6.2)구브라 환상도서관'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  417: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '陆行鸟竞赛：竞赛教学',
      'de': 'Chocobo-Rennen: Übungsbahn',
      'en': 'Chocobo Race: Tutorial',
      'fr': 'Course d\'appentissage',
      'ja': 'チョコボレース：チュートリアル',
      'ko': '초코보 경주: 튜토리얼',
      'tc': '陸行鳥競賽：競賽教學'
    },
    'offsetX': 0,
    'offsetY': -690,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  418: {
    'exVersion': 1,
    'name': {
      'cn': '伊修加德基础层',
      'de': 'Fundamente',
      'en': 'Foundation',
      'fr': 'Ishgard - L\'Assise',
      'ja': 'イシュガルド：下層',
      'ko': '이슈가르드 하층',
      'tc': '伊修加爾德下層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 47
  },
  419: {
    'exVersion': 1,
    'name': {
      'cn': '伊修加德砥柱层',
      'de': 'Strebewerk',
      'en': 'The Pillars',
      'fr': 'Ishgard - Les Contreforts',
      'ja': 'イシュガルド：上層',
      'ko': '이슈가르드 상층',
      'tc': '伊修加爾德上層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 48
  },
  420: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '空中神域不获岛',
      'de': 'Nimmerreich',
      'en': 'Neverreap',
      'fr': 'Nalloncques',
      'ja': '神域浮島 ネバーリープ',
      'ko': '거두지 않는 섬',
      'tc': '空中神域不獲島'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  421: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '(6.1)圣教中枢伊修加德教皇厅',
      'de': '(6.1)Erzbasilika',
      'en': '(6.1)The Vault',
      'fr': '(6.1)La Voûte',
      'ja': '(6.1)強硬突入 イシュガルド教皇庁',
      'ko': '(6.1)이슈가르드 교황청'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  426: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '那布里亚勒斯讨伐战',
      'de': 'Chrysalis',
      'en': 'The Chrysalis',
      'fr': 'La Chrysalide',
      'ja': 'アシエン・ナプリアレス討伐戦',
      'ko': '아씨엔 나브리알레스 토벌전',
      'tc': '那布里亞勒斯討伐戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  430: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '博物战舰无限回廊',
      'de': 'Die Fraktal-Kontinuum',
      'en': 'The Fractal Continuum',
      'fr': 'Le Continuum fractal',
      'ja': '博物戦艦 フラクタル・コンティニアム',
      'ko': '무한연속 박물함',
      'tc': '博物戰艦無限回廊'
    },
    'offsetX': 0,
    'offsetY': -213,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  431: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '尘封秘岩（争夺战）',
      'de': 'Robbenholm (Eroberung)',
      'en': 'Seal Rock (Seize)',
      'fr': 'Le Rocher des tréfonds (invasion)',
      'ja': 'シールロック (争奪戦)',
      'ko': '봉인된 바위섬(쟁탈전)',
      'tc': '塵封秘岩（爭奪戰）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 59
  },
  432: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '罗波那歼灭战',
      'de': 'Götterdämmerung - Ravana',
      'en': 'Thok ast Thok (Hard)',
      'fr': 'Thok ast Thok (brutal)',
      'ja': '真ラーヴァナ討滅戦',
      'ko': '진 라바나 토벌전',
      'tc': '真 羅波那殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 57
  },
  434: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '冰雪废堡暮卫塔',
      'de': 'Abendrot-Wacht',
      'en': 'The Dusk Vigil',
      'fr': 'Le Vigile du Crépuscule',
      'ja': '廃砦捜索 ダスクヴィジル',
      'ko': '어스름 요새',
      'tc': '冰雪廢堡暮衛塔'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 42
  },
  435: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '(6.1)邪龙王座龙巢神殿',
      'de': '(6.1)Nest des Drachen',
      'en': '(6.1)The Aery',
      'fr': '(6.1)L\'Aire',
      'ja': '(6.1)邪竜血戦 ドラゴンズエアリー',
      'ko': '(6.1)용의 둥지'
    },
    'offsetX': -40,
    'offsetY': 55,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  436: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '俾斯麦歼灭战',
      'de': 'Götterdämmerung - Bismarck',
      'en': 'The Limitless Blue (Hard)',
      'fr': 'L\'Immensité bleue (brutal)',
      'ja': '真ビスマルク討滅戦',
      'ko': '진 비스마르크 토벌전',
      'tc': '真 俾斯麥殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 28
  },
  437: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '圆桌骑士歼灭战',
      'de': 'Singularitäts-Reaktor',
      'en': 'The Singularity Reactor',
      'fr': 'Le Réacteur de singularité',
      'ja': 'ナイツ・オブ・ラウンド討滅戦',
      'ko': '나이츠 오브 라운드 토벌전',
      'tc': '圓桌騎士殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 56
  },
  438: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '(6.2)血战苍穹魔科学研究所',
      'de': '(6.2)Ätherochemisches For<SoftHyphen/>schungs<SoftHyphen/>labor',
      'en': '(6.2)The Aetherochemical Research Facility',
      'fr': '(6.2)Le Laboratoire de magismologie',
      'ja': '(6.2)蒼天聖戦 魔科学研究所',
      'ko': '(6.2)마과학 연구소'
    },
    'offsetX': -18,
    'offsetY': 149,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  441: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '(6.1)天山绝顶索姆阿尔灵峰',
      'de': '(6.1)Sohm Al',
      'en': '(6.1)Sohm Al',
      'fr': '(6.1)Sohm Al',
      'ja': '(6.1)霊峰踏破 ソーム・アル',
      'ko': '(6.1)솜 알'
    },
    'offsetX': 185,
    'offsetY': 51,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  442: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 启动之章1',
      'de': 'Alexander - Faust des Vaters',
      'en': 'Alexander - The Fist of the Father',
      'fr': 'Alexander - Le Poing du Père',
      'ja': '機工城アレキサンダー：起動編1',
      'ko': '기공성 알렉산더: 기동편 1',
      'tc': '亞歷山大機神城 啟動之章1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  443: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 启动之章2',
      'de': 'Alexander - Elle des Vaters',
      'en': 'Alexander - The Cuff of the Father',
      'fr': 'Alexander - Le Poignet du Père',
      'ja': '機工城アレキサンダー：起動編2',
      'ko': '기공성 알렉산더: 기동편 2',
      'tc': '亞歷山大機神城 啟動之章2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  444: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 启动之章3',
      'de': 'Alexander - Arm des Vaters',
      'en': 'Alexander - The Arm of the Father',
      'fr': 'Alexander - Le Bras du Père',
      'ja': '機工城アレキサンダー：起動編3',
      'ko': '기공성 알렉산더: 기동편 3',
      'tc': '亞歷山大機神城 啟動之章3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  445: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 启动之章4',
      'de': 'Alexander - Last des Vaters',
      'en': 'Alexander - The Burden of the Father',
      'fr': 'Alexander - Le Fardeau du Père',
      'ja': '機工城アレキサンダー：起動編4',
      'ko': '기공성 알렉산더: 기동편 4',
      'tc': '亞歷山大機神城 啟動之章4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  446: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '罗波那歼殛战',
      'de': 'Zenit der Götter - Ravana',
      'en': 'Thok ast Thok (Extreme)',
      'fr': 'Thok ast Thok (extrême)',
      'ja': '極ラーヴァナ討滅戦',
      'ko': '극 라바나 토벌전',
      'tc': '極 羅波那殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 57
  },
  447: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '俾斯麦歼殛战',
      'de': 'Zenit der Götter - Bismarck',
      'en': 'The Limitless Blue (Extreme)',
      'fr': 'L\'Immensité bleue (extrême)',
      'ja': '極ビスマルク討滅戦',
      'ko': '극 비스마르크 토벌전',
      'tc': '極 俾斯麥殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 28
  },
  448: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '圆桌骑士幻想歼灭战',
      'de': 'Heldenlied von Thordans Fall',
      'en': 'The Minstrel\'s Ballad: Thordan\'s Reign',
      'fr': 'Le règne de Thordan',
      'ja': '蒼天幻想 ナイツ・オブ・ラウンド討滅戦',
      'ko': '극 나이츠 오브 라운드 토벌전',
      'tc': '蒼天幻想 圓桌騎士殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 56
  },
  449: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 启动之章1',
      'de': 'Alexander - Faust des Vaters (episch)',
      'en': 'Alexander - The Fist of the Father (Savage)',
      'fr': 'Alexander - Le Poing du Père (sadique)',
      'ja': '機工城アレキサンダー零式：起動編1',
      'ko': '기공성 알렉산더: 기동편(영웅) 1',
      'tc': '亞歷山大零式機神城 啟動之章1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  450: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 启动之章2',
      'de': 'Alexander - Elle des Vaters (episch)',
      'en': 'Alexander - The Cuff of the Father (Savage)',
      'fr': 'Alexander - Le Poignet du Père (sadique)',
      'ja': '機工城アレキサンダー零式：起動編2',
      'ko': '기공성 알렉산더: 기동편(영웅) 2',
      'tc': '亞歷山大零式機神城 啟動之章2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  451: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 启动之章3',
      'de': 'Alexander - Arm des Vaters (episch)',
      'en': 'Alexander - The Arm of the Father (Savage)',
      'fr': 'Alexander - Le Bras du Père (sadique)',
      'ja': '機工城アレキサンダー零式：起動編3',
      'ko': '기공성 알렉산더: 기동편(영웅) 3',
      'tc': '亞歷山大零式機神城 啟動之章3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  452: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 启动之章4',
      'de': 'Alexander - Last des Vaters (episch)',
      'en': 'Alexander - The Burden of the Father (Savage)',
      'fr': 'Alexander - Le Fardeau du Père (sadique)',
      'ja': '機工城アレキサンダー零式：起動編4',
      'ko': '기공성 알렉산더: 기동편(영웅) 4',
      'tc': '亞歷山大零式機神城 啟動之章4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  478: {
    'exVersion': 1,
    'name': {
      'cn': '田园郡',
      'de': 'Frohehalde',
      'en': 'Idyllshire',
      'fr': 'Idyllée',
      'ja': 'イディルシャイア',
      'ko': '이딜샤이어',
      'tc': '田園郡'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 55
  },
  506: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '萌宠之王：大赛对战（人机对战）',
      'de': 'Kampf der Trabanten: Turnier (gegen Arenameister)',
      'en': 'LoVM: Master Tournament',
      'fr': 'Bataille de tournoi contre l\'ordinateur',
      'ja': 'LoVM：大会対戦 (CPU対戦)',
      'ko': '꼬마 친구 공방전: 대회 대결(인공 지능 대결)',
      'tc': '萌寵之王：大賽對戰（電腦對戰）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  508: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '魔航船虚无方舟',
      'de': 'Die Nichts-Arche',
      'en': 'The Void Ark',
      'fr': 'L\'Arche du néant',
      'ja': '魔航船ヴォイドアーク',
      'ko': '보이드의 방주',
      'tc': '魔航船虛無方舟'
    },
    'offsetX': 289,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 37
  },
  510: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '地脉灵灯天狼星灯塔',
      'de': 'Pharos Sirius (schwer)',
      'en': 'Pharos Sirius (Hard)',
      'fr': 'Le Phare de Sirius (brutal)',
      'ja': '制圧巨塔 シリウス大灯台 (Hard)',
      'ko': '시리우스 대등대(어려움)',
      'tc': '地脈靈燈天狼星燈塔'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  511: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '草木庭园圣茉夏娜植物园',
      'de': 'Sankt Mocianne-Arboretum',
      'en': 'Saint Mocianne\'s Arboretum',
      'fr': 'L\'Arboretum Sainte-Mocianne',
      'ja': '草木庭園 聖モシャーヌ植物園',
      'ko': '성 모샨 식물원',
      'tc': '草木庭園聖茉夏娜植物園'
    },
    'offsetX': 40,
    'offsetY': 6,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  512: {
    'contentType': 23,
    'exVersion': 1,
    'name': {
      'cn': '云冠群岛白昼探索',
      'de': 'Das Diadem (leicht)',
      'en': 'The Diadem (Easy)',
      'fr': 'Le Diadème (facile)',
      'ja': '雲海探索 ディアデム諸島 (Easy)',
      'ko': '디아뎀 제도(쉬움)',
      'tc': '雲冠群島白晝探索'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 60
  },
  515: {
    'contentType': 23,
    'exVersion': 1,
    'name': {
      'cn': '云冠群岛夜晚探索',
      'de': 'Das Diadem (schwer)',
      'en': 'The Diadem (Hard)',
      'fr': 'Le Diadème (brutal)',
      'ja': '雲海探索 ディアデム諸島 (Hard)',
      'ko': '디아뎀 제도(어려움)',
      'tc': '雲冠群島夜晚探索'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 62
  },
  516: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '(6.2)星海空间颠倒塔',
      'de': '(6.2)Antiturm',
      'en': '(6.2)The Antitower',
      'fr': '(6.2)L\'Antitour',
      'ja': '(6.2)星海観測 逆さの塔',
      'ko': '(6.2)거꾸로 선 탑'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  517: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '萨菲洛特歼灭战',
      'de': 'Götterdämmerung - Sephirot',
      'en': 'Containment Bay S1T7',
      'fr': 'Unité de contention S1P7',
      'ja': '魔神セフィロト討滅戦',
      'ko': '마신 세피로트 토벌전',
      'tc': '魔神賽菲羅特殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 66
  },
  519: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '神圣遗迹无限城市街古迹',
      'de': 'Historisches Amdapor (schwer)',
      'en': 'The Lost City of Amdapor (Hard)',
      'fr': 'Les Vestiges de la cité d\'Amdapor (brutal)',
      'ja': '神聖遺跡 古アムダプール市街 (Hard)',
      'ko': '옛 암다포르 시가지(어려움)',
      'tc': '神聖遺跡無限城市街古跡'
    },
    'offsetX': 64,
    'offsetY': 315,
    'sizeFactor': 200,
    'weatherRate': 63
  },
  520: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 律动之章1',
      'de': 'Alexander - Faust des Sohnes',
      'en': 'Alexander - The Fist of the Son',
      'fr': 'Alexander - Le Poing du Fils',
      'ja': '機工城アレキサンダー：律動編1',
      'ko': '기공성 알렉산더: 율동편 1',
      'tc': '亞歷山大機神城 律動之章1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  521: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 律动之章2',
      'de': 'Alexander - Elle des Sohnes',
      'en': 'Alexander - The Cuff of the Son',
      'fr': 'Alexander - Le Poignet du Fils',
      'ja': '機工城アレキサンダー：律動編2',
      'ko': '기공성 알렉산더: 율동편 2',
      'tc': '亞歷山大機神城 律動之章2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  522: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 律动之章3',
      'de': 'Alexander - Arm des Sohnes',
      'en': 'Alexander - The Arm of the Son',
      'fr': 'Alexander - Le Bras du Fils',
      'ja': '機工城アレキサンダー：律動編3',
      'ko': '기공성 알렉산더: 율동편 3',
      'tc': '亞歷山大機神城 律動之章3'
    },
    'offsetX': -110,
    'offsetY': -170,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  523: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 律动之章4',
      'de': 'Alexander - Last des Sohnes',
      'en': 'Alexander - The Burden of the Son',
      'fr': 'Alexander - Le Fardeau du Fils',
      'ja': '機工城アレキサンダー：律動編4',
      'ko': '기공성 알렉산더: 율동편 4',
      'tc': '亞歷山大機神城 律動之章4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  524: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '萨菲洛特歼殛战',
      'de': 'Zenit der Götter - Sephirot',
      'en': 'Containment Bay S1T7 (Extreme)',
      'fr': 'Unité de contention S1P7 (extrême)',
      'ja': '極魔神セフィロト討滅戦',
      'ko': '극 마신 세피로트 토벌전',
      'tc': '極 魔神賽菲羅特殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 66
  },
  529: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 律动之章1',
      'de': 'Alexander - Faust des Sohnes (episch)',
      'en': 'Alexander - The Fist of the Son (Savage)',
      'fr': 'Alexander - Le Poing du Fils (sadique)',
      'ja': '機工城アレキサンダー零式：律動編1',
      'ko': '기공성 알렉산더: 율동편(영웅) 1',
      'tc': '亞歷山大零式機神城 律動之章1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  530: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 律动之章2',
      'de': 'Alexander - Elle des Sohnes (episch)',
      'en': 'Alexander - The Cuff of the Son (Savage)',
      'fr': 'Alexander - Le Poignet du Fils (sadique)',
      'ja': '機工城アレキサンダー零式：律動編2',
      'ko': '기공성 알렉산더: 율동편(영웅) 2',
      'tc': '亞歷山大零式機神城 律動之章2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  531: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 律动之章3',
      'de': 'Alexander - Arm des Sohnes (episch)',
      'en': 'Alexander - The Arm of the Son (Savage)',
      'fr': 'Alexander - Le Bras du Fils (sadique)',
      'ja': '機工城アレキサンダー零式：律動編3',
      'ko': '기공성 알렉산더: 율동편(영웅) 3',
      'tc': '亞歷山大零式機神城 律動之章3'
    },
    'offsetX': -110,
    'offsetY': -170,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  532: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 律动之章4',
      'de': 'Alexander - Last des Sohnes (episch)',
      'en': 'Alexander - The Burden of the Son (Savage)',
      'fr': 'Alexander - Le Fardeau du Fils (sadique)',
      'ja': '機工城アレキサンダー零式：律動編4',
      'ko': '기공성 알렉산더: 율동편(영웅) 4',
      'tc': '亞歷山大零式機神城 律動之章4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  533: {
    'contentType': 7,
    'exVersion': 1,
    'name': {
      'cn': '四国联合军演',
      'de': 'Truppenübung der Eorzäischen Allianz',
      'en': 'A Spectacle for the Ages',
      'fr': 'La grande manœuvre éorzéenne',
      'ja': '四国合同演習',
      'ko': '4개국 합동 훈련',
      'tc': '四國聯合軍演'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  537: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '躲避范围攻击',
      'de': 'Flächenangriffen ausweichen',
      'en': 'Avoid Area of Effect Attacks',
      'fr': 'Éviter les attaques à aire d\'effet',
      'ja': '範囲攻撃を避けよう！',
      'ko': '범위 공격을 피하자!',
      'tc': '躲避範圍攻擊'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  538: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '掌握仇恨连击',
      'de': 'Mit Kombos Feindseligkeit auf sich ziehen',
      'en': 'Execute a Combo to Increase Enmity',
      'fr': 'Générer de l\'inimitié avec un combo',
      'ja': 'コンボで敵視を集めよう！',
      'ko': '콤보를 이어 적개심을 끌자!',
      'tc': '掌握仇恨連擊'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  539: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '控制敌人的仇恨',
      'de': 'Kombos im Kampf einsetzen',
      'en': 'Execute a Combo in Battle',
      'fr': 'Effectuer le combo en combat',
      'ja': '実戦でコンボに挑戦しよう！',
      'ko': '실전에서 콤보를 사용해보자!',
      'tc': '控制敵人的仇恨'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  540: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '控制多个敌人的仇恨',
      'de': 'Feindseligkeit mehrerer Gegner auf sich ziehen',
      'en': 'Accrue Enmity from Multiple Targets',
      'fr': 'Attirer l\'inimitié de plusieurs ennemis sur soi',
      'ja': '複数の敵から敵視を集めよう！',
      'ko': '다수의 적에게서 적개심을 끌자!',
      'tc': '控制多個敵人的仇恨'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  541: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '实战控制多个敌人的仇恨',
      'de': 'Gegen mehrere Gegner auf einmal kämpfen',
      'en': 'Engage Multiple Targets',
      'fr': 'Affronter plusieurs ennemis',
      'ja': '実戦で複数の敵と戦ってみよう！',
      'ko': '실전에서 다수의 적과 싸워보자!',
      'tc': '實戰控制多個敵人的仇恨'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  542: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '控制远处敌人的仇恨',
      'de': 'Aus der Ferne Feindseligkeit auf sich ziehen',
      'en': 'Execute a Ranged Attack to Increase Enmity',
      'fr': 'Générer de l\'inimitié à distance',
      'ja': '遠距離から敵視を集めよう！',
      'ko': '멀리서 적개심을 끌자!',
      'tc': '控制遠處敵人的仇恨'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  543: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '留心增援的敌人',
      'de': 'Feindliche Verstärkung aufhalten',
      'en': 'Engage Enemy Reinforcements',
      'fr': 'Faire face à des renforts ennemis',
      'ja': '敵の増援に対応しよう！',
      'ko': '적 지원군에 대처하자!',
      'tc': '留心增援的敵人'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  544: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '配合防护职业打倒单个敌人',
      'de': 'Gegner gemeinsam besiegen',
      'en': 'Assist Allies in Defeating a Target',
      'fr': 'Vaincre un ennemi en assistant des alliés',
      'ja': '味方と協力して敵を倒そう！',
      'ko': '파티원과 협력하여 적을 물리치자!',
      'tc': '配合防護職業打倒單個敵人'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  545: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '配合防护职业打倒多个敌人',
      'de': 'Den Gegner eines Verbündeten besiegen',
      'en': 'Defeat an Occupied Target',
      'fr': 'Vaincre un ennemi occupé par un allié',
      'ja': '味方が引きつけている敵を倒そう！',
      'ko': '파티원과 같은 적을 공격하자!',
      'tc': '配合防護職業打倒多個敵人'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  546: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '躲避范围攻击的同时进行战斗',
      'de': 'Angriffen ausweichen',
      'en': 'Avoid Engaged Targets',
      'fr': 'Combattre en évitant les attaques ennemies',
      'ja': '敵の攻撃を避けながら戦おう！',
      'ko': '적의 공격을 피하면서 싸우자!',
      'tc': '躲避範圍攻擊的同時進行戰鬥'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  548: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '灵活运用场地机关',
      'de': 'Mit dem Gelände interagieren',
      'en': 'Interact with the Battlefield',
      'fr': 'Interagir avec le décor en combat',
      'ja': 'ギミックを活用して戦おう！',
      'ko': '특수 장치를 활용하며 싸우자!',
      'tc': '靈活運用場地機關'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  549: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '治疗防护职业',
      'de': 'Verbündete heilen',
      'en': 'Heal an Ally',
      'fr': 'Soigner un allié',
      'ja': '味方を回復しよう！',
      'ko': '파티원을 회복시키자!',
      'tc': '治療防護職業'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  550: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '治疗小队队员',
      'de': 'Mehrere Verbündete heilen',
      'en': 'Heal Multiple Allies',
      'fr': 'Soigner plusieurs alliés',
      'ja': '複数の味方を回復しよう！',
      'ko': '다수의 파티원을 회복시키자!',
      'tc': '治療小隊隊員'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  552: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '最终训练',
      'de': 'Letzte Übung',
      'en': 'Final Exercise',
      'fr': 'Exercice final',
      'ja': '最終訓練！',
      'ko': '마지막 훈련!',
      'tc': '最終訓練'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  554: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '荣誉野（碎冰战）',
      'de': 'Feld der Ehre (Zersplitterung)',
      'en': 'The Fields of Glory (Shatter)',
      'fr': 'Les Champs de la Gloire (brise-glace)',
      'ja': 'フィールド・オブ・グローリー (砕氷戦)',
      'ko': '영광의 평원(쇄빙전)',
      'tc': '榮譽野（碎冰戰）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 67
  },
  555: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '(6.2)天龙宫殿忆罪宫',
      'de': '(6.2)Sohr Khai',
      'en': '(6.2)Sohr Khai',
      'fr': '(6.2)Sohr Khai',
      'ja': '(6.2)天竜宮殿 ソール・カイ',
      'ko': '(6.2)소르 카이'
    },
    'offsetX': 370,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  556: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '禁忌城邦玛哈',
      'de': 'Die Stadt der Tränen',
      'en': 'The Weeping City of Mhach',
      'fr': 'La Cité défendue de Mhach',
      'ja': '禁忌都市マハ',
      'ko': '금기도시 마하',
      'tc': '禁忌城邦瑪哈'
    },
    'offsetX': -40,
    'offsetY': -40,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  557: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '黑涡传说破舰岛',
      'de': 'Schiffbrecher-Insel (schwer)',
      'en': 'Hullbreaker Isle (Hard)',
      'fr': 'L\'Île de Crèvecarène (brutal)',
      'ja': '黒渦伝説 ハルブレーカー・アイル (Hard)',
      'ko': '난파선의 섬(어려움)',
      'tc': '黑渦傳說破艦島'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 68
  },
  558: {
    'contentType': 9,
    'exVersion': 0,
    'name': {
      'cn': '水城宝物库',
      'de': 'Aquapolis',
      'en': 'The Aquapolis',
      'fr': 'L\'Aquapole',
      'ja': '宝物庫 アクアポリス',
      'ko': '보물고 아쿠아폴리스',
      'tc': '水城寶物庫'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  559: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '尼德霍格征龙战',
      'de': 'Der letzte Schicksalsweg',
      'en': 'The Final Steps of Faith',
      'fr': 'La Dernière avancée de la Foi',
      'ja': 'ニーズヘッグ征竜戦',
      'ko': '니드호그 토벌전',
      'tc': '尼德霍格征龍戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 28
  },
  560: {
    'contentType': 7,
    'exVersion': 1,
    'name': {
      'cn': '雷古拉·范·休著斯追击战',
      'de': 'Blutiges Wieder­sehen',
      'en': 'A Bloody Reunion',
      'fr': 'Course-poursuite dans le laboratoire',
      'ja': 'レグラ・ヴァン・ヒュドルス追撃戦',
      'ko': '레굴라 반 히드루스 추격전',
      'tc': '雷古拉·范·休著斯追擊戰'
    },
    'offsetX': -18,
    'offsetY': 149,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  561: {
    'contentType': 21,
    'exVersion': 0,
    'name': {
      'cn': '死者宫殿 地下1～10层',
      'de': 'Palast der Toten (Ebenen 1-10)',
      'en': 'The Palace of the Dead (Floors 1-10)',
      'fr': 'Le Palais des morts (sous-sols 1-10)',
      'ja': '死者の宮殿 B1～B10',
      'ko': '망자의 궁전 B1~B10',
      'tc': '死者宮殿 地下1～10層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  562: {
    'contentType': 21,
    'exVersion': 0,
    'name': {
      'cn': '死者宫殿 地下11～20层',
      'de': 'Palast der Toten (Ebenen 11-20)',
      'en': 'The Palace of the Dead (Floors 11-20)',
      'fr': 'Le Palais des morts (sous-sols 11-20)',
      'ja': '死者の宮殿 B11～B20',
      'ko': '망자의 궁전 B11~B20',
      'tc': '死者宮殿 地下11～20層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  563: {
    'contentType': 21,
    'exVersion': 0,
    'name': {
      'cn': '死者宫殿 地下21～30层',
      'de': 'Palast der Toten (Ebenen 21-30)',
      'en': 'The Palace of the Dead (Floors 21-30)',
      'fr': 'Le Palais des morts (sous-sols 21-30)',
      'ja': '死者の宮殿 B21～B30',
      'ko': '망자의 궁전 B21~B30',
      'tc': '死者宮殿 地下21～30層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  564: {
    'contentType': 21,
    'exVersion': 0,
    'name': {
      'cn': '死者宫殿 地下31～40层',
      'de': 'Palast der Toten (Ebenen 31-40)',
      'en': 'The Palace of the Dead (Floors 31-40)',
      'fr': 'Le Palais des morts (sous-sols 31-40)',
      'ja': '死者の宮殿 B31～B40',
      'ko': '망자의 궁전 B31~B40',
      'tc': '死者宮殿 地下31～40層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  565: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下41～50层',
      'de': 'Palast der Toten (Ebenen 41-50)',
      'en': 'The Palace of the Dead (Floors 41-50)',
      'fr': 'Le Palais des morts (sous-sols 41-50)',
      'ja': '死者の宮殿 B41～B50',
      'ko': '망자의 궁전 B41~B50',
      'tc': '死者宮殿 地下41～50層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  566: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '尼德霍格传奇征龙战',
      'de': 'Das Lied von Nidhoggs letztem Ruf',
      'en': 'The Minstrel\'s Ballad: Nidhogg\'s Rage',
      'fr': 'L\'ire de Nidhogg',
      'ja': '極ニーズヘッグ征竜戦',
      'ko': '극 니드호그 토벌전',
      'tc': '極 尼德霍格征龍戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 28
  },
  571: {
    'contentType': 22,
    'exVersion': 0,
    'name': {
      'cn': '亡灵府邸闹鬼庄园',
      'de': 'Das Geisterschloss',
      'en': 'The Haunted Manor',
      'fr': 'Le Manoir hanté',
      'ja': '亡霊屋敷 ホーンテッドマナー',
      'ko': '유령의 집',
      'tc': '亡靈府邸鬧鬼莊園'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  572: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '(6.2)险峻峡谷塞尔法特尔溪谷',
      'de': '(6.2)Xelphatol',
      'en': '(6.2)Xelphatol',
      'fr': '(6.2)Xelphatol',
      'ja': '(6.2)峻厳渓谷 ゼルファトル',
      'ko': '(6.2)젤파톨'
    },
    'offsetX': -148,
    'offsetY': 35,
    'sizeFactor': 200,
    'weatherRate': 40
  },
  576: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '索菲娅歼灭战',
      'de': 'Götterdämmerung - Sophia',
      'en': 'Containment Bay P1T6',
      'fr': 'Unité de contention P1P6',
      'ja': '女神ソフィア討滅戦',
      'ko': '여신 소피아 토벌전',
      'tc': '女神索菲亞殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 69
  },
  577: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '索菲娅歼殛战',
      'de': 'Zenit der Götter - Sophia',
      'en': 'Containment Bay P1T6 (Extreme)',
      'fr': 'Unité de contention P1P6 (extrême)',
      'ja': '極女神ソフィア討滅戦',
      'ko': '극 여신 소피아 토벌전',
      'tc': '極 女神索菲亞殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 69
  },
  578: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '秘本宝库迦巴勒幻想图书馆',
      'de': 'Große Gubal-Bibliothek (schwer)',
      'en': 'The Great Gubal Library (Hard)',
      'fr': 'La Grande bibliothèque de Gubal (brutal)',
      'ja': '稀書回収 グブラ幻想図書館 (Hard)',
      'ko': '구브라 환상도서관(어려움)',
      'tc': '秘本寶庫迦巴勒幻想圖書館'
    },
    'offsetX': 116,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  579: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '九宫幻卡：幻卡对局室',
      'de': 'Triple Triad: Weltensalon',
      'en': 'The Triple Triad Battlehall',
      'fr': 'Arène Triple Triade',
      'ja': 'トリプルトライアド：カードバトルルーム',
      'ko': '트리플 트라이어드: 카드 대결장',
      'tc': '九宮幻卡：幻卡對局室'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 800,
    'weatherRate': 0
  },
  580: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 天动之章1',
      'de': 'Alexander - Augen des Schöpfers',
      'en': 'Alexander - The Eyes of the Creator',
      'fr': 'Alexander - Les Yeux du Créateur',
      'ja': '機工城アレキサンダー：天動編1',
      'ko': '기공성 알렉산더: 천동편 1',
      'tc': '亞歷山大機神城 天動之章1'
    },
    'offsetX': 75,
    'offsetY': 14,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  581: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 天动之章2',
      'de': 'Alexander - Atem des Schöpfers',
      'en': 'Alexander - The Breath of the Creator',
      'fr': 'Alexander - Le Souffle du Créateur',
      'ja': '機工城アレキサンダー：天動編2',
      'ko': '기공성 알렉산더: 천동편 2',
      'tc': '亞歷山大機神城 天動之章2'
    },
    'offsetX': 0,
    'offsetY': -80,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  582: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 天动之章3',
      'de': 'Alexander - Herz des Schöpfers',
      'en': 'Alexander - The Heart of the Creator',
      'fr': 'Alexander - Le Cœur du Créateur',
      'ja': '機工城アレキサンダー：天動編3',
      'ko': '기공성 알렉산더: 천동편 3',
      'tc': '亞歷山大機神城 天動之章3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  583: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大机神城 天动之章4',
      'de': 'Alexander - Seele des Schöpfers',
      'en': 'Alexander - The Soul of the Creator',
      'fr': 'Alexander - L\'Âme du Créateur',
      'ja': '機工城アレキサンダー：天動編4',
      'ko': '기공성 알렉산더: 천동편 4',
      'tc': '亞歷山大機神城 天動之章4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  584: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 天动之章1',
      'de': 'Alexander - Augen des Schöpfers (episch)',
      'en': 'Alexander - The Eyes of the Creator (Savage)',
      'fr': 'Alexander - Les Yeux du Créateur (sadique)',
      'ja': '機工城アレキサンダー零式：天動編1',
      'ko': '기공성 알렉산더: 천동편(영웅) 1',
      'tc': '亞歷山大零式機神城 天動之章1'
    },
    'offsetX': 75,
    'offsetY': 14,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  585: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 天动之章2',
      'de': 'Alexander - Atem des Schöpfers (episch)',
      'en': 'Alexander - The Breath of the Creator (Savage)',
      'fr': 'Alexander - Le Souffle du Créateur (sadique)',
      'ja': '機工城アレキサンダー零式：天動編2',
      'ko': '기공성 알렉산더: 천동편(영웅) 2',
      'tc': '亞歷山大零式機神城 天動之章2'
    },
    'offsetX': 0,
    'offsetY': -80,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  586: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 天动之章3',
      'de': 'Alexander - Herz des Schöpfers (episch)',
      'en': 'Alexander - The Heart of the Creator (Savage)',
      'fr': 'Alexander - Le Cœur du Créateur (sadique)',
      'ja': '機工城アレキサンダー零式：天動編3',
      'ko': '기공성 알렉산더: 천동편(영웅) 3',
      'tc': '亞歷山大零式機神城 天動之章3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  587: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '亚历山大零式机神城 天动之章4',
      'de': 'Alexander - Seele des Schöpfers (episch)',
      'en': 'Alexander - The Soul of the Creator (Savage)',
      'fr': 'Alexander - L\'Âme du Créateur (sadique)',
      'ja': '機工城アレキサンダー零式：天動編4',
      'ko': '기공성 알렉산더: 천동편(영웅) 4',
      'tc': '亞歷山大零式機神城 天動之章4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  589: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '萌宠之王：玩家对战（绩点赛）',
      'de': 'Kampf der Trabanten: Gegen Spieler (um RP)',
      'en': 'LoVM: Player Battle (RP)',
      'fr': 'Bataille simple contre un joueur (avec PR)',
      'ja': 'LoVM：プレイヤー対戦 (RP変動あり)',
      'ko': '꼬마 친구 공방전: 플레이어 대결(RP 변동 있음)',
      'tc': '萌寵之王：PvP（績點賽）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  590: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '萌宠之王：大赛对战（玩家对战）',
      'de': 'Kampf der Trabanten: Turnier (gegen Spieler)',
      'en': 'LoVM: Tournament',
      'fr': 'Bataille de tournoi contre des joueurs',
      'ja': 'LoVM：大会対戦 (プレイヤー対戦）',
      'ko': '꼬마 친구 공방전: 대회 대결(플레이어 대결)',
      'tc': '萌寵之王：大賽對戰（PvP）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  591: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '萌宠之王：玩家对战（无绩点赛）',
      'de': 'Kampf der Trabanten: Gegen Spieler (ohne RP)',
      'en': 'LoVM: Player Battle (Non-RP)',
      'fr': 'Bataille simple contre un joueur (sans PR)',
      'ja': 'LoVM：プレイヤー対戦 (RP変動なし)',
      'ko': '꼬마 친구 공방전: 플레이어 대결(RP 변동 없음)',
      'tc': '萌寵之王：PvP（無績點賽）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  592: {
    'contentType': 7,
    'exVersion': 1,
    'name': {
      'cn': '纠缠不清的宿命',
      'de': 'Weltenübergreifendes Schicksal',
      'en': 'One Life for One World',
      'fr': 'Destins entrecroisés',
      'ja': '絡み合う宿命',
      'ko': '뒤얽히는 숙명',
      'tc': '糾纏不清的宿命'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 28
  },
  593: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下51～60层',
      'de': 'Palast der Toten (Ebenen 51 - 60)',
      'en': 'The Palace of the Dead (Floors 51-60)',
      'fr': 'Le Palais des morts (sous-sols 51-60)',
      'ja': '死者の宮殿 B51～B60',
      'ko': '망자의 궁전 B51~B60',
      'tc': '死者宮殿 地下51～60層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  594: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下61～70层',
      'de': 'Palast der Toten (Ebenen 61 - 70)',
      'en': 'The Palace of the Dead (Floors 61-70)',
      'fr': 'Le Palais des morts (sous-sols 61-70)',
      'ja': '死者の宮殿 B61～B70',
      'ko': '망자의 궁전 B61~B70',
      'tc': '死者宮殿 地下61～70層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  595: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下71～80层',
      'de': 'Palast der Toten (Ebenen 71 - 80)',
      'en': 'The Palace of the Dead (Floors 71-80)',
      'fr': 'Le Palais des morts (sous-sols 71-80)',
      'ja': '死者の宮殿 B71～B80',
      'ko': '망자의 궁전 B71~B80',
      'tc': '死者宮殿 地下71～80層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  596: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下81～90层',
      'de': 'Palast der Toten (Ebenen 81 - 90)',
      'en': 'The Palace of the Dead (Floors 81-90)',
      'fr': 'Le Palais des morts (sous-sols 81-90)',
      'ja': '死者の宮殿 B81～B90',
      'ko': '망자의 궁전 B81~B90',
      'tc': '死者宮殿 地下81～90層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  597: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下91～100层',
      'de': 'Palast der Toten (Ebenen 91 - 100)',
      'en': 'The Palace of the Dead (Floors 91-100)',
      'fr': 'Le Palais des morts (sous-sols 91-100)',
      'ja': '死者の宮殿 B91～B100',
      'ko': '망자의 궁전 B91~B100',
      'tc': '死者宮殿 地下91～100層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  598: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下101～110层',
      'de': 'Palast der Toten (Ebenen 101 - 110)',
      'en': 'The Palace of the Dead (Floors 101-110)',
      'fr': 'Le Palais des morts (sous-sols 101-110)',
      'ja': '死者の宮殿 B101～B110',
      'ko': '망자의 궁전 B101~B110',
      'tc': '死者宮殿 地下101～110層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  599: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下111～120层',
      'de': 'Palast der Toten (Ebenen 111 - 120)',
      'en': 'The Palace of the Dead (Floors 111-120)',
      'fr': 'Le Palais des morts (sous-sols 111-120)',
      'ja': '死者の宮殿 B111～B120',
      'ko': '망자의 궁전 B111~B120',
      'tc': '死者宮殿 地下111～120層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  600: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下121～130层',
      'de': 'Palast der Toten (Ebenen 121 - 130)',
      'en': 'The Palace of the Dead (Floors 121-130)',
      'fr': 'Le Palais des morts (sous-sols 121-130)',
      'ja': '死者の宮殿 B121～B130',
      'ko': '망자의 궁전 B121~B130',
      'tc': '死者宮殿 地下121～130層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  601: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下131～140层',
      'de': 'Palast der Toten (Ebenen 131 - 140)',
      'en': 'The Palace of the Dead (Floors 131-140)',
      'fr': 'Le Palais des morts (sous-sols 131-140)',
      'ja': '死者の宮殿 B131～B140',
      'ko': '망자의 궁전 B131~B140',
      'tc': '死者宮殿 地下131～140層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  602: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下141～150层',
      'de': 'Palast der Toten (Ebenen 141 - 150)',
      'en': 'The Palace of the Dead (Floors 141-150)',
      'fr': 'Le Palais des morts (sous-sols 141-150)',
      'ja': '死者の宮殿 B141～B150',
      'ko': '망자의 궁전 B141~B150',
      'tc': '死者宮殿 地下141～150層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  603: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下151～160层',
      'de': 'Palast der Toten (Ebenen 151 - 160)',
      'en': 'The Palace of the Dead (Floors 151-160)',
      'fr': 'Le Palais des morts (sous-sols 151-160)',
      'ja': '死者の宮殿 B151～B160',
      'ko': '망자의 궁전 B151~B160',
      'tc': '死者宮殿 地下151～160層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  604: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下161～170层',
      'de': 'Palast der Toten (Ebenen 161 - 170)',
      'en': 'The Palace of the Dead (Floors 161-170)',
      'fr': 'Le Palais des morts (sous-sols 161-170)',
      'ja': '死者の宮殿 B161～B170',
      'ko': '망자의 궁전 B161~B170',
      'tc': '死者宮殿 地下161～170層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  605: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下171～180层',
      'de': 'Palast der Toten (Ebenen 171 - 180)',
      'en': 'The Palace of the Dead (Floors 171-180)',
      'fr': 'Le Palais des morts (sous-sols 171-180)',
      'ja': '死者の宮殿 B171～B180',
      'ko': '망자의 궁전 B171~B180',
      'tc': '死者宮殿 地下171～180層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  606: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下181～190层',
      'de': 'Palast der Toten (Ebenen 181 - 190)',
      'en': 'The Palace of the Dead (Floors 181-190)',
      'fr': 'Le Palais des morts (sous-sols 181-190)',
      'ja': '死者の宮殿 B181～B190',
      'ko': '망자의 궁전 B181~B190',
      'tc': '死者宮殿 地下181～190層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  607: {
    'contentType': 21,
    'exVersion': 1,
    'name': {
      'cn': '死者宫殿 地下191～200层',
      'de': 'Palast der Toten (Ebenen 191 - 200)',
      'en': 'The Palace of the Dead (Floors 191-200)',
      'fr': 'Le Palais des morts (sous-sols 191-200)',
      'ja': '死者の宮殿 B191～B200',
      'ko': '망자의 궁전 B191~B200',
      'tc': '死者宮殿 地下191～200層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  612: {
    'exVersion': 2,
    'name': {
      'cn': '基拉巴尼亚边区',
      'de': 'Abanisches Grenzland',
      'en': 'The Fringes',
      'fr': 'Les Marges',
      'ja': 'ギラバニア辺境地帯',
      'ko': '기라바니아 변방지대',
      'tc': '基拉巴尼亞邊區'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 79
  },
  613: {
    'exVersion': 2,
    'name': {
      'cn': '红玉海',
      'de': 'Rubinsee',
      'en': 'The Ruby Sea',
      'fr': 'Mer de Rubis',
      'ja': '紅玉海',
      'ko': '홍옥해',
      'tc': '紅玉海'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 83
  },
  614: {
    'exVersion': 2,
    'name': {
      'cn': '延夏',
      'de': 'Yanxia',
      'en': 'Yanxia',
      'fr': 'Yanxia',
      'ja': 'ヤンサ',
      'ko': '얀샤',
      'tc': '延夏'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 84
  },
  615: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '(6.2)坚牢铁壁巴埃萨长城',
      'de': '(6.2)Baelsar-Wall',
      'en': '(6.2)Baelsar\'s Wall',
      'fr': '(6.2)La Muraille de Baelsar',
      'ja': '(6.2)巨大防壁 バエサルの長城',
      'ko': '(6.2)바일사르 장성'
    },
    'offsetX': 182,
    'offsetY': 32,
    'sizeFactor': 200,
    'weatherRate': 40
  },
  616: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '海底宫殿紫水宫',
      'de': 'Shisui',
      'en': 'Shisui of the Violet Tides',
      'fr': 'Le Palais aux Marées violettes',
      'ja': '海底宮殿 紫水宮',
      'ko': '시스이 궁',
      'tc': '海底宮殿紫水宮'
    },
    'offsetX': 0,
    'offsetY': 35,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  617: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '天山深境索姆阿尔灵峰',
      'de': 'Sohm Al (schwer)',
      'en': 'Sohm Al (Hard)',
      'fr': 'Sohm Al (brutal)',
      'ja': '霊峰浄化 ソーム・アル (Hard)',
      'ko': '솜 알(어려움)',
      'tc': '天山深境索姆阿爾靈峰'
    },
    'offsetX': 128,
    'offsetY': -32,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  620: {
    'exVersion': 2,
    'name': {
      'cn': '基拉巴尼亚山区',
      'de': 'Die Zinnen',
      'en': 'The Peaks',
      'fr': 'Les Pics',
      'ja': 'ギラバニア山岳地帯',
      'ko': '기라바니아 산악지대',
      'tc': '基拉巴尼亞山區'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 80
  },
  621: {
    'exVersion': 2,
    'name': {
      'cn': '基拉巴尼亚湖区',
      'de': 'Das Fenn',
      'en': 'The Lochs',
      'fr': 'Les Lacs',
      'ja': 'ギラバニア湖畔地帯',
      'ko': '기라바니아 호반지대',
      'tc': '基拉巴尼亞湖區'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 81
  },
  622: {
    'exVersion': 2,
    'name': {
      'cn': '太阳神草原',
      'de': 'Azim-Steppe',
      'en': 'The Azim Steppe',
      'fr': 'Steppe d\'Azim',
      'ja': 'アジムステップ',
      'ko': '아짐 대초원',
      'tc': '太陽神草原'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 85
  },
  623: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '(6.3)试炼行路巴儿达木霸道',
      'de': '(6.3)Bardams Probe',
      'en': '(6.3)Bardam\'s Mettle',
      'fr': '(6.3)La Force de Bardam',
      'ja': '(6.3)伝統試練 バルダム覇道',
      'ko': '(6.3)바르담 패도'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  624: {
    'contentType': 23,
    'exVersion': 1,
    'name': {
      'cn': '云冠群岛白昼探索（狩猎专用）',
      'de': 'Das Diadem - Jagdgründe (leicht)',
      'en': 'The Diadem Hunting Grounds (Easy)',
      'fr': 'Le Diadème : terrains de chasse (facile)',
      'ja': '雲海探索 ディアデム諸島：狩猟限定 (Easy)',
      'ko': '디아뎀 제도: 전투 한정(쉬움)',
      'tc': '雲冠群島白晝探索（狩獵專用）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 60
  },
  625: {
    'contentType': 23,
    'exVersion': 1,
    'name': {
      'cn': '云冠群岛黄昏探索（狩猎专用）',
      'de': 'Das Diadem - Jagdgründe',
      'en': 'The Diadem Hunting Grounds',
      'fr': 'Le Diadème : terrains de chasse',
      'ja': '雲海探索 ディアデム諸島：狩猟限定',
      'ko': '디아뎀 제도: 전투 한정',
      'tc': '雲冠群島黃昏探索（狩獵專用）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 61
  },
  626: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '(6.3)漂流海域妖歌海',
      'de': '(6.3)Sirenen-See',
      'en': '(6.3)The Sirensong Sea',
      'fr': '(6.3)La Mer du Chant des sirènes',
      'ja': '(6.3)漂流海域 セイレーン海',
      'ko': '(6.3)세이렌 해'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 36
  },
  627: {
    'contentType': 5,
    'exVersion': 1,
    'name': {
      'cn': '影之国',
      'de': 'Dun Scaith',
      'en': 'Dun Scaith',
      'fr': 'Dun Scaith',
      'ja': '影の国ダン・スカー',
      'ko': '둔 스카',
      'tc': '影之國'
    },
    'offsetX': -350,
    'offsetY': -400,
    'sizeFactor': 200,
    'weatherRate': 58
  },
  628: {
    'exVersion': 2,
    'name': {
      'cn': '黄金港',
      'de': 'Kugane',
      'en': 'Kugane',
      'fr': 'Kugane',
      'ja': 'クガネ',
      'ko': '쿠가네',
      'tc': '黃金港'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 82
  },
  630: {
    'contentType': 23,
    'exVersion': 0,
    'name': {
      'cn': '云冠群岛战争神猎场',
      'de': 'Das Diadem - Halones Prüfung',
      'en': 'The Diadem - Trials of the Fury',
      'fr': 'Le Diadème - Épreuves de Halone',
      'ja': '雲海探索 ディアデム諸島 (狩猟)',
      'ko': '디아뎀 제도: 전투',
      'tc': '雲冠群島戰爭神獵場'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  633: {
    'contentType': 7,
    'exVersion': 1,
    'name': {
      'cn': '加尔提诺平原遭遇战',
      'de': 'Heliodrom',
      'en': 'The Carteneau Flats: Heliodrome',
      'fr': 'Rixe à l\'Héliodrome',
      'ja': 'カルテノー平原遭遇戦',
      'ko': '카르테노 평원 조우전',
      'tc': '加爾提諾平原遭遇戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  635: {
    'exVersion': 2,
    'name': {
      'cn': '神拳痕',
      'de': 'Rhalgrs Wacht',
      'en': 'Rhalgr\'s Reach',
      'fr': 'L\'Étendue de Rhalgr',
      'ja': 'ラールガーズリーチ',
      'ko': '랄거의 손길',
      'tc': '神拳痕'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 78
  },
  637: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '祖尔宛歼灭战',
      'de': 'Götterdämmerung - Zurvan',
      'en': 'Containment Bay Z1T9',
      'fr': 'Unité de contention Z1P9',
      'ja': '鬼神ズルワーン討滅戦',
      'ko': '귀신 주르반 토벌전',
      'tc': '鬼神祖爾宛殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 75
  },
  638: {
    'contentType': 4,
    'exVersion': 1,
    'name': {
      'cn': '祖尔宛歼殛战',
      'de': 'Zenit der Götter - Zurvan',
      'en': 'Containment Bay Z1T9 (Extreme)',
      'fr': 'Unité de contention Z1P9 (extrême)',
      'ja': '極鬼神ズルワーン討滅戦',
      'ko': '극 귀신 주르반 토벌전',
      'tc': '極 鬼神祖爾宛殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 75
  },
  656: {
    'contentType': 23,
    'exVersion': 1,
    'name': {
      'cn': '云冠群岛丰饶神福地',
      'de': 'Das Diadem - Nophicas Prüfung',
      'en': 'The Diadem - Trials of the Matron',
      'fr': 'Le Diadème - Épreuves de Nophica',
      'ja': '雲海探索 ディアデム諸島 (採集)',
      'ko': '디아뎀 제도: 채집',
      'tc': '雲冠群島豐饒神福地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 71
  },
  660: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '(6.3)解放决战多玛王城',
      'de': '(6.3)Burg Doma',
      'en': '(6.3)Doma Castle',
      'fr': '(6.3)Le Château de Doma',
      'ja': '(6.3)解放決戦 ドマ城',
      'ko': '(6.3)도마 성'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  661: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '(6.3)巨炮要塞帝国白山堡',
      'de': '(6.3)Castrum Abania',
      'en': '(6.3)Castrum Abania',
      'fr': '(6.3)Castrum Abania',
      'ja': '(6.3)巨砲要塞 カストルム・アバニア',
      'ko': '(6.3)카스트룸 아바니아'
    },
    'offsetX': 72,
    'offsetY': -186,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  662: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '恶党孤城黄金阁',
      'de': 'Schloss Kugane',
      'en': 'Kugane Castle',
      'fr': 'Le Château de Kugane',
      'ja': '悪党成敗 クガネ城',
      'ko': '쿠가네 성',
      'tc': '惡黨孤城黃金閣'
    },
    'offsetX': 70,
    'offsetY': 33,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  663: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '修行古刹星导寺',
      'de': 'Tempel der Faust',
      'en': 'The Temple of the Fist',
      'fr': 'Le Temple du Poing',
      'ja': '壊神修行 星導山寺院',
      'ko': '성도산 사원',
      'tc': '修行古剎星導寺'
    },
    'offsetX': -427,
    'offsetY': -314,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  665: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '鱼道现身！',
      'de': 'Ein zweifelhaftes Angebot',
      'en': 'It\'s Probably a Trap',
      'fr': 'Un drôle de Namazu',
      'ja': 'ギョドウ現る！',
      'ko': '교도 등장!',
      'tc': '魚道現身！'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  674: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '须佐之男歼灭战',
      'de': 'Götterdämmerung - Susano',
      'en': 'The Pool of Tribute',
      'fr': 'La Crique aux tributs',
      'ja': 'スサノオ討滅戦',
      'ko': '스사노오 토벌전',
      'tc': '須佐之男殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 77
  },
  677: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '须佐之男歼殛战',
      'de': 'Zenit der Götter - Susano',
      'en': 'The Pool of Tribute (Extreme)',
      'fr': 'La Crique aux tributs (extrême)',
      'ja': '極スサノオ討滅戦',
      'ko': '극 스사노오 토벌전',
      'tc': '極 須佐之男殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 77
  },
  679: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '神龙歼灭战',
      'de': 'Königliche Menagerie',
      'en': 'The Royal Menagerie',
      'fr': 'La Ménagerie royale',
      'ja': '神龍討滅戦',
      'ko': '신룡 토벌전',
      'tc': '神龍殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 76
  },
  684: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '于里昂热的秘策',
      'de': 'Wege zur Transzendenz',
      'en': 'The Resonant',
      'fr': 'La ruse d\'Urianger',
      'ja': 'ウリエンジェの秘策',
      'ko': '위리앙제의 비책',
      'tc': '尤里安傑的秘策'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  688: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '那达慕',
      'de': 'Naadam',
      'en': 'Naadam',
      'fr': 'La grande bataille du Naadam',
      'ja': '終節の合戦',
      'ko': '계절끝 합전',
      'tc': '那達慕'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  689: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '(6.3)鏖战红莲阿拉米格',
      'de': '(6.3)Ala Mhigo',
      'en': '(6.3)Ala Mhigo',
      'fr': '(6.3)Ala Mhigo',
      'ja': '(6.3)紅蓮決戦 アラミゴ',
      'ko': '(6.3)알라미고'
    },
    'offsetX': 292,
    'offsetY': -163,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  690: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '时空狭缝外缘',
      'de': 'Interdimensionaler Riss',
      'en': 'Interdimensional Rift',
      'fr': 'Fissure interdimensionnelle',
      'ja': '次元の狭間：外縁',
      'ko': '차원의 틈: 외곽',
      'tc': '時空狹縫外緣'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 88
  },
  691: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 德尔塔幻境1',
      'de': 'Deltametrie 1.0',
      'en': 'Deltascape V1.0',
      'fr': 'Deltastice v1.0',
      'ja': '次元の狭間オメガ：デルタ編1',
      'ko': '차원의 틈 오메가: 델타편 1',
      'tc': '歐米茄時空狹縫 德爾塔幻境1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 88
  },
  692: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 德尔塔幻境2',
      'de': 'Deltametrie 2.0',
      'en': 'Deltascape V2.0',
      'fr': 'Deltastice v2.0',
      'ja': '次元の狭間オメガ：デルタ編2',
      'ko': '차원의 틈 오메가: 델타편 2',
      'tc': '歐米茄時空狹縫 德爾塔幻境2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 88
  },
  693: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 德尔塔幻境3',
      'de': 'Deltametrie 3.0',
      'en': 'Deltascape V3.0',
      'fr': 'Deltastice v3.0',
      'ja': '次元の狭間オメガ：デルタ編3',
      'ko': '차원의 틈 오메가: 델타편 3',
      'tc': '歐米茄時空狹縫 德爾塔幻境3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 88
  },
  694: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 德尔塔幻境4',
      'de': 'Deltametrie 4.0',
      'en': 'Deltascape V4.0',
      'fr': 'Deltastice v4.0',
      'ja': '次元の狭間オメガ：デルタ編4',
      'ko': '차원의 틈 오메가: 델타편 4',
      'tc': '歐米茄時空狹縫 德爾塔幻境4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 88
  },
  695: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 德尔塔幻境1',
      'de': 'Deltametrie 1.0 (episch)',
      'en': 'Deltascape V1.0 (Savage)',
      'fr': 'Deltastice v1.0 (sadique)',
      'ja': '次元の狭間オメガ零式：デルタ編1',
      'ko': '차원의 틈 오메가: 델타편(영웅) 1',
      'tc': '歐米茄零式時空狹縫 德爾塔幻境1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 88
  },
  696: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 德尔塔幻境2',
      'de': 'Deltametrie 2.0 (episch)',
      'en': 'Deltascape V2.0 (Savage)',
      'fr': 'Deltastice v2.0 (sadique)',
      'ja': '次元の狭間オメガ零式：デルタ編2',
      'ko': '차원의 틈 오메가: 델타편(영웅) 2',
      'tc': '歐米茄零式時空狹縫 德爾塔幻境2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 88
  },
  697: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 德尔塔幻境3',
      'de': 'Deltametrie 3.0 (episch)',
      'en': 'Deltascape V3.0 (Savage)',
      'fr': 'Deltastice v3.0 (sadique)',
      'ja': '次元の狭間オメガ零式：デルタ編3',
      'ko': '차원의 틈 오메가: 델타편(영웅) 3',
      'tc': '歐米茄零式時空狹縫 德爾塔幻境3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 88
  },
  698: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 德尔塔幻境4',
      'de': 'Deltametrie 4.0 (episch)',
      'en': 'Deltascape V4.0 (Savage)',
      'fr': 'Deltastice v4.0 (sadique)',
      'ja': '次元の狭間オメガ零式：デルタ編4',
      'ko': '차원의 틈 오메가: 델타편(영웅) 4',
      'tc': '歐米茄零式時空狹縫 德爾塔幻境4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 88
  },
  705: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '大会开始',
      'de': 'Thal zu Ehren',
      'en': 'In Thal\'s Name',
      'fr': 'Le tournoi commémoratif du sultanat',
      'ja': 'ウル王杯闘技会の始まり',
      'ko': '울다하 왕실배 투기대회',
      'tc': '大會開始'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 8
  },
  706: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '为了更强',
      'de': 'Die hohe Kunst des Schwertkampfs',
      'en': 'Raising the Sword',
      'fr': 'La finale des champions',
      'ja': 'さらなる剣術の高みへ',
      'ko': '더 높은 검술의 경지로',
      'tc': '為了更強'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 8
  },
  707: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '抗争之力',
      'de': 'Die Kraft des Widerstands',
      'en': 'With Heart and Steel',
      'fr': 'Transmigration démoniaque',
      'ja': '抗う力',
      'ko': '맞서는 힘',
      'tc': '抗爭之力'
    },
    'offsetX': 298,
    'offsetY': 350,
    'sizeFactor': 200,
    'weatherRate': 37
  },
  708: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '海都路人身首异',
      'de': 'Mord ist sein Hobby',
      'en': 'Blood on the Deck',
      'fr': 'La légende de Musosai : l\'assassin de Limsa Lominsa',
      'ja': '海都を震わす人斬りの宴！',
      'ko': '해양도시를 흔드는 살인자의 연회!',
      'tc': '海都路人身首異'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  709: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '极恶之人木枯',
      'de': 'Der Inbegriff des Bösen',
      'en': 'The Face of True Evil',
      'fr': 'L\'abominable Kogarashi',
      'ja': '極悪人コガラシ',
      'ko': '극악무도한 코가라시',
      'tc': '極惡之人木枯'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 95,
    'weatherRate': 49
  },
  710: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '松叶门外之变',
      'de': 'Vorfall auf dem Matsuba-Platz',
      'en': 'Matsuba Mayhem',
      'fr': 'Règlement de compte au square Matsuba',
      'ja': '松葉門外の変',
      'ko': '마츠바 사변',
      'tc': '松葉門外之變'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 82
  },
  711: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '决战龟甲岛',
      'de': 'Ent­schei­dungs­schlacht auf Bekko',
      'en': 'The Battle on Bekko',
      'fr': 'L\'af­fron­te­ment de deux justices',
      'ja': 'ベッコウ島の決闘',
      'ko': '베코우 섬의 결투',
      'tc': '決戰龜甲島'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 83
  },
  712: {
    'contentType': 9,
    'exVersion': 2,
    'name': {
      'cn': '运河宝物库',
      'de': 'Kanäle von Uznair',
      'en': 'The Lost Canals of Uznair',
      'fr': 'Les Canaux perdus d\'Uznair',
      'ja': '宝物庫 ウズネアカナル',
      'ko': '보물고 우즈네어 운하',
      'tc': '運河寶物庫'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  713: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '漆黑的巨龙',
      'de': 'Der tobende Drache',
      'en': 'Dark as the Night Sky',
      'fr': 'Aussi sombre que la nuit',
      'ja': '漆黒の巨竜',
      'ko': '칠흑의 거룡',
      'tc': '漆黑的巨龍'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 85
  },
  714: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '红血之龙骑士',
      'de': 'Der Rubin-Drachenreiter',
      'en': 'Dragon Sound',
      'fr': 'Le Dragon écarlate',
      'ja': '紅の竜騎士',
      'ko': '붉은 용기사',
      'tc': '紅血之龍騎士'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  715: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '遥远的憧憬',
      'de': 'Probe des Meisters',
      'en': 'The Orphans and the Broken Blade',
      'fr': 'L\'aspiration refoulée',
      'ja': 'あと三度、遥かな憧憬',
      'ko': '앞으로 세 번, 아득한 동경',
      'tc': '遙遠的憧憬'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 95,
    'weatherRate': 86
  },
  716: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '再次相见',
      'de': 'Aus der Tiefe des Herzens',
      'en': 'Our Compromise',
      'fr': 'La dernière séparation',
      'ja': 'あと一度、君に会えたら',
      'ko': '앞으로 한 번, 너와 만날 수 있다면',
      'tc': '再次相見'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 28
  },
  717: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '原初的战士',
      'de': 'Die Urkraft in ihr',
      'en': 'Curious Gorge Meets His Match',
      'fr': 'L\'épreuve de force',
      'ja': '原初的な彼女',
      'ko': '원초적 그녀',
      'tc': '原初的戰士'
    },
    'offsetX': -77,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  718: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '燃烧吧高吉',
      'de': 'Kriegerische Leidenschaft',
      'en': 'The Heart of the Problem',
      'fr': 'Passion guerrière',
      'ja': '燃えよゴージ！',
      'ko': '불타올라라, 산골짜기!',
      'tc': '燃燒吧高吉'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 85
  },
  719: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '吉祥天女歼灭战',
      'de': 'Götterdämmerung - Lakshmi',
      'en': 'Emanation',
      'fr': 'Émanation',
      'ja': 'ラクシュミ討滅戦',
      'ko': '락슈미 토벌전',
      'tc': '吉祥天女殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 87
  },
  720: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '吉祥天女歼殛战',
      'de': 'Zenit der Götter - Lakshmi',
      'en': 'Emanation (Extreme)',
      'fr': 'Émanation (extrême)',
      'ja': '極ラクシュミ討滅戦',
      'ko': '극 락슈미 토벌전',
      'tc': '極 吉祥天女殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 87
  },
  722: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '穿越时空的夙愿',
      'de': 'Ein Wunsch aus alten Zeiten',
      'en': 'Our Unsung Heroes',
      'fr': 'L\'espoir en héritage',
      'ja': '時をかける願い',
      'ko': '시간을 뛰어넘은 염원',
      'tc': '穿越時空的夙願'
    },
    'offsetX': -175,
    'offsetY': -297,
    'sizeFactor': 200,
    'weatherRate': 63
  },
  723: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '影隐忍法贴',
      'de': 'Aus dem Verborgenen',
      'en': 'When Clans Collide',
      'fr': 'La bataille des clans',
      'ja': '影隠忍法帖',
      'ko': '그림자 인법첩',
      'tc': '影隱忍法貼'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 85
  },
  725: {
    'contentType': 9,
    'exVersion': 2,
    'name': {
      'cn': '运河宝物库深层',
      'de': 'Vergessene Kanäle von Uznair',
      'en': 'The Hidden Canals of Uznair',
      'fr': 'Les Canaux cachés d\'Uznair',
      'ja': '宝物庫 ウズネアカナル深層',
      'ko': '보물고 우즈네어 운하 심층',
      'tc': '運河寶物庫深層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  729: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '距骨研究所（机动战）',
      'de': 'Astragalos',
      'en': 'Astragalos',
      'fr': 'Astragalos (machinerie)',
      'ja': 'アストラガロス (機工戦)',
      'ko': '아스트라갈로스(기공전)',
      'tc': '距骨研究所（機動戰）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  730: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '神龙梦幻歼灭战',
      'de': 'Heldenlied von Shinryu',
      'en': 'The Minstrel\'s Ballad: Shinryu\'s Domain',
      'fr': 'Le domaine de Shinryu',
      'ja': '極神龍討滅戦',
      'ko': '극 신룡 토벌전',
      'tc': '極 神龍殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 76
  },
  731: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '(6.4)沉没神殿斯卡拉遗迹',
      'de': '(6.4)Die versunkene Stadt Skalla',
      'en': '(6.4)The Drowned City of Skalla',
      'fr': '(6.4)La Cité engloutie de Skalla',
      'ja': '(6.4)水没遺構 スカラ',
      'ko': '(6.4)스칼라 유적'
    },
    'offsetX': 185,
    'offsetY': 5,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  732: {
    'contentType': 26,
    'exVersion': 2,
    'name': {
      'cn': '禁地优雷卡 常风之地',
      'de': 'Eureka Anemos',
      'en': 'The Forbidden Land, Eureka Anemos',
      'fr': 'Eurêka Anemos',
      'ja': '禁断の地 エウレカ：アネモス編',
      'ko': '금단의 땅 에우레카: 아네모스편',
      'tc': '禁地優雷卡 常風之地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 91
  },
  733: {
    'contentType': 28,
    'exVersion': 2,
    'name': {
      'cn': '巴哈姆特绝境战',
      'de': 'Endlose Schatten von Bahamut (fatal)',
      'en': 'The Unending Coil of Bahamut (Ultimate)',
      'fr': 'L\'Abîme infini de Bahamut (fatal)',
      'ja': '絶バハムート討滅戦',
      'ko': '절 바하무트 토벌전',
      'tc': '絕 巴哈姆特殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  734: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '失落之都拉巴纳斯塔',
      'de': 'Rabanastre',
      'en': 'The Royal City of Rabanastre',
      'fr': 'La Cité royale de Rabanastre',
      'ja': '失われた都 ラバナスタ',
      'ko': '왕도 라바나스터',
      'tc': '失落之都拉巴納斯塔'
    },
    'offsetX': 300,
    'offsetY': -100,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  741: {
    'contentType': 22,
    'exVersion': 0,
    'name': {
      'cn': '良缘仪式',
      'de': 'Valentionzeremonie',
      'en': 'The Valentione\'s Ceremony',
      'fr': 'La Cérémonie de la Valention',
      'ja': 'ヴァレンティオンセレモニー',
      'ko': '발렌티온 예식장',
      'tc': '良緣儀式'
    },
    'offsetX': 0,
    'offsetY': 125,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  742: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '红玉火山狱之盖',
      'de': 'Höllenspund',
      'en': 'Hells\' Lid',
      'fr': 'Le Couvercle des enfers',
      'ja': '紅玉火山 獄之蓋',
      'ko': '지옥뚜껑',
      'tc': '紅玉火山獄之蓋'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  743: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '疯狂战舰无限回廊',
      'de': 'Die Fraktal-Kontinuum (schwer)',
      'en': 'The Fractal Continuum (Hard)',
      'fr': 'Le Continuum fractal (brutal)',
      'ja': '暴走戦艦 フラクタル・コンティニアム (Hard)',
      'ko': '무한연속 박물함(어려움)',
      'tc': '瘋狂戰艦無限回廊'
    },
    'offsetX': 0,
    'offsetY': 350,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  746: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '白虎镇魂战',
      'de': 'Seelentanz - Byakko',
      'en': 'The Jade Stoa',
      'fr': 'La Clairière de Jade',
      'ja': '白虎征魂戦',
      'ko': '백호 토벌전',
      'tc': '白虎征魂戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 93
  },
  748: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 西格玛幻境1',
      'de': 'Sigmametrie 1.0',
      'en': 'Sigmascape V1.0',
      'fr': 'Sigmastice v1.0',
      'ja': '次元の狭間オメガ：シグマ編1',
      'ko': '차원의 틈 오메가: 시그마편 1',
      'tc': '歐米茄時空狹縫 西格瑪幻境1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  749: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 西格玛幻境2',
      'de': 'Sigmametrie 2.0',
      'en': 'Sigmascape V2.0',
      'fr': 'Sigmastice v2.0',
      'ja': '次元の狭間オメガ：シグマ編2',
      'ko': '차원의 틈 오메가: 시그마편 2',
      'tc': '歐米茄時空狹縫 西格瑪幻境2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  750: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 西格玛幻境3',
      'de': 'Sigmametrie 3.0',
      'en': 'Sigmascape V3.0',
      'fr': 'Sigmastice v3.0',
      'ja': '次元の狭間オメガ：シグマ編3',
      'ko': '차원의 틈 오메가: 시그마편 3',
      'tc': '歐米茄時空狹縫 西格瑪幻境3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  751: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 西格玛幻境4',
      'de': 'Sigmametrie 4.0',
      'en': 'Sigmascape V4.0',
      'fr': 'Sigmastice v4.0',
      'ja': '次元の狭間オメガ：シグマ編4',
      'ko': '차원의 틈 오메가: 시그마편 4',
      'tc': '歐米茄時空狹縫 西格瑪幻境4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  752: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 西格玛幻境1',
      'de': 'Sigmametrie 1.0 (episch)',
      'en': 'Sigmascape V1.0 (Savage)',
      'fr': 'Sigmastice v1.0 (sadique)',
      'ja': '次元の狭間オメガ零式：シグマ編1',
      'ko': '차원의 틈 오메가: 시그마편(영웅) 1',
      'tc': '歐米茄零式時空狹縫 西格瑪幻境1'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  753: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 西格玛幻境2',
      'de': 'Sigmametrie 2.0 (episch)',
      'en': 'Sigmascape V2.0 (Savage)',
      'fr': 'Sigmastice v2.0 (sadique)',
      'ja': '次元の狭間オメガ零式：シグマ編2',
      'ko': '차원의 틈 오메가: 시그마편(영웅) 2',
      'tc': '歐米茄零式時空狹縫 西格瑪幻境2'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  754: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 西格玛幻境3',
      'de': 'Sigmametrie 3.0 (episch)',
      'en': 'Sigmascape V3.0 (Savage)',
      'fr': 'Sigmastice v3.0 (sadique)',
      'ja': '次元の狭間オメガ零式：シグマ編3',
      'ko': '차원의 틈 오메가: 시그마편(영웅) 3',
      'tc': '歐米茄零式時空狹縫 西格瑪幻境3'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  755: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 西格玛幻境4',
      'de': 'Sigmametrie 4.0 (episch)',
      'en': 'Sigmascape V4.0 (Savage)',
      'fr': 'Sigmastice v4.0 (sadique)',
      'ja': '次元の狭間オメガ零式：シグマ編4',
      'ko': '차원의 틈 오메가: 시그마편(영웅) 4',
      'tc': '歐米茄零式時空狹縫 西格瑪幻境4'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  758: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '白虎诗魂战',
      'de': 'Seelensturm - Byakko',
      'en': 'The Jade Stoa (Extreme)',
      'fr': 'La Clairière de Jade (extrême)',
      'ja': '極白虎征魂戦',
      'ko': '극 백호 토벌전',
      'tc': '極 白虎征魂戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 93
  },
  759: {
    'exVersion': 2,
    'name': {
      'cn': '多玛飞地',
      'de': 'Domanische Enklave',
      'en': 'The Doman Enclave',
      'fr': 'Quartier enclavé de Doma',
      'ja': 'ドマ町人地',
      'ko': '도마 도읍지',
      'tc': '多瑪飛地'
    },
    'offsetX': 23,
    'offsetY': 34,
    'sizeFactor': 400,
    'weatherRate': 84
  },
  761: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '火龙狩猎战',
      'de': 'Jagd auf Rathalos',
      'en': 'The Great Hunt',
      'fr': 'Chasse au Rathalos',
      'ja': 'リオレウス狩猟戦',
      'ko': '리오레우스 수렵전',
      'tc': '火龍狩獵戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  762: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '火龙上位狩猎战',
      'de': 'Jagd auf Rathalos (schwer)',
      'en': 'The Great Hunt (Extreme)',
      'fr': 'Chasse au Rathalos (extrême)',
      'ja': '極リオレウス狩猟戦',
      'ko': '극 리오레우스 수렵전',
      'tc': '極 火龍狩獵戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  763: {
    'contentType': 26,
    'exVersion': 2,
    'name': {
      'cn': '禁地优雷卡 恒冰之地',
      'de': 'Eureka Pagos',
      'en': 'The Forbidden Land, Eureka Pagos',
      'fr': 'Eurêka Pagos',
      'ja': '禁断の地 エウレカ：パゴス編',
      'ko': '금단의 땅 에우레카: 파고스편',
      'tc': '禁地優雷卡 恆冰之地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 94
  },
  768: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '风水灵庙岩燕庙',
      'de': 'Kompass der Schwalbe',
      'en': 'The Swallow\'s Compass',
      'fr': 'Le Compas de l\'Hirondelle',
      'ja': '風水霊殿 ガンエン廟',
      'ko': '강엔 종묘',
      'tc': '風水靈廟岩燕廟'
    },
    'offsetX': 240,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  769: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '拂晓的少年',
      'de': 'Der Knabe der Morgenröte',
      'en': 'Emissary of the Dawn',
      'fr': 'Voyage en terre hostile',
      'ja': '「暁」の少年',
      'ko': '\'새벽\'의 소년',
      'tc': '拂曉的少年'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  770: {
    'contentType': 21,
    'exVersion': 2,
    'name': {
      'cn': '天之御柱 1～10层',
      'de': 'Himmelssäule (Ebenen 1-10)',
      'en': 'Heaven-on-High  (Floors 1-10)',
      'fr': 'Le Pilier des Cieux (étages 1-10)',
      'ja': 'アメノミハシラ 1～10層',
      'ko': '천궁탑 1~10층',
      'tc': '天之御柱 1～10層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  771: {
    'contentType': 21,
    'exVersion': 2,
    'name': {
      'cn': '天之御柱 11～20层',
      'de': 'Himmelssäule (Ebenen 11-20)',
      'en': 'Heaven-on-High  (Floors 11-20)',
      'fr': 'Le Pilier des Cieux (étages 11-20)',
      'ja': 'アメノミハシラ 11～20層',
      'ko': '천궁탑 11~20층',
      'tc': '天之御柱 11～20層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  772: {
    'contentType': 21,
    'exVersion': 2,
    'name': {
      'cn': '天之御柱 21～30层',
      'de': 'Himmelssäule (Ebenen 21-30)',
      'en': 'Heaven-on-High  (Floors 21-30)',
      'fr': 'Le Pilier des Cieux (étages 21-30)',
      'ja': 'アメノミハシラ 21～30層',
      'ko': '천궁탑 21~30층',
      'tc': '天之御柱 21～30層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  773: {
    'contentType': 21,
    'exVersion': 2,
    'name': {
      'cn': '天之御柱 41～50层',
      'de': 'Himmelssäule (Ebenen 41-50)',
      'en': 'Heaven-on-High  (Floors 41-50)',
      'fr': 'Le Pilier des Cieux (étages 41-50)',
      'ja': 'アメノミハシラ 41～50層',
      'ko': '천궁탑 41~50층',
      'tc': '天之御柱 41～50層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  774: {
    'contentType': 21,
    'exVersion': 2,
    'name': {
      'cn': '天之御柱 61～70层',
      'de': 'Himmelssäule (Ebenen 61-70)',
      'en': 'Heaven-on-High  (Floors 61-70)',
      'fr': 'Le Pilier des Cieux (étages 61-70)',
      'ja': 'アメノミハシラ 61～70層',
      'ko': '천궁탑 61~70층',
      'tc': '天之御柱 61～70層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  775: {
    'contentType': 21,
    'exVersion': 2,
    'name': {
      'cn': '天之御柱 81～90层',
      'de': 'Himmelssäule (Ebenen 81-90)',
      'en': 'Heaven-on-High  (Floors 81-90)',
      'fr': 'Le Pilier des Cieux (étages 81-90)',
      'ja': 'アメノミハシラ 81～90層',
      'ko': '천궁탑 81~90층',
      'tc': '天之御柱 81～90層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  776: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '封闭圣塔黎铎拉纳大灯塔',
      'de': 'Richtfeuer von Ridorana',
      'en': 'The Ridorana Lighthouse',
      'fr': 'Le Phare de Ridorana',
      'ja': '封じられた聖塔 リドルアナ',
      'ko': '대등대 리도르아나',
      'tc': '封閉聖塔黎鐸拉納大燈塔'
    },
    'offsetX': 202,
    'offsetY': -92,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  777: {
    'contentType': 28,
    'exVersion': 2,
    'name': {
      'cn': '究极神兵绝境战',
      'de': 'Heldenlied von Ultima (fatal)',
      'en': 'The Weapon\'s Refrain (Ultimate)',
      'fr': 'La Fantasmagorie d\'Ultima (fatal)',
      'ja': '絶アルテマウェポン破壊作戦',
      'ko': '절 알테마 웨폰 파괴작전',
      'tc': '絕 究極武器破壞作戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 26
  },
  778: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '月读歼灭战',
      'de': 'Götterdämmerung - Tsukuyomi',
      'en': 'Castrum Fluminis',
      'fr': 'Castrum Fluminis',
      'ja': 'ツクヨミ討滅戦',
      'ko': '츠쿠요미 토벌전',
      'tc': '月讀殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  779: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '月读幽夜歼灭战',
      'de': 'Zenit der Götter - Tsukuyomi',
      'en': 'The Minstrel\'s Ballad: Tsukuyomi\'s Pain',
      'fr': 'Castrum Fluminis (extrême)',
      'ja': '極ツクヨミ討滅戦',
      'ko': '극 츠쿠요미 토벌전',
      'tc': '極 月讀殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  782: {
    'contentType': 21,
    'exVersion': 2,
    'name': {
      'cn': '天之御柱 31～40层',
      'de': 'Himmelssäule (Ebenen 31-40)',
      'en': 'Heaven-on-High  (Floors 31-40)',
      'fr': 'Le Pilier des Cieux (étages 31-40)',
      'ja': 'アメノミハシラ 31～40層',
      'ko': '천궁탑 31~40층',
      'tc': '天之御柱 31～40層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  783: {
    'contentType': 21,
    'exVersion': 2,
    'name': {
      'cn': '天之御柱 51～60层',
      'de': 'Himmelssäule (Ebenen 51-60)',
      'en': 'Heaven-on-High  (Floors 51-60)',
      'fr': 'Le Pilier des Cieux (étages 51-60)',
      'ja': 'アメノミハシラ 51～60層',
      'ko': '천궁탑 51~60층',
      'tc': '天之御柱 51～60層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  784: {
    'contentType': 21,
    'exVersion': 2,
    'name': {
      'cn': '天之御柱 71～80层',
      'de': 'Himmelssäule (Ebenen 71-80)',
      'en': 'Heaven-on-High  (Floors 71-80)',
      'fr': 'Le Pilier des Cieux (étages 71-80)',
      'ja': 'アメノミハシラ 71～80層',
      'ko': '천궁탑 71~80층',
      'tc': '天之御柱 71～80層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  785: {
    'contentType': 21,
    'exVersion': 2,
    'name': {
      'cn': '天之御柱 91～100层',
      'de': 'Himmelssäule (Ebenen 91-100)',
      'en': 'Heaven-on-High  (Floors 91-100)',
      'fr': 'Le Pilier des Cieux (étages 91-100)',
      'ja': 'アメノミハシラ 91～100層',
      'ko': '천궁탑 91~100층',
      'tc': '天之御柱 91～100層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  788: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '污染庭园圣茉夏娜植物园',
      'de': 'Sankt Mocianne-Arboretum (schwer)',
      'en': 'Saint Mocianne\'s Arboretum (Hard)',
      'fr': 'L\'Arboretum Sainte-Mocianne (brutal)',
      'ja': '草木汚染 聖モシャーヌ植物園 (Hard)',
      'ko': '성 모샨 식물원(어려움)',
      'tc': '污染庭園聖茉夏娜植物園'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  789: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '(6.4)死亡大地终末焦土',
      'de': '(6.4)Das Kargland',
      'en': '(6.4)The Burn',
      'fr': '(6.4)L\'Escarre',
      'ja': '(6.4)永久焦土 ザ・バーン',
      'ko': '(6.4)영구 초토지대'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 97
  },
  790: {
    'contentType': 22,
    'exVersion': 0,
    'name': {
      'cn': '灾厄重现军事演习',
      'de': 'Gedenkschlacht der Eorzäischen Allianz',
      'en': 'The Calamity Retold',
      'fr': 'Les grandes manœuvres commémoratives',
      'ja': '新生祭軍事演習',
      'ko': '신생제 군사훈련',
      'tc': '災厄重現軍事演習'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 95
  },
  791: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '隐塞（机动战）',
      'de': 'Verborgene Schlucht',
      'en': 'Hidden Gorge',
      'fr': 'Gorge dérobée (machinerie)',
      'ja': 'ヒドゥンゴージ (機工戦)',
      'ko': '숨겨진 보루(기공전)',
      'tc': '隱塞（機動戰）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  792: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '虚景跳跳乐大挑战',
      'de': 'Kaktor-Kletterwand',
      'en': 'Leap of Faith',
      'fr': 'Haute voltige',
      'ja': '挑戦！ ジャンピングアスレチック',
      'ko': '뛰어라! 점핑 운동회',
      'tc': '登高跳跳樂大挑戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  793: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '(6.4)国境防线基姆利特暗区',
      'de': '(6.4)Die Ghimlyt-Finsternis',
      'en': '(6.4)The Ghimlyt Dark',
      'fr': '(6.4)Les Ténèbres de Ghimlyt',
      'ja': '(6.4)境界戦線 ギムリトダーク',
      'ko': '(6.4)김리트 황야'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  794: {
    'contentType': 9,
    'exVersion': 2,
    'name': {
      'cn': '运河宝物库神殿',
      'de': 'Glücksaltäre von Uznair',
      'en': 'The Shifting Altars of Uznair',
      'fr': 'Le Temple sacré d\'Uznair',
      'ja': '宝物庫 ウズネアカナル祭殿',
      'ko': '보물고 우즈네어 운하 제전',
      'tc': '運河寶物庫神殿'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  795: {
    'contentType': 26,
    'exVersion': 2,
    'name': {
      'cn': '禁地优雷卡 涌火之地',
      'de': 'Eureka Pyros',
      'en': 'The Forbidden Land, Eureka Pyros',
      'fr': 'Eurêka Pyros',
      'ja': '禁断の地 エウレカ：ピューロス編',
      'ko': '금단의 땅 에우레카: 피로스편',
      'tc': '禁地優雷卡 湧火之地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 96
  },
  796: {
    'contentType': 27,
    'exVersion': 0,
    'name': {
      'cn': '出道战',
      'de': 'Debüt in der Himmlischen Arena',
      'en': 'All\'s Well That Starts Well',
      'fr': 'Début du spectacle',
      'ja': 'デビューマッチ',
      'ko': '데뷔전',
      'tc': '出道戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  797: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '楔石洞',
      'de': 'Der Wille der Mondgöttin',
      'en': 'The Will of the Moon',
      'fr': 'Ralliement dans la steppe',
      'ja': '楔石の虚',
      'ko': '쐐기돌 동굴',
      'tc': '楔石洞'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  798: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 阿尔法幻境1',
      'de': 'Alphametrie 1.0',
      'en': 'Alphascape V1.0',
      'fr': 'Alphastice v1.0',
      'ja': '次元の狭間オメガ：アルファ編1',
      'ko': '차원의 틈 오메가: 알파편 1',
      'tc': '歐米茄時空狹縫 阿爾法幻境1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  799: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 阿尔法幻境2',
      'de': 'Alphametrie 2.0',
      'en': 'Alphascape V2.0',
      'fr': 'Alphastice v2.0',
      'ja': '次元の狭間オメガ：アルファ編2',
      'ko': '차원의 틈 오메가: 알파편 2',
      'tc': '歐米茄時空狹縫 阿爾法幻境2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  800: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 阿尔法幻境3',
      'de': 'Alphametrie 3.0',
      'en': 'Alphascape V3.0',
      'fr': 'Alphastice v3.0',
      'ja': '次元の狭間オメガ：アルファ編3',
      'ko': '차원의 틈 오메가: 알파편 3',
      'tc': '歐米茄時空狹縫 阿爾法幻境3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  801: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄时空狭缝 阿尔法幻境4',
      'de': 'Alphametrie 4.0',
      'en': 'Alphascape V4.0',
      'fr': 'Alphastice v4.0',
      'ja': '次元の狭間オメガ：アルファ編4',
      'ko': '차원의 틈 오메가: 알파편 4',
      'tc': '歐米茄時空狹縫 阿爾法幻境4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  802: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 阿尔法幻境1',
      'de': 'Alphametrie 1.0 (episch)',
      'en': 'Alphascape V1.0 (Savage)',
      'fr': 'Alphastice v1.0 (sadique)',
      'ja': '次元の狭間オメガ零式：アルファ編1',
      'ko': '차원의 틈 오메가: 알파편(영웅) 1',
      'tc': '歐米茄零式時空狹縫 阿爾法幻境1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  803: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 阿尔法幻境2',
      'de': 'Alphametrie 2.0 (episch)',
      'en': 'Alphascape V2.0 (Savage)',
      'fr': 'Alphastice v2.0 (sadique)',
      'ja': '次元の狭間オメガ零式：アルファ編2',
      'ko': '차원의 틈 오메가: 알파편(영웅) 2',
      'tc': '歐米茄零式時空狹縫 阿爾法幻境2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  804: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 阿尔法幻境3',
      'de': 'Alphametrie 3.0 (episch)',
      'en': 'Alphascape V3.0 (Savage)',
      'fr': 'Alphastice v3.0 (sadique)',
      'ja': '次元の狭間オメガ零式：アルファ編3',
      'ko': '차원의 틈 오메가: 알파편(영웅) 3',
      'tc': '歐米茄零式時空狹縫 阿爾法幻境3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  805: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '欧米茄零式时空狭缝 阿尔法幻境4',
      'de': 'Alphametrie 4.0 (episch)',
      'en': 'Alphascape V4.0 (Savage)',
      'fr': 'Alphastice v4.0 (sadique)',
      'ja': '次元の狭間オメガ零式：アルファ編4',
      'ko': '차원의 틈 오메가: 알파편(영웅) 4',
      'tc': '歐米茄零式時空狹縫 阿爾法幻境4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 92
  },
  806: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '保镖歼灭战',
      'de': 'Duell auf der Kugane-Brücke',
      'en': 'Kugane Ohashi',
      'fr': 'Le Pont Ohashi',
      'ja': '真ヨウジンボウ討滅戦',
      'ko': '진 요우진보 토벌전',
      'tc': '真 保鑣殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  810: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '朱雀镇魂战',
      'de': 'Seelentanz - Suzaku',
      'en': 'Hells\' Kier',
      'fr': 'Le Nid des Lamentations',
      'ja': '朱雀征魂戦',
      'ko': '주작 토벌전',
      'tc': '朱雀征魂戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 98
  },
  811: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '朱雀诗魂战',
      'de': 'Seelensturm - Suzaku',
      'en': 'Hells\' Kier (Extreme)',
      'fr': 'Le Nid des Lamentations (extrême)',
      'ja': '極朱雀征魂戦',
      'ko': '극 주작 토벌전',
      'tc': '極 朱雀征魂戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 98
  },
  813: {
    'exVersion': 3,
    'name': {
      'cn': '雷克兰德',
      'de': 'Seenland',
      'en': 'Lakeland',
      'fr': 'Grand-Lac',
      'ja': 'レイクランド',
      'ko': '레이크랜드',
      'tc': '雷克蘭德'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 106
  },
  814: {
    'exVersion': 3,
    'name': {
      'cn': '珂露西亚岛',
      'de': 'Kholusia',
      'en': 'Kholusia',
      'fr': 'Kholusia',
      'ja': 'コルシア島',
      'ko': '콜루시아 섬',
      'tc': '珂露西亞島'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 107
  },
  815: {
    'exVersion': 3,
    'name': {
      'cn': '安穆·艾兰',
      'de': 'Amh Araeng',
      'en': 'Amh Araeng',
      'fr': 'Amh Araeng',
      'ja': 'アム・アレーン',
      'ko': '아므 아랭',
      'tc': '安穆·艾蘭'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 108
  },
  816: {
    'exVersion': 3,
    'name': {
      'cn': '伊尔美格',
      'de': 'Il Mheg',
      'en': 'Il Mheg',
      'fr': 'Il Mheg',
      'ja': 'イル・メグ',
      'ko': '일 메그',
      'tc': '伊爾美格'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 109
  },
  817: {
    'exVersion': 3,
    'name': {
      'cn': '拉凯提卡大森林',
      'de': 'Der Große Wald Rak\'tika',
      'en': 'The Rak\'tika Greatwood',
      'fr': 'Rak\'tika',
      'ja': 'ラケティカ大森林',
      'ko': '라케티카 대삼림',
      'tc': '拉凱提卡大森林'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 110
  },
  818: {
    'exVersion': 3,
    'name': {
      'cn': '黑风海',
      'de': 'Tempest',
      'en': 'The Tempest',
      'fr': 'La Tempête',
      'ja': 'テンペスト',
      'ko': '템페스트',
      'tc': '黑風海'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 111
  },
  819: {
    'exVersion': 3,
    'name': {
      'cn': '水晶都',
      'de': 'Crystarium',
      'en': 'The Crystarium',
      'fr': 'Cristarium',
      'ja': 'クリスタリウム',
      'ko': '크리스타리움',
      'tc': '水晶都'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 112
  },
  820: {
    'exVersion': 3,
    'name': {
      'cn': '游末邦',
      'de': 'Eulmore',
      'en': 'Eulmore',
      'fr': 'Eulmore',
      'ja': 'ユールモア',
      'ko': '율모어',
      'tc': '遊末邦'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 113
  },
  821: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '水妖幻园多恩美格禁园',
      'de': 'Dohn Mheg',
      'en': 'Dohn Mheg',
      'fr': 'Dohn Mheg',
      'ja': '水妖幻園 ドォーヌ・メグ',
      'ko': '도느 메그',
      'tc': '水妖幻園多恩美格禁園'
    },
    'offsetX': 0,
    'offsetY': 200,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  822: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '伪造天界格鲁格火山',
      'de': 'Der Gulg',
      'en': 'Mt. Gulg',
      'fr': 'Mont Gulg',
      'ja': '偽造天界 グルグ火山',
      'ko': '굴그 화산',
      'tc': '偽造天界格魯格火山'
    },
    'offsetX': -188,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 102
  },
  823: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '文明古迹奇坦那神影洞',
      'de': 'Irrungen der Qitari',
      'en': 'The Qitana Ravel',
      'fr': 'L\'Enchevêtrement des Qitari',
      'ja': '古跡探索 キタンナ神影洞',
      'ko': '키타나 신굴',
      'tc': '文明古跡奇坦那神影洞'
    },
    'offsetX': 0,
    'offsetY': -274,
    'sizeFactor': 200,
    'weatherRate': 102
  },
  824: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '青龙镇魂战',
      'de': 'Seelentanz - Seiryu',
      'en': 'The Wreath of Snakes',
      'fr': 'L\'Îlot des Amertumes',
      'ja': '青龍征魂戦',
      'ko': '청룡 토벌전',
      'tc': '青龍征魂戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 99
  },
  825: {
    'contentType': 4,
    'exVersion': 2,
    'name': {
      'cn': '青龙诗魂战',
      'de': 'Seelensturm - Seiryu',
      'en': 'The Wreath of Snakes (Extreme)',
      'fr': 'L\'Îlot des Amertumes (extrême)',
      'ja': '極青龍征魂戦',
      'ko': '극 청룡 토벌전',
      'tc': '極 青龍征魂戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 99
  },
  826: {
    'contentType': 5,
    'exVersion': 2,
    'name': {
      'cn': '乐欲之所瓯博讷修道院',
      'de': 'Kloster von Orbonne',
      'en': 'The Orbonne Monastery',
      'fr': 'Le Monastère d\'Orbonne',
      'ja': '楽欲の僧院 オーボンヌ',
      'ko': '오본느 수도원',
      'tc': '樂欲之所甌博訥修道院'
    },
    'offsetX': -545,
    'offsetY': -663,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  827: {
    'contentType': 26,
    'exVersion': 2,
    'name': {
      'cn': '禁地优雷卡 丰水之地',
      'de': 'Eureka Hydatos',
      'en': 'The Forbidden Land, Eureka Hydatos',
      'fr': 'Eurêka Hydatos',
      'ja': '禁断の地 エウレカ：ヒュダトス編',
      'ko': '금단의 땅 에우레카: 히다토스편',
      'tc': '禁地優雷卡 豐水之地'
    },
    'offsetX': 0,
    'offsetY': 475,
    'sizeFactor': 100,
    'weatherRate': 100
  },
  830: {
    'contentType': 7,
    'exVersion': 2,
    'name': {
      'cn': '英雄挽歌',
      'de': 'Requiem der Helden',
      'en': 'A Requiem for Heroes',
      'fr': 'Un requiem pour les héros',
      'ja': '英雄への鎮魂歌',
      'ko': '영웅을 위한 진혼가',
      'tc': '英雄挽歌'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  831: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '多玛方城战：东风战4人亲友桌（不带食断）',
      'de': '4-Spieler-Mahjong (schnelle Partie, Kuitan deaktiviert)',
      'en': 'Four-player Mahjong (Quick Match, Kuitan Disabled)',
      'fr': 'Mahjong domien : 4 joueurs (partie rapide sans kuitan)',
      'ja': 'ドマ式麻雀：東風戦4人セット卓 (クイタン無し)',
      'ko': '작패유희: 동풍전 4인용 탁자(부르기 단요구 없음)',
      'tc': '多瑪方城戰：東風戰4人親友桌（不帶食斷）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  832: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '空军装甲驾驶员',
      'de': 'Luftwaffe, Feuer frei!',
      'en': 'Air Force One',
      'fr': 'As de l\'air',
      'ja': '出撃！ エアフォースパイロット',
      'ko': '출격! 에어포스 조종사',
      'tc': '空軍裝甲駕駛員'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  834: {
    'contentType': 7,
    'exVersion': 0,
    'name': {
      'cn': '风之使者',
      'de': 'Durch den Sturm und zurück',
      'en': 'Messenger of the Winds',
      'fr': 'La Messagère du vent',
      'ja': '来訪せし風の御使',
      'ko': '바람의 어사',
      'tc': '風之使者'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 101
  },
  836: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '避暑离宫马利卡大井',
      'de': 'Malikahs Brunnen',
      'en': 'Malikah\'s Well',
      'fr': 'Le Puits de Malikah',
      'ja': '爽涼離宮 マリカの大井戸',
      'ko': '말리카 큰우물',
      'tc': '避暑離宮馬利卡大井'
    },
    'offsetX': -65,
    'offsetY': -30,
    'sizeFactor': 200,
    'weatherRate': 102
  },
  837: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '遇袭集落水滩村',
      'de': 'Holminster',
      'en': 'Holminster Switch',
      'fr': 'Holminster',
      'ja': '殺戮郷村 ホルミンスター',
      'ko': '홀민스터',
      'tc': '殺戮鄉村水灘村'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 102
  },
  838: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '末日暗影亚马乌罗提',
      'de': 'Amaurot',
      'en': 'Amaurot',
      'fr': 'Amaurote',
      'ja': '終末幻想 アーモロート',
      'ko': '아모로트',
      'tc': '終末幻想亞馬烏羅提'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 105
  },
  840: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '异界遗构希尔科斯孪晶塔',
      'de': 'Der Kristallzwilling',
      'en': 'The Twinning',
      'fr': 'La Macle de Syrcus',
      'ja': '異界遺構 シルクス・ツイニング',
      'ko': '쌍둥이 시르쿠스',
      'tc': '異界遺構希爾科斯孿晶塔'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  841: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '创造机构阿尼德罗学院',
      'de': 'Akadaemia Anyder',
      'en': 'Akadaemia Anyder',
      'fr': 'Akadaemia Anydre',
      'ja': '創造機関 アナイダアカデミア',
      'ko': '애나이더 아카데미아',
      'tc': '創造機構阿尼德羅學院'
    },
    'offsetX': 0,
    'offsetY': 30,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  845: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '缇坦妮雅歼灭战',
      'de': 'Offenbarung - Titania',
      'en': 'The Dancing Plague',
      'fr': 'La Valse du Monarque',
      'ja': 'ティターニア討滅戦',
      'ko': '티타니아 토벌전',
      'tc': '緹坦妮雅殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 103
  },
  846: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '无瑕灵君歼灭战',
      'de': 'Offenbarung - Innozenz',
      'en': 'The Crown of the Immaculate',
      'fr': 'La Couronne de l\'Immaculé',
      'ja': 'イノセンス討滅戦',
      'ko': '이노센스 토벌전',
      'tc': '無瑕靈君殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 104
  },
  847: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '哈迪斯歼灭战',
      'de': 'Offenbarung - Hades',
      'en': 'The Dying Gasp',
      'fr': 'Le Râle de l\'Agonie',
      'ja': 'ハーデス討滅戦',
      'ko': '하데스 토벌전',
      'tc': '黑迪斯殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 105
  },
  848: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '无瑕灵君歼殛战',
      'de': 'Letzte Läuterung - Innozenz',
      'en': 'The Crown of the Immaculate (Extreme)',
      'fr': 'La Couronne de l\'Immaculé (extrême)',
      'ja': '極イノセンス討滅戦',
      'ko': '극 이노센스 토벌전',
      'tc': '極 無瑕靈君殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 104
  },
  849: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 觉醒之章1',
      'de': 'Edens Erwachen - Auferstehung',
      'en': 'Eden\'s Gate: Resurrection',
      'fr': 'L\'Éveil d\'Éden - Résurrection',
      'ja': '希望の園エデン：覚醒編1',
      'ko': '희망의 낙원 에덴: 각성편 1',
      'tc': '伊甸希望樂園 覺醒之章1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  850: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 觉醒之章2',
      'de': 'Edens Erwachen - Niederkunft',
      'en': 'Eden\'s Gate: Descent',
      'fr': 'L\'Éveil d\'Éden - Descente',
      'ja': '希望の園エデン：覚醒編2',
      'ko': '희망의 낙원 에덴: 각성편 2',
      'tc': '伊甸希望樂園 覺醒之章2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  851: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 觉醒之章3',
      'de': 'Edens Erwachen - Überflutung',
      'en': 'Eden\'s Gate: Inundation',
      'fr': 'L\'Éveil d\'Éden - Déluge',
      'ja': '希望の園エデン：覚醒編3',
      'ko': '희망의 낙원 에덴: 각성편 3',
      'tc': '伊甸希望樂園 覺醒之章3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 38
  },
  852: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 觉醒之章4',
      'de': 'Edens Erwachen - Beerdigung',
      'en': 'Eden\'s Gate: Sepulture',
      'fr': 'L\'Éveil d\'Éden - Inhumation',
      'ja': '希望の園エデン：覚醒編4',
      'ko': '희망의 낙원 에덴: 각성편 4',
      'tc': '伊甸希望樂園 覺醒之章4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 23
  },
  853: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 觉醒之章1',
      'de': 'Edens Erwachen - Auferstehung (episch)',
      'en': 'Eden\'s Gate: Resurrection (Savage)',
      'fr': 'L\'Éveil d\'Éden - Résurrection (sadique)',
      'ja': '希望の園エデン零式：覚醒編1',
      'ko': '희망의 낙원 에덴: 각성편(영웅) 1',
      'tc': '伊甸零式希望樂園 覺醒之章1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  854: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 觉醒之章2',
      'de': 'Edens Erwachen - Niederkunft (episch)',
      'en': 'Eden\'s Gate: Descent (Savage)',
      'fr': 'L\'Éveil d\'Éden - Descente (sadique)',
      'ja': '希望の園エデン零式：覚醒編2',
      'ko': '희망의 낙원 에덴: 각성편(영웅) 2',
      'tc': '伊甸零式希望樂園 覺醒之章2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  855: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 觉醒之章3',
      'de': 'Edens Erwachen - Überflutung (episch)',
      'en': 'Eden\'s Gate: Inundation (Savage)',
      'fr': 'L\'Éveil d\'Éden - Déluge (sadique)',
      'ja': '希望の園エデン零式：覚醒編3',
      'ko': '희망의 낙원 에덴: 각성편(영웅) 3',
      'tc': '伊甸零式希望樂園 覺醒之章3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 38
  },
  856: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 觉醒之章4',
      'de': 'Edens Erwachen - Beerdigung (episch)',
      'en': 'Eden\'s Gate: Sepulture (Savage)',
      'fr': 'L\'Éveil d\'Éden - Inhumation (sadique)',
      'ja': '希望の園エデン零式：覚醒編4',
      'ko': '희망의 낙원 에덴: 각성편(영웅) 4',
      'tc': '伊甸零式希望樂園 覺醒之章4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 23
  },
  858: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '缇坦妮雅歼殛战',
      'de': 'Letzte Läuterung - Titania',
      'en': 'The Dancing Plague (Extreme)',
      'fr': 'La Valse du Monarque (extrême)',
      'ja': '極ティターニア討滅戦',
      'ko': '극 티타니아 토벌전',
      'tc': '極 緹坦妮雅殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 103
  },
  859: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '机关、诅咒、剧毒与……',
      'de': 'Der Beichtstuhl von Toupasa dem Älteren',
      'en': 'Legend of the Not-so-hidden Temple',
      'fr': 'Le Confessionnal de Toupasa l\'ancien',
      'ja': '仕掛けと呪いと毒と',
      'ko': '함정과 저주와 독',
      'tc': '機關、詛咒、劇毒與……'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 102
  },
  860: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '废都拿巴示艾兰',
      'de': 'Vater und Bruder',
      'en': 'Coming Clean',
      'fr': 'Sur les rails de Nabaath Areng',
      'ja': '廃都ナバスアレン',
      'ko': '나바스아렝 폐허',
      'tc': '廢都拿巴示艾蘭'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 102
  },
  873: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '摇摆的天平',
      'de': 'Ob Mitleid oder Hass',
      'en': 'The Hardened Heart',
      'fr': 'Naissance d\'un bourreau',
      'ja': '揺れる天秤',
      'ko': '흔들리는 천칭',
      'tc': '搖擺的天平'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  874: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '古代大再生魔法',
      'de': 'Alter Zauber',
      'en': 'The Lost and the Found',
      'fr': 'Magie ancestrale',
      'ja': '古の大再生魔法',
      'ko': '고대의 대재생 마법',
      'tc': '古代大再生魔法'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 110
  },
  875: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '勇敢的猎人',
      'de': 'Der Legende auf der Spur',
      'en': 'The Hunter\'s Legacy',
      'fr': 'La chasseuse de légende',
      'ja': '勇気の狩人',
      'ko': '용기 있는 사냥꾼',
      'tc': '勇敢的獵人'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 63
  },
  876: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '奈贝尔特的后悔',
      'de': 'Ein großes Opfer',
      'en': 'Nyelbert\'s Lament',
      'fr': 'Une cupidité bien généreuse',
      'ja': 'ナイルベルトの後悔',
      'ko': '나일베르트의 후회',
      'tc': '奈貝爾特的後悔'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  879: {
    'contentType': 9,
    'exVersion': 3,
    'name': {
      'cn': '梦羽宝境',
      'de': 'Verliese von Lyhe Ghiah',
      'en': 'The Dungeons of Lyhe Ghiah',
      'fr': 'Le Donjon hypogéen du Lyhe Ghiah',
      'ja': '宝物庫 リェー・ギア・ダンジョン',
      'ko': '보물고 리예 기아 지하미궁',
      'tc': '夢羽寶境'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  882: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '复制工厂废墟',
      'de': 'Die kopierte Fabrik',
      'en': 'The Copied Factory',
      'fr': 'La réplique de l\'usine désaffectée',
      'ja': '複製サレタ工場廃墟',
      'ko': '복제된 공장 폐허',
      'tc': '複製工廠廢墟'
    },
    'offsetX': 610,
    'offsetY': 70,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  884: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '魔法宫殿宇宙宫',
      'de': 'Chateau Cosmea',
      'en': 'The Grand Cosmos',
      'fr': 'Le Cosmos coruscant',
      'ja': '魔法宮殿 グラン・コスモス',
      'ko': '그랑 코스모스',
      'tc': '魔法宮殿宇宙宮'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  885: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '哈迪斯孤念歼灭战',
      'de': 'Letzte Läuterung - Hades',
      'en': 'The Minstrel\'s Ballad: Hades\'s Elegy',
      'fr': 'Le Râle de l\'Agonie (extrême)',
      'ja': '極ハーデス討滅戦',
      'ko': '극 하데스 토벌전',
      'tc': '極 黑迪斯殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 105
  },
  887: {
    'contentType': 28,
    'exVersion': 3,
    'name': {
      'cn': '亚历山大绝境战',
      'de': 'Alexander (fatal)',
      'en': 'The Epic of Alexander (Ultimate)',
      'fr': 'L\'Odyssée d\'Alexander (fatal)',
      'ja': '絶アレキサンダー討滅戦',
      'ko': '절 알렉산더 토벌전',
      'tc': '絕 亞歷山大殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  888: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '昂萨哈凯尔（竞争战）',
      'de': 'Onsal Hakair (Danshig Naadam)',
      'en': 'Onsal Hakair (Danshig Naadam)',
      'fr': 'Onsal Hakair (Danshig Naadam)',
      'ja': 'オンサル・ハカイル (終節戦)',
      'ko': '온살 하카이르(계절끝 합전)',
      'tc': '昂薩哈凱爾（競爭戰）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 117
  },
  893: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '纯白誓约、漆黑密约',
      'de': 'Der Wolf und der Drachenreiter',
      'en': 'Vows of Virtue, Deeds of Cruelty',
      'fr': 'Vœux de vertu, actes de cruauté',
      'ja': '白き誓約、黒き密約',
      'ko': '하얀 서약, 검은 밀약',
      'tc': '純白誓約、漆黑密約'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  894: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '我心依旧',
      'de': 'Trubel im Traumland',
      'en': 'As the Heart Bids',
      'fr': 'À l\'écoute de soi',
      'ja': 'この心が望むがままに',
      'ko': '이 마음이 원하는 대로',
      'tc': '我心依舊'
    },
    'offsetX': -12,
    'offsetY': 50,
    'sizeFactor': 400,
    'weatherRate': 40
  },
  897: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '红宝石神兵破坏作战',
      'de': 'Rubinfeuer - Entfesselung',
      'en': 'Cinder Drift',
      'fr': 'Les Nuées de Brandons',
      'ja': 'ルビーウェポン破壊作戦',
      'ko': '루비 웨폰 파괴작전',
      'tc': '紅寶石武器破壞作戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 28
  },
  898: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '黑风海底阿尼德罗追忆馆',
      'de': 'Anamnesis Anyder',
      'en': 'Anamnesis Anyder',
      'fr': 'Anamnesis Anydre',
      'ja': '黒風海底 アニドラス・アナムネーシス',
      'ko': '애니드라스 아남네시스',
      'tc': '黑風海底阿尼德羅追憶館'
    },
    'offsetX': 100,
    'offsetY': -390,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  900: {
    'contentType': 16,
    'exVersion': 0,
    'name': {
      'cn': '出海垂钓',
      'de': 'Auf großer Fahrt',
      'en': 'Ocean Fishing',
      'fr': 'Pêche en mer',
      'ja': 'オーシャンフィッシング',
      'ko': '먼바다 낚시',
      'tc': '出海垂釣'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 14
  },
  902: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 共鸣之章1',
      'de': 'Edens Resonanz - Entladung',
      'en': 'Eden\'s Verse: Fulmination',
      'fr': 'Les Accords d\'Éden - Fulmination',
      'ja': '希望の園エデン：共鳴編1',
      'ko': '희망의 낙원 에덴: 공명편 1',
      'tc': '伊甸希望樂園 共鳴之章1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  903: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 共鸣之章2',
      'de': 'Edens Resonanz - Raserei',
      'en': 'Eden\'s Verse: Furor',
      'fr': 'Les Accords d\'Éden - Fureur',
      'ja': '希望の園エデン：共鳴編2',
      'ko': '희망의 낙원 에덴: 공명편 2',
      'tc': '伊甸希望樂園 共鳴之章2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  904: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 共鸣之章3',
      'de': 'Edens Resonanz - Bildersturm',
      'en': 'Eden\'s Verse: Iconoclasm',
      'fr': 'Les Accords d\'Éden - Iconoclasme',
      'ja': '希望の園エデン：共鳴編3',
      'ko': '희망의 낙원 에덴: 공명편 3',
      'tc': '伊甸希望樂園 共鳴之章3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  905: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 共鸣之章4',
      'de': 'Edens Resonanz - Erstarrung',
      'en': 'Eden\'s Verse: Refulgence',
      'fr': 'Les Accords d\'Éden - Éclat',
      'ja': '希望の園エデン：共鳴編4',
      'ko': '희망의 낙원 에덴: 공명편 4',
      'tc': '伊甸希望樂園 共鳴之章4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 46
  },
  906: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 共鸣之章1',
      'de': 'Edens Resonanz - Entladung (episch)',
      'en': 'Eden\'s Verse: Fulmination (Savage)',
      'fr': 'Les Accords d\'Éden - Fulmination (sadique)',
      'ja': '希望の園エデン零式：共鳴編1',
      'ko': '희망의 낙원 에덴: 공명편(영웅) 1',
      'tc': '伊甸零式希望樂園 共鳴之章1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  907: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 共鸣之章2',
      'de': 'Edens Resonanz - Raserei (episch)',
      'en': 'Eden\'s Verse: Furor (Savage)',
      'fr': 'Les Accords d\'Éden - Fureur (sadique)',
      'ja': '希望の園エデン零式：共鳴編2',
      'ko': '희망의 낙원 에덴: 공명편(영웅) 2',
      'tc': '伊甸零式希望樂園 共鳴之章2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  908: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 共鸣之章3',
      'de': 'Edens Resonanz - Bildersturm (episch)',
      'en': 'Eden\'s Verse: Iconoclasm (Savage)',
      'fr': 'Les Accords d\'Éden - Iconoclasme (sadique)',
      'ja': '希望の園エデン零式：共鳴編3',
      'ko': '희망의 낙원 에덴: 공명편(영웅) 3',
      'tc': '伊甸零式希望樂園 共鳴之章3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  909: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 共鸣之章4',
      'de': 'Edens Resonanz - Erstarrung (episch)',
      'en': 'Eden\'s Verse: Refulgence (Savage)',
      'fr': 'Les Accords d\'Éden - Éclat (sadique)',
      'ja': '希望の園エデン零式：共鳴編4',
      'ko': '희망의 낙원 에덴: 공명편(영웅) 4',
      'tc': '伊甸零式希望樂園 共鳴之章4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 46
  },
  911: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '博兹雅堡垒蒸发事件',
      'de': 'Der Bozja-Vorfall',
      'en': 'The Bozja Incident',
      'fr': 'Prélude à la catastrophe',
      'ja': 'シタデル・ボズヤ蒸発事変',
      'ko': '보즈야 사건',
      'tc': '博茲雅堡壘蒸發事件'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 123
  },
  912: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '红宝石神兵狂想作战',
      'de': 'Rubinfeuer - Trauma',
      'en': 'Cinder Drift (Extreme)',
      'fr': 'Les Nuées de Brandons (extrême)',
      'ja': '極ルビーウェポン破壊作戦',
      'ko': '극 루비 웨폰 파괴작전',
      'tc': '極 紅寶石武器破壞作戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 28
  },
  913: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '博兹雅堡垒追忆战',
      'de': 'Memoria Misera (extrem)',
      'en': 'Memoria Misera (Extreme)',
      'fr': 'Memoria Misera (extrême)',
      'ja': '極シタデル・ボズヤ追憶戦',
      'ko': '극 보즈야 추억전',
      'tc': '極 博茲雅堡壘追憶戰'
    },
    'offsetX': -35,
    'offsetY': 683,
    'sizeFactor': 400,
    'weatherRate': 123
  },
  914: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '英雄无法安息',
      'de': 'Von schlafenden Helden',
      'en': 'A Sleep Disturbed',
      'fr': 'L\'épreuve ronka',
      'ja': '汝、英雄の眠り妨げるは',
      'ko': '그대, 영웅의 잠을 방해하는가',
      'tc': '英雄無法安息'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  916: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '暗影决战诺弗兰特',
      'de': 'Schlacht um Norvrandt',
      'en': 'The Heroes\' Gauntlet',
      'fr': 'La Traversée de Norvrandt',
      'ja': '漆黒決戦 ノルヴラント',
      'ko': '노르브란트',
      'tc': '漆黑決戰諾弗蘭特'
    },
    'offsetX': 626,
    'offsetY': -611,
    'sizeFactor': 200,
    'weatherRate': 125
  },
  917: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '人偶军事基地',
      'de': 'Die Puppenfestung',
      'en': 'The Puppets\' Bunker',
      'fr': 'La base militaire des Pantins',
      'ja': '人形タチノ軍事基地',
      'ko': '인형들의 군사 기지',
      'tc': '人偶軍事基地'
    },
    'offsetX': 290,
    'offsetY': -190,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  920: {
    'contentType': 29,
    'exVersion': 3,
    'name': {
      'cn': '南方博兹雅战线',
      'de': 'Bozja-Südfront',
      'en': 'The Bozjan Southern Front',
      'fr': 'Front sud de Bozja',
      'ja': '南方ボズヤ戦線',
      'ko': '남부 보즈야 전선',
      'tc': '南方博茲雅戰線'
    },
    'offsetX': -127,
    'offsetY': -424,
    'sizeFactor': 100,
    'weatherRate': 124
  },
  922: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '光之战士歼灭战',
      'de': 'Krieger des Lichts',
      'en': 'The Seat of Sacrifice',
      'fr': 'Le Trône du Sacrifice',
      'ja': 'ウォーリア・オブ・ライト討滅戦',
      'ko': '빛의 전사 토벌전',
      'tc': '光之戰士殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 125
  },
  923: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '光之战士幻耀歼灭战',
      'de': 'Krieger des Lichts (extrem)',
      'en': 'The Seat of Sacrifice (Extreme)',
      'fr': 'Le Trône du Sacrifice (extrême)',
      'ja': '極ウォーリア・オブ・ライト討滅戦',
      'ko': '극 빛의 전사 토벌전',
      'tc': '極 光之戰士殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 126
  },
  924: {
    'contentType': 9,
    'exVersion': 3,
    'name': {
      'cn': '梦羽宝殿',
      'de': 'Das Karussell von Lyhe Ghiah',
      'en': 'The Shifting Oubliettes of Lyhe Ghiah',
      'fr': 'Le Jardin secret du Lyhe Ghiah',
      'ja': '宝物庫 リェー・ギア・ダンジョン祭殿',
      'ko': '보물고 리예 기아 지하미궁 제전',
      'tc': '夢羽寶殿'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  925: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '飞翔吧，前往维尔利特！',
      'de': 'Luftangriff auf Werlyt',
      'en': 'Sleep Now in Sapphire',
      'fr': 'Sur la mer de saphir',
      'ja': '飛べ！ ウェルリトへ ',
      'ko': '날아라! 웰리트를 향하여',
      'tc': '飛翔吧，前往維爾利特！'
    },
    'offsetX': 15,
    'offsetY': -610,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  929: {
    'contentType': 16,
    'exVersion': 1,
    'name': {
      'cn': '天上福地云冠群岛',
      'de': 'Das Diadem - Erschließung',
      'en': 'The Diadem',
      'fr': 'Le Diadème',
      'ja': '雲海採集 ディアデム諸島',
      'ko': '디아뎀 제도',
      'tc': '天上福地雲冠群島'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 68
  },
  930: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '希瓦幻巧战',
      'de': 'Traumprüfung - Shiva',
      'en': 'The Akh Afah Amphitheatre (Unreal)',
      'fr': 'L\'Amphithéâtre d\'Akh Afah (irréel)',
      'ja': '幻シヴァ討滅戦',
      'ko': '환 시바 토벌전'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 46
  },
  932: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '褪色的记忆',
      'de': 'Verblasste Erinnerungen',
      'en': 'Faded Memories',
      'fr': 'Souvenir périssable',
      'ja': '色あせた記憶',
      'ko': '빛바랜 기억',
      'tc': '褪色的記憶'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 114
  },
  933: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '魔术工房玛托雅工作室',
      'de': 'Matoyas Atelier',
      'en': 'Matoya\'s Relict',
      'fr': 'L\'Atelier abandonné de Matoya',
      'ja': '魔術工房 マトーヤのアトリエ',
      'ko': '마토야의 공방',
      'tc': '魔術工坊瑪托雅工作室'
    },
    'offsetX': 0,
    'offsetY': -75,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  934: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '绿宝石神兵破坏作战',
      'de': 'Smaragdsturm - Entfesselung',
      'en': 'Castrum Marinum',
      'fr': 'Castrum Marinum',
      'ja': 'エメラルドウェポン破壊作戦',
      'ko': '에메랄드 웨폰 파괴작전',
      'tc': '綠寶石武器破壞作戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  935: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '绿宝石神兵狂想作战',
      'de': 'Smaragdsturm - Trauma',
      'en': 'Castrum Marinum (Extreme)',
      'fr': 'Castrum Marinum (extrême)',
      'ja': '極エメラルドウェポン破壊作戦',
      'ko': '극 에메랄드 웨폰 파괴작전',
      'tc': '極 綠寶石武器破壞作戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  936: {
    'contentType': 29,
    'exVersion': 3,
    'name': {
      'cn': '女王古殿',
      'de': 'Delubrum Reginae',
      'en': 'Delubrum Reginae',
      'fr': 'Delubrum Reginae',
      'ja': 'グンヒルド・ディルーブラム',
      'ko': '군힐드 사원',
      'tc': '女王古殿'
    },
    'offsetX': 0,
    'offsetY': -378,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  937: {
    'contentType': 29,
    'exVersion': 3,
    'name': {
      'cn': '零式女王古殿',
      'de': 'Delubrum Reginae (episch)',
      'en': 'Delubrum Reginae (Savage)',
      'fr': 'Delubrum Reginae (sadique)',
      'ja': 'グンヒルド・ディルーブラム零式',
      'ko': '군힐드 사원(영웅)',
      'tc': '零式女王古殿'
    },
    'offsetX': 0,
    'offsetY': -378,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  938: {
    'contentType': 2,
    'exVersion': 3,
    'name': {
      'cn': '黄金平原帕戈尔赞草原',
      'de': 'Die Goldene Ebene von Paglth\'an',
      'en': 'Paglth\'an',
      'fr': 'La grande prairie de Paglth\'an',
      'ja': '黄金平原 パガルザン',
      'ko': '파글단',
      'tc': '黃金平原帕戈爾贊草原'
    },
    'offsetX': 415,
    'offsetY': -110,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  940: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '九宫幻卡：官方锦标赛',
      'de': 'Triple Triad: Manderville-Turnier',
      'en': 'Triple Triad Open Tournament',
      'fr': 'Tournoi officiel de Triple Triade',
      'ja': 'トリプルトライアド：オフィシャルトーナメント',
      'ko': '트리플 트라이어드: 공식 토너먼트',
      'tc': '九宮幻卡：官方錦標賽'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 800,
    'weatherRate': 0
  },
  941: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '九宫幻卡：锦标赛对局室',
      'de': 'Triple Triad: Privatturnier',
      'en': 'Triple Triad Invitational Parlor',
      'fr': 'Salle de tournoi libre de Triple Triade',
      'ja': 'トリプルトライアド：カスタムトーナメントルーム',
      'ko': '트리플 트라이어드: 친선 토너먼트',
      'tc': '九宮幻卡：錦標賽對局室'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 800,
    'weatherRate': 0
  },
  942: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 再生之章1',
      'de': 'Edens Verheißung - Umbra',
      'en': 'Eden\'s Promise: Umbra',
      'fr': 'La Promesse d\'Éden - Nuée',
      'ja': '希望の園エデン：再生編1',
      'ko': '희망의 낙원 에덴: 재생편 1',
      'tc': '伊甸希望樂園 再生之章1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  943: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 再生之章2',
      'de': 'Edens Verheißung - Litanei',
      'en': 'Eden\'s Promise: Litany',
      'fr': 'La Promesse d\'Éden - Litanie',
      'ja': '希望の園エデン：再生編2',
      'ko': '희망의 낙원 에덴: 재생편 2',
      'tc': '伊甸希望樂園 再生之章2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  944: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 再生之章3',
      'de': 'Edens Verheißung - Anamorphose',
      'en': 'Eden\'s Promise: Anamorphosis',
      'fr': 'La Promesse d\'Éden - Anamorphose',
      'ja': '希望の園エデン：再生編3',
      'ko': '희망의 낙원 에덴: 재생편 3',
      'tc': '伊甸希望樂園 再生之章3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  945: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸希望乐园 再生之章4',
      'de': 'Edens Verheißung - Ewigkeit',
      'en': 'Eden\'s Promise: Eternity',
      'fr': 'La Promesse d\'Éden - Éternité',
      'ja': '希望の園エデン：再生編4',
      'ko': '희망의 낙원 에덴: 재생편 4',
      'tc': '伊甸希望樂園 再生之章4'
    },
    'offsetX': -71,
    'offsetY': 23,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  946: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 再生之章1',
      'de': 'Edens Verheißung - Umbra (episch)',
      'en': 'Eden\'s Promise: Umbra (Savage)',
      'fr': 'La Promesse d\'Éden - Nuée (sadique)',
      'ja': '希望の園エデン零式：再生編1',
      'ko': '희망의 낙원 에덴: 재생편(영웅) 1',
      'tc': '伊甸零式希望樂園 再生之章1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  947: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 再生之章2',
      'de': 'Edens Verheißung - Litanei (episch)',
      'en': 'Eden\'s Promise: Litany (Savage)',
      'fr': 'La Promesse d\'Éden - Litanie (sadique)',
      'ja': '希望の園エデン零式：再生編2',
      'ko': '희망의 낙원 에덴: 재생편(영웅) 2',
      'tc': '伊甸零式希望樂園 再生之章2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  948: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 再生之章3',
      'de': 'Edens Verheißung - Anamorphose (episch)',
      'en': 'Eden\'s Promise: Anamorphosis (Savage)',
      'fr': 'La Promesse d\'Éden - Anamorphose (sadique)',
      'ja': '希望の園エデン零式：再生編3',
      'ko': '희망의 낙원 에덴: 재생편(영웅) 3',
      'tc': '伊甸零式希望樂園 再生之章3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  949: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '伊甸零式希望乐园 再生之章4',
      'de': 'Edens Verheißung - Ewigkeit (episch)',
      'en': 'Eden\'s Promise: Eternity (Savage)',
      'fr': 'La Promesse d\'Éden - Éternité (sadique)',
      'ja': '希望の園エデン零式：再生編4',
      'ko': '희망의 낙원 에덴: 재생편(영웅) 4',
      'tc': '伊甸零式希望樂園 再生之章4'
    },
    'offsetX': 0,
    'offsetY': 75,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  950: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '钻石神兵捕获作战',
      'de': 'Diamantblitz - Entfesselung',
      'en': 'The Cloud Deck',
      'fr': 'Le Tillac des Cirrus',
      'ja': 'ダイヤウェポン捕獲作戦',
      'ko': '다이아몬드 웨폰 포획작전',
      'tc': '鑽石武器捕獲作戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  951: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '钻石神兵狂想作战',
      'de': 'Diamantblitz - Trauma',
      'en': 'The Cloud Deck (Extreme)',
      'fr': 'Le Tillac des Cirrus (extrême)',
      'ja': '極ダイヤウェポン捕獲作戦',
      'ko': '극 다이아몬드 웨폰 포획작전',
      'tc': '極 鑽石武器捕獲作戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  952: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '异形楼阁佐特塔',
      'de': 'Der Turm von Zot',
      'en': 'The Tower of Zot',
      'fr': 'La tour de Zott',
      'ja': '異形楼閣 ゾットの塔',
      'ko': '조트 탑',
      'tc': '異形樓閣佐特塔'
    },
    'offsetX': -50,
    'offsetY': -50,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  953: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '泰坦幻巧战',
      'de': 'Traumprüfung - Titan',
      'en': 'The Navel (Unreal)',
      'fr': 'Le Nombril (irréel)',
      'ja': '幻タイタン討滅戦',
      'ko': '환 타이탄 토벌전'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 23
  },
  954: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '威尔布兰德扬帆起航',
      'de': 'Gute Winde für Vylbrand',
      'en': 'The Great Ship Vylbrand',
      'fr': 'Un navire nommé Vylbrand',
      'ja': 'バイルブランドの船出',
      'ko': '바일브랜드 출항',
      'tc': '威爾布蘭德揚帆起航'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 23
  },
  955: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '神佑女王',
      'de': 'Hinab in die Ruinen',
      'en': 'Fit for a Queen',
      'fr': 'Que les Dieux gardent la Reine',
      'ja': 'ゴッド・セイブ・ザ・クイーン',
      'ko': '갓 세이브 더 퀸',
      'tc': '神佑女王'
    },
    'offsetX': 0,
    'offsetY': -750,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  956: {
    'exVersion': 4,
    'name': {
      'cn': '迷津',
      'de': 'Labyrinthos',
      'en': 'Labyrinthos',
      'fr': 'Le Labyrinthos',
      'ja': 'ラヴィリンソス',
      'ko': '라비린토스',
      'tc': '迷津'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 131
  },
  957: {
    'exVersion': 4,
    'name': {
      'cn': '萨维奈岛',
      'de': 'Thavnair',
      'en': 'Thavnair',
      'fr': 'Thavnair',
      'ja': 'サベネア島',
      'ko': '사베네어 섬',
      'tc': '薩維奈島'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 132
  },
  958: {
    'exVersion': 4,
    'name': {
      'cn': '加雷马',
      'de': 'Garlemald',
      'en': 'Garlemald',
      'fr': 'Garlemald',
      'ja': 'ガレマルド',
      'ko': '갈레말드',
      'tc': '加雷馬'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 133
  },
  959: {
    'exVersion': 4,
    'name': {
      'cn': '叹息海',
      'de': 'Mare Lamentorum',
      'en': 'Mare Lamentorum',
      'fr': 'Mare Lamentorum',
      'ja': '嘆きの海',
      'ko': '비탄의 바다',
      'tc': '嘆息海'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 135
  },
  960: {
    'exVersion': 4,
    'name': {
      'cn': '天外天垓',
      'de': 'Ultima Thule',
      'en': 'Ultima Thule',
      'fr': 'Ultima Thulé',
      'ja': 'ウルティマ・トゥーレ',
      'ko': '울티마 툴레',
      'tc': '天外天垓'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 136
  },
  961: {
    'exVersion': 4,
    'name': {
      'cn': '厄尔庇斯',
      'de': 'Elpis',
      'en': 'Elpis',
      'fr': 'Elpis',
      'ja': 'エルピス',
      'ko': '엘피스',
      'tc': '厄爾庇斯'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 134
  },
  962: {
    'exVersion': 4,
    'name': {
      'cn': '旧萨雷安',
      'de': 'Alt-Sharlayan',
      'en': 'Old Sharlayan',
      'fr': 'Vieille Sharlayan',
      'ja': 'オールド・シャーレアン',
      'ko': '올드 샬레이안',
      'tc': '舊薩雷安'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 137
  },
  963: {
    'exVersion': 4,
    'name': {
      'cn': '拉札罕',
      'de': 'Radz-at-Han',
      'en': 'Radz-at-Han',
      'fr': 'Radz-at-Han',
      'ja': 'ラザハン',
      'ko': '라자한',
      'tc': '拉札漢'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 138
  },
  966: {
    'contentType': 5,
    'exVersion': 3,
    'name': {
      'cn': '希望之炮台：“塔”',
      'de': 'Der Turm, Paradigmenbrecher',
      'en': 'The Tower at Paradigm\'s Breach',
      'fr': 'La tour de la Contingence',
      'ja': '希望ノ砲台：「塔」',
      'ko': '희망의 포대: \'탑\'',
      'tc': '希望之砲臺：“塔”'
    },
    'offsetX': 808,
    'offsetY': -772,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  968: {
    'contentType': 28,
    'exVersion': 4,
    'name': {
      'cn': '幻想龙诗绝境战',
      'de': 'Drachenkrieg (fatal)',
      'en': 'Dragonsong\'s Reprise (Ultimate)',
      'fr': 'La Guerre du chant des dragons (fatal)',
      'ja': '絶竜詩戦争',
      'ko': '절 용시전쟁',
      'tc': '絕 龍詩戰爭'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  969: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '魔导神门巴别塔',
      'de': 'Der Turm von Babil',
      'en': 'The Tower of Babil',
      'fr': 'La tour de Babil',
      'ja': '魔導神門 バブイルの塔',
      'ko': '바브일 탑',
      'tc': '魔導神門巴別塔'
    },
    'offsetX': 270,
    'offsetY': -300,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  970: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '末日树海万相森国',
      'de': 'Vanaspati',
      'en': 'Vanaspati',
      'fr': 'Vanaspati',
      'ja': '終末樹海 ヴァナスパティ',
      'ko': '바나스파티',
      'tc': '末日樹海萬相森國'
    },
    'offsetX': 280,
    'offsetY': 8,
    'sizeFactor': 200,
    'weatherRate': 141
  },
  972: {
    'contentType': 4,
    'exVersion': 3,
    'name': {
      'cn': '利维亚桑幻巧战',
      'de': 'Traumprüfung - Leviathan',
      'en': 'The <Emphasis>Whorleater</Emphasis> (Unreal)',
      'fr': 'Le Briseur de marées (irréel)',
      'ja': '幻リヴァイアサン討滅戦',
      'ko': '환 리바이어선 토벌전'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 38
  },
  973: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '最终幻想末世终迹',
      'de': 'Das Sternengrab',
      'en': 'The Dead Ends',
      'fr': 'L\'Issue aux Impasses',
      'ja': '最終幻想 レムナント',
      'ko': '잔해별',
      'tc': '最終幻想末世終跡'
    },
    'offsetX': -310,
    'offsetY': 15,
    'sizeFactor': 200,
    'weatherRate': 144
  },
  974: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '创造环境极北造物院',
      'de': 'Ktisis Hyperboreia',
      'en': 'Ktisis Hyperboreia',
      'fr': 'L\'Hyperborée',
      'ja': '創造環境 ヒュペルボレア造物院',
      'ko': '휘페르보레아 조물원',
      'tc': '創造環境極北造物院'
    },
    'offsetX': 40,
    'offsetY': -150,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  975: {
    'contentType': 29,
    'exVersion': 3,
    'name': {
      'cn': '扎杜诺尔高原',
      'de': 'Zadnor-Hochebene',
      'en': 'Zadnor',
      'fr': 'Hauts plateaux de Zadnor',
      'ja': 'ザトゥノル高原',
      'ko': '자트노르 고원',
      'tc': '扎杜諾爾高原'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 130
  },
  976: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '乐园都市笑笑镇',
      'de': 'Smileton',
      'en': 'Smileton',
      'fr': 'Risette-sur-lune',
      'ja': '楽園都市 スマイルトン',
      'ko': '스마일턴',
      'tc': '樂園都市笑笑鎮'
    },
    'offsetX': -22,
    'offsetY': -42,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  977: {
    'contentType': 7,
    'exVersion': 3,
    'name': {
      'cn': '死斗至黎明',
      'de': 'Kampf im Morgengrauen',
      'en': 'Death Unto Dawn',
      'fr': 'Aube meurtrière',
      'ja': '黎明の死闘',
      'ko': '여명의 사투',
      'tc': '死鬥至黎明'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 114
  },
  978: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '星海深幽寻因星晶镜',
      'de': 'Das Aitiaskop',
      'en': 'The Aitiascope',
      'fr': 'Le Prisme de l\'Aitia',
      'ja': '星海潜航 アイティオン星晶鏡',
      'ko': '아이티온 별현미경',
      'tc': '星海深幽尋因星晶鏡'
    },
    'offsetX': 8,
    'offsetY': -501,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  986: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '电脑梦境斯提格玛四',
      'de': 'Stigma-Holometrie',
      'en': 'The Stigma Dreamscape',
      'fr': 'Rêve électrique de Stigma-4',
      'ja': '電脳夢想 スティグマ・フォー',
      'ko': '스티그마-4',
      'tc': '電腦夢境斯提格瑪四'
    },
    'offsetX': 144,
    'offsetY': -14,
    'sizeFactor': 200,
    'weatherRate': 140
  },
  992: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '佐迪亚克歼灭战',
      'de': 'Prophetie - Zodiark',
      'en': 'The Dark Inside',
      'fr': 'Le Cratère des Martyrs',
      'ja': 'ゾディアーク討滅戦',
      'ko': '조디아크 토벌전',
      'tc': '佐狄亞克殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 139
  },
  993: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '佐迪亚克暝暗歼灭战',
      'de': 'Eschatos - Zodiark',
      'en': 'The Minstrel\'s Ballad: Zodiark\'s Fall',
      'fr': 'Le Cratère des Martyrs (extrême)',
      'ja': '極ゾディアーク討滅戦',
      'ko': '극 조디아크 토벌전',
      'tc': '極 佐狄亞克殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 139
  },
  994: {
    'contentType': 22,
    'exVersion': 0,
    'name': {
      'cn': '滑稽灵殿闹鬼盛宴',
      'de': 'Lustiges Bankett',
      'en': 'The Phantoms\' Feast',
      'fr': 'Le banquet cauchemardesque',
      'ja': '道化饗宴 ホーンテッドフィースト',
      'ko': '유령의 연회',
      'tc': '滑稽靈殿鬧鬼盛宴'
    },
    'offsetX': 20,
    'offsetY': 10,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  995: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '海德林歼灭战',
      'de': 'Prophetie - Hydaelyn',
      'en': 'The Mothercrystal',
      'fr': 'Le Cristal-mère',
      'ja': 'ハイデリン討滅戦',
      'ko': '하이델린 토벌전',
      'tc': '海德林殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 139
  },
  996: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '海德林晖光歼灭战',
      'de': 'Eschatos - Hydaelyn',
      'en': 'The Minstrel\'s Ballad: Hydaelyn\'s Call',
      'fr': 'Le Cristal-mère (extrême)',
      'ja': '極ハイデリン討滅戦',
      'ko': '극 하이델린 토벌전',
      'tc': '極 海德林殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 139
  },
  997: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '终结之战',
      'de': 'Prophetie - Endsängerin',
      'en': 'The Final Day',
      'fr': 'Le Répons final',
      'ja': '終焉の戦い',
      'ko': '종언의 결전',
      'tc': '終結之戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 116
  },
  998: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '终极之战',
      'de': 'Eschatos - Endsängerin',
      'en': 'The Minstrel\'s Ballad: Endsinger\'s Aria',
      'fr': 'Le Répons final (extrême)',
      'ja': '終極の戦い',
      'ko': '종극의 결전',
      'tc': '終極之戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 146
  },
  1000: {
    'contentType': 9,
    'exVersion': 4,
    'name': {
      'cn': '惊奇百宝城',
      'de': 'Euphoratron',
      'en': 'The Excitatron 6000',
      'fr': 'Le Ludodrome',
      'ja': '宝物庫 エキサイトロン',
      'ko': '보물고 익사이트론',
      'tc': '驚奇百寶城'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1002: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 边境之狱1',
      'de': 'Asphodelos - Erster Kreis',
      'en': 'Asphodelos: The First Circle',
      'fr': 'Les Limbes du Pandæmonium - Parvis',
      'ja': '万魔殿パンデモニウム：辺獄編1',
      'ko': '마의 전당 판데모니움: 변옥편 1',
      'tc': '萬魔殿 邊境之獄1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1003: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 边境之狱1',
      'de': 'Asphodelos - Erster Kreis (episch)',
      'en': 'Asphodelos: The First Circle (Savage)',
      'fr': 'Les Limbes du Pandæmonium - Parvis (sadique)',
      'ja': '万魔殿パンデモニウム零式：辺獄編1',
      'ko': '마의 전당 판데모니움: 변옥편(영웅) 1',
      'tc': '零式萬魔殿 邊境之獄1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1004: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 边境之狱2',
      'de': 'Asphodelos - Zweiter Kreis',
      'en': 'Asphodelos: The Second Circle',
      'fr': 'Les Limbes du Pandæmonium - Cloaque',
      'ja': '万魔殿パンデモニウム：辺獄編2',
      'ko': '마의 전당 판데모니움: 변옥편 2',
      'tc': '萬魔殿 邊境之獄2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1005: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 边境之狱2',
      'de': 'Asphodelos - Zweiter Kreis (episch)',
      'en': 'Asphodelos: The Second Circle (Savage)',
      'fr': 'Les Limbes du Pandæmonium - Cloaque (sadique)',
      'ja': '万魔殿パンデモニウム零式：辺獄編2',
      'ko': '마의 전당 판데모니움: 변옥편(영웅) 2',
      'tc': '零式萬魔殿 邊境之獄2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1006: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 边境之狱3',
      'de': 'Asphodelos - Dritter Kreis',
      'en': 'Asphodelos: The Third Circle',
      'fr': 'Les Limbes du Pandæmonium - Fournaise',
      'ja': '万魔殿パンデモニウム：辺獄編3',
      'ko': '마의 전당 판데모니움: 변옥편 3',
      'tc': '萬魔殿 邊境之獄3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1007: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 边境之狱3',
      'de': 'Asphodelos - Dritter Kreis (episch)',
      'en': 'Asphodelos: The Third Circle (Savage)',
      'fr': 'Les Limbes du Pandæmonium - Fournaise (sadique)',
      'ja': '万魔殿パンデモニウム零式：辺獄編3',
      'ko': '마의 전당 판데모니움: 변옥편(영웅) 3',
      'tc': '零式萬魔殿 邊境之獄3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1008: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 边境之狱4',
      'de': 'Asphodelos - Vierter Kreis',
      'en': 'Asphodelos: The Fourth Circle',
      'fr': 'Les Limbes du Pandæmonium - Abîme',
      'ja': '万魔殿パンデモニウム：辺獄編4',
      'ko': '마의 전당 판데모니움: 변옥편 4',
      'tc': '萬魔殿 邊境之獄4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1009: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 边境之狱4',
      'de': 'Asphodelos - Vierter Kreis (episch)',
      'en': 'Asphodelos: The Fourth Circle (Savage)',
      'fr': 'Les Limbes du Pandæmonium - Abîme (sadique)',
      'ja': '万魔殿パンデモニウム零式：辺獄編4',
      'ko': '마의 전당 판데모니움: 변옥편(영웅) 4',
      'tc': '零式萬魔殿 邊境之獄4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1010: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '踏破风雪',
      'de': 'Ein frostiger Empfang',
      'en': 'A Frosty Reception',
      'fr': 'Un accueil glacial',
      'ja': '霜雪を踏みしめて',
      'ko': '눈서리를 밟고',
      'tc': '踏破風雪'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1011: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '无尽寒夜',
      'de': 'In fremder Haut',
      'en': 'In from the Cold',
      'fr': 'Le voleur de corps',
      'ja': '寒夜のこと',
      'ko': '어느 추운 밤에',
      'tc': '無盡寒夜'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 27
  },
  1012: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '扩散的末日',
      'de': 'Rote Himmel, roter Schnee',
      'en': 'As the Heavens Burn',
      'fr': 'L\'arène des neiges',
      'ja': '拡がる終末',
      'ko': '퍼져가는 종말',
      'tc': '擴散的末日'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 141
  },
  1013: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '晓月之终途',
      'de': 'Endschreiter',
      'en': 'Endwalker',
      'fr': 'Arpenteur des finitudes',
      'ja': '暁月のフィナーレ',
      'ko': '효월의 종언',
      'tc': '曉月之終途'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 100,
    'weatherRate': 143
  },
  1014: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '上一任阿谢姆的教导',
      'de': ' Es reimt sich auf Gebell',
      'en': 'Worthy of His Back',
      'fr': 'Le défi de l\'ancienne Azem',
      'ja': '前代アゼムの手ほどき',
      'ko': '선대 아젬과의 대련',
      'tc': '上一任阿謝姆的教導'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 134
  },
  1015: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '未来之路',
      'de': 'Offen für neue Wege',
      'en': 'A Path Unveiled',
      'fr': 'Des esprits et des hommes',
      'ja': '開かれた道の先へ',
      'ko': '열린 길 저편으로',
      'tc': '未來之路'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 3
  },
  1016: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '驶向融合的巨轮',
      'de': 'Im Hafen des Friedens',
      'en': 'To Calmer Seas',
      'fr': 'Cap sur la paix',
      'ja': '融和への船出',
      'ko': '화합을 향한 출항',
      'tc': '駛向融合的巨輪'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1017: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '英魂安息',
      'de': 'Domanisches Begräbnis',
      'en': 'Laid to Rest',
      'fr': 'Des adieux domiens',
      'ja': 'ドマの弔い',
      'ko': '도마의 추도',
      'tc': '英魂安息'
    },
    'offsetX': 240,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1018: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '仰望苍穹，不断迈进',
      'de': 'Der Weg zur Erneuerung',
      'en': 'Ever March Heavensward',
      'fr': 'La voie du renouveau',
      'ja': '蒼天を仰ぎ、歩み続ける',
      'ko': '창천을 보며 나아가자',
      'tc': '仰望蒼天，不斷邁進'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 114
  },
  1019: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '目送生者前行',
      'de': 'Trauer und Hoffnung',
      'en': 'The Gift of Mercy',
      'fr': 'Acceptation',
      'ja': '僕たちは還り、君を見送ろう',
      'ko': '우리는 돌아가 그대를 보내리',
      'tc': '目送生者前行'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1020: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '大镰的意义',
      'de': 'Die Bedeutung der Sense',
      'en': 'The Harvest Begins',
      'fr': 'La vraie puissance de la faux',
      'ja': '大鎌の意味',
      'ko': '큰낫의 의미',
      'tc': '大鐮的意義'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1021: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '暗杀道',
      'de': 'Die Kunst des Tötens',
      'en': 'The Killing Art',
      'fr': 'La voie du néant',
      'ja': '暗殺道',
      'ko': '암살의 길',
      'tc': '暗殺道'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 42
  },
  1022: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '贤者的短杖',
      'de': 'Des Weisen wundersames Werkzeug',
      'en': 'Sage\'s Focus',
      'fr': 'Les armes du sage',
      'ja': '賢者の短杖',
      'ko': '현자의 짧은 지팡이',
      'tc': '賢者的短杖'
    },
    'offsetX': 40,
    'offsetY': 6,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1023: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '生命瞬逝，术道恒久',
      'de': 'Das Leben ist kurz, die Kunst ist lang',
      'en': 'Life Ephemeral, Path Eternal',
      'fr': 'Existences éphémères et savoir éternel',
      'ja': '人命は儚く、術のみちは永久に',
      'ko': '생명은 덧없으나 기술은 영원하리',
      'tc': '生命瞬逝，術道恆久'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 95,
    'weatherRate': 50
  },
  1035: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '究极神兵幻巧战',
      'de': 'Traumprüfung - Ultima',
      'en': 'Ultima\'s Bane (Unreal)',
      'fr': 'Le fléau d\'Ultima (irréel)',
      'ja': '幻アルテマウェポン破壊作戦'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 31
  },
  1036: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '天然要害沙斯塔夏溶洞',
      'de': 'Sastasha',
      'en': 'Sastasha',
      'fr': 'Sastasha',
      'ja': '天然要害 サスタシャ浸食洞',
      'ko': '사스타샤 침식 동굴',
      'tc': '天然要害沙斯塔夏溶洞'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1037: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '地下灵殿塔姆·塔拉墓园',
      'de': 'Totenacker Tam-Tara',
      'en': 'The Tam–Tara Deepcroft',
      'fr': 'L\'Hypogée de Tam-Tara',
      'ja': '地下霊殿 タムタラの墓所',
      'ko': '탐타라 묘소',
      'tc': '地下靈殿塔姆·塔拉墓園'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 300,
    'weatherRate': 0
  },
  1038: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '封锁坑道铜铃铜山',
      'de': 'Kupferglocken-Mine',
      'en': 'Copperbell Mines',
      'fr': 'Les Mines de Clochecuivre',
      'ja': '封鎖坑道 カッパーベル銅山',
      'ko': '구리종 광산',
      'tc': '封鎖坑道銅鈴銅山'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1039: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '监狱废墟托托·拉克千狱',
      'de': 'Tausend Löcher von Toto-Rak',
      'en': 'The Thousand Maws of Toto–Rak',
      'fr': 'Les Mille Gueules de Toto-Rak',
      'ja': '監獄廃墟 トトラクの千獄',
      'ko': '토토라크 감옥',
      'tc': '監獄廢墟托托·拉克千獄'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1040: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '名门府邸静语庄园',
      'de': 'Haukke-Herrenhaus',
      'en': 'Haukke Manor',
      'fr': 'Le Manoir des Haukke',
      'ja': '名門屋敷 ハウケタ御用邸',
      'ko': '하우케타 별궁',
      'tc': '名門府邸靜語莊園'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1041: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '休养胜地布雷福洛克斯野营地',
      'de': 'Brüllvolx\' Langrast',
      'en': 'Brayflox\'s Longstop',
      'fr': 'Le Bivouac de Brayflox',
      'ja': '奪還支援 ブレイフロクスの野営地',
      'ko': '브레이플록스의 야영지',
      'tc': '休養勝地布雷福洛克斯野營地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1042: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '对龙城塞石卫塔',
      'de': 'Steinerne Wacht',
      'en': 'The Stone Vigil',
      'fr': 'Le Vigile de Pierre',
      'ja': '城塞攻略 ストーンヴィジル',
      'ko': '돌방패 경계초소',
      'tc': '對龍城塞石衛塔'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 27
  },
  1043: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '神兵要塞帝国南方堡',
      'de': 'Castrum Meridianum - Außenbereich',
      'en': 'Castrum Meridianum',
      'fr': 'Castrum Meridianum',
      'ja': '外郭攻略 カストルム・メリディアヌム',
      'ko': '카스트룸 메리디아눔',
      'tc': '神兵要塞帝國南方堡'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1044: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '最终决战天幕魔导城',
      'de': 'Castrum Meridianum - Praetorium',
      'en': 'The Praetorium',
      'fr': 'Le Praetorium',
      'ja': '最終決戦 魔導城プラエトリウム',
      'ko': '마도성 프라이토리움',
      'tc': '最終決戰天幕魔導城'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1045: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '伊弗利特讨伐战',
      'de': 'Das Grab der Lohe',
      'en': 'The Bowl of Embers',
      'fr': 'Le Cratère des tisons',
      'ja': 'イフリート討伐戦',
      'ko': '이프리트 토벌전',
      'tc': '伊弗利特討伐戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 25
  },
  1046: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '泰坦讨伐战',
      'de': 'Der Nabel',
      'en': 'The Navel',
      'fr': 'Le Nombril',
      'ja': 'タイタン討伐戦',
      'ko': '타이탄 토벌전',
      'tc': '泰坦討伐戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 23
  },
  1047: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '迦楼罗讨伐战',
      'de': 'Das Tosende Auge',
      'en': 'The Howling Eye',
      'fr': 'Hurlœil',
      'ja': 'ガルーダ討伐戦',
      'ko': '가루다 토벌전',
      'tc': '迦樓羅討伐戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 26
  },
  1048: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '究极神兵破坏作战',
      'de': 'Porta Decumana',
      'en': 'The Porta Decumana',
      'fr': 'Porta Decumana',
      'ja': 'アルテマウェポン破壊作戦',
      'ko': '알테마 웨폰 파괴작전',
      'tc': '究極武器破壞作戰'
    },
    'offsetX': 772,
    'offsetY': 600,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1049: {
    'contentType': 7,
    'exVersion': 0,
    'name': {
      'cn': '里塔提恩强攻战',
      'de': 'Kap Westwind',
      'en': 'Cape Westwind',
      'fr': 'Le Cap Vendouest',
      'ja': 'リットアティン強襲戦',
      'ko': '리트아틴 강습전',
      'tc': '里塔提恩強攻戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1050: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '近东秘宝阿尔扎达尔海底遗迹群',
      'de': 'Alzadaals Vermächtnis',
      'en': 'Alzadaal\'s Legacy',
      'fr': 'Le legs d\'Alzadaal',
      'ja': '近東秘宝 アルザダール海底遺跡群',
      'ko': '알자달 해저 유적',
      'tc': '近東秘寶阿爾扎達爾海底遺跡群'
    },
    'offsetX': 15,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1051: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '涅尔瓦的帝国',
      'de': 'Nervas Reich',
      'en': 'Forlorn Glory',
      'fr': 'Nerva, le patriote',
      'ja': 'ネルウァの帝国',
      'ko': '네르바의 제국',
      'tc': '涅爾瓦的帝國'
    },
    'offsetX': -230,
    'offsetY': -250,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  1052: {
    'contentType': 7,
    'exVersion': 0,
    'name': {
      'cn': '拉哈布雷亚讨伐战',
      'de': 'Das Antlitz der Kaltblütigkeit',
      'en': 'Devastation',
      'fr': 'Le Praetorium en flammes',
      'ja': 'アシエン・ラハブレア討伐戦',
      'ko': '아씨엔 라하브레아 토벌전',
      'tc': '拉哈布雷亞討伐戰'
    },
    'offsetX': 704,
    'offsetY': -480,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1054: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '灿烂神域阿格莱亚',
      'de': 'Aglaia',
      'en': 'Aglaia',
      'fr': 'Domaine divin - Aglaé',
      'ja': '輝ける神域 アグライア',
      'ko': '찬란한 신역 아글라이아',
      'tc': '燦爛神域阿格萊亞'
    },
    'offsetX': -80,
    'offsetY': -550,
    'sizeFactor': 200,
    'weatherRate': 147
  },
  1058: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '水晶冲突（角力学校：自定赛）',
      'de': 'Crystalline Conflict: Die Palästra (Schaukampf)',
      'en': 'Crystalline Conflict (Custom Match - The Palaistra)',
      'fr': 'Crystalline Conflict (partie personnalisée - Le Palestre)',
      'ja': 'クリスタルコンフリクト(パライストラ：カスタムマッチ)',
      'ko': '크리스탈라인 컨플릭트(팔라이스트라: 친선 경기)',
      'tc': '水晶衝突（角力學校：自定賽）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1059: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '水晶冲突（火山之心：自定赛）',
      'de': 'Crystalline Conflict: Das Herz des Vulkans (Schaukampf)',
      'en': 'Crystalline Conflict (Custom Match - The Volcanic Heart)',
      'fr': 'Crystalline Conflict (partie personnalisée - Le Cœur volcanique)',
      'ja': 'クリスタルコンフリクト(ヴォルカニック・ハート：カスタムマッチ)',
      'ko': '크리스탈라인 컨플릭트(화산심장: 친선 경기)',
      'tc': '水晶衝突（火山之心：自定賽）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1060: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '水晶冲突（九霄云上：自定赛）',
      'de': 'Crystalline Conflict: Wolke Sieben (Schaukampf)',
      'en': 'Crystalline Conflict (Custom Match - Cloud Nine)',
      'fr': 'Crystalline Conflict (partie personnalisée - Le Petit Nuage)',
      'ja': 'クリスタルコンフリクト(クラウドナイン：カスタムマッチ)',
      'ko': '크리스탈라인 컨플릭트(절정의 구름: 친선 경기)',
      'tc': '水晶衝突（九霄雲上：自定賽）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1062: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '凛冽洞天披雪大冰壁',
      'de': 'Das Schneekleid',
      'en': 'Snowcloak',
      'fr': 'Manteneige',
      'ja': '氷結潜窟 スノークローク大氷壁',
      'ko': '얼음외투 대빙벽',
      'tc': '凜冽洞天披雪大冰壁'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 42
  },
  1063: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '幻龙残骸密约之塔',
      'de': 'Hüter des Sees',
      'en': 'The Keeper of the Lake',
      'fr': 'Le Gardien du lac',
      'ja': '幻龍残骸 黙約の塔',
      'ko': '묵약의 탑',
      'tc': '幻龍殘骸密約之塔'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 74
  },
  1064: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '天山绝顶索姆阿尔灵峰',
      'de': 'Sohm Al',
      'en': 'Sohm Al',
      'fr': 'Sohm Al',
      'ja': '霊峰踏破 ソーム・アル',
      'ko': '솜 알',
      'tc': '天山絕頂索姆阿爾靈峰'
    },
    'offsetX': 185,
    'offsetY': 51,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1065: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '邪龙王座龙巢神殿',
      'de': 'Nest des Drachen',
      'en': 'The Aery',
      'fr': 'L\'Aire',
      'ja': '邪竜血戦 ドラゴンズエアリー',
      'ko': '용의 둥지',
      'tc': '邪龍王座龍巢神殿'
    },
    'offsetX': -40,
    'offsetY': 55,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  1066: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '圣教中枢伊修加德教皇厅',
      'de': 'Erzbasilika',
      'en': 'The Vault',
      'fr': 'La Voûte',
      'ja': '強硬突入 イシュガルド教皇庁',
      'ko': '이슈가르드 교황청',
      'tc': '聖教中樞伊修加爾德教皇廳'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1067: {
    'contentType': 4,
    'exVersion': 0,
    'name': {
      'cn': '莫古力贤王歼灭战',
      'de': 'Königliche Konfrontation (schwer)',
      'en': 'Thornmarch (Hard)',
      'fr': 'La Lisière de ronces (brutal)',
      'ja': '善王モグル・モグXII世討滅戦',
      'ko': '선왕 모그루 모그 XII세 토벌전',
      'tc': '善王莫古爾·莫古XII世殲滅戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 30
  },
  1068: {
    'contentType': 7,
    'exVersion': 0,
    'name': {
      'cn': '皇都伊修加德保卫战',
      'de': 'Der Schicksalsweg',
      'en': 'The Steps of Faith',
      'fr': 'Le Siège de la sainte Cité d\'Ishgard',
      'ja': '皇都イシュガルド防衛戦',
      'ko': '성도 이슈가르드 방어전',
      'tc': '皇都伊修加爾德保衛戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  1069: {
    'contentType': 30,
    'exVersion': 4,
    'name': {
      'cn': '多变迷宫 希拉狄哈水道',
      'de': 'Die Unterstadt von Sil\'dih',
      'en': 'The Sil\'dihn Subterrane',
      'fr': 'Les canalisations sildiennes - Donjon à embranchements',
      'ja': 'ヴァリアントダンジョン シラディハ水道',
      'ko': '변형 던전: 실디하 지하수도',
      'tc': '多變迷宮 希拉狄哈水道'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1070: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '异界孤城特罗亚宫廷',
      'de': 'Der Schwarze Hof von Troia',
      'en': 'The Fell Court of Troia',
      'fr': 'Le Château de Troïa',
      'ja': '異界孤城 トロイアコート',
      'ko': '트로이아 궁정',
      'tc': '異界孤城特羅亞宮廷'
    },
    'offsetX': -76,
    'offsetY': -180,
    'sizeFactor': 200,
    'weatherRate': 149
  },
  1071: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '巴尔巴莉希娅歼灭战',
      'de': 'Prophetie - Barbarizia',
      'en': 'Storm\'s Crown',
      'fr': 'La Toison des tempêtes',
      'ja': 'バルバリシア討滅戦',
      'ko': '바르바리차 토벌전',
      'tc': '巴爾巴莉希亞殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 149
  },
  1072: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '巴尔巴莉希娅歼殛战',
      'de': 'Eschatos - Barbarizia',
      'en': 'Storm\'s Crown (Extreme)',
      'fr': 'La Toison des tempêtes (extrême)',
      'ja': '極バルバリシア討滅戦',
      'ko': '극 바르바리차 토벌전',
      'tc': '極 巴爾巴莉希亞殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 149
  },
  1075: {
    'contentType': 30,
    'exVersion': 4,
    'name': {
      'cn': '异闻希拉狄哈水道',
      'de': 'Die kuriose Unterstadt von Sil\'dih',
      'en': 'Another Sil\'dihn Subterrane',
      'fr': 'Les canalisations sildiennes annexes - Donjon alternatif',
      'ja': 'アナザーダンジョン 異聞シラディハ水道',
      'ko': '파생 던전: 번외 실디하 지하수도',
      'tc': '異聞迷宮 異聞希拉狄哈水道'
    },
    'offsetX': 335,
    'offsetY': 100,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1076: {
    'contentType': 30,
    'exVersion': 4,
    'name': {
      'cn': '零式异闻希拉狄哈水道',
      'de': 'Die kuriose Unterstadt von Sil\'dih (episch)',
      'en': 'Another Sil\'dihn Subterrane (Savage)',
      'fr': 'Les canalisations sildiennes annexes - Donjon alternatif (sadique)',
      'ja': 'アナザーダンジョン 異聞シラディハ水道 零式',
      'ko': '파생 던전: 번외 실디하 지하수도(영웅)',
      'tc': '異聞迷宮 零式異聞希拉狄哈水道'
    },
    'offsetX': 335,
    'offsetY': 100,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1081: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 炼净之狱1',
      'de': 'Abyssos - Fünfter Kreis',
      'en': 'Abyssos: The Fifth Circle',
      'fr': 'Le Purgatoire du Pandæmonium - Cages',
      'ja': '万魔殿パンデモニウム：煉獄編1',
      'ko': '마의 전당 판데모니움: 연옥편 1',
      'tc': '萬魔殿 煉淨之獄1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1082: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 炼净之狱1',
      'de': 'Abyssos - Fünfter Kreis (episch)',
      'en': 'Abyssos: The Fifth Circle (Savage)',
      'fr': 'Le Purgatoire du Pandæmonium - Cages (sadique)',
      'ja': '万魔殿パンデモニウム零式：煉獄編1',
      'ko': '마의 전당 판데모니움: 연옥편(영웅) 1',
      'tc': '零式萬魔殿 煉淨之獄1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1083: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 炼净之狱2',
      'de': 'Abyssos - Sechster Kreis',
      'en': 'Abyssos: The Sixth Circle',
      'fr': 'Le Purgatoire du Pandæmonium - Croisements',
      'ja': '万魔殿パンデモニウム：煉獄編2',
      'ko': '마의 전당 판데모니움: 연옥편 2',
      'tc': '萬魔殿 煉淨之獄2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1084: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 炼净之狱2',
      'de': 'Abyssos - Sechster Kreis (episch)',
      'en': 'Abyssos: The Sixth Circle (Savage)',
      'fr': 'Le Purgatoire du Pandæmonium - Croisements (sadique)',
      'ja': '万魔殿パンデモニウム零式：煉獄編2',
      'ko': '마의 전당 판데모니움: 연옥편(영웅) 2',
      'tc': '零式萬魔殿 煉淨之獄2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1085: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 炼净之狱3',
      'de': 'Abyssos - Siebter Kreis',
      'en': 'Abyssos: The Seventh Circle',
      'fr': 'Le Purgatoire du Pandæmonium - Racines',
      'ja': '万魔殿パンデモニウム：煉獄編3',
      'ko': '마의 전당 판데모니움: 연옥편 3',
      'tc': '萬魔殿 煉淨之獄3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1086: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 炼净之狱3',
      'de': 'Abyssos - Siebter Kreis (episch)',
      'en': 'Abyssos: The Seventh Circle (Savage)',
      'fr': 'Le Purgatoire du Pandæmonium - Racines (sadique)',
      'ja': '万魔殿パンデモニウム零式：煉獄編3',
      'ko': '마의 전당 판데모니움: 연옥편(영웅) 3',
      'tc': '零式萬魔殿 煉淨之獄3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1087: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 炼净之狱4',
      'de': 'Abyssos - Achter Kreis',
      'en': 'Abyssos: The Eighth Circle',
      'fr': 'Le Purgatoire du Pandæmonium - Hérédité',
      'ja': '万魔殿パンデモニウム：煉獄編4',
      'ko': '마의 전당 판데모니움: 연옥편 4',
      'tc': '萬魔殿 煉淨之獄4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1088: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 炼净之狱4',
      'de': 'Abyssos - Achter Kreis (episch)',
      'en': 'Abyssos: The Eighth Circle (Savage)',
      'fr': 'Le Purgatoire du Pandæmonium - Hérédité (sadique)',
      'ja': '万魔殿パンデモニウム零式：煉獄編4',
      'ko': '마의 전당 판데모니움: 연옥편(영웅) 4',
      'tc': '零式萬魔殿 煉淨之獄4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1090: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '萨菲洛特幻巧战',
      'de': 'Traumprüfung - Sephirot',
      'en': 'Containment Bay S1T7 (Unreal)',
      'fr': 'Unité de contention S1P7 (irréel)',
      'ja': '幻魔神セフィロト討滅戦'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 66
  },
  1091: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '失传的力量',
      'de': 'Wo alles seinen Anfang nimmt',
      'en': 'Where Everything Begins',
      'fr': 'Au commencement était Zero',
      'ja': '失われた力',
      'ko': '잃어버린 힘',
      'tc': '失傳的力量'
    },
    'offsetX': 143,
    'offsetY': -64,
    'sizeFactor': 200,
    'weatherRate': 149
  },
  1095: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '卢比坎特歼灭战',
      'de': 'Prophetie - Rubicante',
      'en': 'Mount Ordeals',
      'fr': 'Le Mont du Supplice',
      'ja': 'ルビカンテ討滅戦',
      'ko': '루비칸테 토벌전',
      'tc': '盧比坎特殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1096: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '卢比坎特歼殛战',
      'de': 'Eschatos - Rubicante',
      'en': 'Mount Ordeals (Extreme)',
      'fr': 'Le Mont du Supplice (extrême)',
      'ja': '極ルビカンテ討滅戦',
      'ko': '극 루비칸테 토벌전',
      'tc': '極 盧比坎特殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1097: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '雪山奥窟冥魂石洞',
      'de': 'Lapis Manalis',
      'en': 'Lapis Manalis',
      'fr': 'Lapis Manalis',
      'ja': '雪山冥洞 ラピス・マナリス',
      'ko': '라피스 마날리스',
      'tc': '雪山奧窟冥魂石洞'
    },
    'offsetX': -46,
    'offsetY': 570,
    'sizeFactor': 200,
    'weatherRate': 42
  },
  1099: {
    'contentType': 21,
    'exVersion': 4,
    'name': {
      'cn': '正统优雷卡 地下1～10层',
      'de': 'Eureka Orthos (Ebenen 1-10)',
      'en': 'Eureka Orthos (Floors 1-10)',
      'fr': 'Eurêka Orthos (sous-sols 1-10)',
      'ja': 'オルト・エウレカ B1～B10',
      'ko': '에우레카 오르토스 B1~B10',
      'tc': '正統優雷卡 地下1～10層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1100: {
    'contentType': 21,
    'exVersion': 4,
    'name': {
      'cn': '正统优雷卡 地下11～20层',
      'de': 'Eureka Orthos (Ebenen 11-20)',
      'en': 'Eureka Orthos (Floors 11-20)',
      'fr': 'Eurêka Orthos (sous-sols 11-20)',
      'ja': 'オルト・エウレカ B11～B20',
      'ko': '에우레카 오르토스 B11~B20',
      'tc': '正統優雷卡 地下11～20層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1101: {
    'contentType': 21,
    'exVersion': 4,
    'name': {
      'cn': '正统优雷卡 地下21～30层',
      'de': 'Eureka Orthos (Ebenen 21-30)',
      'en': 'Eureka Orthos (Floors 21-30)',
      'fr': 'Eurêka Orthos (sous-sols 21-30)',
      'ja': 'オルト・エウレカ B21～B30',
      'ko': '에우레카 오르토스 B21~B30',
      'tc': '正統優雷卡 地下21～30層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1102: {
    'contentType': 21,
    'exVersion': 4,
    'name': {
      'cn': '正统优雷卡 地下31～40层',
      'de': 'Eureka Orthos (Ebenen 31-40)',
      'en': 'Eureka Orthos (Floors 31-40)',
      'fr': 'Eurêka Orthos (sous-sols 31-40)',
      'ja': 'オルト・エウレカ B31～B40',
      'ko': '에우레카 오르토스 B31~B40',
      'tc': '正統優雷卡 地下31～40層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1103: {
    'contentType': 21,
    'exVersion': 4,
    'name': {
      'cn': '正统优雷卡 地下41～50层',
      'de': 'Eureka Orthos (Ebenen 41-50)',
      'en': 'Eureka Orthos (Floors 41-50)',
      'fr': 'Eurêka Orthos (sous-sols 41-50)',
      'ja': 'オルト・エウレカ B41～B50',
      'ko': '에우레카 오르토스 B41~B50',
      'tc': '正統優雷卡 地下41～50層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1104: {
    'contentType': 21,
    'exVersion': 4,
    'name': {
      'cn': '正统优雷卡 地下51～60层',
      'de': 'Eureka Orthos (Ebenen 51-60)',
      'en': 'Eureka Orthos (Floors 51-60)',
      'fr': 'Eurêka Orthos (sous-sols 51-60)',
      'ja': 'オルト・エウレカ B51～B60',
      'ko': '에우레카 오르토스 B51~B60',
      'tc': '正統優雷卡 地下51～60層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1105: {
    'contentType': 21,
    'exVersion': 4,
    'name': {
      'cn': '正统优雷卡 地下61～70层',
      'de': 'Eureka Orthos (Ebenen 61-70)',
      'en': 'Eureka Orthos (Floors 61-70)',
      'fr': 'Eurêka Orthos (sous-sols 61-70)',
      'ja': 'オルト・エウレカ B61～B70',
      'ko': '에우레카 오르토스 B61~B70',
      'tc': '正統優雷卡 地下61～70層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1106: {
    'contentType': 21,
    'exVersion': 4,
    'name': {
      'cn': '正统优雷卡 地下71～80层',
      'de': 'Eureka Orthos (Ebenen 71-80)',
      'en': 'Eureka Orthos (Floors 71-80)',
      'fr': 'Eurêka Orthos (sous-sols 71-80)',
      'ja': 'オルト・エウレカ B71～B80',
      'ko': '에우레카 오르토스 B71~B80',
      'tc': '正統優雷卡 地下71～80層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1107: {
    'contentType': 21,
    'exVersion': 4,
    'name': {
      'cn': '正统优雷卡 地下81～90层',
      'de': 'Eureka Orthos (Ebenen 81-90)',
      'en': 'Eureka Orthos (Floors 81-90)',
      'fr': 'Eurêka Orthos (sous-sols 81-90)',
      'ja': 'オルト・エウレカ B81～B90',
      'ko': '에우레카 오르토스 B81~B90',
      'tc': '正統優雷卡 地下81～90層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1108: {
    'contentType': 21,
    'exVersion': 4,
    'name': {
      'cn': '正统优雷卡 地下91～100层',
      'de': 'Eureka Orthos (Ebenen 91-100)',
      'en': 'Eureka Orthos (Floors 91-100)',
      'fr': 'Eurêka Orthos (sous-sols 91-100)',
      'ja': 'オルト・エウレカ B91～B100',
      'ko': '에우레카 오르토스 B91~B100',
      'tc': '正統優雷卡 地下91～100層'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1109: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '学识宝库迦巴勒幻想图书馆',
      'de': 'Große Gubal-Bibliothek',
      'en': 'The Great Gubal Library',
      'fr': 'La Grande bibliothèque de Gubal',
      'ja': '禁書回収 グブラ幻想図書館',
      'ko': '구브라 환상도서관',
      'tc': '學識寶庫迦巴勒幻想圖書館'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1110: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '血战苍穹魔科学研究所',
      'de': 'Ätherochemisches For­schungs­labor',
      'en': 'The Aetherochemical Research Facility',
      'fr': 'Le Laboratoire de magismologie',
      'ja': '蒼天聖戦 魔科学研究所',
      'ko': '마과학 연구소',
      'tc': '蒼天聖戰 魔科學研究所'
    },
    'offsetX': -18,
    'offsetY': 149,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1111: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '星海空间颠倒塔',
      'de': 'Antiturm',
      'en': 'The Antitower',
      'fr': 'L\'Antitour',
      'ja': '星海観測 逆さの塔',
      'ko': '거꾸로 선 탑',
      'tc': '星海空間顛倒塔'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1112: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '天龙宫殿忆罪宫',
      'de': 'Sohr Khai',
      'en': 'Sohr Khai',
      'fr': 'Sohr Khai',
      'ja': '天竜宮殿 ソール・カイ',
      'ko': '소르 카이',
      'tc': '天龍宮殿憶罪宮'
    },
    'offsetX': 370,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1113: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '险峻峡谷塞尔法特尔溪谷',
      'de': 'Xelphatol',
      'en': 'Xelphatol',
      'fr': 'Xelphatol',
      'ja': '峻厳渓谷 ゼルファトル',
      'ko': '젤파톨',
      'tc': '險峻峽谷塞爾法特爾溪谷'
    },
    'offsetX': -148,
    'offsetY': 35,
    'sizeFactor': 200,
    'weatherRate': 40
  },
  1114: {
    'contentType': 2,
    'exVersion': 1,
    'name': {
      'cn': '坚牢铁壁巴埃萨长城',
      'de': 'Baelsar-Wall',
      'en': 'Baelsar\'s Wall',
      'fr': 'La Muraille de Baelsar',
      'ja': '巨大防壁 バエサルの長城',
      'ko': '바일사르 장성',
      'tc': '堅牢鐵壁巴埃薩長城'
    },
    'offsetX': 182,
    'offsetY': 32,
    'sizeFactor': 200,
    'weatherRate': 40
  },
  1115: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '充满活力的父子',
      'de': 'Väterliche Liebe',
      'en': 'Generational Bonding',
      'fr': 'Tel gentilhomme, tel gentilhomme',
      'ja': 'はつらつとした親子',
      'ko': '은밀한 음모',
      'tc': '充滿活力的父子'
    },
    'offsetX': -230,
    'offsetY': -250,
    'sizeFactor': 200,
    'weatherRate': 28
  },
  1116: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '机关大殿',
      'de': 'Die Mechanische Menagerie',
      'en': 'The Clockwork Castletown',
      'fr': 'Le Traquenard oriental',
      'ja': '東方絡繰御殿',
      'ko': '동방 꼭두각시 어전',
      'tc': '機關大殿'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1117: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '水晶冲突（机关大殿：自定赛）',
      'de': 'Crystalline Conflict: Die Mechanische Menagerie (Schaukampf)',
      'en': 'Crystalline Conflict (Custom Match - The Clockwork Castletown)',
      'fr': 'Crys. Conflict (partie perso. - Le Traquenard oriental)',
      'ja': 'クリスタルコンフリクト(東方絡繰御殿：カスタムマッチ)',
      'ko': '크리스탈라인 컨플릭트(동방 꼭두각시 어전: 친선 경기)',
      'tc': '水晶衝突（機關大殿：自定賽）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1118: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '喜悦神域欧芙洛绪涅',
      'de': 'Euphrosyne',
      'en': 'Euphrosyne',
      'fr': 'Domaine divin - Euphrosyne',
      'ja': '喜びの神域 エウプロシュネ',
      'ko': '환희의 신역 에우프로시네',
      'tc': '喜悅神域歐芙洛緒涅'
    },
    'offsetX': 0,
    'offsetY': 480,
    'sizeFactor': 200,
    'weatherRate': 147
  },
  1120: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '一块面包的交易',
      'de': 'Der Wert einer Buuds',
      'en': 'An Unforeseen Bargain',
      'fr': 'Pour une bouchée de pain',
      'ja': 'パンひとつと引き換えに',
      'ko': '빵 하나와 바꾸어',
      'tc': '未料想過的交易'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 58
  },
  1121: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '索菲娅幻巧战',
      'de': 'Traumprüfung - Sophia',
      'en': 'Containment Bay P1T6 (Unreal)',
      'fr': 'Unité de contention P1P6 (irréel)',
      'ja': '幻女神ソフィア討滅戦'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 69
  },
  1122: {
    'contentType': 28,
    'exVersion': 4,
    'name': {
      'cn': '欧米茄绝境验证战',
      'de': 'Omega (fatal)',
      'en': 'The Omega Protocol (Ultimate)',
      'fr': 'Le Protocole Oméga (fatal)',
      'ja': '絶オメガ検証戦',
      'ko': '절 오메가 검증전',
      'tc': '絕 歐米茄驗證戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 150
  },
  1123: {
    'contentType': 9,
    'exVersion': 4,
    'name': {
      'cn': '厄尔庇斯育体宝殿',
      'de': 'Gymnasion Agonon',
      'en': 'The Shifting Gymnasion Agonon',
      'fr': 'Elpis Gymnasion',
      'ja': '宝物庫 エルピス・ギュムナシオン祭殿',
      'ko': '보물고 엘피스 김나시온 제전',
      'tc': '厄爾庇斯育體寶殿'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1126: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '间歇灵泉哈姆岛',
      'de': 'Ätherborn',
      'en': 'The Aetherfont',
      'fr': 'L\'île de Haam',
      'ja': '星霊間欠 ハーム島',
      'ko': '함 섬',
      'tc': '間歇靈泉哈姆島'
    },
    'offsetX': 368,
    'offsetY': -277,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1127: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '处理显示标记的攻击',
      'de': 'Achte auf Attackenmarkierungen!',
      'en': 'React to Attack Markers',
      'fr': 'Réagir à des marquages',
      'ja': 'マーカーが出る攻撃に対処しよう！',
      'ko': '공격 표식에 따라 대처하자!',
      'tc': '處理顯示標記的攻擊'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1128: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '处理在地面显示预兆的攻击',
      'de': 'Achte auf Geländemarkierungen!',
      'en': 'React to Floor Markers',
      'fr': 'Réagir à des indications au sol',
      'ja': '地面に予兆が出る攻撃に対処しよう！',
      'ko': '지면에 표시되는 공격 조짐을 읽자!',
      'tc': '處理在地面顯示預兆的攻擊'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1129: {
    'contentType': 20,
    'exVersion': 0,
    'name': {
      'cn': '处理各种攻击',
      'de': 'Stelle dich allerlei Angriffsmanövern!',
      'en': 'React to Advanced Visual Indicators',
      'fr': 'Réagir à des mécaniques variées',
      'ja': 'さまざまな攻撃に対処しよう！',
      'ko': '다양한 공격에 대처하자!',
      'tc': '處理各種攻擊'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1136: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '阿修罗歼灭战',
      'de': 'Prophetie - Asura',
      'en': 'The Gilded Araya',
      'fr': 'Le temple doré d\'Araya',
      'ja': 'アスラ討滅戦',
      'ko': '아수라 토벌전',
      'tc': '阿修羅殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 114
  },
  1137: {
    'contentType': 30,
    'exVersion': 4,
    'name': {
      'cn': '多变迷宫 六根山',
      'de': 'Der Rokkon',
      'en': 'Mount Rokkon',
      'fr': 'Le mont Rokkon - Donjon à embranchements',
      'ja': 'ヴァリアントダンジョン 六根山',
      'ko': '변형 던전: 육근산',
      'tc': '多變迷宮 六根山'
    },
    'offsetX': -145,
    'offsetY': -820,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1138: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '赤土红沙',
      'de': 'Die Roten Sande',
      'en': 'The Red Sands',
      'fr': 'Les Sables sanglants',
      'ja': 'レッド・サンズ',
      'ko': '붉은 사막',
      'tc': '赤土紅沙'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1139: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '水晶冲突（赤土红沙：自定赛）',
      'de': 'Crystalline Conflict: Die Roten Sande (Schaukampf)',
      'en': 'Crystalline Conflict (Custom Match - The Red Sands)',
      'fr': 'Crystalline Conflict (partie personnalisée - Les Sables sanglants)',
      'ja': 'クリスタルコンフリクト(レッド・サンズ：カスタムマッチ)',
      'ko': '크리스탈라인 컨플릭트(붉은 사막: 친선 경기)',
      'tc': '水晶衝突（赤土紅沙：自定賽）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1140: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '高贝扎歼灭战',
      'de': 'Prophetie - Golbez',
      'en': 'The Voidcast Dais',
      'fr': 'La Chaire de l\'Exilée',
      'ja': 'ゴルベーザ討滅戦',
      'ko': '골베자 토벌전',
      'tc': '高貝扎殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 149
  },
  1141: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '高贝扎歼殛战',
      'de': 'Eschatos - Golbez',
      'en': 'The Voidcast Dais (Extreme)',
      'fr': 'La Chaire de l\'Exilée (extrême)',
      'ja': '極ゴルベーザ討滅戦',
      'ko': '극 골베자 토벌전',
      'tc': '極 高貝扎殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 149
  },
  1142: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '漂流海域妖歌海',
      'de': 'Sirenen-See',
      'en': 'The Sirensong Sea',
      'fr': 'La Mer du Chant des sirènes',
      'ja': '漂流海域 セイレーン海',
      'ko': '세이렌 해',
      'tc': '漂流海域賽蓮海'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 36
  },
  1143: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '试炼行路巴儿达木霸道',
      'de': 'Bardams Probe',
      'en': 'Bardam\'s Mettle',
      'fr': 'La Force de Bardam',
      'ja': '伝統試練 バルダム覇道',
      'ko': '바르담 패도',
      'tc': '試煉行路巴兒達木霸道'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1144: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '解放决战多玛王城',
      'de': 'Burg Doma',
      'en': 'Doma Castle',
      'fr': 'Le Château de Doma',
      'ja': '解放決戦 ドマ城',
      'ko': '도마 성',
      'tc': '解放決戰多瑪王城'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1145: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '巨炮要塞帝国白山堡',
      'de': 'Castrum Abania',
      'en': 'Castrum Abania',
      'fr': 'Castrum Abania',
      'ja': '巨砲要塞 カストルム・アバニア',
      'ko': '카스트룸 아바니아',
      'tc': '巨砲要塞帝國白山堡'
    },
    'offsetX': 72,
    'offsetY': -186,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1146: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '鏖战红莲阿拉米格',
      'de': 'Ala Mhigo',
      'en': 'Ala Mhigo',
      'fr': 'Ala Mhigo',
      'ja': '紅蓮決戦 アラミゴ',
      'ko': '알라미고',
      'tc': '紅蓮決戰阿拉米格'
    },
    'offsetX': 292,
    'offsetY': -163,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1147: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 荒天之狱1',
      'de': 'Anabaseios - Neunter Kreis',
      'en': 'Anabaseios: The Ninth Circle',
      'fr': 'Le Paradis du Pandæmonium - Métempsycose',
      'ja': '万魔殿パンデモニウム：天獄編1',
      'ko': '마의 전당 판데모니움: 천옥편 1',
      'tc': '萬魔殿 荒天之獄1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1148: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 荒天之狱1',
      'de': 'Anabaseios - Neunter Kreis (episch)',
      'en': 'Anabaseios: The Ninth Circle (Savage)',
      'fr': 'Le Paradis du Pandæmonium - Métempsycose (sadique)',
      'ja': '万魔殿パンデモニウム零式：天獄編1',
      'ko': '마의 전당 판데모니움: 천옥편(영웅) 1',
      'tc': '零式萬魔殿 荒天之獄1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1149: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 荒天之狱2',
      'de': 'Anabaseios - Zehnter Kreis',
      'en': 'Anabaseios: The Tenth Circle',
      'fr': 'Le Paradis du Pandæmonium - Monochrome',
      'ja': '万魔殿パンデモニウム：天獄編2',
      'ko': '마의 전당 판데모니움: 천옥편 2',
      'tc': '萬魔殿 荒天之獄2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1150: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 荒天之狱2',
      'de': 'Anabaseios - Zehnter Kreis (episch)',
      'en': 'Anabaseios: The Tenth Circle (Savage)',
      'fr': 'Le Paradis du Pandæmonium - Monochrome (sadique)',
      'ja': '万魔殿パンデモニウム零式：天獄編2',
      'ko': '마의 전당 판데모니움: 천옥편(영웅) 2',
      'tc': '零式萬魔殿 荒天之獄2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1151: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 荒天之狱3',
      'de': 'Anabaseios - Elfter Kreis',
      'en': 'Anabaseios: The Eleventh Circle',
      'fr': 'Le Paradis du Pandæmonium - Tribunal',
      'ja': '万魔殿パンデモニウム：天獄編3',
      'ko': '마의 전당 판데모니움: 천옥편 3',
      'tc': '萬魔殿 荒天之獄3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1152: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 荒天之狱3',
      'de': 'Anabaseios - Elfter Kreis (episch)',
      'en': 'Anabaseios: The Eleventh Circle (Savage)',
      'fr': 'Le Paradis du Pandæmonium - Tribunal (sadique)',
      'ja': '万魔殿パンデモニウム零式：天獄編3',
      'ko': '마의 전당 판데모니움: 천옥편(영웅) 3',
      'tc': '零式萬魔殿 荒天之獄3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1153: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '万魔殿 荒天之狱4',
      'de': 'Anabaseios - Zwölfter Kreis',
      'en': 'Anabaseios: The Twelfth Circle',
      'fr': 'Le Paradis du Pandæmonium - Apothéose',
      'ja': '万魔殿パンデモニウム：天獄編4',
      'ko': '마의 전당 판데모니움: 천옥편 4',
      'tc': '萬魔殿 荒天之獄4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1154: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '零式万魔殿 荒天之狱4',
      'de': 'Anabaseios - Zwölfter Kreis (episch)',
      'en': 'Anabaseios: The Twelfth Circle (Savage)',
      'fr': 'Le Paradis du Pandæmonium - Apothéose (sadique)',
      'ja': '万魔殿パンデモニウム零式：天獄編4',
      'ko': '마의 전당 판데모니움: 천옥편(영웅) 4',
      'tc': '零式萬魔殿 荒天之獄4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 145
  },
  1155: {
    'contentType': 30,
    'exVersion': 4,
    'name': {
      'cn': '异闻六根山',
      'de': 'Der kuriose Rokkon',
      'en': 'Another Mount Rokkon',
      'fr': 'Le mont Rokkon annexe - Donjon alternatif',
      'ja': 'アナザーダンジョン 異聞六根山',
      'ko': '파생 던전: 번외 육근산',
      'tc': '異聞迷宮 異聞六根山'
    },
    'offsetX': 0,
    'offsetY': 40,
    'sizeFactor': 200,
    'weatherRate': 74
  },
  1156: {
    'contentType': 30,
    'exVersion': 4,
    'name': {
      'cn': '零式异闻六根山',
      'de': 'Der kuriose Rokkon (episch)',
      'en': 'Another Mount Rokkon (Savage)',
      'fr': 'Le mont Rokkon annexe - Donjon alternatif (sadique)',
      'ja': 'アナザーダンジョン 異聞六根山 零式',
      'ko': '파생 던전: 번외 육근산(영웅)',
      'tc': '異聞迷宮 零式異聞六根山'
    },
    'offsetX': 0,
    'offsetY': 40,
    'sizeFactor': 200,
    'weatherRate': 74
  },
  1157: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '祖尔宛幻巧战',
      'de': 'Traumprüfung - Zurvan',
      'en': 'Containment Bay Z1T9 (Unreal)',
      'fr': 'Unité de contention Z1P9 (irréel)',
      'ja': '幻鬼神ズルワーン討滅戦'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 75
  },
  1164: {
    'contentType': 2,
    'exVersion': 4,
    'name': {
      'cn': '异界深渊月面地下溪谷',
      'de': 'Monduntergrund',
      'en': 'The Lunar Subterrane',
      'fr': 'Le Souterrain lunaire',
      'ja': '深淵潜行 月の地下渓谷',
      'ko': '달의 지하계곡',
      'tc': '異界深淵月面地下溪谷'
    },
    'offsetX': 440,
    'offsetY': 130,
    'sizeFactor': 200,
    'weatherRate': 149
  },
  1165: {
    'contentType': 19,
    'exVersion': 0,
    'name': {
      'cn': '金碟巨豆中心',
      'de': 'Stolperville',
      'en': 'Blunderville',
      'fr': 'Blunderville',
      'ja': 'ブランダーヴィル',
      'ko': '블런더빌',
      'tc': '金碟巨豆中心'
    },
    'offsetX': -200,
    'offsetY': -133,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1166: {
    'contentType': 7,
    'exVersion': 0,
    'name': {
      'cn': '纵使前路狱火焰毒',
      'de': 'Der Pfad der Flammen',
      'en': 'Memory of Embers',
      'fr': 'Flammes primordiales',
      'ja': '炎影の旅路',
      'ko': '염영의 여로',
      'tc': '縱使前路獄火焰毒'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 155
  },
  1167: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '丛林竞流生息河岸',
      'de': 'Ihuykatumu',
      'en': 'Ihuykatumu',
      'fr': 'La Remontée de l\'Ihuykatumu',
      'ja': '濁流遡上 イフイカ・トゥム',
      'ko': '이후이카 투무',
      'tc': '叢林激流生息河岸'
    },
    'offsetX': -44,
    'offsetY': -88,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1168: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '泽罗姆斯歼灭战',
      'de': 'Prophetie - Zeromus',
      'en': 'The Abyssal Fracture',
      'fr': 'La Fracture abyssale',
      'ja': 'ゼロムス討滅戦',
      'ko': '제로무스 토벌전',
      'tc': '澤羅姆斯殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 149
  },
  1169: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '泽罗姆斯歼殛战',
      'de': 'Eschatos - Zeromus',
      'en': 'The Abyssal Fracture (Extreme)',
      'fr': 'La Fracture abyssale (extrême)',
      'ja': '極ゼロムス討滅戦',
      'ko': '극 제로무스 토벌전',
      'tc': '極 澤羅姆斯殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 149
  },
  1172: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '沉没神殿斯卡拉遗迹',
      'de': 'Die versunkene Stadt Skalla',
      'en': 'The Drowned City of Skalla',
      'fr': 'La Cité engloutie de Skalla',
      'ja': '水没遺構 スカラ',
      'ko': '스칼라 유적',
      'tc': '沉沒神殿斯卡拉遺跡'
    },
    'offsetX': 185,
    'offsetY': 5,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1173: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '死亡大地终末焦土',
      'de': 'Das Kargland',
      'en': 'The Burn',
      'fr': 'L\'Escarre',
      'ja': '永久焦土 ザ・バーン',
      'ko': '영구 초토지대',
      'tc': '死亡大地終末焦土'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 97
  },
  1174: {
    'contentType': 2,
    'exVersion': 2,
    'name': {
      'cn': '国境防线基姆利特暗区',
      'de': 'Die Ghimlyt-Finsternis',
      'en': 'The Ghimlyt Dark',
      'fr': 'Les Ténèbres de Ghimlyt',
      'ja': '境界戦線 ギムリトダーク',
      'ko': '김리트 황야',
      'tc': '國境防線基姆利特暗區'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1175: {
    'contentType': 4,
    'exVersion': 4,
    'name': {
      'cn': '圆桌骑士幻巧战',
      'de': 'Traumprüfung - Singularitäts-Reaktor',
      'en': 'The Singularity Reactor (Unreal)',
      'fr': 'Le Réacteur de singularité (irréel)',
      'ja': '幻ナイツ・オブ・ラウンド討滅戦',
      'ko': '환 나이츠 오브 라운드 토벌전'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 56
  },
  1176: {
    'contentType': 30,
    'exVersion': 4,
    'name': {
      'cn': '多变迷宫 阿罗阿罗岛',
      'de': 'Aloalo',
      'en': 'Aloalo Island',
      'fr': 'L\'île d\'Aloalo - Donjon à embranchements',
      'ja': 'ヴァリアントダンジョン アロアロ島',
      'ko': '변형 던전: 알로알로 섬',
      'tc': '多變迷宮 阿羅阿羅島'
    },
    'offsetX': 0,
    'offsetY': -785,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1177: {
    'contentType': 7,
    'exVersion': 4,
    'name': {
      'cn': '那双眼中映出的是',
      'de': 'Die Jagd ist eröffnet',
      'en': 'The Game Is Afoot',
      'fr': 'Par-delà l\'horizon',
      'ja': 'その瞳が見据えるもの',
      'ko': '그 눈동자가 바라보는 것',
      'tc': '那雙眼中映出的是'
    },
    'offsetX': 368,
    'offsetY': -277,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1178: {
    'contentType': 5,
    'exVersion': 4,
    'name': {
      'cn': '荣华神域塔利亚',
      'de': 'Thaleia',
      'en': 'Thaleia',
      'fr': 'Domaine divin - Thalie',
      'ja': '華めく神域 タレイア',
      'ko': '번영의 신역 탈레이아',
      'tc': '榮華神域塔利亞'
    },
    'offsetX': 800,
    'offsetY': 783,
    'sizeFactor': 200,
    'weatherRate': 147
  },
  1179: {
    'contentType': 30,
    'exVersion': 4,
    'name': {
      'cn': '异闻阿罗阿罗岛',
      'de': 'Kurioses Aloalo',
      'en': 'Another Aloalo Island',
      'fr': 'L\'île d\'Aloalo annexe - Donjon alternatif',
      'ja': 'アナザーダンジョン 異聞アロアロ島',
      'ko': '파생 던전: 번외 알로알로 섬',
      'tc': '異聞迷宮 異聞阿羅阿羅島'
    },
    'offsetX': 0,
    'offsetY': -60,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1180: {
    'contentType': 30,
    'exVersion': 4,
    'name': {
      'cn': '零式异闻阿罗阿罗岛',
      'de': 'Kurioses Aloalo (episch)',
      'en': 'Another Aloalo Island (Savage)',
      'fr': 'L\'île d\'Aloalo annexe - Donjon alternatif (sadique)',
      'ja': 'アナザーダンジョン 異聞アロアロ島 零式',
      'ko': '파생 던전: 번외 알로알로 섬(영웅)',
      'tc': '異聞迷宮 零式異聞阿羅阿羅島'
    },
    'offsetX': 0,
    'offsetY': -60,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1185: {
    'exVersion': 5,
    'name': {
      'cn': '图莱尤拉',
      'de': 'Tuliyollal',
      'en': 'Tuliyollal',
      'fr': 'Tuliyollal',
      'ja': 'トライヨラ',
      'ko': '툴라이욜라',
      'tc': '圖萊尤拉'
    },
    'offsetX': 50,
    'offsetY': -70,
    'sizeFactor': 180,
    'weatherRate': 159
  },
  1186: {
    'exVersion': 5,
    'name': {
      'cn': '九号解决方案',
      'de': 'Lösung Neun',
      'en': 'Solution Nine',
      'fr': 'Solution Neuf',
      'ja': 'ソリューション・ナイン',
      'ko': '솔루션 나인',
      'tc': '九號解決方案'
    },
    'offsetX': 0,
    'offsetY': 90,
    'sizeFactor': 180,
    'weatherRate': 163
  },
  1187: {
    'exVersion': 5,
    'name': {
      'cn': '奥阔帕恰山',
      'de': 'Urqopacha',
      'en': 'Urqopacha',
      'fr': 'Urqopacha',
      'ja': 'オルコ・パチャ',
      'ko': '오르코 파차',
      'tc': '奧闊帕恰山'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 160
  },
  1188: {
    'exVersion': 5,
    'name': {
      'cn': '克扎玛乌卡湿地',
      'de': 'Kozama\'uka',
      'en': 'Kozama\'uka',
      'fr': 'Kozama\'uka',
      'ja': 'コザマル・カ',
      'ko': '코자말루 카',
      'tc': '克扎瑪烏卡濕地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 161
  },
  1189: {
    'exVersion': 5,
    'name': {
      'cn': '亚克特尔树海',
      'de': 'Yak T\'el',
      'en': 'Yak T\'el',
      'fr': 'Yak T\'el',
      'ja': 'ヤクテル樹海',
      'ko': '야크텔 밀림',
      'tc': '亞克特爾樹海'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 162
  },
  1190: {
    'exVersion': 5,
    'name': {
      'cn': '夏劳尼荒野',
      'de': 'Shaaloani',
      'en': 'Shaaloani',
      'fr': 'Shaaloani',
      'ja': 'シャーローニ荒野',
      'ko': '샬로니 황야',
      'tc': '夏勞尼荒野'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 164
  },
  1191: {
    'exVersion': 5,
    'name': {
      'cn': '遗产之地',
      'de': 'Ewiges Erbe',
      'en': 'Heritage Found',
      'fr': 'L\'Hoirie recouvrée',
      'ja': 'ヘリテージファウンド',
      'ko': '헤리티지 파운드',
      'tc': '遺產之地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 165
  },
  1192: {
    'exVersion': 5,
    'name': {
      'cn': '活着的记忆',
      'de': 'Lebende Erinnerung',
      'en': 'Living Memory',
      'fr': 'La Mémoire vivante',
      'ja': 'リビング・メモリー',
      'ko': '리빙 메모리',
      'tc': '憶想之地'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 166
  },
  1193: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '通天绝壁沃刻佐莫山',
      'de': 'Worqor Zormor',
      'en': 'Worqor Zormor',
      'fr': 'Worqor Zormor',
      'ja': '山嶺登頂 ウォーコー・ゾーモー',
      'ko': '워코 조모',
      'tc': '通天絕壁沃克佐莫山'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1194: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '神圣禁地深空天坑',
      'de': 'Himmelstiefer Cenote',
      'en': 'The Skydeep Cenote',
      'fr': 'Le cénote des Cieux infinis',
      'ja': '遺産踏査 天深きセノーテ',
      'ko': '하늘심연 세노테',
      'tc': '神聖禁地深空天坑'
    },
    'offsetX': 0,
    'offsetY': 144,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1195: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '艳翼蛇鸟歼灭战',
      'de': 'Zel Tajaal - Valigarmanda',
      'en': 'Worqor Lar Dor',
      'fr': 'Worqor Lar Dor',
      'ja': 'ヴァリガルマンダ討滅戦',
      'ko': '발리가르만다 토벌전',
      'tc': '艷翼蛇鳥殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1196: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '艳翼蛇鸟歼殛战',
      'de': 'Gok Tajaal - Valigarmanda',
      'en': 'Worqor Lar Dor (Extreme)',
      'fr': 'Worqor Lar Dor (extrême)',
      'ja': '極ヴァリガルマンダ討滅戦',
      'ko': '극 발리가르만다 토벌전',
      'tc': '極 艷翼蛇鳥殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1198: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '前哨基地先锋营',
      'de': 'Der Außenposten',
      'en': 'Vanguard',
      'fr': 'L\'Avant-garde',
      'ja': '外征前哨 ヴァンガード',
      'ko': '뱅가드',
      'tc': '前哨基地先鋒營'
    },
    'offsetX': 0,
    'offsetY': -20,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1199: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '忆中金曦亚历山德里亚',
      'de': 'Alexandria',
      'en': 'Alexandria',
      'fr': 'Alexandrie',
      'ja': '記憶幻想 アレクサンドリア',
      'ko': '알렉산드리아',
      'tc': '記憶幻想亞歷山德里亞'
    },
    'offsetX': 29,
    'offsetY': -95,
    'sizeFactor': 200,
    'weatherRate': 157
  },
  1200: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '佐拉加歼灭战',
      'de': 'Zel Tajaal - Zoraal Ja',
      'en': 'Everkeep',
      'fr': 'Le Pinacle de l\'Éternité',
      'ja': 'ゾラージャ討滅戦',
      'ko': '조라쟈 토벌전',
      'tc': '佐拉加殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 158
  },
  1201: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '佐拉加歼殛战',
      'de': 'Gok Tajaal - Zoraal Ja',
      'en': 'Everkeep (Extreme)',
      'fr': 'Le Pinacle de l\'Éternité (extrême)',
      'ja': '極ゾラージャ討滅戦',
      'ko': '극 조라쟈 토벌전',
      'tc': '極 佐拉加殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 158
  },
  1202: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '永恒女王歼灭战',
      'de': 'Zel Tajaal - Ewige Königin',
      'en': 'The Interphos',
      'fr': 'Interphos',
      'ja': 'エターナルクイーン討滅戦',
      'ko': '이터널 퀸 토벌전',
      'tc': '永恆女王殲滅戰'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 157
  },
  1203: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '荒野秘境仙人刺谷',
      'de': 'Kaktorsenke',
      'en': 'Tender Valley',
      'fr': 'La Vallée des Pampas',
      'ja': '荒野秘境 サボテンダーバレー',
      'ko': '사보텐더 계곡',
      'tc': '荒野秘境仙人掌谷'
    },
    'offsetX': 130,
    'offsetY': -348,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1204: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '噩梦乐园迷途鬼区',
      'de': 'Mahrlingen-Promenade',
      'en': 'The Strayborough Deadwalk',
      'fr': 'Le Parc-aux-Errants',
      'ja': '悪夢遊園 ストレイバロー',
      'ko': '헤매는 성',
      'tc': '惡夢樂園迷途鬼區'
    },
    'offsetX': 0,
    'offsetY': -150,
    'sizeFactor': 200,
    'weatherRate': 150
  },
  1208: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '魂魄工厂创生设施',
      'de': 'Origenik',
      'en': 'Origenics',
      'fr': 'L\'Origenèse',
      'ja': '魂魄工廠 オリジェニクス',
      'ko': '오리제닉스',
      'tc': '魂魄工廠創生設施'
    },
    'offsetX': -30,
    'offsetY': -63,
    'sizeFactor': 200,
    'weatherRate': 156
  },
  1209: {
    'contentType': 9,
    'exVersion': 5,
    'name': {
      'cn': '加加财富天坑',
      'de': 'Cenote Ja Ja Gural',
      'en': 'Cenote Ja Ja Gural',
      'fr': 'Cénote Ja Ja Gural',
      'ja': '宝物庫 セノーテ・ジャジャグラル',
      'ko': '보물고 세노테 쟈쟈구랄'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1210: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '一位国王，一位父亲',
      'de': 'Des Vaters viele Sorgen',
      'en': 'A Father First',
      'fr': 'L\'Aurarque et le père',
      'ja': '王として、父として',
      'ko': '왕으로서, 아버지로서',
      'tc': '一位國王，一位父親'
    },
    'offsetX': 0,
    'offsetY': -19,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1211: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '为守护笑容而战',
      'de': 'Mit scharfer Axt und leichtem Lächeln',
      'en': 'Taking a Stand',
      'fr': 'Préserver la paix',
      'ja': '笑顔を護るための戦い',
      'ko': '행복을 지키기 위한 싸움',
      'tc': '為守護笑容而戰'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1212: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '友之试炼',
      'de': 'Von Schuld und Sühne',
      'en': 'The Feat of the Brotherhood',
      'fr': 'L\'épreuve de l\'amitié',
      'ja': '友の試練',
      'ko': '친구의 시련',
      'tc': '友之試煉'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1213: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '守护者还是毁灭者',
      'de': 'Schützer des Volkes, Schlächter des Volkes',
      'en': 'The Protector and the Destroyer',
      'fr': 'Protecteurs et destructeurs',
      'ja': '護る者、壊す者',
      'ko': '지키는 자, 파괴하는 자',
      'tc': '守護者還是毀滅者'
    },
    'offsetX': 0,
    'offsetY': 90,
    'sizeFactor': 180,
    'weatherRate': 0
  },
  1214: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '不论酣睡还是无眠',
      'de': 'Neue Bande der Freund­schaft',
      'en': 'Dreams of a New Day',
      'fr': 'Rêves éveillés',
      'ja': '寝ても覚めても',
      'ko': '잠이 들어도, 잠에서 깨어나도',
      'tc': '不論酣睡還是無眠'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 95,
    'weatherRate': 0
  },
  1215: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '剧毒与康复的巅峰对决',
      'de': 'Heilkunst gegen Hexerei',
      'en': 'An Antidote for Anarchy',
      'fr': 'Les deux faces du scorpion',
      'ja': '毒と癒やしの頂上決戦',
      'ko': '독과 치유의 결전',
      'tc': '劇毒與復原的巔峰對決'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1216: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '无可指摘的猎人',
      'de': 'Krönender Abschuss',
      'en': 'A Hunter True',
      'fr': 'Chasseuse à lunettes... chasseuse honnête',
      'ja': '一端の狩人',
      'ko': '어엿한 사냥꾼',
      'tc': '無可指摘的獵人'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1217: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '打倒！沙尔托菲特盗贼团！',
      'de': 'Der mächtigste Schild',
      'en': 'The Mightiest Shield',
      'fr': 'Mauvais cru pour Chalteaufite',
      'ja': '打倒！ シャルトフィット盗賊団',
      'ko': '타도! 샬토피트 도적단',
      'tc': '打倒！沙爾托菲特盜賊團'
    },
    'offsetX': -250,
    'offsetY': 128,
    'sizeFactor': 200,
    'weatherRate': 36
  },
  1218: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '祭器创造的假象',
      'de': 'Ein Mythos in Trümmern',
      'en': 'Heroes and Pretenders',
      'fr': 'Le château de cartes s\'effondre',
      'ja': '祭器と作られた虚像',
      'ko': '제기로 만든 허상',
      'tc': '祭器創造的假像'
    },
    'offsetX': -693,
    'offsetY': -46,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1225: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 轻量级1',
      'de': 'Arkadion - Halb­schwer­ge­wicht R1',
      'en': 'AAC Light-heavyweight M1',
      'fr': 'Poids mi-lourds CCA - match 1',
      'ja': '至天の座アルカディア：ライトヘビー級1',
      'ko': '아르카디아 선수권: 라이트헤비급 1',
      'tc': '阿卡狄亞登天鬥技場 輕量級1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1226: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 轻量级1',
      'de': 'Arkadion - Halb­schwer­ge­wicht R1 (episch)',
      'en': 'AAC Light-heavyweight M1 (Savage)',
      'fr': 'Poids mi-lourds CCA - match 1 (sadique)',
      'ja': '至天の座アルカディア零式：ライトヘビー級1',
      'ko': '아르카디아 선수권: 라이트헤비급(영웅) 1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1227: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 轻量级2',
      'de': 'Arkadion - Halb­schwer­ge­wicht R2',
      'en': 'AAC Light-heavyweight M2',
      'fr': 'Poids mi-lourds CCA - match 2',
      'ja': '至天の座アルカディア：ライトヘビー級2',
      'ko': '아르카디아 선수권: 라이트헤비급 2',
      'tc': '阿卡狄亞登天鬥技場 輕量級2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1228: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 轻量级2',
      'de': 'Arkadion - Halb­schwer­ge­wicht R2 (episch)',
      'en': 'AAC Light-heavyweight M2 (Savage)',
      'fr': 'Poids mi-lourds CCA - match 2 (sadique)',
      'ja': '至天の座アルカディア零式：ライトヘビー級2',
      'ko': '아르카디아 선수권: 라이트헤비급(영웅) 2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1229: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 轻量级3',
      'de': 'Arkadion - Halb­schwer­ge­wicht R3',
      'en': 'AAC Light-heavyweight M3',
      'fr': 'Poids mi-lourds CCA - match 3',
      'ja': '至天の座アルカディア：ライトヘビー級3',
      'ko': '아르카디아 선수권: 라이트헤비급 3',
      'tc': '阿卡狄亞登天鬥技場 輕量級3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1230: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 轻量级3',
      'de': 'Arkadion - Halb­schwer­ge­wicht R3 (episch)',
      'en': 'AAC Light-heavyweight M3 (Savage)',
      'fr': 'Poids mi-lourds CCA - match 3 (sadique)',
      'ja': '至天の座アルカディア零式：ライトヘビー級3',
      'ko': '아르카디아 선수권: 라이트헤비급(영웅) 3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1231: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 轻量级4',
      'de': 'Arkadion - Halb­schwer­ge­wicht R4',
      'en': 'AAC Light-heavyweight M4',
      'fr': 'Poids mi-lourds CCA - match 4',
      'ja': '至天の座アルカディア：ライトヘビー級4',
      'ko': '아르카디아 선수권: 라이트헤비급 4',
      'tc': '阿卡狄亞登天鬥技場 輕量級4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1232: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 轻量级4',
      'de': 'Arkadion - Halb­schwer­ge­wicht R4 (episch)',
      'en': 'AAC Light-heavyweight M4 (Savage)',
      'fr': 'Poids mi-lourds CCA - match 4 (sadique)',
      'ja': '至天の座アルカディア零式：ライトヘビー級4',
      'ko': '아르카디아 선수권: 라이트헤비급(영웅) 4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1233: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '旅行画家的森都旅程',
      'de': 'Nächtliche Ruhestörung',
      'en': 'Mind over Manor',
      'fr': 'Tapage nocturne',
      'ja': '旅する画家は森都を征く',
      'ko': '떠돌이 화가는 숲의 도시로',
      'tc': '旅行畫家的森都旅程'
    },
    'offsetX': 32,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1234: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '旅行画家的幻想旅程',
      'de': 'Begegnungen und Abschiede',
      'en': 'Somewhere Only She Knows',
      'fr': 'L\'œuvre de la maturité',
      'ja': '旅する画家は幻想を征く',
      'ko': '떠돌이 화가는 환상 속으로',
      'tc': '旅行畫家的幻想旅程'
    },
    'offsetX': 0,
    'offsetY': 286,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1235: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '蝰蛇剑士的使命',
      'de': 'Einführung in die Viperologie',
      'en': 'Fangs of the Viper',
      'fr': 'Le devoir des rôdeurs vipère',
      'ja': 'ヴァイパーの使命',
      'ko': '바이퍼의 사명',
      'tc': '毒蛇劍士的使命'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1236: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '图拉尔威爪猎手',
      'de': 'Der Wille der Natur',
      'en': 'Vengeance of the Viper',
      'fr': 'Le fléau des Tural vidraal',
      'ja': 'トラルヴィドラールを狩る者',
      'ko': '투랄비드랄을 사냥하는 자',
      'tc': '圖拉爾威爪獵手'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1238: {
    'contentType': 28,
    'exVersion': 5,
    'name': {
      'cn': '光暗未来绝境战',
      'de': 'Eine zweite Zukunft (fatal)',
      'en': 'Futures Rewritten (Ultimate)',
      'fr': 'Avenirs réécrits (fatal)',
      'ja': '絶もうひとつの未来',
      'ko': '절 또 하나의 미래'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1239: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '白虎幻巧战',
      'de': 'Traumprüfung - Byakko',
      'en': 'The Jade Stoa (Unreal)',
      'fr': 'La Clairière de Jade (irréel)',
      'ja': '幻白虎征魂戦',
      'ko': '환 백호 토벌전'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 93
  },
  1241: {
    'contentType': 37,
    'exVersion': 5,
    'name': {
      'cn': '暗黑之云诛灭战',
      'de': 'Die Wolke der Dunkelheit (chaotisch)',
      'en': 'The Cloud of Darkness (Chaotic)',
      'fr': 'La Tour de Ténèbres (chaotique)',
      'ja': '滅暗闇の雲激闘戦',
      'ko': '멸 어둠의 구름 격투전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 28
  },
  1242: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '废弃据点玉韦亚瓦塔实验站',
      'de': 'Forschungsstation Yuweyawata',
      'en': 'Yuweyawata Field Station',
      'fr': 'Le centre de recherche de Yuweyawata',
      'ja': '廃地討究 ユウェヤーワータ',
      'ko': '유웨야와타'
    },
    'offsetX': -35,
    'offsetY': -398,
    'sizeFactor': 200,
    'weatherRate': 86
  },
  1243: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '永恒女王忆想歼灭战',
      'de': 'Gok Tajaal - Ewige Königin',
      'en': 'The Minstrel\'s Ballad: Sphene\'s Burden',
      'fr': 'Interphos (extrême)',
      'ja': '極エターナルクイーン討滅戦',
      'ko': '극 이터널 퀸 토벌전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 157
  },
  1244: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '家人的温暖',
      'de': 'Ein Land, eine Familie',
      'en': 'The Warmth of Family',
      'fr': 'La famille de l\'Aurarque',
      'ja': '王の家族',
      'ko': '왕의 가족'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1245: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '魔兽领域日影地修炼所',
      'de': 'Halatali',
      'en': 'Halatali',
      'fr': 'Halatali',
      'ja': '魔獣領域 ハラタリ修練所',
      'ko': '할라탈리 수련장',
      'tc': '魔獸領域日影地修練所'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1246: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '决战！佐戈永结桥',
      'de': 'Kampf an Zorgor der Weiten',
      'en': 'Bar the Passage',
      'fr': 'Pour s\'affranchir de la tyrannie, tout s\'appelle vertu',
      'ja': '決戦、ゾーゴー永結橋',
      'ko': '결전, 조고 영결교'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1248: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '朱诺：第一巡行',
      'de': 'Jeuno: Die erste Etappe',
      'en': 'Jeuno: The First Walk',
      'fr': 'Jeuno - La première perambulation',
      'ja': 'ジュノ：ザ・ファーストウォーク',
      'ko': '쥬노: 첫 번째 반향세계'
    },
    'offsetX': -800,
    'offsetY': -595,
    'sizeFactor': 200,
    'weatherRate': 150
  },
  1252: {
    'contentType': 38,
    'exVersion': 5,
    'name': {
      'cn': '蜃景幻界新月岛 南征之章',
      'de': 'Das südliche Kreszentia',
      'en': 'The Occult Crescent: South Horn',
      'fr': 'Île de Lunule méridionale',
      'ja': '蜃気楼の島 クレセントアイル：南征編',
      'ko': '초승달 섬: 남부편'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 168
  },
  1256: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 中量级1',
      'de': 'Arkadion - Schwergewicht R1',
      'en': 'AAC Cruiserweight M1',
      'fr': 'Poids lourds-légers CCA - match 1',
      'ja': '至天の座アルカディア：クルーザー級1',
      'ko': '아르카디아 선수권: 크루저급 1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1257: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 中量级1',
      'de': 'Arkadion - Schwergewicht R1 (episch)',
      'en': 'AAC Cruiserweight M1 (Savage)',
      'fr': 'Poids lourds-légers CCA - match 1 (sadique)',
      'ja': '至天の座アルカディア零式：クルーザー級1',
      'ko': '아르카디아 선수권: 크루저급(영웅) 1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1258: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 中量级2',
      'de': 'Arkadion - Schwergewicht R2',
      'en': 'AAC Cruiserweight M2',
      'fr': 'Poids lourds-légers CCA - match 2',
      'ja': '至天の座アルカディア：クルーザー級2',
      'ko': '아르카디아 선수권: 크루저급 2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1259: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 中量级2',
      'de': 'Arkadion - Schwergewicht R2 (episch)',
      'en': 'AAC Cruiserweight M2 (Savage)',
      'fr': 'Poids lourds-légers CCA - match 2 (sadique)',
      'ja': '至天の座アルカディア零式：クルーザー級2',
      'ko': '아르카디아 선수권: 크루저급(영웅) 2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1260: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 中量级3',
      'de': 'Arkadion - Schwergewicht R3',
      'en': 'AAC Cruiserweight M3',
      'fr': 'Poids lourds-légers CCA - match 3',
      'ja': '至天の座アルカディア：クルーザー級3',
      'ko': '아르카디아 선수권: 크루저급 3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1261: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 中量级3',
      'de': 'Arkadion - Schwergewicht R3 (episch)',
      'en': 'AAC Cruiserweight M3 (Savage)',
      'fr': 'Poids lourds-légers CCA - match 3 (sadique)',
      'ja': '至天の座アルカディア零式：クルーザー級3',
      'ko': '아르카디아 선수권: 크루저급(영웅) 3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1262: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 中量级4',
      'de': 'Arkadion - Schwergewicht R4',
      'en': 'AAC Cruiserweight M4',
      'fr': 'Poids lourds-légers CCA - match 4',
      'ja': '至天の座アルカディア：クルーザー級4',
      'ko': '아르카디아 선수권: 크루저급 4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1263: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 中量级4',
      'de': 'Arkadion - Schwergewicht R4 (episch)',
      'en': 'AAC Cruiserweight M4 (Savage)',
      'fr': 'Poids lourds-légers CCA - match 4 (sadique)',
      'ja': '至天の座アルカディア零式：クルーザー級4',
      'ko': '아르카디아 선수권: 크루저급(영웅) 4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1266: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '王城古迹永护塔底',
      'de': 'Unterfried-Ruinen',
      'en': 'The Underkeep',
      'fr': 'La Gardienne de l\'Immémorial',
      'ja': '王城旧跡 アンダーキープ',
      'ko': '언더킵'
    },
    'offsetX': 122,
    'offsetY': -273,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1267: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '古代遗迹喀恩埋没圣堂',
      'de': 'Versunkener Tempel von Qarn',
      'en': 'The Sunken Temple of Qarn',
      'fr': 'Le Temple enseveli de Qarn',
      'ja': '遺跡探索 カルン埋没寺院',
      'ko': '카른의 무너진 사원',
      'tc': '古代遺跡喀恩埋沒聖堂'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1270: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '泽莲尼娅歼灭战',
      'de': 'Zel Tajaal - Zelenia',
      'en': 'Recollection',
      'fr': 'Le Sanctuaire du Serment',
      'ja': 'ゼレニア討滅戦',
      'ko': '젤레니아 토벌전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1271: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '泽莲尼娅歼殛战',
      'de': 'Gok Tajaal - Zelenia',
      'en': 'Recollection (Extreme)',
      'fr': 'Le Sanctuaire du Serment (extrême)',
      'ja': '極ゼレニア討滅戦',
      'ko': '극 젤레니아 토벌전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1272: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '朱雀幻巧战',
      'de': 'Traumprüfung - Suzaku',
      'en': 'Hells\' Kier (Unreal)',
      'fr': 'Le Nid des Lamentations (irréel)',
      'ja': '幻朱雀征魂戦',
      'ko': '환 주작 토벌전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 98
  },
  1273: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '周边遗迹群（阵地战）',
      'de': 'Äußere Ruinen (Sicherung)',
      'en': 'The Borderland Ruins (Secure)',
      'fr': 'Les Ruines frontalières (annexion)',
      'ja': '外縁遺跡群 (制圧戦)',
      'ko': '외곽 유적지대(제압전)',
      'tc': '周邊遺跡群（陣地戰）'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1279: {
    'contentType': 9,
    'exVersion': 5,
    'name': {
      'cn': '巡梦金库',
      'de': 'Tresor Oneiron',
      'en': 'Vault Oneiron',
      'fr': 'Le coffre d\'Oneiron',
      'ja': '宝物庫 ボルト・オネイロン',
      'ko': '보물고 볼트 오네이론'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1281: {
    'contentType': 21,
    'exVersion': 5,
    'name': {
      'cn': '朝圣交错路 第1～10朝圣路',
      'de': 'Pilgers Pfad (Ebenen 1-10)',
      'en': 'Pilgrim\'s Traverse (Stones 1-10)',
      'fr': 'Le Sanctuaire des pèlerins (zones 1-10)',
      'ja': 'ピルグリム・トラバース 第1～10巡礼路',
      'ko': '노르브란트 순례길 제1~10순례길'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1282: {
    'contentType': 21,
    'exVersion': 5,
    'name': {
      'cn': '朝圣交错路 第11～20朝圣路',
      'de': 'Pilgers Pfad (Ebenen 11-20)',
      'en': 'Pilgrim\'s Traverse (Stones 11-20)',
      'fr': 'Le Sanctuaire des pèlerins (zones 11-20)',
      'ja': 'ピルグリム・トラバース 第11～20巡礼路',
      'ko': '노르브란트 순례길 제11~20순례길'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1283: {
    'contentType': 21,
    'exVersion': 5,
    'name': {
      'cn': '朝圣交错路 第21～30朝圣路',
      'de': 'Pilgers Pfad (Ebenen 21-30)',
      'en': 'Pilgrim\'s Traverse (Stones 21-30)',
      'fr': 'Le Sanctuaire des pèlerins (zones 21-30)',
      'ja': 'ピルグリム・トラバース 第21～30巡礼路',
      'ko': '노르브란트 순례길 제21~30순례길'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1284: {
    'contentType': 21,
    'exVersion': 5,
    'name': {
      'cn': '朝圣交错路 第31～40朝圣路',
      'de': 'Pilgers Pfad (Ebenen 31-40)',
      'en': 'Pilgrim\'s Traverse (Stones 31-40)',
      'fr': 'Le Sanctuaire des pèlerins (zones 31-40)',
      'ja': 'ピルグリム・トラバース 第31～40巡礼路',
      'ko': '노르브란트 순례길 제31~40순례길'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1285: {
    'contentType': 21,
    'exVersion': 5,
    'name': {
      'cn': '朝圣交错路 第41～50朝圣路',
      'de': 'Pilgers Pfad (Ebenen 41-50)',
      'en': 'Pilgrim\'s Traverse (Stones 41-50)',
      'fr': 'Le Sanctuaire des pèlerins (zones 41-50)',
      'ja': 'ピルグリム・トラバース 第41～50巡礼路',
      'ko': '노르브란트 순례길 제41~50순례길'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1286: {
    'contentType': 21,
    'exVersion': 5,
    'name': {
      'cn': '朝圣交错路 第51～60朝圣路',
      'de': 'Pilgers Pfad (Ebenen 51-60)',
      'en': 'Pilgrim\'s Traverse (Stones 51-60)',
      'fr': 'Le Sanctuaire des pèlerins (zones 51-60)',
      'ja': 'ピルグリム・トラバース 第51～60巡礼路',
      'ko': '노르브란트 순례길 제51~60순례길'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1287: {
    'contentType': 21,
    'exVersion': 5,
    'name': {
      'cn': '朝圣交错路 第61～70朝圣路',
      'de': 'Pilgers Pfad (Ebenen 61-70)',
      'en': 'Pilgrim\'s Traverse (Stones 61-70)',
      'fr': 'Le Sanctuaire des pèlerins (zones 61-70)',
      'ja': 'ピルグリム・トラバース 第61～70巡礼路',
      'ko': '노르브란트 순례길 제61~70순례길'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1288: {
    'contentType': 21,
    'exVersion': 5,
    'name': {
      'cn': '朝圣交错路 第71～80朝圣路',
      'de': 'Pilgers Pfad (Ebenen 71-80)',
      'en': 'Pilgrim\'s Traverse (Stones 71-80)',
      'fr': 'Le Sanctuaire des pèlerins (zones 71-80)',
      'ja': 'ピルグリム・トラバース 第71～80巡礼路',
      'ko': '노르브란트 순례길 제71~80순례길'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1289: {
    'contentType': 21,
    'exVersion': 5,
    'name': {
      'cn': '朝圣交错路 第81～90朝圣路',
      'de': 'Pilgers Pfad (Ebenen 81-90)',
      'en': 'Pilgrim\'s Traverse (Stones 81-90)',
      'fr': 'Le Sanctuaire des pèlerins (zones 81-90)',
      'ja': 'ピルグリム・トラバース 第81～90巡礼路',
      'ko': '노르브란트 순례길 제81~90순례길'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 149
  },
  1290: {
    'contentType': 21,
    'exVersion': 5,
    'name': {
      'cn': '朝圣交错路 第91～100朝圣路',
      'de': 'Pilgers Pfad (Ebenen 91-100)',
      'en': 'Pilgrim\'s Traverse (Stones 91-100)',
      'fr': 'Le Sanctuaire des pèlerins (zones 91-100)',
      'ja': 'ピルグリム・トラバース 第91～100巡礼路',
      'ko': '노르브란트 순례길 제91~100순례길'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 149
  },
  1292: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '永久幽界中央终端',
      'de': 'Das Meso-System',
      'en': 'The Meso Terminal',
      'fr': 'Le Mésoterminal',
      'ja': '永久幽界 メインターミナル',
      'ko': '메인 터미널'
    },
    'offsetX': -132,
    'offsetY': -113,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1293: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '海岸斗场',
      'de': 'Der Küstenkampf',
      'en': 'The Bayside Battleground',
      'fr': 'Le Rivage redoutable',
      'ja': 'ベイサイド・バトルグラウンド',
      'ko': '바닷가 전투장'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1294: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '水晶冲突（海岸斗场：自定赛）',
      'de': 'Crystalline Conflict: Der Küstenkampf (Schaukampf)',
      'en': 'Crystalline Conflict (Custom Match - The Bayside Battleground)',
      'fr': 'Crys. Conflict (partie perso. - Le Rivage redoutable)',
      'ja': 'クリスタルコンフリクト(ベイサイド・バトルグラウンド：カスタムマッチ)',
      'ko': '크리스탈라인 컨플릭트(바닷가 전투장: 친선 경기)'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1295: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '永远之暗歼灭战',
      'de': 'Zel Tajaal - Das Ewige Dunkel',
      'en': 'The Ageless Necropolis',
      'fr': 'La Nécropole intemporelle',
      'ja': '永遠の闇討滅戦',
      'ko': '영원한 어둠 토벌전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1296: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '永远之暗悲惶歼灭战',
      'de': 'Gok Tajaal - Das Ewige Dunkel',
      'en': 'The Minstrel\'s Ballad: Necron\'s Embrace',
      'fr': 'La Nécropole intemporelle (extrême)',
      'ja': '極永遠の闇討滅戦',
      'ko': '극 영원한 어둠 토벌전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1298: {
    'contentType': 22,
    'exVersion': 0,
    'name': {
      'cn': '瓦伦提昂蛋糕店',
      'de': 'Die Pâtisserie',
      'en': 'The Pâtisserie',
      'fr': 'La Pâtisserie de la Valention',
      'ja': 'ヴァレンティオンパティスリー',
      'ko': '발렌티온 제과점'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1300: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '护锁刃龙狩猎战',
      'de': 'Jagd auf Wächter-Arkveld',
      'en': 'The Windward Wilds',
      'fr': 'Chasse à l\'Arkveld Gardien',
      'ja': '護竜アルシュベルド狩猟戦',
      'ko': '수호룡 알슈베르도 수렵전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1302: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '青龙幻巧战',
      'de': 'Traumprüfung - Seiryu',
      'en': 'The Wreath of Snakes (Unreal)',
      'fr': 'L\'Îlot des Amertumes (irréel)',
      'ja': '幻青龍征魂戦',
      'ko': '환 청룡 토벌전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 99
  },
  1303: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '流沙迷宫樵鸣洞',
      'de': 'Sägerschrei',
      'en': 'Cutter\'s Cry',
      'fr': 'Le Gouffre hurlant',
      'ja': '流砂迷宮 カッターズクライ',
      'ko': '나무꾼의 비명',
      'tc': '流沙迷宮樵鳴洞'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1304: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '桑多利亚：第二巡行',
      'de': 'San d\'Oria: Die zweite Etappe',
      'en': 'San d\'Oria: The Second Walk',
      'fr': 'San d\'Oria - La deuxième perambulation',
      'ja': 'サンドリア：ザ・セカンドウォーク',
      'ko': '산도리아: 두 번째 반향세계'
    },
    'offsetX': -826,
    'offsetY': -871,
    'sizeFactor': 200,
    'weatherRate': 150
  },
  1306: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '护锁刃龙上位狩猎战',
      'de': 'Jagd auf Wächter-Arkveld (schwer)',
      'en': 'The Windward Wilds (Extreme)',
      'fr': 'Chasse à l\'Arkveld Gardien (extrême)',
      'ja': '極護竜アルシュベルド狩猟戦',
      'ko': '극 수호룡 알슈베르도 수렵전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1307: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '格莱杨拉波尔歼灭战',
      'de': 'Zel Tajaal - Doomtrain',
      'en': 'Hell on Rails',
      'fr': 'Le Convoi maléfique',
      'ja': 'グラシャラボラス討滅戦',
      'ko': '글라시아 라볼라스 토벌전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 37
  },
  1308: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '格莱杨拉波尔歼殛战',
      'de': 'Gok Tajaal - Doomtrain',
      'en': 'Hell on Rails (Extreme)',
      'fr': 'Le Convoi maléfique (extrême)',
      'ja': '極グラシャラボラス討滅戦',
      'ko': '극 글라시아 라볼라스 토벌전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 37
  },
  1311: {
    'contentType': 39,
    'exVersion': 5,
    'name': {
      'cn': '卓异的悲寂深想战',
      'de': 'Eminente Trauer (variabel)',
      'en': 'The Final Verse (Quantum)',
      'fr': 'Le Verset final (quantique)',
      'ja': '詩想エミネントグリーフ討滅戦',
      'ko': '시상 드높은 비애 토벌전'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 149
  },
  1313: {
    'contentType': 6,
    'exVersion': 0,
    'name': {
      'cn': '沃刻其特（演习战）',
      'de': 'Worqor Chirteh (Triumph)',
      'en': 'Worqor Chirteh (Triumph)',
      'fr': 'Worqor Chirteh (manœuvre)',
      'ja': 'ウォーコー・チーテ (演習戦)',
      'ko': '워코 치테(연습전)'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 0
  },
  1314: {
    'contentType': 2,
    'exVersion': 5,
    'name': {
      'cn': '遗忘行路雾之迹',
      'de': 'Die Nebeltrift',
      'en': 'Mistwake',
      'fr': 'Le Sillage brumeux',
      'ja': '遺忘行路 ミストウェイク',
      'ko': '안개여로'
    },
    'offsetX': -143,
    'offsetY': -475,
    'sizeFactor': 200,
    'weatherRate': 37
  },
  1315: {
    'contentType': 30,
    'exVersion': 5,
    'name': {
      'cn': '多变迷宫 商客奇谭',
      'de': 'Des Händlers Liebesmüh',
      'en': 'The Merchant\'s Tale',
      'fr': 'Contes du Camelot - Donjon à embranchements',
      'ja': 'ヴァリアントダンジョン 商客物語'
    },
    'offsetX': 574,
    'offsetY': -666,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1316: {
    'contentType': 30,
    'exVersion': 5,
    'name': {
      'cn': '深读商客奇谭',
      'de': 'Des Händlers Liebesmüh (fortgeschritten)',
      'en': 'The Merchant\'s Tale (Advanced)',
      'fr': 'Contes du Camelot - Donjon à embranchements (avancé)',
      'ja': 'アドバンスド・ヴァリアントダンジョン 商客物語'
    },
    'offsetX': 580,
    'offsetY': -750,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1317: {
    'contentType': 30,
    'exVersion': 5,
    'name': {
      'cn': '异闻商客奇谭',
      'de': 'Des Händlers kuriose Liebesmüh',
      'en': 'Another Merchant\'s Tale',
      'fr': 'Contes du Camelot annexes - Donjon alternatif',
      'ja': 'アナザーダンジョン 異聞商客物語'
    },
    'offsetX': -375,
    'offsetY': -562,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1318: {
    'contentType': 4,
    'exVersion': 5,
    'name': {
      'cn': '月读幻巧战',
      'de': 'Traumprüfung - Tsukuyomi',
      'en': 'Tsukuyomi\'s Pain (Unreal)',
      'fr': 'Castrum Fluminis (irréel)',
      'ja': '幻ツクヨミ討滅戦',
      'ko': '환 츠쿠요미 토벌전'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1320: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 重量级1',
      'de': 'Arkadion - Superschwergewicht R1',
      'en': 'AAC Heavyweight M1',
      'fr': 'Poids lourds CCA - match 1',
      'ja': '至天の座アルカディア：ヘビー級1',
      'ko': '아르카디아 선수권: 헤비급 1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1321: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 重量级1',
      'de': 'Arkadion - Superschwergewicht R1 (episch)',
      'en': 'AAC Heavyweight M1 (Savage)',
      'fr': 'Poids lourds CCA - match 1 (sadique)',
      'ja': '至天の座アルカディア零式：ヘビー級1',
      'ko': '아르카디아 선수권: 헤비급(영웅) 1'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1322: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 重量级2',
      'de': 'Arkadion - Superschwergewicht R2',
      'en': 'AAC Heavyweight M2',
      'fr': 'Poids lourds CCA - match 2',
      'ja': '至天の座アルカディア：ヘビー級2',
      'ko': '아르카디아 선수권: 헤비급 2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 114
  },
  1323: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 重量级2',
      'de': 'Arkadion - Superschwergewicht R2 (episch)',
      'en': 'AAC Heavyweight M2 (Savage)',
      'fr': 'Poids lourds CCA - match 2 (sadique)',
      'ja': '至天の座アルカディア零式：ヘビー級2',
      'ko': '아르카디아 선수권: 헤비급(영웅) 2'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 114
  },
  1324: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 重量级3',
      'de': 'Arkadion - Superschwergewicht R3',
      'en': 'AAC Heavyweight M3',
      'fr': 'Poids lourds CCA - match 3',
      'ja': '至天の座アルカディア：ヘビー級3',
      'ko': '아르카디아 선수권: 헤비급 3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1325: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 重量级3',
      'de': 'Arkadion - Superschwergewicht R3 (episch)',
      'en': 'AAC Heavyweight M3 (Savage)',
      'fr': 'Poids lourds CCA - match 3 (sadique)',
      'ja': '至天の座アルカディア零式：ヘビー級3',
      'ko': '아르카디아 선수권: 헤비급(영웅) 3'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1326: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚登天斗技场 重量级4',
      'de': 'Arkadion - Superschwergewicht R4',
      'en': 'AAC Heavyweight M4',
      'fr': 'Poids lourds CCA - match 4',
      'ja': '至天の座アルカディア：ヘビー級4',
      'ko': '아르카디아 선수권: 헤비급 4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1327: {
    'contentType': 5,
    'exVersion': 5,
    'name': {
      'cn': '阿卡狄亚零式登天斗技场 重量级4',
      'de': 'Arkadion - Superschwergewicht R4 (episch)',
      'en': 'AAC Heavyweight M4 (Savage)',
      'fr': 'Poids lourds CCA - match 4 (sadique)',
      'ja': '至天の座アルカディア零式：ヘビー級4',
      'ko': '아르카디아 선수권: 헤비급(영웅) 4'
    },
    'offsetX': -100,
    'offsetY': -100,
    'sizeFactor': 400,
    'weatherRate': 0
  },
  1328: {
    'contentType': 7,
    'exVersion': 5,
    'name': {
      'cn': '梦想造就风花遍地的',
      'de': 'Die Hüterin Trenos',
      'en': 'Where We Call Home',
      'fr': 'Solidarité entre voisins',
      'ja': '隣人と手を取り合いて',
      'ko': '이웃과 손을 맞잡고'
    },
    'offsetX': -264,
    'offsetY': 476,
    'sizeFactor': 200,
    'weatherRate': 37
  },
  1330: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '山中战线泽梅尔要塞',
      'de': 'Die Feste Dzemael',
      'en': 'Dzemael Darkhold',
      'fr': 'La Forteresse de Dzemael',
      'ja': '掃討作戦 ゼーメル要塞',
      'ko': '제멜 요새',
      'tc': '山中戰線澤梅爾要塞'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1331: {
    'contentType': 2,
    'exVersion': 0,
    'name': {
      'cn': '毒雾洞窟黄金谷',
      'de': 'Goldklamm',
      'en': 'The Aurum Vale',
      'fr': 'Le Val d\'Aurum',
      'ja': '霧中行軍 オーラムヴェイル',
      'ko': '금빛 골짜기',
      'tc': '毒霧洞窟黃金谷'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 200,
    'weatherRate': 0
  },
  1333: {
    'contentType': 39,
    'exVersion': 5,
    'name': {
      'cn': '卓异的悲寂歼灭战',
      'de': 'Eminente Trauer',
      'en': 'The Final Verse',
      'fr': 'Le Verset final',
      'ja': 'エミネントグリーフ討滅戦',
      'ko': '드높은 비애 토벌전'
    },
    'offsetX': 0,
    'offsetY': 0,
    'sizeFactor': 100,
    'weatherRate': 149
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ 404:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: CactbotConfigurator, kDirectoryToCategory, kPrefixToCategory

// EXTERNAL MODULE: ./resources/content_list.ts
var content_list = __webpack_require__(745);
// EXTERNAL MODULE: ./resources/not_reached.ts
var not_reached = __webpack_require__(62);
// EXTERNAL MODULE: ./resources/overlay_plugin_api.ts
var overlay_plugin_api = __webpack_require__(959);
// EXTERNAL MODULE: ./resources/regexes.ts
var regexes = __webpack_require__(402);
// EXTERNAL MODULE: ./resources/user_config.ts
var user_config = __webpack_require__(456);
// EXTERNAL MODULE: ./resources/zone_info.ts
var zone_info = __webpack_require__(902);
;// CONCATENATED MODULE: ./ui/config/config_options.ts

const defaultConfigConfigOptions = {
  CactbotUserDirectory: '',
  ShowDeveloperOptions: false
};
const Options = {
  ...user_config/* default.getDefaultBaseOptions */.Z.getDefaultBaseOptions(),
  ...defaultConfigConfigOptions
};
/* harmony default export */ const config_options = (Options);
// EXTERNAL MODULE: ./resources/languages.ts
var languages = __webpack_require__(619);
;// CONCATENATED MODULE: ./ui/config/general_config.ts


user_config/* default.registerOptions */.Z.registerOptions('general', {
  options: [{
    id: 'CactbotUserDirectory',
    name: {
      en: 'Cactbot user directory',
      de: 'Cactbot Benutzerverzeichnis',
      fr: 'Répertoire utilisateur de Cactbot',
      ja: 'Cactbot ユーザーディレクトリ',
      cn: 'Cactbot user目录',
      ko: 'Cactbot 사용자 디렉토리',
      tc: 'Cactbot user目錄'
    },
    type: 'directory',
    default: ''
  }, {
    id: 'ShowDeveloperOptions',
    name: {
      en: 'Show developer options',
      de: 'Zeige Entwickleroptionen',
      fr: 'Afficher les options développeur',
      ja: '開発者向けオプション',
      cn: '显示开发者选项',
      ko: '개발자 옵션 표시',
      tc: '顯示開發者選項'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'DisplayLanguage',
    name: {
      en: 'Display language',
      de: 'Displaysprache',
      fr: 'Langue d\'affichage',
      ja: '表示言語',
      cn: '显示语言',
      ko: '주 사용 언어',
      tc: '顯示語言'
    },
    type: 'select',
    options: {
      en: {
        'Use FFXIV Plugin Language': 'default',
        'English (en)': 'en',
        'Chinese (cn)': 'cn',
        'German (de)': 'de',
        'French (fr)': 'fr',
        'Japanese (ja)': 'ja',
        'Korean (ko)': 'ko',
        'Traditional Chinese (tc)': 'tc'
      },
      de: {
        'Benutze FFXIV Plugin Sprache': 'default',
        'Englisch (en)': 'en',
        'Chinesisch (cn)': 'cn',
        'Deutsch (de)': 'de',
        'Französisch (fr)': 'fr',
        'Japanisch (ja)': 'ja',
        'Koreanisch (ko)': 'ko',
        'Traditionelles Chinesisch (tc)': 'tc'
      },
      fr: {
        'Utiliser la langue du Plugin FFXIV': 'default',
        'Anglais (en)': 'en',
        'Chinois (cn)': 'cn',
        'Allemand (de)': 'de',
        'Français (fr)': 'fr',
        'Japonais (ja)': 'ja',
        'Coréen (ko)': 'ko',
        'Chinois traditionnel (tc)': 'tc'
      },
      ja: {
        'FFXIV Pluginの言語設定': 'default',
        '英語 (en)': 'en',
        '中国語 (cn)': 'cn',
        'ドイツ語 (de)': 'de',
        'フランス語 (fr)': 'fr',
        '日本語 (ja)': 'ja',
        '韓国語 (ko)': 'ko',
        '繁体字中国語 (tc)': 'tc'
      },
      cn: {
        '使用最终幻想XIV解析插件设置的语言': 'default',
        '英文 (en)': 'en',
        '中文 (cn)': 'cn',
        '德文 (de)': 'de',
        '法文 (fr)': 'fr',
        '日文 (ja)': 'ja',
        '韩文 (ko)': 'ko',
        '繁体中文 (tc)': 'tc'
      },
      ko: {
        'FFXIV Plugin 언어 사용': 'default',
        '영어 (en)': 'en',
        '중국어 (cn)': 'cn',
        '독일어 (de)': 'de',
        '프랑스어 (fr)': 'fr',
        '일본어 (ja)': 'ja',
        '한국어 (ko)': 'ko',
        '중국어 번체 (tc)': 'tc'
      },
      tc: {
        '使用最終幻想XIV解析插件設置的語言': 'default',
        '英文 (en)': 'en',
        '中文 (cn)': 'cn',
        '德文 (de)': 'de',
        '法文 (fr)': 'fr',
        '日文 (ja)': 'ja',
        '韓文 (ko)': 'ko',
        '繁體中文 (tc)': 'tc'
      }
    },
    default: 'default',
    debug: true,
    setterFunc: value => {
      if (typeof value !== 'string') return;
      if (value === 'default') return;
      if ((0,languages/* isLang */.jd)(value)) return value;
    }
  }]
});
;// CONCATENATED MODULE: ./ui/eureka/eureka_config.ts

user_config/* default.registerOptions */.Z.registerOptions('eureka', {
  options: [{
    id: 'Debug',
    name: {
      en: 'Enable debug mode',
      de: 'Aktiviere Debugmodus',
      fr: 'Activer le mode debug',
      ja: 'デバッグモードを有効にする',
      cn: '启用调试模式',
      ko: '디버그 모드 활성화',
      tc: '啟用除錯模式'
    },
    default: false,
    type: 'checkbox',
    debugOnly: true
  }, {
    id: 'FlagTimeoutSeconds',
    name: {
      en: 'Duration of flags on the map (seconds)',
      de: 'Zeit der Flaggen auf der Karte (in Sekunden)',
      fr: 'Durée des drapeaux sur la carte en (s)',
      ja: 'マップにマーカーの表示時間 (秒)',
      cn: '地图标志显示时间 (秒)',
      ko: '지도에 깃발이 표시될 시간 (초)',
      tc: '地圖標誌顯示時間 (秒)'
    },
    type: 'float',
    default: 90,
    setterFunc: (value, options) => {
      let seconds;
      if (typeof value === 'string') seconds = parseFloat(value);else if (typeof value === 'number') seconds = value;else return;
      // Store in a separate variable with a different unit.
      options['FlagTimeoutMs'] = seconds * 1000;
    }
  }, {
    id: 'CompleteNamesSTQ',
    name: {
      en: 'Prefer complete names for Skirmishes/Critical Engagements',
      de: 'Bevorzuge komplette Namen für Scharmützel/Kritische Gefechte',
      fr: 'Préférer les noms complet pour les Escarmouches/Affrontements Cruciaux',
      ja: 'スカーミッシュ/CEにフールネームを表示する',
      cn: '显示冲突战/紧急遭遇战全名',
      ko: '돌발 교전/비상 교전 줄임말 쓰지 않기',
      tc: '顯示衝突戰/緊急遭遇戰全名'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'EnrichedSTQ',
    name: {
      en: 'Add information about Field Notes',
      de: 'Füge Informationen über Frontberichte hinzu',
      fr: 'Ajouter les informations relatives aux Rapports du Front Bozjien',
      ja: 'フィールドノートに戦果記録情報を追加する',
      cn: '显示可能掉落的战果记录',
      ko: '전과기록 정보 보여주기',
      tc: '顯示可能掉落的戰果記錄'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'PopNoiseForNM',
    name: {
      en: 'Play pop sound for NMs',
      de: 'Spiele Pop-Sound ab für NMs',
      fr: 'Jouer un son pour l\'apparition des NMs',
      ja: 'NM通知機能を有効にする',
      cn: 'NM出现时播放提示音',
      ko: '돌발임무 알림 소리 켜기',
      tc: 'NM出現時播放提示音'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'PopNoiseForBunny',
    name: {
      en: 'Play pop sound for bunny fates',
      de: 'Spiele Pop-Sound ab für Bunny-Fates',
      fr: 'Jouer un son pour l\'apparition de l\'aléa des lapins',
      ja: 'しあわせうさぎ通知機能を有効にする',
      cn: '幸福兔出现时播放提示音',
      ko: '토끼 돌발 알림 소리 켜기',
      tc: '幸福兔出現時播放提示音'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'PopNoiseForSkirmish',
    name: {
      en: 'Play pop sound for skirmishes',
      de: 'Spiele Pop-Sound ab für Scharmützel',
      fr: 'Jouer un son pour l\'apparition des escarmouches',
      ja: 'スカーミッシュ通知機能を有効にする',
      cn: '冲突战出现时播放提示音',
      ko: '돌발 교전 알림 소리 켜기',
      tc: '衝突戰出現時播放提示音'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'PopNoiseForCriticalEngagement',
    name: {
      en: 'Play pop sound for critical engagements',
      de: 'Spiele Pop-Sound ab für Kritische Gefechte',
      fr: 'Jouer un son pour l\'apparition des affrontement cruciaux',
      ja: 'CE通知機能を有効にする',
      cn: '紧急遭遇战(CE)出现时播放提示音',
      ko: '비상 교전 알림 소리 켜기',
      tc: '緊急遭遇戰(CE)出現時播放提示音'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'PopNoiseForDuel',
    name: {
      en: 'Play pop sound for duels',
      de: 'Spiele Pop-Sound ab für Duelle',
      fr: 'Jouer un son pour l\'apparition des duels',
      ja: '一騎打ち通知機能を有効にする',
      cn: '一对一决斗出现时播放提示音',
      ko: '결투 알림 소리 켜기',
      tc: '一對一決鬥出現時播放提示音'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'PopVolume',
    name: {
      en: 'Volume of the nm pop sound (0-1)',
      de: 'Lautstärke des Popsounds bei erscheinen eines NM (0-1)',
      fr: 'Volume du son d\'apparition d\'un NM (0-1)',
      ja: 'NM出現音量 (0-1)',
      cn: 'NM提示音量 (0-1)',
      ko: '돌발임무 등장 알림 소리 크기 (0-1)',
      tc: 'NM提示音量 (0-1)'
    },
    type: 'float',
    default: 1
  }, {
    id: 'BunnyPopVolume',
    name: {
      en: 'Volume of the bunny pop sound (0-1)',
      de: 'Lautstärke des Bunny Pop Sounds (0-1)',
      fr: 'Volume du son d\'apparition des lapins (0-1)',
      ja: 'しあわせうさぎ出現音量 (0-1)',
      cn: '幸福兔提示音量（0-1）',
      ko: '토끼 돌발 등장 알림 소리 크기 (0-1)',
      tc: '幸福兔提示音量（0-1）'
    },
    type: 'float',
    default: 0.3
  }, {
    id: 'CriticalPopVolume',
    name: {
      en: 'Volume of the critical engagement pop sound (0-1)',
      de: 'Lautstärke des Kritischen Gefecht Sounds (0-1)',
      fr: 'Volume du son d\'apparition des affrontements cruciaux (0-1)',
      ja: 'CE通知音量 (0-1)',
      cn: 'CE提示音量（0-1）',
      ko: '비상 교전 알림 소리 크기 (0-1)',
      tc: 'CE提示音量（0-1）'
    },
    type: 'float',
    default: 0.3
  }, {
    id: 'RefreshRateSeconds',
    name: {
      en: 'Update rate of nm cooldowns (seconds)',
      de: 'Aktualisierung der NM cooldowns (in Sekunden)',
      fr: 'Rafraîchissement du temps de réapparition d\'un NM (s)',
      ja: 'NMの再沸き時間のリフレッシュ間隔 (秒)',
      cn: 'NM冷却时间刷新间隔 (秒)',
      ko: '돌발 소환가능시간 갱신 주기 (초)',
      tc: 'NM冷卻時間刷新間隔 (秒)'
    },
    type: 'float',
    default: 1,
    setterFunc: (value, options) => {
      let seconds;
      if (typeof value === 'string') seconds = parseFloat(value);else if (typeof value === 'number') seconds = value;else return;
      // Store in a separate variable with a different unit.
      options['RefreshRateMs'] = seconds * 1000;
    }
  }]
});
;// CONCATENATED MODULE: ./ui/jobs/jobs_config.ts

user_config/* default.registerOptions */.Z.registerOptions('jobs', {
  options: [{
    id: 'JustBuffTracker',
    name: {
      en: 'Only show the party buff tracker',
      de: 'Zeige nur den Gruppen Buff-Tracker',
      fr: 'Afficher seulement le tracker de buff de l\'équipe',
      ja: 'シナジー効果のみ表示',
      cn: '仅显示监控团辅监控区',
      ko: '파티 버프만 표시',
      tc: '僅顯示監控團輔監控區'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'CompactView',
    name: {
      en: 'Enable compact view',
      de: 'Kompaktansicht aktivieren',
      fr: 'Activer la vue compacte',
      ja: 'コンパクトUIを有効',
      cn: '启用紧凑视图',
      ko: '간략한 UI 사용',
      tc: '啟用緊湊視圖'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'LowerOpacityOutOfCombat',
    name: {
      en: 'Lower ui opacity when out of combat',
      de: 'Veringere die Deckkraft auserhalb des Kampfes',
      fr: 'Diminiuer l\'opacité de l\'UI hors combat',
      ja: '非戦闘時にUIを少し透明にする',
      cn: '非战斗状态时使UI半透明',
      ko: '전투 중이 아닐 때, UI 투명도 높이기',
      tc: '非戰鬥狀態時使UI半透明'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'OpacityOutOfCombat',
    name: {
      en: 'Opacity of ui when out of combat',
      de: 'Deckkraft der UI auserhalb des Kampfes',
      fr: 'Opacité de l\'UI hors combat',
      ja: '非戦闘時のUI透明度',
      cn: '非战斗状态时的UI透明度',
      ko: '전투 중이 아닐 때, UI 투명도',
      tc: '非戰鬥狀態時的UI透明度'
    },
    type: 'float',
    default: 0.5
  }, {
    id: 'PlayCountdownSound',
    name: {
      en: 'Enable countdown notification sound',
      de: 'Aktiviere Countdown Hinweis-Ton',
      fr: 'Activer la notification sonore du compte à rebours',
      ja: 'カウントダウン音を有効',
      cn: '启用倒计时提示音',
      ko: '초읽기 알림 소리 켜기',
      tc: '啟用倒數計時提示音'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'CountdownSoundVolume',
    name: {
      en: 'Countdown sound volume',
      de: 'Countdown Lautstärke',
      fr: 'Volume du compte à rebours',
      ja: 'カウントダウン音の音量',
      cn: '倒计时提示音量',
      ko: '초읽기 소리 크기',
      tc: '倒數計時提示音量'
    },
    type: 'float',
    default: 0.3
  }, {
    id: 'HideWellFedAboveSeconds',
    name: {
      en: 'Hide cheese icon when food > time (in seconds)',
      de: 'Verstecke das Käse Icon wenn Bufffood > Zeit (in Sekunden)',
      fr: 'Masquer l\'icône du fromage lorsque vous êtes repu > durée (en secondes)',
      ja: '食事効果の残り時間を示すしきい値 (秒)',
      cn: '进食 Buff 剩余时间不足提示阈值 (秒)',
      ko: '남은 식사 효과 시간이 이 시간보다 길면, 치즈 아이콘 숨김 (단위: 초)',
      tc: '進食 Buff 剩餘時間不足提示閾值 (秒)'
    },
    type: 'integer',
    default: 15 * 60
  }, {
    id: 'ShowMPTickerOutOfCombat',
    name: {
      en: 'Show MP ticker out of combat',
      de: 'Zeige MP-Ticker auserhalb des Kampfes',
      fr: 'Afficher le symbole PM hors combat',
      ja: 'MP自然回復メーターを常時表示する',
      cn: '一直显示MP自然恢复监控',
      ko: '전투 중이 아닐 때, MP 티커 표시',
      tc: '一直顯示MP自然恢復監控'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'MidHealthThresholdPercent',
    name: {
      en: 'Percent of health considered middling',
      de: 'Prozent der Lebenspunkte (mittelmaß)',
      fr: 'Pourcentage de vie considéré comme moyenne',
      ja: '健康なHPとして扱うHP量 (1 = 100%)',
      cn: 'HP监控中等HP变色阈值 (1 = 100%)',
      ko: '보통 HP로 취급될 HP비율 (1 = 100%)',
      tc: 'HP監控中等HP變色閾值 (1 = 100%)'
    },
    type: 'float',
    default: 0.8
  }, {
    id: 'LowHealthThresholdPercent',
    name: {
      en: 'Percent of health considered low',
      de: 'Prozent der Lebenspunkte (gering)',
      fr: 'Pourcentage de vie considéré comme bas',
      ja: '危険なHPとして扱うHP量 (1 = 100%)',
      cn: 'HP监控危险HP变色阈值 (1 = 100%)',
      ko: '낮은 HP로 취급될 HP비율 (1 = 100%)',
      tc: 'HP監控危險HP變色閾值 (1 = 100%)'
    },
    type: 'float',
    default: 0.2
  }, {
    id: 'BigBuffShowCooldownSeconds',
    name: {
      en: 'Minimum seconds on a cooldown before shown',
      de: 'Minimum an Sekunden für einen Cooldown vor der Anzeige',
      fr: 'Nombre minimal de secondes avant l\'affichage du temps de recharge',
      ja: 'シナジースキルがまもなく使用可能になるしきい値 (秒)',
      cn: '团辅冷却完成预告时间阈值 (秒)',
      ko: '재사용 대기시간을 표시할 기준 시간(초 이하)',
      tc: '團輔冷卻完成預告時間閾值 (秒)'
    },
    type: 'float',
    default: 20
  }, {
    id: 'BigBuffIconWidth',
    name: {
      en: 'Width of buff icons (px)',
      de: 'Weite des Buff Icons (px)',
      fr: 'Largeur des icônes de buff (pixel)',
      ja: 'シナジースキルのアイコンの広さ (pixel)',
      cn: '团辅监控图标宽度 (像素)',
      ko: '버프 아이콘 너비 (pixel)',
      tc: '團輔監控圖示寬度 (像素)'
    },
    type: 'integer',
    default: 44
  }, {
    id: 'BigBuffIconHeight',
    name: {
      en: 'Height of buff icons (px)',
      de: 'Höhe des Buff Icons (px)',
      fr: 'Hauteur des icônes de buff (pixel)',
      ja: 'シナジースキルのアイコンの高さ (pixel)',
      cn: '团辅监控图标高度 (像素)',
      ko: '버프 아이콘 높이 (pixel)',
      tc: '團輔監控圖示高度 (像素)'
    },
    type: 'integer',
    default: 32
  }, {
    id: 'BigBuffBarHeight',
    name: {
      en: 'Height of buff timer bars (px)',
      de: 'Höhe der Buff-Timer Leisten (px)',
      fr: 'Hauteur des barres de temps de buff (pixel)',
      ja: 'シナジースキルのタイムバーの高さ (pixel)',
      cn: '团辅监控计时条高度 (像素)',
      ko: '버프 타이머 바 높이 (pixel)',
      tc: '團輔監控計時條高度 (像素)'
    },
    type: 'integer',
    default: 5
  }, {
    id: 'BigBuffTextHeight',
    name: {
      en: 'Height of buff text (px)',
      de: 'Höhe des Buff-Text (px)',
      fr: 'Hauteur du texte de buff (pixel)',
      ja: 'シナジースキルのテキストの高さ (pixel)',
      cn: '团辅监控文字高度 (像素)',
      ko: '버프 텍스트 높이 (pixel)',
      tc: '團輔監控文字高度 (像素)'
    },
    type: 'integer',
    default: 0
  }, {
    id: 'BigBuffBorderSize',
    name: {
      en: 'Size of buff borders (px)',
      de: 'Größe der Buff-Ränder (px)',
      fr: 'Taille des bordures de buff (pixel)',
      ja: 'シナジースキルのボーダーの広さ (pixel)',
      cn: '团辅监控边框尺寸 (像素)',
      ko: '버프 아이콘 테두리 크기 (pixel)',
      tc: '團輔監控邊框尺寸 (像素)'
    },
    type: 'integer',
    default: 1
  }, {
    id: 'GpAlarmPoint',
    name: {
      en: 'GP alarm threshold (0 to disable)',
      de: 'SP Alarm Grenze (0 to disable)',
      fr: 'Seuil d\'alarme PR (0 pour désactiver)',
      ja: 'GPアラームのしきい値 (0で無効)',
      cn: '采集力溢出提示阈值 (0为禁用)',
      ko: 'GP 알람 설정값 (0 = 기능 정지)',
      tc: '採集力溢出提示閾值 (0為禁用)'
    },
    type: 'integer',
    default: 0
  }, {
    id: 'GpAlarmSoundVolume',
    name: {
      en: 'GP alarm sound (0-1)',
      de: 'SP Alarm Sound (0-1)',
      fr: 'Son d\'alarme PR (0-1)',
      ja: 'GPアラームの音量 (0-1)',
      cn: '采集力溢出提示音量 (0-1)',
      ko: 'GP 알람 소리 크기 (0-1)',
      tc: '採集力溢出提示音量 (0-1)'
    },
    type: 'float',
    default: 0.8
  }, {
    id: 'NotifyExpiredProcsInCombat',
    name: {
      en: 'Flash procs boxes of inactive dots/etc. up to n times while in combat. (-1: disabled, 0: infinite)',
      de: 'Dot/etc. boxen blinken bis zu n mal wenn im Kampf und dot ist nicht aktiv. (-1: deaktiviert, 0: ohne Limit)',
      fr: 'Faire clignoter n fois les DoT/Buffs inactifs en combat (-1 : désactivé, 0 : infini)',
      ja: '戦闘中でDoT/バフが切ったらprocボックスを点滅させる回数 (-1：無効、0：無限回数)',
      cn: '战斗中模块监控的重要DoT/Buff中断时令对应计时器闪烁N次（-1：禁用，0：无限闪烁）',
      ko: '도트나 버프가 꺼지면 프록 박스를 n번 깜빡하게 합니다. (-1: 비활성화, 0: 무한)',
      tc: '戰鬥中模組監控的重要DoT/Buff中斷時令對應計時器閃爍N次（-1：禁用，0：無限閃爍）'
    },
    type: 'integer',
    default: 5
  }, {
    id: 'NotifyExpiredProcsInCombatSound',
    name: {
      en: 'Play a sound notification if a proc box for dots/etc. expires while in combat.',
      de: 'Spiele einen Alarm Sound wenn eine dot/etc. box im Kampf inaktiv wird.',
      fr: 'Jouer un son si un Dot/Buff expire en combat.',
      ja: '戦闘中でDoT/バフがまもなく切れると音を鳴らす',
      cn: '战斗中模块监控的重要DoT/Buff即将中断时播放提示音',
      ko: '도트나 버프가 꺼지면 소리로 알림을 줍니다.',
      tc: '戰鬥中模組監控的重要DoT/Buff即將中斷時播放提示音'
    },
    type: 'select',
    options: {
      en: {
        'Disabled': 'disabled',
        'When counter reaches 0.': 'expired',
        'When counter is close to 0.': 'threshold'
      },
      de: {
        'Deaktiviert': 'disabled',
        'Wenn der Countdown 0 erreicht.': 'expired',
        'Wenn der Countdown nahe 0 ist.': 'threshold'
      },
      fr: {
        'Désactivé': 'disabled',
        'Quand le compteur arrive à 0.': 'expired',
        'Quand le compteur est proche de 0.': 'threshold'
      },
      ja: {
        '無効': 'disabled',
        '残り時間 → 0': 'expired',
        '残り時間 → しきい値': 'threshold'
      },
      cn: {
        '禁用': 'disabled',
        '计时器归零时': 'expired',
        '计时器到达提示阈值时': 'threshold'
      },
      ko: {
        '비활성화': 'disabled',
        '카운트 다운이 0초일 때': 'expired',
        '리필하기 적절한 때에 알려주기': 'threshold'
      },
      tc: {
        '禁用': 'disabled',
        '計時器歸零時': 'expired',
        '計時器到達提示閾值時': 'threshold'
      }
    },
    default: 'threshold'
  }]
});
;// CONCATENATED MODULE: ./ui/oopsyraidsy/buff_map.ts
// TODO: We could add BRD's songs (Minuet = 8A8, Ballad = 8A9, Paeon = 8AA),
// but effect re-application lines are continuously sent by ACT (as this is a cancellable buff).
// If we use `collectSeconds` for the full duration, the 'missed' message will be very delayed;
// but any shorter, we'll get repeated 'missed' messages for the same buff.
// We probably need to add support for something like a 'suppressSeconds' property.

// missedEffectBuffMap is for buffs that can be detected solely by `GainsEffect` lines,
// where there is no corresponding `Ability` line to indicate the player received the effect.
// These are predominantly bubble-type AoE buffs, like WHM's Asylum.
// If there is an ability line for each affected player, use `missedAbilityBuffMap` instead.
const missedEffectBuffMap = [
// ******************** Tanks ******************** //
{
  // PLD
  id: 'Passage of Arms',
  type: 'mitigation',
  // Arms Up = 498 (others), Passage Of Arms = 497 (you).  Use both in case everybody is missed.
  effectId: ['497', '498'],
  ignoreSelf: true,
  collectSeconds: 15
},
// ******************** Healers ******************** //
{
  // WHM
  id: 'Asylum',
  type: 'heal',
  // 777 = you (bubble), 778 = you + others (healing).  Use both in case everybody is missed.
  effectId: ['777', '778'],
  collectSeconds: 24
}, {
  // WHM
  id: 'Temperance',
  type: 'mitigation',
  effectId: '751',
  collectSeconds: 2
}, {
  // SCH
  id: 'Seraphism',
  type: 'heal',
  effectId: 'F2D',
  collectSeconds: 2
}, {
  // AST
  id: 'Collective Unconscious',
  type: 'mitigation',
  effectId: '351',
  collectSeconds: 20
},
// ******************** Melee DPS ******************** //
{
  // RPR heal
  id: 'Crest of Time Returned',
  type: 'heal',
  effectId: 'A26',
  collectSeconds: 2
},
// ******************** Physical Ranged DPS ******************** //
{
  // DNC channeled heal
  id: 'Improvisation',
  type: 'heal',
  effectId: 'A87',
  collectSeconds: 15
}
// ******************** Magical Ranged DPS ******************** //

// ******************** Field Operations & Misc. ******************** //
];

// missedAbilityBuffMap is for buffs that have a corresponding Ability line for
// each affected player.  If the effect's application to a particular player can only
// be measured by `GainsEffect` lines, use `missedEffectBuffMap` instead.
const missedAbilityBuffMap = [
// ******************** Tanks ******************** //
{
  // tank LB1
  id: 'Shield Wall',
  type: 'mitigation',
  abilityId: 'C5'
}, {
  // tank LB2
  id: 'Stronghold',
  type: 'mitigation',
  abilityId: 'C6'
},
// ************ PLD ************ //
{
  // PLD LB3
  id: 'Last Bastion',
  type: 'mitigation',
  abilityId: 'C7'
}, {
  id: 'Divine Veil',
  type: 'mitigation',
  abilityId: 'DD4'
},
// ************ WAR ************ //
{
  // WAR LB3
  id: 'Land Waker',
  type: 'mitigation',
  abilityId: '1090'
}, {
  id: 'Shake It Off',
  type: 'mitigation',
  abilityId: '1CDC'
},
// ************ DRK ************ //
{
  // DRK LB3
  id: 'Dark Force',
  type: 'mitigation',
  abilityId: '1091'
}, {
  id: 'Dark Missionary',
  type: 'mitigation',
  abilityId: '4057'
},
// ************ GNB ************ //
{
  // GNB LB3
  id: 'Gunmetal Soul',
  type: 'mitigation',
  abilityId: '42D1'
}, {
  id: 'Heart Of Light',
  type: 'mitigation',
  abilityId: '3F20'
},
// ******************** Healers ******************** //
{
  // heal LB1
  id: 'Healing Wind',
  type: 'heal',
  abilityId: 'CE'
}, {
  // heal LB2
  id: 'Breath of the Earth',
  type: 'heal',
  abilityId: 'CF'
},
// ************ WHM ************ //
{
  // WHM LB3
  id: 'Pulse of Life',
  type: 'heal',
  abilityId: 'D0'
}, {
  id: 'Medica',
  type: 'heal',
  abilityId: '7C'
}, {
  id: 'Medica II',
  type: 'heal',
  abilityId: '85'
}, {
  'id': 'Medica III',
  'type': 'heal',
  'abilityId': '9092'
}, {
  id: 'Cure III',
  type: 'heal',
  abilityId: '83'
}, {
  // (same ID for damage component)
  id: 'Assize',
  type: 'heal',
  abilityId: 'DF3'
}, {
  id: 'Afflatus Rapture',
  type: 'heal',
  abilityId: '4096'
}, {
  id: 'Plenary Indulgence',
  type: 'heal',
  abilityId: '1D09'
}, {
  // 6507 heal on tick
  // 6508 heal on expire
  id: 'Liturgy of the Bell',
  type: 'heal',
  abilityId: ['6507', '6508']
}, {
  id: 'Divine Caress',
  type: 'mitigation',
  abilityId: '9093'
},
// ************ SCH ************ //
{
  // SCH LB3
  id: 'Angel Feathers',
  type: 'heal',
  abilityId: '1097'
}, {
  id: 'Succor',
  type: 'mitigation',
  abilityId: 'BA'
}, {
  id: 'Concitation',
  type: 'mitigation',
  abilityId: '9095'
}, {
  id: 'Indomitability',
  type: 'heal',
  abilityId: 'DFF'
}, {
  id: 'Deployment Tactics',
  type: 'mitigation',
  abilityId: 'E01'
}, {
  id: 'Whispering Dawn',
  type: 'heal',
  abilityId: '323'
}, {
  id: 'Fey Blessing',
  type: 'heal',
  abilityId: '40A0'
}, {
  id: 'Consolation',
  type: 'mitigation',
  abilityId: '40A3'
}, {
  id: 'Angel\'s Whisper',
  type: 'heal',
  abilityId: '40A6'
}, {
  id: 'Fey Illumination',
  type: 'mitigation',
  abilityId: '325'
}, {
  id: 'Seraphic Illumination',
  type: 'mitigation',
  abilityId: '40A7'
}, {
  // Technically the mitigation is "Desperate Measures", but it comes from
  // the Expedient ability on each player and "Expedience" is the haste buff.
  id: 'Expedient',
  type: 'mitigation',
  abilityId: '650C'
}, {
  id: 'Accession',
  type: 'heal',
  abilityId: '9098'
},
// ************ AST ************ //
{
  // AST LB3
  id: 'Astral Stasis',
  type: 'heal',
  abilityId: '1098'
}, {
  id: 'Divination',
  type: 'damage',
  abilityId: '40A8'
}, {
  id: 'Helios',
  type: 'heal',
  abilityId: 'E10'
}, {
  id: 'Aspected Helios',
  type: 'heal',
  abilityId: 'E11'
}, {
  id: 'Helios Conjunction',
  type: 'heal',
  abilityId: '90A6'
}, {
  id: 'Celestial Opposition',
  type: 'heal',
  abilityId: '40A9'
}, {
  id: 'Stellar Burst',
  type: 'heal',
  abilityId: '1D10'
}, {
  id: 'Stellar Explosion',
  type: 'heal',
  abilityId: '1D11'
}, {
  // 40AD initial application
  // 40AE cure on manual trigger
  // same IDs for Horoscope Helios
  id: 'Horoscope',
  type: 'heal',
  abilityId: ['40AD', '40AE']
}, {
  id: 'Macrocosmos',
  type: 'heal',
  abilityId: '6512'
}, {
  id: 'Microcosmos',
  type: 'heal',
  abilityId: '6513'
}, {
  id: 'Lady of Crowns',
  type: 'heal',
  abilityId: '1D15'
}, {
  id: 'Sun Sign',
  type: 'mitigation',
  abilityId: '90A7'
},
// ************ SGE ************ //
{
  // SGE LB3
  id: 'Techne Makre',
  type: 'heal',
  abilityId: '611B'
}, {
  id: 'Kerachole',
  type: 'mitigation',
  abilityId: '5EEA'
}, {
  id: 'Panhaima',
  type: 'mitigation',
  abilityId: '5EF7'
}, {
  id: 'Prognosis',
  type: 'heal',
  abilityId: '5EDE'
}, {
  id: 'Physis',
  type: 'heal',
  abilityId: '5EE0'
}, {
  id: 'Physis II',
  type: 'heal',
  abilityId: '5EEE'
}, {
  id: 'Eukrasian Prognosis',
  type: 'mitigation',
  abilityId: '5EE4'
}, {
  id: 'Eukrasian Prognosis II',
  type: 'mitigation',
  abilityId: '90AA'
}, {
  id: 'Ixochole',
  type: 'heal',
  abilityId: '5EEB'
}, {
  id: 'Pepsis',
  type: 'heal',
  abilityId: '5EED'
}, {
  id: 'Holos',
  type: 'mitigation',
  abilityId: '5EF6'
}, {
  id: 'Pneuma',
  type: 'heal',
  // 5EFE on enemies, and 6CB6 on friendlies.
  abilityId: '6CB6'
}, {
  id: 'Philosophia',
  type: 'heal',
  abilityId: '90AB'
},
// ******************** Melee DPS ******************** //
// ************ MNK ************ //
{
  id: 'Brotherhood',
  type: 'damage',
  abilityId: '1CE4'
}, {
  id: 'Mantra',
  type: 'heal',
  abilityId: '41'
},
// ************ DRG ************ //
{
  id: 'Battle Litany',
  type: 'damage',
  abilityId: 'DE5'
},
// ************ RPR ************ //
{
  id: 'Arcane Circle',
  type: 'damage',
  abilityId: '5F55'
},
// ******************** Physical Ranged DPS ******************** //
// ************ BRD ************ //
{
  id: 'Battle Voice',
  type: 'damage',
  abilityId: '76'
}, {
  id: 'Radiant Finale',
  type: 'damage',
  abilityId: '64B9'
}, {
  id: 'Nature\'s Minne',
  type: 'heal',
  abilityId: '1CF0'
}, {
  id: 'Troubadour',
  type: 'mitigation',
  abilityId: '1CED'
},
// ************ MCH ************ //
{
  id: 'Tactician',
  type: 'mitigation',
  abilityId: '41F9'
},
// ************ DNC ************ //
{
  id: 'Technical Finish',
  type: 'damage',
  // 81C2 is the correct Quadruple Technical Finish, others are Dinky Technical Finish.
  // TODO: pre-6.4, these were the abilityIds, but there's no backwards compat support here
  // See: https://github.com/quisquous/cactbot/issues/5415
  // abilityId: ['3F41', '3F42', '3F43', '3F44'],
  abilityId: ['81BF', '81C0', '81C1', '81C2']
}, {
  // Channeled shield
  id: 'Improvised Finish',
  type: 'mitigation',
  abilityId: '64BD'
}, {
  // AoE heal (same ID from DNC and partner)
  id: 'Curing Waltz',
  type: 'heal',
  abilityId: '3E8F'
}, {
  id: 'Shield Samba',
  type: 'mitigation',
  abilityId: '3E8C'
},
// ******************** Magical Ranged DPS ******************** //
// ************ SMN ************ //
{
  id: 'Searing Light',
  type: 'damage',
  abilityId: '64C9'
}, {
  // phoenix heal
  id: 'Everlasting Flight',
  type: 'heal',
  abilityId: '4085'
}, {
  id: 'Lux Solaris',
  type: 'heal',
  abilityId: '9085'
},
// ************ RDM ************ //
{
  id: 'Embolden',
  type: 'damage',
  abilityId: '1D60'
}, {
  id: 'Magick Barrier',
  type: 'mitigation',
  abilityId: '6501'
},
// ************ PCT ************ //
{
  id: 'Tempera Grassa',
  type: 'mitigation',
  abilityId: '877E'
}, {
  id: 'Starry Muse',
  type: 'damage',
  abilityId: '8773'
}, {
  id: 'Star Prism',
  type: 'heal',
  abilityId: '877A' // 8779 is the damage component
},
// ************ BLU ************ //
{
  id: 'White Wind',
  type: 'heal',
  abilityId: '2C8E'
}, {
  id: 'Gobskin',
  type: 'mitigation',
  abilityId: '4780'
}, {
  id: 'Exuviation',
  type: 'heal',
  abilityId: '478E'
}, {
  // only heals in heal mimic
  id: 'Stotram',
  type: 'heal',
  abilityId: '5B78'
}, {
  id: 'Angel\'s Snack',
  type: 'heal',
  abilityId: '5AE8'
},
// ******************** Field Operations & Misc. ******************** //
// ************ Bozja ************ //
{
  id: 'Lost Aethershield',
  type: 'mitigation',
  abilityId: '5753'
}];
const generateBuffTriggerIds = () => {
  const buffs = [...missedEffectBuffMap, ...missedAbilityBuffMap];
  buffs.sort((a, b) => a.id.localeCompare(b.id));
  return buffs.map(buff => `Buff ${buff.id}`);
};
// EXTERNAL MODULE: ./ui/oopsyraidsy/data/oopsy_manifest.txt + 260 modules
var oopsy_manifest = __webpack_require__(449);
;// CONCATENATED MODULE: ./ui/oopsyraidsy/oopsyraidsy_config.ts




const oopsyHelpers = ['damageWarn', 'damageFail', 'shareWarn', 'shareFail', 'gainsEffectWarn', 'gainsEffectFail'];

// This could be a checkbox, but it's possible we could add more things here,
// like changing fail->warning or who knows what.
const kTriggerOptions = {
  default: {
    label: {
      en: '✔ Defaults',
      de: '✔ Standards',
      fr: '✔ Défauts',
      ja: '✔ 初期設定',
      cn: '✔ 默认设置',
      ko: '✔ 기본',
      tc: '✔ 默認設置'
    }
  },
  disabled: {
    label: {
      en: '❌ Disabled',
      de: '❌ Deaktiviert',
      fr: '❌ Désactivé',
      ja: '❌ 無効',
      cn: '❌ 禁用',
      ko: '❌ 비활성화',
      tc: '❌ 禁用'
    }
  }
};
class OopsyConfigurator {
  optionKey = 'oopsyraidsy';
  constructor(cactbotConfigurator) {
    this.base = cactbotConfigurator;
  }
  buildUI(container, files) {
    const fileMap = this.processOopsyFiles(files);
    const expansionDivs = {};
    for (const info of Object.values(fileMap)) {
      const expansion = info.prefix;
      if (!info.triggers || Object.keys(info.triggers).length === 0) continue;
      let expansionDiv = expansionDivs[expansion];
      if (!expansionDiv) {
        const expansionContainer = document.createElement('div');
        expansionContainer.classList.add('trigger-expansion-container', 'collapsed');
        container.appendChild(expansionContainer);
        const expansionHeader = document.createElement('div');
        expansionHeader.classList.add('trigger-expansion-header');
        expansionHeader.onclick = () => {
          expansionContainer.classList.toggle('collapsed');
        };
        expansionHeader.innerText = expansion;
        expansionContainer.appendChild(expansionHeader);
        expansionDiv = expansionDivs[expansion] = expansionContainer;
      }
      const triggerContainer = document.createElement('div');
      triggerContainer.classList.add('trigger-file-container', 'collapsed');
      expansionDiv.appendChild(triggerContainer);
      const headerDiv = document.createElement('div');
      headerDiv.classList.add('trigger-file-header');
      headerDiv.onclick = () => {
        triggerContainer.classList.toggle('collapsed');
      };
      const parts = [info.title, info.type, expansion];
      for (const part of parts) {
        if (part === undefined) continue;
        const partDiv = document.createElement('div');
        partDiv.classList.add('trigger-file-header-part');
        partDiv.innerText = part;
        headerDiv.appendChild(partDiv);
      }
      triggerContainer.appendChild(headerDiv);
      const triggerOptions = document.createElement('div');
      triggerOptions.classList.add('trigger-file-options');
      triggerContainer.appendChild(triggerOptions);
      for (const id of Object.keys(info.triggers ?? {})) {
        // Build the trigger label.
        const triggerDiv = document.createElement('div');
        triggerDiv.innerHTML = id;
        triggerDiv.classList.add('trigger');
        triggerOptions.appendChild(triggerDiv);

        // Build the trigger comment
        const comment = info.triggers[id]?.comment;
        if (comment) {
          const trigComment = comment[this.base.lang] ?? comment?.en ?? '';
          const triggerComment = document.createElement('div');
          triggerComment.innerHTML = trigComment;
          triggerComment.classList.add('comment');
          triggerDiv.appendChild(triggerComment);
        }

        // Container for the right side ui (select boxes, all of the info).
        const triggerDetails = document.createElement('div');
        triggerDetails.classList.add('trigger-details');
        triggerOptions.appendChild(triggerDetails);
        triggerDetails.appendChild(this.buildTriggerOptions(id, triggerDiv));
      }
    }
  }
  buildTriggerOptions(id, labelDiv) {
    const kField = 'Output';
    const div = document.createElement('div');
    div.classList.add('trigger-options');
    const updateLabel = input => {
      if (input.value === 'hidden' || input.value === 'disabled') labelDiv.classList.add('disabled');else labelDiv.classList.remove('disabled');
    };
    const input = document.createElement('select');
    div.appendChild(input);
    const selectValue = this.base.getOption(this.optionKey, ['triggers', id, kField], 'default');
    for (const [key, value] of Object.entries(kTriggerOptions)) {
      const elem = document.createElement('option');
      elem.innerHTML = this.base.translate(value.label);
      elem.value = key;
      elem.selected = key === selectValue;
      input.appendChild(elem);
      updateLabel(input);
      input.onchange = () => {
        updateLabel(input);
        let value = input.value;
        if (value.includes('default')) value = 'default';
        this.base.setOption(this.optionKey, ['triggers', id, kField], input.value);
      };
    }
    return div;
  }
  processOopsyFiles(files) {
    const map = this.base.processFiles(files);

    // Hackily insert "missed buffs" into the list of triggers.
    const generalEntry = map['00-misc-general'];
    if (!generalEntry) throw new not_reached/* UnreachableCode */.$();
    const fakeBuffs = {
      ...generalEntry,
      fileKey: '00-misc-buffs',
      filename: 'buff_map.ts',
      title: this.base.translate({
        en: 'Missed Buffs',
        de: 'Verfehlte Buffs',
        fr: 'Buffs manqués',
        ja: '欠けバフ',
        cn: '遗漏Buff',
        ko: '놓친 버프 알림',
        tc: '遺漏Buff'
      }),
      triggerSet: {
        triggers: generateBuffTriggerIds().map(id => {
          return {
            id: id
          };
        })
      }
    };
    map[fakeBuffs.fileKey] = fakeBuffs;
    for (const item of Object.values(map)) {
      item.triggers = {};
      const triggerSet = item.triggerSet;
      for (const prop of oopsyHelpers) {
        const obj = triggerSet[prop];
        if (obj === undefined || obj === null) continue;
        if (typeof obj === 'object') {
          for (const id in obj) item.triggers[id] = {
            id: id
          };
        }
      }
      if (!triggerSet.triggers) continue;
      for (const trigger of triggerSet.triggers) {
        if (!trigger.id) continue;
        // Skip triggers that just set data, but include triggers that are just ids.
        if (trigger.run && !trigger.mistake) continue;
        item.triggers[trigger.id] = trigger;
      }
    }
    return map;
  }
}
const templateOptions = {
  buildExtraUI: (base, container) => {
    const builder = new OopsyConfigurator(base);
    builder.buildUI(container, oopsy_manifest/* default */.Z);
  },
  processExtraOptions: (baseOptions, savedConfig) => {
    // TODO: Rewrite user_config to be templated on option type so that this function knows
    // what type of options it is using.  Without this, perTriggerAutoConfig is unknown.
    const options = baseOptions;
    const perTriggerAutoConfig = options['PerTriggerAutoConfig'] ??= {};
    if (typeof savedConfig !== 'object' || Array.isArray(savedConfig)) return;
    const triggers = savedConfig['triggers'];
    if (typeof triggers !== 'object' || Array.isArray(triggers)) return;
    for (const [id, entry] of Object.entries(triggers)) {
      if (typeof entry !== 'object' || Array.isArray(entry)) continue;
      const output = entry['Output'];
      if (output === undefined) continue;
      perTriggerAutoConfig[id] = {
        enabled: output !== 'disabled'
      };
    }
  },
  options: [{
    id: 'Debug',
    name: {
      en: 'Enable debug mode',
      de: 'Aktiviere Debugmodus',
      fr: 'Activer le mode debug',
      ja: 'デバッグモードを有効にする',
      cn: '启用调试模式',
      ko: '디버그 모드 활성화',
      tc: '啟用除錯模式'
    },
    type: 'checkbox',
    debugOnly: true,
    default: false
  }, {
    id: 'DefaultPlayerLabel',
    name: {
      en: 'Default Player Label',
      de: 'Standard Spieler Label',
      fr: 'Label par défaut du joueur',
      ja: '基本プレイヤーラベル',
      cn: '默认玩家代称',
      ko: '플레이어를 언급하는 기본 방법',
      tc: '默認玩家代稱'
    },
    type: 'select',
    options: {
      en: {
        'Nickname (Tini)': 'nick',
        'Role (Tank)': 'role',
        'Job (WAR)': 'job',
        'Full Job (Warrior)': 'jobFull',
        'Full Name (Tini Poutini)': 'name'
      },
      fr: {
        'Pseudo (Tini)': 'nick',
        'Role (Tank)': 'role',
        'Job (GUE)': 'job',
        'Job complet (Guerrier)': 'jobFull',
        'Nom complet (Tini Poutini)': 'name'
      },
      ja: {
        'あだ名 (Tini)': 'nick',
        'ロール (ヒーラー)': 'role',
        '簡略ジョブ (白魔)': 'job',
        'ジョブ (白魔導士)': 'jobFull',
        '名前 (Tini Poutini)': 'name'
      },
      cn: {
        '昵称 (弗雷)': 'nick',
        '职能 (坦克)': 'role',
        '职业简称 (暗骑)': 'job',
        '职业全称 (暗黑骑士)': 'jobFull',
        '全名 (弗雷)': 'name'
      },
      ko: {
        '닉네임 (Tini)': 'nick',
        '역할 (탱커)': 'role',
        '직업 (암기)': 'job',
        '직업 전체 (암흑기사)': 'jobFull',
        '이름 전체 (Tini Poutini)': 'name'
      },
      tc: {
        '暱稱 (弗雷)': 'nick',
        '職能 (坦克)': 'role',
        '職業簡稱 (暗騎)': 'job',
        '職業全稱 (暗黑騎士)': 'jobFull',
        '全名 (弗雷)': 'name'
      }
    },
    default: 'nick'
  }, {
    id: 'NumLiveListItemsInCombat',
    name: {
      en: 'Number of mistakes to show in combat',
      de: 'Anzahl der Fehler, die während des Kampfes angezeigt werden',
      fr: 'Nombre de fautes à afficher en combat',
      ja: '戦闘中に表示するミスをした回数',
      cn: '战斗中显示的错误数量',
      ko: '전투 중 표시할 실수들의 개수',
      tc: '戰鬥中顯示的錯誤數量'
    },
    type: 'integer',
    default: 5
  }, {
    id: 'MinimumTimeForPullMistake',
    name: {
      en: 'Minimum time to show early pull (seconds)',
      de: 'Minimum Zeit in der Early-Pulls angezeigt werden (in Sekunden)',
      fr: 'Durée minimale pour afficher l\'early pull (secondes)',
      ja: 'タゲ取るのが早かったら、ミスとして表示する、カウントダウンとの最短時間 (秒)',
      cn: '显示提前开怪最小时间 (秒)',
      ko: '풀링이 빠르다고 표시 할 최소 시간 (초)',
      tc: '顯示提前開怪最小時間 (秒)'
    },
    type: 'float',
    default: 0.4
  }, {
    id: 'TimeToShowDeathReportSeconds',
    name: {
      en: 'Seconds to show death report on death (0=none)',
      de: 'Sekunden um den Todesreport beim Tot anzuzeigen (0=niemals)',
      fr: 'Durée d’affichage (en secondes) du rapport de mort (0 = aucun)',
      ja: '倒れた時にデスレポートを表示 (0=非表示)',
      cn: '死亡时显示死亡报告的秒数 (0=不显示)',
      ko: '죽었을 때 사망 보고서를 보여주는 시간(초) (0=비활성화)',
      tc: '死亡時顯示死亡報告的秒數 (0=不顯示)'
    },
    type: 'float',
    default: 4,
    setterFunc: (value, options) => {
      let seconds;
      if (typeof value === 'string') seconds = parseFloat(value);else if (typeof value === 'number') seconds = value;else return;

      // Store in a separate variable with a different unit.
      options['TimeToShowDeathReportMs'] = seconds * 1000;
    }
  }, {
    id: 'DeathReportSide',
    name: {
      en: 'How to show the death report',
      de: 'Wie zeige ich den Todesreport an',
      fr: 'Où afficher le rapport de mort',
      ja: 'デスレポートの表示方法',
      cn: '死亡报告的显示方式',
      ko: '사망 보고서 표시 위치',
      tc: '死亡報告的顯示方式'
    },
    type: 'select',
    options: {
      en: {
        'Left Side': 'left',
        'Right Side': 'right',
        '❌ Disabled': 'disabled'
      },
      de: {
        'Left Side': 'links',
        'Right Side': 'rechts',
        '❌ Disabled': 'deaktiviert'
      },
      fr: {
        'Côté gauche': 'gauche',
        'Côté droit': 'droite',
        '❌ Disabled': 'désactivé'
      },
      ja: {
        '左側': 'left',
        '右側': 'right',
        '❌ 無効': 'disabled'
      },
      cn: {
        '左侧': 'left',
        '右侧': 'right',
        '❌ 禁用': 'disabled'
      },
      ko: {
        '왼쪽': 'left',
        '오른쪽': 'right',
        '❌ 비활성화': 'disabled'
      }
    },
    default: 'left'
  }, {
    id: 'MinimumTimeForOverwrittenMit',
    name: {
      en: 'Minimum time to show overwritten mit (seconds)',
      de: 'Minimum Zeit überschriebene Mitigation anzuzeigen (Sekunden)',
      fr: 'Temps minimum pour afficher l\'écrasement des mitigation (s)',
      ja: 'バフの上書き通知を表示する時間 (秒)',
      cn: '显示被顶减伤最小时间 (秒)',
      ko: '파티 생존기 덮어씀 경고를 표시할 기준 시간 (초)',
      tc: '顯示被頂減傷最小時間 (秒)'
    },
    type: 'float',
    default: 2
  }]
};
const userFileHandler = (name, _files, baseOptions, basePath) => {
  // TODO: Rewrite user_config to be templated on option type so that this function knows
  // what type of options it is using.
  if (!baseOptions.Triggers) return;
  for (const baseTriggerSet of baseOptions.Triggers) {
    const set = baseTriggerSet;

    // Annotate triggers with where they came from.  Note, options is passed in repeatedly
    // as multiple sets of user files add triggers, so only process each file once.
    if (set.isUserTriggerSet) continue;

    // `filename` here is just cosmetic for better debug printing to make it more clear
    // where a trigger or an override is coming from.
    set.filename = `${basePath}${name}`;
    set.isUserTriggerSet = true;
  }
};
user_config/* default.registerOptions */.Z.registerOptions('oopsyraidsy', templateOptions, userFileHandler);
;// CONCATENATED MODULE: ./ui/radar/radar_config.ts

user_config/* default.registerOptions */.Z.registerOptions('radar', {
  options: [{
    id: 'BRankEnabled',
    name: {
      en: 'B-Rank enabled',
      de: 'B-Rank aktiviert',
      fr: 'Rang-B activé',
      ja: 'ランクBモブ',
      cn: '开启B怪探测',
      ko: 'B랭크 표시',
      tc: '開啟B怪探測'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'DetectionRange',
    name: {
      en: 'Minimum distance to detect mobs (yalms)',
      de: 'Minimum Entfernung um Mobs zu erkennen (in Yalms)',
      fr: 'Distance minimale de détection des mobs (yalms)',
      ja: '最短探測距離 (ヤルム)',
      cn: '最短探测距离 (米)',
      ko: '몬스터를 탐지할 최소 거리 (미터)',
      tc: '最短探測距離 (米)'
    },
    type: 'float',
    default: 0
  }, {
    id: 'TTS',
    name: {
      en: 'Announce new mobs with text to speech',
      de: 'Kündige neue Mobs mit TTS an',
      fr: 'Annoncer les nouveaux mobs via TTS',
      ja: '沸きモブを探知したらTTSで知らせる',
      cn: '使用TTS提醒新发现目标',
      ko: '새 몬스터를 TTS로 알림',
      tc: '使用TTS提醒新發現目標'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'PopSoundAlert',
    name: {
      en: 'Announce new mobs with a sound',
      de: 'Kündige neue Mobs mit einem Sound an',
      fr: 'Annoncer les nouveaux mobs avec un son',
      ja: '沸きモブを探知したら音声で知らせる',
      cn: '使用预设提示音提醒新发现目标',
      ko: '새 몬스터를 소리로 알림',
      tc: '使用預設提示音提醒新發現目標'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'PopVolume',
    name: {
      en: 'Volume to play pop sound (0-1)',
      de: 'Lautstärke für den Popsound (0-1)',
      fr: 'Volume du son lors d\'une apparition (0-1)',
      ja: 'お知らせ音声の音量 (0-1)',
      cn: '提示音量 (0-1)',
      ko: '소리 크기 (0-1)',
      tc: '提示音量 (0-1)'
    },
    type: 'float',
    default: 0.5
  }, {
    id: 'PullSoundAlert',
    name: {
      en: 'Play sound when S rank is pulled',
      de: 'Spiele Ton ab, wenn ein S-Rank gepullt wurde',
      fr: 'Jouer un son quand un rang S est attaqué',
      ja: 'Sモブの開始を音で知らせる',
      cn: 'S级开怪时播放提示音',
      ko: 'S급 몬스터가 풀링되면 소리로 알림',
      tc: 'S級開怪時播放提示音'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'PullVolume',
    name: {
      en: 'Volume to play pull sound (0-1)',
      de: 'Lautstärke für den Pullsound (0-1)',
      fr: 'Volume du son lors du pull (0-1)',
      ja: '開始の音量 (0-1)',
      cn: '开怪提示音量 (0-1)',
      ko: '풀링 알림 소리 크기 (0-1)',
      tc: '開怪提示音量 (0-1)'
    },
    type: 'float',
    default: 1
  }, {
    id: 'Puller',
    name: {
      en: 'Show puller of mob',
      de: 'Zeige den ersten Angreifer eines Mobs an',
      fr: 'Afficher le puller du mob',
      ja: '最初にタゲ取った人の名前を表示',
      cn: '显示目标开怪者的名称',
      ko: '몬스터를 풀링한 사람 표시',
      tc: '顯示目標開怪者的名稱'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'Position',
    name: {
      en: 'Show position of mob',
      de: 'Zeige die Position eines Mobs',
      fr: 'Afficher la position du mob',
      ja: '沸きモブの位置を表示',
      cn: '显示目标位置',
      ko: '몬스터의 위치 표시',
      tc: '顯示目標位置'
    },
    type: 'checkbox',
    default: true
  }]
});
// EXTERNAL MODULE: ./resources/netregexes.ts
var netregexes = __webpack_require__(622);
// EXTERNAL MODULE: ./resources/util.ts
var util = __webpack_require__(509);
;// CONCATENATED MODULE: ./resources/party.ts

const emptyRoleToPartyNames = () => {
  return {
    tank: [],
    healer: [],
    dps: [],
    crafter: [],
    gatherer: [],
    none: []
  };
};
const roleLocalized = {
  tank: {
    en: 'tank',
    de: 'Verteidiger',
    fr: 'Tank',
    ja: 'タンク',
    cn: '坦克',
    ko: '탱커',
    tc: '坦克'
  },
  healer: {
    en: 'healer',
    de: 'Heiler',
    fr: 'Soigneur',
    ja: 'ヒーラー',
    cn: '治疗',
    ko: '힐러',
    tc: '補師'
  },
  dps: {
    en: 'dps',
    de: 'DPS',
    fr: 'DPS',
    ja: 'DPS',
    cn: '输出',
    ko: '딜러',
    tc: '打手'
  },
  crafter: {
    en: 'crafter',
    de: 'Handwerker',
    fr: 'Artisan',
    ja: 'クラフター',
    cn: '能工巧匠',
    ko: '제작가',
    tc: '能工巧匠'
  },
  gatherer: {
    en: 'gatherer',
    de: 'Sammler',
    fr: 'Récolteur',
    ja: 'ギャザラー',
    cn: '大地使者',
    ko: '채집가',
    tc: '大地使者'
  },
  none: {
    en: 'none',
    de: 'Keine',
    fr: 'Aucun',
    ja: '冒険者',
    cn: '冒险者',
    ko: '모험가',
    tc: '冒險者'
  }
};
const jobLocalizedAbbr = {
  NONE: {
    en: 'NONE',
    de: 'Keine',
    fr: 'Aucun',
    ja: '冒険者',
    cn: '冒险',
    ko: '모험가',
    tc: '冒險'
  },
  GLA: {
    en: 'GLA',
    de: 'GLA',
    fr: 'GLA',
    ja: '剣術士',
    cn: '剑术',
    ko: '검술',
    tc: '劍術'
  },
  PGL: {
    en: 'PGL',
    de: 'FST',
    fr: 'PGL',
    ja: '格闘士',
    cn: '格斗',
    ko: '격투',
    tc: '格鬥'
  },
  MRD: {
    en: 'MRD',
    de: 'MAR',
    fr: 'MRD',
    ja: '斧術士',
    cn: '斧术',
    ko: '도끼술',
    tc: '斧術'
  },
  LNC: {
    en: 'LNC',
    de: 'PIK',
    fr: 'HAS',
    ja: '槍術士',
    cn: '枪术',
    ko: '창술',
    tc: '槍術'
  },
  ARC: {
    en: 'ARC',
    de: 'WDL',
    fr: 'ARC',
    ja: '弓術士',
    cn: '弓箭',
    ko: '궁술',
    tc: '弓術'
  },
  CNJ: {
    en: 'CNJ',
    de: 'DRU',
    fr: 'ÉLM',
    ja: '幻術士',
    cn: '幻术',
    ko: '환술',
    tc: '幻術'
  },
  THM: {
    en: 'THM',
    de: 'THM',
    fr: 'OCC',
    ja: '呪術士',
    cn: '咒术',
    ko: '주술',
    tc: '咒術'
  },
  CRP: {
    en: 'CRP',
    de: 'ZMR',
    fr: 'MEN',
    ja: '木工',
    cn: '刻木',
    ko: '목수',
    tc: '木工'
  },
  BSM: {
    en: 'BSM',
    de: 'GRS',
    fr: 'FRG',
    ja: '鍛冶',
    cn: '锻铁',
    ko: '대장',
    tc: '鍛造'
  },
  ARM: {
    en: 'ARM',
    de: 'PLA',
    fr: 'ARM',
    ja: '甲冑',
    cn: '铸甲',
    ko: '갑주',
    tc: '甲冑'
  },
  GSM: {
    en: 'GSM',
    de: 'GLD',
    fr: 'ORF',
    ja: '彫金',
    cn: '雕金',
    ko: '보석',
    tc: '金工'
  },
  LTW: {
    en: 'LTW',
    de: 'GER',
    fr: 'TAN',
    ja: '革細',
    cn: '制革',
    ko: '가죽',
    tc: '皮革'
  },
  WVR: {
    en: 'WVR',
    de: 'WEB',
    fr: 'COU',
    ja: '裁縫',
    cn: '裁衣',
    ko: '재봉',
    tc: '裁縫'
  },
  ALC: {
    en: 'ALC',
    de: 'ALC',
    fr: 'ALC',
    ja: '錬金',
    cn: '炼金',
    ko: '연금',
    tc: '鍊金'
  },
  CUL: {
    en: 'CUL',
    de: 'GRM',
    fr: 'CUI',
    ja: '調理',
    cn: '烹调',
    ko: '요리',
    tc: '烹調'
  },
  MIN: {
    en: 'MIN',
    de: 'MIN',
    fr: 'MIN',
    ja: '採掘',
    cn: '采矿',
    ko: '광부',
    tc: '採掘'
  },
  BTN: {
    en: 'BTN',
    de: 'GÄR',
    fr: 'BOT',
    ja: '園芸',
    cn: '园艺',
    ko: '원예',
    tc: '園藝'
  },
  FSH: {
    en: 'FSH',
    de: 'FIS',
    fr: 'PEC',
    ja: '漁師',
    cn: '捕鱼',
    ko: '어부',
    tc: '漁師'
  },
  PLD: {
    en: 'PLD',
    de: 'PLD',
    fr: 'PLD',
    ja: 'ナイト',
    cn: '骑士',
    ko: '나이트',
    tc: '騎士'
  },
  MNK: {
    en: 'MNK',
    de: 'MÖN',
    fr: 'MOI',
    ja: 'モンク',
    cn: '武僧',
    ko: '몽크',
    tc: '武僧'
  },
  WAR: {
    en: 'WAR',
    de: 'KRG',
    fr: 'GUE',
    ja: '戦士',
    cn: '战士',
    ko: '전사',
    tc: '戰士'
  },
  DRG: {
    en: 'DRG',
    de: 'DRG',
    fr: 'DRG',
    ja: '竜騎士',
    cn: '龙骑',
    ko: '용기사',
    tc: '龍騎'
  },
  BRD: {
    en: 'BRD',
    de: 'BRD',
    fr: 'BRD',
    ja: '詩人',
    cn: '诗人',
    ko: '음유',
    tc: '詩人'
  },
  WHM: {
    en: 'WHM',
    de: 'WMA',
    fr: 'MBL',
    ja: '白魔',
    cn: '白魔',
    ko: '백마',
    tc: '白魔'
  },
  BLM: {
    en: 'BLM',
    de: 'SMA',
    fr: 'MNO',
    ja: '黒魔',
    cn: '黑魔',
    ko: '흑마',
    tc: '黑魔'
  },
  ACN: {
    en: 'ACN',
    de: 'HRT',
    fr: 'ACN',
    ja: '巴術士',
    cn: '秘术',
    ko: '비술',
    tc: '巴術'
  },
  SMN: {
    en: 'SMN',
    de: 'BSW',
    fr: 'INV',
    ja: '召喚',
    cn: '召唤',
    ko: '소환',
    tc: '召喚'
  },
  SCH: {
    en: 'SCH',
    de: 'GLT',
    fr: 'ERU',
    ja: '学者',
    cn: '学者',
    ko: '학자',
    tc: '學者'
  },
  ROG: {
    en: 'ROG',
    de: 'SCH',
    fr: 'SUR',
    ja: '双剣士',
    cn: '双剑',
    ko: '쌍검',
    tc: '雙劍'
  },
  NIN: {
    en: 'NIN',
    de: 'NIN',
    fr: 'NIN',
    ja: '忍者',
    cn: '忍者',
    ko: '닌자',
    tc: '忍者'
  },
  MCH: {
    en: 'MCH',
    de: 'MCH',
    fr: 'MCH',
    ja: '機工',
    cn: '机工',
    ko: '기공',
    tc: '機工'
  },
  DRK: {
    en: 'DRK',
    de: 'DKR',
    fr: 'CHN',
    ja: '暗黒',
    cn: '暗骑',
    ko: '암기',
    tc: '暗騎'
  },
  AST: {
    en: 'AST',
    de: 'AST',
    fr: 'AST',
    ja: '占星',
    cn: '占星',
    ko: '점성',
    tc: '占星'
  },
  SAM: {
    en: 'SAM',
    de: 'SAM',
    fr: 'SAM',
    ja: '侍',
    cn: '武士',
    ko: '사무',
    tc: '武士'
  },
  RDM: {
    en: 'RDM',
    de: 'RMA',
    fr: 'MRG',
    ja: '赤魔',
    cn: '赤魔',
    ko: '적마',
    tc: '赤魔'
  },
  BLU: {
    en: 'BLU',
    de: 'BMA',
    fr: 'MBU',
    ja: '青魔',
    cn: '青魔',
    ko: '청마',
    tc: '青魔'
  },
  GNB: {
    en: 'GNB',
    de: 'REV',
    fr: 'PSB',
    ja: 'ガンブレ',
    cn: '绝枪',
    ko: '건브',
    tc: '絕槍'
  },
  DNC: {
    en: 'DNC',
    de: 'TÄN',
    fr: 'DNS',
    ja: '踊り子',
    cn: '舞者',
    ko: '무도',
    tc: '舞者'
  },
  RPR: {
    en: 'RPR',
    de: 'SNT',
    fr: 'FCH',
    ja: 'リーパー',
    cn: '钐镰',
    ko: '리퍼',
    tc: '奪魂'
  },
  SGE: {
    en: 'SGE',
    de: 'WEI',
    fr: 'SAG',
    ja: '賢者',
    cn: '贤者',
    ko: '현자',
    tc: '賢者'
  },
  VPR: {
    en: 'VPR',
    de: 'VPR',
    fr: 'VPR',
    ja: 'ヴァイパー',
    cn: '蝰蛇',
    ko: '바이퍼',
    tc: '毒蛇'
  },
  PCT: {
    en: 'PCT',
    de: 'PKT',
    fr: 'PIC',
    ja: 'ピクトマンサー',
    cn: '画家',
    ko: '픽토',
    tc: '繪靈'
  }
};
const jobLocalizedFull = {
  NONE: {
    en: 'Adventurer',
    de: 'Abenteurer',
    fr: 'Aventurier',
    ja: '冒険者',
    cn: '冒险者',
    ko: '모험가',
    tc: '冒險者'
  },
  GLA: {
    en: 'Gladiator',
    de: 'Gladiator',
    fr: 'Gladiateur',
    ja: '剣術士',
    cn: '剑术师',
    ko: '검술사',
    tc: '劍術士'
  },
  PGL: {
    en: 'Pugilist',
    de: 'Faustkämpfer',
    fr: 'Pugiliste',
    ja: '格闘士',
    cn: '格斗家',
    ko: '격투가',
    tc: '格鬥士'
  },
  MRD: {
    en: 'Marauder',
    de: 'Marodeur',
    fr: 'Maraudeur',
    ja: '斧術士',
    cn: '斧术师',
    ko: '도끼술사',
    tc: '斧術士'
  },
  LNC: {
    en: 'Lancer',
    de: 'Pikenier',
    fr: 'Maître d\'Hast',
    ja: '槍術士',
    cn: '枪术师',
    ko: '창술사',
    tc: '槍術士'
  },
  ARC: {
    en: 'Archer',
    de: 'Waldläufer',
    fr: 'Archer',
    ja: '弓術士',
    cn: '弓箭手',
    ko: '궁술사',
    tc: '弓術士'
  },
  CNJ: {
    en: 'Conjurer',
    de: 'Druide',
    fr: 'Élémentaliste',
    ja: '幻術士',
    cn: '幻术师',
    ko: '환술사',
    tc: '幻術士'
  },
  THM: {
    en: 'Thaumaturge',
    de: 'Thaumaturg',
    fr: 'Occultiste',
    ja: '呪術士',
    cn: '咒术师',
    ko: '주술사',
    tc: '咒術士'
  },
  CRP: {
    en: 'Carpenter',
    de: 'Zimmerer',
    fr: 'Charpentier',
    ja: '木工師',
    cn: '刻木匠',
    ko: '목수',
    tc: '木工師'
  },
  BSM: {
    en: 'Blacksmith',
    de: 'Grobschmied',
    fr: 'Forgeron',
    ja: '鍛冶師',
    cn: '锻铁匠',
    ko: '대장장이',
    tc: '鍛造師'
  },
  ARM: {
    en: 'Armorer',
    de: 'Plattner',
    fr: 'Armurier',
    ja: '甲冑師',
    cn: '铸甲匠',
    ko: '갑주제작사',
    tc: '甲冑師'
  },
  GSM: {
    en: 'Goldsmith',
    de: 'Goldschmied',
    fr: 'Orfèvre',
    ja: '彫金師',
    cn: '雕金匠',
    ko: '보석공예가',
    tc: '金工師'
  },
  LTW: {
    en: 'Leatherworker',
    de: 'Gerber',
    fr: 'Tanneur',
    ja: '革細工師',
    cn: '制革匠',
    ko: '가죽공예가',
    tc: '皮革師'
  },
  WVR: {
    en: 'Weaver',
    de: 'Weber',
    fr: 'Couturier',
    ja: '裁縫師',
    cn: '裁衣匠',
    ko: '재봉사',
    tc: '裁縫師'
  },
  ALC: {
    en: 'Alchemist',
    de: 'Alchemist',
    fr: 'Alchimiste',
    ja: '錬金術師',
    cn: '炼金术士',
    ko: '연금술사',
    tc: '鍊金術師'
  },
  CUL: {
    en: 'Culinarian',
    de: 'Gourmet',
    fr: 'Cuisinier',
    ja: '調理師',
    cn: '烹调师',
    ko: '요리사',
    tc: '烹調師'
  },
  MIN: {
    en: 'Miner',
    de: 'Minenarbeiter',
    fr: 'Mineur',
    ja: '採掘師',
    cn: '采矿工',
    ko: '광부',
    tc: '採掘師'
  },
  BTN: {
    en: 'Botanist',
    de: 'Gärtner',
    fr: 'Botaniste',
    ja: '園芸師',
    cn: '园艺工',
    ko: '원예가',
    tc: '園藝師'
  },
  FSH: {
    en: 'Fisher',
    de: 'Fischer',
    fr: 'Pêcheur',
    ja: '漁師',
    cn: '捕鱼人',
    ko: '어부',
    tc: '漁師'
  },
  PLD: {
    en: 'Paladin',
    de: 'Paladin',
    fr: 'Paladin',
    ja: 'ナイト',
    cn: '骑士',
    ko: '나이트',
    tc: '騎士'
  },
  MNK: {
    en: 'Monk',
    de: 'Mönch',
    fr: 'Moine',
    ja: 'モンク',
    cn: '武僧',
    ko: '몽크',
    tc: '武僧'
  },
  WAR: {
    en: 'Warrior',
    de: 'Krieger',
    fr: 'Guerrier',
    ja: '戦士',
    cn: '战士',
    ko: '전사',
    tc: '戰士'
  },
  DRG: {
    en: 'Dragoon',
    de: 'Dragoon',
    fr: 'Chevalier dragon',
    ja: '竜騎士',
    cn: '龙骑士',
    ko: '용기사',
    tc: '龍騎士'
  },
  BRD: {
    en: 'Bard',
    de: 'Barde',
    fr: 'Barde',
    ja: '吟遊詩人',
    cn: '吟游诗人',
    ko: '음유시인',
    tc: '吟遊詩人'
  },
  WHM: {
    en: 'White Mage',
    de: 'Weißmagier',
    fr: 'Mage blanc',
    ja: '白魔道士',
    cn: '白魔法师',
    ko: '백마도사',
    tc: '白魔道士'
  },
  BLM: {
    en: 'Black Mage',
    de: 'Schwarzmagier',
    fr: 'Mage noir',
    ja: '黒魔道士',
    cn: '黑魔法师',
    ko: '흑마도사',
    tc: '黑魔道士'
  },
  ACN: {
    en: 'Arcanist',
    de: 'Hermetiker',
    fr: 'Arcaniste',
    ja: '巴術士',
    cn: '秘术师',
    ko: '비슬사',
    tc: '巴術士'
  },
  SMN: {
    en: 'Summoner',
    de: 'Beschwörer',
    fr: 'Invocateur',
    ja: '召喚士',
    cn: '召唤师',
    ko: '소환사',
    tc: '召喚士'
  },
  SCH: {
    en: 'Scholar',
    de: 'Gelehrter',
    fr: 'Érudit',
    ja: '学者',
    cn: '学者',
    ko: '학자',
    tc: '學者'
  },
  ROG: {
    en: 'Rogue',
    de: 'Schurke',
    fr: 'Surineur',
    ja: '双剣士',
    cn: '双剑师',
    ko: '쌍검사',
    tc: '雙劍士'
  },
  NIN: {
    en: 'Ninja',
    de: 'Ninja',
    fr: 'Ninja',
    ja: '忍者',
    cn: '忍者',
    ko: '닌자',
    tc: '忍者'
  },
  MCH: {
    en: 'Machinist',
    de: 'Maschinist',
    fr: 'Machiniste',
    ja: '機工士',
    cn: '机工士',
    ko: '기공사',
    tc: '機工士'
  },
  DRK: {
    en: 'Dark Knight',
    de: 'Dunkelritter',
    fr: 'Chevalier noir',
    ja: '暗黒騎士',
    cn: '暗黑骑士',
    ko: '암흑기사',
    tc: '暗黑騎士'
  },
  AST: {
    en: 'Astrologian',
    de: 'Astrologe',
    fr: 'Astromancien',
    ja: '占星術師',
    cn: '占星术士',
    ko: '점성술사',
    tc: '占星術師'
  },
  SAM: {
    en: 'Samurai',
    de: 'Samurai',
    fr: 'Samuraï',
    ja: '侍',
    cn: '武士',
    ko: '사무라이',
    tc: '武士'
  },
  RDM: {
    en: 'Red Mage',
    de: 'Rotmagier',
    fr: 'Mage rouge',
    ja: '赤魔道士',
    cn: '赤魔法师',
    ko: '적마도사',
    tc: '赤魔道士'
  },
  BLU: {
    en: 'Blue Mage',
    de: 'Blaumagier',
    fr: 'Mage bleu',
    ja: '青魔道士',
    cn: '青魔法师',
    ko: '청마도사',
    tc: '青魔道士'
  },
  GNB: {
    en: 'Gunbreaker',
    de: 'Revolverklinge',
    fr: 'Pistosabreur',
    ja: 'ガンブレイカー',
    cn: '绝枪战士',
    ko: '건브레이커',
    tc: '絕槍戰士'
  },
  DNC: {
    en: 'Dancer',
    de: 'Tänzer',
    fr: 'Danseur',
    ja: '踊り子',
    cn: '舞者',
    ko: '무도가',
    tc: '舞者'
  },
  RPR: {
    en: 'Reaper',
    de: 'Schnitter',
    fr: 'Faucheur',
    ja: 'リーパー',
    cn: '钐镰客',
    ko: '리퍼',
    tc: '奪魂者'
  },
  SGE: {
    en: 'Sage',
    de: 'Weiser',
    fr: 'Sage',
    ja: '賢者',
    cn: '贤者',
    ko: '현자',
    tc: '賢者'
  },
  VPR: {
    en: 'Viper',
    de: 'Viper',
    fr: 'Rôdeur vipère',
    ja: 'ヴァイパー',
    cn: '蝰蛇剑士',
    ko: '바이퍼',
    tc: '毒蛇劍士'
  },
  PCT: {
    en: 'Pictomancer',
    de: 'Piktomant',
    fr: 'Pictomancien',
    ja: 'ピクトマンサー',
    cn: '绘灵法师',
    ko: '픽토맨서',
    tc: '繪靈法師'
  }
};
class PartyTracker {
  details = [];
  partyNames_ = [];
  partyIds_ = [];
  allianceNames_ = [];
  allianceIds_ = [];
  nameToRole_ = {};
  idToName_ = {};
  roleToPartyNames_ = emptyRoleToPartyNames();
  constructor(options) {
    this.options = options;
  }

  // Bind this to PartyChanged events.
  onPartyChanged(e) {
    this.reset();
    this.details = e.party;
    for (const p of e.party) {
      this.allianceIds_.push(p.id);
      this.allianceNames_.push(p.name);
      const jobName = util/* default.jobEnumToJob */.ZP.jobEnumToJob(p.job);
      const role = util/* default.jobToRole */.ZP.jobToRole(jobName);
      this.idToName_[p.id] = p.name;
      this.nameToRole_[p.name] = role;
      if (p.inParty) {
        this.partyIds_.push(p.id);
        this.partyNames_.push(p.name);
        this.roleToPartyNames_[role].push(p.name);
      }
    }
  }
  reset() {
    // original event data
    this.details = [];
    this.partyNames_ = [];
    this.partyIds_ = [];
    this.allianceNames_ = [];
    this.allianceIds_ = [];
    this.nameToRole_ = {};
    this.idToName_ = {};

    // role -> [names] but only for party
    this.roleToPartyNames_ = emptyRoleToPartyNames();
  }

  // returns an array of the names of players in your immediate party
  get partyNames() {
    return this.partyNames_;
  }
  get partyIds() {
    return this.partyIds_;
  }

  // returns an array of the names of players in your alliance
  get allianceNames() {
    return this.allianceNames_;
  }

  // returns an array of the names of tanks in your immediate party
  get tankNames() {
    return this.roleToPartyNames_['tank'];
  }

  // returns an array of the names of healers in your immediate party
  get healerNames() {
    return this.roleToPartyNames_['healer'];
  }

  // returns an array of the names of dps players in your immediate party
  get dpsNames() {
    return this.roleToPartyNames_['dps'];
  }

  // returns true if the named player in your alliance is a particular role
  isRole(name, role) {
    return this.nameToRole_[name] === role;
  }

  // returns true if the named player in your alliance is a tank
  isTank(name) {
    return this.isRole(name, 'tank');
  }

  // returns true if the named player in your alliance is a healer
  isHealer(name) {
    return this.isRole(name, 'healer');
  }

  // returns true if the named player in your alliance is a dps
  isDPS(name) {
    return this.isRole(name, 'dps');
  }

  // returns true if the named player is in your immediate party
  inParty(name) {
    return this.partyNames.includes(name);
  }

  // returns true if the named player is in your alliance
  inAlliance(name) {
    return this.allianceNames.includes(name);
  }

  // for a named player, returns the other tank in your immediate party
  // if named player is not a tank, or there's not exactly two tanks
  // in your immediate party, returns null.
  otherTank(name) {
    const names = this.tankNames;
    if (names.length !== 2) return;
    if (names[0] === name) return names[1];
    if (names[1] === name) return names[0];
  }

  // see: otherTank, but for healers.
  otherHealer(name) {
    const names = this.healerNames;
    if (names.length !== 2) return;
    if (names[0] === name) return names[1];
    if (names[1] === name) return names[0];
  }

  // returns the job name of the specified party member
  jobName(name) {
    const partyIndex = this.partyNames.indexOf(name);
    if (partyIndex < 0) return;
    const job = this.details[partyIndex]?.job;
    if (job === undefined) return;
    return util/* default.jobEnumToJob */.ZP.jobEnumToJob(job);
  }
  nameFromId(id) {
    return this.idToName_[id];
  }
  member(name) {
    // For boilerplate convenience in triggers, handle undefined names.
    if (name === undefined) {
      const unknown = '???';
      return {
        name: unknown,
        nick: unknown,
        toString: () => unknown
      };
    }
    const partyMember = this.details.find(member => member.name === name);
    let ret;
    const nick = util/* default.shortName */.ZP.shortName(name, this.options.PlayerNicks);
    if (!partyMember) {
      // If we can't find this party member for some reason, use some sort of default.
      ret = {
        name: name,
        nick: nick
      };
    } else {
      const lang = this.options.DisplayLanguage;
      const job = util/* default.jobEnumToJob */.ZP.jobEnumToJob(partyMember.job);
      const jobAbbr = jobLocalizedAbbr[job]?.[lang] ?? job;
      const jobFull = jobLocalizedFull[job]?.[lang] ?? job;
      const role = util/* default.jobToRole */.ZP.jobToRole(job);
      const roleName = roleLocalized[role]?.[lang] ?? role;
      ret = {
        id: partyMember.id,
        job: jobAbbr,
        jobFull: jobFull,
        role: roleName,
        name: name,
        nick: nick
      };
    }

    // Need to assign this afterwards so it can reference `ret`.
    ret.toString = () => {
      const retVal = ret[this.options.DefaultPlayerLabel];
      if (typeof retVal === 'string') return retVal;
      return ret.nick;
    };
    return ret;
  }
}
// EXTERNAL MODULE: ./resources/responses.ts
var responses = __webpack_require__(469);
;// CONCATENATED MODULE: ./ui/raidboss/common_replacement.ts
// TODO: maybe this should be structured identically to a timelineReplace section.

// The seal key is kind of a hack because we use it in a lot of different
// contexts and need to correctly grab the name of the zone that is sealed.
// These are some various lookbehinds for those different contexts:
// Regexes for a parsed ACT log line
const parsedLB = '00:0839::';
// Regexes for a network log line
const networkLB = '00\\|[^|]*\\|0839\\|\\|';
// Regex for a regex for a network log line.  <_<
const netRegexLB = '\\\\\\|0839\\\\\\|\\[\\^\\|\\]\\*\\\\\\|';
// A bare parameter (e.g. `X will be sealed off` via `netRegex: { line: 'X will be sealed off' },`)
const paramLB = '^';

// It's awkward to refer to these string keys, so name them as replaceSync[keys.sealKey].
const syncKeys = {
  // Seal is trying to match these types of lines, and is more complicated because it's
  // trying to also capture the area name:
  //   parsed log lines: 00:0839::Something will be sealed off
  //   network log lines: 00|timestamp|0839||Something will be sealed off
  //   NetRegexes: ^^00\|[^|]*\|0839\|[^|]*\|Something will be sealed off.*?\|
  seal: `(?<=${parsedLB}|${networkLB}|${netRegexLB}|${paramLB})([^|:]*) will be sealed off(?: in (?:[0-9]+ seconds)?)?`,
  unseal: 'is no longer sealed',
  engage: 'Engage!'
};
const textKeys = {
  // Match directions in replaceText
  // eg: `(N)`, `(SW)`, `(NE/NW)`, etc.
  E: '(?<= \\(|\\/)E(?=\\)|\\/)',
  N: '(?<= \\(|\\/)N(?=\\)|\\/)',
  S: '(?<= \\(|\\/)S(?=\\)|\\/)',
  W: '(?<= \\(|\\/)W(?=\\)|\\/)',
  NE: '(?<= \\(|\\/)NE(?=\\)|\\/)',
  NW: '(?<= \\(|\\/)NW(?=\\)|\\/)',
  SE: '(?<= \\(|\\/)SE(?=\\)|\\/)',
  SW: '(?<= \\(|\\/)SW(?=\\)|\\/)',
  // Match Roles in replaceText
  // eg: `(Tank)`, `(Healer)`, `(DPS)`, etc
  Tank: '(?<= \\(|\\/)Tanks?(?=\\)|\\/)',
  Healer: '(?<= \\(|\\/)Healers?(?=\\)|\\/)',
  DPS: '(?<= \\(|\\/)DPS(?=\\)|\\/)',
  // Match `--1--` style text.
  Number: '--(\\s*\\d+\\s*)--'
};
const commonReplacement = {
  replaceSync: {
    [syncKeys.seal]: {
      en: '$1 will be sealed off',
      de: 'Noch 15 Sekunden, bis sich (?:(?:der|die|das) )?(?:Zugang zu(?:[rm]| den)? )?$1 schließt',
      fr: 'Fermeture d(?:e|u|es) (?:l\'|la |les? )?$1 dans',
      ja: '$1の封鎖まであと',
      cn: '距$1被封锁还有',
      ko: '15초 후에 $1[이가] 봉쇄됩니다',
      tc: '距$1被封鎖還有'
    },
    [syncKeys.unseal]: {
      en: 'is no longer sealed',
      de: 'öffnet sich (?:wieder|erneut)',
      fr: 'Ouverture ',
      ja: 'の封鎖が解かれた',
      cn: '的封锁解除了',
      ko: '의 봉쇄가 해제되었습니다',
      tc: '的封鎖解除了'
    },
    [syncKeys.engage]: {
      en: 'Engage!',
      de: 'Start!',
      fr: 'À l\'attaque',
      ja: '戦闘開始！',
      cn: '战斗开始！',
      ko: '전투 시작!',
      tc: '戰鬥開始！'
    }
  },
  replaceText: {
    '--adds spawn--': {
      de: '--Adds erscheinen--',
      fr: '--Apparition d\'adds--',
      ja: '--雑魚出現--',
      cn: '--小怪出现--',
      ko: '--쫄 소환--',
      tc: '--小怪出現--'
    },
    '--adds targetable--': {
      de: '--Adds anvisierbar--',
      fr: '--Adds ciblables--',
      ja: '--雑魚ターゲット可能--',
      cn: '--小怪可选中--',
      ko: '--쫄 타겟 가능--',
      tc: '--小怪可選中--'
    },
    '--center--': {
      de: '--Mitte--',
      fr: '--Centre--',
      ja: '--センター--',
      cn: '--中央--',
      ko: '--중앙--',
      tc: '--中央--'
    },
    '\\(center\\)': {
      de: '(Mitte)',
      fr: '(Centre)',
      ja: '(センター)',
      cn: '(中央)',
      ko: '(중앙)',
      tc: '(中央)'
    },
    '--clones appear--': {
      de: '--Klone erscheinen--',
      fr: '--Apparition des clones--',
      ja: '--幻影出現--',
      cn: '--幻影出现--',
      ko: '--분신 소환--',
      tc: '--幻影出現--'
    },
    '--corner--': {
      de: '--Ecke--',
      fr: '--Coin--',
      ja: '--コーナー--',
      cn: '--角落--',
      ko: '--구석--',
      tc: '--角落--'
    },
    '--dps burn--': {
      de: '--DPS burn--',
      fr: '--Burn dps--',
      ja: '--火力出せ--',
      cn: '--转火--',
      ko: '--딜 체크--',
      tc: '--轉火--'
    },
    '--east--': {
      de: '--Osten--',
      fr: '--Est--',
      ja: '--東--',
      cn: '--东--',
      ko: '--동쪽--',
      tc: '--東--'
    },
    '\\(east\\)': {
      de: '(Osten)',
      fr: '(Est)',
      ja: '(東)',
      cn: '(东)',
      ko: '(동쪽)',
      tc: '(東)'
    },
    'Enrage': {
      de: 'Finalangriff',
      fr: 'Enrage',
      ja: '時間切れ',
      cn: '狂暴',
      ko: '전멸기',
      tc: '狂暴'
    },
    '--frozen--': {
      de: '--eingefroren--',
      fr: '--Gelé--',
      ja: '--凍結--',
      cn: '--冻结--',
      ko: '--빙결--',
      tc: '--凍結--'
    },
    '--in--': {
      de: '--Rein--',
      fr: '--Intérieur--',
      ja: '--中--',
      cn: '--内--',
      ko: '--안--',
      tc: '--內--'
    },
    '\\(In\\)': {
      de: '(Rein)',
      fr: '(Intérieur)',
      ja: '(中)',
      cn: '(内)',
      ko: '(안)',
      tc: '(內)'
    },
    '\\(inner\\)': {
      de: '(innen)',
      fr: '(intérieur)',
      ja: '(中)',
      cn: '(内)',
      ko: '(안)',
      tc: '(內)'
    },
    '--jump--': {
      de: '--Sprung--',
      fr: '--Saut--',
      ja: '--ジャンプ--',
      cn: '--跳--',
      ko: '--점프--',
      tc: '--跳--'
    },
    '--knockback--': {
      de: '--Rückstoß--',
      fr: '--Poussée--',
      ja: '--ノックバック--',
      cn: '--击退--',
      ko: '--넉백--',
      tc: '--擊退--'
    },
    '--middle--': {
      de: '--Mitte--',
      fr: '--Milieu--',
      ja: '--中央--',
      cn: '--中间--',
      ko: '--중앙--',
      tc: '--中間--'
    },
    '\\(middle\\)': {
      de: '(Mitte)',
      fr: '(Milieu)',
      ja: '(中央)',
      cn: '(中间)',
      ko: '(중앙)',
      tc: '(中間)'
    },
    '--north--': {
      de: '--Norden--',
      fr: '--Nord--',
      ja: '--北--',
      cn: '--北--',
      ko: '--북쪽--',
      tc: '--北--'
    },
    '\\(north\\)': {
      de: '(Norden)',
      fr: '(Nord)',
      ja: '(北)',
      cn: '(北)',
      ko: '(북쪽)',
      tc: '(北)'
    },
    '--northeast--': {
      de: '--Nordosten--',
      fr: '--Nord-Est--',
      ja: '--北東--',
      cn: '--东北--',
      ko: '--북동--',
      tc: '--東北--'
    },
    '--northwest--': {
      de: '--Nordwesten--',
      fr: '--Nord-Ouest--',
      ja: '--北西--',
      cn: '--西北--',
      ko: '--북서--',
      tc: '--西北--'
    },
    '--out--': {
      de: '--Raus--',
      fr: '--Extérieur--',
      ja: '--外--',
      cn: '--外--',
      ko: '--밖--',
      tc: '--外--'
    },
    '\\(Out\\)': {
      de: '(Raus)',
      fr: '(Extérieur)',
      ja: '(外)',
      cn: '(外)',
      ko: '(밖)',
      tc: '(外)'
    },
    '\\(outer\\)': {
      de: '(außen)',
      fr: '(extérieur)',
      ja: '(外)',
      cn: '(外)',
      ko: '(밖)',
      tc: '(外)'
    },
    '\\(outside\\)': {
      de: '(Draußen)',
      fr: '(À l\'extérieur)',
      ja: '(外)',
      cn: '(外面)',
      ko: '(바깥)',
      tc: '(外面)'
    },
    '--rotate--': {
      de: '--rotieren--',
      fr: '--rotation--',
      ja: '--回転--',
      cn: '--旋转--',
      ko: '--회전--',
      tc: '--旋轉--'
    },
    '--south--': {
      de: '--Süden--',
      fr: '--Sud--',
      ja: '--南--',
      cn: '--南--',
      ko: '--남쪽--',
      tc: '--南--'
    },
    '\\(south\\)': {
      de: '(Süden)',
      fr: '(Sud)',
      ja: '(南)',
      cn: '(南)',
      ko: '(남쪽)',
      tc: '(南)'
    },
    '--southeast--': {
      de: '--Südosten--',
      fr: '--Sud-Est--',
      ja: '--南東--',
      cn: '--东南--',
      ko: '--남동--',
      tc: '--東南--'
    },
    '--southwest--': {
      de: '--Südwesten--',
      fr: '--Sud-Ouest--',
      ja: '--南西--',
      cn: '--西南--',
      ko: '--남서--',
      tc: '--西南--'
    },
    '--split--': {
      de: '--teilen--',
      fr: '--division--',
      ja: '--分裂--',
      cn: '--分裂--',
      ko: '--분열--',
      tc: '--分裂--'
    },
    '--stun--': {
      de: '--Betäubung--',
      fr: '--Étourdissement--',
      ja: '--スタン--',
      cn: '--击晕--',
      ko: '--기절--',
      tc: '--擊暈--'
    },
    '--sync--': {
      de: '--synchronisation--',
      fr: '--synchronisation--',
      ja: '--シンク--',
      cn: '--同步化--',
      ko: '--동기화--',
      tc: '--同步化--'
    },
    '--([0-9]+x )?targetable--': {
      de: '--$1anvisierbar--',
      fr: '--$1ciblable--',
      ja: '--$1ターゲット可能--',
      cn: '--$1可选中--',
      ko: '--$1타겟 가능--',
      tc: '--$1可選中--'
    },
    '--teleport--': {
      de: '--teleportation--',
      fr: '--téléportation--',
      ja: '--テレポート--',
      cn: '--传送--',
      ko: '--순간 이동--',
      tc: '--傳送--'
    },
    '--untargetable--': {
      de: '--nich anvisierbar--',
      fr: '--non ciblable--',
      ja: '--ターゲット不可--',
      cn: '--无法选中--',
      ko: '--타겟 불가능--',
      tc: '--無法選中--'
    },
    '--west--': {
      de: '--Westen--',
      fr: '--Ouest--',
      ja: '--西--',
      cn: '--西--',
      ko: '--서쪽--',
      tc: '--西--'
    },
    [textKeys.E]: {
      de: 'O',
      fr: 'E',
      ja: '東',
      cn: '东',
      ko: '동',
      tc: '東'
    },
    [textKeys.N]: {
      de: 'N',
      fr: 'N',
      ja: '北',
      cn: '北',
      ko: '북',
      tc: '北'
    },
    [textKeys.S]: {
      de: 'S',
      fr: 'S',
      ja: '南',
      cn: '南',
      ko: '남',
      tc: '南'
    },
    [textKeys.W]: {
      de: 'W',
      fr: 'O',
      ja: '西',
      cn: '西',
      ko: '서',
      tc: '西'
    },
    [textKeys.NE]: {
      de: 'NO',
      fr: 'NE',
      ja: '北東',
      cn: '东北',
      ko: '북동',
      tc: '東北'
    },
    [textKeys.NW]: {
      de: 'NW',
      fr: 'NO',
      ja: '北西',
      cn: '西北',
      ko: '북서',
      tc: '西北'
    },
    [textKeys.SE]: {
      de: 'SO',
      fr: 'SE',
      ja: '南東',
      cn: '东南',
      ko: '남동',
      tc: '東南'
    },
    [textKeys.SW]: {
      de: 'SW',
      fr: 'SO',
      ja: '南西',
      cn: '西南',
      ko: '남서',
      tc: '西南'
    },
    [textKeys.Tank]: {
      de: 'Tank',
      fr: 'Tank',
      ja: 'タンク',
      cn: '坦克',
      ko: '탱커',
      tc: '坦克'
    },
    [textKeys.Healer]: {
      de: 'Heiler',
      fr: 'Healer',
      ja: 'ヒーラー',
      cn: '治疗',
      ko: '힐러',
      tc: '治療'
    },
    [textKeys.DPS]: {
      de: 'DPS',
      fr: 'DPS',
      ja: 'DPS',
      cn: 'DPS',
      ko: '딜러',
      tc: 'DPS'
    },
    [textKeys.Number]: {
      de: '--$1--',
      fr: '--$1--',
      ja: '--$1--',
      cn: '--$1--',
      ko: '--$1--',
      tc: '--$1--'
    }
  }
};

// Keys into commonReplacement objects that represent "partial" translations,
// in the sense that even if it applies, there still needs to be another
// translation for it to be complete.  These keys should be exactly the same
// as the keys from the commonReplacement block above.  These are used for
// timeline regexes only.
const partialCommonTimelineReplacementKeys = [
// Because the zone name needs to be translated here, this is partial.
syncKeys.seal,
// Directions
textKeys.E, textKeys.N, textKeys.S, textKeys.W, textKeys.NE, textKeys.NW, textKeys.SE, textKeys.SW,
// Roles
textKeys.Tank, textKeys.Healer, textKeys.DPS];

// Same as the timeline version above, but only for trigger regexes.
const partialCommonTriggerReplacementKeys = [
// Because the zone name needs to be translated here, this is partial.
syncKeys.seal];
;// CONCATENATED MODULE: ./resources/translations.ts




// Fill in LocaleRegex so that things like LocaleRegex.countdownStart.de is a valid regex.
const localeLines = {
  countdownStart: {
    en: 'Battle commencing in (?<time>\\y{Float}) seconds! \\((?<player>.*?)\\)',
    de: 'Noch (?<time>\\y{Float}) Sekunden bis Kampfbeginn! \\((?<player>.*?)\\)',
    fr: 'Début du combat dans (?<time>\\y{Float}) secondes[ ]?! \\((?<player>.*?)\\)',
    ja: '戦闘開始まで(?<time>\\y{Float})秒！ （(?<player>.*?)）',
    cn: '距离战斗开始还有(?<time>\\y{Float})秒！ （(?<player>.*?)）',
    ko: '전투 시작 (?<time>\\y{Float})초 전! \\((?<player>.*?)\\)',
    tc: '距離戰鬥開始還有(?<time>\\y{Float})秒！ （(?<player>.*?)）'
  },
  countdownEngage: {
    en: 'Engage!',
    de: 'Start!',
    fr: 'À l\'attaque[ ]?!',
    ja: '戦闘開始！',
    cn: '战斗开始！',
    ko: '전투 시작!',
    tc: '戰鬥開始！'
  },
  countdownCancel: {
    en: 'Countdown canceled by (?<player>\\y{Name})',
    de: '(?<player>\\y{Name}) hat den Countdown abgebrochen',
    fr: 'Le compte à rebours a été interrompu par (?<player>\\y{Name})[ ]?\\.',
    ja: '(?<player>\\y{Name})により、戦闘開始カウントがキャンセルされました。',
    cn: '(?<player>\\y{Name})取消了战斗开始倒计时。',
    ko: '(?<player>\\y{Name}) 님이 초읽기를 취소했습니다\\.',
    tc: '(?<player>\\y{Name})取消了戰鬥開始倒計時。'
  },
  areaSeal: {
    en: '(?<area>.*?) will be sealed off in (?<time>\\y{Float}) seconds!',
    de: 'Noch (?<time>\\y{Float}) Sekunden, bis sich (?<area>.*?) schließt',
    fr: 'Fermeture (?<area>.*?) dans (?<time>\\y{Float}) secondes[ ]?\\.',
    ja: '(?<area>.*?)の封鎖まであと(?<time>\\y{Float})秒',
    cn: '距(?<area>.*?)被封锁还有(?<time>\\y{Float})秒',
    ko: '(?<time>\\y{Float})초 후에 (?<area>.*?)(이|가) 봉쇄됩니다\\.',
    tc: '距(?<area>.*?)被封鎖還有(?<time>\\y{Float})秒'
  },
  areaUnseal: {
    en: '(?<area>.*?) is no longer sealed.',
    de: '(?<area>.*?) öffnet sich erneut.',
    fr: 'Ouverture (?<area>.*?)[ ]?!',
    ja: '(?<area>.*?)の封鎖が解かれた……',
    cn: '(?<area>.*?)的封锁解除了',
    ko: '(?<area>.*?)의 봉쇄가 해제되었습니다\\.',
    tc: '(?<area>.*?)的封鎖解除了……'
  },
  // Recipe name always start with \ue0bb
  // HQ icon is \ue03c
  craftingStart: {
    en: 'You begin synthesizing (?<count>(an?|\\d+) )?\ue0bb(?<recipe>.*)\\.',
    de: 'Du hast begonnen, durch Synthese (?<count>(ein(e|es|em|er)?|\\d+) )?\ue0bb(?<recipe>.*) herzustellen\\.',
    fr: 'Vous commencez à fabriquer (?<count>(une?|\\d+) )?\ue0bb(?<recipe>.*)\\.',
    ja: '(?<player>\\y{Name})は\ue0bb(?<recipe>.*)(×(?<count>\\d+))?の製作を開始した。',
    cn: '(?<player>\\y{Name})开始制作“\ue0bb(?<recipe>.*)”(×(?<count>\\d+))?。',
    ko: '\ue0bb(?<recipe>.*)(×(?<count>\\d+)개)? 제작을 시작합니다\\.',
    tc: '(?<player>\\y{Name})開始製作“\ue0bb(?<recipe>.*)”(×(?<count>\\d+))?。'
  },
  trialCraftingStart: {
    en: 'You begin trial synthesis of \ue0bb(?<recipe>.*)\\.',
    de: 'Du hast mit der Testsynthese von \ue0bb(?<recipe>.*) begonnen\\.',
    fr: 'Vous commencez une synthèse d\'essai pour une? \ue0bb(?<recipe>.*)\\.',
    ja: '(?<player>\\y{Name})は\ue0bb(?<recipe>.*)の製作練習を開始した。',
    cn: '(?<player>\\y{Name})开始练习制作\ue0bb(?<recipe>.*)。',
    ko: '\ue0bb(?<recipe>.*) 제작 연습을 시작합니다\\.',
    tc: '(?<player>\\y{Name})開始練習製作\ue0bb(?<recipe>.*)。'
  },
  craftingFinish: {
    en: 'You synthesize (?<count>(an?|\\d+) )?\ue0bb(?<recipe>.*)(\ue03c)?\\.',
    de: 'Du hast erfolgreich (?<count>(ein(e|es|em|er)?|\\d+) )?(?<recipe>.*)(\ue03c)? hergestellt\\.',
    fr: 'Vous fabriquez (?<count>(une?|\\d+) )?\ue0bb(?<recipe>.*)(\ue03c)?\\.',
    ja: '(?<player>\\y{Name})は\ue0bb(?<recipe>.*)(\ue03c)?(×(?<count>\\d+))?を完成させた！',
    cn: '(?<player>\\y{Name})制作“\ue0bb(?<recipe>.*)(\ue03c)?”(×(?<count>\\d+))?成功！',
    ko: '(?<player>\\y{Name}) 님이 \ue0bb(?<recipe>.*)(\ue03c)?(×(?<count>\\d+)개)?(을|를) 완성했습니다!',
    tc: '(?<player>\\y{Name})製作“\ue0bb(?<recipe>.*)(\ue03c)?”(×(?<count>\\d+))?成功！'
  },
  trialCraftingFinish: {
    en: 'Your trial synthesis of \ue0bb(?<recipe>.*) proved a success!',
    de: 'Die Testsynthese von \ue0bb(?<recipe>.*) war erfolgreich!',
    fr: 'Votre synthèse d\'essai pour fabriquer \ue0bb(?<recipe>.*) a été couronnée de succès!',
    ja: '(?<player>\\y{Name})は\ue0bb(?<recipe>.*)の製作練習に成功した！',
    cn: '(?<player>\\y{Name})练习制作\ue0bb(?<recipe>.*)成功了！',
    ko: '\ue0bb(?<recipe>.*) 제작 연습에 성공했습니다!',
    tc: '(?<player>\\y{Name})練習製作\ue0bb(?<recipe>.*)成功了！'
  },
  craftingFail: {
    en: 'Your synthesis fails!',
    de: 'Deine Synthese ist fehlgeschlagen!',
    fr: 'La synthèse échoue\\.{3}',
    ja: '(?<player>\\y{Name})は製作に失敗した……',
    cn: '(?<player>\\y{Name})制作失败了……',
    ko: '제작에 실패했습니다……\\.',
    tc: '(?<player>\\y{Name})製作失敗了……'
  },
  trialCraftingFail: {
    en: 'Your trial synthesis of \ue0bb(?<recipe>.*) failed\\.{3}',
    de: 'Die Testsynthese von \ue0bb(?<recipe>.*) ist fehlgeschlagen\\.{3}',
    fr: 'Votre synthèse d\'essai pour fabriquer \ue0bb(?<recipe>.*) s\'est soldée par un échec\\.{3}',
    ja: '(?<player>\\y{Name})は\ue0bb(?<recipe>.*)の製作練習に失敗した……',
    cn: '(?<player>\\y{Name})练习制作\ue0bb(?<recipe>.*)失败了……',
    ko: '\ue0bb(?<recipe>.*) 제작 연습에 실패했습니다……\\.',
    tc: '(?<player>\\y{Name})練習製作\ue0bb(?<recipe>.*)失敗了……'
  },
  craftingCancel: {
    en: 'You cancel the synthesis\\.',
    de: 'Du hast die Synthese abgebrochen\\.',
    fr: 'La synthèse est annulée\\.',
    ja: '(?<player>\\y{Name})は製作を中止した。',
    cn: '(?<player>\\y{Name})中止了制作作业。',
    ko: '제작을 중지했습니다\\.',
    tc: '(?<player>\\y{Name})中止了製作作業。'
  },
  trialCraftingCancel: {
    en: 'You abandoned trial synthesis\\.',
    de: 'Testsynthese abgebrochen\\.',
    fr: 'Vous avez interrompu la synthèse d\'essai\\.',
    ja: '(?<player>\\y{Name})は製作練習を中止した。',
    cn: '(?<player>\\y{Name})停止了练习。',
    ko: '제작 연습을 중지했습니다\\.',
    tc: '(?<player>\\y{Name})停止了練習。'
  }
};
class RegexSet {
  get localeRegex() {
    if (this.regexes) return this.regexes;
    this.regexes = this.buildLocaleRegexes(localeLines, s => regexes/* default.gameLog */.Z.gameLog({
      line: `${s}.*?`
    }));
    return this.regexes;
  }
  get localeNetRegex() {
    if (this.netRegexes) return this.netRegexes;
    this.netRegexes = this.buildLocaleRegexes(localeLines, s => netregexes/* default.gameLog */.ZP.gameLog({
      line: `${s}[^|]*?`
    }));
    return this.netRegexes;
  }
  buildLocaleRegexes(locales, builder) {
    return Object.fromEntries(Object.entries(locales).map(([key, lines]) => [key, this.buildLocaleRegex(lines, builder)]));
  }
  buildLocaleRegex(lines, builder) {
    const regexEn = builder(lines.en);
    return {
      en: regexEn,
      de: lines.de !== undefined ? builder(lines.de) : regexEn,
      fr: lines.fr !== undefined ? builder(lines.fr) : regexEn,
      ja: lines.ja !== undefined ? builder(lines.ja) : regexEn,
      cn: lines.cn !== undefined ? builder(lines.cn) : regexEn,
      ko: lines.ko !== undefined ? builder(lines.ko) : regexEn,
      tc: lines.tc !== undefined ? builder(lines.tc) : regexEn
    };
  }
}
const regexSet = new RegexSet();
const LocaleRegex = regexSet.localeRegex;
const LocaleNetRegex = regexSet.localeNetRegex;

// Translate a trigger or timeline regex (replaceSync) or timeline text (replaceText),
// returning the text and whether or not it can be considered "translated".
// Note, this won't catch anything that needs multiple translations, but will catch
// anything from common translations that are partial (e.g. a seal regex needs
// a zone name to be considered a full translation.
const translateWithReplacements = (text, replaceKey, replaceLang, replacements) => {
  // Special cases for empty and "not empty".
  if (text === '' || text === '[^:]+' || text === '[^|]+') return {
    text: text,
    wasTranslated: true
  };

  // All regex replacements are always global.
  const isGlobal = replaceKey === 'replaceSync';
  let wasTranslated = false;
  for (const r of replacements ?? []) {
    if (r.locale && r.locale !== replaceLang) continue;
    const reps = r[replaceKey];
    if (!reps) continue;
    for (const [key, value] of Object.entries(reps)) {
      const regex = isGlobal ? regexes/* default.parseGlobal */.Z.parseGlobal(key) : regexes/* default.parse */.Z.parse(key);
      if (text.match(regex)) wasTranslated = true;
      text = text.replace(regex, value);
    }
  }

  // Common Replacements
  const replacement = commonReplacement[replaceKey];
  for (const [key, value] of Object.entries(replacement ?? {})) {
    const repl = value[replaceLang];
    if (repl === undefined) continue;
    const regex = isGlobal ? regexes/* default.parseGlobal */.Z.parseGlobal(key) : regexes/* default.parse */.Z.parse(key);
    const partialKeys = replaceKey === 'replaceSync' ? partialCommonTriggerReplacementKeys : partialCommonTimelineReplacementKeys;
    if (text.match(regex)) {
      // Consider any partial translations as "not found" (e.g. a seal
      // message that still needs the zone name to be translated to be
      // considered fully translated).
      let isPartial = false;
      for (const partialKey of partialKeys) {
        if (regexes/* default.parseGlobal */.Z.parseGlobal(partialKey).test(key)) {
          isPartial = true;
          break;
        }
      }
      if (!isPartial) wasTranslated = true;
    }
    text = text.replace(regex, repl);
  }
  return {
    text,
    wasTranslated
  };
};

// Translates a timeline or trigger regex for a given language.
const translateRegex = (text, replaceLang, replacements) => {
  if (typeof text === 'string') return translateWithReplacements(text, 'replaceSync', replaceLang, replacements).text;
  return translateWithReplacements(text.source, 'replaceSync', replaceLang, replacements).text;
};

// Translates a timeline text for a given language.
const translateText = (text, replaceLang, replacements) => translateWithReplacements(text, 'replaceText', replaceLang, replacements).text;
const translateRegexBuildParam = (params, replaceLang, replacements) => {
  return translateRegexBuildParamAnon(params, replaceLang, replacements);
};
const translateRegexBuildParamAnon = (anonParams, replaceLang, replacements) => {
  let missingFields = undefined;
  let wasTranslated = true;

  // TODO: it's probably ok that this isn't a deep copy because we don't
  // modify string[] directly, but it probably should be anyway.
  const params = {
    ...anonParams
  };
  for (const key of netregexes/* keysThatRequireTranslation */._1) {
    const value = anonParams[key];
    if (typeof value === 'boolean' || value === undefined) continue;
    // TODO: ideally, it'd be nice to assign directly back to params[key] instead of
    // cheating and assigning back through anonParams.  The reason this is mostly
    // ok is that if params[key] is a string it only gets assigned a string,
    // and if it is a string[] it only gets assigned a string[], so the type can't
    // change.  It might be possible to assign to params[key] if we make
    // timestamp a string | string[]?
    if (typeof value === 'string') {
      const result = translateWithReplacements(value, 'replaceSync', replaceLang, replacements);
      params[key] = result.text;
      wasTranslated = wasTranslated && result.wasTranslated;
      if (!result.wasTranslated) (missingFields ??= []).push(key);
    } else {
      params[key] = value.map(x => {
        if (typeof x !== 'string') return x;
        const result = translateWithReplacements(x, 'replaceSync', replaceLang, replacements);
        wasTranslated = wasTranslated && result.wasTranslated;
        if (!result.wasTranslated) (missingFields ??= []).push(key);
        return result.text;
      });
    }
  }
  return {
    params,
    wasTranslated,
    missingFields
  };
};
// EXTERNAL MODULE: ./ui/raidboss/data/raidboss_manifest.txt + 728 modules
var raidboss_manifest = __webpack_require__(973);
;// CONCATENATED MODULE: ./ui/raidboss/raidboss_options.ts


// This file defines the base options that raidboss expects to see.

// Backwards compat for this old style of overriding triggers.
// TODO: we should probably deprecate and remove this.
// These options are ones that are not auto-defined by raidboss_config.js.
const defaultRaidbossNonConfigOptions = {
  PlayerNicks: {},
  InfoSound: '../../resources/sounds/freesound/percussion_hit.webm',
  AlertSound: '../../resources/sounds/BigWigs/Alert.webm',
  AlarmSound: '../../resources/sounds/BigWigs/Alarm.webm',
  LongSound: '../../resources/sounds/BigWigs/Long.webm',
  PullSound: '../../resources/sounds/freesound/sonar.webm',
  AudioAllowed: true,
  DisabledTriggers: {},
  PerTriggerAutoConfig: {},
  PerTriggerSetAutoConfig: {},
  PerTriggerOptions: {},
  PerZoneTimelineConfig: {},
  TriggerSetConfig: {},
  Triggers: [],
  IsRemoteRaidboss: false,
  TransformText: t => t,
  TransformTts: t => t
};

// TODO: figure out how to get this type from raidboss_config??
// These values are overwritten and are just here for typing.
const defaultRaidbossConfigOptions = {
  DefaultAlertOutput: 'textAndSound',
  AlertsLanguage: undefined,
  TimelineLanguage: undefined,
  TimelineEnabled: true,
  AlertsEnabled: true,
  DefaultPlayerLabel: 'nick',
  ShowTimerBarsAtSeconds: 30,
  KeepExpiredTimerBarsForSeconds: 0.7,
  BarExpiresSoonSeconds: 6,
  MaxNumberOfTimerBars: 6,
  ReverseTimeline: false,
  DisplayAlarmTextForSeconds: 3,
  DisplayAlertTextForSeconds: 3,
  DisplayInfoTextForSeconds: 3,
  AlarmSoundVolume: 1,
  AlertSoundVolume: 1,
  InfoSoundVolume: 1,
  LongSoundVolume: 1,
  PullSoundVolume: 1,
  RumbleEnabled: false,
  InfoRumbleDuration: 400,
  InfoRumbleWeak: 0.5,
  InfoRumbleStrong: 0,
  AlertRumbleDuration: 500,
  AlertRumbleWeak: 0,
  AlertRumbleStrong: 0.5,
  AlarmRumbleDuration: 750,
  AlarmRumbleWeak: 0.75,
  AlarmRumbleStrong: 0.75
};
// See user/raidboss-example.js for documentation.
const raidboss_options_Options = {
  ...user_config/* default.getDefaultBaseOptions */.Z.getDefaultBaseOptions(),
  ...defaultRaidbossNonConfigOptions,
  ...defaultRaidbossConfigOptions
};
/* harmony default export */ const raidboss_options = (raidboss_options_Options);
// EXTERNAL MODULE: ./node_modules/json5/dist/index.js
var dist = __webpack_require__(142);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./resources/netlog_defs.ts
var netlog_defs = __webpack_require__(21);
;// CONCATENATED MODULE: ./ui/raidboss/timeline_parser.ts







const isLogDefinitionName = type => {
  return type in netlog_defs/* default */.Z;
};
const isStringArray = value => {
  return value.find(v => typeof v !== 'string') === undefined;
};
const isStringOrStringArray = value => {
  if (Array.isArray(value)) {
    if (isStringArray(value)) return true;
    return false;
  }
  return typeof value === 'string';
};
const isValidNetParams = (type, params) => {
  for (const key in params) {
    // Make sure all keys are present on our definition type
    if (!(key in netlog_defs/* default */.Z[type].fields)) {
      // If we're dealing with a repeating field, check its values
      const logDefType = netlog_defs/* default */.Z[type];
      if ('repeatingFields' in logDefType && logDefType.repeatingFields.label === key) {
        const param = params[key];
        if (!Array.isArray(param)) return false;
        // Expand the type of `possibleKeys` to `string[]` so that we can check for inclusion
        const stringKeys = Array.from(logDefType.repeatingFields.possibleKeys);
        // Expand the type of `names` to `string[]` so that we can check for inclusion
        const stringNames = Array.from(logDefType.repeatingFields.names);
        for (const repeatingEntry of param) {
          // Only objects allowed in the array
          if (!isObject(repeatingEntry)) return false;
          // Object must specify the primary key
          if (!(logDefType.repeatingFields.primaryKey in repeatingEntry)) return false;
          // Primary key must have a value that conforms to the possible keys entries
          // Check that all keys exist and that they're either string or string array
          const primaryKey = repeatingEntry[logDefType.repeatingFields.primaryKey];
          if (!isStringOrStringArray(primaryKey)) return false;
          if (typeof primaryKey === 'string') {
            if (!stringKeys.includes(primaryKey)) return false;
          } else {
            for (const primaryKeyEntry of primaryKey) {
              if (!stringKeys.includes(primaryKeyEntry)) return false;
            }
          }
          // All other keys must be allowed in `names`
          for (const repeatingEntryKey in repeatingEntry) {
            if (!stringNames.includes(repeatingEntryKey)) return false;
          }
        }

        // Skip the remaining checks for this key, we've validated that it conforms
        continue;
      }
      return false;
    }
    // Make sure our value is either a string/int or an array of strings/ints
    if (!isStringOrStringArray(params[key])) return false;
    // These should never be specified on a timeline net regex.
    if (key === 'capture' || key === 'timestamp') return false;
  }
  return true;
};
const isObject = x => {
  // JavaScript considers [] to be an object, so check for that explicitly.
  return x instanceof Object && !Array.isArray(x);
};
const timeline_parser_regexes = {
  comment: /^\s*#/,
  commentLine: /#.*$/,
  durationCommand: /(?:[^#]*?\s)?(?<text>duration\s+(?<seconds>[0-9]+(?:\.[0-9]+)?))(\s.*)?$/,
  ignore: /^hideall\s+\"(?<id>[^"]+)\"(?:\s*#.*)?$/,
  jumpCommand: /(?:[^#]*?\s)?(?<text>(?<command>(?:force|)jump)\s+(?:"(?<label>[^"]*)"|(?<seconds>[0-9]+(?:\.[0-9]+)?)))(?:\s.*)?$/,
  label: /^(?<time>[0-9]+(?:\.[0-9]+)?)\s+(?<text>label\s+"(?<label>[^"]*)")\s*$/,
  line: /^(?<text>(?<time>[0-9]+(?:\.[0-9]+)?)\s+"(?<name>.*?)")(\s+(.*))?/,
  popupText: /^(?<type>info|alert|alarm)text\s+\"(?<id>[^"]+)\"\s+before\s+(?<beforeSeconds>-?[0-9]+(?:\.[0-9]+)?)(?:\s+\"(?<text>[^"]+)\")?$/,
  soundAlert: /^define\s+soundalert\s+"[^"]*"\s+"[^"]*"$/,
  speaker: /define speaker "[^"]*"(\s+"[^"]*")?\s+(-?[0-9]+(?:\.[0-9]+)?)\s+(-?[0-9]+(?:\.[0-9]+)?)/,
  syncRegexCommand: /(?:[^#]*?\s)?(?<text>sync\s*\/(?<regex>.*)\/)(?<args>\s.*)?$/,
  syncNetRegex: new RegExp(`(?:[^#]*?\\s)?(?<netRegexType>${Object.keys(netlog_defs/* default */.Z).join('|')})\\s*(?<netRegex>\\{.*\\})(?<args>\\s.*)?$`),
  tts: /^alertall\s+"(?<id>[^"]*)"\s+before\s+(?<beforeSeconds>-?[0-9]+(?:\.[0-9]+)?)\s+(?<command>sound|speak\s+"[^"]*")\s+"(?<text>[^"]*)"$/,
  windowCommand: /(?:[^#]*?\s)?(?<text>window\s+(?:(?<start>[0-9]+(?:\.[0-9]+)?),)?(?<end>[0-9]+(?:\.[0-9]+)?))(?:\s.*)?$/
};

// This class reads the format of ACT Timeline plugin, described in
// docs/TimelineGuide.md
class TimelineParser {
  // A set of names which will not be notified about.
  ignores = {};
  // Sorted by event occurrence time.
  events = [];
  // Sorted by event occurrence time.
  texts = [];
  // Sorted by sync.start time.
  syncStarts = [];
  // Sorted by sync.end time.
  syncEnds = [];
  // Sorted by event occurrence time.
  forceJumps = [];
  // Sorted by line.
  errors = [];
  // Map of encountered label names to their time.
  labelToTime = {};
  // Map of encountered syncs to the label they are jumping to.
  labelToSync = {};
  constructor(text, replacements, triggers, styles, options, zoneId, waitForParse) {
    this.options = options ?? raidboss_options;
    this.perTriggerAutoConfig = this.options.PerTriggerAutoConfig;
    this.replacements = replacements;
    this.timelineConfig = typeof zoneId === 'number' ? this.options.PerZoneTimelineConfig[zoneId] ?? {} : {};
    for (const text of this.timelineConfig.Ignore ?? []) this.ignores[text] = true;
    let uniqueId = 0;
    for (const event of this.timelineConfig.Add ?? []) {
      this.events.push({
        id: `${++uniqueId}`,
        time: event.time,
        name: event.text,
        text: event.text,
        duration: event.duration,
        activeTime: 0,
        sortKey: 0
      });
    }

    // TODO: This is a workaround for now, but whenever this class is refactored,
    // responsibility for callilng parse() should be moved up to the instantiating code.
    if (!waitForParse) this.parse(text, triggers, styles ?? [], uniqueId);
  }
  parse(text, triggers, styles, initialId) {
    let uniqueid = initialId;
    const texts = {};

    // Make all regexes case insensitive, and parse any special \y{} groups.
    for (const trigger of triggers ?? []) {
      if (trigger.regex) trigger.regex = regexes/* default.parse */.Z.parse(trigger.regex);
    }
    const lines = text.split('\n');
    let lineNumber = 0;
    for (let line of lines) {
      ++lineNumber;
      line = line.trim();

      // Drop comments and empty lines.
      if (!line || timeline_parser_regexes.comment.test(line)) continue;
      const originalLine = line;
      let match = timeline_parser_regexes.ignore.exec(line);
      if (match && match['groups']) {
        const ignore = match['groups'];
        if (ignore.id !== undefined) this.ignores[ignore.id] = true;
        continue;
      }
      match = timeline_parser_regexes.tts.exec(line);
      if (match && match['groups']) {
        const tts = match['groups'];
        if (tts.id === undefined || tts.beforeSeconds === undefined || tts.command === undefined) throw new not_reached/* UnreachableCode */.$();
        // TODO: Support alert sounds?
        if (tts.command === 'sound') continue;
        const ttsItems = texts[tts.id] || [];
        texts[tts.id] = ttsItems;
        ttsItems.push({
          type: 'tts',
          secondsBefore: parseFloat(tts.beforeSeconds),
          text: tts.text ?? tts.id
        });
        continue;
      }
      match = timeline_parser_regexes.soundAlert.exec(line);
      if (match) continue;
      match = timeline_parser_regexes.speaker.exec(line);
      if (match) continue;
      match = timeline_parser_regexes.popupText.exec(line);
      if (match && match['groups']) {
        const popupText = match['groups'];
        if (popupText.type === undefined || popupText.id === undefined || popupText.beforeSeconds === undefined) throw new not_reached/* UnreachableCode */.$();
        const popupTextItems = texts[popupText.id] || [];
        texts[popupText.id] = popupTextItems;
        const type = popupText.type;
        if (type !== 'info' && type !== 'alert' && type !== 'alarm') continue;
        popupTextItems.push({
          type: type,
          secondsBefore: parseFloat(popupText.beforeSeconds),
          text: popupText.text ?? popupText.id
        });
        continue;
      }
      match = timeline_parser_regexes.label.exec(line);
      if (match && match['groups']) {
        const parsedLine = match['groups'];
        if (parsedLine.time === undefined || parsedLine.label === undefined) throw new not_reached/* UnreachableCode */.$();
        const seconds = parseFloat(parsedLine.time);
        const label = parsedLine.label;
        const prevTime = this.labelToTime[label];
        if (prevTime !== undefined) {
          const text = `Duplicate ${label} name found for time ${prevTime} and ${seconds}`;
          this.errors.push({
            error: text,
            lineNumber: lineNumber
          });
        }
        this.labelToTime[label] = seconds;
        continue;
      }
      match = timeline_parser_regexes.line.exec(line);
      if (!(match && match['groups'])) {
        this.errors.push({
          lineNumber: lineNumber,
          line: originalLine,
          error: 'Invalid format'
        });
        continue;
      }
      const parsedLine = match['groups'];
      // Technically the name can be empty
      if (parsedLine.text === undefined || parsedLine.time === undefined || parsedLine.name === undefined) throw new not_reached/* UnreachableCode */.$();
      line = line.replace(parsedLine.text, '').trim();
      // There can be # in the ability name, but probably not in the regex.
      line = line.replace(timeline_parser_regexes.commentLine, '').trim();
      const seconds = parseFloat(parsedLine.time);
      const e = {
        id: `${++uniqueid}`,
        time: seconds,
        // The original ability name in the timeline.  Used for hideall, infotext, etc.
        name: parsedLine.name,
        // The text to display.  Not used for any logic.
        text: this.GetReplacedText(parsedLine.name),
        activeTime: 0,
        lineNumber: lineNumber,
        sortKey: 0
      };
      if (line) {
        line = this.matchDurationCommand(line, e);
        line = this.matchSyncRegexCommand(line, uniqueid, seconds, lineNumber, e);
        line = this.matchSyncNetRegex(line, lineNumber, originalLine, uniqueid, seconds, e);
      }
      // If there's text left that isn't a comment then we didn't parse that text so report it.
      if (line && !timeline_parser_regexes.comment.exec(line)) {
        this.errors.push({
          lineNumber: lineNumber,
          line: originalLine,
          error: 'Extra text'
        });
      } else {
        this.events.push(e);
      }
    }

    // Validate that all timeline triggers match something.
    for (const trigger of triggers ?? []) {
      let found = false;
      for (const event of this.events) {
        if (trigger.regex && trigger.regex.test(event.name)) {
          found = true;
          break;
        }
      }
      if (!found) {
        const text = `No match for timeline trigger ${trigger.regex?.source ?? ''} in ${trigger.id ?? ''}`;
        this.errors.push({
          error: text
        });
        console.error(`*** ERROR: ${text}`);
      }
    }

    // Validate that all the jumps go to labels that exist.
    for (const [label, syncs] of Object.entries(this.labelToSync)) {
      const destination = this.labelToTime[label];
      if (destination === undefined) {
        const text = `No label named ${label} found to jump to`;
        for (const sync of syncs) {
          this.errors.push({
            error: text,
            lineNumber: sync.lineNumber
          });
        }
        continue;
      }
      for (const sync of syncs) sync.jump = destination;
    }
    for (const e of this.events) {
      for (const matchedTextEvent of texts[e.name] ?? []) {
        const type = matchedTextEvent.type;
        if (type !== 'info' && type !== 'alert' && type !== 'alarm') continue;
        this.texts.push({
          type: type,
          time: e.time - (matchedTextEvent.secondsBefore || 0),
          text: matchedTextEvent.text ?? ''
        });
      }

      // Rather than matching triggers at run time, pre-match all the triggers
      // against timeline text and insert them as text events to run.
      for (const trigger of triggers ?? []) {
        const m = trigger.regex?.exec(e.name);
        if (!m) continue;

        // TODO: beforeSeconds should support being a function.
        const autoConfig = trigger.id !== undefined && this.perTriggerAutoConfig[trigger.id] || {};
        const beforeSeconds = autoConfig['BeforeSeconds'] ?? trigger.beforeSeconds;

        // TODO: also put these before any forcejump as well; this will solve
        // having to care about this at runtime.
        // e.g. if the beforeSeconds would put the text prior to the jump destination
        this.texts.push({
          type: 'trigger',
          time: e.time - (beforeSeconds || 0),
          trigger: trigger,
          matches: m
        });
      }
      for (const style of styles ?? []) {
        if (!style.regex.test(e.name)) continue;
        e.style = style.style;
      }
    }

    // Sort by time, but when the time is the same, sort by file order.
    // Then assign a sortKey to each event so that we can maintain that order.
    this.events.sort((a, b) => {
      if (a.time === b.time) return parseInt(a.id) - parseInt(b.id);
      return a.time - b.time;
    });
    this.events.forEach((event, idx) => event.sortKey = idx);
    this.texts.sort((a, b) => {
      return a.time - b.time;
    });
    this.syncStarts.sort((a, b) => {
      return a.start - b.start;
    });
    this.syncEnds.sort((a, b) => {
      return a.end - b.end;
    });
    this.forceJumps.sort((a, b) => {
      return a.time - b.time;
    });
  }
  matchSyncNetRegex(line, lineNumber, originalLine, uniqueid, seconds, e) {
    const commandMatch = timeline_parser_regexes.syncNetRegex.exec(line);
    if (!commandMatch || !commandMatch['groups']) return line;
    const syncCommand = commandMatch['groups'];
    if (syncCommand.netRegexType === undefined || syncCommand.netRegex === undefined) throw new not_reached/* UnreachableCode */.$();
    line = line.replace(syncCommand.netRegexType, '').trim();
    const netRegexType = syncCommand.netRegexType;
    if (!isLogDefinitionName(netRegexType)) {
      this.errors.push({
        lineNumber: lineNumber,
        line: originalLine,
        error: 'Invalid NetRegex type'
      });
      return line;
    }
    this.parseType(netRegexType, lineNumber);
    line = line.replace(syncCommand.netRegex, '').trim();
    let params;
    try {
      // Use json5 here to support bareword keys and different quoting styles.
      params = dist_default().parse(syncCommand.netRegex);
    } catch (e) {
      this.errors.push({
        lineNumber: lineNumber,
        line: originalLine,
        error: 'Invalid NetRegex JSON'
      });
      return line;
    }
    if (!isObject(params) || !isValidNetParams(netRegexType, params)) {
      this.errors.push({
        lineNumber: lineNumber,
        line: originalLine,
        error: 'Invalid NetRegex arguments'
      });
      return line;
    }
    const translatedParams = translateRegexBuildParamAnon(params, this.options.ParserLanguage, this.replacements).params;
    const regex = (0,netregexes/* buildNetRegexForTrigger */.BW)(netRegexType, {
      ...translatedParams,
      capture: false
    });

    // The original params should be TimelineNetParams, thus so should the output.
    if (!isValidNetParams(netRegexType, translatedParams)) throw new not_reached/* UnreachableCode */.$();
    return this.buildRegexSync(uniqueid, 'net', translatedParams, regexes/* default.parse */.Z.parse(regex), syncCommand.args, seconds, lineNumber, e, line);
  }
  matchSyncRegexCommand(line, uniqueid, seconds, lineNumber, e) {
    const commandMatch = timeline_parser_regexes.syncRegexCommand.exec(line);
    if (!commandMatch || !commandMatch['groups']) return line;
    const syncCommand = commandMatch['groups'];
    if (syncCommand.text === undefined || syncCommand.regex === undefined) throw new not_reached/* UnreachableCode */.$();
    line = line.replace(syncCommand.text, '').trim();
    return this.buildRegexSync(uniqueid, 'parsed', syncCommand.regex, regexes/* default.parse */.Z.parse(this.GetReplacedSync(syncCommand.regex)), syncCommand.args, seconds, lineNumber, e, line);
  }
  buildRegexSync(uniqueid, regexType, origInput, parsedRegex, args, seconds, lineNumber, e, line) {
    const sync = {
      id: uniqueid,
      origInput: origInput,
      regexType: regexType,
      regex: parsedRegex,
      start: seconds - 2.5,
      end: seconds + 2.5,
      time: seconds,
      lineNumber: lineNumber,
      event: e
    };
    e.sync = sync;
    if (args !== undefined) {
      let argMatch = timeline_parser_regexes.windowCommand.exec(args);
      if (argMatch && argMatch['groups']) {
        const windowCommand = argMatch['groups'];
        if (windowCommand.text === undefined || windowCommand.end === undefined) throw new not_reached/* UnreachableCode */.$();
        line = line.replace(windowCommand.text, '').trim();
        if (windowCommand.start !== undefined) {
          sync.start = seconds - parseFloat(windowCommand.start);
          sync.end = seconds + parseFloat(windowCommand.end);
        } else {
          sync.start = seconds - parseFloat(windowCommand.end) / 2;
          sync.end = seconds + parseFloat(windowCommand.end) / 2;
        }
      }
      argMatch = timeline_parser_regexes.jumpCommand.exec(args);
      if (argMatch && argMatch['groups']) {
        const jumpCommand = argMatch['groups'];
        if (jumpCommand.text === undefined) throw new not_reached/* UnreachableCode */.$();
        line = line.replace(jumpCommand.text, '').trim();
        if (jumpCommand.seconds !== undefined) sync.jump = parseFloat(jumpCommand.seconds);else if (jumpCommand.label !== undefined) (this.labelToSync[jumpCommand.label] ??= []).push(sync);else throw new not_reached/* UnreachableCode */.$();
        if (jumpCommand.command === 'forcejump') sync.jumpType = 'force';else sync.jumpType = 'normal';
      }
    }
    this.syncStarts.push(sync);
    this.syncEnds.push(sync);
    if (sync.jumpType === 'force') this.forceJumps.push(sync);
    return line;
  }
  matchDurationCommand(line, e) {
    const commandMatch = timeline_parser_regexes.durationCommand.exec(line);
    if (commandMatch && commandMatch['groups']) {
      const durationCommand = commandMatch['groups'];
      if (durationCommand.text === undefined || durationCommand.seconds === undefined) throw new not_reached/* UnreachableCode */.$();
      line = line.replace(durationCommand.text, '').trim();
      e.duration = parseFloat(durationCommand.seconds);
    }
    return line;
  }

  // This no-op is intended to be overridden by subclasses, like the one in update_logdefs.ts.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parseType(type, lineNumber) {
    /* no-op */
  }
  GetReplacedText(text) {
    // Anything in the timeline config takes precedence over timelineReplace sections in
    // the trigger file.  It is also a full replacement, vs the regex-style GetReplacedHelper.
    const rename = this.timelineConfig?.Rename?.[text];
    if (rename !== undefined) return rename;
    const replaceLang = this.options.TimelineLanguage ?? this.options.ParserLanguage ?? 'en';
    return translateText(text, replaceLang, this.replacements);
  }
  GetReplacedSync(sync) {
    const replaceLang = this.options.ParserLanguage ?? 'en';
    return translateRegex(sync, replaceLang, this.replacements);
  }
  GetMissingTranslationsToIgnore() {
    return ['--Reset--', '--sync--', 'Start', '^ ?21:', '^( ?257)? 101:', '^(\\(\\?\\<timestamp\\>\\^\\.\\{14\\}\\)) (1B|21|23):', '^(\\^\\.\\{14\\})? ?(1B|21|23):', '^::\\y{AbilityCode}:$', '^\\.\\*$', '^ 1\\[56\\]:\\[\\^:\\]\\*:\\[\\^:\\]\\*:', '^( ?260)? 104:', '^ ?29:'].map(x => regexes/* default.parse */.Z.parse(x));
  }

  // Utility function.  This could be a function on TimelineParser, but it seems weird to
  // store all of the original timeline texts unnecessarily when only config/utilities need it.
  static Translate(timeline, timelineText, syncErrors, textErrors) {
    const lineToText = {};
    const lineToSync = {};
    for (const event of timeline.events) {
      if (!event.lineNumber) continue;
      lineToText[event.lineNumber] = event;
    }
    for (const event of timeline.syncStarts) lineToSync[event.lineNumber] = event;

    // Combine replaced lines with errors.
    const timelineLines = timelineText.split(/\n/);
    const translatedLines = [];
    timelineLines.forEach((timelineLine, idx) => {
      const lineNumber = idx + 1;
      let line = timelineLine.trim();
      const lineText = lineToText[lineNumber];
      if (lineText) line = line.replace(` "${lineText.name}"`, ` "${lineText.text}"`);
      const lineSync = lineToSync[lineNumber];
      if (lineSync) {
        if (typeof lineSync.origInput === 'string') {
          line = line.replace(`sync /${lineSync.origInput}/`, `sync /${lineSync.regex.source}/`);
        } else {
          const translatedParams = translateRegexBuildParamAnon(lineSync.origInput, timeline.options.ParserLanguage, timeline.replacements).params;
          line = line.replace(/{[^}]*}/, JSON.stringify(translatedParams));
        }
      }
      if (syncErrors?.[lineNumber]) line += ' #MISSINGSYNC';
      if (textErrors?.[lineNumber]) line += ' #MISSINGTEXT';
      translatedLines.push(line);
    });
    return translatedLines;
  }
}
;// CONCATENATED MODULE: ./ui/raidboss/raidboss_config.ts











const kOptionKeys = {
  output: 'Output',
  duration: 'Duration',
  beforeSeconds: 'BeforeSeconds',
  delayAdjust: 'DelayAdjust',
  outputStrings: 'OutputStrings',
  // folder for all trigger options
  triggers: 'triggers',
  // folder for all trigger set options
  triggerSets: 'triggerSets',
  // folder for options in trigger set config ui
  triggerSetConfig: 'TriggerSetConfig'
};
// No sound only option, because that's silly.
const raidboss_config_kTriggerOptions = {
  default: {
    label: {
      en: '✔ Defaults',
      de: '✔ Standards',
      fr: '✔ Défauts',
      ja: '✔ 初期設定',
      cn: '✔ 默认设置',
      ko: '✔ 기본',
      tc: '✔ 默認設置'
    }
  },
  textAndSound: {
    label: {
      en: '🆙🔊 Text and Sound',
      de: '🆙🔊 Text und Ton',
      fr: '🆙🔊 Texte et son',
      ja: '🆙🔊 テキストと音声',
      cn: '🆙🔊 文本显示与提示音',
      ko: '🆙🔊 텍스트와 소리',
      tc: '🆙🔊 文本顯示與提示音'
    }
  },
  ttsAndText: {
    label: {
      en: '🆙💬 Text and TTS',
      de: '🆙💬 Text und TTS',
      fr: '🆙💬 Texte et TTS',
      ja: '🆙💬 テキストとTTS',
      cn: '🆙💬 文本显示与TTS',
      ko: '🆙💬 텍스트와 TTS',
      tc: '🆙💬 文本顯示與TTS'
    }
  },
  ttsOnly: {
    label: {
      en: '💬 TTS Only',
      de: '💬 Nur TTS',
      fr: '💬 TTS Seulement',
      ja: '💬 TTSのみ',
      cn: '💬 只使用TTS',
      ko: '💬 TTS만',
      tc: '💬 只使用TTS'
    }
  },
  textOnly: {
    label: {
      en: '🆙 Text Only',
      de: '🆙 Nur Text',
      fr: '🆙 Texte seulement',
      ja: '🆙 テキストのみ',
      cn: '🆙 只使用文本显示',
      ko: '🆙 텍스트만',
      tc: '🆙 只使用文本顯示'
    }
  },
  disabled: {
    label: {
      en: '❌ Disabled',
      de: '❌ Deaktiviert',
      fr: '❌ Désactivé',
      ja: '❌ 無効',
      cn: '❌ 禁用',
      ko: '❌ 비활성화',
      tc: '❌ 禁用'
    }
  }
};
const triggerSoundOptions = raidboss_config_kTriggerOptions;
const kDetailKeys = {
  'triggerRegex': {
    label: {
      en: 'regex',
      de: 'regex',
      fr: 'regex',
      ja: '正規表現',
      cn: '正则表达式',
      ko: '정규식',
      tc: '正則表達式'
    },
    cls: 'regex-text',
    debugOnly: true
  },
  'triggerNetRegex': {
    label: {
      en: 'netregex',
      de: 'netregex',
      fr: 'netregex',
      ja: 'ネット正規表現',
      cn: '网络日志正则表达式',
      ko: '정규표현식',
      tc: '網路日誌正則表達式'
    },
    cls: 'regex-text',
    debugOnly: true
  },
  'timelineRegex': {
    label: {
      en: 'timeline',
      de: 'timeline',
      fr: 'timeline',
      ja: 'タイムライン',
      cn: '时间轴',
      ko: '타임라인',
      tc: '時間軸'
    },
    cls: 'regex-text',
    debugOnly: true
  },
  'beforeSeconds': {
    label: {
      en: 'before (sec)',
      de: 'Vorher (Sekunden)',
      fr: 'avant (seconde)',
      ja: 'その前に (秒)',
      cn: '提前 (秒)',
      ko: '앞당김 (초)',
      tc: '提前 (秒)'
    },
    cls: 'before-seconds-text',
    generatedManually: true
  },
  'condition': {
    label: {
      en: 'condition',
      de: 'condition',
      fr: 'condition',
      ja: '条件',
      cn: '条件',
      ko: '조건',
      tc: '條件'
    },
    cls: 'condition-text',
    debugOnly: true
  },
  'delayAdjust': {
    label: {
      // Note: delay adjusting is both dangerous (delays can be functional in terms of
      // needing to happen after/before a particular time to collect the state of the world)
      // as well as confusing (you can adjust some but not many things negatively as
      // delay can't go below zero). Therefore, this is a developer/debug mode only for
      // people who know what they're doing.
      en: 'DEBUG delay adjust (sec)',
      de: 'DEBUG Verzögerungseinstellung (sec)',
      fr: 'Délai d\'ajustement DEBUG (s)',
      ja: 'DEBUGの待機調整 (秒)',
      cn: 'DEBUG 延时调整 (秒)',
      ko: '"디버그" 딜레이 조절 (초)',
      tc: 'DEBUG 延時調整 (秒)'
    },
    cls: 'delay-adjust-text',
    generatedManually: true,
    debugOnly: true
  },
  'duration': {
    label: {
      en: 'duration (sec)',
      de: 'Dauer (Sekunden)',
      fr: 'Durée (secondes)',
      ja: '存続時間 (秒)',
      cn: '显示时长 (秒)',
      ko: '지속 시간 (초)',
      tc: '顯示時長 (秒)'
    },
    cls: 'duration-text',
    generatedManually: true
  },
  'preRun': {
    label: {
      en: 'preRun',
      de: 'preRun',
      fr: 'preRun',
      ja: 'プレ実行',
      cn: '预运行',
      ko: '사전 실행',
      tc: '預運行'
    },
    cls: 'prerun-text',
    debugOnly: true
  },
  'alarmText': {
    label: {
      en: 'alarm',
      de: 'alarm',
      fr: 'alarme',
      ja: '警報',
      cn: '致命级',
      ko: '경고',
      tc: '致命級'
    },
    cls: 'alarm-text'
  },
  'alertText': {
    label: {
      en: 'alert',
      de: 'alert',
      fr: 'alerte',
      ja: '警告',
      cn: '严重级',
      ko: '주의',
      tc: '嚴重級'
    },
    cls: 'alert-text'
  },
  'infoText': {
    label: {
      en: 'info',
      de: 'info',
      fr: 'info',
      ja: '情報',
      cn: '一般级',
      ko: '안내',
      tc: '一般級'
    },
    cls: 'info-text'
  },
  'tts': {
    label: {
      en: 'tts',
      de: 'tts',
      fr: 'tts',
      ja: 'TTS',
      cn: 'TTS',
      ko: 'TTS',
      tc: 'TTS'
    },
    cls: 'tts-text'
  },
  'sound': {
    label: {
      en: 'sound',
      de: 'sound',
      fr: 'son',
      ja: '音声',
      cn: '提示音',
      ko: '소리',
      tc: '提示音'
    },
    cls: 'sound-text'
  },
  'run': {
    label: {
      en: 'run',
      de: 'run',
      fr: 'run',
      ja: '実行',
      cn: '运行',
      ko: '실행',
      tc: '運行'
    },
    cls: 'run-text',
    debugOnly: true
  }
};

// Ordered set of headers in the timeline edit table.
const kTimelineTableHeaders = {
  shouldDisplayText: {
    en: 'Show',
    de: 'Anzeigen',
    fr: 'Afficher',
    ja: '表示',
    cn: '显示',
    ko: '표시',
    tc: '顯示'
  },
  text: {
    en: 'Timeline Text',
    de: 'Timeline Text',
    fr: 'Texte de la timeline',
    ja: 'タイムラインテキスト',
    cn: '时间轴文本',
    ko: '타임라인 텍스트',
    tc: '時間軸文本'
  },
  overrideText: {
    en: 'Rename',
    de: 'Umbenennen',
    fr: 'Renommer',
    ja: 'テキスト変更',
    cn: '修改文本',
    ko: '텍스트 변경',
    tc: '修改文本'
  }
};
const detailKeys = kDetailKeys;
const kMiscTranslations = {
  // Shows up for un-set values.
  valueDefault: {
    en: '(default)',
    de: '(Standard)',
    fr: '(Défaut)',
    ja: '(初期値)',
    cn: '(默认值)',
    ko: '(기본값)',
    tc: '(預設值)'
  },
  // Shown when the UI can't decipher the output of a function.
  valueIsFunction: {
    en: '(function)',
    de: '(Funktion)',
    fr: '(Fonction)',
    ja: '(関数)',
    cn: '(函数)',
    ko: '(함수)',
    tc: '(函數)'
  },
  // Warning label for triggers without ids or overridden triggers.
  warning: {
    en: '⚠️ warning',
    de: '⚠️ Warnung',
    fr: '⚠️ Attention',
    ja: '⚠️ 警告',
    cn: '⚠️ 警告',
    ko: '⚠️ 주의',
    tc: '⚠️ 警告'
  },
  // Shows up for triggers without ids.
  missingId: {
    en: 'missing id field',
    de: 'Fehlendes ID Feld',
    fr: 'Champ ID manquant',
    ja: 'idがありません',
    cn: '缺少id属性',
    ko: 'ID 필드값 없음',
    tc: '缺少id屬性'
  },
  // Shows up for triggers that are overridden by other triggers.
  overriddenByFile: {
    en: 'overridden by "${file}"',
    de: 'Überschrieben durch "${file}"',
    fr: 'Écrasé(e) par "${file}"',
    ja: '"${file}"に上書きました',
    cn: '被"${file}"文件覆盖',
    ko: '"${file}" 파일에서 덮어씌움',
    tc: '被"${file}"文件覆蓋'
  },
  // Opens trigger file on Github.
  viewTriggerSource: {
    en: 'View Trigger Source',
    de: 'Zeige Trigger Quelle',
    fr: 'Afficher la source du Trigger',
    ja: 'トリガーのコードを表示',
    cn: '显示触发器源码',
    ko: '트리거 소스코드 보기',
    tc: '顯示觸發器原始碼'
  },
  // The header for the editing timeline section inside a trigger file.
  editTimeline: {
    en: 'Edit Timeline',
    de: 'Timeline bearbeiten',
    fr: 'Éditer la timeline',
    ja: 'タイムラインを編集',
    cn: '编辑时间轴',
    ko: '타임라인 편집',
    tc: '編輯時間軸'
  },
  // The header inside the Edit Timeline section on top of the reference timeline text.
  timelineListing: {
    en: 'Reference Text (uneditable)',
    de: 'Referenztext (nicht editierbar)',
    fr: 'Texte de référence (non éditable)',
    ja: '参考タイムライン (編集不可)',
    cn: '参考文本 (不可编辑)',
    ko: '원본 타임라인 (수정 불가능)',
    tc: '參考文本 (不可編輯)'
  },
  // The header inside the Edit Timeline section on top of the add entries section.
  addCustomTimelineEntries: {
    en: 'Add Custom Timeline Entries',
    de: 'Eigene Timeline Einträge hinzufügen',
    fr: 'Ajouter une entrée de timeline personnalisée',
    ja: 'カスタマイズタイムライン追加',
    cn: '添加自定义时间轴条目',
    ko: '사용자 지정 타임라인 항목 추가',
    tc: '添加自訂時間軸條目'
  },
  // The button text for the Edit Timeline add entries section.
  addMoreRows: {
    en: 'Add more rows',
    de: 'Mehr Reihen hinzufügen',
    fr: 'Ajouter une ligne',
    ja: '行追加',
    cn: '添加更多行',
    ko: '행 추가',
    tc: '添加更多行'
  },
  customEntryTime: {
    en: 'Time',
    de: 'Zeit',
    fr: 'Temps',
    ja: '時間',
    cn: '时间',
    ko: '시간',
    tc: '時間'
  },
  customEntryText: {
    en: 'Text',
    de: 'Text',
    fr: 'Texte',
    ja: 'テキスト',
    cn: '文本',
    ko: '텍스트',
    tc: '文本'
  },
  customEntryDuration: {
    en: 'Duration (seconds)',
    de: 'Dauer (Sekunden)',
    fr: 'Durée (s)',
    ja: '持続時間 (秒)',
    cn: '显示时长 (秒)',
    ko: '지속시간 (초)',
    tc: '顯示時長 (秒)'
  },
  customEntryRemove: {
    en: 'Remove',
    de: 'Entfernen',
    fr: 'Supprimer',
    ja: '削除',
    cn: '移除',
    ko: '삭제',
    tc: '移除'
  }
};
const validDurationOrUndefined = valEntry => {
  if (typeof valEntry !== 'string' && typeof valEntry !== 'number') return undefined;
  const val = parseFloat(valEntry.toString());
  if (!isNaN(val) && val >= 0) return val;
  return undefined;
};
const validDelayAdjustOrUndefined = valEntry => {
  if (typeof valEntry !== 'string' && typeof valEntry !== 'number') return undefined;
  const val = parseFloat(valEntry.toString());
  if (!isNaN(val)) return val;
  return undefined;
};
const canBeConfigured = trig => !trig.isMissingId && trig.overriddenByFile === undefined;
const addTriggerDetail = (container, labelText, detailText, detailCls) => {
  const label = document.createElement('div');
  label.innerText = labelText;
  label.classList.add('trigger-label');
  container.appendChild(label);
  const detail = document.createElement('div');
  detail.classList.add('trigger-detail');
  detail.innerText = detailText;
  container.appendChild(detail);
  if (detailCls) detail.classList.add(...detailCls);
};

// This is used both for top level Options and for PerTriggerAutoConfig settings.
// Unfortunately due to poor decisions in the past, PerTriggerOptions has different
// fields here.  This should be fixed.
const setOptionsFromOutputValue = (value, options) => {
  if (value === 'default') {
    // Nothing.
  } else if (value === 'textAndSound') {
    options.TextAlertsEnabled = true;
    options.SoundAlertsEnabled = true;
    options.SpokenAlertsEnabled = false;
  } else if (value === 'ttsAndText') {
    options.TextAlertsEnabled = true;
    options.SoundAlertsEnabled = true;
    options.SpokenAlertsEnabled = true;
  } else if (value === 'ttsOnly') {
    options.TextAlertsEnabled = false;
    options.SoundAlertsEnabled = true;
    options.SpokenAlertsEnabled = true;
  } else if (value === 'textOnly') {
    options.TextAlertsEnabled = true;
    options.SoundAlertsEnabled = false;
    options.SpokenAlertsEnabled = false;
  } else if (value === 'disabled') {
    options.TextAlertsEnabled = false;
    options.SoundAlertsEnabled = false;
    options.SpokenAlertsEnabled = false;
  } else {
    // FIXME: handle lint error here
    // ref: https://github.com/OverlayPlugin/cactbot/pull/274#discussion_r1692375852
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    console.error(`unknown output type: ${value.toString()}`);
  }
};

// Helper for doing nothing during trigger eval, but still recording any
// calls to `output.responseOutputStrings = x;` via callback.
class DoNothingFuncProxy {
  constructor(outputStringsCallback) {
    return new Proxy(this, {
      set(_target, property, value) {
        if (property === 'responseOutputStrings') {
          // TODO: need some way of verifying that a value is an OutputStrings.
          outputStringsCallback(value);
          return true;
        }

        // Ignore other property setting here.
        return false;
      },
      get(_target, _name) {
        return () => {/* noop */};
      }
    });
  }
}
const makeLink = href => {
  return `<a href="${href}" target="_blank">${href}</a>`;
};
const langOrEn = lang => {
  return typeof lang === 'string' && (0,languages/* isLang */.jd)(lang) ? lang : 'en';
};
class RaidbossConfigurator {
  constructor(cactbotConfigurator) {
    this.base = cactbotConfigurator;

    // TODO: is it worth adding the complexity to reflect this change in triggers that use it?
    // This is probably where using something like vue or react would be easier.
    // For the moment, folks can just reload, for real.
    this.alertsLang = langOrEn(this.base.getOption('raidboss', 'AlertsLanguage', this.base.lang));
    this.timelineLang = langOrEn(this.base.getOption('raidboss', 'TimelineLanguage', this.base.lang));
  }
  buildUI(container, raidbossFiles, userOptions) {
    const fileMap = this.processRaidbossFiles(raidbossFiles, userOptions);
    const expansionDivs = {};
    for (const [key, info] of Object.entries(fileMap)) {
      // "expansion" here is technically section, which includes "general triggers"
      // and one section per user file.
      const expansion = info.section;

      // This isn't perfect, but skip trigger sets that are no-ops.
      const hasTriggers = Object.keys(info.triggers ?? []).length !== 0;
      const hasTimeline = info.triggerSet.timeline !== undefined;
      const hasTriggerSetConfig = (info.triggerSet.config ?? []).length > 0;
      if (!hasTriggers && !hasTimeline && !hasTriggerSetConfig) continue;
      let expansionDiv = expansionDivs[expansion];
      if (!expansionDiv) {
        const expansionContainer = document.createElement('div');
        expansionContainer.classList.add('trigger-expansion-container', 'collapsed');
        container.appendChild(expansionContainer);
        const expansionHeader = document.createElement('div');
        expansionHeader.classList.add('trigger-expansion-header');
        expansionHeader.onclick = () => {
          expansionContainer.classList.toggle('collapsed');
        };
        expansionHeader.innerText = expansion;
        expansionContainer.appendChild(expansionHeader);
        expansionDiv = expansionDivs[expansion] = expansionContainer;
      }
      const triggerContainer = document.createElement('div');
      triggerContainer.classList.add('trigger-file-container', 'collapsed');
      expansionDiv.appendChild(triggerContainer);
      const headerDiv = document.createElement('div');
      headerDiv.classList.add('trigger-file-header');
      headerDiv.onclick = () => {
        triggerContainer.classList.toggle('collapsed');
      };
      const parts = [info.title, info.type, info.prefix];
      for (const part of parts) {
        if (part === undefined) continue;
        const partDiv = document.createElement('div');
        partDiv.classList.add('trigger-file-header-part');
        // Use innerHTML here because of <Emphasis>Whorleater</Emphasis>.
        partDiv.innerHTML = part;
        headerDiv.appendChild(partDiv);
      }
      triggerContainer.appendChild(headerDiv);

      // TODO: print a warning if config exists without triggerset id??
      if (info.triggerSet.id !== undefined) {
        const triggerSetConfig = document.createElement('div');
        triggerSetConfig.classList.add('overlay-options');
        triggerContainer.appendChild(triggerSetConfig);
        const triggerSetAlertOutput = {
          ...defaultTriggerSetAlertOutput,
          id: kOptionKeys.output,
          default: this.base.getStringOption('raidboss', defaultAlertOutput.id, defaultAlertOutput.default.toString())
        };
        this.base.buildConfigEntry(userOptions, triggerSetConfig, triggerSetAlertOutput, 'raidboss', [kOptionKeys.triggerSets, info.triggerSet.id]);

        // Track the values of and html elements associated with each config entry,
        // to be used for updating visibility/enablement of config entries.
        // These are reset for each trigger set.
        const values = {};
        const elements = new Map();
        for (const opt of info.triggerSet.config ?? []) {
          if (!this.base.developerOptions && opt.debugOnly) continue;
          const ret = this.base.buildConfigEntry(userOptions, triggerSetConfig, opt, 'raidboss', [kOptionKeys.triggerSetConfig, info.triggerSet.id], elements, values);
          if (!ret) continue;
          elements.set(opt, ret.elements);
          values[opt.id] = ret.value;
        }
        // Once the group is fully created, process visibility settings.
        this.base.updateVisibility(elements, values);
      }

      // Timeline editing is tied to a single, specific zoneId per file for now.
      // We could add more indirection (via fileKey?) and look up zoneId -> fileKey[]
      // and fileKey -> timeline edits if needed.
      if (info.triggerSet.timeline !== undefined && typeof info.zoneId === 'number') this.buildTimelineUIContainer(info.zoneId, info.triggerSet, triggerContainer, userOptions);
      const triggerOptions = document.createElement('div');
      triggerOptions.classList.add('trigger-file-options');
      triggerContainer.appendChild(triggerOptions);

      // If this trigger set is overridden, show warning instead of triggers
      if (info.triggerSet.overriddenByFile !== undefined) {
        const warningDiv = document.createElement('div');
        warningDiv.classList.add('trigger-set-override-warning');
        const baseText = this.base.translate(kMiscTranslations.overriddenByFile);
        const detailText = baseText.replace('${file}', info.triggerSet.overriddenByFile);
        const warningText = this.base.translate(kMiscTranslations.warning);
        warningDiv.innerHTML = `<strong>${warningText}</strong>: ${detailText}`;
        triggerOptions.appendChild(warningDiv);
        continue;
      }
      for (const [trigId, trig] of Object.entries(info.triggers ?? {})) {
        // Don't construct triggers that won't show anything.
        let hasOutputFunc = false;
        for (const func of responses/* triggerOutputFunctions */.ug) {
          if (func in trig) {
            hasOutputFunc = true;
            break;
          }
        }
        if (!hasOutputFunc && !this.base.developerOptions) continue;
        const triggerDiv = document.createElement('div');
        triggerDiv.classList.add('trigger');

        // Build the trigger label.
        const triggerId = document.createElement('div');
        triggerId.classList.add('trigger-id');
        triggerId.innerHTML = trig.isMissingId ? '(???)' : trigId;
        triggerId.classList.add('trigger-id');
        triggerDiv.appendChild(triggerId);

        // Build the trigger comment
        if (trig.comment) {
          const trigComment = trig.comment[this.base.lang] ?? trig.comment?.en ?? '';
          const triggerCommentDiv = document.createElement('div');
          triggerCommentDiv.innerHTML = trigComment;
          triggerCommentDiv.classList.add('comment');
          triggerDiv.appendChild(triggerCommentDiv);
        }
        triggerOptions.appendChild(triggerDiv);

        // Container for the right side ui (select boxes, all of the info).
        const triggerDetails = document.createElement('div');
        triggerDetails.classList.add('trigger-details');
        triggerOptions.appendChild(triggerDetails);
        if (canBeConfigured(trig)) triggerDetails.appendChild(this.buildTriggerOptions(trig, triggerDiv));
        if (trig.isMissingId) {
          addTriggerDetail(triggerDetails, this.base.translate(kMiscTranslations.warning), this.base.translate(kMiscTranslations.missingId));
        }
        if (trig.overriddenByFile !== undefined) {
          const baseText = this.base.translate(kMiscTranslations.overriddenByFile);
          const detailText = baseText.replace('${file}', trig.overriddenByFile);
          addTriggerDetail(triggerDetails, this.base.translate(kMiscTranslations.warning), detailText);
        }

        // Append some details about the trigger so it's more obvious what it is.
        for (const [detailStringKey, opt] of Object.entries(detailKeys)) {
          // Object.entries coerces to a string, but the detailKeys definition makes this true.
          const detailKey = detailStringKey;
          if (opt.generatedManually) continue;
          if (!this.base.developerOptions && opt.debugOnly) continue;
          const trigOutput = trig.configOutput?.[detailKey];
          const trigFunc = trig[detailKey];
          if (trigFunc === undefined || trigFunc === null) continue;
          const detailCls = [opt.cls];
          let detailText;
          if (trigOutput !== undefined) {
            detailText = trigOutput;
          } else if (typeof trigFunc === 'function') {
            detailText = this.base.translate(kMiscTranslations.valueIsFunction);
            detailCls.push('function-text');
          } else {
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            detailText = trigFunc.toString();
          }
          addTriggerDetail(triggerDetails, this.base.translate(opt.label), detailText, detailCls);
        }
        if (!canBeConfigured(trig)) continue;

        // Add beforeSeconds manually for timeline triggers.
        if (trig.isTimelineTrigger) {
          const detailKey = 'beforeSeconds';
          const optionKey = kOptionKeys.beforeSeconds;
          const label = document.createElement('div');
          label.innerText = this.base.translate(kDetailKeys[detailKey].label);
          label.classList.add('trigger-label');
          triggerDetails.appendChild(label);
          const div = document.createElement('div');
          div.classList.add('option-input-container', 'trigger-before-seconds');
          const input = document.createElement('input');
          div.appendChild(input);
          input.type = 'text';
          input.step = 'any';

          // Say "(default)" for more complicated things like functions.
          let defaultValue = this.base.translate(kMiscTranslations.valueDefault);
          if (trig.beforeSeconds === undefined) defaultValue = '0';else if (typeof trig.beforeSeconds === 'number') defaultValue = trig.beforeSeconds.toString();
          input.placeholder = defaultValue;
          input.value = this.base.getStringOption('raidboss', [kOptionKeys.triggers, trigId, optionKey], '');
          const setFunc = () => {
            const val = validDurationOrUndefined(input.value) || '';
            this.base.setOption('raidboss', [kOptionKeys.triggers, trigId, optionKey], val);
          };
          input.onchange = setFunc;
          input.oninput = setFunc;
          triggerDetails.appendChild(div);
        }

        // Add delay adjust manually, as this isn't a trigger field.
        if (this.base.developerOptions) {
          const detailKey = 'delayAdjust';
          const optionKey = kOptionKeys.delayAdjust;
          const label = document.createElement('div');
          label.innerText = this.base.translate(kDetailKeys[detailKey].label);
          label.classList.add('trigger-label');
          triggerDetails.appendChild(label);
          const div = document.createElement('div');
          div.classList.add('option-input-container', 'trigger-delay-adjust');
          const input = document.createElement('input');
          div.appendChild(input);
          input.type = 'text';
          input.step = 'any';
          input.placeholder = `0`;
          input.value = this.base.getStringOption('raidboss', [kOptionKeys.triggers, trigId, optionKey], '');
          const setFunc = () => {
            const val = validDelayAdjustOrUndefined(input.value) || '';
            this.base.setOption('raidboss', [kOptionKeys.triggers, trigId, optionKey], val);
          };
          input.onchange = setFunc;
          input.oninput = setFunc;
          triggerDetails.appendChild(div);
        }

        // Add duration manually with an input to override.
        if (hasOutputFunc) {
          const detailKey = 'duration';
          const optionKey = kOptionKeys.duration;
          const label = document.createElement('div');
          label.innerText = this.base.translate(kDetailKeys[detailKey].label);
          label.classList.add('trigger-label');
          triggerDetails.appendChild(label);
          const div = document.createElement('div');
          div.classList.add('option-input-container', 'trigger-duration');
          const input = document.createElement('input');
          div.appendChild(input);
          input.type = 'text';
          input.step = 'any';
          if (typeof trig.durationSeconds === 'number') input.placeholder = `${trig.durationSeconds}`;else input.placeholder = this.base.translate(kMiscTranslations.valueDefault);
          input.value = this.base.getStringOption('raidboss', [kOptionKeys.triggers, trigId, optionKey], '');
          const setFunc = () => {
            const val = validDurationOrUndefined(input.value) || '';
            this.base.setOption('raidboss', [kOptionKeys.triggers, trigId, optionKey], val);
          };
          input.onchange = setFunc;
          input.oninput = setFunc;
          triggerDetails.appendChild(div);
        }

        // Add output strings manually
        const outputStrings = trig.outputStrings || {};
        for (const [key, outputString] of Object.entries(outputStrings)) {
          const optionKey = kOptionKeys.outputStrings;
          const template = typeof outputString === 'string' ? outputString : this.base.translate(outputString);
          const label = document.createElement('div');
          label.innerText = key;
          label.classList.add('trigger-outputstring-label');
          triggerDetails.appendChild(label);
          const div = document.createElement('div');
          div.classList.add('option-input-container', 'trigger-outputstring');
          const input = document.createElement('input');
          div.appendChild(input);
          input.type = 'text';
          input.placeholder = template;
          input.value = this.base.getStringOption('raidboss', [kOptionKeys.triggers, trigId, optionKey, key], '');
          const setFunc = () => this.base.setOption('raidboss', [kOptionKeys.triggers, trigId, optionKey, key], input.value);
          input.onchange = setFunc;
          input.oninput = setFunc;
          triggerDetails.appendChild(div);
        }
        const label = document.createElement('div');
        triggerDetails.appendChild(label);
        const path = key.split('-');
        const [p0, p1, p2] = path;
        if (p0 !== undefined && p1 !== undefined && p2 !== undefined) {
          const div = document.createElement('div');
          div.classList.add('option-input-container', 'trigger-source');
          const baseUrl = 'https://github.com/OverlayPlugin/cactbot/blob/triggers';
          let urlFilepath;
          if (path.length === 3) {
            // 00-misc/general.js
            urlFilepath = `${p0}-${p1}/${[...path].slice(2).join('-')}`;
          } else {
            // 02-arr/raids/t1.js
            urlFilepath = `${p0}-${p1}/${p2}/${[...path].slice(3).join('-')}`;
          }
          const escapedTriggerId = trigId.replace(/'/g, '\\\'');
          const uriComponent = encodeURIComponent(`id: '${escapedTriggerId}'`).replace(/'/g, '%27');
          const urlString = `${baseUrl}/${urlFilepath}.js#:~:text=${uriComponent}`;
          div.innerHTML = `<a href="${urlString}" target="_blank">(${this.base.translate(kMiscTranslations.viewTriggerSource)})</a>`;
          triggerDetails.appendChild(div);
        }
      }
    }
  }

  // Build the top level timeline editing expandable container.
  buildTimelineUIContainer(zoneId, set, parent, options) {
    const container = document.createElement('div');
    container.classList.add('timeline-edit-container', 'collapsed');
    parent.appendChild(container);
    let hasEverBeenExpanded = false;
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('timeline-edit-header');
    headerDiv.onclick = () => {
      container.classList.toggle('collapsed');
      // Build the rest of this UI on demand lazily.
      if (!hasEverBeenExpanded) {
        const text = this.timelineTextFromSet(set);
        const timeline = new TimelineParser(text, set.timelineReplace ?? [], [], [], options);
        this.buildTimelineListingUI(timeline, text, container);
        this.buildTimelineAddUI(zoneId, container);
        this.buildTimelineTextUI(zoneId, timeline, container);
      }
      hasEverBeenExpanded = true;
    };
    headerDiv.innerText = this.base.translate(kMiscTranslations.editTimeline);
    container.appendChild(headerDiv);
  }
  timelineTextFromSet(set) {
    let text = '';

    // Recursively turn the timeline array into a string.
    const addTimeline = obj => {
      if (obj === undefined) return;
      if (Array.isArray(obj)) {
        for (const objVal of obj) addTimeline(objVal);
      } else if (typeof obj === 'function') {
        // Hack, pass blank data in, as we don't have a real data here.
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const blankData = {};
        try {
          addTimeline(obj(blankData));
        } catch (e) {
          // Do nothing if this fails.
          // Functions are pretty uncommon in built-in timelines.
          // If user functions do funky things, those extra lines will be skipped.
        }
      } else if (typeof obj === 'string') {
        text = `${text}\n${obj}`;
      }
    };
    addTimeline(set.timeline);
    return text;
  }
  buildTimelineListingUI(timeline, timelineText, parent) {
    const header = document.createElement('div');
    header.classList.add('timeline-listing-header');
    header.innerText = this.base.translate(kMiscTranslations.timelineListing);
    parent.appendChild(header);

    // Add timeline text itself
    const scroller = document.createElement('div');
    scroller.classList.add('timeline-scroller');
    parent.appendChild(scroller);
    const timelineContents = document.createElement('pre');
    scroller.classList.add('timeline-scroller-contents');
    scroller.appendChild(timelineContents);
    const translated = TimelineParser.Translate(timeline, timelineText);
    timelineContents.innerText = translated.join('\n');
  }
  buildTimelineAddUI(zoneId, parent) {
    const addId = ['timeline', zoneId.toString(), 'add'];
    const header = document.createElement('div');
    header.classList.add('timeline-add-header');
    header.innerText = this.base.translate(kMiscTranslations.addCustomTimelineEntries);
    parent.appendChild(header);
    const container = document.createElement('div');
    container.classList.add('timeline-add-container');
    parent.appendChild(container);
    const headerTime = document.createElement('div');
    headerTime.innerText = this.base.translate(kMiscTranslations.customEntryTime);
    container.appendChild(headerTime);
    const headerText = document.createElement('div');
    headerText.innerText = this.base.translate(kMiscTranslations.customEntryText);
    container.appendChild(headerText);
    const headerDuration = document.createElement('div');
    headerDuration.innerText = this.base.translate(kMiscTranslations.customEntryDuration);
    container.appendChild(headerDuration);

    // Spacer div in the grid for Remove, which needs no header.
    container.appendChild(document.createElement('div'));

    // Get the current SavedConfigEntry for these saved entries.
    // We will modify `rows` in place and then store it back as needed.
    const defaultRow = {
      time: '',
      text: ''
    };
    const defaultValue = [defaultRow];
    const rowsOrObj = this.base.getJsonOption('raidboss', addId, defaultValue);
    const rows = Array.isArray(rowsOrObj) ? rowsOrObj : defaultValue;
    const storeRows = () => this.base.setJsonOption('raidboss', addId, rows);
    const addRow = obj => {
      const setFunc = () => {
        obj.time = timeInput.value;
        obj.text = textInput.value;
        obj.duration = durationInput.value;
        storeRows();
      };
      const timeInput = document.createElement('input');
      timeInput.type = 'text';
      if (typeof obj.time === 'string') timeInput.value = obj.time;
      timeInput.classList.add('timeline-add-row-time');
      timeInput.onchange = setFunc;
      timeInput.oninput = setFunc;
      container.appendChild(timeInput);
      const textInput = document.createElement('input');
      textInput.type = 'text';
      if (typeof obj.text === 'string') textInput.value = obj.text;
      textInput.classList.add('timeline-add-row-text');
      textInput.onchange = setFunc;
      textInput.oninput = setFunc;
      container.appendChild(textInput);
      const durationInput = document.createElement('input');
      durationInput.type = 'text';
      if (typeof obj.duration === 'string') durationInput.value = obj.duration;
      durationInput.classList.add('timeline-add-row-duration');
      durationInput.onchange = setFunc;
      durationInput.oninput = setFunc;
      container.appendChild(durationInput);
      const remove = document.createElement('button');
      remove.classList.add('timeline-add-row-remove');
      remove.innerText = this.base.translate(kMiscTranslations.customEntryRemove);
      container.appendChild(remove);
      remove.addEventListener('click', () => {
        container.removeChild(timeInput);
        container.removeChild(textInput);
        container.removeChild(durationInput);
        container.removeChild(remove);

        // Update rows in place, as it has been captured by a closure above.
        const idx = rows.indexOf(obj);
        if (idx === -1) {
          console.error(`Failed to remove row`);
          return;
        }
        rows.splice(idx, 1);
        storeRows();
      });
    };
    const addMoreRows = document.createElement('button');
    addMoreRows.classList.add('timeline-add-button');
    addMoreRows.innerText = this.base.translate(kMiscTranslations.addMoreRows);
    addMoreRows.addEventListener('click', () => {
      // No need to call storeRows here.  Blank rows will only get saved
      // if somebody makes other changes.
      const obj = {
        ...defaultRow
      };
      rows.push(obj);
      addRow(obj);
    });
    parent.appendChild(addMoreRows);
    for (const row of rows) {
      if (typeof row !== 'object' || Array.isArray(row)) continue;
      addRow(row);
    }
  }
  buildTimelineTextUI(zoneId, timeline, parent) {
    const container = document.createElement('div');
    container.classList.add('timeline-text-container');
    parent.appendChild(container);
    for (const header of Object.values(kTimelineTableHeaders)) {
      const div = document.createElement('div');
      div.innerText = this.base.translate(header);
      container.appendChild(div);
    }
    const uniqEvents = {};
    for (const event of timeline.events) {
      if (event.name in uniqEvents) continue;
      if (event.name in timeline.ignores) continue;
      // name = original timeline text
      // text = replaced text in current language
      uniqEvents[event.name] = event.text;
    }
    const keys = Object.keys(uniqEvents).sort();
    for (const key of keys) {
      const event = uniqEvents[key];
      if (event === undefined) continue;
      const checkInput = document.createElement('input');
      checkInput.classList.add('timeline-text-enable');
      checkInput.type = 'checkbox';
      container.appendChild(checkInput);

      // Enable/disable here behaves identically to `hideall "key"`, where this text will
      // not be shown, but timeline triggers related to it will still fire.
      const enableId = ['timeline', zoneId.toString(), 'enable', key];
      const defaultValue = true;
      checkInput.checked = this.base.getBooleanOption('raidboss', enableId, defaultValue);
      checkInput.onchange = () => this.base.setOption('raidboss', enableId, checkInput.checked);
      const timelineText = document.createElement('div');
      timelineText.classList.add('timeline-text-text');
      timelineText.innerHTML = event;
      container.appendChild(timelineText);
      const textInput = document.createElement('input');
      textInput.type = 'text';
      textInput.classList.add('timeline-text-edit');
      textInput.placeholder = event;

      // Any changes are tied to the original timeline text (key), but the config ui will
      // display the current language's text with replacements (event) as the placeholder above.
      const textId = ['timeline', zoneId.toString(), 'globalReplace', key];
      textInput.value = this.base.getStringOption('raidboss', textId, '');
      const setFunc = () => this.base.setOption('raidboss', textId, textInput.value);
      textInput.onchange = setFunc;
      textInput.oninput = setFunc;
      container.appendChild(textInput);
    }
  }

  // This duplicates the raidboss function of the same name.
  valueOrFunction(f, data, matches, output) {
    const result = typeof f === 'function' ? f(data, matches, output) : f;
    if (result !== Object(result)) return result;
    if (typeof result !== 'object' || result === null) return result;
    if (result[this.alertsLang] !== undefined) return this.valueOrFunction(result[this.alertsLang], data, matches, output);
    if (result[this.timelineLang] !== undefined) return this.valueOrFunction(result[this.timelineLang], data, matches, output);
    // For partially localized results where this localization doesn't
    // exist, prefer English over nothing.
    return this.valueOrFunction(result['en'], data, matches, output);
  }
  processTrigger(trig, set) {
    // TODO: with some hackiness (e.g. regexes?) we could figure out which
    // output string came from which alert type (alarm, alert, info, tts).
    // See `makeOutput` comments for why this needs a type assertion to be an Output.
    const fakeOutputProxy = new DoNothingFuncProxy(outputStrings => {
      trig.outputStrings = trig.outputStrings || {};
      Object.assign(trig.outputStrings, outputStrings);
    });
    const baseFakeData = {
      me: '',
      job: 'NONE',
      role: 'none',
      party: new PartyTracker(raidboss_options),
      lang: this.base.lang,
      currentHP: 1000,
      options: this.base.configOptions,
      inCombat: true,
      triggerSetConfig: {},
      ShortName: x => x ?? '???',
      StopCombat: () => {/* noop */},
      ParseLocaleFloat: parseFloat,
      CanStun: () => false,
      CanSilence: () => false,
      CanSleep: () => false,
      CanCleanse: () => false,
      CanFeint: () => false,
      CanAddle: () => false,
      parserLang: this.base.lang,
      displayLang: this.base.lang
    };
    const partialFakeDataEntries = [{
      me: 'Tini Poutini',
      job: 'GNB',
      role: 'tank'
    }, {
      me: 'Potato Chippy',
      job: 'WHM',
      role: 'healer'
    }, {
      me: 'Tater Tot',
      job: 'BLM',
      role: 'dps'
    }, {
      me: 'Hash Brown',
      job: 'DRG',
      role: 'dps'
    }, {
      me: 'Aloo Gobi',
      job: 'BLU',
      role: 'dps'
    }];
    const fakeDataEntries = partialFakeDataEntries.map(x => {
      return Object.assign({}, x, baseFakeData);
    });
    const firstData = fakeDataEntries[0];
    if (!firstData) throw new not_reached/* UnreachableCode */.$();
    const kFakeMatches = {
      // TODO: really should convert all triggers to use regexes.js.
      // Mooooost triggers use matches[1] to be a name.
      1: firstData.me,
      sourceId: '41234567',
      source: 'Enemy',
      id: '1234',
      ability: 'Ability',
      targetId: '1234567',
      target: firstData.me,
      flags: '',
      x: '100',
      y: '100',
      z: '0',
      heading: '0',
      npcId: '',
      effect: 'Effect',
      duration: '30',
      code: '00',
      line: '',
      name: 'Name'
    };
    const output = {};
    const outputKeys = ['alarmText', 'alertText', 'infoText', 'tts', 'sound'];
    // Try to determine some sample output?
    // This could get much more complicated if we wanted it to.
    const evalTrigger = (trig, key, data) => {
      try {
        const result = this.valueOrFunction(trig[key], data, kFakeMatches, fakeOutputProxy);
        if (result === null || result === undefined) return false;

        // FIXME: Super hack:
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        const resultStr = result.toString();
        if (resultStr.includes('undefined') || resultStr.includes('NaN')) return false;
        output[key] = resultStr;
        return true;
      } catch (e) {
        // This is all totally bogus.  Many triggers assume fields on data
        // are properly defined when these calls happen, so will throw errors.
        // So just silently ignore.
        return false;
      }
    };

    // Handle 'response' first.
    if (trig.response) {
      const r = trig.response;
      for (const data of fakeDataEntries) {
        try {
          // Can't use ValueOrFunction here as r returns a non-localizable object.
          // FIXME: this hackily replicates some raidboss logic too.
          let response = r;
          while (typeof response === 'function') {
            // TODO: check if this has builtInResponseStr first.
            response = response(data, kFakeMatches, fakeOutputProxy);
          }
          if (!response) continue;
          if (!trig.outputStrings) {
            for (const key of outputKeys) evalTrigger(response, key, data);
          }
          break;
        } catch (e) {
          continue;
        }
      }
    }

    // Only evaluate fields if there are not outputStrings.
    // outputStrings will indicate more clearly what the trigger says.
    if (!trig.outputStrings) {
      for (const key of outputKeys) {
        if (!(key in trig)) continue;
        for (const data of fakeDataEntries) {
          if (evalTrigger(trig, key, data)) break;
        }
      }
    }
    trig.configOutput = output;

    // TODO: this shows the regexes in the display language.
    // Should we show them in the parser language instead?
    const lang = this.base.lang;
    const getRegex = () => {
      const regex = trig.regex;
      if (regex === undefined) return;
      return regexes/* default.parse */.Z.parse(translateRegex(regex, lang, set.timelineReplace));
    };
    const getNetRegex = () => {
      const regex = trig.netRegex;
      if (regex === undefined) return;
      if (regex instanceof RegExp) return regexes/* default.parse */.Z.parse(translateRegex(regex, lang, set.timelineReplace));
      if (trig.type === undefined) return;
      return regexes/* default.parse */.Z.parse((0,netregexes/* buildNetRegexForTrigger */.BW)(trig.type, translateRegexBuildParam(regex, lang, set.timelineReplace).params));
    };
    if (trig.isTimelineTrigger) {
      trig.timelineRegex = getRegex();
    } else {
      trig.triggerRegex = getRegex();
      trig.triggerNetRegex = getNetRegex();
    }
    return trig;
  }
  processRaidbossFiles(files, userOptions) {
    // `files` is map of filename => triggerSet (for trigger files)
    // `map` is a sorted map of shortened zone key => { various fields, triggerSet }
    const triggerFiles = {};
    const timelineFiles = {};
    for (const [filename, triggerSetOrString] of Object.entries(files)) {
      if (typeof triggerSetOrString === 'string') timelineFiles[filename] = triggerSetOrString;else triggerFiles[filename] = triggerSetOrString;
    }
    const map = this.base.processFiles(triggerFiles, userOptions.Triggers);
    let triggerIdx = 0;

    // While walking through triggers, record any previous triggers with the same
    // id so that the ui can disable overriding information.
    const previousTriggerWithId = {};

    // While walking through trigger sets, record any previous trigger sets with the same
    // id so that the ui can show overriding information.
    const previousTriggerSetWithId = {};
    for (const item of Object.values(map)) {
      // TODO: maybe each trigger set needs a zone name, and we should
      // use that instead of the filename???
      const rawTriggers = {
        trigger: [],
        timeline: []
      };
      const triggerSet = item.triggerSet;
      if (triggerSet.triggers) rawTriggers.trigger.push(...triggerSet.triggers);
      if (triggerSet.timelineTriggers) rawTriggers.timeline.push(...triggerSet.timelineTriggers);
      if (!triggerSet.isUserTriggerSet && triggerSet.filename !== undefined) flattenTimeline(triggerSet, triggerSet.filename, timelineFiles);

      // Track if this trigger set overrides any previous trigger set with the same id.
      if (triggerSet.id !== undefined) {
        const previous = previousTriggerSetWithId[triggerSet.id];
        if (previous) previous.triggerSet.overriddenByFile = triggerSet.filename;
        previousTriggerSetWithId[triggerSet.id] = {
          triggerSet: triggerSet,
          filename: triggerSet.filename
        };
      }
      item.triggers = {};
      for (const [key, triggerArr] of Object.entries(rawTriggers)) {
        for (const baseTrig of triggerArr) {
          const trig = baseTrig;
          triggerIdx++;
          if (trig.id === undefined) {
            // Give triggers with no id some "unique" string so that they can
            // still be added to the set and show up in the ui.
            trig.id = `!!NoIdTrigger${triggerIdx}`;
            trig.isMissingId = true;
          }

          // Track if this trigger overrides any previous trigger.
          const previous = previousTriggerWithId[trig.id];
          if (previous) previous.overriddenByFile = triggerSet.filename;
          previousTriggerWithId[trig.id] = trig;
          trig.isTimelineTrigger = key === 'timeline';
          // Also, if a user has two of the same id in the same triggerSet (?!)
          // then only the second trigger will show up.
          item.triggers[trig.id] = this.processTrigger(trig, triggerSet);
        }
      }
    }
    return map;
  }
  buildTriggerOptions(trig, labelDiv) {
    // This shouldn't happen, as all triggers should be processed with a unique id.
    const trigId = trig.id;
    if (trigId === undefined) throw new not_reached/* UnreachableCode */.$();
    const optionKey = kOptionKeys.output;
    const div = document.createElement('div');
    div.classList.add('trigger-options');
    const updateLabel = input => {
      if (input.value === 'hidden' || input.value === 'disabled') labelDiv.classList.add('disabled');else labelDiv.classList.remove('disabled');
    };
    const input = document.createElement('select');
    div.appendChild(input);
    const selectValue = this.base.getOption('raidboss', [kOptionKeys.triggers, trigId, optionKey], 'default');
    for (const [key, opt] of Object.entries(triggerSoundOptions)) {
      // Hide debug only options unless they are selected.
      // Otherwise, it will look weird to pick something like 'Disabled',
      // but then not show it when developer options are turned off.
      if (!this.base.developerOptions && opt.debugOnly && key !== selectValue) continue;
      const elem = document.createElement('option');
      elem.innerHTML = this.base.translate(opt.label);
      elem.value = key;
      elem.selected = key === selectValue;
      input.appendChild(elem);
      updateLabel(input);
      input.onchange = () => {
        updateLabel(input);
        let value = input.value;
        if (value.includes('default')) value = 'default';
        this.base.setOption('raidboss', [kOptionKeys.triggers, trigId, optionKey], input.value);
      };
    }
    return div;
  }
}
const flattenTimeline = (set, filename, files) => {
  // Convert set.timelineFile to set.timeline.
  if (set.timelineFile === undefined) return;
  const lastIndex = Math.max(filename.lastIndexOf('/'), filename.lastIndexOf('\\'));
  // If lastIndex === -1, truncate name to the empty string.
  // if lastIndex > -1, truncate name after the final slash.
  const dir = filename.slice(0, Math.max(0, lastIndex + 1));
  const timelineFile = `${dir}${set.timelineFile}`;
  delete set.timelineFile;
  if (!(timelineFile in files)) {
    console.log(`ERROR: '${filename}' specifies non-existent timeline file '${timelineFile}'.`);
    return;
  }

  // set.timeline is processed recursively.
  set.timeline = [set.timeline, files[timelineFile]];
};

// Raidboss needs to do some extra processing of user files.
const raidboss_config_userFileHandler = (name, files, baseOptions, basePath) => {
  // TODO: Rewrite user_config to be templated on option type so that this function knows
  // what type of options it is using.
  if (!baseOptions.Triggers) return;
  for (const baseTriggerSet of baseOptions.Triggers) {
    const set = baseTriggerSet;

    // Annotate triggers with where they came from.  Note, options is passed in repeatedly
    // as multiple sets of user files add triggers, so only process each file once.
    if (set.isUserTriggerSet) continue;

    // `filename` here is just cosmetic for better debug printing to make it more clear
    // where a trigger or an override is coming from.
    set.filename = `${basePath}${name}`;
    set.isUserTriggerSet = true;
    flattenTimeline(set, name, files);
  }
};
const processPerTriggerAutoConfig = (options, savedConfig) => {
  // raidboss will look up this.options.PerTriggerAutoConfig to find these values.
  const optionName = 'PerTriggerAutoConfig';
  const perTriggerAutoConfig = options[optionName] ??= {};
  if (typeof savedConfig !== 'object' || Array.isArray(savedConfig)) return;
  const triggers = savedConfig[kOptionKeys.triggers];
  if (typeof triggers !== 'object' || Array.isArray(triggers)) return;
  const outputObjs = {};
  const keys = Object.keys(raidboss_config_kTriggerOptions);
  for (const key of keys) {
    const obj = outputObjs[key] = {};
    setOptionsFromOutputValue(key, obj);
  }
  for (const [id, entry] of Object.entries(triggers)) {
    if (typeof entry !== 'object' || Array.isArray(entry)) return;
    const autoConfig = {};
    const output = entry[kOptionKeys.output];
    if (typeof output === 'string') Object.assign(autoConfig, outputObjs[output]);
    const duration = validDurationOrUndefined(entry[kOptionKeys.duration]);
    if (duration) autoConfig[kOptionKeys.duration] = duration;
    const beforeSeconds = validDurationOrUndefined(entry[kOptionKeys.beforeSeconds]);
    if (beforeSeconds) autoConfig[kOptionKeys.beforeSeconds] = beforeSeconds;
    const delayAdjustSeconds = validDelayAdjustOrUndefined(entry[kOptionKeys.delayAdjust]);
    if (delayAdjustSeconds) autoConfig[kOptionKeys.delayAdjust] = delayAdjustSeconds;
    const outputStrings = entry[kOptionKeys.outputStrings];
    // Validate that the SavedConfigEntry is an an object with string values,
    // which is a subset of the OutputStrings type.
    if ((entry => {
      if (typeof entry !== 'object' || Array.isArray(entry)) return false;
      for (const value of Object.values(entry)) {
        if (typeof value !== 'string') return false;
      }
      return true;
    })(outputStrings)) autoConfig[kOptionKeys.outputStrings] = outputStrings;
    if (typeof output === 'string' || duration || outputStrings !== undefined) perTriggerAutoConfig[id] = autoConfig;
  }
};
const processPerTriggerSetAutoConfig = (options, savedConfig) => {
  // raidboss will look up this.options.PerTriggerSetAutoConfig to find these values.
  const optionName = 'PerTriggerSetAutoConfig';
  const perTriggerSetAutoConfig = options[optionName] ??= {};
  if (typeof savedConfig !== 'object' || Array.isArray(savedConfig)) return;
  const triggerSets = savedConfig[kOptionKeys.triggerSets];
  if (typeof triggerSets !== 'object' || Array.isArray(triggerSets)) return;
  const outputObjs = {};
  const keys = Object.keys(raidboss_config_kTriggerOptions);
  for (const key of keys) {
    const obj = outputObjs[key] = {};
    setOptionsFromOutputValue(key, obj);
  }
  for (const [id, entry] of Object.entries(triggerSets)) {
    if (typeof entry !== 'object' || Array.isArray(entry)) return;
    const output = entry[kOptionKeys.output];
    if (typeof output === 'string') perTriggerSetAutoConfig[id] = {
      ...outputObjs[output]
    };
  }
};
const processPerZoneTimelineConfig = (options, savedConfig) => {
  const optionName = 'PerZoneTimelineConfig';
  // SavedConfig uses this key structure:
  // * 'timeline', zoneId (as string), 'enable', text, boolean
  // * 'timeline', zoneId (as string), 'globalReplace', text, string
  // ...and this function transforms it into a `PerZoneTimelineConfig`.

  const perZoneTimelineConfig = options[optionName] ??= {};
  if (typeof savedConfig !== 'object' || Array.isArray(savedConfig)) return;
  const timeline = savedConfig['timeline'];
  if (typeof timeline !== 'object' || Array.isArray(timeline)) return;
  for (const [zoneKey, zoneEntry] of Object.entries(timeline)) {
    const zoneId = parseInt(zoneKey);
    if (!zoneId) continue;
    const timelineConfig = perZoneTimelineConfig[zoneId] ??= {};
    if (typeof zoneEntry !== 'object' || Array.isArray(zoneEntry)) continue;
    const enableEntry = zoneEntry['enable'];
    const replaceEntry = zoneEntry['globalReplace'];
    const addEntry = zoneEntry['add'];
    if (typeof enableEntry === 'object' && !Array.isArray(enableEntry)) {
      for (const [key, value] of Object.entries(enableEntry)) {
        if (typeof value === 'boolean' && !value) (timelineConfig.Ignore ??= []).push(key);
      }
    }
    if (typeof replaceEntry === 'object' && !Array.isArray(replaceEntry)) {
      for (const [key, value] of Object.entries(replaceEntry)) {
        if (typeof value === 'string') (timelineConfig.Rename ??= {})[key] = value;
      }
    }
    if (addEntry !== undefined && typeof addEntry === 'object' && Array.isArray(addEntry)) {
      for (const row of addEntry) {
        if (typeof row !== 'object' || Array.isArray(row)) continue;
        const time = typeof row.time === 'string' ? parseFloat(row.time) : NaN;
        const text = typeof row.text === 'string' ? row.text : '';
        const durationOrNaN = typeof row.duration === 'string' ? parseFloat(row.duration) : NaN;
        const duration = isNaN(durationOrNaN) ? undefined : durationOrNaN;
        if (text.trim() === '' || isNaN(time)) continue;
        (timelineConfig.Add ??= []).push({
          time,
          text,
          duration
        });
      }
    }
  }
};
const processTriggerSetConfig = (options, savedConfig) => {
  // Note: this function is just for providing the raw values for TriggerSetConfig.
  // popuptext handles the loading of triggersets at runtime (maybe this should be merged?)
  // and so it has to do the work of using this info to set defaults, apply overrides, and
  // run setter functions via `processOptions`.
  const optionName = 'TriggerSetConfig';
  const outputTriggerSetConfig = options[optionName] ??= {};
  if (typeof savedConfig !== 'object' || Array.isArray(savedConfig)) return;

  // raidboss > TriggerSetConfig > [triggerSetId] > [key] > [leaf ConfigValue]
  const triggerSetConfig = savedConfig[kOptionKeys.triggerSetConfig];
  if (triggerSetConfig === undefined || typeof triggerSetConfig !== 'object' || Array.isArray(triggerSetConfig)) return;
  for (const [triggerSetId, configDict] of Object.entries(triggerSetConfig)) {
    if (typeof configDict !== 'object' || Array.isArray(configDict)) continue;
    for (const [key, value] of Object.entries(configDict)) {
      if (typeof value !== 'boolean' && typeof value !== 'string' && typeof value !== 'number') continue;
      (outputTriggerSetConfig[triggerSetId] ??= {})[key] = value;
    }
  }
};

// Reused for both top level UI and trigger set config UI.
const defaultAlertOutput = {
  id: 'DefaultAlertOutput',
  name: {
    en: 'Default alert output',
    de: 'Standard Alert Ausgabe',
    fr: 'Alerte par défaut',
    ja: '警告情報出力既定値',
    cn: '默认触发器提示输出模式',
    ko: '기본 알람 출력 방식',
    tc: '默認觸發器提示輸出模式'
  },
  type: 'select',
  options: {
    en: {
      '🆙🔊 Text and Sound': 'textAndSound',
      '🆙💬 Text and TTS': 'ttsAndText',
      '💬 TTS Only': 'ttsOnly',
      '🆙 Text Only': 'textOnly',
      '❌ Disabled': 'disabled'
    },
    de: {
      '🆙🔊 Text und Ton': 'textAndSound',
      '🆙💬 Text und TTS': 'ttsAndText',
      '💬 Nur TTS': 'ttsOnly',
      '🆙 Nur Text': 'textOnly',
      '❌ Deaktiviert': 'disabled'
    },
    fr: {
      '🆙🔊 Texte et son': 'textAndSound',
      '🆙💬 Texte et TTS': 'ttsAndText',
      '💬 TTS seulement': 'ttsOnly',
      '🆙 Texte seulement': 'textOnly',
      '❌ Désactivé': 'disabled'
    },
    ja: {
      '🆙🔊 テキストと音声': 'textAndSound',
      '🆙💬 テキストとTTS': 'ttsAndText',
      '💬 TTSのみ': 'ttsOnly',
      '🆙 テキストのみ': 'textOnly',
      '❌ 無効': 'disabled'
    },
    cn: {
      '🆙🔊 文本显示与提示音': 'textAndSound',
      '🆙💬 文本显示与TTS': 'ttsAndText',
      '💬 只使用TTS': 'ttsOnly',
      '🆙 只使用文本显示': 'textOnly',
      '❌ 禁用': 'disabled'
    },
    ko: {
      '🆙🔊 텍스트와 소리': 'textAndSound',
      '🆙💬 텍스트와 TTS': 'ttsAndText',
      '💬 TTS만': 'ttsOnly',
      '🆙 텍스트만': 'textOnly',
      '❌ 비활성화': 'disabled'
    },
    tc: {
      '🆙🔊 文本顯示與提示音': 'textAndSound',
      '🆙💬 文本顯示與TTS': 'ttsAndText',
      '💬 只使用TTS': 'ttsOnly',
      '🆙 只使用文本顯示': 'textOnly',
      '❌ 禁用': 'disabled'
    }
  },
  default: 'textAndSound',
  setterFunc: setOptionsFromOutputValue
};
const defaultTriggerSetAlertOutput = {
  ...defaultAlertOutput,
  name: {
    en: 'Default trigger set alert output',
    de: 'Standard trigger-Set Alert Ausgabe',
    fr: 'Sortie par défaut des déclencheurs',
    ja: '基本トリガーセットの通知方法',
    cn: '默认触发器集合提示输出模式',
    ko: '기본 트리거 세트 알람 출력 방식',
    tc: '默認觸發器集合提示輸出模式'
  }
};
const raidboss_config_templateOptions = {
  buildExtraUI: (base, container) => {
    const builder = new RaidbossConfigurator(base);
    const userOptions = {
      ...raidboss_options
    };
    user_config/* default.loadUserFiles */.Z.loadUserFiles('raidboss', userOptions, () => {
      builder.buildUI(container, raidboss_manifest/* default */.Z, userOptions);
    }, false);
  },
  processExtraOptions: (baseOptions, savedConfig) => {
    // TODO: Rewrite user_config to be templated on option type so that this function knows
    // what type of options it is using.  Without this, perTriggerAutoConfig is unknown.
    const options = baseOptions;
    processPerTriggerAutoConfig(options, savedConfig);
    processPerTriggerSetAutoConfig(options, savedConfig);
    processPerZoneTimelineConfig(options, savedConfig);
    processTriggerSetConfig(options, savedConfig);
  },
  options: [{
    id: 'Coverage',
    name: {
      en: 'Supported content (latest version)',
      de: 'Unterstützte Inhalte (aktuellste Version)',
      fr: 'Contenu supporté (dernière version)',
      ja: '対応コンテンツ一覧 (最新バージョン)',
      cn: '支持副本一览 (含未发布更新)',
      ko: '지원하는 컨텐츠 (릴리즈버전보다 최신)',
      tc: '支持副本一覽 (含未發布更新)'
    },
    type: 'html',
    html: {
      // TODO: it'd be nice if OverlayPlugin could open links on the system outside of ACT.
      en: makeLink('https://overlayplugin.github.io/cactbot/util/coverage/coverage.html?lang=en'),
      de: makeLink('https://overlayplugin.github.io/cactbot/util/coverage/coverage.html?lang=de'),
      fr: makeLink('https://overlayplugin.github.io/cactbot/util/coverage/coverage.html?lang=fr'),
      ja: makeLink('https://overlayplugin.github.io/cactbot/util/coverage/coverage.html?lang=ja'),
      cn: makeLink('https://overlayplugin.github.io/cactbot/util/coverage/coverage.html?lang=cn'),
      ko: makeLink('https://overlayplugin.github.io/cactbot/util/coverage/coverage.html?lang=ko'),
      tc: makeLink('https://overlayplugin.github.io/cactbot/util/coverage/coverage.html?lang=tc')
    },
    default: makeLink('https://overlayplugin.github.io/cactbot/util/coverage/coverage.html?lang=en')
  }, {
    id: 'Debug',
    name: {
      en: 'Enable debug mode',
      de: 'Aktiviere Debugmodus',
      fr: 'Activer le mode debug',
      ja: 'デバッグモードを有効にする',
      cn: '启用调试模式',
      ko: '디버그 모드 활성화',
      tc: '啟用除錯模式'
    },
    type: 'checkbox',
    debugOnly: true,
    default: false
  }, defaultAlertOutput, {
    id: 'AlertsLanguage',
    name: {
      en: 'Alerts language',
      de: 'Alert Sprache',
      fr: 'Langue des alertes',
      ja: '警告情報の言語',
      cn: '触发器提示语言',
      ko: '알람 언어',
      tc: '觸發器提示語言'
    },
    type: 'select',
    options: {
      en: {
        'Use Display Language': 'default',
        'English (en)': 'en',
        'Chinese (cn)': 'cn',
        'German (de)': 'de',
        'French (fr)': 'fr',
        'Japanese (ja)': 'ja',
        'Korean (ko)': 'ko',
        'Traditional Chinese (tc)': 'tc'
      },
      de: {
        'Anzeigesprache verwenden': 'default',
        'Englisch (en)': 'en',
        'Chinesisch (cn)': 'cn',
        'Deutsch (de)': 'de',
        'Französisch (fr)': 'fr',
        'Japanisch (ja)': 'ja',
        'Koreanisch (ko)': 'ko',
        'Traditionelles Chinesisch (tc)': 'tc'
      },
      fr: {
        'Utiliser la langue d\'affichage': 'default',
        'Anglais (en)': 'en',
        'Chinois (cn)': 'cn',
        'Allemand (de)': 'de',
        'Français (fr)': 'fr',
        'Japonais (ja)': 'ja',
        'Coréen (ko)': 'ko',
        'Chinois traditionnel (tc)': 'tc'
      },
      ja: {
        '表示言語既定値': 'default',
        '英語 (en)': 'en',
        '中国語 (cn)': 'cn',
        'ドイツ語 (de)': 'de',
        'フランス語 (fr)': 'fr',
        '日本語 (ja)': 'ja',
        '韓国語 (ko)': 'ko',
        '繁体字中国語 (tc)': 'tc'
      },
      cn: {
        '使用显示语言': 'default',
        '英文 (en)': 'en',
        '中文 (cn)': 'cn',
        '德文 (de)': 'de',
        '法文 (fr)': 'fr',
        '日文 (ja)': 'ja',
        '韩文 (ko)': 'ko',
        '繁体中文 (tc)': 'tc'
      },
      ko: {
        '주 사용 언어 사용': 'default',
        '영어 (en)': 'en',
        '중국어 (cn)': 'cn',
        '독일어 (de)': 'de',
        '프랑스어 (fr)': 'fr',
        '일본어 (ja)': 'ja',
        '한국어 (ko)': 'ko',
        '중국어 번체 (tc)': 'tc'
      },
      tc: {
        '使用顯示語言': 'default',
        '英文 (en)': 'en',
        '中文 (cn)': 'cn',
        '德文 (de)': 'de',
        '法文 (fr)': 'fr',
        '日文 (ja)': 'ja',
        '韓文 (ko)': 'ko',
        '繁體中文 (tc)': 'tc'
      }
    },
    default: 'default',
    debug: true,
    setterFunc: value => {
      if (typeof value !== 'string') return;
      if (value === 'default') return;
      return value;
    }
  }, {
    id: 'TimelineLanguage',
    name: {
      en: 'Timeline language',
      de: 'Timeline Sprache',
      fr: 'Langue de la timeline',
      ja: 'タイムラインの言語',
      cn: '时间轴文本的语言',
      ko: '타임라인 언어',
      tc: '時間軸文本的語言'
    },
    type: 'select',
    options: {
      en: {
        'Use FFXIV Plugin Language': 'default',
        'English (en)': 'en',
        'Chinese (cn)': 'cn',
        'German (de)': 'de',
        'French (fr)': 'fr',
        'Japanese (ja)': 'ja',
        'Korean (ko)': 'ko'
      },
      de: {
        'Benutze FFXIV Plugin Sprache': 'default',
        'Englisch (en)': 'en',
        'Chinesisch (cn)': 'cn',
        'Deutsch (de)': 'de',
        'Französisch (fr)': 'fr',
        'Japanisch (ja)': 'ja',
        'Koreanisch (ko)': 'ko'
      },
      fr: {
        'Utiliser la langue du Plugin FFXIV': 'default',
        'Anglais (en)': 'en',
        'Chinois (cn)': 'cn',
        'Allemand (de)': 'de',
        'Français (fr)': 'fr',
        'Japonais (ja)': 'ja',
        'Coréen (ko)': 'ko'
      },
      ja: {
        'FFXIV Pluginの言語設定': 'default',
        '英語 (en)': 'en',
        '中国語 (cn)': 'cn',
        'ドイツ語 (de)': 'de',
        'フランス語 (fr)': 'fr',
        '日本語 (ja)': 'ja',
        '韓国語 (ko)': 'ko'
      },
      cn: {
        '使用最终幻想XIV解析插件设置的语言': 'default',
        '英文 (en)': 'en',
        '中文 (cn)': 'cn',
        '德文 (de)': 'de',
        '法文 (fr)': 'fr',
        '日文 (ja)': 'ja',
        '韩文 (ko)': 'ko',
        '繁体中文 (tc)': 'tc'
      },
      ko: {
        'FFXIV Plugin 언어 사용': 'default',
        '영어 (en)': 'en',
        '중국어 (cn)': 'cn',
        '독일어 (de)': 'de',
        '프랑스어 (fr)': 'fr',
        '일본어 (ja)': 'ja',
        '한국어 (ko)': 'ko'
      },
      tc: {
        '使用最終幻想XIV解析插件設置的語言': 'default',
        '英文 (en)': 'en',
        '中文 (cn)': 'cn',
        '德文 (de)': 'de',
        '法文 (fr)': 'fr',
        '日文 (ja)': 'ja',
        '韓文 (ko)': 'ko',
        '繁体中文 (tc)': 'tc'
      }
    },
    default: 'default',
    debug: true,
    setterFunc: value => {
      if (typeof value !== 'string') return;
      if (value === 'default') return;
      return value;
    }
  }, {
    id: 'Skin',
    name: {
      en: 'Raidboss Skin',
      de: 'Raidboss Skin',
      fr: 'Raidboss Skin',
      ja: 'Raidbossのスキン',
      cn: 'Raidboss皮肤',
      ko: 'Raidboss 스킨',
      tc: 'Raidboss皮膚'
    },
    type: 'select',
    options: {
      en: {
        'Default': 'default',
        'lippe': 'lippe',
        'jwidea': 'jwidea',
        'dorgrin': 'dorgrin',
        'cyberpunk': 'cyberpunk',
        'github_dark': 'github_dark',
        'glassmorphism': 'glassmorphism',
        'glossy': 'glossy',
        'neumorphism': 'neumorphism',
        'vivid': 'vivid'
      },
      de: {
        'Default': 'default',
        'lippe': 'lippe',
        'jwidea': 'jwidea',
        'dorgrin': 'dorgrin',
        'cyberpunk': 'cyberpunk',
        'github_dark': 'github_dark',
        'glassmorphism': 'glassmorphism',
        'glossy': 'glossy',
        'neumorphism': 'neumorphism',
        'vivid': 'vivid'
      },
      fr: {
        'Défaut': 'default',
        'lippe': 'lippe',
        'jwidea': 'jwidea',
        'dorgrin': 'dorgrin',
        'cyberpunk': 'cyberpunk',
        'github_dark': 'github_dark',
        'glassmorphism': 'glassmorphism',
        'glossy': 'glossy',
        'neumorphism': 'neumorphism',
        'vivid': 'vivid'
      },
      ja: {
        '初期設定': 'default',
        'lippe': 'lippe',
        'jwidea': 'jwidea',
        'dorgrin': 'dorgrin'
      },
      cn: {
        '默认': 'default',
        'lippe': 'lippe',
        'jwidea': 'jwidea',
        'dorgrin': 'dorgrin',
        'cyberpunk': 'cyberpunk',
        'github_dark': 'github_dark',
        'glassmorphism': 'glassmorphism',
        'glossy': 'glossy',
        'neumorphism': 'neumorphism',
        'vivid': 'vivid'
      },
      ko: {
        '기본': 'default',
        'lippe': 'lippe',
        'jwidea': 'jwidea',
        'dorgrin': 'dorgrin',
        'cyberpunk': 'cyberpunk',
        'github_dark': 'github_dark',
        'glassmorphism': 'glassmorphism',
        'glossy': 'glossy',
        'neumorphism': 'neumorphism',
        'vivid': 'vivid'
      },
      tc: {
        '默認': 'default',
        'lippe': 'lippe',
        'jwidea': 'jwidea',
        'dorgrin': 'dorgrin',
        'cyberpunk': 'cyberpunk',
        'github_dark': 'github_dark',
        'glassmorphism': 'glassmorphism',
        'glossy': 'glossy',
        'neumorphism': 'neumorphism',
        'vivid': 'vivid'
      }
    },
    default: 'default'
  }, {
    id: 'TimelineEnabled',
    name: {
      en: 'Timeline enabled',
      de: 'Timeline aktiviert',
      fr: 'Timeline activée',
      ja: 'タイムラインを有効にする',
      cn: '启用时间轴',
      ko: '타임라인 활성화',
      tc: '啟用時間軸'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'AlertsEnabled',
    name: {
      en: 'Alerts enabled',
      de: 'Alerts aktiviert',
      fr: 'Alertes activées',
      ja: '警告情報を有効にする',
      cn: '启用触发器提示',
      ko: '알람 활성화',
      tc: '啟用觸發器提示'
    },
    type: 'checkbox',
    default: true
  }, {
    id: 'ReverseTimeline',
    name: {
      en: 'Reverse timeline order (bottom-to-top)',
      de: 'Umgekehrte Timeline Reihenfolge (unten-nach-oben)',
      fr: 'Timeline inversée (de bas en haut)',
      ja: 'タイムラインを下から表示',
      cn: '反转时间轴顺序 (从下到上)',
      ko: '타임라인 순서 반전 (아래에서 위)',
      tc: '反轉時間軸順序 (從下到上)'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'DefaultPlayerLabel',
    comment: {
      en: `The default way to specify players in trigger output. By default, it will use
             nicknames/first names. This can be used to print out player jobs instead.
             If you are not in a party or players are out of a party (or there are bugs),
             it will default to the player's nickname if there's no other information.`,
      de: `Die Standardmethode zur Angabe von Spielern in der Triggerausgabe. Standardmäßig werden
             Spitznamen/Vornamen verwendet. Dies kann verwendet werden, um stattdessen Spieler-Jobs darzustellen.
             Wenn Sie nicht in einer Gruppe sind oder Spieler nicht in einer Gruppe sind (oder es Fehler gibt),
             wird standardmäßig der Spitzname des Spielers verwendet, wenn es keine anderen Informationen gibt.`,
      fr: `Méthode par défaut pour afficher les joueurs lors des annonces. Par défaut,
             on utilise surnom/prénom. Vous pouvez afficher les jobs à la place.
             Si vous n'êtes pas dans une équipe ou si des joueurs sont déconnectés (ou s'il y a des bugs),
             on bascule l'affichage sur le surnom s'il n'y a pas d'autres informations.`,
      ja: `トリガーでプレイヤーの名前を表示する方法です。基本であだ名・ファストネームをつかいます。
             あなたがパティに入ってない場合とパティ以外のプレイヤーはあだ名とファストネームが表示されます。`,
      cn: `在触发器输出中指定玩家的默认方式。默认选项为输出昵称/名字。
             使用此选项可将输出方式更改为玩家的职能名或职业名。
             若你不在小队中或玩家离开小队 (或出现错误时), 将默认输出玩家昵称。
             (注：国服对于昵称和全名不做区分)`,
      ko: `트리거 출력에서 플레이어를 언급하는 방법입니다. 기본값으로 닉네임/이름을 사용합니다.
             이 옵션은 이름 대신 플레이어의 직업이나 역할을 출력하고 싶을 때 사용할 수 있습니다.
             당신이 파티에 있지 않거나 파티 밖에 있는 플레이어에 대해서는
             기본값인 플레이어의 닉네임이 사용됩니다.
             (한국 서버에서 '이름 전체' 옵션은 '닉네임'과 같습니다.)`,
      tc: `在觸發器輸出中指定玩家的默認方式。默認選項為輸出暱稱/名字。
             使用此選項可將輸出方式更改為玩家的職能名或職業名。
             若你不在小隊中或玩家離開小隊 (或出現錯誤時), 將默認輸出玩家暱稱。
             (註：繁中服對於暱稱和全名不做區分)`
    },
    name: {
      en: 'Default Player Label',
      de: 'Standard Spieler Label',
      fr: 'Affichage par défaut des joueurs',
      ja: '基本プレイヤーラベル',
      cn: '默认玩家代称',
      ko: '플레이어를 언급하는 기본 방법',
      tc: '默認玩家代稱'
    },
    type: 'select',
    options: {
      en: {
        'Nickname (Tini)': 'nick',
        'Role (Tank)': 'role',
        'Job (WAR)': 'job',
        'Full Job (Warrior)': 'jobFull',
        'Full Name (Tini Poutini)': 'name'
      },
      de: {
        'Spitzname (Tini)': 'nick',
        'Rolle (Tank)': 'role',
        'Job (WAR)': 'job',
        'Job ausgeschrieben (Warrior)': 'jobFull',
        'Kompletter Name (Tini Poutini)': 'name'
      },
      fr: {
        'Surnom (Tini)': 'nick',
        'Rôle (Tank)': 'role',
        'Job (WAR)': 'job',
        'Job complet (Warrior)': 'jobFull',
        'Nom complet (Tini Poutini)': 'name'
      },
      ja: {
        'あだ名 (Tini)': 'nick',
        'ロール (ヒーラー)': 'role',
        '簡略ジョブ (白魔)': 'job',
        'ジョブ (白魔導士)': 'jobFull',
        '名前 (Tini Poutini)': 'name'
      },
      cn: {
        '昵称 (弗雷)': 'nick',
        '职能 (坦克)': 'role',
        '职业简称 (暗骑)': 'job',
        '职业全称 (暗黑骑士)': 'jobFull',
        '全名 (弗雷)': 'name'
      },
      ko: {
        '닉네임 (Tini)': 'nick',
        '역할 (탱커)': 'role',
        '직업 (암기)': 'job',
        '직업 전체 (암흑기사)': 'jobFull',
        '이름 전체 (Tini Poutini)': 'name'
      },
      tc: {
        '暱稱 (弗雷)': 'nick',
        '職能 (坦克)': 'role',
        '職業簡稱 (暗騎)': 'job',
        '職業全稱 (暗黑騎士)': 'jobFull',
        '全名 (弗雷)': 'name'
      }
    },
    default: 'nick'
  }, {
    id: 'ShowTimerBarsAtSeconds',
    name: {
      en: 'Timer bar show window (seconds)',
      de: 'Timer-Bar Anzeigedauer (in Sekunden)',
      fr: 'Fenêtre d\'affichage de la barre de temps (secondes)',
      ja: 'タイムバーに時間表示 (秒)',
      cn: '计时条显示时长 (秒)',
      ko: '타임라인을 표시할 기준 시간 (초 이하)',
      tc: '計時條顯示時長 (秒)'
    },
    type: 'float',
    default: 30
  }, {
    id: 'KeepExpiredTimerBarsForSeconds',
    name: {
      en: 'Keep expired timer bar (seconds)',
      de: 'Behalte abgelaufene Timer-Bar (in Sekunden)',
      fr: 'Garder la barre de temps expirée (secondes)',
      ja: '終了したタイムバーが消えるまでの待ち時間 (秒)',
      cn: '归零计时条滞留时长 (秒)',
      ko: '만료된 타임라인이 사라지기까지의 시간 (초)',
      tc: '歸零計時條滯留時長 (秒)'
    },
    type: 'float',
    default: 0.7
  }, {
    id: 'BarExpiresSoonSeconds',
    name: {
      en: 'Time to recolor timer as expiring soon (seconds)',
      de: 'Zeit bis ein bald auslaufender Timer umgefärbt wird (in Sekunden)',
      fr: 'Recolorisation de la barre de temps avant expiration (secondes)',
      ja: 'タイムバーが終了前に再度色付けの残り時間 (秒)',
      cn: '倒计时小于该值时当前计时条变色 (秒)',
      ko: '타임라인의 색상을 바꿀 기준 시간 (초 이하)',
      tc: '倒數計時小於該值時當前計時條變色 (秒)'
    },
    type: 'integer',
    default: 6
  }, {
    id: 'MaxNumberOfTimerBars',
    name: {
      en: 'Max number of timer bars',
      de: 'Max Anzahl an Timer-Bars',
      fr: 'Nombre max de barres de temps',
      ja: 'タイムバーの最大数',
      cn: '计时条最大数量',
      ko: '표시할 타임라인의 최대 개수',
      tc: '計時條最大數量'
    },
    type: 'integer',
    default: 6
  }, {
    id: 'DisplayAlarmTextForSeconds',
    name: {
      en: 'Alarm text display duration (seconds)',
      de: 'Alarm-Text Anzeigedauer (in Sekunden)',
      fr: 'Durée d\'affichage du texte d\'alarme (secondes)',
      ja: '警報テキスト表示時間の長さ (秒)',
      cn: '致命级提示文本显示时长 (秒)',
      ko: '경고 텍스트를 표시할 시간 (초)',
      tc: '致命級提示文本顯示時長 (秒)'
    },
    type: 'float',
    default: 3
  }, {
    id: 'DisplayAlertTextForSeconds',
    name: {
      en: 'Alert text display duration (seconds)',
      de: 'Alert-Text Anzeigedauer (in Sekunden)',
      fr: 'Durée d\'affichage du texte d\'alerte (secondes)',
      ja: '警告テキスト表示時間の長さ (秒)',
      cn: '严重级提示文本显示时长 (秒)',
      ko: '주의 텍스트를 표시할 시간 (초)',
      tc: '嚴重級提示文本顯示時長 (秒)'
    },
    type: 'float',
    default: 3
  }, {
    id: 'DisplayInfoTextForSeconds',
    name: {
      en: 'Info text display duration (seconds)',
      de: 'Info-Text Anzeigedauer (in Sekunden)',
      fr: 'Durée d\'affichage du texte d\'information (secondes)',
      ja: '情報テキスト表示時間の長さ (秒)',
      cn: '一般级提示文本显示时长 (秒)',
      ko: '안내 텍스트를 표시할 시간 (초)',
      tc: '一般級提示文本顯示時長 (秒)'
    },
    type: 'float',
    default: 3
  }, {
    id: 'AlarmSoundVolume',
    name: {
      en: 'Alarm sound volume (0-1)',
      de: 'Alarm Lautstärke (0-1)',
      fr: 'Volume de l\'alarme (0-1)',
      ja: '警報音声の音量 (0-1)',
      cn: '致命级提示音量 (0-1)',
      ko: '경고 소리 크기 (0-1)',
      tc: '致命級提示音量 (0-1)'
    },
    type: 'float',
    default: 1
  }, {
    id: 'AlertSoundVolume',
    name: {
      en: 'Alert sound volume (0-1)',
      de: 'Alert Lautstärke (0-1)',
      fr: 'Volume de l\'alerte (0-1)',
      ja: '警告音声の音量 (0-1)',
      cn: '严重级提示音量 (0-1)',
      ko: '주의 소리 크기 (0-1)',
      tc: '嚴重級提示音量 (0-1)'
    },
    type: 'float',
    default: 1
  }, {
    id: 'InfoSoundVolume',
    name: {
      en: 'Info sound volume (0-1)',
      de: 'Info Lautstärke (0-1)',
      fr: 'Volume de l\'info (0-1)',
      ja: '情報音声の音量 (0-1)',
      cn: '一般级提示音量 (0-1)',
      ko: '안내 소리 크기 (0-1)',
      tc: '一般級提示音量 (0-1)'
    },
    type: 'float',
    default: 1
  }, {
    id: 'LongSoundVolume',
    name: {
      en: 'Long sound volume (0-1)',
      de: 'Langer Ton Lautstärke (0-1)',
      fr: 'Volume du son long (0-1)',
      ja: '長い音声の音量 (0-1)',
      cn: '长提示音量 (0-1)',
      ko: '긴 소리 크기 (0-1)',
      tc: '長提示音量 (0-1)'
    },
    type: 'float',
    default: 1
  }, {
    id: 'PullSoundVolume',
    name: {
      en: 'Pull sound volume (0-1)',
      de: 'Pull Lautstärke (0-1)',
      fr: 'Volume du son de pull (0-1)',
      ja: 'タゲ取る効果音の音量 (0-1)',
      cn: '开怪提示音量 (0-1)',
      ko: '풀링 소리 크기 (0-1)',
      tc: '開怪提示音量 (0-1)'
    },
    type: 'float',
    default: 1
  }, {
    id: 'RumbleEnabled',
    name: {
      en: 'Enable gamepad rumble for triggers',
      de: 'Gamepad-Vibration für Trigger aktivieren',
      fr: 'Activer la vibration de la manette de jeu pour les triggers',
      ja: 'トリガーによるゲームパッド振動を有効にする',
      cn: '触发器活动时使手柄振动',
      ko: '트리거에 대해 게임패드 진동 활성화',
      tc: '觸發器活動時使手把振動'
    },
    type: 'checkbox',
    default: false
  }, {
    id: 'InfoRumbleDuration',
    name: {
      en: 'Duration (milliseconds) of rumble for info triggers',
      de: 'Zeit (in Millisekunden) der Vibration bei info trigger',
      fr: 'Durée (millisecondes) de la vibration pour les triggers d\'informations',
      ja: '情報トリガーによる振動の長さ (ミリ秒)',
      cn: '一般级触发器振动时长 (毫秒)',
      ko: '안내 트리거의 진동 지속 시간 (밀리초)',
      tc: '一般級觸發器振動時長 (毫秒)'
    },
    type: 'float',
    default: 400
  }, {
    id: 'InfoRumbleWeak',
    name: {
      en: 'Magnitude (0-1) of weak rumble for info triggers',
      de: 'Stärke (0-1) der leichten Vibration bei info trigger',
      fr: 'Intensité de la vibration faible pour les triggers d\'informations (0-1)',
      ja: '情報トリガーによる振動にモーターの弱い方の強さ (0-1)',
      cn: '一般级触发器弱电机振动强度 (0-1)',
      ko: '안내 트리거의 약한 진동 세기 (0-1)',
      tc: '一般級觸發器弱電機振動強度 (0-1)'
    },
    type: 'float',
    default: 0.5
  }, {
    id: 'InfoRumbleStrong',
    name: {
      en: 'Magnitude (0-1) of strong rumble for info triggers',
      de: 'Stärke (0-1) der starken Vibration bei info trigger',
      fr: 'Intensité de la vibration forte pour les triggers d\'informations (0-1)',
      ja: '情報トリガーによる振動にモーターの強い方の強さ (0-1)',
      cn: '一般级触发器强电机振动强度 (0-1)',
      ko: '안내 트리거의 강한 진동 세기 (0-1)',
      tc: '一般級觸發器強電機振動強度 (0-1)'
    },
    type: 'float',
    default: 0
  }, {
    id: 'AlertRumbleDuration',
    name: {
      en: 'Duration (milliseconds) of rumble for alert triggers',
      de: 'Zeit (in Millisekunden) der Vibration bei alert trigger',
      fr: 'Durée (millisecondes) de la vibration pour les triggers d\'alertes',
      ja: '警告トリガーによる振動の長さ (ミリ秒)',
      cn: '严重级触发器振动时长 (毫秒)',
      ko: '주의 트리거의 진동 지속 시간 (밀리초)',
      tc: '嚴重級觸發器振動時長 (毫秒)'
    },
    type: 'float',
    default: 500
  }, {
    id: 'AlertRumbleWeak',
    name: {
      en: 'Magnitude (0-1) of weak rumble for alert triggers',
      de: 'Stärke (0-1) der leichten Vibration bei alert trigger',
      fr: 'Intensité de la vibration faible pour les triggers d\'alertes (0-1)',
      ja: '警告トリガーによる振動にモーターの弱い方の強さ (0-1)',
      cn: '严重级触发器弱电机振动强度 (0-1)',
      ko: '주의 트리거의 약한 진동 세기 (0-1)',
      tc: '嚴重級觸發器弱電機振動強度 (0-1)'
    },
    type: 'float',
    default: 0
  }, {
    id: 'AlertRumbleStrong',
    name: {
      en: 'Magnitude (0-1) of strong rumble for alert triggers',
      de: 'Stärke (0-1) der starken Vibration bei alert trigger',
      fr: 'Intensité de la vibration forte pour les triggers d\'alertes (0-1)',
      ja: '警告トリガーによる振動にモーターの強い方の強さ (0-1)',
      cn: '严重级触发器强电机振动强度 (0-1)',
      ko: '주의 트리거의 강한 진동 세기 (0-1)',
      tc: '嚴重級觸發器強電機振動強度 (0-1)'
    },
    type: 'float',
    default: 0.5
  }, {
    id: 'AlarmRumbleDuration',
    name: {
      en: 'Duration (milliseconds) of rumble for alarm triggers',
      de: 'Zeit (in Millisekunden) der Vibration bei alarm trigger',
      fr: 'Durée (millisecondes) de la vibration pour les triggers d\'alarmes',
      ja: '警報トリガーによる振動の長さ (ミリ秒)',
      cn: '致命级触发器振动时长 (毫秒)',
      ko: '경고 트리거의 진동 지속 시간 (밀리초)',
      tc: '致命級觸發器振動時長 (毫秒)'
    },
    type: 'float',
    default: 750
  }, {
    id: 'AlarmRumbleWeak',
    name: {
      en: 'Magnitude (0-1) of weak rumble for alarm triggers',
      de: 'Stärke (0-1) der leichten Vibration bei alarm trigger',
      fr: 'Intensité de la vibration faible pour les triggers d\'alarmes (0-1)',
      ja: '警報トリガーによる振動にモーターの弱い方の強さ (0-1)',
      cn: '致命级触发器弱电机振动强度 (0-1)',
      ko: '경고 트리거의 약한 진동 세기 (0-1)',
      tc: '致命級觸發器弱電機振動強度 (0-1)'
    },
    type: 'float',
    default: 0.75
  }, {
    id: 'AlarmRumbleStrong',
    name: {
      en: 'Magnitude (0-1) of strong rumble for alarm triggers',
      de: 'Stärke (0-1) der starken Vibration bei alarm trigger',
      fr: 'Intensité de la vibration forte pour les triggers d\'alarmes (0-1)',
      ja: '警報トリガーによる振動にモーターの強い方の強さ (0-1)',
      cn: '致命级触发器强电机振动强度 (0-1)',
      ko: '경고 트리거의 강한 진동 세기 (0-1)',
      tc: '致命級觸發器強電機振動強度 (0-1)'
    },
    type: 'float',
    default: 0.75
  }]
};
user_config/* default.registerOptions */.Z.registerOptions('raidboss', raidboss_config_templateOptions, raidboss_config_userFileHandler);
;// CONCATENATED MODULE: ./ui/config/config.ts








// Load other config files









// Text in the butter bar, to prompt the user to reload after a config change.
const kReloadText = {
  en: 'To apply configuration changes, reload cactbot overlays.',
  de: 'Um die Änderungen zu aktivieren, aktualisiere bitte die Cactbot Overlays.',
  fr: 'Afin d\'appliquer les modifications, il faut recharger l\'overlay Cactbot.',
  ja: '設定を有効にする為、Cactbotオーバーレイを再読み込みしてください',
  cn: '要应用配置更改，请重新加载cactbot悬浮窗。',
  ko: '변경사항을 적용하려면, 오버레이를 새로고침 하십시오.',
  tc: '要應用配置更改，請重新載入cactbot懸浮窗。'
};

// Text in the butter bar reload button.
const kReloadButtonText = {
  en: 'Reload',
  de: 'Aktualisieren',
  fr: 'Recharger',
  ja: '再読み込み',
  cn: '重新加载',
  ko: '새로고침',
  tc: '重新載入'
};

// Text on the directory choosing button.
const kDirectoryChooseButtonText = {
  en: 'Choose Directory',
  de: 'Wähle ein Verzeichnis',
  fr: 'Choix du répertoire',
  ja: 'ディレクトリを選択',
  cn: '选择目录',
  ko: '디렉토리 선택',
  tc: '選擇目錄'
};

// What to show when a directory hasn't been chosen.
const kDirectoryDefaultText = {
  en: '(Default)',
  de: '(Standard)',
  fr: '(Défaut)',
  ja: '(初期設定)',
  cn: '(默认)',
  ko: '(기본)',
  tc: '(默認)'
};

// Translating data folders to a category name.
const kPrefixToCategory = {
  '00-misc': {
    en: 'General Triggers',
    de: 'General Trigger',
    fr: 'Général Triggers',
    ja: '汎用',
    cn: '通用触发器',
    ko: '공용 트리거',
    tc: '通用觸發器'
  },
  '02-arr': {
    en: 'A Realm Reborn (ARR 2.x)',
    de: 'A Realm Reborn (ARR 2.x)',
    fr: 'A Realm Reborn (ARR 2.x)',
    ja: '新生エオルゼア (2.x)',
    cn: '重生之境 (2.x)',
    ko: '신생 에오르제아 (2.x)',
    tc: '新生艾奧傑亞 (2.x)'
  },
  '03-hw': {
    en: 'Heavensward (HW 3.x)',
    de: 'Heavensward (HW 3.x)',
    fr: 'Heavensward (HW 3.x)',
    ja: '蒼天のイシュガルド (3.x)',
    cn: '苍穹之禁城 (3.x)',
    ko: '창천의 이슈가르드 (3.x)',
    tc: '蒼天伊修加爾德 (3.x)'
  },
  '04-sb': {
    en: 'Stormblood (SB 4.x)',
    de: 'Stormblood (SB 4.x)',
    fr: 'Stormblood (SB 4.x)',
    ja: '紅蓮のリベレーター (4.x)',
    cn: '红莲之狂潮 (4.x)',
    ko: '홍련의 해방자 (4.x)',
    tc: '紅蓮解放者 (4.x)'
  },
  '05-shb': {
    en: 'Shadowbringers (ShB 5.x)',
    de: 'Shadowbringers (ShB 5.x)',
    fr: 'Shadowbringers (ShB 5.x)',
    ja: '漆黒のヴィランズ (5.x)',
    cn: '暗影之逆焰 (5.x)',
    ko: '칠흑의 반역자 (5.x)',
    tc: '漆黑反叛者 (5.x)'
  },
  '06-ew': {
    en: 'Endwalker (EW 6.x)',
    de: 'Endwalker (EW 6.x)',
    fr: 'Endwalker (EW 6.x)',
    ja: '暁月のフィナーレ (6.x)',
    cn: '晓月之终途 (6.x)',
    ko: '효월의 종언 (6.x)',
    tc: '曉月之終途 (6.x)'
  },
  '07-dt': {
    en: 'Dawntrail (DT 7.x)',
    de: 'Dawntrail (DT 7.x)',
    fr: 'Dawntrail (DT 7.x)',
    ja: '黄金のレガシー (7.x)',
    cn: '金曦之遗辉 (7.x)',
    ko: '황금의 유산 (7.x)',
    tc: '黃金遺產 (7.x)'
  },
  '99-custom': {
    en: 'Custom Developer Triggers',
    cn: '自定义开发者触发器',
    ko: '커스텀 개발자 트리거'
  },
  'user': {
    en: 'User Triggers',
    de: 'Benutzer Trigger',
    fr: 'Triggers personnalisés',
    ja: 'ユーザートリガー',
    cn: '自定义触发器',
    ko: '커스텀 트리거',
    tc: '自訂觸發器'
  }
};

// Translating data subfolders to encounter type.
const kDirectoryToCategory = {
  alliance: {
    en: 'Alliance Raid',
    de: 'Allianz-Raid',
    fr: 'Raid en Alliance',
    ja: 'アライアンスレイド',
    cn: '团队任务',
    ko: '연합 레이드',
    tc: '團隊任務'
  },
  dungeon: {
    en: 'Dungeon',
    de: 'Dungeon',
    fr: 'Donjon',
    ja: 'ダンジョン',
    cn: '迷宫挑战',
    ko: '던전',
    tc: '迷宮挑戰'
  },
  eureka: {
    en: 'Adventuring Forays',
    de: 'Feldexkursion',
    fr: 'Missions d\'exploration',
    ja: '特殊フィールド探索',
    cn: '特殊场景探索',
    ko: '특수 필드 임무',
    tc: '特殊場景探索'
  },
  raid: {
    en: 'Raid',
    de: 'Raid',
    fr: 'Raid',
    ja: 'レイド',
    cn: '大型任务',
    ko: '레이드',
    tc: '大型任務'
  },
  pvp: {
    en: 'PVP',
    de: 'PvP',
    fr: 'JcJ',
    ja: 'PvP',
    cn: 'PvP',
    ko: 'PvP',
    tc: 'PvP'
  },
  trial: {
    en: 'Trial',
    de: 'Prüfung',
    fr: 'Défi',
    ja: '討伐・討滅戦',
    cn: '讨伐歼灭战',
    ko: '토벌전',
    tc: '討伐殲滅戰'
  },
  ultimate: {
    en: 'Ultimate',
    de: 'Fatale Raids',
    fr: 'Raid fatal',
    ja: '絶シリーズ',
    cn: '绝境战',
    ko: '절 난이도',
    tc: '絕境戰'
  },
  hunts: {
    en: 'Hunts & FATEs',
    de: 'Hohe Jagd & FATEs',
    fr: 'Chasse & Aléas',
    ja: 'モブハント & フェイト',
    cn: '怪物狩猎 & 危命任务',
    ko: '마물 & 돌발',
    tc: '怪物狩獵 & 危命任務'
  },
  map: {
    en: 'Treasure Map',
    de: 'Schatzkarten',
    fr: 'Cartes au trésor',
    ja: '宝箱地図',
    cn: '宝物地图',
    ko: '보물 지도',
    tc: '寶物地圖'
  },
  deepdungeon: {
    en: 'Deep Dungeon',
    de: 'Tiefes Gewölbe',
    fr: 'Donjon sans fond',
    ja: 'ディープダンジョン',
    cn: '深层迷宫',
    ko: '딥 던전',
    tc: '深層迷宮'
  }
};

// TODO: maybe we should also sort all the filenames properly too?
// TODO: use ZoneId to get this
const fileNameToTitle = filename => {
  // Strip directory and extension.
  const file = filename.replace(/^.*\//, '').replace(/\.[jt]s/g, '');
  // Remove non-name characters (probably).
  const name = file.replace(/[_-]/g, ' ');
  // Capitalize the first letter of every word.
  let capitalized = name.replace(/(?:^| )\w/g, c => c.toUpperCase());

  // Fully capitalize acronyms like e4n.
  if (/^\w[0-9]+\w$/.test(capitalized)) capitalized = capitalized.toUpperCase();
  return capitalized;
};
const getOptDefault = (opt, options) => {
  if (typeof opt.default === 'function') return opt.default(options);
  return opt.default;
};
const getOptDisabled = (opt, values) => {
  if (typeof opt.disabled === 'function') return opt.disabled(values);
  return opt.disabled ?? false;
};
const getOptHidden = (opt, values) => {
  if (typeof opt.hidden === 'function') return opt.hidden(values);
  return opt.hidden ?? false;
};

// Returned by the various methods that create each config option.
// `elements` are the [leftDiv, inputDiv] that correspond to that config option.
// Annotations by userFileHandler (processRaidbossFiles) on triggers.
// raidboss_config also combines normal and timeline triggers when building the config ui.
class CactbotConfigurator {
  constructor(configOptions, savedConfig) {
    this.configOptions = configOptions;
    // Predefined, only for ordering purposes.
    this.contents = {
      // top level
      'general': [],
      // things most people care about
      'raidboss': [],
      'jobs': []
    };
    // If the user has set a display language, use that.
    // Otherwise, use the operating system language as a default for the config tool.
    this.lang = this.configOptions.DisplayLanguage ?? this.configOptions.ShortLocale;
    this.savedConfig = savedConfig ?? {};
    this.developerOptions = this.getBooleanOption('general', 'ShowDeveloperOptions', false);
    const templates = user_config/* default.optionTemplates */.Z.optionTemplates;
    for (const [group, template] of Object.entries(templates)) (this.contents[group] ??= []).push(template);
    this.buildButterBar();
    const container = document.getElementById('container');
    if (!container) throw new not_reached/* UnreachableCode */.$();
    this.buildUI(container, this.contents);
  }
  async saveConfigData() {
    // TODO: rate limit this?
    await (0,overlay_plugin_api/* callOverlayHandler */.ae)({
      call: 'cactbotSaveData',
      overlay: 'options',
      data: this.savedConfig
    });
    document.getElementById('butter-margin')?.classList.remove('hidden');
  }

  // Helper translate function.  Takes in an object with language keys
  // and returns a single entry based on available translations.
  translate(textObj) {
    if (textObj === null || typeof textObj !== 'object') throw new Error(`Invalid config: ${JSON.stringify(textObj)}`);
    const t = textObj[this.lang];
    return t ?? textObj['en'];
  }
  getBooleanOption(group, path, defaultValue) {
    const value = this.getOption(group, path, defaultValue);
    if (typeof value === 'boolean') {
      return value;
    } else if (typeof value === 'string') {
      if (value === 'true' || value === 'false') return value === 'true';
    }
    const args = Array.isArray(path) ? path : [path];
    const info = JSON.stringify([group, ...args].join(', '));
    console.error(`Invalid boolean string: ${info}, ${value}`);
    return defaultValue;
  }
  getStringOption(group, path, defaultValue) {
    const value = this.getOption(group, path, defaultValue);
    if (value === '') return defaultValue;
    return value.toString();
  }
  getNumberOption(group, path, defaultValue) {
    const value = this.getOption(group, path, defaultValue);
    if (value === '') {
      return defaultValue;
    } else if (typeof value === 'number') {
      return value;
    } else if (typeof value === 'string') {
      const num = parseFloat(value);
      if (!isNaN(+value) && !isNaN(num)) return num;
    }
    const args = Array.isArray(path) ? path : [path];
    const info = JSON.stringify([group, ...args].join(', '));
    console.error(`Invalid number string: ${info}, ${value.toString()}`);
    return defaultValue;
  }

  // Gets the leaf node for a given option group/path.
  // Returns undefined on failure.
  _getOptionLeafHelper(group, path) {
    let objOrValue = this.savedConfig[group];
    if (objOrValue === undefined) return;
    const args = Array.isArray(path) ? path : [path];
    if (args.length === 0) {
      console.error(`path must have at least one element`);
      return;
    }
    for (const arg of args) {
      if (typeof objOrValue !== 'object' || Array.isArray(objOrValue)) {
        // SavedConfigEntry is arbitrary JSON, but these options should be nothing but objects
        // until leaf node ConfigValue.
        const info = JSON.stringify([group, ...args].join(', '));
        console.error(`Unexpected entry: ${info}}`);
        return;
      }
      const item = objOrValue[arg];
      // If not found, then use default value.
      if (typeof item === 'undefined') return;
      objOrValue = item;
    }
    return objOrValue;
  }

  // Takes a variable length `path` and returns the defaultValue if any key is missing.
  // e.g. (foo, [bar, baz], 5) with {foo: { bar: { baz: 3 } } } will return
  // the value 3.
  getOption(group, path, defaultValue) {
    const objOrValue = this._getOptionLeafHelper(group, path);
    if (objOrValue === undefined) return defaultValue;

    // At the leaf node.
    // Some number options pass in empty string as a default.
    const emptyDefaultNumber = defaultValue === '' && typeof objOrValue === 'number';
    // Also due to inconsistencies in option code, some numbers are stored as unparsed strings.
    const isStringNumber = typeof defaultValue === 'number' && typeof objOrValue === 'string';
    if (!emptyDefaultNumber && !isStringNumber && typeof defaultValue !== typeof objOrValue || typeof objOrValue === 'object') {
      const args = Array.isArray(path) ? path : [path];
      const info = JSON.stringify([group, ...args].join(', '));
      console.error(
      // FIXME:
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      `Unexpected type: ${info}, ${objOrValue.toString()}, ${typeof objOrValue}, ${typeof defaultValue}`);
      return defaultValue;
    }
    return objOrValue;
  }

  // Similar to getOption, but gets an arbitrary SavedConfigEntry json subset instead of
  // guaranteeing a leaf node ConfigValue.
  getJsonOption(group, path, defaultValue) {
    const objOrValue = this._getOptionLeafHelper(group, path);
    return objOrValue ?? defaultValue;
  }

  // Sets an option in the config at a variable level of nesting.
  // e.g. (foo, [bar, baz], 3) will set {foo: { bar: { baz: 3 } } }.
  // e.g. (foo, bar, 4) will set { foo: { bar: 4 } }.
  setOption(group, path, value) {
    // Make callers explicitly use setJsonOption if they want a SavedConfigEntry,
    // as the vast majority of callers only want a ConfigValue value.
    this.setJsonOption(group, path, value);
  }

  // Same as setOption but with a more permissive value.
  setJsonOption(group, path, value) {
    // Set keys and create default {} if it doesn't exist.
    let obj = this.savedConfig[group] ??= {};
    const args = Array.isArray(path) ? path : [path];
    if (args.length === 0) {
      console.error(`path must have at least one element`);
      return;
    }
    const finalArg = args.slice(-1)[0];
    if (finalArg === undefined) throw new not_reached/* UnreachableCode */.$();
    const allButFinalArg = args.slice(0, -1);
    for (const arg of allButFinalArg) {
      if (typeof obj !== 'object' || Array.isArray(obj)) {
        // SavedConfigEntry is arbitrary JSON, but these options should be nothing but objects
        // until leaf node ConfigValue.
        console.error(`Unexpected entry: ${JSON.stringify([group, ...args].join(', '))}`);
        return;
      }
      obj = obj[arg] ??= {};
    }
    if (typeof obj !== 'object' || Array.isArray(obj)) {
      // SavedConfigEntry is arbitrary JSON, but these options should be nothing but objects
      // until leaf node ConfigValue.
      console.error(`Unexpected entry: ${JSON.stringify([group, ...args].join(', '))}`);
      return;
    }
    // Any type of SavedConfigEntry is fine here and we'll validate on loading.
    obj[finalArg] = value;
    void this.saveConfigData();
  }
  buildButterBar() {
    const container = document.getElementById('butter-bar');
    if (!container) throw new not_reached/* UnreachableCode */.$();
    const textDiv = document.createElement('div');
    textDiv.classList.add('reload-text');
    textDiv.innerText = this.translate(kReloadText);
    container.appendChild(textDiv);
    const buttonInput = document.createElement('input');
    buttonInput.classList.add('reload-button');
    buttonInput.type = 'button';
    buttonInput.onclick = () => {
      void (0,overlay_plugin_api/* callOverlayHandler */.ae)({
        call: 'cactbotReloadOverlays'
      });
    };
    buttonInput.value = this.translate(kReloadButtonText);
    container.appendChild(buttonInput);
  }
  buildConfigEntry(derivedOptions, groupDiv, opt, group, path, elements, values) {
    // Note: `derivedOptions` here is the `RaidbossOptions` or `JobsOptions`
    // and may be different than `this.configOptions`.
    let ret = null;
    switch (opt.type) {
      case 'checkbox':
        ret = this.buildCheckbox(derivedOptions, groupDiv, opt, group, path, elements, values);
        break;
      case 'html':
        // no need to pass `elements` or `values`, since there are no onchange() handlers
        ret = this.buildHtml(derivedOptions, groupDiv, opt, group, path);
        break;
      case 'select':
        ret = this.buildSelect(derivedOptions, groupDiv, opt, group, path, elements, values);
        break;
      case 'float':
        ret = this.buildFloat(derivedOptions, groupDiv, opt, group, path, elements, values);
        break;
      case 'integer':
        ret = this.buildInteger(derivedOptions, groupDiv, opt, group, path, elements, values);
        break;
      case 'string':
        ret = this.buildString(derivedOptions, groupDiv, opt, group, path, elements, values);
        break;
      case 'directory':
        ret = this.buildDirectory(derivedOptions, groupDiv, opt, group, path, elements, values);
        break;
      default:
        console.error(`unknown type: ${JSON.stringify(opt)}`);
        break;
    }
    return ret;
  }

  // Top level UI builder, builds everything.
  buildUI(container, contents) {
    for (const group in contents) {
      const content = contents[group];
      if (!content || content.length === 0) continue;

      // For each overlay options template, build a section for it.
      // Then iterate through all of its options and build ui for those options.
      // Give each options template a chance to build special ui.
      const groupDiv = this.buildOverlayGroup(container, group);

      // Track the values of and html elements associated with each config entry,
      // to be used for updating visibility/enablement of config entries.
      // These are reset for each config group.
      const values = {};
      const elements = new Map();
      for (const template of content) {
        const options = template.options ?? [];
        for (const opt of options) {
          if (!this.developerOptions && opt.debugOnly) continue;
          const ret = this.buildConfigEntry(this.configOptions, groupDiv, opt, group, undefined, elements, values);
          if (!ret) continue;
          elements.set(opt, ret.elements);
          values[opt.id] = ret.value;
        }
        const builder = template.buildExtraUI;
        if (builder) builder(this, groupDiv);
      }
      // Once the group is fully created, process visibility settings immediately.
      this.updateVisibility(elements, values);
    }
  }

  // Overlay builder for each overlay type (e.g. raidboss, jobs).
  buildOverlayGroup(container, group) {
    const collapser = document.createElement('div');
    collapser.classList.add('overlay-container');
    container.appendChild(collapser);
    const a = document.createElement('a');
    // TODO: fix me
    /* eslint-disable-next-line deprecation/deprecation */
    a.name = group;
    collapser.appendChild(a);
    const header = document.createElement('div');
    header.classList.add('overlay-header');
    switch (group) {
      case 'general':
        header.innerText = '通用设置';
        break;
      case 'raidboss':
        header.innerText = 'raidboss / 时间轴与触发器提示';
        break;
      case 'jobs':
        header.innerText = 'jobs / 职业、buff、倒计时监控';
        break;
      case 'eureka':
        header.innerText = 'eureka / 优雷卡工具';
        break;
      case 'oopsyraidsy':
        header.innerText = 'oopsyraidsy / 失误死亡报告';
        break;
      case 'radar':
        header.innerText = 'radar / 狩猎目标监控雷达';
        break;
      default:
        header.innerText = group;
        break;
    }
    a.appendChild(header);
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('overlay-options');
    collapser.appendChild(groupDiv);
    a.onclick = () => {
      const parent = a.parentNode;
      if (parent instanceof HTMLElement) parent.classList.toggle('collapsed');
    };
    return groupDiv;
  }
  buildLeftDiv(opt) {
    const div = document.createElement('div');

    // Build Name
    const nameDiv = document.createElement('div');
    nameDiv.innerHTML = this.translate(opt.name);
    nameDiv.classList.add('option-name');
    div.appendChild(nameDiv);

    // Build the trigger comment
    if (opt.comment) {
      const commentDiv = document.createElement('div');
      commentDiv.innerHTML = opt.comment[this.lang] ?? opt.comment?.en ?? '';
      commentDiv.classList.add('comment');
      div.appendChild(commentDiv);
    }
    return div;
  }
  buildCheckbox(options, parent, opt, group, path, elements, values) {
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('option-input-container');
    const input = document.createElement('input');
    inputDiv.appendChild(input);
    input.type = 'checkbox';
    const optDefault = getOptDefault(opt, options);
    const defaultValue = typeof optDefault === 'boolean' ? optDefault : false;
    const optIdPath = [...(path ?? []), opt.id];
    if (typeof optDefault !== 'boolean') console.error(`Invalid non-boolean default: ${group} ${optIdPath.join(' ')}`);
    input.checked = this.getBooleanOption(group, optIdPath, defaultValue);
    input.onchange = () => {
      this.setOption(group, optIdPath, input.checked);
      (values ??= {})[opt.id] = input.checked;
      if (elements !== undefined) this.updateVisibility(elements, values);
    };
    const leftDiv = this.buildLeftDiv(opt);
    parent.appendChild(leftDiv);
    parent.appendChild(inputDiv);
    return {
      elements: [leftDiv, inputDiv],
      value: input.checked
    };
  }
  buildHtml(_options, parent, opt, _group, _path, _elements, _values) {
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('option-input-container');
    if (opt.html) inputDiv.innerHTML = this.translate(opt.html);
    const leftDiv = this.buildLeftDiv(opt);
    parent.appendChild(leftDiv);
    parent.appendChild(inputDiv);
    // Return the elements so they can be tracked for visibility updates,
    // but the value can just be 'html' since it's not an input field that
    // can change or affect other configs.
    return {
      elements: [leftDiv, inputDiv],
      value: 'html'
    };
  }
  buildDirectory(options, parent, opt, group, path, elements, values) {
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('option-input-container');
    inputDiv.classList.add('input-dir-container');
    const input = document.createElement('input');
    input.type = 'submit';
    input.value = this.translate(kDirectoryChooseButtonText);
    input.classList.add('input-dir-submit');
    inputDiv.appendChild(input);
    const label = document.createElement('div');
    label.classList.add('input-dir-label');
    inputDiv.appendChild(label);
    const setLabel = str => {
      if (str) label.innerText = str;else label.innerText = this.translate(kDirectoryDefaultText);
    };
    const optIdPath = [...(path ?? []), opt.id];
    const optDefault = getOptDefault(opt, options);
    setLabel(this.getStringOption(group, optIdPath, optDefault.toString()));
    const leftDiv = this.buildLeftDiv(opt);
    parent.appendChild(leftDiv);
    parent.appendChild(inputDiv);
    let dir = '';
    input.onclick = async () => {
      // Prevent repeated clicks on the folder chooser.
      // callOverlayHandler is not synchronous.
      // FIXME: do we need some clearer UI here (like pretending to be modal?)
      input.disabled = true;
      const prevValue = label.innerText;
      label.innerText = '';
      const result = await (0,overlay_plugin_api/* callOverlayHandler */.ae)({
        call: 'cactbotChooseDirectory'
      });
      input.disabled = false;
      if (result !== undefined) {
        dir = result.data ?? '';
        if (dir !== prevValue) {
          this.setOption(group, optIdPath, dir);
          (values ??= {})[opt.id] = dir;
          if (elements !== undefined) this.updateVisibility(elements, values);
        }
        setLabel(dir);
      } else {
        console.error('cactbotChooseDirectory returned undefined');
      }
    };
    return {
      elements: [leftDiv, inputDiv],
      value: dir
    };
  }
  buildSelect(options, parent, opt, group, path, elements, values) {
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('option-input-container');
    const input = document.createElement('select');
    inputDiv.appendChild(input);
    const optIdPath = [...(path ?? []), opt.id];
    const optDefault = getOptDefault(opt, options);
    const defaultValue = this.getOption(group, optIdPath, optDefault);
    input.onchange = () => {
      this.setOption(group, optIdPath, input.value);
      (values ??= {})[opt.id] = input.value;
      if (elements !== undefined) this.updateVisibility(elements, values);
    };
    if (opt.options) {
      const innerOptions = this.translate(opt.options);
      for (const [key, value] of Object.entries(innerOptions)) {
        const elem = document.createElement('option');
        elem.value = value;
        elem.innerHTML = key;
        if (innerOptions[key] === defaultValue) elem.selected = true;
        input.appendChild(elem);
      }
    }
    const leftDiv = this.buildLeftDiv(opt);
    parent.appendChild(leftDiv);
    parent.appendChild(inputDiv);
    return {
      elements: [leftDiv, inputDiv],
      value: input.value
    };
  }

  // FIXME: this could use some data validation if a user inputs non-floats.
  buildFloat(options, parent, opt, group, path, elements, values) {
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('option-input-container');
    const input = document.createElement('input');
    inputDiv.appendChild(input);
    input.type = 'text';
    input.step = 'any';
    const optDefault = getOptDefault(opt, options);
    input.placeholder = optDefault.toString();
    const optIdPath = [...(path ?? []), opt.id];
    input.value = this.getNumberOption(group, optIdPath, parseFloat(optDefault.toString())).toString();
    const setAndUpdateFunc = () => {
      this.setOption(group, optIdPath, input.value);
      (values ??= {})[opt.id] = input.value;
      if (elements !== undefined) this.updateVisibility(elements, values);
    };
    input.onchange = setAndUpdateFunc;
    input.oninput = setAndUpdateFunc;
    const leftDiv = this.buildLeftDiv(opt);
    parent.appendChild(leftDiv);
    parent.appendChild(inputDiv);
    return {
      elements: [leftDiv, inputDiv],
      value: input.value
    };
  }

  // FIXME: this could use some data validation if a user inputs non-integers.
  buildInteger(options, parent, opt, group, path, elements, values) {
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('option-input-container');
    const input = document.createElement('input');
    inputDiv.appendChild(input);
    input.type = 'text';
    input.step = '1';
    const optDefault = getOptDefault(opt, options);
    input.placeholder = optDefault.toString();
    const optIdPath = [...(path ?? []), opt.id];
    input.value = this.getNumberOption(group, optIdPath, parseInt(optDefault.toString())).toString();
    const setAndUpdateFunc = () => {
      this.setOption(group, optIdPath, input.value);
      (values ??= {})[opt.id] = input.value;
      if (elements !== undefined) this.updateVisibility(elements, values);
    };
    input.onchange = setAndUpdateFunc;
    input.oninput = setAndUpdateFunc;
    const leftDiv = this.buildLeftDiv(opt);
    parent.appendChild(leftDiv);
    parent.appendChild(inputDiv);
    return {
      elements: [leftDiv, inputDiv],
      value: input.value
    };
  }
  buildString(options, parent, opt, group, path, elements, values) {
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('option-input-container');
    const input = document.createElement('input');
    input.classList.add('input-string-field');
    inputDiv.appendChild(input);
    const optIdPath = [...(path ?? []), opt.id];
    input.type = 'text';
    const optDefault = getOptDefault(opt, options);
    input.placeholder = optDefault.toString();
    input.value = this.getStringOption(group, optIdPath, optDefault.toString()).toString();
    const setAndUpdateFunc = () => {
      this.setOption(group, optIdPath, input.value);
      (values ??= {})[opt.id] = input.value;
      if (elements !== undefined) this.updateVisibility(elements, values);
    };
    input.onchange = setAndUpdateFunc;
    input.oninput = setAndUpdateFunc;
    const leftDiv = this.buildLeftDiv(opt);
    parent.appendChild(leftDiv);
    parent.appendChild(inputDiv);
    return {
      elements: [leftDiv, inputDiv],
      value: input.value
    };
  }

  // Called once after each option-group's entries are created, and whenever any is changed.
  // It will reprocess visibility settings for all options in that group.
  updateVisibility(elements, values) {
    for (const [entry, [leftDiv, inputDiv]] of elements.entries()) {
      const isDisabled = getOptDisabled(entry, values);
      const isHidden = getOptHidden(entry, values);
      const inputs = inputDiv.querySelectorAll('input');
      inputs.forEach(input => input.disabled = isDisabled);
      const selects = inputDiv.querySelectorAll('select');
      selects.forEach(select => select.disabled = isDisabled);
      if (isHidden) {
        leftDiv.style.display = 'none';
        inputDiv.style.display = 'none';
      } else {
        leftDiv.style.display = 'grid';
        inputDiv.style.display = 'grid';
      }
    }
  }
  processFiles(files, userTriggerSets) {
    const map = {};
    for (const [filename, triggerSet] of Object.entries(files)) {
      if (!filename.endsWith('.js') && !filename.endsWith('.ts')) continue;
      triggerSet.filename = filename;
      let prefixKey = '00-misc';
      let prefix = kPrefixToCategory['00-misc'];
      for (const [key, value] of Object.entries(kPrefixToCategory)) {
        if (!filename.startsWith(key)) continue;
        prefixKey = key;
        prefix = value;
        break;
      }
      let category = undefined;
      for (const [key, value] of Object.entries(kDirectoryToCategory)) {
        if (!filename.includes(`/${key}/`)) continue;
        category = value;
        break;
      }
      let title = fileNameToTitle(filename);
      let zoneId = undefined;

      // Make assumptions about trigger structure here to try to get the zoneId out.
      if (typeof triggerSet.zoneId === 'number') {
        zoneId = triggerSet.zoneId;
        // Use the translatable zone info name, if possible.
        const zoneInfo = zone_info/* default */.Z[zoneId];
        if (zoneInfo) title = this.translate(zoneInfo.name);
      }
      let zoneLabel = undefined;

      // if a zoneLabel is set, use for the title
      if (triggerSet.zoneLabel) {
        zoneLabel = triggerSet.zoneLabel;
        title = this.translate(zoneLabel);
      }
      const fileKey = filename.replace(/\//g, '-').replace(/.[jt]s$/, '');
      map[fileKey] = {
        filename: filename,
        fileKey: fileKey,
        prefixKey: prefixKey,
        prefix: this.translate(prefix),
        section: this.translate(prefix),
        type: category ? this.translate(category) : undefined,
        title: title,
        triggerSet: triggerSet,
        zoneId: zoneId
      };
    }
    const userMap = {};
    let userFileIdx = 0;
    for (const triggerSet of userTriggerSets || []) {
      // TODO: pass in userTriggerSets as a filename -> triggerSet map as well
      // so we don't need to read this added value.
      if (triggerSet.filename === undefined) throw new Error('UserHandler must add filename');
      const fileKey = `user/${triggerSet.filename}/${userFileIdx++}`;

      // cactbot triggers all use zoneId, but user triggers in the wild
      // may also use zoneRegex or also have errors and not have either.
      let title = '???';
      let zoneId = undefined;
      let zoneLabel = undefined;

      /* eslint-disable-next-line deprecation/deprecation */
      const origZoneRegex = triggerSet.zoneRegex;

      // if a zoneLabel is set, use for the title
      if (triggerSet.zoneLabel) {
        zoneLabel = triggerSet.zoneLabel;
        title = this.translate(zoneLabel);
        if (typeof triggerSet.zoneId === 'number') {
          zoneId = triggerSet.zoneId;
        }
      } else if (typeof triggerSet.zoneId === 'number') {
        zoneId = triggerSet.zoneId;
        // Use the translatable zone info name, if possible.
        const zoneInfo = zone_info/* default */.Z[zoneId];
        if (zoneInfo) title = this.translate(zoneInfo.name);
      } else if (triggerSet.zoneId === null) {
        title = this.translate(kPrefixToCategory['00-misc']);
      } else if (origZoneRegex) {
        // zoneRegex can be a localized object.
        let zoneRegex = origZoneRegex instanceof RegExp ? origZoneRegex : origZoneRegex[this.lang];
        if (typeof zoneRegex === 'string') zoneRegex = regexes/* default.parse */.Z.parse(zoneRegex);
        if (zoneRegex instanceof RegExp) title = `/${zoneRegex.source}/`;
      }
      userMap[fileKey] = {
        filename: triggerSet.filename,
        fileKey: fileKey,
        prefixKey: 'user',
        prefix: this.translate(kPrefixToCategory['user']),
        section: triggerSet.filename,
        title: title,
        type: undefined,
        triggerSet: triggerSet,
        zoneId: zoneId
      };
    }
    const sortedEntries = Object.keys(map).sort((keyA, keyB) => {
      // Sort first by expansion.
      const entryA = map[keyA];
      const entryB = map[keyB];
      // All keys here are valid entries in map.
      if (entryA === undefined || entryB === undefined) throw new not_reached/* UnreachableCode */.$();
      const prefixCompare = entryA.prefixKey.localeCompare(entryB.prefixKey);
      if (prefixCompare !== 0) return prefixCompare;

      // Then sort by contentList.
      const indexA = entryA.zoneId !== undefined ? content_list/* default.indexOf */.Z.indexOf(entryA.zoneId) : -1;
      const indexB = entryB.zoneId !== undefined ? content_list/* default.indexOf */.Z.indexOf(entryB.zoneId) : -1;
      if (indexA === -1 && indexB === -1) {
        // If we don't know, sort by strings.
        return keyA.localeCompare(keyB);
      } else if (indexA === -1) {
        // Sort B first.
        return 1;
      } else if (indexB === -1) {
        // Sort A first.
        return -1;
      }
      // Default: sort by index in contentList.
      return indexA - indexB;
    });

    // Rebuild map with keys in the right order.
    const sortedMap = {};
    for (const key of sortedEntries) {
      const value = map[key];
      if (value === undefined) throw new not_reached/* UnreachableCode */.$();
      sortedMap[key] = value;
    }

    // Tack on user triggers at the end in the order they were eval'd.
    for (const [key, triggerSet] of Object.entries(userMap)) sortedMap[key] = triggerSet;
    return sortedMap;
  }
}
user_config/* default.getUserConfigLocation */.Z.getUserConfigLocation('config', config_options, () => {
  const options = {
    ...config_options
  };
  new CactbotConfigurator(options, user_config/* default.savedConfig */.Z.savedConfig);
});

/***/ }),

/***/ 416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Md": () => (/* binding */ playerTargetFields),
/* harmony export */   "gG": () => (/* binding */ GetShareMistakeText),
/* harmony export */   "gc": () => (/* binding */ GetSoloMistakeText),
/* harmony export */   "hm": () => (/* binding */ kFlagInstantDeath),
/* harmony export */   "np": () => (/* binding */ playerDamageFields)
/* harmony export */ });
/* unused harmony exports kFieldFlags, kFieldDamage, kShiftFlagValues, kAttackFlags, kHealFlags, damageFields, Translate, GetFormattedTime, UnscrambleDamage, IsPlayerId, IsTriggerEnabled */
// Fields for net log ability lines.
const kFieldFlags = 8;
const kFieldDamage = 9;

// If kFieldFlags is any of these values, then consider field 10/11 as 8/9.
// It appears a little bit that flags come in pairs of values, but it's unclear
// what these mean.
const kShiftFlagValues = (/* unused pure expression or super */ null && (['3E', '113', '213', '313']));
const kFlagInstantDeath = '36'; // Always 36 ?
// miss, damage, block, parry, instant death
const kAttackFlags = ['01', '03', '05', '06', kFlagInstantDeath];
const kHealFlags = (/* unused pure expression or super */ null && (['04']));

// TODO: should we include damage != 0 here?
const damageFields = {
  flags: `[^|]*(?:${kAttackFlags.join('|')})(?=\\|)`
};
const playerTargetFields = {
  targetId: '1.......'
};
const playerDamageFields = {
  ...playerTargetFields,
  ...damageFields
};

/* eslint-disable max-len */

/*
Field 7 Flags:
  '0' = meditation, aoe with no targets

  damage low bytes:
    0x01 = dodge
    0x03 = damage
    0x05 = blocked damage
    0x06 = parried damage
    0x?? = instant death

  damage modifiers:
    0x100 = crit damage
    0x200 = direct hit damage
    0x300 = crit direct hit damage

  heal modifiers:
    0x00004 = heal
    0x10004 = crit heal

  Special cases:
    * If flags are 3E, shift 9+10 two over to be 7+8.  (why???)
    * Plenary indulgence has flags=113/213/313 for stacks, shift two as well.

  Damage:
    * Left-extend zeroes to 8 chars, e.g. 2934001 => 02934001, or 1000 => 00001000.
    * Should be interpreted as 4 bytes (8 chars).
    * First two bytes are damage.
    * 00004000 mask implies extra damage (and some weird math):
      bytes = ABCD, where C = 0x40.
      total damage = DA(B-D), as three bytes together interpreted as an integer.
      e.g. 424E400F => 0F 42 (4E - 0F = 3F) => 0F423F => 999999
    * 00001000 mask implies 0 damage, e.g. hallowed.

Examples:
(1) 18216 damage from Grand Cross Alpha (basic damage)
  16:40001333:Neo Exdeath:242B:Grand Cross Alpha:1048638C:Tater Tot:750003:47280000:1C:80242B:0:0:0:0:0:0:0:0:0:0:0:0:36906:41241:5160:5160:880:1000:0.009226365:-7.81128:-1.192093E-07:16043015:17702272:12000:12000:1000:1000:-0.01531982:-19.02808:0:

(2) 82538 damage from Hyperdrive (0x4000 extra damage mask)
  15:40024FBA:Kefka:28E8:Hyperdrive:106C1DBA:Okonomi Yaki:750003:426B4001:1C:28E88000:0:0:0:0:0:0:0:0:0:0:0:0:35811:62464:4560:4560:940:1000:-0.1586061:-5.753153:0:30098906:31559062:12000:12000:1000:1000:0.3508911:0.4425049:2.384186E-07:

(3) 22109 damage from Grand Cross Omega (:3E:0: shift, unknown 0x40000 flag)
  16:40001333:Neo Exdeath:242D:Grand Cross Omega:1048638C:Tater Tot:3E:0:750003:565D0000:1C:80242D:0:0:0:0:0:0:0:0:0:0:41241:41241:5160:5160:670:1000:-0.3251641:6.526299:1.192093E-07:7560944:17702272:12000:12000:1000:1000:0:19:2.384186E-07:

(4) 15732 crit heal from 3 confession stack Plenary Indulgence (:?13:4C3: shift)
  16:10647D2F:Tako Yaki:1D09:Plenary Indulgence:106DD019:Okonomi Yaki:313:4C3:10004:3D74:0:0:0:0:0:0:0:0:0:0:0:0:7124:40265:14400:9192:1000:1000:-10.78815:11.94781:0:11343:40029:19652:16451:1000:1000:6.336648:7.710004:0:

(5) instant death twister
  16:40004D5D:Twintania:26AB:Twister:10573FDC:Tini Poutini:33:0:1C:26AB8000:0:0:0:0:0:0:0:0:0:0:0:0:43985:43985:5760:5760:910:1000:-8.42179:9.49251:-1.192093E-07:57250:57250:0:0:1000:1000:-8.565645:10.20959:0:

(6) zero damage targetless aoe (E0000000 target)
  16:103AAEE4:Potato Chippy:B1:Miasma II:E0000000::0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0::::::::::19400:40287:17649:17633:1000:1000:-0.656189:-3.799561:-5.960464E-08:

*/

/* eslint-enable */

const Translate = (lang, obj) => {
  if (typeof obj !== 'object') return obj;
  return obj[lang] ?? obj['en'];
};
const GetFormattedTime = (baseTime, time) => {
  if (!baseTime) return '';
  const totalSeconds = Math.floor((time - baseTime) / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

// Turns a scrambled string damage field into an integer.
// Since fields are modified in place right now, this does nothing if called
// again with an integer.  This is kind of a hack, sorry.
const UnscrambleDamage = field => {
  if (field === undefined) return 0;
  const len = field.length;
  if (len <= 4) return 0;
  // Get the left two bytes as damage.
  let damage = parseInt(field.slice(0, len - 4), 16);
  // Check for third byte == 0x40.
  if (field[len - 4] === '4') {
    // Wrap in the 4th byte as extra damage.  See notes above.
    const rightDamage = parseInt(field.slice(len - 2, len), 16);
    damage = damage - rightDamage + (rightDamage << 16);
  }
  return damage;
};
const IsPlayerId = id => {
  if (id === undefined) return false;
  const firstChar = id[0];
  return firstChar !== undefined ? firstChar < '4' : false;
};
const IsTriggerEnabled = (options, id) => {
  if (id in options.DisabledTriggers) return false;
  const autoConfig = options.PerTriggerAutoConfig[id];
  if (autoConfig) return autoConfig.enabled;
  return true;
};
const GetSoloMistakeText = ability => {
  const localeText = typeof ability === 'string' ? {
    en: ability
  } : ability;
  return {
    en: `${localeText['en']} (alone)`,
    de: `${localeText['de'] ?? localeText['en']} (allein)`,
    fr: `${localeText['fr'] ?? localeText['en']} (seul(e))`,
    ja: `${localeText['ja'] ?? localeText['en']} (一人)`,
    cn: `${localeText['cn'] ?? localeText['en']} (单吃)`,
    ko: `${localeText['ko'] ?? localeText['en']} (혼자 맞음)`,
    tc: `${localeText['tc'] ?? localeText['en']} (獨自)`
  };
};
const GetShareMistakeText = (ability, numTargets) => {
  const localeText = typeof ability === 'string' ? {
    en: ability
  } : ability;
  return {
    en: `${localeText['en']} (share x${numTargets})`,
    de: `${localeText['de'] ?? localeText['en']} (geteilt mit ${numTargets})`,
    fr: `${localeText['fr'] ?? localeText['en']} (partage x${numTargets})`,
    ja: `${localeText['ja'] ?? localeText['en']} (頭割り: ${numTargets}人)`,
    cn: `${localeText['cn'] ?? localeText['en']} (重叠: ${numTargets}次)`,
    ko: `${localeText['ko'] ?? localeText['en']} (같이 맞음: ${numTargets}명)`,
    tc: `${localeText['tc'] ?? localeText['en']} (分擔: ${numTargets}次)`
  };
};

/***/ }),

/***/ 142:
/***/ (function(module) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') { __g = global; } // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.5' };
	if (typeof __e == 'number') { __e = core; } // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) { throw TypeError(it + ' is not an object!'); }
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document) && _isObject(document.createElement);
	var _domCreate = function (it) {
	  return is ? document.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) { return it; }
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) { return val; }
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) { return val; }
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) { return val; }
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) { try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ } }
	  if ('get' in Attributes || 'set' in Attributes) { throw TypeError('Accessors not supported!'); }
	  if ('value' in Attributes) { O[P] = Attributes.value; }
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _library = false;

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode: _library ? 'pure' : 'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var _functionToString = _shared('native-function-to-string', Function.toString);

	var _redefine = createCommonjsModule(function (module) {
	var SRC = _uid('src');

	var TO_STRING = 'toString';
	var TPL = ('' + _functionToString).split(TO_STRING);

	_core.inspectSource = function (it) {
	  return _functionToString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) { _has(val, 'name') || _hide(val, 'name', key); }
	  if (O[key] === val) { return; }
	  if (isFunction) { _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
	  if (O === _global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    _hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    _hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || _functionToString.call(this);
	});
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') { throw TypeError(it + ' is not a function!'); }
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) { return fn; }
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) { source = name; }
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // extend global
	    if (target) { _redefine(target, key, out, type & $export.U); }
	    // export
	    if (exports[key] != out) { _hide(exports, key, exp); }
	    if (IS_PROTO && expProto[key] != out) { expProto[key] = out; }
	  }
	};
	_global.core = _core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) { throw TypeError("Can't call method on  " + it); }
	  return it;
	};

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) { return TO_STRING ? '' : undefined; }
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var $at = _stringAt(false);
	_export(_export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});

	var codePointAt = _core.String.codePointAt;

	var max = Math.max;
	var min = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	_export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) {
	    var arguments$1 = arguments;
	 // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments$1[i++];
	      if (_toAbsoluteIndex(code, 0x10ffff) !== code) { throw RangeError(code + ' is not a valid code point'); }
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

	var fromCodePoint = _core.String.fromCodePoint;

	// This is a generated file. Do not edit.
	var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
	var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
	var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;

	var unicode = {
		Space_Separator: Space_Separator,
		ID_Start: ID_Start,
		ID_Continue: ID_Continue
	};

	var util = {
	    isSpaceSeparator: function isSpaceSeparator (c) {
	        return typeof c === 'string' && unicode.Space_Separator.test(c)
	    },

	    isIdStartChar: function isIdStartChar (c) {
	        return typeof c === 'string' && (
	            (c >= 'a' && c <= 'z') ||
	        (c >= 'A' && c <= 'Z') ||
	        (c === '$') || (c === '_') ||
	        unicode.ID_Start.test(c)
	        )
	    },

	    isIdContinueChar: function isIdContinueChar (c) {
	        return typeof c === 'string' && (
	            (c >= 'a' && c <= 'z') ||
	        (c >= 'A' && c <= 'Z') ||
	        (c >= '0' && c <= '9') ||
	        (c === '$') || (c === '_') ||
	        (c === '\u200C') || (c === '\u200D') ||
	        unicode.ID_Continue.test(c)
	        )
	    },

	    isDigit: function isDigit (c) {
	        return typeof c === 'string' && /[0-9]/.test(c)
	    },

	    isHexDigit: function isHexDigit (c) {
	        return typeof c === 'string' && /[0-9A-Fa-f]/.test(c)
	    },
	};

	var source;
	var parseState;
	var stack;
	var pos;
	var line;
	var column;
	var token;
	var key;
	var root;

	var parse = function parse (text, reviver) {
	    source = String(text);
	    parseState = 'start';
	    stack = [];
	    pos = 0;
	    line = 1;
	    column = 0;
	    token = undefined;
	    key = undefined;
	    root = undefined;

	    do {
	        token = lex();

	        // This code is unreachable.
	        // if (!parseStates[parseState]) {
	        //     throw invalidParseState()
	        // }

	        parseStates[parseState]();
	    } while (token.type !== 'eof')

	    if (typeof reviver === 'function') {
	        return internalize({'': root}, '', reviver)
	    }

	    return root
	};

	function internalize (holder, name, reviver) {
	    var value = holder[name];
	    if (value != null && typeof value === 'object') {
	        if (Array.isArray(value)) {
	            for (var i = 0; i < value.length; i++) {
	                var key = String(i);
	                var replacement = internalize(value, key, reviver);
	                if (replacement === undefined) {
	                    delete value[key];
	                } else {
	                    Object.defineProperty(value, key, {
	                        value: replacement,
	                        writable: true,
	                        enumerable: true,
	                        configurable: true,
	                    });
	                }
	            }
	        } else {
	            for (var key$1 in value) {
	                var replacement$1 = internalize(value, key$1, reviver);
	                if (replacement$1 === undefined) {
	                    delete value[key$1];
	                } else {
	                    Object.defineProperty(value, key$1, {
	                        value: replacement$1,
	                        writable: true,
	                        enumerable: true,
	                        configurable: true,
	                    });
	                }
	            }
	        }
	    }

	    return reviver.call(holder, name, value)
	}

	var lexState;
	var buffer;
	var doubleQuote;
	var sign;
	var c;

	function lex () {
	    lexState = 'default';
	    buffer = '';
	    doubleQuote = false;
	    sign = 1;

	    for (;;) {
	        c = peek();

	        // This code is unreachable.
	        // if (!lexStates[lexState]) {
	        //     throw invalidLexState(lexState)
	        // }

	        var token = lexStates[lexState]();
	        if (token) {
	            return token
	        }
	    }
	}

	function peek () {
	    if (source[pos]) {
	        return String.fromCodePoint(source.codePointAt(pos))
	    }
	}

	function read () {
	    var c = peek();

	    if (c === '\n') {
	        line++;
	        column = 0;
	    } else if (c) {
	        column += c.length;
	    } else {
	        column++;
	    }

	    if (c) {
	        pos += c.length;
	    }

	    return c
	}

	var lexStates = {
	    default: function default$1 () {
	        switch (c) {
	        case '\t':
	        case '\v':
	        case '\f':
	        case ' ':
	        case '\u00A0':
	        case '\uFEFF':
	        case '\n':
	        case '\r':
	        case '\u2028':
	        case '\u2029':
	            read();
	            return

	        case '/':
	            read();
	            lexState = 'comment';
	            return

	        case undefined:
	            read();
	            return newToken('eof')
	        }

	        if (util.isSpaceSeparator(c)) {
	            read();
	            return
	        }

	        // This code is unreachable.
	        // if (!lexStates[parseState]) {
	        //     throw invalidLexState(parseState)
	        // }

	        return lexStates[parseState]()
	    },

	    comment: function comment () {
	        switch (c) {
	        case '*':
	            read();
	            lexState = 'multiLineComment';
	            return

	        case '/':
	            read();
	            lexState = 'singleLineComment';
	            return
	        }

	        throw invalidChar(read())
	    },

	    multiLineComment: function multiLineComment () {
	        switch (c) {
	        case '*':
	            read();
	            lexState = 'multiLineCommentAsterisk';
	            return

	        case undefined:
	            throw invalidChar(read())
	        }

	        read();
	    },

	    multiLineCommentAsterisk: function multiLineCommentAsterisk () {
	        switch (c) {
	        case '*':
	            read();
	            return

	        case '/':
	            read();
	            lexState = 'default';
	            return

	        case undefined:
	            throw invalidChar(read())
	        }

	        read();
	        lexState = 'multiLineComment';
	    },

	    singleLineComment: function singleLineComment () {
	        switch (c) {
	        case '\n':
	        case '\r':
	        case '\u2028':
	        case '\u2029':
	            read();
	            lexState = 'default';
	            return

	        case undefined:
	            read();
	            return newToken('eof')
	        }

	        read();
	    },

	    value: function value () {
	        switch (c) {
	        case '{':
	        case '[':
	            return newToken('punctuator', read())

	        case 'n':
	            read();
	            literal('ull');
	            return newToken('null', null)

	        case 't':
	            read();
	            literal('rue');
	            return newToken('boolean', true)

	        case 'f':
	            read();
	            literal('alse');
	            return newToken('boolean', false)

	        case '-':
	        case '+':
	            if (read() === '-') {
	                sign = -1;
	            }

	            lexState = 'sign';
	            return

	        case '.':
	            buffer = read();
	            lexState = 'decimalPointLeading';
	            return

	        case '0':
	            buffer = read();
	            lexState = 'zero';
	            return

	        case '1':
	        case '2':
	        case '3':
	        case '4':
	        case '5':
	        case '6':
	        case '7':
	        case '8':
	        case '9':
	            buffer = read();
	            lexState = 'decimalInteger';
	            return

	        case 'I':
	            read();
	            literal('nfinity');
	            return newToken('numeric', Infinity)

	        case 'N':
	            read();
	            literal('aN');
	            return newToken('numeric', NaN)

	        case '"':
	        case "'":
	            doubleQuote = (read() === '"');
	            buffer = '';
	            lexState = 'string';
	            return
	        }

	        throw invalidChar(read())
	    },

	    identifierNameStartEscape: function identifierNameStartEscape () {
	        if (c !== 'u') {
	            throw invalidChar(read())
	        }

	        read();
	        var u = unicodeEscape();
	        switch (u) {
	        case '$':
	        case '_':
	            break

	        default:
	            if (!util.isIdStartChar(u)) {
	                throw invalidIdentifier()
	            }

	            break
	        }

	        buffer += u;
	        lexState = 'identifierName';
	    },

	    identifierName: function identifierName () {
	        switch (c) {
	        case '$':
	        case '_':
	        case '\u200C':
	        case '\u200D':
	            buffer += read();
	            return

	        case '\\':
	            read();
	            lexState = 'identifierNameEscape';
	            return
	        }

	        if (util.isIdContinueChar(c)) {
	            buffer += read();
	            return
	        }

	        return newToken('identifier', buffer)
	    },

	    identifierNameEscape: function identifierNameEscape () {
	        if (c !== 'u') {
	            throw invalidChar(read())
	        }

	        read();
	        var u = unicodeEscape();
	        switch (u) {
	        case '$':
	        case '_':
	        case '\u200C':
	        case '\u200D':
	            break

	        default:
	            if (!util.isIdContinueChar(u)) {
	                throw invalidIdentifier()
	            }

	            break
	        }

	        buffer += u;
	        lexState = 'identifierName';
	    },

	    sign: function sign$1 () {
	        switch (c) {
	        case '.':
	            buffer = read();
	            lexState = 'decimalPointLeading';
	            return

	        case '0':
	            buffer = read();
	            lexState = 'zero';
	            return

	        case '1':
	        case '2':
	        case '3':
	        case '4':
	        case '5':
	        case '6':
	        case '7':
	        case '8':
	        case '9':
	            buffer = read();
	            lexState = 'decimalInteger';
	            return

	        case 'I':
	            read();
	            literal('nfinity');
	            return newToken('numeric', sign * Infinity)

	        case 'N':
	            read();
	            literal('aN');
	            return newToken('numeric', NaN)
	        }

	        throw invalidChar(read())
	    },

	    zero: function zero () {
	        switch (c) {
	        case '.':
	            buffer += read();
	            lexState = 'decimalPoint';
	            return

	        case 'e':
	        case 'E':
	            buffer += read();
	            lexState = 'decimalExponent';
	            return

	        case 'x':
	        case 'X':
	            buffer += read();
	            lexState = 'hexadecimal';
	            return
	        }

	        return newToken('numeric', sign * 0)
	    },

	    decimalInteger: function decimalInteger () {
	        switch (c) {
	        case '.':
	            buffer += read();
	            lexState = 'decimalPoint';
	            return

	        case 'e':
	        case 'E':
	            buffer += read();
	            lexState = 'decimalExponent';
	            return
	        }

	        if (util.isDigit(c)) {
	            buffer += read();
	            return
	        }

	        return newToken('numeric', sign * Number(buffer))
	    },

	    decimalPointLeading: function decimalPointLeading () {
	        if (util.isDigit(c)) {
	            buffer += read();
	            lexState = 'decimalFraction';
	            return
	        }

	        throw invalidChar(read())
	    },

	    decimalPoint: function decimalPoint () {
	        switch (c) {
	        case 'e':
	        case 'E':
	            buffer += read();
	            lexState = 'decimalExponent';
	            return
	        }

	        if (util.isDigit(c)) {
	            buffer += read();
	            lexState = 'decimalFraction';
	            return
	        }

	        return newToken('numeric', sign * Number(buffer))
	    },

	    decimalFraction: function decimalFraction () {
	        switch (c) {
	        case 'e':
	        case 'E':
	            buffer += read();
	            lexState = 'decimalExponent';
	            return
	        }

	        if (util.isDigit(c)) {
	            buffer += read();
	            return
	        }

	        return newToken('numeric', sign * Number(buffer))
	    },

	    decimalExponent: function decimalExponent () {
	        switch (c) {
	        case '+':
	        case '-':
	            buffer += read();
	            lexState = 'decimalExponentSign';
	            return
	        }

	        if (util.isDigit(c)) {
	            buffer += read();
	            lexState = 'decimalExponentInteger';
	            return
	        }

	        throw invalidChar(read())
	    },

	    decimalExponentSign: function decimalExponentSign () {
	        if (util.isDigit(c)) {
	            buffer += read();
	            lexState = 'decimalExponentInteger';
	            return
	        }

	        throw invalidChar(read())
	    },

	    decimalExponentInteger: function decimalExponentInteger () {
	        if (util.isDigit(c)) {
	            buffer += read();
	            return
	        }

	        return newToken('numeric', sign * Number(buffer))
	    },

	    hexadecimal: function hexadecimal () {
	        if (util.isHexDigit(c)) {
	            buffer += read();
	            lexState = 'hexadecimalInteger';
	            return
	        }

	        throw invalidChar(read())
	    },

	    hexadecimalInteger: function hexadecimalInteger () {
	        if (util.isHexDigit(c)) {
	            buffer += read();
	            return
	        }

	        return newToken('numeric', sign * Number(buffer))
	    },

	    string: function string () {
	        switch (c) {
	        case '\\':
	            read();
	            buffer += escape();
	            return

	        case '"':
	            if (doubleQuote) {
	                read();
	                return newToken('string', buffer)
	            }

	            buffer += read();
	            return

	        case "'":
	            if (!doubleQuote) {
	                read();
	                return newToken('string', buffer)
	            }

	            buffer += read();
	            return

	        case '\n':
	        case '\r':
	            throw invalidChar(read())

	        case '\u2028':
	        case '\u2029':
	            separatorChar(c);
	            break

	        case undefined:
	            throw invalidChar(read())
	        }

	        buffer += read();
	    },

	    start: function start () {
	        switch (c) {
	        case '{':
	        case '[':
	            return newToken('punctuator', read())

	        // This code is unreachable since the default lexState handles eof.
	        // case undefined:
	        //     return newToken('eof')
	        }

	        lexState = 'value';
	    },

	    beforePropertyName: function beforePropertyName () {
	        switch (c) {
	        case '$':
	        case '_':
	            buffer = read();
	            lexState = 'identifierName';
	            return

	        case '\\':
	            read();
	            lexState = 'identifierNameStartEscape';
	            return

	        case '}':
	            return newToken('punctuator', read())

	        case '"':
	        case "'":
	            doubleQuote = (read() === '"');
	            lexState = 'string';
	            return
	        }

	        if (util.isIdStartChar(c)) {
	            buffer += read();
	            lexState = 'identifierName';
	            return
	        }

	        throw invalidChar(read())
	    },

	    afterPropertyName: function afterPropertyName () {
	        if (c === ':') {
	            return newToken('punctuator', read())
	        }

	        throw invalidChar(read())
	    },

	    beforePropertyValue: function beforePropertyValue () {
	        lexState = 'value';
	    },

	    afterPropertyValue: function afterPropertyValue () {
	        switch (c) {
	        case ',':
	        case '}':
	            return newToken('punctuator', read())
	        }

	        throw invalidChar(read())
	    },

	    beforeArrayValue: function beforeArrayValue () {
	        if (c === ']') {
	            return newToken('punctuator', read())
	        }

	        lexState = 'value';
	    },

	    afterArrayValue: function afterArrayValue () {
	        switch (c) {
	        case ',':
	        case ']':
	            return newToken('punctuator', read())
	        }

	        throw invalidChar(read())
	    },

	    end: function end () {
	        // This code is unreachable since it's handled by the default lexState.
	        // if (c === undefined) {
	        //     read()
	        //     return newToken('eof')
	        // }

	        throw invalidChar(read())
	    },
	};

	function newToken (type, value) {
	    return {
	        type: type,
	        value: value,
	        line: line,
	        column: column,
	    }
	}

	function literal (s) {
	    for (var i = 0, list = s; i < list.length; i += 1) {
	        var c = list[i];

	        var p = peek();

	        if (p !== c) {
	            throw invalidChar(read())
	        }

	        read();
	    }
	}

	function escape () {
	    var c = peek();
	    switch (c) {
	    case 'b':
	        read();
	        return '\b'

	    case 'f':
	        read();
	        return '\f'

	    case 'n':
	        read();
	        return '\n'

	    case 'r':
	        read();
	        return '\r'

	    case 't':
	        read();
	        return '\t'

	    case 'v':
	        read();
	        return '\v'

	    case '0':
	        read();
	        if (util.isDigit(peek())) {
	            throw invalidChar(read())
	        }

	        return '\0'

	    case 'x':
	        read();
	        return hexEscape()

	    case 'u':
	        read();
	        return unicodeEscape()

	    case '\n':
	    case '\u2028':
	    case '\u2029':
	        read();
	        return ''

	    case '\r':
	        read();
	        if (peek() === '\n') {
	            read();
	        }

	        return ''

	    case '1':
	    case '2':
	    case '3':
	    case '4':
	    case '5':
	    case '6':
	    case '7':
	    case '8':
	    case '9':
	        throw invalidChar(read())

	    case undefined:
	        throw invalidChar(read())
	    }

	    return read()
	}

	function hexEscape () {
	    var buffer = '';
	    var c = peek();

	    if (!util.isHexDigit(c)) {
	        throw invalidChar(read())
	    }

	    buffer += read();

	    c = peek();
	    if (!util.isHexDigit(c)) {
	        throw invalidChar(read())
	    }

	    buffer += read();

	    return String.fromCodePoint(parseInt(buffer, 16))
	}

	function unicodeEscape () {
	    var buffer = '';
	    var count = 4;

	    while (count-- > 0) {
	        var c = peek();
	        if (!util.isHexDigit(c)) {
	            throw invalidChar(read())
	        }

	        buffer += read();
	    }

	    return String.fromCodePoint(parseInt(buffer, 16))
	}

	var parseStates = {
	    start: function start () {
	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        push();
	    },

	    beforePropertyName: function beforePropertyName () {
	        switch (token.type) {
	        case 'identifier':
	        case 'string':
	            key = token.value;
	            parseState = 'afterPropertyName';
	            return

	        case 'punctuator':
	            // This code is unreachable since it's handled by the lexState.
	            // if (token.value !== '}') {
	            //     throw invalidToken()
	            // }

	            pop();
	            return

	        case 'eof':
	            throw invalidEOF()
	        }

	        // This code is unreachable since it's handled by the lexState.
	        // throw invalidToken()
	    },

	    afterPropertyName: function afterPropertyName () {
	        // This code is unreachable since it's handled by the lexState.
	        // if (token.type !== 'punctuator' || token.value !== ':') {
	        //     throw invalidToken()
	        // }

	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        parseState = 'beforePropertyValue';
	    },

	    beforePropertyValue: function beforePropertyValue () {
	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        push();
	    },

	    beforeArrayValue: function beforeArrayValue () {
	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        if (token.type === 'punctuator' && token.value === ']') {
	            pop();
	            return
	        }

	        push();
	    },

	    afterPropertyValue: function afterPropertyValue () {
	        // This code is unreachable since it's handled by the lexState.
	        // if (token.type !== 'punctuator') {
	        //     throw invalidToken()
	        // }

	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        switch (token.value) {
	        case ',':
	            parseState = 'beforePropertyName';
	            return

	        case '}':
	            pop();
	        }

	        // This code is unreachable since it's handled by the lexState.
	        // throw invalidToken()
	    },

	    afterArrayValue: function afterArrayValue () {
	        // This code is unreachable since it's handled by the lexState.
	        // if (token.type !== 'punctuator') {
	        //     throw invalidToken()
	        // }

	        if (token.type === 'eof') {
	            throw invalidEOF()
	        }

	        switch (token.value) {
	        case ',':
	            parseState = 'beforeArrayValue';
	            return

	        case ']':
	            pop();
	        }

	        // This code is unreachable since it's handled by the lexState.
	        // throw invalidToken()
	    },

	    end: function end () {
	        // This code is unreachable since it's handled by the lexState.
	        // if (token.type !== 'eof') {
	        //     throw invalidToken()
	        // }
	    },
	};

	function push () {
	    var value;

	    switch (token.type) {
	    case 'punctuator':
	        switch (token.value) {
	        case '{':
	            value = {};
	            break

	        case '[':
	            value = [];
	            break
	        }

	        break

	    case 'null':
	    case 'boolean':
	    case 'numeric':
	    case 'string':
	        value = token.value;
	        break

	    // This code is unreachable.
	    // default:
	    //     throw invalidToken()
	    }

	    if (root === undefined) {
	        root = value;
	    } else {
	        var parent = stack[stack.length - 1];
	        if (Array.isArray(parent)) {
	            parent.push(value);
	        } else {
	            Object.defineProperty(parent, key, {
	                value: value,
	                writable: true,
	                enumerable: true,
	                configurable: true,
	            });
	        }
	    }

	    if (value !== null && typeof value === 'object') {
	        stack.push(value);

	        if (Array.isArray(value)) {
	            parseState = 'beforeArrayValue';
	        } else {
	            parseState = 'beforePropertyName';
	        }
	    } else {
	        var current = stack[stack.length - 1];
	        if (current == null) {
	            parseState = 'end';
	        } else if (Array.isArray(current)) {
	            parseState = 'afterArrayValue';
	        } else {
	            parseState = 'afterPropertyValue';
	        }
	    }
	}

	function pop () {
	    stack.pop();

	    var current = stack[stack.length - 1];
	    if (current == null) {
	        parseState = 'end';
	    } else if (Array.isArray(current)) {
	        parseState = 'afterArrayValue';
	    } else {
	        parseState = 'afterPropertyValue';
	    }
	}

	// This code is unreachable.
	// function invalidParseState () {
	//     return new Error(`JSON5: invalid parse state '${parseState}'`)
	// }

	// This code is unreachable.
	// function invalidLexState (state) {
	//     return new Error(`JSON5: invalid lex state '${state}'`)
	// }

	function invalidChar (c) {
	    if (c === undefined) {
	        return syntaxError(("JSON5: invalid end of input at " + line + ":" + column))
	    }

	    return syntaxError(("JSON5: invalid character '" + (formatChar(c)) + "' at " + line + ":" + column))
	}

	function invalidEOF () {
	    return syntaxError(("JSON5: invalid end of input at " + line + ":" + column))
	}

	// This code is unreachable.
	// function invalidToken () {
	//     if (token.type === 'eof') {
	//         return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
	//     }

	//     const c = String.fromCodePoint(token.value.codePointAt(0))
	//     return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
	// }

	function invalidIdentifier () {
	    column -= 5;
	    return syntaxError(("JSON5: invalid identifier character at " + line + ":" + column))
	}

	function separatorChar (c) {
	    console.warn(("JSON5: '" + (formatChar(c)) + "' in strings is not valid ECMAScript; consider escaping"));
	}

	function formatChar (c) {
	    var replacements = {
	        "'": "\\'",
	        '"': '\\"',
	        '\\': '\\\\',
	        '\b': '\\b',
	        '\f': '\\f',
	        '\n': '\\n',
	        '\r': '\\r',
	        '\t': '\\t',
	        '\v': '\\v',
	        '\0': '\\0',
	        '\u2028': '\\u2028',
	        '\u2029': '\\u2029',
	    };

	    if (replacements[c]) {
	        return replacements[c]
	    }

	    if (c < ' ') {
	        var hexString = c.charCodeAt(0).toString(16);
	        return '\\x' + ('00' + hexString).substring(hexString.length)
	    }

	    return c
	}

	function syntaxError (message) {
	    var err = new SyntaxError(message);
	    err.lineNumber = line;
	    err.columnNumber = column;
	    return err
	}

	var stringify = function stringify (value, replacer, space) {
	    var stack = [];
	    var indent = '';
	    var propertyList;
	    var replacerFunc;
	    var gap = '';
	    var quote;

	    if (
	        replacer != null &&
	        typeof replacer === 'object' &&
	        !Array.isArray(replacer)
	    ) {
	        space = replacer.space;
	        quote = replacer.quote;
	        replacer = replacer.replacer;
	    }

	    if (typeof replacer === 'function') {
	        replacerFunc = replacer;
	    } else if (Array.isArray(replacer)) {
	        propertyList = [];
	        for (var i = 0, list = replacer; i < list.length; i += 1) {
	            var v = list[i];

	            var item = (void 0);

	            if (typeof v === 'string') {
	                item = v;
	            } else if (
	                typeof v === 'number' ||
	                v instanceof String ||
	                v instanceof Number
	            ) {
	                item = String(v);
	            }

	            if (item !== undefined && propertyList.indexOf(item) < 0) {
	                propertyList.push(item);
	            }
	        }
	    }

	    if (space instanceof Number) {
	        space = Number(space);
	    } else if (space instanceof String) {
	        space = String(space);
	    }

	    if (typeof space === 'number') {
	        if (space > 0) {
	            space = Math.min(10, Math.floor(space));
	            gap = '          '.substr(0, space);
	        }
	    } else if (typeof space === 'string') {
	        gap = space.substr(0, 10);
	    }

	    return serializeProperty('', {'': value})

	    function serializeProperty (key, holder) {
	        var value = holder[key];
	        if (value != null) {
	            if (typeof value.toJSON5 === 'function') {
	                value = value.toJSON5(key);
	            } else if (typeof value.toJSON === 'function') {
	                value = value.toJSON(key);
	            }
	        }

	        if (replacerFunc) {
	            value = replacerFunc.call(holder, key, value);
	        }

	        if (value instanceof Number) {
	            value = Number(value);
	        } else if (value instanceof String) {
	            value = String(value);
	        } else if (value instanceof Boolean) {
	            value = value.valueOf();
	        }

	        switch (value) {
	        case null: return 'null'
	        case true: return 'true'
	        case false: return 'false'
	        }

	        if (typeof value === 'string') {
	            return quoteString(value, false)
	        }

	        if (typeof value === 'number') {
	            return String(value)
	        }

	        if (typeof value === 'object') {
	            return Array.isArray(value) ? serializeArray(value) : serializeObject(value)
	        }

	        return undefined
	    }

	    function quoteString (value) {
	        var quotes = {
	            "'": 0.1,
	            '"': 0.2,
	        };

	        var replacements = {
	            "'": "\\'",
	            '"': '\\"',
	            '\\': '\\\\',
	            '\b': '\\b',
	            '\f': '\\f',
	            '\n': '\\n',
	            '\r': '\\r',
	            '\t': '\\t',
	            '\v': '\\v',
	            '\0': '\\0',
	            '\u2028': '\\u2028',
	            '\u2029': '\\u2029',
	        };

	        var product = '';

	        for (var i = 0; i < value.length; i++) {
	            var c = value[i];
	            switch (c) {
	            case "'":
	            case '"':
	                quotes[c]++;
	                product += c;
	                continue

	            case '\0':
	                if (util.isDigit(value[i + 1])) {
	                    product += '\\x00';
	                    continue
	                }
	            }

	            if (replacements[c]) {
	                product += replacements[c];
	                continue
	            }

	            if (c < ' ') {
	                var hexString = c.charCodeAt(0).toString(16);
	                product += '\\x' + ('00' + hexString).substring(hexString.length);
	                continue
	            }

	            product += c;
	        }

	        var quoteChar = quote || Object.keys(quotes).reduce(function (a, b) { return (quotes[a] < quotes[b]) ? a : b; });

	        product = product.replace(new RegExp(quoteChar, 'g'), replacements[quoteChar]);

	        return quoteChar + product + quoteChar
	    }

	    function serializeObject (value) {
	        if (stack.indexOf(value) >= 0) {
	            throw TypeError('Converting circular structure to JSON5')
	        }

	        stack.push(value);

	        var stepback = indent;
	        indent = indent + gap;

	        var keys = propertyList || Object.keys(value);
	        var partial = [];
	        for (var i = 0, list = keys; i < list.length; i += 1) {
	            var key = list[i];

	            var propertyString = serializeProperty(key, value);
	            if (propertyString !== undefined) {
	                var member = serializeKey(key) + ':';
	                if (gap !== '') {
	                    member += ' ';
	                }
	                member += propertyString;
	                partial.push(member);
	            }
	        }

	        var final;
	        if (partial.length === 0) {
	            final = '{}';
	        } else {
	            var properties;
	            if (gap === '') {
	                properties = partial.join(',');
	                final = '{' + properties + '}';
	            } else {
	                var separator = ',\n' + indent;
	                properties = partial.join(separator);
	                final = '{\n' + indent + properties + ',\n' + stepback + '}';
	            }
	        }

	        stack.pop();
	        indent = stepback;
	        return final
	    }

	    function serializeKey (key) {
	        if (key.length === 0) {
	            return quoteString(key, true)
	        }

	        var firstChar = String.fromCodePoint(key.codePointAt(0));
	        if (!util.isIdStartChar(firstChar)) {
	            return quoteString(key, true)
	        }

	        for (var i = firstChar.length; i < key.length; i++) {
	            if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
	                return quoteString(key, true)
	            }
	        }

	        return key
	    }

	    function serializeArray (value) {
	        if (stack.indexOf(value) >= 0) {
	            throw TypeError('Converting circular structure to JSON5')
	        }

	        stack.push(value);

	        var stepback = indent;
	        indent = indent + gap;

	        var partial = [];
	        for (var i = 0; i < value.length; i++) {
	            var propertyString = serializeProperty(String(i), value);
	            partial.push((propertyString !== undefined) ? propertyString : 'null');
	        }

	        var final;
	        if (partial.length === 0) {
	            final = '[]';
	        } else {
	            if (gap === '') {
	                var properties = partial.join(',');
	                final = '[' + properties + ']';
	            } else {
	                var separator = ',\n' + indent;
	                var properties$1 = partial.join(separator);
	                final = '[\n' + indent + properties$1 + ',\n' + stepback + ']';
	            }
	        }

	        stack.pop();
	        indent = stepback;
	        return final
	    }
	};

	var JSON5 = {
	    parse: parse,
	    stringify: stringify,
	};

	var lib = JSON5;

	var es5 = lib;

	return es5;

})));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			7: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcactbot"] = self["webpackChunkcactbot"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [727,890], () => (__webpack_require__(404)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;