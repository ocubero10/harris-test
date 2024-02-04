export interface SubscriberModel {
    SubscriberId: string;
    Name: string;
    Email: string;
}

export interface SubscriberData {
    subscribers: SubscriberModel[];
    pageIndex: number;
    pageSize:number;
    totalResults:number
}