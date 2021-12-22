import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { COLORS } from '../shared/constants';

export default function RepoItem({ repo }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL(repo.html_url)}
    >
      <View style={styles.repoTitle}>
        <FontAwesome5 name='link' size={16} color={COLORS.lightGrey} />
        <Text style={styles.repoTitleText}>{repo.name}</Text>
      </View>
      {repo.description && (
        <View style={{ paddingTop: 10 }}>
          <Text style={{ color: COLORS.lightGrey }}>{repo.description}</Text>
        </View>
      )}
      <View style={styles.badges}>
        <View style={styles.badge}>
          <FontAwesome5 name='eye' size={14} color='#007BFF' />
          <Text style={{ color: '#007BFF', paddingLeft: 5, fontSize: 14 }}>
            {repo.watchers_count}
          </Text>
        </View>
        <View style={styles.badge}>
          <FontAwesome5 name='star' size={14} color='#FFC107' />
          <Text style={{ color: '#FFC107', paddingLeft: 5, fontSize: 14 }}>
            {repo.stargazers_count}
          </Text>
        </View>
        <View style={styles.badge}>
          <FontAwesome5 name='info' size={14} color='#DC3545' />
          <Text style={{ color: '#DC3545', paddingLeft: 5, fontSize: 14 }}>
            {repo.open_issues}
          </Text>
        </View>
        <View style={styles.badge}>
          <FontAwesome5 name='utensils' size={14} color='#28A745' />
          <Text style={{ color: '#28A745', paddingLeft: 5, fontSize: 14 }}>
            {repo.forks}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkGrey,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  repoTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  repoTitleText: {
    color: COLORS.lightGrey,
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  badges: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  badge: {
    backgroundColor: COLORS.dark,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
});
