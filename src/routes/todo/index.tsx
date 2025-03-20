import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar'

export const Route = createFileRoute('/todo/')({
  component: Index
})

function Index() {
  return (
    <div className='flex flex-row divide-x-1'>
      <Navbar />
      <div className='flex flex-col gap-2  w-full bg-gray-700'>
        <div className='flex w-full justify-between p-5 border-b-1'>
          <div className='flex gap-3'>
            <div className='bg-red-300 w-10 h-10 rounded-full'>
              <div className='flex justify-center items-center h-full'>
                <p className='font-bold text-white'>M</p>
              </div>
            </div>
            <div className=''>
              <p className='text-white font-bold'>Hola, Miguel</p>
              <p className='text-white'>domingo, 9 de marzo</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <button className='bg-gray-900 text-white p-2 rounded'>
              <img src="public\calendar-days.svg" alt="Calendar" />
            </button>
            <div >
              <input type="text"
                placeholder="Buscar tarea..."
                className='bg-gray-800 rounded-md block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-300 placeholder:text-gray-200 focus:outline-none sm:text-sm/6' />
            </div>
          </div>
        </div>
        <div className='border-b-1 p-5'>
          <div className=''>
            <p className='text-white font-bold'>Hola, Miguel</p>
            <p className='text-white'>domingo, 9 de marzo</p>
          </div>
        </div>
        <div className='flex justify-between p-5'>
          <p className='text-white text-2xl font-bold'>Tareas de hoy</p>
          <div className='flex bg-sky-800 text-white p-3 rounded gap-3'>
            <img src="public\plus.svg" alt="plus" />
            <p className='text-white'>Nueva tarea</p>
          </div>
        </div>
      </div>
    </div>
  )
}

