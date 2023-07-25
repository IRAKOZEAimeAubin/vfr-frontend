import { options } from './api/auth/[...nextauth]/option';
import { getServerSession } from 'next-auth';

export default async function Home () {
  const session = await getServerSession( options );
  console.log( session )

  return (
    <h1 className='font-semibold'>{session.user.name}</h1>
  )
}
