import { Types } from "mongoose";
import { MemberI } from "../Member";
import { TransferObject, TransferObjectConstructor } from "./TransferObject";

export const MemberTo: TransferObjectConstructor<MemberI> = class implements TransferObject<MemberI> {
  _id: Types.ObjectId | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  telephoneNumber: string | undefined;
  streetNumber: string | undefined;
  city: string | undefined;
  street: string | undefined;
  zipCode: string | undefined;
  gender: 'm' | 'w' | 'd' | undefined;
  teamId: Types.ObjectId | undefined;
  baseFeeId: Types.ObjectId | undefined;

  private readonly mandatoryKeys: Array<keyof MemberI> = ['firstName', 'lastName', 'street', 'streetNumber', 'zipCode', 'city', 'baseFeeId'];

  constructor(o: object | MemberI = {}) {
      const obj: MemberI = <MemberI> o;
      this._id = obj._id;
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.email = obj.email;
      this.telephoneNumber = obj.telephoneNumber;
      this.streetNumber = obj.streetNumber;
      this.city = obj.city;
      this.street = obj.street;
      this.zipCode = obj.zipCode;
      this.gender = obj.gender;
      this.teamId = obj.teamId;
      this.baseFeeId = obj.baseFeeId;
  }

  toObj(): MemberI {
    return {
      _id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      telephoneNumber: this.telephoneNumber,
      streetNumber: this.streetNumber,
      city: this.city,
      street: this.street,
      zipCode: this.zipCode,
      gender: this.gender,
      teamId: this.teamId,
      baseFeeId: this.baseFeeId,
    }
  }
}