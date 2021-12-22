import React from 'react';
import { View, FlatList } from 'react-native';
import RepoItem from './RepoItem';

export default function ReposList({ repos }) {
  return (
    <View>
      <FlatList
        data={repos}
        renderItem={({ item }) => <RepoItem repo={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
}
