/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  display1: {
    fontSize: 32,
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn: {
    margin: 20,
  },
});

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  const decrement = (): void => {
    setCount(count - 1);
  };

  const reset = (): void => {
    setCount(0);
  };

  return (
    <View style={style.container}>
      <Text style={style.display1}>Counter</Text>
      <Text style={style.display1}>{count}</Text>
      <View style={style.btnGroup}>
        <Button
          accessibilityLabel={'Increment counter'}
          onPress={increment}
          title="Increment"
        />
        <Button onPress={reset} title="Reset" />
        <Button onPress={decrement} title="Decrement" />
      </View>
    </View>
  );
};

export default App;
