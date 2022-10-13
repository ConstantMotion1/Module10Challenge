const Employee = require("../lib/Employee")

const name = "Constan";
const id = 20;
const email = "@hotmail.com";
const obj = new Employee(name, id, email)
            

describe("Employee", () => {
    describe("Initialization", () => {
        it("should have employee name, id, and email", () => {
            
            expect(obj).toBeInstanceOf(Employee)
            expect(obj.name).toBe(name)
            expect(obj.id).toBe(id)
            expect(obj.email).toBe(email)

        })
    })

    describe("getName", () => {
        it("should return name added when getName() called", () => {
            expect(obj.getName()).toBe(obj.name)
        })
    })

    describe("getId", () => {
        it("should return id added when getID() called", () => {
            expect(obj.getId()).toBe(obj.id)
        })
    })

    describe("getEmail", () => {
        it("should return email when getEmail() called", () => {
            expect(obj.getEmail()).toBe(obj.email)
        })
    })

    describe("getRole", () => {
        it("should return 'Employee' string", () => {
            expect(obj.getRole()).toBe("Employee")
        })
    })

})

