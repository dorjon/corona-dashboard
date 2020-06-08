export class City {
    constructor(
        public location: String, 
        public country_code: String,
        public latitude: Number, 
        public longitude: Number, 
        public confirmed: Number,
        public dead: Number,
        public recovered: Number,
        public updated: String
    ) {
        
    }
}