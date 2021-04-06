import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Juliano",
      email: "julianoperins@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Jonnas",
      email: "jonnas@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike  Shirt",
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1589992896387-140e940257d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 2.5,
      numReviews: 10,
      description: "High Quality Product",
    },
    {
      name: " Short",
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1593467685675-5c0c123331c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      price: 120,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Product",
    },
    {
      name: " Slim Shirt",
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      price: 178,
      countInStock: 7,
      brand: "Nike",
      rating: 1.1,
      numReviews: 12,
      description: "High Quality Product",
    },
    {
      name: "Ne Slim Shirt",
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1589992896387-140e940257d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
      price: 59,
      countInStock: 6,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Product",
    },
    {
      name: "Nike Sli Shir",
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1593467685675-5c0c123331c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      price: 310,
      countInStock: 5,
      brand: "Nike",
      rating: 4.7,
      numReviews: 11,
      description: "High Quality Product",
    },
    {
      name: "  Shirt",
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      price: 240,
      countInStock: 4,
      brand: "Nike",
      rating: 4.9,
      numReviews: 8,
      description: "High Quality Product",
    },
  ],
};

export default data;
