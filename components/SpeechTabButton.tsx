"use client";

interface SpeechTabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function SpeechTabButton({
  active,
  onClick,
  children,
}: SpeechTabButtonProps) {
  const activeClass = "bg-dark text-white";
  const inActiveClass = "bg-secondary";

  return (
    <button
      onClick={onClick}
      className={`w-[5.5rem] h-8 rounded-[5px] transition-colors ${
        active ? activeClass : inActiveClass
      }`}
    >
      {children}
    </button>
  );
}
