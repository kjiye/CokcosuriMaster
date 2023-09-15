import {ImageData, RestResponse} from '../../models/common';
import React, {useState} from 'react';
import {GET_WORK_DETAIL_DATA} from './workCase.queries';
import I18n from '../../utils/i18nHelpers';
import WorkCasePresenter from './WorkCasePresenter';
import {callBackAlert} from '../../utils/alert';
import {getUserIdx} from '../../utils/storageUtils';
import {shopRegPorfolio} from './WorkCaseApi';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@apollo/client';

function WorkCaseContainer({route}: any): JSX.Element {
  const navigation = useNavigation();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>();
  const [beforeImage, setBeforeImage] = useState<ImageData[]>([]);
  const [afterImage, setAfterImage] = useState<ImageData[]>([]);
  const [thumbImage, setThumbImage] = useState<ImageData>();

  // 작업데이터 조회
  const {loading: workLoading, data} = useQuery(GET_WORK_DETAIL_DATA, {
    variables: {
      workId: route.params.id,
    },
    onCompleted: () => {
      if (data?.getWorkDetail) {
        const {work} = data.getWorkDetail;
        setBeforeImage(work.beforeImage);
        setAfterImage(work.afterImage);
      }
    },
  });

  const props = {
    workLoading,
    work: data?.getWorkDetail?.work,
    title,
    content,
    thumbImage,
    btnDisabled: !(title.length > 0 && thumbImage),
    onChangeTitle: (text: string) => {
      setTitle(text);
    },
    onChangeContent: (text: string) => {
      setContent(text);
    },
    selectThumbImage: (item: ImageData) => {
      setThumbImage(item);
    },
    okPress: async () => {
      // 수정하기 / 작성하기 판별
      const {id} = data?.getWorkDetail?.work;
      const masterId = await getUserIdx();
      if (thumbImage) {
        const response: RestResponse = await shopRegPorfolio(
          masterId,
          id,
          title.trim(),
          beforeImage,
          afterImage,
          thumbImage,
          content ? content : undefined,
        );
        if (response.result) {
          callBackAlert(I18n.t('Alert.reg_done'), () => {
            navigation.goBack();
          });
        } else {
          callBackAlert(I18n.t('Alert.reg_failed'), () => {
            return;
          });
        }
      }
    },
  };
  return <WorkCasePresenter {...props} />;
}

export default WorkCaseContainer;
