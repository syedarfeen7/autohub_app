import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const DividerWithText = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '65%',
    // borderColor: '#ccc',
    // borderWidth: 2,
    marginTop: 120,
  },
  line: {
    backgroundColor: '#ccc',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontSize: 14,
  },
});

export default DividerWithText;
