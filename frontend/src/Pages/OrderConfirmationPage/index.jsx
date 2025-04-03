import React from "react";

const checkout = {
  _id: "12345",
  createAt: new Date(),
  checkoutItem: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "T-shirt",
      color: "Black",
      size: "M",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New York",
    country: "USA",
  },
};

export default function OrderConfirmationPage() {
  const calculateEstimatedDelivery = (createAt) => {
    const orderDate = new Date(createAt);
    orderDate.setDate(orderDate.getDate() + 10)
    return orderDate.toLocaleDateString;
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You For Your Order!
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-center mb-20">
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date: {new Date(checkout.createAt).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(checkout.createAt)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
