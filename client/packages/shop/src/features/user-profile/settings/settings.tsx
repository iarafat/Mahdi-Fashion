import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Col } from 'react-styled-flexboxgrid';
import { openModal } from '@redq/reuse-modal';
import RadioCardTWO from 'components/radio-card/radio-card-two';
import RadioCard from 'components/radio-card/radio-card';
import { ProfileContext } from 'contexts/profile/profile.context';
import { DELETE_ADDRESS } from 'graphql/mutation/address';
import { DELETE_CARD } from 'graphql/mutation/card';
import { DELETE_CONTACT } from 'graphql/mutation/contact';
import StripePaymentForm from 'features/payment/stripe-form';
import {
  SettingsForm,
  SettingsFormContent,
  HeadingSection,
  Title,
  Row,
  ButtonGroup,
} from './settings.style';
import RadioGroupTwo from 'components/radio-group/radio-group-two';
import RadioGroup from 'components/radio-group/radio-group';

import PaymentGroup from 'components/payment-group/payment-group';
import UpdateAddressTwo from 'components/address-card/address-card-two';
import UpdateContact from 'components/contact-card/contact-card';
import { Button } from 'components/button/button';
import { Input } from 'components/forms/input';
import { UPDATE_ME } from 'graphql/mutation/me';
import { FormattedMessage } from 'react-intl';
import { Label } from 'components/forms/label';

type SettingsContentProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const SettingsContent: React.FC<SettingsContentProps> = ({ deviceType }) => {
  const { state, dispatch } = useContext(ProfileContext);
  const [updateMeMutation] = useMutation(UPDATE_ME);
  const [deleteContactMutation] = useMutation(DELETE_CONTACT);
  const [deleteAddressMutation] = useMutation(DELETE_ADDRESS);
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);

  const { 
    delivery_address, 
    card,
    name,
    email,
    phones
  } = state;

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch({
      type: 'HANDLE_ON_INPUT_CHANGE',
      payload: { value, field: name },
    });
  };
  // Add or edit modal
  const handleModal = (
    modalComponent: any,
    modalProps = {},
    className: string = 'add-address-modal'
  ) => {
    openModal({
      show: true,
      config: {
        width: 360,
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        className: className,
      },
      closeOnClickOutside: true,
      component: modalComponent,
      componentProps: { item: modalProps },
    });
  };

  const handleEditDelete = async (item: any, index: any, type: string, name: string) => {
    if (type === 'edit') {
      const modalComponent = name === 'address' ? UpdateAddressTwo : UpdateContact;
      handleModal(modalComponent, item);
    } else {
      switch (name) {
        case 'payment':
          dispatch({ type: 'DELETE_CARD', payload: item.id });

          return await deletePaymentCardMutation({
            variables: { cardId: JSON.stringify(item.id) },
          });
        case 'contact':
          dispatch({ type: 'DELETE_CONTACT', payload: item.id });

          return await deleteContactMutation({
            variables: { contactId: JSON.stringify(item.id) },
          });
        case 'address':
          dispatch({ type: 'DELETE_ADDRESS', payload: index });

          return await deleteAddressMutation({
            variables: { 
              id: "5fa2a3c3c9efe33afc57bc39",
              index 
            },
          });

        default:
          return false;
      }
    }
  };

  const handleSave = async () => {
    const { name, email } = state;
    await updateMeMutation({
      variables: { meInput: JSON.stringify({ name, email }) },
    });
  };

  return (
    <SettingsForm>
      <SettingsFormContent>
        <HeadingSection>
          <Title>
            <FormattedMessage
              id='profilePageTitle'
              defaultMessage='Your Profile'
            />
          </Title>
        </HeadingSection>
        <Row style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileNameField'
                defaultMessage='Your Name'
              />
            </Label>
            <Input
              type='text'
              label='Name'
              name='name'
              value={name}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              height='48px'
              // intlInputLabelId="profileNameField"
            />
          </Col>

          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id='profileEmailField'
                defaultMessage='Your Email'
              />
            </Label>
            <Input
              type='email'
              name='email'
              label='Email Address'
              value={email}
              onChange={handleChange}
              backgroundColor='#F7F7F7'
              // intlInputLabelId="profileEmailField"
            />
          </Col>

          <Col xs={12} sm={2} md={2} lg={2}>
            <Button size='big' style={{ width: '100%' }} onClick={handleSave}>
              <FormattedMessage id='profileSaveBtn' defaultMessage='Save' />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id='contactNumberTItle'
                    defaultMessage='Contact Numbers'
                  />
                </Title>
              </HeadingSection>
              <ButtonGroup>
                <RadioGroup
                  items={phones}
                  component={(item: any, index: any) => (
                    <RadioCard
                      id={index}
                      key={item.number}
                      title={item.type}
                      content={item.number}
                      checked={item.type === 'primary'}
                      onChange={() =>
                        dispatch({
                          type: 'SET_PRIMARY_CONTACT',
                          payload: index.toString(),
                        })
                      }
                      name='contact'
                      onEdit={() => handleEditDelete(item, index, 'edit', 'contact')}
                      onDelete={() =>
                        handleEditDelete(item, index, 'delete', 'contact')
                      }
                    />
                  )}
                  secondaryComponent={
                    <Button
                      size='big'
                      variant='outlined'
                      type='button'
                      className='add-button'
                      onClick={() =>
                        handleModal(UpdateContact, {

                        }, 'add-contact-modal')
                      }
                    >
                      <FormattedMessage
                        id='addContactBtn'
                        defaultMessage='Add Contact'
                      />
                    </Button>
                  }
                />
              </ButtonGroup>
            </SettingsFormContent>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={{ position: 'relative' }}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id='deliveryAddresTitle'
                    defaultMessage='Delivery Address'
                  />
                </Title>
              </HeadingSection>
              <ButtonGroup>
                <RadioGroupTwo
                  items={delivery_address}
                  component={(item: any, index: any) => (
                    <RadioCardTWO 
                      id={index}
                      key={index}
                      address={item.address}
                      district={item.district}
                      division={item.division}
                      title={item.title}
                      region = {item.region}
                      name='address'
                      isChecked={item.is_primary === true}
                      onChange={() =>
                        dispatch({
                          type: 'SET_PRIMARY_ADDRESS',
                          payload: index,
                        })
                      }
                      onEdit={() => handleEditDelete(item, index, 'edit', 'address')}
                      onDelete={() =>
                        handleEditDelete(item, index, 'delete', 'address')
                      }
                    />
                  )}
                  
                  secondaryComponent={
                    <Button
                      size='big'
                      variant='outlined'
                      type='button'
                      className='add-button'
                      onClick={() =>
                        handleModal(UpdateAddressTwo, {}, 'add-address-modal')
                      }
                    >
                      <FormattedMessage
                        id='addAddressBtn' 
                        defaultMessage='Add Address' 
                      />
                    </Button>
                  }
                />
              </ButtonGroup>
            </SettingsFormContent>
          </Col>
        </Row>

        {/*<Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id='paymentCardTitle'
                    defaultMessage='Payments Card'
                  />
                </Title>
              </HeadingSection>
              <PaymentGroup
                name='payment'
                deviceType={deviceType}
                items={card}
                onEditDeleteField={(item: any, type: string) =>
                  handleEditDelete(item, type, 'payment')
                }
                onChange={(item: any) =>
                  dispatch({
                    type: 'SET_PRIMARY_CARD',
                    payload: item.id.toString(),
                  })
                }
                handleAddNewCard={() => {
                  handleModal(
                    StripePaymentForm,
                    { buttonText: 'Add Card' },
                    'add-address-modal stripe-modal'
                  );
                }}
              />
            </SettingsFormContent>
          </Col>
        </Row>*/}
      </SettingsFormContent>
    </SettingsForm>
  );
};

export default SettingsContent;
