import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import CartContext from 'context/CartContext';
import { Icon } from './styles';

export function RemoveLineItem({ lineItemId }) {
  const { removeLineItem } = useContext(CartContext);

  const handleClick = () => {
    removeLineItem(lineItemId);
  };

  return (
    <Icon>
      <FaTrashAlt onClick={handleClick} />
    </Icon>
  );
}
