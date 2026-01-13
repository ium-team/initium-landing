# Initium

[🇺🇸 English](./README.md)

모던 SaaS 랜딩 페이지 템플릿 - React + TypeScript + Vite

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)
![Three.js](https://img.shields.io/badge/Three.js-0.182-000000?logo=three.js)

## ✨ 주요 기능

- 🎨 **모던 UI/UX** - Linear, Vercel, Notion에서 영감받은 클린한 디자인
- 🧊 **3D 배경** - Three.js + React Three Fiber를 활용한 인터랙티브 배경
- 🎬 **부드러운 애니메이션** - Framer Motion 기반 스크롤 & 호버 애니메이션
- 🌐 **다국어 지원** - 한국어/영어 전환 가능
- 📱 **완전 반응형** - 모바일, 태블릿, 데스크톱 지원
- ⚡ **빠른 개발 환경** - Vite HMR로 즉각적인 변경 반영

## 🛠️ 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | React 19 |
| 언어 | TypeScript |
| 빌드 도구 | Vite |
| 3D 그래픽 | Three.js, React Three Fiber, Drei |
| 애니메이션 | Framer Motion |
| 아이콘 | Lucide React |
| 라우팅 | React Router DOM |

## 📁 프로젝트 구조

```
├── components/
│   ├── Sections/          # 페이지 섹션 컴포넌트
│   │   ├── Header.tsx     # 네비게이션 헤더
│   │   ├── Hero.tsx       # 히어로 섹션
│   │   ├── Features.tsx   # 기능 소개
│   │   ├── Pricing.tsx    # 가격 정책
│   │   ├── FAQ.tsx        # 자주 묻는 질문
│   │   └── Footer.tsx     # 푸터
│   ├── Three/             # 3D 관련 컴포넌트
│   │   └── BackgroundScene.tsx
│   └── UI/                # 재사용 UI 컴포넌트
│       └── Button.tsx
├── contexts/
│   └── LanguageContext.tsx  # 다국어 지원
├── public/
│   └── logo.svg           # 로고 파일
├── App.tsx                # 메인 앱 컴포넌트
├── index.tsx              # 엔트리 포인트
└── types.ts               # 타입 정의
```

## 🚀 시작하기

### 사전 요구사항

- Node.js 18+ 
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (기본: http://localhost:3000) |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드된 결과물 미리보기 |

## 🎨 커스터마이징

### 로고 변경
`public/logo.svg` 파일을 교체하세요.

### 색상 테마
Tailwind CSS 설정에서 `brand` 색상을 수정하세요.

### 텍스트 수정
`contexts/LanguageContext.tsx`에서 모든 텍스트를 한국어/영어로 관리합니다.

## 📄 라이선스

MIT License

---

Made with ❤️ using React + Vite
