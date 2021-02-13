import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
          <Feather name="edit-2" size={30} style={{ marginRight: 10 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text> {blogPost.title} </Text>
      <Text> {blogPost.content} </Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
