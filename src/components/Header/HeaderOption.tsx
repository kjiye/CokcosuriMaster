import {GestureResponderEvent} from 'react-native';
import HeaderButton from './HeaderButton';
import HeaderTitle from './HeaderTitle';
import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

const BACKGROUND_COLOR = '#ffffff';
const HEADER_TINT_SIZE = 24;
const HEADER_TINT_COLOR = '#333333';

export const commonHeaderOption: StackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerStyle: {backgroundColor: BACKGROUND_COLOR},
  headerTitleStyle: {
    fontSize: HEADER_TINT_SIZE,
    fontWeight: 'bold',
    color: HEADER_TINT_COLOR,
  },
};

interface Props {
  title?: string;
  isTitleLogo?: boolean;
  isBack?: boolean;
  isRight?: boolean;
  buttonType?: 'drawer' | 'text';
  buttonText?: string;
  buttonTextColor?: string;
  buttonPress?: (event: GestureResponderEvent) => void;
}

export const basicHeader = ({
  title,
  isTitleLogo = false,
  isBack = true,
  isRight = false,
  buttonType,
  buttonText,
  buttonTextColor,
  buttonPress,
}: Props): any => {
  return {
    headerTitle: () => {
      return <HeaderTitle title={title} isTitleLogo={isTitleLogo} />;
    },
    headerLeft: () => {
      return <HeaderButton isBack={isBack} buttonType={buttonType} />;
    },
    headerRight: () => {
      return (
        isRight && (
          <HeaderButton
            isBack={false}
            buttonType={buttonType}
            buttonText={buttonText}
            buttonTextColor={buttonTextColor}
            buttonPress={buttonPress}
          />
        )
      );
    },
  };
};
