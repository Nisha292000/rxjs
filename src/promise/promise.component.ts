import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {

  promiseVal:any;
  dell= {
    brand:'Dell',
    color:'Black',
    hardDisk:'2 TB'
  }
  hp= {
    brand:'HP',
    color:'Silver',
    hardDisk:'1 TB'
  }
  notAvil={
    brand:'Not Available',
    status:'Failed'
  }

  ngOnInit():void {
    this.demo();
    this.buyLaptop();
  }

  dellLaptop(){
    return true;
  }

  hpLaptop(){
    return false;
  }

  buyLaptop(){
    let buyLaptop = new Promise((resolve,reject)=>{
      if(this.dellLaptop()){
        setTimeout(()=>{
          // resolve('Dell is purchased');
          resolve(this.dell);
        },3000)
      }else if(this.hpLaptop()){
        setTimeout(()=>{
          // resolve('HP is purchased');
          resolve(this.hp);
        },3000)
      }else{
        // reject('Laptop is not available on store');
        reject(this.notAvil);
      }
    })
    buyLaptop.then(res=>{
      console.log('Success', res);
      this.promiseVal = res;
    }).catch(res=>{
      console.log('Failed', res);
      this.promiseVal= res;
    })
  }

  demo(){
    // let buyLaptop = new Promise(function(resolve,reject){
    //   resolve('Promise is resolve');
    // })

    let buyLaptop = new Promise((resolve,reject)=>{
      // resolve('Promise is resolve');
      reject('Promise is reject');
    })
    buyLaptop.then(res=>{
      console.log('Success', res);
    }).catch(res=>{
      console.log('Failed', res);
    })
  }
}
