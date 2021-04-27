export class Utilities {


    //implementation <input (keypress)="OnlyNumb($event)">
    OnlyNumb(e: any) {
        
        var key = window.event ? e.which : e.keyCode;
            
        if (key < 48 || key > 57) {
            e.preventDefault();
        }
    
    }
}
