import {options} from '../api/auth/[...nextauth]/option'
import {getServerSession} from 'next-auth'

export default async function Savings() {
  const session = await getServerSession(options)

  return (
    <div className=''>
      <span className='font-semibold'>Savings</span>
    </div>
  )
}
