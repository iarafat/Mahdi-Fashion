import React, { useCallback, useState } from 'react';
import { withStyle } from 'baseui';
import {
  Grid,
  Row as Rows,
  Col as Column,
} from '../../components/FlexBox/FlexBox';
import { useDrawerDispatch } from '../../context/DrawerContext';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/CheckBox/CheckBox';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Wrapper, Header, Heading } from '../../components/WrapperStyle';
import {
  TableWrapper,
  StyledTable,
  StyledHeadCell,
  StyledCell,
  ImageWrapper,
} from './Category.style';

import {
  Plus,
  Accessories,
  BathOil,
  BeautyHealth,
  Beverage,
  Breakfast,
  Cooking,
  Dairy,
  Deodorent,
  Eyes,
  Face,
  FacialCare,
  FruitsVegetable,
  HandBags,
  HomeCleaning,
  LaptopBags,
  Lips,
  MeatFish,
  OralCare,
  OuterWear,
  Pants,
  PetCare,
  Purse,
  ShavingNeeds,
  Shirts,
  ShoulderBags,
  Skirts,
  Snacks,
  Tops,
  Wallet,
  WomenDress,
} from '../../components/AllSvgIcon';
import NoResult from '../../components/NoResult/NoResult';
import { StyledBodyCell } from '../Types/Types.style';
import ActionWrapper from '../CategoryForm/ActionWrapper';
let icons = {
  Accessories: Accessories,
  BathOil: BathOil,
  BeautyHealth: BeautyHealth,
  Beverage: Beverage,
  Breakfast: Breakfast,
  Cooking: Cooking,
  Dairy: Dairy,
  Deodorent: Deodorent,
  Eyes: Eyes,
  Face: Face,
  FacialCare: FacialCare,
  FruitsVegetable: FruitsVegetable,
  HandBags: HandBags,
  HomeCleaning: HomeCleaning,
  LaptopBags: LaptopBags,
  Lips: Lips,
  MeatFish: MeatFish,
  OralCare: OralCare,
  OuterWear: OuterWear,
  Pants: Pants,
  PetCare: PetCare,
  Purse: Purse,
  ShavingNeeds: ShavingNeeds,
  Shirts: Shirts,
  ShoulderBags: ShoulderBags,
  Skirts: Skirts,
  Snacks: Snacks,
  Tops: Tops,
  Wallet: Wallet,
  WomenDress: WomenDress,
};
const GET_CATEGORIES = gql`
  query getCategories($searchText: String, $offset: Int) {
    categories(searchText: $searchText, offset: $offset) {
      items{
        id
        type_id
        name
        slug
        banner
        icon
        meta_title
        meta_keyword
        meta_description
      }
      totalCount
      hasMore
    }
  }
`;

const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const Row = withStyle(Rows, () => ({
  '@media only screen and (min-width: 768px)': {
    alignItems: 'center',
  },
}));

const categorySelectOptions = [
  { value: 'grocery', label: 'Grocery' },
  { value: 'women-cloths', label: 'Women Cloth' },
  { value: 'bags', label: 'Bags' },
  { value: 'makeup', label: 'Makeup' },
];

const prevButtonDisabledStyles = {
  width: '90px',
  marginRight: '10px',
  color: '#6f6f6f',
  backgroundColor: '#d8d8d8'
};
const nextButtonDisabledStyles = {
  width: '90px',
  marginLeft: '10px',
  color: '#6f6f6f',
  backgroundColor: '#d8d8d8'
};

