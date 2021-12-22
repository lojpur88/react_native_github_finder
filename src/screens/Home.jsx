import React, { useContext } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Platform,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS, HEIGHT } from '../components/shared/constants';
import SearchUsersForm from '../components/users/SearchUsersForm';
import Spinner from '../components/shared/Spinner';
import { GithubContext } from '../context/GithubContext';
import UsersList from '../components/users/UsersList';

export default function Home() {
  const { loading, users } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>GitHub Finder</Text>
          <AntDesign name='github' size={24} color={COLORS.lightGrey} />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          {users.length <= 0 ? <SearchUsersForm /> : <UsersList />}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    padding: 20,
  },
  headerContainer: {
    height: HEIGHT * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 30 : 40,
    backgroundColor: COLORS.darkGrey,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: COLORS.lightGrey,
  },
});
