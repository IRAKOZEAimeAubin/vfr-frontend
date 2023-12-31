'use client'

import {useQuery} from '@tanstack/react-query'
import {TotalSavings} from '../types/TotalSavings'
import getTotalSavings from '../services/getTotalSavings'
import {useState} from 'react'
import CreateTotalSavings from './createTotalSavings'

export default function TotalSavingsTable({token}: {token: string}) {
  const [createToggle, setCreateToggle] = useState(false)

  const {data, isLoading, error} = useQuery<TotalSavings[]>({
    queryFn: () => getTotalSavings(token),
    queryKey: ['total-savings'],
  })
  if (error) return `${error}`
  if (isLoading) return 'Loading...'

  return (
    <>
      <section className='bg-vfr/5 dark:bg-gray-900 p-3 sm:p-5 rounded-md'>
        <div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
          <div className='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4'>
              <div className='w-full md:w-1/2'>
                <form className='flex items-center'>
                  <label htmlFor='simple-search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5 text-gray-500 dark:text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      id='simple-search'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-vfr/50 focus:border-vfr/50 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-vfr/50 dark:focus:border-vfr/50'
                      placeholder='Search'
                      required
                    />
                  </div>
                </form>
              </div>
              <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
                <button
                  type='button'
                  className='flex items-center justify-center text-white bg-vfr/70 hover:bg-vfr/80 focus:ring-4 focus:ring-vfr/30 font-medium rounded-lg text-sm px-4 py-2 dark:bg-vfr/60 dark:hover:bg-vfr/70 focus:outline-none dark:focus:ring-vfr/80'
                  onClick={(e) => {
                    setCreateToggle(true)
                  }}
                >
                  <svg
                    className='h-3.5 w-3.5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      clipRule='evenodd'
                      fillRule='evenodd'
                      d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                    />
                  </svg>
                  Add total savings
                </button>
              </div>
            </div>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-4 py-3'>
                      Comment
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      Total Amount
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      Approved By
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((totalSavings) => (
                    <tr
                      className={`${
                        totalSavings.approved ? 'bg-green-200' : 'bg-red-200'
                      } border-b dark:border-gray-700`}
                      key={totalSavings.id}
                    >
                      <th
                        scope='row'
                        className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        {totalSavings.comment}
                      </th>
                      <td className='px-4 py-3'>{totalSavings.amount}</td>
                      <td className='px-4 py-3'>
                        {totalSavings.approvedBy
                          ? totalSavings.approvedBy.name
                          : 'NULL'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav
              className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4'
              aria-label='Table navigation'
            >
              <span className='flex text-sm font-normal text-gray-500 dark:text-gray-400 gap-1'>
                Showing
                <span className='font-semibold text-gray-900 dark:text-white'>
                  1-10
                </span>
                of
                <span className='font-semibold text-gray-900 dark:text-white'>
                  1000
                </span>
              </span>
              <ul className='inline-flex items-stretch -space-x-px'>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    <span className='sr-only'>Previous</span>
                    <svg
                      className='w-5 h-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    aria-current='page'
                    className='flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-vfr/60 bg-vfr/5 border border-vfr/30 hover:bg-vfr/10 hover:text-vfr/70 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    <span className='sr-only'>Next</span>
                    <svg
                      className='w-5 h-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {createToggle && (
        <CreateTotalSavings token={token} setToggle={setCreateToggle} />
      )}
    </>
  )
}
