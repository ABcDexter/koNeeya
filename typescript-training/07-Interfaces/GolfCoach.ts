import {Coach} from './Coach';

export class GolfCoach implements Coach {
    
    getDailyWorkout(): string{
        return `100 times for your golf swing!`;
        
    }
   
}