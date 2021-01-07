export class Alert {
  public type: string;
  public message: string;

  constructor(type: string, message: string) {
    this.type = type;
    this.message = message;
  }
}

export const ALERT_SUCCESS: Alert = new Alert('success', 'Operation was Successful');
export const ALERT_FAILURE: Alert = new Alert('danger', 'Operation failed. Reason: ');
