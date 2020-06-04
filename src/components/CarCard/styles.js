import styled from 'styled-components';

export const Card = styled.div`
    max-width: 270px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: 5px;
    padding: 10px;
    flex: 1;
`;

export const CarImage = styled.img`
    width: 270px;
    height: 150px;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0px 2px 0px;
`;

export const VersionDiv = styled.div`
    font-size: 12px;
    color: #999;
    margin: 0px 0px 25px 0px;
`;

export const PriceDiv = styled.div`
    font-size: 16px;
    color: #555;
`;

export const Line = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const BottomText = styled.div`
    width: 50%;
    font-size: 12px;
    color: #999;
    text-align: ${props => props.align || 'left'};
`;