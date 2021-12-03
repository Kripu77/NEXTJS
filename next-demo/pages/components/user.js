function User({post}) {
    return (
        <div>
    <h1> User list </h1>
           <h1>{post.title}</h1>
           <p>{post.body}</p> 
        </div>
    )
}

export default User
