const Intern = require("../lib/Intern");

const name = "Constan";
const id = 20;
const email = "@hotmail.com";
const school = "Uft";
const obj = new Intern(name, id, email, school);

describe("Intern", () => {
    describe("Initialization", () => {
        it("should have employee name, id, email, and school", () => {
            
            expect(obj).toBeInstanceOf(Intern)
            expect(obj.name).toBe(name)
            expect(obj.id).toBe(id)
            expect(obj.email).toBe(email)
            expect(obj.school).toBe(school)

        })
    })

    describe("getSchool", () => {
        it("should return school name when getSchool() called", () => {
            expect(obj.getSchool()).toBe(obj.school)
        })
    })

    describe("getRole", () => {
        it("should return 'Intern' string", () => {
            expect(obj.getRole()).toBe("Intern")
        })
    })

})