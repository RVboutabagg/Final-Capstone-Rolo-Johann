function SeverityBadge({ severity }) {
    const styles = {
      low: "bg-green-100 text-green-700 border border-green-300",
      medium: "bg-yellow-100 text-yellow-700 border border-yellow-300",
      high: "bg-red-100 text-red-700 border border-red-300",
    };
   
    const labels = {
      low: "Low",
      medium: "Medium",
      high: "High",
    };
   
    const colorClass = styles[severity] || "bg-gray-100 text-gray-600 border border-gray-300";
    const label = labels[severity] || "Unknown";
   
    return (
      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClass}`}>
        {label} Severity
      </span>
    );
  }
   
  export default SeverityBadge;