'use client'

import {useMutation, useQueryClient} from '@tanstack/react-query'
import {CreateProps} from '../members/createMember'
import axios from '../api/axios/axios'
import {GET_ALL_LOAN_TYPES} from '../services/getLoanTypes'
import {useState} from 'react'
import {AxiosError} from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import { PiXBold } from 'react-icons/pi';

export default function CreateLoanTypes({token, setToggle}: CreateProps) {
  const [typeName, setTypeName] = useState('')
  const [interestRate, setInterestRate] = useState(0)
  const queryClient = useQueryClient()
  let toastLoanTypeID: string

  const {mutate} = useMutation(
    async ({
      typeName,
      interestRate,
    }: {
      typeName: string
      interestRate: number
    }) =>
      await axios.post(
        `http://localhost:4000${GET_ALL_LOAN_TYPES}/`,
        {typeName, interestRate},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ),
    {
      onError: (err) => {
        if (err instanceof AxiosError)
          toast.error(err?.response?.data.message, {id: toastLoanTypeID})
      },
      onSuccess: (data) => {
        toast.success('Loan Type created successfully! 🔥', {
          id: toastLoanTypeID,
        })
        setTypeName('')
        setInterestRate(0)
        queryClient.invalidateQueries(['loan-types'])
      },
    },
  )

  const createLoanType = async (e: React.FormEvent) => {
    e.preventDefault()
    mutate({typeName, interestRate})
  }

  return (
    <>
      <div className='fixed bg-black/50 w-full h-full z-20 left-0 top-0'>
        <section className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-lg px-4'>
          <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
            <div className='flex justify-between'>
              <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
                Add a new member
              </h2>
              <PiXBold
                className='text-red-600'
                onClick={(e) => {
                  setToggle(false)
                }}
              />
            </div>

            <form onSubmit={createLoanType}>
              <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Type Name
                  </label>
                  <input
                    type='text'
                    name='typeName'
                    id='typeName'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-vfr/60 focus:border-vfr/60 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-vfr/50 dark:focus:border-vfr/50'
                    placeholder='Member Name'
                    value={typeName}
                    onChange={(e) => setTypeName(e.target.value)}
                    required
                  />
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Interest Rate
                  </label>
                  <input
                    type='number'
                    name='interestRate'
                    id='interestRate'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-vfr/60 focus:border-vfr/60 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-vfr/50 dark:focus:border-vfr/50'
                    placeholder='Member Name'
                    value={interestRate}
                    onChange={(e) => setInterestRate(+e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                type='submit'
                className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-vfr rounded-lg focus:ring-4 focus:ring-vfr/20 dark:focus:ring-vfr-900 hover:bg-vfr-800'
              >
                Add Loan Type
              </button>
            </form>
          </div>
        </section>
      </div>
      <Toaster />
    </>
  )
}
