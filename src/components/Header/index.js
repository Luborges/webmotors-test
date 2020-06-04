import React, { useState } from 'react';
import Webmotors from '../../assets/webmotors.svg?t=7496';
import Car from '../../assets/icon-search-car.svg?t=9040';
import Bike from '../../assets/icon-search-bike.svg?t=9040';

import { 
    BottomLine,
    BottomText,
    Button, 
    ButtonContainer,
    HeaderDiv, 
    Icon,
    Logo, 
    Tab,
    Text,
    TopLine,
    TopText,
} from './styles';

function Header () {
    const [selected, setSelected] = useState(0);

    function handleClick (num) {
        setSelected(num);
    }

    return (
        <HeaderDiv>
            <TopLine>
                <Logo src={Webmotors} alt="Webmotors" title="Webmotors" />
            </TopLine>  
            <BottomLine>
                <Tab active={selected === 0} onClick={() => handleClick(0)}>
                    <Icon src={Car} 
                        color={selected === 0 ? '#f3123c' : '#000'} />
                        <Text>
                            <TopText>
                                Comprar
                            </TopText>
                            <BottomText color={selected === 0 ? '#f3123c' : '#000'}>
                                Carros
                            </BottomText>
                        </Text>
                </Tab>
                <Tab active={selected === 1} onClick={() => handleClick(1)}>
                    <Icon src={Bike} 
                        color={selected === 1 ? '#f3123c' : '#000'} />
                        <Text>
                            <TopText>
                                Comprar
                            </TopText>
                            <BottomText color={selected === 1 ? '#f3123c' : '#000'}>
                                Motos
                            </BottomText>
                        </Text>
                </Tab>
                <ButtonContainer>
                    <Button>Vender meu carro</Button>
                </ButtonContainer>
            </BottomLine>
        </HeaderDiv>
  );
}

export default Header;
