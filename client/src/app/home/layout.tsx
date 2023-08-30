import Drawer from "@/components/Home/Drawer";
import Footer from "@/components/Home/Footer";
import NavbarHome from "@/components/Home/NavbarHome";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<section className="flex ">
				<Drawer />
				<div className="flex flex-col ">
					<NavbarHome />
					{children}
					<Footer />
				</div>
			</section>
		</>
	);
}
