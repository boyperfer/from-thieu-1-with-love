import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { changeOrientation } from './redux/orientation/orientation.actions';

import Loader from './components/loader/loader.component';
import WithLoader from './components/with-loader/with-loader.component';

import { GlobalStyles } from './global-styles';

import { AppContainer } from './App.style';

const HomePage = lazy(() => import('./page/home/home.component'));
const PicturePage = lazy(() => import('./page/picture-page/picture-page.component'));

const PicturePageLoader = WithLoader(PicturePage);

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getOrientation = () => dispatch(changeOrientation());
        const handleChange = () => {
            window.addEventListener('orientationchange', getOrientation);
        };
        handleChange();
        return () => {
            window.removeEventListener('orientationchange', getOrientation);
        };
    });

    return (
        <AppContainer>
            <GlobalStyles />
            <Switch>
                <Suspense fallback={<Loader />}>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/mat-thu' render={() => <PicturePageLoader />} />
                    <Route path='/xem-phim' render={() => <PicturePageLoader />} />
                    <Route path='/van-nghe' render={() => <PicturePageLoader />} />
                    <Route path='/ve-chai' render={() => <PicturePageLoader />} />
                </Suspense>
            </Switch>
        </AppContainer>
    );
};

export default App;