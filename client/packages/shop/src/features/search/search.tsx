import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SearchBox } from 'components/search-box/search-box';
import { useAppState, useAppDispatch } from 'contexts/app/app.provider';
import Router,{ useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import {SearchWrapper, SearchResultWrap} from './search.style';
import ErrorMessage from 'components/error-message/error-message';
import { GET_PRODUCTS_SEARCH } from 'graphql/query/products.search.query';

interface Props {
  minimal?: boolean;
  showButtonText?: boolean;
  onSubmit?: () => void;
  [key: string]: unknown;
  className: string;
}

const Search: React.FC<Props> = ({ onSubmit, ...props  }) => {
  const router = useRouter();
  const { pathname, query } = router;
  const [filteredSearchData, setFilteredSearchData] = useState([]);
  const [isShow, setShow] = useState(false);

  const { data, error, loading } = useQuery(GET_PRODUCTS_SEARCH,
      {
        variables: { 
          type: query.type || 'grocery',
          offset: 0,
          limit: 20
        }
      }
  );

  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMessage message={error.message} />;

  const searchData = data.products.items


  const searchTerm = useAppState('searchTerm');
  const dispatch = useAppDispatch();
  
  const intl = useIntl();

  const handleOnChange = (e) => {
    const { value } = e.target;
    const result = searchData.filter(
      item => item.name.toLowerCase().startsWith(value)
    );
    setFilteredSearchData(result);
    console.log(filteredSearchData, 'filtered-data')
    console.log(value);
    filteredSearchData.length > 0 ? setShow(true) : setShow(false);
    
    dispatch({ type: 'SET_SEARCH_TERM', payload: value });
  };
  
  const onSearch = (e) => {
    e.preventDefault();
    const { type, ...rest } = query;
    if (type) {
      router.push(
        {
          pathname,
          query: { ...rest, text: searchTerm },
        },
        {
          pathname: `/${type}`,
          query: { ...rest, text: searchTerm },
        }
      );
    } else {
      router.push({
        pathname,
        query: { ...rest, text: searchTerm },
      });
    }
    dispatch({ type: 'SET_SEARCH_TERM', payload: '' });
    if (onSubmit) {
      onSubmit();
    }
  };

  const handleBlur = () => {
    return setShow(false)
  };

  const handleRoute = (route) =>{
    alert(12)
    Router.push(`/product`,`${route}`);
    return false;
  }

  const handleClickContent = (e) =>{
    const serachWrap =  document.getElementsByClassName('searchResultWrap');
    return false;
  }
  //onBlur={handleBlur}
  return (
    <SearchWrapper className={props.minimal ? 'minimal-wrap' : 'modern-wrap'}>
      <SearchBox
        onEnter={onSearch}
        onChange={handleOnChange}
        value={searchTerm}
        name="search"
        
        placeholder={intl.formatMessage({
          id: 'searchPlaceholder',
          defaultMessage: 'Search your products from here',
        })}
        categoryType={query.type || 'Grocery'}
        buttonText={
          intl.formatMessage({
            id: 'searchButtonText',
            defaultMessage: 'Search',
          })
        }
        {...props}
      />
      {isShow && 
        <SearchResultWrap className="searchResultWrap" onClick={ (e)=> handleClickContent(e) } >
            <ul>
              {filteredSearchData.map((item,index) => (
                  <li onClick={ () => handleRoute(item.slug)} key={index}>
                    {item.name}
                  </li>
              ))}
            </ul>
        </SearchResultWrap>
      }
    </SearchWrapper>
  );

};

export default Search;
