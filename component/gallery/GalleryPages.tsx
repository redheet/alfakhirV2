"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import GridImages from "./GridImages";
import { images } from "../utils/data/images";

export default function GalleryPages() {
  const [index, setIndex] = useState<number>(-1);
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
          <GridImages images={images} onClick={setIndex} />
          <Lightbox
            plugins={[Download, Fullscreen, Zoom, Thumbnails]}
            captions={{
              showToggle: true,
              descriptionTextAlign: "end",
            }}
            // open={open}
            // close={() => setOpen(false)}

            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={images}
          />
        </div>
      </div>
    </section>
  );
}
