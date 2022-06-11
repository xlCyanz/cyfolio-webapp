import ReactLoadingSkeleton, { SkeletonProps } from "react-loading-skeleton";
import { FC } from "react";
import { Box, BoxProps } from "theme-ui";

interface ISkeletonProps extends SkeletonProps, BoxProps {}

const Skeleton: FC<ISkeletonProps> = (props) => {
  return <Box as={ReactLoadingSkeleton} {...props} />;
};

export default Skeleton;
