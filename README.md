## nextjs 프로젝트 구조

```bash
.
├── README.md                # 프로젝트에 대한 설명과 사용법을 문서화한 파일.
├── app                      # Next.js의 주요 애플리케이션 코드가 포함된 디렉토리. (라우트와 페이지 구성)
├── next-env.d.ts            # Next.js에 필요한 타입 선언 파일(자동 생성 및 관리).
├── next.config.ts           # Next.js의 설정 파일로, 빌드와 런타임에 필요한 옵션 설정.
├── node_modules             # 프로젝트에서 사용하는 모든 npm 패키지가 설치된 디렉토리.
├── package-lock.json        # npm 패키지의 버전 및 의존성을 고정한 파일.
├── package.json             # 프로젝트의 메타정보, 스크립트, 의존성 목록이 포함된 파일.
├── postcss.config.mjs       # PostCSS의 설정 파일로, Tailwind CSS 등의 PostCSS 플러그인을 설정.
├── public                   # 정적 파일(이미지, 폰트 등)을 저장하는 디렉토리.
├── tailwind.config.ts       # Tailwind CSS의 설정 파일로, 테마, 플러그인, 확장 설정 포함.
└── tsconfig.json            # TypeScript 설정 파일로, 컴파일러 옵션과 경로 별칭 등이 정의됨.

```

## tsconfig.json

아래 JSON은 TypeScript 프로젝트, 특히 Next.js 환경에서 사용하는 `tsconfig.json`의 설정 파일입니다. 각 옵션은 컴파일러의 동작 방식을 정의하며, Next.js의 권장 설정을 포함하고 있습니다.

```
{
  "compilerOptions": {
    // TypeScript 컴파일러 옵션을 설정하는 섹션

    "target": "ES2017",
    // 컴파일된 JavaScript 코드의 호환성을 지정 (ECMAScript 2017 사용)

    "lib": ["dom", "dom.iterable", "esnext"],
    // 컴파일에 사용할 라이브러리를 지정 (DOM, DOM 반복자, 최신 ES 기능 사용)

    "allowJs": true,
    // JavaScript 파일도 TypeScript 프로젝트에서 허용

    "skipLibCheck": true,
    // TypeScript 라이브러리 파일의 타입 검사를 건너뜀 (컴파일 속도 향상)

    "strict": true,
    // 엄격한 타입 검사를 활성화 (코드 안정성 향상)

    "noEmit": true,
    // 컴파일러가 출력을 생성하지 않음 (주로 타입 체크만 할 때 사용)

    "esModuleInterop": true,
    // CommonJS와 ES 모듈 간의 호환성을 개선

    "module": "esnext",
    // 모듈 시스템을 ESNext로 설정 (최신 모듈 표준 사용)

    "moduleResolution": "bundler",
    // 모듈 해석 방식을 번들러 방식으로 설정 (Next.js와 같은 환경에 적합)

    "resolveJsonModule": true,
    // JSON 파일을 모듈로 가져오는 것을 허용

    "isolatedModules": true,
    // 각 파일을 독립적으로 타입 체크 (Next.js의 요구 사항)

    "jsx": "preserve",
    // JSX 구문을 그대로 유지 (React에서 사용 가능)

    "incremental": true,
    // 증분 컴파일을 활성화하여 재컴파일 속도 향상

    "plugins": [
      {
        "name": "next"
        // Next.js 전용 TypeScript 플러그인 활성화
      }
    ],

    "paths": {
      "@/*": ["./*"]
      // `@/` 접두사를 사용해 프로젝트의 루트 디렉토리 경로를 간단히 참조 가능
    }
  },
  "include": [
    // TypeScript 컴파일러가 포함할 파일들
    "next-env.d.ts",
    // Next.js 환경 타입 정의 파일
    "**/*.ts",
    // 모든 TypeScript 파일
    "**/*.tsx",
    // 모든 TypeScript JSX 파일
    ".next/types/**/*.ts"
    // Next.js에서 생성하는 타입 정의 파일
  ],
  "exclude": [
    // 컴파일러가 제외할 파일들
    "node_modules"
    // 외부 모듈 디렉토리 (보통 타입 체크하지 않음)
  ]
}
```

