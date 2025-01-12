import React, { memo } from 'react';

function ShortPost({ title, excerpt }) {
  return (
    <div className="short-post text-muted text-center font-weight-bolder p-5 m-2">
      <h4>{title}</h4>
      <p>{excerpt}</p>
    </div>
  );
}

export default memo(ShortPost);
