import { toast } from "react-toastify";
const classToast = `
      bg-gradient-to-r from-green-400 via-green-500 to-green-600
      text-white font-semibold text-lg rounded-lg
      shadow-lg p-4 w-full max-w-xs
      transition-all transform
      ease-in-out duration-300
      hover:scale-105 hover:shadow-xl
      animate__animated animate__fadeIn
    `
export const successMessage = (message: string) => {
  toast.success(message, {
    className:classToast
  });
};
export const FieldMessage = (message: string) => {
  toast.error(message, {
    className: classToast
  });
};



