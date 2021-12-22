import React, { useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, HEIGHT, WIDTH } from '../components/shared/constants';
import { GithubContext } from '../context/GithubContext';
import { getUserAndRepos } from '../context/GithubActions';
import ReposList from '../components/repos/ReposList';
import Spinner from '../components/shared/Spinner';

export default function User({ navigation, route }) {
  const { login } = route.params;
  const { dispatch, user, repos, loading } = useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserData = async () => {
      const response = await getUserAndRepos(login);
      dispatch({ type: 'GET_USER_AND_REPOS', payload: response });
    };
    getUserData();
  }, [dispatch, login]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name='caretleft' size={24} color={COLORS.lightGrey} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>GitHub finder</Text>
        <AntDesign name='github' size={24} color={COLORS.lightGrey} />
      </View>
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <ImageBackground
            source={{ uri: user.avatar_url }}
            style={{ width: WIDTH * 0.4, height: WIDTH * 0.4 }}
            imageStyle={{ borderRadius: 5 }}
          >
            <LinearGradient
              colors={['transparent', 'transparent', COLORS.dark]}
              style={styles.gradient}
            >
              <Text
                style={{
                  color: COLORS.lightGrey,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
              >
                {user.name}
              </Text>
              <Text style={{ color: COLORS.lightGrey }}>{user.login}</Text>
            </LinearGradient>
          </ImageBackground>
          <View
            style={{
              paddingLeft: 10,
              paddingVertical: 5,
              justifyContent: 'space-between',
            }}
          >
            <View style={styles.typeWrapper}>
              <View style={styles.type}>
                <Text style={styles.typeText}>{user.type}</Text>
              </View>
              {user.hireable && (
                <View style={styles.type}>
                  <Text style={styles.typeText}>Hireable</Text>
                </View>
              )}
            </View>
            <View>
              <Text style={{ color: COLORS.lightGrey }}>
                <Text style={{ fontWeight: 'bold' }}>Public repos: </Text>
                {user.public_repos}
              </Text>
              <Text style={{ color: COLORS.lightGrey }}>
                <Text style={{ fontWeight: 'bold' }}>Public gists: </Text>
                {user.public_gists}
              </Text>
              <Text style={{ color: COLORS.lightGrey }}>
                <Text style={{ fontWeight: 'bold' }}>Followers: </Text>
                {user.followers}
              </Text>
              <Text style={{ color: COLORS.lightGrey }}>
                <Text style={{ fontWeight: 'bold' }}>Following: </Text>
                {user.following}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          {user.location && (
            <Text style={{ color: COLORS.lightGrey }}>
              <Text style={{ fontWeight: 'bold' }}>Location: </Text>
              {user.location}
            </Text>
          )}
          {user.email && (
            <Text style={{ color: COLORS.lightGrey }}>
              <Text style={{ fontWeight: 'bold' }}>Email: </Text>
              {user.email}
            </Text>
          )}
        </View>
        <View style={{ flex: 1, marginTop: 20 }}>
          <Text
            style={{
              color: COLORS.lightGrey,
              fontSize: 18,
              fontWeight: 'bold',
              paddingBottom: 10,
            }}
          >
            Latest repos:
          </Text>
          {repos.length > 0 ? (
            <ReposList repos={repos} />
          ) : (
            <Text style={{ color: COLORS.lightGrey }}>No repos</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: COLORS.lightGrey,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    padding: 20,
  },
  gradient: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.2)',
    padding: 10,
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: COLORS.darkGrey,
    borderRadius: 5,
  },
  profileWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typeWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  type: {
    backgroundColor: COLORS.darkGrey,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  typeText: {
    color: COLORS.lightGrey,
  },
});
