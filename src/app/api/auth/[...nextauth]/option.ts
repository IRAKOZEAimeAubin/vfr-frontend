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
                const token = res.data.accessToken;
          
                if ( res.status === 201 && token ) {
                    return token;
                }
                console.log(res)
                return null;
            },
        } ),
    ],
};
