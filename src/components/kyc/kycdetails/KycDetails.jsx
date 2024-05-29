import React from "react";

export default function KycDetails() {
  return (
    <form className="flex justify-center items-center min-h-screen">
      <div className="space-y-12 min-w-[300px] max-w-3xl w-full">
        <div className="border border-gray-300 rounded-md p-4 bg-white shadow-md">
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="father-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Father's Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="father-name"
                  id="father-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="father-last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Father's Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="father-last-name"
                  id="father-last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="phone-no"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone-no"
                  name="phone-no"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3 mb-5">
              <label
                htmlFor="education"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Education
              </label>
              <div className="mt-2">
                <select
                  id="education"
                  name="education"
                  autoComplete="education-level"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>High School</option>
                  <option>Associate's Degree</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>PhD</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3 mb-5">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3 mb-5">
              <label
                htmlFor="date-of-birth"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date-of-birth"
                  id="date-of-birth"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Add more fields here based on your requirements */}
            <div className="sm:col-span-3 mb-5">
              <label
                htmlFor="religion"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Religion
              </label>
              <div className="mt-2">
                <select
                  id="religion"
                  name="religion"
                  autoComplete="religion"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="islam">Islam</option>
                  <option value="christianity">Christianity</option>
                  <option value="hinduism">Hinduism</option>
                  <option value="buddhism">Buddhism</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3 mb-5">
              <label
                htmlFor="nationality"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nationality
              </label>
              <div className="mt-2">
                <select
                  id="nationality"
                  name="nationality"
                  autoComplete="nationality"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  autoComplete="category"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="retired">Retired</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            {/* Add more fields as needed */}
            <div className="sm:col-span-4">
              <label
                htmlFor="alternate-phone-no"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Alternate Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="alternate-phone-no"
                  id="alternate-phone-no"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="nominee-first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nominee First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nominee-first-name"
                  id="nominee-first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="nominee-last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nominee Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nominee-last-name"
                  id="nominee-last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="nominee-contact-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nominee Contact Number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="nominee-contact-number"
                  id="nominee-contact-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="relation-with-nominee"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Relation with Nominee
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="relation-with-nominee"
                  id="relation-with-nominee"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="occupation"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Occupation
              </label>
              <div className="mt-2">
                <select
                  id="occupation"
                  name="occupation"
                  autoComplete="occupation"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="engineer">Engineer</option>
                  <option value="teacher">Teacher</option>
                  <option value="doctor">Doctor</option>
                  <option value="artist">Artist</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="monthly-income"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Monthly Income
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="monthly-income"
                  id="monthly-income"
                  autoComplete="monthly-income"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="number-of-family-member"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number of Family Members
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="number-of-family-member"
                  id="number-of-family-member"
                  autoComplete="number-of-family-member"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}