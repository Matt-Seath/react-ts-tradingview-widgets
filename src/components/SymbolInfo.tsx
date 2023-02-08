import React from "react";
import { ColorTheme, Locales } from "../index";
import Widget from "./Widget";

export type SymbolInfoProps = {
  symbol?: string;
  width?: string | number;
  autosize?: boolean;
  locale?: Locales;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  largeChartUrl?: string;

  children?: never;
};

const SymbolInfo: React.FC<SymbolInfoProps> = ({
  symbol = "NASDAQ:AAPL",
  width = 1000,
  autosize = false,
  locale = "en",
  colorTheme = "light",
  isTransparent = false,
  largeChartUrl = undefined,
  ...props
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
          symbol,
          ...(!autosize ? { width } : { width: "100%" }),
          locale,
          colorTheme,
          isTransparent,
          largeChartUrl,
          ...props,
        }}
        scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
      ></Widget>
    </div>
  );
};

export default SymbolInfo;
