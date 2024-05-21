import React from 'react';

const Main = () => {
  return (
    <div>
      <div className="photocontainer">
        <div className="themephoto">
          <img className='themephoto' alt='photo' src='img/건강.png' />
          <div className="top_wrap">
            <div className="markbox">
              <button>마크위치</button>
            </div>
            <div className="loginbox">
              <button>로그인</button><h3>/</h3><button>회원가입</button>
            </div>
          </div>
        </div>
        <div className="themebox">
          <button>건강</button>
        </div>
        <div className="inputbox">
          <input className='inputbar' type='text' placeholder='원하시는 검색어를 입력해주세요.'></input>
        </div>
        <div className="themeinfobox">
          <span>어떤 음식이 어디에 좋은지,<br /> 어떤 영양제를 먹을지 추천과 구매를 한번에.</span >
        </div>
      </div>
      <div className="maincontainer">
        <div className="recommand_wrap">
          <div className="recommand_1st">
            <div className="recommand_1st_menu">
              <button> 코엔자임 </button><span> 영양제 추천 </span>
            </div>
            <div className="recommand_1st_box">
            <div className="recommand_box1">
              <img className='recommandphoto' alt='photo' src='img/약품사진1.png' />
              <span>닥터스베스트</span><span>CoQ10 100mg with 바이오페린</span>
              <span>ο 코엔자임 성분</span>
            </div>
            <div className="recommand_box2">
              <img className='recommandphoto' alt='photo' src='img/약품사진2.png' />
            </div>
            <div className="recommand_box3">
              <img className='recommandphoto' alt='photo' src='img/약품사진3.png' />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