## tailwind.config.ts

아래 설정은 프로젝트에서 사용자 정의 스타일과 TailwindCSS 기본 기능을 유연하게 사용하도록 구성되었습니다.

```typescript
import type { Config } from "tailwindcss";
// TailwindCSS의 타입 정의를 가져와 이 파일이 TailwindCSS 설정임을 명시합니다.

export default {
  content: [
    // TailwindCSS가 스타일을 적용할 파일 경로를 지정합니다.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // `pages` 디렉토리의 모든 JS, TS, JSX, TSX, MDX 파일
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // `components` 디렉토리의 모든 JS, TS, JSX, TSX, MDX 파일
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // `app` 디렉토리의 모든 JS, TS, JSX, TSX, MDX 파일
  ],
  theme: {
    extend: {
      // TailwindCSS의 기본 테마를 확장합니다.
      colors: {
        background: "var(--background)",
        // CSS 변수 `--background`를 Tailwind에서 `background`로 참조 가능
        foreground: "var(--foreground)",
        // CSS 변수 `--foreground`를 Tailwind에서 `foreground`로 참조 가능
      },
    },
  },
  plugins: [],
  // 사용할 추가 TailwindCSS 플러그인을 지정합니다.
} satisfies Config;
// 설정 객체가 TailwindCSS의 `Config` 타입을 충족함을 명시합니다.
// TypeScript를 사용할 때, 설정이 올바르게 작성되었는지 검증할 수 있도록 합니다.
```

### 주요 포인트:

1. **`content`**:

   - TailwindCSS가 사용되지 않는 클래스들을 제거하는 **Purge** 기능을 위해 어디에서 TailwindCSS를 사용할지 정의.
   - 정의된 경로 내의 파일만 분석하여 클래스 이름을 포함합니다.

2. **`theme.extend`**:

   - 기본 TailwindCSS 테마를 덮어쓰지 않고 확장.
   - 여기서는 사용자 정의 CSS 변수(`--background`, `--foreground`)를 Tailwind 색상 시스템에 추가.

3. **`plugins`**:

   - TailwindCSS 플러그인을 사용해 확장 가능.
   - 플러그인을 추가하면 `plugins` 배열에 선언.

4. **`satisfies Config`**:
   - TypeScript에서 `Config` 타입을 통해 구조 검증.
   - Tailwind 설정이 올바른 구조를 따르고 있는지 확인.

## postcss.config.ts

PostCSS는 CSS를 전처리하거나 변환하기 위한 도구입니다. 이 설정에서는 TailwindCSS 플러그인을 추가하여 프로젝트에서 TailwindCSS를 사용하는 데 필요한 스타일 처리를 담당합니다.

```typescript
/** @type {import('postcss-load-config').Config} */
// PostCSS 설정 파일의 타입을 지정합니다. `postcss-load-config` 라이브러리에서 제공하는 `Config` 타입을 사용합니다.

const config = {
  plugins: {
    // PostCSS에서 사용할 플러그인들을 정의합니다.
    tailwindcss: {},
    // TailwindCSS 플러그인을 활성화합니다.
    // `{}` 안에 TailwindCSS 플러그인의 추가 옵션을 정의할 수 있지만, 기본 설정으로 두고 있습니다.
  },
};

export default config;
// PostCSS 설정 객체를 기본 내보내기(`export default`)로 내보냅니다.
```

---

### 주요 포인트:

1. **`plugins`**:

   - PostCSS가 처리할 CSS에 적용할 플러그인 목록입니다.
   - 여기서는 **TailwindCSS**만 플러그인으로 추가되어 있습니다.
   - PostCSS를 통해 TailwindCSS가 CSS를 생성하거나 필요한 작업을 수행하도록 합니다.

2. **`tailwindcss`**:

   - TailwindCSS 플러그인을 PostCSS에서 사용하도록 지정합니다.
   - TailwindCSS 설정 파일(`tailwind.config.ts`)을 기반으로 스타일을 처리합니다.

