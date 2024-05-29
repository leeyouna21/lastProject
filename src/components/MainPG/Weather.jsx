import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Weather = () => {
    const API_KEY = "68a58b70236437cfe190633d8916c799";
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    try {
                        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
                        setResult(response.data);
                    } catch (error) {
                        setError(error.message);
                    }
                },
                error => {
                    setError('사용자의 위치를 가져올 수 없습니다.');
                }
            );
        } else {
            setError('브라우저가 Geolocation API를 지원하지 않습니다.');
        }
    }, [API_KEY]);

    const searchWeather = async (e) => {
        if (e.key === 'Enter') {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
                setResult(response.data);
            } catch (err) {
                setError(err.message);
            }
        }
    }

    return (
        <AppWrap>
            <div className="appContentWrap">
                <input
                    type="text"
                    placeholder='도시를 입력하세요'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={searchWeather}
                />
                {error && <div>Error: {error}</div>}
                {
                    Object.keys(result).length !== 0 && (
                        <ResultWrap>
                            <div className="city">{result.name}</div>
                            <div className="temporature">
                                {Math.round(((result.main.temp - 273.15) * 10)) / 10}°C
                            </div>
                            <div className="sky">{result.weather[0].main}</div>
                        </ResultWrap>
                    )
                }
            </div>
        </AppWrap>
    );
}

export default Weather;

const AppWrap = styled.div`
    .appContentWrap {
        height: 260px;
    }
    input {
        width: 300px;
        height: 60px;
        border: 1px solid #e4e4e4;
        border-radius: 10px;
        margin-left: 100px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

const ResultWrap = styled.div`
    .city {
        font-size: 24px;
        text-align: center;
    }
    .temporature {
        font-size: 60px;
        margin-top: 8px;
        text-align: center;
    }
    .sky {
        font-size: 20px;
        margin-top: 8px;
        text-align: center;
        margin-bottom: 20px;
    }
`;
