import React, {useState} from "react"

const FindKycShortDetailsByKycId = () => {
  const [kycId, setKycId] = useState("")

  const handleAccountNumberChange = e => {
    setKycId(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log(`Account Number: ${kycId}`)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Check KYC Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="kycId"
            >
              KYC Id
            </label>
            <input
              type="text"
              id="kycId"
              value={kycId}
              onChange={handleAccountNumberChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
             Check KYC Detail
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FindKycShortDetailsByKycId
