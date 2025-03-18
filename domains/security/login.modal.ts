import { RestClient } from "@ayu-sh-kr/dota-rest";
import type {ToastService} from "~/composables/useToastService";
import type {SessionStore} from "~/stores/session.store";

export interface LoginRequest {
    email: string;
    otp: string;
}

export interface LoginResponse {
    accessToken: string;
}


export class LoginService {

    restClient!: RestClient;

    constructor(private url: string, private toast: ToastService, private sessionStore: SessionStore) {
        this.restClient = RestClient.create()
            .baseUrl(url)
            .build();
    }

    async generateOtp(email: string) {
        const voidEntity = await this.restClient
            .get<void>()
            .uri(`/auth/v1/login-email`)
            .param({key: 'email', value: email})
            .retrieve()
            .toVoid();

        if(voidEntity.status === 200) {
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

        if(entity.status === 200) {
            console.log(entity.data)
            this.sessionStore.createSession(entity.data)
            this.toast.success('Login Successful')
            return entity.data;
        } else {
            this.toast.failure('Login Failed');
        }
    }
}