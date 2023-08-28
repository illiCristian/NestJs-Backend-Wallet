import Drawer from '@/components/Dashboard/Drawer';
import Footer from '@/components/Dashboard/Footer';
import NavbarDashboard from '@/components/Dashboard/NavbarDashboard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className='flex '>
        <Drawer />
        <div className='flex flex-col '>
          <NavbarDashboard />
          {children}
          <Footer />
        </div>
      </section>
    </>
  );
}
