'use client'
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image'

const Card = ({ post }: { post: Post }) => {
    return (
        <section className="flex flex-col justify-between h-[480px]  rounded bg-zinc-100  shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
        {/* Image Section*/}
        <div className="relative max-h-76 flex-1">
          <Image
            src={urlForImage(post.image).url()}
            alt="AI for everyone"
            fill
            className="object-cover rounded-t"
          />
        </div>
  
        {/* Title and Summary */}
        <div className="flex flex-col justify-between gapx-y-4  p-4">
          <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
            {post.title}
          </h2>
          <p className="text-dark/70 dark:text-light/70 line-clamp-3">
            {post.summary}
          </p>
  
          {/* Read More dynamic Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
          >
            Read More
          </Link>
        </div>
      </section>
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
