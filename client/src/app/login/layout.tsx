import NavbarRegister from "@/components/Register/NavbarRegister";

export default function RegisterLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
			<section className="flex flex-col items-center justify-center ">
				<NavbarRegister />
				{children}
			</section>
	);
}
