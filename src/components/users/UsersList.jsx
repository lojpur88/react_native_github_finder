import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import UserItem from './UserItem';
import { GithubContext } from '../../context/GithubContext';
import { COLORS } from '../shared/constants';
import Spinner from '../shared/Spinner';

export default function UsersList() {
  const { users, dispatch, loading } = useContext(GithubContext);

  const clearUsers = () => {
    dispatch({ type: 'CLEAR_USERS' });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <View>
      <TouchableOpacity onPress={clearUsers} style={styles.clearBtn}>
        <Text style={styles.clearBtnText}>CLEAR</Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserItem login={item.login} avatar_url={item.avatar_url} />
        )}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  clearBtn: {
    backgroundColor: COLORS.lightGrey,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 5,
    position: 'relative',
  },
  clearBtnText: {
    fontWeight: 'bold',
  },
});
