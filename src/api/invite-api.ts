import { IGuest } from "../common/type";

export const sendInviteRequest = async (values: IGuest) => {
  await fetch(`${process.env.REACT_APP_API_PROD}/api/hraviratoms-happy-day/create`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
}

export const getGuests = async () => {
 return await fetch(`${process.env.REACT_APP_API_PROD}/api/hraviratoms-happy-day/guests`);
}