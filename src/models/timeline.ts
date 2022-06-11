import { ITimeLineGQL } from "@types";

const TimeLineModel = (data: ITimeLineGQL) => {
  if (!data) {
    return null;
  }

  const { id, title, description, fromDate, toDate } = data;

  return {
    id,
    title,
    description,
    fromDate,
    toDate,
  };
};

export default TimeLineModel;
