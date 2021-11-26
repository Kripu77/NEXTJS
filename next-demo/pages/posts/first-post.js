import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import pic from "../../public/images/profile.jpg"
import Head from "next/dist/shared/lib/head";
import Layout from "../components/Layout";

export default function FirstPost (){
    return (
      <>
        <Layout>
          <Head>
            <title>First Post</title>
          </Head>
          <h1> This is our first post</h1>
          <Link href="/">
            <a> Back to Home</a>
          </Link>
          {/* image component */}
          <Image src={pic} alt="Your Name" />
        </Layout>
      </>
    );  
}
