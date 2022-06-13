import Link from "next/link";
import { Skeleton } from "@atoms";
import { I18nContext } from "@contexts";
import { calculateAge, dateUtil } from "@utils";
import { Box, Grid, Text, Link as LinkA, useThemeUI } from "theme-ui";

require("dayjs/locale/es");

interface IGridDataPersonalProps {
  birthday: string;
  email: string;
  telephone: string;
}

const GridDataPersonal = ({
  birthday,
  email,
  telephone,
}: IGridDataPersonalProps) => {
  const { theme } = useThemeUI();
  const { locale, lang } = I18nContext.useI8nContext();

  const birthdayFormat = dateUtil(birthday, lang).format("DD MMM YYYY");

  return (
    <Grid columns={[1, null, "1fr 1.2fr"]} sx={{ columnGap: 3 }}>
      {/* Birthday */}
      <Box py={1} sx={{ borderBottom: `2px solid ${theme.colors?.muted}` }}>
        <Text sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {`${locale?.messages.aboutpage.dataPersonal.birthday}: `}
        </Text>

        <Text>{birthdayFormat}</Text>
      </Box>

      {/* Age */}
      {birthday && (
        <Box py={1} sx={{ borderBottom: `2px solid ${theme.colors?.muted}` }}>
          <Text sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
            {`${locale?.messages.aboutpage.dataPersonal.age}: `}
          </Text>

          <Text>{calculateAge(birthday)}</Text>
        </Box>
      )}

      {/* Email */}
      <Box py={1} sx={{ borderBottom: `2px solid ${theme.colors?.muted}` }}>
        <Text sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {`${locale?.messages.aboutpage.dataPersonal.email}: `}
        </Text>

        <Link href={`mailto:${email}`} passHref>
          <LinkA sx={{ textDecoration: "none", fontWeight: "bold" }}>
            {locale?.messages.aboutpage.dataPersonal.sendEmail}
          </LinkA>
        </Link>
      </Box>

      {/* Telephone */}
      <Box py={1} sx={{ borderBottom: `2px solid ${theme.colors?.muted}` }}>
        <Text sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {`${locale?.messages.aboutpage.dataPersonal.telephone}: `}
        </Text>

        <Link href={`tel:${telephone}`} passHref>
          <LinkA color="text" sx={{ textDecoration: "none" }}>
            {telephone}
          </LinkA>
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
