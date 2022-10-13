const Manager = require("../lib/Manager");

const name = "Constan";
const id = 20;
const email = "@hotmail.com";
const officeNumber = 300;
const obj = new Manager(name, id, email, officeNumber);

describe("Manager", () => {
    describe("Initialization", () => {
        it("should have employee name, id, email, and officeNumber", () => {
            
            expect(obj).toBeInstanceOf(Manager)
            expect(obj.name).toBe(name)
            expect(obj.id).toBe(id)
            expect(obj.email).toBe(email)
            expect(obj.officeNumber).toBe(officeNumber)

        })
    })

    describe("getRole", () => {
        it("should return 'Manager' string", () => {
            expect(obj.getRole()).toBe("Manager")
        })
    })

})