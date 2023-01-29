module.exports = {
  // default commit convention 활성화
  // extends: ["@commitlint/config-conventional"],
  rules: {
    "type-convention": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "type-convention": ({ header }) => {
          const typeRegex = /^.{2}(feat|fix|style|refactor|cleanup|chore|test)/
          const isTypeMatch = header.includes(":")
            ? typeRegex.test(header.split(":")[0])
            : false

          return [
            isTypeMatch,
            `올바른 타입 컨벤션이 아닙니다.
    규칙 : {gitmoji}{commit-type}\ : {title}
    ex) 🎨fix : 라벨 삽입코드추가, 리드미 작성`,
          ]
        },
        "body-max-line-length": ({ body }) => {
          const isBodyMatch = body && body.length <= 72
          return [!body, isBodyMatch, "본문은 72자 이하로 작성해주세요"]
        },
      },
    },
  ],
}
