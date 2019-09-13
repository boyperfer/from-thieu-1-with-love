import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import WebVTT from '../../assets/video/subtitle-vn.vtt';

import { VideoContainer, VideoContent, VideoSource } from './video-t1.style';

const VideoT1 = () => {
    const [system, setSystem] = useState('');
    const videoRef = useRef(null);
    const linkVideo = useSelector(({ video: { getLink } }) => getLink);
    const isFetchingVideo = useSelector(({ video: { isFetching } }) => isFetching);
    useEffect(() => {
        videoRef.current.src = linkVideo;
        return () => {};
    }, [linkVideo]);
    useEffect(() => {
        const getMobileOperatingSystem = () => {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            // Windows Phone must come first because its UA also contains "Android"
            if (/windows phone/i.test(userAgent)) {
                return 'Windows Phone';
            }

            if (/android/i.test(userAgent)) {
                return 'Android';
            }

            // iOS detection from: http://stackoverflow.com/a/9039885/177710
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                return 'iOS';
            }

            return 'unknown';
        };
        setSystem(getMobileOperatingSystem());
        return () => {};
    }, [system]);
    const timeOut = ms => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    useEffect(() => {
        const getTrack = async () => {
            try {
                await timeOut(300);
                const tracks = await videoRef.current.textTracks;

                const trackCues = await tracks[0].cues;

                const trackCuesArray = Object.keys(trackCues).map(key => trackCues[key]);
                var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                w < 900
                    ? trackCuesArray.map(track => {
                          return (track.line = 18);
                      })
                    : w >= 900 && w <= 1600
                    ? trackCuesArray.map(track => {
                          return (track.line = 15);
                      })
                    : trackCuesArray.map(track => {
                          return (track.line = 'auto');
                      });
            } catch (err) {
                console.log(err);
            }
        };
        getTrack();
        return () => {};
    }, [isFetchingVideo]);
    return (
        <VideoContainer>
            <VideoContent system={system} controls volume='1' ref={videoRef}>
                <VideoSource type='video/mp4' />
                <track kind='captions' src={WebVTT} srcLang='VN' default />
                Your browser does not support the video tag.
            </VideoContent>
        </VideoContainer>
    );
};

export default VideoT1;
