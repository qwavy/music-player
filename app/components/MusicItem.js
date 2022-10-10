import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const {width} = Dimensions.get('window');

const MusicItem = ({item}) => {
  const {title, artist, duration} = item;

  return (
    <Pressable style={({pressed}) => [
        {
          backgroundColor: pressed
          ? '#555555'
          : 'rgb(0,0,0)'
        },
        styles.container
      ]}>
      <View style={styles.leftContainer}>
        <View style={styles.icon}>
          <Ionicons name='play' size={24} color='#00FFFF' />
        </View>
        <View style={styles.namesWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </Pressable>
  )
}

export default MusicItem

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.25,
    borderBottomColor: 'gray'
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  artist: {
    color: 'gray'
  },
  rightContainer: {

  },
  duration: {
    color: 'gray'
  }
})