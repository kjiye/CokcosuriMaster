import I18n from '../../utils/i18nHelpers';
import React from 'react';
import {SingleButton} from '../Button';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Message = styled.Text`
  text-align: center;
  font-size: ${(props: any) => props.theme.fonts.large}px;
  font-weight: bold;
  line-height: 28px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const RefreshButton = styled(SingleButton)`
  margin-top: ${(props: any) => props.theme.size.margin}px;
`;

interface Props {
  message: string;
  usingRefresh?: boolean;
  onRefreshing?: () => void;
}

function NoDataView({
  message,
  usingRefresh = false,
  onRefreshing,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <Message>{message}</Message>
      {usingRefresh && (
        <RefreshButton
          name={I18n.t('Button.refresh')}
          onPress={() => {
            if (onRefreshing) {
              onRefreshing();
            }
          }}
        />
      )}
    </Wrapper>
  );
}

export default NoDataView;
