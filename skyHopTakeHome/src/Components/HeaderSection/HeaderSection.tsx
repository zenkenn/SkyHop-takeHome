import "./HeaderSection.css";

const HeaderSection = () => {
  return (
    <div className="headerSectionRoot">
      <div className="exitButtonContainer">
        <button className="exitButton">X</button>
      </div>
      <div className="HeaderContainer">
        <div className="Header">Document Upload</div>
      </div>
    </div>
  );
};

export default HeaderSection;
