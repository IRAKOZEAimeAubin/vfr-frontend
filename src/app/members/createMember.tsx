'use client'

import {useMutation, useQueryClient} from '@tanstack/react-query'
import {useState} from 'react'
import axios from '../api/axios/axios'
import {GET_ALL_MEMBERS} from '../services/getMembers'
import {AxiosError} from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import {PiXBold} from 'react-icons/pi'

export type CreateProps = {
  setToggle: (toggle: boolean) => void
  token: string
}

export default function CreateMember({token, setToggle}: CreateProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [department, setDepartment] = useState('')
  const [monthlyPledge, setMonthlyPledge] = useState(0)
  const [active, IsActive] = useState(true)
  const [status, setStatus] = useState('active')
  const queryClient = useQueryClient()
  let toastMemberID: string

  const {mutate} = useMutation(
    async ({
      name,
      phone,
      department,
      monthlyPledge,
      active,
    }: {
      name: string
      phone: string
      department: string
      monthlyPledge: number
      active: boolean
    }) =>
      await axios.post(
        `http://localhost:4000${GET_ALL_MEMBERS}/`,
        {name, phone, department, monthlyPledge, active},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ),
    {
      onError: (err) => {
        if (err instanceof AxiosError)
          toast.error(err?.response?.data.message, {id: toastMemberID})
      },
      onSuccess: (data) => {
        toast.success('Member created successfully! 🔥', {id: toastMemberID})
        setName('')
        setPhone('')
        setDepartment('')
        setMonthlyPledge(0)
        setStatus('active')
        queryClient.invalidateQueries(['members'])
      },
    },
  )

  const createMember = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'inactive') {
      IsActive(false)
    } else {
      IsActive(true)
    }
    mutate({name, phone, department, monthlyPledge, active})
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

            <form onSubmit={createMember}>
              <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-vfr/60 focus:border-vfr/60 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-vfr/50 dark:focus:border-vfr/50'
                    placeholder='Member Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className='w-full'>
                  <label
                    htmlFor='phone'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Phone
                  </label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-vfr/60 focus:border-vfr/60 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-vfr/50 dark:focus:border-vfr/50'
                    placeholder='Member Phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className='w-full'>
                  <label
                    htmlFor='department'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Department
                  </label>
                  <input
                    type='text'
                    name='department'
                    id='department'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-vfr/60 focus:border-vfr/60 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-vfr/50 dark:focus:border-vfr/50'
                    placeholder='Member Department'
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='monthlyPledge'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Monthly Pledge
                  </label>
                  <input
                    type='number'
                    name='monthlyPledge'
                    id='monthlyPledge'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-vfr/60 focus:border-vfr/60 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-vfr/50 dark:focus:border-vfr/50'
                    placeholder='0'
                    onChange={(e) => setMonthlyPledge(+e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='active'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Status
                  </label>
                  <select
                    id='active'
                    name='active'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-vfr/60 focus:border-vfr/60 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-vfr/50 dark:focus:border-vfr/50'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                  </select>
                </div>
              </div>
              <button
                type='submit'
                className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-vfr rounded-lg focus:ring-4 focus:ring-vfr/20 dark:focus:ring-vfr-900 hover:bg-vfr-800'
              >
                Add Member
              </button>
            </form>
          </div>
        </section>
      </div>
      <Toaster />
    </>
  )
}
