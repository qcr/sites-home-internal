import { QcrBody, QcrBottomBar, QcrPage, QcrTopBar } from "qcr-sites-shared";

import data from "../data/home.yaml";

export default function HomePage() {
  console.log(data);
  return (
    <QcrPage>
      <QcrTopBar title="Internal Homepage" />
      <QcrBody></QcrBody>
      <QcrBottomBar />
    </QcrPage>
  );
}
