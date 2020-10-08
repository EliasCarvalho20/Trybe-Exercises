import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, isSelected } = props
  return (
    <div className="Item" onClick={isSelected}>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
