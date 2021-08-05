import React, {useState} from 'react';
import CheckActiveSvg from '../../../../assets/svg/ic_check_active.svg';
import CheckInactiveSvg from '../../../../assets/svg/ic_check_inactive.svg';
import styled from 'styled-components/native';

const INNER_PADDING = 10;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextButton = styled.TouchableOpacity`
  padding: ${INNER_PADDING}px 0;
`;

const Text = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.grey[4]};
`;

const CheckButton = styled.TouchableOpacity`
  padding: ${INNER_PADDING}px 0 ${INNER_PADDING}px ${INNER_PADDING}px;
`;

interface Props {
  required?: boolean;
  text: string;
}

function TextLineCheckItem({required = true, text}: Props): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Wrapper>
      <TextButton>
        <Text>
          {required && `[필수]`}
          {text}
        </Text>
      </TextButton>
      <CheckButton
        onPress={() => {
          setChecked(!checked);
        }}>
        {checked ? <CheckActiveSvg /> : <CheckInactiveSvg />}
      </CheckButton>
    </Wrapper>
  );
}

export default TextLineCheckItem;
