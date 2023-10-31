import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
//create absolute path to directory containing posts
const postsDirectory = path.join(process.cwd(), 'content');

export function getPostsFiles() {
   return fs.readdirSync(postsDirectory);
}

export function getPostData(fileIdentifier) {
    const postSlug = fileIdentifier.replace(/\.md$/, '') //removes the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8' );
    // reads extracted text and returns obj with 2 properties:
    //data for the meta data and content with markdown as a string
    const { data, content } = matter(fileContent);
    
    const postData = {
        slug: postSlug,
        ...data,
        content: content,
    };

    return postData;
}

export function getAllPosts () {
    //read all synchronously and returns array
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB)=> postA.date > postB.data ? -1 : 1);

    return sortedPosts;
}


export function getFeaturedPosts() {
 const allPosts = getAllPosts();
 const featuredPosts = allPosts.filter((post) => post.isFeatured);
 return featuredPosts;
}