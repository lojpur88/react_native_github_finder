import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../shared/constants';
import { GithubContext } from '../../context/GithubContext';
import { searchUsers } from '../../context/GithubActions';

export default function SearchUsersForm() {
  const { dispatch } = useContext(GithubContext);
  const [text, setText] = useState('');

  const getUsers = async () => {
    if (text !== '') {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={value => setText(value)}
        placeholder='Enter the name or username...'
        style={styles.input}
        placeholderTextColor={COLORS.lightGrey}
      />
      <TouchableOpacity style={styles.searchBtn} onPress={getUsers}>
        <Text style={styles.searchBtnText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: COLORS.dark,
    color: COLORS.lightGrey,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey,
    width: '100%',
    paddingVertical: 10,
    fontSize: 16,
  },
  placeholderStyle: {
    color: COLORS.lightGrey,
  },
  searchBtn: {
    marginTop: 20,
    backgroundColor: COLORS.darkGrey,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  searchBtnText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.lightGrey,
  },
});
