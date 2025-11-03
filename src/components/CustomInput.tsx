import React from "react";

type CustomInputProps = {
  id: string;
  checked: boolean;
  onChange: () => void;
};

export default function CustomInput({
  id,
  checked,
  onChange,
}: CustomInputProps) {
  return (
    <label className="inline-flex items-center cursor-pointer ">
      <input
        type="checkbox"
        value={String(id)}
        id={String(id)}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      <div
        className={`~size-[0.938rem]/[1.25rem] shrink-0 border ~rounded-[0.15rem]/[0.25rem] ${
          checked ? "bg-black border-black" : "bg-transparent border-black"
        } flex items-center justify-center`}
      >
        {checked && (
          <svg
            className="~size-[0.85rem]/[1rem] text-white shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </div>
    </label>
  );
}
