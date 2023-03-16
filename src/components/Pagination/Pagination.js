import React from "react";
import "./Pagination.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const Pagination = () => {
  let pages = document.getElementsByClassName("pagination-item");
  let nextBtn = document.querySelector(".btn-next");
  let previousBtn = document.querySelector(".btn-previous");
  let firstBtn = document.querySelector(".btn-first");
  let lastBtn = document.querySelector(".btn-last");

  let currentPage = 1;
  let totalPages = 5;

  const activePage = (event) => {
    /**disable previous and first button if current page value is 1 */
    if (currentPage === 1) disablePreviousAndFirstBtn();

    /**disable next and last button if current page value is 5 */
    if (currentPage === totalPages) disableNextAndLastBtn();

    /**set current page value when clicked on page link*/
    currentPage = event.target.value;

    /**apply 'active' class on clicked page link*/
    addActive(event.target);
  };

  const prev = () => {
    currentPage--;
    addActive(pages[currentPage - 1]);
  };

  const next = () => {
    currentPage++;
    addActive(pages[currentPage - 1]);
  };

  const first = () => {
    enableNextAndLastBtn();
    disablePreviousAndFirstBtn();

    currentPage = 1;
    addActive(pages[currentPage - 1]);
  };

  const last = () => {
    disableNextAndLastBtn();

    currentPage = totalPages;
    addActive(pages[currentPage - 1]);
  };

  const removeActive = (list) => {
    if (currentPage === 1) disablePreviousAndFirstBtn();
    else enablePreviousAndFirstBtn();

    if (currentPage === totalPages) disableNextAndLastBtn();
    else enableNextAndLastBtn();

    /**removes 'active' class from all page links*/
    // for (li of list) li.classList.remove("active");
  };

  const addActive = (element) => {
    removeActive(pages);

    /**add 'active' class on current page linkw*/
    element.classList.add("active");
  };

  const disableNextAndLastBtn = () => {
    nextBtn.disabled = true;
    lastBtn.disabled = true;
  };

  const enableNextAndLastBtn = () => {
    nextBtn.disabled = false;
    lastBtn.disabled = false;
  };

  const disablePreviousAndFirstBtn = () => {
    previousBtn.disabled = true;
    firstBtn.disabled = true;
  };

  const enablePreviousAndFirstBtn = () => {
    previousBtn.disabled = false;
    firstBtn.disabled = false;
  };

  // disablePreviousAndFirstBtn();

  return (
    <div className="container">
      <button className="btn btn-first" onClick="first()">
        <KeyboardDoubleArrowLeftIcon />
      </button>
      <button className="btn btn-previous" onClick="prev()">
        <KeyboardArrowLeftIcon />
      </button>
      <ul className="pagination">
        <li
          className="pagination-item active"
          value="1"
          onClick="activePage(event)"
        >
          1
        </li>
        <li className="pagination-item" value="2" onClick="activePage(event)">
          2
        </li>
        <li className="pagination-item" value="3" onClick="activePage(event)">
          3
        </li>
        <li className="pagination-item" value="4" onClick="activePage(event)">
          4
        </li>
        <li className="pagination-item" value="5" onClick="activePage(event)">
          5
        </li>
      </ul>

      <button className="btn btn-next" onClick="next()">
        <KeyboardArrowRightIcon />
      </button>
      <button className="btn btn-last" onClick="last()">
        <KeyboardDoubleArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
