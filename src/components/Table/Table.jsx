import classNames from 'classnames';
import React from 'react';

const Table = (props) => {
  const { headings, tableContent } = props;

  const tableClasses = classNames({
    'table': true,
    'hidden': tableContent === undefined || tableContent.length === 0,
  });

  return (
    <table className={tableClasses}>
      <thead>
        <tr>
          {headings.map(heading => (
            <th>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableContent && tableContent.map(item => (
          <tr key={item.id}>
            <td>{item.name ? item.name : '-'}</td>
            <td>{item.amt ? item.amt : '-'}</td>
            <td>{item.unit ? item.unit : '-'}</td>
            <td>{item.prep ? item.prep : '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
