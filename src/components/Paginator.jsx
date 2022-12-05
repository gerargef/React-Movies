import React from 'react'
import {getPagesArray} from '../utils/getPageCount'

function Paginator(props) {
    let pagesArray = getPagesArray(props.pages);

    const handleClick = (e) => {
        props.getPage(Number(e.target.id))
    }
    const chevronClick = (e) => {
      if (e.target.id === 'left') {
        let previosPage = props.currentPage - 1
        props.getPage(previosPage)
      } else {
        let nextPage = props.currentPage + 1
        props.getPage(nextPage)
      }
    }
  return (
    <ul className="pagination">
        <li className={props.currentPage === 1 ? 'disabled' : ''}>
          <a href="#!">
            <i className="material-icons"
               onClick={chevronClick}
               id="left"
               >
                chevron_left</i>
          </a>
        </li>
        {pagesArray.map((page) => (
          <li
            className={
              props.currentPage === page
                ? "waves-effect active green accent-4"
                : "waves-effect"
            }
            key={page}
            onClick={handleClick}
          >
            <a href="#!" id={page}>{page}</a>
          </li>
        ))}
        <li className = {props.currentPage === pagesArray.length ? 'disabled' : ''}>
          <a href="#!">
            <i className="material-icons"
               onClick={chevronClick}
               id="right"
            >chevron_right</i>
          </a>
        </li>
      </ul>
  )
}

export default Paginator