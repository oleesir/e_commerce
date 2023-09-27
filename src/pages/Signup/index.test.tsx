import { describe, expect } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import Signup from './index.tsx';
import { renderWithProviders } from '../../test/test-utils.tsx';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Test Signup component', () => {
  test('display error when firstName input is empty', async () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: '' } });
    fireEvent.input(lastNameInput, { target: { value: 'tty' } });
    fireEvent.input(emailInput, { target: { value: 'yuyu@hj.net' } });
    fireEvent.input(passwordInput, { target: { value: 'Password123@' } });

    fireEvent.submit(signupForm);

    const errorMessage = await screen.findByText('Required.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when firstName input is a number', async () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: '364' } });
    fireEvent.input(lastNameInput, { target: { value: 'ttdy' } });
    fireEvent.input(emailInput, { target: { value: 'yuyu@hj.net' } });
    fireEvent.input(passwordInput, { target: { value: 'Password123@' } });

    fireEvent.submit(signupForm);

    const errorMessage = await screen.findByText('Input letters only.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when firstName input is less than two characters', async () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: 'q' } });
    fireEvent.input(lastNameInput, { target: { value: 'ttdye' } });
    fireEvent.input(emailInput, { target: { value: 'yuyu@hj.net' } });
    fireEvent.input(passwordInput, { target: { value: 'Password123@' } });

    fireEvent.submit(signupForm);

    const errorMessage = await screen.findByText(
      'Name must be more than or equal to two characters.',
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when lastName input is empty', async () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: 'etyr' } });
    fireEvent.input(lastNameInput, { target: { value: '' } });
    fireEvent.input(emailInput, { target: { value: 'yuyu@hj.net' } });
    fireEvent.input(passwordInput, { target: { value: 'Password123@' } });

    fireEvent.submit(signupForm);

    const errorMessage = await screen.findByText('Required.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when lastName input is a number', async () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: 'lkdf' } });
    fireEvent.input(lastNameInput, { target: { value: '345' } });
    fireEvent.input(emailInput, { target: { value: 'yuyu@hj.net' } });
    fireEvent.input(passwordInput, { target: { value: 'Password123@' } });

    fireEvent.submit(signupForm);

    const errorMessage = await screen.findByText('Input letters only.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when lastName input is less than two characters', async () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: 'qhhhh' } });
    fireEvent.input(lastNameInput, { target: { value: 't' } });
    fireEvent.input(emailInput, { target: { value: 'yuyu@hj.net' } });
    fireEvent.input(passwordInput, { target: { value: 'Password123@' } });

    fireEvent.submit(signupForm);

    const errorMessage = await screen.findByText(
      'Name must be more than or equal to two characters.',
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when password input is incorrect', async () => {
    renderWithProviders(<Signup />);
    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: 'qhhhht' } });
    fireEvent.input(lastNameInput, { target: { value: 'tyyuuu' } });
    fireEvent.input(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.input(passwordInput, {
      target: { value: 'pass' },
    });

    fireEvent.submit(signupForm);

    const errorMessage = await screen.findByText(
      'Must contain eight characters, uppercase, lowercase, number and special case character.',
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when email input is empty', async () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: 'qhhhh' } });
    fireEvent.input(lastNameInput, { target: { value: 'tyyuu' } });
    fireEvent.input(emailInput, { target: { value: '' } });
    fireEvent.input(passwordInput, {
      target: { value: 'Password123@' },
    });

    fireEvent.submit(signupForm);

    const errorMessage = await screen.findByText('Required.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('display error when email input is invalid', async () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: 'qhhhh' } });
    fireEvent.input(lastNameInput, { target: { value: 'tyyuu' } });
    fireEvent.input(emailInput, { target: { value: 'johndoeexample.com' } });
    fireEvent.input(passwordInput, { target: { value: 'Password123@' } });

    fireEvent.submit(signupForm);

    const errorMessage = await screen.findByText('Invalid email address.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('display signup authentication form', () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signupForm).toBeInTheDocument();
  });

  test('display error when user already exists', async () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: 'john' } });
    fireEvent.input(lastNameInput, { target: { value: 'doe' } });
    fireEvent.input(emailInput, { target: { value: 'existing@email.com' } });
    fireEvent.input(passwordInput, { target: { value: 'Password123@' } });

    fireEvent.submit(signupForm);

    const errorMessage = await screen.findByText('Email already exist.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('submits the form with valid data', async () => {
    renderWithProviders(<Signup />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const signupForm = screen.getByTestId('signup-form');

    fireEvent.input(firstNameInput, { target: { value: 'john' } });
    fireEvent.input(lastNameInput, { target: { value: 'doe' } });
    fireEvent.input(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.input(passwordInput, { target: { value: 'Password123@' } });

    fireEvent.submit(signupForm);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
