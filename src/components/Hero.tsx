import Image from 'next/image';

const Hero = () => {
    return(
            <>
                <div className='w-full text-center bg-gray-800 justify-center '>
                    <Image src='/download4.jpg' alt='' width={900} height={500} className='w-full h-[700px] opacity-[0.7]' />
                   <div className='absolute flex-cols-1 h-auto '> 
                    <h1 className='text-2xl md:text-3xl lg:left-[650px]  bottom-[500px] left-[100px] text-center  flex items-center lg:text-6xl absolute pt-2 font-bold hover:text-blue-400 duration:0.3s ease-in-out text-white'>Tech<span className='text-blue-400'>Blog</span></h1>
                    <p className=' text-white w-[300px] md:w-[400px] lg:left-[580px] left-[20px] bottom-[400px] absolute '>lorem ipsum dolor set amete, lorem ipsum set amete lorem ipsum dolor set ametekel durado nias ker suii set amete</p>
                    <button className='bg-blue-400 hover:bg-white transition hover:duration-300 hover:text-black absolute rounded-lg shadow-lg bottom-[300px] left-[90px] lg:left-[720px] hover:ease-in-out text-white px-10 pt-5 pb-5'>Explore</button>
              </div>
                </div>
            </>
    )
}
export default Hero;
