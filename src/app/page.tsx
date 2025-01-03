import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Card from '@/components/card';
import Hero from '@/components/Hero';
import { client } from '@/sanity/lib/client';
export default  async function Home() {

  const query = `*[_type=='post']{
  
  image,title,summary,
    "slug":slug.current
}`;
  const posts:Post[]  = await client.fetch(query);
  


  return (

    <div className='h-[1000px] bg-white w-full'>
      <h1 className='w-full text-center  pt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400'>Most Recent Blogs</h1>
      <div className='flex '>
     {posts.map((posts:Post) => (
      <Card key={posts.slug} post={posts} />
     ))}
     </div>
    </div>
  );
}
