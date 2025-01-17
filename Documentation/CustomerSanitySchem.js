
//! CUSTOMER SCHEMA:

export default {
  name: "customer",
  type: "document",
  title: "Customer",
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
      description: "Full name of the customer",
    },
    {
      name: "email",
      type: "string",
      title: "Email Address",
      description: "Email address of the customer",
      validation: (Rule) =>
        Rule.regex(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          { name: "email" }
        ).error("Please enter a valid email address"),
    },
    {
      name: "phone",
      type: "string",
      title: "Phone Number",
      description: "Contact phone number of the customer",
      validation: (Rule) =>
        Rule.regex(
          /^[0-9]{10,15}$/,
          { name: "phone" }
        ).error("Please enter a valid phone number"),
    },
    {
      name: "address",
      type: "string",
      title: "Home Address",
      description: "Home address of the customer",
    },
  ],
};

