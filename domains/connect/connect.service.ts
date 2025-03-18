import {RestClient} from "@ayu-sh-kr/dota-rest";
import type {ContactFormData} from "~/domains/connect/connect.modal";

export class ConnectService {

  private restClient!: RestClient

  constructor(
    private url: string, private toast: ToastService
  ) {

    this.restClient = RestClient
      .create()
      .baseUrl(url)
      .build();
  }

  async processContactUsForm(formData: ContactFormData) {
    const voidEntity = await this.restClient.get<void>()
      .uri('/connect/v1/contact-us')
      .body(formData)
      .retrieve()
      .toVoid();

    return voidEntity.status === 202;
  }

}