import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/header/header.component';

import { toggleText } from '../../redux/toggle-hidden/toggle-hidden.action';

import {
    HomeContainer,
    HomeMainText,
    HomeSupText,
    HomeTextContainer,
    NumberText,
    CustomButtonContainer
} from './home.styles';

const HomePage = () => {
    const toggleOnText = useSelector(({ toggle: { onText } }) => onText);
    const dispatch = useDispatch();

    return (
        <HomeContainer>
            <Header />
            <HomeTextContainer toggleOnText={toggleOnText}>
                <HomeMainText> From Thiếu </HomeMainText>
                <NumberText>1</NumberText>
                <HomeSupText> With Love </HomeSupText>
                <CustomButtonContainer
                    onClick={() => dispatch(toggleText())}
                    toggleOnText={toggleOnText}
                    isWhiteButton
                >
                    {!toggleOnText ? 'trên người em có một cái khăn' : 'khăn màu xanh'}
                </CustomButtonContainer>
            </HomeTextContainer>
        </HomeContainer>
    );
};

export default HomePage;
