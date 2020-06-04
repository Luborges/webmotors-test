import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import CarCard from '../../components/CarCard';

import Map from '../../assets/map.png';

import { 
    Box, 
    ButtonFindOffers,
    CarList,
    Input,
    Item, 
    CheckBox,
    Container,
    Label, 
    LabelText,
    Line,
    LineContainer,
    MapIcon,
    Option,
    HalfLine,
    Select,
    SelectKm,
    HeaderContainer,
    FilterButton,
    ButtonSearch,
    PageButton,
    PageNumber,
    RightLine
} from './styles';

import api from '../../services/api';

function Home() {
    const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    const prices = ['< R$20.000,00', 'R$20.000,00 - R$40.000,00', 'R$40.000,00 - R$60.000,00', 'R$60.000,00 - R$80.000,00', '> R$80.000,00'];
    const [makers, setMakers] = useState([]);
    const [models, setModels] = useState([]);
    const [versions, setVersions] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [allVehicles, setAllVehicles] = useState([]);
    const [page, setPage] = useState(1);
    
    const [selectedMake, setSelectedMake] = useState('0');
    const [selectedModel, setSelectedModel] = useState('0');
    const [selectedVersion, setSelectedVersion] = useState('0');
    const [selectedYear, setSelectedYear] = useState('0');
    const [selectedPrice, setSelectedPrice] = useState('0');
    
    const [checkBox, setCheckbox] = useState('0');

    useEffect(() => {
        api.get(`Vehicles?Page=${page}`)
            .then(response => {
                setVehicles(response.data);
                setAllVehicles(response.data);
        });
    }, [page]);

    useEffect(() => {
        api.get('Make')
            .then(response => {
                setMakers(response.data);
            });
    }, []);

    useEffect(() => {
        if (selectedMake === '0') {
            return;
        }

        api.get(`Model?MakeID=${selectedMake}`)
            .then(response => {
                setModels(response.data);
            });
    }, [selectedMake]);

    useEffect(() => {
        if (selectedModel === '0') {
            return;
        }
        api.get(`Version?ModelID=${selectedModel}`)
            .then(response => {
                setVersions(response.data);
            });
    }, [selectedModel]);

    useEffect(() => {
        let make;
        let model;
        let version;
        let vehicles = allVehicles;
        if (selectedMake !== '0'){
            make = makers.filter(item => item.ID === Number(selectedMake))[0].Name;
            vehicles = vehicles.filter(item => item.Make === make);
            
            if (selectedModel !== '0'){
                model = models.filter(item => item.ID === Number(selectedModel))[0].Name;
                vehicles = vehicles.filter(item => item.Model === model);
                
                if (selectedVersion !== '0'){
                    version = versions.filter(item => item.ID === Number(selectedVersion))[0].Name;
                    vehicles = vehicles.filter(item => item.Version === version);
                }
            }
        }
        
        if (checkBox === 1){
            vehicles = vehicles.filter(item => item.KM === 0);
        }
        else if (checkBox === 2){
            vehicles = vehicles.filter(item => item.KM > 0);
        }

        if (selectedYear !== '0'){
            vehicles = vehicles.filter(item => item.YearFab === Number(selectedYear) || item.YearModel === Number(selectedYear));
        }

        if (selectedPrice !== '0'){
            if (selectedPrice === '< R$20.000,00') {
                vehicles = vehicles.filter(item => parseFloat(item.Price, 10) <= 20000);
            }
            else if (selectedPrice === 'R$20.000,00 - R$40.000,00') {
                vehicles = vehicles.filter(item => parseFloat(item.Price, 10) >= 20000 && parseFloat(item.Price, 10) <= 40000 );
            }
            else if (selectedPrice === 'R$40.000,00 - R$60.000,00') {
                vehicles = vehicles.filter(item => parseFloat(item.Price, 10) >= 40000 && parseFloat(item.Price, 10) <= 60000 );
            }
            else if (selectedPrice === 'R$60.000,00 - R$80.000,00') {
                vehicles = vehicles.filter(item => parseFloat(item.Price, 10) >= 60000 && parseFloat(item.Price, 10) <= 80000 );
            }
            else if (selectedPrice === '> R$80.000,00') {
                vehicles = vehicles.filter(item => parseFloat(item.Price, 10) >= 80000);
            }
        }
        
        setVehicles(vehicles);
    }, [selectedModel, selectedMake, selectedVersion, checkBox, selectedYear, selectedPrice, allVehicles, makers, models, versions]);

    const handleChange = (evt, type) => {
        if (type === 'make') {
            setSelectedMake(evt.target.value);
            setSelectedModel('0');
            setSelectedVersion('0');
        }
        else if (type === 'model') {
            setSelectedModel(evt.target.value);
        }
        else if (type === 'version') {
            setSelectedVersion(evt.target.value);
        }
        else if (type === 'year') {
            setSelectedYear(evt.target.value);
        }
        else if (type === 'price') {
            setSelectedPrice(evt.target.value);
        }
    }

    const clearFilter = () => {
        setSelectedMake('0');
        setSelectedModel('0');
        setSelectedVersion('0');
        setSelectedModel('0');
        setSelectedVersion('0');
        setSelectedYear('0');
        setCheckbox('0');
        setSelectedPrice('0');
    }

    const handlePageChange = (type) => {
        if (type === 'back') {
            if (page > 1) {
                setPage(page-1);
            }
            else {
                alert('Você já está na primeira pagina');
            }
        }
        else {
            if (page > 2) {
                alert('Você já está na ultima pagina');
            }
            else {
                setPage(page+1);
            }
        }
    }

    return (
        <Container>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Box>
                <Line align={'start'}>
                    <Item><CheckBox type={'checkbox'} onClick={() => setCheckbox(1)} checked={checkBox === 1} />Novos</Item>
                    <Item><CheckBox type={'checkbox'} onClick={() => setCheckbox(2)} checked={checkBox === 2} />Usados</Item>
                </Line>
                <Line>
                    <HalfLine>
                        <LineContainer>
                            <Label htmlFor="location"><MapIcon src={Map} /><LabelText>Onde:</LabelText></Label><Input type='text' id='location' />
                            <SelectKm id='kms' value={''}>
                                <Option value='0'>Raio</Option>
                            </SelectKm>
                        </LineContainer>
                    </HalfLine>
                    <HalfLine>
                        <LineContainer>
                            <Select id='make' value={selectedMake} onChange={evt => handleChange(evt, 'make')}>
                                <Option value='0'>Marca: Todas</Option>
                                {makers.map(item => (
                                    <Option key={item.ID} value={item.ID}>{item.Name}</Option>
                                ))}
                            </Select>
                        </LineContainer>
                        <LineContainer>
                            <Select id='model' value={selectedModel} onChange={evt => handleChange(evt, 'model')}>
                                <Option value='0'>Modelo: Todos</Option>
                                {models.map(item => (
                                    <Option key={item.ID} value={item.ID}>{item.Name}</Option>
                                ))}
                            </Select>
                        </LineContainer>
                    </HalfLine>
                </Line>
                <Line>
                    <HalfLine>
                        <LineContainer>
                            <Select id='year' value={selectedYear} onChange={evt => handleChange(evt, 'year')}>
                                <Option value='0'>Ano Desejado</Option>
                                {years.map(item => (
                                    <Option key={item} value={item}>{item}</Option>
                                ))}
                            </Select>
                        </LineContainer>
                        <LineContainer>                        
                            <Select id='price' value={selectedPrice} onChange={evt => handleChange(evt, 'price')}>
                                <Option value='0'>Faixa de Preço</Option>
                                {prices.map(item => (
                                    <Option key={item} value={item}>{item}</Option>
                                ))}
                            </Select>
                        </LineContainer>
                    </HalfLine>
                    <HalfLine>
                        <LineContainer>
                            <Select id='version' value={selectedVersion} onChange={evt => handleChange(evt, 'version')}>
                                <Option value='0'>Versão: Todas</Option>
                                {versions.map(item => (
                                    <Option key={item.ID} value={item.ID}>{item.Name}</Option>
                                ))}
                            </Select>
                        </LineContainer>
                    </HalfLine>
                </Line>
                <Line>
                    <HalfLine>
                        <ButtonSearch>Busca Avançada</ButtonSearch>
                    </HalfLine>
                    <HalfLine>
                        <FilterButton onClick={clearFilter}>Limpar Filtros</FilterButton>
                        <ButtonFindOffers>Obter Ofertas</ButtonFindOffers>
                    </HalfLine>
                </Line>
                <RightLine>
                    <PageButton onClick={() => handlePageChange('back')} />
                    <PageNumber>{page}</PageNumber>
                    <PageButton onClick={() => handlePageChange('next')} right={true} />
                </RightLine>
            </Box>
            
            <CarList>
                {vehicles.map(item => (
                    <CarCard key={item.ID} data={item} />
                ))}
            </CarList>
        </Container>
    );
}

export default Home;
