import {MemberType} from './Member'

export type SavingsType = {
  id: string
  previousSavings: number
  currentSavings: number
  memberId: string
  member: MemberType
  createdAt: string
  updatedAt: string
}
