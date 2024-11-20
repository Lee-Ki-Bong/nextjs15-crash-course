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