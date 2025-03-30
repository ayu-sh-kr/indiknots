import {RestClient} from "@ayu-sh-kr/dota-rest";
import type {ToastService} from "~/composables/useToastService";
import type {SessionStore} from "~/stores/session.store";
import {jwtDecode, type JwtPayload} from "jwt-decode";

export interface LoginRequest {
  email: string;
  otp: string;
}

export interface LoginResponse {
  accessToken: string;
}

export class LoginService {

  restClient: RestClient;
  sessionStore: SessionStore;

  constructor(private url: string, private toast: ToastService, sessionStore: SessionStore) {
    this.restClient = RestClient.create()
      .baseUrl(url)
      .build();

    this.sessionStore = sessionStore;
  }

  async generateOtp(email: string) {
    const voidEntity = await this.restClient
      .get<void>()
      .uri(`/auth/v1/login-email`)
      .param({key: 'email', value: email})
      .retrieve()
      .toVoid();

    if (voidEntity.status === 200) {
      this.toast.info('OTP send to given email.')
      return true;
    } else {
      this.toast.info(`Server response with status ${voidEntity.status}`);
      return false;
    }
  }

  async verifyOtp(request: LoginRequest) {
    const entity = await this.restClient.post<LoginResponse>()
      .uri('/auth/v1/login-email/verify')
      .body(request)
      .retrieve()
      .toEntity();

    if (entity.status === 200) {
      console.log(entity.data)
      this.sessionStore.createSession(entity.data)
      this.toast.success('Login Successful')
      return entity.data;
    } else {
      this.toast.failure('Login Failed');
    }
  }

  isLoggedIn() {
    const session = this.sessionStore.getSession();

    if(!session) return false;

    if (session.accessToken) {
      const jwtPayload = jwtDecode<JwtPayload>(session.accessToken);
      return jwtPayload.exp ? jwtPayload.exp > Math.floor(Date.now() / 1000) : false;
    }

    return false;
  }

  getUserId() {
    if(this.isLoggedIn()) {
      const session = this.sessionStore.getSession();
      const jwtPayload = jwtDecode<JwtPayload>(session.accessToken);
      return jwtPayload.sub;
    }
  }
}