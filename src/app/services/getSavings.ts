import axios from '../api/axios/axios'

export const GET_ALL_SAVINGS = '/savings'

const getSavings = async (token: string) => {
  try {
    const result = await axios.get(`http://localhost:4000${GET_ALL_SAVINGS}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return result.data
  } catch (error) {
    return error
  }
}

export default getSavings