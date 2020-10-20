import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useDrawerDispatch } from '../../context/DrawerContext';
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

const GET_CATEGORIES = gql`
  query getCategories($type: String, $searchBy: String) {
    categories(type: $type, searchBy: $searchBy) {
      id
      icon
      name
      slug
      type
    }
  }
`;
const CREATE_TYPE = gql`
  mutation CreateType($input: MainTypeInput!) {
    createType(input: $input) {
      id
      slug
      name
      image
      icon
      created_at
    }
  }
`;

type Props = any;

const AddType: React.FC<Props> = props => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);
  const { register, handleSubmit, setValue } = useForm();
  const [meta_description, setMetaDescription] = useState('');
  const [icon, setIcon] = useState([]);
  React.useEffect(() => {
    register({ name: 'icon' });
    register({ name: 'image' });
  }, [register]);
  const [createType] = useMutation(CREATE_TYPE, {
    update(cache, { data: { createCategory } }) {
      const { categories } = cache.readQuery({
        query: GET_CATEGORIES,
      });

      cache.writeQuery({
        query: GET_CATEGORIES,
        data: { categories: categories.concat([createCategory]) },
      });
    },
  });

  const onSubmit = ({ name, icon, meta_title, meta_keyword, meta_description, image }) => {
    const newType = {
      name: name,
      image: image,
      icon: icon[0].value,
      meta_title: meta_title,
      meta_keyword: meta_keyword,
      meta_description: meta_description,
    };
    createType({
      variables: { input: newType },
    });
    closeDrawer();
  };
  const handleChange = ({ value }) => {
    setValue('icon', value);
    setIcon(value);
  };
  const handleUploader = files => {
    setValue('image', files[0].path);
  };

  const handleMetaDescriptionChange = e => {
    const value = e.target.value;
    setValue('meta_description', value);
    setMetaDescription(value);
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Add Type</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
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
              <FieldDetails>Upload your Type image here</FieldDetails>
            </Col>
            <Col lg={8}>
              <DrawerBox
                overrides={{
                  Block: {
                    style: {
                      width: '100%',
                      height: 'auto',
                      padding: '30px',
                      borderRadius: '3px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  },
                }}
              >
                <Uploader onChange={handleUploader} />
              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Add your type and necessary information's from here
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Type Name</FormLabel>
                  <Input
                    inputRef={register({ required: true })}
                    name="name"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Icon</FormLabel>
                  <Select
                    options={AllIconArray}
                    labelKey="value"
                    valueKey="value"
                    placeholder="Ex: Choose type icon"
                    value={icon}
                    searchable={true}
                    onChange={handleChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      OptionContent: {
                        style: ({ $theme, $selected }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $selected
                              ? $theme.colors.textDark
                              : $theme.colors.textNormal,
                          };
                        },
                      },
                      SingleValue: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                    maxDropdownHeight="300px"
                    type={TYPE.search}
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Meta Title</FormLabel>
                  <Input
                      name="meta_title"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Meta Keyword</FormLabel>
                  <Input
                      name="meta_keyword"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Meta Description</FormLabel>
                  <Textarea
                      name="meta_description"
                      value={meta_description}
                      onChange={handleMetaDescriptionChange}
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
            Create Type
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default AddType;
