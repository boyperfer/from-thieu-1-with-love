import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { changeOrientation } from './redux/orientation/orientation.actions';

import Loader from './components/loader/loader.component';

import { GlobalStyles } from './global-styles';

import { AppContainer } from './App.style';

const HomePage = lazy(() => import('./page/home/home.component'));
const PicturePage = lazy(() => import('./page/picture-page/picture-page.component'));

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
                    <Route path='/mat-thu' render={() => <PicturePage />} />
                    <Route path='/xem-phim' render={() => <PicturePage />} />
                    <Route path='/van-nghe' render={() => <PicturePage />} />
                    <Route path='/ve-chai' render={() => <PicturePage />} />
                </Suspense>
            </Switch>
        </AppContainer>
    );
};

export default App;
