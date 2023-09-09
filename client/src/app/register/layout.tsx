import NavbarRegister from '@/components/Register/NavbarRegister'
import Stepper from '@/components/Register/Stepper'
import SessionAuthProvider from '@/context/SessionAuthProvider'

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex flex-col items-center justify-center ">
            <NavbarRegister />
            <Stepper />
            {children}
        </section>
    )
}
