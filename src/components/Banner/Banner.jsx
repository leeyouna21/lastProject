import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../assets/scss/Banner/Banner.scss';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        autoplay={{ 
          delay: 2500, 
          disableOnInteraction: false 
        }} //자동 재생 여부와 지연 시간 설정
        loop={true} //루프 여부
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://www.work.go.kr/empInfo/empInfoSrch/detail/empDetailAuthView.do?callPage=detail&wantedAuthNo=DdA3242405242006" target="_blank" rel="noopener noreferrer">
            <img src="/image/job_banner_1.png" alt="" />
          </a>        
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.work.go.kr/empInfo/empInfoSrch/detail/empDetailAuthView.do?callPage=detail&wantedAuthNo=KJKM002405270002">
            <img src="/image/job_banner_2.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.work.go.kr/empInfo/empInfoSrch/detail/empDetailAuthView.do?callPage=detail&wantedAuthNo=K151232405280016" target="_blank" rel="noopener noreferrer">
            <img src="/image/job_banner_3.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.work.go.kr/empInfo/empInfoSrch/detail/empDetailAuthView.do?callPage=detail&wantedAuthNo=K131132405230017">
            <img src="/image/job_banner_4.png" alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
      <div className="more">
        <a href="https://www.seniorro.or.kr:4431/noin/searchWork.do">
          <h3>일자리 더보기</h3>
        </a>
      </div>
    </>
  );
}
