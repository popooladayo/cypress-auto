import HomePage from "../../PageObject/Homepage";

describe("Home Page Tests", () => {
  beforeEach(() => {
    const homepage = new HomePage();
    homepage.visitHomepage();
  });

  it("landing page", () => {
    cy.fixture("testing.json").then((data) => {
      const homepage = new HomePage();
      homepage.setUsername(data.username);
      homepage.setPassword(data.password);
      homepage.clickLogin();
      homepage.verifyLogin();
    });
  });
});
// describe("My First Test", () => {

// });

// const homepage = new HomePage();
// // homepage.visitHomepage();
// homepage.setUsername("Admin");
// homepage.setPassword("admin123");
// homepage.clickLogin();
// homepage.verifyLogin();
// });
// });
