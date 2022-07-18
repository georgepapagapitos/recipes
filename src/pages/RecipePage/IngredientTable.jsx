import classNames from 'classnames';
import React from 'react';

const IngredientTable = (props) => {
  const { ingredients } = props;

  const tableClasses = classNames({
    'table': true,
    'hidden': ingredients === undefined || ingredients.length === 0,
  });

  return (
    <table className={tableClasses}>
      <thead>
        <tr>
          <th>name</th>
          <th>amount</th>
          <th>unit</th>
          <th>prep</th>
        </tr>
      </thead>
      <tbody>
        {ingredients && ingredients.map(ingredient => (
          <tr key={ingredient.id}>
            <td>{ingredient.name ? ingredient.name : '-'}</td>
            <td>{ingredient.amt ? ingredient.amt : '-'}</td>
            <td>{ingredient.unit ? ingredient.unit : '-'}</td>
            <td>{ingredient.prep ? ingredient.prep : '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientTable;
