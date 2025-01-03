import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return(
        <div className='w-full h-[700px] md:h-[250px] md:flex text-white space-x-20 gap-[200px] bg-gray-800'>
                        <div>
                <h1 className='text-xl hover:text-blue-400 px-3 md:px-10 pt-10 lg:text-3xl font-bold text-white'>Tech<span className='text-blue-400'>Blog</span></h1>

            </div>
            <div className='text-white lg:text-xl font-bold pt-20 md:pt-10 px-3 md:px-10'>
                <h1 className='text-3xl'>Links</h1>
                <h3 className='mt-3'>Home</h3>
                <h3>Blog</h3>
                <h3>Contact</h3>
                <h3>About</h3>
            </div>

            <div>
                <h1 className='font-bold text-3xl pt-10 md:pt-10 px-3 md:px-10'>Explore</h1>
                <div className='flex space-x-2 pt-5'>
                    <Image src='/download1.jpeg' alt='' width={40} height={20} />
                    <p className='text-[17px]'>A.I and its impact in medical science</p>
                </div>

                <div className='flex space-x-2 pt-6'>
                    <Image src='/download2.jpeg' alt='' width={40} height={20} />
                    <p className='text-[17px]'>A.I in our daily lives</p>
                </div>

                
                <div className='flex space-x-2 pt-6'>
                    <Image src='/download3.jpeg' alt='' width={40} height={20} />
                    <p className='text-[17px]'>A.I and its impact in medical science</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;