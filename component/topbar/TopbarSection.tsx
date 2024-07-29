import React from "react";
type Props = {
  style: string;
};
const TopbarSection = ({ style }: Props) => {
  return (
    <section className={style}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6 d-none d-md-block">
            <div className="tf__topbar_left d-flex flex-wrap align-items-center">
              <p>Kunjungi halaman sosial kami:</p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61556239838524">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/smpi.alfakhir/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCywwH3nFH8zBB5rLq8_PKRA">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6285281752123">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="tf__topbar_right">
              <ul className="d-flex flex-wrap">
                <li>
                  <a
                    href="https://lms.smpialfakhir.sch.id"
                    target="_blank"
                  >
                    login
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6285281752123">your help</a>
                </li>
                {/* <li>
                  <a href="#">
                    <img src="/images/id.png" alt="language" /> indonesia
                  </a>
                  <ul className="tf__other_language">
                    <li>
                      <a href="#">
                        <img src="/images/jp.png" alt="language" /> japanese{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/uk.png" alt="language" /> english
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopbarSection;
