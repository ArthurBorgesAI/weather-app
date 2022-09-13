import React, { useState } from "react";

import getWeather from "../../services/getWeather";

import * as S from './styles';


const Search = (props) => {
    const { location, setLocation, onSearch } = props;

    return (
        <S.Container>
            <S.Input
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? onSearch(location) : {}}
                placeholder='Enter Location'
                type="text"
            />
        </S.Container>
    )
}

export default Search;