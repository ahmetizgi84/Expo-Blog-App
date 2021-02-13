import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, settitle] = useState(initialValues.title);
  const [content, setcontent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(txt) => settitle(txt)}
      />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(txt) => setcontent(txt)}
      />

      <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

export default BlogPostForm;

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
