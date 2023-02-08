import React from "react";
import { ColorTheme, Locales } from "../index";
import Widget from "./Widget";

export type EconomicCalendarProps = {
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  locale?: Locales;
  importanceFilter?: "-1,0,1" | "0,1";
  currencyFilter?: string;

  children?: never;

};

const EconomicCalendar: React.FC<EconomicCalendarProps> = ({
  colorTheme = "light",
  isTransparent = false,
  width = 510,
  height = 600,
  autosize = false,
  locale = "en",
  importanceFilter = "-1,0,1",
  currencyFilter = undefined,
  ...props
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
          colorTheme,
          isTransparent,
          ...(!autosize ? { width } : { width: "100%" }),
          ...(!autosize ? { height } : { height: "100%" }),
          locale,
          importanceFilter,
          currencyFilter,
          ...props,
        }}
        scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-events.js"
      ></Widget>
    </div>
  );
};

export default EconomicCalendar;
