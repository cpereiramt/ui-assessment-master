import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';
const accountOverviewStub = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
    phone: "020 3362 4208",
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};
test('renders Account Screen Title correctly', () => {
  render(<AccountOverview data={accountOverviewStub} />);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});
