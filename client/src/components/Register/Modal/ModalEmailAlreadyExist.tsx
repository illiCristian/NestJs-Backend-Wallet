import Image from 'next/image'
import Link from 'next/link'
import arrows from '../../../../public/assets/register/arrows-crossed.png'
import logo from '../../../../public/assets/register/logo.png'
import logo2 from '../../../../public/assets/register/logo2.png'

function ModalEmailAlreadyExist(props: any) {
    if (!props.isVisible) return null

    return (
        <div
            className={`fixed inset-0 bg-black 
        bg-opacity-25 
        flex justify-center  ${props.isVisible}`}
        >
            {/* <button onClick={() => props.onClose()}>X</button> */}
            <div className="w-[680px] h-[473px] mt-[180px] bg-white flex flex-col py-10 rounded-lg shadow-[0px_1px_4px_2px_#00000025]">
                <div className="flex items-center justify-center mb-5  gap-7">
                    <Image src={logo} alt="logo" className="w-20 h-20" />
                    <Image
                        src={arrows}
                        alt="arrows"
                        className="w-[73px] h-[17px] "
                    />
                    <Image src={logo2} alt="logo" className="w-20 h-20" />
                </div>
                <div className=" origin-top-left rotate-[0.55deg] text-center mb-7">
                    <span className="text-2xl font-semibold text-sky-500">
                        Ya existe
                    </span>
                    <span className="text-2xl font-semibold text-black">
                        {' '}
                        una cuenta con el e-mail
                        <br />
                        {props.emailUser}
                    </span>
                </div>
                <div className="flex justify-start px-24 mb-10 text-base font-normal leading-normal text-black">
                    Si tienes cuenta en mercado libre, no necesitas crear una
                    nueva,
                    <br />
                    inicia sesión con ese e-mail.
                </div>
                <div className="flex justify-center gap-4">
                    <Link
                        href={'/login'}
                        className="inline-flex items-center justify-center w-56 h-12 py-3 text-base font-bold leading-normal text-center text-white rounded-md bg-sky-500"
                    >
                        Inicia sesión
                    </Link>
                    <Link
                        href={'/register/email'}
                        onClick={() => props.onClose()}
                        className="inline-flex items-center justify-center w-56 h-12 py-3 text-base font-bold leading-normal text-center rounded-md bg-sky-100 text-sky-500"
                    >
                        Usar otro e-mail
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ModalEmailAlreadyExist
