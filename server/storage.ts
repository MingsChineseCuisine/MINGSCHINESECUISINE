import {
  type User,
  type InsertUser,
  type Reservation,
  type InsertReservation,
  type MenuItem,
  type InsertMenuItem,
  type ContactMessage,
  type InsertContactMessage,
  type BlogPost,
  type InsertBlogPost,
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

  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private reservations: Map<string, Reservation>;
  private menuItems: Map<string, MenuItem>;
  private contactMessages: Map<string, ContactMessage>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.users = new Map();
    this.reservations = new Map();
    this.menuItems = new Map();
    this.contactMessages = new Map();
    this.blogPosts = new Map();

    // Initialize with sample menu items and blog posts
    this.initializeMenuItems();
    this.initializeBlogPosts();
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
      message: insertReservation.message || null,
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

  private initializeBlogPosts() {
    const sampleBlogPosts: InsertBlogPost[] = [
      {
        title: "10 Must-Try Chinese Dishes in Kalyan - A Food Lover's Guide to Ming's Chinese Cuisine",
        slug: "must-try-chinese-dishes-kalyan-mings",
        excerpt: "Discover the authentic flavors of Chinese cuisine right here in Kalyan! From spicy Schezwan dishes to comforting soups, explore our top 10 must-try dishes at Ming's Chinese Cuisine.",
        content: `<article>
          <h2>Welcome to Ming's Chinese Cuisine - Kalyan's Premier Chinese Restaurant</h2>
          <p>Located in the heart of Kalyan, Thane, Maharashtra, Ming's Chinese Cuisine has been serving authentic Chinese food to families and food lovers for years. Our restaurant combines traditional Chinese cooking techniques with local tastes to create an unforgettable dining experience.</p>
          
          <h2>Top 10 Must-Try Dishes at Ming's Chinese Cuisine</h2>
          
          <h3>1. Veg Schezwan Spring Roll - ₹189</h3>
          <p>Our signature <strong>Veg Schezwan Spring Roll</strong> is perfect for those seeking <strong>Chinese food in Kalyan</strong>. These crispy rolls are filled with fresh vegetables and served with our house-made Schezwan sauce. A perfect starter for your Chinese food journey!</p>
          
          <h3>2. Chicken Chilli - ₹299</h3>
          <p>Experience the perfect balance of spice and flavor with our <strong>Chicken Chilli</strong>. This Indo-Chinese favorite features tender chicken pieces tossed in a fiery sauce with bell peppers and onions. It's one of the <strong>best Chinese dishes in Thane</strong>!</p>
          
          <h3>3. Veg Honey Crispy - ₹269</h3>
          <p>Our <strong>Veg Honey Crispy</strong> combines sweet and savory flavors in perfect harmony. Crispy vegetables are glazed with honey and served with a tangy sauce. This dish showcases why we're known for <strong>authentic Chinese cuisine Maharashtra</strong>.</p>
          
          <h3>4. Schezwan Fried Rice - ₹219</h3>
          <p>No Chinese meal is complete without our famous <strong>Schezwan Fried Rice Kalyan</strong>. Made with perfectly cooked rice, fresh vegetables, and our signature Schezwan sauce, it's a local favorite that keeps customers coming back.</p>
          
          <h3>5. Hakka Noodles - ₹199</h3>
          <p>Our <strong>best noodles in Thane</strong> are hand-pulled and tossed with fresh vegetables and aromatic spices. The Hakka noodles are a perfect blend of texture and flavor that represents authentic Chinese cooking.</p>
          
          <h3>6. Sweet and Sour Chicken - ₹319</h3>
          <p>This colorful dish features tender chicken pieces in a vibrant sweet and sour sauce with pineapple, bell peppers, and onions. It's a crowd-pleaser that showcases our expertise in balancing flavors.</p>
          
          <h3>7. Veg Manchurian (Dry/Gravy) - ₹229</h3>
          <p>Choose between dry or gravy style for this Indo-Chinese favorite. Our Veg Manchurian features perfectly spiced vegetable balls in a flavorful sauce that's become synonymous with <strong>Chinese food near me</strong> searches in Kalyan.</p>
          
          <h3>8. Hot and Sour Soup - ₹149</h3>
          <p>Start your meal with our traditional <strong>Hot and Sour Soup</strong>. This warming soup combines the perfect balance of heat and tanginess with mushrooms, tofu, and vegetables.</p>
          
          <h3>9. Prawn Salt and Pepper - ₹399</h3>
          <p>Fresh prawns are lightly battered and seasoned with salt, pepper, and aromatic spices. This dish showcases our commitment to fresh seafood and authentic Cantonese cooking techniques.</p>
          
          <h3>10. Date Pancakes - ₹179</h3>
          <p>End your meal on a sweet note with our traditional Chinese <strong>Date Pancakes</strong>. These delicate pancakes filled with sweet date paste offer an authentic taste of Chinese dessert culture.</p>
          
          <h2>Why Choose Ming's Chinese Cuisine in Kalyan?</h2>
          <ul>
            <li><strong>Authentic flavors</strong>: We use traditional Chinese cooking techniques and authentic ingredients</li>
            <li><strong>Fresh ingredients</strong>: Daily sourced vegetables and premium quality meats</li>
            <li><strong>Family-friendly</strong>: Perfect for family dinners, corporate meetings, and special occasions</li>
            <li><strong>Local favorite</strong>: Trusted by Kalyan residents for consistent quality and taste</li>
            <li><strong>Reasonable prices</strong>: Quality Chinese food at affordable prices</li>
          </ul>
          
          <h2>Visit Ming's Chinese Cuisine Today!</h2>
          <p>Experience the <strong>best Chinese restaurant in Kalyan</strong> and discover why food lovers across Thane choose Ming's for their Chinese cuisine cravings. Whether you're searching for "Chinese food in Kalyan" or "best Chinese restaurant near me," Ming's Chinese Cuisine delivers an authentic taste of China right in your neighborhood.</p>
          
          <p><em>Location: Kalyan, Thane, Maharashtra, India</em><br>
          <em>Website: mingschinesecuisine.in</em></p>
        </article>`,
        metaTitle: "10 Must-Try Chinese Dishes in Kalyan | Ming's Chinese Cuisine - Best Chinese Restaurant",
        metaDescription: "Discover the top 10 authentic Chinese dishes at Ming's Chinese Cuisine in Kalyan, Thane. From Schezwan Spring Rolls to Hakka Noodles - experience the best Chinese food in Maharashtra.",
        keywords: "Chinese food Kalyan, best Chinese restaurant Thane, Schezwan fried rice Kalyan, authentic Chinese cuisine Maharashtra, Chinese food near me, best noodles Thane, Ming's Chinese Cuisine",
        category: "food-guide",
        featuredImage: "/assets/blog/chinese-dishes-kalyan.jpg",
        publishedAt: new Date("2024-08-20"),
      },
      {
        title: "The Art of Schezwan Cuisine: Spice, Flavor, and Tradition at Ming's Chinese Restaurant",
        slug: "schezwan-cuisine-art-mings-chinese-kalyan",
        excerpt: "Explore the rich history and bold flavors of Schezwan cuisine at Ming's Chinese Cuisine in Kalyan. Learn about our authentic cooking techniques and signature Schezwan dishes.",
        content: `<article>
          <h2>Understanding Schezwan Cuisine: A Culinary Journey</h2>
          <p>Schezwan (Sichuan) cuisine, one of China's most beloved regional cooking styles, has found its perfect home at <strong>Ming's Chinese Cuisine in Kalyan</strong>. Known for its bold flavors, numbing spices, and aromatic dishes, Schezwan cuisine represents the perfect marriage of heat, flavor, and tradition.</p>
          
          <h2>The History Behind Schezwan Flavors</h2>
          <p>Originating from the Sichuan province in southwestern China, this cuisine is characterized by its use of Sichuan peppercorns, dried chilies, and fermented beans. At Ming's, we honor these traditional methods while adapting to local Indian palates, creating a unique fusion that's become synonymous with <strong>Chinese food in Kalyan</strong>.</p>
          
          <h2>Ming's Signature Schezwan Dishes</h2>
          
          <h3>Schezwan Fried Rice - Our Crown Jewel</h3>
          <p>Our <strong>Schezwan Fried Rice</strong> is more than just a dish - it's an experience. Each grain of rice is perfectly coated with our house-made Schezwan sauce, creating layers of flavor that build with every bite. The addition of fresh vegetables and aromatic spices makes it the <strong>best Schezwan fried rice in Thane</strong>.</p>
          
          <h3>Schezwan Chicken - Fire Meets Flavor</h3>
          <p>Tender chicken pieces are wok-tossed with our signature Schezwan sauce, bell peppers, and onions. The result is a dish that delivers the perfect balance of heat and flavor, making it a favorite among those seeking <strong>spicy Chinese food in Maharashtra</strong>.</p>
          
          <h3>Schezwan Noodles - Comfort with a Kick</h3>
          <p>Hand-pulled noodles are stir-fried with fresh vegetables and our authentic Schezwan sauce. Each strand carries the perfect amount of spice, making it a comforting yet exciting meal option.</p>
          
          <h2>The Ming's Schezwan Secret</h2>
          <p>What sets our Schezwan dishes apart is our commitment to authenticity. We prepare our Schezwan sauce fresh daily using:</p>
          <ul>
            <li><strong>Dried red chilies</strong> sourced for their perfect heat level</li>
            <li><strong>Sichuan peppercorns</strong> for that distinctive numbing sensation</li>
            <li><strong>Fermented black beans</strong> for depth of flavor</li>
            <li><strong>Fresh garlic and ginger</strong> for aromatic foundation</li>
            <li><strong>Quality soy sauce</strong> for umami richness</li>
          </ul>
          
          <h2>Health Benefits of Schezwan Cuisine</h2>
          <p>Beyond its incredible taste, Schezwan cuisine offers several health benefits:</p>
          <ul>
            <li><strong>Metabolism boost</strong>: The spices help increase metabolic rate</li>
            <li><strong>Antioxidant properties</strong>: Chilies are rich in vitamins A and C</li>
            <li><strong>Digestive benefits</strong>: Sichuan peppercorns aid digestion</li>
            <li><strong>Heart health</strong>: Spicy foods can help improve cardiovascular health</li>
          </ul>
          
          <h2>Pairing Suggestions for Schezwan Dishes</h2>
          <p>To fully enjoy the Schezwan experience at Ming's, we recommend:</p>
          <ul>
            <li><strong>Start with</strong>: Hot and Sour Soup to prepare your palate</li>
            <li><strong>Main course</strong>: Schezwan Chicken with Hakka Noodles</li>
            <li><strong>Cool down with</strong>: Fresh lime water or Chinese tea</li>
            <li><strong>End with</strong>: Light Chinese dessert like Date Pancakes</li>
          </ul>
          
          <h2>Why Ming's is Kalyan's Schezwan Destination</h2>
          <p>When searching for <strong>"best Schezwan food near me"</strong> in Kalyan or Thane, Ming's Chinese Cuisine stands out because:</p>
          <ul>
            <li><strong>Authentic preparation</strong>: Traditional techniques meet modern taste</li>
            <li><strong>Quality ingredients</strong>: We never compromise on ingredient quality</li>
            <li><strong>Consistent flavor</strong>: Every dish maintains our high standards</li>
            <li><strong>Family recipes</strong>: Passed down through generations of Chinese cooking</li>
            <li><strong>Local adaptation</strong>: Flavors crafted for Indian palates</li>
          </ul>
          
          <h2>Experience Authentic Schezwan at Ming's</h2>
          <p>Visit <strong>Ming's Chinese Cuisine</strong> in Kalyan and embark on a spicy journey through authentic Schezwan flavors. Whether you're a spice lover or new to Schezwan cuisine, our chefs will ensure you experience the perfect balance of heat, flavor, and satisfaction.</p>
          
          <p><em>Book your table today and discover why we're considered the <strong>best Chinese restaurant in Kalyan</strong> for authentic Schezwan cuisine!</em></p>
        </article>`,
        metaTitle: "Authentic Schezwan Cuisine in Kalyan | Ming's Chinese Restaurant - Best Spicy Chinese Food",
        metaDescription: "Experience authentic Schezwan cuisine at Ming's Chinese Cuisine in Kalyan. Discover our signature spicy dishes, traditional cooking methods, and the art of Chinese flavors in Thane.",
        keywords: "Schezwan cuisine Kalyan, spicy Chinese food Thane, best Schezwan restaurant Maharashtra, authentic Chinese spicy dishes, Schezwan fried rice Kalyan, Chinese restaurant near me",
        category: "cuisine-culture",
        featuredImage: "/assets/blog/schezwan-cuisine-art.jpg",
        publishedAt: new Date("2024-08-18"),
      },
      {
        title: "Complete Menu Guide: Ming's Chinese Cuisine Kalyan - Prices, Reviews & Recommendations",
        slug: "complete-menu-guide-mings-chinese-cuisine-kalyan-prices",
        excerpt: "Comprehensive guide to Ming's Chinese Cuisine menu in Kalyan. Discover our complete range of appetizers, main courses, noodles, rice, soups and desserts with prices and customer recommendations.",
        content: `<article>
          <h2>Welcome to Ming's Chinese Cuisine - Complete Menu Experience</h2>
          <p>Since 2014, <strong>Ming's Chinese Cuisine</strong> has been Kalyan's premier destination for authentic Chinese food. Located in the heart of Kalyan, Thane, we offer an extensive menu featuring traditional Chinese dishes adapted for Indian taste buds, making us the <strong>best Chinese restaurant in Kalyan</strong>.</p>

          <h2>Appetizers & Starters - Perfect Beginning to Your Meal</h2>
          
          <h3>Vegetarian Starters (₹100 - ₹180)</h3>
          <ul>
            <li><strong>Veg Schezwan Spring Roll</strong> (₹120): Crispy rolls filled with fresh vegetables and aromatic spices, served with sweet and sour sauce</li>
            <li><strong>Honey Chili Potato</strong> (₹140): Golden potato strips tossed in our signature honey chili sauce - a perfect blend of sweet and spicy</li>
            <li><strong>Veg Manchurian Dry</strong> (₹130): Deep-fried vegetable balls coated in our tangy Manchurian sauce</li>
            <li><strong>Chinese Bhel</strong> (₹120): Mumbai street food meets Chinese flavors - a unique fusion creation</li>
            <li><strong>Crispy Corn Kernels</strong> (₹110): Sweet corn kernels with peppers and onions in Chinese seasonings</li>
          </ul>

          <h3>Non-Vegetarian Starters (₹160 - ₹320)</h3>
          <ul>
            <li><strong>Chicken Lollipop</strong> (₹220): Tender chicken drumettes marinated in Chinese spices and deep-fried to perfection</li>
            <li><strong>Chili Chicken Dry</strong> (₹200): Boneless chicken pieces tossed with bell peppers in spicy chili sauce</li>
            <li><strong>Prawn Salt & Pepper</strong> (₹280): Fresh prawns seasoned with aromatic salt and pepper spices</li>
            <li><strong>Fish in Hot Garlic Sauce</strong> (₹260): Tender fish pieces in our signature hot garlic sauce</li>
            <li><strong>Chicken 65 Chinese Style</strong> (₹190): South Indian favorite with a Chinese twist</li>
          </ul>

          <h2>Soups - Traditional Chinese Comfort</h2>
          <p>Our soups are prepared using traditional Chinese techniques with fresh ingredients and authentic seasonings.</p>

          <h3>Vegetarian Soups (₹80 - ₹120)</h3>
          <ul>
            <li><strong>Hot & Sour Soup</strong> (₹90): Perfect balance of spicy and tangy flavors with fresh vegetables</li>
            <li><strong>Sweet Corn Soup</strong> (₹85): Creamy corn soup with a hint of Chinese seasonings</li>
            <li><strong>Clear Vegetable Soup</strong> (₹80): Light and nutritious broth with fresh mixed vegetables</li>
            <li><strong>Manchow Soup</strong> (₹95): Spicy soup topped with crispy fried noodles</li>
          </ul>

          <h3>Non-Vegetarian Soups (₹100 - ₹140)</h3>
          <ul>
            <li><strong>Chicken Hot & Sour Soup</strong> (₹110): Classic soup with tender chicken pieces</li>
            <li><strong>Chicken Sweet Corn Soup</strong> (₹105): Creamy corn soup with shredded chicken</li>
            <li><strong>Seafood Hot & Sour Soup</strong> (₹130): Mixed seafood in our signature spicy and tangy broth</li>
          </ul>

          <h2>Rice Varieties - The Heart of Chinese Cuisine</h2>
          <p>All our rice dishes are prepared with premium basmati rice, wok-tossed with fresh ingredients and authentic Chinese sauces.</p>

          <h3>Vegetarian Rice (₹120 - ₹180)</h3>
          <ul>
            <li><strong>Schezwan Fried Rice</strong> (₹140): Our signature rice dish with mixed vegetables in spicy Schezwan sauce</li>
            <li><strong>Vegetable Fried Rice</strong> (₹130): Classic fried rice with seasonal vegetables and aromatic spices</li>
            <li><strong>Garlic Fried Rice</strong> (₹135): Fragrant rice tossed with fresh garlic and soy sauce</li>
            <li><strong>Mushroom Fried Rice</strong> (₹150): Fresh mushrooms with rice in Chinese seasonings</li>
            <li><strong>Paneer Fried Rice</strong> (₹160): Cottage cheese cubes with rice and vegetables</li>
          </ul>

          <h3>Non-Vegetarian Rice (₹160 - ₹220)</h3>
          <ul>
            <li><strong>Chicken Fried Rice</strong> (₹170): Tender chicken pieces with perfectly seasoned rice</li>
            <li><strong>Chicken Schezwan Rice</strong> (₹180): Spicy Schezwan sauce with chicken and mixed vegetables</li>
            <li><strong>Mixed Fried Rice</strong> (₹200): Combination of chicken, prawns, and vegetables</li>
            <li><strong>Egg Fried Rice</strong> (₹150): Simple yet flavorful rice with scrambled eggs</li>
            <li><strong>Seafood Fried Rice</strong> (₹220): Mix of prawns and fish with aromatic rice</li>
          </ul>

          <h2>Noodles - Hand-Pulled Perfection</h2>
          <p>Our noodles are prepared using traditional Chinese techniques, ensuring the perfect texture and flavor in every strand.</p>

          <h3>Vegetarian Noodles (₹120 - ₹180)</h3>
          <ul>
            <li><strong>Hakka Noodles</strong> (₹130): Classic Chinese noodles with fresh vegetables</li>
            <li><strong>Schezwan Noodles</strong> (₹140): Spicy noodles in our signature Schezwan sauce</li>
            <li><strong>Chili Garlic Noodles</strong> (₹145): Aromatic noodles with fresh garlic and chilies</li>
            <li><strong>Singapore Rice Noodles</strong> (₹160): Thin rice noodles with curry flavor</li>
            <li><strong>American Chop Suey</strong> (₹170): Crispy noodles topped with sweet and sour gravy</li>
          </ul>

          <h3>Non-Vegetarian Noodles (₹150 - ₹200)</h3>
          <ul>
            <li><strong>Chicken Hakka Noodles</strong> (₹160): Classic noodles with tender chicken pieces</li>
            <li><strong>Chicken Schezwan Noodles</strong> (₹170): Spicy Schezwan noodles with chicken</li>
            <li><strong>Mixed Noodles</strong> (₹190): Combination of chicken and vegetables</li>
            <li><strong>Seafood Noodles</strong> (₹200): Fresh seafood with aromatic noodles</li>
          </ul>

          <h2>Main Course - Authentic Chinese Flavors</h2>

          <h3>Vegetarian Main Course (₹140 - ₹200)</h3>
          <ul>
            <li><strong>Paneer Chili Dry</strong> (₹180): Cottage cheese cubes in spicy chili sauce</li>
            <li><strong>Veg Ball Manchurian</strong> (₹160): Mixed vegetable balls in Manchurian gravy</li>
            <li><strong>Baby Corn Pepper Salt</strong> (₹150): Crispy baby corn with aromatic spices</li>
            <li><strong>Mushroom in Hot Garlic Sauce</strong> (₹170): Fresh mushrooms in spicy garlic sauce</li>
          </ul>

          <h3>Non-Vegetarian Main Course (₹200 - ₹320)</h3>
          <ul>
            <li><strong>Sweet & Sour Chicken</strong> (₹240): Tender chicken in tangy sweet and sour sauce</li>
            <li><strong>Chicken Manchurian Dry</strong> (₹220): Chicken balls in dry Manchurian sauce</li>
            <li><strong>Ginger Chicken</strong> (₹230): Fresh ginger flavor with tender chicken pieces</li>
            <li><strong>Fish in Black Bean Sauce</strong> (₹280): Fresh fish in authentic black bean sauce</li>
            <li><strong>Prawn in Chili Sauce</strong> (₹300): Succulent prawns in spicy chili sauce</li>
          </ul>

          <h2>Combination Meals - Best Value Options</h2>
          
          <h3>Family Meals (₹500 - ₹1200)</h3>
          <ul>
            <li><strong>Family Veg Combo</strong> (₹600): Veg Spring Roll + Veg Fried Rice + Hakka Noodles + Hot & Sour Soup</li>
            <li><strong>Family Non-Veg Combo</strong> (₹850): Chicken Lollipop + Chicken Fried Rice + Chicken Noodles + Chicken Soup</li>
            <li><strong>Party Special</strong> (₹1200): Mixed starters + Multiple rice/noodles + Main course + Soups (Serves 4-6)</li>
          </ul>

          <h2>Desserts - Sweet Ending to Your Meal</h2>
          <ul>
            <li><strong>Date Pancakes</strong> (₹120): Traditional Chinese dessert with sweet dates</li>
            <li><strong>Honey Noodles</strong> (₹110): Crispy noodles drizzled with honey</li>
            <li><strong>Fried Ice Cream</strong> (₹140): Unique dessert with crispy coating and cold ice cream</li>
          </ul>

          <h2>Beverages (₹40 - ₹80)</h2>
          <ul>
            <li><strong>Chinese Tea</strong> (₹60): Traditional jasmine or green tea</li>
            <li><strong>Fresh Lime Water</strong> (₹50): Perfect complement to spicy dishes</li>
            <li><strong>Soft Drinks</strong> (₹40): Cola, Sprite, Fanta</li>
            <li><strong>Lassi</strong> (₹60): Sweet or salted yogurt drink</li>
          </ul>

          <h2>Chef's Special Recommendations</h2>
          <h3>Must-Try Combinations:</h3>
          <ul>
            <li><strong>Classic Combo:</strong> Chicken Lollipop + Chicken Fried Rice + Hot & Sour Soup</li>
            <li><strong>Spice Lover's Choice:</strong> Schezwan Spring Rolls + Schezwan Noodles + Chili Chicken</li>
            <li><strong>Family Favorite:</strong> Mixed starters + Veg/Chicken Fried Rice + Hakka Noodles</li>
            <li><strong>Date Night Special:</strong> Honey Chili Potato + Sweet & Sour Chicken + Chinese Tea</li>
          </ul>

          <h2>Why Choose Ming's Chinese Cuisine in Kalyan?</h2>
          <ul>
            <li><strong>Authentic Flavors:</strong> Traditional Chinese cooking techniques</li>
            <li><strong>Fresh Ingredients:</strong> Daily sourced vegetables and premium meats</li>
            <li><strong>Reasonable Prices:</strong> Best value for money in Kalyan</li>
            <li><strong>Family Friendly:</strong> Comfortable seating for all age groups</li>
            <li><strong>Quick Service:</strong> Efficient kitchen and friendly staff</li>
            <li><strong>Hygiene Standards:</strong> Clean kitchen and dining environment</li>
          </ul>

          <h2>Location & Contact Information</h2>
          <p><strong>Address:</strong> Ming's Chinese Cuisine, Kalyan, Thane District, Maharashtra</p>
          <p><strong>Timing:</strong> 11:30 AM to 11:00 PM (All days)</p>
          <p><strong>Best Time to Visit:</strong> Lunch: 12 PM - 3 PM, Dinner: 7 PM - 10 PM</p>

          <p>Experience the <strong>best Chinese food in Kalyan</strong> at Ming's Chinese Cuisine. Whether you're searching for "Chinese restaurant near me" or "best noodles in Thane," our extensive menu and authentic flavors make us the perfect choice for your Chinese food cravings.</p>

          <p><em>Visit us today and discover why we're Kalyan's most trusted Chinese restaurant for over three decades!</em></p>
        </article>`,
        metaTitle: "Ming's Chinese Cuisine Menu Kalyan - Complete Price List 2024 | Best Chinese Restaurant",
        metaDescription: "Explore Ming's Chinese Cuisine complete menu with prices in Kalyan. Discover our appetizers, main course, noodles, rice, soups from ₹80-₹320. Best Chinese food in Thane district.",
        keywords: "Ming's Chinese Cuisine menu, Chinese restaurant menu Kalyan, Chinese food prices Thane, best Chinese restaurant menu Maharashtra, Schezwan noodles price Kalyan, Chinese food near me prices",
        category: "menu-guide",
        featuredImage: "/assets/blog/mings-menu-guide.jpg",
        publishedAt: new Date("2024-08-22"),
      },
    ];

    sampleBlogPosts.forEach((post) => {
      const id = randomUUID();
      const blogPost: BlogPost = { 
        ...post, 
        id, 
        createdAt: new Date(),
        featuredImage: post.featuredImage || null,
        publishedAt: post.publishedAt || null
      };
      this.blogPosts.set(id, blogPost);
    });
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime()
    );
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.category === category)
      .sort((a, b) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime());
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const blogPost: BlogPost = {
      ...insertBlogPost,
      id,
      createdAt: new Date(),
      featuredImage: insertBlogPost.featuredImage || null,
      publishedAt: insertBlogPost.publishedAt || null,
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
}

export const storage = new MemStorage();