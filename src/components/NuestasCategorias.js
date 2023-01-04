import React from "react";
import GenresInDb from "./GenresInDb";
import TopBar from "./TopBar";

export const NuestasCategorias = () => {
  return (
    <>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />
          <GenresInDb />
        </div>
      </div>
    </>
  );
};
