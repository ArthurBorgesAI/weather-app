import styled from 'styled-components';


export const Page = styled.div`
  width: 100%;
  height: 100vh;
  min-height:800px;
  position: absolute;
  background-color: rgba(0,0,0,0.4);
  color: #fff;

  ::before {
    content: '';
    background: url(${require('../../assets/bgimg.jpg')}) no-repeat center center/cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Container = styled.div`
  max-width: 700px;
  height: 600px;
  margin: auto;
  padding: 0 1rem;
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
