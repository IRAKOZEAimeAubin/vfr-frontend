import {User} from './Users'

export interface TotalSavings {
  id: string
  amount: number
  comment: string
  approved: boolean
  createdAt: string
  updatedAt: string
  createdBy: User
  approvedBy: User
}
