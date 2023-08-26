import NavbarRegister from "@/components/Register/NavbarRegister";
import SessionAuthProvider from "@/context/SessionAuthProvider";

export default function RegisterLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex flex-col items-center justify-center ">
				<SessionAuthProvider>
					<NavbarRegister />
					{children}
				</SessionAuthProvider>
			</body>
		</html>
	);
}
