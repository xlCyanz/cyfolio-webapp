import { useThemeUI } from "theme-ui";
import { SkeletonTheme } from "react-loading-skeleton";
import { useMemo, ReactNode } from "react";

import "react-loading-skeleton/dist/skeleton.css";

interface IProviderProps {
  children: ReactNode;
}

const SkeletonContext = ({ children }: IProviderProps) => {
  const { theme, colorMode } = useThemeUI();

  const baseColor = useMemo(() => {
    if (colorMode === "light") return theme.rawColors?.skeletonBase;
    return theme.rawColors?.modes?.dark.skeletonBase;
  }, [
    colorMode,
    theme.rawColors?.modes?.dark.skeletonBase,
    theme.rawColors?.skeletonBase,
  ]);

  const highlightColor = useMemo(() => {
    if (colorMode === "light") return theme.rawColors?.skeletonHighlight;
    return theme.rawColors?.modes?.dark.skeletonHighlight;
  }, [
    colorMode,
    theme.rawColors?.modes?.dark.skeletonHighlight,
    theme.rawColors?.skeletonHighlight,
  ]);

  return (
    <SkeletonTheme
      baseColor={`${baseColor}`}
      highlightColor={`${highlightColor}`}
    >
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonContext;
