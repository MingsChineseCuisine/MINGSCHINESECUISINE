import { QueryClient } from "@tanstack/react-query";
import { mockAPI } from "./mockData";

// Custom query function for Netlify deployment that uses mock data
const netlifyQueryFn = async ({ queryKey }: { queryKey: readonly unknown[] }) => {
  const [endpoint, ...params] = queryKey as string[];
  
  // Map API endpoints to mock functions
  switch (endpoint) {
    case "/api/menu":
      return await mockAPI.getMenuItems();
    
    case "/api/menu/category":
      if (params[0]) {
        return await mockAPI.getMenuItemsByCategory(params[0] as string);
      }
      return await mockAPI.getMenuItems();
    
    default:
      throw new Error(`Unknown endpoint: ${endpoint}`);
  }
};

export async function netlifyApiRequest(
  method: string,
  url: string,
  data?: unknown,
): Promise<{ json: () => Promise<any> }> {
  // For Netlify deployment, handle form submissions differently
  if (url === "/api/reservations" && method === "POST") {
    const result = await mockAPI.createReservation(data);
    return {
      json: async () => result,
    };
  }
  
  if (url === "/api/contact" && method === "POST") {
    const result = await mockAPI.createContactMessage(data);
    return {
      json: async () => result,
    };
  }
  
  throw new Error(`Unsupported API call: ${method} ${url}`);
}

export const netlifyQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: netlifyQueryFn,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

// Check if we're in Netlify build or static deployment
export const isNetlifyBuild = 
  typeof window !== 'undefined' && 
  !window.location.origin.includes('replit') &&
  !window.location.origin.includes('localhost');

export { mockAPI };