'use client'
import { ActivityType } from "@/types";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { fasilitas } from "../utils/data/fasilitas";
import Image from "next/image";
interface Props {
  activityData: ActivityType[];
}
const ActivitySlider = ({activityData} : Props) => {
  return (
    <Slider
      className="row blog_slider"
      slidesToShow={3} // Set the number of slides to show
      infinite={true}
      dots={true}
      arrows={false}
      autoplay={true}
      slidesToScroll={2}
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {fasilitas.map((item, index) => ( // Hapus slice(0, 99) dan gunakan fasilitas langsung
        <div className="col-xl-3" key={index}>
          <div className="tf__single_blog">
            <div className="tf__single_blog_img">
              <Image
                src={item.src}
                alt={item.alt}
                className="img-fluid w-100 object-cover h-48 rounded-t-lg"
                width={1000}
                height={1000}
                loading="lazy"
                priority={false}
              />
            </div>
            <div className="tf__single_blog_text">
              <h3 className="title">{item.description}</h3>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ActivitySlider;
