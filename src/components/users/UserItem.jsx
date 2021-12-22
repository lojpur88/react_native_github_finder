import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, WIDTH } from '../shared/constants';

export default function UserItem({ login, avatar_url }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('User', { login })}
    >
      <View>
        <Image source={{ uri: avatar_url }} style={styles.avatar} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{login}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkGrey,
    width: WIDTH * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  userInfo: {
    paddingLeft: 20,
  },
  username: {
    color: COLORS.lightGrey,
    fontWeight: 'bold',
    fontSize: 16,
  },
  avatar: {
    width: WIDTH * 0.15,
    height: WIDTH * 0.15,
    borderRadius: (WIDTH * 0.15) / 2,
  },
});
