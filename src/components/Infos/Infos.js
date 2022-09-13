import React from "react";
import * as S from './styles';

const Infos = (props) => {
    const { data } = props;
    return(
        <S.Container>
            <S.TermalSensation>
                {data?.main ? <p className='bold'>{data?.main.feels_like.toFixed()}°F</p> : null}
                <p>Feels Like</p>
            </S.TermalSensation>

            <S.Humidity>
                {data?.main ? <p className='bold'>{data?.main.humidity}%</p> : null}
                <p>Humidity</p>
            </S.Humidity>

            <S.Wind>
                {data?.wind ? <S.Bold>{data?.wind.speed.toFixed()} M/S</S.Bold> : null}
                <p>Wind Speed</p>
            </S.Wind>
        </S.Container>
    )
}

export default Infos;