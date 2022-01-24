import {CardView} from '../../components/View';
import ProductListItem from '../../components/Item/ProductListItem';
import React from 'react';
import {useTheme} from 'styled-components/native';

interface Props {
  onPress: () => void;
}

function CustomerPurchaseProductItem({onPress}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <CardView isButton={true} onPress={onPress}>
      <>
        <ProductListItem />
        <ProductListItem style={{marginTop: theme.size.innerMargin}} />
      </>
    </CardView>
  );
}

export default CustomerPurchaseProductItem;
