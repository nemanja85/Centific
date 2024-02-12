import React, {
  useState
} from 'react';

import './InputDropdown.css';

/**
 * Mocking getting labels
 *
 * @param {string} keyword
 * @returns {string[]}
 */
const getLabelList = async (keyword) => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const data = {
    '@work': ['work', 'office', 'business'],
    '@home': ['home', 'family', 'house'],
    '@personal': ['personal', 'self', 'me'],
  };

  return data[keyword] || [];
};

export const InputDropdown = () => {
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [labelOptions, setLabelOptions] = useState([]);

  /**
   *
   * @param {import('react').ChangeEvent<HTMLInputElement>} event
   *
   * @returns {void}
   */
  const handleInputChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Check if the input contains '@'
    const idx = value.lastIndexOf('@');
    if (idx !== -1) {
      const keyword = value.substring(idx + 1);
      const labelList = await getLabelList(`@${keyword}`);
      setLabelOptions(labelList);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  /**
   *
   * Handle dropdown.
   *
   * @param {string} label
   *
   * @returns {void}
   */
  const handleDropdown = (label) => {
    const beforeAtIndex = inputValue.lastIndexOf('@');
    const beforeAtValue = inputValue.substring(0, beforeAtIndex + 1);
    console.log('beforeAtValue: ', beforeAtValue);
    setInputValue(beforeAtValue + label);
    setShowDropdown(false);
  };

  return (
  <div>
      <input type = "text"
      value = {
        inputValue
      }
      onChange={handleInputChange}
      />
      {showDropdown && ( <div className="dropdown">{labelOptions.map((label, index) => (
  <div className='tag' key={index} onClick={() => handleDropdown(label)}>
      {label}
  </div>
  ))}
  </div>
  )}
  </div>
  )
};
