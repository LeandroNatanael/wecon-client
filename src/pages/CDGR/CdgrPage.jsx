import { CDGRProvider } from "../../contexts/CDGRContext.jsx";
import CdgrComponent from "../../components/CDGR Components/CdgrComponent.jsx";

const Cdgr = () => {
  return (
    <CDGRProvider>
      <CdgrComponent />
    </CDGRProvider>
  );
};

export default Cdgr;
