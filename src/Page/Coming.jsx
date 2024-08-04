import developer from "../assets/Images/coding.png";
import { Link } from "react-router-dom";
function NewListing() {
  return (
    <div>
      <div className="md:ml-[240px]">
        <section className="bg-white">
          <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className="flex flex-col items-center max-w-sm mx-auto text-center">
              <img className="w-[160px]" src={developer} alt="" />
              <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-4xl">
                Coming Soon!
              </h1>
              <p className="mt-4 text-gray-500 ">
                The page you are looking for doesnt exist. Here are some helpful
                links:
              </p>

                <Link
                  to={"/"}
                  className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-[#156bca] hover:bg-[#084e99] border rounded-lg gap-x-2 sm:w-auto   "
                >
                  <span>Go Home Page</span>
                </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NewListing;
