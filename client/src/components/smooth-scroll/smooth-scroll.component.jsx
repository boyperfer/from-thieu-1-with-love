import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';

import { SmoothScrollContainer, ArrowDown, ArrowUp, ArrowContainer } from './smooth-scroll.style';

const SmoothScroll = () => {
    const toggleOnBackground = useSelector(({ toggle: { onBackground } }) => onBackground);
    return (
        <SmoothScrollContainer toggleOnBackground={toggleOnBackground}>
            <ArrowContainer>
                <Link
                    activeClass='active'
                    to='picture'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <ArrowUp />
                </Link>
                <Link
                    activeClass='active'
                    to='video'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <ArrowDown />
                </Link>
            </ArrowContainer>
        </SmoothScrollContainer>
    );
};

export default SmoothScroll;
