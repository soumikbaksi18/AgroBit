import React from "react";

function Input({
    leftIcon,
    rightIcon,
    show,
    ...rest
}) {
  return ( show &&
    <div className="flex flex-col items-start space-y-[0.3rem]">
      <label className="text-sm font-[600]">{rest.label}</label>
      {(
        <div className={`input-div`}>
          {leftIcon}
          <input
            {...rest}
            className="p-2 w-full bg-transparent text-sm placeholder:text-placeholder focus-within:outline-none focus-within:border-none disabled:text-neutral-500"
          />
          {rightIcon}
        </div>
      )}
    </div>
  );
}

export default Input;