3. **`@type` 주석**:

   - TypeScript로 작성된 PostCSS 설정 파일에서 **타입 힌트**를 제공합니다.
   - `postcss-load-config` 라이브러리의 `Config` 타입을 사용하여, PostCSS 설정 구조가 올바른지 확인할 수 있습니다.

4. **기본 내보내기**:
   - `export default config`로 PostCSS 설정을 외부에서 사용할 수 있게 만듭니다.
   - 이 파일은 PostCSS가 설정을 로드할 때 사용됩니다.

## package.json

다음은 `package.json` 파일의 구성과 각 속성의 설명입니다.

```
{
  "name": "nextjs15-crash-course",
  // 프로젝트 이름 (Next.js 15 강의용 프로젝트)

  "version": "0.1.0",
  // 현재 프로젝트 버전 (초기 버전 0.1.0)

  "private": true,
  // 이 설정이 true이면 프로젝트를 npm 레지스트리에 게시할 수 없습니다.

  "scripts": {
    // 프로젝트에서 실행할 수 있는 스크립트 정의

    "dev": "next dev --turbopack",
    // 개발 서버를 실행 (TurboPack을 활성화한 빠른 개발 빌드 사용)

    "build": "next build",
    // 프로젝트를 프로덕션 환경에 맞게 빌드

    "start": "next start",
    // 빌드된 프로덕션 서버를 시작

    "lint": "next lint"
    // ESLint를 사용해 프로젝트 코드의 문제를 검사
  },

  "dependencies": {
    // 애플리케이션 실행에 필요한 의존성 목록

    "react": "19.0.0-rc-66855b96-20241106",
    // React 라이브러리의 최신 릴리즈 후보 (RC) 버전

    "react-dom": "19.0.0-rc-66855b96-20241106",
    // React DOM 렌더링 라이브러리의 최신 RC 버전

    "next": "15.0.3"
    // Next.js 프레임워크의 15.0.3 버전
  },

  "devDependencies": {
    // 개발 환경에서만 필요한 의존성 목록

    "typescript": "^5",
    // TypeScript 최신 버전 (5 이상)

    "@types/node": "^20",
    // Node.js의 타입 정의 파일 (TypeScript 사용 시 필요)

    "@types/react": "^18",
    // React의 타입 정의 파일

    "@types/react-dom": "^18",
    // React DOM의 타입 정의 파일

    "postcss": "^8",
    // CSS를 변환하기 위한 도구

    "tailwindcss": "^3.4.1",
    // TailwindCSS 최신 버전 (유틸리티 기반 CSS 프레임워크)

    "eslint": "^8",
    // ESLint 최신 버전 (코드 품질과 스타일 검사 도구)

    "eslint-config-next": "15.0.3"
    // Next.js 프로젝트를 위한 ESLint 설정
  }
}
```

---

### 주요 포인트:

1. **`name`**:

   - 프로젝트 이름을 지정. `npm`에서 프로젝트를 관리하기 위한 이름.
   - 기본적으로 다른 프로젝트와 이름이 겹치지 않도록 유의.

2. **`version`**:

   - 프로젝트 버전을 명시.
   - `Semantic Versioning`(유의적 버전: major.minor.patch)을 따릅니다.

3. **`private`**:

   - `true`로 설정하면 프로젝트가 `npm publish` 명령어로 게시되지 않도록 보호.

4. **`scripts`**:

   - 자주 사용하는 명령어를 간단히 실행할 수 있도록 별칭 설정.
   - `dev`, `build`, `start`, `lint` 등의 명령어를 정의.

5. **`dependencies`**:

   - 프로젝트 실행 시 필요한 라이브러리.
   - React, React DOM, Next.js 등 주요 프레임워크와 라이브러리가 포함.

6. **`devDependencies`**:
   - 개발 환경에서만 필요한 라이브러리.
   - TypeScript, TailwindCSS, ESLint와 같은 도구들이 포함.

---

### 추가 설명:

