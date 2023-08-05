import axios from '../api/axios/axios'

export const GET_ALL_LOAN_TYPES = '/loan-types'

const getLoanTypes = async (token: string) => {
  try {
    const result = await axios.get(
      `http://localhost:4000${GET_ALL_LOAN_TYPES}/`,
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

export default getLoanTypes
