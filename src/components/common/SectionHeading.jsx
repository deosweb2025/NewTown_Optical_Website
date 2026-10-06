const SectionHeading = ({ title, subtitle, centered = false, className = "" }) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      {subtitle && (
        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-secondary heading-underline ${centered ? 'inline-block' : 'heading-underline-left'}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
