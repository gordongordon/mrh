import React from 'react';
import { Modal, Toast , Carousel, WhiteSpace, WingBlank, Button } from 'antd-mobile';
//import { Generic } from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import {propertys} from 'userModelView';
import {ListOfMatchOldSalePropertys} from '../listOfMatch/listOfMatchOldSalePropertys';
import { SingleSaleUserMatchViewWrapper } from "../singlePropertyView/singleSaleUserMatchView";
import {observer } from "mobx-react";
//import {AgentBuyProperty as ItemView } from "react-simple-chatbot";
//import {AgentBuyProperty as ItemView } from "../mrui/AgentBuyProperty/AgentBuyProperty";
//import AgentBuyProperty from "../mrui/AgentBuyProperty/AgentBuyProperty";

import { AgentBuyProperty as ItemView } from "../mrui/AgentBuyProperty/AgentBuyProperty";
//const ItemView = AgentBuyProperty;
const prompt = Modal.prompt;

@observer
export default class SlickBuyProperty extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      data: ['', '', ''],
      initialHeight: 450,
        value: null,
      trigger: false
    };
    this.display = this.display.bind(this);
  }


  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }


  display( propertys, filter, inDirectCall ) {
    const list = propertys;
    
//    const p = this.props.property;
//    const f = this.props.filter;
    //const status = p.getStatus(f.fbid).get();

    // const status = property.getStatus(filter.fbid).get();
    // const fStatus = filter.getStatus(property.fbid).get();

    // Catched empty list, don't do anything!
    if (list.size === 0) {
      return <div>Waiting for respond ... </div>;
    }

    //const timeEnter = this.props.timeEnter;
    // Try to show most uptoday item only
    var element = [];
    //           <SingleSalePropertyForMatchView property={property} key={keyID} timeEnter={timeEnter}/>
    //           <SingleSaleAgentPropertyForRespondView property={property} key={keyID} timeEnter={timeEnter}/>

    var count = 0;
    list.forEach((property, keyID) => {
      //let status = inDirectCall.get( keyID);
//      let status = property.getStatus(filter.fbid).get();      
      const fStatus = filter.getStatus(property.fbid).get();
      const status = property.getStatus(filter.fbid).get();

      if ( count == 0 ) {
      element.push(
        <ItemView key={keyID}
          status={status}
          filter={filter}
          property={property}
          fStatus={fStatus}
          isFirst={true}
          isLast={false}
        />
      );      
    } else 
    {
  
      element.push(
        <ItemView key={keyID}
          status={status}
          filter={filter}
          property={property}
          fStatus={fStatus}
          isFirst={false}
          isLast={false}
          
        />
      );      

    }
    count++;
    });

  return (element);
  };

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    const keyID = this.props.keyID;  

    //filter={property} inDirectCall={property.inDirectCall} propertys={property.matchedPropertys}

    // Buy Property ID
    const property = propertys.propertys.get( keyID );
//    const property = propertys.propertys.get( '-Ktw-IOu3RDyKZybeB-A' );

    /**
     * make sure either matchProperty or responsedPropertys
     * in this case, we are matching agents reponsed property. 
     */
    const localpropertys = property.responsedPropertys;
    const filter = property;
    const inDirectCall = property.inDirectCall;    
    
    // Sell Property ID
    //const property = propertys.propertys.get( '-Kte6f8sOgZ0gsVWwv2k' );
    // return (
    //     <ListOfMatchOldSalePropertys filter={property} inDirectCall={property.inDirectCall} propertys={property.matchedPropertys}/>
    // )

    return (
        <Carousel
          className="my-carousel"
          autoplay={false}
          dots={true}
          selectedIndex={0}
          swipeSpeed={3}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
        {this.display(localpropertys, filter, inDirectCall)}
      </Carousel>

     );
  }
}

SlickBuyProperty.propTypes = {
  //steps: PropTypes.object,
  //triggerNextStep: PropTypes.func,
};

SlickBuyProperty.defaultProps = {
  //steps: undefined,
  //triggerNextStep: undefined,
};