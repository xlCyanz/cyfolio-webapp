import { I18nContext } from "@contexts";
import { Skeleton, Link } from "@atoms";
import { dateUtil, Utilities } from "@utils";
import { Box, Grid, Text, useThemeUI } from "theme-ui";

require("dayjs/locale/es");

export type GridDataPersonalProps = {
  birthday: string;
  email: string;
  telephone: string;
};

const GridDataPersonal = ({
  birthday,
  email,
  telephone,
}: GridDataPersonalProps) => {
  const { theme } = useThemeUI();
  const { locale, lang } = I18nContext.useI8nContext();

  const birthdayFormat = dateUtil(birthday, lang).format("DD MMM YYYY");
  const ageCalculated = Utilities.calculateAge(birthday);

  return (
    <Grid columns={[1, null, "1fr 1.2fr"]} sx={{ columnGap: 3 }}>
      {birthday && (
        <>
          <Box py={1} sx={{ borderBottom: `2px solid ${theme.colors?.muted}` }}>
            <Text sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
              {`${locale?.messages.aboutpage.dataPersonal.birthday}: `}
            </Text>
            <Text>{birthdayFormat}</Text>
          </Box>
          <Box py={1} sx={{ borderBottom: `2px solid ${theme.colors?.muted}` }}>
            <Text sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
              {`${locale?.messages.aboutpage.dataPersonal.age}: `}
            </Text>
            <Text>{ageCalculated}</Text>
          </Box>
        </>
      )}

      {/* Email */}
      <Box py={1} sx={{ borderBottom: `2px solid ${theme.colors?.muted}` }}>
        <Text sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {`${locale?.messages.aboutpage.dataPersonal.email}: `}
        </Text>
        <Link
          href={`mailto:${email}`}
          sx={{ textDecoration: "none", fontWeight: "bold" }}
        >
          {locale?.messages.aboutpage.dataPersonal.sendEmail}
        </Link>
      </Box>

      {/* Telephone */}
      <Box py={1} sx={{ borderBottom: `2px solid ${theme.colors?.muted}` }}>
        <Text sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {`${locale?.messages.aboutpage.dataPersonal.telephone}: `}
        </Text>

        <Link
          href={`tel:${telephone}`}
          color="text"
          sx={{ textDecoration: "none" }}
        >
          {telephone}
        </Link>
      </Box>
    </Grid>
  );
};

GridDataPersonal.Skeleton = () => (
  <Grid columns={[1, null, "1fr 1.2fr"]} sx={{ gap: 2, columnGap: 2 }}>
    {[...Array.from({ length: 6 }).keys()].map((i) => (
      <Box key={`skeleton-section-${i}`}>
        <Skeleton width="100%" height={28} />
      </Box>
    ))}
  </Grid>
);

export default GridDataPersonal;
