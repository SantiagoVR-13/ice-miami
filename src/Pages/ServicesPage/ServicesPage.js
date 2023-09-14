import "./ServicesPage.scss";
import house from "../../Assets/Images/white-modern-square.jpg";

function ServicesPage() {
  return (
    <>
      <div className="services">
        <div className="services__container">
          <div className="services__card">
            <a href="/">
              <img
                className="header-logo__img"
                src={house}
                alt=" brick house"
              />
            </a>
          </div>
          <div className="services__card">
            <a href="/">
              <img
                className="header-logo__img"
                src={house}
                alt=" brick house"
              />
            </a>
          </div>
        </div>
        <div className="services__container">
          <div className="services__card">
            <a href="/">
              <img
                className="header-logo__img"
                src={house}
                alt=" brick house"
              />
            </a>
          </div>
          <div className="services__card">
            <a href="/">
              <img
                className="header-logo__img"
                src={house}
                alt=" brick house"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
