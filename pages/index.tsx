import { QcrBody, QcrBottomBar, QcrPage, QcrTopBar } from "qcr-sites-shared";

export default function HomePage() {
  return (
    <QcrPage>
      <QcrTopBar title="Internal Homepage" />
      <QcrBody></QcrBody>
      <QcrBottomBar />
    </QcrPage>
  );
}
