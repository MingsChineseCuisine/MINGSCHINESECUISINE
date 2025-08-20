import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { netlifyQueryClient, isNetlifyBuild } from "./lib/netlifyQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Use appropriate query client based on deployment environment
  const client = isNetlifyBuild ? netlifyQueryClient : queryClient;
  
  return (
    <QueryClientProvider client={client}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
