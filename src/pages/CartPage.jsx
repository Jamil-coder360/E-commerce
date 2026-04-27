import React from 'react'
import Section from '../components/section/Section'
import Container from '../components/section/Container'
import CartTable from '../components/carts/CartTable'
import CartTotal from '../components/carts/CartTotal'

const CartPage = () => {
  return (
    <Section>
        <Container>
            <CartTable />
            <CartTotal />
        </Container>
    </Section>
  )
}

export default CartPage