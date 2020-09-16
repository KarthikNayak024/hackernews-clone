import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

export const Pagination = ({ storyPerPage, totalStory, paginate, page, prev, next }) => {
  // let pages = [];

  const maxStory = Math.ceil(totalStory / storyPerPage);
  // for (let i = 1; i < Math.floor(totalStory / storyPerPage); ++i) pages.push(i);

  console.log(page);

  return (
    <ul className="p-2 text-center hover:cursor-pointer bg-primary-400 pointer-events-auto">
      <NavLink
        className={
          'bg-primary-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l-full ' +
          (prev ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto')
        }
        onClick={() => paginate('prev')}
        to={`/top/${page}`}
      >
        <BsChevronDoubleLeft className="inline-block pointer-events-auto" /> prev
      </NavLink>
      <span className="bg-primary-400 text-gray-800 font-bold py-2 px-3">
        {page} / {maxStory}
      </span>
      <NavLink
        className={
          'bg-primary-400 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r-full ' +
          (next ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto')
        }
        onClick={() => paginate('next')}
        to={`/top/${page}`}
      >
        next <BsChevronDoubleRight className="inline-block pointer-events-auto" />
      </NavLink>
    </ul>
  );
};

Pagination.propTypes = {
  storyPerPage: PropTypes.number.isRequired,
  totalStory: PropTypes.number.isRequired,
  paginate: PropTypes.func,
  page: PropTypes.number,
  prev: PropTypes.bool,
  next: PropTypes.bool,
};

// {pages.map((page) => (
//   <li key={page} className="inline-block p-2">
//     {/* <a onClick={() => paginate(page)} className="hover:cursor-pointer" href="#">
//       {page}
//     </a> */}
//     <NavLink
//       onClick={() => paginate(page)}
//       className="hover:cursor-pointer"
//       to={`/top/${page}`}
//       activeStyle={{
//         padding: '0.5rem',
//         borderRadius: '3px',
//         cursor: 'pointer',
//         backgroundColor: 'orange',
//       }}
//     >
//       {page}
//     </NavLink>
//   </li>
// ))}