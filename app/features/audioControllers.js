import {Audio} from 'expo-av';

export const play = async (audio, setSoundObj) => {
    const playbackObj = new Audio.Sound();
    const status = await playbackObj.loadAsync(audio.url, {shouldPlay: true});
    setSoundObj({playbackObj, currentAudio: audio, status});
}

