import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcrypt';
import { User } from '@/database/models'; // Adjust the path accordingly
import { Connection } from '@/database/connection';


export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "email" },
        password: {  label: "Password",  type: "password" }
      },
      async authorize(credentials) {
        try {
          const user = await User.findOne({
            where: {
              email: credentials.email,
            },
          });
      
          console.log('User:', user);
          if (user && bcrypt.compareSync(credentials.password, user.passwordHash)) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          console.error('Error during authentication:', error);
          return Promise.resolve(null);
        }
      },
    }),
  ],
  adapter: SequelizeAdapter(Connection),
  session: {
    jwt: true,
  },
});

