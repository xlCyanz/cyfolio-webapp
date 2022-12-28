import "react-loading-skeleton/dist/skeleton.css";

import React from "react";
import { useThemeUI } from "theme-ui";
import { SkeletonTheme } from "react-loading-skeleton";

interface IProviderProps {
  children: React.ReactElement;
}

const SkeletonContext = ({ children }: IProviderProps) => {
  const { theme, colorMode } = useThemeUI();

  const baseColor = React.useMemo(() => {
    if (colorMode === "light") return theme.rawColors?.skeletonBase;
    return theme.rawColors?.modes?.dark.skeletonBase;
  }, [
    colorMode,
    theme.rawColors?.modes?.dark.skeletonBase,
    theme.rawColors?.skeletonBase,
  ]);

  const highlightColor = React.useMemo(() => {
    if (colorMode === "light") return theme.rawColors?.skeletonHighlight;
    return theme.rawColors?.modes?.dark.skeletonHighlight;
  }, [
    colorMode,
    theme.rawColors?.modes?.dark.skeletonHighlight,
    theme.rawColors?.skeletonHighlight,
  ]);

  return (
    <SkeletonTheme
      baseColor={baseColor as string}
      highlightColor={highlightColor as string}
    >
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonContext;
