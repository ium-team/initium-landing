import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any; // Using any for dictionary flexibility, but could be strictly typed
}

const translations = {
  en: {
    header: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      signin: "Sign In",
      getStarted: "Get Started"
    },
    hero: {
      badge: "AI Architect V1.0 Live",
      titleLine1: "The Perfect Start",
      titleLine2: "For Development",
      description: "Initium is the AI-powered all-in-one architecture design tool. Synchronize specs, ERDs, and APIs in real-time with your intelligent partner.",
      ctaPrimary: "Start for Free",
      ctaSecondary: "Watch Demo",
      uiUrl: "initium.ai/project/alpha",
      uiTag: "Architecture Visualization"
    },
    features: {
      heading: "Built for the",
      headingHighlight: "Future of Dev",
      subHeading: "Stop juggling disconnected tools. Initium brings your entire planning phase into a single, intelligent ecosystem.",
      list: [
        {
          title: "Organic Synchronization",
          description: "Change a feature spec, and watch your ERD and API documentation update instantly. No more stale docs."
        },
        {
          title: "Real-time Collaboration",
          description: "Work together like in Google Docs. See cursors, comments, and edits as they happen on your architecture diagrams."
        },
        {
          title: "AI Architect Agent",
          description: "Not just text generation. Our AI understands structure, analyzes impact, and proposes intelligent Diff changes."
        },
        {
          title: "Automated Migration",
          description: "Generate migration scripts automatically based on schema changes. Keep your database in sync with your vision."
        }
      ],
      showcaseTitle: "From Idea to",
      showcaseTitleHighlight: "Execution in Seconds",
      showcaseDesc: "Describe your feature in plain English. Initium's AI analyzes the requirement, updates the database schema, modifies the API endpoints, and notifies the team of the impact.",
      showcaseList: [
        "Natural Language to ERD Conversion",
        "Auto-generation of Swagger/OpenAPI Specs",
        "Impact Analysis Reports"
      ],
      uiUserTable: "USER TABLE",
      uiApi: "API: POST /users"
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Start for free, upgrade as you grow.",
      mostPopular: "Most Popular",
      month: "/month",
      plans: [
        {
          name: "Starter",
          description: "Perfect for solo developers and hobby projects.",
          features: ["1 Project", "Basic AI Suggestions", "Export to PDF", "Community Support"],
          cta: "Get Started"
        },
        {
          name: "Pro",
          description: "For professional freelancers and small teams.",
          features: ["Unlimited Projects", "Advanced AI Architect", "Real-time Collaboration", "GitHub Integration", "Priority Support"],
          cta: "Get Started"
        },
        {
          name: "Team",
          description: "For scaling startups and enterprise needs.",
          features: ["Everything in Pro", "SSO & Audit Logs", "Private Cloud Deployment", "Dedicated Success Manager", "Custom AI Training"],
          cta: "Contact Sales"
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How does the 'Organic Synchronization' work?",
          answer: "Initium uses an internal dependency graph. When you modify a requirement in text, our AI identifies the relevant entities in your ERD and endpoints in your API, effectively 'refactoring' your architecture document automatically."
        },
        {
          question: "Can I export my designs?",
          answer: "Yes! You can export ERDs to SQL, API specs to Swagger/OpenAPI (JSON/YAML), and documentation to Markdown or PDF."
        },
        {
          question: "Is the AI code generation production-ready?",
          answer: "Our AI focuses on architecture and scaffolding. We generate high-quality boilerplate code, migration scripts, and type definitions, but business logic implementation is up to your developers."
        },
        {
          question: "Does it support real-time collaboration?",
          answer: "Absolutely. Multiple team members can edit the same project simultaneously. You can see who is editing what component in real-time."
        }
      ]
    },
    footer: {
      tagline: "The AI-powered workspace for modern software architecture. Start building the future today.",
      product: "Product",
      company: "Company",
      links: {
        changelog: "Changelog",
        docs: "Docs",
        about: "About",
        careers: "Careers",
        blog: "Blog",
        contact: "Contact"
      },
      rights: "Initium Inc. All rights reserved."
    }
  },
  ko: {
    header: {
      home: "홈",
      features: "기능",
      pricing: "요금제",
      faq: "FAQ",
      signin: "로그인",
      getStarted: "무료 시작"
    },
    hero: {
      badge: "AI 아키텍트 V1.0 출시",
      titleLine1: "개발의 시작을",
      titleLine2: "완벽하게 설계하세요",
      description: "Initium은 기획자, 개발자, 창업가를 위한 AI 기반 올인원 설계 도구입니다. 기능 명세, ERD, API가 실시간으로 완벽하게 동기화됩니다.",
      ctaPrimary: "무료로 시작하기",
      ctaSecondary: "데모 영상 보기",
      uiUrl: "initium.ai/project/alpha",
      uiTag: "아키텍처 시각화"
    },
    features: {
      heading: "미래 지향적",
      headingHighlight: "개발 프로세스",
      subHeading: "파편화된 도구들은 이제 그만. Initium은 기획부터 설계까지 모든 과정을 하나의 지능형 생태계로 통합합니다.",
      list: [
        {
          title: "유기적 동기화",
          description: "기능 명세를 수정하면 ERD와 API 문서가 즉시 자동으로 업데이트됩니다. 더 이상 낡은 문서는 없습니다."
        },
        {
          title: "실시간 협업",
          description: "구글 닥스처럼 함께 작업하세요. 팀원들의 커서, 댓글, 수정 사항이 아키텍처 다이어그램 위에 실시간으로 표시됩니다."
        },
        {
          title: "AI 아키텍트 에이전트",
          description: "단순한 텍스트 생성이 아닙니다. 구조적 영향도를 분석하고 '변경 제안(Diff)'을 던지는 지능형 파트너입니다."
        },
        {
          title: "자동 마이그레이션",
          description: "스키마 변경에 따른 마이그레이션 스크립트를 자동으로 생성합니다. 데이터베이스를 항상 최신 상태로 유지하세요."
        }
      ],
      showcaseTitle: "아이디어에서",
      showcaseTitleHighlight: "실행까지 단 몇 초",
      showcaseDesc: "자연어로 기능을 설명해보세요. Initium의 AI가 요구사항을 분석하여 DB 스키마를 업데이트하고, API 엔드포인트를 수정하며, 팀에게 영향도를 알립니다.",
      showcaseList: [
        "자연어 -> ERD 자동 변환",
        "Swagger/OpenAPI 명세 자동 생성",
        "변경 영향도 분석 리포트"
      ],
      uiUserTable: "사용자 테이블",
      uiApi: "API: POST /users"
    },
    pricing: {
      title: "간결하고 투명한 요금제",
      subtitle: "무료로 시작하고, 성장함에 따라 업그레이드하세요.",
      mostPopular: "인기 플랜",
      month: "/월",
      plans: [
        {
          name: "Starter",
          description: "개인 개발자와 취미 프로젝트에 적합합니다.",
          features: ["프로젝트 1개", "기본 AI 제안", "PDF 내보내기", "커뮤니티 지원"],
          cta: "무료로 시작"
        },
        {
          name: "Pro",
          description: "전문 프리랜서와 소규모 팀을 위해 설계되었습니다.",
          features: ["무제한 프로젝트", "고급 AI 아키텍트", "실시간 협업", "GitHub 연동", "우선 지원"],
          cta: "지금 시작하기"
        },
        {
          name: "Team",
          description: "성장하는 스타트업과 엔터프라이즈를 위한 플랜입니다.",
          features: ["Pro의 모든 기능", "SSO 및 감사 로그", "프라이빗 클라우드 배포", "전담 매니저", "맞춤형 AI 학습"],
          cta: "영업팀 문의"
        }
      ]
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        {
          question: "'유기적 동기화'는 어떻게 작동하나요?",
          answer: "Initium은 내부 의존성 그래프를 사용합니다. 텍스트로 요구사항을 수정하면, AI가 관련된 ERD 엔티티와 API 엔드포인트를 식별하여 아키텍처 문서를 자동으로 '리팩토링'합니다."
        },
        {
          question: "설계 문서를 내보낼 수 있나요?",
          answer: "네! ERD는 SQL로, API 명세는 Swagger/OpenAPI(JSON/YAML)로, 전체 문서는 Markdown이나 PDF로 내보낼 수 있습니다."
        },
        {
          question: "AI가 생성한 코드는 상용 수준인가요?",
          answer: "저희 AI는 아키텍처와 스캐폴딩에 집중합니다. 고품질의 보일러플레이트 코드, 마이그레이션 스크립트, 타입 정의를 생성하지만, 핵심 비즈니스 로직은 개발자가 구현해야 합니다."
        },
        {
          question: "실시간 협업을 지원하나요?",
          answer: "물론입니다. 여러 팀원이 동일한 프로젝트를 동시에 편집할 수 있으며, 누가 어떤 컴포넌트를 수정 중인지 실시간으로 확인할 수 있습니다."
        }
      ]
    },
    footer: {
      tagline: "현대적인 소프트웨어 아키텍처를 위한 AI 기반 작업 공간. 미래를 설계하세요.",
      product: "제품",
      company: "회사",
      links: {
        changelog: "변경 기록",
        docs: "문서",
        about: "소개",
        careers: "채용",
        blog: "블로그",
        contact: "문의하기"
      },
      rights: "Initium Inc. All rights reserved."
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
