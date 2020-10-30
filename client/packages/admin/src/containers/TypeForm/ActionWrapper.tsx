import React from 'react';
import { useDrawerDispatch } from '../../context/DrawerContext';
import {
  IconWrapper,
  ActionStyle,
} from '../Types/Types.style';
import {AllIcons} from "../../assets/icons/all-icons";

type Props = {
  data: any;
};

const Icon = ({ icon }) => {
  let Component =  AllIcons.hasOwnProperty(icon) ? AllIcons[icon] : 'span';
  return <Component/>;
}

const ActionWrapper: React.FC<Props> = ({
  data,
  ...props
}) => {
  const dispatch = useDrawerDispatch();

  const openDrawer = React.useCallback(
    () =>{
        console.dir(data)

        dispatch({
          type: 'OPEN_DRAWER',
          drawerComponent: 'TYPE_UPDATE_FORM',
          data: data,
        })
    },
    [dispatch, data]
  );

  return (
      <div>
        <ActionStyle>
          <IconWrapper onClick={openDrawer} style={{ marginRight: '10px', cursor: 'pointer' }}>
            <Icon icon="ArrowNext" />
          </IconWrapper>
        </ActionStyle>
        <ActionStyle>
          <IconWrapper style={{ color: '#c50707', cursor: 'pointer' }}>
            <Icon icon="CloseIcon" />
          </IconWrapper>
        </ActionStyle>
      </div>
  );
};

export default ActionWrapper;
