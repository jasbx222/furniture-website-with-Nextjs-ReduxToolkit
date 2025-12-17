import { Provider } from "react-redux";
import Categories from "./(pages)/categories/Categories";
import HomeComponent from "./(pages)/home/Home";
import { store } from "./redux/store";
import Products from "./(pages)/products/page";
import Range from "./(pages)/range/Range";
import ReduxProvider from "./redux/providers";
export default function Home() {
  return (
    <div>
      <HomeComponent />

      <Range />
      <Categories />
      <Products />
    </div>
  );
}
