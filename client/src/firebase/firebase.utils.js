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

export const videoFirebase = (urlVideo, setUrlVideo) => {
    const fileFirebase = storage.refFromURL(urlVideo);
    fileFirebase.getDownloadURL().then(url => {
        setUrlVideo(url);
    });
};

const timeOut = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const getDownloadPictureURL = async listAll => {
    const pictureToPush = [];
    await listAll.items.forEach(async item => {
        const url = await item.getDownloadURL();
        pictureToPush.push(url);
    });
    await timeOut(400);
    return pictureToPush;
};

export const imageBackgroundFirebase = mainFolder => deviceFolder => setImage => {
    const storageRef = storage.ref();
    const listRef = storageRef.child(`${mainFolder}/${deviceFolder}`);
    listRef.listAll().then(res => {
        res.items.forEach(item => {
            item.getDownloadURL().then(url => {
                setImage(url);
            });
        });
    });
};
