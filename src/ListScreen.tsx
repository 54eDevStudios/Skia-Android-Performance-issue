import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import UsernameDisplay from "./UsernameDisplay";

export const ListScreen = () => {
  const dataArray = [
    { username: "avhjjhjhsb" },
    { username: "xbhjasjhxb" },
    { username: "xbhasbjh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
    { username: "xhasbxhasbh" },
  ];

  const renderItem = useCallback(({ item }: { item: { username: string } }) => {
    return <UsernameDisplay username={item.username} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
});
