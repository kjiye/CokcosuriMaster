import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  margin-top: 24px;
  padding-left: ${(props: any) => props.theme.size.standardPadding}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const PermissionTitle = styled.Text`
  width: 55px;
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.primary};
`;

const PermissionExplain = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.tiny}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  title: string;
  explain: string;
}

function PermissionItem({title, explain}: Props): JSX.Element {
  return (
    <Wrapper>
      <PermissionTitle>{title}</PermissionTitle>
      <PermissionExplain>{explain}</PermissionExplain>
    </Wrapper>
  );
}

export default PermissionItem;
