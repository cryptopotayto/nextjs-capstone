import classes from './posts-grid.module.css';
import PostItem from './post-item.component';


function PostsGrid(props) {
    const { posts } = props
    return (
        <ul className={classes.grid}>
            {posts.map((post) =>{
                return <PostItem key={post.slugS} post={post}/>
            })}
        </ul>
    )
}

export default PostsGrid;