import React from "react";
import Loader from "react-loader-spinner";

export default function PageLoader() {
  return (
    <div className="loader-page">
      <div className="flex-column center">
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        <h3>Loading APIs...</h3>
      </div>
    </div>
  );
}
