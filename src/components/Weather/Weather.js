import React from "react";
import * as S from './styles';


const Weather = (props) => {
    const {data} = props;
    return (
        <S.Container>
            <S.Location>
                <h1>{data?.name}</h1>
            </S.Location>

            <S.WeatherContainer>
                {data?.main ? <h1>{data?.main.temp.toFixed()}°C</h1> : null}
            </S.WeatherContainer>

            <S.Description>
                {data?.weather ? <p>{data?.weather[0].main}</p> : null}
            </S.Description>
        </S.Container>
    );
}

export default Weather;