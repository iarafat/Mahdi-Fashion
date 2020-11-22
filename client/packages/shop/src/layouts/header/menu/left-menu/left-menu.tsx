import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import Popover from 'components/popover/popover';
import Logo from 'layouts/logo/logo';
import { MenuDown } from 'assets/icons/MenuDown';
import { CATEGORY_MENU_ITEMS,CATEGORY_MENU } from 'site-settings/site-navigation';
import * as categoryMenuIcons from 'assets/icons/category-menu-icons';
import {
  MainMenu,
  MenuItem,
  SelectedItem,
  Icon,
  Arrow,
  LeftMenuBox,
} from './left-menu.style';

const CategoryIcon = ({ name }) => {
  const TagName = categoryMenuIcons[name];
  return !!TagName ? <TagName /> : <p> </p>;
};

const CategoryMenu = (props: any) => {

  const [typeMenu, setTypeMenu] = useState([]);

  const handleOnClick = (item) => {
    if (item.dynamic) {
      Router.push('/[type]', `${item.href}`);
      props.onClick(item);
      return;
    }
    Router.push(`${item.href}`);
    props.onClick(item);
  };

  useEffect(() => {
    CATEGORY_MENU().then((res) => {
      setTypeMenu(res);
    })
    return;
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {typeMenu.map((item) => {
        return(
        <MenuItem key={item.id} {...props} onClick={() => handleOnClick(item)}>
          <CategoryIcon name={item.icon} />
          <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
        </MenuItem>
      )})}
    </div>
  );
};

type Props = {
  logo: string;
};

export const LeftMenu: React.FC<Props> = ({ logo }) => {
  const [typeMenu, setTypeMenu] = useState([]);
  
  useEffect(() => {
    CATEGORY_MENU().then((res) => {
      setTypeMenu(res);
    })
    return;
  }, []);

  const router = useRouter();
  const initialMenu = typeMenu.find(
    (item) => item.href == router.asPath
  );
  const [activeMenu, setActiveMenu] = React.useState(
    initialMenu ?? CATEGORY_MENU_ITEMS[0]
  );

  return (
    <LeftMenuBox>
      <Logo
        imageUrl={logo}
        alt={'Shop Logo'}
        onClick={() => setActiveMenu(CATEGORY_MENU_ITEMS[0])}
      />

      <MainMenu>
        <Popover
          className="right"
          handler={
            <SelectedItem>
              <span>
                <Icon>
                  <CategoryIcon name={activeMenu?.icon} />
                </Icon>
                <span>
                  <FormattedMessage
                    id={activeMenu?.id}
                    defaultMessage={activeMenu?.defaultMessage}
                  />
                </span>
              </span>
              <Arrow>
                <MenuDown />
              </Arrow>
            </SelectedItem>
          }
          content={<CategoryMenu onClick={setActiveMenu} />}
        />
      </MainMenu>
    </LeftMenuBox>
  );
};
