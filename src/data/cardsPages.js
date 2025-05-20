import PoolVillaSchedule from "../pages/PoolVillaSchedule"
import PoolVillaDetails from "../pages/PoolVillaDetails"
import EscortGirlSchedule from "../pages/EscortGirlSchedule"
import EscortGirlGuides from "../pages/EscortGirlGuides"
import GolfDetails from "../pages/GolfDetails"
import GolfSchedule from "../pages/GolfSchedule"
import NightLifeDetails from "../pages/NightLifeDetails"
import NightlifeSchedule from "../pages/NightLifeSchedule"
import InquiryDetails from "../pages/InquiryDetails"
import InquirySchedule from "../pages/InquirySchedule"

const pagesData = {
    poolvilla: {
        details: PoolVillaDetails,
        schedule: PoolVillaSchedule
    },
    escortgirl: {
        "guide-to-cebu-escort-services": EscortGirlGuides,
        "is-the-philippines-safe-to-visit": EscortGirlSchedule
    },
    golf: {
        details: GolfDetails,
        schedule: GolfSchedule

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