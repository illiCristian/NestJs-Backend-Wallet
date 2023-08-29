import { API } from "@/services/config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "email",
					type: "email",
					placeholder: "Correo Electrónico",
				},
				password: {
					label: "password",
					type: "password",
					placeholder: "Contraseña",
				},
			},
			async authorize(credentials) {
				try {
					const { data: user } = await API.post("auth/login", {
						email: credentials?.email,
						password: credentials?.password,
					});

					return user;
				} catch (error) {
					console.log(error);
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},

		async session({ session, token }) {
			session.user = token as any;
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
});

export { handler as GET, handler as POST };
