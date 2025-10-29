import email from "infra/email.js";

describe("infra/email.js", () => {
  test("send()", async () => {
    await email.send({
      from: "Daniel <dnllira1@gmail.com>",
      to: "dnllira2@gmail.com",
      subject: "Teste de assunto",
      text: "Teste de corpo.",
    });
  });
});
