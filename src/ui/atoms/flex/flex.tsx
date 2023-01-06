import { Flex, FlexProps } from "theme-ui";

export type IFlexProps = FlexProps;

const FlexWrapper = (props: IFlexProps) => <Flex {...props} />;

export default FlexWrapper;
