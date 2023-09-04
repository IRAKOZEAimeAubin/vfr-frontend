'use client';

import {signOut} from 'next-auth/react'

export default function Logout () {
    return (
      <button
        type='submit'
        className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-vfr/70 rounded-lg focus:ring-4 focus:ring-vfr/30 dark:focus:ring-vfr/80 hover:bg-vfr/80 dark:bg-vfr/60 dark:hover:bg-vfr/70 uppercase'
        onClick={() => signOut()}
      >
        Logout
      </button>
    )
}