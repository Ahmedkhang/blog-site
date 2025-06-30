'use client'
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image'

const Card = ({ post }: { post: Post }) => {
    return (
<>
     <div className='w-full px-8 py-3 h-auto md:flex justify-around'>


 <div className='w-[300px] h-auto py-3 bg-zinc-100 flex-col shadow-lg trans'>
    <Image src={urlForImage(post.image).url()} alt='' width={300} height={150}/>
    <h1 className=' text-xl md:text-2xl font-bold p-3'>{post.title}</h1>
    <p className=' font-bold p-3'>{post.summary}</p>
<Link href={`/blog/${post.slug}`}><button className='text-white bg-blue-400 mx-[80px] rounded-lg transform-transition hover:duration-800 hover:ease-in-out px-5 py-2 hover:text-black hover:bg-white font-bold'>Read More</button></Link>
 </div>


            </div> 
     
</>
    );
}

export default Card;


// <div className='w-full gap-20 flex-cols-1 lg:flex h-[700px] pt-10 md:mx-10 rounded-lg '>
// {blog.map((items:any, index:number) => (
//   <div key={index} className='bg-red-100 shadow-lg md:mx-20 w-[400px] h-[400px]'>
//       <Image src={items.url} alt='' width={300} height={200} className='mx-2 md:mx-7 pt-5 rounded-lg ' />
//       <div className='justify-center  text-lg'>
//         <p className='md:text-[17px] text-[14px] mx-[100px] md:text-center mt-3 font-bold'>{items.name}</p>
//         <button className='text-center pb-3 mx-[90px] mt-5 px-7 font-bold text-white hover:bg-white hover:text-black pt-3 bg-blue-400'>Read more</button>
//     </div>
//   </div>

// )
// )}
// </div>




// <div className='w-[340px] shadow-lg rounded-lg bg-zinc-100 border-2 border-zinc-400 text-black h-[450px] md:mx-20 '>
//            <div className='w-[340px] rounded-lg h-[230px] '>
//             <Image src={urlForImage(post.image).url()} alt='' width={340} height={100}/>
//             </div> 

//             <div className='w-[340px] flex-1 flex-col h-[300px] '>
//                 <h2 className='text-xl px-3 font-bold'>
//                     {post.title}
//                 </h2>
//                 <p className='pt-2 px-3 '>
//                     {post.summary}
//                 </p>

//                 <Link href={`/blog/${post.slug}`}><button className='hover:transition text-white hover:duration-300 hover:ease-in-out font-bold mx-[100px] hover:bg-white border-[1px] border-blue-400 hover:text-black bg-blue-400 px-6 pt-2 mt-3 rounded-md hover:shadow-lg pb-2'>Read More</button></Link>   
//             </div>
            
//             </div>
//         </section>
