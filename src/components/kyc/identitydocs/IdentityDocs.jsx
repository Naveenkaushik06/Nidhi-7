import React, {useState} from "react"

const IdentityDocs = () => {
  const [form, setForm] = useState({
    aadharNumber: "",
    panNumber: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    voterIdNumber: "",
    aadharImageFront: null,
    panImage: null,
  })

  const handleChange = e => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const handleFileChange = e => {
    const {name, files} = e.target
    setForm({...form, [name]: files[0]})
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log(form)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          KYC Identitydocs
        </h2>
        <form onSubmit={handleSubmit}>
          {[
            {label: "Aadhar Number", name: "aadharNumber", type: "text"},
            {label: "PAN Number", name: "panNumber", type: "text"},
            {label: "Account Number", name: "accountNumber", type: "text"},
            {label: "IFSC Code", name: "ifscCode", type: "text"},
            {label: "Bank Name", name: "bankName", type: "text"},
            {label: "Voter ID Number", name: "voterIdNumber", type: "text"},
          ].map(field => (
            <div className="mb-5" key={field.name}>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
          {[
            {label: "Aadhar Image Front", name: "aadharImageFront"},
            {label: "Aadhar Image Back", name: "aadharImageBack"},
            {label: "PAN Image", name: "panImage"},
            {label: "Passbook Image", name: "passbookImage"},
            {label: "VoterId Image Front", name: "voterIdImageFront"},
            {label: "VoterId Image Back", name: "voterIdImageBack"},
            {label: "Profile Photo", name: "profilePhoto"},
          ].map(field => (
            <div className="mb-6" key={field.name}>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <input
                type="file"
                id={field.name}
                name={field.name}
                onChange={handleFileChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default IdentityDocs