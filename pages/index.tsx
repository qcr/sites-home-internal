import { styled } from "@mui/material";

import {
  QcrBody,
  QcrBottomBar,
  QcrFeatureCard,
  QcrPage,
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
});

export default function HomePage() {
  console.log(data);
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
                mediaUrls={f.media}
              />
            ))}
        </StyledFeatures>
      </StyledBody>
      <QcrBottomBar />
    </QcrPage>
  );
}