- **`--turbopack`**: `next dev` 명령어에서 사용된 TurboPack은 Next.js에서 제공하는 최신 빌드 도구로, 기존 Webpack보다 빠른 빌드 속도를 제공합니다.
- **버전 관리**:
  - 버전 번호는 `^`가 붙어 있으면 동일한 major 버전 내에서 최신 버전으로 업데이트 가능.
  - React와 React DOM은 릴리즈 후보(RC) 버전을 사용 중.
- 이 `package.json` 파일은 최신 Next.js 버전(15)을 활용한 개발 환경 설정을 보여줍니다.

다음은 주어진 코드에 대한 설명입니다.

## next-env.d.ts

```typescript
/// <reference types="next" />
// Next.js 타입 정의를 포함합니다.
// TypeScript에서 Next.js 관련 타입을 사용할 수 있도록 참조합니다.

/// <reference types="next/image-types/global" />
// Next.js의 이미지 관련 전역 타입 정의를 포함합니다.
// TypeScript에서 Next.js 이미지 컴포넌트 및 기능과 관련된 타입을 참조합니다.

// NOTE: This file should not be edited
// 주의 사항: 이 파일은 수정하지 않아야 합니다.
// Next.js가 자동 생성한 파일로, 직접 수정하면 예상치 못한 문제가 발생할 수 있습니다.

// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.
// 참고 링크: Next.js에서 TypeScript를 설정하고 사용하는 방법에 대한 공식 문서를 제공합니다.
```

---

### 주요 포인트:

1. **`/// <reference types="..." />`**:

   - TypeScript의 삼중 슬래시 지시자(triple-slash directive).
   - 다른 타입 정의 파일을 참조하거나 타입 정보를 추가로 가져오기 위해 사용.
   - 여기서는 `next`와 `next/image-types/global`에 정의된 타입들을 가져옵니다.

2. **파일의 역할**:

   - 이 파일은 TypeScript 프로젝트에서 Next.js와 관련된 타입 정보를 포함하도록 설정.
   - Next.js에서 제공하는 타입 정의를 프로젝트 전역에서 사용 가능하게 합니다.

3. **수정 금지**:

   - 이 파일은 Next.js가 자동으로 생성하거나 관리하는 파일입니다.
   - 수동으로 수정하면 업데이트 또는 빌드 과정에서 충돌이 발생할 수 있으므로 수정하지 않아야 합니다.

4. **참고 링크**:
   - Next.js의 TypeScript 설정 문서를 참고하여 TypeScript와 관련된 추가 정보를 얻을 수 있습니다.

이 파일은 TypeScript와 Next.js의 타입 통합을 지원하며, 개발자가 더욱 안정적으로 코드를 작성할 수 있도록 도와줍니다.

## next.config.ts

```typescript
import type { NextConfig } from "next";
// Next.js의 타입 정의에서 `NextConfig` 타입을 가져옵니다.
// 이 타입은 Next.js의 설정 객체가 가져야 하는 구조를 정의합니다.

const nextConfig: NextConfig = {
  /* config options here */
  // 이 부분에 Next.js 설정 옵션을 추가합니다.
};

export default nextConfig;
// 설정 객체를 기본 내보내기(`export default`)로 내보냅니다.
// Next.js는 이 파일에서 내보낸 설정을 기반으로 동작합니다.
```

---

### 주요 포인트:

1. **`NextConfig` 타입**:

   - Next.js 설정 객체의 타입을 명시적으로 지정합니다.
   - 설정 옵션에 대한 자동 완성 및 타입 검사를 제공하므로 개발자가 설정 오류를 줄일 수 있습니다.

2. **`nextConfig` 객체**:

   - Next.js 애플리케이션의 동작 방식을 커스터마이징하기 위한 설정 객체입니다.
   - 설정 가능한 주요 옵션은 다음과 같습니다:
     - `reactStrictMode`: React의 Strict Mode를 활성화.
     - `basePath`: 애플리케이션이 서비스될 기본 경로 지정.
     - `pageExtensions`: 페이지 파일의 확장자 설정.
     - `webpack`: 웹팩 설정을 커스터마이징하는 함수.
     - `env`: 환경 변수를 설정.

   예시:

   ```typescript
   const nextConfig: NextConfig = {
     reactStrictMode: true, // React의 Strict Mode 활성화
     basePath: "/app", // 기본 경로를 '/app'으로 설정
     env: {
       API_URL: "https://example.com/api", // 환경 변수 설정
     },
   };
   ```

