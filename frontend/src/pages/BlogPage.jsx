import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import BlogGroup from "../components/BlogGroup";
import FooterFour from "../components/FooterFour";

const BlogPage = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderOne />
        <main>
          <Breadcrumb title="Blog" />
          <BlogGroup />
        </main>
        <FooterFour />
      </Suspense>
    </>
  );
};

export default BlogPage;
