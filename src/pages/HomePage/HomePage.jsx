import React, { useState } from "react";
import AdGallery from "../../components/AdGallery/AdGallery";
import Header from "../../components/Header/Header";

import PostGallery from "../../components/PostGallery/PostGallery";
import ProfileWidget from "../../components/ProfileWidget/ProfileWidget";

function HomePage() {
  return (
    <div>
      <Header />
      <ProfileWidget />
      <PostGallery />
      <AdGallery />
    </div>
  );
}

export default HomePage;
