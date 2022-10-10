import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import songs from '../../model/data';
import MusicItem from '../components/MusicItem';

const Music = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={({item}) => (
          <MusicItem item={item}/>
        )}
      />
    </View>
  )
}

export default Music

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})