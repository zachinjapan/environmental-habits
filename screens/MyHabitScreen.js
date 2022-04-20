import styled from "styled-components/native";
import { Button, View, Text, StyleSheet, navigation } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
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
      currentDate,
      repitions,
      desiredRepitions,
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
      "currentDate",
      "repitions",
      "desiredRepitions",
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
      want,
      currentDate,
      repitions,
      desiredRepitions
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
      currentDate,
      repitions,
      desiredRepitions,
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
    currentDate: new Date().toLocaleDateString(),
    repitions: 0,
    desiredRepitions: 0,
  });

  const [successRate, setSuccessRate] = React.useState(0);

  useFocusEffect(
    React.useCallback(() => {
      getMultiple().then((habit) => {
        setHabit(habit);
        // calculateSuccessRate();
      });
    }, [])
  );

  const calculateSuccessRate = () => {
    let currentDate = new Date();
    let amountOfDaysSinceStart =
      (currentDate.getTime() - habit.currentDate.getTime()) /
      (1000 * 60 * 60 * 24);
    let amountOfDaysSinceStartInt = Math.floor(amountOfDaysSinceStart);
    let idealRepitions = habit.desiredRepitions * amountOfDaysSinceStartInt;
    let actualRepitions = habit.repitions;

    // calculate success rate
    setSuccessRate((actualRepitions / idealRepitions) * 100);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.title}>My Habits</Text>
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
      <Text style={styles.text}>
        {" "}
        I have completed {habit.repitions} out of {habit.desiredRepitions}
      </Text>
      <Text style={styles.text}> My success rate is {successRate}%</Text>
      <Text>
        {" "}
        test {habit.currentDate[1]} {habit.repitions[1]}{" "}
        {habit.desiredRepitions[1]}
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
