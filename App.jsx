
import PotholeCard from "./Components/PotholeCard";
import SeverityBadge from "./Components/SeverityBadge";
import ReportForm from "./Components/ReportForm";

function App() {
  function handleNewReport(report) {
    console.log("New report submitted:", report);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-gray-800">Oakland Pothole Tracker — Component Preview</h1>

      {/* SeverityBadge demo */}
      <div>
        <h2 className="text-md font-semibold text-gray-600 mb-2">SeverityBadge Component</h2>
        <div className="flex gap-2">
          <SeverityBadge severity="low" />
          <SeverityBadge severity="medium" />
          <SeverityBadge severity="high" />
        </div>
      </div>

      {/* PotholeCard demo */}
      <div>
        <h2 className="text-md font-semibold text-gray-600 mb-2">PotholeCard Component</h2>
        <div className="flex flex-wrap gap-4">
          <PotholeCard
            location="14th Ave & International Blvd"
            description="Large pothole near the crosswalk, causes cars to swerve."
            date="3/24/2026"
            severity="high"
          />
          <PotholeCard
            location="MacArthur Blvd near 35th Ave"
            description="Small pothole on the right lane, minor bump."
            date="3/22/2026"
            severity="low"
          />
        </div>
      </div>

      {/* ReportForm demo */}
      <div>
        <h2 className="text-md font-semibold text-gray-600 mb-2">ReportForm Component</h2>
        <ReportForm onSubmit={handleNewReport} />
      </div>
    </div>
  );
}

export default App;