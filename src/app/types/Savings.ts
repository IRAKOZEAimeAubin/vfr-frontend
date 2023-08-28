import {MemberType} from './Member'

export interface SavingsType {
  id: string
  previousSavings: number
  currentSavings: number
  memberId: string
  member: MemberType
  createdAt: string
  updatedAt: string
}
