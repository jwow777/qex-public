import React from 'react';

function Container({ children, classNameSection, title }) {
  return (
    <section className={classNameSection}>
      <div className={`${classNameSection}__container`}>
        <h2 className={`title ${classNameSection}__title`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Container;
