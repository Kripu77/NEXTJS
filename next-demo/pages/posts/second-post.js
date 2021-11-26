import Image from 'next/image'
import Head from 'next/dist/shared/lib/head';

export default function SecondPost(){
    return (
      <>
      <Head>
          <title>Second Post</title>
      </Head>
        <h1> This is our second post</h1>
        <Image
          src="https://images.pexels.com/photos/4458423/pexels-photo-4458423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         layout="fill"
        ></Image>
      </>
    );
}