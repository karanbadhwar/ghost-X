import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
// import Slider from "react-slick";
// Import css files
// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";
const FeaturedProducts = () => {
  // const settings = {
  //   dots: true,
  //   swipeToSlide: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1080,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         arrow: false,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };
  const {
    products_loading: loading,
    featured_products: featured,
    products_error: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {/* <Slider {...settings}> */}
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
        {/* </Slider> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    /* min-width: var(--min-width); */
    gap: 2.5rem;
    img {
      height: 225px;
    }
    /* width: 70%;
    height: 100%; */
  }
  /* .slick-prev:before,
  .slick-next:before {
    color: hsl(22, 28%, 21%);
    font-size: 25px;
  } */

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
    /* }
  @media (max-width: 600px) {
    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
    .slick-prev,
    .slick-next {
      display: none;
    } */
  }
`;

export default FeaturedProducts;
