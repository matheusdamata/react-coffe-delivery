import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  margin-bottom: 4rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const ProductsListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin-top: 3.375rem;
`

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: ${props => props.theme['base-card']};

  img {
    margin-top: -1rem;
  }

  strong {
    font-size: 0.625rem;
    color: ${props => props.theme['yellow-dark']};

    margin: 1rem 0;
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;

    color: ${props => props.theme['base-label']};

    margin-top: 0.5rem;
  }
`


export const ProductItemFooter = styled.footer`
  display: flex;
  flex-direction: row;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${props => props.theme['base-text']};
  }
  
  span {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
  }
`

export const ProductItemFooterAddToCart = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  background: ${props => props.theme['base-button']};
  margin: 0 1rem;

  button {
    border: 0;
  }
`