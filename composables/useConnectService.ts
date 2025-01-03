import {ConnectService} from "~/modals/connect.modal";

export const useConnectService = () => {
  return new ConnectService('http://localhost:8080', useToastService())
}