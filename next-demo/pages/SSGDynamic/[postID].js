function Post({post}) {
    console.log(post)
    return (
      <div>
        <h1> {post.title} </h1>
        <h1> {post.body}</h1>
    
      </div>
    );
}

export default Post

//getStatic paths is also an async functions which also contains an object
//anyId mentioned outside of the getStatic paths will result in 404 no founed
export async function getStaticPaths(){
    return {
        paths:[
            {
                params:{postID:'1'}
            }, {
                params:{postID:'2'}
            },
            {params:{postID:'3'},
        }, 
        {params:{postID:'4'}}
        ],
        fallback:false,
    }
}

//we want to pre-render the data so instead of useEffect we will use getStaticProps
export async function getStaticProps(id){
    const{params} = id
    console.log(params)

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
    const data = await response.json()

    return{props:{
     post:data
    }}
}
