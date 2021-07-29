import * as RNLocalize from 'react-native-localize';
import I18n from 'i18n-js';

import ko from '../locale/ko';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageCode;
}

I18n.defaultLocale = 'ko-KR';
I18n.fallbacks = true;
I18n.translations = {
  ko,
};

export default I18n;
