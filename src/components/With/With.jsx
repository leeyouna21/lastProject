import React, { useState, useEffect, useRef } from 'react';

const With = () => {
    const [messages, setMessages] = useState([
        { type: 'YOU', text: '안녕하세요, YUNA 님!' },
        { type: 'YOU', text: '골프 모임에 가입 하시는 거 어때요??' },
        { type: 'ME', text: '안녕하세요!' },
        { type: 'ME', text: '주로 어디서 활동하시나요??' }
    ]);
    const [input, setInput] = useState('');
    const chatContainerRef = useRef(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages((prevMessages) => [...prevMessages, { type: 'ME', text: input }]);
            setInput('');
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="With">
            <div className="with_left">
                <div className="left_container">
                    <div className="logo">
                        <a href="../MainPG"><h5>ScinerClub</h5></a>
                    </div>
                    <div className="chat_wrap">
                        <h3>함께해요</h3>
                        <div className="with_box_wrap">
                            <h3>골프모임 채팅창입니다.</h3>
                        </div>
                    </div>
                    <div className="user_name">
                        <h4>YUNA 님</h4>
                    </div>
                </div>
            </div>
            <div className="with_right">
                <div className="right_container">
                    <div className="chat_cont" ref={chatContainerRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.type === 'YOU' ? 'YOU_right' : 'ME_left'}>
                                <div className={msg.type}>
                                    <h4>{msg.text}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text_wrap">
                        <input 
                            type="text" 
                            value={input} 
                            onChange={handleInputChange} 
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default With;
