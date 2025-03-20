function Navbar() {
  return (
    <div className='h-dvh w-80 bg-var(--background-nav)'>
      <div className='flex flex-col p-5 h-full'>
        <div className='flex justify-between'>
          <p className='text-xl font-bold text-white'>Grupos de tareas</p>
          <button className='flex text-white p-1 rounded'>
            <img src="public\sun.svg" alt="sun" />
          </button>
        </div>
        <div className='flex flex-col p-5 gap-8 h-full snap-y'>
          <div className='flex w-full gap-4'>
            <button className='bg-sky-500 text-white p-3 rounded'>TRA</button>
            <div className=''>
              <p className='text-white'>Trabajo</p>
              <p className='text-white'>1 tareas</p>
            </div>
          </div>
          <div className='flex w-full gap-4'>
            <button className='bg-yellow-500 text-white p-3 rounded'>PER</button>
            <div className=''>
              <p className='text-white'>Personal</p>
              <p className='text-white'>2 tareas</p>
            </div>
          </div>
          <div className='flex w-full gap-4'>
            <button className='bg-green-400 text-white p-3 rounded'>EST</button>
            <div className=''>
              <p className='text-white'>Estudio</p>
              <p className='text-white'>1 tareas</p>
            </div>
          </div>
        </div>
        <div className=''>
          <button className='bg-gray-900 text-white p-1 rounded'>
            <img src="public\settings.svg" alt="configuracion" />
          </button>
        </div>
      </div>
    </div>
  )
}

export { Navbar }
