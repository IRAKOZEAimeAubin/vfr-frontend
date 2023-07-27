import Members from './members/members';
import getSession from './services/userSession';

export default async function Home () {
  const session=await getSession()

  return (
    <Members token={session!.accessToken} />
  )
}
