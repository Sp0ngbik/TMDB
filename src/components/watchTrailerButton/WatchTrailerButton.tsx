import { useGetMovieVideoQuery } from "@/features/api";
import { useState } from "react";
import { Button } from "@/components";
import s from "./WatchTrailerButton.module.scss";
import ReactPlayer from "react-player";

type Props = {
  movieId: string;
};

const WatchTrailerButton = ({ movieId }: Props) => {
  const { data } = useGetMovieVideoQuery(movieId);
  const [popupToggle, setPopupToggle] = useState<boolean>(false);
  const togglePopup = () => {
    if (popupToggle) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setPopupToggle(!popupToggle);
  };
  const trailerData = data?.results.filter((video) => video.type === "Trailer");

  return (
    <div>
      {!trailerData?.length || (
        <Button
          className={s.trailerButton}
          variant={"secondary"}
          onClick={togglePopup}
        >
          Watch trailer
        </Button>
      )}
      {popupToggle && (
        <div className={s.trailerShadowBox} onClick={togglePopup}>
          {trailerData && (
            <div className={s.trailerWrapper}>
              <ReactPlayer
                src={`https://www.${trailerData[0].site.toLowerCase()}.com/embed/${trailerData[0].key}`}
                controls={true}
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    color: "white",
                  },
                }}
              />
            </div>
            // <iframe
            //   className={s.trailerFrame}
            //   src={`https://www.${trailerData[0].site}.com/embed/${trailerData[0].key}`}
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //   allowFullScreen
            // />
          )}
        </div>
      )}
    </div>
  );
};

export default WatchTrailerButton;
