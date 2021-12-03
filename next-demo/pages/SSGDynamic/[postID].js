function Post(post) {
    return (
      <div>
        <h1> {post.title} </h1>
        <h1> {post.body}</h1>
    
      </div>
    );
}

export default Post

//we want to pre-render the data so instead of useEffect we will use getStaticProps
export async function getStaticProps({id}){
    const{params} = id

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = response.json()

    return{props:{
     post:data
    }}
}
