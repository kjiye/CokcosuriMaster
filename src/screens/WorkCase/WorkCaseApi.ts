import {IMG_URL, MALL_URL} from '../../utils/commonUtils';
import {ImageData} from '../../models/common';
import axios from 'axios';

/**
 * 수리사례 작성
 */
export const shopRegPorfolio = async (
  masterId: number,
  workId: number,
  title: string,
  beforeImage: ImageData[],
  afterImage: ImageData[],
  thumbImage: ImageData,
  content?: string,
  vrUid?: number,
  category?: 'REPAIR' | 'INSTALL',
  editorUse?: 'Y' | 'N',
  publish?: 'Y' | 'N',
) => {
  let params: any = {
    master_id: masterId,
    work_id: workId,
    title: title,
    thumb_img: IMG_URL + thumbImage.path,
    category: category ? category : 'REPAIR',
    editor_use: editorUse ? editorUse : 'N',
    publish: publish ? publish : 'Y',
  };
  if (vrUid) {
    params = {
      ...params,
      vr_uid: vrUid,
    };
  }
  if (content && content.length > 0) {
    params = {
      ...params,
      content: content.trim(),
    };
  }
  beforeImage.map((v: ImageData, i: number) => {
    params[`before_img_${i + 1}`] = IMG_URL + v.path;
  });
  afterImage.map((v: ImageData, i: number) => {
    params[`after_img_${i + 1}`] = IMG_URL + v.path;
  });
  return {result: true}; // 임시처리
  // return await axios.post(MALL_URL + '/api/update_portfolio.php', params);
};

/**
 * 등록한 수리사례 조회
 */
export const shopGetPortfolio = async (masterId: number, workId: number) => {
  return await axios.get(MALL_URL + '/api/get_portfolio_detail.php', {
    params: {
      master_id: masterId,
      work_id: workId,
    },
  });
};

/**
 * 등록한 수리사례 수정
 */
export const shopSetPortfolio = async (
  masterId: number,
  workId: number,
  title: string,
  thumbImage: ImageData,
  content?: string,
  beforeImage?: ImageData[],
  afterImage?: ImageData[],
  vrUid?: number,
  category?: 'REPAIR' | 'INSTALL',
  editorUse?: 'Y' | 'N',
  publish?: 'Y' | 'N',
) => {
  let params: any = {
    master_id: masterId,
    work_id: workId,
    title: title,
    thumbImage: IMG_URL + thumbImage.path,
  };
  if (content && content.length > 0) {
    params = {
      ...params,
      content: content,
    };
  }
  return await axios.post(MALL_URL + '/api/update_portfolio.php', params);
};

/**
 * 작업 상세 데이터 조회
 */
export const shopGetVisitRequestDetail = async (vrUid: number) => {
  return await axios.get(MALL_URL + '/api/get_visitrequest_detail.php', {
    params: {
      vr_uid: vrUid,
    },
  });
};
