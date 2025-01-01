import {LoginService} from "~/modals/login.modal";
import {useSessionStore} from "~/stores/session.store";

export const useLoginService = () => {
  return new LoginService('http://localhost:8080', useToastService(), useSessionStore());
}