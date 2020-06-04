import React from 'react';

import { Card, CarImage, Title, VersionDiv, PriceDiv, Line, BottomText } from './styles';

function CarCard({ data }) {
    const { Make, Model, Version, Image, KM, Price, YearFab, YearModel } = data;

    return (
        <Card>
            <CarImage src={Image} />
            <Title>{Make} - {Model}</Title>
            <VersionDiv>{Version}</VersionDiv>
            <PriceDiv>R$ {Price}</PriceDiv>
            <Line>
                <BottomText align={'left'}>{YearModel}/{YearFab}</BottomText>
                <BottomText align={'right'}>{KM} KM</BottomText>
            </Line>
        </Card>
    );
}

export default CarCard;
