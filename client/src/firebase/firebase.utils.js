import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: 'AIzaSyD5LAbHlOYy0G4o8AJsM-fHx0SgqXXnpPQ',
    authDomain: 'fromthieu1withlove.firebaseapp.com',
    databaseURL: 'https://fromthieu1withlove.firebaseio.com',
    projectId: 'fromthieu1withlove',
    storageBucket: 'fromthieu1withlove.appspot.com',
    messagingSenderId: '77633910183',
    appId: '1:77633910183:web:1179f429c5e0a8c5a0b282'
};

firebase.initializeApp(config);

export const storage = firebase.storage();

const timeOut = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const getDownloadPictureURL = async listAll => {
    const pictureToPush = [];
    await listAll.items.forEach(async item => {
        const url = await item.getDownloadURL();
        pictureToPush.push(url);
    });
    await timeOut(500);
    return pictureToPush;
};

export const getDownloadVideoUrl = async link => {
    const url = await link.getDownloadURL();
    await timeOut(300);
    return url;
};
