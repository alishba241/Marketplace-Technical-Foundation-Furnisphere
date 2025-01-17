
//! ORDER SCHEMA:

export default {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "order_id",
      type: "string",
      title: "Order ID",
      description: "Unique identifier for the order",
    },
    {
      name: "customer_details",
      type: "object",
      title: "Customer Details",
      fields: [
        {
          name: "customer_id",
          type: "string",
          title: "Customer ID",
          description: "Unique identifier for the customer",
        },
        {
          name: "name",
          type: "string",
          title: "Customer Name",
          description: "Name of the customer",
        },
        {
          name: "address",
          type: "string",
          title: "Address",
          description: "Address of the customer",
        },
        {
          name: "phone",
          type: "string",
          title: "Phone",
          description: "Phone number of the customer",
        },
        {
          name: "email",
          type: "string",
          title: "Email",
          description: "Email address of the customer",
        },
      ],
    },
    {
      name: "products",
      type: "array",
      title: "Products",
      description: "List of products in the order",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product_id",
              type: "string",
              title: "Product ID",
              description: "Unique identifier for the product",
            },
            {
              name: "name",
              type: "string",
              title: "Product Name",
              description: "Name of the product",
            },
            {
              name: "quantity",
              type: "number",
              title: "Quantity",
              description: "Quantity of the product",
            },
            {
              name: "price",
              type: "number",
              title: "Price",
              description: "Price of the product",
            },
          ],
        },
      ],
    },
    {
      name: "order_price",
      type: "number",
      title: "Order Price",
      description: "Total price of the order",
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      description: "Current status of the order",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    },
    {
      name: "date",
      type: "datetime",
      title: "Order Date",
      description: "Date when the order was placed",
    },
  ],
};
