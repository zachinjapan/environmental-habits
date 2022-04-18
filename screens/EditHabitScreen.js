import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import t from "tcomb-form-native"; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  identity: t.String,
  habit: t.String,
  twoMinute: t.String,
  behavior: t.String,
  time: t.String,
  location: t.String,
  environment1: t.String,
  environment2: t.String,
  want: t.String,
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

      error: "Please enter your identity",

      stylesheet: formStyles,

      autoCapitalize: "none",

      autoCorrect: true,

      keyboardType: "default",

      returnKeyType: "next",
    },
    habit: {
      label: "The habit I’ll be focusing on is: ",
      placeholder: "Habit that reinforces your desired identity",

      error: "Please enter your habit",
      autoCapitalize: "none",

      autoCorrect: true,

      keyboardType: "default",

      returnKeyType: "next",
    },
    twoMinute: {
      label: "The two-minute version of my habit is: ",
      placeholder: "Two-minute version of your habit (first step)",

      error: "Please enter your two-minute version of your habit",
      autoCapitalize: "none",

      autoCorrect: true,

      keyboardType: "default",

      returnKeyType: "next",
    },
    behavior: {
      label: "I will...",
      placeholder: "What will you do? (2 minute version)",

      error: "Please enter what you will do",

      autoCapitalize: "none",

      autoCorrect: true,

      keyboardType: "default",

      returnKeyType: "next",
    },
    time: {
      label: "...at...",
      placeholder: "What time?",

      error: "Please enter what time",

      autoCapitalize: "none",

      autoCorrect: true,

      keyboardType: "default",

      returnKeyType: "next",
    },
    location: {
      label: "...in...",
      placeholder: "Where?",

      error: "Please enter where",

      autoCapitalize: "none",

      autoCorrect: true,

      keyboardType: "default",

      returnKeyType: "next",
    },
    environment1: {
      label:
        "I will add this one part of my environment to make the habit more obvious: ",
      placeholder: "action",

      error: "Please enter your action",

      autoCapitalize: "none",

      autoCorrect: true,

      keyboardType: "default",

      returnKeyType: "next",
    },
    environment2: {
      label:
        "I will change this one part of my environment to make the habit more convient: ",
      placeholder: "action",

      error: "Please enter your action",

      autoCapitalize: "none",

      autoCorrect: true,

      keyboardType: "default",

      returnKeyType: "next",
    },
    want: {
      label: "If I do my habit I get to do what I want to do which is...",
      placeholder: "What do you want to do? (reward action)",

      error: "Please enter what you want to do",

      autoCapitalize: "none",

      autoCorrect: true,

      keyboardType: "default",

      returnKeyType: "next",
    },
  },
  stylesheet: formStyles,
};

export default class EditHabitScreen extends Component {
  getMultiple = async () => {
    let values;
    try {
      values = await AsyncStorage.multiGet([
        "identity",
        "habit",
        "twoMinute",
        "behavior",
        "time",
        "location",
        "environment1",
        "environment2",
        "want",
      ]);
    } catch (e) {
      // read error
    }
    console.log("edit habit", values);

    if (values) {
      return {
        identity: values[0][1],
        habit: values[1][1],
        twoMinute: values[2][1],
        behavior: values[3][1],
        time: values[4][1],
        location: values[5][1],
        environment1: values[6][1],
        environment2: values[7][1],
        want: values[8][1],
      };
    }
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    if (value) {
      console.log(value);
      this.multiSet(value);

      this.props.navigation.navigate("MyHabitScreen");
    }
  };

  multiSet = async (formObject) => {
    const firstPair = ["identity", formObject.identity];
    const secondPair = ["habit", formObject.habit];
    const thirdPair = ["twoMinute", formObject.twoMinute];
    const fourthPair = ["behavior", formObject.behavior];
    const fifthPair = ["time", formObject.time];
    const sixthPair = ["location", formObject.location];
    const seventhPair = ["environment1", formObject.environment1];
    const eighthPair = ["environment2", formObject.environment2];
    const ninthPair = ["want", formObject.want];
    const pairs = [
      firstPair,
      secondPair,
      thirdPair,
      fourthPair,
      fifthPair,
      sixthPair,
      seventhPair,
      eighthPair,
      ninthPair,
    ];

    try {
      await AsyncStorage.multiSet(pairs);
    } catch (e) {
      //save error
    }

    console.log("Done.");
  };

  render() {
    this.getMultiple();
    return (
      <ScrollView>
        <View style={styles.container}>
          <Form ref={(c) => (this._form = c)} type={User} options={options} />
          <Button title="Add Habit" onPress={this.handleSubmit} />
        </View>
      </ScrollView>
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
