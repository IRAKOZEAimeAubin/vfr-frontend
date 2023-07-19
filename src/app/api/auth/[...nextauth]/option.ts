import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from '../../axios/axios';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider( {
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'johndoe'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '••••••••'
                }
            },
            async authorize ( credentials ) {
                const res = await axios.post( '/auth/login/', credentials );
                const user = res.data;
          
                if ( res.status === 201 && user ) {
                    return user;
                }
                return null;
            },
        } ),
    ],
    callbacks: {
        async jwt ( { token, user } ) {
            if ( user ) {
                if ( user.accessToken ) {
                    token = {
                        id: user.id,
                        name: user.name,
                        username: user.username,
                        accessToken: user.accessToken,
                    };
                }
            }
            return token;
        },
        async session ( { session, token } ) {
            session.accessToken = token.accessToken;
            session.id = token.id
            session.username = token.username;

            return session;
        }
    }
};
