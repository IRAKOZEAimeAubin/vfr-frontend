import {User} from './Users'

export interface MemberType {
  regNumber: string
  name: string
  phone: string
  department: string
  monthlyPledge: number
  totalPledge: number
  active: boolean
  createdBy: User
}
