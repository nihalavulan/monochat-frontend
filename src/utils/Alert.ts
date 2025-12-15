import { toast } from "react-toastify";

type toastTypes = "success" | "error" | "info" | "warning";
export const ShowAlert = (type: toastTypes = "success", message: string) => {
  toast[type](message);
};
