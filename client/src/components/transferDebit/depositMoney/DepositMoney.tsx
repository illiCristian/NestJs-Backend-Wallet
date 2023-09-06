import { useTempMoney } from '@/store/userStore'
import { useForm } from 'react-hook-form'

interface props {
  component: string
  nextStep: () => void
}

const DepositMoney = ({ component, nextStep }: props) => {
  const { setTempMoney } = useTempMoney()
  const { register, handleSubmit, watch, setValue } = useForm()

  const handleForm = (data: any) => {
    setTempMoney(parseInt(data.money))
    nextStep()
  }

  const handleChange = (e: any) => {
    setTempMoney(e.target.value)
  }

  return (
    <div className={`${component} flex-col items-start d w-full mt-5 ms-96 `}>
      <h1 className="text-black text-[25px] font-semibold leading-normal mb-5">
        ¿Cuanto quieres ingresar?
      </h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="flex flex-col bg-white  rounded-lg shadow-[0px_4px_4px_0px_#00000025] w-[544px]  px-[50px]  sh">
          <div className="flex flex-row justify-start items-center my-4 mx-5">
            <p className="text-xl">$</p>
            <input
              {...register('money')}
              autoFocus
              type="number"
              placeholder="0"
              className=" outline-none focus:outline-none flex items-center border-white w-32 remove-arrow ms-44"
            />
          </div>
          <hr className="-mx-[50px] bg-gray-200 border-1" />
          <div className="flex flex-row items-center justify-center my-4 gap-5">
            <button
              type="button"
              className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
              onClick={() => setValue('money', 500)}
            >
              $500
            </button>
            <button
              type="button"
              className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
              onClick={() => setValue('money', 1000)}
            >
              $1000
            </button>
            <button
              type="button"
              className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
              onClick={() => setValue('money', 2000)}
            >
              $2000
            </button>
            <button
              type="button"
              className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
              onClick={() => setValue('money', 3000)}
            >
              $3000
            </button>
          </div>
        </div>
        <div className="">
          <button
            disabled={watch('money') < 1 || undefined}
            className={`${
              watch('money') < 1 || undefined
                ? `bg-gray-400 text-gray-700`
                : `bg-[#00B1EA] text-white font-medium`
            } mt-4  text-base rounded-md w-[200.23px] h-[48.69px] ml-[345px]  `}
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  )
}

export default DepositMoney
