import styled from 'styled-components';
import Section from '../components/Section';
import SellingPoints from '../components/SellingPoints';
import Query from '../components/Query';
import RESPEKT_PAGE_QUERY from '../apollo/queries/respekt/sellingPoints';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 350px;
    margin-bottom: 4rem;
  }

  button {
    color: white;
    background: #5a008c;
    border: none;
    padding: 15px;
    margin: 2rem 0;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RespektPage = () => (
  <Section>
    <Query query={RESPEKT_PAGE_QUERY}>
      {({ data: { respektPage } }) => {
        return (
          <>
            <Wrapper>
              <h1>{respektPage.header.heading}</h1>
              <HeaderWrapper>
                <img
                  alt={respektPage.header.image.alt}
                  src={
                    process.env.API_URL + respektPage.header.image.file[0].url
                  }
                ></img>
                <div>
                  <h3>{respektPage.header.description}</h3>
                  <button>{respektPage.header.button.label}</button>
                </div>
              </HeaderWrapper>
            </Wrapper>
            <SellingPoints
              heading='Proč se (vůbec) pojistit'
              list={respektPage.selling_points}
            />
          </>
        );
      }}
    </Query>
  </Section>
);

export default RespektPage;