3. **`export default`**:
   - Next.js가 이 설정 객체를 읽어 프로젝트의 동작 방식을 정의합니다.

---

### 이 파일의 역할:

- **Next.js 설정 관리**:

  - Next.js 애플리케이션의 전반적인 설정을 담당합니다.
  - 설정 파일을 수정하면 개발 서버를 다시 시작해야 변경 사항이 반영됩니다.

- **타입 안전성 제공**:
  - `NextConfig` 타입을 사용함으로써 설정 값이 올바른지 TypeScript로 확인할 수 있습니다.

---

### 결론:

이 코드는 Next.js 설정을 정의하는 기본 구조이며, `NextConfig` 타입을 사용해 올바른 설정을 작성할 수 있도록 돕습니다. 필요한 설정 옵션을 `nextConfig` 객체에 추가하여 프로젝트에 맞게 커스터마이징하면 됩니다.

## .eslintrc.json

다음은 `.eslintrc.json` 파일의 구성에 대한 설명입니다.

```
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}
```

---

### 주요 구성 요소 설명:

1. **`extends`**:

   - ESLint 설정을 다른 기본 설정으로 확장합니다.
   - 지정된 설정들을 기반으로 ESLint가 동작하며, 프로젝트에 맞게 규칙을 추가하거나 덮어쓸 수 있습니다.

2. **`next/core-web-vitals`**:

   - Next.js에서 성능과 접근성을 개선하기 위해 권장하는 ESLint 규칙 모음.
   - 주요 내용:
     - React의 Strict Mode와 관련된 규칙.
     - 성능 최적화(예: `Image`, `Link` 컴포넌트 사용 방법)와 Web Vitals 기준을 준수하도록 돕는 규칙.

3. **`next/typescript`**:
   - TypeScript와 Next.js 프로젝트에서 사용할 수 있도록 구성된 ESLint 규칙 모음.
   - 주요 내용:
     - TypeScript 관련 파일에서 발생할 수 있는 일반적인 오류 방지.
     - TypeScript와 Next.js의 통합을 원활히 하기 위한 규칙 제공.

---

### 이 설정의 역할:

- **Next.js에 적합한 코드 품질 유지**:

  - Next.js 프로젝트에 특화된 권장 사항을 적용하여 성능과 코드 품질을 유지합니다.
  - TypeScript를 사용하는 경우 관련 규칙을 추가로 적용.

- **최적화된 개발 환경 제공**:
  - Web Vitals를 준수하며 최적화된 애플리케이션 개발을 유도.
  - TypeScript와 ESLint 간의 통합을 원활히 처리.

---

### 확장 및 사용자 정의:

- 기본 규칙에 만족하지 않거나 추가적인 규칙이 필요하면, 설정을 덮어쓸 수 있습니다.
  예를 들어:
  ```
  {
    "extends": ["next/core-web-vitals", "next/typescript"],
    "rules": {
      "react/react-in-jsx-scope": "off",
      // React 17 이상에서 JSX 스코프 관련 경고 끄기
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
      // 사용되지 않는 변수 경고에서 특정 패턴 무시
    }
  }
  ```

---

### 결론:

이 설정은 Next.js와 TypeScript를 사용하는 프로젝트에서 최적의 코드 품질과 성능을 유지하기 위한 기본적인 ESLint 구성을 제공합니다. 필요한 경우 추가 규칙을 정의하여 프로젝트 요구사항에 맞게 확장할 수 있습니다.

## **HMR (Hot Module Replacement) 개념 요약**

