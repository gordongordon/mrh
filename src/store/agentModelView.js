import { observable, computed, action } from "mobx";
import { Fb } from "firebase-store";
import { toJS } from "mobx";
import { Propertyhk } from "propertyhk";
import { Property } from "property";
import MobxStore from "mobxStore";
//import firebase from 'firebase';

// propertyViewModel
class AgentModelViewModel {
  // @observable propertys = observable.map({});
  // User propertys Public
  @observable propertys = new Map();

  // Agent's propertys Private
  @observable ownPropertys = new Map();

  // Fb.agent.filter
  @observable filters = new Map();
  // Agent's propertys Public

  ////@observable agentPropertys = new Map();

  //  @observable propertys = observable.map({});
  //  @observable ownPropertys = observable.map({});
  //@observable matchedPropertys = observable.map({});

  //@observable propertys = map({});
  //@observable propertys = new Map();

  @computed
  get json() {
    console.log("json", this.propertys);
    return toJS(this.propertys);
  }

  // init userModelView, for mobx,
  // can't be used inside constructor, otherwise error
  // when app start will call an empty constructor
  /**
   * 
   */
  @action
  init = () => {
    const that = this;

    const addPromise = Fb.app.agentsFilterRef.on("child_added", snapshot => {
      //console.log( "fire", snapshot.val() )
      //var p = new Propertyhk();
      var p = Propertyhk.deserialize(snapshot.val());

      // restore can be imppletemt  deserialize
      //p.restore( snapshot.val() )
      //console.log( 'p', p)
      // p.matchedPropertys.clear();

      // p.buildMatchProperty( snapshot.key, p.typeFor, p.location);
      p.buildMatchPropertyByRunTime(snapshot.key, p.typeTo, p.typeBy);

      console.log(
        "agentModelView.child_add - filters.matchedPropertys.size",
        p.matchedPropertys.size
      );
      that.filters.set(snapshot.key, p);
    });

    // Handle update
   const changePromise =  Fb.app.agentsFilterRef.on("child_changed", snapshot => {
      console.log("agentModelView.child_changed");

//      var p = that.filters.get(snapshot.key);
      //p.restore(snapshot.val());

      const p = Propertyhk.deserialize(snapshot.val());
      that.filters.set(snapshot.key, p);


      //p.matchedPropertys.clear();
      p.buyRequest.clear();
      p.saleRequest.clear();
      p.rentRequest.clear();
      p.leaseRequest.clear();
      //p.buildCase();

      p.buildMatchPropertyByRunTime(snapshot.key, p.typeTo, p.typeBy);
      console.log(
        `b ${p.buyRequest.size}, s ${p.buyRequest.size}, r ${p.rentRequest
          .size}, l ${p.leaseRequest.size}`
      );
      // that.filters.set(snapshot.key, p);
    });

    // Handle child_removed
   const removePromise =  Fb.app.agentsFilterRef.on("child_removed", snapshot => {
      that.filters.delete(snapshot.key);
      // console.log('that.propertys.size', that.propertys.size)
    });

    Promise.all([addPromise, changePromise, removePromise]).then(function(results) {
      console.log( 'AgentModelView init successful');
      return propertys;
    }).catch( error => {
      console.log( 'AgentModelView can\'t be inited' );
    })

    // /**
    //  * Handle User update propertys
    //  */
    // Fb.propertys.on("child_added", snapshot => {

    //   //console.log( "fire", snapshot.val() )
    //   var p = new Propertyhk();

    //   // restore can be imppletemt  deserialize
    //   p.restore(snapshot.val());
    //   //console.log( 'p', p)

    //   // p.buildMatchProperty( snapshot.key, p.typeFor, p.location);

    //   console.log( 'agentMove Fb.propertys child_added');
    //   // console.log(
    //   //   "child_add - psvm.matchedPropertys.size",
    //   //   p.matchedPropertys.size
    //   // );
    //   that.propertys.set(snapshot.key, p);
    // });

    // // Handle update
    // Fb.propertys.on("child_changed", snapshot => {
    //   var p = that.propertys.get(snapshot.key);
    //   p.restore(snapshot.val());
    //   that.propertys.set(snapshot.key, p);

    //   //                 const p = that.propertys.get( snapshot.key )
    //   //that.propertys.set( snapshot.key, { ...p, ...snapshot.val() });

    //   //                 that.propertys.set( snapshot.key, snapshot.val() );
    //   // console.log('that.propertys.size', that.propertys.size)
    // });

    // // Handle child_removed
    // Fb.propertys.on("child_removed", snapshot => {
    //   that.propertys.delete(snapshot.key);
    //   // console.log('that.propertys.size', that.propertys.size)
    // }); 


    // // Handle Own Propertys Child_added
    // //if ( Fb.app.propertysRef !== undefined ) {
    // Fb.app.agentsRef.on("child_added", snapshot => {
    //   console.log("fire", snapshot.val());
    //   var p = new Propertyhk();

    //   // restore can be imppletemt  deserialize
    //   p.restore(snapshot.val());
    //   //console.log( 'p', p)
    //   console.log("p.relatedFbid", p.relatedFbid);

    //   p.buildMatchProperty(snapshot.key, p.typeFor, p.location);

    //   console.log(
    //     "child_add - psvm.matchedPropertys.size",
    //     p.matchedPropertys.size
    //   );
    //   that.ownPropertys.set(snapshot.key, p);
    //   // Make sure delete whose, hab been answered!
    //   that.propertys.delete(p.relatedFbid);
    // });

    // Fb.app.agentsRef.on("child_changed", snapshot => {
    //   var p = that.ownPropertys.get(snapshot.key);
    //   p.restore(snapshot.val());
    //   that.ownPropertys.set(snapshot.key, p);

    //   // const p = that.ownPropertys.get( snapshot.key )
    //   // that.ownPropertys.set( snapshot.key, { ...p, ...snapshot.val() });

    //   //that.ownPropertys.set( snapshot.key, snapshot.val() );
    //   // console.log('that.propertys.size', that.propertys.size)
    // });

    // // Handle child_removed
    // Fb.app.agentsRef.on("child_removed", snapshot => {
    //   that.ownPropertys.delete(snapshot.key);
    //   //                that.propertys.delete( snapshot.key );
    //   // console.log('that.propertys.size', that.propertys.size)
    // });
  };

