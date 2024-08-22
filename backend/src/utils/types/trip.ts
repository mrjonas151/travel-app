export type Trip = {
    destination: string;
    start_date: Date;
    travel_time: string;
    total_value: number;
    tour_type: string;
    reviews: number;
    userId: string; 
}

export type Trips = Trip[];