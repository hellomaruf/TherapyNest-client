import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png'
function Loading() {
  return (
    <div className="md:ml-[240px]">
      <section className="bg-white">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                      <img className='w-[250px]' src={ logo} alt=""  />
            <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
              Please SignIn to view this page
            </h1>
            <p className="mt-4 text-gray-500 ">
              The page you are looking for doesnt exist. Here are some helpful
              links:
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100 ">
                <span>Go back</span>
              </button>

              <Link to={'/login'} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#156bca] rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loading;
