# WEEBUR 프론트엔드 과제

## 실행 방법

- 커맨드 창에 `pnpm dev` 입력 후 `http://localhost:3000/`으로 접속

## 작업 사항

- 상품 목록 페이지, 검색 페이지 구현
- form 기반 검색어 필터링

  - 새로고침했을 때 필터 유지
  - 검색 페이지에서 뒤로가기 버튼
    - 이전 페이지로 이동했을 때 쿼리 파라미터가 UI에 반영되지 않는 이슈 해결(컴포넌트 키)

- 별점 내림차순 정렬 활성화 기능
- 페이지 접속했을 때 미들웨어에서 쿠키 확인하여 View 방식 결정
- 페이지네이션
- Prefetch

## 프로젝트 구조

Feature Sliced Design을 도입함

- /app

  - 페이지 라우팅
  - 프로바이더 세팅

- /entities

  - Tanstack Query에 전달할 수 있는 상품 목록 쿼리 함수
  - 상품 표시 컴포넌트

- /features

  - /products

    - 상품 목록 쿼리 키
    - 상품 목록 API
    - 상품 목록 관련 설정 값
    - 상품 목록 관련 타입

  - /search

    - 검색 컴포넌트

  - /utils
    - 다음 데이터를 가져올 수 있는 컴포넌트
    - 데이터가 없을 때 표시되는 컴포넌트
    - 다음 데이터가 없을 때 표시되는 컴포넌트
    - 데이터를 미리 호출할 수 있는 컴포넌트

- /shared

  - 여러 모듈에 공유될 수 있는 함수
  - 공용 컴포넌트
  - 지연 로딩할 수 있는 이미지 컴포넌트

- /widgets

  - 상품 목록을 표시하는 컴포넌트
