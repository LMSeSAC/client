import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="d-flex">
              <Link to="/">
                <img src="/img/main/logo.png" alt="logo" />
              </Link>
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
                <Link to="/user/login">
                  <div className="user-icon">
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
