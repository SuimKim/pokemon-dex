import { Flip } from "react-toastify";
import { toast } from "react-toastify";

export const notify = (message) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 2500,
    transition: Flip,
  });
