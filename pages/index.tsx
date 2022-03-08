import { Typography, styled } from "@mui/material";

import {
  QcrBody,
  QcrBottomBar,
  QcrFeatureCard,
  QcrPage,
  QcrTitle,
  QcrTopBar,
} from "qcr-sites-shared";

import data from "data/home.yaml";

const StyledBody = styled(QcrBody)({
  maxWidth: "1000px",
});

const StyledFeatures = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: "16px",
});

const StyledLinks = styled("div")({
  display: "flex",
  flexDirection: "column",
  p: {
    marginTop: "6px",
    marginBottom: "6px",
  },
  a: {
    fontSize: "1.2rem",
    textDecoration: "none",
  },
  "a:hover": {
    fontWeight: "bold",
  },
});

const StyledTitle = styled(QcrTitle)({
  fontWeight: "bold",
  marginBottom: "12px",
});
StyledTitle.defaultProps = { variant: "h5", color: "primary" };

export default function HomePage() {
  return (
    <QcrPage>
      <QcrTopBar title="Internal Homepage" />
      <StyledBody>
        <StyledFeatures>
          {data.features &&
            data.features.map((f, i) => (
              <QcrFeatureCard
                key={i}
                text={f.name}
                linkUrl={f.target}
                mediaUrls={
                  f.media
                    ? typeof f.media === "string"
                      ? [f.media]
                      : f.media
                    : undefined
                }
              />
            ))}
        </StyledFeatures>
        <StyledLinks>
          <StyledTitle variant="h4" color="primary">
            Useful links
          </StyledTitle>
          {data.links &&
            data.links.map((l, i) => (
              <Typography variant="body1">
                <a href={l.target}>{l.name}</a>
              </Typography>
            ))}
        </StyledLinks>
      </StyledBody>
      <QcrBottomBar />
    </QcrPage>
  );
}
