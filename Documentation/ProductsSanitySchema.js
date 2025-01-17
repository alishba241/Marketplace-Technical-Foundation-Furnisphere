
//! PRODUCT SCHEMA:

export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "product_name",
      type: "string",
      title: "Product Name",
      description: "The name of the product",
    },
    {
      name: "product_description",
      type: "text",
      title: "Product Description",
      description: "A brief description of the product",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      description: "The price of the product",
    },
    {
      name: "ratings",
      type: "number",
      title: "Ratings",
      description: "The average rating of the product",
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: "reviews",
      type: "number",
      title: "Reviews",
      description: "The number of reviews",
    },
    {
      name: "stock",
      type: "number",
      title: "Stock",
      description: "The stock availability",
    },
    {
      name: "colors_available",
      type: "array",
      title: "Colors Available",
      description: "Hex codes for available colors",
      of: [{ type: "string" }],
    },
    {
      name: "sizes_available",
      type: "array",
      title: "Sizes Available",
      description: "Available sizes",
      of: [{ type: "string" }],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      description: "Product image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "id",
      type: "string",
      title: "Product ID",
      description: "Unique identifier for the product",
    },
  ],
};

