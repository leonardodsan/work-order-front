
import { Professional } from './Professional'
import { Customer } from './Customer'
import { Device } from './Device'

export class Order {
    id: string
    customer: Customer
    device: Device
    accountable: Professional
    problem: string
    status: Status
    startMoment: Date
    endMoment: Date

    constructor(id: string) {
        this.id = id
    }
}

export enum Status { 
    PENDING = "Pendente",
    PROGRESS  = "Em andamento",
    FINISHED = "Finalizada",
    STOPPED = "Pausada"
}
