import React,{useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export type Props = {
  name: string;
  countLevel?: number;
  onIncrement:()=>void;
  onDecrement:()=>void;
};

const Home: React.FC<Props> = (props) => {
 

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Home {props.name} {props.countLevel}
      
      </Text>
      <View>
        <Button
          title="Increase Count"
          accessibilityLabel="increment"
          onPress={props.onIncrement}
          color="blue"
        />
        <Button
          title="Decrease Count"
          accessibilityLabel="decrement"
          onPress={props.onDecrement}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Home;