import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "mashariyan",
    userImg: "https://img.icons8.com/color/12x/money-heist-dali.png",
    img: "https://img.icons8.com/color/12x/money-heist-dali.png",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm!",
  },
  {
    id: "124",
    username: "mashariyan",
    userImg: "https://img.icons8.com/color/12x/money-heist-dali.png",
    img: "https://images.unsplash.com/photo-1575147724231-f759a1e41b5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dm9sdm98ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm!",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
