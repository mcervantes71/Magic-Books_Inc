import React from 'react';
import { categories } from '../store/init';

export default function CategoryFilter({ handleFilterChange }) {
  return (
    <div>
      <select name="filter" onChange={(e) => handleFilterChange(e)}>
        <option value="All" key="All">All</option>
        {categories.map(category => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}