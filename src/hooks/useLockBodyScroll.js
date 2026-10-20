import { useEffect } from "react";

/**
 * Mencegah body ikut scroll saat modal terbuka.
 * @param {boolean} locked
 */
export const useLockBodyScroll = (locked) => {
  useEffect(() => {
    if (!locked) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
};
