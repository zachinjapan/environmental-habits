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
        calculateSuccessRate();
      });
    }, [])
  );

  // increment repitions
  const incrementRepitions = () => {
    // increment repitions in AsyncStorage
    AsyncStorage.getItem("repitions").then((repitions) => {
      let newRepitions = parseInt(repitions) + 1;
      AsyncStorage.setItem("repitions", newRepitions.toString());
      console.log("increment repitions", newRepitions);
    });

    // update useState
    setHabit((prevState) => {
      return {
        ...prevState,
        repitions: ["repitions", parseInt(prevState.repitions[1]) + 1],
      };
    });
  };

  const calculateSuccessRate = () => {
    let currentDate = new Date();
    let desiredRepitions = parseInt(habit.desiredRepitions[1]);
    let currentRepitions = parseInt(habit.repitions[1]);
    let habitStartDate = habit.currentDate[1];
    habitStartDate = habitStartDate.slice(0, habitStartDate.length - 1);
    habitStartDate = new Date(habitStartDate);
    let diff = currentDate - habitStartDate;
    diff = diff / (1000 * 60 * 60 * 24);
    diff = Math.round(diff);

    let idealSuccessRate = desiredRepitions * diff;

    let successRate = currentRepitions / idealSuccessRate;

    successRate = Math.round(successRate * 100);

    // round successRate to less than 100
    if (successRate > 100) {
      successRate = 100;
    }

    setSuccessRate(successRate);
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
        Number of repitions: {habit.repitions[1]}
      </Text>
      <Text style={styles.text}> My success rate is {successRate}%</Text>
      <Button title="Complete Habit" onPress={incrementRepitions} />
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
