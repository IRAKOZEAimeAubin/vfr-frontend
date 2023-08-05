import {options} from '../api/auth/[...nextauth]/option'
import {getServerSession} from 'next-auth'
import LoanTypesTable from './loanTypes';

export default async function LoanTypes() {
  const session = await getServerSession(options)

  return <LoanTypesTable token={session!.accessToken} />
}
