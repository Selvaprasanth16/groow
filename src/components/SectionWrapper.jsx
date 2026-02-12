const SectionWrapper = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default SectionWrapper;
