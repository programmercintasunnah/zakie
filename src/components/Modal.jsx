import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { useLanguage } from "../context/LanguageContext";

const Modal = ({
  open,
  onClose,
  labelledBy,
  children,
  panelClassName = "",
}) => {
  useLockBodyScroll(open);
  const panelRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previouslyFocused = document.activeElement;
    document.addEventListener("keydown", handleKeyDown);
    panelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-label={labelledBy ? undefined : t.a11y.closeDialog}
        className={`max-h-[90vh] w-full overflow-hidden rounded-2xl bg-white shadow-2xl outline-none dark:bg-slate-900 ${panelClassName}`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
