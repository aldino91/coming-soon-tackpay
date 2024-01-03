import './index.css'

function App() {


  return (
    <>
     {/* <h1 className='text-2xl text-red-600'>coming soon</h1> */}
     <div className='w-full md:w-2/3 xl:w-2/3 mx-auto h-screen flex flex-col justify-center'>

      <div className='w-full'>
        <div>
          <h1 className='text-5xl text-gray-700 text-center mb-6'>New version!</h1>
        </div>
        <div className='w-full'>
          <img src='img/img-coming-soon.png' />
        </div>
        <div>
          <h1 className='text-4xl text-gray-700 text-center mt-6'>Coming soon...</h1>
        </div>
      </div>

     </div>
    </>
  )
}

export default App
