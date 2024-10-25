import { FC } from "react";
import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: boolean;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <div className={css.error}>{message}</div>;
};

export default ErrorMessage;
