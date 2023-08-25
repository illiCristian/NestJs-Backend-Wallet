import NavbarRegister from "@/components/Register/NavbarRegister";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center items-center ">
        <NavbarRegister />
        {children}
      </body>
    </html>
  );
}
