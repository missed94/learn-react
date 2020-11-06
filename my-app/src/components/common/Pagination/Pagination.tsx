import React, {useState} from "react";
import classes from "./Pagination.module.scss"


type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    pageChanged: (pageNumber: number) => void,
    currentPage: number,
    portionSize?: number,
}

const Pagination: React.FC<PropsType> = ({
                                             totalItemsCount,
                                             pageSize,
                                             pageChanged,
                                             currentPage,
                                             portionSize = 10
}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pageNumbers: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (

        <div className={classes.paginationComponent}>
            <div className={classes.pagination}>
                {
                    portionNumber > 1 &&
                    <button className={`${classes.button} ${classes.prev__button}`} onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>PREV</button>
                }

                <ul className={classes.pagination__list}>
                    {pageNumbers
                        .filter(pageNumber => pageNumber >= leftPortionPageNumber && pageNumber <= rightPortionPageNumber)
                        .map((pageNumber) => {
                            return (
                                <li className={classes.pagination__item}>
                                    <a onClick={() => {
                                        pageChanged(pageNumber)
                                    }}
                                       className={
                                           currentPage === pageNumber
                                               ? classes.pagination__link_active
                                               : classes.pagination__link}>
                                        {pageNumber}
                                    </a>
                                </li>
                            )
                        })}

                </ul>

                {
                    portionNumber < portionCount &&
                    <button className={`${classes.button} ${classes.next__button}`} onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>NEXT</button>
                }
            </div>

        </div>
    )
}

export default Pagination