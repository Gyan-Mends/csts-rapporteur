import type { ActionFunction, LoaderFunction } from "react-router";
import { ReportController } from "~/controllers/ReportController";

// GET /api/reports/:id - Get a specific report
export const loader: LoaderFunction = async ({ request, params }) => {
  if (!params.id) {
    return new Response("Report ID is required", { status: 400 });
  }
  return await ReportController.getReportById(request, { id: params.id });
};

// PUT/PATCH /api/reports/:id - Update a report
// DELETE /api/reports/:id - Delete a report
export const action: ActionFunction = async ({ request, params }) => {
  if (!params.id) {
    return new Response("Report ID is required", { status: 400 });
  }

  const method = request.method;

  switch (method) {
    case "PUT":
    case "PATCH":
      return await ReportController.updateReport(request, { id: params.id });
    case "DELETE":
      return await ReportController.deleteReport(request, { id: params.id });
    default:
      return new Response("Method not allowed", { status: 405 });
  }
}; 