import React, { useState, useEffect } from 'react';
import Weather from '../MainPG/Weather';
import Login from '../Login/Login';
import Banner from '../Banner/Banner';
import Travel from '../Travel/Travel';
import { Link } from 'react-router-dom';

const MainPg = () => {
  return (
    <div>
        <div className="main_wrap">
            <div className="main_top_container">
                {/* <div className="logo">
                    <img src="/image/logo.png" alt="" />
                </div> */}
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
                    <Link to="/travel" className="icon">
                        <img className="iconImg" src="/image/travel.png" alt="" />
                        <h4>여행</h4>
                    </Link>
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
                    {/* <div className="weather_wrap">
                        <Weather></Weather>
                    </div> */}
                    <div className="with_wrap">
                        <img className='withlogo' src="/image/with_wrap.png" alt="" />
                        <div className="wite_text">
                            <a className='with' href="../With">
                                <h4>혼자보단 둘, 둘 보단 셋, 셋 보단 모두 !</h4>
                                <h1>모임해요</h1>
                                <h4>
                                모임 속에서 취미를 공유하고, 시간을 공유하며<br />
                                자유로운 만남을 가질 수 있어요.
                            </h4>
                            </a>
                        </div>
                        
                    </div>
                    <div className="Board_Preview_wrap">
                        <div className="BP_title">
                            <p>시니어클럽 자유게시판</p>
                            <p>더보기</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPg