import React from 'react';
import WarnNetworkPresenter from './WarnNetworkPresenter';
import {networkSetting} from '../../utils/commonUtils';

function WarnNetworkContainer(): JSX.Element {
  const props = {
    settingPress: () => {
      networkSetting();
    },
  };
  return <WarnNetworkPresenter {...props} />;
}

export default WarnNetworkContainer;
