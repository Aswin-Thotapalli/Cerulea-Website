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

export const extraSolutions: CaseEntry[] = [
  ...agricultureCases,
]

export const extraCaseItems: ExtraCaseItem[] = [
  ...agricultureItems,
]
