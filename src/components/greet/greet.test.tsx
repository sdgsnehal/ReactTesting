import Greet from "./greet"
import {render,screen} from '@testing-library/react'
test("greet render correctly",()=>{
    render(<Greet/>)
    const textElement= screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})
test("Greet render with name",()=>{
    render(<Greet name='Vishwas'/>)
    const textElement = screen.getByText('Hello Vishwas');
    expect (textElement).toBeInTheDocument()
})