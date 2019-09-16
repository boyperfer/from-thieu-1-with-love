import React from 'react';

import { useSelector } from 'react-redux';

import { selectImages, selectIsFetchingDeck } from '../../redux/picture/picture.selectors';

import Deck from '../Deck/deck.component';

import { CollectionPictureContainer } from './collection-picture.style';

const CollectionPicture = () => {
    const images = useSelector(selectImages);
    const isFetching = useSelector(selectIsFetchingDeck);
    return (
        <CollectionPictureContainer>
            {!isFetching ? <Deck images={images} /> : null}
        </CollectionPictureContainer>
    );
};

export default CollectionPicture;
