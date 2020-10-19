import React, { useState } from 'react';
import { styled, withStyle } from 'baseui';
import Button from '../../components/Button/Button';
import {
  Grid,
  Row as Rows,
  Col as Column,
} from '../../components/FlexBox/FlexBox';
import Input from '../../components/Input/Input';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Fade from 'react-reveal/Fade';
import TypeCard from '../../components/TypeCard/TypeCard';
import { Wrapper, Header, Heading } from '../../components/WrapperStyle';
import NoResult from '../../components/NoResult/NoResult';
import Placeholder from '../../components/Placeholder/Placeholder';
import Select from "../../components/Select/Select";
import {Plus} from "../../components/AllSvgIcon";
import {ImageWrapper, StyledCell, StyledHeadCell, StyledTable, TableWrapper} from "../Category/Category.style";
import Checkbox from "../../components/CheckBox/CheckBox";

export const TypesRow = styled('div', ({ $theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '25px',
  backgroundColor: $theme.colors.backgroundF7,
  position: 'relative',
  zIndex: '1',

  '@media only screen and (max-width: 767px)': {
    marginLeft: '-7.5px',
    marginRight: '-7.5px',
    marginTop: '15px',
  },
}));

export const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const Row = withStyle(Rows, () => ({
  '@media only screen and (min-width: 768px) and (max-width: 991px)': {
    alignItems: 'center',
  },
}));

export const TypeCardWrapper = styled('div', () => ({
  height: '100%',
}));

export const LoaderWrapper = styled('div', () => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexWrap: 'wrap',
}));

export const LoaderItem = styled('div', () => ({
  width: '25%',
  padding: '0 15px',
  marginBottom: '30px',
}));

const GET_TYPES = gql`
  query GetTypes(
    $searchText: String
    $offset: Int
  ) {
    types(
      searchText: $searchText
      offset: $offset
    ) {
      items {
        id
        name
        slug
      }
      totalCount
      hasMore
    }
  }
`;


export default function Types() {
  const { data, error, refetch, fetchMore } = useQuery(GET_TYPES);
  const [loadingMore, toggleLoading] = useState(false);
  const [search, setSearch] = useState([]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  function loadMore() {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: data.types.items.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        toggleLoading(false);
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          types: {
            __typename: prev.types.__typename,
            items: [...prev.types.items, ...fetchMoreResult.types.items],
            hasMore: fetchMoreResult.types.hasMore,
          },
        });
      },
    });
  }
  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    refetch({ searchText: value });
  }
  /*<Grid fluid={true}>
       <Row>
         <Col md={12}>
           <Header style={{ marginBottom: 15 }}>
             <Col md={2} xs={12}>
               <Heading>Types</Heading>
             </Col>

             <Col md={10} xs={12}>
               <Row>
                 <Col md={6} xs={12}>
                   <Input
                     value={search}
                     placeholder='Ex: Search By Name'
                     onChange={handleSearch}
                     clearable
                   />
                 </Col>
               </Row>
             </Col>
           </Header>

           <Row>
             {data ? (
               data.types && data.types.items.length !== 0 ? (
                 data.types.items.map((item: any, index: number) => (
                   <Col
                     md={4}
                     lg={3}
                     sm={6}
                     xs={12}
                     key={index}
                     style={{ margin: '15px 0' }}
                   >
                     <Fade bottom duration={800} delay={index * 10}>
                       <TypeCard
                         name={item.name}
                         slug={item.slug}
                         data={item}
                       />
                     </Fade>
                   </Col>
                 ))
               ) : (
                 <NoResult />
               )
             ) : (
               <LoaderWrapper>
                 <LoaderItem>
                   <Placeholder />
                 </LoaderItem>
                 <LoaderItem>
                   <Placeholder />
                 </LoaderItem>
                 <LoaderItem>
                   <Placeholder />
                 </LoaderItem>
                 <LoaderItem>
                   <Placeholder />
                 </LoaderItem>
               </LoaderWrapper>
             )}
           </Row>
           {data && data.types && data.types.hasMore && (
             <Row>
               <Col
                 md={12}
                 style={{ display: 'flex', justifyContent: 'center' }}
               >
                 <Button onClick={loadMore} isLoading={loadingMore}>
                   Load More
                 </Button>
               </Col>
             </Row>
           )}
         </Col>
       </Row>
     </Grid>*/
  return (
    <Grid fluid={true}>
    <Row>
      <Col md={12}>
        <Header
            style={{
              marginBottom: 30,
              boxShadow: '0 0 5px rgba(0, 0 ,0, 0.05)',
            }}
        >
          <Col md={2}>
            <Heading>Types</Heading>
          </Col>

          <Col md={10}>
            <Row>

              <Col md={5} lg={6}>
                <Input
                    value={search}
                    placeholder='Ex: Search By Name'
                    onChange={handleSearch}
                    clearable
                />
              </Col>
            </Row>
          </Col>
        </Header>

        <Wrapper style={{ boxShadow: '0 0 5px rgba(0, 0 , 0, 0.05)' }}>
          <TableWrapper>
            <StyledTable $gridTemplateColumns='minmax(150px, auto) minmax(150px, auto) auto'>
              <StyledHeadCell>Name</StyledHeadCell>
              <StyledHeadCell>Slug</StyledHeadCell>
              {data ? (
                  data.types.length ? (
                      data.types
                          .map((item) => Object.values(item))
                          .map((row, index) => (
                              <React.Fragment key={index}>
                                <StyledCell>{row[0]}</StyledCell>
                                <StyledCell>{row[2]}</StyledCell>
                                <StyledCell>{row[3]}</StyledCell>
                                <StyledCell>{row[4]}</StyledCell>
                              </React.Fragment>
                          ))
                  ) : (
                      <NoResult
                          hideButton={false}
                          style={{
                            gridColumnStart: '1',
                            gridColumnEnd: 'one',
                          }}
                      />
                  )
              ) : null}
            </StyledTable>
          </TableWrapper>
        </Wrapper>
      </Col>
    </Row>
  </Grid>
  );
}
