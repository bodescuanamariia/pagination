import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const prevPage = () => {
    setPage((oldPage) => {
      let nextpage = oldPage + 1;
      if (nextpage > data.length - 1) {
        nextpage = 0;
      }
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let prevpage = oldPage - 1;
      if (prevpage < 0) {
        prevpage = data.length - 1;
      }
    });
    return prevPage;
  };

  useEffect(() => {
    if (loading) {
      return setFollowers(data[page]);
    }
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading... " : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {followers.map((item, index) => {
              return (
                <button
                  className={`page-btn ${index === page ? " active" : null}`}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="prev-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
