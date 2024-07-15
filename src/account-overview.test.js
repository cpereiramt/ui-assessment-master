import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AccountOverview from "./account-overview.jsx";


const mockData = {
  supportContact: { name: "Support Name", email: "support@example.com" },
  salesOverview: { totalSales: 1000, monthlySales: 100 },
};

jest.mock("./support-contact", () => {
  return function DummySupportContact() {
    return <div data-testid="support-contact">Support Contact Component</div>;
  };
});

jest.mock("./Sales-overview", () => {
  return function DummySalesOverview() {
    return <div data-testid="sales-overview">Sales Overview Component</div>;
  };
});

describe("Account Overview Component", () => {
  test("renders without crashing", () => {
    render(<AccountOverview data={mockData} />);
  });

  test("renders Account Overview title", () => {
    render(<AccountOverview data={mockData} />);
    expect(screen.getByText("Account Overview")).toBeInTheDocument();
  });

  test("renders Support Contact component with correct data", () => {
    render(<AccountOverview data={mockData} />);
    expect(screen.getByTestId("support-contact")).toBeInTheDocument();
  });

  test("renders Sales Overview component with correct data", () => {
    render(<AccountOverview data={mockData} />);
    expect(screen.getByTestId("sales-overview")).toBeInTheDocument();
  });

  test("throws error when required props are not provided", () => {
    console.error = jest.fn();
    expect(() => render(<AccountOverview />)).toThrow();
  });
});
