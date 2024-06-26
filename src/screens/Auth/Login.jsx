/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/Button';
import DividerWithText from '../../components/DividerWithText';
import SocialIcons from '../../components/shared/SocialIcons';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={require('../../assets/Images/Logo/ah-logo.webp')} />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="phone" size={24} color="#6f767a" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.btnWrapper}>
        <CustomButton
          title="Login"
          onPress={() => {}}
          btnStyle={styles.btn}
          btnTextStyle={styles.btnText}
        />
      </View>
      <DividerWithText text="Or connect with" />
      <SocialIcons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    marginHorizontal: 25,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  logoWrapper: {
    marginBottom: 30,
    alignItems: 'center',
  },
  btnWrapper: {
    marginTop: 20,
  },
  btn: {
    borderRadius: 50,
    backgroundColor: '#05c3de',
    marginHorizontal: 25,
  },
  btnText: {
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default Login;
