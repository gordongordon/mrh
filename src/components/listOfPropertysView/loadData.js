import {Fb} from '../../firebase/firebase-store';
import { propertys } from "userModelView";


const sleep = (msecs) => (
    results => new Promise(resolve => setTimeout(() => resolve(propertys), msecs))
  );

const loadData = ( seconds ) => {
    return new Promise(function(resolve, reject) {
        Fb.app.updateUid();
        resolve( propertys )
      });

    //return promise.then(sleep(seconds))
}

export default loadData;