import { ReactNode } from "react";

type C = ReactNode | ReactNode[];

const renderLoader = (loading: boolean, loaderComponent: C) => {
  return (renderComponent: C) => {
    if (loading) {
      return loaderComponent;
    }

    return renderComponent;
  };
};

export default { renderLoader };
