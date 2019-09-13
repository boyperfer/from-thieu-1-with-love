import React from 'react';

import { useSelector } from 'react-redux';

import Deck from '../Deck/deck.component';

import { CollectionPictureContainer } from './collection-picture.style';

const CollectionPicture = () => {
    const picture = useSelector(({ picture: { pictures } }) => pictures);
    const isFetching = useSelector(({ picture: { pictures } }) => !!pictures);
    return (
        <CollectionPictureContainer>
            {isFetching ? <Deck picture={picture} /> : null}
        </CollectionPictureContainer>
    );
};

export default CollectionPicture;
