import styled from 'styled-components';

export const ButtonContainer = styled.div`
    flex: 11;
    text-align: right;
    padding: 10px;
    margin: 0px 1px;
`;

export const Button = styled.button`
    padding: 5px 30px;
    border: 2px solid #ff8300;
    color: #ff8300;
    cursor: pointer;
    &:hover {
        background-color: #ff8300;
        color: #fff;
    }
    @media (max-width: 360px) {
        padding: 0;
    }
`;

export const Logo = styled.img`
    height: 29px;
    margin-top: 10px;
    margin-left: 4px;
`;

export const HeaderDiv = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Tab = styled.div`
    display: flex;
    flex-direction: row;
    flex: 2;
    padding: 0px 12px;
    border: 3px solid #eee;
    border-bottom-color: ${props => props.active ? '#f3123c' : '#eee'};
    cursor: pointer;
    &:hover {
        border-bottom-color: #f3123c;
    }
`;

export const TopLine = styled.div`
    flex: 1;
    width: 100%;
`;

export const BottomLine = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex: 2;
    margin-top: 20px;
    @media (max-width: 933px) {
        padding: 2px 3px 4px 3px;
    }
`;

export const Icon = styled.img`
    color: ${props => props.color || '#000'};
`;

export const Text = styled.div`
    text-transform: uppercase;
    margin: 20px 0px 0px 10px;
`;

export const BottomText = styled.div`
    color: ${props => props.color || '#000'};
    padding-bottom: 2px;
`;

export const TopText = styled.div`
    font-size: 7px;
    margin-left: 1px;
`;

