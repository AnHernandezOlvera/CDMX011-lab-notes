import { screen, render } from "@testing-library/react";

import Modal from './Modal';

describe('Cuando el modal es visible', () => {
    beforeEach(()=> render(<Modal showModal={true} />))
    it('El formulario debe incluir los campos título y texto', () => {
        
        expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/nota/i)).toBeInTheDocument();
    })
    it('Debe existir el botón guardar', () => {
        expect(screen.getByRole('button', {name: /guardar/i})).toBeInTheDocument();
    })
})