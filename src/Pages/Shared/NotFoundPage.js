import React from "react";
import notFound from "../../images/banner/404-page.webp";

const NotFoundPage = () => {
  return (
    <div className="flex mx-auto">
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFoundPage;
