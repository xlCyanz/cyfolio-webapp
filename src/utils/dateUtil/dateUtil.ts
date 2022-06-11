import dayjs, { ConfigType } from "dayjs";
import "dayjs/locale/es";

export default (date?: ConfigType, locale: string = "es") => {
  return dayjs(date).locale(locale);
};
