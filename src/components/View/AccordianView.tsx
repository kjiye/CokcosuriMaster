import {GRAY_1, GRAY_3, WHITE} from '../../constants/color';
import {INNER_MARGIN, STANDARD} from '../../constants/size';
import React, {useState} from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  border-bottom-width: 1px;
  border-color: ${GRAY_3};
`;

const TitleView = styled.TouchableOpacity`
  padding: ${INNER_MARGIN}px ${STANDARD}px;
  background: ${WHITE};
`;

const ContentView = styled(TitleView)`
  background: ${GRAY_1};
`;

interface Props {
  titleChildren: JSX.Element;
  cntChildren: JSX.Element;
}

// 카테고리 표시 있는 경우에는 제목 카테고리랑 답변 관리자 표시 있음
function AccordianView({titleChildren, cntChildren}: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <TitleView
        onPress={() => {
          setOpen(!open);
        }}>
        {titleChildren}
      </TitleView>
      {open && <ContentView>{cntChildren}</ContentView>}
    </Wrapper>
  );
}

export default AccordianView;
