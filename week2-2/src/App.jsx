import { MOVIES } from "../mocks/movies"; // MOVIES 가져오기

function App() {
  // 이미지 base URL
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* 20개씩만 보여주기 */}
        {MOVIES.results.slice(0, 20).map((movie, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              margin: "10px",
              width: "calc(10% - 20px)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "10px",
              }}
            />
            {/* 반투명 배경을 보여줄 요소 */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0)", // 투명 배경
              }}
              // hover 효과
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
