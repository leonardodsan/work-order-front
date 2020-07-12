
import { Order } from './Order'


export class OrderOcurrence {
    id: string
    workOrder: Order
    description: string
    createdAt: Date

    constructor(id: string) {
        this.id = id
    }
}
