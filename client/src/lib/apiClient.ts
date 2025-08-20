// Universal API client that works for both Replit and Netlify deployments
import { apiRequest as replitApiRequest } from "./queryClient";
import { netlifyApiRequest, isNetlifyBuild } from "./netlifyQueryClient";

// Conditional API request function
export const apiRequest = isNetlifyBuild ? netlifyApiRequest : replitApiRequest;

export { isNetlifyBuild };