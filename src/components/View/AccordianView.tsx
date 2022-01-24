import React, {useState} from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[3]};
`;

const TitleView = styled.TouchableOpacity`
  ${(props: any) => `
  padding: ${props.theme.size.innerMargin}px ${props.theme.size.standardPadding}px`};
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentView = styled(TitleView)`
  background: ${(props: any) => props.theme.colors.grey[1]};
`;

interface Props {
  titleChildren: JSX.Element;
  cntChildren: JSX.Element;
}

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
