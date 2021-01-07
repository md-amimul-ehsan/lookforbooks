import React from 'react'

const Dropdown = () => (
  <div>
    <select color="black" className="browser-default dropdown select-css" defaultValue="Sort" /*onChange={props.handleSort}*/>
      <option disabled value="Sort"> Sort </option>
      <option value="Newest">Newest</option>
      <option value="Oldest">Oldest</option>
      <option value="Ascending">A-Z</option>
      <option value="Descending">Z-A</option>
    </select>
  </div>
)

export default Dropdown;