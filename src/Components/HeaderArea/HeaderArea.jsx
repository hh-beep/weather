import HeaderAreaStyle from "./HeaderAreaStyle";

const HeaderArea = () => {

  const style = HeaderAreaStyle()

  return (
    <section className={ style.Header }>
      <section className={ style.HeaderSection }>
        <h1 className={ style.HeaderSectionTittle }>Weather Web Server</h1>
      </section>
    </section>
  )
}

export default HeaderArea;