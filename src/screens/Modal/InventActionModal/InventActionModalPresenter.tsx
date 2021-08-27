import LoadingDotsModal from '../../../components/Modal/LoadingDotsModal/LoadingDotsModal';
import React from 'react';

interface Props {
  isShow: boolean;
}

function InventActioModalPresenter({isShow}: Props): JSX.Element {
  return <LoadingDotsModal isShow={isShow} />;
}

export default InventActioModalPresenter;
