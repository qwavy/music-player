import {Audio} from 'expo-av';

export const play = async (audio, setSoundObj, onPlaybackStatusUpdate) => {
    const playbackObj = new Audio.Sound();
    const status = await playbackObj.loadAsync(audio.url, {shouldPlay: true, progressUpdateIntervalMillis: 1000});
    setSoundObj({playbackObj, currentAudio: audio, status});
    playbackObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
}

