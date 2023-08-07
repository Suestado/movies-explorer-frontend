function MainSection({ sectionHeader, addSectionClass, coreClass, children, id }) {
  return <section className={`mainSection ${addSectionClass} ${coreClass}`} id={id}>
    <h2 className="mainSection__header">{sectionHeader}</h2>
    {children}
  </section>;
}

export default MainSection;
