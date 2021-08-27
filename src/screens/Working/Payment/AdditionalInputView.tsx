import {Dimensions, StyleProp, ViewProps, ViewStyle} from 'react-native';
import {CardView} from '../../../components/View';
import I18n from '../../../utils/i18nHelpers';
import React from 'react';
import {TitleItem} from '../../../components/Item';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

const InputWrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-end;
`;

const UnderlineInput = styled.TextInput`
  padding: 0;
  width: ${width / 2.5}px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.primaryLight};
  text-align: right;
  font-size: ${(props: any) => props.theme.fonts.big}px;
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const UnitText = styled.Text`
  margin-left: 2px;
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  onChange?: (text: string) => void;
  value?: string;
}

function AdditionalInputView({
  style,
  onChange,
  value = '',
}: Props): JSX.Element {
  return (
    <CardView style={style as StyleProp<ViewProps>}>
      <>
        <TitleItem mainText={I18n.t('WorkingDone.additional_amount')} />
        <InputWrapper>
          <UnderlineInput
            onChangeText={onChange}
            value={value}
            keyboardType={'number-pad'}
          />
          <UnitText>{I18n.t('won')}</UnitText>
        </InputWrapper>
      </>
    </CardView>
  );
}

export default AdditionalInputView;
