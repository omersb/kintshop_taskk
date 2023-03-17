import { createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastContext = createContext();

export const ToastContextProvider = (children) => {
	const toastWarnNotify = (msg) => {
		toast.warn(msg, {
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};
	const toastSuccessNotify = (msg) => {
		toast.success(msg, {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};
	toastErrorNotify = (msg) => {
		toast.error(msg, {
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	const value = {
		toastWarnNotify,
		toastSuccessNotify,
		toastErrorNotify,
	};
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

