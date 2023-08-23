import NavbarRegister from '@/components/Register/NavbarRegister';
import Stepper from '@/components/Register/Stepper';

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col justify-center items-center '>
        <NavbarRegister />
        <Stepper />
        {children}
      </body>
    </html>
  );
}
