import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SubmitPage from "./pages/SubmitPage";
import NotFound from "./pages/NotFound";
import NFTSalesDashboard from "./pages/NFTSalesDashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/submit" element={<SubmitPage />} />
            <Route path="/brand/:id" element={<ProductDetailPage />} />
          </Route>
          <Route path="/nft-dashboard" element={<NFTSalesDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
