import React from 'react';
import PropTypes from 'prop-types';
import { mdiChevronLeft, mdiChevronRight, mdiDotsHorizontal } from '@lumx/icons';
import { Icon, Size } from '@lumx/react';


const Pagination = ({
  totalPages, currentPage, onChangePage,
}) => {
  const renderBlock = (value) => {
    if (value > totalPages) return null;
    return (
	<button
		type="button"
		className={`button-page ${currentPage === value ? 'active' : ''}`}
		onClick={() => onChangePage(value)}
	>
		{value}
	</button>
    );
  };

  const renderBlocks = () => (
	<>
		{currentPage > 3 && renderBlock(currentPage - 2)}
		{currentPage > 2 && renderBlock(currentPage - 1)}
		{currentPage > 1 && renderBlock(currentPage)}
		{currentPage < totalPages - 1 && renderBlock(currentPage + 1)}
		{currentPage < totalPages - 2 && renderBlock(currentPage + 2)}
	</>
  );

  const renderArrow = (previous) => (
	<button
		type="button"
		className="button-page"
		onClick={() => onChangePage(currentPage + (previous ? -1 : 1))}
	>
		<Icon icon={previous ? mdiChevronLeft : mdiChevronRight} size={Size.s} />
	</button>
  );

  const renderPoints = () => <div className="more-elements"><Icon icon={mdiDotsHorizontal} size={Size.s} /></div>;

  if (totalPages <= 1) return null;

  return (
	<div className="pagination">
		{currentPage > 1 && renderArrow(true)}
		{renderBlock(1)}
		{currentPage > 4 && renderPoints()}
		{renderBlocks()}
		{currentPage < totalPages - 3 && renderPoints()}
		{totalPages > 1 && currentPage < totalPages && renderBlock(totalPages)}
		{currentPage < totalPages && renderArrow(false)}
	</div>
  );
};

Pagination.defaultProps = {
  totalPages: 1,
  currentPage: 1,
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
};


export default Pagination;
