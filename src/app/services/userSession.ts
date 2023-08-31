import { options } from '../api/auth/[...nextauth]/option'
import { getServerSession } from 'next-auth'

const getSession = async () => {
    try {
        const session = await getServerSession( options )
        return session
    } catch (error) {
        return error
    }
};

export default getSession