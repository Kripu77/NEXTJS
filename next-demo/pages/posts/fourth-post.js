import Image from "next/dist/client/image"
import Head from "next/dist/shared/lib/head"

export default function FourthPost(){

    return <>
    <Head>
        <title>Second Page</title>
    </Head>
    <h1> This page is our forth post page</h1>
    <Image src="https://tse4.mm.bing.net/th?id=OIP.wwOS6NyE5mw05P7kdRKtaQAAAA&pid=Api&P=0&w=300&h=300"
    height={400} width={444} alt="The image from google" />
    
    </>
}