  add = name => {
    const id = Fb.app.agentsRef.push().key;
    this.update(id, name);
  };

  /**
   * @compareTo is name of variable e.g. name, price, location
   * @valueTo   is value equal to.  e.g. 'shatin'
   * return
   */
  getMatchProperty = (id, compareTo, valueTo) => {
    var that = this;
    console.log("match");

    //this.writeNewPost( 1233, 'gordon', 'picture', 'title', 'body')

    // Handle match propertys
    const addPromise = Fb.app.agentsRef
      .orderByChild(compareTo)
      .equalTo(valueTo)
      .on("child_added", function(snap) {
        Fb.app.matchedPropertysRef.child(snap.key).set(snap.val());
        //          Fb.app.propertysRef.update( { snap.key : { } })
        that.matchedPropertys.set(snap.key, snap.val());
        console.log("matchProperty.size", that.matchedPropertys.size);
      });

    const removePromise = Fb.app.agentsRef
      .orderByChild(compareTo)
      .equalTo(valueTo)
      .on("child_removed", function(snap) {
        that.matchedPropertys.delete(snap.key);
        console.log("matchProperty.size", that.matchedPropertys.size);
      });

      Promise.all([addPromise, removePromise]).then(function(results) {
        console.log( 'agentModelView getMatchProperty successful');
        return request;
      }, function( error ) { console.log( 'may be network problem') }).catch( error => {
        console.log( 'agentModelView getMatchProperty error', error );
      })

  };

  update = (id, name) => {
    Fb.app.agentsRef.update({ [id]: { name } }).catch( error => console.log( error ));
  };

  del = id => {
    Fb.app.agentsRef.child(id).remove().catch( error => console.log( error ));
    // Fb.propertys.child(id).remove();
    //this.propertys.delete( id );
  };

  @action
  clear = () => {
    this.propertys.clear();
    this.ownPropertys.clear();
  };
}

const agentModel = new AgentModelViewModel();
export { agentModel };
