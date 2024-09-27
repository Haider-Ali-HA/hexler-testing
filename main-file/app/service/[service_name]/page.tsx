import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceSingle from "@/components/containers/service/ServiceSingle";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const Page = ({ params }: { params: { service_name: string } }) => {
  const { service_name } = params;

  // Determining the title based on the service_name
  let title;
  switch (service_name) {
    case "web-development":
      title = "Web Development";
      break;
    case "app-development":
      title = "App Development";
      break;
    case "ui-ux-design":
      title = "UI/UX Design";
      break;
    case "software-testing":
      title = "Software Testing and QA";
      break;
    case "devops":
      title = "DevOps Solutions";
      break;
    case "game-development":
      title = "Game Development";
      break;
    default:
      title = "Service";
  }

  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title={title} isService={true} />
      <ServiceSingle />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default Page;
