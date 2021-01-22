import React from 'react';
import { Link } from "react-router-dom";
import "../style/Pagination.css";


const Pagination = ({ currentPage, setCurrentPage, booksPerPage, totalBooks, paginate }) => {
    const pageNumbers = [];
    let classes = "";

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(currentPage);
    return (
        <nav className="nav">
            <ul className='pagination'>
                <li>
                    <Link to="/" onClick={() => {
                        if (currentPage > 1) {
                            setCurrentPage(currentPage - 1)
                        }
                    }}>
                        <p  style ={{color:"#01024e"}} > &lt;&lt;Prev </p>
                    </Link>
                </li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <Link to="/" onClick={() => paginate(number)} href='!#'>
                            <p 
                                className="pagination-number"
                                style={{
                                    color: currentPage == number ? "white" : "#01024e",
                                    backgroundColor: currentPage == number ? "#00454a" : null,
                                    width: 40
                                }}>
                                {number}
                            </p>
                        </Link>
                    </li>
                ))}
                <li>
                    <Link to="/" onClick={() => {
                        if (currentPage < pageNumbers.length) {
                            setCurrentPage(currentPage + 1)
                        }
                    }}>
                        <p  style ={{color:"#01024e"}} > Next&gt;&gt; </p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;