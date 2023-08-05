import {options} from '../api/auth/[...nextauth]/option'
import {getServerSession} from 'next-auth'
import TotalSavingsTable from './totalSavings';

export default async function TotalSavings() {
  const session = await getServerSession(options)

  return <TotalSavingsTable token={session!.accessToken} />
}
