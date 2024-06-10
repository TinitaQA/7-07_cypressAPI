const body = require("../fixtures/user");

describe("Создание, обновление и удаление пользователя", () => {
  it("Создание нового пользователя", { timeout: 40000 }, () => {
    cy.addUser(body.user).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eql({
        code: 200,
        type: "unknown",
        message: "1",
      });
    });
    cy.getUser(body.user.username).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body.username).be.eql(body.user.username);
    });
  });

  it("Обновление пользователя", { timeout: 30000 }, () => {
    cy.addUser(body.user);
    cy.updateUser(body.user.username, body.userUpdate).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eql({
        code: 200,
        type: "unknown",
        message: "2",
      });
    });
    cy.getUser(body.userUpdate.username).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body.username).be.eql(body.userUpdate.username);
    });
  });

  it("Удаление пользователя", { timeout: 40000 }, () => {
    cy.addUser(body);
    cy.deleteUser(body.user.username).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body.message).be.eql(body.user.username);
    });
    cy.getUser(body.user.username).then((response) => {
      expect(response.status).be.eql(404);
    });
  });
});
