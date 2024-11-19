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