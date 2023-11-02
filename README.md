## Cokcosuri Master

> [코코수리](https://cokcosuri.com)를 통해 접수된 수리 요청에 대한 작업 수주 및 관리를 위한 수리 기사(마스터) 전용 모바일 애플리케이션.
> 수리기사가 설정한 희망 활동지와 분야에 맞춰 신규 작업에 대한 푸시 알림을 제공하고 마스터가 수락하는 방식으로 ‘고객 요청 및 예약 - 수리기사 작업 수락’의 매칭이 이루어진다. ‘대기-진행-완료’ 구분 및 캘린더를 통해 작업 일정을 관리하며, 수리 기사가 앱을 통해 등록한 작업 완료 양식을 본사 담당자가 어드민을 통해 관리하는 방식으로 워크플로 시스템이 구축된다.
> ([iOS App Store](https://apps.apple.com/mn/app/%EC%BD%94%EC%BD%94%EC%88%98%EB%A6%AC-%EB%A7%88%EC%8A%A4%ED%84%B0/id1584942567) / [Google Play Store](https://play.google.com/store/apps/details?id=com.cokcosuri.masterapp&pli=1))

## Environment

- TypeScript 4
- React 17
- React Native CLI 0.64.2
- Apollo
- GraphQL
- Axios
- Firebase
- styled-components

## Quick Start

- React Native CLI 환경설정 [(참고)](https://reactnative-archive-august-2023.netlify.app/docs/0.64/environment-setup?guide=native)
- Dependencies 설치 : `npm install` 또는 `yarn install`

  - iOS의 경우 패키지 설치 완료 후 `npm run pod` 또는 `yarn pod`을 실행하여 Podfiles를 설치

- 실행
  - iOS : `npm run ios` 또는 `yarn ios` 실행 후 Xcode Simulator를 통해 구동 확인
  - Android : `npm run android` 또는 `yarn android` 실행 후 Android Studio Emulator를 통해 구동 확인

## Source Directory Structure

<pre>
└── src
    ├── apollo : Apollo Client 설정 관리
    ├── components : 인터페이스 공통 요소를 Button, Checkbox, Input, Image 등과 같은 속성 분류로 관리
    ├── constants : 디자인 시안 미확정 단계에서 theme 적용 전 색상, 크기 등에 대한 스타일 가이드 자체 정의 목적으로 사용
    ├── locale : i18n 라이브러리와 함께 사용할 텍스트 에셋 파일 관리
    ├── models : GraphQL schema를 통해 생성된 타입 외의 추가 정의 관리
    ├── navigation : Stack Navigation 라우팅 관리
    ├── screens : page 관리
    ├── themes : styled-components theme 정의 및 관리
    └── utils : 반복 사용 함수 유틸화
</pre>
