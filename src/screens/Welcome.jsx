import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/Button';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={require('../assets/Images/Logo/ah-logo.webp')} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.intro}>
          Welcome to Autohub, where expert car care meets exceptional service.
          Keeping you on the road, safely and smoothly.
        </Text>
      </View>
      <View style={styles.btnWrapper}>
        <CustomButton
          title="Login"
          onPress={() => {
            navigation.navigate('Login', {
              name: 'Arfeen',
            });
          }}
          btnStyle={[styles.loginBtn, styles.commonBtnStyle]}
          btnTextStyle={[styles.loginBtnText, styles.commonTextStyle]}
        />
        <CustomButton
          title="Register"
          onPress={() => {}}
          btnStyle={[styles.signupBtn, styles.commonBtnStyle]}
          btnTextStyle={[styles.signupBtnText, styles.commonTextStyle]}
        />
      </View>
      <Text style={styles.footerText}>© All Rights Reserved</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 8,
    flexDirection: 'column',
  },
  hello: {
    fontSize: 30,
    fontWeight: '900',
    color: '#05c3de',
  },
  intro: {
    fontSize: 17,
    color: '#333f48',
    textAlign: 'center',
    fontFamily: 'System',
  },
  btnWrapper: {
    width: '100%',
    marginVertical: 20,
  },
  commonBtnStyle: {
    borderRadius: 50,
    width: '70%',
    alignSelf: 'center',
  },
  commonTextStyle: {
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  loginBtn: {
    backgroundColor: '#05c3de',
    marginBottom: 10,
  },
  signupBtn: {
    backgroundColor: '#ffb71b',
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    color: '#333',
    fontFamily: Platform.select({
      ios: 'System',
      android: 'sans-serif',
    }),
  },
});
