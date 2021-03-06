import React from 'react'
import { useHistory } from 'react-router-dom';

import { useOrder } from '../../context/OrderContext';


import ProductList from '../../components/ProductList';
import Resume from '../../components/Resume';
import Button from '../../components/Button';
import { Title } from '../../components/Title';
import { Section } from '../../components/Section';

import { MainContent } from '../../components/MainContent';


function Cart() {
  const { order, loading } = useOrder();
  const history = useHistory();
  return (
    <Section data-testid="products" id="products">
        {loading 
          ? <span> carregando... </span>
          : (
            <>
              <MainContent>
                <Title> Produtos </Title>
                <ProductList items={order?.items || []}/>   
              </ MainContent> 
              <Resume data={order} >
                <Button onClick={() => history.push('/payment')}> SEGUIR PARA O PAGAMENTO </Button>
              </Resume>
            </>
          )}
    </Section>
  )
}

export default Cart

