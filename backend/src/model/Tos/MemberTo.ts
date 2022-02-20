import { Types } from "mongoose";
import { MemberI } from "../Member";
import { TransferObject, TransferObjectConstructor } from "./TransferObject";

export const MemberTo: TransferObjectConstructor<MemberI> = class implements TransferObject<MemberI> {
  private _id: Types.ObjectId | undefined;
  private firstName: string | undefined;
  private lastName: string | undefined;
  private email: string | undefined;
  private telephoneNumber: string | undefined;
  private streetNumber: string | undefined;
  private city: string | undefined;
  private street: string | undefined;
  private zipCode: string | undefined;
  private gender: 'm' | 'w' | 'd' | undefined;
  private teamId: Types.ObjectId | undefined;
  private baseFeeId: Types.ObjectId | undefined;

  private readonly mandatoryKeys: Array<keyof MemberI> = ['firstName', 'lastName', 'street', 'streetNumber', 'zipCode', 'city', 'baseFeeId'];

  constructor(o: object | MemberI = {}) {
    if (this.mandatoryKeys.every(el => Object.keys(o).includes(el))) {
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