import React from 'react'
import { auth, signOut } from '@/auth'

const SettingsPage = async () => {

    const session = await auth()

    session?.user

  return (
    <div>
        {JSON.stringify(session)}
        <form action={async () => {
            'use server'

            await signOut()
        }}>
            <button type='submit'>
                Sign Out
            </button>
        </form>
    </div>
  )
}

export default SettingsPage