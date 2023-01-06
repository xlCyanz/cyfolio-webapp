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

const replaceString = (str: string, replacement: any): any => {
  const result: Array<unknown> = [];

  const keys: Array<string> = Object.keys(replacement);

  const getRegExp = () => {
    const regexp: Array<string> = [];
    keys.forEach((key) => regexp.push(key as string));
    return new RegExp(regexp.join("|"));
  };

  str
    .split(getRegExp())
    .forEach((item, i) => result.push(item, replacement[`${keys[i]}`]));

  return result;
};

export default { renderLoader, replaceString };
