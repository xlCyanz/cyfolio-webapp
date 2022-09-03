import ReactLoadingSkeleton, { SkeletonProps } from "react-loading-skeleton";
import { Box, BoxProps } from "theme-ui";

interface ISkeletonProps extends SkeletonProps, BoxProps {}

const Skeleton = (props: ISkeletonProps) => {
  return <Box as={ReactLoadingSkeleton} {...props} />;
};

export default Skeleton;
