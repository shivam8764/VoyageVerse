import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function Pagination({ pageNo }) {
  const isDisabled = pageNo === 1 || pageNo === 0 || isNaN(pageNo);
  const currentPage = isNaN(pageNo) || pageNo === 0 ? 1 : pageNo;
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center pagination-lg p-4">
        <li className={`page-item ${isDisabled ? 'disabled' : ''}`}>
          <Link className="page-link" to={`/page/${prevPage}`}>
            Previous
          </Link>
        </li>
        
        <li className="page-item">
          <span
            className="page-link"
            style={{ backgroundColor: 'black', color: 'white' }}
          >
            {currentPage}
          </span>
        </li>
        
        <li className="page-item">
          <Link className="page-link" to={`/page/${nextPage}`}>
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default memo(Pagination);
