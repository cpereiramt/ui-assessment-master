import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SalesOverview from "./sales-overview";

const mockSalesData = {
  lastUploadDate: 1628505600000,
  uploads: 10,
  linesAttempted: 100,
  successfulUploads: 80,
  linesSaved: 90,
};

describe("Sales Overview Component", () => {
  test("renders without crashing", () => {
    render(<SalesOverview sales={mockSalesData} />);
  });

  test("renders Sales title with upload icon", () => {
    render(<SalesOverview sales={mockSalesData} />);
    expect(screen.getByText("Sales")).toBeInTheDocument();
  });

  test("renders sales data correctly", () => {
    render(<SalesOverview sales={mockSalesData} />);
    expect(
      screen.getByText(/10 uploads/i)
    ).toBeInTheDocument();
    expect(screen.getByText("80%")).toBeInTheDocument();
    expect(screen.getByText("Upload Success")).toBeInTheDocument();
    expect(screen.getByText("90%")).toBeInTheDocument();
    expect(screen.getByText("Lines Saved")).toBeInTheDocument();
  });

  test("throws error when required props are not provided", () => {
    console.error = jest.fn();
    expect(() => render(<SalesOverview  />)).toThrow();
  });
});
