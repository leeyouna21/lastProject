import React, { useState, useEffect } from 'react';
import Weather from '../MainPG/Weather';
import Login from '../Login/Login';
import Banner from '../Banner/Banner';

const MainPg = () => {
  return (
    <div>
        <div className="main_wrap">
            <div className="main_top_container">
                <div className="main_search">
                    <form action="">
                        <input type="text" 
                            placeholder='원하시는 검색어를 입력해주세요.'
                        />
                    </form>
                </div>
                <div className="category_wrap">
                    <div className="icon">
                        <img className='iconImg' src="/image/health.png" alt="" />
                        <h4>건강</h4>
                    </div>
                    <div className="icon">
                        <img className='iconImg' src="/image/travel.png" alt="" />
                        <h4>여행</h4>
                    </div>
                    <div className="icon">
                        <img className='iconImg' src="/image/hobby.png" alt="" />
                        <h4>취미</h4>
                    </div>
                    <div className="icon">
                        <img className='iconImg' src="/image/money.png" alt="" />
                        <h4>일자리</h4>
                    </div>
                    <div className="icon">
                        <img className='iconImg' src="/image/education.png" alt="" />
                        <h4>교육</h4>
                    </div>
                    <div className="icon">
                        <img className='iconImg' src="/image/book.png" alt="" />
                        <h4>도서</h4>
                    </div>
                    <div className="icon">
                        <img className='iconImg' src="/image/running.png" alt="" />
                        <h4>운동</h4>
                    </div>
                </div>
            </div>
            <div className="main_btm_container">
                <div className="btm_left">
                    <Banner></Banner>
                </div>
                <div className="btm_right">
                    <Login></Login>
                    <div className="weather_wrap">
                        <Weather></Weather>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPg