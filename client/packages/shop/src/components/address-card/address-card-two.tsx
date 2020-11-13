import React, { useContext } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { closeModal } from '@redq/reuse-modal';
import TextField from 'components/forms/text-field';
import { Button } from 'components/button/button';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_ADDRESS } from 'graphql/mutation/address';
import { FieldWrapper, Heading } from './address-card.style';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage } from 'react-intl';

// Shape of form values
interface FormValues {
  id: any | null;
  title: string;
  address: string;
  division?: string;
  district?: string;
  region?: string;
}

// The type of props MyForm receives
interface MyFormProps {
  item?: any | null;
}

// Wrap our form with the using withFormik HoC
const FormEnhancer = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      id: "5fa2a3c3c9efe33afc57bc39" || null,
      title: props.item.title || '',
      address: props.item.address || '',
      division: props.item.division || '',
      district: props.item.district || '',
      region: props.item.region || '',
    };
  },
  validationSchema: Yup.object().shape({
    id: Yup.string().required('Title is required!'),
    title: Yup.string().required('Title is required!'),
    address: Yup.string().required('Address is required'),
  }),
  handleSubmit: (values) => {
    //console.log(values, 'values');
    // do submitting things
  },
});

const UpdateAddressTwo = (props: FormikProps<FormValues> & MyFormProps) => {
  const {
    isValid,
    item,
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,

    handleReset,
    isSubmitting,
  } = props;
  const addressValue = {
    id: "5fa2a3c3c9efe33afc57bc39",
    title: values.title,
    address: values.address,
    division: values.division,
    district: values.district,
    region: values.region
  };
  const { state, dispatch } = useContext(ProfileContext);

  const [addressMutation, { data }] = useMutation(UPDATE_ADDRESS);

  const handleSubmit = async () => {
    if (isValid) {
      const {id, title, address, division, district, region} = addressValue;
      const addressData = await addressMutation({
        variables: { 
          id,
          title,
          address, 
          division,
          district,
          region
         },
      });
      dispatch({
        type: 'ADD_OR_UPDATE_ADDRESS',
        payload: addressValue 
      });
      closeModal();
    }
  };
  return (
    <Form>
      <Heading>{item && item.id ? 'Edit Address' : 'Add New Address'}</Heading>
      <FieldWrapper>
        <TextField
          id="title"
          type="text"
          placeholder="Enter Title"
          error={touched.title && errors.title}
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          id="district"
          type="text"
          placeholder="Enter District"
          error={touched.district && errors.district}
          value={values.district}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          id="division"
          type="text"
          placeholder="Enter Division"
          error={touched.division && errors.division}
          value={values.division}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          id="region"
          type="text"
          placeholder="Enter Region"
          error={touched.region && errors.region}
          value={values.region}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          id="address"
          as="textarea"
          placeholder="Enter Address"
          error={touched.address && errors.address}
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>

      <Button
        onClick={handleSubmit}
        type="submit"
        style={{ width: '100%', height: '44px' }}
      >
        <FormattedMessage id="savedAddressId" defaultMessage="Save Address" />
      </Button>
    </Form>
  );
};

export default FormEnhancer(UpdateAddressTwo);
