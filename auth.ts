import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { db } from './lib/db'

import authConfig from './auth.config'
import { getUserById } from './data/user'

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages:{
        signIn: '/auth/login',
        error: '/auth/error'
    },
    events:{
        async linkAccount({user}){
            await db.user.update({
                where:{ id: user.id},
                data:{
                    emailVerified: new Date()
                }
            })
        }
    },
    callbacks:{
        async signIn({user,account}){
            if(account?.provider !== 'credentials') return true

            const existingUser = await getUserById(user.id)

            // Prevent signin without email verification
            if(!existingUser?.emailVerified) return false

            

            return true
        },
        async session({session, token}){
            console.log({
                sessionToken: token
            });
            
            if(token.sub && session.user){
                session.user.id = token.sub
            }
            if(token.role && session.user){
                session.user.role = token.role
            }
            return session
        },
        async jwt({token}){
            if(!token.sub) return token
            const existingUser = await getUserById(token.sub)
            if(!existingUser) return token
            token.role = existingUser.role 
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session:{strategy:'jwt'},
    ...authConfig,
})