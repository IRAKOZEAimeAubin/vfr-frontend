export default function Login() {
  return (
    <main>
      <section className='bg-gray-50'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <span className='flex items-center mb-6 text-2xl font-semibold text-gray-900'>
            VFR
          </span>
          <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                Sign in to your account
              </h1>
              <form className='space-y-4 md:space-y-6' action='#'>
                <div>
                  <label
                    htmlFor='username'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Username
                  </label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                    placeholder='John Doe'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
