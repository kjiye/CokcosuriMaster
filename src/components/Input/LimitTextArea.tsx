import styled, {useTheme} from 'styled-components/native';
import React from 'react';

const ContentInput = styled.TextInput`
  padding: ${(props: any) => props.theme.size.innerMargin}px;
  height: 235px;
  background: ${(props: any) => props.theme.colors.grey[1]};
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
`;

const LimitCountText = styled.Text`
  margin: ${(props: any) => props.theme.size.margin}px 0;
  text-align: right;
  font-size: ${(props: any) => props.theme.fonts.tiny}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  placeholder: string;
  limit: number;
  currentCount: number;
  value?: string;
  onChange?: (text: string) => void;
}

function LimitTextArea({
  placeholder,
  limit,
  currentCount,
  value,
  onChange,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <>
      <ContentInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.grey[5]}
        textAlignVertical={'top'}
        multiline={true}
        numberOfLines={10}
        maxLength={300}
        onChangeText={onChange}
      />
      <LimitCountText>
        {currentCount} / {limit}
      </LimitCountText>
    </>
  );
}

export default LimitTextArea;
