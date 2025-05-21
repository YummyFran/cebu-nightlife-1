import PoolVillaSchedule from "../pages/PoolVillaSchedule"
import PoolVillaDetails from "../pages/PoolVillaDetails"
import EscortGirlSafety from "../pages/EscortGirlSafety"
import EscortGirlGuides from "../pages/EscortGirlGuides"
import GolfPackage from "../pages/GolfPackage"
import GolfTips from "../pages/GolfTips"
import NightLifeDetails from "../pages/NightLifeDetails"
import NightlifeSchedule from "../pages/NightLifeSchedule"
import InquiryDetails from "../pages/InquiryDetails"
import InquirySchedule from "../pages/InquirySchedule"

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
        details: NightLifeDetails, 
        schedule: NightlifeSchedule

    },
    inquiry: {
        details: InquiryDetails,
        schedule: InquirySchedule

    }
}

export default pagesData