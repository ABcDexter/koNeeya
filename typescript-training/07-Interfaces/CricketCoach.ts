import {Coach} from './Coach';

export class CricketCoach implements Coach {
    
    getDailyWorkout(): string{
        return `Practise your batting again!`;
        
    }
   
}