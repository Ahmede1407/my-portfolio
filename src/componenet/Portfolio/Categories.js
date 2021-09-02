import React, { useState } from "react";

const Categories = ({ filterProjects, categories }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="categories-btn-container ">
      {categories.map((category, index) => {
        return (
          <span
            className={` btn-flex categories-btn ${
              index === value && "active"
            }`}
            key={index}
            onClick={() => {
              filterProjects(category);
              setValue(index);
            }}
          >
            {category}
          </span>
        );
      })}
    </div>
  );
};

export default Categories;
