import styled, {useTheme} from 'styled-components/native';
import BaseContainer from '../../components/BaseContainer';
import {FlatList} from 'react-native';
import ProductDetailListItem from './ProductDetailListItem';
import React from 'react';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ListContainer = styled.View`
  flex: 1;
`;

function ProductDetailPresenter(): JSX.Element {
  const theme: any = useTheme();
  return (
    <Container>
      <ListContainer>
        <FlatList
          contentContainerStyle={{paddingBottom: theme.size.bottomPadding}}
          scrollIndicatorInsets={{right: 0.1}}
          data={[{}, {}]}
          keyExtractor={(_: any, i: number) => i.toString()}
          renderItem={({item, index}: any) => {
            return <ProductDetailListItem key={index.toString()} />;
          }}
        />
      </ListContainer>
    </Container>
  );
}

export default ProductDetailPresenter;
