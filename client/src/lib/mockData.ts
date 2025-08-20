// Mock data for Netlify deployment (static site)
import type { MenuItem, Reservation, ContactMessage } from "@shared/schema";

export const mockMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Veg Schezwan Spring Roll",
    description: "Vegetable spring rolls with Schezwan sauce",
    price: "$8.99",
    category: "appetizers",
    image: "https://myfoodstory.com/wp-content/uploads/2022/06/Veg-Spring-Rolls-3.jpg",
  },
  {
    id: "2",
    name: "Veg Ming's Special Soup",
    description: "Chef's special vegetable soup",
    price: "$12.99",
    category: "appetizers",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy,w_800,h_600,c_fill/girsspy50kum2dhmaxtn",
  },
  {
    id: "3",
    name: "Veg Honey Crispy",
    description: "Sweet honey glazed crispy vegetables",
    price: "$18.99",
    category: "main",
    image: "https://i.pinimg.com/736x/48/9a/bb/489abb29b2d64369cf19d5109b39a918.jpg",
  },
  {
    id: "4",
    name: "Chicken Chilli",
    description: "Chicken pieces in spicy chilli sauce",
    price: "$16.99",
    category: "main",
    image: "https://mymorningmocha.com/wp-content/uploads/2023/06/Honey-chilli-chicken-recipe.jpg",
  },
  {
    id: "5",
    name: "Prawns Manchurian",
    description: "Crispy prawns in Manchurian sauce",
    price: "$19.99",
    category: "main",
    image: "https://cdn.grofers.com/assets/search/usecase/banner/prawns_manchurian_01.png",
  },
  {
    id: "6",
    name: "Paneer Wok Tossed Momos with Schezwan Sauce",
    description: "Wok tossed paneer momos with Schezwan sauce",
    price: "$28.99",
    category: "main",
    image: "https://images.squarespace-cdn.com/content/v1/5ec30182cff13b4331c5384d/1680740995663-B5J0G3GIVMC2DDI55YYL/IMG_3368.jpeg",
  },
  {
    id: "7",
    name: "Kung Pao Chicken",
    description: "Spicy stir-fry with peanuts and Sichuan peppers",
    price: "$17.99",
    category: "main",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43",
  },
  {
    id: "8",
    name: "Chicken Ming's Special Rice",
    description: "Wok-fried rice with eggs, vegetables, and your choice of protein",
    price: "$14.99",
    category: "noodles",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
  },
  {
    id: "9",
    name: "Paneer in Manchurian Sauce",
    description: "Cottage cheese in Manchurian gravy",
    price: "$15.99",
    category: "noodles",
    image: "https://i.ytimg.com/vi/fJB-qnWQMDE/hq720.jpg",
  },
  {
    id: "10",
    name: "Chicken Pot Rice",
    description: "Rice fried and tossed in oyster sauce gravy with chicken and exotic vegetables & spices",
    price: "$6.99",
    category: "desserts",
    image: "https://apinchofsaffron.nl/wp-content/uploads/2024/02/22A1570_1.jpg",
  },
];

// Mock API functions for Netlify deployment
export const mockAPI = {
  getMenuItems: () => Promise.resolve(mockMenuItems),
  
  getMenuItemsByCategory: (category: string) => 
    Promise.resolve(mockMenuItems.filter(item => item.category === category)),
  
  createReservation: (reservation: any) => {
    // In a real deployment, this could use Netlify Forms or a serverless function
    console.log('Reservation submitted:', reservation);
    return Promise.resolve({ 
      ...reservation, 
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    });
  },
  
  createContactMessage: (message: any) => {
    // In a real deployment, this could use Netlify Forms or a serverless function
    console.log('Contact message submitted:', message);
    return Promise.resolve({
      ...message,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    });
  }
};

export default mockAPI;