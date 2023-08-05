import MembersTable from './members/members';
import getSession from './services/userSession'

export default async function Home() {
  const session = await getSession()

  return <MembersTable token={session!.accessToken} />
}
