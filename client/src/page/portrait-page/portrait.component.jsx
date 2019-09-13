import React from 'react';
import { withRouter } from 'react-router-dom';

import { PortraitPageContainer, TextContainer, Text } from './portrait.styles';

const PortraitPage = () => {
    return (
        <PortraitPageContainer>
            <TextContainer>
                <Text>
                    Các em xoay màn hình điện thoại ngang lại nhé rồi cùng nhau xem hình nào
                </Text>
            </TextContainer>
        </PortraitPageContainer>
    );
};

export default withRouter(PortraitPage);
