import React, { useState, useEffect } from "react";
import api from "../../api";
import Slider from "./Slider";
import Categories from "./Categories";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await api.get("/banners").catch((err) => {
        console.log(err);
      });
      setBanners(response.data);
    };

    const fetchCategories = async () => {
      const response = await api.get("/categories").catch((err) => {
        console.log(err);
      });
      setCategories(response.data);
    };

    fetchBanners();
    fetchCategories();
  }, []);

  return (
    <div className="mt-4">
      <Slider banners={banners} />
      <Categories categories={categories} />
    </div>
  );
};

export default Home;
