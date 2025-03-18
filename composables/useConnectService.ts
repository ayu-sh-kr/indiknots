import {ConnectService} from "~/domains/connect/connect.modal";

export const useConnectService = () => {
  return new ConnectService('http://localhost:8080', useToastService())
}