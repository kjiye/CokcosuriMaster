import {RegexType} from '../models/common';

const regexPattern = (type: RegexType) => {
  switch (type) {
    case 'email':
      return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    case 'password':
      // return /^[A-za-z0-9]{6,12}$/;
      return /^[A-za-z0-9]{6,}$/;
    case 'phone':
      return /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{3,4}$/;
  }
};

export const checkRegex = (type: RegexType, value: string): boolean => {
  return new RegExp(regexPattern(type), 'g').test(value) || false;
};
