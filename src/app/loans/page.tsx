import {options} from '../api/auth/[...nextauth]/option'
import {getServerSession} from 'next-auth'

export default async function Loans() {
  const session = await getServerSession(options)

  return (
    <div className=''>
      <span className='font-semibold'>
        Loans
      </span>
    </div>
  )
}
