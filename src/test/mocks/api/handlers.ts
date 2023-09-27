import { rest } from 'msw';

interface LoginRequestBody {
  email: string;
  password: string;
}

interface LoginResponseBody {
  _id: string;
  cartId: string;
  role: string;
}

interface SignupRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignupResponseBody {
  _id: string;
  cartId: string;
  role: string;
}

export const handlers = [
  rest.post<SignupRequestBody, SignupResponseBody>(
    'http://localhost:5000/api/v1/auth/signup',
    (req, res, ctx) => {
      const { firstName, lastName, email, password } = req.body;

      if (
        firstName === 'john' &&
        lastName === 'doe' &&
        email === 'johndoe@example.com' &&
        password === 'Password123@'
      ) {
        return res(
          ctx.status(201),
          ctx.json({
            _id: '6502432839984a574aeb06c1',
            cartId: '6502432839984a574aeb06c2',
            role: 'customer',
          }),
        );
      }
      if (
        firstName === 'john' &&
        lastName === 'doe' &&
        email === 'existing@email.com' &&
        password === 'Password123@'
      ) {
        return res(ctx.status(401), ctx.json({ message: 'Email already exist.' }));
      }
    },
  ),
  rest.post<LoginRequestBody, LoginResponseBody>(
    'http://localhost:5000/api/v1/auth/login',
    (req, res, ctx) => {
      const { email, password } = req.body;

      if (email === 'johndoe@example.com' && password === 'Password123@') {
        return res(
          ctx.status(200),
          ctx.json({
            _id: '6502432839984a574aeb06c1',
            cartId: '6502432839984a574aeb06c2',
            role: 'customer',
          }),
        );
      } else {
        return res(ctx.status(401), ctx.json({ message: 'email or password is incorrect' }));
      }
    },
  ),
];
