import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const getMultiple = async () => {
  try {
    const [
      identity,
      habit,
      twoMinute,
      behavior,
      time,
      location,
      environment1,
      environment2,
      want,
    ] = await AsyncStorage.multiGet([
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
    console.log(
      identity,
      habit,
      twoMinute,
      behavior,
      time,
      location,
      environment1,
      environment2,
      want
    );
    return {
      identity,
      habit,
      twoMinute,
      behavior,
      time,
      location,
      environment1,
      environment2,
      want,
    };
  } catch (error) {
    console.log(error);
  }
};

function MyHabitScreen() {
  const [habit, setHabit] = React.useState({
    identity: "",
    habit: "",
    twoMinute: "",
    behavior: "",
    time: "",
    location: "",
    environment1: "",
    environment2: "",
    want: "",
  });
  useEffect(() => {
    getMultiple().then((habit) => {
      setHabit(habit);
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.title}>My Habit</Text>
      <Text style={styles.text}>I am a person who {habit.identity[1]}</Text>
      <Text style={styles.text}>I am going to {habit.habit[1]}</Text>
      <Text style={styles.text}>
        {" "}
        At first my only goal will be to {habit.twoMinute[1]}
      </Text>
      <Text style={styles.text}>
        {" "}
        I will {habit.behavior[1]} at {habit.time[1]} in {habit.location[1]}
      </Text>
      <Text style={styles.text}>
        {" "}
        I will {habit.environment1[1]} and {habit.environment2[1]}
      </Text>
      <Text style={styles.text}>
        {" "}
        When I complete my habit I will {habit.want[1]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },

  content: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  text: {
    fontSize: 18,
    textAlign: "left",
    margin: 10,
  },
});

export default MyHabitScreen;
