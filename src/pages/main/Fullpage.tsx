import ReactFullpage from "@fullpage/react-fullpage";
import "./Fullpage.scss";

const anchors = ["firstPage", "secondPage", "thirdPage"];

const Fullpage = () => (
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
              <div>First</div>
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
