import page404 from "@/assets/img/page404.webp";
import s from "./Page404.module.scss";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate(-1);
  };
  return (
    <div className={s.pageWrapper}>
      <div className={s.imageBlock}>
        <img src={page404} alt="Page 404 not found" />
      </div>
      <Button onClick={onBackClick} className={s.backButton}>
        Back
      </Button>
    </div>
  );
};

export default Page404;
