import NavbarRegister from "@/components/Register/NavbarRegister";

export default function RegisterLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex flex-col items-center justify-center ">
				<NavbarRegister />
				{children}
			</body>
		</html>
	);
}
