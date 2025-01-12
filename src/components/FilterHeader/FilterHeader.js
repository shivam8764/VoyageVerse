import React, { memo } from 'react';

function FilterHeader({ activeButton, ascDate, dscDate, ascLike, dscLike }) {
  return (
    <div className="filter">
      <div className="btn-group btn-group-lg text-center w-100 p-4">
        <button
          type="button"
          className={`btn btn-primary ${activeButton === 'ascDate' ? 'active' : ''}`}
          onClick={ascDate}
        >
          Ascending By Date
        </button>

        <button
          type="button"
          className={`btn btn-primary ${activeButton === 'dscDate' ? 'active' : ''}`}
          onClick={dscDate}
        >
          Descending By Date
        </button>

        <button
          type="button"
          className={`btn btn-primary ${activeButton === 'ascLike' ? 'active' : ''}`}
          onClick={ascLike}
        >
          Ascending By Likes
        </button>

        <button
          type="button"
          className={`btn btn-primary ${activeButton === 'dscLike' ? 'active' : ''}`}
          onClick={dscLike}
        >
          Descending By Likes
        </button>
      </div>
    </div>
  );
}

export default memo(FilterHeader);
