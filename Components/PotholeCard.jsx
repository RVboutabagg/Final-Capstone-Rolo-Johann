import SeverityBadge from "./SeverityBadge";
 
function PotholeCard({ location, description, date, severity }) {
  return (
    <div className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-gray-800">{location}</h2>
        <SeverityBadge severity={severity} />
      </div>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <p className="text-xs text-gray-400">Reported on: {date}</p>
    </div>
  );
}
 
export default PotholeCard;