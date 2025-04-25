# 코딩 부트캠프 1주차 1세션: HTML & CSS Basics

## 🎯 학습 목표
- HTML과 CSS의 역할과 차이점 이해하기
- 기본적인 HTML 태그 사용법 익히기
- CSS를 이용한 스타일링 기초 배우기
- 실습을 통해 간단한 웹 페이지 만들기

---

## 1. 오프닝
### (1) Curriculum run through
- Syllabus

---

## 2. HTML 기초
### ✅ HTML이란?
- HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어.
- 웹사이트는 HTML 문서를 브라우저가 해석하여 화면에 표시하는 방식으로 동작.

### ✅ HTML 기본 구조
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="이 페이지는 XXX의 HTML로 만든 첫 웹페이지 입니다.">
    <meta name="keywords" content="HTML, 웹개발, 튜토리얼">
    <meta name="author" content="Sung Wook Yoo">
    <title>내 첫 번째 웹페이지</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>이것은 HTML을 사용하여 만든 웹페이지입니다.</p>
</body>
</html>
```

### ✅ HTML 구성
**Next.js로 앱을 만들게 되면 HTML 기본 태그들을 직접 작성하진 않지만, 다른 방식으로 수정하거나 관리할 수 있음. 예를 들어, `<title>`이나 `<meta>` 태그는 next/head를 통해 설정**
- `<!DOCTYPE html>` : 브라우저에게 이 문서가 최신 HTML5 문법을 따르고 있다는 걸 알려줌으로써, 올바른 방식으로 해석하고 렌더링
- `<html lang="ko">` : 문서의 최상위 루트 요소이며, lang="ko"는 이 HTML 문서의 기본 언어가 한국어임을 의미. 브라우저나 스크린 리더 같은 접근성 도구들이 적절한 언어 설정을 할 수 있도록 도와줌
- `<head>` : HTML 문서의 메타데이터(데이터에 대한 정보)를 담는 영역. 문서의 정보, 스타일, 문자 인코딩 등을 정의하며, 브라우저에는 직접적으로 보이지 않음.
- `<meta charset="UTF-8">` : 문자 인코딩 방식이 UTF-8임을 선언. 한글 등 다양한 언어의 문자가 깨지지 않고 제대로 표시되도록 함.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` : 반응형 웹을 위한 설정. 모바일 기기에서도 화면이 적절하게 보이도록 하기 위해, 화면 너비를 디바이스의 너비에 맞추고 초기 확대 비율을 1로 설정.
- `name="description" & name="keywords"` : SEO를 위한 설명과 검색어
- `<title>HTML & CSS 연습</title>` : 브라우저 탭에 표시되는 문서의 제목
- `<link rel="stylesheet" href="styles.css">` : 외부 CSS 파일(`styles.css`)을 문서에 연결

### ✅ 주요 HTML Tag 소개
- 제목 태그: `<h1>` ~ `<h6>`
- 문단 태그: `<p>`
- 링크 태그: `<a href="https://www.google.com">구글</a>`
- 이미지 태그: `<img src="image.jpg" alt="설명">`
- 목록 태그: `<ul>`, `<ol>`, `<li>`
- 테이블 태그: `<table>`, `<tr>`, `<td>`
- 입력 폼 태그: `<input>`, `<textarea>`, `<button>`

### ✅ 주요 HTML Attributes 소개
- `id`: 요소를 **고유**하게 식별할 때 사용
```html
<h1 id="title">Welcome!</h1>
```
- `class`: 공통 스타일이나 기능 적용할 때 사용
```html
 <p class="center-text"> Hi, welcome to my page.</p>
```
- `href`: 링크의 목적지를 지정
```html
<a href="https://www.google.com">Go to Google</a>
```
- `src`: 이미지, 오디오, 비디오 등 파일 경로 지정
```html
<img src="cat.jpg" alt="고양이 사진">
```
- `type`: input, button 등에서 요소의 타입을 지정
```html
<input type="text">
<button type="submit">제출</button>
```

