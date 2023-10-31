import AllPosts from "@/components/posts/all-posts.component";
import { getAllPosts } from "@/utils/posts-utils";


function AllPostsPage(props) {
    return (
        <AllPosts posts={props.posts} />
    )
}

export function getStaticProps () {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    },
    revalidate: 1800,
  };
}

export default AllPostsPage;