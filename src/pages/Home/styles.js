import styled from 'styled-components';

export const Box = styled.div`
    max-width: 933px;
    background-color: #fff;
    margin: 0px 10px 10px 10px;
    justify-content: start;
    align-items: start;
    display: flex;
    flex-direction: column;
    padding: 30px 15px;
    @media (min-width: 933px) {
        width: 903px;
    }
`;

export const HeaderContainer = styled.div`
    max-width: 933px;
    max-height: 312px;
    margin: 0px 0px 0px 0px;
    justify-content: start;
    align-items: start;
    display: flex;
    flex-direction: column;
    padding: 0px 0px;
    @media (min-width: 933px) {
        width: 903px;
    }
`;

export const ButtonFindOffers = styled.button`
    width: 65%;
    background-color: #a33;
    border-radius: 5px;
    color: #fff;
    padding: 5px 15px;
    margin: 10px;
    font-size: 16px;
    align-self: right;
    cursor: pointer;
`;

export const CarList = styled.div`
    max-width: 939px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Item = styled.div`
    margin: 20px 5px 0px 5px;
    font-size: 12px;
`;

export const CheckBox = styled.input`
    margin: 0px 7px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #eee;
`;

export const Input = styled.input`
    width: calc(80% - 70px);
    border: 2px solid #ddd;
    border-right: 0px;
    padding: 3px 3px 3px 65px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 14px;
    @media (max-width: 933px) {
        width: calc(80% - 75px);
        padding: 3px 3px 4px 70px;
    }
    @media (max-width: 360px) {
        width: calc(80% - 75px);
        padding: 2px 3px 3px 70px;
    }
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.align || 'center'};
    width: 100%;
    max-width: 873px;
    @media (max-width: 933px) {
        flex-wrap: wrap;
    }
`;

export const HalfLine = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    @media (max-width: 933px) {
        width: 100%;
    }
`;

export const Label = styled.label`
    position: absolute;
    margin-top: 5px;
    margin-left: 3px;
    font-size: 14px;
    color: #888;
`;

export const LineContainer = styled.div`
    width: 100%;
    margin: 5px 5px;
`;

export const Select = styled.select`
    width: 100%;
    border: 2px solid #ddd;
    padding: 3px 50px 1px 3px;
    font-size: 14px;
    border-radius: 5px;
    color: #888;
`;

export const SelectKm = styled.select`
    width: 20%;
    border: 2px solid #ddd;
    padding: 2px 3px 3px 3px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 14px;
    color: #888;
    @media (max-width: 933px) {
        padding: 2px 3px 4px 3px;
    }
    @media (max-width: 360px) {
        padding: 2px 3px 3px 3px;
    }
`;

export const Option = styled.option`
    font-size: 14px;
    color: #888;
`;

export const FilterButton = styled.div`
    color: #888;
    font-size: 14px;
    margin: 20px;
    cursor: pointer;
`;

export const ButtonSearch = styled.div`
    color: #a33;
    font-weight: bold;
    margin: 20px;
    &:before {
        border-right: 2px solid #a33;
        border-bottom 2px solid #a33;
        width: 5px;
        content: '';
        height: 5px;
        transform: rotate(-45deg);
        margin-top: 5px;
        margin-left: -15px;
        float: left;
    }
    cursor: pointer;
`;

export const MapIcon = styled.img`
    width: 20px;
    height: 18px;
`;

export const LabelText = styled.span`
    position: absolute;
    margin-top: 0px;
`;

export const PageButton = styled.div`
    display: inline-block;
    border-right: 2px solid #a33;
    border-bottom 2px solid #a33;
    width: 5px;
    height: 5px;
    transform: rotate(${props => props.right ? '-45deg' : '135deg'});
    cursor: pointer;
`;

export const RightLine = styled.div`
    width: 100%;
    text-align: right;
`;

export const PageNumber = styled.div`
    display: inline-block;
    margin: 4px;
`;