const SectionHeading = ({ eyebrow, title, description, light = false }) => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
