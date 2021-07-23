import 'styled-components/native';
import {ColorValue} from 'react-native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      backgroud: ColorValue;
      primary: ColorValue;
      secondary: ColorValue;
      accent: ColorValue;
      error: ColorValue;
      grey: ColorValue[];
      black: ColorValue[];
    };
    fonts: {
      mega: number;
      giant: number;
      big: number;
      large: number;
      normal: number;
      small: number;
      mini: number;
    };
    size: {
      padding: number;
      margin: number;
      borderRadius: number;
    };
  }
}
