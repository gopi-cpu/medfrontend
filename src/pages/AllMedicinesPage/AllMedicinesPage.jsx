// import React, { useState, useEffect } from "react";
// import "./AllMedicinesPage.css";
// import { MedicineList } from "../../assets/assets";

// const AllMedicinesPage = () => {
//   const [MedicineData, setMedicineData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [ItemsPerPage, setItemsPerPage] = useState(99);
//   // const [ItemsPerSlot, setItemsPerSlot] = useState(25);

//   useEffect(() => {
//     setMedicineData(MedicineList);
//   }, []);

//   const lastItemIndex = currentPage * ItemsPerPage;
//   const firstItemIndex = lastItemIndex - ItemsPerPage;
//   const currentItems = MedicineList.slice(firstItemIndex, lastItemIndex);

//   let arr = [
//     "0-9",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "All",
//   ];
//   // let pages = [];
//   // for (let i = 1; i <= Math.ceil(currentItems.length / ItemsPerPage); i++) {
//   //   pages.push(i);
//   // }

//   let totalPages = Math.ceil(MedicineList.length / ItemsPerPage);
// let pages = [];
// for (let i = 1; i <= totalPages; i++) {
//   pages.push(i);
// }


//   // let part1 = currentItems.slice(0, 33);
//   // console.log(part1);
//   // let part2 = currentItems.slice(33, 33 * 2);
//   // let part3 = currentItems.slice(33 * 2);

//   return (
//     <div className="AllMedicinesMain">
//       <h2 className="Heading-AMP">All Medicines List</h2>
//       <h3 className="SubHeading-AMP">Find your medicine here</h3>

//       <div className="MedicinesFilter">
//         <select name="MedicineType" id="FilterMedicine">
//           <option value="All">All</option>
//           <option value="Tablet">Tablet</option>
//           <option value="Syrup">Syrup</option>
//           <option value="Injection">Injection</option>
//           <option value="Inhaler">Inhaler</option>
//           <option value="Ointment">Ointment</option>
//           <option value="Lotion">Lotion</option>
//           <option value="Sprayers">Sprayers</option>
//         </select>
//       </div>
//       <div className="LetterFilter">
//         <ul className="LettersList">
//           {arr.map((item, index) => (
//             <li key={index} className="Letter">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="MedicinesComponent">
//         <div className="MedicineList">
//           {currentItems.map((item, index) => (
//             <div key={index}>{item.Medicine}</div>
//           ))}
//         </div>
//         <div className="Pagination">
//           {pages.map((page, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(page)}
//               className="PaginationButton"
//             >
//               {page}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllMedicinesPage;


import React, { useState, useEffect } from "react";
import "./AllMedicinesPage.css";
import { MedicineList } from "../../assets/assets";

const AllMedicinesPage = () => {
  const [MedicineData, setMedicineData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ItemsPerPage, setItemsPerPage] = useState(99);

  useEffect(() => {
    setMedicineData(MedicineList);
  }, []);

  const lastItemIndex = currentPage * ItemsPerPage;
  const firstItemIndex = lastItemIndex - ItemsPerPage;
  const currentItems = MedicineList.slice(firstItemIndex, lastItemIndex);

  // Calculate the number of items per row
  const itemsPerRow = Math.ceil(currentItems.length / 3);

  // Split currentItems into 3 rows
  const firstRow = currentItems.slice(0, itemsPerRow);
  const secondRow = currentItems.slice(itemsPerRow, itemsPerRow * 2);
  const thirdRow = currentItems.slice(itemsPerRow * 2, itemsPerRow * 3);

  let arr = [
    "0-9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "All",
  ];

  let totalPages = Math.ceil(MedicineList.length / ItemsPerPage);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="AllMedicinesMain">
      <h2 className="Heading-AMP">All Medicines List</h2>
      <h3 className="SubHeading-AMP">Find your medicine here</h3>

      <div className="MedicinesFilter">
        <select name="MedicineType" id="FilterMedicine">
          <option value="All">All</option>
          <option value="Tablet">Tablet</option>
          <option value="Syrup">Syrup</option>
          <option value="Injection">Injection</option>
          <option value="Inhaler">Inhaler</option>
          <option value="Ointment">Ointment</option>
          <option value="Lotion">Lotion</option>
          <option value="Sprayers">Sprayers</option>
        </select>
      </div>
      <div className="LetterFilter">
        <ul className="LettersList">
          {arr.map((item, index) => (
            <li key={index} className="Letter">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="MedicinesComponent">
        <div className="MedicineRow">
          {firstRow.map((item, index) => (
            <div key={index} className="MedicineItem">{item.Medicine}</div>
          ))}
        </div>
        <div className="MedicineRow">
          {secondRow.map((item, index) => (
            <div key={index} className="MedicineItem">{item.Medicine}</div>
          ))}
        </div>
        <div className="MedicineRow">
          {thirdRow.map((item, index) => (
            <div key={index} className="MedicineItem">{item.Medicine}</div>
          ))}
        </div>
      </div>
        <div className="Pagination">
          <div className="PaginationButtons">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className="PaginationButton"
            >
              {page}
            </button>
          ))}
        </div>
          </div>
    </div>
  );
};

export default AllMedicinesPage;
