import {
  type User,
  type InsertUser,
  type Reservation,
  type InsertReservation,
  type MenuItem,
  type InsertMenuItem,
  type ContactMessage,
  type InsertContactMessage,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservations(): Promise<Reservation[]>;

  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;

  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private reservations: Map<string, Reservation>;
  private menuItems: Map<string, MenuItem>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.reservations = new Map();
    this.menuItems = new Map();
    this.contactMessages = new Map();

    // Initialize with sample menu items
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    const sampleMenuItems: InsertMenuItem[] = [
      {
        name: "Veg Schezwan Spring Roll",
        description: "Vegetable spring rolls with Schezwan sauce",
        price: "$8.99",
        category: "appetizers",
        image:
          "https://myfoodstory.com/wp-content/uploads/2022/06/Veg-Spring-Rolls-3.jpg?w=800&h=600&auto=format&fit=crop",
      },
      {
        name: "Veg Ming's Special Soup",
        description: "Chef's special vegetable soup",
        price: "$12.99",
        category: "appetizers",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy,w_800,h_600,c_fill/girsspy50kum2dhmaxtn",
      },
      {
        name: "Veg Honey Crispy",
        description: "Sweet honey glazed crispy vegetables",
        price: "$18.99",
        category: "main",
        image:
          "https://i.pinimg.com/736x/48/9a/bb/489abb29b2d64369cf19d5109b39a918.jpg?w=800&h=600&auto=format&fit=crop",
      },
      {
        name: "Chicken Chilli",
        description: "Chicken pieces in spicy chilli sauce",
        price: "$16.99",
        category: "main",
        image:
          "https://mymorningmocha.com/wp-content/uploads/2023/06/Honey-chilli-chicken-recipe.jpg?w=800&h=600&auto=format&fit=crop",
      },
      {
        name: "Prawns Manchurian",
        description: "Crispy prawns in Manchurian sauce",
        price: "$19.99",
        category: "main",
        image:
          "https://cdn.grofers.com/assets/search/usecase/banner/prawns_manchurian_01.png?w=800&h=600&auto=format&fit=crop",
      },
      {
        name: "Paneer Wok Tossed Momos with Schezwan Sauce",
        description: "Wok tossed paneer momos with Schezwan sauce",
        price: "$28.99",
        category: "main",
        image:
          "https://images.squarespace-cdn.com/content/v1/5ec30182cff13b4331c5384d/1680740995663-B5J0G3GIVMC2DDI55YYL/IMG_3368.jpeg?w=800&h=600&auto=format&fit=crop",
      },
      {
        name: "Kung Pao Chicken",
        description: "Spicy stir-fry with peanuts and Sichuan peppers",
        price: "$17.99",
        category: "main",
        image:
          "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      },
      {
        name: "Chicken Ming's Special Rice",
        description:
          "Wok-fried rice with eggs, vegetables, and your choice of protein",
        price: "$14.99",
        category: "noodles",
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      },
      {
        name: "Paneer in Manchurian Sauce",
        description: "Cottage cheese in Manchurian gravy",
        price: "$15.99",
        category: "noodles",
        image:
          "https://i.ytimg.com/vi/fJB-qnWQMDE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB-QxSeWycWbX_O0xrD_hmSc1aQ6w?w=800&h=600&auto=format&fit=crop",
      },
      {
        name: "Chicken Pot Rice",
        description:
          "Rice fried and tossed in oyster sauce gravy with chicken and exotic vegetables & spices",
        price: "$6.99",
        category: "desserts",
        image:
          "https://apinchofsaffron.nl/wp-content/uploads/2024/02/22A1570_1.jpg?w=800&h=600&auto=format&fit=crop",
      },
      {
        name: "American Prawns Chop Suey",
        description:
          "A tangy red sauce spicy sauce with prawns served with crispy fried chopsuey noodles and omelette",
        price: "$7.99",
        category: "desserts",
        image:
          "https://blessthismeal.com/wp-content/uploads/2023/05/shrimpchopsuey5.jpg?w=800&h=600&auto=format&fit=crop",
      },
    ];

    sampleMenuItems.forEach((item) => {
      const id = randomUUID();
      const menuItem: MenuItem = { ...item, id };
      this.menuItems.set(id, menuItem);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createReservation(
    insertReservation: InsertReservation,
  ): Promise<Reservation> {
    const id = randomUUID();
    const reservation: Reservation = {
      ...insertReservation,
      id,
      createdAt: new Date(),
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      (item) => item.category === category,
    );
  }

  async createContactMessage(
    insertMessage: InsertContactMessage,
  ): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();