- **정의**: 코드 변경 시 애플리케이션 전체를 새로고침하지 않고, 변경된 **모듈만** 브라우저에 즉시 갱신하는 기술.
- **장점**:
  - **빠른 피드백 루프**: 코드 수정 → 결과 확인 시간을 단축.
  - **상태 유지**: 페이지 전체를 새로고침하지 않아 애플리케이션 상태를 유지.
  - **효율성**: 필요한 부분만 다시 빌드해 리소스 낭비 감소.
- **한계**: 일부 복잡한 상태나 의존성 변경 시 전체 새로고침이 필요할 수도 있음.

---

### **Next.js와 TurboPack**

- **TurboPack**:
  - Next.js의 새로운 번들러로, **HMR을 훨씬 더 빠르게 수행**하기 위해 Rust로 개발.
  - 기존 Webpack보다 속도가 빠르고 효율적인 빌드 및 변경 감지 제공.
- **HMR 지원**:
  - TurboPack은 HMR을 기본적으로 지원하며, 변경 사항을 초고속으로 감지하고 필요한 모듈만 갱신.
- **특징**:
  - **Rust 기반**: 기존 JavaScript 기반 번들러보다 성능 우수.
  - **Next.js 최적화**: Next.js 개발 환경에서 최적의 속도와 경험 제공.
  - **명령어**: `next dev --turbopack`으로 활성화.

---

### **핵심 요약**

- **HMR**: 변경된 코드만 빠르게 갱신해 개발 속도와 효율성을 향상.
- **TurboPack**: Next.js에서 HMR을 더 빠르게 실행하도록 설계된 최신 번들러. Rust 기반으로 Webpack보다 훨씬 빠르고, Next.js에 최적화된 개발 경험 제공.

## 서버사이드 컴포넌트에서의 console.log

1. **`console.log`가 브라우저 콘솔에 `[Server]`로 출력되는 이유**:

   - Next.js는 서버 컴포넌트에서 실행된 로그를 브라우저 콘솔로 전달하며, 로그 앞에 `[Server]`를 붙여 표시합니다.
   - 이는 **서버에서 실행된 코드**임을 나타냅니다.

2. **`[Server]`의 의미**:

   - 로그가 **서버 환경**에서 실행된 것을 구분하기 위한 표시입니다.

3. **정리**:
   - `console.log('from Server')`는 서버에서 실행되었고, Next.js가 이를 브라우저 콘솔에 `[Server]` 접두사와 함께 표시했습니다.
   - 이는 서버와 클라이언트 로그를 명확히 구분하기 위한 Next.js의 개발 지원 기능입니다.

## 클라이언트사이드 컴포넌트에서의 console.log

### **1. 서버 터미널에서 로그가 찍히는 이유**

- **Next.js는 클라이언트 컴포넌트를 서버에서 한 번 실행**하여 번들링과 의존성 분석을 수행하기 때문입니다.
- `"use client"`가 선언된 컴포넌트도 분석 목적으로 서버에서 실행됩니다.

---

### **2. 브라우저에서 로그가 두 번 찍히는 이유**

- **React Strict Mode**가 개발 환경에서 활성화되어 클라이언트 컴포넌트를 두 번 렌더링합니다.
- 이는 컴포넌트의 부작용 검사를 위한 React의 의도적인 동작입니다.

---

### **정리**

- **서버 터미널**: 클라이언트 컴포넌트의 분석/번들링 과정에서 로그가 출력.
- **브라우저**: React Strict Mode로 인해 두 번 렌더링되어 두 번 로그 출력.

## **Next.js App Router 핵심 요약**

1. **디렉토리 기반 경로 결정**:

   - 디렉토리 구조가 URL 경로로 매핑됩니다.
   - 예: `app/about/page.tsx` → `/about`

2. **파일 역할**:

   - `page.tsx`: 페이지 정의.
   - `[parameter]`: 동적 라우트 (예: `/blog/:id`).
   - `layout.tsx`: 공유 레이아웃 정의.
   - `loading.tsx`: 로딩 UI.
   - `error.tsx`: 에러 처리.

3. **장점**:

   - **직관적**이고 **자동화된 라우팅**.
   - 레이아웃과 동적 경로 지원.

