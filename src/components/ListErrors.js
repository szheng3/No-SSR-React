import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class ListErrors extends React.Component {

  static propTypes = {
    array: PropTypes.array,
    errors: PropTypes.object,
  };

  render() {
    const {
      errors,
    } = this.props;
    if (errors) {
      return (
        <ul className="error-messages">
          {
            Object.keys(errors).map(key => {
              return (
                <li key={key}>
                  {key} {errors[key]}
                </li>
              );
            })
          }
        </ul>
      );
    } else {
      return null;
    }
  }
}


// ListErrors.propTypes = {
//   cityList: PropTypes.array,
//   errors: PropTypes.object,
// };
export default ListErrors;

