import { useState } from "react";
 
function ReportForm({ onSubmit }) {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("low");
  const [submitted, setSubmitted] = useState(false);
 
  function handleSubmit(e) {
    e.preventDefault();
 
    if (!location || !description) return;
 
    const report = { location, description, severity, date: new Date().toLocaleDateString() };
 
    if (onSubmit) onSubmit(report);
 
    setLocation("");
    setDescription("");
    setSeverity("low");
    setSubmitted(true);
 
    setTimeout(() => setSubmitted(false), 3000);
  }
 
  return (
    <div className="border border-gray-300 rounded-xl p-6 shadow-sm bg-white max-w-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Report a Pothole</h2>
 
      {submitted && (
        <p className="text-green-600 text-sm font-medium mb-3 border border-green-300 bg-green-50 rounded-lg px-3 py-2">
          Report submitted! Thank you.
        </p>
      )}
 
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            placeholder="e.g. 14th Ave & International Blvd"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
 
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            placeholder="Describe the pothole (size, location details, hazard level...)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
 
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
 
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg text-sm transition-colors"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}
 
export default ReportForm;