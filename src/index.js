import React, { useEffect, useState } from 'react';

const Pagination = ({
  currentPage, // page number
  TotalDataCount, // count of data
  DataPerPage, // limit, or ending index
  setCurrentPageIndex, //starting index
  setCurrentPage, // page number
}) => {
  const [paginationStrip, setPaginationStrip] = useState([]);

  const styles = {
    paginationButton: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      color: 'blue',
      borderRadius: '0.25rem',
      backgroundColor: 'white',
      marginInline: '0.5rem',
      border: 'none',
      outline: 'none',
    },
    paginationButtonActive: {
      backgroundColor: 'black',
      color: 'white',
    },
    paginationBarContainer: {
      whiteSpace: 'nowrap',
      overflowX: 'auto',
      overflowY: 'hidden',
      width: '100vw',
    },
  };

  useEffect(() => {
    let numbers = [];

    for (let i = 1; i <= TotalDataCount / DataPerPage; i++) {
      numbers.push(i);
    }
    //if remaining records are there
    if (TotalDataCount / DataPerPage < DataPerPage)
      numbers.push(numbers.length + 1);
    setPaginationStrip(numbers);
  }, [TotalDataCount]);

  return (
    <div style={styles.paginationBarContainer}>
      {paginationStrip &&
        paginationStrip.map((page) => {
          return (
            <button
              id={page}
              type="button"
              style={
                page === currentPage
                  ? {
                      ...styles.paginationButton,
                      ...styles.paginationButtonActive,
                    }
                  : styles.paginationButton
              }
              onClick={() => {
                setCurrentPage(page);
                setCurrentPageIndex(DataPerPage * page - DataPerPage);
              }}
            >
              {page}
            </button>
          );
        })}
    </div>
  );
};

export const dataFormatter = (
  data,
  currentPageIndex,
  postsPerPage,
  currentPage
) => {
  if (data && data.length > 0)
    return data.slice(currentPageIndex, postsPerPage * currentPage);
  else return [];
};

export default Pagination;
