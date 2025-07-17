import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Vibration,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RemoteButton = ({
  title,
  icon,
  onPress,
  style,
  textStyle,
  backgroundColor = '#34495e',
  disabled = false,
  size = 'medium',
}) => {
  const handlePress = () => {
    if (!disabled) {
      Vibration.vibrate(50);
      onPress();
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case 'small':
        return styles.smallButton;
      case 'large':
        return styles.largeButton;
      default:
        return styles.mediumButton;
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 16;
      case 'large':
        return 28;
      default:
        return 20;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonSize(),
        { backgroundColor },
        disabled && styles.disabled,
        style,
      ]}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={getIconSize()}
          color={disabled ? '#95a5a6' : '#fff'}
        />
      )}
      {title && (
        <Text
          style={[
            styles.buttonText,
            disabled && styles.disabledText,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  smallButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 40,
    minHeight: 40,
  },
  mediumButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minWidth: 50,
    minHeight: 50,
  },
  largeButton: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    minWidth: 60,
    minHeight: 60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
    elevation: 1,
  },
  disabledText: {
    color: '#95a5a6',
  },
});

export default RemoteButton;