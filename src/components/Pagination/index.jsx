import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import "../../scss/app.scss";

const Pagination = ({ onChangePage }) => {
  return (
    <div className={`container ${styles.root}`}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
