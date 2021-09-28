import { Transaction } from './transaction';

export class Account {
    public account: number;
    public accountType: string;
    public transaction: Transaction[];
    public balance: number;
    public ifscCode: String;

}
