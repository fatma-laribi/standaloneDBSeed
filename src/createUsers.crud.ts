/* eslint-disable prettier/prettier */
import { Connection } from "typeorm";
import { UserEntity } from "./user.entity";
import { name, internet, date} from 'faker';
const createUsers = async (con: Connection) => {
    const users: Array<UserEntity> = [];
    for (const _ of Array.from({ length: 10 })) {
      const firstName = name.firstName();
      const lastName = name.lastName();
      const email = internet.email();
      const password = internet.password();
      const birthDate = date.past();
      const user: Partial<UserEntity> = new UserEntity(
      );
      user.birthDate=birthDate;
      user.email=email;
      user.firstName=firstName;
      user.lasttName=lastName;
      user.password=password;
      users.push((await con.manager.save(user)) as UserEntity);
    }}
    export {createUsers}