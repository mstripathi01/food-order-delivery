 import { render,screen } from "@testing-library/react";
 import Contact from "../Contact";
 import "@testing-library/jest-dom";

 // grouping the test case we wrapped all the test case in describe(description, callback function)
 describe("Contact Page of Test Case",() => {
    it("Should load contact us component", () => {
        render(<Contact />);
    
        const heading =  screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
     });
    
     it("Should load button us component", () => {
        render(<Contact />);
    
        const button =  screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument();
     });
    
     it("Should load placeholder us component", () => {
        render(<Contact />);

        // querying
        const inputName =  screen.getByPlaceholderText("name");
    
        // Assertion
        expect(inputName).toBeInTheDocument();
     });
    
     it("Should load 2 input boxes on the component", () => {
        render(<Contact />);
    
        const inputBoxes =  screen.getAllByRole("textbox");
    
        // console.log(inputBoxes.length)
        // Assertion
        expect(inputBoxes.length).toBe(2);
     });
 })
 