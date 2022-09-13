import React, { useState } from "react";

import getWeather from "../../services/getWeather";

import Search from '../../components/Search';
import Weather from '../../components/Weather';
import Infos from '../../components/Infos';

import * as S from './styles';



const Home = () => {

    const [location, setLocation] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [data, setData] = useState({})
 
    const onSearch = async (location) =>{
        setIsLoading(true)
        const response = await getWeather(location)
        if (!response){
            setIsLoading(false);
            return;
        }else setData(response)
        setIsLoading(false);
    }

    return(
            <S.Page>  
                <Search location={location} setLocation={setLocation} onSearch={onSearch} />
                <S.Container>
                    <Weather data={data}/>
                    <Infos data={data}/>
                </S.Container>
            </S.Page>
    );
}

export default Home;