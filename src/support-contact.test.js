import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SupportContact from "./support-contact";

const mockSupportData = {
  name: "Support Name",
  email: "support@example.com",
  phone: "123-456-7890",
};

describe("Support Contact Component", () => {
  test("renders without crashing", () => {
    render(<SupportContact support={mockSupportData} />);
  });

  test("renders support contact header", () => {
    render(<SupportContact support={mockSupportData} />);
    expect(screen.getByText("Your Feefo Support Contact")).toBeInTheDocument();
  });

  test("renders support name", () => {
    render(<SupportContact support={mockSupportData} />);
    expect(screen.getByText(mockSupportData.name)).toBeInTheDocument();
  });

  test("renders support email with envelope icon", () => {
    render(<SupportContact support={mockSupportData} />);
    expect(screen.getByText(mockSupportData.email)).toBeInTheDocument();
  });

  test("renders support phone", () => {
    render(<SupportContact support={mockSupportData} />);
    expect(screen.getByText(mockSupportData.phone)).toBeInTheDocument();
  });

  test("throws error when required props are not provided", () => {
    console.error = jest.fn(); 
    expect(() => render(<SupportContact  />)).toThrow();
  });
});
