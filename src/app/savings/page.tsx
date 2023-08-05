import {options} from '../api/auth/[...nextauth]/option'
import {getServerSession} from 'next-auth'
import SavingsTable from './savings'

export default async function Savings() {
  const session = await getServerSession(options)

  return <SavingsTable token={session!.accessToken} />
}
