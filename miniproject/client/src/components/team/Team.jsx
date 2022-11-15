import React from "react";
import "./team.css";
import AVTR1 from "../posts/premium_photo-1663099358462-bcacf22f97c5.avif";
import AVTR2 from "../posts/premium_photo-1663099358462-bcacf22f97c5.avif";
import AVTR3 from "../posts/premium_photo-1663099358462-bcacf22f97c5.avif";
import AVTR4 from "../posts/premium_photo-1663099358462-bcacf22f97c5.avif";
import AVTR5 from "../posts/premium_photo-1663099358462-bcacf22f97c5.avif";
import AVTR6 from "../posts/premium_photo-1663099358462-bcacf22f97c5.avif";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";

const data = [
  {
    avatar: AVTR1,
    name: "Kunal Tyagi",
    // comp: 'CEO @Bending Tech',
    review:
      "The idea behind the SALAAH community of mentorship is only to form a strong network between seniors and juniors to provide the correct career path under the well-settled alumni.",
  },
  {
    avatar: AVTR2,
    name: "Varun Rana",
    // comp: 'SDE Intern',
    review:
      "We form a community under the association of recent pass out senior who is part of big MNC's  and senior who is being passionate to achieve their goals in life. ",
  },
  // {
  //   avatar: AVTR3,
  //   name: "Rohit Singh",
  //   // comp: 'CEO @TribalConnect',
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem cum, nam asperiores necessitatibus natus, eum itaque distinctio quis ipsum est sunt voluptas et similique perspiciatis delectus accusantium nesciunt sit? Illum voluptatum sequi neque ad fugiat veritatis molestias quo accusamus.",
  // },
  // {
  //   avatar: AVTR4,
  //   name: "Utkarsh Singh",
  //   // comp: 'Dev @SRM',
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem cum, nam asperiores necessitatibus natus, eum itaque distinctio quis ipsum est sunt voluptas et similique perspiciatis delectus accusantium nesciunt sit? Illum voluptatum sequi neque ad fugiat veritatis molestias quo accusamus.",
  // },
  // {
  //   avatar: AVTR5,
  //   name: "Sakshi Verma",
  //   // comp: 'CEO @TribalConnect',
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem cum, nam asperiores necessitatibus natus, eum itaque distinctio quis ipsum est sunt voluptas et similique perspiciatis delectus accusantium nesciunt sit? Illum voluptatum sequi neque ad fugiat veritatis molestias quo accusamus.",
  // },
  // {
  //   avatar: AVTR6,
  //   name: "Shruti Singh",
  //   // comp: 'CEO @TribalConnect',
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem cum, nam asperiores necessitatibus natus, eum itaque distinctio quis ipsum est sunt voluptas et similique perspiciatis delectus accusantium nesciunt sit? Illum voluptatum sequi neque ad fugiat veritatis molestias quo accusamus.",
  // },
];

const Team = () => {
  return (
    <div className="container">
      <section id="team__parent">
        <h1 className="Regular head__glass" style={{ textAlign: "center" }}>
          Governing Body
        </h1>
        <div class="feedback__controls">
          <button class="btn btn--bracket-left" ></button> 
          <button class="btn btn--bracket-right"></button>
        </div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          navigation={true}
          grabCursor={true}
          autoplay={{
            delay: 3233500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {data.map(({ avatar, name, comp, review }, index) => {
            return (
              <SwiperSlide key={index} className="team">
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--color-light)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {comp}
                </p>
                <small
                  className="client__review"
                  style={{
                    lineHeight: "25px",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.9rem",
                  }}
                >
                  {review}
                </small>
                <div className="client__avatar">
                  <img src={avatar} alt="Img1" />
                </div>
                <h5
                  className="client__name"
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0.8rem",
                    textAlign: "left",
                    // display:"flex",
                    // flex:"1",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {name}
                </h5>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div class="d-flex flex-wrap flex-lg-nowrap border-top--gray-lite pt-20 position-relative zindex-1 mt-auto">
          <div class="img-wrap--feedback-small mt-auto mb-auto">
            <img src="/_nuxt/img/feedback--mikolaj.d7edb2f.png" alt="avatar Mikolaj" class="img--cover"/>
          </div> 
          <div class="pl-lg-15 pt-15 pt-lg-0">
            <p class="text--machina text--16 text--bold text--whites mb-0">
                Mikolaj
            </p> 
            <p class="text--machina text--12 text--whites mb-0">
                Product Designer
            </p>
            </div>
          </div> */}
      </section>
    </div>
  );
};

export default Team;


{/* <div class="feedback__controls"><button class="btn btn--bracket-left"></button> <button class="btn btn--bracket-right"></button></div> */}