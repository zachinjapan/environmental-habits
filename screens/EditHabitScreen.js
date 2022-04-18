import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import t from "tcomb-form-native"; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  identity: t.String,
  habit: t.String,
  twoMinute: t.String,
  behavior: t.String,
  time: t.String,
  location: t.String,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: "blue",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600",
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600",
    },
  },
};

const options = {
  fields: {
    identity: {
      label: "I’m the type of person who:",
      placeholder: "Your desired identity",
    },
    habit: {
      label: "The habit I’ll be focusing on is: ",
      placeholder: "Habit that reinforces your desired identity",
    },
    twoMinute: {
      label: "The two-minute version of my habit is: ",
      placeholder: "Two-minute version of your habit",
    },
    behavior: {
      label: "I will...",
      placeholder: "What will you do?",
    },
    time: {
      label: "...at...",
      placeholder: "What time?",
    },
    location: {
      label: "...in...",
      placeholder: "Where?",
    },
  },
  stylesheet: formStyles,
};

export default class EditHabitScreen extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref={(c) => (this._form = c)} type={User} options={options} />
        <Button title="Add Habit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
