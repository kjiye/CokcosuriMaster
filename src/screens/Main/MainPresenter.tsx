import styled, {useTheme} from 'styled-components/native';
import BaseContainer from '../../components/BaseContainer';
import React from 'react';
import {User} from '../../models/user';

// flex: 1;
// align-items: center;
const Container = styled(BaseContainer)`
  background-color: ${(props: any) => props.theme.colors.primary};
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.secondary};
`;

const TestButtonContainer = styled.TouchableOpacity`
  background-color: ${(props: any) => props.theme.colors.accent};
  padding: ${(props: any) => props.theme.size.padding}px;
`;

const TestButtonText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.large}px;
  color: ${(props: any) => props.theme.colors.grey[2]};
`;

// interface Props {
//   loading: boolean;
//   master?: User[];
//   join?: () => void;
// }

// function MainPresenter({loading = false, master, join}: Props): JSX.Element {
function MainPresenter(): JSX.Element {
  const theme: any = useTheme();

  return (
    <></>
    // <Container
    //   button={
    //     <TestButtonContainer onPress={join}>
    //       <TestButtonText>
    //         {loading ? '등록중' : '사용자 등록 테스트'}
    //       </TestButtonText>
    //     </TestButtonContainer>
    //   }>
    //   <Title
    //     style={{
    //       backgroundColor: theme.colors.grey[1],
    //       padding: theme.size.padding,
    //     }}>
    //     GraphqlTest
    //   </Title>

    //   {master?.map((v: any, i: number) => {
    //     return (
    //       <Title key={i}>
    //         {v.name} {v.phone} {v.company.licenseImage}
    //       </Title>
    //     );
    //   })}
    // </Container>
  );
}

export default MainPresenter;
