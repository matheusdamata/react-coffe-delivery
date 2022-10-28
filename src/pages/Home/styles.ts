import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const HomeSectionBanner = styled.section`
  display: flex;
  flex-direction: row;

  padding: 5.75rem 0;
`

export const SideLeft = styled.div`
  margin-right: 3.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${props => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};

    margin-top: 1rem;
  }
`

export const InformationalIconsBanner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  margin-top: 4.125rem;
`

export const InformationalIconsBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const IconContent = styled.div`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme['yellow']};

  svg {
    color: ${props => props.theme['white']};
  }
`

export const InformationalText = styled.p`
  font-size: 1rem;
  line-height: 1.3;

  margin-left: 0.75rem;
`

export const SideRight = styled.div`
  img {
    width: 29.75rem;
    height: auto;
  }
`

export const HomeSectionProducts = styled.section``