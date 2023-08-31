'use client';

import {signOut} from 'next-auth/react'

export default function Logout () {
    return (
      <button
        type='submit'
        className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-vfr rounded-lg focus:ring-4 focus:ring-vfr/20 dark:focus:ring-vfr-900 hover:bg-vfr-800 uppercase'
        onClick={() => signOut()}
      >
        Logout
      </button>
    )
}