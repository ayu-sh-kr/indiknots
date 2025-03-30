import {useSessionStore} from "~/stores/session.store";
import {LoginService} from "~/domains/security/login.service";

export const useLoginService = () => {
  return new LoginService('http://localhost:8080', useToastService(), useSessionStore());
}