import React, { useRef, useState } from "react";
import InvoiceTemplate from "./InvoiceTemplate";
import ReactToPrint from "react-to-print";

function InvoiceForm() {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [receiptNumber, setReceiptNumber] = useState(
    Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")
  );
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const componentRef = useRef();


  function formatMonthYear(yearMonth) {
    const [year, month] = yearMonth.split("-");
    const date = new Date(year, month - 1); // Month is 0-based in JavaScript Date
    const monthName = date.toLocaleString("default", { month: "long" });
    return `${monthName} ${year}`;
  }

  function getFormData(e) {
    e.preventDefault();
    const form = e.target;
    const fromMonth = form.from_month.value;
    const toMonth = form.to_month.value;

    const formValues = {
      biller_name: form.biller_name.value,
      biller_number: form.number.value,
      biller_email: form.email.value,
      biller_address: form.address.value,
      biller_details: form.details.value,
      member_name: form.member_name.value,
      member_number: form.member_number.value,
      member_email: form.member_email.value,
      member_address: form.member_address.value,
      member_details: form.member_details.value,
      amount_paid: form.amount_paid.value,
      payment_method: form.payment_method.value,
      from_month: formatMonthYear(fromMonth),
      to_month: formatMonthYear(toMonth),
      date,
      receiptNumber,
    };
    // store data using post request 
    fetch('https://sheetdb.io/api/v1/4tb0caobgt86w', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

    

    console.log(formValues);
    setFormData(formValues);
    setSubmitted(true);
    // You can now use these values for further processing or state management
    // const allData = {
    //   biller_name,
    //   biller_number,
    //   biller_email,
    //   biller_address,
    //   biller_details,
    //   member_name,
    //   member_number,
    //   member_email,
    //   member_address,
    //   member_details,
    //   amount_paid,
    //   payment_method,
    //   from_month,
    //   to_month,
    //   date,
    //   receiptNumber,
    // };
    // console.log(allData);
  }
  return (
    <div>
      <div className="max-w-4xl mx-auto p-10 rounded-xl bg-gray-100 shadow-lg">
        {/* Header */}
        <div className="flex items-center text-black justify-between py-6 border-b border-gray-300">
          <div>
            <h1 className="text-4xl text-left font-bold">Uddog</h1>
            <p className="text-gray-600">Social Work Foundation</p>
          </div>
          <div className="text-right font-semibold">
            <p className="text-xl">Date: {date}</p>
            <p className="text-xl">Receipt #: {receiptNumber}</p>
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-[50px] mt-4" onSubmit={getFormData}>
          <div className="flex gap-[50px]">
            {/* Bill From */}
            <div className="flex flex-col items-start gap-5 w-1/2">
              <h2 className="text-2xl text-black font-bold">Bill From</h2>
              <input
                type="text"
                name="biller_name"
                placeholder="Full Name"
                className="input input-bordered w-full "
              />
              <input
                type="number"
                name="number"
                placeholder="Number"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Write comment"
                name="details"
                className="w-full h-[150px] rounded-lg p-4 resize-none"
              ></textarea>
            </div>
            {/* Bill To */}
            <div className="flex flex-col items-start gap-5 w-1/2">
              <h2 className="text-2xl text-black font-bold">Bill To</h2>
              <input
                type="text"
                name="member_name"
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="member_number"
                placeholder="Number"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="member_email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="member_address"
                placeholder="Address"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Write comment"
                name="member_details"
                className="w-full h-[150px] rounded-lg p-4 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Payment Details */}
          <div className="mt-8">
            <h2 className="text-2xl text-black font-bold mb-4">
              Payment Details
            </h2>

            <div className="flex gap-5">
              <div className="flex items-start flex-col w-full">
                <label
                  htmlFor="amount_paid"
                  className="text-md text-gray-700 mb-1"
                >
                  Amount Paid
                </label>
                <input
                  type="number"
                  name="amount_paid"
                  id="amount_paid"
                  placeholder="Amount Paid"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex items-start flex-col w-full">
                <label
                  htmlFor="payment_method"
                  className="text-md text-gray-700 mb-1"
                >
                  Payment Method
                </label>
                <input
                  type="text"
                  name="payment_method"
                  id="payment_method"
                  placeholder="Payment Method"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex items-start flex-col w-full">
                <label
                  htmlFor="from_month"
                  className="text-md text-gray-700 mb-1"
                >
                  From Month
                </label>
                <input
                  type="month"
                  name="from_month"
                  id="from_month"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex items-start flex-col w-full">
                <label
                  htmlFor="to_month"
                  className="text-md text-gray-700 mb-1"
                >
                  To Month
                </label>
                <input
                  type="month"
                  name="to_month"
                  id="to_month"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>

          {/* submit data */}
          <div className="flex justify-end pt-4">
            <input
              type="submit"
              name=""
              id=""
              className="btn bg-orange-600  text-white text-lg"
            />
          </div>
        </form>

        {/* Thank You Note */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">
            Thank you for your contribution to Uddog. Your support helps us make
            a difference in our community.
          </p>
        </div>
      </div>

      {submitted && (
        <div>
          <ReactToPrint
            trigger={() => <button className="btn bg-blue-500 hover:bg-blue-700  text-white text-lg my-4">Print Invoice</button>}
            content={() => componentRef.current}
          />
          <InvoiceTemplate ref={componentRef} {...formData} />
        </div>
      )}
    </div>
  );
}

export default InvoiceForm;
