import React, { useState, useEffect,useContext } from 'react';
import Weather from '../MainPG/Weather';
import Login from '../Login/Login';
import Banner from '../Banner/Banner';
import Travel from '../Travel/Travel';
// import Login from '../Login/Login';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { UserContext } from '../../UserContext';



const MainPg = () => {
    const { user } = useContext(UserContext);

  return (
    <div>
        <div className="main_wrap">
            <div className="main_top_container">
                <div className="logo">
                    <img className='logo' src="/image/_logo.png" alt="" />
                </div>
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
                    <div className="News"></div>
                </div>
                <div className="btm_right">
                    
                    {/* <div className="login_wrap">
                    {user ? (
                        <p>로그인 성공: {user.email}</p>
                    ) : (
                        <p>로그인 정보가 없습니다.</p>
                    )}
                        <span>로그인 하시고 더 다양한 플랫폼을 즐겨보세요!</span>
                            <a href="../Login">
                                <div className="login_box">
                                    <h4>로그인</h4>
                                </div>
                            </a>
                        <div className="sub_wrap">
                            <div className="sing">회원가입</div>
                            <div className="ID">아이디</div>
                            <div className="PW">비밀번호 찾기</div>
                        </div>
                    </div> */}
                    <div className="login_wrap">
                        {user ? (
                            <>
                            <p>로그인 성공: {user.email}</p>
                            <span>반갑습니다.</span>
                            <div className="login_box">
                                <h4>{user.email}</h4>
                            </div>
                            </>
                        ) : (
                            <>
                            {/* <p>로그인 정보가 없습니다.</p> */}
                            <span>로그인 하시고 더 다양한 플랫폼을 즐겨보세요!</span>
                            <a href="../Login">
                                <div className="login_box">
                                <h4>로그인</h4>
                                </div>
                            </a>
                            <div className="sub_wrap">
                                <div className="sing">회원가입</div>
                                <div className="ID">아이디</div>
                                <div className="PW">비밀번호 찾기</div>
                            </div>
                            </>
                        )}
                    </div>
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
                            <p className='BP_more'>더보기</p>
                        </div>
                        <div className="table">
                            <tr>
                                <td className='Title'>새솔동에서 동네 모임 가지실 분 있나요?</td>
                                <td className='Data'>2024년 05월 30일</td>
                            </tr>
                        </div>
                        <div className="table">
                            <tr>
                                <td className='Title'>수원에서 스크린골프 모임 인원을 구합니다.</td>
                                <td className='Data'>2024년 05월 27일</td>
                            </tr>
                        </div>
                        <div className="table">
                            <tr>
                                <td className='Title'>주식, 증권, 제테크 관심 있는 분 찾아요.</td>
                                <td className='Data'>2024년 05월 20일</td>
                            </tr>
                        </div>
                        <div className="table">
                            <tr>
                                <td className='Title'>천안 근처 괜찮은 결혼식장 알고 계신 분 계시나요?</td>
                                <td className='Data'>2024년 04월 30일</td>
                            </tr>
                        </div>
                        <div className="table">
                            <tr>
                                <td className='Title'>친목회 모임에 가입하실 회원님들을 찾습니다.</td>
                                <td className='Data'>2024년 04월 29일</td>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default MainPg