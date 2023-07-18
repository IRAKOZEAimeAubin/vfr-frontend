import { options } from './api/auth/[...nextauth]/option';
import { getServerSession } from 'next-auth';

export default async function Home () {
  const session = await getServerSession( options );

  return (
    <>
      {session ? (
        <h1>Hello, VFR!</h1>
      ) : (
          <h1>You shall not pass...</h1>
      )}
    </>
  )
}
