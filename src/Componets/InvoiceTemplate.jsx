import React from "react";
import logo from "../assets/logo.png";
const InvoiceTemplate = React.forwardRef((props, ref) => {
  const {
    biller_name,
    biller_number,
    biller_email,
    biller_address,
    biller_details,
    member_name,
    member_number,
    member_email,
    member_address,
    member_details,
    amount_paid,
    payment_method,
    from_month,
    to_month,
    date,
    receiptNumber,
  } = props;

  return (
    <div ref={ref} className="max-w-4xl mx-auto p-10  bg-white ">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-5">
        <div className="text-left">
          <img src={logo} alt="" className=" w-[150px] h-auto" />
          {/* <h1 className="text-4xl font-bold">Uddog</h1> */}
          {/* <p className="text-gray-600">Social Work Foundation</p> */}
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold">Date: {date}</p>
          <p className="text-xl font-semibold">Receipt #: {receiptNumber}</p>
        </div>
      </div>

      {/* Biller and Member Details */}
      <div className="mt-8 grid grid-cols-2 gap-10">
        <div className="text-start">
          <h2 className="text-2xl font-bold text-black mb-4">Bill From</h2>
          <p className="text-lg">
            <span className="font-semibold">Name:</span> {biller_name}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Number:</span> {biller_number}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email:</span> {biller_email}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Address:</span> {biller_address}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Details:</span> {biller_details}
          </p>
        </div>

        <div className="text-start">
          <h2 className="text-2xl font-bold text-black mb-4">Bill To</h2>
          <p className="text-lg">
            <span className="font-semibold">Name:</span> {member_name}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Number:</span> {member_number}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email:</span> {member_email}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Address:</span> {member_address}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Details:</span> {member_details}
          </p>
        </div>
      </div>

      {/* Payment Details */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black mb-4">Payment Details</h2>
        {/* <div className="grid grid-cols-3 gap-10">
          <div>
            <p className="text-lg"><span className="font-semibold">Amount Paid:</span> {amount_paid} TK </p>
          </div>
          <div>
            <p className="text-lg"><span className="font-semibold">Payment Method:</span> {payment_method}</p>
          </div>
          <div>
            <p className="text-lg"><span className="font-semibold">Period:</span> {from_month} to {to_month}</p>
          </div>
        </div> */}
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-lg font-semibold text-center">
                Amount Paid
              </th>
              <th className="border px-4 py-2 text-lg font-semibold text-center">
                Payment Method
              </th>
              <th className="border px-4 py-2 text-lg font-semibold text-center">
                Period
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-lg text-center">
                {amount_paid} TK
              </td>
              <td className="border px-4 py-2 text-lg text-center">
                {payment_method}
              </td>
              <td className="border px-4 py-2 text-lg text-center">
                {from_month} to {to_month}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-8 border-t pt-12 pb-5">
        <p className="text-gray-600 text-center">
          আপনার পেমেন্টের জন্য ধন্যবাদ! আপনার সহযোগিতা আমাদের জন্য অমূল্য। আমরা
          সর্বদা আপনাকে সেরা সেবা প্রদান করতে প্রতিশ্রুতিবদ্ধ।
        </p>
      </div>
    </div>
  );
});

export default InvoiceTemplate;
