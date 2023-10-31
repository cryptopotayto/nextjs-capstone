import { Fragment } from "react";
import Hero from "@/components/home-page/hero.component";
import FeaturedPosts from "@/components/home-page/featured-posts.component";

import {  getFeaturedPosts } from "@/utils/posts-utils";

function HomePage(props) {
  return (
    <Fragment>
    <Hero />
    <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
}

export function getStaticProps () {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 1800,
  }
}

export default HomePage;