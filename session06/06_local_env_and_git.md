# 3주차 세션 6: 개발 환경 설정

## 🎯 학습 목표
- 본격 개발 환경 구축
- React/Next.js 학습을 위한 기본 개발 환경을 설정하고 Git 및 bash 사용법 숙지.
- node.js 이해와 npm 사용법

---

### 📝 지난 세션 복습 / 과제 확인
- Git에 대해서 조사 발표
- https://codesandbox.io/p/sandbox/05-product-list-xd54nr

---

## 1. Node.js
- JavaScript는 1995년에 넷스케이프(Netscape) 브라우저용으로 만들어짐.
- 웹페이지에서:
  - 버튼 클릭 이벤트 처리
  - 입력값 확인 (유효성 검사)
  - 애니메이션 등 동적인 효과 주는 용도였죠.
- 즉, 브라우저에서만 동작했음. 서버에서는 쓸 수 없었고, 서버는 PHP, Java, Python 같은 언어들이 사용됨.
- Node.js는 2009년 Chrome의 V8 JavaScript 엔진을 기반으로 만들어진 서버 사이드 JavaScript runtime (실행 환경).

---

## 2. Setting Up the Development Environment
### Install VSCode
- https://code.visualstudio.com/download
### Node.js, npm/yarn, VS Code 설치 및 설정
1. **Node.js 설치**
   - [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전 다운로드 및 설치
   - `node -v` 및 `npm -v`로 설치 확인

2. **VS Code 설치 및 기본 설정**
   - [VS Code 공식 사이트](https://code.visualstudio.com/)에서 다운로드 및 설치
   - 확장 프로그램 추천: ESLint, Prettier, GitLens
   - 기본 설정: 테마, 폰트 크기, 자동 저장 활성화
### 🚀 VS Code 단축키 & 확장 프로그램 for TypeScript + Next.js

#### 🔧 유용한 단축키

| 기능                            | 단축키 (Windows)      | 설명 |
|---------------------------------|------------------------|------|
| 파일 열기                       | `Ctrl + P`            | 파일 이름으로 빠르게 이동 |
| 코드 내 검색                    | `Ctrl + F`            | 현재 파일 내에서 텍스트 검색 |
| 전체 프로젝트 검색              | `Ctrl + Shift + F`    | 전체 폴더 내에서 텍스트 검색 |
| 명령어 팔레트                   | `Ctrl + Shift + P`    | 모든 명령어 검색 및 실행 |
| 터미널 열기                     | `Ctrl + \``           | 내장 터미널 열기/닫기 |
| 코드 자동 정렬 (Prettier)       | `Shift + Alt + F`     | 코드 포맷 정리 |
| 빠른 수정 제안 (Auto Fix)       | `Ctrl + .`            | 오류/경고 해결 팁 보기 |
| 타입 선언으로 이동              | `F12` or `Ctrl + 클릭`| 함수/타입 정의로 점프 |
| 이전 위치로 돌아가기            | `Alt + ←`             | 정의 위치에서 돌아오기 |
| 여러 커서 선택                  | `Ctrl + D` or `Alt + Click` | 같은 단어 여러 개 동시에 편집 |
| 전체 선택 단어 편집             | `Ctrl + Shift + L`    | 선택된 단어 전체 수정 |
| 줄 복사                         | `Shift + Alt + ↓ / ↑` | 현재 줄 복사 |
| 줄 이동                         | `Alt + ↓ / ↑`         | 줄 위/아래로 이동 |
| 줄 삭제                         | `Ctrl + Shift + K`    | 현재 줄 삭제 |

#### 🧩 추천 확장 프로그램

| 확장 프로그램                  | 설명 |
|-------------------------------|------|
| **ESLint**                    | 코드 스타일 검사 및 자동 수정 |
| **Prettier - Code Formatter** | 코드 포맷 정리 자동화 |
| **Tailwind CSS IntelliSense** | Tailwind 클래스 자동완성 & 미리보기 |
| **TypeScript Hero / Essentials** | 자동 import, 타입 점프 등 TypeScript 편의 기능 |
| **Path Intellisense**         | 파일 경로 자동완성 지원 |
| **React Developer Tools**     | React 구조 시각화 (브라우저 확장 포함) |
| **Next.js Snippets**          | `rsc`, `nfc` 등 코드 자동완성 스니펫 |

#### ⚙️ VS Code 설정 예시 (`.vscode/settings.json`)

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

3. **React 개발을 위한 프로젝트 생성 테스트**
   ```sh
   npx create-react-app my-app
   cd my-app
   npm start
   ```
   - 프로젝트가 정상적으로 실행되는지 확인

### ● Git 설치 및 GitHub 계정 생성
1. **Git 설치**
   - [Git 공식 사이트](https://git-scm.com/)에서 다운로드 및 설치
   - `git --version`으로 설치 확인

2. **GitHub 계정 생성 및 SSH Key 등록**
   - [GitHub](https://github.com/) 가입
   - SSH Key 생성 (`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`)
   - GitHub에 SSH Key 등록
   - 연결 확인: `ssh -T git@github.com`

3. **Git 기본 설정**
   ```sh
   git config --global user.name "Your Name"
   git config --global user.email "your_email@example.com"
   ```

---

## 3. Introduction to Git & GitHub
### ● git init, git add, git commit, git push 명령어 실습
1. **새로운 Git 저장소 생성 및 초기화**
   ```bash
   mkdir my-project
   cd my-project
   git init
   ```

2. **파일 추가 및 커밋**
   ```bash
   echo "# My Project" > README.md
   git add README.md
   git commit -m "First commit"
   ```

3. **GitHub 원격 저장소 연결 및 코드 업로드**
   ```bash
   git remote add origin https://github.com/your-username/my-project.git
   git branch -M main
   git push -u origin main
   ```
   - GitHub에서 저장소가 정상적으로 생성되었는지 확인

4. **기본적인 Git 명령어 연습**
   ```bash
   git status
   git log
   git pull origin main
   ```

5. **Git 브랜치 실습**
   ```bash
   git checkout -b feature-branch
   git push -u origin feature-branch
   ```

---

## 4. 📘 Git 명령어 정리
1. `git init`
- 로컬에 새 Git 저장소를 생성.
- 기존 프로젝트 폴더를 Git으로 버전 관리하려고 할 때 사용.

```bash
git init
```

---

2. `git clone`
- 원격 저장소(GitHub 등)를 복제하여 로컬 저장소를 생성.

```bash
git clone <저장소_URL>
```

---

3. `git pull`
- 원격 저장소에서 최신 변경사항을 가져오고 현재 브랜치에 병합.
- 내부적으로 `git fetch + git merge`를 수행.

```bash
git pull origin main
```

---

4. `git add`
- 변경된 파일을 **스테이징 영역**에 추가.
- 커밋 전에 어떤 파일을 포함할지 지정 가능.

```bash
git add <파일명>
git add .   # 모든 변경 파일 추가
```

---

5. `git commit`
- 스테이징된 파일을 하나의 스냅샷으로 **로컬 저장소에 저장**.

```bash
git commit -m "메시지 입력"
```

---

6. `git push`
- 로컬 저장소의 커밋을 **원격 저장소로 업로드**.

```bash
git push origin main
```

---

7. `git fetch`
- 원격 저장소의 변경사항을 가져오지만 **병합은 하지 않음**.
- 이후 `merge` 또는 `rebase`로 반영 가능.

```bash
git fetch origin
```

---

8. `git merge`
- 다른 브랜치의 변경사항을 현재 브랜치에 **병합**.

```bash
git merge <브랜치명>
```

---

9. `git rebase`
- 커밋 기록을 정리하고 싶을 때 사용.
- 한 브랜치의 시작점을 다른 브랜치의 끝으로 **재배치**.

```bash
git rebase <브랜치명>
```

---

10. `git branch`
- 브랜치 목록 보기, 생성, 삭제 등이 가능.

```bash
git branch            # 목록 확인
git branch <브랜치명>  # 새 브랜치 생성
git branch -d <브랜치명>  # 브랜치 삭제
```

---

11. `git stash`
- 현재 작업 중인 변경사항을 **임시 저장**하고 작업 디렉토리를 비움.

```bash
git stash            # 저장
git stash list       # 목록 확인
git stash apply      # 복원
```

---

12. `git config`
- Git 사용자 정보 및 환경설정을 관리.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --list
```

---

## 5. 마무리

### ✅ 오늘 배운 내용 정리
- node.js, npm 이해
- Git과 Bash 이해
- 로컬 개발 환경 구축

### ✅ 과제
- React와 Next.js에 대해서 조사해오기.
- Git에 대해서 완벽 이해해오기.

### ✅ 알림
- 다음주부터는 React를 이용한 본격 앱 개발을 공부합니다. 앞으로는 더 확실한 개념 이해와 연습이 필요합니다.