4. **주의**:
   - 파일 이름(`page.tsx`)과 위치 중요.
   - 동적 라우트는 경로 충돌 방지 필요.

## \*라우트 그룹(Route Groups)

**라우트 그룹(Route Groups)**은 Next.js 13의 **App Router**에서 도입된 기능으로, 디렉토리 구조를 변경하지 않고도 라우팅 경로를 관리하거나 특정 경로를 그룹화하여 처리할 수 있는 강력한 도구입니다. 라우트 그룹은 디렉토리 이름 앞에 **`(`**와 **`)`**를 사용하여 정의합니다.

---

### **1. 라우트 그룹의 기본 개념**

- 라우트 그룹은 특정 디렉토리를 URL 경로에 포함시키지 않고도 라우팅을 정의할 수 있는 기능입니다.
- **디렉토리 구조**는 라우팅과 별도로 유지되므로, 파일 시스템 관리를 단순화하면서도 경로 구조를 유연하게 설계할 수 있습니다.

#### 예제 디렉토리 구조:

```plaintext
app/
├── (groupA)/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── settings/
│   │   └── page.tsx
```

#### 결과 경로:

- `/dashboard`: **(groupA)** 디렉토리는 URL에 포함되지 않음.
- `/settings`

---

### **2. 사용 목적**

1. **코드 분리 및 모듈화**:

   - 대규모 프로젝트에서 특정 기능이나 경로를 그룹화하여 관리하기 쉽게 합니다.

2. **레이아웃 공유**:

   - 그룹 내 모든 라우트가 동일한 `layout.tsx` 파일을 공유하도록 설정할 수 있습니다.

3. **URL 간소화**:
   - 실제 디렉토리 구조는 복잡하더라도, 사용자에게 단순한 URL을 제공할 수 있습니다.

---

### **3. 라우트 그룹의 예제**

#### 디렉토리 구조:

```plaintext
app/
├── (marketing)/
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── (admin)/
│   ├── dashboard/
│   │   └── page.tsx
│   └── users/
│       └── page.tsx
```

#### 동작:

- `/about`: **(marketing)** 디렉토리는 URL에 노출되지 않음.
- `/contact`
- `/dashboard`
- `/users`

---

### **4. 레이아웃과의 통합**

라우트 그룹은 **레이아웃 파일(`layout.tsx`)**을 활용하여 그룹 내 경로에 공통 UI를 적용할 수 있습니다.

#### 디렉토리 구조:

```plaintext
app/
├── (groupA)/
│   ├── layout.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   └── settings/
│       └── page.tsx
```

#### `layout.tsx`:

```tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>Group A Header</header>
      <main>{children}</main>
    </div>
  );
}
```

#### 결과:

- `/dashboard`와 `/settings`는 `Group A Header`를 포함하는 공통 레이아웃을 사용.

---

### **5. 활용 예제**

#### 다중 레이아웃 설정

라우트 그룹을 사용해 서로 다른 레이아웃을 경로에 적용할 수 있습니다.

```plaintext
app/
├── (public)/
│   ├── home/
│   │   └── page.tsx
│   ├── about/
│       └── page.tsx
├── (private)/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── settings/
│       └── page.tsx
```

- **`(public)` 그룹**: 공개 레이아웃.
- **`(private)` 그룹**: 인증된 사용자 전용 레이아웃.

---

### **6. 장점**

1. **유지보수성 증가**:
   - 파일 시스템 관리와 URL 설계를 분리하여 코드베이스를 더 쉽게 관리.
2. **중복 제거**:
   - 공통 레이아웃과 스타일을 쉽게 적용.
3. **URL 최적화**:
   - 사용자가 깔끔한 URL을 사용할 수 있음.

---

### **결론**

라우트 그룹은 **대규모 Next.js 프로젝트**에서 파일 구조와 URL 설계를 분리하고, 공통 레이아웃을 쉽게 공유할 수 있도록 도와줍니다. **복잡한 경로 구조를 단순화**하고, 프로젝트를 모듈화하는 데 매우 유용한 기능입니다. 😊
