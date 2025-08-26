import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema, insertContactMessageSchema, insertBlogPostSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all menu items
  app.get("/api/menu", async (req, res) => {
    try {
      const menuItems = await storage.getMenuItems();
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });

  // Get menu items by category
  app.get("/api/menu/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const menuItems = await storage.getMenuItemsByCategory(category);
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items by category" });
    }
  });

  // Create reservation
  app.post("/api/reservations", async (req, res) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      res.status(201).json({ 
        message: "Reservation created successfully", 
        reservation 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid reservation data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: "Failed to create reservation" });
      }
    }
  });

  // Get all reservations
  app.get("/api/reservations", async (req, res) => {
    try {
      const reservations = await storage.getReservations();
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch reservations" });
    }
  });

  // Create contact message
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ 
        message: "Contact message sent successfully", 
        contactMessage: message 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid contact data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: "Failed to send contact message" });
      }
    }
  });

  // Blog routes
  // Get all blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const blogPosts = await storage.getBlogPosts();
      res.json(blogPosts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  // Get blog post by slug
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const blogPost = await storage.getBlogPost(slug);
      if (!blogPost) {
        res.status(404).json({ message: "Blog post not found" });
        return;
      }
      res.json(blogPost);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Get blog posts by category
  app.get("/api/blog/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const blogPosts = await storage.getBlogPostsByCategory(category);
      res.json(blogPosts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts by category" });
    }
  });

  // Create blog post (for admin/content management)
  app.post("/api/blog", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const blogPost = await storage.createBlogPost(validatedData);
      res.status(201).json({ 
        message: "Blog post created successfully", 
        blogPost 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid blog post data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: "Failed to create blog post" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
