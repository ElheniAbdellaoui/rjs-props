import React from "react";
import { Card } from "react-bootstrap";
const StudentCard = ({ StudObj }) => {
  return (
    <div style={{ flexWrap: "wrap" }}>
      <Card
        style={{
          width: "18rem",
          display: "flex",
          backgroundImage:
            "url(https://t4.ftcdn.net/jpg/04/43/96/03/360_F_443960339_3YJvuhuOlpavys7BblwsHTP2I8S0hLIr.jpg)",
          marginTop: "15px",
          borderRadius: "20px",
        }}
      >
        <Card.Img
          style={{
            backgroundImage:
              "url(https://t4.ftcdn.net/jpg/04/43/96/03/360_F_443960339_3YJvuhuOlpavys7BblwsHTP2I8S0hLIr.jpg)",
          }}
          variant="top"
          src={StudObj.imgURL}
        />
        <Card.Body>
          <Card.Title style={{ color: "white" }}>{StudObj.name}</Card.Title>
          <Card.Text style={{ color: "white" }}>
            {" "}
            {StudObj.attendance} <br /> <hr />
            <div style={{ display: "flex", flexWrap: "wrap", margin: "25px" }}>
              <div>
                {StudObj.pace}
                <br />
                {StudObj.shoot}
                <br />
                {StudObj.passing}
                <br />
              </div>
              <div style={{ marginLeft: "50px" }}>
                {StudObj.dribling}
                <br />
                {StudObj.defense}
                <br />
                {StudObj.physique}
                <br />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentCard;
