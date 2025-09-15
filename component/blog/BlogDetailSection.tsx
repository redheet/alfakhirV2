"use client";
import { BlogType } from "@/types";
import Link from "next/link";
import React from "react";
interface Props {
  blogDesc: BlogType;
  blogDataArray: BlogType[];
}
const BlogDetailSection = ({ blogDesc,blogDataArray } : Props) => {
  return (
    <section className="tf__blog_details_page mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="tf__blog_details_area">
              <div className="tf__blog_details_img wow fadeInUp">
                <img
                  src={blogDesc.imgSrc.image}
                  alt={blogDesc.imgSrc.alt}
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__blog_details_text wow fadeInUp">
                <ul className="date d-flex flex-wrap">
                  <li>
                    <i className="far fa-user-edit"></i> {blogDesc.author}
                  </li>
                  <li>
                    <i className="fal fa-calendar-alt"></i> {blogDesc.date}
                  </li>
                </ul>
                <h3>{blogDesc.longTitle}</h3>
                <p>{blogDesc.desc}</p>

                
              </div>
              
              {/* <div className="tf__comment_reply mt_65 wow fadeInUp">
                <h3>leave a Comment</h3>
                <form>
                  <div className="row">
                    <div className="col-xl-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-xl-6">
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="col-xl-12">
                      <textarea rows={5} placeholder="Comment..."></textarea>
                      <button type="submit">submit</button>
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="tf__sidebar" id="sticky_sidebar">
              <div className="tf__sidebar_search">
                <form>
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="tf__sidebar_blog sidebar_item">
                <h3>Recent Post</h3>
                <ul>
                  {blogDataArray.slice(0, 6).map((item) => (
                    <li key={item._id}>
                      <div className="img">
                        <img
                          src={item.imgSrc.image}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <p>
                          <i className="far fa-calendar-alt"></i> {item.date}
                        </p>
                        <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;
