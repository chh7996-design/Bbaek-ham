빽햄 고객용 모바일 웹앱

구성
- index.html: 고객용 웹앱 화면
- styles.css: 모바일 중심 디자인
- app.js: 차량/요금 선택, 앱 설치 안내
- manifest.webmanifest + sw.js: 홈 화면 설치 및 기본 오프라인 캐시
- assets/: 메인 세차장 이미지
- icons/: 앱 아이콘

Vercel 배포 (가장 쉬운 방법: GitHub 연결)
1. 이 ZIP 압축을 풀고 전체 파일을 GitHub 저장소의 최상위(root)에 올립니다.
   index.html, package.json이 아니라 index.html이 바로 보이는 구조여야 합니다.
2. vercel.com에 로그인하고 Add New → Project를 선택합니다.
3. GitHub 저장소를 Import 합니다.
4. Framework Preset은 Other를 선택합니다.
5. Build Command와 Output Directory는 비워 두거나 기본값을 사용합니다. 이 프로젝트는 정적 HTML이라 빌드가 필요 없습니다.
6. Deploy를 누릅니다.
7. 배포 성공 후 Vercel이 제공하는 https://프로젝트이름.vercel.app 주소로 접속합니다.

Vercel 대시보드에서 Domains에 원하는 도메인을 추가할 수도 있습니다.
배포 후 index.html과 assets 폴더가 같은 프로젝트 안에 있는지 확인하세요.

휴대폰 홈 화면에 추가
- iPhone: Safari로 배포 주소 접속 → 공유 버튼 → '홈 화면에 추가' → 추가
- Android: Chrome으로 주소 접속 → 메뉴(⋮) → '앱 설치' 또는 '홈 화면에 추가'
HTTPS 배포 주소에서 설치 기능이 동작합니다.

수정 사항
- 전화번호는 요청하신 010-5814-7796으로 연결했습니다.
- 제공된 홍보 이미지에 보이는 가격과 옵션을 입력했습니다.
- - 요금제 및 옵션 가격은 게시 전 최종 확인해 주세요.
