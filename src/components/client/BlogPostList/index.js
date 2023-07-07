import { Heading, SimpleGrid } from "@chakra-ui/react";
import { Fragment } from "react";
import { BlogPostCard } from "../BlogPostCard";
import blogPic1 from "/public/img/blog-pic-01.png";
import blogPic2 from "/public/img/blog-pic-02.png";
import blogPic3 from "/public/img/blog-pic-03.png";

export const BlogPostList = () => {
  return (
    <Fragment>
      <Heading
        as="h2"
        fontSize="2xl"
        textTransform="uppercase"
        mb={{ base: "2rem", md: "3rem" }}
      >
        Latest From Blogpost
      </Heading>
      <SimpleGrid
        minChildWidth="300px"
        spacing={{
          base: "2.5rem",
          md: "1.5rem",
        }}
        mb={10}
      >
        <BlogPostCard
          image={blogPic1}
          title="The Easiest Way to Break"
          summary="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
        />

        <BlogPostCard
          image={blogPic2}
          title="Wedding Season"
          summary="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
        />

        <BlogPostCard
          image={blogPic3}
          title="Recent Favorites On Repeat"
          summary="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
        />
      </SimpleGrid>
    </Fragment>
  );
};
