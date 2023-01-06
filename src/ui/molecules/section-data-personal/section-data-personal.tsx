import React from "react";
import { Box, Grid, Text, useThemeUI } from "theme-ui";

import { I18nContext } from "@contexts";
import { Skeleton, Link } from "@atoms";
import { dateUtil, Utilities } from "@utils";

require("dayjs/locale/es");

export interface ISectionDataPersonalProps {
  birthday: string;
  email: string;
  telephone: string;
}

interface IDataPersonalRowProps {
  title: string;
  value?: string;
  children?: React.ReactNode;
}

const DataPersonalRow = ({ title, children, value }: IDataPersonalRowProps) => {
  const { theme } = useThemeUI();

  return (
    <Box py={1} sx={{ borderBottom: `2px solid ${theme.colors?.muted}` }}>
      <Text sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
        {`${title}: `}
      </Text>
      {children || <Text>{value}</Text>}
    </Box>
  );
};

const SectionDataPersonal = ({
  birthday,
  email,
  telephone,
}: ISectionDataPersonalProps) => {
  const { locale, lang } = I18nContext.useI8nContext();

  const ageCalculated = React.useMemo(
    () => Utilities.calculateAge(birthday),
    [birthday],
  );

  return (
    <Grid columns={[1, null, "1fr 1.2fr"]} sx={{ columnGap: 3 }}>
      {/* Birthday */}
      <DataPersonalRow
        title={`${locale?.messages.aboutpage.dataPersonal.birthday}`}
        value={dateUtil(birthday, lang).format("DD MMM YYYY")}
      />

      {/* Age */}
      <DataPersonalRow
        title={`${locale?.messages.aboutpage.dataPersonal.age}`}
        value={`${ageCalculated}`}
      />

      {/* Email */}
      <DataPersonalRow
        title={`${locale?.messages.aboutpage.dataPersonal.email}`}
      >
        <Link
          href={`mailto:${email}`}
          sx={{ textDecoration: "none", fontWeight: "bold" }}
        >
          {locale?.messages.aboutpage.dataPersonal.sendEmail}
        </Link>
      </DataPersonalRow>

      {/* Telephone */}
      <DataPersonalRow
        title={`${locale?.messages.aboutpage.dataPersonal.telephone}`}
      >
        <Link
          href={`tel:${telephone}`}
          color="text"
          sx={{ textDecoration: "none" }}
        >
          {telephone}
        </Link>
      </DataPersonalRow>
    </Grid>
  );
};

SectionDataPersonal.Skeleton = () => (
  <Grid columns={[1, null, "1fr 1.2fr"]} sx={{ gap: 2, columnGap: 2 }}>
    {[...Array.from({ length: 6 }).keys()].map((i) => (
      <Box key={`skeleton-section-${i}`}>
        <Skeleton width="100%" height={28} />
      </Box>
    ))}
  </Grid>
);

export default SectionDataPersonal;
