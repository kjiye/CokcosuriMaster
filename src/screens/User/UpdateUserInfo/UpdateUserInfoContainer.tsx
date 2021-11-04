import {CategoryType, ImageSelectorOption} from '../../../models/common';
import {
  GET_CATEGORIES,
  GET_USER,
  SET_MASTER_INFO,
  WITHDRAWAL,
} from './updateUserInfo.queries';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {UpdateUser, UserSelectionModalType} from '../../../models/user';
import {useLazyQuery, useMutation, useQuery} from '@apollo/client';
import {CategoryName} from '../../../../__generated__/globalTypes';
import {GET_STORES} from '../Join/join.queries';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import UpdateUserInfoPresenter from './UpdateUserInfoPresenter';
import {callBackAlert} from '../../../utils/alert';
import {getUserAppId} from '../../../utils/storageUtils';
import {removeToken} from '../../../apollo';
import {uploadImageFormatting} from '../../../utils/commonUtils';
import {useNavigation} from '@react-navigation/native';

function UpdateUserInfoContainer({route}: any): JSX.Element {
  const navigation = useNavigation();

  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UpdateUser>();
  const [workTypeAll, setWorkTypeAll] = useState<boolean>(false);
  const [imageOption, setImageOption] = useState<ImageSelectorOption>();
  const [isChangeLicense, setIsChangeLicense] = useState<boolean>(false);
  const [replaceImage, setReplaceImage] = useState<Image>(); // 이미지 있을 때만 파일 보냄
  const [regexResult, setRegexResult] = useState<boolean>();
  const [areaList, setAreaList] = useState<CategoryType[]>([]);
  const [storeList, setStoreList] = useState<CategoryType[]>([]);

  const [getWorkTypeCategories] = useLazyQuery(GET_CATEGORIES, {
    onCompleted: (data: any) => {
      if (user) {
        const {categories} = data?.getCategories;
        setUser({
          ...user,
          workCategories: categories.map((v: CategoryType) => {
            v = {...v, active: false};
            user.workCategories.map(val => {
              if (val.code === v.code) {
                v = {...v, active: true};
              }
            });
            return v;
          }),
        });
      }
    },
  });

  const {loading: storeLoading} = useQuery(GET_STORES, {
    onError: () => {
      setStoreList([]);
    },
    onCompleted: (data: any) => {
      const {success, stores} = data.getStores;
      if (success) setStoreList(stores);
    },
  });

  const {loading: areaLoading} = useQuery(GET_CATEGORIES, {
    variables: {
      name: CategoryName.AREA,
    },
    onCompleted: (data: any) => {
      const {success, categories} = data?.getCategories;
      if (success) setAreaList(categories);
    },
  });

  const [getMaster] = useLazyQuery(GET_USER, {
    onCompleted: (data: any) => {
      const {
        getMaster: {success, master},
      } = data;
      if (success) setUser(master);
      getWorkTypeCategories({
        variables: {
          name: CategoryName.WORK_TYPE,
        },
      });
      setLoading(false);
    },
  });

  const [updateMasterInfo] = useMutation(SET_MASTER_INFO, {
    onError: (error: any) => {
      const {message} = error;
      const alertMsg = message ? message : I18n.t('Error.common');
      callBackAlert(alertMsg, () => {
        return;
      });
    },
    onCompleted: () => {
      callBackAlert(I18n.t('Alert.update_user_info'), async () => {
        navigation.goBack();
      });
    },
  });

  const [withdraw] = useMutation(WITHDRAWAL, {
    onError: (error: any) => {
      callBackAlert(I18n.t('Error.common'), () => {
        return;
      });
    },
    onCompleted: async () => {
      callBackAlert(I18n.t('Alert.withdrawal_done'), async () => {
        await removeToken();
      });
    },
  });

  useLayoutEffect(() => {
    const initData = async () => {
      getMaster({
        variables: {
          phone: await getUserAppId(),
        },
      });
    };
    initData();
  }, []);

  useEffect(() => {
    if (route.params?.imageOption) {
      const {imageOption} = route.params;
      setImageOption(imageOption);
      navigation.setParams({
        imageOption: undefined,
      });
    }
    if (route.params?.selectionType) {
      const {selected, selectionType} = route.params;
      switch (selectionType) {
        case 'area':
          if (user) {
            setUser({
              ...user,
              area: [selected],
            });
          }
          break;
        case 'store':
          if (user) {
            setUser({
              ...user,
              store: {
                id: selected.id,
                name: selected.name,
              },
              storeId: selected.id,
            });
          }
          break;
      }
    }
  }, [route.params]);

  const props = {
    loading,
    user,
    workTypeAll,
    btnDisabled: !(
      user?.name &&
      user?.workCategories.filter(v => v.active)?.length > 0 &&
      user.company.licenseNo &&
      regexResult !== false &&
      (user?.company?.licenseImage || replaceImage) &&
      user?.store &&
      user?.area
    ),
    regexResult,
    onChangeName: (text: string) => {
      if (user) {
        setUser({
          ...user,
          name: text,
        });
      }
    },
    showSelectionModal: (type: UserSelectionModalType) => {
      if (type === 'area') {
        if (!areaLoading) {
          navigation.navigate('SelectionModal', {
            selectionType: type,
            title: I18n.t('Title.area'),
            typeList: areaList,
            path: 'UpdateUserInfo',
          });
        }
      } else {
        navigation.navigate('SelectionFullScreenModal', {
          selectionType: type,
          headerTitle: I18n.t('Header.select_store'),
          typeList: storeList,
          path: 'UpdateUserInfo',
        });
      }
    },
    onChangeWorkType: (item: CategoryType) => {
      if (user) {
        if (!item.code) {
          let current = true;
          user.workCategories.map(v => {
            if (!v.active) {
              current = false;
            }
          });
          setUser({
            ...user,
            workCategories: user.workCategories.map(v => {
              v.active = !current;
              return v;
            }),
          });
          setWorkTypeAll(!current);
        } else {
          const selectedWorkTypes = user.workCategories.map(v => {
            if (v.code === item.code) {
              v.active = !v.active;
            }
            return v;
          });
          const activeCheckArr = selectedWorkTypes.filter(
            v => !!v.active && v.active === true,
          );
          switch (activeCheckArr.length) {
            case 0:
              setWorkTypeAll(false);
              break;
            case selectedWorkTypes.length:
              setWorkTypeAll(true);
              break;
          }
          setUser({
            ...user,
            workCategories: selectedWorkTypes,
          });
        }
      }
    },
    onChangeLicenseNo: (text: string) => {
      if (user) {
        setUser({
          ...user,
          company: {
            ...user.company,
            licenseNo: text,
          },
        });
      }
      setIsChangeLicense(true);
      if (text.length > 0) {
        if (text.length === 12) {
          setRegexResult(true);
        } else {
          setRegexResult(false);
        }
      } else {
        setRegexResult(undefined);
      }
    },
    imageOption,
    showImageOption: () => {
      navigation.navigate('UploadOptionModal', {path: 'UpdateUserInfo'});
    },
    currentImageDelete: () => {
      if (user) {
        setUser({
          ...user,
          company: {
            ...user.company,
            licenseImage: undefined,
          },
        });
        setImageOption(undefined);
      }
    },
    addImage: (image: Image) => {
      setReplaceImage(image);
    },
    deleteImage: () => {
      setReplaceImage(undefined);
      setImageOption(undefined);
    },
    resetImageOption: () => {
      setImageOption(undefined);
    },
    logout: () => {
      callBackAlert(
        I18n.t('Alert.logout_ask'),
        async () => {
          await removeToken();
        },
        true,
      );
    },
    withdrawal: () => {
      callBackAlert(
        I18n.t('Alert.withdrawal_ask'),
        () => {
          withdraw();
        },
        true,
      );
    },
    updatePress: () => {
      callBackAlert(
        I18n.t('Alert.update_user_ask'),
        () => {
          let params: any = {
            data: {
              name: user?.name,
              area: [user?.area[0]],
              storeId: user?.store?.id,
              workCategories: user?.workCategories
                .filter(v => v.active)
                .map(v => {
                  return {code: v.code, name: v.name};
                }),
            },
          };
          if (isChangeLicense) {
            params = {
              data: {
                ...params.data,
                licenseNo: user?.company.licenseNo.replace(/-/gi, ''),
              },
            };
          }
          if (replaceImage) {
            params = {
              data: {
                ...params.data,
                licenseNo: user?.company.licenseNo.replace(/-/gi, ''),
              },
              file: uploadImageFormatting(replaceImage),
            };
          }
          updateMasterInfo({
            variables: params,
          });
        },
        true,
      );
    },
  };
  return <UpdateUserInfoPresenter {...props} />;
}

export default UpdateUserInfoContainer;
