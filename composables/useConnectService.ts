import {ConnectService} from "~/domains/connect/connect.service";

export const useConnectService = () => {
  return new ConnectService('http://localhost:8080', useToastService())
}