import Image from 'next/image'
import Hero from '@/components/Hero';
const Contact = () => {
return(
    <>
    <Hero />
    <div className="w-full h-auto bg-red-100 text-black text-2xl">
        <h1 className="w-full h-[30vh] md:h-[40vh] text-center font-bold text-2xl md:text-4xl p-10 md:p-20">
          Contact Us
        </h1>
      </div>

      <div className="flex flex-col md:flex-row bg-red-100 w-full items-center md:items-start justify-center md:justify-start p-5 md:p-10">
        <h2 className="w-full md:w-[30vw] text-center md:text-left items-center text-2xl md:text-4xl text-black mb-5 md:mb-0 md:ml-10 px-4">
          We Would Love To{' '}
          <span className="text-blue-700 font-bold text-3xl md:text-4xl transition-all hover:scale-105">
            Connect
          </span>{' '}
          With You
        </h2>

        <form className="w-full md:w-[50vw] max-w-md md:ml-10 px-4 md:px-0">
          <div className="md:flex md:items-center mb-4">
            <div className="md:w-1/3">
              <label className="block text-black font-bold mb-1 md:mb-0">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-zinc-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-gray-300"
                id="inline-full-name"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-4">
            <div className="md:w-1/3">
              <label className="block text-black font-bold mb-1 md:mb-0">
                Your Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:border-gray-300"
                id="email"
                type="email"
                required
                placeholder="Email"
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end mt-4">
            <button
              className="shadow bg-gray-600 hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full md:w-auto"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
)
}
export default Contact;