### ✅ 실습: Google Slide를 이용해서 HTML box 구조 파악하기
- structure.jpg를 보여주고 어떤 식으로 tag들이 구성되어 있는지 파악하기
- Group 별로 Google Slide를 이용해 사각형 도형 만들기로 어떤 식으로 구성 되어있나 구현해보기

---

## 3. CSS 기초
### ✅ CSS란?
- CSS(Cascading Style Sheets)는 HTML 요소의 스타일(색상, 크기, 레이아웃 등)을 지정하는 언어.
- HTML이 웹페이지의 뼈라면, CSS는 피부, 옷을 담당. (JS 는 근육)

### ✅ CSS 적용 방법
1. **인라인 스타일**
```html
<p style="color: blue;">이 문장은 파란색입니다.</p>
```
2. **내부 스타일**
```html
<style>
  p { color: blue; }
</style>
```
3. **외부 스타일**
```html
<link rel="stylesheet" href="styles.css">
```

### ✅ 기본적인 CSS 속성
- 색상 변경: `color: red;`
- 배경색 변경: `background-color: yellow;`
- 글꼴 스타일: `font-size: 20px;`, `font-weight: bold;`
- 여백 조정: `margin: 10px;`, `padding: 5px;`
- 테두리 추가: `border: 1px solid black;`

### ✅ Flex-box
- CSS에서 레이아웃을 쉽게 만들 수 있게 해주는 도구
- **front-end 개발에서 정말 많이 쓰임!**
- 특히 가로 정렬(수평 정렬), 세로 정렬(수직 정렬), 가운데 정렬 등에 매우 유용함
```css
  .container {
    display: flex;
  }
```
- `display: flex;`를 사용하면, 해당 요소의 직속 자식 요소들이 자동으로 가로 정렬됨.

| 속성                | 설명                                                                       | 노트                                                    |
|-------------------|--------------------------------------------------------------------------|-------------------------------------------------------|
| `justify-content`   | 주 축(가로 방향) 정렬 (예: `center`, `space-between`, `space-around`, `flex-end`) | default는 가로축이지만, 주축 ≠ 가로축. `flex-direction`에 달라질 수 있음 |
| `align-items`     | 교차 축(세로 방향) 정렬 (예: `center`, `stretch`, `flex-end`)                      | default는 세로축                                          |
| `flex-direction `   | 정렬 방향 설정 (예: `row`, `column`)                                                | default: `row`. `column`으로 설정시 주 축이 세로축이 됨            |
| `gap`	              | 자식 요소 사이 간격 설정                                                           | flex-box 안에 있는 자식 요소들 간의 간격                           |
---
- flex-box 예시
```html
  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
```
```css
.container {
  /* 부모 요소에 display: flex 적용 */
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #f0f0f0;
  gap: 10px;
}

.box {
  width: 50px;
  height: 50px;
  background-color: #42a5f5;
  color: white;
  text-align: center;
  line-height: 50px;
}

```

## 4. HTML + CSS 실습
### ✅ 간단한 웹페이지 만들기
01_HTML&CSS_activity.html 참조
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML & CSS 연습</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>내 웹사이트</h1>
    </header>
    <main>
        <p>이것은 첫 번째 웹페이지입니다. HTML과 CSS를 배워서 만든 사이트입니다.</p>
        <a href="https://www.google.com">구글로 이동</a>
    </main>
</body>
</html>
```

```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #e3f2fd;
    text-align: center;
}

h1 {
    color: #0277bd;
}

p {
    font-size: 18px;
}
```

---

## 5. 마무리
### ✅ 오늘 배운 내용 정리
- HTML의 역할과 기본 태그
- CSS를 활용한 스타일 적용 방법
- HTML + CSS를 사용하여 간단한 웹페이지 제작

### ✅ 과제
- 자신을 소개하는 웹페이지를 HTML과 CSS를 활용하여 만들어보기
  - 이름, 주기도문 포함
  - 스타일 적용 (배경색, 글꼴 크기 조정)
- 더 도전해보고 싶다면?
  - https://flexboxfroggy.com/