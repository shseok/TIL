# 이미 만든 js기반 react프로젝트에 타입스크립트를 적용하고 싶을 때, 발생한 에러
- 에러내용: ``Compiled with problems:X         
ERROR in ./src/index.tsx 7:0-24            
Module not found: Error: Can't resolve './App' in 'D:\React\study\begin-react\src'``
    - [공식홈페이지](https://create-react-app.dev/docs/adding-typescript/#installation)에 나와있는 순서로 설치하고 index.js를 index.tsx로 바꾸어 개발환경을 실행했을 때, 발생하였다.
- 문제해결: 프로젝트 root환경에 tsconfig.json file을 만들어 아래와 같이 설정을 해주었다.

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```