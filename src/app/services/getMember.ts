import axios from '../api/axios/axios'
import {GET_ALL_MEMBERS} from './getMembers'

const getMember = async (token: string, memberId: string) => {
  try {
    const result = await axios.get(
      `http://localhost:4000${GET_ALL_MEMBERS}/${memberId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return result.data
  } catch (error) {
    return error
  }
}

export default getMember
