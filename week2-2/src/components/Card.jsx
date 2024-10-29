import React, { useState } from "react";
import styled from "styled-components";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
  const [hide, setHide] = useState(true);

  const handleMouseOver = () => {
    setHide(false);
  };

  const handleMouseOut = () => {
    setHide(true);
  };

  return (
    <div>
      <div
        className="movie-container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
        <br />
      </div>
      <Info>
        <Title>{props.original_title}</Title>
        <Released>{props.release_date}</Released>
      </Info>
    </div>
  );
}

const Info = styled.div`
  width: 150px;
  height: 80px;
  margin: 5px;
`;

const Title = styled.p`
  color: white;
  margin: 0; /* 마진을 0으로 설정 */
`;

const Released = styled.p`
  font-size: 11px;
  color: white;
  margin: 0; /* 마진을 0으로 설정 */
  /* 필요시 아래와 같이 마진 조정 */
  /* margin-top: 2px; */
`;

/*Card 내용*/
