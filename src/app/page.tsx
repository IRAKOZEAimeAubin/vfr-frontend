import { options } from './api/auth/[...nextauth]/option';
import { getServerSession } from 'next-auth';

export default async function Home () {
  const session = await getServerSession( options );

  return (
    <div className=''>
      <span className='font-semibold'>Good Morning !, {session!.user!.name}</span>
    </div>
  )
}
