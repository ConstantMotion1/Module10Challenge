const Engineer = require("../lib/Engineer");

const name = "Constan";
const id = 20;
const email = "@hotmail.com";
const github = "githubaccount";
const obj = new Engineer(name, id, email, github);

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should have employee name, id, email, and github", () => {
            
            expect(obj).toBeInstanceOf(Engineer)
            expect(obj.name).toBe(name)
            expect(obj.id).toBe(id)
            expect(obj.email).toBe(email)
            expect(obj.github).toBe(github)

        })
    })

    describe("getGitHub", () => {
        it("should return github account name when getGitHub() called", () => {
            expect(obj.getGitHub()).toBe(obj.github)
        })
    })

    describe("getRole", () => {
        it("should return 'Engineer' string", () => {
            expect(obj.getRole()).toBe("Engineer")
        })
    })

})