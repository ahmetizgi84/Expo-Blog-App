import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = () => {
  const { addBlogPost } = useContext(Context);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(txt) => settitle(txt)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(txt) => setcontent(txt)}
      />

      <Button
        title="Add Blogpost"
        onPress={() => addBlogPost(title, content)}
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    margin: 5,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
