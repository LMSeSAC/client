import "./SectionOne.scss";

export default function SectionOne() {
  return (
    <div className="section-one">
      <div className="container">
        <div className="d-flex">
          <img src="/img/main/main_img.png" alt="main-img" />
          <div>
            <h1>
              LMSeSAC<span>은</span>
            </h1>
            <h3>
              청년취업사관학교 교육생분들만을 위한 <br /> Learning Management
              System(LMS) 입니다.
            </h3>
            <button className="guide">이용 가이드</button>
            <a href="/classroom">
              <button className="classroom">강의실 입장</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
