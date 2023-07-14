import React from "react";

function ErrorPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#012939",
        }}
      >
        <h1
          style={{
            color: "#3ca2e0",
            fontWeight: "bold",
          }}
        >
          Sorry This Page Not Found
        </h1>
      </div>
    </>
  );
}

export default ErrorPage;
