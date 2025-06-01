// HARD SKILLS:
    document.getElementById("programming_language").innerHTML = "Java";
    document.getElementById("automation").innerHTML = "Maven, Gradle, Selenium, Appium, RestAssured, TestNG, jUnit, Selenide, Playwright, Cucumber, Gherkin, Allure, WireMock";
    document.getElementById("testing").innerHTML = "Jira, Azure DevOps, Trello, TestRail, TestLink, Qase.io, Test IT, DevTools, Postman, Hoppscotch, JMeter, Pairwise tool, UML";
    document.getElementById("ci-cd").innerHTML = "Jenkins, GitHub Actions";
    document.getElementById("databases").innerHTML = "SQL (DDL, DML), Workbench, DBeaver, OrmLite, HikariCP, JDBC";
    document.getElementById("vcs").innerHTML = "Git";

if (document.querySelector('[lang="en"]') != null) {
    // POSITION:
    document.getElementById("position").innerHTML = "Automation Engineer";    
    // SOFT SKILLS:
    document.getElementById("soft_skills").innerHTML = "Communication, Attention to detail, Teamwork, Analysis, Logical reasoning, Decision making, Mentorship, Responsibility";
    // LANGUAGE:
    document.getElementById("russian").innerHTML = "Native speaker";
    document.getElementById("english").innerHTML = "B1 (Intermediate)";
    // UPDATED:
    document.getElementById("date").innerHTML = "June 1st, 2025";
    // COPYRIGHT:
    document.getElementById("copyright").innerHTML = "&#169; Alexey Bobrykov " + new Date().getFullYear();
} else {
    // POSITION_RU:
    document.getElementById("position_ru").innerHTML = "Инженер по автоматизации";
    // SOFT SKILLS_RU:
    document.getElementById("soft_skills_ru").innerHTML = "Коммуникабельность, Внимание к детялям, Командная работа, Способность к анализу, Логическое мышление, " +
        "Стремление к результату, Помощь коллегам, Ответственность";
    // LANGUAGE_RU:
    document.getElementById("russian_ru").innerHTML = "Родной";
    document.getElementById("english_ru").innerHTML = "B1 (Средний)";
    // UPDATED_RU:
    document.getElementById("date_ru").innerHTML = "1-го июня, 2025";
    // COPYRIGHT_RU:
    document.getElementById("copyright_ru").innerHTML = "&#169; Алексей Бобриков " + new Date().getFullYear();
};
