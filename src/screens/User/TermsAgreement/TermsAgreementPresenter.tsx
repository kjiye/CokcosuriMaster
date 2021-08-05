import {AppTheme} from '../../../themes/theme';
import BaseContainer from '../../../components/BaseContainer';
import {Dimensions, GestureResponderEvent} from 'react-native';
import LogoSvg from '../../../../assets/svg/logo.svg';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {TextLineCheckGroup} from '../../../components/Checkbox/TextLineCheckbox';
import styled from 'styled-components/native';

const {height} = Dimensions.get('screen');
const {size, colors}: any = AppTheme;

const Container = styled(BaseContainer)`
  padding: ${height * 0.2}px ${size.standardPadding}px 0
    ${size.standardPadding}px;
  background: ${colors.background};
`;

const LogoView = styled.View`
  align-items: flex-end;
`;

const CheckGroup = styled(TextLineCheckGroup)`
  width: 100%;
  position: absolute;
  left: ${size.standardPadding}px;
  bottom: 110px;
`;

interface Props {
  next: (event: GestureResponderEvent) => void;
}

function TermsAgreementPresenter({next}: Props): JSX.Element {
  return (
    <Container button={<PrimaryButton title={'다음'} onPress={next} />}>
      <LogoView>
        <LogoSvg />
      </LogoView>
      <CheckGroup />
    </Container>
  );
}

export default TermsAgreementPresenter;
