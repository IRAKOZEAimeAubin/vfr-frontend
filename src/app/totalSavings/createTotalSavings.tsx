'use client'

import {useMutation, useQueryClient} from '@tanstack/react-query'
import {CreateProps} from '../members/createMember'
import axios from '../api/axios/axios'
import {AxiosError} from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import {PiXBold} from 'react-icons/pi'
import { GET_ALL_TOTAL_SAVINGS } from '../services/getTotalSavings';

export default function CreateTotalSavings({token, setToggle}: CreateProps) {
  const month = new Intl.DateTimeFormat('en-EN', {month: 'long'}).format(
    new Date(),
  )

  const queryClient = useQueryClient()
  let toastTotalSavingsID: string

  const {mutate} = useMutation(
    async () =>
      await axios.post(
        `http://localhost:4000${GET_ALL_TOTAL_SAVINGS}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ),
    {
      onError: (err) => {
        if (err instanceof AxiosError)
          toast.error(err?.response?.data.message, {id: toastTotalSavingsID})
      },
      onSuccess: (data) => {
        toast.success(`Total Savings for ${month} created successfully! 🔥`, {
          id: toastTotalSavingsID,
        })
        queryClient.invalidateQueries(['total-savings'])
      },
    },
  )

  const createTotalSavings = async (e: React.FormEvent) => {
    e.preventDefault()
    mutate()
  }

  return (
    <>
      <div className='fixed bg-black/50 w-full h-full z-20 left-0 top-0'>
        <section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg flex flex-col gap-4 dark:bg-gray-900'>
          {/* <PiXBold
            className='text-red-600'
            onClick={(e) => {
              setToggle(false)
            }}
          /> */}
          <h2 className='text-lg'>
            Do you want to create total savings for {month}?
          </h2>
          <h3 className='text-sm bg-vfr/10 p-[2px] rounded text-vfr font-medium'>
            Pressing the create button will create total savings for {month}.
          </h3>
          <button
            onClick={createTotalSavings}
            className='text-white bg-vfr/70 hover:bg-vfr/80 focus:ring-4 focus:ring-vfr/30 font-medium rounded-lg text-sm px-4 py-2 dark:bg-vfr/60 dark:hover:bg-vfr/70 focus:outline-none dark:focus:ring-vfr/80'
          >
            Add Total Savings for {month}
          </button>
        </section>
      </div>
    </>
  )
}
