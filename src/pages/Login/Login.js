import "./Login.css";

const Login = () => {
  return (
    <>
      <div class="login-box">
        <div class="container">
          <div class="westagram">Westagram</div>
          <div class="inputs">
            <input
              id="Id"
              type="text"
              placeholder="  전화번호, 사용자 이름 또는 이메일"
            />
            <input id="Password" type="password" placeholder="  비밀번호" />
            <button id="login-button" class="no-login">
              로그인
            </button>
          </div>
        </div>
        <footer>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </footer>
      </div>
    </>
  );
};

export default Login;
