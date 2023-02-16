import ReactFullpage from "@fullpage/react-fullpage";
import "./Fullpage.scss";
import SectionOne from "./SectionOne";

interface PageT {
  open: () => void;
}

const anchors = ["notice", "qna", "inquiry"];

const Fullpage = ({ open }: PageT) => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    onLeave={(origin, destination, direction) => {}}
    render={({ state }) => {
      return (
        <>
          <div className="main-page">
            <div className="section section-1">
              <SectionOne open={open} />
            </div>
            <div className="section section-2">
              <div>Second</div>
            </div>
            <div className="section section-3">
              <div>Third</div>
            </div>
          </div>
        </>
      );
    }}
  />
);
export default Fullpage;
