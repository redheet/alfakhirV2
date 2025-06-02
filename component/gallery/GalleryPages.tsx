"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState, useCallback } from "react";
import GridImages from "./GridImages";
import { images as allImages } from "../utils/data/images";

export default function GalleryPages() {
  const [index, setIndex] = useState<number>(-1);
  const [displayedImages, setDisplayedImages] = useState(allImages.slice(0, 8));
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const loadMoreImages = useCallback(() => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const newImages = allImages.slice(start, end);

    if (newImages.length > 0) {
      setDisplayedImages(prev => [...prev, ...newImages]);
      setPage(nextPage);
    }
  }, [page]);

  const hasMoreImages = displayedImages.length < allImages.length;

  return (
    <section className="tf__gallery_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>Foto-foto Kegiatan</h5>
              <h2>Foto-foto SMPI Modern Al-Fakhir</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <GridImages images={displayedImages} onClick={setIndex} />
          <Lightbox
            plugins={[Download, Fullscreen, Zoom, Thumbnails]}
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={displayedImages}
          />
        </div>

        {/* Button Load More */}
        {hasMoreImages && (
          <div className="text-center mt-4">
            <button
              onClick={loadMoreImages}
              className="common_btn_2 ms-auto"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
