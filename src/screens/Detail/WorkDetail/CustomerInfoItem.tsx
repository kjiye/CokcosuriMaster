import styled, {useTheme} from 'styled-components/native';
import {CardView} from '../../../components/View';
import I18n from '../../../utils/i18nHelpers';
import PhoneSvg from '../../../../assets/svg/ic_phone.svg';
import React from 'react';
import {TitleInfoItem} from '../../../components/Item';
import {TwoButtonGroup} from '../../../components/Button';
import {WorkState} from '../../../../__generated__/globalTypes';
import {dateFormatting} from '../../../utils/commonUtils';
import {getWorkDetail_getWorkDetail_work} from '../../../../__generated__/getWorkDetail';

const SeperatedSection = styled(CardView)`
  margin-top: ${(props: any) => props.theme.size.innerMargin}px;
`;

const InnerWrapper = styled.View`
  padding: ${(props: any) => props.theme.size.innerMargin}px;
`;

interface Props {
  item: getWorkDetail_getWorkDetail_work;
  leftBtnPress: (text: string) => void;
  rightBtnPress: (text: string) => void;
}

function CustomerInfoItem({
  item,
  leftBtnPress,
  rightBtnPress,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <>
      <CardView>
        <>
          <TitleInfoItem
            titleText={I18n.t('CustomerInfo.name')}
            infoText={item.customer.name}
          />
          <TitleInfoItem
            titleText={I18n.t('CustomerInfo.contact')}
            infoText={item.customer.phone}
          />
        </>
      </CardView>
      <SeperatedSection hasPadding={false}>
        <>
          {item.state !== WorkState.DONE && (
            <TwoButtonGroup
              style={{borderBottomWidth: 3, borderColor: theme.colors.grey[2]}}
              leftBtnName={I18n.t('Button.copy_address')}
              rightBtnName={I18n.t('Button.call')}
              rightPrimaryColored={true}
              rightIcon={<PhoneSvg />}
              leftBtnPress={() => {
                const {
                  address: {postalCode, roadAddress, detail},
                }: any = item;
                leftBtnPress(`(${postalCode}) ${roadAddress} ${detail}`);
              }}
              rightBtnPress={() => {
                rightBtnPress(item.customer.phone);
              }}
            />
          )}
          <InnerWrapper>
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.visit_date')}
              infoText={dateFormatting(item.visitDate)}
            />
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.visit_time')}
              infoText={dateFormatting(item.visitDate, true)}
            />
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.address')}
              infoText={`(${item.address?.postalCode}) ${item.address?.roadAddress}`}
              infoSubText={item.address?.detail}
            />
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.part_status')}
              infoText={item.hasParts.name}
            />
          </InnerWrapper>
        </>
      </SeperatedSection>
    </>
  );
}

export default CustomerInfoItem;
