import "./Header.scss";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="d-flex">
              <a href="/">
                <img src="/img/main/logo.png" alt="logo" />
              </a>
              <div>
                <a href="#notice">
                  <span>공지사항</span>
                </a>
                <a href="#qna">
                  <span>질문게시판</span>
                </a>
                <a href="#inquiry">
                  <span>건의게시판</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
