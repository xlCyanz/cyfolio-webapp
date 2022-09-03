import React from "react";

type C = React.ReactNode[] | React.ReactNode;

const renderLoader = (loading: boolean, loaderComponent: C) => {
  return (renderComponent: C) => {
    if (loading) {
      return loaderComponent;
    }

    return renderComponent;
  };
};

export default { renderLoader };
