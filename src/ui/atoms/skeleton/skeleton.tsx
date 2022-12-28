import ReactLoadingSkeleton, { SkeletonProps } from "react-loading-skeleton";
import { Box, BoxProps } from "theme-ui";

export type SkeletonWrapperProps = SkeletonProps & BoxProps;

const SkeletonWrapper = (props: SkeletonWrapperProps) => (
  <Box as={ReactLoadingSkeleton} {...props} />
);

export default SkeletonWrapper;
