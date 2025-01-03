import Image from 'next/image';
const About = () => {
    return(
    <>
          <div className="flex flex-col md:flex-row bg-zinc-100 h-auto md:h-[80vh] text-black text-center text-2xl p-5">
        
        <div className="w-full md:w-[50vw] flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">About Us</h1>
          <p className="px-4 md:px-10 text-lg md:text-xl font-medium">
            Hello, my name is <span className="font-bold text-blue-400">Ahmed Ur Rehman</span> from <span className="font-bold text-gray-900">Karachi, Pakistan</span>.
            I am a <span className="font-bold text-gray-900">Frontend Developer</span> with expertise in HTML, CSS, JavaScript, TypeScript, and currently learning
            <span className="font-bold text-gray-900"> Tailwind CSS and React/Next.JS</span>.
          </p>
        </div>

        <div className="w-full md:w-[50vw] flex justify-center items-center mt-6 md:mt-0">
          <img className="w-[90%] md:w-[80%] h-auto md:h-[60vh] rounded-lg shadow-lg" src="/AboutUs.jpg" alt="About Us"/>
        </div>
      </div>
    </>
    )
}
export default About;