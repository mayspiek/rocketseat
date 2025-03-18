import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${props => props.theme["gray-100"]};

      /* a borda do topo é para centralizar o icone q vai estar 3px acima devido a border-bottom */
      border-top: 3px solid transparent;
      /* colocado borda anteriormente já pois se não no hover o componente da uma pulada pra cima por causa da borda */
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${props => props.theme["green-500"]};
      }
      
      /* essa classe é inserida pelo elemento navlink do react router dom */
      &.active {
        color: ${props => props.theme["green-500"]};
      }
    }

  }

`