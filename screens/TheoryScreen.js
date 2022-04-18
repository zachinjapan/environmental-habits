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
      <Text style={styles.text}>
        Lesson Summaries {"\n"}
        {"\n"} True behavior change is identity change. Anyone can convince
        themselves to visit the gym or eat healthy once or twice, but if you
        don’t shift the belief behind the behavior, then it is hard to stick
        with long-term changes. Improvements are only temporary until they
        become part of who you are. Every action you take is a vote for the type
        of person you wish to become. {"\n"}
        {"\n"}By the end of this lesson, you should have an idea of the habit
        that reinforces your desired identity. Who is the type of person you
        want to become? What is one habit that casts a small vote for becoming
        that type of person? {"\n"}
        {"\n"}A habit must be established before it can be improved. You need to
        master the art of showing up. {"\n"}
        {"\n"}By the end of this lesson, you should have a two-minute version of
        the habit you want to build and begin to master the art of showing up.
        That two-minute habit should be the smallest version of your habit that
        reinforces your desired identity. {"\n"}
        {"\n"}If you can master the right habit at the right time, everything
        falls into place. The more tightly bound your new habit is to a specific
        cue, the better the odds are that you will notice when the time comes to
        act. {"\n"}
        {"\n"}At this stage, you should have a two-minute version of your
        desired habit and a clear and specific plan for where and when to add it
        into your daily routine with an implementation intention.   30 DAYS TO
        BETTER HABITS WORKBOOK JAMESCLEAR.COM PAGE 7 Lesson 4 Lesson 5 Lesson 6{" "}
        {"\n"}
        {"\n"}If you want to make a habit a big part of your life, you need to
        make the cue a big part of your environment. {"\n"}
        {"\n"}At this stage, you have your two-minute version and a clear
        implementation intention. By the time you get done implementing this
        lesson, you should have optimized at least one element of your
        environment to make the cue of your habit more obvious. (You set out
        your meditation pillow, or you set a book on your coffee table instead
        of the remote control.) The physical space should be designed to work
        with your habits, not conflict with them. {"\n"}
        {"\n"}The less friction associated with a habit, the more likely it is
        to occur. Create an environment where doing the right thing is as easy
        as possible. You want to make your good habits the path of least
        resistance. {"\n"}
        {"\n"}By this stage, you should have designed an environment that allows
        you to complete your habit with ease. The purpose of reducing friction
        is to increase convenience and make it more likely that you’ll be able
        to follow through. Hopefully the strategies in this lesson have helped
        you do exactly that. {"\n"}
        {"\n"}One way to increase the odds that your habits will be performed is
        to walk into an environment that is ready for the habit. Whenever you
        organize a space for its intended purpose, you are priming it to make
        your future actions easy. {"\n"}
        {"\n"}It is now the end of the second week. At this point, you have a
        two-minute habit, a clear plan for where and when to add that habit into
        your life, and a series of small environmental changes that make it
        easier to stick to your habit each day.  30 DAYS TO BETTER HABITS
        WORKBOOK JAMESCLEAR.COM PAGE 8 Lesson 7 Lesson 8 Lesson 9 {"\n"}
        {"\n"}Rather than having some linear relationship with achievement,
        habits tend to have more of a compound growth curve. The greatest
        returns are delayed. Temptation bundling and commitment devices are two
        helpful strategies that may enable you to get over the hump and build a
        habit that lasts. {"\n"}
        {"\n"}At this stage of the bootcamp, you should have the basic structure
        of your habits figured out and your environment should be aligned with
        your goals. If you’re still having trouble getting started, though,
        strategies like temptation bundling and commitment devices can be used
        to add an extra layer of incentive on top of your habit. {"\n"}
        {"\n"}External rewards are one of the best strategies we have for
        maintaining motivation while we’re waiting for long-term outcomes to
        arrive. {"\n"}
        {"\n"}At this stage, you have had a specific and actionable small habit
        to follow for a few weeks. If you’ve had trouble sticking to it, finding
        a way to make the reward or ending satisfying can be a good way to stay
        on track. The strategies in this lesson should give you the tools and
        strategies you need to make any habit more satisfying in the moment.{" "}
        {"\n"}
        {"\n"}If you have to wait for long-term rewards, then the feedback loop
        is often too long for you to maintain motivation. If, however, you’re
        focused on tracking your actions, then you’ll have immediate visual
        proof that you are showing up and living out the habits that are
        important to your life and goals. {"\n"}
        {"\n"}By now, at the end of week three, you will have a simple
        two-minute habit, a clear implementation intention that helps you
        identify when and where to perform the habit, an environment that is
        optimized for your particular habit, and a series of strategies that can
        provide additional incentive during periods when you lack motivation or
        feel like you’re sliding off course. 30 DAYS TO BETTER HABITS WORKBOOK
        JAMESCLEAR.COM PAGE 9 Lesson 10 Lesson 11 • Nothing sustains motivation
        better than belonging to the tribe. It transforms a personal quest into
        a shared one. {"\n"}
        {"\n"}When you start out building a new habit, it’s exciting in the
        beginning because it’s new. Over time, however, habits become routine.
        Sometimes they even become boring. This can be one of the first signals
        that it’s time to graduate your habit to the next level. You scale up
        when what was previously challenging is now the new normal. {"\n"}
        {"\n"}Congratulations. You’ve now finished the 30 Days to Better Habits
        course. You should have a clear plan for how to implement your
        two-minute habit with an implementation intention, a series of
        environment design changes that optimize for your desired habit, and a
        strategy for scaling up your habit
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

  text: {
    fontSize: 18,
    textAlign: "left",
    margin: 10,
  },
});
