import { View, Text, StyleSheet, Pressable, Dimensions, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import songs from '../../model/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import {Audio} from 'expo-av';

const {width} = Dimensions.get('window');

const Player = () => {
  const [songIndex, setSongIndex] = useState(0);
  const [soundObj, setSoundObj] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusic = async () => {
    const soundObj = await Audio.Sound.createAsync(songs[songIndex].url)
    try {
      if (!isPlaying) {
        setIsPlaying(!isPlaying);
        setSoundObj(soundObj)
        await soundObj.sound.playAsync();
      } else {
        setIsPlaying(!isPlaying);
        setSoundObj(soundObj)
        await soundObj.sound.pauseAsync();
      }
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    return soundObj ? () => soundObj.sound.unloadAsync() : undefined
  }, [soundObj])

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FlatList
          data={songs}
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.artwork} />
            </View>
          )}
          onMomentumScrollEnd={event => {
            const index = Math.floor(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width)

            setSongIndex(index);
          }}
          horizontal
          pagingEnabled
         />
         <View style={styles.songDataContainer}>
            <View>
              <Text style={styles.title}>{songs[songIndex].title}</Text>
              <Text style={styles.artist}>{songs[songIndex].artist}</Text>
            </View>
            <Ionicons name='heart-outline' size={24} color='#00FFFF' />
         </View>
         <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#00FFFF"
            minimumTrackTintColor="#00FFFF"
            maximumTrackTintColor="#FFFFFF"
          />
          <View style={styles.durationContainer}>
            <Text style={styles.duration}>00:00</Text>
            <Text style={styles.duration}>00:00</Text>
          </View>
      </View>
      <View style={styles.bottomContainer}>
        <Pressable>
            <Ionicons name='play-skip-back-outline' size={30} color='#00FFFF' />
        </Pressable>
        <Pressable onPress={handleMusic}>
            <Ionicons name='ios-play-circle' size={70} color='#00FFFF' />
        </Pressable>
        <Pressable>
            <Ionicons name='play-skip-forward-outline' size={30} color='#00FFFF' />
        </Pressable>
      </View>
    </View>
  )
}

export default Player

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1
  },
  imageContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 340,
    borderRadius: 20
  },
  songDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    color: 'white'
  },
  artist: {
    color: 'gray'
  },
  slider: {
    width: width,
    height: 40
  },
  durationContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  duration: {
    color: 'white'
  },
  bottomContainer: {
    width: width,
    flexDirection: 'row',
    paddingHorizontal: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})
