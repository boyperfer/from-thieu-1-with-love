import React from 'react';

import { useSelector } from 'react-redux';

import Deck from '../Deck/deck.component';

import WithLoader from '../with-loader/with-loader.component';

import { CollectionPictureContainer } from './collection-picture.style';

const DeckContainer = WithLoader(Deck);

const CollectionPicture = () => {
    const isPictureFetched = useSelector(({ picture: { pictures } }) => !!pictures);
    const picture = useSelector(({ picture: { pictures } }) => pictures);
    return (
        <CollectionPictureContainer>
            <DeckContainer isFetching={!isPictureFetched} picture={picture} />
        </CollectionPictureContainer>
    );
};

export default CollectionPicture;
