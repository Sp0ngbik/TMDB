import { Route, Routes } from "react-router-dom";
import {
  CategoryMovies,
  Favorites,
  FilteredMovies,
  Main,
  Movie,
  Page404,
  Search,
} from "@/common/pages";
import { routes } from "@/common/variables";
import { Footer, Header } from "@/common/layout";
import { useAppSelector } from "@/common/hooks";
import { getErrorMessage } from "@/features/api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import s from "./App.module.scss";
function App() {
  const errorMessage = useAppSelector(getErrorMessage);
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);
  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <Routes>
          <Route path={routes.main} element={<Main />} />
          <Route path={routes.categoryParam} element={<CategoryMovies />} />
          <Route path={routes.filter} element={<FilteredMovies />} />
          <Route path={routes.search} element={<Search />} />
          <Route path={routes.favorites} element={<Favorites />} />
          <Route path={routes.movie} element={<Movie />} />
          <Route path={routes.notFound} element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
