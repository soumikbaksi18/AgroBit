import React from "react";
import { AiOutlineLoading } from 'react-icons/ai'

const Button = ({ text, type, cb, loading, style }) => {
  return (
      <button
        type={type}
        disabled={loading}
        className={`p-4 text-white text-center font-[500] items-center justify-center rounded-[6px] bg-primary w-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 ${style || 'my-8'}`}
        onClick={cb}
      >
        { loading ? <AiOutlineLoading className="animate-spin mx-auto"/> : text}
      </button>
  );
};

export default Button;