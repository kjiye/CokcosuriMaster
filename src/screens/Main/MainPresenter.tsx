import {FlatList, GestureResponderEvent} from 'react-native';
import BaseContainer from '../../components/BaseContainer';
import {GRAY_BACKGROUND_COLOR} from '../../constants/color';
import I18n from '../../utils/i18nHelpers';
import PhoneSvg from '../../../assets/svg/ic_phone.svg';
import React from 'react';
import {TwoButtonGroup} from '../../components/Button';
import {WorkListItem} from '../../components/Item';
import styled from 'styled-components/native';
import {useCallback} from 'react';

const Container = styled(BaseContainer)`
  background: ${GRAY_BACKGROUND_COLOR};
`;

const ItemSeparator = styled.View`
  height: 16px;
`;

interface Props {
  works: any[];
  goDetail: (event: GestureResponderEvent) => void;
  onLeftPress: (item: any) => void;
  onRightPress: (item: any) => void;
}

function MainPresenter({
  works,
  goDetail,
  onLeftPress,
  onRightPress,
}: Props): JSX.Element {
  const BottomButtons = useCallback((item: any) => {
    const {state} = item;
    // const onLeftPress = () => {
    //   console.log('주소 복사');
    // };

    // const onRightPress = () => {
    //   if (state === 'WAIT') {
    //     console.log('작업 진행');
    //   } else {
    //     console.log('전화 ');
    //   }
    // };

    switch (state) {
      case 'WAIT':
        return (
          <TwoButtonGroup
            leftBtnName={I18n.t('Button.copy_address')}
            rightBtnName={I18n.t('Button.accept_work')}
            rightPrimaryColored={true}
            onLeftPress={() => {
              if (onLeftPress) {
                onLeftPress(item);
              }
            }}
            onRightPress={() => {
              if (onRightPress) {
                onRightPress(item);
              }
            }}
          />
        );
      case 'RESERVE':
      case 'WORKING':
        return (
          <TwoButtonGroup
            leftBtnName={I18n.t('Button.copy_address')}
            rightBtnName={I18n.t('Button.call')}
            rightPrimaryColored={true}
            rightIcon={<PhoneSvg width={20} height={20} />}
            onLeftPress={onLeftPress}
            onRightPress={onRightPress}
          />
        );
    }
  }, []);

  if (works.length <= 0) {
    return <></>;
  }
  return (
    <Container>
      <FlatList
        data={works}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 50,
        }}
        ItemSeparatorComponent={() => <ItemSeparator />}
        keyExtractor={(_: any, i: number) => i.toString()}
        renderItem={({item, index}: any) => (
          <WorkListItem
            item={item}
            bottom={BottomButtons(item)}
            itemPress={goDetail}
          />
        )}
      />
    </Container>
  );
}

export default MainPresenter;
