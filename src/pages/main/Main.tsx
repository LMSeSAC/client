import ReactFullpage from "@fullpage/react-fullpage";
import "./Main.scss";

const anchors = ["firstPage", "secondPage", "thirdPage"];

const Main = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state }) => {
      console.log("render prop change", state);

      return (
        <div className="main-page">
          <div className="section">
            <div>First</div>
          </div>
          <div className="section">
            <div>Second</div>
          </div>
          <div className="section">
            <div>Third</div>
          </div>
        </div>
      );
    }}
  />
);
export default Main;
