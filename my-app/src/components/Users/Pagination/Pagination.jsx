import React from "react";
import classes from "./Pagination.module.scss"


const Pagination = (props) => {


    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pageNumbers = [];

    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={classes.paginationComponent}>
            <ul className={classes.pagination}>
                {pageNumbers.map((pageNumber, index) => {
                    return (
                        <li key={index} className={classes.pagination__item}>
                            <a onClick={() => {
                                props.pageChanged(pageNumber)
                            }}
                               className={
                                   props.currentPage === pageNumber
                                       ? classes.pagination__link_active
                                       : classes.pagination__link}>
                                {pageNumber}
                            </a>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Pagination