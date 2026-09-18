// Aggregates the industry-specific bespoke use-case pages (authored in
// const/usecases/<industry-slug>.ts) into two arrays:
//   extraSolutions  -> full CaseEntry pages, concatenated into `solutions`
//                      in soutations.ts (drives /solutions/use-case/[slug]).
//   extraCaseItems  -> directory rows for the "Browse by Use Case" tab on
//                      /industries, each tagged with its industry.
import type { CaseEntry } from "@/types/case"
import type { SolutionItem } from "./solutionsRoot"

export type ExtraCaseItem = Omit<SolutionItem, "tone">

import { agricultureCases, agricultureItems } from "./usecases/agriculture-food-tech"
import { artCreatorEconomyCases, artCreatorEconomyItems } from "./usecases/art-creator-economy"
import { automotiveManufacturingCases, automotiveManufacturingItems } from "./usecases/automotive-manufacturing"
import { aviationAerospaceCases, aviationAerospaceItems } from "./usecases/aviation-aerospace"
import { cybersecurityCases, cybersecurityItems } from "./usecases/cybersecurity"
import { educationAcademiaCases, educationAcademiaItems } from "./usecases/education-academia"
import { energyUtilitiesCases, energyUtilitiesItems } from "./usecases/energy-utilities"
import { enterpriseItSaasCases, enterpriseItSaasItems } from "./usecases/enterprise-it-saas"
import { financialServicesBankingCases, financialServicesBankingItems } from "./usecases/financial-services-banking"
import { gamingEsportsCases, gamingEsportsItems } from "./usecases/gaming-esports"
import { governmentPublicSectorCases, governmentPublicSectorItems } from "./usecases/government-public-sector"
import { healthcareLifeSciencesCases, healthcareLifeSciencesItems } from "./usecases/healthcare-life-sciences"
import { insuranceCases, insuranceItems } from "./usecases/insurance"
import { legalComplianceCases, legalComplianceItems } from "./usecases/legal-compliance"
import { mediaEntertainmentCases, mediaEntertainmentItems } from "./usecases/media-entertainment"
import { miningHeavyIndustryCases, miningHeavyIndustryItems } from "./usecases/mining-heavy-industry"
import { philanthropyNonProfitCases, philanthropyNonProfitItems } from "./usecases/philanthropy-non-profit"
import { realEstateProptechCases, realEstateProptechItems } from "./usecases/real-estate-proptech"
import { retailConsumerGoodsCases, retailConsumerGoodsItems } from "./usecases/retail-consumer-goods"
import { sportsFanEngagementCases, sportsFanEngagementItems } from "./usecases/sports-fan-engagement"
import { supplyChainLogisticsCases, supplyChainLogisticsItems } from "./usecases/supply-chain-logistics"
import { telecommunicationsCases, telecommunicationsItems } from "./usecases/telecommunications"
import { travelHospitalityCases, travelHospitalityItems } from "./usecases/travel-hospitality"

export const extraSolutions: CaseEntry[] = [
  ...agricultureCases,
  ...artCreatorEconomyCases,
  ...automotiveManufacturingCases,
  ...aviationAerospaceCases,
  ...cybersecurityCases,
  ...educationAcademiaCases,
  ...energyUtilitiesCases,
  ...enterpriseItSaasCases,
  ...financialServicesBankingCases,
  ...gamingEsportsCases,
  ...governmentPublicSectorCases,
  ...healthcareLifeSciencesCases,
  ...insuranceCases,
  ...legalComplianceCases,
  ...mediaEntertainmentCases,
  ...miningHeavyIndustryCases,
  ...philanthropyNonProfitCases,
  ...realEstateProptechCases,
  ...retailConsumerGoodsCases,
  ...sportsFanEngagementCases,
  ...supplyChainLogisticsCases,
  ...telecommunicationsCases,
  ...travelHospitalityCases,
]

export const extraCaseItems: ExtraCaseItem[] = [
  ...agricultureItems,
  ...artCreatorEconomyItems,
  ...automotiveManufacturingItems,
  ...aviationAerospaceItems,
  ...cybersecurityItems,
  ...educationAcademiaItems,
  ...energyUtilitiesItems,
  ...enterpriseItSaasItems,
  ...financialServicesBankingItems,
  ...gamingEsportsItems,
  ...governmentPublicSectorItems,
  ...healthcareLifeSciencesItems,
  ...insuranceItems,
  ...legalComplianceItems,
  ...mediaEntertainmentItems,
  ...miningHeavyIndustryItems,
  ...philanthropyNonProfitItems,
  ...realEstateProptechItems,
  ...retailConsumerGoodsItems,
  ...sportsFanEngagementItems,
  ...supplyChainLogisticsItems,
  ...telecommunicationsItems,
  ...travelHospitalityItems,
]
