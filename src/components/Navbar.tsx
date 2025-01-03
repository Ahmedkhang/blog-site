'use client';
import Image from 'next/image';
import {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import Link from 'next/link';
const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const user = false;
    const links = [
        {id:1, name:"Home", url:"/"},
        {id:1, name:"Blogs", url:"/Blogs"},
        {id:1, name:"Contact", url:"/contact"},
        {id:1, name:"About", url:"/about"},
    ]
    return(
        <div className='w-full h-auto'>
        <div className='w-full p-5 text-white justify-between flex bg-gray-800 h-15'>
            <div>
                <h1 className='text-xl pt-2 font-bold hover:text-blue-400 transition hover:duration-500 ease-in-out text-white'>Tech<span className='text-blue-400'>Blog</span></h1>
            </div>
            <div className='md:flex space-x-10  text-white pt-2 hidden '>
                {links.map((items) => (
                    <div key={items.id} className='flex font-bold hover:text-blue-400 transition hover:duration-600 ease-in-out cursor-pointer hover:ease-in-out'><Link href={items.url}>{items.name} </Link></div>
                ))}
                </div>
            <div className='md:hidden py-3 text-xl'> 
                   <GiHamburgerMenu  />
                

            </div>

     </div> 


    

     </div>
    )
}
export default Navbar;


// <div className='w-full md:hidden h-screen bg-blue-400 text-white items-center text-center pt-20 lg:hideen'>
// {links.map((items:any, index:number) => (
//  <div key={index} className=' pt-2 text-white'><Link href={items.url}>{items.name}</Link></div>
// ))}