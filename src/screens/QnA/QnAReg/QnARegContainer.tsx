import {GET_QNA_CATEGORIES, REG_QNA} from '../qna.queries';
import {useMutation, useQuery, useReactiveVar} from '@apollo/client';
import {CategoryName} from '../../../../__generated__/globalTypes';
import I18n from '../../../utils/i18nHelpers';
import QnARegPresenter from './QnARegPresenter';
import React from 'react';
import {callBackAlert} from '../../../utils/alert';
import {categoryVar} from '../../../apollo';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

function QnARegContainer(): JSX.Element {
  const navigation = useNavigation();
  const selectedCategory = useReactiveVar(categoryVar);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const {data} = useQuery(GET_QNA_CATEGORIES, {
    variables: {
      name: CategoryName.QNA,
    },
  });

  const [regQnA] = useMutation(REG_QNA, {
    onError: () => {
      callBackAlert(I18n.t('Error.common'), () => {
        return;
      });
    },
    onCompleted: () => {
      callBackAlert(I18n.t('QnA.reg_done'), () => {
        categoryVar(null);
        navigation.goBack();
      });
    },
  });

  const props = {
    title,
    content,
    selectedCategory,
    onChangeTitle: (text: string) => {
      setTitle(text);
    },
    onChangeContent: (text: string) => {
      setContent(text);
    },
    showSelectionModal: () => {
      navigation.navigate('SelectionModal', {
        title: I18n.t('QnA.reason'),
        typeList: data?.getCategories.categories,
        path: 'QnA',
      });
    },
    btnDisabled: !(title.length > 0 && content.length > 0 && selectedCategory),
    okPress: () => {
      regQnA({
        variables: {
          data: {
            title: title,
            content: content,
            category: selectedCategory,
          },
        },
      });
    },
  };
  return <QnARegPresenter {...props} />;
}
export default QnARegContainer;
