export class Organization {
  id: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  website: string;


  constructor(displayName: string, phoneNumber: string, email: string, website: string) {
    this.displayName = displayName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.website = website;
  }
}
