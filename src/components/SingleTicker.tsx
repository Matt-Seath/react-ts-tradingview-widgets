import React from "react";
import { ColorTheme, Locales } from "../index";
import Widget from "./Widget";

export type SingleTickerProps = {
  symbol?: string;
  width?: string | number;
  autosize?: boolean;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  locale?: Locales;
  largeChartUrl?: string;

  children?: never;
};

const SingleTicker: React.FC<SingleTickerProps> = ({
  symbol = "FX:EURUSD",
  width = 350,
  autosize = false,
  colorTheme = "light",
  isTransparent = false,
  locale = "en",
  largeChartUrl = undefined,
  ...props
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
          symbol,
          ...(!autosize ? { width } : { width: "100%" }),
          colorTheme,
          isTransparent,
          locale,
          largeChartUrl,
          ...props,
        }}
        scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
      ></Widget>
    </div>
  );
};

export default SingleTicker;
