import {User} from 'next-auth'

export interface LoanTypes {
  loanId: string
  typeName: string
  interestRate: number
  createdAt: string
  updatedAt: string
  createdBy: User
}
