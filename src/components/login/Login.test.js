import { screen, render, fireEvent } from "@testing-library/react";
import Login from "./Login";

beforeEach(() => render(<Login />));

describe("Cuando se renderiza el componente Login", () => {
  it("El form debe tener los campos para email y password y el botón ingresar", () => {
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /ingresar/i })
    ).toBeInTheDocument();
  });
});

describe("Cuando el usuario da click en el botón acceder sin llenar el campo email o password", () => {
  it("Debe mostrar un mensaje indicando que el campo es requerido", () => {
    fireEvent.click(screen.getByRole("button", { name: /ingresar/i }));
    expect(
      screen.queryByText(/el correo es requerido/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/la contraseña es requerida/i)
    ).toBeInTheDocument();
  });
});

describe("Cuando el usuario da click en el botón acceder y ha llenado el campo email y password", () => {
  it("No debe mostrar un mensaje indicando que el campo es requerido", () => {
    screen.getByLabelText(/correo/i).value = 'correo@correo.com';
    screen.getByLabelText(/contraseña/i).value = '123456';

    fireEvent.click(screen.getByRole("button", { name: /ingresar/i }));
    expect(
      screen.queryByText(/el correo es requerido/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/la contraseña es requerida/i)
    ).not.toBeInTheDocument();
  });
  
});
