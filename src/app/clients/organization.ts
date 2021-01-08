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

export class Branch {
  organizationId: string;
  branchId: string;
  displayName: string;
  phoneNumber: string;
  email: string;
  website: string;


  constructor(organizationId: string, displayName: string, phoneNumber: string, email: string, website: string) {
    this.organizationId = organizationId;
    this.displayName = displayName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.website = website;
  }
}
