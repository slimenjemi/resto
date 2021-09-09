import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(val:any): any {
    // let voyel =['a','e','i','o','u','y'];
    let res='';
    for (let i = 0; i < val.length; i++) {
      let inter=val[i];
// for (let j = 0; j < voyel.length; j++) {
if (inter == 'a' || inter == 'e' || inter == 'i' || inter == 'o' || inter == 'u' || inter == 'y') {
  
 
  inter='*' ;  

}
res=res+inter;
}
    
    return res;


}
}