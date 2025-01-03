import Hero from '@/components/Hero';
import Image from 'next/image';
import Card from '@/components/card';

export default function Blogs(){
    return(
        <>
        <Hero />
        
        <Card post={{
                slug: '',
                title: '',
                summary: '',
                image: undefined
            }} />
        </>
    )
}
