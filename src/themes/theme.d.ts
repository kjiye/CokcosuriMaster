import 'styled-components/native';
import {ColorValue} from 'react-native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      backgroud: ColorValue;
      grey_background: ColorValue;
      placeholder: ColorValue;
      primary: ColorValue;
      primaryDark: ColorValue;
      primaryLight: ColorValue;
      secondary: ColorValue;
      secondaryDark: ColorValue;
      secondaryLight: ColorValue;
      accent: ColorValue;
      accentDark: ColorValue;
      accentLight: ColorValue;
      error: ColorValue;
      errorDark: ColorValue;
      errorLight: ColorValue;
      grey: ColorValue[];
      black: ColorValue[];
    };
    fonts: {
      massive: number;
      huge: number;
      big: number;
      large: number;
      normal: number;
      small: number;
      tiny: number;
      mini: number;
    };
    size: {
      padding: number;
      margin: number;
      borderRadius: number;
      gap: number;
      innerMargin: number;
      standardPadding: number;
      bottomPadding: number;
    };
  }
}
