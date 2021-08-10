import {GestureResponderEvent} from 'react-native';

export type RegexType = 'email' | 'password' | 'phone';

export interface ItemType {
  name: string;
  content: string;
  textPress?: (title: string, content: string) => void;
  onPress?: (event: GestureResponderEvent) => void;
  checked?: boolean;
}
