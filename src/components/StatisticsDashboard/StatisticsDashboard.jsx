import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { fetchTransactionsSummary } from '../../redux/transactions/operations';
import { StyledSelectMainDiv } from './StatisticsDashboard.styled';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const StatisticsDashboard = () => {
  const dispatch = useDispatch();

  //  luna și anul curent
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  useEffect(() => {
    dispatch(
      fetchTransactionsSummary({ month: selectedMonth, year: selectedYear })
    );
  }, [dispatch, selectedMonth, selectedYear]);

  const handleMonthChange = month => {
    setSelectedMonth(months.indexOf(month) + 1);
    setIsMonthDropdownOpen(false);
  };

  const handleYearChange = year => {
    setSelectedYear(parseInt(year));
    setIsYearDropdownOpen(false);
  };

  const toggleMonthDropdown = () => {
    setIsMonthDropdownOpen(!isMonthDropdownOpen);
    setIsYearDropdownOpen(false);
  };

  const toggleYearDropdown = () => {
    setIsYearDropdownOpen(!isYearDropdownOpen);
    setIsMonthDropdownOpen(false);
  };

  const yearOptions = Array.from(
    { length: 10 },
    (_, index) => new Date().getFullYear() - index
  );

  return (
    <StyledSelectMainDiv>
      <div>
        {/* Selectare lună */}
        <div onClick={toggleMonthDropdown}>
          {months[selectedMonth - 1]}
          <IoIosArrowDown />
        </div>
        {isMonthDropdownOpen && (
          <div>
            {months.map((month, index) => (
              <div key={index} onClick={() => handleMonthChange(month)}>
                {month}
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Selectare an */}
        <div onClick={toggleYearDropdown}>
          {selectedYear}
          <IoIosArrowDown />
        </div>
        {isYearDropdownOpen && (
          <div>
            {yearOptions.map((year, index) => (
              <div key={index} onClick={() => handleYearChange(year)}>
                {year}
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledSelectMainDiv>
  );
};

export default StatisticsDashboard;
