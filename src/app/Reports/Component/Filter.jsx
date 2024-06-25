import { useState } from 'react';
import { Checkbox, DatePicker, Button } from 'antd';

const { RangePicker } = DatePicker;

const Filter = ({ selectedTypes = [], onTypeChange, onFilterChange }) => {
  const [dateRange, setDateRange] = useState([]);

  const handleCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const handleGenerate = () => {
    if (dateRange.length === 2) {
      const startDate = dateRange[0].toDate();
      const endDate = dateRange[1].toDate();
      onFilterChange(selectedTypes, startDate, endDate);
    }
  };

  return (
    <div>
      <Checkbox
        checked={selectedTypes.includes('journals')}
        onChange={() => handleCheckboxChange('journals')}
      >
        Journals
      </Checkbox>
      <Checkbox
        checked={selectedTypes.includes('newspapers')}
        onChange={() => handleCheckboxChange('newspapers')}
      >
        Newspapers
      </Checkbox>
      <Checkbox
        checked={selectedTypes.includes('ebooks')}
        onChange={() => handleCheckboxChange('ebooks')}
      >
        Ebooks
      </Checkbox>
      <RangePicker onChange={handleDateChange} />
      <Button type="primary" onClick={handleGenerate}>Generate</Button>
    </div>
  );
};

export default Filter;
