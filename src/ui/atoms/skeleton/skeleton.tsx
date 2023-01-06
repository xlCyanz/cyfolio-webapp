import ReactLoadingSkeleton, { SkeletonProps } from "react-loading-skeleton";
import { Box, BoxProps } from "theme-ui";

export type ISkeletonProps = SkeletonProps & BoxProps;

const SkeletonWrapper = (props: ISkeletonProps) => (
  <Box as={ReactLoadingSkeleton} {...props} />
);

export default SkeletonWrapper;
