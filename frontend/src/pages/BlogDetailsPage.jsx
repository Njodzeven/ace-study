import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import BlogDetails from "../components/BlogDetails";
import FooterFour from "../components/FooterFour";

const BlogDetailsPage = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderOne />
        <main>
          <Breadcrumb title="Blog Details" />
          <BlogDetails />
        </main>
        <FooterFour />
      </Suspense>
    </>
  );
};

export default BlogDetailsPage;
