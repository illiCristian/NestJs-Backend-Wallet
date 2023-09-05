import { ChangeEventHandler } from "react";


interface User {
  user: ChangeEventHandler<HTMLInputElement>,
  name: string
}


const FrameVerifyName = ({name, user}: User) => {
  return (
    <div className='flex flex-col justify-center items-start ml-8 mt-5'>
      <h3 className="text-xl text-black my-3 font-semibold">Ingresa un nuevo nombre de usuario</h3>
      <div className='flex flex-col justify-center items-center bg-white border-2 rounded-lg shadow-md'>
        <div className="ml-4 mt-5">
        <label id="usuario" className="text-xs text-black " htmlFor='name'>Usuario</label>
        <form  action="">
          <input 
            id="input-name"
            type="text" 
            name='name'
            placeholder='Escribe un nombre'
            onChange={user}
            className='w-[650px] my-3 border border-gray-200 py-3 focus:bg-white rounded-md mr-9 text-xs'
            />
            {

            <div className='flex flex-row justify-between items-center my-3'>
              <p id="paragraph1" className='text-gray-300 text-xs '>
                El nombre debe tener como mínimo 3 caracteres y no debe tener más de 2 palabras
              </p>
              <p id="paragraph2" className='text-gray-300 text-xs ml-10 mr-3'>
                11/30
              </p>
            </div>
            }
            <button 
              onClick={(e) => {
                e.preventDefault();
                const paragraph1 = document.getElementById('paragraph1') as HTMLParagraphElement;
                const paragraph2 = document.getElementById('paragraph2') as HTMLParagraphElement;
                const input1 = document.getElementById('input-name') as HTMLInputElement;
                const usuarioTitle = document.getElementById('usuario') as HTMLInputElement;

                if(name === "Rosa Pérez"){
                  paragraph1?.setAttribute('class', 'text-red-500 text-xs')
                  input1.setAttribute('class', 'w-[650px] my-3 border border-red-500 py-3 bg-white focus:bg-white rounded-md mr-9 text-xs')
                  usuarioTitle.setAttribute('class', 'text-xs text-red-500')
                  paragraph1.innerText = 'Este usuario ya existe elige otro';
                  paragraph2.innerText = ""
                } else {
                  paragraph1?.setAttribute('class', 'text-gray-300 text-xs')
                  paragraph2?.setAttribute('class', 'text-gray-300 text-xs ml-10 mr-3')
                  input1.setAttribute('class', 'w-[650px] my-3 border border-gray-200 py-3 focus:bg-white rounded-md mr-9 text-xs' )
                  usuarioTitle.setAttribute('class', 'text-xs text-black')
                  paragraph1.innerText = 'El nombre debe tener como mínimo 3 caracteres y no debe tener más de 2 palabras';
                  paragraph2.innerText = "11/30"

                }
              }}
              className='bg-[#00B1EA] py-3 my-3 px-6 text-white text-sm font-semibold rounded-lg'>
              Modificar
            </button>
        </form>
        </div>
      </div>

      
    </div>
  )
}

export default FrameVerifyName;