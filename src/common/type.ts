import { ReactElement } from "react";

export interface IGuest {
  name: string;
  phone?: string;
  isVisiting: string;
}

export interface ITimeline {
  icon: ReactElement<any, any>;
  time: string;
  location: string;
}

export interface ILocationDataContent {
  name: string;
  background: string;
  link: string;
}

export interface ILocationData {
  church: ILocationDataContent,
  restaurant: ILocationDataContent
}