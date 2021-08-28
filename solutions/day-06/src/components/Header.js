import React from 'react';

const Header = ({ data }) => {
  const { welcome, title, subtitle, author, date } = data;
  console.log(date);
  return (
    <header>
      <div className="header__content">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Author: {author.firstName} {author.lastName}
        </p>
        <h6>Date: {date}</h6>
      </div>
    </header>
  );
};

export default Header;