"use client";
import { ReactionButtonProps } from "@/types";
import React from "react";

function ReactionButton({ isLoved, handleClicked }: ReactionButtonProps) {
  return (
    <button
      className="bg-white absolute rounded-full p-3 top-5 right-5"
      onClick={handleClicked}
      aria-label={isLoved ? "Unlike" : "Like"}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5022 3.00001C15.6291 2.99851 14.7677 3.20077 13.9865 3.59072C13.2052 3.98066 12.5258 4.54752 12.0022 5.24621C11.293 4.30266 10.3051 3.606 9.17823 3.25482C8.05134 2.90365 6.84256 2.91573 5.72291 3.28936C4.60327 3.663 3.62948 4.37926 2.93932 5.3368C2.24916 6.29434 1.8776 7.44467 1.8772 8.62501C1.8772 15.3621 11.2373 20.6813 11.6357 20.9044C11.7477 20.9671 11.8739 21 12.0022 21C12.1305 21 12.2567 20.9671 12.3687 20.9044C14.0902 19.8961 15.7059 18.7173 17.1914 17.3856C20.4665 14.438 22.1272 11.4905 22.1272 8.62501C22.1255 7.13368 21.5323 5.70393 20.4778 4.6494C19.4233 3.59487 17.9935 3.0017 16.5022 3.00001Z"
          fill={isLoved ? "#FF6363" : "#DBE2E5"}
        />
      </svg>
    </button>
  );
}

export default ReactionButton;
