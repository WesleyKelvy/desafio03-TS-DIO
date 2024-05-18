import { login } from "./login";

describe("login", () => {
  const mockEmail = "admin@dio.bank";
  const mockPassword = "123456";
  it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });

  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await login("email@invalido.com", mockPassword);
    expect(response).toBeFalsy();
  });

  it("Deve exibir um erro caso a senha seja inválida", async () => {
    const response = await login(mockEmail, "senahINVALIDA");
    expect(response).toBeFalsy();
  });

  it("Deve exibir um erro caso o email e senha seja inválido", async () => {
    const response = await login("email@invalido.com", "senhaINVALIDA");
    expect(response).toBeFalsy();
  });
});
