import Drawer from '@/components/Dashboard/Drawer';
import NavbarDashboard from '@/components/Dashboard/NavbarDashboard';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex '>
      <Drawer />
      <NavbarDashboard />
      {children}
    </section>
  );
}
