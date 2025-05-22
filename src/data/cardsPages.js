import PoolVillaSchedule from "../pages/PoolVillaSchedule"
import PoolVillaDetails from "../pages/PoolVillaDetails"
import EscortGirlSafety from "../pages/EscortGirlSafety"
import EscortGirlGuides from "../pages/EscortGirlGuides"
import GolfPackage from "../pages/GolfPackage"
import GolfTips from "../pages/GolfTips"
import NightLifeLearn from "../pages/NightLifeLearn.jsx"
import NightLifeExplore from "../pages/NightLifeExplore.jsx"
import NightLifeBestTime from "../pages/NightLifeBestTime.jsx"


const pagesData = {
    poolvilla: {
        "details": PoolVillaDetails,
        "schedule": PoolVillaSchedule
    },
    escortgirl: {
        "guide-to-cebu-escort-services": EscortGirlGuides,
        "is-the-philippines-safe-to-visit": EscortGirlSafety
    },
    golf: {
        "cebu-emperor-golf-package-details-schedule": GolfPackage,
        "cebu-golf-club-guide-and-tips": GolfTips
    },
    nightlife: {
        "best-time-for-cebu-nightlife": NightLifeBestTime,
        "learn-filipino": NightLifeLearn,
        "exploring-filipino-nightlife-ladyboys" : NightLifeExplore
    }
}

export default pagesData