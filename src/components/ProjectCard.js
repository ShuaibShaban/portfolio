import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  
  const handleClick = () => {
    window.open(linkUrl, "_blank");
  };

  return (
    <Col size={12} sm={8} md={4}>
      <div className="proj-imgbx" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br /><br />
          <button style={{ cursor: 'pointer', color: 'white', fontFamily: "Cursive"}}>Visit Website</button>
        </div>
      </div>
    </Col>
  )
}
