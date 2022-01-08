/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {

  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const CHAR_LIMIT = 280

enum STATUS_COLOR {
  GREY = "grey",
  YELLOW = "yellow",
  RED = "red",
}

const WordCounter = () => {
  const [message, setMessage] = useState<string>('');
  const [charRemaining, SetCharRemaining] = useState<number>(CHAR_LIMIT);
  const [borderColor, setBorderColor] = useState(STATUS_COLOR.GREY);


  useEffect(() => {
    SetCharRemaining(CHAR_LIMIT - message.length)
  }, [message])

  useEffect(() => {
    if (charRemaining >= 10) {
      setBorderColor(STATUS_COLOR.GREY);
    }
    if (charRemaining >= 0 && charRemaining < 10) {
      setBorderColor(STATUS_COLOR.YELLOW);
    }
    if (charRemaining < 0) {
      setBorderColor(STATUS_COLOR.RED);
    }

  }, [charRemaining])

  return (
    <View style={styles.sectionContainer}>
      <TextInput style={{ ...styles.inputBox, borderColor }}
        multiline
        placeholder="Type here"
        onChangeText={setMessage}
        numberOfLines={5}

      />
      <Text>Characters Remaining {charRemaining}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    borderWidth: 2,
    borderRadius: 10,
    width: "90%",
    padding: 10,
    textAlignVertical: 'top'

  },

});

export default WordCounter;
