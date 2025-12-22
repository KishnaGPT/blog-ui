import Hero from "./components/Hero";
import BlogSection from "./components/BlogSection";
import Trending from "./components/Trending";
import Insights from "./components/Insights";

export default function App() {
  return (
    <div className="bg-slate-50 p-10">
      <Hero />
      <BlogSection />
      <Trending />
      <Trending reverse />
      <Insights />
    </div>
  );
}
