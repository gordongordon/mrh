import firebase from 'firebase';
import MobxStore from 'mobxStore'
import {propertys} from 'userModelView'
import {agentModel} from 'agentModelView'
//import {observable, action} from 'mobx';

export default class AppStore {

    constructor() {
      this.usersRef = undefined;
      this.usersProfile = undefined;
      this.matchedPropertysRef = undefined;
      this.agentsRef = undefined;
      this.agentsProfile = undefined;
      this.agentsFilterRef = undefined;
      this.agentSaleRef = undefined;
      this.agentBuyRef = undefined;
      this.agentLeaseRef = undefined;
      this.agentRentRef = undefined;
    }
 
    // Catch user login before assign any database reference
    updateUid = () => {
      console.log( 'updateUid')
       const uid = MobxStore.app.uid;

       // Testing only
       const user = firebase.auth().currentUser;
       console.log( 'updateUid user.uid ', user.uid);
       console.log( 'updateUid MobxStore.app.uid ', uid)
       console.log( 'updateUid usersRef ', `users/${uid}/propertys`);
       // users database
       this.usersRef = firebase.database().ref(`users/${uid}/propertys`);
       this.usersProfile = firebase.database().ref(`users/${uid}/profile`);
       this.matchedPropertysRef = firebase.database().ref(`users/${uid}/matchedPropertys`);
       // agents database
       this.agentsRef = firebase.database().ref(`agents/${uid}/propertys`);
       this.agentsProfile = firebase.database().ref(`agents/${uid}/profile`);
       // Use in agent match panel for filtering!
       this.agentsFilterRef = firebase.database().ref(`agents/${uid}/filters`);

       this.agentSaleRef = firebase.database().ref(`agents/${uid}/sale`);
       this.agentBuyRef = firebase.database().ref(`agents/${uid}/buy`);
       this.agentRentRef = firebase.database().ref(`agents/${uid}/rent`);
       this.agentLeaseRef = firebase.database().ref(`agents/${uid}/lease`);
       
       // init userModelView, for mobx,
       // can't be used inside constructor
       // when app start will call an empty constructor
       propertys.init();
       // Agent only
       agentModel.init();
       console.log( 'end of updateUid')

    }
}
