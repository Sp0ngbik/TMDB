import s from "./WelcomeSection.module.scss";
import { SearchForm } from "@/components";
import { placeholderForSearch } from "@/common/variables";

type Props = {
  src: string;
};

const WelcomeSection = ({ src }: Props) => {
  return (
    <div className={s.mainBlock}>
      <div className={s.welcomeSection}>
        <img
          className={s.posterStyle}
          src={src}
          alt={"backdrop_path not found"}
        />
        <div className={s.searchBlock}>
          <h5>WELCOME</h5>
          <p>Browse highlighted titles form TMDB</p>
          <SearchForm fullWidth={true} placeholder={placeholderForSearch} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
