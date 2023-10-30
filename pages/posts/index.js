import AllPosts from "@/components/posts/all-posts.component";

const DUMMY_POSTS = [
    {
      title: 'Getting Started',
      slug: 'getting-started',
      image: 'getting-started-nextjs.png',
      excerpt:'nexjs is cool',
      date: '2022-04-10',
    },
    {
      title: 'Getting Started',
      slug: 'getting-started-2',
      image: 'getting-started-nextjs.png',
      excerpt:'nexjs is cool',
      date: '2022-04-10',
    },
    {
      title: 'Getting Started',
      slug: 'getting-started-3',
      image: 'getting-started-nextjs.png',
      excerpt:'nexjs is cool',
      date: '2022-04-10',
    },
    {
      title: 'Getting Started',
      slug: 'getting-started-4',
      image: 'getting-started-nextjs.png',
      excerpt:'nexjs is cool',
      date: '2022-04-10',
    },
  ];

function AllPostsPage() {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    )
}

export default AllPostsPage;