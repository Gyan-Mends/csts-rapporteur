import type { ActionFunction, LoaderFunction } from "react-router";
import { ReportController } from "~/controllers/ReportController";

// GET /api/reports - Get all public reports
export const loader: LoaderFunction = async ({ request }) => {
  return await ReportController.getPublicReports(request);
};

// POST /api/reports - Create a new report (admin only)
export const action: ActionFunction = async ({ request }) => {
  const method = request.method;

  switch (method) {
    case "POST":
      return await ReportController.createReport(request);
    default:
      return new Response("Method not allowed", { status: 405 });
  }
}; 