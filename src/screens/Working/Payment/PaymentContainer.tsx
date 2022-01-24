import {
  CategoryName,
  PaymentState,
} from '../../../../__generated__/globalTypes';
import {GET_PAYMENT_CATEGORIES, SET_PAYMENT} from './payment.queries';
import React, {useEffect, useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {CategoryType} from '../../../models/common';
import I18n from '../../../utils/i18nHelpers';
import PaymentPresenter from './PaymentPresenter';
import {callBackAlert} from '../../../utils/alert';
import {useNavigation} from '@react-navigation/native';

function PaymentContainer({route}: any): JSX.Element {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>();
  const [amount, setAmount] = useState<string>('');
  const [reason, setReason] = useState<string>('');

  const {data} = useQuery(GET_PAYMENT_CATEGORIES, {
    variables: {
      name: CategoryName.PAY_REASON,
    },
  });

  const [updatePayment] = useMutation(SET_PAYMENT, {
    onError: (error: any) => {
      callBackAlert(I18n.t('Error.common'), () => {
        return;
      });
    },
    onCompleted: () => {
      callBackAlert(I18n.t('Payment.update_done'), () => {
        navigation.goBack();
      });
    },
  });

  useEffect(() => {
    if (!route.params?.selected && route.params?.workItem) {
      const {workItem} = route.params;
      if (workItem?.payment) {
        const {
          payment: {desc, price, reason},
        } = workItem;
        if (desc) setReason(desc);
        if (price) setAmount(price.toString());
        if (reason) setSelectedCategory(reason);
      }
    } else {
      const {selected} = route.params;
      setSelectedCategory(selected);
    }
  }, [route.params]);

  const props = {
    item: route.params.workItem,
    selectedCategory,
    amount,
    reason,
    btnDisabled: !(selectedCategory && amount),
    onChangeAmount: (text: string) => {
      setAmount(text);
    },
    onChangeReason: (text: string) => {
      setReason(text);
    },
    showSelectionModal: () => {
      navigation.navigate('SelectionModal', {
        title: I18n.t('WorkingDone.payment'),
        typeList: data?.getCategories?.categories,
        path: 'Payment',
      });
    },
    okPress: () => {
      if (
        selectedCategory &&
        selectedCategory.code === 'B006' &&
        reason.trim().length <= 0
      ) {
        callBackAlert(I18n.t('Payment.etc_desc'), () => {
          return;
        });
      } else {
        const {workItem} = route.params;
        let params: any = {
          workId: workItem.id,
          data: {
            price: parseInt(amount),
            reason: selectedCategory,
            desc: reason,
            state: PaymentState.DONE,
          },
        };
        if (workItem.payment) {
          params = {
            ...params,
            paymentId: workItem.payment.id,
          };
        }
        updatePayment({
          variables: params,
        });
      }
    },
  };
  return <PaymentPresenter {...props} />;
}

export default PaymentContainer;
