import { object, string, number } from "yup";

export const userSchema = object().shape({
  name: string().required(),
  guestCount: number().required(),
  isVisiting: string().required()
});