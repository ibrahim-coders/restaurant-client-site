import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: payment,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching payment history: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center text-sky-600 font-bold">
        Total Payment History ({payment.length})
      </h2>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">#</th>
              <th className="border-b px-4 py-2">Payment Date</th>
              <th className="border-b px-4 py-2">Amount</th>
              <th className="border-b px-4 py-2">Status</th>
              <th className="border-b px-4 py-2">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((item, index) => (
              <tr key={item._id}>
                <td className="border-b px-4 py-2">{index + 1}</td>
                <td className="border-b px-4 py-2">
                  {new Date(item.paymentDate).toLocaleDateString()}
                </td>
                <td className="border-b px-4 py-2">${item.price}</td>
                <td className="border-b px-4 py-2">{item.status}</td>
                <td className="border-b px-4 py-2">{item.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
