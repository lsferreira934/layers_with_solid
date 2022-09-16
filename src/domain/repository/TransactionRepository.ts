import Transaction from "../entity/Transaction";

export default interface transactionRepository {
    save(transaction: Transaction): Promise<void>;
    get(code: string): Promise<Transaction>;
};