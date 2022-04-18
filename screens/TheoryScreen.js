import React from "react";
import { Linking, ScrollView, StyleSheet, Text } from "react-native";
import upperRoman from "@jsamr/counter-style/presets/upperRoman";
import MarkedList from "@jsamr/react-native-li";

export default function TheoryScreen() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>How to use Environmental Habits</Text>
      <MarkedList counterRenderer={upperRoman}>
        <Text style={styles.listItem}>
          <Text style={styles.listItemText}>
            Fill out the prompts in the edit habit tab screen.
          </Text>
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.listItemText}>
            Once you have filled out the prompts, click the "Save" button.
          </Text>
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.listItemText}>
            You can then view your habit in the "My Habit" tab.
          </Text>
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.listItemText}>
            If you complete your habit click the did it button!
          </Text>
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.listItemText}>
            Continue to reference and edit your habit till you feel it has
            become part of your routine then click the "Complete" button.
          </Text>
        </Text>
      </MarkedList>
      <Text style={styles.title}>The Theory</Text>
      <Text style={styles.text}>
        Based on the book "Atomic Habits" by John C. Little, this is a simple
        way to learn how to create habits.
      </Text>
      <Text
        style={{
          color: "blue",
          textDecorationLine: "underline",
          marginTop: 10,
        }}
        onPress={() =>
          Linking.openURL(
            "https://www.samuelthomasdavies.com/book-summaries/self-help/atomic-habits/"
          )
        }
      >
        Click here to read a book summary.
      </Text>
    </ScrollView>
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
});
