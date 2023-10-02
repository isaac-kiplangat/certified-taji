import React, { useState } from 'react';

export default function YourComponent(): JSX.Element {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [registrationNumber, setRegistrationNumber] = useState<string>('');
  const [databaseResults, setDatabaseResults] = useState<string[]>([]);

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2014 + 1 },
    (_, i) => currentYear - i,
  );
  const courses = ['Math', 'Sociology', 'Science', 'History', 'English', 'Art']; // Replace with your list of courses

  // Function to handle year selection
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };
  // Function to handle course selection
  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const course = event.target.value;
    setSelectedCourse(course);
  };
  // Function to handle registration number input
  const handleRegistrationNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setRegistrationNumber(value);
  };

  // Function to query database
  const handleQueryDatabase = () => {
    // Replace with your database query logic using selectedYear and selectedCourse
    // For example, you can make an API request here to query the database
    console.log('Querying the database with selectedYear:', selectedYear);
    console.log('Querying the database with selectedCourse:', selectedCourse);
    console.log(
      'Querying the database with registrationNumber:',
      registrationNumber,
    );
    const results = ['Result 1', 'Result 2', 'Result 3'];
    setDatabaseResults(results);
  };

  return (
    <div>
      <div className="my-4">
        <div className=" grid grid-cols-2 gap-4  my-6 items-center justify-between">
          <div className="relative flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              <span className="text-gray-700 ml-2">Year </span>
            </h1>
            {/* {selectedYear ? selectedYear : 'Year'} */}
            <select
              onChange={handleYearChange}
              value={selectedYear || ''}
              className="ml-2 px-2 py-2 text-gray-900 bg-white border border-gray-300 rounded cursor-pointer"
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {/* Course Dropdown */}
          <div className="relative flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              <span className="text-gray-700 ml-2">Course</span>
            </h1>
            {/* {selectedCourse ? selectedCourse : 'Course'} */}

            <select
              onChange={handleCourseChange}
              value={selectedCourse || ''}
              style={{ width: '50%' }}
              className="ml-2 px-2 py-2 text-gray-900 bg-white border border-gray-300 rounded cursor-pointer"
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Registration Number Input */}
        <div className="relative flex items-center ">
          <h1 className="text-xl font-semibold text-gray-900 ">
            <span className="text-gray-700 ml-2">Reg No.</span>
          </h1>
          <input
            type="text"
            placeholder="Enter Graduation/Registration Number"
            value={registrationNumber}
            style={{ width: '58%' }}
            onChange={handleRegistrationNumberChange}
            className="px-2 ml-2 py-2 text-gray-900 bg-white border border-gray-300 rounded"
          />
        </div>
      </div>
      {/* Button to Apply Query */}
      <div className="justify-item-end items-end">
        <button
          onClick={handleQueryDatabase}
          className="bg-primary hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg "
        >
          Apply
        </button>
      </div>
      {/* Display Database Results */}
      {databaseResults.length > 0 && (
        <div className="border border-gray-300 p-4">
          <h2 className="text-xl font-semibold">Database Results:</h2>
          <ul>
            {databaseResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
