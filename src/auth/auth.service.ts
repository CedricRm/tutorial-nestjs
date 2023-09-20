import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return "I'm signed up";
  }

  signing() {
    return "I'm signed in";
  }
}
