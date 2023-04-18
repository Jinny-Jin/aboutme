import "./Main.css";

//위스타 배너
function Nav() {
  return (
    <nav>
      <div class="insta">
        <i class="fa-brands fa-instagram fa-xl"></i>
        <span>Westagram</span>
      </div>
      <div class="search">
        <input class="searching" type="text" placeholder="검색" />
        <i class="fa-solid fa-magnifying-glass fa-xs"></i>
      </div>
      <div class="icons">
        <i class="fa-regular fa-compass fa-xl"></i>
        <i class="fa-regular fa-heart fa-xl"></i>
        <i class="fa-regular fa-user fa-xl"></i>
      </div>
    </nav>
  );
}

//위스타 왼쪽
//왼쪽 피드 내 프로필
function MyProfile() {
  return (
    <div class="me-profile">
      <img alt="내 프로필 이미지" src="/images/나.jpg" />
      <div class="me-Id">
        <span class="me-name">al_zar_takkarsen</span>
        <span class="me-desc">🫠</span>
      </div>
      <div class="dots"></div>
    </div>
  );
}

//피드 이미지
function FeedImage() {
  return <img alt="인서타 피드 이미지" src="/images/싸콘.jpg" />;
}

//피드 밑 아이콘들
function BottomIcon() {
  return (
    <div class="bottom-icon">
      <button id="icon-button">
        <img
          id="좋아요"
          alt="하트 아이콘"
          class="heart-icon"
          src="/images/heart.png"
        />
      </button>
      <img alt="댓글 아이콘" class="comment" src="/images/comments-2.png" />
      <img class="upload" alt="업로드 아이콘" src="/images/upload.png" />
      <img alt="스크랩 아이콘" class="scrap" src="/images/스크랩.png" />
    </div>
  );
}

//~가 좋아합니다
function WhoLike() {
  return (
    <div class="likey">
      <img alt="내 프로필 이미지" src="/images/나.jpg" />
      <span class="like-comment">
        <span class="bold">al_zar_takkarsen</span>님
        <span class="bold">외 10명</span>이 좋아합니다
      </span>
    </div>
  );
}

//댓글 들어갈 공간
function FeedComment() {
  return (
    <div class="fid-comment">
      <span class="bold">al_zar_takkarsen</span> 우 나 핫걸 좋은 거 보고 갈래?
      💦
      <div class="comment1">
        <span class="bold">_sentiers</span> 라인이 예술이네요
        <button id="댓글좋아요" class="comment-heart">
          <img alt="좋아요 하트" class="small-heart" src="/images/heart.png" />
        </button>
      </div>
      <div class="time">55분전</div>
    </div>
  );
}

//댓글 쓰는 공간
function CommentBox() {
  return (
    <div class="commentary">
      <input id="댓글창" type="text" placeholder="댓글 달기..." />
      <button id="게시">게시</button>
    </div>
  );
}

//위스타 오른쪽
//위스타 오른쪽 내 프로필
function RightProfile() {
  return (
    <div class="right-me">
      <img alt="내 프로필 이미지" src="/images/나.jpg" />
      <span class="me-name">al_zar_takkarsen</span>
      <span class="me-desc2">🫠</span>
    </div>
  );
}

//스토리 박스 위쪽 글씨
function StoryTop() {
  return (
    <div class="story-top">
      <span class="right-top">스토리</span>
      <button class="모두_보기">모두 보기</button>
    </div>
  );
}

//스토리 박스 내 사람들
function StoryPeople() {
  return (
    <div class="story-people">
      <ul>
        <li id="story1">
          <img alt="째롱이 프로필 이미지" src="/images/째로이.jpg" />
          <span class="profile">jrong._</span>
          <span class="story-time">10분 전</span>
        </li>
        <li id="story2">
          <img alt="윤지 프로필 이미지" src="/images/윤디.jpg" />
          <span class="profile">yuuunx</span>
          <span class="story-time">2시간 전</span>
        </li>
        <li id="story3">
          <img alt="노찌롱 프로필 이미지" src="/images/노홍철.jpg" />
          <span class="profile">rohongchul</span>
          <span class="story-time">11시간 전</span>
        </li>
        <li id="story4">
          <img alt="예디 프로필 이미지" src="/images/조지.jpg" />
          <span class="profile">jeo.ji_</span>
          <span class="story-time">23시간 전</span>
        </li>
      </ul>
    </div>
  );
}

//추천 피드 위쪽 글씨
function RecommendTop() {
  return (
    <div class="recommend-top">
      <span class="right-top">회원님을 위한 추천</span>
      <button class="모두_보기">모두 보기</button>
    </div>
  );
}

//추천 피드 사람들
function RecommendList() {
  return (
    <div class="recommend-list">
      <ul>
        <li id="recommend1">
          <img alt="위코드 프로필 이미지" src="/images/wecode.jpg" />
          <span class="profile">wecode_bootcamp</span>
          <span class="recommend-follow">_legend_a님 외 2명이...</span>
          <button class="follow">팔로우</button>
        </li>
        <li id="recommend2">
          <img alt="하품 프로필 이미지" src="/images/하품.jpg" />
          <span class="profile">hapoom_film</span>
          <span class="recommend-follow">seol_seol_92님 외 3명...</span>
          <button class="follow">팔로우</button>
        </li>
        <li id="recommend3">
          <img alt="여행 프로필 이미지" src="/images/여행을 떠나요.jpg" />
          <span class="profile">pirt._.trip</span>
          <span class="recommend-follow">jimmylee1220님 외 1...</span>
          <button class="follow">팔로우</button>
        </li>
      </ul>
    </div>
  );
}

//Footer
function Footer() {
  return (
    <div class="footer">
      Instagram 정보 . 지원 . 홍보 센터 . API . <br />
      채용 정보 . 개인정보처리방침 . 약관 . <br />
      디렉터리 . 프로필 . 해시태그 . 언어
      <p>&copy; 2023 INSTAGRAM</p>
    </div>
  );
}

const Main = () => {
  return (
    <>
      <Nav></Nav>
      <main>
        <div class="feeds">
          <article>
            <div class="me-fid">
              <MyProfile></MyProfile>
              <FeedImage></FeedImage>
              <BottomIcon></BottomIcon>
              <WhoLike></WhoLike>
              <FeedComment></FeedComment>
              <CommentBox></CommentBox>
            </div>
          </article>
        </div>
        <div class="main-right">
          <RightProfile></RightProfile>
          <div class="story-feed">
            <StoryTop></StoryTop>
            <StoryPeople></StoryPeople>
          </div>

          <div class="recommend-feed">
            <RecommendTop></RecommendTop>
            <RecommendList></RecommendList>
          </div>
          <Footer></Footer>
        </div>
      </main>
    </>
  );
};

export default Main;
