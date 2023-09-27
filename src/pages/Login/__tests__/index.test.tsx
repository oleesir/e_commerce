import { describe, expect } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import Login from '../index.tsx';
import { renderWithProviders } from '../../../test/test-utils.tsx';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Test Login component', () => {
  test('display error when wrong password is empty', async () => {
    renderWithProviders(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginForm = screen.getByTestId('login-form');

    fireEvent.input(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.input(passwordInput, {
      target: { value: '' },
    });

    fireEvent.submit(loginForm);

    const errorMessage = await screen.findByText('Required.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when wrong password is incorrect', async () => {
    renderWithProviders(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginForm = screen.getByTestId('login-form');

    fireEvent.input(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.input(passwordInput, {
      target: { value: 'pass' },
    });

    fireEvent.submit(loginForm);

    const errorMessage = await screen.findByText(
      'Must contain eight characters, uppercase, lowercase, number and special case character.',
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when wrong email is empty', async () => {
    renderWithProviders(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginForm = screen.getByTestId('login-form');

    fireEvent.input(emailInput, { target: { value: '' } });
    fireEvent.input(passwordInput, {
      target: { value: 'Password123@' },
    });

    fireEvent.submit(loginForm);

    const errorMessage = await screen.findByText('Required.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when wrong email is incorrect', async () => {
    renderWithProviders(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginForm = screen.getByTestId('login-form');

    fireEvent.input(emailInput, { target: { value: 'johndoeexample.com' } });
    fireEvent.input(passwordInput, {
      target: { value: 'Password123@' },
    });

    fireEvent.submit(loginForm);

    const errorMessage = await screen.findByText('Invalid email address.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays the authentication form', () => {
    renderWithProviders(<Login />);

    const welcomeHeader = screen.getByText('Welcome back');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginForm = screen.getByTestId('login-form');

    expect(welcomeHeader).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginForm).toBeInTheDocument();
  });

  test('display error when email or password incorrect', async () => {
    renderWithProviders(<Login />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginForm = screen.getByTestId('login-form');

    fireEvent.input(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.input(passwordInput, { target: { value: 'Password1234@' } });

    fireEvent.submit(loginForm);

    const errorMessage = await screen.findByText('email or password is incorrect');
    expect(errorMessage).toBeInTheDocument();
  });

  test('submits the form with valid data', async () => {
    renderWithProviders(<Login />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginForm = screen.getByTestId('login-form');

    fireEvent.input(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.input(passwordInput, { target: { value: 'Password123@' } });

    fireEvent.submit(loginForm);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
