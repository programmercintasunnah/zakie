import { useReveal } from "../hooks/useReveal";

const Reveal = ({ children, delay = 0, className = "" }) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={visible ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
