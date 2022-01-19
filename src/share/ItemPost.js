import React from 'react';

const ItemPost = ({ data }) => {
  return (
    <div className="ItemPost">
      <div className="ItemPost-title">{data.title}</div>
      <div className="ItemPost-brief">
        <div dangerouslySetInnerHTML={{ __html: `${data.brief} ...` }} />
      </div>
    </div>
  );
};

export default ItemPost;
