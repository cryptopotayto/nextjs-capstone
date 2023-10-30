import { Fragment } from "react";
import Hero from "@/components/home-page/hero.component";
import FeaturedPosts from "@/components/home-page/featured-posts.component";

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

function HomePage() {
  return (
    <Fragment>
    <Hero />
    <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  )
}

export default HomePage;