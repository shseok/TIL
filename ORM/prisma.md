# Prisma

## prisma 실행 방법

- BOM-backend기준 npm init -> npx prisma studio (local에 있는 data들을 볼 수 있는 창이 로컬호스트 5555포트번호로 열린다.
- postman API로 api를 테스트하기 위해
  1. BOM-backend root -> npx prisma genrate이후 npm start
  2. postman -> DNS or IPv4주소 + 테스트할 api path를 넣고 테스트