export default function Category() {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const dispatch = useDrawerDispatch();
  const [checkedId, setCheckedId] = useState([]);
  const [checked, setChecked] = useState(false);
  const openDrawer = useCallback(
    () => dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'CATEGORY_FORM' }),
    [dispatch]
  );

  const { data, error, refetch } = useQuery(GET_CATEGORIES);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    refetch({
      searchText: value,
    });
  }
  function handlePrevious() {
    setOffset(offset - 12);
    refetch({
      offset: offset - 12,
    });
  }
  function handlePreviousDisabled(data) {
    const result = (data ? data.categories.totalCount === 0 : false) || offset === 0;
    return result;
  }
  function handleNext() {
    setOffset(offset + 12);
    refetch({
      offset: offset + 12,
    });
  }
  function handleNextDisabled(data) {
    const result = data ? !data.categories.hasMore : true;
    return result;
  }

  function handleCategory({ value }) {
    setCategory(value);
    if (value.length) {
      refetch({
        type: value[0].value,
      });
    } else {
      refetch({
        type: null,
      });
    }
  }

  function onAllCheck(event) {
    if (event.target.checked) {
      const idx = data && data.categories.map((category) => category.id);
      setCheckedId(idx);
    } else {
      setCheckedId([]);
    }
    setChecked(event.target.checked);
  }

  function handleCheckbox(event) {
    const { name } = event.currentTarget;
    if (!checkedId.includes(name)) {
      setCheckedId((prevState) => [...prevState, name]);
    } else {
      setCheckedId((prevState) => prevState.filter((id) => id !== name));
    }
  }
  function Icon({ icon }) {
    const Component = icons.hasOwnProperty(icon) ? icons[icon] : 'span';
    return <Component />;
  }
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
              <Heading>Category</Heading>
            </Col>

            <Col md={10}>
              <Row>
                <Col md={3} lg={3}>
                  <Select
                    options={categorySelectOptions}
                    labelKey='label'
                    valueKey='value'
                    placeholder='Category Type'
                    value={category}
                    searchable={false}
                    onChange={handleCategory}
                  />
                </Col>

                <Col md={5} lg={6}>
                  <Input
                    value={search}
                    placeholder='Ex: Search By Name'
                    onChange={handleSearch}
                    clearable
                  />
                </Col>

                <Col md={4} lg={3}>
                  <Button
                    onClick={openDrawer}
                    startEnhancer={() => <Plus />}
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          width: '100%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          borderBottomRightRadius: '3px',
                        }),
                      },
                    }}
                  >
                    Add Category
                  </Button>
                </Col>
              </Row>
            </Col>
          </Header>

          <Wrapper style={{ boxShadow: '0 0 5px rgba(0, 0 , 0, 0.05)' }}>
            <TableWrapper>
              <StyledTable $gridTemplateColumns='minmax(70px, 70px)  minmax(150px, auto)  minmax(150px, auto) minmax(70px, 70px) minmax(70px, 70px) auto'>
                <StyledHeadCell>#</StyledHeadCell>
                <StyledHeadCell>Name</StyledHeadCell>
                <StyledHeadCell>Slug</StyledHeadCell>
                <StyledHeadCell>Image</StyledHeadCell>
                <StyledHeadCell>Icon</StyledHeadCell>
                <StyledHeadCell>Action</StyledHeadCell>

                {data ? (
                  data.categories.items.length ? (
                    data.categories.items.map((item, index) => (
                      <React.Fragment key={index}>
                        <StyledBodyCell>{index + 1}</StyledBodyCell>
                        <StyledBodyCell>{item.name}</StyledBodyCell>
                        <StyledBodyCell>{item.slug}</StyledBodyCell>
                        <StyledCell>
                          <ImageWrapper>
                            <Icon icon={item.banner} />
                          </ImageWrapper>
                        </StyledCell>
                        <StyledCell>{item.icon}</StyledCell>
                        <StyledBodyCell>
                          <ActionWrapper itemsOffset={offset} itemData={item} />
                        </StyledBodyCell>
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
          <Row>
            <Col md={8}>
            </Col>
            <Col md={4}
              style={{ display: 'block', textAlign: 'right', marginTop: '20px' }}
            >
              <Button
                style={handlePreviousDisabled(data) ? prevButtonDisabledStyles : { marginRight: '10px' }}
                disabled={handlePreviousDisabled(data)}
                onClick={handlePrevious}>
                Previous
                </Button>
              <Button
                style={handleNextDisabled(data) ? nextButtonDisabledStyles : null}
                disabled={handleNextDisabled(data)}
                onClick={handleNext}>
                Next
                </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
}
