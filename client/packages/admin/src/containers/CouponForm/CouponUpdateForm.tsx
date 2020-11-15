import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';
import { useDrawerDispatch, useDrawerState } from '../../context/DrawerContext';
import { Scrollbars } from 'react-custom-scrollbars';
import Uploader from '../../components/Uploader/Uploader';
import Input from '../../components/Input/Input';
import {Textarea} from '../../components/Textarea/Textarea';
import { Select, TYPE } from 'baseui/select';
import Button, { KIND } from '../../components/Button/Button';
import DrawerBox from '../../components/DrawerBox/DrawerBox';
import { Row, Col } from '../../components/FlexBox/FlexBox';
import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from '../DrawerItems/DrawerItems.style';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';
import {AllIconArray} from "../../assets/icons/all-icons";
import {getBase64Value} from "../../helpers/convert-image-base64";
import {ADMIN_IMAGE_HOST} from "../../helpers/images-path";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const GET_COUPONS = gql`
  query GetCoupons( $searchText: String, $offset: Int) {
    coupons(searchText: $searchText, offset: $offset) {
      items{
        id
        title
        code
        maximum_discount_amount
        expiration_date
        status
        created_at
      } 
      totalCount
      hasMore
    }
  }
`;


const UPDATE_COUPONS = gql`  
  mutation UpdateCoupon($id: ID!, $input: CouponInput!) {
    updateCoupon(id: $id, input: $input) {
      id
      title
      code
      maximum_discount_amount
      expiration_date
      status
      created_at
    }
  }
`;

type Props = any;

const UpdateCoupon: React.FC<Props> = props => {
  const dispatch = useDrawerDispatch();
  const itemData = useDrawerState('data');
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [ dispatch]);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: itemData,
  });

  const [dateExpired, setDateExpired] = useState(itemData.expiration_date ? new Date(itemData.expiration_date) : '');
  const [title, setTitle] = useState(itemData.title ? itemData.title : '');
  const [code, setCode] = useState(itemData.code ? itemData.code : '');
  const [maximumDiscountAmount, setMaximumDiscountAmount] = useState(itemData.maximum_discount_amount ? itemData.maximum_discount_amount : '');
  const [status, setStatus] = useState('running');

  const { data, error, refetch } = useQuery(GET_COUPONS);

  const [updateCoupons] = useMutation(UPDATE_COUPONS);

  const onSubmit = (data) => {
    const typeValue = {
      title: title,
      code: code,
      maximum_discount_amount: parseFloat(maximumDiscountAmount),
      expiration_date: dateExpired,
      status: status
    };

    updateCoupons({
      variables: { id: itemData.id, input: typeValue },
    });
    closeDrawer();
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Update Coupon</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }} encType={'multipart/form-data'}>
        <Scrollbars
          autoHide
          renderView={props => (
            <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
          )}
          renderTrackHorizontal={props => (
            <div
              {...props}
              style={{ display: 'none' }}
              className="track-horizontal"
            />
          )}
        >

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Update your Coupon and necessary information's from here
              </FieldDetails>
            </Col>

            <Col lg={8}>
            <DrawerBox>
                <FormFields>
                  <FormLabel>Coupon Title</FormLabel>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                  />
                </FormFields>
                <FormFields>
                  <FormLabel>Coupon Code</FormLabel>
                  <Input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    name="code"
                  />
                </FormFields>
                <FormFields>
                  <FormLabel>Maximum Discount Amount</FormLabel>
                  <Input
                    value={maximumDiscountAmount}
                    onChange={(e) => setMaximumDiscountAmount(e.target.value)}
                    name="maximum_discount_amount"
                  />
                </FormFields>
                <FormFields>
                  <FormLabel>Expiration Date</FormLabel>
                  <DatePicker
                    className="form-control"
                    selected={dateExpired}
                    onChange={(date) => setDateExpired(date)}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>
        </Scrollbars>

        <ButtonGroup>
          <Button
            kind={KIND.minimal}
            onClick={closeDrawer}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                  marginRight: '15px',
                  color: $theme.colors.red400,
                }),
              },
            }}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                }),
              },
            }}
          >
            Update Type
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default UpdateCoupon;
