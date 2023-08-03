//База для секции с описанием одного из блоков

function MainSection({ sectionHeader, addSectionClass, coreClass, children,  id }) { //прокинуть сюда базовые классы от детей, чтобы было по БЭМ TODO
  return <section className={`mainSection ${addSectionClass} ${coreClass}`} id={id}>
    <h2 className="mainSection__header">{sectionHeader}</h2>
    {children}
  </section>;
}

export default MainSection;
