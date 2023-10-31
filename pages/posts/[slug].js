import PostContent from "@/components/posts/post-detail/post-content.component";
import { getPostData, getPostsFiles } from "@/utils/posts-utils";

function PostDetailPage(props) {
    return <PostContent post={props.post}/>
}

export function getStaticProps (context) {
    const { params } = context;
    const { slug } = params;
    const selectedPost = getPostData(slug);
  
    return {
      props: {
        post: selectedPost
      },
      revalidate: 1800,
    }
  }

export function getStaticPaths() {
    
    const postFileNames = getPostsFiles();
    const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
    
    return {
        //generates an array of all path objects in advance, only for smaller applicatoin
        paths: slugs.map(slug => ({ params: {slug: slug}})),
        fallback: false
    }
}

export default PostDetailPage;