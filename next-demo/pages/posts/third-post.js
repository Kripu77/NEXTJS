import Image from "next/dist/client/image"

export default function(){

    return (
      <>
        <h1>
          {" "}
          This page is our third post page it consists of bunch of images from
          remote sources.
        </h1>
        <Image
          src="https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="pexels image"
          height={400}
          width={400}
        />
      </>
    );
}