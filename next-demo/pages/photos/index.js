const url = "https://jsonplaceholder.typicode.com/photos";


function Photos({photo}) {
    return (
        <div>
        <h1> Photos Homepage</h1>   
{/* map the photo data */}
        {
photo.map((photox)=>{
    const {
        allbumId, id, title, url, thumbnailUrl
    } = photox
return (<div key={id}>
    <h1>{title}</h1>
    <a href={thumbnailUrl}>thumbnail url</a>
    <img src={url}></img>

    </div>)
})
        } 
        </div>
    )
}

export default Photos

//getStatic prop for pre-rendering 

export async function getStaticProps(){
    const response = await fetch(url)
    const data = await response.json()


    return{
        props:{
            photo:data.slice(0,7)
        }
    }
}
