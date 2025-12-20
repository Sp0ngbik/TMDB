import * as Slider from "@radix-ui/react-slider";
import s from "././Slider.module.scss";
import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FilterSelect } from "@/common/variables";

type SliderProps = {
  sliderConfig: {
    step: number;
    max: number;
    defaultValue: number[];
  };
  className?: string;
};

const SliderComponent = ({ sliderConfig, className }: SliderProps) => {
  const { defaultValue, ...rest } = sliderConfig;
  const [sliderValue, setSliderValue] = useState<number[]>(defaultValue);
  useEffect(() => {
    setSliderValue(defaultValue);
  }, [defaultValue]);
  const [, setParams] = useSearchParams();
  const sliderClassName = clsx(s.root, className);
  const onSliderCommit = (values: number[]) => {
    setParams((prev) => {
      prev.set(FilterSelect.voteAverageDesc, values[0].toString());
      prev.set(FilterSelect.voteAverageAsc, values[1].toString());
      return prev;
    });
  };
  const onChangeSliderValue = (value: number[]) => {
    setSliderValue(value);
  };
  return (
    <form>
      <div className={s.sliderValues}>
        <span>Rating:</span>
        <span>
          {sliderValue[0]} - {sliderValue[1]}
        </span>
      </div>
      <Slider.Root
        onValueCommit={onSliderCommit}
        onValueChange={onChangeSliderValue}
        className={sliderClassName}
        minStepsBetweenThumbs={0.1}
        value={sliderValue}
        {...rest}
      >
        <Slider.Track className={s.track}>
          <Slider.Range className={s.range} />
        </Slider.Track>
        <Slider.Thumb className={s.thumb} aria-label="rating" />
        <Slider.Thumb className={s.thumb} aria-label="rating" />
      </Slider.Root>
    </form>
  );
};

export default SliderComponent;
