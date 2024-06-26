/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SocialIcons = () => {
  return (
    <View style={styles.socialBtn}>
      <TouchableOpacity style={[styles.commonIconStyle, styles.facebook]}>
        <Icon
          name="facebook"
          size={24}
          color="#fff"
          style={styles.socialIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.commonIconStyle, styles.google]}>
        <Icon name="google" size={24} color="#fff" style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.commonIconStyle, styles.linkedIn]}>
        <Icon
          name="linkedin"
          size={24}
          color="#fff"
          style={styles.socialIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialBtn: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 100,
  },
  socialIcon: {
    cursor: 'pointer',
  },
  facebook: {
    backgroundColor: '#0866ff',
  },
  google: {
    backgroundColor: '#ea4335',
  },
  linkedIn: {
    backgroundColor: '#0077B5',
  },
  commonIconStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SocialIcons;
